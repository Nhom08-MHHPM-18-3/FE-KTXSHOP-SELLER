import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faCubes,
  faPlusCircle,
  faFileInvoiceDollar,
  faShoppingBasket,
  faShoppingCart,
  faWarehouse,
  faMoneyCheck,
  faCog,
  faShippingFast,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import {
  Backdrop,
  CircularProgress,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../component/layout/layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./global.css";
import Loader, { setupLoading } from "../component/loader/loader";
import Head from "next/head";

const menu = [
  {
    key: "PRODUCT-MENU",
    name: "Sản phẩm",
    required: "/cms/product",
    subMenu: [
      {
        key: "PRODUCT",
        name: "Danh sách sản phẩm",
        link: "/cms/product",
        icon: faCubes,
      },
      {
        key: "CREATE_PRODUCT",
        name: "Thêm sản phẩm",
        link: "/cms/product/new",
        icon: faPlusCircle,
      },
    ],
  },
  {
    key: "REVENUE",
    name: "Doanh thu",
    required: "/cms/revenue",
    subMenu: [
      {
        key: "VIEW-REVENUE",
        name: "Xem doanh thu",
        link: "/cms/revenue",
        icon: faFileInvoiceDollar,
      },
      {
        key: "PRODUCTS-UNPAID",
        name: "Sản phẩm sẽ thanh toán",
        link: "/cms/revenue/products-unpaid",
        icon: faShoppingCart,
      },
      {
        key: "PRODUCTS-PAID",
        name: "Sản phẩm đã thanh toán",
        link: "/cms/revenue/products-paid",
        icon: faShoppingBasket,
      },
      {
        key: "REVENUE-MANAGEMENT",
        name: "Quản lý doanh thu",
        link: "/cms/revenue/revenue-management",
        icon: faMoneyCheck,
      },
    ],
  },
  {
    key: "DELIVERY",
    name: "Giao hàng",
    required: "/cms/shipper",
    subMenu: [
      {
        key: "SHIPPING",
        name: "Trạng thái giao hàng",
        link: "/cms/shipper/shipping",
        icon: faShippingFast,
      },
      {
        key: "ORDER-STATUS",
        name: "Trạng thái đơn hàng",
        link: "/cms/shipper/order-status",
        icon: faBorderAll,
      },
    ],
  },
  {
    key: "FUNCTION-ORTHER",
    name: "Chức năng khác",
    subMenu: [
      {
        key: "PINCODE",
        name: "Pin code",
        link: "/cms/func-orther/pin-code",
        icon: faCog,
      },
      {
        key: "WAREHOUSE",
        name: "Quản lý kho",
        link: "/cms/func-orther/warehouse",
        icon: faWarehouse,
      },
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
  const [showLoader, setShowLoader] = React.useState(true);
  const [showLoaderText, setShowLoaderText] = React.useState(true);

  // do once
  useEffect(() => {
    // setup first loading
    setTimeout(() => {
      setShowLoaderText(false);
      setShowLoader(false);
    }, 500);

    // setup loading when navigate
    return setupLoading(router, setShowLoader);
  }, []);
  const { Component, pageProps } = props;

  // if (pageProps.loggedIn) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"
      ></script>
      <CssBaseline />
      <Layout
        className={styles.blank}
        loggedInUserInfo={pageProps.loggedInUserInfo}
        menu={menu}
        title="KTXSHOP"
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
