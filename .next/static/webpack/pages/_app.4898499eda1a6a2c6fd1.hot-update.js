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
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {});
  pageProps.loggedInUserInfo = localStorage.getItem("account");
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
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
      lineNumber: 156,
      columnNumber: 9
    }
  })), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
    integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx(Component, Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }))), __jsx(_component_loader_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showLoader,
    showText: showLoaderText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }));
}

_s(App, "p/AtoKfl34AuN9MMeVu8M5F1Fw4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJtZW51Iiwia2V5IiwibmFtZSIsInJlcXVpcmVkIiwic3ViTWVudSIsImxpbmsiLCJpY29uIiwiZmFDdWJlcyIsImZhUGx1c0NpcmNsZSIsImZhRmlsZUludm9pY2VEb2xsYXIiLCJmYVNob3BwaW5nQ2FydCIsImZhU2hvcHBpbmdCYXNrZXQiLCJmYU1vbmV5Q2hlY2siLCJmYVNoaXBwaW5nRmFzdCIsImZhQm9yZGVyQWxsIiwiZmFDb2ciLCJmYVdhcmVob3VzZSIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrIiwiY29udHJhc3RUZXh0IiwiQXBwIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwic2hvd0xvYWRlciIsInNldFNob3dMb2FkZXIiLCJzaG93TG9hZGVyVGV4dCIsInNldFNob3dMb2FkZXJUZXh0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInNldHVwTG9hZGluZyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvZ2dlZEluVXNlckluZm8iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3R5bGVzIiwiYmxhbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsS0FBRyxFQUFFLGNBRFA7QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsVUFBUSxFQUFFLGNBSFo7QUFJRUMsU0FBTyxFQUFFLENBQ1A7QUFDRUgsT0FBRyxFQUFFLFNBRFA7QUFFRUMsUUFBSSxFQUFFLG9CQUZSO0FBR0VHLFFBQUksRUFBRSxjQUhSO0FBSUVDLFFBQUksRUFBRUMseUVBQU9BO0FBSmYsR0FETyxF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ZkYsRUF1QkUsTUFBQyxpRUFBRDtBQUFRLFFBQUksRUFBRVIsVUFBZDtBQUEwQixZQUFRLEVBQUVFLGNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsQ0FERjtBQTJCRDs7R0FwRHVCUixHO1VBQ1BHLHFEOzs7S0FET0gsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ4OTg0OTllZGExYTZhMmM2ZmQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYU5ld3NwYXBlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHtcbiAgZmFDdWJlcyxcbiAgZmFQbHVzQ2lyY2xlLFxuICBmYUZpbGVJbnZvaWNlRG9sbGFyLFxuICBmYVNob3BwaW5nQmFza2V0LFxuICBmYVNob3BwaW5nQ2FydCxcbiAgZmFXYXJlaG91c2UsXG4gIGZhTW9uZXlDaGVjayxcbiAgZmFDb2csXG4gIGZhU2hpcHBpbmdGYXN0LFxuICBmYUJvcmRlckFsbCxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHtcbiAgQmFja2Ryb3AsXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG4gIGNyZWF0ZU11aVRoZW1lLFxuICBUaGVtZVByb3ZpZGVyLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9sYXlvdXQvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IExvYWRlciwgeyBzZXR1cExvYWRpbmcgfSBmcm9tIFwiLi4vY29tcG9uZW50L2xvYWRlci9sb2FkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgbWVudSA9IFtcbiAge1xuICAgIGtleTogXCJQUk9EVUNULU1FTlVcIixcbiAgICBuYW1lOiBcIlPhuqNuIHBo4bqpbVwiLFxuICAgIHJlcXVpcmVkOiBcIi9jbXMvcHJvZHVjdFwiLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlBST0RVQ1RcIixcbiAgICAgICAgbmFtZTogXCJEYW5oIHPDoWNoIHPhuqNuIHBo4bqpbVwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvcHJvZHVjdFwiLFxuICAgICAgICBpY29uOiBmYUN1YmVzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIkNSRUFURV9QUk9EVUNUXCIsXG4gICAgICAgIG5hbWU6IFwiVGjDqm0gc+G6o24gcGjhuqltXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9wcm9kdWN0L25ld1wiLFxuICAgICAgICBpY29uOiBmYVBsdXNDaXJjbGUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiUkVWRU5VRVwiLFxuICAgIG5hbWU6IFwiRG9hbmggdGh1XCIsXG4gICAgcmVxdWlyZWQ6IFwiL2Ntcy9yZXZlbnVlXCIsXG4gICAgc3ViTWVudTogW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiVklFVy1SRVZFTlVFXCIsXG4gICAgICAgIG5hbWU6IFwiWGVtIGRvYW5oIHRodVwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvcmV2ZW51ZVwiLFxuICAgICAgICBpY29uOiBmYUZpbGVJbnZvaWNlRG9sbGFyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlBST0RVQ1RTLVVOUEFJRFwiLFxuICAgICAgICBuYW1lOiBcIlPhuqNuIHBo4bqpbSBz4bq9IHRoYW5oIHRvw6FuXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9yZXZlbnVlL3Byb2R1Y3RzLXVucGFpZFwiLFxuICAgICAgICBpY29uOiBmYVNob3BwaW5nQ2FydCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJQUk9EVUNUUy1QQUlEXCIsXG4gICAgICAgIG5hbWU6IFwiU+G6o24gcGjhuqltIMSRw6MgdGhhbmggdG/DoW5cIixcbiAgICAgICAgbGluazogXCIvY21zL3JldmVudWUvcHJvZHVjdHMtcGFpZFwiLFxuICAgICAgICBpY29uOiBmYVNob3BwaW5nQmFza2V0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlJFVkVOVUUtTUFOQUdFTUVOVFwiLFxuICAgICAgICBuYW1lOiBcIlF14bqjbiBsw70gZG9hbmggdGh1XCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9yZXZlbnVlL3JldmVudWUtbWFuYWdlbWVudFwiLFxuICAgICAgICBpY29uOiBmYU1vbmV5Q2hlY2ssXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiREVMSVZFUllcIixcbiAgICBuYW1lOiBcIkdpYW8gaMOgbmdcIixcbiAgICByZXF1aXJlZDogXCIvY21zL3NoaXBwZXJcIixcbiAgICBzdWJNZW51OiBbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJTSElQUElOR1wiLFxuICAgICAgICBuYW1lOiBcIlRy4bqhbmcgdGjDoWkgZ2lhbyBow6BuZ1wiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvc2hpcHBlci9zaGlwcGluZ1wiLFxuICAgICAgICBpY29uOiBmYVNoaXBwaW5nRmFzdCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJPUkRFUi1TVEFUVVNcIixcbiAgICAgICAgbmFtZTogXCJUcuG6oW5nIHRow6FpIMSRxqFuIGjDoG5nXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9zaGlwcGVyL29yZGVyLXN0YXR1c1wiLFxuICAgICAgICBpY29uOiBmYUJvcmRlckFsbCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJGVU5DVElPTi1PUlRIRVJcIixcbiAgICBuYW1lOiBcIkNo4bupYyBuxINuZyBraMOhY1wiLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlBJTkNPREVcIixcbiAgICAgICAgbmFtZTogXCJQaW4gY29kZVwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvZnVuYy1vcnRoZXIvcGluLWNvZGVcIixcbiAgICAgICAgaWNvbjogZmFDb2csXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiV0FSRUhPVVNFXCIsXG4gICAgICAgIG5hbWU6IFwiUXXhuqNuIGzDvSBraG9cIixcbiAgICAgICAgbGluazogXCIvY21zL2Z1bmMtb3J0aGVyL3dhcmVob3VzZVwiLFxuICAgICAgICBpY29uOiBmYVdhcmVob3VzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCB2YXIgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBcIiMwMGI0NmVcIixcbiAgICAgIGRhcms6IFwiIzAwYTQ1ZVwiLFxuICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmZcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Nob3dMb2FkZXIsIHNldFNob3dMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzaG93TG9hZGVyVGV4dCwgc2V0U2hvd0xvYWRlclRleHRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gZG8gb25jZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNldHVwIGZpcnN0IGxvYWRpbmdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dMb2FkZXJUZXh0KGZhbHNlKTtcbiAgICAgIHNldFNob3dMb2FkZXIoZmFsc2UpO1xuICAgIH0sIDUwMCk7XG5cbiAgICAvLyBzZXR1cCBsb2FkaW5nIHdoZW4gbmF2aWdhdGVcbiAgICByZXR1cm4gc2V0dXBMb2FkaW5nKHJvdXRlciwgc2V0U2hvd0xvYWRlcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgXG4gIH0pXG5cbiAgcGFnZVByb3BzLmxvZ2dlZEluVXNlckluZm8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtMUJtRTRrV0JxNzhpWWhGbGR2S3VoZlRBVTZhdVU4dFQ5NFdySGZ0akRickNFWFNVMW9Cb3F5bDJRdlo2aklXM1wiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNjcmlwdFxuICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanNcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtUUpIdHZHaG1yOVhPSXBJNllWdXRHKzJRT0s5VCtabk40a3pGTjFSdEszekVGRUlzeGhsbVdsNS9ZRVN2cFoxM1wiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPExheW91dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ibGFua31cbiAgICAgICAgbG9nZ2VkSW5Vc2VySW5mbz17cGFnZVByb3BzLmxvZ2dlZEluVXNlckluZm99XG4gICAgICAgIG1lbnU9e21lbnV9XG4gICAgICAgIHRpdGxlPVwiS1RYU0hPUFwiXG4gICAgICA+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPExvYWRlciBzaG93PXtzaG93TG9hZGVyfSBzaG93VGV4dD17c2hvd0xvYWRlclRleHR9PjwvTG9hZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=