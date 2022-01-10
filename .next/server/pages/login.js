module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_next_server_server_api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/next-server/server/api-utils */ "next/dist/next-server/server/api-utils");
/* harmony import */ var next_dist_next_server_server_api_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_api_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/common */ "./lib/common.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.module.css */ "./pages/login/login.module.css");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_accountApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/accountApi */ "./services/accountApi.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\pages\\login\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/*
Login page that is used on stg/uat/prd is only run from internal-hrm code repo.
'Login.js' file of other repos is only used for local testing.

This file have 2 ways to use:
+ GET method: display login page with login form
+ POST method: receive submitted login data (username/password)
*/

async function getServerSideProps(ctx) {
  let returnObject = {
    props: {}
  };

  if (ctx.req && ctx.req.method === "POST") {
    // read form data
    let body = await Object(next_dist_next_server_server_api_utils__WEBPACK_IMPORTED_MODULE_1__["parseBody"])(ctx.req, "1kb"); // Get account

    const listAccount = (await _services_accountApi__WEBPACK_IMPORTED_MODULE_6__["accountApi"].getAccount({})).data.data;
    let isLogin = false;
    let account = {};
    listAccount.map(item => {
      if (item.attributes.Email === body.email && item.attributes.Password === body.password && item.attributes.Authorization === 1) {
        isLogin = true;
        account = item;
      }
    });

    if (isLogin) {
      returnObject.props.loggedInUserInfo = account;
    }

    returnObject.props.url = body.url;
  } else {
    returnObject.props.url = ctx.query.url || "/cms/product";
  }

  return returnObject;
}
/*
A simple login page.
Can customize to display more.
LoginForm has basic inputs of authentication flow:
+ Login label
+ Username / password input
+ Submit button
*/

function LoginPage(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.loggedInUserInfo) {
      localStorage.setItem("account", props.loggedInUserInfo);
      router.push("/cms/product");
    }
  }, [props.loggedInUserInfo]);

  if (!props.loggedInUserInfo) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng n\u1ED9i b\u1ED9")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
      className: _login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
      method: "POST",
      action: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, __jsx("input", {
      type: "hidden",
      name: "url",
      value: props.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
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
        lineNumber: 81,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
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
        lineNumber: 94,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "submit",
      variant: "contained",
      color: "primary",
      style: {
        margin: 8
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    }, "\u0110\u0103ng nh\u1EADp")))));
  } else {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 12
      }
    });
  }
}

/***/ }),

/***/ "./pages/login/login.module.css":
/*!**************************************!*\
  !*** ./pages/login/login.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loginForm": "login_loginForm__zPnZe"
};


/***/ }),

/***/ "./services/accountApi.js":
/*!********************************!*\
  !*** ./services/accountApi.js ***!
  \********************************/
/*! exports provided: accountApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountApi", function() { return accountApi; });
/* harmony import */ var _axiosMy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosMy */ "./services/axiosMy.js");

const accountApi = {
  getAccount: async params => {
    const url = `accounts`;
    return await _axiosMy__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
      params
    });
  }
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

