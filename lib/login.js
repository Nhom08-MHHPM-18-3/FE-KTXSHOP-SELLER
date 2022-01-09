/*
This function return a session string by parsing cookie value of incoming request.
 */
import { useRouter } from "next/router";
import { APIStatus } from "./common";

export function getSessionToken(ctx, cookieName) {
    cookieName = cookieName || "session_token"
    let sessionStr = ctx.req && ctx.req.headers.cookie
    let session = undefined
    if (sessionStr) {
        sessionStr.split(";").forEach((cookie) => {
            let i = cookie.indexOf("=")
            let name = cookie.substr(0, i).trim()
            let value = cookie.substr(i + 1).trim()
            if (name == cookieName) {
                session = value
                return false
            }
        })
    }
    return session
}

async function getLoggedUserInfo(ctx) {
    let session = getSessionToken(ctx)

    // if there is not cookie with "session_token" name
    let res = ctx.res
    if (!session || session === "deleted") {
        session = getSessionToken(ctx, "remember_me")
        if (!session || session === "deleted") {
            res.setHeader("location", "/login?url=" + escape(ctx.req.url));
            res.statusCode = 302;
            res.end();
            return { props: { loggedIn: false } }
        }

        res.setHeader("set-cookie", `session_token=${session}; Path=/; HttpOnly`)
    }

    // if there is value
    let req = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${session}`,
            "User-Agent": ctx.req.headers['user-agent'],
            'X-Forwarded-For': ctx.req.headers['x-forwarded-for']
        }
    }
    let url = process.env.API_HOST + "/core/account/v1/me?getPermissions=true"
    return await fetch(url, req)
}

/**
 * This function is used by injecting to getServerSideProps of pages.
 * @param ctx
 * @param callback
 * @returns {Promise<*|{props: {loggedIn: boolean}}>}
 */
export async function doWithLoggedInUser(ctx, callback) {
    // let result = await getLoggedUserInfo(ctx)
    // let userInfo = await result.json()

    // // must get user info successful before do anything else
    // // console.log(userInfo)
    // if (userInfo.status !== APIStatus.OK) {
    //     return { props: { loggedIn: false } }
    // }

    // // check temp password
    // let source = userInfo.data[0]
    // let account = source.account

    // if (!ctx.req.url.startsWith('/profile') && account.isTempPassword) {
    //     if (typeof window === "undefined") {
    //         let res = ctx.res
    //         res.setHeader("location", "/profile");
    //         res.statusCode = 302;
    //         res.end();
    //     }
    //     return { props: { loggedIn: true, loggedInUserInfo: source } }
    // }

    let result = callback(ctx)
    // // wait for page promise
    if (result && result instanceof Promise) {
        result = await result
    }

    // // set loggedIn = true if is is undefined
    result = result || {}
    result.props = result.props || {}
    // result.props.loggedInUserInfo = userInfo.data[0]
    // if (typeof result.props.loggedIn == "undefined") {
    result.props.loggedIn = true
    // }
    return result
}

/**
 * This function is used by injecting to render function of pages.
 * @param props
 * @param callback
 * @returns {null|*}
 */
export function renderWithLoggedInUser(props, callback) {

    let router = useRouter()

    // if logged in
    if (props.loggedIn !== false) {
        // validate permissions
        let source = props.loggedInUserInfo
        if (source) {
            // check temp password
            if (!router.asPath.startsWith("/profile")
                && source.account && source.account.isTempPassword) {
                if (typeof window != "undefined") {
                    window.location.href = "/profile"
                }

                return callback(props)
            }


        }

        return callback(props) || null
    }

    // if not
    else {



        // do hard redirect to /login
        if (typeof window != "undefined") {
            window.location.href = "/login?url=" + router.asPath
        }
    }

    return null
}

/**
 * 
 */
export async function doLogout() {
    return await fetch("/backend/core/account/v1/logout", {
        method: "PUT"
    })
}


function comparePath(input, permission) {
    if (permission.startsWith("=")) {
        if (input === permission.substr(1)) {
            return true
        }
    } else if (input.startsWith(permission)) {
        return true
    }
    return false
}

export function acceptedScreenPath(userInfo, path) {
    if (!userInfo) {
        return false
    }
    if (path == "/" || path == "/profile") {
        return true
    }
    let screens = userInfo.screens
    let userRoles = userInfo.userRoles
    let accepted = false
    if (screens) {
        for (let i = 0; i < screens.length; i++) {
            if (screens[i].indexOf(":departmentCode") >= 0) {
                for (let j = 0; userRoles && j < userRoles.length; j++) {
                    let normalizedPath = screens[i].replace(":departmentCode", userRoles[j].departmentCode)
                    if (comparePath(path, normalizedPath)) {
                        accepted = true
                        break
                    }
                }
            } else {
                if (comparePath(path, screens[i])) {
                    accepted = true
                    break
                }
            }


        }
    }
    return accepted
}

