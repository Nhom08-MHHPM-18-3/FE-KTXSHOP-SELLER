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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\pages\\login\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





impo;
/*
Login page that is used on stg/uat/prd is only run from internal-hrm code repo.
'Login.js' file of other repos is only used for local testing.

This file have 2 ways to use:
+ GET method: display login page with login form
+ POST method: receive submitted login data (username/password)
*/

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
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  useEffect(function () {
    router.push("/");
  }, [props.loggedInUserInfo]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng n\u1ED9i b\u1ED9")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
    method: "POST",
    action: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "hidden",
    name: "url",
    value: props.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 103,
      columnNumber: 13
    }
  }, "\u0110\u0103ng nh\u1EADp")))));
}

_s(LoginPage, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiaW1wbyIsIkxvZ2luUGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImxvZ2dlZEluVXNlckluZm8iLCJzdHlsZXMiLCJsb2dpbkZvcm0iLCJ1cmwiLCJzaHJpbmsiLCJtYXJnaW4iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQUEsSUFBSTtBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDdkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxXQUFTLENBQUMsWUFBTTtBQUNkRixVQUFNLENBQUNHLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNKLEtBQUssQ0FBQ0ssZ0JBQVAsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRUFERixDQURGLEVBSUUsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsRUFFRTtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFVBQU0sRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsS0FBMUI7QUFBZ0MsU0FBSyxFQUFFUCxLQUFLLENBQUNRLEdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLFNBQUssRUFBQywwQkFGUjtBQUdFLFVBQU0sRUFBQyxRQUhUO0FBSUUsbUJBQWUsRUFBRTtBQUNmQyxZQUFNLEVBQUU7QUFETyxLQUpuQjtBQU9FLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUUsRUFBVjtBQUFjQyxXQUFLLEVBQUU7QUFBckIsS0FQVDtBQVFFLGFBQVMsRUFBRSxJQVJiO0FBU0UsUUFBSSxFQUFDLE9BVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFlRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLFVBREw7QUFFRSxTQUFLLEVBQUMsb0JBRlI7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUlFLG1CQUFlLEVBQUU7QUFDZkYsWUFBTSxFQUFFO0FBRE8sS0FKbkI7QUFPRSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFLEVBQVY7QUFBY0MsV0FBSyxFQUFFO0FBQXJCLEtBUFQ7QUFRRSxRQUFJLEVBQUMsVUFSUDtBQVNFLFFBQUksRUFBQyxVQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWZGLEVBNEJFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxTQUFLLEVBQUU7QUFBRUQsWUFBTSxFQUFFO0FBQVYsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBNUJGLENBRkYsQ0FKRixDQURGO0FBaUREOztHQXZEdUJYLFM7VUFDUEcscUQ7OztLQURPSCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmM3Yzg2ZjQzMjAyM2ViNGJiOTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZUJvZHkgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9hcGktdXRpbHNcIjtcclxuaW1wb3J0IHsgQVBJU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb25cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xvZ2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgYWNjb3VudEFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hY2NvdW50QXBpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvXHJcblxyXG4vKlxyXG5Mb2dpbiBwYWdlIHRoYXQgaXMgdXNlZCBvbiBzdGcvdWF0L3ByZCBpcyBvbmx5IHJ1biBmcm9tIGludGVybmFsLWhybSBjb2RlIHJlcG8uXHJcbidMb2dpbi5qcycgZmlsZSBvZiBvdGhlciByZXBvcyBpcyBvbmx5IHVzZWQgZm9yIGxvY2FsIHRlc3RpbmcuXHJcblxyXG5UaGlzIGZpbGUgaGF2ZSAyIHdheXMgdG8gdXNlOlxyXG4rIEdFVCBtZXRob2Q6IGRpc3BsYXkgbG9naW4gcGFnZSB3aXRoIGxvZ2luIGZvcm1cclxuKyBQT1NUIG1ldGhvZDogcmVjZWl2ZSBzdWJtaXR0ZWQgbG9naW4gZGF0YSAodXNlcm5hbWUvcGFzc3dvcmQpXHJcbiovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgbGV0IHJldHVybk9iamVjdCA9IHsgcHJvcHM6IHt9IH07XHJcblxyXG4gIGlmIChjdHgucmVxICYmIGN0eC5yZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgLy8gcmVhZCBmb3JtIGRhdGFcclxuICAgIGxldCBib2R5ID0gYXdhaXQgcGFyc2VCb2R5KGN0eC5yZXEsIFwiMWtiXCIpO1xyXG5cclxuICAgIC8vIEdldCBhY2NvdW50XHJcbiAgICBjb25zdCBsaXN0QWNjb3VudCA9IChhd2FpdCBhY2NvdW50QXBpLmdldEFjY291bnQoe30pKS5kYXRhLmRhdGE7XHJcbiAgICBsZXQgaXNMb2dpbiA9IGZhbHNlO1xyXG4gICAgbGV0IGFjY291bnQgPSB7fTtcclxuXHJcbiAgICBsaXN0QWNjb3VudC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5FbWFpbCA9PT0gYm9keS5lbWFpbCAmJlxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5QYXNzd29yZCA9PT0gYm9keS5wYXNzd29yZCAmJlxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5BdXRob3JpemF0aW9uID09PSAxXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzTG9naW4gPSB0cnVlO1xyXG4gICAgICAgIGFjY291bnQgPSBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaXNMb2dpbikge1xyXG4gICAgICByZXR1cm5PYmplY3QucHJvcHMubG9nZ2VkSW5Vc2VySW5mbyA9IGFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuT2JqZWN0LnByb3BzLnVybCA9IGJvZHkudXJsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm5PYmplY3QucHJvcHMudXJsID0gY3R4LnF1ZXJ5LnVybCB8fCBcIi9jbXMvcHJvZHVjdFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldHVybk9iamVjdDtcclxufVxyXG5cclxuLypcclxuQSBzaW1wbGUgbG9naW4gcGFnZS5cclxuQ2FuIGN1c3RvbWl6ZSB0byBkaXNwbGF5IG1vcmUuXHJcbkxvZ2luRm9ybSBoYXMgYmFzaWMgaW5wdXRzIG9mIGF1dGhlbnRpY2F0aW9uIGZsb3c6XHJcbisgTG9naW4gbGFiZWxcclxuKyBVc2VybmFtZSAvIHBhc3N3b3JkIGlucHV0XHJcbisgU3VibWl0IGJ1dHRvblxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH0sIFtwcm9wcy5sb2dnZWRJblVzZXJJbmZvXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+xJDEg25nIG5o4bqtcCB2w6BvIGjhu4cgdGjhu5FuZyBu4buZaSBi4buZPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtfT5cclxuICAgICAgICA8aDE+xJDEg25nIG5o4bqtcDwvaDE+XHJcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXJsXCIgdmFsdWU9e3Byb3BzLnVybH0gLz5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlTDqm4gdMOgaSBraG/huqNuXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMiwgd2lkdGg6IDI4MCB9fVxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJN4bqtdCBraOG6qXVcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEyLCB3aWR0aDogMjgwIH19XHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQxINuZyBuaOG6rXBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=