webpackHotUpdate_N_E("pages/cms/revenue",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_my_context_my_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/my-context/my-context */ "./component/my-context/my-context.js");



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2xvZ2luLmpzIl0sIm5hbWVzIjpbImdldFNlc3Npb25Ub2tlbiIsImN0eCIsImNvb2tpZU5hbWUiLCJzZXNzaW9uU3RyIiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsInNlc3Npb24iLCJ1bmRlZmluZWQiLCJzcGxpdCIsImZvckVhY2giLCJpIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJ0cmltIiwidmFsdWUiLCJnZXRMb2dnZWRVc2VySW5mbyIsInJlcyIsInNldEhlYWRlciIsImVzY2FwZSIsInVybCIsInN0YXR1c0NvZGUiLCJlbmQiLCJwcm9wcyIsImxvZ2dlZEluIiwibWV0aG9kIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJmZXRjaCIsImRvV2l0aExvZ2dlZEluVXNlciIsImNhbGxiYWNrIiwicmVzdWx0IiwiUHJvbWlzZSIsInJlbmRlcldpdGhMb2dnZWRJblVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzb3VyY2UiLCJsb2dnZWRJblVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImFzUGF0aCIsInN0YXJ0c1dpdGgiLCJhY2NvdW50IiwiaXNUZW1wUGFzc3dvcmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkb0xvZ291dCIsImNvbXBhcmVQYXRoIiwiaW5wdXQiLCJwZXJtaXNzaW9uIiwiYWNjZXB0ZWRTY3JlZW5QYXRoIiwidXNlckluZm8iLCJwYXRoIiwic2NyZWVucyIsInVzZXJSb2xlcyIsImFjY2VwdGVkIiwibGVuZ3RoIiwiaiIsIm5vcm1hbGl6ZWRQYXRoIiwicmVwbGFjZSIsImRlcGFydG1lbnRDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxVQUE5QixFQUEwQztBQUMvQ0EsWUFBVSxHQUFHQSxVQUFV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TUFBSUYsT0FBSixFQUFhO0FBQ1gsU0FBSyxJQUFJNUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRDLE9BQU8sQ0FBQ0csTUFBNUIsRUFBb0MvQyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFVBQUk0QyxPQUFPLENBQUM1QyxDQUFELENBQVAsQ0FBV0MsT0FBWCxDQUFtQixpQkFBbkIsS0FBeUMsQ0FBN0MsRUFBZ0Q7QUFDOUMsYUFBSyxJQUFJK0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JILFNBQVMsSUFBSUcsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLE1BQTNDLEVBQW1EQyxDQUFDLEVBQXBELEVBQXdEO0FBQ3RELGNBQUlDLGNBQWMsR0FBR0wsT0FBTyxDQUFDNUMsQ0FBRCxDQUFQLENBQVdrRCxPQUFYLENBQ25CLGlCQURtQixFQUVuQkwsU0FBUyxDQUFDRyxDQUFELENBQVQsQ0FBYUcsY0FGTSxDQUFyQjs7QUFJQSxjQUFJYixXQUFXLENBQUNLLElBQUQsRUFBT00sY0FBUCxDQUFmLEVBQXVDO0FBQ3JDSCxvQkFBUSxHQUFHLElBQVg7QUFDQTtBQUNEO0FBQ0Y7QUFDRixPQVhELE1BV087QUFDTCxZQUFJUixXQUFXLENBQUNLLElBQUQsRUFBT0MsT0FBTyxDQUFDNUMsQ0FBRCxDQUFkLENBQWYsRUFBbUM7QUFDakM4QyxrQkFBUSxHQUFHLElBQVg7QUFDQTtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUNELFNBQU9BLFFBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jbXMvcmV2ZW51ZS5kYjA5NzRjMDQ4NGVhZDUyMmFhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGhpcyBmdW5jdGlvbiByZXR1cm4gYSBzZXNzaW9uIHN0cmluZyBieSBwYXJzaW5nIGNvb2tpZSB2YWx1ZSBvZiBpbmNvbWluZyByZXF1ZXN0LlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFQSVN0YXR1cyB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50L215LWNvbnRleHQvbXktY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlc3Npb25Ub2tlbihjdHgsIGNvb2tpZU5hbWUpIHtcclxuICBjb29raWVOYW1lID0gY29va2llTmFtZSB8fCBcInNlc3Npb25fdG9rZW5cIjtcclxuICBsZXQgc2Vzc2lvblN0ciA9IGN0eC5yZXEgJiYgY3R4LnJlcS5oZWFkZXJzLmNvb2tpZTtcclxuICBsZXQgc2Vzc2lvbiA9IHVuZGVmaW5lZDtcclxuICBpZiAoc2Vzc2lvblN0cikge1xyXG4gICAgc2Vzc2lvblN0ci5zcGxpdChcIjtcIikuZm9yRWFjaCgoY29va2llKSA9PiB7XHJcbiAgICAgIGxldCBpID0gY29va2llLmluZGV4T2YoXCI9XCIpO1xyXG4gICAgICBsZXQgbmFtZSA9IGNvb2tpZS5zdWJzdHIoMCwgaSkudHJpbSgpO1xyXG4gICAgICBsZXQgdmFsdWUgPSBjb29raWUuc3Vic3RyKGkgKyAxKS50cmltKCk7XHJcbiAgICAgIGlmIChuYW1lID09IGNvb2tpZU5hbWUpIHtcclxuICAgICAgICBzZXNzaW9uID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHNlc3Npb247XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldExvZ2dlZFVzZXJJbmZvKGN0eCkge1xyXG4gIGxldCBzZXNzaW9uID0gZ2V0U2Vzc2lvblRva2VuKGN0eCk7XHJcblxyXG4gIC8vIGlmIHRoZXJlIGlzIG5vdCBjb29raWUgd2l0aCBcInNlc3Npb25fdG9rZW5cIiBuYW1lXHJcbiAgbGV0IHJlcyA9IGN0eC5yZXM7XHJcbiAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24gPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICBzZXNzaW9uID0gZ2V0U2Vzc2lvblRva2VuKGN0eCwgXCJyZW1lbWJlcl9tZVwiKTtcclxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uID09PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvbG9naW4/dXJsPVwiICsgZXNjYXBlKGN0eC5yZXEudXJsKSk7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gICAgICByZXMuZW5kKCk7XHJcbiAgICAgIHJldHVybiB7IHByb3BzOiB7IGxvZ2dlZEluOiBmYWxzZSB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLnNldEhlYWRlcihcInNldC1jb29raWVcIiwgYHNlc3Npb25fdG9rZW49JHtzZXNzaW9ufTsgUGF0aD0vOyBIdHRwT25seWApO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlcmUgaXMgdmFsdWVcclxuICBsZXQgcmVxID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2Vzc2lvbn1gLFxyXG4gICAgICBcIlVzZXItQWdlbnRcIjogY3R4LnJlcS5oZWFkZXJzW1widXNlci1hZ2VudFwiXSxcclxuICAgICAgXCJYLUZvcndhcmRlZC1Gb3JcIjogY3R4LnJlcS5oZWFkZXJzW1wieC1mb3J3YXJkZWQtZm9yXCJdLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCB1cmwgPSBwcm9jZXNzLmVudi5BUElfSE9TVCArIFwiL2NvcmUvYWNjb3VudC92MS9tZT9nZXRQZXJtaXNzaW9ucz10cnVlXCI7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwgcmVxKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBieSBpbmplY3RpbmcgdG8gZ2V0U2VydmVyU2lkZVByb3BzIG9mIHBhZ2VzLlxyXG4gKiBAcGFyYW0gY3R4XHJcbiAqIEBwYXJhbSBjYWxsYmFja1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqfHtwcm9wczoge2xvZ2dlZEluOiBib29sZWFufX0+fVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvV2l0aExvZ2dlZEluVXNlcihjdHgsIGNhbGxiYWNrKSB7XHJcbiAgLy8gbGV0IHJlc3VsdCA9IGF3YWl0IGdldExvZ2dlZFVzZXJJbmZvKGN0eClcclxuICAvLyBsZXQgdXNlckluZm8gPSBhd2FpdCByZXN1bHQuanNvbigpXHJcblxyXG4gIC8vIC8vIG11c3QgZ2V0IHVzZXIgaW5mbyBzdWNjZXNzZnVsIGJlZm9yZSBkbyBhbnl0aGluZyBlbHNlXHJcbiAgLy8gLy8gY29uc29sZS5sb2codXNlckluZm8pXHJcbiAgLy8gaWYgKHVzZXJJbmZvLnN0YXR1cyAhPT0gQVBJU3RhdHVzLk9LKSB7XHJcbiAgLy8gICAgIHJldHVybiB7IHByb3BzOiB7IGxvZ2dlZEluOiBmYWxzZSB9IH1cclxuICAvLyB9XHJcblxyXG4gIC8vIC8vIGNoZWNrIHRlbXAgcGFzc3dvcmRcclxuICAvLyBsZXQgc291cmNlID0gdXNlckluZm8uZGF0YVswXVxyXG4gIC8vIGxldCBhY2NvdW50ID0gc291cmNlLmFjY291bnRcclxuXHJcbiAgLy8gaWYgKCFjdHgucmVxLnVybC5zdGFydHNXaXRoKCcvcHJvZmlsZScpICYmIGFjY291bnQuaXNUZW1wUGFzc3dvcmQpIHtcclxuICAvLyAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAvLyAgICAgICAgIGxldCByZXMgPSBjdHgucmVzXHJcbiAgLy8gICAgICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvcHJvZmlsZVwiKTtcclxuICAvLyAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gIC8vICAgICAgICAgcmVzLmVuZCgpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIHJldHVybiB7IHByb3BzOiB7IGxvZ2dlZEluOiB0cnVlLCBsb2dnZWRJblVzZXJJbmZvOiBzb3VyY2UgfSB9XHJcbiAgLy8gfVxyXG5cclxuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soY3R4KTtcclxuICAvLyAvLyB3YWl0IGZvciBwYWdlIHByb21pc2VcclxuICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgIHJlc3VsdCA9IGF3YWl0IHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIC8vIHNldCBsb2dnZWRJbiA9IHRydWUgaWYgaXMgaXMgdW5kZWZpbmVkXHJcbiAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9O1xyXG4gIHJlc3VsdC5wcm9wcyA9IHJlc3VsdC5wcm9wcyB8fCB7fTtcclxuICAvLyByZXN1bHQucHJvcHMubG9nZ2VkSW5Vc2VySW5mbyA9IHVzZXJJbmZvLmRhdGFbMF1cclxuICAvLyBpZiAodHlwZW9mIHJlc3VsdC5wcm9wcy5sb2dnZWRJbiA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgcmVzdWx0LnByb3BzLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAvLyB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBieSBpbmplY3RpbmcgdG8gcmVuZGVyIGZ1bmN0aW9uIG9mIHBhZ2VzLlxyXG4gKiBAcGFyYW0gcHJvcHNcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zIHtudWxsfCp9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2l0aExvZ2dlZEluVXNlcihwcm9wcywgY2FsbGJhY2spIHtcclxuICBsZXQgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIGlmIGxvZ2dlZCBpblxyXG4gIGlmIChwcm9wcy5sb2dnZWRJbiAhPT0gZmFsc2UpIHtcclxuICAgIC8vIHZhbGlkYXRlIHBlcm1pc3Npb25zXHJcbiAgICBsZXQgc291cmNlID0gcHJvcHMubG9nZ2VkSW5Vc2VySW5mbztcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5sb2dnZWRJbik7XHJcblxyXG4gICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICAvLyBjaGVjayB0ZW1wIHBhc3N3b3JkXHJcbiAgICAgIGlmIChcclxuICAgICAgICAhcm91dGVyLmFzUGF0aC5zdGFydHNXaXRoKFwiL3Byb2ZpbGVcIikgJiZcclxuICAgICAgICBzb3VyY2UuYWNjb3VudCAmJlxyXG4gICAgICAgIHNvdXJjZS5hY2NvdW50LmlzVGVtcFBhc3N3b3JkXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZmlsZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHByb3BzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYWxsYmFjayhwcm9wcykgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIGlmIG5vdFxyXG4gIGVsc2Uge1xyXG4gICAgLy8gZG8gaGFyZCByZWRpcmVjdCB0byAvbG9naW5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvTG9nb3V0KCkge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChcIi9iYWNrZW5kL2NvcmUvYWNjb3VudC92MS9sb2dvdXRcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wYXJlUGF0aChpbnB1dCwgcGVybWlzc2lvbikge1xyXG4gIGlmIChwZXJtaXNzaW9uLnN0YXJ0c1dpdGgoXCI9XCIpKSB7XHJcbiAgICBpZiAoaW5wdXQgPT09IHBlcm1pc3Npb24uc3Vic3RyKDEpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaW5wdXQuc3RhcnRzV2l0aChwZXJtaXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjY2VwdGVkU2NyZWVuUGF0aCh1c2VySW5mbywgcGF0aCkge1xyXG4gIGlmICghdXNlckluZm8pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKHBhdGggPT0gXCIvXCIgfHwgcGF0aCA9PSBcIi9wcm9maWxlXCIpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBsZXQgc2NyZWVucyA9IHVzZXJJbmZvLnNjcmVlbnM7XHJcbiAgbGV0IHVzZXJSb2xlcyA9IHVzZXJJbmZvLnVzZXJSb2xlcztcclxuICBsZXQgYWNjZXB0ZWQgPSBmYWxzZTtcclxuICBpZiAoc2NyZWVucykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JlZW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChzY3JlZW5zW2ldLmluZGV4T2YoXCI6ZGVwYXJ0bWVudENvZGVcIikgPj0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyB1c2VyUm9sZXMgJiYgaiA8IHVzZXJSb2xlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgbGV0IG5vcm1hbGl6ZWRQYXRoID0gc2NyZWVuc1tpXS5yZXBsYWNlKFxyXG4gICAgICAgICAgICBcIjpkZXBhcnRtZW50Q29kZVwiLFxyXG4gICAgICAgICAgICB1c2VyUm9sZXNbal0uZGVwYXJ0bWVudENvZGVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoY29tcGFyZVBhdGgocGF0aCwgbm9ybWFsaXplZFBhdGgpKSB7XHJcbiAgICAgICAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjb21wYXJlUGF0aChwYXRoLCBzY3JlZW5zW2ldKSkge1xyXG4gICAgICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBhY2NlcHRlZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9