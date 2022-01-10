module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cms/revenue/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/my-card/my-card.js":
/*!**************************************!*\
  !*** ./component/my-card/my-card.js ***!
  \**************************************/
/*! exports provided: MyCard, MyCardHeader, MyCardContent, MyCardActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCard", function() { return MyCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardHeader", function() { return MyCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardContent", function() { return MyCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardActions", function() { return MyCardActions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\component\\my-card\\my-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function MyCard(props) {
  let style = _objectSpread({
    marginBottom: 20
  }, props.style || {});

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }
  }, props.children);
}
function MyCardHeader(props) {
  return __jsx("div", {
    style: {
      marginTop: "60px",
      color: "#fff",
      backgroundColor: "#00b46e",
      // "#907060",
      padding: props.small ? 8 : 16,
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }, __jsx("span", {
    style: {
      fontSize: props.small ? 15 : 24,
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, props.title), props.children && __jsx("div", {
    style: {
      textAlign: "right",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 28
    }
  }, props.children));
}
function MyCardContent(props) {
  let style = props.style || {};
  style.borderTop = "solid 1px #ccc";
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }
  }, props.children);
}
function MyCardActions(props) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    style: {
      borderTop: "solid 1px #ccc",
      backgroundColor: "#f6f6f6",
      display: "flex",
      padding: 16
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }
  }, props.children);
}

/***/ }),

/***/ "./component/my-context/my-context.js":
/*!********************************************!*\
  !*** ./component/my-context/my-context.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  loggedInUserInfo: null
});
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ }),

/***/ "./lib/common.js":
/*!***********************!*\
  !*** ./lib/common.js ***!
  \***********************/
/*! exports provided: APIStatus, zero, emptyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIStatus", function() { return APIStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyString", function() { return emptyString; });
const APIStatus = {
  OK: "OK",
  INVALID: "INVALID",
  NOT_FOUND: "NOT_FOUND",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  ERROR: "ERROR",
  EXISTED: "EXISTED"
};
const zero = 0;
const emptyString = "";

/***/ }),

/***/ "./lib/login.js":
/*!**********************!*\
  !*** ./lib/login.js ***!
  \**********************/
/*! exports provided: getSessionToken, doWithLoggedInUser, renderWithLoggedInUser, doLogout, acceptedScreenPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionToken", function() { return getSessionToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doWithLoggedInUser", function() { return doWithLoggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWithLoggedInUser", function() { return renderWithLoggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLogout", function() { return doLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptedScreenPath", function() { return acceptedScreenPath; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./lib/common.js");
/*
This function return a session string by parsing cookie value of incoming request.
 */


function getSessionToken(ctx, cookieName) {
  cookieName = cookieName || "session_token";
  let sessionStr = ctx.req && ctx.req.headers.cookie;
  let session = undefined;

  if (sessionStr) {
    sessionStr.split(";").forEach(cookie => {
      let i = cookie.indexOf("=");
      let name = cookie.substr(0, i).trim();
      let value = cookie.substr(i + 1).trim();

      if (name == cookieName) {
        session = value;
        return false;
      }
    });
  }

  return session;
}

