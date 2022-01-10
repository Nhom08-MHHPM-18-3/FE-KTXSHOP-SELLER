webpackHotUpdate_N_E("pages/cms/revenue",{

/***/ "./component/my-context/my-context.js":
false,

/***/ "./lib/login.js":
/*!**********************!*\
  !*** ./lib/login.js ***!
  \**********************/
/*! exports provided: getSessionToken, doWithLoggedInUser, renderWithLoggedInUser, doLogout, acceptedScreenPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionToken", function() { return getSessionToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doWithLoggedInUser", function() { return doWithLoggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWithLoggedInUser", function() { return renderWithLoggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLogout", function() { return doLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptedScreenPath", function() { return acceptedScreenPath; });
/* harmony import */ var D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./lib/common.js");



var _s = $RefreshSig$();

/*
This function return a session string by parsing cookie value of incoming request.
 */


function getSessionToken(ctx, cookieName) {
  cookieName = cookieName || "session_token";
  var sessionStr = ctx.req && ctx.req.headers.cookie;
  var session = undefined;

  if (sessionStr) {
    sessionStr.split(";").forEach(function (cookie) {
      var i = cookie.indexOf("=");
      var name = cookie.substr(0, i).trim();
      var value = cookie.substr(i + 1).trim();

      if (name == cookieName) {
        session = value;
        return false;
      }
    });
  }

  return session;
}

function getLoggedUserInfo(_x) {
  return _getLoggedUserInfo.apply(this, arguments);
}
/**
 * This function is used by injecting to getServerSideProps of pages.
 * @param ctx
 * @param callback
 * @returns {Promise<*|{props: {loggedIn: boolean}}>}
 */


function _getLoggedUserInfo() {
  _getLoggedUserInfo = Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var session, res, req, url;
    return D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            session = getSessionToken(ctx); // if there is not cookie with "session_token" name

            res = ctx.res;

            if (!(!session || session === "deleted")) {
              _context.next = 10;
              break;
            }

            session = getSessionToken(ctx, "remember_me");

            if (!(!session || session === "deleted")) {
              _context.next = 9;
              break;
            }

            res.setHeader("location", "/login?url=" + escape(ctx.req.url));
            res.statusCode = 302;
            res.end();
            return _context.abrupt("return", {
              props: {
                loggedIn: false
              }
            });

          case 9:
            res.setHeader("set-cookie", "session_token=".concat(session, "; Path=/; HttpOnly"));

          case 10:
            // if there is value
            req = {
              method: "GET",
              headers: {
                Authorization: "Bearer ".concat(session),
                "User-Agent": ctx.req.headers["user-agent"],
                "X-Forwarded-For": ctx.req.headers["x-forwarded-for"]
              }
            };
            url = "http://localhost:1337" + "/core/account/v1/me?getPermissions=true";
            _context.next = 14;
            return fetch(url, req);

          case 14:
            return _context.abrupt("return", _context.sent);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getLoggedUserInfo.apply(this, arguments);
}

function doWithLoggedInUser(_x2, _x3) {
  return _doWithLoggedInUser.apply(this, arguments);
}
/**
 * This function is used by injecting to render function of pages.
 * @param props
 * @param callback
 * @returns {null|*}
 */

function _doWithLoggedInUser() {
  _doWithLoggedInUser = Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx, callback) {
    var result;
    return D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // let result = await getLoggedUserInfo(ctx)
            // let userInfo = await result.json()
            // // must get user info successful before do anything else
            // // console.log(userInfo)
            // if (userInfo.status !== APIStatus.OK) {
            //     return { props: { loggedIn: false } }
            // }
            // // check temp password
            // let source = userInfo.data[0]
            // let account = source.account
            // if (!ctx.req.url.startsWith('/profile') && account.isTempPassword) {
            //     if (typeof window === "undefined") {
            //         let res = ctx.res
            //         res.setHeader("location", "/profile");
            //         res.statusCode = 302;
            //         res.end();
            //     }
            //     return { props: { loggedIn: true, loggedInUserInfo: source } }
            // }
            result = callback(ctx); // // wait for page promise

            if (!(result && result instanceof Promise)) {
              _context2.next = 5;
              break;
            }

            _context2.next = 4;
            return result;

          case 4:
            result = _context2.sent;

          case 5:
            // // set loggedIn = true if is is undefined
            result = result || {};
            result.props = result.props || {}; // result.props.loggedInUserInfo = userInfo.data[0]
            // if (typeof result.props.loggedIn == "undefined") {

            result.props.loggedIn = true; // }

            return _context2.abrupt("return", result);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _doWithLoggedInUser.apply(this, arguments);
}

function renderWithLoggedInUser(props, callback) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // if logged in

  if (props.loggedIn !== false) {
    // validate permissions
    var source = props.loggedInUserInfo;
    console.log(props.loggedIn);

    if (source) {
      // check temp password
      if (!router.asPath.startsWith("/profile") && source.account && source.account.isTempPassword) {
        if (true) {
          window.location.href = "/profile";
        }

        return callback(props);
      }
    }

    return callback(props) || null;
  } // if not
  else {
      // do hard redirect to /login
      if (true) {
        window.location.href = "/login";
      }
    }

  return null;
}
/**
 *
 */

_s(renderWithLoggedInUser, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

function doLogout() {
  return _doLogout.apply(this, arguments);
}

function _doLogout() {
  _doLogout = Object(D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return D_Learning_Learning_HKI_NamTu_MoHinhHoaPhanMem_KTXSHOP_Source_FE_KTXSHOP_SELLER_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("/backend/core/account/v1/logout", {
              method: "PUT"
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _doLogout.apply(this, arguments);
}

function comparePath(input, permission) {
  if (permission.startsWith("=")) {
    if (input === permission.substr(1)) {
      return true;
    }
  } else if (input.startsWith(permission)) {
    return true;
  }

  return false;
}

function acceptedScreenPath(userInfo, path) {
  if (!userInfo) {
    return false;
  }

  if (path == "/" || path == "/profile") {
    return true;
  }

  var screens = userInfo.screens;
  var userRoles = userInfo.userRoles;
  var accepted = false;

  if (screens) {
    for (var i = 0; i < screens.length; i++) {
      if (screens[i].indexOf(":departmentCode") >= 0) {
        for (var j = 0; userRoles && j < userRoles.length; j++) {
          var normalizedPath = screens[i].replace(":departmentCode", userRoles[j].departmentCode);

          if (comparePath(path, normalizedPath)) {
            accepted = true;
            break;
          }
        }
      } else {
        if (comparePath(path, screens[i])) {
          accepted = true;
          break;
        }
      }
    }
  }

  return accepted;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2xvZ2luLmpzIl0sIm5hbWVzIjpbImdldFNlc3Npb25Ub2tlbiIsImN0eCIsImNvb2tpZU5hbWUiLCJzZXNzaW9uU3RyIiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsInNlc3Npb24iLCJ1bmRlZmluZWQiLCJzcGxpdCIsImZvckVhY2giLCJpIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJ0cmltIiwidmFsdWUiLCJnZXRMb2dnZWRVc2VySW5mbyIsInJlcyIsInNldEhlYWRlciIsImVzY2FwZSIsInVybCIsInN0YXR1c0NvZGUiLCJlbmQiLCJwcm9wcyIsImxvZ2dlZEluIiwibWV0aG9kIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJmZXRjaCIsImRvV2l0aExvZ2dlZEluVXNlciIsImNhbGxiYWNrIiwicmVzdWx0IiwiUHJvbWlzZSIsInJlbmRlcldpdGhMb2dnZWRJblVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzb3VyY2UiLCJsb2dnZWRJblVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImFzUGF0aCIsInN0YXJ0c1dpdGgiLCJhY2NvdW50IiwiaXNUZW1wUGFzc3dvcmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkb0xvZ291dCIsImNvbXBhcmVQYXRoIiwiaW5wdXQiLCJwZXJtaXNzaW9uIiwiYWNjZXB0ZWRTY3JlZW5QYXRoIiwidXNlckluZm8iLCJwYXRoIiwic2NyZWVucyIsInVzZXJSb2xlcyIsImFjY2VwdGVkIiwibGVuZ3RoIiwiaiIsIm5vcm1hbGl6ZWRQYXRoIiwicmVwbGFjZSIsImRlcGFydG1lbnRDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEJDLFVBQTlCLEVBQTBDO0FBQy9DQSxZQUFVLEdBQUdBLFVBQVUsSUFBSSxlQUEz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LEVBQWE7QUFDWCxTQUFLLElBQUk1QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNEMsT0FBTyxDQUFDRyxNQUE1QixFQUFvQy9DLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsVUFBSTRDLE9BQU8sQ0FBQzVDLENBQUQsQ0FBUCxDQUFXQyxPQUFYLENBQW1CLGlCQUFuQixLQUF5QyxDQUE3QyxFQUFnRDtBQUM5QyxhQUFLLElBQUkrQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkgsU0FBUyxJQUFJRyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsTUFBM0MsRUFBbURDLENBQUMsRUFBcEQsRUFBd0Q7QUFDdEQsY0FBSUMsY0FBYyxHQUFHTCxPQUFPLENBQUM1QyxDQUFELENBQVAsQ0FBV2tELE9BQVgsQ0FDbkIsaUJBRG1CLEVBRW5CTCxTQUFTLENBQUNHLENBQUQsQ0FBVCxDQUFhRyxjQUZNLENBQXJCOztBQUlBLGNBQUliLFdBQVcsQ0FBQ0ssSUFBRCxFQUFPTSxjQUFQLENBQWYsRUFBdUM7QUFDckNILG9CQUFRLEdBQUcsSUFBWDtBQUNBO0FBQ0Q7QUFDRjtBQUNGLE9BWEQsTUFXTztBQUNMLFlBQUlSLFdBQVcsQ0FBQ0ssSUFBRCxFQUFPQyxPQUFPLENBQUM1QyxDQUFELENBQWQsQ0FBZixFQUFtQztBQUNqQzhDLGtCQUFRLEdBQUcsSUFBWDtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0QsU0FBT0EsUUFBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Ntcy9yZXZlbnVlLjk5NDI1YzMwZjE2NDY1NDNjODIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5UaGlzIGZ1bmN0aW9uIHJldHVybiBhIHNlc3Npb24gc3RyaW5nIGJ5IHBhcnNpbmcgY29va2llIHZhbHVlIG9mIGluY29taW5nIHJlcXVlc3QuXHJcbiAqL1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQVBJU3RhdHVzIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vzc2lvblRva2VuKGN0eCwgY29va2llTmFtZSkge1xyXG4gIGNvb2tpZU5hbWUgPSBjb29raWVOYW1lIHx8IFwic2Vzc2lvbl90b2tlblwiO1xyXG4gIGxldCBzZXNzaW9uU3RyID0gY3R4LnJlcSAmJiBjdHgucmVxLmhlYWRlcnMuY29va2llO1xyXG4gIGxldCBzZXNzaW9uID0gdW5kZWZpbmVkO1xyXG4gIGlmIChzZXNzaW9uU3RyKSB7XHJcbiAgICBzZXNzaW9uU3RyLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChjb29raWUpID0+IHtcclxuICAgICAgbGV0IGkgPSBjb29raWUuaW5kZXhPZihcIj1cIik7XHJcbiAgICAgIGxldCBuYW1lID0gY29va2llLnN1YnN0cigwLCBpKS50cmltKCk7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGNvb2tpZS5zdWJzdHIoaSArIDEpLnRyaW0oKTtcclxuICAgICAgaWYgKG5hbWUgPT0gY29va2llTmFtZSkge1xyXG4gICAgICAgIHNlc3Npb24gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gc2Vzc2lvbjtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9nZ2VkVXNlckluZm8oY3R4KSB7XHJcbiAgbGV0IHNlc3Npb24gPSBnZXRTZXNzaW9uVG9rZW4oY3R4KTtcclxuXHJcbiAgLy8gaWYgdGhlcmUgaXMgbm90IGNvb2tpZSB3aXRoIFwic2Vzc2lvbl90b2tlblwiIG5hbWVcclxuICBsZXQgcmVzID0gY3R4LnJlcztcclxuICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbiA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgIHNlc3Npb24gPSBnZXRTZXNzaW9uVG9rZW4oY3R4LCBcInJlbWVtYmVyX21lXCIpO1xyXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24gPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoXCJsb2NhdGlvblwiLCBcIi9sb2dpbj91cmw9XCIgKyBlc2NhcGUoY3R4LnJlcS51cmwpKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAzMDI7XHJcbiAgICAgIHJlcy5lbmQoKTtcclxuICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgbG9nZ2VkSW46IGZhbHNlIH0gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuc2V0SGVhZGVyKFwic2V0LWNvb2tpZVwiLCBgc2Vzc2lvbl90b2tlbj0ke3Nlc3Npb259OyBQYXRoPS87IEh0dHBPbmx5YCk7XHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGVyZSBpcyB2YWx1ZVxyXG4gIGxldCByZXEgPSB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9ufWAsXHJcbiAgICAgIFwiVXNlci1BZ2VudFwiOiBjdHgucmVxLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdLFxyXG4gICAgICBcIlgtRm9yd2FyZGVkLUZvclwiOiBjdHgucmVxLmhlYWRlcnNbXCJ4LWZvcndhcmRlZC1mb3JcIl0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9IT1NUICsgXCIvY29yZS9hY2NvdW50L3YxL21lP2dldFBlcm1pc3Npb25zPXRydWVcIjtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2godXJsLCByZXEpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJ5IGluamVjdGluZyB0byBnZXRTZXJ2ZXJTaWRlUHJvcHMgb2YgcGFnZXMuXHJcbiAqIEBwYXJhbSBjdHhcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPCp8e3Byb3BzOiB7bG9nZ2VkSW46IGJvb2xlYW59fT59XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9XaXRoTG9nZ2VkSW5Vc2VyKGN0eCwgY2FsbGJhY2spIHtcclxuICAvLyBsZXQgcmVzdWx0ID0gYXdhaXQgZ2V0TG9nZ2VkVXNlckluZm8oY3R4KVxyXG4gIC8vIGxldCB1c2VySW5mbyA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuXHJcbiAgLy8gLy8gbXVzdCBnZXQgdXNlciBpbmZvIHN1Y2Nlc3NmdWwgYmVmb3JlIGRvIGFueXRoaW5nIGVsc2VcclxuICAvLyAvLyBjb25zb2xlLmxvZyh1c2VySW5mbylcclxuICAvLyBpZiAodXNlckluZm8uc3RhdHVzICE9PSBBUElTdGF0dXMuT0spIHtcclxuICAvLyAgICAgcmV0dXJuIHsgcHJvcHM6IHsgbG9nZ2VkSW46IGZhbHNlIH0gfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy8gY2hlY2sgdGVtcCBwYXNzd29yZFxyXG4gIC8vIGxldCBzb3VyY2UgPSB1c2VySW5mby5kYXRhWzBdXHJcbiAgLy8gbGV0IGFjY291bnQgPSBzb3VyY2UuYWNjb3VudFxyXG5cclxuICAvLyBpZiAoIWN0eC5yZXEudXJsLnN0YXJ0c1dpdGgoJy9wcm9maWxlJykgJiYgYWNjb3VudC5pc1RlbXBQYXNzd29yZCkge1xyXG4gIC8vICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIC8vICAgICAgICAgbGV0IHJlcyA9IGN0eC5yZXNcclxuICAvLyAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJsb2NhdGlvblwiLCBcIi9wcm9maWxlXCIpO1xyXG4gIC8vICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAzMDI7XHJcbiAgLy8gICAgICAgICByZXMuZW5kKCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcmV0dXJuIHsgcHJvcHM6IHsgbG9nZ2VkSW46IHRydWUsIGxvZ2dlZEluVXNlckluZm86IHNvdXJjZSB9IH1cclxuICAvLyB9XHJcblxyXG4gIGxldCByZXN1bHQgPSBjYWxsYmFjayhjdHgpO1xyXG4gIC8vIC8vIHdhaXQgZm9yIHBhZ2UgcHJvbWlzZVxyXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLy8gLy8gc2V0IGxvZ2dlZEluID0gdHJ1ZSBpZiBpcyBpcyB1bmRlZmluZWRcclxuICByZXN1bHQgPSByZXN1bHQgfHwge307XHJcbiAgcmVzdWx0LnByb3BzID0gcmVzdWx0LnByb3BzIHx8IHt9O1xyXG4gIC8vIHJlc3VsdC5wcm9wcy5sb2dnZWRJblVzZXJJbmZvID0gdXNlckluZm8uZGF0YVswXVxyXG4gIC8vIGlmICh0eXBlb2YgcmVzdWx0LnByb3BzLmxvZ2dlZEluID09IFwidW5kZWZpbmVkXCIpIHtcclxuICByZXN1bHQucHJvcHMubG9nZ2VkSW4gPSB0cnVlO1xyXG4gIC8vIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJ5IGluamVjdGluZyB0byByZW5kZXIgZnVuY3Rpb24gb2YgcGFnZXMuXHJcbiAqIEBwYXJhbSBwcm9wc1xyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICogQHJldHVybnMge251bGx8Kn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXaXRoTG9nZ2VkSW5Vc2VyKHByb3BzLCBjYWxsYmFjaykge1xyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gaWYgbG9nZ2VkIGluXHJcbiAgaWYgKHByb3BzLmxvZ2dlZEluICE9PSBmYWxzZSkge1xyXG4gICAgLy8gdmFsaWRhdGUgcGVybWlzc2lvbnNcclxuICAgIGxldCBzb3VyY2UgPSBwcm9wcy5sb2dnZWRJblVzZXJJbmZvO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmxvZ2dlZEluKTtcclxuXHJcbiAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgIC8vIGNoZWNrIHRlbXAgcGFzc3dvcmRcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFyb3V0ZXIuYXNQYXRoLnN0YXJ0c1dpdGgoXCIvcHJvZmlsZVwiKSAmJlxyXG4gICAgICAgIHNvdXJjZS5hY2NvdW50ICYmXHJcbiAgICAgICAgc291cmNlLmFjY291bnQuaXNUZW1wUGFzc3dvcmRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9maWxlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2socHJvcHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbGxiYWNrKHByb3BzKSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgbm90XHJcbiAgZWxzZSB7XHJcbiAgICAvLyBkbyBoYXJkIHJlZGlyZWN0IHRvIC9sb2dpblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9Mb2dvdXQoKSB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFwiL2JhY2tlbmQvY29yZS9hY2NvdW50L3YxL2xvZ291dFwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVQYXRoKGlucHV0LCBwZXJtaXNzaW9uKSB7XHJcbiAgaWYgKHBlcm1pc3Npb24uc3RhcnRzV2l0aChcIj1cIikpIHtcclxuICAgIGlmIChpbnB1dCA9PT0gcGVybWlzc2lvbi5zdWJzdHIoMSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChpbnB1dC5zdGFydHNXaXRoKHBlcm1pc3Npb24pKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWNjZXB0ZWRTY3JlZW5QYXRoKHVzZXJJbmZvLCBwYXRoKSB7XHJcbiAgaWYgKCF1c2VySW5mbykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAocGF0aCA9PSBcIi9cIiB8fCBwYXRoID09IFwiL3Byb2ZpbGVcIikge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGxldCBzY3JlZW5zID0gdXNlckluZm8uc2NyZWVucztcclxuICBsZXQgdXNlclJvbGVzID0gdXNlckluZm8udXNlclJvbGVzO1xyXG4gIGxldCBhY2NlcHRlZCA9IGZhbHNlO1xyXG4gIGlmIChzY3JlZW5zKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcmVlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHNjcmVlbnNbaV0uaW5kZXhPZihcIjpkZXBhcnRtZW50Q29kZVwiKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IHVzZXJSb2xlcyAmJiBqIDwgdXNlclJvbGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBsZXQgbm9ybWFsaXplZFBhdGggPSBzY3JlZW5zW2ldLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIFwiOmRlcGFydG1lbnRDb2RlXCIsXHJcbiAgICAgICAgICAgIHVzZXJSb2xlc1tqXS5kZXBhcnRtZW50Q29kZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChjb21wYXJlUGF0aChwYXRoLCBub3JtYWxpemVkUGF0aCkpIHtcclxuICAgICAgICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbXBhcmVQYXRoKHBhdGgsIHNjcmVlbnNbaV0pKSB7XHJcbiAgICAgICAgICBhY2NlcHRlZCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGFjY2VwdGVkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=