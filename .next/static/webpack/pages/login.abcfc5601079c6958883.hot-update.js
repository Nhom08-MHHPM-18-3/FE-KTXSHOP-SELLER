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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.loggedInUserInfo) {
      router.push("/cms/product");
    }
  }, [props.loggedInUserInfo]);

  if (!props.loggedInUserInfo) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng n\u1ED9i b\u1ED9")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      className: _login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
      method: "POST",
      action: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, __jsx("input", {
      type: "hidden",
      name: "url",
      value: props.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
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
        lineNumber: 80,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
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
        lineNumber: 93,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
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
        lineNumber: 106,
        columnNumber: 15
      }
    }, "\u0110\u0103ng nh\u1EADp")))));
  } else {
    return div;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJsb2dnZWRJblVzZXJJbmZvIiwicHVzaCIsInN0eWxlcyIsImxvZ2luRm9ybSIsInVybCIsInNocmluayIsIm1hcmdpbiIsIndpZHRoIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN2QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlILEtBQUssQ0FBQ0ksZ0JBQVYsRUFBNEI7QUFDMUJILFlBQU0sQ0FBQ0ksSUFBUCxDQUFZLGNBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDTCxLQUFLLENBQUNJLGdCQUFQLENBSk0sQ0FBVDs7QUFNQSxNQUFJLENBQUNKLEtBQUssQ0FBQ0ksZ0JBQVgsRUFBNkI7QUFDM0IsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RUFERixDQURGLEVBSUUsTUFBQyx1REFBRDtBQUFPLGVBQVMsRUFBRUUsd0RBQU0sQ0FBQ0MsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRTtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLFlBQU0sRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFxQixVQUFJLEVBQUMsS0FBMUI7QUFBZ0MsV0FBSyxFQUFFUCxLQUFLLENBQUNRLEdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkRBQUQ7QUFDRSxRQUFFLEVBQUMsT0FETDtBQUVFLFdBQUssRUFBQywwQkFGUjtBQUdFLFlBQU0sRUFBQyxRQUhUO0FBSUUscUJBQWUsRUFBRTtBQUNmQyxjQUFNLEVBQUU7QUFETyxPQUpuQjtBQU9FLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUUsRUFBVjtBQUFjQyxhQUFLLEVBQUU7QUFBckIsT0FQVDtBQVFFLGVBQVMsRUFBRSxJQVJiO0FBU0UsVUFBSSxFQUFDLE9BVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRkYsRUFlRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJEQUFEO0FBQ0UsUUFBRSxFQUFDLFVBREw7QUFFRSxXQUFLLEVBQUMsb0JBRlI7QUFHRSxZQUFNLEVBQUMsUUFIVDtBQUlFLHFCQUFlLEVBQUU7QUFDZkYsY0FBTSxFQUFFO0FBRE8sT0FKbkI7QUFPRSxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFLEVBQVY7QUFBY0MsYUFBSyxFQUFFO0FBQXJCLE9BUFQ7QUFRRSxVQUFJLEVBQUMsVUFSUDtBQVNFLFVBQUksRUFBQyxVQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQWZGLEVBNEJFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGFBQU8sRUFBQyxXQUZWO0FBR0UsV0FBSyxFQUFDLFNBSFI7QUFJRSxXQUFLLEVBQUU7QUFBRUQsY0FBTSxFQUFFO0FBQVYsT0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBNUJGLENBRkYsQ0FKRixDQURGO0FBaURELEdBbERELE1Bb0RLO0FBQ0gsV0FBT0UsR0FBUDtBQUNEO0FBQ0Y7O0dBL0R1QmIsUztVQUNQRyxxRDs7O0tBRE9ILFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYWJjZmM1NjAxMDc5YzY5NTg4ODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlQm9keSB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2FwaS11dGlsc1wiO1xyXG5pbXBvcnQgeyBBUElTdGF0dXMgfSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9naW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBhY2NvdW50QXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FjY291bnRBcGlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLypcclxuTG9naW4gcGFnZSB0aGF0IGlzIHVzZWQgb24gc3RnL3VhdC9wcmQgaXMgb25seSBydW4gZnJvbSBpbnRlcm5hbC1ocm0gY29kZSByZXBvLlxyXG4nTG9naW4uanMnIGZpbGUgb2Ygb3RoZXIgcmVwb3MgaXMgb25seSB1c2VkIGZvciBsb2NhbCB0ZXN0aW5nLlxyXG5cclxuVGhpcyBmaWxlIGhhdmUgMiB3YXlzIHRvIHVzZTpcclxuKyBHRVQgbWV0aG9kOiBkaXNwbGF5IGxvZ2luIHBhZ2Ugd2l0aCBsb2dpbiBmb3JtXHJcbisgUE9TVCBtZXRob2Q6IHJlY2VpdmUgc3VibWl0dGVkIGxvZ2luIGRhdGEgKHVzZXJuYW1lL3Bhc3N3b3JkKVxyXG4qL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gIGxldCByZXR1cm5PYmplY3QgPSB7IHByb3BzOiB7fSB9O1xyXG5cclxuICBpZiAoY3R4LnJlcSAmJiBjdHgucmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIC8vIHJlYWQgZm9ybSBkYXRhXHJcbiAgICBsZXQgYm9keSA9IGF3YWl0IHBhcnNlQm9keShjdHgucmVxLCBcIjFrYlwiKTtcclxuXHJcbiAgICAvLyBHZXQgYWNjb3VudFxyXG4gICAgY29uc3QgbGlzdEFjY291bnQgPSAoYXdhaXQgYWNjb3VudEFwaS5nZXRBY2NvdW50KHt9KSkuZGF0YS5kYXRhO1xyXG4gICAgbGV0IGlzTG9naW4gPSBmYWxzZTtcclxuICAgIGxldCBhY2NvdW50ID0ge307XHJcblxyXG4gICAgbGlzdEFjY291bnQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpdGVtLmF0dHJpYnV0ZXMuRW1haWwgPT09IGJvZHkuZW1haWwgJiZcclxuICAgICAgICBpdGVtLmF0dHJpYnV0ZXMuUGFzc3dvcmQgPT09IGJvZHkucGFzc3dvcmQgJiZcclxuICAgICAgICBpdGVtLmF0dHJpYnV0ZXMuQXV0aG9yaXphdGlvbiA9PT0gMVxyXG4gICAgICApIHtcclxuICAgICAgICBpc0xvZ2luID0gdHJ1ZTtcclxuICAgICAgICBhY2NvdW50ID0gaXRlbTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGlzTG9naW4pIHtcclxuICAgICAgcmV0dXJuT2JqZWN0LnByb3BzLmxvZ2dlZEluVXNlckluZm8gPSBhY2NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybk9iamVjdC5wcm9wcy51cmwgPSBib2R5LnVybDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuT2JqZWN0LnByb3BzLnVybCA9IGN0eC5xdWVyeS51cmwgfHwgXCIvY21zL3Byb2R1Y3RcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXR1cm5PYmplY3Q7XHJcbn1cclxuXHJcbi8qXHJcbkEgc2ltcGxlIGxvZ2luIHBhZ2UuXHJcbkNhbiBjdXN0b21pemUgdG8gZGlzcGxheSBtb3JlLlxyXG5Mb2dpbkZvcm0gaGFzIGJhc2ljIGlucHV0cyBvZiBhdXRoZW50aWNhdGlvbiBmbG93OlxyXG4rIExvZ2luIGxhYmVsXHJcbisgVXNlcm5hbWUgLyBwYXNzd29yZCBpbnB1dFxyXG4rIFN1Ym1pdCBidXR0b25cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5sb2dnZWRJblVzZXJJbmZvKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Ntcy9wcm9kdWN0XCIpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5sb2dnZWRJblVzZXJJbmZvXSk7XHJcblxyXG4gIGlmICghcHJvcHMubG9nZ2VkSW5Vc2VySW5mbykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT7EkMSDbmcgbmjhuq1wIHbDoG8gaOG7hyB0aOG7kW5nIG7hu5lpIGLhu5k8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtfT5cclxuICAgICAgICAgIDxoMT7EkMSDbmcgbmjhuq1wPC9oMT5cclxuICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXJsXCIgdmFsdWU9e3Byb3BzLnVybH0gLz5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVMOqbiB0w6BpIGtob+G6o25cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMiwgd2lkdGg6IDI4MCB9fVxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTeG6rXQga2jhuql1XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTIsIHdpZHRoOiAyODAgfX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4IH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgxJDEg25nIG5o4bqtcFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBlbHNlIHtcclxuICAgIHJldHVybiBkaXZcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==