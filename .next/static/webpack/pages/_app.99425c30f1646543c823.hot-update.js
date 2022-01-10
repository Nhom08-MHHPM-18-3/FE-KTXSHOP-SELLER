webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2xvZ2luLmpzIl0sIm5hbWVzIjpbImdldFNlc3Npb25Ub2tlbiIsImN0eCIsImNvb2tpZU5hbWUiLCJzZXNzaW9uU3RyIiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsInNlc3Npb24iLCJ1bmRlZmluZWQiLCJzcGxpdCIsImZvckVhY2giLCJpIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJ0cmltIiwidmFsdWUiLCJnZXRMb2dnZWRVc2VySW5mbyIsInJlcyIsInNldEhlYWRlciIsImVzY2FwZSIsInVybCIsInN0YXR1c0NvZGUiLCJlbmQiLCJwcm9wcyIsImxvZ2dlZEluIiwibWV0aG9kIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJmZXRjaCIsImRvV2l0aExvZ2dlZEluVXNlciIsImNhbGxiYWNrIiwicmVzdWx0IiwiUHJvbWlzZSIsInJlbmRlcldpdGhMb2dnZWRJblVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzb3VyY2UiLCJsb2dnZWRJblVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImFzUGF0aCIsInN0YXJ0c1dpdGgiLCJhY2NvdW50IiwiaXNUZW1wUGFzc3dvcmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkb0xvZ291dCIsImNvbXBhcmVQYXRoIiwiaW5wdXQiLCJwZXJtaXNzaW9uIiwiYWNjZXB0ZWRTY3JlZW5QYXRoIiwidXNlckluZm8iLCJwYXRoIiwic2NyZWVucyIsInVzZXJSb2xlcyIsImFjY2VwdGVkIiwibGVuZ3RoIiwiaiIsIm5vcm1hbGl6ZWRQYXRoIiwicmVwbGFjZSIsImRlcGFydG1lbnRDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEJDLFVBQTlCLEVBQTBDO0FBQy9DQSxZQUFVLEdBQUdBLFVBQVUsSUFBSSxlQUEzQjtB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QWE7QUFDWCxTQUFLLElBQUk1QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNEMsT0FBTyxDQUFDRyxNQUE1QixFQUFvQy9DLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsVUFBSTRDLE9BQU8sQ0FBQzVDLENBQUQsQ0FBUCxDQUFXQyxPQUFYLENBQW1CLGlCQUFuQixLQUF5QyxDQUE3QyxFQUFnRDtBQUM5QyxhQUFLLElBQUkrQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkgsU0FBUyxJQUFJRyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsTUFBM0MsRUFBbURDLENBQUMsRUFBcEQsRUFBd0Q7QUFDdEQsY0FBSUMsY0FBYyxHQUFHTCxPQUFPLENBQUM1QyxDQUFELENBQVAsQ0FBV2tELE9BQVgsQ0FDbkIsaUJBRG1CLEVBRW5CTCxTQUFTLENBQUNHLENBQUQsQ0FBVCxDQUFhRyxjQUZNLENBQXJCOztBQUlBLGNBQUliLFdBQVcsQ0FBQ0ssSUFBRCxFQUFPTSxjQUFQLENBQWYsRUFBdUM7QUFDckNILG9CQUFRLEdBQUcsSUFBWDtBQUNBO0FBQ0Q7QUFDRjtBQUNGLE9BWEQsTUFXTztBQUNMLFlBQUlSLFdBQVcsQ0FBQ0ssSUFBRCxFQUFPQyxPQUFPLENBQUM1QyxDQUFELENBQWQsQ0FBZixFQUFtQztBQUNqQzhDLGtCQUFRLEdBQUcsSUFBWDtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0QsU0FBT0EsUUFBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTk0MjVjMzBmMTY0NjU0M2M4MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblRoaXMgZnVuY3Rpb24gcmV0dXJuIGEgc2Vzc2lvbiBzdHJpbmcgYnkgcGFyc2luZyBjb29raWUgdmFsdWUgb2YgaW5jb21pbmcgcmVxdWVzdC5cclxuICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBUElTdGF0dXMgfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uVG9rZW4oY3R4LCBjb29raWVOYW1lKSB7XHJcbiAgY29va2llTmFtZSA9IGNvb2tpZU5hbWUgfHwgXCJzZXNzaW9uX3Rva2VuXCI7XHJcbiAgbGV0IHNlc3Npb25TdHIgPSBjdHgucmVxICYmIGN0eC5yZXEuaGVhZGVycy5jb29raWU7XHJcbiAgbGV0IHNlc3Npb24gPSB1bmRlZmluZWQ7XHJcbiAgaWYgKHNlc3Npb25TdHIpIHtcclxuICAgIHNlc3Npb25TdHIuc3BsaXQoXCI7XCIpLmZvckVhY2goKGNvb2tpZSkgPT4ge1xyXG4gICAgICBsZXQgaSA9IGNvb2tpZS5pbmRleE9mKFwiPVwiKTtcclxuICAgICAgbGV0IG5hbWUgPSBjb29raWUuc3Vic3RyKDAsIGkpLnRyaW0oKTtcclxuICAgICAgbGV0IHZhbHVlID0gY29va2llLnN1YnN0cihpICsgMSkudHJpbSgpO1xyXG4gICAgICBpZiAobmFtZSA9PSBjb29raWVOYW1lKSB7XHJcbiAgICAgICAgc2Vzc2lvbiA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBzZXNzaW9uO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRMb2dnZWRVc2VySW5mbyhjdHgpIHtcclxuICBsZXQgc2Vzc2lvbiA9IGdldFNlc3Npb25Ub2tlbihjdHgpO1xyXG5cclxuICAvLyBpZiB0aGVyZSBpcyBub3QgY29va2llIHdpdGggXCJzZXNzaW9uX3Rva2VuXCIgbmFtZVxyXG4gIGxldCByZXMgPSBjdHgucmVzO1xyXG4gIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uID09PSBcImRlbGV0ZWRcIikge1xyXG4gICAgc2Vzc2lvbiA9IGdldFNlc3Npb25Ub2tlbihjdHgsIFwicmVtZW1iZXJfbWVcIik7XHJcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbiA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcihcImxvY2F0aW9uXCIsIFwiL2xvZ2luP3VybD1cIiArIGVzY2FwZShjdHgucmVxLnVybCkpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDMwMjtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICByZXR1cm4geyBwcm9wczogeyBsb2dnZWRJbjogZmFsc2UgfSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zZXRIZWFkZXIoXCJzZXQtY29va2llXCIsIGBzZXNzaW9uX3Rva2VuPSR7c2Vzc2lvbn07IFBhdGg9LzsgSHR0cE9ubHlgKTtcclxuICB9XHJcblxyXG4gIC8vIGlmIHRoZXJlIGlzIHZhbHVlXHJcbiAgbGV0IHJlcSA9IHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb259YCxcclxuICAgICAgXCJVc2VyLUFnZW50XCI6IGN0eC5yZXEuaGVhZGVyc1tcInVzZXItYWdlbnRcIl0sXHJcbiAgICAgIFwiWC1Gb3J3YXJkZWQtRm9yXCI6IGN0eC5yZXEuaGVhZGVyc1tcIngtZm9yd2FyZGVkLWZvclwiXSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgdXJsID0gcHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBcIi9jb3JlL2FjY291bnQvdjEvbWU/Z2V0UGVybWlzc2lvbnM9dHJ1ZVwiO1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHJlcSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYnkgaW5qZWN0aW5nIHRvIGdldFNlcnZlclNpZGVQcm9wcyBvZiBwYWdlcy5cclxuICogQHBhcmFtIGN0eFxyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICogQHJldHVybnMge1Byb21pc2U8Knx7cHJvcHM6IHtsb2dnZWRJbjogYm9vbGVhbn19Pn1cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb1dpdGhMb2dnZWRJblVzZXIoY3R4LCBjYWxsYmFjaykge1xyXG4gIC8vIGxldCByZXN1bHQgPSBhd2FpdCBnZXRMb2dnZWRVc2VySW5mbyhjdHgpXHJcbiAgLy8gbGV0IHVzZXJJbmZvID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxyXG5cclxuICAvLyAvLyBtdXN0IGdldCB1c2VyIGluZm8gc3VjY2Vzc2Z1bCBiZWZvcmUgZG8gYW55dGhpbmcgZWxzZVxyXG4gIC8vIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvKVxyXG4gIC8vIGlmICh1c2VySW5mby5zdGF0dXMgIT09IEFQSVN0YXR1cy5PSykge1xyXG4gIC8vICAgICByZXR1cm4geyBwcm9wczogeyBsb2dnZWRJbjogZmFsc2UgfSB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvLyBjaGVjayB0ZW1wIHBhc3N3b3JkXHJcbiAgLy8gbGV0IHNvdXJjZSA9IHVzZXJJbmZvLmRhdGFbMF1cclxuICAvLyBsZXQgYWNjb3VudCA9IHNvdXJjZS5hY2NvdW50XHJcblxyXG4gIC8vIGlmICghY3R4LnJlcS51cmwuc3RhcnRzV2l0aCgnL3Byb2ZpbGUnKSAmJiBhY2NvdW50LmlzVGVtcFBhc3N3b3JkKSB7XHJcbiAgLy8gICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgLy8gICAgICAgICBsZXQgcmVzID0gY3R4LnJlc1xyXG4gIC8vICAgICAgICAgcmVzLnNldEhlYWRlcihcImxvY2F0aW9uXCIsIFwiL3Byb2ZpbGVcIik7XHJcbiAgLy8gICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDMwMjtcclxuICAvLyAgICAgICAgIHJlcy5lbmQoKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICByZXR1cm4geyBwcm9wczogeyBsb2dnZWRJbjogdHJ1ZSwgbG9nZ2VkSW5Vc2VySW5mbzogc291cmNlIH0gfVxyXG4gIC8vIH1cclxuXHJcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKGN0eCk7XHJcbiAgLy8gLy8gd2FpdCBmb3IgcGFnZSBwcm9taXNlXHJcbiAgaWYgKHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICByZXN1bHQgPSBhd2FpdCByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvLyAvLyBzZXQgbG9nZ2VkSW4gPSB0cnVlIGlmIGlzIGlzIHVuZGVmaW5lZFxyXG4gIHJlc3VsdCA9IHJlc3VsdCB8fCB7fTtcclxuICByZXN1bHQucHJvcHMgPSByZXN1bHQucHJvcHMgfHwge307XHJcbiAgLy8gcmVzdWx0LnByb3BzLmxvZ2dlZEluVXNlckluZm8gPSB1c2VySW5mby5kYXRhWzBdXHJcbiAgLy8gaWYgKHR5cGVvZiByZXN1bHQucHJvcHMubG9nZ2VkSW4gPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIHJlc3VsdC5wcm9wcy5sb2dnZWRJbiA9IHRydWU7XHJcbiAgLy8gfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYnkgaW5qZWN0aW5nIHRvIHJlbmRlciBmdW5jdGlvbiBvZiBwYWdlcy5cclxuICogQHBhcmFtIHByb3BzXHJcbiAqIEBwYXJhbSBjYWxsYmFja1xyXG4gKiBAcmV0dXJucyB7bnVsbHwqfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldpdGhMb2dnZWRJblVzZXIocHJvcHMsIGNhbGxiYWNrKSB7XHJcbiAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBpZiBsb2dnZWQgaW5cclxuICBpZiAocHJvcHMubG9nZ2VkSW4gIT09IGZhbHNlKSB7XHJcbiAgICAvLyB2YWxpZGF0ZSBwZXJtaXNzaW9uc1xyXG4gICAgbGV0IHNvdXJjZSA9IHByb3BzLmxvZ2dlZEluVXNlckluZm87XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvcHMubG9nZ2VkSW4pO1xyXG5cclxuICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgLy8gY2hlY2sgdGVtcCBwYXNzd29yZFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXJvdXRlci5hc1BhdGguc3RhcnRzV2l0aChcIi9wcm9maWxlXCIpICYmXHJcbiAgICAgICAgc291cmNlLmFjY291bnQgJiZcclxuICAgICAgICBzb3VyY2UuYWNjb3VudC5pc1RlbXBQYXNzd29yZFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2ZpbGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhwcm9wcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsbGJhY2socHJvcHMpIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBpZiBub3RcclxuICBlbHNlIHtcclxuICAgIC8vIGRvIGhhcmQgcmVkaXJlY3QgdG8gL2xvZ2luXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb0xvZ291dCgpIHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goXCIvYmFja2VuZC9jb3JlL2FjY291bnQvdjEvbG9nb3V0XCIsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcGFyZVBhdGgoaW5wdXQsIHBlcm1pc3Npb24pIHtcclxuICBpZiAocGVybWlzc2lvbi5zdGFydHNXaXRoKFwiPVwiKSkge1xyXG4gICAgaWYgKGlucHV0ID09PSBwZXJtaXNzaW9uLnN1YnN0cigxKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGlucHV0LnN0YXJ0c1dpdGgocGVybWlzc2lvbikpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY2NlcHRlZFNjcmVlblBhdGgodXNlckluZm8sIHBhdGgpIHtcclxuICBpZiAoIXVzZXJJbmZvKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChwYXRoID09IFwiL1wiIHx8IHBhdGggPT0gXCIvcHJvZmlsZVwiKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IHNjcmVlbnMgPSB1c2VySW5mby5zY3JlZW5zO1xyXG4gIGxldCB1c2VyUm9sZXMgPSB1c2VySW5mby51c2VyUm9sZXM7XHJcbiAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XHJcbiAgaWYgKHNjcmVlbnMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NyZWVucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoc2NyZWVuc1tpXS5pbmRleE9mKFwiOmRlcGFydG1lbnRDb2RlXCIpID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgdXNlclJvbGVzICYmIGogPCB1c2VyUm9sZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGxldCBub3JtYWxpemVkUGF0aCA9IHNjcmVlbnNbaV0ucmVwbGFjZShcclxuICAgICAgICAgICAgXCI6ZGVwYXJ0bWVudENvZGVcIixcclxuICAgICAgICAgICAgdXNlclJvbGVzW2pdLmRlcGFydG1lbnRDb2RlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKGNvbXBhcmVQYXRoKHBhdGgsIG5vcm1hbGl6ZWRQYXRoKSkge1xyXG4gICAgICAgICAgICBhY2NlcHRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY29tcGFyZVBhdGgocGF0aCwgc2NyZWVuc1tpXSkpIHtcclxuICAgICAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYWNjZXB0ZWQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==