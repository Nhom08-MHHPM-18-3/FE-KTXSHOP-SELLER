webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

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
/* harmony import */ var D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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



var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var menu = [{
  key: "PRODUCT-MENU",
  name: "Sản phẩm",
  required: "/cms/product",
  subMenu: [{
    key: "PRODUCT",
    name: "Sản phẩm",
    link: "/cms/product",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCubes"]
  }, {
    key: "CATEGORY",
    name: "Danh mục",
    link: "/cms/category",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCubes"]
  }, {
    key: "PRODUCER",
    name: "Nhà sản xuất",
    link: "/cms/manufacturer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faIndustry"]
  }, {
    key: "INGREDIENT",
    name: "Hoạt chất",
    link: "/cms/ingredient",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAtom"]
  }]
}, {
  key: "REGION",
  name: "Khu vực",
  link: "/cms/region",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarked"]
}, {
  key: "FEE",
  name: "Cài đặt phí",
  required: "/cms/fee",
  subMenu: [{
    key: "FEE",
    name: "Công thức phí",
    link: "/cms/fee",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSquareRootAlt"]
  }, {
    key: "CONFIGPRICING",
    name: "Hệ số phí",
    link: "/cms/pricing",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCommentDollar"]
  }, {
    key: "DELIVERYFEE",
    name: "Phí vận chuyển",
    link: "/cms/delivery-fee",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTruck"]
  }, {
    key: "PAYMENTFEE",
    name: "Phí thanh toán",
    link: "/cms/payment-fee",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMoneyCheckAlt"]
  }, {
    key: "FEE_HISTORY",
    name: "Lịch sử cài đặt giá",
    link: "/cms/fee/history",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHistory"]
  }]
}, {
  key: "DELIVERY",
  name: "Giao hàng",
  required: "/cms/delivery/time",
  subMenu: [{
    key: "DELIVERY",
    name: "Thời gian giao hàng",
    link: "/cms/delivery/time",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClock"]
  }]
}, {
  key: "SETTING",
  name: "Hiển thị",
  subMenu: [{
    key: "CONFIG_TAB",
    name: "Tab",
    link: "/cms/tab",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faListAlt"]
  }, {
    key: "TAG",
    name: "Tag",
    link: "/cms/tag",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTag"]
  }, {
    key: "MARKETING_POPUP",
    name: "Popup",
    link: "/cms/popup",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faComment"]
  }, {
    key: "SETTING_BANNER",
    name: "Banner",
    link: "/cms/banner",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFlag"]
  }, {
    key: "POST_CONTENT",
    name: "Bài đăng sản phẩm",
    link: "/cms/post",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faNewspaper"]
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
      _React$useState2 = Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      showLoader = _React$useState2[0],
      setShowLoader = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(true),
      _React$useState4 = Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
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
      pageProps = props.pageProps; // if (pageProps.loggedIn) {

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }), __jsx(_component_layout_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _global_css__WEBPACK_IMPORTED_MODULE_9___default.a.blank,
    loggedInUserInfo: pageProps.loggedInUserInfo,
    menu: menu,
    title: "CMS",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, __jsx(Component, Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }))), __jsx(_component_loader_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showLoader,
    showText: showLoaderText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  })); // } else {
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <Component {...pageProps} />
  //     </ThemeProvider>
  //   );
  // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJtZW51Iiwia2V5IiwibmFtZSIsInJlcXVpcmVkIiwic3ViTWVudSIsImxpbmsiLCJpY29uIiwiZmFDdWJlcyIsImZhSW5kdXN0cnkiLCJmYUF0b20iLCJmYU1hcE1hcmtlZCIsImZhU3F1YXJlUm9vdEFsdCIsImZhQ29tbWVudERvbGxhciIsImZhVHJ1Y2siLCJmYU1vbmV5Q2hlY2tBbHQiLCJmYUhpc3RvcnkiLCJmYUNsb2NrIiwiZmFMaXN0QWx0IiwiZmFUYWciLCJmYUNvbW1lbnQiLCJmYUZsYWciLCJmYU5ld3NwYXBlciIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrIiwiY29udHJhc3RUZXh0IiwiQXBwIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwic2hvd0xvYWRlciIsInNldFNob3dMb2FkZXIiLCJzaG93TG9hZGVyVGV4dCIsInNldFNob3dMb2FkZXJUZXh0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInNldHVwTG9hZGluZyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0eWxlcyIsImJsYW5rIiwibG9nZ2VkSW5Vc2VySW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFzQkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxLQUFHLEVBQUUsY0FEUDtBQUVFQyxNQUFJLEVBQUUsVUFGUjtBQUdFQyxVQUFRLEVBQUUsY0FIWjtBQUlFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFSCxPQUFHLEVBQUUsU0FEUDtBQUVFQyxRQUFJLEVBQUUsVUFGUjtBQUdFRyxR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TUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFc0Isa0RBQU0sQ0FBQ0MsS0FEcEI7QUFFRSxvQkFBZ0IsRUFBRUYsU0FBUyxDQUFDRyxnQkFGOUI7QUFHRSxRQUFJLEVBQUU5QyxJQUhSO0FBSUUsU0FBSyxFQUFDLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsU0FBRCx3TEFBZTJDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GLENBRkYsRUFVRSxNQUFDLGlFQUFEO0FBQVEsUUFBSSxFQUFFUixVQUFkO0FBQTBCLFlBQVEsRUFBRUUsY0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREYsQ0FwQmlDLENBa0NqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztHQXpDdUJSLEc7VUFDUEcscUQ7OztLQURPSCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzk0MzEwYjZiZjg3Mzc1YjkwNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhTmV3c3BhcGVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFBdG9tLFxyXG4gIGZhQ2Fwc3VsZXMsXHJcbiAgZmFDbG9jayxcclxuICBmYUNvbW1lbnQsXHJcbiAgZmFDb21tZW50RG9sbGFyLFxyXG4gIGZhQ3ViZSxcclxuICBmYUN1YmVzLFxyXG4gIGZhRmxhZyxcclxuICBmYUhpc3RvcnksXHJcbiAgZmFJbmR1c3RyeSxcclxuICBmYUxpc3RBbHQsXHJcbiAgZmFNYXBNYXJrZWQsXHJcbiAgZmFNb25leUNoZWNrQWx0LFxyXG4gIGZhUG9kY2FzdCxcclxuICBmYVJvY2tldCxcclxuICBmYVNxdWFyZVJvb3RBbHQsXHJcbiAgZmFUYWcsXHJcbiAgZmFUcnVjayxcclxuICBmYVZpZGVvLFxyXG4gIGZhVmlkZW9TbGFzaFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBCYWNrZHJvcCxcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIGNyZWF0ZU11aVRoZW1lLFxyXG4gIFRoZW1lUHJvdmlkZXJcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvbGF5b3V0L2xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IExvYWRlciwgeyBzZXR1cExvYWRpbmcgfSBmcm9tIFwiLi4vY29tcG9uZW50L2xvYWRlci9sb2FkZXJcIjtcclxuXHJcbmNvbnN0IG1lbnUgPSBbXHJcbiAge1xyXG4gICAga2V5OiBcIlBST0RVQ1QtTUVOVVwiLFxyXG4gICAgbmFtZTogXCJT4bqjbiBwaOG6qW1cIixcclxuICAgIHJlcXVpcmVkOiBcIi9jbXMvcHJvZHVjdFwiLFxyXG4gICAgc3ViTWVudTogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBcIlBST0RVQ1RcIixcclxuICAgICAgICBuYW1lOiBcIlPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy9wcm9kdWN0XCIsXHJcbiAgICAgICAgaWNvbjogZmFDdWJlcyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogXCJDQVRFR09SWVwiLFxyXG4gICAgICAgIG5hbWU6IFwiRGFuaCBt4bulY1wiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy9jYXRlZ29yeVwiLFxyXG4gICAgICAgIGljb246IGZhQ3ViZXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6IFwiUFJPRFVDRVJcIixcclxuICAgICAgICBuYW1lOiBcIk5ow6Agc+G6o24geHXhuqV0XCIsXHJcbiAgICAgICAgbGluazogXCIvY21zL21hbnVmYWN0dXJlclwiLFxyXG4gICAgICAgIGljb246IGZhSW5kdXN0cnksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6IFwiSU5HUkVESUVOVFwiLFxyXG4gICAgICAgIG5hbWU6IFwiSG/huqF0IGNo4bqldFwiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy9pbmdyZWRpZW50XCIsXHJcbiAgICAgICAgaWNvbjogZmFBdG9tLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiUkVHSU9OXCIsXHJcbiAgICBuYW1lOiBcIktodSB24buxY1wiLFxyXG4gICAgbGluazogXCIvY21zL3JlZ2lvblwiLFxyXG4gICAgaWNvbjogZmFNYXBNYXJrZWQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiRkVFXCIsXHJcbiAgICBuYW1lOiBcIkPDoGkgxJHhurd0IHBow61cIixcclxuICAgIHJlcXVpcmVkOiBcIi9jbXMvZmVlXCIsXHJcbiAgICBzdWJNZW51OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6IFwiRkVFXCIsXHJcbiAgICAgICAgbmFtZTogXCJDw7RuZyB0aOG7qWMgcGjDrVwiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy9mZWVcIixcclxuICAgICAgICBpY29uOiBmYVNxdWFyZVJvb3RBbHRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogXCJDT05GSUdQUklDSU5HXCIsXHJcbiAgICAgICAgbmFtZTogXCJI4buHIHPhu5EgcGjDrVwiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy9wcmljaW5nXCIsXHJcbiAgICAgICAgaWNvbjogZmFDb21tZW50RG9sbGFyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6IFwiREVMSVZFUllGRUVcIixcclxuICAgICAgICBuYW1lOiBcIlBow60gduG6rW4gY2h1eeG7g25cIixcclxuICAgICAgICBsaW5rOiBcIi9jbXMvZGVsaXZlcnktZmVlXCIsXHJcbiAgICAgICAgaWNvbjogZmFUcnVja1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBcIlBBWU1FTlRGRUVcIixcclxuICAgICAgICBuYW1lOiBcIlBow60gdGhhbmggdG/DoW5cIixcclxuICAgICAgICBsaW5rOiBcIi9jbXMvcGF5bWVudC1mZWVcIixcclxuICAgICAgICBpY29uOiBmYU1vbmV5Q2hlY2tBbHRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogXCJGRUVfSElTVE9SWVwiLFxyXG4gICAgICAgIG5hbWU6IFwiTOG7i2NoIHPhu60gY8OgaSDEkeG6t3QgZ2nDoVwiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy9mZWUvaGlzdG9yeVwiLFxyXG4gICAgICAgIGljb246IGZhSGlzdG9yeVxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCJERUxJVkVSWVwiLFxyXG4gICAgbmFtZTogXCJHaWFvIGjDoG5nXCIsXHJcbiAgICByZXF1aXJlZDogXCIvY21zL2RlbGl2ZXJ5L3RpbWVcIixcclxuICAgIHN1Yk1lbnU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogXCJERUxJVkVSWVwiLFxyXG4gICAgICAgIG5hbWU6IFwiVGjhu51pIGdpYW4gZ2lhbyBow6BuZ1wiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy9kZWxpdmVyeS90aW1lXCIsXHJcbiAgICAgICAgaWNvbjogZmFDbG9ja1xyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCJTRVRUSU5HXCIsXHJcbiAgICBuYW1lOiBcIkhp4buDbiB0aOG7i1wiLFxyXG4gICAgc3ViTWVudTogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBcIkNPTkZJR19UQUJcIixcclxuICAgICAgICBuYW1lOiBcIlRhYlwiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy90YWJcIixcclxuICAgICAgICBpY29uOiBmYUxpc3RBbHRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogXCJUQUdcIixcclxuICAgICAgICBuYW1lOiBcIlRhZ1wiLFxyXG4gICAgICAgIGxpbms6IFwiL2Ntcy90YWdcIixcclxuICAgICAgICBpY29uOiBmYVRhZ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBcIk1BUktFVElOR19QT1BVUFwiLFxyXG4gICAgICAgIG5hbWU6IFwiUG9wdXBcIixcclxuICAgICAgICBsaW5rOiBcIi9jbXMvcG9wdXBcIixcclxuICAgICAgICBpY29uOiBmYUNvbW1lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGtleTogXCJTRVRUSU5HX0JBTk5FUlwiLFxyXG4gICAgICAgIG5hbWU6IFwiQmFubmVyXCIsXHJcbiAgICAgICAgbGluazogXCIvY21zL2Jhbm5lclwiLFxyXG4gICAgICAgIGljb246IGZhRmxhZ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBcIlBPU1RfQ09OVEVOVFwiLFxyXG4gICAgICAgIG5hbWU6IFwiQsOgaSDEkcSDbmcgc+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgbGluazogXCIvY21zL3Bvc3RcIixcclxuICAgICAgICBpY29uOiBmYU5ld3NwYXBlclxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgdmFyIHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogXCIjMDBiNDZlXCIsXHJcbiAgICAgIGRhcms6IFwiIzAwYTQ1ZVwiLFxyXG4gICAgICBjb250cmFzdFRleHQ6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzaG93TG9hZGVyLCBzZXRTaG93TG9hZGVyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3Nob3dMb2FkZXJUZXh0LCBzZXRTaG93TG9hZGVyVGV4dF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAvLyBkbyBvbmNlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAvLyBzZXR1cCBmaXJzdCBsb2FkaW5nXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvd0xvYWRlclRleHQoZmFsc2UpXHJcbiAgICAgIHNldFNob3dMb2FkZXIoZmFsc2UpXHJcbiAgICB9LCA1MDApXHJcblxyXG4gICAgLy8gc2V0dXAgbG9hZGluZyB3aGVuIG5hdmlnYXRlXHJcbiAgICByZXR1cm4gc2V0dXBMb2FkaW5nKHJvdXRlciwgc2V0U2hvd0xvYWRlcilcclxuICB9LCBbXSlcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcclxuXHJcbiAgLy8gaWYgKHBhZ2VQcm9wcy5sb2dnZWRJbikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPExheW91dFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJsYW5rfVxyXG4gICAgICAgIGxvZ2dlZEluVXNlckluZm89e3BhZ2VQcm9wcy5sb2dnZWRJblVzZXJJbmZvfVxyXG4gICAgICAgIG1lbnU9e21lbnV9XHJcbiAgICAgICAgdGl0bGU9XCJDTVNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICAgPExvYWRlciBzaG93PXtzaG93TG9hZGVyfSBzaG93VGV4dD17c2hvd0xvYWRlclRleHR9PjwvTG9hZGVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgLy8gICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIC8vICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9