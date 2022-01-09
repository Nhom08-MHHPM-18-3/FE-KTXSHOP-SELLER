import styles from "./header.module.css"
import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import { AccountCircle } from "@material-ui/icons";
import { useRouter } from "next/router";
import { doLogout } from "../../lib/login";
import Link from 'next/link';
import UserContext from "../my-context/my-context";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { acceptedScreenPath } from '../../lib/login';


function HeaderMenuItem(props) {
    const data = props.item
    return (
        <Box className={styles.menuItemWrapper}

        >
            { data.link ? <Link href={data.link} prefetch={false}>
                <a className={styles.menuItem}>
                    <span>{data.name}</span>
                </a>
            </Link> : <Box className={styles.menuItem}>
                    {data.name}
                </Box>}
            {
                data.subMenu && <Box className={styles.subMenu}>
                    {
                        data.subMenu.map((subMenuItem) =>
                            <Link href={subMenuItem.link} key={subMenuItem.key}>
                                <a className={styles.subMenuItem}>
                                    {subMenuItem.icon && <FontAwesomeIcon icon={subMenuItem.icon} className={styles.menuIcon} />}
                                    {subMenuItem.name}</a>
                            </Link>)

                    }
                </Box>
            }
        </Box>
    )
}

function filterSubMenu(subMenu, loggedInUserInfo) {
    let result = []
    subMenu.forEach(subItem => {
        // if (subItem.link && acceptedScreenPath(loggedInUserInfo, subItem.link)) {
        result.push(subItem)
        // }
    })

    return result
}

export default function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter()
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { loggedInUserInfo } = React.useContext(UserContext);

    // filter menu
    const [topMenuList, setTopMenuList] = React.useState([])
    useEffect(() => {
        let topMenu = []
        props.menu.forEach((menuItem) => {
            let allow = false
            if (!menuItem.link && !menuItem.required) {
                allow = true
            } else {
                // if (acceptedScreenPath(loggedInUserInfo, menuItem.link || menuItem.required)) {
                allow = true
                // }
            }

            // if allow this top menu
            if (allow) {
                topMenu.push(menuItem)
                if (menuItem.subMenu && menuItem.subMenu.length) {
                    menuItem.subMenu = filterSubMenu(menuItem.subMenu, loggedInUserInfo)
                }
            }
        })
        setTopMenuList(topMenu)
    }, [])


    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <div style={{ "display": "flex", }} >
                    <IconButton edge="start" className={styles.menuBtn} color="inherit"
                        aria-label="menu"
                        onClick={() => {
                            props.sidebar.current.setActive(true) // open sidebar
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className={styles.title}>
                        {props.title}
                    </Box>
                    <Box>
                        {
                            topMenuList.map((menuItem) => <HeaderMenuItem item={menuItem} key={menuItem.key} />)
                        }
                    </Box>
                </div>
                <div>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {
                            handleClose()
                            router.push("/profile")
                        }}>Tài khoản cá nhân</MenuItem>
                        <MenuItem onClick={async () => {
                            await doLogout()
                            if (typeof window != 'undefined') {
                                window.location.href = "/login"
                            } else {
                                router.push("/login")
                            }
                        }}>Đăng xuất</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>


    )
}