import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faAtom,
  faCapsules,
  faClock,
  faComment,
  faCommentDollar,
  faCube,
  faCubes,
  faFlag,
  faHistory,
  faIndustry,
  faListAlt,
  faMapMarked,
  faMoneyCheckAlt,
  faPodcast,
  faRocket,
  faSquareRootAlt,
  faTag,
  faTruck,
  faVideo,
  faVideoSlash
} from "@fortawesome/free-solid-svg-icons";
import {
  Backdrop,
  CircularProgress,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../component/layout/layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./global.css";
import Loader, { setupLoading } from "../component/loader/loader";

const menu = [
  {
    key: "PRODUCT-MENU",
    name: "Sản phẩm",
    required: "/cms/product",
    subMenu: [
      {
        key: "PRODUCT",
        name: "Sản phẩm",
        link: "/cms/product",
        icon: faCubes,
      },
      {
        key: "CATEGORY",
        name: "Danh mục",
        link: "/cms/category",
        icon: faCubes,
      },
      {
        key: "PRODUCER",
        name: "Nhà sản xuất",
        link: "/cms/manufacturer",
        icon: faIndustry,
      },
      {
        key: "INGREDIENT",
        name: "Hoạt chất",
        link: "/cms/ingredient",
        icon: faAtom,
      }
    ]
  },
  {
    key: "REGION",
    name: "Khu vực",
    link: "/cms/region",
    icon: faMapMarked,
  },
  {
    key: "FEE",
    name: "Cài đặt phí",
    required: "/cms/fee",
    subMenu: [
      {
        key: "FEE",
        name: "Công thức phí",
        link: "/cms/fee",
        icon: faSquareRootAlt
      },
      {
        key: "CONFIGPRICING",
        name: "Hệ số phí",
        link: "/cms/pricing",
        icon: faCommentDollar
      },
      {
        key: "DELIVERYFEE",
        name: "Phí vận chuyển",
        link: "/cms/delivery-fee",
        icon: faTruck
      },
      {
        key: "PAYMENTFEE",
        name: "Phí thanh toán",
        link: "/cms/payment-fee",
        icon: faMoneyCheckAlt
      },
      {
        key: "FEE_HISTORY",
        name: "Lịch sử cài đặt giá",
        link: "/cms/fee/history",
        icon: faHistory
      },
    ],
  },
  {
    key: "DELIVERY",
    name: "Giao hàng",
    required: "/cms/delivery/time",
    subMenu: [
      {
        key: "DELIVERY",
        name: "Thời gian giao hàng",
        link: "/cms/delivery/time",
        icon: faClock
      },
    ],
  },
  {
    key: "SETTING",
    name: "Hiển thị",
    subMenu: [
      {
        key: "CONFIG_TAB",
        name: "Tab",
        link: "/cms/tab",
        icon: faListAlt
      },
      {
        key: "TAG",
        name: "Tag",
        link: "/cms/tag",
        icon: faTag
      },
      {
        key: "MARKETING_POPUP",
        name: "Popup",
        link: "/cms/popup",
        icon: faComment
      },
      {
        key: "SETTING_BANNER",
        name: "Banner",
        link: "/cms/banner",
        icon: faFlag
      },
      {
        key: "POST_CONTENT",
        name: "Bài đăng sản phẩm",
        link: "/cms/post",
        icon: faNewspaper
      }
    ],
  },
];

export var theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00b46e",
      dark: "#00a45e",
      contrastText: "#fff",
    },
  },
});

export default function App(props) {
  const router = useRouter();
  const [showLoader, setShowLoader] = React.useState(true)
  const [showLoaderText, setShowLoaderText] = React.useState(true)

  // do once
  useEffect(() => {

    // setup first loading
    setTimeout(() => {
      setShowLoaderText(false)
      setShowLoader(false)
    }, 500)

    // setup loading when navigate
    return setupLoading(router, setShowLoader)
  }, [])
  const { Component, pageProps } = props;

  // if (pageProps.loggedIn) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout
        className={styles.blank}
        loggedInUserInfo={pageProps.loggedInUserInfo}
        menu={menu}
        title="CMS"
      >
        <Component {...pageProps} />
      </Layout>
      <Loader show={showLoader} showText={showLoaderText}></Loader>
    </ThemeProvider>
  );
  // } else {
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <Component {...pageProps} />
  //     </ThemeProvider>
  //   );
  // }
}
