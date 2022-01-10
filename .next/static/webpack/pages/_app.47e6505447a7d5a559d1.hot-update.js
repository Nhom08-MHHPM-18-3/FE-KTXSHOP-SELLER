webpackHotUpdate_N_E("pages/_app",{

/***/ "./component/layout/layout.js":
/*!************************************!*\
  !*** ./component/layout/layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./component/header/header.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ "./component/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidebar/sidebar */ "./sidebar/sidebar.js");
/* harmony import */ var _my_context_my_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my-context/my-context */ "./component/my-context/my-context.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\component\\layout\\layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Layout(props) {
  _s();

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var children = props.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isLogin = localStorage.getItem('account');

    if (!props.loggedInUserInfo) {
      router.push("/login");
    }
  }, []);
  return __jsx(_my_context_my_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      loggedInUserInfo: props.loggedInUserInfo
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_header_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sidebar: ref,
    menu: props.menu,
    title: props.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.appContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, children)));
}

_s(Layout, "HYwAWmo3kRqc9AFVacAFzoYztR4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xheW91dC9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJyZWYiLCJ1c2VSZWYiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImlzTG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9nZ2VkSW5Vc2VySW5mbyIsInB1c2giLCJzdHlsZXMiLCJsYXlvdXQiLCJtZW51IiwidGl0bGUiLCJhcHBDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFDcEMsTUFBSUMsR0FBRyxHQUFHQyxvREFBTSxFQUFoQjtBQURvQyxNQUU1QkMsUUFGNEIsR0FFZkgsS0FGZSxDQUU1QkcsUUFGNEI7QUFHcEMsTUFBSUMsTUFBTSxHQUFHQyw2REFBUyxFQUF0QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFNQyxPQUFPLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFoQjs7QUFDQSxRQUFJLENBQUNULEtBQUssQ0FBQ1UsZ0JBQVgsRUFBNkI7QUFDM0JOLFlBQU0sQ0FBQ08sSUFBUCxDQUFZLFFBQVo7QUFDRDtBQUNGLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxTQUNFLE1BQUMsOERBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFRCxzQkFBZ0IsRUFBRVYsS0FBSyxDQUFDVTtBQUExQixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVFLHlEQUFNLENBQUNDLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFFWixHQUFqQjtBQUFzQixRQUFJLEVBQUVELEtBQUssQ0FBQ2MsSUFBbEM7QUFBd0MsU0FBSyxFQUFFZCxLQUFLLENBQUNlLEtBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsd0RBQUQ7QUFBUyxPQUFHLEVBQUVkLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUVXLHlEQUFNLENBQUNJLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0NiLFFBQXBDLENBSEYsQ0FERixDQURGO0FBU0Q7O0dBdEJ1QkosTTtVQUdUTSxxRDs7O0tBSFNOLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40N2U2NTA1NDQ3YTdkNWE1NTlkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sYXlvdXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vc2lkZWJhci9zaWRlYmFyXCI7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tIFwiLi4vbXktY29udGV4dC9teS1jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgbGV0IHJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBpc0xvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY291bnQnKVxyXG4gICAgaWYgKCFwcm9wcy5sb2dnZWRJblVzZXJJbmZvKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dnZWRJblVzZXJJbmZvOiBwcm9wcy5sb2dnZWRJblVzZXJJbmZvIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dH0+XHJcbiAgICAgICAgPEhlYWRlciBzaWRlYmFyPXtyZWZ9IG1lbnU9e3Byb3BzLm1lbnV9IHRpdGxlPXtwcm9wcy50aXRsZX0gLz5cclxuICAgICAgICA8U2lkZWJhciByZWY9e3JlZn0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwcENvbnRlbnR9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==