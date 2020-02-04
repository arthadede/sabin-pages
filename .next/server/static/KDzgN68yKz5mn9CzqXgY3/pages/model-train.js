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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("KI45");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("sLSF"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("MI3g"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("a7VT"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("Tit0"));

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("U7sd"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};
/**
* `Error` component used for handling errors.
*/

var Error =
/*#__PURE__*/
function (_react$default$Compon) {
  (0, _inherits2["default"])(Error, _react$default$Compon);

  function Error() {
    (0, _classCallCheck2["default"])(this, Error);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Error).apply(this, arguments));
  }

  (0, _createClass2["default"])(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return _react["default"].createElement("div", {
        style: styles.error
      }, _react["default"].createElement(_head["default"], null, _react["default"].createElement("title", null, statusCode, ": ", title)), _react["default"].createElement("div", null, _react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? _react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, _react["default"].createElement("div", {
        style: styles.desc
      }, _react["default"].createElement("h2", {
        style: styles.h2
      }, title, "."))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
      return {
        statusCode: statusCode
      };
    }
  }]);
  return Error;
}(_react["default"].Component);

exports["default"] = Error;
Error.displayName = 'ErrorPage';
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1lYi":
/***/ (function(module, exports) {

module.exports = require("react-highlight-words");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("djf8");


/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("90Kz");

module.exports = routes().add('Landing Page', '/', '/').add('Login Page', '/login', '/login').add('RegisterPage', '/register', '/register').add('ConfirmAccount', '/confirm-account', '/confirm-account').add('ForgetPassword', '/forget-password', '/forget-password').add('ChangePassword', '/change-password/:token', '/change-password').add('Dashboard', '/dasboard', '/dashboard').add('Explore', '/explore', '/explore').add('ModelCreate', '/create', '/model-create').add('MeModelInfo', '/me/model/:id', '/me-model-info').add('MeModelStats', '/me/model/:id/stats', '/me-model-stats').add('MeModelDemo', '/me/model/:id/demo', '/me-model-demo').add('MeModelBatch', '/me/model/:id/batch', '/me-model-batch').add('MeModelAnno', '/me/model/:id/anno', '/me-model-anno').add('MeModelTrain', '/me/model/:id/train', '/me-model-train').add('MeModelSource', '/me/model/:id/source', '/me-model-source').add('ModelInfo', '/model/:id', '/model-info').add('ModelStats', '/model/:id/stats', '/model-stats').add('ModelDemo', '/model/:id/demo', '/model-demo').add('ModelBatch', '/model/:id/batch', '/model-batch').add('ModelAnno', '/model/:id/anno', '/model-anno').add('ModelTrain', '/model/:id/train', '/model-train').add('AdminDashboard', '/admin', '/admin-dashboard').add('AdminUser', '/admin/user', '/admin-user').add('AdminSource', '/admin/source', '/admin-source').add('AdminModel', '/admin/model', '/admin-model');

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "I6wF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);





var MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].ItemGroup;

function ModelSider(_ref) {
  var current = _ref.current,
      id = _ref.id,
      config = _ref.config,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["current", "id", "config"]);

  var handleMenu = function handleMenu(n) {
    return _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute(n.key);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, rest, {
    onClick: handleMenu,
    selectedKeys: [current],
    style: {
      minHeight: '100%'
    },
    mode: "inline"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/model/".concat(id)
  }, "Info"), config.UIStats && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/model/".concat(id, "/stats")
  }, "Stats"), config.UIAnnotation && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItemGroup, {
    key: "g2",
    title: "Build"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/model/".concat(id, "/anno")
  }, "Annotation"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/model/".concat(id, "/train")
  }, "Confirmation")));
}

/* harmony default export */ __webpack_exports__["a"] = (ModelSider);

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SMlj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return withAuthSync; });
/* unused harmony export auth */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("O40h");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_13__);















var login =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(_ref) {
    var token;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = _ref.token;
            js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set('token', token);
            _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute('/dashboard');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function login(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var logout = function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.remove('token'); // to support logging out from all windows

  _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].push('/');
}; // Gets the display name of a JSX component for dev tools

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
};

