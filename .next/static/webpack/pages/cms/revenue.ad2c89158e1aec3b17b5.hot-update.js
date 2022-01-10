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
    count: "".concat(m)
  }, {
    title: "Tổng số đơn hàng",
    count: "710"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY21zL3JldmVudWUvaW5kZXguanMiXSwibmFtZXMiOlsiUmV2ZW51ZSIsInByb3BzIiwicmVuZGVyV2l0aExvZ2dlZEluVXNlciIsInJlbmRlciIsIm1vbmV5UGFpZCIsIm1vbmV5VW5wYWlkIiwibnVtYmVyUHJvZHVjdHNQYWlkIiwibnVtYmVyUHJvZHVjdHNVbnBhaWQiLCJsaXN0UmV2ZW51ZVByb2R1Y3RzUGFpZCIsInRpdGxlIiwiY291bnQiLCJtIiwibGlzdFJldmVudWVQcm9kdWN0c1VucGFpZCIsInN0eWxlcyIsInZpZXdfcmV2ZW51ZSIsInZpZXdfcmV2ZW51ZV9faGVhZGVyIiwidmlld19yZXZlbnVlX190aXRsZSIsInZpZXdfcmV2ZW51ZV9fc2VydmF5IiwibWFwIiwiaXRlbSIsImluZGV4Iiwidmlld19yZXZlbnVlX19jb3VudCIsInZpZXdfcmV2ZW51ZV9fY291bnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3JDLFNBQU9DLHlFQUFzQixDQUFDRCxLQUFELEVBQVFFLE1BQVIsQ0FBN0I7QUFDRDtLQUZ1QkgsTzs7QUFJeEIsU0FBU0csTUFBVCxPQUtHO0FBQUE7O0FBQUEsTUFKREMsU0FJQyxRQUpEQSxTQUlDO0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsa0JBRUMsUUFGREEsa0JBRUM7QUFBQSxNQUREQyxvQkFDQyxRQUREQSxvQkFDQztBQUNELE1BQU1DLHVCQUF1QixHQUFHLENBQzlCO0FBQ0VDLFNBQUssRUFBRSxjQURUO0FBRUVDLFNBQUssWUFBS0MsQ0FBTDtBQUZQLEdBRDhCLEVBSzlCO0FBQ0VGLFNBQUssRUFBRSxrQkFEVDtBQUVFQyxTQUFLLEVBQUU7QUFGVCxHQUw4QixDQUFoQztBQVdBLE1BQU1FLHlCQUF5QixHQUFH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QUVILDJEQUFNLENBQUNJLG9CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dULHVCQUF1QixDQUFDVSxHQUF4QixDQUE0QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDNUMsV0FDRSxtRUFDRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUcsaUJBQVVBLEtBQVYsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFUCwyREFBTSxDQUFDUSxtQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBRVIsMkRBQU0sQ0FBQ1MscUJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0gsSUFBSSxDQUFDVCxLQURSLENBREYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVMsSUFBSSxDQUFDVixLQUFULENBTkYsQ0FERixDQURGLENBREY7QUFjRCxHQWZBLENBREgsQ0FERixDQU5GLENBREYsQ0EvQkYsQ0FKRixDQURGLENBREY7QUFzRUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY21zL3JldmVudWUuYWQyYzg5MTU4ZTFhZWMzYjE3YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGRvV2l0aExvZ2dlZEluVXNlciwgcmVuZGVyV2l0aExvZ2dlZEluVXNlciB9IGZyb20gXCIuLi8uLi8uLi9saWIvbG9naW5cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNeUNhcmRIZWFkZXIsIE15Q2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvbXktY2FyZC9teS1jYXJkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcmV2ZW51ZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBzZWxsZXJBcGkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvc2VsbGVyQXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZlbnVlKHByb3BzKSB7XHJcbiAgcmV0dXJuIHJlbmRlcldpdGhMb2dnZWRJblVzZXIocHJvcHMsIHJlbmRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcih7XHJcbiAgbW9uZXlQYWlkLFxyXG4gIG1vbmV5VW5wYWlkLFxyXG4gIG51bWJlclByb2R1Y3RzUGFpZCxcclxuICBudW1iZXJQcm9kdWN0c1VucGFpZCxcclxufSkge1xyXG4gIGNvbnN0IGxpc3RSZXZlbnVlUHJvZHVjdHNQYWlkID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSB0aeG7gW5cIixcclxuICAgICAgY291bnQ6IGAke219YCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu5VuZyBz4buRIMSRxqFuIGjDoG5nXCIsXHJcbiAgICAgIGNvdW50OiBcIjcxMFwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBsaXN0UmV2ZW51ZVByb2R1Y3RzVW5wYWlkID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSB0aeG7gW5cIixcclxuICAgICAgY291bnQ6IFwiNzEwIMSRXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSDEkcahbiBow6BuZ1wiLFxyXG4gICAgICBjb3VudDogXCI3MTBcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgc2VsZWN0PVwiL2Ntcy9yZXZlbnVlXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+VOG7lW5nIHF1w6F0IGRvYW5oIHRodTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNeUNhcmQ+XHJcbiAgICAgICAgICA8TXlDYXJkSGVhZGVyIHRpdGxlPVwiVOG7lW5nIHF1YW4gZG9hbmggdGh1XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnZpZXdfcmV2ZW51ZX0gbWJfMzBcImB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iXzI1XCI+xJDGoW4gaMOgbmcgc+G6vSB0aGFuaCB0b8OhbjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fc2VydmF5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsaXN0UmV2ZW51ZVByb2R1Y3RzVW5wYWlkLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGtleT17YHBhaWQtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX2NvdW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy52aWV3X3JldmVudWV9IG1iXzMwXCJgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9faGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX190aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYl8yNVwiPsSQxqFuIGjDoG5nIMSRw6MgdGhhbmggdG/DoW48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX3NlcnZheX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdFJldmVudWVQcm9kdWN0c1BhaWQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIga2V5PXtgcGFpZC0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19jb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fY291bnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L015Q2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxpc3RPcmRlcnMgPSBhd2FpdCBzZWxsZXJBcGkuZ2V0T3JkZXJzKHt9KTtcclxuICBjb25zdCBkYXRhT3JkZXJzID0gbGlzdE9yZGVycy5kYXRhLmRhdGE7XHJcbiAgY29uc3QgbGlzdFJldmVudWUgPSBhd2FpdCBzZWxsZXJBcGkuZ2V0UmV2ZW51ZSh7fSk7XHJcbiAgY29uc3QgZGF0YVJldmVudWUgPSBsaXN0UmV2ZW51ZS5kYXRhLmRhdGE7XHJcblxyXG4gIGxldCBtb25leVBhaWQgPSAwO1xyXG4gIGxldCBtb25leVVucGFpZCA9IDA7XHJcbiAgbGV0IG51bWJlclByb2R1Y3RzUGFpZCA9IDA7XHJcbiAgbGV0IG51bWJlclByb2R1Y3RzVW5wYWlkID0gMDtcclxuXHJcbiAgZGF0YVJldmVudWUubWFwKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5hdHRyaWJ1dGVzLkFjY291bnRJRCA9PT0gMSkge1xyXG4gICAgICBtb25leVVucGFpZCA9IGl0ZW0uYXR0cmlidXRlcy5Nb25leVdpbGxQYXk7XHJcbiAgICAgIG1vbmV5UGFpZCA9IGl0ZW0uYXR0cmlidXRlcy5Nb25leVBhaWQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRhdGFPcmRlcnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5hdHRyaWJ1dGVzLlN0YXR1cyA9PT0gXCJVbnBhaWRcIikge1xyXG4gICAgICBudW1iZXJQcm9kdWN0c1VucGFpZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtLmF0dHJpYnV0ZXMuU3RhdHVzID09PSBcIlBhaWRcIikge1xyXG4gICAgICBudW1iZXJQcm9kdWN0c1BhaWQrKztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2cobW9uZXlQYWlkLCBtb25leVVucGFpZCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtb25leVBhaWQsXHJcbiAgICAgIG1vbmV5VW5wYWlkLFxyXG4gICAgICBudW1iZXJQcm9kdWN0c1BhaWQsXHJcbiAgICAgIG51bWJlclByb2R1Y3RzVW5wYWlkLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9