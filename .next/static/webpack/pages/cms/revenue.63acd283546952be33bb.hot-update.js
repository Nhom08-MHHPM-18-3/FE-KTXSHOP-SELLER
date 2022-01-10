webpackHotUpdate_N_E("pages/cms/revenue",{

/***/ "./pages/cms/revenue/index.js":
/*!************************************!*\
  !*** ./pages/cms/revenue/index.js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Revenue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/login */ "./lib/login.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_my_card_my_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/my-card/my-card */ "./component/my-card/my-card.js");
/* harmony import */ var _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./revenue.module.scss */ "./pages/cms/revenue/revenue.module.scss");
/* harmony import */ var _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_my_context_my_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/my-context/my-context */ "./component/my-context/my-context.js");
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\pages\\cms\\revenue\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var __N_SSP = true;
function Revenue(props) {
  return Object(_lib_login__WEBPACK_IMPORTED_MODULE_1__["renderWithLoggedInUser"])(props, render);
}
_c = Revenue;

function render(_ref) {
  var _this = this;

  var moneyPaid = _ref.moneyPaid,
      moneyUnpaid = _ref.moneyUnpaid,
      numberProductsPaid = _ref.numberProductsPaid,
      numberProductsUnpaid = _ref.numberProductsUnpaid;
  var listRevenueProductsPaid = [{
    title: "Tổng số tiền",
    count: "".concat(moneyPaid, "\u0111")
  }, {
    title: "Tổng số đơn hàng",
    count: numberProductsPaid
  }];
  var listRevenueProductsUnpaid = [{
    title: "Tổng số tiền",
    count: "".concat(moneyUnpaid, "\u0111")
  }, {
    title: "Tổng số đơn hàng",
    count: numberProductsUnpaid
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    select: "/cms/revenue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "T\u1ED5ng qu\xE1t doanh thu")), __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_3__["MyCard"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_3__["MyCardHeader"], {
    title: "T\u1ED5ng quan doanh thu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-12 col-xl-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "".concat(_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue, " mb_30\""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "mb_25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, "\u0110\u01A1n h\xE0ng s\u1EBD thanh to\xE1n"))), __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__servay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, listRevenueProductsUnpaid.map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "col-md-6",
      key: "paid-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__count,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 27
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__counter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 31
      }
    }, item.count)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, item.title))));
  }))))), __jsx("div", {
    className: "col-lg-12 col-xl-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "".concat(_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue, " mb_30\""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "mb_25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, "\u0110\u01A1n h\xE0ng \u0111\xE3 thanh to\xE1n"))), __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__servay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, listRevenueProductsPaid.map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "col-md-6",
      key: "paid-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__count,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 27
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__counter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 31
      }
    }, item.count)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 29
      }
    }, item.title))));
  }))))))));
}

var _c;