var withAuthSync = function withAuthSync(WrappedComponent, roleId) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, _Component);

    function _class() {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class).apply(this, arguments));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(WrappedComponent, this.props);
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(ctx) {
          var token, componentProps;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  token = auth(ctx, roleId);
                  ctx.token = token;
                  _context2.t0 = WrappedComponent.getInitialProps;

                  if (!_context2.t0) {
                    _context2.next = 7;
                    break;
                  }

                  _context2.next = 6;
                  return WrappedComponent.getInitialProps(ctx);

                case 6:
                  _context2.t0 = _context2.sent;

                case 7:
                  componentProps = _context2.t0;
                  return _context2.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, componentProps, {
                    token: token
                  }));

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function getInitialProps(_x2) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_9__["Component"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_class, "Layout", WrappedComponent.Layout), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_class, "displayName", "withAuthSync(".concat(getDisplayName(WrappedComponent), ")")), _temp;
};
var auth = function auth(ctx, roleId) {
  var token = ctx.token;
  var user = token && jsonwebtoken__WEBPACK_IMPORTED_MODULE_13___default.a.verify(token, 'SECRET');

  if (roleId !== undefined && user && user.roleId !== roleId) {
    if (ctx.req) {
      ctx.res.writeHead(302, {
        Location: '/login'
      });
      ctx.res.end();
      return;
    }

    _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].push('/login');
  }

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
    return;
  } // We already checked for server. This should only happen on client.


  if (!token) {
    _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].push('/login');
  }

  return token;
};

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SqZg");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VLay");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "U7sd":
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VLay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "djf8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("doui");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eomm");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("1lYi");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ModelSider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("I6wF");
/* harmony import */ var _components_UserLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("y6HG");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("SMlj");
















