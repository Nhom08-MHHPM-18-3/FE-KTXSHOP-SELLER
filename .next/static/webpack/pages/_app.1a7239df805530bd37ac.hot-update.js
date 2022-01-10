webpackHotUpdate_N_E("pages/_app",{

/***/ "./component/layout/layout.js":
/*!************************************!*\
  !*** ./component/layout/layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./component/header/header.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ "./component/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidebar/sidebar */ "./sidebar/sidebar.js");
/* harmony import */ var _my_context_my_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my-context/my-context */ "./component/my-context/my-context.js");
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\component\\layout\\layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Layout(props) {
  _s();

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var children = props.children;
  var router = useRouter();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.loggedInUserInfo) {
      router.push("/login");
    }
  }, []);
  return __jsx(_my_context_my_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      loggedInUserInfo: props.loggedInUserInfo
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_header_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sidebar: ref,
    menu: props.menu,
    title: props.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.appContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, children)));
}

_s(Layout, "HYwAWmo3kRqc9AFVacAFzoYztR4=", true);

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xheW91dC9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJyZWYiLCJ1c2VSZWYiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImxvZ2dlZEluVXNlckluZm8iLCJwdXNoIiwic3R5bGVzIiwibGF5b3V0IiwibWVudSIsInRpdGxlIiwiYXBwQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFDcEMsTUFBSUMsR0FBRyxHQUFHQyxvREFBTSxFQUFoQjtBQURvQyxNQUU1QkMsUUFGNEIsR0FFZkgsS0FGZSxDQUU1QkcsUUFGNEI7QUFHcEMsTUFBSUMsTUFBTSxHQUFHQyxTQUFTLEVBQXRCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ04sS0FBSyxDQUFDTyxnQkFBWCxFQUE2QjtBQUMzQkgsWUFBTSxDQUFDSSxJQUFQLENBQVksUUFBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQ0UsTUFBQyw4REFBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVELHNCQUFnQixFQUFFUCxLQUFLLENBQUNPO0FBQTFCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUUseURBQU0sQ0FBQ0MsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUVULEdBQWpCO0FBQXNCLFFBQUksRUFBRUQsS0FBSyxDQUFDVyxJQUFsQztBQUF3QyxTQUFLLEVBQUVYLEtBQUssQ0FBQ1ksS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx3REFBRDtBQUFTLE9BQUcsRUFBRVgsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBRVEseURBQU0sQ0FBQ0ksVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ1YsUUFBcEMsQ0FIRixDQURGLENBREY7QUFTRDs7R0FwQnVCSixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWE3MjM5ZGY4MDU1MzBiZDM3YWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbGF5b3V0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uLy4uL3NpZGViYXIvc2lkZWJhclwiO1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSBcIi4uL215LWNvbnRleHQvbXktY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgbGV0IHJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcHJvcHMubG9nZ2VkSW5Vc2VySW5mbykge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9nZ2VkSW5Vc2VySW5mbzogcHJvcHMubG9nZ2VkSW5Vc2VySW5mbyB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PlxyXG4gICAgICAgIDxIZWFkZXIgc2lkZWJhcj17cmVmfSBtZW51PXtwcm9wcy5tZW51fSB0aXRsZT17cHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgPFNpZGViYXIgcmVmPXtyZWZ9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHBDb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=