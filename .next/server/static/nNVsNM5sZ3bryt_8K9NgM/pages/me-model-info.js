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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
  500: 'Internal Server Error',
  501: 'Not Implemented'
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pvUb");


/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4jX/":
/***/ (function(module, exports) {

module.exports = require("react-color");

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

/***/ "AzOL":
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
  var dataSource = _ref.dataSource,
      current = _ref.current,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["dataSource", "current"]);

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
    key: "/me/model/".concat(dataSource.id)
  }, "Info"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/me/model/".concat(dataSource.id, "/stats")
  }, "Stats"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItemGroup, {
    key: "g2",
    title: "Build"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/me/model/".concat(dataSource.id, "/source")
  }, "Source"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/me/model/".concat(dataSource.id, "/anno")
  }, "Annotation"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/me/model/".concat(dataSource.id, "/train")
  }, "Confirmation")));
}

/* harmony default export */ __webpack_exports__["a"] = (ModelSider);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

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

/***/ "X1wy":
/***/ (function(module, exports) {

module.exports = require("xlsx");

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

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

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

/***/ "lYhb":
/***/ (function(module, exports) {

module.exports = require("file-saver");

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

/***/ "pvUb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfwq");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("doui");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("eomm");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("X1wy");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_UserLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("y6HG");
/* harmony import */ var _components_MeModelSider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("AzOL");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("SMlj");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("4jX/");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("lYhb");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);




















function handleInputLabelRef(ref, cb) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target) && !event.target.title) {
      cb({
        status: false
      });
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

function ModelView(props) {
  var selectedKeys = props.route.parsedUrl.pathname;

  if (props.errorCode > 200) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_8___default.a, {
      statusCode: props.errorCode
    });
  }

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_11__["useRef"])(null);
  var labelWrapper = Object(react__WEBPACK_IMPORTED_MODULE_11__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])("#0088ff"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState, 2),
      colorPicker = _useState2[0],
      setColorPicker = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(props.model),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState3, 2),
      model = _useState4[0],
      setModel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState5, 2),
      spinning = _useState6[0],
      setSpinning = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(null),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState7, 2),
      inputValue = _useState8[0],
      setInputValue = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState9, 2),
      inputVisible = _useState10[0],
      setInputVisible = _useState10[1];

  handleInputLabelRef(labelWrapper, function (_ref) {
    var status = _ref.status;

    if (status === false && inputValue !== null) {
      handleAddLabel();
      setInputVisible(false);
    } else {
      setInputVisible(false);
    }
  });

  var handleTabLabel = function handleTabLabel(e) {
    var keyCode = e.which || e.keyCode;

    if (keyCode === 9) {
      e.preventDefault();

      if (!inputValue) {
        setInputVisible(false);
        return;
      }

      handleAddLabel();
    }

    if (keyCode === 27) {
      setInputValue(null);
      setInputVisible(false);
    }
  };

  var handleInputVisible =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setInputVisible(true);

            case 2:
              _context.next = 4;
              return inputRef.current.focus();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleInputVisible() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleModelRemove = function handleModelRemove() {
    var handleOk =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default()({
                  method: 'DELETE',
                  url: props.modelApi,
                  headers: {
                    authorization: props.token
                  }
                });

              case 2:
                response = _context2.sent;

                if (response.status === 200) {
                  _routes__WEBPACK_IMPORTED_MODULE_12__["Router"].pushRoute('/dashboard');
                  antd__WEBPACK_IMPORTED_MODULE_6__["message"].success("Modal deleted successfully.");
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function handleOk() {
        return _ref3.apply(this, arguments);
      };
    }();

    antd__WEBPACK_IMPORTED_MODULE_6__["Modal"].confirm({
      title: 'Are you sure?',
      content: "You will not be able to recover this model.",
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel'
    });
  };

  var handleModelUpdate =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(data) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
                setSpinning(true);
                axios__WEBPACK_IMPORTED_MODULE_9___default()({
                  method: 'PATCH',
                  url: props.modelApi,
                  headers: {
                    authorization: props.token
                  },
                  data: data
                }).then(function (res) {
                  return res.status === 200 && resolve(res.data);
                })["catch"](function (err) {
                  return console.log(err);
                })["finally"](function () {
                  setSpinning(false);
                });
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleModelUpdate(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleEditName = function handleEditName(text) {
    handleModelUpdate({
      name: text
    }).then(function (data) {
      return setModel(function (state) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, data[0], {
          config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state.config, data[1])
        });
      });
    });
  };

  var handleEditDescription = function handleEditDescription(text) {
    handleModelUpdate({
      desc: text
    }).then(function (data) {
      return setModel(function (state) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, data[0], {
          config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state.config, data[1])
        });
      });
    });
  };

  var handleAddLabel = function handleAddLabel() {
    handleModelUpdate({
      label: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(model.label), [{
        name: inputValue,
        color: colorPicker
      }])
    }).then(function (data) {
      setModel(function (state) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, data[0], {
          config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state.config, data[1])
        });
      });
      setInputValue(null);
      setInputVisible(false);
    });
  };

  var handleRadioPrivate = function handleRadioPrivate(e) {
    var handle = function handle() {
      return handleModelUpdate({
        isPrivate: e.target.value
      }).then(function (data) {
        return setModel(function (state) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, data[0], {
            config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state.config, data[1])
          });
        });
      });
    };

    if (e.target.value === true) handle();else antd__WEBPACK_IMPORTED_MODULE_6__["Modal"].confirm({
      title: 'Are you sure?',
      content: 'You will share your model to public.',
      okText: 'Yes',
      onOk: handle,
      cancelText: 'Cancel'
    });
  };

  var handleRadioMenuStats = function handleRadioMenuStats(e) {
    var handle = function handle() {
      return handleModelUpdate({
        UIStats: e.target.value
      }).then(function (data) {
        return setModel(function (state) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, data[0], {
            config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state.config, data[1])
          });
        });
      });
    };

    if (e.target.value === false) handle();else antd__WEBPACK_IMPORTED_MODULE_6__["Modal"].confirm({
      title: 'Are you sure?',
      content: 'You will other can see stats your model.',
      okText: 'Yes',
      onOk: handle,
      cancelText: 'Cancel'
    });
  };

  var handleRadioAnnotation = function handleRadioAnnotation(e) {
    var handle = function handle() {
      return handleModelUpdate({
        UIAnnotation: e.target.value
      }).then(function (data) {
        return setModel(function (state) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, data[0], {
            config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state.config, data[1])
          });
        });
      });
    };

    if (e.target.value === false) handle();else antd__WEBPACK_IMPORTED_MODULE_6__["Modal"].confirm({
      title: 'Are you sure?',
      content: 'You will users can make annotation in your model.',
      okText: 'Yes',
      onOk: handle,
      cancelText: 'Cancel'
    });
  };

  var handleRemoveLabel = function handleRemoveLabel(key) {
    var value = model.label.filter(function (item, i) {
      return i !== key;
    });

    var handle = function handle() {
      return handleModelUpdate({
        label: value
      }).then(function (data) {
        return setModel(function (state) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, data[0], {
            config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state.config, data[1])
          });
        });
      });
    };

    antd__WEBPACK_IMPORTED_MODULE_6__["Modal"].confirm({
      title: 'Are you sure?',
      content: 'You will remove a label from your model.',
      okText: 'Yes',
      onOk: handle,
      cancelText: 'Cancel'
    });
  };

  var beforeUpload = function beforeUpload(file) {
    if (file.type !== 'image/png') {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].error('You can only upload PNG file!');
      return false;
    }

    if (file.size / 1024 / 1024 > 10) {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].error('Image must smaller than 10MB!');
      return false;
    }

    return true;
  };

  var uploudAvatar = {
    accept: 'image/png',
    name: 'file',
    action: "/source",
    showUploadList: false,
    beforeUpload: beforeUpload,
    onChange: function onChange(info) {
      if (info.file.status !== 'uploading') {}

      if (info.file.status === 'done') {
        setSpinning(true);
        var formData = new FormData();
        formData.append('avatar', info.file.originFileObj);
        axios__WEBPACK_IMPORTED_MODULE_9___default()({
          method: 'PATCH',
          url: "".concat(props.apiUrl, "/avatar/").concat(model.id),
          data: formData,
          headers: {
            authorization: props.token
          }
        }).then(function (res) {
          if (res.status === 200) {
            antd__WEBPACK_IMPORTED_MODULE_6__["message"].success("Avatar changed successfully.");
          }
        })["finally"](function () {
          setSpinning(false);
          window.location.reload();
        });
      } else if (info.file.status === 'error') {
        antd__WEBPACK_IMPORTED_MODULE_6__["message"].error("".concat(info.file.name, " file upload failed."));
      }
    }
  };

  var getTrain = function getTrain() {
    return axios__WEBPACK_IMPORTED_MODULE_9___default()({
      method: "GET",
      url: "".concat(props.modelApi, "/train/export"),
      headers: {
        authorization: props.token
      }
    }).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      return console.log(err.response.status);
    });
  };

  var generateCSV = function generateCSV(data) {
    var buffered = new ArrayBuffer(data.length);
    var view = new Uint8Array(buffered);

    for (var i = 0; i != data.length; ++i) {
      view[i] = data.charCodeAt(i) & 0xFF;
    }

    return buffered;
  };

  var handleExportCSV =
  /*#__PURE__*/
  function () {
    var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {
      var trainings, worksheet, csv;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getTrain();

            case 2:
              trainings = _context4.sent;
              worksheet = xlsx__WEBPACK_IMPORTED_MODULE_10___default.a.utils.json_to_sheet(trainings);
              csv = xlsx__WEBPACK_IMPORTED_MODULE_10___default.a.utils.sheet_to_csv(worksheet);
              Object(file_saver__WEBPACK_IMPORTED_MODULE_17__["saveAs"])(new Blob([generateCSV(csv)], {
                type: "application/octet-stream"
              }), "".concat(props.model.name, ".csv"));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleExportCSV() {
      return _ref5.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_UserLayout__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], props, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Spin"], {
    spinning: spinning
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    type: "flex",
    gutter: 32
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("title", null, "My Model Info - Sistem Anotasi Named Entity")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 24,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_MeModelSider__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    current: selectedKeys,
    dataSource: model
  })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 24,
    md: 18
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    className: "ant-custom",
    actions: [react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: "btn-danger",
      onClick: handleModelRemove
    }, "Delete Model")]
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    bordered: false
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end'
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    size: 70,
    src: model.avatar.path
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Upload"], uploudAvatar, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    type: "edit"
  })))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 20
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    bordered: false
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Title, {
    level: 4,
    editable: {
      onChange: handleEditName
    }
  }, model.name), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Paragraph, {
    style: {
      textAlign: 'justify'
    },
    editable: {
      onChange: handleEditDescription
    },
    ellipsis: {
      rows: 4,
      expandable: true
    }
  }, model.desc)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 24,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group, {
    value: model.isPrivate,
    onChange: handleRadioPrivate,
    buttonStyle: "solid"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: true
  }, "Private"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: false
  }, "Public"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 24,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Annotator"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group, {
    value: model.annotator,
    buttonStyle: "solid"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: "classifier"
  }, "Classifier"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: "extractor"
  }, "Extractor"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: "pattern-extractor"
  }, "Pattern Extractor"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 24,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Label"), model.label.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
      key: key,
      className: "ant-custom",
      color: item.color,
      style: {
        marginBottom: 8
      },
      onClose: function onClose() {
        return handleRemoveLabel(key);
      },
      closable: true
    }, item.name);
  }), inputVisible && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      display: 'inline-block'
    },
    ref: labelWrapper
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    ref: inputRef,
    style: {
      width: 120,
      outlineColor: colorPicker
    },
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    onPressEnter: handleAddLabel,
    onKeyDown: handleTabLabel,
    suffix: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
      placement: "bottomRight",
      content: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_16__["CirclePicker"], {
        color: colorPicker,
        onChange: function onChange(color) {
          setColorPicker(color.hex);
          inputRef.current.focus();
        }
      }),
      trigger: "click"
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      style: {
        width: 15,
        height: 15,
        background: colorPicker
      }
    }))
  })) //  <Input 
  //   ref={inputRef} 
  //   style={{width: 90}} 
  //   type="text" 
  //   value={inputValue} 
  //   onChange={e => setInputValue(e.target.value)} 
  //   onPressEnter={handleAddLabel}/>
  , !inputVisible && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
    className: "ant-custom",
    style: {
      background: '#fff',
      borderStyle: 'dashed',
      cursor: 'pointer'
    },
    onClick: handleInputVisible
  }, "New Label")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, {
    style: {
      marginBottom: 16
    },
    strong: true
  }, "UI Control"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 12,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Menu Stats"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group, {
    value: model.config.UIStats,
    onChange: handleRadioMenuStats,
    buttonStyle: "solid"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: true
  }, "Show"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: false
  }, "Hide"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    md: 12,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Menu Annotation"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group, {
    value: model.config.UIAnnotation,
    onChange: handleRadioAnnotation,
    buttonStyle: "solid"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: true
  }, "Show"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    value: false
  }, "Hide"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, {
    strong: true
  }, "Export Train Data")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, {
    style: {
      display: 'block',
      marginBottom: 8
    }
  }, "File Download:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    style: {
      width: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      marginRight: 16
    },
    type: "primary",
    icon: "download",
    onClick: handleExportCSV
  }, "Download CSV"))))))))))));
}

ModelView.getInitialProps =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(_ref6) {
    var apiUrl, token, query, id, modelApi, model;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            apiUrl = _ref6.apiUrl, token = _ref6.token, query = _ref6.query;
            id = query.id;
            modelApi = "".concat(apiUrl, "/model/").concat(id);
            _context5.prev = 3;
            _context5.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_9___default()({
              method: "GET",
              url: modelApi,
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 6:
            model = _context5.sent;
            return _context5.abrupt("return", {
              modelApi: modelApi,
              model: model
            });

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](3);
            return _context5.abrupt("return", {
              errorCode: _context5.t0.response.status
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 10]]);
  }));

  return function (_x2) {
    return _ref7.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_15__[/* withAuthSync */ "c"])(ModelView));

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

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

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