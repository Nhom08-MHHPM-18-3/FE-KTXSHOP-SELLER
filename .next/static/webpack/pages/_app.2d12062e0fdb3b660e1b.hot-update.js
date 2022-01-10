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
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
      lineNumber: 150,
      columnNumber: 9
    }
  })), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
    integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx(Component, Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }))), __jsx(_component_loader_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showLoader,
    showText: showLoaderText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJtZW51Iiwia2V5IiwibmFtZSIsInJlcXVpcmVkIiwic3ViTWVudSIsImxpbmsiLCJpY29uIiwiZmFDdWJlcyIsImZhUGx1c0NpcmNsZSIsImZhRmlsZUludm9pY2VEb2xsYXIiLCJmYVNob3BwaW5nQ2FydCIsImZhU2hvcHBpbmdCYXNrZXQiLCJmYU1vbmV5Q2hlY2siLCJmYVNoaXBwaW5nRmFzdCIsImZhQm9yZGVyQWxsIiwiZmFDb2ciLCJmYVdhcmVob3VzZSIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrIiwiY29udHJhc3RUZXh0IiwiQXBwIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwic2hvd0xvYWRlciIsInNldFNob3dMb2FkZXIiLCJzaG93TG9hZGVyVGV4dCIsInNldFNob3dMb2FkZXJUZXh0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInNldHVwTG9hZGluZyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0eWxlcyIsImJsYW5rIiwibG9nZ2VkSW5Vc2VySW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxLQUFHLEVBQUUsY0FEUDtBQUVFQyxNQUFJLEVBQUUsVUFGUjtBQUdFQyxVQUFRLEVBQUUsY0FIWjtBQUlFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFSCxPQUFHLEVBQUUsU0FEUDtBQUVFQyxRQUFJLEVBQUUsb0JBRlI7QUFHRUcsUUFBSSxFQUFFLGNBSFI7QUFJRUMsUUFBSSxFQUFFQyx5RUFBT0E7QUFKZixHQURPLEVBT1A7QUFDRU4sT0FBRyxFQUFFLGdCQURQ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O1VBQ1BHLHFEOzs7S0FET0gsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJkMTIwNjJlMGZkYjNiNjYwZTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYU5ld3NwYXBlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHtcbiAgZmFDdWJlcyxcbiAgZmFQbHVzQ2lyY2xlLFxuICBmYUZpbGVJbnZvaWNlRG9sbGFyLFxuICBmYVNob3BwaW5nQmFza2V0LFxuICBmYVNob3BwaW5nQ2FydCxcbiAgZmFXYXJlaG91c2UsXG4gIGZhTW9uZXlDaGVjayxcbiAgZmFDb2csXG4gIGZhU2hpcHBpbmdGYXN0LFxuICBmYUJvcmRlckFsbCxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHtcbiAgQmFja2Ryb3AsXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG4gIGNyZWF0ZU11aVRoZW1lLFxuICBUaGVtZVByb3ZpZGVyLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9sYXlvdXQvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IExvYWRlciwgeyBzZXR1cExvYWRpbmcgfSBmcm9tIFwiLi4vY29tcG9uZW50L2xvYWRlci9sb2FkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgbWVudSA9IFtcbiAge1xuICAgIGtleTogXCJQUk9EVUNULU1FTlVcIixcbiAgICBuYW1lOiBcIlPhuqNuIHBo4bqpbVwiLFxuICAgIHJlcXVpcmVkOiBcIi9jbXMvcHJvZHVjdFwiLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlBST0RVQ1RcIixcbiAgICAgICAgbmFtZTogXCJEYW5oIHPDoWNoIHPhuqNuIHBo4bqpbVwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvcHJvZHVjdFwiLFxuICAgICAgICBpY29uOiBmYUN1YmVzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkNSRUFURV9QUk9EVUNUXCIsXG4gICAgICAgIG5hbWU6IFwiVGjDqm0gc+G6o24gcGjhuqltXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9wcm9kdWN0L25ld1wiLFxuICAgICAgICBpY29uOiBmYVBsdXNDaXJjbGUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiUkVWRU5VRVwiLFxuICAgIG5hbWU6IFwiRG9hbmggdGh1XCIsXG4gICAgcmVxdWlyZWQ6IFwiL2Ntcy9yZXZlbnVlXCIsXG4gICAgc3ViTWVudTogW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiVklFVy1SRVZFTlVFXCIsXG4gICAgICAgIG5hbWU6IFwiWGVtIGRvYW5oIHRodVwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvcmV2ZW51ZVwiLFxuICAgICAgICBpY29uOiBmYUZpbGVJbnZvaWNlRG9sbGFyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlBST0RVQ1RTLVVOUEFJRFwiLFxuICAgICAgICBuYW1lOiBcIlPhuqNuIHBo4bqpbSBz4bq9IHRoYW5oIHRvw6FuXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9yZXZlbnVlL3Byb2R1Y3RzLXVucGFpZFwiLFxuICAgICAgICBpY29uOiBmYVNob3BwaW5nQ2FydCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJQUk9EVUNUUy1QQUlEXCIsXG4gICAgICAgIG5hbWU6IFwiU+G6o24gcGjhuqltIMSRw6MgdGhhbmggdG/DoW5cIixcbiAgICAgICAgbGluazogXCIvY21zL3JldmVudWUvcHJvZHVjdHMtcGFpZFwiLFxuICAgICAgICBpY29uOiBmYVNob3BwaW5nQmFza2V0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlJFVkVOVUUtTUFOQUdFTUVOVFwiLFxuICAgICAgICBuYW1lOiBcIlF14bqjbiBsw70gZG9hbmggdGh1XCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9yZXZlbnVlL3JldmVudWUtbWFuYWdlbWVudFwiLFxuICAgICAgICBpY29uOiBmYU1vbmV5Q2hlY2ssXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiREVMSVZFUllcIixcbiAgICBuYW1lOiBcIkdpYW8gaMOgbmdcIixcbiAgICByZXF1aXJlZDogXCIvY21zL3NoaXBwZXJcIixcbiAgICBzdWJNZW51OiBbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJTSElQUElOR1wiLFxuICAgICAgICBuYW1lOiBcIlRy4bqhbmcgdGjDoWkgZ2lhbyBow6BuZ1wiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvc2hpcHBlci9zaGlwcGluZ1wiLFxuICAgICAgICBpY29uOiBmYVNoaXBwaW5nRmFzdCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJPUkRFUi1TVEFUVVNcIixcbiAgICAgICAgbmFtZTogXCJUcuG6oW5nIHRow6FpIMSRxqFuIGjDoG5nXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9zaGlwcGVyL29yZGVyLXN0YXR1c1wiLFxuICAgICAgICBpY29uOiBmYUJvcmRlckFsbCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJGVU5DVElPTi1PUlRIRVJcIixcbiAgICBuYW1lOiBcIkNo4bupYyBuxINuZyBraMOhY1wiLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlBJTkNPREVcIixcbiAgICAgICAgbmFtZTogXCJQaW4gY29kZVwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvZnVuYy1vcnRoZXIvcGluLWNvZGVcIixcbiAgICAgICAgaWNvbjogZmFDb2csXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiV0FSRUhPVVNFXCIsXG4gICAgICAgIG5hbWU6IFwiUXXhuqNuIGzDvSBraG9cIixcbiAgICAgICAgbGluazogXCIvY21zL2Z1bmMtb3J0aGVyL3dhcmVob3VzZVwiLFxuICAgICAgICBpY29uOiBmYVdhcmVob3VzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCB2YXIgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBcIiMwMGI0NmVcIixcbiAgICAgIGRhcms6IFwiIzAwYTQ1ZVwiLFxuICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmZcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Nob3dMb2FkZXIsIHNldFNob3dMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzaG93TG9hZGVyVGV4dCwgc2V0U2hvd0xvYWRlclRleHRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gZG8gb25jZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNldHVwIGZpcnN0IGxvYWRpbmdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dMb2FkZXJUZXh0KGZhbHNlKTtcbiAgICAgIHNldFNob3dMb2FkZXIoZmFsc2UpO1xuICAgIH0sIDUwMCk7XG5cbiAgICAvLyBzZXR1cCBsb2FkaW5nIHdoZW4gbmF2aWdhdGVcbiAgICByZXR1cm4gc2V0dXBMb2FkaW5nKHJvdXRlciwgc2V0U2hvd0xvYWRlcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1RSkh0dkdobXI5WE9JcEk2WVZ1dEcrMlFPSzlUK1puTjRrekZOMVJ0SzN6RUZFSXN4aGxtV2w1L1lFU3ZwWjEzXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8TGF5b3V0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJsYW5rfVxuICAgICAgICBsb2dnZWRJblVzZXJJbmZvPXtwYWdlUHJvcHMubG9nZ2VkSW5Vc2VySW5mb31cbiAgICAgICAgbWVudT17bWVudX1cbiAgICAgICAgdGl0bGU9XCJLVFhTSE9QXCJcbiAgICAgID5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA8TG9hZGVyIHNob3c9e3Nob3dMb2FkZXJ9IHNob3dUZXh0PXtzaG93TG9hZGVyVGV4dH0+PC9Mb2FkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==