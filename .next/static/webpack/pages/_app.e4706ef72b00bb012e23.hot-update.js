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
  pageProps.loggedInUserInfo = localStorage.get;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJtZW51Iiwia2V5IiwibmFtZSIsInJlcXVpcmVkIiwic3ViTWVudSIsImxpbmsiLCJpY29uIiwiZmFDdWJlcyIsImZhUGx1c0NpcmNsZSIsImZhRmlsZUludm9pY2VEb2xsYXIiLCJmYVNob3BwaW5nQ2FydCIsImZhU2hvcHBpbmdCYXNrZXQiLCJmYU1vbmV5Q2hlY2siLCJmYVNoaXBwaW5nRmFzdCIsImZhQm9yZGVyQWxsIiwiZmFDb2ciLCJmYVdhcmVob3VzZSIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrIiwiY29udHJhc3RUZXh0IiwiQXBwIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwic2hvd0xvYWRlciIsInNldFNob3dMb2FkZXIiLCJzaG93TG9hZGVyVGV4dCIsInNldFNob3dMb2FkZXJUZXh0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInNldHVwTG9hZGluZyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvZ2dlZEluVXNlckluZm8iLCJsb2NhbFN0b3JhZ2UiLCJnZXQiLCJzdHlsZXMiLCJibGFuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxLQUFHLEVBQUUsY0FEUDtBQUVFQyxNQUFJLEVBQUUsVUFGUjtBQUdFQyxVQUFRLEVBQUUsY0FIWjtBQUlFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFSCxPQUFHLEVBQUUsU0FEUDtBQUVFQyxRQUFJLEVBQUUsb0JBRlI7QUFHRUcsUUFBSSxFQUFFLGNBSFI7QUFJRUMsUUFBSSxFQUFFQyx5RUFBT0E7QUFKZixHQURPLEVBT1A7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Y0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixDQURGO0FBMkJEOztHQWhEdUJSLEc7VUFDUEcscUQ7OztLQURPSCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTQ3MDZlZjcyYjAwYmIwMTJlMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhTmV3c3BhcGVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XG5pbXBvcnQge1xuICBmYUN1YmVzLFxuICBmYVBsdXNDaXJjbGUsXG4gIGZhRmlsZUludm9pY2VEb2xsYXIsXG4gIGZhU2hvcHBpbmdCYXNrZXQsXG4gIGZhU2hvcHBpbmdDYXJ0LFxuICBmYVdhcmVob3VzZSxcbiAgZmFNb25leUNoZWNrLFxuICBmYUNvZyxcbiAgZmFTaGlwcGluZ0Zhc3QsXG4gIGZhQm9yZGVyQWxsLFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQge1xuICBCYWNrZHJvcCxcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgY3JlYXRlTXVpVGhlbWUsXG4gIFRoZW1lUHJvdmlkZXIsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L2xheW91dC9sYXlvdXRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgTG9hZGVyLCB7IHNldHVwTG9hZGluZyB9IGZyb20gXCIuLi9jb21wb25lbnQvbG9hZGVyL2xvYWRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBtZW51ID0gW1xuICB7XG4gICAga2V5OiBcIlBST0RVQ1QtTUVOVVwiLFxuICAgIG5hbWU6IFwiU+G6o24gcGjhuqltXCIsXG4gICAgcmVxdWlyZWQ6IFwiL2Ntcy9wcm9kdWN0XCIsXG4gICAgc3ViTWVudTogW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiUFJPRFVDVFwiLFxuICAgICAgICBuYW1lOiBcIkRhbmggc8OhY2ggc+G6o24gcGjhuqltXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9wcm9kdWN0XCIsXG4gICAgICAgIGljb246IGZhQ3ViZXMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiQ1JFQVRFX1BST0RVQ1RcIixcbiAgICAgICAgbmFtZTogXCJUaMOqbSBz4bqjbiBwaOG6qW1cIixcbiAgICAgICAgbGluazogXCIvY21zL3Byb2R1Y3QvbmV3XCIsXG4gICAgICAgIGljb246IGZhUGx1c0NpcmNsZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJSRVZFTlVFXCIsXG4gICAgbmFtZTogXCJEb2FuaCB0aHVcIixcbiAgICByZXF1aXJlZDogXCIvY21zL3JldmVudWVcIixcbiAgICBzdWJNZW51OiBbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJWSUVXLVJFVkVOVUVcIixcbiAgICAgICAgbmFtZTogXCJYZW0gZG9hbmggdGh1XCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9yZXZlbnVlXCIsXG4gICAgICAgIGljb246IGZhRmlsZUludm9pY2VEb2xsYXIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiUFJPRFVDVFMtVU5QQUlEXCIsXG4gICAgICAgIG5hbWU6IFwiU+G6o24gcGjhuqltIHPhur0gdGhhbmggdG/DoW5cIixcbiAgICAgICAgbGluazogXCIvY21zL3JldmVudWUvcHJvZHVjdHMtdW5wYWlkXCIsXG4gICAgICAgIGljb246IGZhU2hvcHBpbmdDYXJ0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlBST0RVQ1RTLVBBSURcIixcbiAgICAgICAgbmFtZTogXCJT4bqjbiBwaOG6qW0gxJHDoyB0aGFuaCB0b8OhblwiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvcmV2ZW51ZS9wcm9kdWN0cy1wYWlkXCIsXG4gICAgICAgIGljb246IGZhU2hvcHBpbmdCYXNrZXQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiUkVWRU5VRS1NQU5BR0VNRU5UXCIsXG4gICAgICAgIG5hbWU6IFwiUXXhuqNuIGzDvSBkb2FuaCB0aHVcIixcbiAgICAgICAgbGluazogXCIvY21zL3JldmVudWUvcmV2ZW51ZS1tYW5hZ2VtZW50XCIsXG4gICAgICAgIGljb246IGZhTW9uZXlDaGVjayxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJERUxJVkVSWVwiLFxuICAgIG5hbWU6IFwiR2lhbyBow6BuZ1wiLFxuICAgIHJlcXVpcmVkOiBcIi9jbXMvc2hpcHBlclwiLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIlNISVBQSU5HXCIsXG4gICAgICAgIG5hbWU6IFwiVHLhuqFuZyB0aMOhaSBnaWFvIGjDoG5nXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9zaGlwcGVyL3NoaXBwaW5nXCIsXG4gICAgICAgIGljb246IGZhU2hpcHBpbmdGYXN0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIk9SREVSLVNUQVRVU1wiLFxuICAgICAgICBuYW1lOiBcIlRy4bqhbmcgdGjDoWkgxJHGoW4gaMOgbmdcIixcbiAgICAgICAgbGluazogXCIvY21zL3NoaXBwZXIvb3JkZXItc3RhdHVzXCIsXG4gICAgICAgIGljb246IGZhQm9yZGVyQWxsLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAga2V5OiBcIkZVTkNUSU9OLU9SVEhFUlwiLFxuICAgIG5hbWU6IFwiQ2jhu6ljIG7Eg25nIGtow6FjXCIsXG4gICAgc3ViTWVudTogW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiUElOQ09ERVwiLFxuICAgICAgICBuYW1lOiBcIlBpbiBjb2RlXCIsXG4gICAgICAgIGxpbms6IFwiL2Ntcy9mdW5jLW9ydGhlci9waW4tY29kZVwiLFxuICAgICAgICBpY29uOiBmYUNvZyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJXQVJFSE9VU0VcIixcbiAgICAgICAgbmFtZTogXCJRdeG6o24gbMO9IGtob1wiLFxuICAgICAgICBsaW5rOiBcIi9jbXMvZnVuYy1vcnRoZXIvd2FyZWhvdXNlXCIsXG4gICAgICAgIGljb246IGZhV2FyZWhvdXNlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IHZhciB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IFwiIzAwYjQ2ZVwiLFxuICAgICAgZGFyazogXCIjMDBhNDVlXCIsXG4gICAgICBjb250cmFzdFRleHQ6IFwiI2ZmZlwiLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2hvd0xvYWRlciwgc2V0U2hvd0xvYWRlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dMb2FkZXJUZXh0LCBzZXRTaG93TG9hZGVyVGV4dF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBkbyBvbmNlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2V0dXAgZmlyc3QgbG9hZGluZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd0xvYWRlclRleHQoZmFsc2UpO1xuICAgICAgc2V0U2hvd0xvYWRlcihmYWxzZSk7XG4gICAgfSwgNTAwKTtcblxuICAgIC8vIHNldHVwIGxvYWRpbmcgd2hlbiBuYXZpZ2F0ZVxuICAgIHJldHVybiBzZXR1cExvYWRpbmcocm91dGVyLCBzZXRTaG93TG9hZGVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIHBhZ2VQcm9wcy5sb2dnZWRJblVzZXJJbmZvID0gbG9jYWxTdG9yYWdlLmdldFxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9qcy9ib290c3RyYXAubWluLmpzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVFKSHR2R2htcjlYT0lwSTZZVnV0RysyUU9LOVQrWm5ONGt6Rk4xUnRLM3pFRkVJc3hobG1XbDUvWUVTdnBaMTNcIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxMYXlvdXRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmxhbmt9XG4gICAgICAgIGxvZ2dlZEluVXNlckluZm89e3BhZ2VQcm9wcy5sb2dnZWRJblVzZXJJbmZvfVxuICAgICAgICBtZW51PXttZW51fVxuICAgICAgICB0aXRsZT1cIktUWFNIT1BcIlxuICAgICAgPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxMb2FkZXIgc2hvdz17c2hvd0xvYWRlcn0gc2hvd1RleHQ9e3Nob3dMb2FkZXJUZXh0fT48L0xvYWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9