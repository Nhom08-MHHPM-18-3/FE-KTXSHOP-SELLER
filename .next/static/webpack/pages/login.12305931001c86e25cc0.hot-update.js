webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/common */ "./lib/common.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.module.css */ "./pages/login/login.module.css");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\pages\\login\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/*
A simple login page.
Can customize to display more.
LoginForm has basic inputs of authentication flow:
+ Login label
+ Username / password input
+ Submit button
*/
var __N_SSP = true;
function LoginPage(props) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng n\u1ED9i b\u1ED9")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
    method: "POST",
    action: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "hidden",
    name: "url",
    value: props.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    id: "email",
    label: "T\xEAn t\xE0i kho\u1EA3n",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    style: {
      margin: 12,
      width: 280
    },
    autoFocus: true,
    name: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    id: "password",
    label: "M\u1EADt kh\u1EA9u",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    style: {
      margin: 12,
      width: 280
    },
    name: "password",
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    style: {
      margin: 8
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "\u0110\u0103ng nh\u1EADp")))));
}
_c = LoginPage;

var _c;

$RefreshReg$(_c, "LoginPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwicHJvcHMiLCJzdHlsZXMiLCJsb2dpbkZvcm0iLCJ1cmwiLCJzaHJpbmsiLCJtYXJnaW4iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRUFERixDQURGLEVBSUUsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsRUFFRTtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFVBQU0sRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsS0FBMUI7QUFBZ0MsU0FBSyxFQUFFRixLQUFLLENBQUNHLEdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLFNBQUssRUFBQywwQkFGUjtBQUdFLFVBQU0sRUFBQyxRQUhUO0FBSUUsbUJBQWUsRUFBRTtBQUNmQyxZQUFNLEVBQUU7QUFETyxLQUpuQjtBQU9FLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUUsRUFBVjtBQUFjQyxXQUFLLEVBQUU7QUFBckIsS0FQVDtBQVFFLGFBQVMsRUFBRSxJQVJiO0FBU0UsUUFBSSxFQUFDLE9BVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFlRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLFVBREw7QUFFRSxTQUFLLEVBQUMsb0JBRlI7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUlFLG1CQUFlLEVBQUU7QUFDZkYsWUFBTSxFQUFFO0FBRE8sS0FKbkI7QUFPRSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFLEVBQVY7QUFBY0MsV0FBSyxFQUFFO0FBQXJCLEtBUFQ7QUFRRSxRQUFJLEVBQUMsVUFSUDtBQVNFLFFBQUksRUFBQyxVQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWZGLEVBNEJFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxTQUFLLEVBQUU7QUFBRUQsWUFBTSxFQUFFO0FBQVYsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBNUJGLENBRkYsQ0FKRixDQURGO0FBaUREO0tBbER1Qk4sUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4xMjMwNTkzMTAwMWM4NmUyNWNjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VCb2R5IH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvYXBpLXV0aWxzXCI7XHJcbmltcG9ydCB7IEFQSVN0YXR1cyB9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFBhcGVyLCBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2dpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGFjY291bnRBcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYWNjb3VudEFwaVwiO1xyXG5cclxuLypcclxuTG9naW4gcGFnZSB0aGF0IGlzIHVzZWQgb24gc3RnL3VhdC9wcmQgaXMgb25seSBydW4gZnJvbSBpbnRlcm5hbC1ocm0gY29kZSByZXBvLlxyXG4nTG9naW4uanMnIGZpbGUgb2Ygb3RoZXIgcmVwb3MgaXMgb25seSB1c2VkIGZvciBsb2NhbCB0ZXN0aW5nLlxyXG5cclxuVGhpcyBmaWxlIGhhdmUgMiB3YXlzIHRvIHVzZTpcclxuKyBHRVQgbWV0aG9kOiBkaXNwbGF5IGxvZ2luIHBhZ2Ugd2l0aCBsb2dpbiBmb3JtXHJcbisgUE9TVCBtZXRob2Q6IHJlY2VpdmUgc3VibWl0dGVkIGxvZ2luIGRhdGEgKHVzZXJuYW1lL3Bhc3N3b3JkKVxyXG4qL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gIGxldCByZXR1cm5PYmplY3QgPSB7IHByb3BzOiB7fSB9O1xyXG5cclxuICBpZiAoY3R4LnJlcSAmJiBjdHgucmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIC8vIHJlYWQgZm9ybSBkYXRhXHJcbiAgICBsZXQgYm9keSA9IGF3YWl0IHBhcnNlQm9keShjdHgucmVxLCBcIjFrYlwiKTtcclxuXHJcbiAgICAvLyBHZXQgYWNjb3VudFxyXG4gICAgY29uc3QgbGlzdEFjY291bnQgPSAoYXdhaXQgYWNjb3VudEFwaS5nZXRBY2NvdW50KHt9KSkuZGF0YS5kYXRhO1xyXG4gICAgbGV0IGlzTG9naW4gPSBmYWxzZTtcclxuICAgIGxldCBhY2NvdW50ID0ge307XHJcblxyXG4gICAgbGlzdEFjY291bnQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpdGVtLmF0dHJpYnV0ZXMuRW1haWwgPT09IGJvZHkuZW1haWwgJiZcclxuICAgICAgICBpdGVtLmF0dHJpYnV0ZXMuUGFzc3dvcmQgPT09IGJvZHkucGFzc3dvcmRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgYWNjb3VudCA9IGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGlzTG9naW4pO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKGlzTG9naW4pIHtcclxuICAgICAgbGV0IHVybCA9IGJvZHkudXJsIHx8IFwiL2Ntcy9wcm9kdWN0XCI7XHJcbiAgICAgIGxldCByZXMgPSBjdHgucmVzO1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgdXJsKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAzMDI7XHJcbiAgICAgIHJlcy5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm5PYmplY3QucHJvcHMudXJsID0gYm9keS51cmw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybk9iamVjdC5wcm9wcy51cmwgPSBjdHgucXVlcnkudXJsIHx8IFwiL2Ntcy9wcm9kdWN0XCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmV0dXJuT2JqZWN0O1xyXG59XHJcblxyXG4vKlxyXG5BIHNpbXBsZSBsb2dpbiBwYWdlLlxyXG5DYW4gY3VzdG9taXplIHRvIGRpc3BsYXkgbW9yZS5cclxuTG9naW5Gb3JtIGhhcyBiYXNpYyBpbnB1dHMgb2YgYXV0aGVudGljYXRpb24gZmxvdzpcclxuKyBMb2dpbiBsYWJlbFxyXG4rIFVzZXJuYW1lIC8gcGFzc3dvcmQgaW5wdXRcclxuKyBTdWJtaXQgYnV0dG9uXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+xJDEg25nIG5o4bqtcCB2w6BvIGjhu4cgdGjhu5FuZyBu4buZaSBi4buZPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtfT5cclxuICAgICAgICA8aDE+xJDEg25nIG5o4bqtcDwvaDE+XHJcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXJsXCIgdmFsdWU9e3Byb3BzLnVybH0gLz5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlTDqm4gdMOgaSBraG/huqNuXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMiwgd2lkdGg6IDI4MCB9fVxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJN4bqtdCBraOG6qXVcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEyLCB3aWR0aDogMjgwIH19XHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQxINuZyBuaOG6rXBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=