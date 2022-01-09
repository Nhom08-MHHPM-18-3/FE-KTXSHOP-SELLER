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
    count: "".concat(num)
  }];
  var listRevenueProductsUnpaid = [{
    title: "Tổng số tiền",
    count: "710 đ"
  }, {
    title: "Tổng số đơn hàng",
    count: "710"
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    select: "/cms/revenue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "T\u1ED5ng qu\xE1t doanh thu")), __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_3__["MyCard"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_3__["MyCardHeader"], {
    title: "T\u1ED5ng quan doanh thu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-12 col-xl-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "".concat(_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue, " mb_30\""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "mb_25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, "\u0110\u01A1n h\xE0ng s\u1EBD thanh to\xE1n"))), __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__servay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, listRevenueProductsUnpaid.map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "col-md-6",
      key: "paid-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__count,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 27
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__counter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 31
      }
    }, item.count)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }, item.title))));
  }))))), __jsx("div", {
    className: "col-lg-12 col-xl-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "".concat(_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue, " mb_30\""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "mb_25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, "\u0110\u01A1n h\xE0ng \u0111\xE3 thanh to\xE1n"))), __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__servay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, listRevenueProductsPaid.map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "col-md-6",
      key: "paid-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__count,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 27
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__counter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 31
      }
    }, item.count)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY21zL3JldmVudWUvaW5kZXguanMiXSwibmFtZXMiOlsiUmV2ZW51ZSIsInByb3BzIiwicmVuZGVyV2l0aExvZ2dlZEluVXNlciIsInJlbmRlciIsIm1vbmV5UGFpZCIsIm1vbmV5VW5wYWlkIiwibnVtYmVyUHJvZHVjdHNQYWlkIiwibnVtYmVyUHJvZHVjdHNVbnBhaWQiLCJsaXN0UmV2ZW51ZVByb2R1Y3RzUGFpZCIsInRpdGxlIiwiY291bnQiLCJudW0iLCJsaXN0UmV2ZW51ZVByb2R1Y3RzVW5wYWlkIiwic3R5bGVzIiwidmlld19yZXZlbnVlIiwidmlld19yZXZlbnVlX19oZWFkZXIiLCJ2aWV3X3JldmVudWVfX3RpdGxlIiwidmlld19yZXZlbnVlX19zZXJ2YXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ2aWV3X3JldmVudWVfX2NvdW50Iiwidmlld19yZXZlbnVlX19jb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDckMsU0FBT0MseUVBQXNCLENBQUNELEtBQUQsRUFBUUUsTUFBUixDQUE3QjtBQUNEO0tBRnVCSCxPOztBQUl4QixTQUFTRyxNQUFULE9BS0c7QUFBQTs7QUFBQSxNQUpEQyxTQUlDLFFBSkRBLFNBSUM7QUFBQSxNQUhEQyxXQUdDLFFBSERBLFdBR0M7QUFBQSxNQUZEQyxrQkFFQyxRQUZEQSxrQkFFQztBQUFBLE1BRERDLG9CQUNDLFFBRERBLG9CQUNDO0FBQ0QsTUFBTUMsdUJBQXVCLEdBQUcsQ0FDOUI7QUFDRUMsU0FBSyxFQUFFLGNBRFQ7QUFFRUMsU0FBSyxZQUFLTixTQUFMO0FBRlAsR0FEOEIsRUFLOUI7QUFDRUssU0FBSyxFQUFFLGtCQURUO0FBRUVDLFNBQUssWUFBS0MsR0FBTDtBQUZQLEdBTDhCLENBQWhDO0FBV0EsTUFBTUMseUJB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LGFBQVMsRUFBRUgsMkRBQU0sQ0FBQ0ksb0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsdUJBQXVCLENBQUNVLEdBQXhCLENBQTRCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QyxXQUNFLG1FQUNFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBRyxpQkFBVUEsS0FBVixDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVQLDJEQUFNLENBQUNRLG1CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFUiwyREFBTSxDQUFDUyxxQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSCxJQUFJLENBQUNULEtBRFIsQ0FERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJUyxJQUFJLENBQUNWLEtBQVQsQ0FORixDQURGLENBREYsQ0FERjtBQWNELEdBZkEsQ0FESCxDQURGLENBTkYsQ0FERixDQS9CRixDQUpGLENBREYsQ0FERjtBQXNFRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jbXMvcmV2ZW51ZS42NmE4NzUwYjc5N2YyODI0OTkyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgZG9XaXRoTG9nZ2VkSW5Vc2VyLCByZW5kZXJXaXRoTG9nZ2VkSW5Vc2VyIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9sb2dpblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IE15Q2FyZEhlYWRlciwgTXlDYXJkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9teS1jYXJkL215LWNhcmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9yZXZlbnVlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHNlbGxlckFwaSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9zZWxsZXJBcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJldmVudWUocHJvcHMpIHtcclxuICByZXR1cm4gcmVuZGVyV2l0aExvZ2dlZEluVXNlcihwcm9wcywgcmVuZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKHtcclxuICBtb25leVBhaWQsXHJcbiAgbW9uZXlVbnBhaWQsXHJcbiAgbnVtYmVyUHJvZHVjdHNQYWlkLFxyXG4gIG51bWJlclByb2R1Y3RzVW5wYWlkLFxyXG59KSB7XHJcbiAgY29uc3QgbGlzdFJldmVudWVQcm9kdWN0c1BhaWQgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu5VuZyBz4buRIHRp4buBblwiLFxyXG4gICAgICBjb3VudDogYCR7bW9uZXlQYWlkfcSRYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu5VuZyBz4buRIMSRxqFuIGjDoG5nXCIsXHJcbiAgICAgIGNvdW50OiBgJHtudW19YCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbGlzdFJldmVudWVQcm9kdWN0c1VucGFpZCA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVOG7lW5nIHPhu5EgdGnhu4FuXCIsXHJcbiAgICAgIGNvdW50OiBcIjcxMCDEkVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVOG7lW5nIHPhu5EgxJHGoW4gaMOgbmdcIixcclxuICAgICAgY291bnQ6IFwiNzEwXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHNlbGVjdD1cIi9jbXMvcmV2ZW51ZVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlThu5VuZyBxdcOhdCBkb2FuaCB0aHU8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TXlDYXJkPlxyXG4gICAgICAgICAgPE15Q2FyZEhlYWRlciB0aXRsZT1cIlThu5VuZyBxdWFuIGRvYW5oIHRodVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy52aWV3X3JldmVudWV9IG1iXzMwXCJgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9faGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX190aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYl8yNVwiPsSQxqFuIGjDoG5nIHPhur0gdGhhbmggdG/DoW48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX3NlcnZheX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdFJldmVudWVQcm9kdWN0c1VucGFpZC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBrZXk9e2BwYWlkLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19jb3VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLXhsLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudmlld19yZXZlbnVlfSBtYl8zMFwiYH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fdGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWJfMjVcIj7EkMahbiBow6BuZyDEkcOjIHRoYW5oIHRvw6FuPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19zZXJ2YXl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAge2xpc3RSZXZlbnVlUHJvZHVjdHNQYWlkLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGtleT17YHBhaWQtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX2NvdW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NeUNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsaXN0T3JkZXJzID0gYXdhaXQgc2VsbGVyQXBpLmdldE9yZGVycyh7fSk7XHJcbiAgY29uc3QgZGF0YU9yZGVycyA9IGxpc3RPcmRlcnMuZGF0YS5kYXRhO1xyXG4gIGNvbnN0IGxpc3RSZXZlbnVlID0gYXdhaXQgc2VsbGVyQXBpLmdldFJldmVudWUoe30pO1xyXG4gIGNvbnN0IGRhdGFSZXZlbnVlID0gbGlzdFJldmVudWUuZGF0YS5kYXRhO1xyXG5cclxuICBsZXQgbW9uZXlQYWlkID0gMDtcclxuICBsZXQgbW9uZXlVbnBhaWQgPSAwO1xyXG4gIGxldCBudW1iZXJQcm9kdWN0c1BhaWQgPSAwO1xyXG4gIGxldCBudW1iZXJQcm9kdWN0c1VucGFpZCA9IDA7XHJcblxyXG4gIGRhdGFSZXZlbnVlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uYXR0cmlidXRlcy5BY2NvdW50SUQgPT09IDEpIHtcclxuICAgICAgbW9uZXlVbnBhaWQgPSBpdGVtLmF0dHJpYnV0ZXMuTW9uZXlXaWxsUGF5O1xyXG4gICAgICBtb25leVBhaWQgPSBpdGVtLmF0dHJpYnV0ZXMuTW9uZXlQYWlkO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBkYXRhT3JkZXJzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uYXR0cmlidXRlcy5TdGF0dXMgPT09IFwiVW5wYWlkXCIpIHtcclxuICAgICAgbnVtYmVyUHJvZHVjdHNVbnBhaWQrKztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbS5hdHRyaWJ1dGVzLlN0YXR1cyA9PT0gXCJQYWlkXCIpIHtcclxuICAgICAgbnVtYmVyUHJvZHVjdHNQYWlkKys7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKG1vbmV5UGFpZCwgbW9uZXlVbnBhaWQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbW9uZXlQYWlkLFxyXG4gICAgICBtb25leVVucGFpZCxcclxuICAgICAgbnVtYmVyUHJvZHVjdHNQYWlkLFxyXG4gICAgICBudW1iZXJQcm9kdWN0c1VucGFpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==