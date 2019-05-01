/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (originalModule) {\n  if (!originalModule.webpackPolyfill) {\n    var module = Object.create(originalModule); // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function () {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function () {\n        return module.i;\n      }\n    });\n    Object.defineProperty(module, \"exports\", {\n      enumerable: true\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserData\", function() { return getUserData; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ \"./src/actions/types.js\");\n\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n // eslint-disable-next-line import/prefer-default-export\n\nvar getUserData = function getUserData() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n        var response, responseData;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://jsonplaceholder.typicode.com/users\");\n\n              case 2:\n                response = _context.sent;\n                responseData = response.data.map(function (data) {\n                  return {\n                    id: data.id,\n                    name: data.name,\n                    email: data.email,\n                    city: data.address.city,\n                    website: data.website\n                  };\n                });\n                dispatch({\n                  type: _types__WEBPACK_IMPORTED_MODULE_3__[\"default\"].GET_USER_DATA,\n                  payload: responseData\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getUserData, \"getUserData\", \"/Users/rkala/Desktop/React Isha/SSR/src/actions/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = {\n  GET_USER_DATA: \"GET_USER_DATA\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/rkala/Desktop/React Isha/SSR/src/actions/types.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/actions/types.js?");

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar About = function About() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"About Us\");\n};\n\nvar _default = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(About, \"About\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/About.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/About.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/About.js?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading */ \"react-loading\");\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _UsersList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UsersList */ \"./src/components/UsersList.js\");\n/* harmony import */ var _UsersList__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_UsersList__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n/* harmony import */ var _UserCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UserCard */ \"./src/components/UserCard.js\");\n\n\n\n\n\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n/* eslint-disable react/destructuring-assignment */\n\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _React$Component);\n\n  function App() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(App).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getUserData();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          isLoading = _this$props.isLoading,\n          users = _this$props.users;\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null), isLoading && users.length === 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_loading__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        className: \"loading\",\n        color: \"#14233c\"\n      }) : users.map(function (user) {\n        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_UserCard__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n          key: user.id\n        }, user));\n      }));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }], [{\n    key: \"fetchData\",\n    value: function fetchData(_ref) {\n      var dispatch = _ref.dispatch,\n          getState = _ref.getState;\n      console.log(\"CURRENT STATE:\", getState());\n      return [dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__[\"getUserData\"])())];\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n;\nApp.propTypes = {\n  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,\n  users: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,\n    name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,\n    email: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,\n    city: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,\n    website: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string\n  })),\n  getUserData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired\n};\nApp.defaultProps = {\n  users: []\n};\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var isLoading = _ref2.users.isLoading,\n      lists = _ref2.users.lists;\n  return {\n    isLoading: isLoading,\n    users: lists\n  };\n};\n\nvar _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, {\n  getUserData: _actions__WEBPACK_IMPORTED_MODULE_12__[\"getUserData\"]\n})(App);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/App.js\");\n  reactHotLoader.register(mapStateToProps, \"mapStateToProps\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/App.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/App.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"nav-wrapper\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"brand-logo\"\n  }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    id: \"nav-mobile\",\n    className: \"right hide-on-med-and-down\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"About\")))));\n};\n\nvar _default = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Header, \"Header\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/Header.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/Header.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/UserCard.js":
/*!************************************!*\
  !*** ./src/components/UserCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\nvar UserCard = function UserCard(_ref) {\n  var name = _ref.name,\n      city = _ref.city,\n      website = _ref.website,\n      email = _ref.email;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col s12 m6\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card blue-grey darken-1\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-content white-text\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"card-title\"\n  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"City: \", city), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Website: \", website)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-action\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"mailto:\".concat(email),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, \"Send me an email\")))));\n};\n\nUserCard.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  city: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  website: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\nvar _default = UserCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserCard, \"UserCard\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/UserCard.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rkala/Desktop/React Isha/SSR/src/components/UserCard.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/UserCard.js?");

/***/ }),

