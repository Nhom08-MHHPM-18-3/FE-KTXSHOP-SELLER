webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: theme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _component_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/layout/layout */ "./component/layout/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global.css */ "./pages/global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _component_loader_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/loader/loader */ "./component/loader/loader.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;










var menu = [{
  key: "PRODUCT-MENU",
  name: "Sản phẩm",
  required: "/cms/product",
  subMenu: [{
    key: "PRODUCT",
    name: "Danh sách sản phẩm",
    link: "/cms/product",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCubes"]
  }, {
    key: "CREATE_PRODUCT",
    name: "Thêm sản phẩm",
    link: "/cms/product/new",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusCircle"]
  }]
}, {
  key: "REVENUE",
  name: "Doanh thu",
  required: "/cms/revenue",
  subMenu: [{
    key: "VIEW-REVENUE",
    name: "Xem doanh thu",
    link: "/cms/revenue",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileInvoiceDollar"]
  }, {
    key: "PRODUCTS-UNPAID",
    name: "Sản phẩm sẽ thanh toán",
    link: "/cms/revenue/products-unpaid",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"]
  }, {
    key: "PRODUCTS-PAID",
    name: "Sản phẩm đã thanh toán",
    link: "/cms/revenue/products-paid",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingBasket"]
  }, {
    key: "REVENUE-MANAGEMENT",
    name: "Quản lý doanh thu",
    link: "/cms/revenue/revenue-management",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMoneyCheck"]
  }]
}, {
  key: "DELIVERY",
  name: "Giao hàng",
  required: "/cms/shipper",
  subMenu: [{
    key: "SHIPPING",
    name: "Trạng thái giao hàng",
    link: "/cms/shipper/shipping",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShippingFast"]
  }, {
    key: "ORDER-STATUS",
    name: "Trạng thái đơn hàng",
    link: "/cms/shipper/order-status",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBorderAll"]
  }]
}, {
  key: "FUNCTION-ORTHER",
  name: "Chức năng khác",
  subMenu: [{
    key: "PINCODE",
    name: "Pin code",
    link: "/cms/func-orther/pin-code",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCog"]
  }, {
    key: "WAREHOUSE",
    name: "Quản lý kho",
    link: "/cms/func-orther/warehouse",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWarehouse"]
  }]
}];
var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#00b46e",
      dark: "#00a45e",
      contrastText: "#fff"
    }
  }
});
function App(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(true),
      _React$useState2 = Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      showLoader = _React$useState2[0],
      setShowLoader = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(true),
      _React$useState4 = Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      showLoaderText = _React$useState4[0],
      setShowLoaderText = _React$useState4[1]; // do once


  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    // setup first loading
    setTimeout(function () {
      setShowLoaderText(false);
      setShowLoader(false);
    }, 500); // setup loading when navigate

    return Object(_component_loader_loader__WEBPACK_IMPORTED_MODULE_10__["setupLoading"])(router, setShowLoader);
  }, []);
  var Component = props.Component,
      pageProps = props.pageProps;
  pageProps.loggedInUserInfo = loca;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
    rel: "stylesheet",
    integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  })), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
    integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }), __jsx(_component_layout_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _global_css__WEBPACK_IMPORTED_MODULE_9___default.a.blank,
    loggedInUserInfo: pageProps.loggedInUserInfo,
    menu: menu,
    title: "KTXSHOP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx(Component, Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }))), __jsx(_component_loader_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showLoader,
    showText: showLoaderText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }));
}