function ModelTrain(props) {
  if (props.errorCode) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {
    statusCode: props.errorCode
  });
  var selectedKeys = props.route.parsedUrl.pathname;
  var searchInput = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(props.train),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      selected = _useState6[0],
      setSelected = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState7, 2),
      searchText = _useState8[0],
      setSearchText = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState9, 2),
      filteredInfo = _useState10[0],
      setFilteredInfo = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState11, 2),
      triggerExpand = _useState12[0],
      setTriggerExpand = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState13, 2),
      expandSelected = _useState14[0],
      setExpandSelected = _useState14[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    window.addEventListener("resize", handleResize);
    return function () {
      return window.addEventListener("resize", null);
    };
  }, []);

  var handleResize = function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  var createScriptItem = function createScriptItem(pos, data) {
    var label = lodash__WEBPACK_IMPORTED_MODULE_10___default()(props.model.label).find(function (item) {
      return item.name === data.label;
    });

    var element = document.createElement('span');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item';
    element.style.position = 'absolute';
    element.style.top = "".concat(pos.top + scrollTop, "px");
    element.style.left = "".concat(pos.left + scrollLeft, "px");
    element.style.width = "".concat(pos.width, "px");
    element.style.height = "".concat(pos.height, "px");
    element.style.background = data.hasOwnProperty('label') ? label ? label.color + '70' : '#bfbfbf' : '#e6f7ff';
    element.style.zIndex = 5;
    document.body.appendChild(element);
  };

  var createLabelItem = function createLabelItem(pos, data) {
    var label = lodash__WEBPACK_IMPORTED_MODULE_10___default()(props.model.label).find(function (item) {
      return item.name === data.label;
    });

    var element = document.createElement('span');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item';
    element.style.position = 'absolute';
    element.style.color = '#fff';
    element.style.background = label ? label.color : '#595959';
    element.style.padding = '0px 6px';
    element.style.top = "".concat(pos.top + scrollTop - 15, "px");
    element.style.left = "".concat(pos.left + scrollLeft, "px");
    element.innerText = data.label;
    element.style.zIndex = 25;
    document.body.appendChild(element);
  };

  var recursiveDefineLabel = function recursiveDefineLabel(data, node) {
    lodash__WEBPACK_IMPORTED_MODULE_10___default.a.forEach(data, function (item) {
      var pos, range;
      range = document.createRange();
      range.setStart(node, item.startOffset);
      range.setEnd(node, item.endOffset);
      pos = range.getClientRects();

      if (pos.length !== 0) {
        if (item.label) {
          createLabelItem(pos[0], item);

          lodash__WEBPACK_IMPORTED_MODULE_10___default.a.forEach(pos, function (n) {
            createScriptItem(n, item);
          });
        } else {
          lodash__WEBPACK_IMPORTED_MODULE_10___default.a.forEach(pos, function (n) {
            createScriptItem(n, item);
          });
        }

        item.script && recursiveDefineLabel(item.script, node);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (props.model.annotator === 'extractor') {
      var elementsScript = document.querySelectorAll(".annotation-script");

      lodash__WEBPACK_IMPORTED_MODULE_10___default.a.forEach(elementsScript, function (item) {
        var trainIndex = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.findIndex(state, function (record) {
          return record.id == item.dataset.source;
        });

        var dataTrain = state[trainIndex];
        var elementText = item.childNodes[0];
        dataTrain.extractor.forEach(function (item) {
          var pos, range;
          range = document.createRange();
          range.setStart(elementText, item.startOffset);
          range.setEnd(elementText, item.endOffset);
          pos = range.getClientRects();

          if (pos.length !== 0) {
            createLabelItem(pos[0], item);

            lodash__WEBPACK_IMPORTED_MODULE_10___default.a.forEach(pos, function (n) {
              createScriptItem(n, item);
            });
          }
        });
      });
    } else if (props.model.annotator === 'pattern-extractor') {
      var _elementsScript = document.querySelectorAll(".annotation-script");

      lodash__WEBPACK_IMPORTED_MODULE_10___default.a.forEach(_elementsScript, function (item) {
        var trainIndex = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.findIndex(state, function (record) {
          return record.id == item.dataset.source;
        });

        var dataTrain = state[trainIndex];
        var elementText = item.childNodes[0];
        recursiveDefineLabel(dataTrain.patternExtractor, elementText);
      });
    }

    return function () {
      var elementScriptItem = document.querySelectorAll('.annotation-script-item');
      elementScriptItem.forEach(function (n) {
        return document.body.removeChild(n);
      });
    };
  }, [triggerExpand, expandSelected, windowSize, state]);

  var handleRemove = function handleRemove(ids) {
    var handleOk =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default()({
                  method: "DELETE",
                  url: "".concat(props.modelApi, "/train"),
                  headers: {
                    authorization: props.token
                  },
                  data: {
                    ids: lodash__WEBPACK_IMPORTED_MODULE_10___default.a.flattenDeep([ids])
                  }
                });

              case 2:
                response = _context.sent;

                if (response.status === 200) {
                  antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('Training removed successfully.');
                  setState(response.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleOk() {
        return _ref.apply(this, arguments);
      };
    }();

    antd__WEBPACK_IMPORTED_MODULE_4__["Modal"].confirm({
      title: 'Are you sure?',
      content: 'You will not be able to recover this train.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel'
    });
  };

  var expandedRowRender = function expandedRowRender(record) {
    if (props.model.annotator === 'classifier') {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"], {
        title: "Result Annotation",
        bordered: true,
        border: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 3,
        label: "Created date"
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(record.createdAt).fromNow()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 3,
        label: "Status"
      }, record.confirm ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        color: "green",
        text: "Verified"
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        color: "warning",
        text: "Unverified"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 3,
        label: "Tags"
      }, record[props.model.annotator].map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Tag"], {
          key: key,
          className: "ant-custom",
          color: "#108ee9",
          style: {
            marginBottom: 8
          }
        }, item);
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 3,
        label: "Text"
      }, record.source)));
    }

    if (props.model.annotator === 'question-answer') {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"], {
        title: "Result Annotation",
        bordered: true,
        border: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 3,
        label: "Created date"
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(record.createdAt).fromNow()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 3,
        label: "Status"
      }, record.confirm ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        color: "green",
        text: "Verified"
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        status: "warning",
        text: "Unverified"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 2,
        label: "User"
      }, "".concat(record.user.firstname, " ").concat(record.user.lastname)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 1,
        label: "Email"
      }, record.user.email), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 3,
        label: "Question"
      }, record.questionAnswer.question), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
        span: 3,
        label: "Answer"
      }, record.questionAnswer.answer)));
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"], {
      title: "Result Annotation",
      bordered: true,
      border: true
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Created date"
    }, moment__WEBPACK_IMPORTED_MODULE_9___default()(record.createdAt).fromNow()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Status"
    }, record.confirm ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
      color: "green",
      text: "Verified"
    }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
      color: "warning",
      text: "Unverified"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Text"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Paragraph, {
      className: "annotation-script",
      "data-source": record.id
    }, record.source))));
  };

  var getColumnSearchProps = function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: function filterDropdown(_ref2) {
        var setSelectedKeys = _ref2.setSelectedKeys,
            selectedKeys = _ref2.selectedKeys,
            confirm = _ref2.confirm,
            clearFilters = _ref2.clearFilters;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            padding: 8
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          ref: searchInput,
          placeholder: "Search ".concat(dataIndex),
          value: selectedKeys[0],
          onChange: function onChange(e) {
            return setSelectedKeys(e.target.value ? [e.target.value] : []);
          },
          onPressEnter: function onPressEnter() {
            return handleSearch(selectedKeys, confirm);
          },
          style: {
            width: 188,
            marginBottom: 8,
            display: 'block'
          }
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "primary",
          onClick: function onClick() {
            return handleSearch(selectedKeys, confirm);
          },
          icon: "search",
          size: "small",
          style: {
            width: 90,
            marginRight: 8
          }
        }, "Search"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: function onClick() {
            return handleReset(clearFilters);
          },
          size: "small",
          style: {
            width: 90
          }
        }, "Reset"));
      },
      filterIcon: function filterIcon(filtered) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
          type: "search",
          style: {
            color: filtered ? '#1890ff' : undefined
          }
        });
      },
      onFilter: function onFilter(value, record) {
        return record[dataIndex].toString().toLowerCase().includes(value.toLowerCase());
      },
      onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
        if (visible) {
          setTimeout(function () {
            return searchInput.current.select();
          });
        }
      },
      render: function render(text) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Paragraph, {
          style: {
            minWidth: 0
          },
          ellipsis: {
            rows: 3
          }
        }, text);
      }
    };
  };

  var handleSearch = function handleSearch(selectedKeys, confirm) {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  var handleReset = function handleReset(clearFilters) {
    clearFilters();
    setSearchText('');
  };

  var columns = [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    key: 'text',
    title: 'Source',
    dataIndex: 'source'
  }, getColumnSearchProps('source')), {
    title: 'Status',
    dataIndex: 'confirm',
    width: 200,
    sorter: function sorter(a, b) {
      return a.confirm - b.confirm;
    },
    filters: [{
      text: 'Verified',
      value: true
    }, {
      text: 'Unverified',
      value: false
    }],
    filteredValue: filteredInfo.confirm || null,
    onFilter: function onFilter(value, record) {
      return record.confirm === value;
    },
    render: function render(text, record) {
      return text ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        status: "success",
        text: "Verified"
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        status: "warning",
        text: "Unverified"
      });
    }
  }, {
    key: 'operation',
    width: 200,
    render: function render(text, record) {
      var menu = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], null, !record.confirm && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return handleRemove(record.id);
        }
      }, "Remove")));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
        overlay: menu,
        disabled: record.confirm
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], null, "Action ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "down"
      })));
    }
  }];
  var columnsQA = [{
    key: 'question',
    title: 'Question',
    dataIndex: 'questionAnswer.question',
    filterDropdown: function filterDropdown(_ref3) {
      var setSelectedKeys = _ref3.setSelectedKeys,
          selectedKeys = _ref3.selectedKeys,
          confirm = _ref3.confirm,
          clearFilters = _ref3.clearFilters;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          padding: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        ref: searchInput,
        placeholder: "Search Question",
        value: selectedKeys[0],
        onChange: function onChange(e) {
          return setSelectedKeys(e.target.value ? [e.target.value] : []);
        },
        onPressEnter: function onPressEnter() {
          return handleSearch(selectedKeys, confirm);
        },
        style: {
          width: 188,
          marginBottom: 8,
          display: 'block'
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "primary",
        onClick: function onClick() {
          return handleSearch(selectedKeys, confirm);
        },
        icon: "search",
        size: "small",
        style: {
          width: 90,
          marginRight: 8
        }
      }, "Search"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: function onClick() {
          return handleReset(clearFilters);
        },
        size: "small",
        style: {
          width: 90
        }
      }, "Reset"));
    },
    filterIcon: function filterIcon(filtered) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "search",
        style: {
          color: filtered ? '#1890ff' : undefined
        }
      });
    },
    onFilter: function onFilter(value, record) {
      return record['questionAnswer']['question'].toString().toLowerCase().includes(value.toLowerCase());
    },
    onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
      if (visible) {
        setTimeout(function () {
          return searchInput.current.select();
        });
      }
    },
    render: function render(text, record) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Paragraph, {
        ellipsis: {
          rows: 3
        }
      }, text);
    }
  }, {
    title: 'Status',
    dataIndex: 'confirm',
    width: 200,
    align: 'center',
    sorter: function sorter(a, b) {
      return a.confirm - b.confirm;
    },
    render: function render(text, record) {
      return text ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        status: "success",
        text: "Verified"
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        status: "warning",
        text: "Unverified"
      });
    }
  }, {
    key: 'operation',
    width: 200,
    align: 'right',
    render: function render(text, record) {
      var menu = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], null, !record.confirm && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return handleRemove(record.id);
        }
      }, "Remove")));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
        overlay: menu
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], null, "Action ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "down"
      })));
    }
  }];
  var tableTrain = {
    rowKey: "id",
    style: {
      overflowWrap: 'anywhere'
    },
    columns: props.model.annotator === 'question-answer' ? columnsQA : columns,
    dataSource: state,
    rowSelection: {
      selectedRowKeys: selected,
      onChange: function onChange(selectedRowKeys) {
        return setSelected(selectedRowKeys);
      },
      getCheckboxProps: function getCheckboxProps(record) {
        return {
          disabled: record.confirm,
          name: record.name
        };
      }
    },
    expandedRowRender: expandedRowRender,
    onExpand: function onExpand(expanded, record) {
      setTriggerExpand(expanded);
      setExpandSelected(record);
    }
  };

  var ComponentCardExtra = function ComponentCardExtra() {
    var menu = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      key: "2"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
      onClick: function onClick() {
        return handleRemove(selected);
      }
    }, "Remove")));
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        marginRight: 16
      }
    }, "Selected: "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
      overlay: menu
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], null, "Action ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      type: "down"
    }))));
  };

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UserLayout__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], props, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    type: "flex",
    gutter: 16
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "Model Stats - Sistem Anotasi Named Entity")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ModelSider__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    id: props.model.id,
    config: props.model.config,
    current: selectedKeys
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 18
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    title: "Training Data",
    extra: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ComponentCardExtra, null),
    style: {
      minHeight: '100%'
    }
  }, state.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Table"], tableTrain) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_4__["Empty"].PRESENTED_IMAGE_SIMPLE
  })))));
}