async function getLoggedUserInfo(ctx) {
  let session = getSessionToken(ctx); // if there is not cookie with "session_token" name

  let res = ctx.res;

  if (!session || session === "deleted") {
    session = getSessionToken(ctx, "remember_me");

    if (!session || session === "deleted") {
      res.setHeader("location", "/login?url=" + escape(ctx.req.url));
      res.statusCode = 302;
      res.end();
      return {
        props: {
          loggedIn: false
        }
      };
    }

    res.setHeader("set-cookie", `session_token=${session}; Path=/; HttpOnly`);
  } // if there is value


  let req = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session}`,
      "User-Agent": ctx.req.headers["user-agent"],
      "X-Forwarded-For": ctx.req.headers["x-forwarded-for"]
    }
  };
  let url = "http://localhost:1337" + "/core/account/v1/me?getPermissions=true";
  return await fetch(url, req);
}
/**
 * This function is used by injecting to getServerSideProps of pages.
 * @param ctx
 * @param callback
 * @returns {Promise<*|{props: {loggedIn: boolean}}>}
 */


async function doWithLoggedInUser(ctx, callback) {
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
  let result = callback(ctx); // // wait for page promise

  if (result && result instanceof Promise) {
    result = await result;
  } // // set loggedIn = true if is is undefined


  result = result || {};
  result.props = result.props || {}; // result.props.loggedInUserInfo = userInfo.data[0]
  // if (typeof result.props.loggedIn == "undefined") {

  result.props.loggedIn = true; // }

  return result;
}
/**
 * This function is used by injecting to render function of pages.
 * @param props
 * @param callback
 * @returns {null|*}
 */

function renderWithLoggedInUser(props, callback) {
  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])(); // if logged in

  if (props.loggedIn !== false) {
    // validate permissions
    let source = props.loggedInUserInfo;
    console.log(props.loggedIn);

    if (source) {
      // check temp password
      if (!router.asPath.startsWith("/profile") && source.account && source.account.isTempPassword) {
        if (false) {}

        return callback(props);
      }
    }

    return callback(props) || null;
  } // if not
  else {
      // do hard redirect to /login
      if (false) {}
    }

  return null;
}
/**
 *
 */

async function doLogout() {
  return await fetch("/backend/core/account/v1/logout", {
    method: "PUT"
  });
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

  let screens = userInfo.screens;
  let userRoles = userInfo.userRoles;
  let accepted = false;

  if (screens) {
    for (let i = 0; i < screens.length; i++) {
      if (screens[i].indexOf(":departmentCode") >= 0) {
        for (let j = 0; userRoles && j < userRoles.length; j++) {
          let normalizedPath = screens[i].replace(":departmentCode", userRoles[j].departmentCode);

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

/***/ }),

/***/ "./pages/cms/revenue/index.js":
/*!************************************!*\
  !*** ./pages/cms/revenue/index.js ***!
  \************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Revenue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/login */ "./lib/login.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_my_card_my_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/my-card/my-card */ "./component/my-card/my-card.js");
/* harmony import */ var _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./revenue.module.scss */ "./pages/cms/revenue/revenue.module.scss");
/* harmony import */ var _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_sellerApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/sellerApi */ "./services/sellerApi.js");
/* harmony import */ var _component_my_context_my_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../component/my-context/my-context */ "./component/my-context/my-context.js");
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\pages\\cms\\revenue\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Revenue(props) {
  return Object(_lib_login__WEBPACK_IMPORTED_MODULE_1__["renderWithLoggedInUser"])(props, render);
}

function render({
  moneyPaid,
  moneyUnpaid,
  numberProductsPaid,
  numberProductsUnpaid
}) {
  const listRevenueProductsPaid = [{
    title: "Tổng số tiền",
    count: `${moneyPaid}đ`
  }, {
    title: "Tổng số đơn hàng",
    count: numberProductsPaid
  }];
  const listRevenueProductsUnpaid = [{
    title: "Tổng số tiền",
    count: `${moneyUnpaid}đ`
  }, {
    title: "Tổng số đơn hàng",
    count: numberProductsUnpaid
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    select: "/cms/revenue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "T\u1ED5ng qu\xE1t doanh thu")), __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_3__["MyCard"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_3__["MyCardHeader"], {
    title: "T\u1ED5ng quan doanh thu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-lg-12 col-xl-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: `${_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue} mb_30"`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "mb_25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "\u0110\u01A1n h\xE0ng s\u1EBD thanh to\xE1n"))), __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__servay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, listRevenueProductsUnpaid.map((item, index) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "col-md-6",
      key: `paid-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__count,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 27
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__counter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 31
      }
    }, item.count)), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 29
      }
    }, item.title))));
  }))))), __jsx("div", {
    className: "col-lg-12 col-xl-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: `${_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue} mb_30"`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "mb_25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, "\u0110\u01A1n h\xE0ng \u0111\xE3 thanh to\xE1n"))), __jsx("div", {
    className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__servay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, listRevenueProductsPaid.map((item, index) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "col-md-6",
      key: `paid-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__count,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__counter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 31
      }
    }, item.count)), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, item.title))));
  }))))))));
}

const getServerSideProps = async () => {
  const listOrders = await _services_sellerApi__WEBPACK_IMPORTED_MODULE_5__["sellerApi"].getOrders({});
  const dataOrders = listOrders.data.data;
  const listRevenue = await _services_sellerApi__WEBPACK_IMPORTED_MODULE_5__["sellerApi"].getRevenue({});
  const dataRevenue = listRevenue.data.data;
  let moneyPaid = 0;
  let moneyUnpaid = 0;
  let numberProductsPaid = 0;
  let numberProductsUnpaid = 0;
  dataRevenue.map(item => {
    if (item.attributes.AccountID === 1) {
      moneyUnpaid = item.attributes.MoneyWillPay;
      moneyPaid = item.attributes.MoneyPaid;
    }
  });
  dataOrders.map(item => {
    if (item.attributes.Status === "Unpaid") {
      numberProductsUnpaid++;
    }

    if (item.attributes.Status === "Paid") {
      numberProductsPaid++;
    }
  });
  return {
    props: {
      moneyPaid,
      moneyUnpaid,
      numberProductsPaid,
      numberProductsUnpaid
    }
  };
};

/***/ }),

/***/ "./pages/cms/revenue/revenue.module.scss":
/*!***********************************************!*\
  !*** ./pages/cms/revenue/revenue.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"view_revenue": "revenue_view_revenue__3b9_y",
	"view_revenue__header": "revenue_view_revenue__header__3kcPS",
	"view_revenue__title": "revenue_view_revenue__title__2hKKJ",
	"view_revenue__count": "revenue_view_revenue__count__cHUcH",
	"view_revenue__counter": "revenue_view_revenue__counter__1hIG8",
	"products": "revenue_products__1tf12",
	"products__header": "revenue_products__header__kHlwt",
	"products__title": "revenue_products__title__2vYCb",
	"products__body": "revenue_products__body__2fZRU",
	"products__table_responsive": "revenue_products__table_responsive__2bx_e",
	"products__length": "revenue_products__length__2rMu1",
	"products__label": "revenue_products__label__3-OtA",
	"products__select": "revenue_products__select__2SXkL",
	"products__filter": "revenue_products__filter__1BKmh",
	"products__input": "revenue_products__input__zlhkt",
	"products__table_content": "revenue_products__table_content__3pks-",
	"products__status": "revenue_products__status__3bLqp",
	"products__paid": "revenue_products__paid__1cA_5",
	"products__unpaid": "revenue_products__unpaid__2XT_C",
	"products__info": "revenue_products__info__2npji",
	"products__paginate": "revenue_products__paginate__B3HGr",
	"products__previous": "revenue_products__previous__24lEM",
	"products__next": "revenue_products__next__1ua7B",
	"products__rank": "revenue_products__rank__2mq7O",
	"products__current": "revenue_products__current__3taW_",
	"products__btn": "revenue_products__btn__2ILb7"
};


/***/ }),

/***/ "./services/axiosMy.js":
/*!*****************************!*\
  !*** ./services/axiosMy.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);


const baseURL = process.env.URL_MY_API;
const axiosMy = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "content-type": "application/json",
    Accept: "application/json" // Authorization: token,

  },
  paramsSerializer: params => query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params)
});
axiosMy.interceptors.response.use(res => {
  if (res.data.result === 0) {
    console.log("Data empty");
  }

  return res;
}, err => {
  var _err$response;

  if (((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 401) {
    console.log("Error 401");
  }

  throw err;
});
/* harmony default export */ __webpack_exports__["default"] = (axiosMy);

/***/ }),

/***/ "./services/sellerApi.js":
/*!*******************************!*\
  !*** ./services/sellerApi.js ***!
  \*******************************/
/*! exports provided: sellerApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sellerApi", function() { return sellerApi; });
/* harmony import */ var _axiosMy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosMy */ "./services/axiosMy.js");

const sellerApi = {
  getRevenue: async params => {
    const url = `revenues`;
    return await _axiosMy__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
      params
    });
  },
  getProducts: async params => {
    const url = `products`;
    return await _axiosMy__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
      params
    });
  },
  getOrders: async params => {
    const url = `orders`;
    return await _axiosMy__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
      params
    });
  }
};

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L215LWNhcmQvbXktY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbXktY29udGV4dC9teS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2xpYi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Ntcy9yZXZlbnVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Ntcy9yZXZlbnVlL3JldmVudWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3NNeS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zZWxsZXJBcGkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJNeUNhcmQiLCJwcm9wcyIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiY2hpbGRyZW4iLCJNeUNhcmRIZWFkZXIiLCJtYXJnaW5Ub3AiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJzbWFsbCIsImRpc3BsYXkiLCJmb250U2l6ZSIsIndpZHRoIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJNeUNhcmRDb250ZW50IiwiYm9yZGVyVG9wIiwiTXlDYXJkQWN0aW9ucyIsIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImxvZ2dlZEluVXNlckluZm8iLCJBUElTdGF0dXMiLCJPSyIsIklOVkFMSUQiLCJOT1RfRk9VTkQiLCJVTkFVVEhPUklaRUQiLCJGT1JCSURERU4iLCJFUlJPUiIsIkVYSVNURUQiLCJ6ZXJvIiwiZW1wdHlTdHJpbmciLCJnZXRTZXNzaW9uVG9rZW4iLCJjdHgiLCJjb29raWVOYW1lIiwic2Vzc2lvblN0ciIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJzZXNzaW9uIiwidW5kZWZpbmVkIiwic3BsaXQiLCJmb3JFYWNoIiwiaSIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwidHJpbSIsInZhbHVlIiwiZ2V0TG9nZ2VkVXNlckluZm8iLCJyZXMiLCJzZXRIZWFkZXIiLCJlc2NhcGUiLCJ1cmwiLCJzdGF0dXNDb2RlIiwiZW5kIiwibG9nZ2VkSW4iLCJtZXRob2QiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImZldGNoIiwiZG9XaXRoTG9nZ2VkSW5Vc2VyIiwiY2FsbGJhY2siLCJyZXN1bHQiLCJQcm9taXNlIiwicmVuZGVyV2l0aExvZ2dlZEluVXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNvdXJjZSIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJzdGFydHNXaXRoIiwiYWNjb3VudCIsImlzVGVtcFBhc3N3b3JkIiwiZG9Mb2dvdXQiLCJjb21wYXJlUGF0aCIsImlucHV0IiwicGVybWlzc2lvbiIsImFjY2VwdGVkU2NyZWVuUGF0aCIsInVzZXJJbmZvIiwicGF0aCIsInNjcmVlbnMiLCJ1c2VyUm9sZXMiLCJhY2NlcHRlZCIsImxlbmd0aCIsImoiLCJub3JtYWxpemVkUGF0aCIsInJlcGxhY2UiLCJkZXBhcnRtZW50Q29kZSIsIlJldmVudWUiLCJyZW5kZXIiLCJtb25leVBhaWQiLCJtb25leVVucGFpZCIsIm51bWJlclByb2R1Y3RzUGFpZCIsIm51bWJlclByb2R1Y3RzVW5wYWlkIiwibGlzdFJldmVudWVQcm9kdWN0c1BhaWQiLCJjb3VudCIsImxpc3RSZXZlbnVlUHJvZHVjdHNVbnBhaWQiLCJzdHlsZXMiLCJ2aWV3X3JldmVudWUiLCJ2aWV3X3JldmVudWVfX2hlYWRlciIsInZpZXdfcmV2ZW51ZV9fdGl0bGUiLCJ2aWV3X3JldmVudWVfX3NlcnZheSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInZpZXdfcmV2ZW51ZV9fY291bnQiLCJ2aWV3X3JldmVudWVfX2NvdW50ZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJsaXN0T3JkZXJzIiwic2VsbGVyQXBpIiwiZ2V0T3JkZXJzIiwiZGF0YU9yZGVycyIsImRhdGEiLCJsaXN0UmV2ZW51ZSIsImdldFJldmVudWUiLCJkYXRhUmV2ZW51ZSIsImF0dHJpYnV0ZXMiLCJBY2NvdW50SUQiLCJNb25leVdpbGxQYXkiLCJNb25leVBhaWQiLCJTdGF0dXMiLCJiYXNlVVJMIiwiZW52IiwiVVJMX01ZX0FQSSIsImF4aW9zTXkiLCJheGlvcyIsImNyZWF0ZSIsIkFjY2VwdCIsInBhcmFtc1NlcmlhbGl6ZXIiLCJwYXJhbXMiLCJxdWVyeVN0cmluZyIsInN0cmluZ2lmeSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyIiwic3RhdHVzIiwiZ2V0IiwiZ2V0UHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QUFiO0FBQ0QsR0FSc0I7QUFTdkJuQixXQUFTLEVBQUUsTUFBT21CLE1BQVAsSUFBa0I7QUFDM0IsVUFBTTlFLEdBQUcsR0FBSSxRQUFiO0FBQ0EsV0FBTyxNQUFNeUUsZ0RBQU8sQ0FBQ2EsR0FBUixDQUFZdEYsR0FBWixFQUFpQjtBQUFFOEU7QUFBRixLQUFqQixDQUFiO0FBQ0Q7QUFac0IsQ0FBbEIsQzs7Ozs7Ozs7Ozs7QUNGUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9jbXMvcmV2ZW51ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY21zL3JldmVudWUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNeUNhcmQocHJvcHMpIHtcclxuICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxyXG4gICAgICAgIC4uLiAocHJvcHMuc3R5bGUgfHwge30pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPENhcmRcclxuICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9DYXJkID5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE15Q2FyZEhlYWRlcihwcm9wcykge1xyXG4gICAgcmV0dXJuIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDBiNDZlXCIsLy8gXCIjOTA3MDYwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHByb3BzLnNtYWxsID8gOCA6IDE2LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIlxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IHByb3BzLnNtYWxsID8gMTUgOiAyNCwgd2lkdGg6IFwiMTAwJVwiIH19Pntwcm9wcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVuICYmIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT57cHJvcHMuY2hpbGRyZW59PC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNeUNhcmRDb250ZW50KHByb3BzKSB7XHJcbiAgICBsZXQgc3R5bGUgPSBwcm9wcy5zdHlsZSB8fCB7fVxyXG4gICAgc3R5bGUuYm9yZGVyVG9wID0gXCJzb2xpZCAxcHggI2NjY1wiXHJcbiAgICByZXR1cm4gPENhcmRDb250ZW50XHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ2FyZENvbnRlbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNeUNhcmRBY3Rpb25zKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPENhcmRBY3Rpb25zXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiBcInNvbGlkIDFweCAjY2NjXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjZmNmY2XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNlxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9DYXJkQWN0aW9ucz5cclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IGxvZ2dlZEluVXNlckluZm86IG51bGwgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dDtcclxuIiwiZXhwb3J0IGNvbnN0IEFQSVN0YXR1cyA9IHtcclxuICAgIE9LIDogXCJPS1wiLFxyXG4gICAgSU5WQUxJRDogXCJJTlZBTElEXCIsXHJcbiAgICBOT1RfRk9VTkQ6IFwiTk9UX0ZPVU5EXCIsXHJcbiAgICBVTkFVVEhPUklaRUQ6IFwiVU5BVVRIT1JJWkVEXCIsXHJcbiAgICBGT1JCSURERU46IFwiRk9SQklEREVOXCIsXHJcbiAgICBFUlJPUjogXCJFUlJPUlwiLFxyXG4gICAgRVhJU1RFRDogXCJFWElTVEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHplcm8gPSAwXHJcbmV4cG9ydCBjb25zdCBlbXB0eVN0cmluZyA9IFwiXCIiLCIvKlxyXG5UaGlzIGZ1bmN0aW9uIHJldHVybiBhIHNlc3Npb24gc3RyaW5nIGJ5IHBhcnNpbmcgY29va2llIHZhbHVlIG9mIGluY29taW5nIHJlcXVlc3QuXHJcbiAqL1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQVBJU3RhdHVzIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vzc2lvblRva2VuKGN0eCwgY29va2llTmFtZSkge1xyXG4gIGNvb2tpZU5hbWUgPSBjb29raWVOYW1lIHx8IFwic2Vzc2lvbl90b2tlblwiO1xyXG4gIGxldCBzZXNzaW9uU3RyID0gY3R4LnJlcSAmJiBjdHgucmVxLmhlYWRlcnMuY29va2llO1xyXG4gIGxldCBzZXNzaW9uID0gdW5kZWZpbmVkO1xyXG4gIGlmIChzZXNzaW9uU3RyKSB7XHJcbiAgICBzZXNzaW9uU3RyLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChjb29raWUpID0+IHtcclxuICAgICAgbGV0IGkgPSBjb29raWUuaW5kZXhPZihcIj1cIik7XHJcbiAgICAgIGxldCBuYW1lID0gY29va2llLnN1YnN0cigwLCBpKS50cmltKCk7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGNvb2tpZS5zdWJzdHIoaSArIDEpLnRyaW0oKTtcclxuICAgICAgaWYgKG5hbWUgPT0gY29va2llTmFtZSkge1xyXG4gICAgICAgIHNlc3Npb24gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gc2Vzc2lvbjtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9nZ2VkVXNlckluZm8oY3R4KSB7XHJcbiAgbGV0IHNlc3Npb24gPSBnZXRTZXNzaW9uVG9rZW4oY3R4KTtcclxuXHJcbiAgLy8gaWYgdGhlcmUgaXMgbm90IGNvb2tpZSB3aXRoIFwic2Vzc2lvbl90b2tlblwiIG5hbWVcclxuICBsZXQgcmVzID0gY3R4LnJlcztcclxuICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbiA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgIHNlc3Npb24gPSBnZXRTZXNzaW9uVG9rZW4oY3R4LCBcInJlbWVtYmVyX21lXCIpO1xyXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24gPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoXCJsb2NhdGlvblwiLCBcIi9sb2dpbj91cmw9XCIgKyBlc2NhcGUoY3R4LnJlcS51cmwpKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAzMDI7XHJcbiAgICAgIHJlcy5lbmQoKTtcclxuICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgbG9nZ2VkSW46IGZhbHNlIH0gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuc2V0SGVhZGVyKFwic2V0LWNvb2tpZVwiLCBgc2Vzc2lvbl90b2tlbj0ke3Nlc3Npb259OyBQYXRoPS87IEh0dHBPbmx5YCk7XHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGVyZSBpcyB2YWx1ZVxyXG4gIGxldCByZXEgPSB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9ufWAsXHJcbiAgICAgIFwiVXNlci1BZ2VudFwiOiBjdHgucmVxLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdLFxyXG4gICAgICBcIlgtRm9yd2FyZGVkLUZvclwiOiBjdHgucmVxLmhlYWRlcnNbXCJ4LWZvcndhcmRlZC1mb3JcIl0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9IT1NUICsgXCIvY29yZS9hY2NvdW50L3YxL21lP2dldFBlcm1pc3Npb25zPXRydWVcIjtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2godXJsLCByZXEpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJ5IGluamVjdGluZyB0byBnZXRTZXJ2ZXJTaWRlUHJvcHMgb2YgcGFnZXMuXHJcbiAqIEBwYXJhbSBjdHhcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPCp8e3Byb3BzOiB7bG9nZ2VkSW46IGJvb2xlYW59fT59XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9XaXRoTG9nZ2VkSW5Vc2VyKGN0eCwgY2FsbGJhY2spIHtcclxuICAvLyBsZXQgcmVzdWx0ID0gYXdhaXQgZ2V0TG9nZ2VkVXNlckluZm8oY3R4KVxyXG4gIC8vIGxldCB1c2VySW5mbyA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuXHJcbiAgLy8gLy8gbXVzdCBnZXQgdXNlciBpbmZvIHN1Y2Nlc3NmdWwgYmVmb3JlIGRvIGFueXRoaW5nIGVsc2VcclxuICAvLyAvLyBjb25zb2xlLmxvZyh1c2VySW5mbylcclxuICAvLyBpZiAodXNlckluZm8uc3RhdHVzICE9PSBBUElTdGF0dXMuT0spIHtcclxuICAvLyAgICAgcmV0dXJuIHsgcHJvcHM6IHsgbG9nZ2VkSW46IGZhbHNlIH0gfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy8gY2hlY2sgdGVtcCBwYXNzd29yZFxyXG4gIC8vIGxldCBzb3VyY2UgPSB1c2VySW5mby5kYXRhWzBdXHJcbiAgLy8gbGV0IGFjY291bnQgPSBzb3VyY2UuYWNjb3VudFxyXG5cclxuICAvLyBpZiAoIWN0eC5yZXEudXJsLnN0YXJ0c1dpdGgoJy9wcm9maWxlJykgJiYgYWNjb3VudC5pc1RlbXBQYXNzd29yZCkge1xyXG4gIC8vICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIC8vICAgICAgICAgbGV0IHJlcyA9IGN0eC5yZXNcclxuICAvLyAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJsb2NhdGlvblwiLCBcIi9wcm9maWxlXCIpO1xyXG4gIC8vICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAzMDI7XHJcbiAgLy8gICAgICAgICByZXMuZW5kKCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcmV0dXJuIHsgcHJvcHM6IHsgbG9nZ2VkSW46IHRydWUsIGxvZ2dlZEluVXNlckluZm86IHNvdXJjZSB9IH1cclxuICAvLyB9XHJcblxyXG4gIGxldCByZXN1bHQgPSBjYWxsYmFjayhjdHgpO1xyXG4gIC8vIC8vIHdhaXQgZm9yIHBhZ2UgcHJvbWlzZVxyXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLy8gLy8gc2V0IGxvZ2dlZEluID0gdHJ1ZSBpZiBpcyBpcyB1bmRlZmluZWRcclxuICByZXN1bHQgPSByZXN1bHQgfHwge307XHJcbiAgcmVzdWx0LnByb3BzID0gcmVzdWx0LnByb3BzIHx8IHt9O1xyXG4gIC8vIHJlc3VsdC5wcm9wcy5sb2dnZWRJblVzZXJJbmZvID0gdXNlckluZm8uZGF0YVswXVxyXG4gIC8vIGlmICh0eXBlb2YgcmVzdWx0LnByb3BzLmxvZ2dlZEluID09IFwidW5kZWZpbmVkXCIpIHtcclxuICByZXN1bHQucHJvcHMubG9nZ2VkSW4gPSB0cnVlO1xyXG4gIC8vIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJ5IGluamVjdGluZyB0byByZW5kZXIgZnVuY3Rpb24gb2YgcGFnZXMuXHJcbiAqIEBwYXJhbSBwcm9wc1xyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICogQHJldHVybnMge251bGx8Kn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXaXRoTG9nZ2VkSW5Vc2VyKHByb3BzLCBjYWxsYmFjaykge1xyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gaWYgbG9nZ2VkIGluXHJcbiAgaWYgKHByb3BzLmxvZ2dlZEluICE9PSBmYWxzZSkge1xyXG4gICAgLy8gdmFsaWRhdGUgcGVybWlzc2lvbnNcclxuICAgIGxldCBzb3VyY2UgPSBwcm9wcy5sb2dnZWRJblVzZXJJbmZvO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmxvZ2dlZEluKTtcclxuXHJcbiAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgIC8vIGNoZWNrIHRlbXAgcGFzc3dvcmRcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFyb3V0ZXIuYXNQYXRoLnN0YXJ0c1dpdGgoXCIvcHJvZmlsZVwiKSAmJlxyXG4gICAgICAgIHNvdXJjZS5hY2NvdW50ICYmXHJcbiAgICAgICAgc291cmNlLmFjY291bnQuaXNUZW1wUGFzc3dvcmRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9maWxlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2socHJvcHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbGxiYWNrKHByb3BzKSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgbm90XHJcbiAgZWxzZSB7XHJcbiAgICAvLyBkbyBoYXJkIHJlZGlyZWN0IHRvIC9sb2dpblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9Mb2dvdXQoKSB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFwiL2JhY2tlbmQvY29yZS9hY2NvdW50L3YxL2xvZ291dFwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVQYXRoKGlucHV0LCBwZXJtaXNzaW9uKSB7XHJcbiAgaWYgKHBlcm1pc3Npb24uc3RhcnRzV2l0aChcIj1cIikpIHtcclxuICAgIGlmIChpbnB1dCA9PT0gcGVybWlzc2lvbi5zdWJzdHIoMSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChpbnB1dC5zdGFydHNXaXRoKHBlcm1pc3Npb24pKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWNjZXB0ZWRTY3JlZW5QYXRoKHVzZXJJbmZvLCBwYXRoKSB7XHJcbiAgaWYgKCF1c2VySW5mbykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAocGF0aCA9PSBcIi9cIiB8fCBwYXRoID09IFwiL3Byb2ZpbGVcIikge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGxldCBzY3JlZW5zID0gdXNlckluZm8uc2NyZWVucztcclxuICBsZXQgdXNlclJvbGVzID0gdXNlckluZm8udXNlclJvbGVzO1xyXG4gIGxldCBhY2NlcHRlZCA9IGZhbHNlO1xyXG4gIGlmIChzY3JlZW5zKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcmVlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHNjcmVlbnNbaV0uaW5kZXhPZihcIjpkZXBhcnRtZW50Q29kZVwiKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IHVzZXJSb2xlcyAmJiBqIDwgdXNlclJvbGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBsZXQgbm9ybWFsaXplZFBhdGggPSBzY3JlZW5zW2ldLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIFwiOmRlcGFydG1lbnRDb2RlXCIsXHJcbiAgICAgICAgICAgIHVzZXJSb2xlc1tqXS5kZXBhcnRtZW50Q29kZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChjb21wYXJlUGF0aChwYXRoLCBub3JtYWxpemVkUGF0aCkpIHtcclxuICAgICAgICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbXBhcmVQYXRoKHBhdGgsIHNjcmVlbnNbaV0pKSB7XHJcbiAgICAgICAgICBhY2NlcHRlZCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGFjY2VwdGVkO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGRvV2l0aExvZ2dlZEluVXNlciwgcmVuZGVyV2l0aExvZ2dlZEluVXNlciB9IGZyb20gXCIuLi8uLi8uLi9saWIvbG9naW5cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNeUNhcmRIZWFkZXIsIE15Q2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvbXktY2FyZC9teS1jYXJkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcmV2ZW51ZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBzZWxsZXJBcGkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvc2VsbGVyQXBpXCI7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L215LWNvbnRleHQvbXktY29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZlbnVlKHByb3BzKSB7XHJcbiAgcmV0dXJuIHJlbmRlcldpdGhMb2dnZWRJblVzZXIocHJvcHMsIHJlbmRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcih7XHJcbiAgbW9uZXlQYWlkLFxyXG4gIG1vbmV5VW5wYWlkLFxyXG4gIG51bWJlclByb2R1Y3RzUGFpZCxcclxuICBudW1iZXJQcm9kdWN0c1VucGFpZCxcclxufSkge1xyXG4gIGNvbnN0IGxpc3RSZXZlbnVlUHJvZHVjdHNQYWlkID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSB0aeG7gW5cIixcclxuICAgICAgY291bnQ6IGAke21vbmV5UGFpZH3EkWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSDEkcahbiBow6BuZ1wiLFxyXG4gICAgICBjb3VudDogbnVtYmVyUHJvZHVjdHNQYWlkLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBsaXN0UmV2ZW51ZVByb2R1Y3RzVW5wYWlkID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSB0aeG7gW5cIixcclxuICAgICAgY291bnQ6IGAke21vbmV5VW5wYWlkfcSRYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu5VuZyBz4buRIMSRxqFuIGjDoG5nXCIsXHJcbiAgICAgIGNvdW50OiBudW1iZXJQcm9kdWN0c1VucGFpZCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgc2VsZWN0PVwiL2Ntcy9yZXZlbnVlXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+VOG7lW5nIHF1w6F0IGRvYW5oIHRodTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNeUNhcmQ+XHJcbiAgICAgICAgICA8TXlDYXJkSGVhZGVyIHRpdGxlPVwiVOG7lW5nIHF1YW4gZG9hbmggdGh1XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnZpZXdfcmV2ZW51ZX0gbWJfMzBcImB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iXzI1XCI+xJDGoW4gaMOgbmcgc+G6vSB0aGFuaCB0b8OhbjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fc2VydmF5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsaXN0UmV2ZW51ZVByb2R1Y3RzVW5wYWlkLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGtleT17YHBhaWQtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX2NvdW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy52aWV3X3JldmVudWV9IG1iXzMwXCJgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9faGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX190aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYl8yNVwiPsSQxqFuIGjDoG5nIMSRw6MgdGhhbmggdG/DoW48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX3NlcnZheX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdFJldmVudWVQcm9kdWN0c1BhaWQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIga2V5PXtgcGFpZC0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19jb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fY291bnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L015Q2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxpc3RPcmRlcnMgPSBhd2FpdCBzZWxsZXJBcGkuZ2V0T3JkZXJzKHt9KTtcclxuICBjb25zdCBkYXRhT3JkZXJzID0gbGlzdE9yZGVycy5kYXRhLmRhdGE7XHJcbiAgY29uc3QgbGlzdFJldmVudWUgPSBhd2FpdCBzZWxsZXJBcGkuZ2V0UmV2ZW51ZSh7fSk7XHJcbiAgY29uc3QgZGF0YVJldmVudWUgPSBsaXN0UmV2ZW51ZS5kYXRhLmRhdGE7XHJcblxyXG4gIGxldCBtb25leVBhaWQgPSAwO1xyXG4gIGxldCBtb25leVVucGFpZCA9IDA7XHJcbiAgbGV0IG51bWJlclByb2R1Y3RzUGFpZCA9IDA7XHJcbiAgbGV0IG51bWJlclByb2R1Y3RzVW5wYWlkID0gMDtcclxuXHJcbiAgZGF0YVJldmVudWUubWFwKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5hdHRyaWJ1dGVzLkFjY291bnRJRCA9PT0gMSkge1xyXG4gICAgICBtb25leVVucGFpZCA9IGl0ZW0uYXR0cmlidXRlcy5Nb25leVdpbGxQYXk7XHJcbiAgICAgIG1vbmV5UGFpZCA9IGl0ZW0uYXR0cmlidXRlcy5Nb25leVBhaWQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRhdGFPcmRlcnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5hdHRyaWJ1dGVzLlN0YXR1cyA9PT0gXCJVbnBhaWRcIikge1xyXG4gICAgICBudW1iZXJQcm9kdWN0c1VucGFpZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtLmF0dHJpYnV0ZXMuU3RhdHVzID09PSBcIlBhaWRcIikge1xyXG4gICAgICBudW1iZXJQcm9kdWN0c1BhaWQrKztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1vbmV5UGFpZCxcclxuICAgICAgbW9uZXlVbnBhaWQsXHJcbiAgICAgIG51bWJlclByb2R1Y3RzUGFpZCxcclxuICAgICAgbnVtYmVyUHJvZHVjdHNVbnBhaWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZpZXdfcmV2ZW51ZVwiOiBcInJldmVudWVfdmlld19yZXZlbnVlX18zYjlfeVwiLFxuXHRcInZpZXdfcmV2ZW51ZV9faGVhZGVyXCI6IFwicmV2ZW51ZV92aWV3X3JldmVudWVfX2hlYWRlcl9fM2tjUFNcIixcblx0XCJ2aWV3X3JldmVudWVfX3RpdGxlXCI6IFwicmV2ZW51ZV92aWV3X3JldmVudWVfX3RpdGxlX18yaEtLSlwiLFxuXHRcInZpZXdfcmV2ZW51ZV9fY291bnRcIjogXCJyZXZlbnVlX3ZpZXdfcmV2ZW51ZV9fY291bnRfX2NIVWNIXCIsXG5cdFwidmlld19yZXZlbnVlX19jb3VudGVyXCI6IFwicmV2ZW51ZV92aWV3X3JldmVudWVfX2NvdW50ZXJfXzFoSUc4XCIsXG5cdFwicHJvZHVjdHNcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX18xdGYxMlwiLFxuXHRcInByb2R1Y3RzX19oZWFkZXJcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19oZWFkZXJfX2tIbHd0XCIsXG5cdFwicHJvZHVjdHNfX3RpdGxlXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fdGl0bGVfXzJ2WUNiXCIsXG5cdFwicHJvZHVjdHNfX2JvZHlcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19ib2R5X18yZlpSVVwiLFxuXHRcInByb2R1Y3RzX190YWJsZV9yZXNwb25zaXZlXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fdGFibGVfcmVzcG9uc2l2ZV9fMmJ4X2VcIixcblx0XCJwcm9kdWN0c19fbGVuZ3RoXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fbGVuZ3RoX18yck11MVwiLFxuXHRcInByb2R1Y3RzX19sYWJlbFwiOiBcInJldmVudWVfcHJvZHVjdHNfX2xhYmVsX18zLU90QVwiLFxuXHRcInByb2R1Y3RzX19zZWxlY3RcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19zZWxlY3RfXzJTWGtMXCIsXG5cdFwicHJvZHVjdHNfX2ZpbHRlclwiOiBcInJldmVudWVfcHJvZHVjdHNfX2ZpbHRlcl9fMUJLbWhcIixcblx0XCJwcm9kdWN0c19faW5wdXRcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19pbnB1dF9femxoa3RcIixcblx0XCJwcm9kdWN0c19fdGFibGVfY29udGVudFwiOiBcInJldmVudWVfcHJvZHVjdHNfX3RhYmxlX2NvbnRlbnRfXzNwa3MtXCIsXG5cdFwicHJvZHVjdHNfX3N0YXR1c1wiOiBcInJldmVudWVfcHJvZHVjdHNfX3N0YXR1c19fM2JMcXBcIixcblx0XCJwcm9kdWN0c19fcGFpZFwiOiBcInJldmVudWVfcHJvZHVjdHNfX3BhaWRfXzFjQV81XCIsXG5cdFwicHJvZHVjdHNfX3VucGFpZFwiOiBcInJldmVudWVfcHJvZHVjdHNfX3VucGFpZF9fMlhUX0NcIixcblx0XCJwcm9kdWN0c19faW5mb1wiOiBcInJldmVudWVfcHJvZHVjdHNfX2luZm9fXzJucGppXCIsXG5cdFwicHJvZHVjdHNfX3BhZ2luYXRlXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fcGFnaW5hdGVfX0IzSEdyXCIsXG5cdFwicHJvZHVjdHNfX3ByZXZpb3VzXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fcHJldmlvdXNfXzI0bEVNXCIsXG5cdFwicHJvZHVjdHNfX25leHRcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19uZXh0X18xdWE3QlwiLFxuXHRcInByb2R1Y3RzX19yYW5rXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fcmFua19fMm1xN09cIixcblx0XCJwcm9kdWN0c19fY3VycmVudFwiOiBcInJldmVudWVfcHJvZHVjdHNfX2N1cnJlbnRfXzN0YVdfXCIsXG5cdFwicHJvZHVjdHNfX2J0blwiOiBcInJldmVudWVfcHJvZHVjdHNfX2J0bl9fMklMYjdcIlxufTtcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcbmNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5VUkxfTVlfQVBJO1xyXG5cclxuY29uc3QgYXhpb3NNeSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL1wiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIC8vIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gIH0sXHJcbiAgcGFyYW1zU2VyaWFsaXplcjogKHBhcmFtcykgPT4gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyksXHJcbn0pO1xyXG5cclxuYXhpb3NNeS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIChyZXMpID0+IHtcclxuICAgIGlmIChyZXMuZGF0YS5yZXN1bHQgPT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJEYXRhIGVtcHR5XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9LFxyXG4gIChlcnIpID0+IHtcclxuICAgIGlmIChlcnIucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgNDAxXCIpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgZXJyO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zTXk7XHJcbiIsImltcG9ydCBheGlvc015IGZyb20gXCIuL2F4aW9zTXlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxsZXJBcGkgPSB7XHJcbiAgZ2V0UmV2ZW51ZTogYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gYHJldmVudWVzYDtcclxuICAgIHJldHVybiBhd2FpdCBheGlvc015LmdldCh1cmwsIHsgcGFyYW1zIH0pO1xyXG4gIH0sXHJcbiAgZ2V0UHJvZHVjdHM6IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGBwcm9kdWN0c2A7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3NNeS5nZXQodXJsLCB7IHBhcmFtcyB9KTtcclxuICB9LFxyXG4gIGdldE9yZGVyczogYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gYG9yZGVyc2A7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3NNeS5nZXQodXJsLCB7IHBhcmFtcyB9KTtcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=