/***/ "./src/components/UsersList.js":
/*!*************************************!*\
  !*** ./src/components/UsersList.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React from 'react';\n// import PropTypes from 'prop-types';\n// import Loading from 'react-loading';\n// import { connect } from 'react-redux';\n// import { getUserData } from '../actions';\n// import UserCard from './UserCard';\n// class UsersList extends React.Component{\n//     static fetchData ({ dispatch,getState }) {\n//         console.log(\"CURRENT STATE:\",  getState());\n//         return [dispatch(getUserData())];\n//     }\n//     componentDidMount(){\n//         this.props.getUserData();\n//     }\n//     render(){\n//         const { isLoading, users } = this.props;\n//         if(isLoading && users.length ===0) return <Loading className=\"loading\" color=\"#14233c\" />;\n//         return users.map((user)=> <UserCard key={user.id} {...user} />);\n//     }\n// }\n// UsersList.propTypes ={\n//     isLoading : PropTypes.bool.isRequired,\n//     users : PropTypes.arrayOf( PropTypes.shape({\n//         id: PropTypes.number,\n//         name: PropTypes.string,\n//         email: PropTypes.string,\n//         city:PropTypes.string,\n//         website:PropTypes.string,\n//     })),\n//     getUserData: PropTypes.func.isRequired,\n// };\n// UsersList.defaultProps ={\n//     users:[],\n// };\n// const mapStateToProps = ({users:{isLoading},users:{lists}}) => {\n//     return {\n//         isLoading,\n//         users: lists\n//     };\n// };\n// export default connect(mapStateToProps,{getUserData})(UsersList);\n\n//# sourceURL=webpack:///./src/components/UsersList.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersReducer */ \"./src/reducers/usersReducer.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\nvar _default = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  users: _usersReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/rkala/Desktop/React Isha/SSR/src/reducers/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/usersReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/usersReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ \"./src/actions/types.js\");\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\nvar initialState = {\n  isLoading: true,\n  lists: []\n};\n\nvar _default = function _default() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_USER_DATA:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        lists: action.payload,\n        isLoading: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(initialState, \"initialState\", \"/Users/rkala/Desktop/React Isha/SSR/src/reducers/usersReducer.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rkala/Desktop/React Isha/SSR/src/reducers/usersReducer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/About */ \"./src/components/About.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ \"./src/components/App.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n // export default () => {\n//     return(\n//         <div>\n//             <Switch>\n//                 <Route path=\"/\" exact component={ App } />\n//                 <Route path=\"/about\" component={ About } />\n//             </Switch>\n//         </div>\n//     );\n// };\n\nvar _default = [{\n  component: _components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  path: '/',\n  exact: true\n}, {\n  component: _components_About__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  path: '/about'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/rkala/Desktop/React Isha/SSR/src/routes/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes */ \"./src/routes/index.js\");\n\n\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"](\"dist\"));\nvar PORT = process.env.PORT || 8000;\napp.get('*',\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {\n    var actions, context, jsx, reactDom;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            actions = Object(react_router_config__WEBPACK_IMPORTED_MODULE_8__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"], req.path).map(function (_ref2) {\n              var route = _ref2.route;\n              return route.component.fetchData ? route.component.fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _store__WEBPACK_IMPORTED_MODULE_9__[\"store\"], {\n                path: req.path\n              })) : null;\n            }).map(\n            /*#__PURE__*/\n            function () {\n              var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n              /*#__PURE__*/\n              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(actions) {\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return Promise.all((actions || []).map(function (p) {\n                          return p && new Promise(function (resolve) {\n                            return p.then(resolve)[\"catch\"](resolve);\n                          });\n                        }));\n\n                      case 2:\n                        return _context.abrupt(\"return\", _context.sent);\n\n                      case 3:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x3) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n            _context2.next = 3;\n            return Promise.all(actions);\n\n          case 3:\n            context = {};\n            jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n              store: _store__WEBPACK_IMPORTED_MODULE_9__[\"store\"]\n            }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n              context: context,\n              location: req.url\n            }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_8__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]))));\n            reactDom = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"])(jsx);\n            res.writeHead(200, {\n              \"Content-Type\": \"text/html\"\n            });\n            res.end(htmlTemplate(reactDom));\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nfunction htmlTemplate(reactDom) {\n  return \"\\n        <!DOCTYPE html>\\n            <html lang=\\\"en\\\">\\n            <head>\\n                <title>SSR</title>\\n                <meta charset=\\\"UTF-8\\\" />\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\n                <link href=\\\"/main.css\\\" rel=\\\"stylesheet\\\" />\\n            </head>\\n            <body>\\n                <div id=\\\"root\\\">\".concat(reactDom, \"</div>\\n            </body>\\n            <script>\\n                window.INITIAL_STATE = \").concat(JSON.stringify(_store__WEBPACK_IMPORTED_MODULE_9__[\"store\"].getState()), \"\\n            </script>\\n            <script src=\\\"/bundle.js\\\" defer></script>\\n            </html>\\n    \");\n}\n\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/rkala/Desktop/React Isha/SSR/src/server/index.js\");\n  reactHotLoader.register(PORT, \"PORT\", \"/Users/rkala/Desktop/React Isha/SSR/src/server/index.js\");\n  reactHotLoader.register(htmlTemplate, \"htmlTemplate\", \"/Users/rkala/Desktop/React Isha/SSR/src/server/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: fetchingUserData, storeWithMiddleware, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchingUserData\", function() { return fetchingUserData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeWithMiddleware\", function() { return storeWithMiddleware; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./src/reducers/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n/* eslint-disable no-underscore-dangle */\n\n\n\n\nvar fetchingUserData = function fetchingUserData() {\n  return function (_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    console.log(\"CURRENT STATE:\", getState());\n    return [dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__[\"getUserData\"])())];\n  };\n};\nvar preloadedState = {}; // const reduxDevTools =\n//     window.__REDUX_DEVTOOLS_EXTENSION__ &&\n//     window.__REDUX_DEVTOOLS_EXTENSION__();\n\nvar composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"] : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nvar middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];\nvar storeWithMiddleware = composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middlewares))(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"]);\nvar store = storeWithMiddleware(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], preloadedState); // export const store = createStore(reducers, preloadedState, composeEnhancers(\n//     applyMiddleware(...middlewares)\n// ));\n\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(fetchingUserData, \"fetchingUserData\", \"/Users/rkala/Desktop/React Isha/SSR/src/store/index.js\");\n  reactHotLoader.register(preloadedState, \"preloadedState\", \"/Users/rkala/Desktop/React Isha/SSR/src/store/index.js\");\n  reactHotLoader.register(composeEnhancers, \"composeEnhancers\", \"/Users/rkala/Desktop/React Isha/SSR/src/store/index.js\");\n  reactHotLoader.register(middlewares, \"middlewares\", \"/Users/rkala/Desktop/React Isha/SSR/src/store/index.js\");\n  reactHotLoader.register(storeWithMiddleware, \"storeWithMiddleware\", \"/Users/rkala/Desktop/React Isha/SSR/src/store/index.js\");\n  reactHotLoader.register(store, \"store\", \"/Users/rkala/Desktop/React Isha/SSR/src/store/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-loading":
/*!********************************!*\
  !*** external "react-loading" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loading\");\n\n//# sourceURL=webpack:///external_%22react-loading%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });