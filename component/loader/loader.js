import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import styles from './loader.module.css'

export default function Loader(props) {

    const [show, setShow] = React.useState(props.show)
    const [showText, setShowText] = React.useState(props.showText)

    // listen props
    useEffect(() => {
        setShow(props.show)
    }, [props.show])

    useEffect(() => {
        setShowText(props.showText)
    }, [props.showText])

    return (
        <div className={styles.loaderScreen + (show ? "" : " " + styles.hidden) + (showText ? "" : " " + styles.softLoading)}>
            <div>
                <CircularProgress size={60} thickness={6} />
            </div>
            { showText && <div>
                Đang vào hệ thống ...
            </div>}
        </div>
    )
}


var loadTime
export function setupLoading(router, setShowLoader) {
    let routeChangeStart = () => {
        loadTime = +new Date()
        setShowLoader(true);
    }
    let routeChangeComplete = () => {
        let diff = +new Date() - loadTime
        if (diff < 400) {
            setTimeout(() => { setShowLoader(false); }, 400 - diff)
        } else {
            setShowLoader(false);
        }
    }

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);

    return () => {
        router.events.off("routeChangeStart", routeChangeStart);
        router.events.off("routeChangeComplete", routeChangeComplete);
        router.events.off("routeChangeError", routeChangeComplete);
    }
}