$RefreshReg$(_c, "Revenue");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY21zL3JldmVudWUvaW5kZXguanMiXSwibmFtZXMiOlsiUmV2ZW51ZSIsInByb3BzIiwicmVuZGVyV2l0aExvZ2dlZEluVXNlciIsInJlbmRlciIsIm1vbmV5UGFpZCIsIm1vbmV5VW5wYWlkIiwibnVtYmVyUHJvZHVjdHNQYWlkIiwibnVtYmVyUHJvZHVjdHNVbnBhaWQiLCJsaXN0UmV2ZW51ZVByb2R1Y3RzUGFpZCIsInRpdGxlIiwiY291bnQiLCJsaXN0UmV2ZW51ZVByb2R1Y3RzVW5wYWlkIiwic3R5bGVzIiwidmlld19yZXZlbnVlIiwidmlld19yZXZlbnVlX19oZWFkZXIiLCJ2aWV3X3JldmVudWVfX3RpdGxlIiwidmlld19yZXZlbnVlX19zZXJ2YXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ2aWV3X3JldmVudWVfX2NvdW50Iiwidmlld19yZXZlbnVlX19jb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDckMsU0FBT0MseUVBQXNCLENBQUNELEtBQUQsRUFBUUUsTUFBUixDQUE3QjtBQUNEO0tBRnVCSCxPOztBQUl4QixTQUFTRyxNQUFULE9BS0c7QUFBQTs7QUFBQSxNQUpEQyxTQUlDLFFBSkRBLFNBSUM7QUFBQSxNQUhEQyxXQUdDLFFBSERBLFdBR0M7QUFBQSxNQUZEQyxrQkFFQyxRQUZEQSxrQkFFQztBQUFBLE1BRERDLG9CQUNDLFFBRERBLG9CQUNDO0FBQ0QsTUFBTUMsdUJBQXVCLEdBQUcsQ0FDOUI7QUFDRUMsU0FBSyxFQUFFLGNBRFQ7QUFFRUMsU0FBSyxZQUFLTixTQUFMO0FBRlAsR0FEOEIsRUFLOUI7QUFDRUssU0FBSyxFQUFFLGtCQURUO0FBRUVDLFNBQUssRUFBRUo7QUFGVCxHQUw4QixDQUFoQztBQVdBLE1BQU1LLHlCQUF5QixH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QUssYUFBUyxFQUFFSCwyREFBTSxDQUFDSSxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUix1QkFBdUIsQ0FBQ1MsR0FBeEIsQ0FBNEIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzVDLFdBQ0UsbUVBQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFHLGlCQUFVQSxLQUFWLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRVAsMkRBQU0sQ0FBQ1EsbUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUVSLDJEQUFNLENBQUNTLHFCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dILElBQUksQ0FBQ1IsS0FEUixDQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlRLElBQUksQ0FBQ1QsS0FBVCxDQU5GLENBREYsQ0FERixDQURGO0FBY0QsR0FmQSxDQURILENBREYsQ0FORixDQURGLENBL0JGLENBSkYsQ0FERixDQURGO0FBc0VEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Ntcy9yZXZlbnVlLjYzYWNkMjgzNTQ2OTUyYmUzM2JiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBkb1dpdGhMb2dnZWRJblVzZXIsIHJlbmRlcldpdGhMb2dnZWRJblVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2xvZ2luXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgTXlDYXJkSGVhZGVyLCBNeUNhcmQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L215LWNhcmQvbXktY2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3JldmVudWUubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgc2VsbGVyQXBpIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3NlbGxlckFwaVwiO1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9teS1jb250ZXh0L215LWNvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJldmVudWUocHJvcHMpIHtcclxuICByZXR1cm4gcmVuZGVyV2l0aExvZ2dlZEluVXNlcihwcm9wcywgcmVuZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKHtcclxuICBtb25leVBhaWQsXHJcbiAgbW9uZXlVbnBhaWQsXHJcbiAgbnVtYmVyUHJvZHVjdHNQYWlkLFxyXG4gIG51bWJlclByb2R1Y3RzVW5wYWlkLFxyXG59KSB7XHJcbiAgY29uc3QgbGlzdFJldmVudWVQcm9kdWN0c1BhaWQgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu5VuZyBz4buRIHRp4buBblwiLFxyXG4gICAgICBjb3VudDogYCR7bW9uZXlQYWlkfcSRYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu5VuZyBz4buRIMSRxqFuIGjDoG5nXCIsXHJcbiAgICAgIGNvdW50OiBudW1iZXJQcm9kdWN0c1BhaWQsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGxpc3RSZXZlbnVlUHJvZHVjdHNVbnBhaWQgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu5VuZyBz4buRIHRp4buBblwiLFxyXG4gICAgICBjb3VudDogYCR7bW9uZXlVbnBhaWR9xJFgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVOG7lW5nIHPhu5EgxJHGoW4gaMOgbmdcIixcclxuICAgICAgY291bnQ6IG51bWJlclByb2R1Y3RzVW5wYWlkLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBzZWxlY3Q9XCIvY21zL3JldmVudWVcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5U4buVbmcgcXXDoXQgZG9hbmggdGh1PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPE15Q2FyZD5cclxuICAgICAgICAgIDxNeUNhcmRIZWFkZXIgdGl0bGU9XCJU4buVbmcgcXVhbiBkb2FuaCB0aHVcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLXhsLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudmlld19yZXZlbnVlfSBtYl8zMFwiYH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fdGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWJfMjVcIj7EkMahbiBow6BuZyBz4bq9IHRoYW5oIHRvw6FuPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19zZXJ2YXl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAge2xpc3RSZXZlbnVlUHJvZHVjdHNVbnBhaWQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIga2V5PXtgcGFpZC0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19jb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fY291bnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnZpZXdfcmV2ZW51ZX0gbWJfMzBcImB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iXzI1XCI+xJDGoW4gaMOgbmcgxJHDoyB0aGFuaCB0b8OhbjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fc2VydmF5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsaXN0UmV2ZW51ZVByb2R1Y3RzUGFpZC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBrZXk9e2BwYWlkLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19jb3VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTXlDYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbGlzdE9yZGVycyA9IGF3YWl0IHNlbGxlckFwaS5nZXRPcmRlcnMoe30pO1xyXG4gIGNvbnN0IGRhdGFPcmRlcnMgPSBsaXN0T3JkZXJzLmRhdGEuZGF0YTtcclxuICBjb25zdCBsaXN0UmV2ZW51ZSA9IGF3YWl0IHNlbGxlckFwaS5nZXRSZXZlbnVlKHt9KTtcclxuICBjb25zdCBkYXRhUmV2ZW51ZSA9IGxpc3RSZXZlbnVlLmRhdGEuZGF0YTtcclxuXHJcbiAgbGV0IG1vbmV5UGFpZCA9IDA7XHJcbiAgbGV0IG1vbmV5VW5wYWlkID0gMDtcclxuICBsZXQgbnVtYmVyUHJvZHVjdHNQYWlkID0gMDtcclxuICBsZXQgbnVtYmVyUHJvZHVjdHNVbnBhaWQgPSAwO1xyXG5cclxuICBkYXRhUmV2ZW51ZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmF0dHJpYnV0ZXMuQWNjb3VudElEID09PSAxKSB7XHJcbiAgICAgIG1vbmV5VW5wYWlkID0gaXRlbS5hdHRyaWJ1dGVzLk1vbmV5V2lsbFBheTtcclxuICAgICAgbW9uZXlQYWlkID0gaXRlbS5hdHRyaWJ1dGVzLk1vbmV5UGFpZDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZGF0YU9yZGVycy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmF0dHJpYnV0ZXMuU3RhdHVzID09PSBcIlVucGFpZFwiKSB7XHJcbiAgICAgIG51bWJlclByb2R1Y3RzVW5wYWlkKys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGl0ZW0uYXR0cmlidXRlcy5TdGF0dXMgPT09IFwiUGFpZFwiKSB7XHJcbiAgICAgIG51bWJlclByb2R1Y3RzUGFpZCsrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbW9uZXlQYWlkLFxyXG4gICAgICBtb25leVVucGFpZCxcclxuICAgICAgbnVtYmVyUHJvZHVjdHNQYWlkLFxyXG4gICAgICBudW1iZXJQcm9kdWN0c1VucGFpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==