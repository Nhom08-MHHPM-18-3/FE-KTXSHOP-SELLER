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
      "Authorization": `Bearer ${session}`,
      "User-Agent": ctx.req.headers['user-agent'],
      'X-Forwarded-For': ctx.req.headers['x-forwarded-for']
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
    className: `${_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue} mb_30"`,
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
  }, listRevenueProductsUnpaid.map((item, index) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "col-md-6",
      key: `paid-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__count,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 27
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__counter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 31
      }
    }, item.count)), __jsx("p", {
      __self: this,
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
    className: `${_revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue} mb_30"`,
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
  }, listRevenueProductsPaid.map((item, index) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "col-md-6",
      key: `paid-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__count,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 27
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _revenue_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view_revenue__counter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 31
      }
    }, item.count)), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L215LWNhcmQvbXktY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2xpYi9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jbXMvcmV2ZW51ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jbXMvcmV2ZW51ZS9yZXZlbnVlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2F4aW9zTXkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc2VsbGVyQXBpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTXlDYXJkIiwicHJvcHMiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImNoaWxkcmVuIiwiTXlDYXJkSGVhZGVyIiwibWFyZ2luVG9wIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwic21hbGwiLCJkaXNwbGF5IiwiZm9udFNpemUiLCJ3aWR0aCIsInRpdGxlIiwidGV4dEFsaWduIiwiTXlDYXJkQ29udGVudCIsImJvcmRlclRvcCIsIk15Q2FyZEFjdGlvbnMiLCJBUElTdGF0dXMiLCJPSyIsIklOVkFMSUQiLCJOT1RfRk9VTkQiLCJVTkFVVEhPUklaRUQiLCJGT1JCSURERU4iLCJFUlJPUiIsIkVYSVNURUQiLCJ6ZXJvIiwiZW1wdHlTdHJpbmciLCJnZXRTZXNzaW9uVG9rZW4iLCJjdHgiLCJjb29raWVOYW1lIiwic2Vzc2lvblN0ciIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJzZXNzaW9uIiwidW5kZWZpbmVkIiwic3BsaXQiLCJmb3JFYWNoIiwiaSIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwidHJpbSIsInZhbHVlIiwiZ2V0TG9nZ2VkVXNlckluZm8iLCJyZXMiLCJzZXRIZWFkZXIiLCJlc2NhcGUiLCJ1cmwiLCJzdGF0dXNDb2RlIiwiZW5kIiwibG9nZ2VkSW4iLCJtZXRob2QiLCJwcm9jZXNzIiwiZmV0Y2giLCJkb1dpdGhMb2dnZWRJblVzZXIiLCJjYWxsYmFjayIsInJlc3VsdCIsIlByb21pc2UiLCJyZW5kZXJXaXRoTG9nZ2VkSW5Vc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwic291cmNlIiwibG9nZ2VkSW5Vc2VySW5mbyIsImFzUGF0aCIsInN0YXJ0c1dpdGgiLCJhY2NvdW50IiwiaXNUZW1wUGFzc3dvcmQiLCJkb0xvZ291dCIsImNvbXBhcmVQYXRoIiwiaW5wdXQiLCJwZXJtaXNzaW9uIiwiYWNjZXB0ZWRTY3JlZW5QYXRoIiwidXNlckluZm8iLCJwYXRoIiwic2NyZWVucyIsInVzZXJSb2xlcyIsImFjY2VwdGVkIiwibGVuZ3RoIiwiaiIsIm5vcm1hbGl6ZWRQYXRoIiwicmVwbGFjZSIsImRlcGFydG1lbnRDb2RlIiwiUmV2ZW51ZSIsInJlbmRlciIsIm1vbmV5UGFpZCIsIm1vbmV5VW5wYWlkIiwibnVtYmVyUHJvZHVjdHNQYWlkIiwibnVtYmVyUHJvZHVjdHNVbnBhaWQiLCJsaXN0UmV2ZW51ZVByb2R1Y3RzUGFpZCIsImNvdW50IiwibGlzdFJldmVudWVQcm9kdWN0c1VucGFpZCIsInN0eWxlcyIsInZpZXdfcmV2ZW51ZSIsInZpZXdfcmV2ZW51ZV9faGVhZGVyIiwidmlld19yZXZlbnVlX190aXRsZSIsInZpZXdfcmV2ZW51ZV9fc2VydmF5IiwibWFwIiwiaXRlbSIsImluZGV4Iiwidmlld19yZXZlbnVlX19jb3VudCIsInZpZXdfcmV2ZW51ZV9fY291bnRlciIsImdldFNlcnZlclNpZGVQcm9wcyIsImxpc3RPcmRlcnMiLCJzZWxsZXJBcGkiLCJnZXRPcmRlcnMiLCJkYXRhT3JkZXJzIiwiZGF0YSIsImxpc3RSZXZlbnVlIiwiZ2V0UmV2ZW51ZSIsImRhdGFSZXZlbnVlIiwiYXR0cmlidXRlcyIsIkFjY291bnRJRCIsIk1vbmV5V2lsbFBheSIsIk1vbmV5UGFpZCIsIlN0YXR1cyIsImJhc2VVUkwiLCJlbnYiLCJVUkxfTVlfQVBJIiwiYXhpb3NNeSIsImF4aW9zIiwiY3JlYXRlIiwiQWNjZXB0IiwicGFyYW1zU2VyaWFsaXplciIsInBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwic3RyaW5naWZ5IiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic3RhdHVzIiwiZ2V0IiwiZ2V0UHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9jbXMvcmV2ZW51ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY21zL3JldmVudWUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNeUNhcmQocHJvcHMpIHtcclxuICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxyXG4gICAgICAgIC4uLiAocHJvcHMuc3R5bGUgfHwge30pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPENhcmRcclxuICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9DYXJkID5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE15Q2FyZEhlYWRlcihwcm9wcykge1xyXG4gICAgcmV0dXJuIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDBiNDZlXCIsLy8gXCIjOTA3MDYwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHByb3BzLnNtYWxsID8gOCA6IDE2LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIlxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IHByb3BzLnNtYWxsID8gMTUgOiAyNCwgd2lkdGg6IFwiMTAwJVwiIH19Pntwcm9wcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVuICYmIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT57cHJvcHMuY2hpbGRyZW59PC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNeUNhcmRDb250ZW50KHByb3BzKSB7XHJcbiAgICBsZXQgc3R5bGUgPSBwcm9wcy5zdHlsZSB8fCB7fVxyXG4gICAgc3R5bGUuYm9yZGVyVG9wID0gXCJzb2xpZCAxcHggI2NjY1wiXHJcbiAgICByZXR1cm4gPENhcmRDb250ZW50XHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ2FyZENvbnRlbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNeUNhcmRBY3Rpb25zKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPENhcmRBY3Rpb25zXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiBcInNvbGlkIDFweCAjY2NjXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjZmNmY2XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNlxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9DYXJkQWN0aW9ucz5cclxufSIsImV4cG9ydCBjb25zdCBBUElTdGF0dXMgPSB7XHJcbiAgICBPSyA6IFwiT0tcIixcclxuICAgIElOVkFMSUQ6IFwiSU5WQUxJRFwiLFxyXG4gICAgTk9UX0ZPVU5EOiBcIk5PVF9GT1VORFwiLFxyXG4gICAgVU5BVVRIT1JJWkVEOiBcIlVOQVVUSE9SSVpFRFwiLFxyXG4gICAgRk9SQklEREVOOiBcIkZPUkJJRERFTlwiLFxyXG4gICAgRVJST1I6IFwiRVJST1JcIixcclxuICAgIEVYSVNURUQ6IFwiRVhJU1RFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB6ZXJvID0gMFxyXG5leHBvcnQgY29uc3QgZW1wdHlTdHJpbmcgPSBcIlwiIiwiLypcclxuVGhpcyBmdW5jdGlvbiByZXR1cm4gYSBzZXNzaW9uIHN0cmluZyBieSBwYXJzaW5nIGNvb2tpZSB2YWx1ZSBvZiBpbmNvbWluZyByZXF1ZXN0LlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFQSVN0YXR1cyB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlc3Npb25Ub2tlbihjdHgsIGNvb2tpZU5hbWUpIHtcclxuICAgIGNvb2tpZU5hbWUgPSBjb29raWVOYW1lIHx8IFwic2Vzc2lvbl90b2tlblwiXHJcbiAgICBsZXQgc2Vzc2lvblN0ciA9IGN0eC5yZXEgJiYgY3R4LnJlcS5oZWFkZXJzLmNvb2tpZVxyXG4gICAgbGV0IHNlc3Npb24gPSB1bmRlZmluZWRcclxuICAgIGlmIChzZXNzaW9uU3RyKSB7XHJcbiAgICAgICAgc2Vzc2lvblN0ci5zcGxpdChcIjtcIikuZm9yRWFjaCgoY29va2llKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpID0gY29va2llLmluZGV4T2YoXCI9XCIpXHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gY29va2llLnN1YnN0cigwLCBpKS50cmltKClcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gY29va2llLnN1YnN0cihpICsgMSkudHJpbSgpXHJcbiAgICAgICAgICAgIGlmIChuYW1lID09IGNvb2tpZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb24gPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlc3Npb25cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9nZ2VkVXNlckluZm8oY3R4KSB7XHJcbiAgICBsZXQgc2Vzc2lvbiA9IGdldFNlc3Npb25Ub2tlbihjdHgpXHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgbm90IGNvb2tpZSB3aXRoIFwic2Vzc2lvbl90b2tlblwiIG5hbWVcclxuICAgIGxldCByZXMgPSBjdHgucmVzXHJcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbiA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICBzZXNzaW9uID0gZ2V0U2Vzc2lvblRva2VuKGN0eCwgXCJyZW1lbWJlcl9tZVwiKVxyXG4gICAgICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uID09PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvbG9naW4/dXJsPVwiICsgZXNjYXBlKGN0eC5yZXEudXJsKSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gICAgICAgICAgICByZXMuZW5kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHByb3BzOiB7IGxvZ2dlZEluOiBmYWxzZSB9IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoXCJzZXQtY29va2llXCIsIGBzZXNzaW9uX3Rva2VuPSR7c2Vzc2lvbn07IFBhdGg9LzsgSHR0cE9ubHlgKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHRoZXJlIGlzIHZhbHVlXHJcbiAgICBsZXQgcmVxID0ge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7c2Vzc2lvbn1gLFxyXG4gICAgICAgICAgICBcIlVzZXItQWdlbnRcIjogY3R4LnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10sXHJcbiAgICAgICAgICAgICdYLUZvcndhcmRlZC1Gb3InOiBjdHgucmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWZvciddXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9IT1NUICsgXCIvY29yZS9hY2NvdW50L3YxL21lP2dldFBlcm1pc3Npb25zPXRydWVcIlxyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwgcmVxKVxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJ5IGluamVjdGluZyB0byBnZXRTZXJ2ZXJTaWRlUHJvcHMgb2YgcGFnZXMuXHJcbiAqIEBwYXJhbSBjdHhcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPCp8e3Byb3BzOiB7bG9nZ2VkSW46IGJvb2xlYW59fT59XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9XaXRoTG9nZ2VkSW5Vc2VyKGN0eCwgY2FsbGJhY2spIHtcclxuICAgIC8vIGxldCByZXN1bHQgPSBhd2FpdCBnZXRMb2dnZWRVc2VySW5mbyhjdHgpXHJcbiAgICAvLyBsZXQgdXNlckluZm8gPSBhd2FpdCByZXN1bHQuanNvbigpXHJcblxyXG4gICAgLy8gLy8gbXVzdCBnZXQgdXNlciBpbmZvIHN1Y2Nlc3NmdWwgYmVmb3JlIGRvIGFueXRoaW5nIGVsc2VcclxuICAgIC8vIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvKVxyXG4gICAgLy8gaWYgKHVzZXJJbmZvLnN0YXR1cyAhPT0gQVBJU3RhdHVzLk9LKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHsgcHJvcHM6IHsgbG9nZ2VkSW46IGZhbHNlIH0gfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC8vIGNoZWNrIHRlbXAgcGFzc3dvcmRcclxuICAgIC8vIGxldCBzb3VyY2UgPSB1c2VySW5mby5kYXRhWzBdXHJcbiAgICAvLyBsZXQgYWNjb3VudCA9IHNvdXJjZS5hY2NvdW50XHJcblxyXG4gICAgLy8gaWYgKCFjdHgucmVxLnVybC5zdGFydHNXaXRoKCcvcHJvZmlsZScpICYmIGFjY291bnQuaXNUZW1wUGFzc3dvcmQpIHtcclxuICAgIC8vICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgLy8gICAgICAgICBsZXQgcmVzID0gY3R4LnJlc1xyXG4gICAgLy8gICAgICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvcHJvZmlsZVwiKTtcclxuICAgIC8vICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAzMDI7XHJcbiAgICAvLyAgICAgICAgIHJlcy5lbmQoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHsgcHJvcHM6IHsgbG9nZ2VkSW46IHRydWUsIGxvZ2dlZEluVXNlckluZm86IHNvdXJjZSB9IH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soY3R4KVxyXG4gICAgLy8gLy8gd2FpdCBmb3IgcGFnZSBwcm9taXNlXHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgICAvLyAvLyBzZXQgbG9nZ2VkSW4gPSB0cnVlIGlmIGlzIGlzIHVuZGVmaW5lZFxyXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9XHJcbiAgICByZXN1bHQucHJvcHMgPSByZXN1bHQucHJvcHMgfHwge31cclxuICAgIC8vIHJlc3VsdC5wcm9wcy5sb2dnZWRJblVzZXJJbmZvID0gdXNlckluZm8uZGF0YVswXVxyXG4gICAgLy8gaWYgKHR5cGVvZiByZXN1bHQucHJvcHMubG9nZ2VkSW4gPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmVzdWx0LnByb3BzLmxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgLy8gfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJ5IGluamVjdGluZyB0byByZW5kZXIgZnVuY3Rpb24gb2YgcGFnZXMuXHJcbiAqIEBwYXJhbSBwcm9wc1xyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICogQHJldHVybnMge251bGx8Kn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXaXRoTG9nZ2VkSW5Vc2VyKHByb3BzLCBjYWxsYmFjaykge1xyXG5cclxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIC8vIGlmIGxvZ2dlZCBpblxyXG4gICAgaWYgKHByb3BzLmxvZ2dlZEluICE9PSBmYWxzZSkge1xyXG4gICAgICAgIC8vIHZhbGlkYXRlIHBlcm1pc3Npb25zXHJcbiAgICAgICAgbGV0IHNvdXJjZSA9IHByb3BzLmxvZ2dlZEluVXNlckluZm9cclxuICAgICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIHRlbXAgcGFzc3dvcmRcclxuICAgICAgICAgICAgaWYgKCFyb3V0ZXIuYXNQYXRoLnN0YXJ0c1dpdGgoXCIvcHJvZmlsZVwiKVxyXG4gICAgICAgICAgICAgICAgJiYgc291cmNlLmFjY291bnQgJiYgc291cmNlLmFjY291bnQuaXNUZW1wUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhwcm9wcylcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2socHJvcHMpIHx8IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBub3RcclxuICAgIGVsc2Uge1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGRvIGhhcmQgcmVkaXJlY3QgdG8gL2xvZ2luXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luP3VybD1cIiArIHJvdXRlci5hc1BhdGhcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvTG9nb3V0KCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKFwiL2JhY2tlbmQvY29yZS9hY2NvdW50L3YxL2xvZ291dFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29tcGFyZVBhdGgoaW5wdXQsIHBlcm1pc3Npb24pIHtcclxuICAgIGlmIChwZXJtaXNzaW9uLnN0YXJ0c1dpdGgoXCI9XCIpKSB7XHJcbiAgICAgICAgaWYgKGlucHV0ID09PSBwZXJtaXNzaW9uLnN1YnN0cigxKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaW5wdXQuc3RhcnRzV2l0aChwZXJtaXNzaW9uKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjY2VwdGVkU2NyZWVuUGF0aCh1c2VySW5mbywgcGF0aCkge1xyXG4gICAgaWYgKCF1c2VySW5mbykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGggPT0gXCIvXCIgfHwgcGF0aCA9PSBcIi9wcm9maWxlXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgbGV0IHNjcmVlbnMgPSB1c2VySW5mby5zY3JlZW5zXHJcbiAgICBsZXQgdXNlclJvbGVzID0gdXNlckluZm8udXNlclJvbGVzXHJcbiAgICBsZXQgYWNjZXB0ZWQgPSBmYWxzZVxyXG4gICAgaWYgKHNjcmVlbnMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcmVlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNjcmVlbnNbaV0uaW5kZXhPZihcIjpkZXBhcnRtZW50Q29kZVwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgdXNlclJvbGVzICYmIGogPCB1c2VyUm9sZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9ybWFsaXplZFBhdGggPSBzY3JlZW5zW2ldLnJlcGxhY2UoXCI6ZGVwYXJ0bWVudENvZGVcIiwgdXNlclJvbGVzW2pdLmRlcGFydG1lbnRDb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlUGF0aChwYXRoLCBub3JtYWxpemVkUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVQYXRoKHBhdGgsIHNjcmVlbnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjY2VwdGVkXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGRvV2l0aExvZ2dlZEluVXNlciwgcmVuZGVyV2l0aExvZ2dlZEluVXNlciB9IGZyb20gXCIuLi8uLi8uLi9saWIvbG9naW5cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNeUNhcmRIZWFkZXIsIE15Q2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvbXktY2FyZC9teS1jYXJkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcmV2ZW51ZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBzZWxsZXJBcGkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvc2VsbGVyQXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZlbnVlKHByb3BzKSB7XHJcbiAgcmV0dXJuIHJlbmRlcldpdGhMb2dnZWRJblVzZXIocHJvcHMsIHJlbmRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcih7XHJcbiAgbW9uZXlQYWlkLFxyXG4gIG1vbmV5VW5wYWlkLFxyXG4gIG51bWJlclByb2R1Y3RzUGFpZCxcclxuICBudW1iZXJQcm9kdWN0c1VucGFpZCxcclxufSkge1xyXG4gIGNvbnN0IGxpc3RSZXZlbnVlUHJvZHVjdHNQYWlkID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSB0aeG7gW5cIixcclxuICAgICAgY291bnQ6IGAke21vbmV5UGFpZH3EkWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSDEkcahbiBow6BuZ1wiLFxyXG4gICAgICBjb3VudDogbnVtYmVyUHJvZHVjdHNQYWlkLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBsaXN0UmV2ZW51ZVByb2R1Y3RzVW5wYWlkID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4buVbmcgc+G7kSB0aeG7gW5cIixcclxuICAgICAgY291bnQ6IGAke21vbmV5VW5wYWlkfcSRYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu5VuZyBz4buRIMSRxqFuIGjDoG5nXCIsXHJcbiAgICAgIGNvdW50OiBudW1iZXJQcm9kdWN0c1VucGFpZCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgc2VsZWN0PVwiL2Ntcy9yZXZlbnVlXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+VOG7lW5nIHF1w6F0IGRvYW5oIHRodTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNeUNhcmQ+XHJcbiAgICAgICAgICA8TXlDYXJkSGVhZGVyIHRpdGxlPVwiVOG7lW5nIHF1YW4gZG9hbmggdGh1XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnZpZXdfcmV2ZW51ZX0gbWJfMzBcImB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iXzI1XCI+xJDGoW4gaMOgbmcgc+G6vSB0aGFuaCB0b8OhbjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fc2VydmF5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsaXN0UmV2ZW51ZVByb2R1Y3RzVW5wYWlkLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGtleT17YHBhaWQtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX2NvdW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy52aWV3X3JldmVudWV9IG1iXzMwXCJgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9faGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX190aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYl8yNVwiPsSQxqFuIGjDoG5nIMSRw6MgdGhhbmggdG/DoW48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X3JldmVudWVfX3NlcnZheX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdFJldmVudWVQcm9kdWN0c1BhaWQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIga2V5PXtgcGFpZC0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19yZXZlbnVlX19jb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfcmV2ZW51ZV9fY291bnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L015Q2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxpc3RPcmRlcnMgPSBhd2FpdCBzZWxsZXJBcGkuZ2V0T3JkZXJzKHt9KTtcclxuICBjb25zdCBkYXRhT3JkZXJzID0gbGlzdE9yZGVycy5kYXRhLmRhdGE7XHJcbiAgY29uc3QgbGlzdFJldmVudWUgPSBhd2FpdCBzZWxsZXJBcGkuZ2V0UmV2ZW51ZSh7fSk7XHJcbiAgY29uc3QgZGF0YVJldmVudWUgPSBsaXN0UmV2ZW51ZS5kYXRhLmRhdGE7XHJcblxyXG4gIGxldCBtb25leVBhaWQgPSAwO1xyXG4gIGxldCBtb25leVVucGFpZCA9IDA7XHJcbiAgbGV0IG51bWJlclByb2R1Y3RzUGFpZCA9IDA7XHJcbiAgbGV0IG51bWJlclByb2R1Y3RzVW5wYWlkID0gMDtcclxuXHJcbiAgZGF0YVJldmVudWUubWFwKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5hdHRyaWJ1dGVzLkFjY291bnRJRCA9PT0gMSkge1xyXG4gICAgICBtb25leVVucGFpZCA9IGl0ZW0uYXR0cmlidXRlcy5Nb25leVdpbGxQYXk7XHJcbiAgICAgIG1vbmV5UGFpZCA9IGl0ZW0uYXR0cmlidXRlcy5Nb25leVBhaWQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRhdGFPcmRlcnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5hdHRyaWJ1dGVzLlN0YXR1cyA9PT0gXCJVbnBhaWRcIikge1xyXG4gICAgICBudW1iZXJQcm9kdWN0c1VucGFpZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtLmF0dHJpYnV0ZXMuU3RhdHVzID09PSBcIlBhaWRcIikge1xyXG4gICAgICBudW1iZXJQcm9kdWN0c1BhaWQrKztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1vbmV5UGFpZCxcclxuICAgICAgbW9uZXlVbnBhaWQsXHJcbiAgICAgIG51bWJlclByb2R1Y3RzUGFpZCxcclxuICAgICAgbnVtYmVyUHJvZHVjdHNVbnBhaWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZpZXdfcmV2ZW51ZVwiOiBcInJldmVudWVfdmlld19yZXZlbnVlX18zYjlfeVwiLFxuXHRcInZpZXdfcmV2ZW51ZV9faGVhZGVyXCI6IFwicmV2ZW51ZV92aWV3X3JldmVudWVfX2hlYWRlcl9fM2tjUFNcIixcblx0XCJ2aWV3X3JldmVudWVfX3RpdGxlXCI6IFwicmV2ZW51ZV92aWV3X3JldmVudWVfX3RpdGxlX18yaEtLSlwiLFxuXHRcInZpZXdfcmV2ZW51ZV9fY291bnRcIjogXCJyZXZlbnVlX3ZpZXdfcmV2ZW51ZV9fY291bnRfX2NIVWNIXCIsXG5cdFwidmlld19yZXZlbnVlX19jb3VudGVyXCI6IFwicmV2ZW51ZV92aWV3X3JldmVudWVfX2NvdW50ZXJfXzFoSUc4XCIsXG5cdFwicHJvZHVjdHNcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX18xdGYxMlwiLFxuXHRcInByb2R1Y3RzX19oZWFkZXJcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19oZWFkZXJfX2tIbHd0XCIsXG5cdFwicHJvZHVjdHNfX3RpdGxlXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fdGl0bGVfXzJ2WUNiXCIsXG5cdFwicHJvZHVjdHNfX2JvZHlcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19ib2R5X18yZlpSVVwiLFxuXHRcInByb2R1Y3RzX190YWJsZV9yZXNwb25zaXZlXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fdGFibGVfcmVzcG9uc2l2ZV9fMmJ4X2VcIixcblx0XCJwcm9kdWN0c19fbGVuZ3RoXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fbGVuZ3RoX18yck11MVwiLFxuXHRcInByb2R1Y3RzX19sYWJlbFwiOiBcInJldmVudWVfcHJvZHVjdHNfX2xhYmVsX18zLU90QVwiLFxuXHRcInByb2R1Y3RzX19zZWxlY3RcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19zZWxlY3RfXzJTWGtMXCIsXG5cdFwicHJvZHVjdHNfX2ZpbHRlclwiOiBcInJldmVudWVfcHJvZHVjdHNfX2ZpbHRlcl9fMUJLbWhcIixcblx0XCJwcm9kdWN0c19faW5wdXRcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19pbnB1dF9femxoa3RcIixcblx0XCJwcm9kdWN0c19fdGFibGVfY29udGVudFwiOiBcInJldmVudWVfcHJvZHVjdHNfX3RhYmxlX2NvbnRlbnRfXzNwa3MtXCIsXG5cdFwicHJvZHVjdHNfX3N0YXR1c1wiOiBcInJldmVudWVfcHJvZHVjdHNfX3N0YXR1c19fM2JMcXBcIixcblx0XCJwcm9kdWN0c19fcGFpZFwiOiBcInJldmVudWVfcHJvZHVjdHNfX3BhaWRfXzFjQV81XCIsXG5cdFwicHJvZHVjdHNfX3VucGFpZFwiOiBcInJldmVudWVfcHJvZHVjdHNfX3VucGFpZF9fMlhUX0NcIixcblx0XCJwcm9kdWN0c19faW5mb1wiOiBcInJldmVudWVfcHJvZHVjdHNfX2luZm9fXzJucGppXCIsXG5cdFwicHJvZHVjdHNfX3BhZ2luYXRlXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fcGFnaW5hdGVfX0IzSEdyXCIsXG5cdFwicHJvZHVjdHNfX3ByZXZpb3VzXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fcHJldmlvdXNfXzI0bEVNXCIsXG5cdFwicHJvZHVjdHNfX25leHRcIjogXCJyZXZlbnVlX3Byb2R1Y3RzX19uZXh0X18xdWE3QlwiLFxuXHRcInByb2R1Y3RzX19yYW5rXCI6IFwicmV2ZW51ZV9wcm9kdWN0c19fcmFua19fMm1xN09cIixcblx0XCJwcm9kdWN0c19fY3VycmVudFwiOiBcInJldmVudWVfcHJvZHVjdHNfX2N1cnJlbnRfXzN0YVdfXCIsXG5cdFwicHJvZHVjdHNfX2J0blwiOiBcInJldmVudWVfcHJvZHVjdHNfX2J0bl9fMklMYjdcIlxufTtcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcbmNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5VUkxfTVlfQVBJO1xyXG5cclxuY29uc3QgYXhpb3NNeSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL1wiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIC8vIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gIH0sXHJcbiAgcGFyYW1zU2VyaWFsaXplcjogKHBhcmFtcykgPT4gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyksXHJcbn0pO1xyXG5cclxuYXhpb3NNeS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIChyZXMpID0+IHtcclxuICAgIGlmIChyZXMuZGF0YS5yZXN1bHQgPT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJEYXRhIGVtcHR5XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9LFxyXG4gIChlcnIpID0+IHtcclxuICAgIGlmIChlcnIucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgNDAxXCIpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgZXJyO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zTXk7XHJcbiIsImltcG9ydCBheGlvc015IGZyb20gXCIuL2F4aW9zTXlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxsZXJBcGkgPSB7XHJcbiAgZ2V0UmV2ZW51ZTogYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gYHJldmVudWVzYDtcclxuICAgIHJldHVybiBhd2FpdCBheGlvc015LmdldCh1cmwsIHsgcGFyYW1zIH0pO1xyXG4gIH0sXHJcbiAgZ2V0UHJvZHVjdHM6IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGBwcm9kdWN0c2A7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3NNeS5nZXQodXJsLCB7IHBhcmFtcyB9KTtcclxuICB9LFxyXG4gIGdldE9yZGVyczogYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gYG9yZGVyc2A7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3NNeS5nZXQodXJsLCB7IHBhcmFtcyB9KTtcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=