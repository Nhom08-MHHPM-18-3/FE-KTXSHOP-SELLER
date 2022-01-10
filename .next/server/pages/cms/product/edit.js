module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cms/product/edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_my_context_my_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/my-context/my-context */ "./component/my-context/my-context.js");
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
  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const login = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_component_my_context_my_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  console.log(login); // if logged in

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

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["localhost","storage.googleapis.com","thuthuatnhanh.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./pages/cms/product/edit.js":
/*!***********************************!*\
  !*** ./pages/cms/product/edit.js ***!
  \***********************************/
/*! exports provided: getServerSideProps, loadIngredientData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIngredientData", function() { return loadIngredientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditPage; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/login */ "./lib/login.js");
/* harmony import */ var _component_my_card_my_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../component/my-card/my-card */ "./component/my-card/my-card.js");
/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product.module.css */ "./pages/cms/product/product.module.css");
/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_product_module_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Learning\\Learning\\HKI_NamTu\\MoHinhHoaPhanMem\\KTXSHOP\\Source\\FE-KTXSHOP-SELLER\\pages\\cms\\product\\edit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









async function getServerSideProps(ctx) {
  return await Object(_lib_login__WEBPACK_IMPORTED_MODULE_5__["doWithLoggedInUser"])(ctx, ctx => {
    return loadIngredientData(ctx);
  });
}
async function loadIngredientData(ctx) {
  let data = {
    props: {
      data: []
    }
  };
  let id = ctx.query.productId;
  await fetch("http://localhost:1337" + '/api/products/' + id).then(response => response.json()).then(res => {
    data.props.data.push(_objectSpread(_objectSpread({}, res.data.attributes), {}, {
      id: res.data.id
    }));
  });
  return data;
}
function EditPage(props) {
  return Object(_lib_login__WEBPACK_IMPORTED_MODULE_5__["renderWithLoggedInUser"])(props, render);
}