ModelTrain.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref4) {
    var res, apiUrl, token, query, id, modelApi, model, train;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _ref4.res, apiUrl = _ref4.apiUrl, token = _ref4.token, query = _ref4.query;
            id = query.id;
            modelApi = "".concat(apiUrl, "/model/").concat(id);
            _context2.prev = 3;
            _context2.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_8___default()({
              method: "GET",
              url: modelApi,
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 6:
            model = _context2.sent;
            _context2.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_8___default()({
              method: "GET",
              url: "".concat(modelApi, "/train/me"),
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 9:
            train = _context2.sent;
            return _context2.abrupt("return", {
              model: model,
              train: train,
              modelApi: modelApi
            });

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", {
              errorCode: _context2.t0.response.status
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 13]]);
  }));

  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_14__[/* withAuthSync */ "c"])(ModelTrain));

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qNsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y6HG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SMlj");




var Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Footer;
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var route = _ref.route,
      children = _ref.children,
      auth = _ref.auth;
  var selectedKeys = route.parsedUrl.pathname;

  var handleMenu = function handleMenu(n) {
    return _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute(n.key);
  };

  var DropdownComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    onClick: _utils_auth__WEBPACK_IMPORTED_MODULE_3__[/* logout */ "b"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "logout"
  }), " Logout"));
  var HeaderComp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    className: "ant-custom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    type: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 14
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "ant-custom",
    onClick: handleMenu,
    selectedKeys: [selectedKeys],
    mode: "horizontal",
    style: {
      lineHeight: '64px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "/dashboard",
    className: "ant-custom"
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "/explore",
    className: "ant-custom"
  }, "Explore"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-100 d-flex align-items-center justify-content-flex-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    overlay: DropdownComponent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, {
    style: {
      cursor: 'pointer'
    }
  }, auth.email, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "down"
  })))))));

  var FooterComponent = function FooterComponent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
      style: {
        textAlign: 'center'
      }
    }, "Aplikasi Anotasi Data Teks \xA92019");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      minHeight: '100%'
    }
  }, HeaderComp, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "ant-custom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-custom"
  }, children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterComponent, null));
});

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });