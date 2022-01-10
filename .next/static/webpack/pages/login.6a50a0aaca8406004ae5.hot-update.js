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
      localStorage.setItem('account');
      router.push("/cms/product");
    }
  }, [props.loggedInUserInfo]);

  if (!props.loggedInUserInfo) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng n\u1ED9i b\u1ED9")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      className: _login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
      method: "POST",
      action: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, __jsx("input", {
      type: "hidden",
      name: "url",
      value: props.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
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
        lineNumber: 81,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
        lineNumber: 94,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
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
        lineNumber: 107,
        columnNumber: 15
      }
    }, "\u0110\u0103ng nh\u1EADp")))));
  } else {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 12
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJsb2dnZWRJblVzZXJJbmZvIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJzdHlsZXMiLCJsb2dpbkZvcm0iLCJ1cmwiLCJzaHJpbmsiLCJtYXJnaW4iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDdkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSCxLQUFLLENBQUNJLGdCQUFWLEVBQTRCO0FBQzFCQyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCO0FBQ0FMLFlBQU0sQ0FBQ00sSUFBUCxDQUFZLGNBQVo7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDUCxLQUFLLENBQUNJLGdCQUFQLENBTE0sQ0FBVDs7QUFPQSxNQUFJLENBQUNKLEtBQUssQ0FBQ0ksZ0JBQVgsRUFBNkI7QUFDM0IsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RUFERixDQURGLEVBSUUsTUFBQyx1REFBRDtBQUFPLGVBQVMsRUFBRUksd0RBQU0sQ0FBQ0MsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRTtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLFlBQU0sRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFxQixVQUFJLEVBQUMsS0FBMUI7QUFBZ0MsV0FBSyxFQUFFVCxLQUFLLENBQUNVLEdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkRBQUQ7QUFDRSxRQUFFLEVBQUMsT0FETDtBQUVFLFdBQUssRUFBQywwQkFGUjtBQUdFLFlBQU0sRUFBQyxRQUhUO0FBSUUscUJBQWUsRUFBRTtBQUNmQyxjQUFNLEVBQUU7QUFETyxPQUpuQjtBQU9FLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUUsRUFBVjtBQUFjQyxhQUFLLEVBQUU7QUFBckIsT0FQVDtBQVFFLGVBQVMsRUFBRSxJQVJiO0FBU0UsVUFBSSxFQUFDLE9BVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRkYsRUFlRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJEQUFEO0FBQ0UsUUFBRSxFQUFDLFVBREw7QUFFRSxXQUFLLEVBQUMsb0JBRlI7QUFHRSxZQUFNLEVBQUMsUUFIVDtBQUlFLHFCQUFlLEVBQUU7QUFDZkYsY0FBTSxFQUFFO0FBRE8sT0FKbkI7QUFPRSxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFLEVBQVY7QUFBY0MsYUFBSyxFQUFFO0FBQXJCLE9BUFQ7QUFRRSxVQUFJLEVBQUMsVUFSUDtBQVNFLFVBQUksRUFBQyxVQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQWZGLEVBNEJFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGFBQU8sRUFBQyxXQUZWO0FBR0UsV0FBSyxFQUFDLFNBSFI7QUFJRSxXQUFLLEVBQUU7QUFBRUQsY0FBTSxFQUFFO0FBQVYsT0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBNUJGLENBRkYsQ0FKRixDQURGO0FBaURELEdBbERELE1Ba0RPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDtBQUNGOztHQTlEdUJiLFM7VUFDUEcscUQ7OztLQURPSCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjZhNTBhMGFhY2E4NDA2MDA0YWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZUJvZHkgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9hcGktdXRpbHNcIjtcclxuaW1wb3J0IHsgQVBJU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb25cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xvZ2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgYWNjb3VudEFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hY2NvdW50QXBpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qXHJcbkxvZ2luIHBhZ2UgdGhhdCBpcyB1c2VkIG9uIHN0Zy91YXQvcHJkIGlzIG9ubHkgcnVuIGZyb20gaW50ZXJuYWwtaHJtIGNvZGUgcmVwby5cclxuJ0xvZ2luLmpzJyBmaWxlIG9mIG90aGVyIHJlcG9zIGlzIG9ubHkgdXNlZCBmb3IgbG9jYWwgdGVzdGluZy5cclxuXHJcblRoaXMgZmlsZSBoYXZlIDIgd2F5cyB0byB1c2U6XHJcbisgR0VUIG1ldGhvZDogZGlzcGxheSBsb2dpbiBwYWdlIHdpdGggbG9naW4gZm9ybVxyXG4rIFBPU1QgbWV0aG9kOiByZWNlaXZlIHN1Ym1pdHRlZCBsb2dpbiBkYXRhICh1c2VybmFtZS9wYXNzd29yZClcclxuKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICBsZXQgcmV0dXJuT2JqZWN0ID0geyBwcm9wczoge30gfTtcclxuXHJcbiAgaWYgKGN0eC5yZXEgJiYgY3R4LnJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAvLyByZWFkIGZvcm0gZGF0YVxyXG4gICAgbGV0IGJvZHkgPSBhd2FpdCBwYXJzZUJvZHkoY3R4LnJlcSwgXCIxa2JcIik7XHJcblxyXG4gICAgLy8gR2V0IGFjY291bnRcclxuICAgIGNvbnN0IGxpc3RBY2NvdW50ID0gKGF3YWl0IGFjY291bnRBcGkuZ2V0QWNjb3VudCh7fSkpLmRhdGEuZGF0YTtcclxuICAgIGxldCBpc0xvZ2luID0gZmFsc2U7XHJcbiAgICBsZXQgYWNjb3VudCA9IHt9O1xyXG5cclxuICAgIGxpc3RBY2NvdW50Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLkVtYWlsID09PSBib2R5LmVtYWlsICYmXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLlBhc3N3b3JkID09PSBib2R5LnBhc3N3b3JkICYmXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLkF1dGhvcml6YXRpb24gPT09IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgYWNjb3VudCA9IGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChpc0xvZ2luKSB7XHJcbiAgICAgIHJldHVybk9iamVjdC5wcm9wcy5sb2dnZWRJblVzZXJJbmZvID0gYWNjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm5PYmplY3QucHJvcHMudXJsID0gYm9keS51cmw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybk9iamVjdC5wcm9wcy51cmwgPSBjdHgucXVlcnkudXJsIHx8IFwiL2Ntcy9wcm9kdWN0XCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmV0dXJuT2JqZWN0O1xyXG59XHJcblxyXG4vKlxyXG5BIHNpbXBsZSBsb2dpbiBwYWdlLlxyXG5DYW4gY3VzdG9taXplIHRvIGRpc3BsYXkgbW9yZS5cclxuTG9naW5Gb3JtIGhhcyBiYXNpYyBpbnB1dHMgb2YgYXV0aGVudGljYXRpb24gZmxvdzpcclxuKyBMb2dpbiBsYWJlbFxyXG4rIFVzZXJuYW1lIC8gcGFzc3dvcmQgaW5wdXRcclxuKyBTdWJtaXQgYnV0dG9uXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMubG9nZ2VkSW5Vc2VySW5mbykge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjb3VudCcsIClcclxuICAgICAgcm91dGVyLnB1c2goXCIvY21zL3Byb2R1Y3RcIik7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLmxvZ2dlZEluVXNlckluZm9dKTtcclxuXHJcbiAgaWYgKCFwcm9wcy5sb2dnZWRJblVzZXJJbmZvKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPsSQxINuZyBuaOG6rXAgdsOgbyBo4buHIHRo4buRbmcgbuG7mWkgYuG7mTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm19PlxyXG4gICAgICAgICAgPGgxPsSQxINuZyBuaOG6rXA8L2gxPlxyXG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1cmxcIiB2YWx1ZT17cHJvcHMudXJsfSAvPlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUw6puIHTDoGkga2hv4bqjblwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEyLCB3aWR0aDogMjgwIH19XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJN4bqtdCBraOG6qXVcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMiwgd2lkdGg6IDI4MCB9fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDEkMSDbmcgbmjhuq1wXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9