/***/ "next/dist/next-server/server/api-utils":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/server/api-utils" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/api-utils");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9sb2dpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FjY291bnRBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3NNeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9hcGktdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQVBJU3RhdHVzIiwiT0siLCJJTlZBTElEIiwiTk9UX0ZPVU5EIiwiVU5BVVRIT1JJWkVEIiwiRk9SQklEREVOIiwiRVJST1IiLCJFWElTVEVEIiwiemVybyIsImVtcHR5U3RyaW5nIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwicmV0dXJuT2JqZWN0IiwicHJvcHMiLCJyZXEiLCJtZXRob2QiLCJib2R5IiwicGFyc2VCb2R5IiwibGlzdEFjY291bnQiLCJhY2NvdW50QXBpIiwiZ2V0QWNjb3VudCIsImRhdGEiLCJpc0xvZ2luIiwiYWNjb3VudCIsIm1hcCIsIml0ZW0iLCJhdHRyaWJ1dGVzIiwiRW1haWwiLCJlbWFpbCIsIlBhc3N3b3JkIiwicGFzc3dvcmQiLCJBdXRob3JpemF0aW9uIiwibG9nZ2VkSW5Vc2VySW5mbyIsInVybCIsInF1ZXJ5IiwiTG9naW5QYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJzdHlsZXMiLCJsb2dpbkZvcm0iLCJzaHJpbmsiLCJtYXJnaW4iLCJ3aWR0aCIsInBhcmFtcyIsImF4aW9zTXkiLCJnZXQiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIlVSTF9NWV9BUEkiLCJheGlvcyIsImNyZWF0ZSIsImhlYWRlcnMiLCJBY2NlcHQiLCJwYXJhbXNTZXJpYWxpemVyIiwicXVlcnlTdHJpbmciLCJzdHJpbmdpZnkiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsInJlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxTQUFTLEdBQUc7QUFDckJDLElBQUUsRUFBRyxJQURnQjtBQUVyQkMsU0FBTyxFQUFFLFNBRlk7QUFHckJDLFdBQVMsRUFBRSxXQUhVO0FBSXJCQyxjQUFZLEVBQUUsY0FKTztBQUtyQkMsV0FBUyxFQUFFLFdBTFU7QUFNckJDLE9BQUssRUFBRSxPQU5jO0FBT3JCQyxTQUFPLEVBQUU7QUFQWSxDQUFsQjtBQVVBLE1BQU1DLElBQUksR0FBRyxDQUFiO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEVBQXBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sZUFBZUMsa0JBQWYsQ0FBa0NDLEdBQWxDLEVBQXVDO0FBQzVDLE1BQUlDLFlBQVksR0FBRztBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFuQjs7QUFFQSxNQUFJRixHQUFHLENBQUNHLEdBQUosSUFBV0gsR0FBRyxDQUFDRyxHQUFKLENBQVFDLE1BQVIsS0FBbUIsTUFBbEMsRUFBMEM7QUFDeEM7QUFDQSxRQUFJQyxJQUFJLEdBQUcsTUFBTUMsd0ZBQVMsQ0FBQ04sR0FBRyxDQUFDRyxHQUFMLEVBQVUsS0FBVixDQUExQixDQUZ3QyxDQUl4Qzs7QUFDQSxVQUFNSSxXQUFXLEdBQUcsQ0FBQyxNQUFNQywrREFBVSxDQUFDQyxVQUFYLENBQXNCLEVBQXRCLENBQVAsRUFBa0NDLElBQWxDLENBQXVDQSxJQUEzRDtBQUNBLFFBQUlDLE9BQU8sR0FBRyxLQUFkO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFFQUwsZUFBVyxDQUFDTSxHQUFaLENBQWlCQyxJQUFELElBQVU7QUFDeEIsVUFDRUEsSUFBSSxDQUFDQyxVQUFMLENBQWdCQyxLQUFoQixLQUEwQlgsSUFBSSxDQUFDWSxLQUEvQixJQUNBSCxJQUFJLENBQUNDLFVBQUwsQ0FBZ0JHLFFBQWhCLEtBQTZCYixJQUFJLENBQUNjLFFBRGxDLElBRUFMLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkssYUFBaEIsS0FBa0MsQ0FIcEMsRUFJRTtBQUNBVCxlQUFPLEdBQUcsSUFBVjtBQUNBQyxlQUFPLEdBQUdFLElBQVY7QUFDRDtBQUNGLEtBVEQ7O0FBV0EsUUFBSUgsT0FBSixFQUFhO0FBQ1hWLGtCQUFZLENBQUNDLEtBQWIsQ0FBbUJtQixnQkFBbkIsR0FBc0NULE9BQXRDO0FBQ0Q7O0FBRURYLGdCQUFZLENBQUNDLEtBQWIsQ0FBbUJvQixHQUFuQixHQUF5QmpCLElBQUksQ0FBQ2lCLEdBQTlCO0FBQ0QsR0F6QkQsTUF5Qk87QUFDTHJCLGdCQUFZLENBQUNDLEtBQWIsQ0FBbUJvQixHQUFuQixHQUF5QnRCLEdBQUcsQ0FBQ3VCLEtBQUosQ0FBVUQsR0FBVixJQUFpQixjQUExQztBQUNEOztBQUVELFNBQU9yQixZQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVN1QixTQUFULENBQW1CdEIsS0FBbkIsRUFBMEI7QUFDdkMsUUFBTXVCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSXpCLEtBQUssQ0FBQ21CLGdCQUFWLEVBQTRCO0FBQzFCTyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDM0IsS0FBSyxDQUFDbUIsZ0JBQXRDO0FBQ0FJLFlBQU0sQ0FBQ0ssSUFBUCxDQUFZLGNBQVo7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDNUIsS0FBSyxDQUFDbUIsZ0JBQVAsQ0FMTSxDQUFUOztBQU9BLE1BQUksQ0FBQ25CLEtBQUssQ0FBQ21CLGdCQUFYLEVBQTZCO0FBQzNCLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkVBREYsQ0FERixFQUlFLE1BQUMsdURBQUQ7QUFBTyxlQUFTLEVBQUVVLHdEQUFNLENBQUNDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUU7QUFBTSxZQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFNLEVBQUMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsVUFBSSxFQUFDLEtBQTFCO0FBQWdDLFdBQUssRUFBRTlCLEtBQUssQ0FBQ29CLEdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkRBQUQ7QUFDRSxRQUFFLEVBQUMsT0FETDtBQUVFLFdBQUssRUFBQywwQkFGUjtBQUdFLFlBQU0sRUFBQyxRQUhUO0FBSUUscUJBQWUsRUFBRTtBQUNmVyxjQUFNLEVBQUU7QUFETyxPQUpuQjtBQU9FLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUUsRUFBVjtBQUFjQyxhQUFLLEVBQUU7QUFBckIsT0FQVDtBQVFFLGVBQVMsRUFBRSxJQVJiO0FBU0UsVUFBSSxFQUFDLE9BVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRkYsRUFlRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJEQUFEO0FBQ0UsUUFBRSxFQUFDLFVBREw7QUFFRSxXQUFLLEVBQUMsb0JBRlI7QUFHRSxZQUFNLEVBQUMsUUFIVDtBQUlFLHFCQUFlLEVBQUU7QUFDZkYsY0FBTSxFQUFFO0FBRE8sT0FKbkI7QUFPRSxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFLEVBQVY7QUFBY0MsYUFBSyxFQUFFO0FBQXJCLE9BUFQ7QUFRRSxVQUFJLEVBQUMsVUFSUDtBQVNFLFVBQUksRUFBQyxVQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQWZGLEVBNEJFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGFBQU8sRUFBQyxXQUZWO0FBR0UsV0FBSyxFQUFDLFNBSFI7QUFJRSxXQUFLLEVBQUU7QUFBRUQsY0FBTSxFQUFFO0FBQVYsT0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBNUJGLENBRkYsQ0FKRixDQURGO0FBaURELEdBbERELE1Ba0RPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7O0FDMUhEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNMUIsVUFBVSxHQUFHO0FBQ3hCQyxZQUFVLEVBQUUsTUFBTzJCLE1BQVAsSUFBa0I7QUFDNUIsVUFBTWQsR0FBRyxHQUFJLFVBQWI7QUFDQSxXQUFPLE1BQU1lLGdEQUFPLENBQUNDLEdBQVIsQ0FBWWhCLEdBQVosRUFBaUI7QUFBRWM7QUFBRixLQUFqQixDQUFiO0FBQ0Q7QUFKdUIsQ0FBbkIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxNQUFNRyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE1QjtBQUVBLE1BQU1MLE9BQU8sR0FBR00sNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCTCxTQUFPLEVBQUUsNEJBRGtCO0FBRTNCTSxTQUFPLEVBQUU7QUFDUCxvQkFBZ0Isa0JBRFQ7QUFFUEMsVUFBTSxFQUFFLGtCQUZELENBR1A7O0FBSE8sR0FGa0I7QUFPM0JDLGtCQUFnQixFQUFHWCxNQUFELElBQVlZLG1EQUFXLENBQUNDLFNBQVosQ0FBc0JiLE1BQXRCO0FBUEgsQ0FBYixDQUFoQjtBQVVBQyxPQUFPLENBQUNhLFlBQVIsQ0FBcUJDLFFBQXJCLENBQThCQyxHQUE5QixDQUNHQyxHQUFELElBQVM7QUFDUCxNQUFJQSxHQUFHLENBQUMzQyxJQUFKLENBQVM0QyxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0Q7O0FBQ0QsU0FBT0gsR0FBUDtBQUNELENBTkgsRUFPR0ksR0FBRCxJQUFTO0FBQUE7O0FBQ1AsTUFBSSxrQkFBQUEsR0FBRyxDQUFDTixRQUFKLGdFQUFjTyxNQUFkLE1BQXlCLEdBQTdCLEVBQWtDO0FBQ2hDSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7O0FBQ0QsUUFBTUMsR0FBTjtBQUNELENBWkg7QUFlZXBCLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDN0JBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBBUElTdGF0dXMgPSB7XHJcbiAgICBPSyA6IFwiT0tcIixcclxuICAgIElOVkFMSUQ6IFwiSU5WQUxJRFwiLFxyXG4gICAgTk9UX0ZPVU5EOiBcIk5PVF9GT1VORFwiLFxyXG4gICAgVU5BVVRIT1JJWkVEOiBcIlVOQVVUSE9SSVpFRFwiLFxyXG4gICAgRk9SQklEREVOOiBcIkZPUkJJRERFTlwiLFxyXG4gICAgRVJST1I6IFwiRVJST1JcIixcclxuICAgIEVYSVNURUQ6IFwiRVhJU1RFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB6ZXJvID0gMFxyXG5leHBvcnQgY29uc3QgZW1wdHlTdHJpbmcgPSBcIlwiIiwiaW1wb3J0IHsgcGFyc2VCb2R5IH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvYXBpLXV0aWxzXCI7XHJcbmltcG9ydCB7IEFQSVN0YXR1cyB9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFBhcGVyLCBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2dpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGFjY291bnRBcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYWNjb3VudEFwaVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKlxyXG5Mb2dpbiBwYWdlIHRoYXQgaXMgdXNlZCBvbiBzdGcvdWF0L3ByZCBpcyBvbmx5IHJ1biBmcm9tIGludGVybmFsLWhybSBjb2RlIHJlcG8uXHJcbidMb2dpbi5qcycgZmlsZSBvZiBvdGhlciByZXBvcyBpcyBvbmx5IHVzZWQgZm9yIGxvY2FsIHRlc3RpbmcuXHJcblxyXG5UaGlzIGZpbGUgaGF2ZSAyIHdheXMgdG8gdXNlOlxyXG4rIEdFVCBtZXRob2Q6IGRpc3BsYXkgbG9naW4gcGFnZSB3aXRoIGxvZ2luIGZvcm1cclxuKyBQT1NUIG1ldGhvZDogcmVjZWl2ZSBzdWJtaXR0ZWQgbG9naW4gZGF0YSAodXNlcm5hbWUvcGFzc3dvcmQpXHJcbiovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgbGV0IHJldHVybk9iamVjdCA9IHsgcHJvcHM6IHt9IH07XHJcblxyXG4gIGlmIChjdHgucmVxICYmIGN0eC5yZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgLy8gcmVhZCBmb3JtIGRhdGFcclxuICAgIGxldCBib2R5ID0gYXdhaXQgcGFyc2VCb2R5KGN0eC5yZXEsIFwiMWtiXCIpO1xyXG5cclxuICAgIC8vIEdldCBhY2NvdW50XHJcbiAgICBjb25zdCBsaXN0QWNjb3VudCA9IChhd2FpdCBhY2NvdW50QXBpLmdldEFjY291bnQoe30pKS5kYXRhLmRhdGE7XHJcbiAgICBsZXQgaXNMb2dpbiA9IGZhbHNlO1xyXG4gICAgbGV0IGFjY291bnQgPSB7fTtcclxuXHJcbiAgICBsaXN0QWNjb3VudC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5FbWFpbCA9PT0gYm9keS5lbWFpbCAmJlxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5QYXNzd29yZCA9PT0gYm9keS5wYXNzd29yZCAmJlxyXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5BdXRob3JpemF0aW9uID09PSAxXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzTG9naW4gPSB0cnVlO1xyXG4gICAgICAgIGFjY291bnQgPSBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaXNMb2dpbikge1xyXG4gICAgICByZXR1cm5PYmplY3QucHJvcHMubG9nZ2VkSW5Vc2VySW5mbyA9IGFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuT2JqZWN0LnByb3BzLnVybCA9IGJvZHkudXJsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm5PYmplY3QucHJvcHMudXJsID0gY3R4LnF1ZXJ5LnVybCB8fCBcIi9jbXMvcHJvZHVjdFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldHVybk9iamVjdDtcclxufVxyXG5cclxuLypcclxuQSBzaW1wbGUgbG9naW4gcGFnZS5cclxuQ2FuIGN1c3RvbWl6ZSB0byBkaXNwbGF5IG1vcmUuXHJcbkxvZ2luRm9ybSBoYXMgYmFzaWMgaW5wdXRzIG9mIGF1dGhlbnRpY2F0aW9uIGZsb3c6XHJcbisgTG9naW4gbGFiZWxcclxuKyBVc2VybmFtZSAvIHBhc3N3b3JkIGlucHV0XHJcbisgU3VibWl0IGJ1dHRvblxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLmxvZ2dlZEluVXNlckluZm8pIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NvdW50XCIsIHByb3BzLmxvZ2dlZEluVXNlckluZm8pO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9jbXMvcHJvZHVjdFwiKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMubG9nZ2VkSW5Vc2VySW5mb10pO1xyXG5cclxuICBpZiAoIXByb3BzLmxvZ2dlZEluVXNlckluZm8pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+xJDEg25nIG5o4bqtcCB2w6BvIGjhu4cgdGjhu5FuZyBu4buZaSBi4buZPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybX0+XHJcbiAgICAgICAgICA8aDE+xJDEg25nIG5o4bqtcDwvaDE+XHJcbiAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVybFwiIHZhbHVlPXtwcm9wcy51cmx9IC8+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlTDqm4gdMOgaSBraG/huqNuXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTIsIHdpZHRoOiAyODAgfX1cclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk3huq10IGto4bqpdVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEyLCB3aWR0aDogMjgwIH19XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIMSQxINuZyBuaOG6rXBcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgfVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luRm9ybVwiOiBcImxvZ2luX2xvZ2luRm9ybV9felBuWmVcIlxufTtcbiIsImltcG9ydCBheGlvc015IGZyb20gXCIuL2F4aW9zTXlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY2NvdW50QXBpID0ge1xyXG4gIGdldEFjY291bnQ6IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGBhY2NvdW50c2A7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3NNeS5nZXQodXJsLCB7IHBhcmFtcyB9KTtcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG5jb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuVVJMX01ZX0FQSTtcclxuXHJcbmNvbnN0IGF4aW9zTXkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9cIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICB9LFxyXG4gIHBhcmFtc1NlcmlhbGl6ZXI6IChwYXJhbXMpID0+IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpLFxyXG59KTtcclxuXHJcbmF4aW9zTXkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAocmVzKSA9PiB7XHJcbiAgICBpZiAocmVzLmRhdGEucmVzdWx0ID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBlbXB0eVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfSxcclxuICAoZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDQwMVwiKTtcclxuICAgIH1cclxuICAgIHRocm93IGVycjtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvc015O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2FwaS11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=