_s(App, "+F7UvGWpwgMBVDdxy1rtKZnH1dw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = App;

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJtZW51Iiwia2V5IiwibmFtZSIsInJlcXVpcmVkIiwic3ViTWVudSIsImxpbmsiLCJpY29uIiwiZmFDdWJlcyIsImZhUGx1c0NpcmNsZSIsImZhRmlsZUludm9pY2VEb2xsYXIiLCJmYVNob3BwaW5nQ2FydCIsImZhU2hvcHBpbmdCYXNrZXQiLCJmYU1vbmV5Q2hlY2siLCJmYVNoaXBwaW5nRmFzdCIsImZhQm9yZGVyQWxsIiwiZmFDb2ciLCJmYVdhcmVob3VzZSIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrIiwiY29udHJhc3RUZXh0IiwiQXBwIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwic2hvd0xvYWRlciIsInNldFNob3dMb2FkZXIiLCJzaG93TG9hZGVyVGV4dCIsInNldFNob3dMb2FkZXJUZXh0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInNldHVwTG9hZGluZyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvZ2dlZEluVXNlckluZm8iLCJsb2NhIiwic3R5bGVzIiwiYmxhbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsS0FBRyxFQUFFLGNBRFA7QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsVUFBUSxFQUFFLGNBSFo7QUFJRUMsU0FBTyxFQUFFLENBQ1A7QUFDRUgsT0FBRyxFQUFFLFNBRFA7QUFFRUMsUUFBSSxFQUFFLG9CQUZSO0FBR0VHLFFBQUksRUFBRSxjQUhSO0FBSUVDLFFBQUksRUFBRUMseUVBQU9BO0FBSmYsR0FETyxFQU9QO0FBQ0VOLE9BQUcsRUFB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O0FBQUE7QUFBQTtBQUFBLElBdkJGLENBREY7QUEyQkQ7O0dBaER1QlIsRztVQUNQRyxxRDs7O0tBRE9ILEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42ZWMyYzU2ODcxNDk0NTYzZjQ0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmFOZXdzcGFwZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcbmltcG9ydCB7XG4gIGZhQ3ViZXMsXG4gIGZhUGx1c0NpcmNsZSxcbiAgZmFGaWxlSW52b2ljZURvbGxhcixcbiAgZmFTaG9wcGluZ0Jhc2tldCxcbiAgZmFTaG9wcGluZ0NhcnQsXG4gIGZhV2FyZWhvdXNlLFxuICBmYU1vbmV5Q2hlY2ssXG4gIGZhQ29nLFxuICBmYVNoaXBwaW5nRmFzdCxcbiAgZmFCb3JkZXJBbGwsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7XG4gIEJhY2tkcm9wLFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBjcmVhdGVNdWlUaGVtZSxcbiAgVGhlbWVQcm92aWRlcixcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvbGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dsb2JhbC5jc3NcIjtcbmltcG9ydCBMb2FkZXIsIHsgc2V0dXBMb2FkaW5nIH0gZnJvbSBcIi4uL2NvbXBvbmVudC9sb2FkZXIvbG9hZGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IG1lbnUgPSBbXG4gIHtcbiAgICBrZXk6IFwiUFJPRFVDVC1NRU5VXCIsXG4gICAgbmFtZTogXCJT4bqjbiBwaOG6qW1cIixcbiAgICByZXF1aXJlZDogXCIvY21zL3Byb2R1Y3RcIixcbiAgICBzdWJNZW51OiBbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJQUk9EVUNUXCIsXG4gICAgICAgIG5hbWU6IFwiRGFuaCBzw6FjaCBz4bqjbiBwaOG6qW1cIixcbiAgICAgICAgbGluazogXCIvY21zL3Byb2R1Y3RcIixcbiAgICAgICAgaWNvbjogZmFDdWJlcyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJDUkVBVEVfUFJPRFVDVFwiLFxuICAgICAgICBuYW1lOiBcIlRow6ptIHPhuqNuIHBo4bqpbVwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvcHJvZHVjdC9uZXdcIixcbiAgICAgICAgaWNvbjogZmFQbHVzQ2lyY2xlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAga2V5OiBcIlJFVkVOVUVcIixcbiAgICBuYW1lOiBcIkRvYW5oIHRodVwiLFxuICAgIHJlcXVpcmVkOiBcIi9jbXMvcmV2ZW51ZVwiLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlZJRVctUkVWRU5VRVwiLFxuICAgICAgICBuYW1lOiBcIlhlbSBkb2FuaCB0aHVcIixcbiAgICAgICAgbGluazogXCIvY21zL3JldmVudWVcIixcbiAgICAgICAgaWNvbjogZmFGaWxlSW52b2ljZURvbGxhcixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJQUk9EVUNUUy1VTlBBSURcIixcbiAgICAgICAgbmFtZTogXCJT4bqjbiBwaOG6qW0gc+G6vSB0aGFuaCB0b8OhblwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvcmV2ZW51ZS9wcm9kdWN0cy11bnBhaWRcIixcbiAgICAgICAgaWNvbjogZmFTaG9wcGluZ0NhcnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiUFJPRFVDVFMtUEFJRFwiLFxuICAgICAgICBuYW1lOiBcIlPhuqNuIHBo4bqpbSDEkcOjIHRoYW5oIHRvw6FuXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9yZXZlbnVlL3Byb2R1Y3RzLXBhaWRcIixcbiAgICAgICAgaWNvbjogZmFTaG9wcGluZ0Jhc2tldCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJSRVZFTlVFLU1BTkFHRU1FTlRcIixcbiAgICAgICAgbmFtZTogXCJRdeG6o24gbMO9IGRvYW5oIHRodVwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvcmV2ZW51ZS9yZXZlbnVlLW1hbmFnZW1lbnRcIixcbiAgICAgICAgaWNvbjogZmFNb25leUNoZWNrLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAga2V5OiBcIkRFTElWRVJZXCIsXG4gICAgbmFtZTogXCJHaWFvIGjDoG5nXCIsXG4gICAgcmVxdWlyZWQ6IFwiL2Ntcy9zaGlwcGVyXCIsXG4gICAgc3ViTWVudTogW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiU0hJUFBJTkdcIixcbiAgICAgICAgbmFtZTogXCJUcuG6oW5nIHRow6FpIGdpYW8gaMOgbmdcIixcbiAgICAgICAgbGluazogXCIvY21zL3NoaXBwZXIvc2hpcHBpbmdcIixcbiAgICAgICAgaWNvbjogZmFTaGlwcGluZ0Zhc3QsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiT1JERVItU1RBVFVTXCIsXG4gICAgICAgIG5hbWU6IFwiVHLhuqFuZyB0aMOhaSDEkcahbiBow6BuZ1wiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvc2hpcHBlci9vcmRlci1zdGF0dXNcIixcbiAgICAgICAgaWNvbjogZmFCb3JkZXJBbGwsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiRlVOQ1RJT04tT1JUSEVSXCIsXG4gICAgbmFtZTogXCJDaOG7qWMgbsSDbmcga2jDoWNcIixcbiAgICBzdWJNZW51OiBbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJQSU5DT0RFXCIsXG4gICAgICAgIG5hbWU6IFwiUGluIGNvZGVcIixcbiAgICAgICAgbGluazogXCIvY21zL2Z1bmMtb3J0aGVyL3Bpbi1jb2RlXCIsXG4gICAgICAgIGljb246IGZhQ29nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIldBUkVIT1VTRVwiLFxuICAgICAgICBuYW1lOiBcIlF14bqjbiBsw70ga2hvXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9mdW5jLW9ydGhlci93YXJlaG91c2VcIixcbiAgICAgICAgaWNvbjogZmFXYXJlaG91c2UsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgdmFyIHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogXCIjMDBiNDZlXCIsXG4gICAgICBkYXJrOiBcIiMwMGE0NWVcIixcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjZmZmXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzaG93TG9hZGVyLCBzZXRTaG93TG9hZGVyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2hvd0xvYWRlclRleHQsIHNldFNob3dMb2FkZXJUZXh0XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIGRvIG9uY2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZXR1cCBmaXJzdCBsb2FkaW5nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TG9hZGVyVGV4dChmYWxzZSk7XG4gICAgICBzZXRTaG93TG9hZGVyKGZhbHNlKTtcbiAgICB9LCA1MDApO1xuXG4gICAgLy8gc2V0dXAgbG9hZGluZyB3aGVuIG5hdmlnYXRlXG4gICAgcmV0dXJuIHNldHVwTG9hZGluZyhyb3V0ZXIsIHNldFNob3dMb2FkZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cbiAgcGFnZVByb3BzLmxvZ2dlZEluVXNlckluZm8gPSBsb2NhXG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtMUJtRTRrV0JxNzhpWWhGbGR2S3VoZlRBVTZhdVU4dFQ5NFdySGZ0akRickNFWFNVMW9Cb3F5bDJRdlo2aklXM1wiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNjcmlwdFxuICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanNcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtUUpIdHZHaG1yOVhPSXBJNllWdXRHKzJRT0s5VCtabk40a3pGTjFSdEszekVGRUlzeGhsbVdsNS9ZRVN2cFoxM1wiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPExheW91dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ibGFua31cbiAgICAgICAgbG9nZ2VkSW5Vc2VySW5mbz17cGFnZVByb3BzLmxvZ2dlZEluVXNlckluZm99XG4gICAgICAgIG1lbnU9e21lbnV9XG4gICAgICAgIHRpdGxlPVwiS1RYU0hPUFwiXG4gICAgICA+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPExvYWRlciBzaG93PXtzaG93TG9hZGVyfSBzaG93VGV4dD17c2hvd0xvYWRlclRleHR9PjwvTG9hZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=