function render(props) {
  var _errors$name;

  // let _client = getIngredientClient();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const data = props.data[0];

  if (props.status && props.status !== "OK") {
    return __jsx(AppCMS, {
      select: "/cms/ingredient",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m")), __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_6__["MyCard"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_6__["MyCardHeader"], {
      title: "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"],
      display: "block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, __jsx("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      spacing: 3,
      direction: "row",
      justify: "space-between",
      alignItems: "flex-start",
      className: _product_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contentPadding,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      xs: 12,
      md: 12,
      sm: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, props.message)))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"],
      display: "block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    })));
  }

  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    defaultValues: data,
    mode: "onChange"
  });

  async function updateIngredient(formData) {
    let data = {
      props: {}
    };
    setLoading(true);
    data.props = await _client.updateIngredient(formData);
    setLoading(false);

    if (data.props.status === "OK") {
      success("Cập nhật thông tin sản phẩm thành công");
      reset({});
    } else {
      error(data.props.message || "Thao tác không thành công, vui lòng thử lại sau");
    }
  } // func onSubmit used because useForm not working with some fields


  async function onSubmit(formData) {
    try {
      formData.name = formData === null || formData === void 0 ? void 0 : formData.name.trim().replace(/\s+/g, " ");
      formData.code = data.code;
      await updateIngredient(formData);
    } catch (err) {
      setLoading(false);
      error(err.message || err.toString());
    }
  }

  return __jsx("div", {
    select: "/cms/ingredient",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "C\u1EADp nh\u1EADt s\u1EA3n ph\u1EA9m")), __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_6__["MyCard"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_6__["MyCardHeader"], {
    title: "sản phẩm #" + data.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_component_my_card_my_card__WEBPACK_IMPORTED_MODULE_6__["MyCardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    md: 6,
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    style: {
      margin: "20px"
    },
    item: true,
    xs: 12,
    md: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: data.imageUrl,
    height: 120,
    width: 120,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 12,
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    id: "name",
    name: "name",
    label: "T\xEAn s\u1EA3n ph\u1EA9m",
    placeholder: "",
    helperText: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
    margin: "normal",
    variant: "outlined",
    size: "small",
    InputLabelProps: {
      shrink: true
    },
    style: {
      margin: 12,
      width: "calc(100% - 24px)"
    },
    error: errors.name ? true : false,
    required: true,
    inputRef: register({
      required: "Vui lòng nhập tên sản phẩm",
      maxLength: {
        value: 250,
        message: "Tên sản phẩm có độ dài tối đa 250 kí tự"
      },
      minLength: {
        value: 1,
        message: "Tên sản phẩm có độ dài tối thiểu 1 kí tự"
      },
      pattern: {
        value: /^(?!.*[ ]{2})/,
        message: "Tên không hợp lệ (không được dư khoảng trắng)."
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    id: "price",
    name: "price",
    label: "Gi\xE1",
    placeholder: "",
    variant: "outlined",
    size: "small",
    margin: "normal",
    multiline: true,
    InputLabelProps: {
      shrink: true
    },
    style: {
      margin: 12,
      width: "calc(100% - 24px)"
    },
    inputRef: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 12,
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "/cms/product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  }, "Tr\u1EDF l\u1EA1i"))))))));
}

/***/ }),

/***/ "./pages/cms/product/product.module.css":
/*!**********************************************!*\
  !*** ./pages/cms/product/product.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contentPadding": "product_contentPadding__140sz",
	"form": "product_form__2y2Ae",
	"formControl": "product_formControl__3MyOs",
	"contentLeft": "product_contentLeft__6HsHz",
	"marginNormal": "product_marginNormal__15jVC",
	"rightGroup": "product_rightGroup__Cihp_",
	"search": "product_search__cjAnG",
	"grid": "product_grid__wOIaw",
	"input": "product_input__10Npw",
	"iconButton": "product_iconButton__1yuRW",
	"textSearch": "product_textSearch__3PzOg",
	"resetMargin": "product_resetMargin__3l9-a",
	"customGridPadding": "product_customGridPadding__2IQ8x",
	"overflowWrap": "product_overflowWrap__3XBCj",
	"rowAlignTop": "product_rowAlignTop__1jVi3",
	"height404": "product_height404__1sLGv",
	"lb": "product_lb__2WFZu"
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbXktY2FyZC9teS1jYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9teS1jb250ZXh0L215LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Ntcy9wcm9kdWN0L2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY21zL3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIl0sIm5hbWVzIjpbIk15Q2FyZCIsInByb3BzIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJjaGlsZHJlbiIsIk15Q2FyZEhlYWRlciIsIm1hcmdpblRvcCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInNtYWxsIiwiZGlzcGxheSIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInRleHRBbGlnbiIsIk15Q2FyZENvbnRlbnQiLCJib3JkZXJUb3AiLCJNeUNhcmRBY3Rpb25zIiwiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwibG9nZ2VkSW5Vc2VySW5mbyIsIkFQSVN0YXR1cyIsIk9LIiwiSU5WQUxJRCIsIk5PVF9GT1VORCIsIlVOQVVUSE9SSVpFRCIsIkZPUkJJRERFTiIsIkVSUk9SIiwiRVhJU1RFRCIsInplcm8iLCJlbXB0eVN0cmluZyIsImdldFNlc3Npb25Ub2tlbiIsImN0eCIsImNvb2tpZU5hbWUiLCJzZXNzaW9uU3RyIiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsInNlc3Npb24iLCJ1bmRlZmluZWQiLCJzcGxpdCIsImZvckVhY2giLCJpIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJ0cmltIiwidmFsdWUiLCJnZXRMb2dnZWRVc2VySW5mbyIsInJlcyIsInNldEhlYWRlciIsImVzY2FwZSIsInVybCIsInN0YXR1c0NvZGUiLCJlbmQiLCJsb2dnZWRJbiIsIm1ldGhvZCIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZmV0Y2giLCJkb1dpdGhMb2dnZWRJblVzZXIiLCJjYWxsYmFjayIsInJlc3VsdCIsIlByb21pc2UiLCJyZW5kZXJXaXRoTG9nZ2VkSW5Vc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJ1c2VDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInNvdXJjZSIsImFzUGF0aCIsInN0YXJ0c1dpdGgiLCJhY2NvdW50IiwiaXNUZW1wUGFzc3dvcmQiLCJkb0xvZ291dCIsImNvbXBhcmVQYXRoIiwiaW5wdXQiLCJwZXJtaXNzaW9uIiwiYWNjZXB0ZWRTY3JlZW5QYXRoIiwidXNlckluZm8iLCJwYXRoIiwic2NyZWVucyIsInVzZXJSb2xlcyIsImFjY2VwdGVkIiwibGVuZ3RoIiwiaiIsIm5vcm1hbGl6ZWRQYXRoIiwicmVwbGFjZSIsImRlcGFydG1lbnRDb2RlIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsImRvbWFpbnMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJwIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyYyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiaGVpZ2h0IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImdldFNlcnZlclNpZGVQcm9wcyIsImxvYWRJbmdyZWRpZW50RGF0YSIsImRhdGEiLCJxdWVyeSIsInByb2R1Y3RJZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwdXNoIiwiYXR0cmlidXRlcyIsIkVkaXRQYWdlIiwicmVuZGVyIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwic3RhdHVzIiwiUGFwZXIiLCJzdHlsZXMiLCJjb250ZW50UGFkZGluZyIsIm1lc3NhZ2UiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInNldFZhbHVlIiwicmVzZXQiLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsIm1vZGUiLCJ1cGRhdGVJbmdyZWRpZW50IiwiZm9ybURhdGEiLCJfY2xpZW50Iiwic3VjY2VzcyIsImVycm9yIiwib25TdWJtaXQiLCJjb2RlIiwiZXJyIiwidG9TdHJpbmciLCJpbWFnZVVybCIsInNocmluayIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwibWluTGVuZ3RoIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLDhEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixF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QUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQURGLENBekRGLENBREYsQ0FERixDQUZGLENBSkYsQ0FERjtBQWlGRCxDOzs7Ozs7Ozs7OztBQzlMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEMiLCJmaWxlIjoicGFnZXMvY21zL3Byb2R1Y3QvZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY21zL3Byb2R1Y3QvZWRpdC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IHsgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXlDYXJkKHByb3BzKSB7XHJcbiAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcclxuICAgICAgICAuLi4gKHByb3BzLnN0eWxlIHx8IHt9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxDYXJkXHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ2FyZCA+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNeUNhcmRIZWFkZXIocHJvcHMpIHtcclxuICAgIHJldHVybiA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwYjQ2ZVwiLC8vIFwiIzkwNzA2MFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBwcm9wcy5zbWFsbCA/IDggOiAxNixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCJcclxuICAgICAgICB9fVxyXG4gICAgPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBwcm9wcy5zbWFsbCA/IDE1IDogMjQsIHdpZHRoOiBcIjEwMCVcIiB9fT57cHJvcHMudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbiAmJiA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXlDYXJkQ29udGVudChwcm9wcykge1xyXG4gICAgbGV0IHN0eWxlID0gcHJvcHMuc3R5bGUgfHwge31cclxuICAgIHN0eWxlLmJvcmRlclRvcCA9IFwic29saWQgMXB4ICNjY2NcIlxyXG4gICAgcmV0dXJuIDxDYXJkQ29udGVudFxyXG4gICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgID5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0NhcmRDb250ZW50PlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXlDYXJkQWN0aW9ucyhwcm9wcykge1xyXG4gICAgcmV0dXJuIDxDYXJkQWN0aW9uc1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlclRvcDogXCJzb2xpZCAxcHggI2NjY1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y2ZjZmNlwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMTZcclxuICAgICAgICB9fVxyXG4gICAgPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ2FyZEFjdGlvbnM+XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyBsb2dnZWRJblVzZXJJbmZvOiBudWxsIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRleHQ7XHJcbiIsImV4cG9ydCBjb25zdCBBUElTdGF0dXMgPSB7XHJcbiAgICBPSyA6IFwiT0tcIixcclxuICAgIElOVkFMSUQ6IFwiSU5WQUxJRFwiLFxyXG4gICAgTk9UX0ZPVU5EOiBcIk5PVF9GT1VORFwiLFxyXG4gICAgVU5BVVRIT1JJWkVEOiBcIlVOQVVUSE9SSVpFRFwiLFxyXG4gICAgRk9SQklEREVOOiBcIkZPUkJJRERFTlwiLFxyXG4gICAgRVJST1I6IFwiRVJST1JcIixcclxuICAgIEVYSVNURUQ6IFwiRVhJU1RFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB6ZXJvID0gMFxyXG5leHBvcnQgY29uc3QgZW1wdHlTdHJpbmcgPSBcIlwiIiwiLypcclxuVGhpcyBmdW5jdGlvbiByZXR1cm4gYSBzZXNzaW9uIHN0cmluZyBieSBwYXJzaW5nIGNvb2tpZSB2YWx1ZSBvZiBpbmNvbWluZyByZXF1ZXN0LlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFQSVN0YXR1cyB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50L215LWNvbnRleHQvbXktY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlc3Npb25Ub2tlbihjdHgsIGNvb2tpZU5hbWUpIHtcclxuICBjb29raWVOYW1lID0gY29va2llTmFtZSB8fCBcInNlc3Npb25fdG9rZW5cIjtcclxuICBsZXQgc2Vzc2lvblN0ciA9IGN0eC5yZXEgJiYgY3R4LnJlcS5oZWFkZXJzLmNvb2tpZTtcclxuICBsZXQgc2Vzc2lvbiA9IHVuZGVmaW5lZDtcclxuICBpZiAoc2Vzc2lvblN0cikge1xyXG4gICAgc2Vzc2lvblN0ci5zcGxpdChcIjtcIikuZm9yRWFjaCgoY29va2llKSA9PiB7XHJcbiAgICAgIGxldCBpID0gY29va2llLmluZGV4T2YoXCI9XCIpO1xyXG4gICAgICBsZXQgbmFtZSA9IGNvb2tpZS5zdWJzdHIoMCwgaSkudHJpbSgpO1xyXG4gICAgICBsZXQgdmFsdWUgPSBjb29raWUuc3Vic3RyKGkgKyAxKS50cmltKCk7XHJcbiAgICAgIGlmIChuYW1lID09IGNvb2tpZU5hbWUpIHtcclxuICAgICAgICBzZXNzaW9uID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHNlc3Npb247XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldExvZ2dlZFVzZXJJbmZvKGN0eCkge1xyXG4gIGxldCBzZXNzaW9uID0gZ2V0U2Vzc2lvblRva2VuKGN0eCk7XHJcblxyXG4gIC8vIGlmIHRoZXJlIGlzIG5vdCBjb29raWUgd2l0aCBcInNlc3Npb25fdG9rZW5cIiBuYW1lXHJcbiAgbGV0IHJlcyA9IGN0eC5yZXM7XHJcbiAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24gPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICBzZXNzaW9uID0gZ2V0U2Vzc2lvblRva2VuKGN0eCwgXCJyZW1lbWJlcl9tZVwiKTtcclxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uID09PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvbG9naW4/dXJsPVwiICsgZXNjYXBlKGN0eC5yZXEudXJsKSk7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gICAgICByZXMuZW5kKCk7XHJcbiAgICAgIHJldHVybiB7IHByb3BzOiB7IGxvZ2dlZEluOiBmYWxzZSB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLnNldEhlYWRlcihcInNldC1jb29raWVcIiwgYHNlc3Npb25fdG9rZW49JHtzZXNzaW9ufTsgUGF0aD0vOyBIdHRwT25seWApO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlcmUgaXMgdmFsdWVcclxuICBsZXQgcmVxID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2Vzc2lvbn1gLFxyXG4gICAgICBcIlVzZXItQWdlbnRcIjogY3R4LnJlcS5oZWFkZXJzW1widXNlci1hZ2VudFwiXSxcclxuICAgICAgXCJYLUZvcndhcmRlZC1Gb3JcIjogY3R4LnJlcS5oZWFkZXJzW1wieC1mb3J3YXJkZWQtZm9yXCJdLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCB1cmwgPSBwcm9jZXNzLmVudi5BUElfSE9TVCArIFwiL2NvcmUvYWNjb3VudC92MS9tZT9nZXRQZXJtaXNzaW9ucz10cnVlXCI7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwgcmVxKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBieSBpbmplY3RpbmcgdG8gZ2V0U2VydmVyU2lkZVByb3BzIG9mIHBhZ2VzLlxyXG4gKiBAcGFyYW0gY3R4XHJcbiAqIEBwYXJhbSBjYWxsYmFja1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqfHtwcm9wczoge2xvZ2dlZEluOiBib29sZWFufX0+fVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvV2l0aExvZ2dlZEluVXNlcihjdHgsIGNhbGxiYWNrKSB7XHJcbiAgLy8gbGV0IHJlc3VsdCA9IGF3YWl0IGdldExvZ2dlZFVzZXJJbmZvKGN0eClcclxuICAvLyBsZXQgdXNlckluZm8gPSBhd2FpdCByZXN1bHQuanNvbigpXHJcblxyXG4gIC8vIC8vIG11c3QgZ2V0IHVzZXIgaW5mbyBzdWNjZXNzZnVsIGJlZm9yZSBkbyBhbnl0aGluZyBlbHNlXHJcbiAgLy8gLy8gY29uc29sZS5sb2codXNlckluZm8pXHJcbiAgLy8gaWYgKHVzZXJJbmZvLnN0YXR1cyAhPT0gQVBJU3RhdHVzLk9LKSB7XHJcbiAgLy8gICAgIHJldHVybiB7IHByb3BzOiB7IGxvZ2dlZEluOiBmYWxzZSB9IH1cclxuICAvLyB9XHJcblxyXG4gIC8vIC8vIGNoZWNrIHRlbXAgcGFzc3dvcmRcclxuICAvLyBsZXQgc291cmNlID0gdXNlckluZm8uZGF0YVswXVxyXG4gIC8vIGxldCBhY2NvdW50ID0gc291cmNlLmFjY291bnRcclxuXHJcbiAgLy8gaWYgKCFjdHgucmVxLnVybC5zdGFydHNXaXRoKCcvcHJvZmlsZScpICYmIGFjY291bnQuaXNUZW1wUGFzc3dvcmQpIHtcclxuICAvLyAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAvLyAgICAgICAgIGxldCByZXMgPSBjdHgucmVzXHJcbiAgLy8gICAgICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvcHJvZmlsZVwiKTtcclxuICAvLyAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gIC8vICAgICAgICAgcmVzLmVuZCgpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIHJldHVybiB7IHByb3BzOiB7IGxvZ2dlZEluOiB0cnVlLCBsb2dnZWRJblVzZXJJbmZvOiBzb3VyY2UgfSB9XHJcbiAgLy8gfVxyXG5cclxuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soY3R4KTtcclxuICAvLyAvLyB3YWl0IGZvciBwYWdlIHByb21pc2VcclxuICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgIHJlc3VsdCA9IGF3YWl0IHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIC8vIHNldCBsb2dnZWRJbiA9IHRydWUgaWYgaXMgaXMgdW5kZWZpbmVkXHJcbiAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9O1xyXG4gIHJlc3VsdC5wcm9wcyA9IHJlc3VsdC5wcm9wcyB8fCB7fTtcclxuICAvLyByZXN1bHQucHJvcHMubG9nZ2VkSW5Vc2VySW5mbyA9IHVzZXJJbmZvLmRhdGFbMF1cclxuICAvLyBpZiAodHlwZW9mIHJlc3VsdC5wcm9wcy5sb2dnZWRJbiA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgcmVzdWx0LnByb3BzLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAvLyB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBieSBpbmplY3RpbmcgdG8gcmVuZGVyIGZ1bmN0aW9uIG9mIHBhZ2VzLlxyXG4gKiBAcGFyYW0gcHJvcHNcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zIHtudWxsfCp9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2l0aExvZ2dlZEluVXNlcihwcm9wcywgY2FsbGJhY2spIHtcclxuICBsZXQgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2cobG9naW4pO1xyXG5cclxuICAvLyBpZiBsb2dnZWQgaW5cclxuICBpZiAocHJvcHMubG9nZ2VkSW4gIT09IGZhbHNlKSB7XHJcbiAgICAvLyB2YWxpZGF0ZSBwZXJtaXNzaW9uc1xyXG4gICAgbGV0IHNvdXJjZSA9IHByb3BzLmxvZ2dlZEluVXNlckluZm87XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvcHMubG9nZ2VkSW4pO1xyXG5cclxuICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgLy8gY2hlY2sgdGVtcCBwYXNzd29yZFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXJvdXRlci5hc1BhdGguc3RhcnRzV2l0aChcIi9wcm9maWxlXCIpICYmXHJcbiAgICAgICAgc291cmNlLmFjY291bnQgJiZcclxuICAgICAgICBzb3VyY2UuYWNjb3VudC5pc1RlbXBQYXNzd29yZFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2ZpbGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhwcm9wcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsbGJhY2socHJvcHMpIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBpZiBub3RcclxuICBlbHNlIHtcclxuICAgIC8vIGRvIGhhcmQgcmVkaXJlY3QgdG8gL2xvZ2luXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb0xvZ291dCgpIHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goXCIvYmFja2VuZC9jb3JlL2FjY291bnQvdjEvbG9nb3V0XCIsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcGFyZVBhdGgoaW5wdXQsIHBlcm1pc3Npb24pIHtcclxuICBpZiAocGVybWlzc2lvbi5zdGFydHNXaXRoKFwiPVwiKSkge1xyXG4gICAgaWYgKGlucHV0ID09PSBwZXJtaXNzaW9uLnN1YnN0cigxKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGlucHV0LnN0YXJ0c1dpdGgocGVybWlzc2lvbikpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY2NlcHRlZFNjcmVlblBhdGgodXNlckluZm8sIHBhdGgpIHtcclxuICBpZiAoIXVzZXJJbmZvKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChwYXRoID09IFwiL1wiIHx8IHBhdGggPT0gXCIvcHJvZmlsZVwiKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IHNjcmVlbnMgPSB1c2VySW5mby5zY3JlZW5zO1xyXG4gIGxldCB1c2VyUm9sZXMgPSB1c2VySW5mby51c2VyUm9sZXM7XHJcbiAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XHJcbiAgaWYgKHNjcmVlbnMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NyZWVucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoc2NyZWVuc1tpXS5pbmRleE9mKFwiOmRlcGFydG1lbnRDb2RlXCIpID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgdXNlclJvbGVzICYmIGogPCB1c2VyUm9sZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGxldCBub3JtYWxpemVkUGF0aCA9IHNjcmVlbnNbaV0ucmVwbGFjZShcclxuICAgICAgICAgICAgXCI6ZGVwYXJ0bWVudENvZGVcIixcclxuICAgICAgICAgICAgdXNlclJvbGVzW2pdLmRlcGFydG1lbnRDb2RlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKGNvbXBhcmVQYXRoKHBhdGgsIG5vcm1hbGl6ZWRQYXRoKSkge1xyXG4gICAgICAgICAgICBhY2NlcHRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY29tcGFyZVBhdGgocGF0aCwgc2NyZWVuc1tpXSkpIHtcclxuICAgICAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYWNjZXB0ZWQ7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ2luaGVyaXQnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHtcclxuICBCb3gsIEJ1dHRvbiwgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBGb3JtR3JvdXAsIEdyaWQsIExpbmssIFBhcGVyLCBUZXh0RmllbGRcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBkb1dpdGhMb2dnZWRJblVzZXIsXHJcbiAgcmVuZGVyV2l0aExvZ2dlZEluVXNlclxyXG59IGZyb20gXCIuLi8uLi8uLi9saWIvbG9naW5cIjtcclxuaW1wb3J0IHsgTXlDYXJkLCBNeUNhcmRDb250ZW50LCBNeUNhcmRIZWFkZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L215LWNhcmQvbXktY2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Byb2R1Y3QubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICByZXR1cm4gYXdhaXQgZG9XaXRoTG9nZ2VkSW5Vc2VyKGN0eCwgKGN0eCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvYWRJbmdyZWRpZW50RGF0YShjdHgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEluZ3JlZGllbnREYXRhKGN0eCkge1xyXG4gIGxldCBkYXRhID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YTogW10sXHJcbiAgICB9XHJcbiAgfTtcclxuICBsZXQgaWQgPSBjdHgucXVlcnkucHJvZHVjdElkO1xyXG4gIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgJy9hcGkvcHJvZHVjdHMvJyArIGlkKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGF0YS5wcm9wcy5kYXRhLnB1c2goeyAuLi5yZXMuZGF0YS5hdHRyaWJ1dGVzLCBpZDogcmVzLmRhdGEuaWQgfSlcclxuICAgIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0UGFnZShwcm9wcykge1xyXG4gIHJldHVybiByZW5kZXJXaXRoTG9nZ2VkSW5Vc2VyKHByb3BzLCByZW5kZXIpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XHJcbiAgLy8gbGV0IF9jbGllbnQgPSBnZXRJbmdyZWRpZW50Q2xpZW50KCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhWzBdXHJcbiAgaWYgKHByb3BzLnN0YXR1cyAmJiBwcm9wcy5zdGF0dXMgIT09IFwiT0tcIikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENNUyBzZWxlY3Q9XCIvY21zL2luZ3JlZGllbnRcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5DaGkgdGnhur90IHPhuqNuIHBo4bqpbTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNeUNhcmQ+XHJcbiAgICAgICAgICA8TXlDYXJkSGVhZGVyIHRpdGxlPVwiQ2hpIHRp4bq/dCBz4bqjbiBwaOG6qW1cIiAvPlxyXG4gICAgICAgICAgPEJveCBjb21wb25lbnQ9e1BhcGVyfSBkaXNwbGF5PVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXszfVxyXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFBhZGRpbmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLm1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBjb21wb25lbnQ9e1BhcGVyfSBkaXNwbGF5PVwiYmxvY2tcIj48L0JveD5cclxuICAgICAgICA8L015Q2FyZD5cclxuICAgICAgPC9BcHBDTVM+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMsIHNldFZhbHVlLCByZXNldCB9ID0gdXNlRm9ybSh7XHJcbiAgICBkZWZhdWx0VmFsdWVzOiBkYXRhLFxyXG4gICAgbW9kZTogXCJvbkNoYW5nZVwiLFxyXG4gIH0pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVJbmdyZWRpZW50KGZvcm1EYXRhKSB7XHJcbiAgICBsZXQgZGF0YSA9IHsgcHJvcHM6IHt9IH07XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgZGF0YS5wcm9wcyA9IGF3YWl0IF9jbGllbnQudXBkYXRlSW5ncmVkaWVudChmb3JtRGF0YSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIGlmIChkYXRhLnByb3BzLnN0YXR1cyA9PT0gXCJPS1wiKSB7XHJcbiAgICAgIHN1Y2Nlc3MoXCJD4bqtcCBuaOG6rXQgdGjDtG5nIHRpbiBz4bqjbiBwaOG6qW0gdGjDoG5oIGPDtG5nXCIpO1xyXG4gICAgICByZXNldCh7fSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVycm9yKFxyXG4gICAgICAgIGRhdGEucHJvcHMubWVzc2FnZSB8fCBcIlRoYW8gdMOhYyBraMO0bmcgdGjDoG5oIGPDtG5nLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1XCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGZ1bmMgb25TdWJtaXQgdXNlZCBiZWNhdXNlIHVzZUZvcm0gbm90IHdvcmtpbmcgd2l0aCBzb21lIGZpZWxkc1xyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGZvcm1EYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBmb3JtRGF0YS5uYW1lID0gZm9ybURhdGE/Lm5hbWUudHJpbSgpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpO1xyXG4gICAgICBmb3JtRGF0YS5jb2RlID0gZGF0YS5jb2RlXHJcbiAgICAgIGF3YWl0IHVwZGF0ZUluZ3JlZGllbnQoZm9ybURhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBlcnJvcihlcnIubWVzc2FnZSB8fCBlcnIudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzZWxlY3Q9XCIvY21zL2luZ3JlZGllbnRcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkPhuq1wIG5o4bqtdCBz4bqjbiBwaOG6qW08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNeUNhcmQ+XHJcbiAgICAgICAgPE15Q2FyZEhlYWRlciB0aXRsZT17XCJz4bqjbiBwaOG6qW0gI1wiICsgZGF0YS5pZH0gLz5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPE15Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gbWQ9ezZ9IHNtPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBzdHlsZT17eyBtYXJnaW46IFwiMjBweFwiIH19IGl0ZW0geHM9ezEyfSBtZD17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZGF0YS5pbWFnZVVybH0gaGVpZ2h0PXsxMjB9IHdpZHRoPXsxMjB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUw6puIHPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5uYW1lPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMiwgd2lkdGg6IFwiY2FsYygxMDAlIC0gMjRweClcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubmFtZSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJWdWkgbMOybmcgbmjhuq1wIHTDqm4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDI1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUw6puIHPhuqNuIHBo4bqpbSBjw7MgxJHhu5kgZMOgaSB04buRaSDEkWEgMjUwIGvDrSB04buxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlTDqm4gc+G6o24gcGjhuqltIGPDsyDEkeG7mSBkw6BpIHThu5FpIHRoaeG7g3UgMSBrw60gdOG7sVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eKD8hLipbIF17Mn0pLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUw6puIGtow7RuZyBo4bujcCBs4buHIChraMO0bmcgxJHGsOG7o2MgZMawIGtob+G6o25nIHRy4bqvbmcpLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdpw6FcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTIsIHdpZHRoOiBcImNhbGMoMTAwJSAtIDI0cHgpXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfSBzbT17Nn0gLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gc209ezEyfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY21zL3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVHLhu58gbOG6oWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L015Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvTXlDYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50UGFkZGluZ1wiOiBcInByb2R1Y3RfY29udGVudFBhZGRpbmdfXzE0MHN6XCIsXG5cdFwiZm9ybVwiOiBcInByb2R1Y3RfZm9ybV9fMnkyQWVcIixcblx0XCJmb3JtQ29udHJvbFwiOiBcInByb2R1Y3RfZm9ybUNvbnRyb2xfXzNNeU9zXCIsXG5cdFwiY29udGVudExlZnRcIjogXCJwcm9kdWN0X2NvbnRlbnRMZWZ0X182SHNIelwiLFxuXHRcIm1hcmdpbk5vcm1hbFwiOiBcInByb2R1Y3RfbWFyZ2luTm9ybWFsX18xNWpWQ1wiLFxuXHRcInJpZ2h0R3JvdXBcIjogXCJwcm9kdWN0X3JpZ2h0R3JvdXBfX0NpaHBfXCIsXG5cdFwic2VhcmNoXCI6IFwicHJvZHVjdF9zZWFyY2hfX2NqQW5HXCIsXG5cdFwiZ3JpZFwiOiBcInByb2R1Y3RfZ3JpZF9fd09JYXdcIixcblx0XCJpbnB1dFwiOiBcInByb2R1Y3RfaW5wdXRfXzEwTnB3XCIsXG5cdFwiaWNvbkJ1dHRvblwiOiBcInByb2R1Y3RfaWNvbkJ1dHRvbl9fMXl1UldcIixcblx0XCJ0ZXh0U2VhcmNoXCI6IFwicHJvZHVjdF90ZXh0U2VhcmNoX18zUHpPZ1wiLFxuXHRcInJlc2V0TWFyZ2luXCI6IFwicHJvZHVjdF9yZXNldE1hcmdpbl9fM2w5LWFcIixcblx0XCJjdXN0b21HcmlkUGFkZGluZ1wiOiBcInByb2R1Y3RfY3VzdG9tR3JpZFBhZGRpbmdfXzJJUTh4XCIsXG5cdFwib3ZlcmZsb3dXcmFwXCI6IFwicHJvZHVjdF9vdmVyZmxvd1dyYXBfXzNYQkNqXCIsXG5cdFwicm93QWxpZ25Ub3BcIjogXCJwcm9kdWN0X3Jvd0FsaWduVG9wX18xalZpM1wiLFxuXHRcImhlaWdodDQwNFwiOiBcInByb2R1Y3RfaGVpZ2h0NDA0X18xc0xHdlwiLFxuXHRcImxiXCI6IFwicHJvZHVjdF9sYl9fMldGWnVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==