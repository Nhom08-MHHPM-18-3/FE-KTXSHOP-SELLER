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
  var account = props.account;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng n\u1ED9i b\u1ED9")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
    method: "POST",
    action: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "hidden",
    name: "url",
    value: props.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 83,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwicHJvcHMiLCJhY2NvdW50Iiwic3R5bGVzIiwibG9naW5Gb3JtIiwidXJsIiwic2hyaW5rIiwibWFyZ2luIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3ZDLE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDQyxPQUF0QjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBREYsQ0FERixFQUlFLE1BQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUVDLHdEQUFNLENBQUNDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBRUU7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixVQUFNLEVBQUMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLEtBQTFCO0FBQWdDLFNBQUssRUFBRUgsS0FBSyxDQUFDSSxHQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxTQUFLLEVBQUMsMEJBRlI7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUlFLG1CQUFlLEVBQUU7QUFDZkMsWUFBTSxFQUFFO0FBRE8sS0FKbkI7QUFPRSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFLEVBQVY7QUFBY0MsV0FBSyxFQUFFO0FBQXJCLEtBUFQ7QUFRRSxhQUFTLEVBQUUsSUFSYjtBQVNFLFFBQUksRUFBQyxPQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBZUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLE1BQUUsRUFBQyxVQURMO0FBRUUsU0FBSyxFQUFDLG9CQUZSO0FBR0UsVUFBTSxFQUFDLFFBSFQ7QUFJRSxtQkFBZSxFQUFFO0FBQ2ZGLFlBQU0sRUFBRTtBQURPLEtBSm5CO0FBT0UsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxFQUFWO0FBQWNDLFdBQUssRUFBRTtBQUFyQixLQVBUO0FBUUUsUUFBSSxFQUFDLFVBUlA7QUFTRSxRQUFJLEVBQUMsVUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FmRixFQTRCRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBSUUsU0FBSyxFQUFFO0FBQUVELFlBQU0sRUFBRTtBQUFWLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixDQTVCRixDQUZGLENBSkYsQ0FERjtBQWlERDtLQXBEdUJQLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uODIxZTJmM2NiOTgxOTg5YzNiNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlQm9keSB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2FwaS11dGlsc1wiO1xyXG5pbXBvcnQgeyBBUElTdGF0dXMgfSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9naW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBhY2NvdW50QXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FjY291bnRBcGlcIjtcclxuXHJcbi8qXHJcbkxvZ2luIHBhZ2UgdGhhdCBpcyB1c2VkIG9uIHN0Zy91YXQvcHJkIGlzIG9ubHkgcnVuIGZyb20gaW50ZXJuYWwtaHJtIGNvZGUgcmVwby5cclxuJ0xvZ2luLmpzJyBmaWxlIG9mIG90aGVyIHJlcG9zIGlzIG9ubHkgdXNlZCBmb3IgbG9jYWwgdGVzdGluZy5cclxuXHJcblRoaXMgZmlsZSBoYXZlIDIgd2F5cyB0byB1c2U6XHJcbisgR0VUIG1ldGhvZDogZGlzcGxheSBsb2dpbiBwYWdlIHdpdGggbG9naW4gZm9ybVxyXG4rIFBPU1QgbWV0aG9kOiByZWNlaXZlIHN1Ym1pdHRlZCBsb2dpbiBkYXRhICh1c2VybmFtZS9wYXNzd29yZClcclxuKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICBsZXQgcmV0dXJuT2JqZWN0ID0geyBwcm9wczoge30gfTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NvdW50XCIsIFwiYWtcIik7XHJcbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpdGVtXCIpKTtcclxuXHJcbiAgaWYgKGN0eC5yZXEgJiYgY3R4LnJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAvLyByZWFkIGZvcm0gZGF0YVxyXG4gICAgbGV0IGJvZHkgPSBhd2FpdCBwYXJzZUJvZHkoY3R4LnJlcSwgXCIxa2JcIik7XHJcblxyXG4gICAgLy8gR2V0IGFjY291bnRcclxuICAgIGNvbnN0IGxpc3RBY2NvdW50ID0gKGF3YWl0IGFjY291bnRBcGkuZ2V0QWNjb3VudCh7fSkpLmRhdGEuZGF0YTtcclxuICAgIGxldCBpc0xvZ2luID0gZmFsc2U7XHJcbiAgICBsZXQgYWNjb3VudCA9IHt9O1xyXG5cclxuICAgIGxpc3RBY2NvdW50Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLkVtYWlsID09PSBib2R5LmVtYWlsICYmXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLlBhc3N3b3JkID09PSBib2R5LnBhc3N3b3JkICYmXHJcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLkF1dGhvcml6YXRpb24gPT09IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgYWNjb3VudCA9IGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudFwiLCBcImFrXCIpO1xyXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpdGVtXCIpKTtcclxuXHJcbiAgICBpZiAoaXNMb2dpbikge1xyXG4gICAgICAvLyBsZXQgdXJsID0gYm9keS51cmwgfHwgXCIvY21zL3Byb2R1Y3RcIjtcclxuICAgICAgLy8gbGV0IHJlcyA9IGN0eC5yZXM7XHJcbiAgICAgIC8vIHJlcy5zZXRIZWFkZXIoXCJsb2NhdGlvblwiLCB1cmwpO1xyXG4gICAgICAvLyByZXMuc3RhdHVzQ29kZSA9IDMwMjtcclxuICAgICAgLy8gcmVzLmVuZCgpO1xyXG4gICAgICByZXR1cm5PYmplY3QucFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybk9iamVjdC5wcm9wcy51cmwgPSBib2R5LnVybDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuT2JqZWN0LnByb3BzLnVybCA9IGN0eC5xdWVyeS51cmwgfHwgXCIvY21zL3Byb2R1Y3RcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXR1cm5PYmplY3Q7XHJcbn1cclxuXHJcbi8qXHJcbkEgc2ltcGxlIGxvZ2luIHBhZ2UuXHJcbkNhbiBjdXN0b21pemUgdG8gZGlzcGxheSBtb3JlLlxyXG5Mb2dpbkZvcm0gaGFzIGJhc2ljIGlucHV0cyBvZiBhdXRoZW50aWNhdGlvbiBmbG93OlxyXG4rIExvZ2luIGxhYmVsXHJcbisgVXNlcm5hbWUgLyBwYXNzd29yZCBpbnB1dFxyXG4rIFN1Ym1pdCBidXR0b25cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgYWNjb3VudCA9IHByb3BzLmFjY291bnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+xJDEg25nIG5o4bqtcCB2w6BvIGjhu4cgdGjhu5FuZyBu4buZaSBi4buZPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtfT5cclxuICAgICAgICA8aDE+xJDEg25nIG5o4bqtcDwvaDE+XHJcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXJsXCIgdmFsdWU9e3Byb3BzLnVybH0gLz5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlTDqm4gdMOgaSBraG/huqNuXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMiwgd2lkdGg6IDI4MCB9fVxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJN4bqtdCBraOG6qXVcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEyLCB3aWR0aDogMjgwIH19XHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQxINuZyBuaOG6rXBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=