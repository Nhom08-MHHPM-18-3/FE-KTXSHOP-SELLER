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
      localStorage.setItem("account", props.loggedInUserInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJsb2dnZWRJblVzZXJJbmZvIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJzdHlsZXMiLCJsb2dpbkZvcm0iLCJ1cmwiLCJzaHJpbmsiLCJtYXJnaW4iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDdkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSCxLQUFLLENBQUNJLGdCQUFWLEVBQTRCO0FBQzFCQyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDTixLQUFLLENBQUNJLGdCQUF0QztBQUNBSCxZQUFNLENBQUNNLElBQVAsQ0FBWSxjQUFaO0FBQ0Q7QUFDRixHQUxRLEVBS04sQ0FBQ1AsS0FBSyxDQUFDSSxnQkFBUCxDQUxNLENBQVQ7O0FBT0EsTUFBSSxDQUFDSixLQUFLLENBQUNJLGdCQUFYLEVBQTZCO0FBQzNCLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkVBREYsQ0FERixFQUlFLE1BQUMsdURBQUQ7QUFBTyxlQUFTLEVBQUVJLHdEQUFNLENBQUNDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUU7QUFBTSxZQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFNLEVBQUMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsVUFBSSxFQUFDLEtBQTFCO0FBQWdDLFdBQUssRUFBRVQsS0FBSyxDQUFDVSxHQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJEQUFEO0FBQ0UsUUFBRSxFQUFDLE9BREw7QUFFRSxXQUFLLEVBQUMsMEJBRlI7QUFHRSxZQUFNLEVBQUMsUUFIVDtBQUlFLHFCQUFlLEVBQUU7QUFDZkMsY0FBTSxFQUFFO0FBRE8sT0FKbkI7QUFPRSxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFLEVBQVY7QUFBY0MsYUFBSyxFQUFFO0FBQXJCLE9BUFQ7QUFRRSxlQUFTLEVBQUUsSUFSYjtBQVNFLFVBQUksRUFBQyxPQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUZGLEVBZUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyREFBRDtBQUNFLFFBQUUsRUFBQyxVQURMO0FBRUUsV0FBSyxFQUFDLG9CQUZSO0FBR0UsWUFBTSxFQUFDLFFBSFQ7QUFJRSxxQkFBZSxFQUFFO0FBQ2ZGLGNBQU0sRUFBRTtBQURPLE9BSm5CO0FBT0UsV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRSxFQUFWO0FBQWNDLGFBQUssRUFBRTtBQUFyQixPQVBUO0FBUUUsVUFBSSxFQUFDLFVBUlA7QUFTRSxVQUFJLEVBQUMsVUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FmRixFQTRCRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFPLEVBQUMsV0FGVjtBQUdFLFdBQUssRUFBQyxTQUhSO0FBSUUsV0FBSyxFQUFFO0FBQUVELGNBQU0sRUFBRTtBQUFWLE9BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQTVCRixDQUZGLENBSkYsQ0FERjtBQWlERCxHQWxERCxNQWtETztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7QUFDRjs7R0E5RHVCYixTO1VBQ1BHLHFEOzs7S0FET0gsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42YWE3ZTYwZDA0MGM0ODJjM2U4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VCb2R5IH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvYXBpLXV0aWxzXCI7XHJcbmltcG9ydCB7IEFQSVN0YXR1cyB9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFBhcGVyLCBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2dpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGFjY291bnRBcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYWNjb3VudEFwaVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKlxyXG5Mb2dpbiBwYWdlIHRoYXQgaXMgdXNlZCBvbiBzdGcvdWF0L3ByZCBpcyBvbmx5IHJ1biBmcm9tIGludGVybmFsLWhybSBjb2RlIHJlcG8uXHJcbidMb2dpbi5qcycgZmlsZSBvZiBvdGhlciByZXBvcyBpcyBvbmx5IHVzZWQgZm9yIGxvY2FsIHRlc3RpbmcuXHJcblxyXG5UaGlzIGZpbGUgaGF2ZSAyIHdheXMgdG8gdXNlOlxyXG4rIEdFVCBtZXRob2Q6IGRpc3BsYXkgbG9naW4gcGFnZSB3aXRoIGxvZ2luIGZvcm1cclxuKyBQT1NUIG1ldGhvZDogcmVjZWl2ZSBzdWJtaXR0ZWQgbG9naW4gZGF0YSAodXNlcm5hbWUvcGFzc3dvcmQpXHJcbiovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgbGV0IHJldHVybk9iamVjdCA9IHsgcHJvcHM6IHt9IH07XHJcblxyXG4gIGlmIChjdHgucmVxICYmIGN0eC5yZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgLy8gcmVhZCBmb3JtIGRhdGFcclxuICAgIGxldCBib2R5ID0gYXdhaXQgcGFyc2VCb2R5KGN0eC5yZXEsIFwiMWtiXCIpO1xyXG5cclxuICAgIC8vIEdldCBhY2NvdW50XHJcbiAgICBjb25zdCBsaXN0QWNjb3VudCA9IChhd2FpdCBhY2NvdW50QXBpLmdldEFjY291bnQoe30pKS5kYXRhLmRhdGE7XHJcbiAgICBsZXQgaXNMb2dpbiA9IGZhbHNlO1xyXG4gICAgbGV0IGFjY291bnQgPSB7fTtcclxuXHJcbiAgICBsaXN0QWNjb3VudC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5FbWFpbCA9PT0gYm9keS5lbWFpbCAmJlxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5QYXNzd29yZCA9PT0gYm9keS5wYXNzd29yZCAmJlxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5BdXRob3JpemF0aW9uID09PSAxXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzTG9naW4gPSB0cnVlO1xyXG4gICAgICAgIGFjY291bnQgPSBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaXNMb2dpbikge1xyXG4gICAgICByZXR1cm5PYmplY3QucHJvcHMubG9nZ2VkSW5Vc2VySW5mbyA9IGFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuT2JqZWN0LnByb3BzLnVybCA9IGJvZHkudXJsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm5PYmplY3QucHJvcHMudXJsID0gY3R4LnF1ZXJ5LnVybCB8fCBcIi9jbXMvcHJvZHVjdFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldHVybk9iamVjdDtcclxufVxyXG5cclxuLypcclxuQSBzaW1wbGUgbG9naW4gcGFnZS5cclxuQ2FuIGN1c3RvbWl6ZSB0byBkaXNwbGF5IG1vcmUuXHJcbkxvZ2luRm9ybSBoYXMgYmFzaWMgaW5wdXRzIG9mIGF1dGhlbnRpY2F0aW9uIGZsb3c6XHJcbisgTG9naW4gbGFiZWxcclxuKyBVc2VybmFtZSAvIHBhc3N3b3JkIGlucHV0XHJcbisgU3VibWl0IGJ1dHRvblxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLmxvZ2dlZEluVXNlckluZm8pIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NvdW50XCIsIHByb3BzLmxvZ2dlZEluVXNlckluZm8pO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9jbXMvcHJvZHVjdFwiKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMubG9nZ2VkSW5Vc2VySW5mb10pO1xyXG5cclxuICBpZiAoIXByb3BzLmxvZ2dlZEluVXNlckluZm8pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+xJDEg25nIG5o4bqtcCB2w6BvIGjhu4cgdGjhu5FuZyBu4buZaSBi4buZPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybX0+XHJcbiAgICAgICAgICA8aDE+xJDEg25nIG5o4bqtcDwvaDE+XHJcbiAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVybFwiIHZhbHVlPXtwcm9wcy51cmx9IC8+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlTDqm4gdMOgaSBraG/huqNuXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTIsIHdpZHRoOiAyODAgfX1cclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk3huq10IGto4bqpdVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEyLCB3aWR0aDogMjgwIH19XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIMSQxINuZyBuaOG6rXBcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=