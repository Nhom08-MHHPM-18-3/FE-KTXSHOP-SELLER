import styles from "./sidebar.module.css"
import React, { useContext, useEffect } from 'react';
import { faBook, faChartPie, faHandHoldingUsd, faIndustry, faPhone, faStore, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from "../component/my-context/my-context";
import { acceptedScreenPath } from './../lib/login';

const menuItem = [
    {
        key: "HRM",
        name: "Tài khoản & phân quyền",
        link: "/hrm",
        icon: faUsers,
        autoDisplay: true
    },
    {
        key: "CMS",
        name: "Sản phẩm & cài đặt",
        link: "/cms",
        icon: faBook
    },
    {
        key: "CRM",
        name: "Khách hàng & đơn hàng",
        link: "/crm",
        icon: faHandHoldingUsd
    },
    {
        key: "INTERNAL_SELLER",
        name: "Nhà bán hàng nội bộ",
        link: "/internal-seller",
        icon: faIndustry
    },
    {
        key: "SELLER",
        name: "Quản lý nhà bán hàng",
        link: "/seller",
        icon: faStore
    },
    {
        key: "CS",
        name: "Hỗ trợ khách hàng",
        link: "/cs",
        icon: faPhone
    },
    {
        key: "WMS",
        name: "Vận hành kho",
        link: "/wms",
        icon: faWarehouse
    },
    {
        key: "REPORT",
        name: "Báo cáo số liệu",
        link: "/report",
        icon: faChartPie
    }
]


function SidebarItem(props) {
    let [active, setActive] = React.useState(props.active)
    useEffect(() => {
        setActive(props.active)
    }, [props.active])
    const data = props.item
    return (
        <li className={active ? styles.menuItemActive : styles.menuItem} key={data.key}>
            <a href={data.link} target="_blank">
                <FontAwesomeIcon icon={data.icon} className={styles.menuIcon} /> {data.name}
            </a>
        </li>
    )
}

//
const Sidebar = React.forwardRef((props, ref) => {
    let [active, setActive] = React.useState(false)
    const { loggedInUserInfo } = useContext(UserContext);
    ref.current = {
        setActive: setActive
    }
    return (
        <div className={active ? styles.sideMenuActive : styles.sideMenu}>
            <div className={styles.menuOverlay} onClick={() => setActive(false)}></div>
            <div className={styles.menuBody}>
                <div className={styles.mainMenu}>
                    <ul className={styles.menuList}>
                        {
                            menuItem.map((item) => {
                                if (item.autoDisplay) {
                                    return <SidebarItem item={item} key={item.key} />
                                }

                                if (acceptedScreenPath(loggedInUserInfo, item.link)) {
                                    return <SidebarItem item={item} key={item.key} />
                                }
                                return ""
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
})

export default Sidebar