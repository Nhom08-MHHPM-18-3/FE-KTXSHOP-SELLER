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
  var account = props.loggedInUserInfo;
  console.log(account);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng n\u1ED9i b\u1ED9")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
    method: "POST",
    action: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "hidden",
    name: "url",
    value: props.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwicHJvcHMiLCJhY2NvdW50IiwibG9nZ2VkSW5Vc2VySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJsb2dpbkZvcm0iLCJ1cmwiLCJzaHJpbmsiLCJtYXJnaW4iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNFLGdCQUF0QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBREYsQ0FERixFQUlFLE1BQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUVJLHdEQUFNLENBQUNDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBRUU7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixVQUFNLEVBQUMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLEtBQTFCO0FBQWdDLFNBQUssRUFBRU4sS0FBSyxDQUFDTyxHQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxTQUFLLEVBQUMsMEJBRlI7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUlFLG1CQUFlLEVBQUU7QUFDZkMsWUFBTSxFQUFFO0FBRE8sS0FKbkI7QUFPRSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFLEVBQVY7QUFBY0MsV0FBSyxFQUFFO0FBQXJCLEtBUFQ7QUFRRSxhQUFTLEVBQUUsSUFSYjtBQVNFLFFBQUksRUFBQyxPQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBZUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLE1BQUUsRUFBQyxVQURMO0FBRUUsU0FBSyxFQUFDLG9CQUZSO0FBR0UsVUFBTSxFQUFDLFFBSFQ7QUFJRSxtQkFBZSxFQUFFO0FBQ2ZGLFlBQU0sRUFBRTtBQURPLEtBSm5CO0FBT0UsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxFQUFWO0FBQWNDLFdBQUssRUFBRTtBQUFyQixLQVBUO0FBUUUsUUFBSSxFQUFDLFVBUlA7QUFTRSxRQUFJLEVBQUMsVUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FmRixFQTRCRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBSUUsU0FBSyxFQUFFO0FBQUVELFlBQU0sRUFBRTtBQUFWLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixDQTVCRixDQUZGLENBSkYsQ0FERjtBQWlERDtLQXJEdUJWLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNTcyNzQ3ODlhOTgyMDQ4MjIyMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlQm9keSB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2FwaS11dGlsc1wiO1xyXG5pbXBvcnQgeyBBUElTdGF0dXMgfSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9naW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBhY2NvdW50QXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FjY291bnRBcGlcIjtcclxuXHJcbi8qXHJcbkxvZ2luIHBhZ2UgdGhhdCBpcyB1c2VkIG9uIHN0Zy91YXQvcHJkIGlzIG9ubHkgcnVuIGZyb20gaW50ZXJuYWwtaHJtIGNvZGUgcmVwby5cclxuJ0xvZ2luLmpzJyBmaWxlIG9mIG90aGVyIHJlcG9zIGlzIG9ubHkgdXNlZCBmb3IgbG9jYWwgdGVzdGluZy5cclxuXHJcblRoaXMgZmlsZSBoYXZlIDIgd2F5cyB0byB1c2U6XHJcbisgR0VUIG1ldGhvZDogZGlzcGxheSBsb2dpbiBwYWdlIHdpdGggbG9naW4gZm9ybVxyXG4rIFBPU1QgbWV0aG9kOiByZWNlaXZlIHN1Ym1pdHRlZCBsb2dpbiBkYXRhICh1c2VybmFtZS9wYXNzd29yZClcclxuKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICBsZXQgcmV0dXJuT2JqZWN0ID0geyBwcm9wczoge30gfTtcclxuXHJcbiAgaWYgKGN0eC5yZXEgJiYgY3R4LnJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAvLyByZWFkIGZvcm0gZGF0YVxyXG4gICAgbGV0IGJvZHkgPSBhd2FpdCBwYXJzZUJvZHkoY3R4LnJlcSwgXCIxa2JcIik7XHJcblxyXG4gICAgLy8gR2V0IGFjY291bnRcclxuICAgIGNvbnN0IGxpc3RBY2NvdW50ID0gKGF3YWl0IGFjY291bnRBcGkuZ2V0QWNjb3VudCh7fSkpLmRhdGEuZGF0YTtcclxuICAgIGxldCBpc0xvZ2luID0gZmFsc2U7XHJcbiAgICBsZXQgYWNjb3VudCA9IHt9O1xyXG5cclxuICAgIGxpc3RBY2NvdW50Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLkVtYWlsID09PSBib2R5LmVtYWlsICYmXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLlBhc3N3b3JkID09PSBib2R5LnBhc3N3b3JkICYmXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLkF1dGhvcml6YXRpb24gPT09IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgYWNjb3VudCA9IGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChpc0xvZ2luKSB7XHJcbiAgICAgIC8vIGxldCB1cmwgPSBib2R5LnVybCB8fCBcIi9jbXMvcHJvZHVjdFwiO1xyXG4gICAgICAvLyBsZXQgcmVzID0gY3R4LnJlcztcclxuICAgICAgLy8gcmVzLnNldEhlYWRlcihcImxvY2F0aW9uXCIsIHVybCk7XHJcbiAgICAgIC8vIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gICAgICAvLyByZXMuZW5kKCk7XHJcbiAgICAgIHJldHVybk9iamVjdC5wcm9wcy5sb2dnZWRJblVzZXJJbmZvID0gYWNjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm5PYmplY3QucHJvcHMudXJsID0gYm9keS51cmw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybk9iamVjdC5wcm9wcy51cmwgPSBjdHgucXVlcnkudXJsIHx8IFwiL2Ntcy9wcm9kdWN0XCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmV0dXJuT2JqZWN0O1xyXG59XHJcblxyXG4vKlxyXG5BIHNpbXBsZSBsb2dpbiBwYWdlLlxyXG5DYW4gY3VzdG9taXplIHRvIGRpc3BsYXkgbW9yZS5cclxuTG9naW5Gb3JtIGhhcyBiYXNpYyBpbnB1dHMgb2YgYXV0aGVudGljYXRpb24gZmxvdzpcclxuKyBMb2dpbiBsYWJlbFxyXG4rIFVzZXJuYW1lIC8gcGFzc3dvcmQgaW5wdXRcclxuKyBTdWJtaXQgYnV0dG9uXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IGFjY291bnQgPSBwcm9wcy5sb2dnZWRJblVzZXJJbmZvO1xyXG4gIGNvbnNvbGUubG9nKGFjY291bnQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPsSQxINuZyBuaOG6rXAgdsOgbyBo4buHIHRo4buRbmcgbuG7mWkgYuG7mTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybX0+XHJcbiAgICAgICAgPGgxPsSQxINuZyBuaOG6rXA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVybFwiIHZhbHVlPXtwcm9wcy51cmx9IC8+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUw6puIHTDoGkga2hv4bqjblwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTIsIHdpZHRoOiAyODAgfX1cclxuICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTeG6rXQga2jhuql1XCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMiwgd2lkdGg6IDI4MCB9fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkMSDbmcgbmjhuq1wXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9