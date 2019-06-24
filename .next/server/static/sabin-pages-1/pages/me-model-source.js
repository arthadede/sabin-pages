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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__("cDcd"));

var head_1 = __importDefault(__webpack_require__("U7sd"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  500: 'Internal Server Error',
  501: 'Not Implemented'
};

var Error =
/*#__PURE__*/
function (_react_1$default$Comp) {
  (0, _inherits2.default)(Error, _react_1$default$Comp);

  function Error() {
    (0, _classCallCheck2.default)(this, Error);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Error).apply(this, arguments));
  }

  (0, _createClass2.default)(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = statusCodes[statusCode] || 'An unexpected error has occurred';
      return react_1.default.createElement("div", {
        style: styles.error
      }, react_1.default.createElement(head_1.default, null, react_1.default.createElement("title", null, statusCode, ": ", title)), react_1.default.createElement("div", null, react_1.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? react_1.default.createElement("h1", {
        style: styles.h1
      }, statusCode) : null, react_1.default.createElement("div", {
        style: styles.desc
      }, react_1.default.createElement("h2", {
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
}(react_1.default.Component);

Error.displayName = 'ErrorPage';
exports.default = Error;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("exZo");


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

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

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
    key: "/me/model/".concat(dataSource.id, "/anno")
  }, "Annotation"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/me/model/".concat(dataSource.id, "/train")
  }, "Training"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "/me/model/".concat(dataSource.id, "/source")
  }, "Source")));
}

/* harmony default export */ __webpack_exports__["a"] = (ModelSider);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

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

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_class, _Component);

    function _class() {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, _class);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_class).apply(this, arguments));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_class, [{
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

  if (roleId !== undefined && user.roleId !== roleId) {
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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
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

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
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

/***/ "exZo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__("eomm");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./components/MeModelSider.js
var MeModelSider = __webpack_require__("AzOL");

// EXTERNAL MODULE: ./components/UserLayout.js
var UserLayout = __webpack_require__("y6HG");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Cg2A");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: external "xlsx"
var external_xlsx_ = __webpack_require__("X1wy");
var external_xlsx_default = /*#__PURE__*/__webpack_require__.n(external_xlsx_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./components/AddModelSourceModal.js











var TextArea = external_antd_["Input"].TextArea;

function AddModelSourceModal(props) {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      currentStep = _useState2[0],
      setCurrentStep = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      method = _useState4[0],
      setMethod = _useState4[1];

  var _useState5 = Object(external_react_["useState"])([]),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      resultData = _useState6[0],
      setResultData = _useState6[1];

  var handleNext = function handleNext() {
    if (currentStep < steps.length) {
      setCurrentStep(function (state) {
        return state + 1;
      });
    }
  };

  var handleOnClose =
  /*#__PURE__*/
  function () {
    var _ref = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.onCancel();

            case 2:
              setCurrentStep(0);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOnClose() {
      return _ref.apply(this, arguments);
    };
  }();
  /* COMPONENTS */


  var TransferSource = function TransferSource() {
    var _useState7 = Object(external_react_["useState"])([]),
        _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
        targetKeys = _useState8[0],
        setTargetKeys = _useState8[1];

    var sources = external_lodash_default.a.differenceWith(props.resources, props.sources, external_lodash_default.a.isEqual);

    var handleConfirm = function handleConfirm() {
      setResultData(props.resources.filter(function (item) {
        return external_lodash_default.a.includes(targetKeys, item.key);
      }));
      handleNext();
    };

    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Transfer"], {
      rowKey: function rowKey(record) {
        return record.id;
      },
      dataSource: sources,
      targetKeys: targetKeys,
      onChange: function onChange(val) {
        return setTargetKeys(val);
      },
      titles: ['Sources', 'Selected'],
      listStyle: {
        width: 400,
        height: 360
      },
      style: {
        marginBottom: 16
      },
      render: function render(item) {
        return item.text;
      }
    }), external_react_default.a.createElement("div", {
      className: "d-flex justify-content-flex-end"
    }, external_react_default.a.createElement(external_antd_["Button"], {
      type: "primary",
      onClick: handleConfirm,
      disabled: targetKeys.length === 0
    }, "Confirm")));
  };

  var UploudSource = function UploudSource() {
    var _useState9 = Object(external_react_["useState"])([]),
        _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
        state = _useState10[0],
        setState = _useState10[1];

    var _useState11 = Object(external_react_["useState"])(0),
        _useState12 = Object(slicedToArray["a" /* default */])(_useState11, 2),
        countFiles = _useState12[0],
        setCountFiles = _useState12[1];

    var getRecord = function getRecord() {
      var dataArr = [];

      external_lodash_default.a.forEach(state, function (item) {
        dataArr.push.apply(dataArr, Object(toConsumableArray["a" /* default */])(item.sheets));
      });

      var result = mergeAllSheet(dataArr);
      return result;
    };

    var readerXLSX = function readerXLSX(file) {
      return new promise_default.a(function (resolve, reject) {
        var reader = new FileReader();

        reader.onload = function (e) {
          var data = new Uint8Array(e.target.result);
          var result = external_xlsx_default.a.read(data, {
            type: 'array'
          });
          resolve(result);
        };

        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    };

    var getSheet = function getSheet(_ref2) {
      var Sheets = _ref2.Sheets;
      var result = [];

      external_lodash_default.a.forIn(Sheets, function (sheet) {
        var sheetTransform = external_lodash_default.a.transform(sheet, function (result, value, key) {
          if (key.indexOf('!') === -1) {
            var keyCol = key.match(/[A-Z]+/g)[0];
            if (!result.hasOwnProperty(keyCol)) result[keyCol] = [];
            result[keyCol].push(value['w']);
            return result;
          }
        }, {});

        result.push(sheetTransform);
      });

      return result;
    };

    var mergeAllSheet = function mergeAllSheet(sheets) {
      var result = {};

      external_lodash_default.a.forEach(sheets, function (sheet) {
        external_lodash_default.a.forIn(sheet, function (value, key) {
          var _ref3;

          (_ref3 = result[key] || (result[key] = [])).push.apply(_ref3, Object(toConsumableArray["a" /* default */])(value));
        });
      });

      return result;
    };

    var handleUploud =
    /*#__PURE__*/
    function () {
      var _ref4 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(info) {
        var bufferData, sheets;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = info.file.status;
                _context2.next = _context2.t0 === 'uploading' ? 3 : _context2.t0 === 'done' ? 4 : _context2.t0 === 'error' ? 17 : 18;
                break;

              case 3:
                return _context2.abrupt("break", 18);

              case 4:
                _context2.prev = 4;
                _context2.next = 7;
                return readerXLSX(info.file.originFileObj);

              case 7:
                bufferData = _context2.sent;
                sheets = getSheet(bufferData);
                setState(function (state) {
                  return [].concat(Object(toConsumableArray["a" /* default */])(state), [{
                    name: info.file.name,
                    sheets: sheets
                  }]);
                });
                setCountFiles(function (state) {
                  return state += 1;
                });
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t1 = _context2["catch"](4);
                console.log("ERROR");

              case 16:
                return _context2.abrupt("break", 18);

              case 17:
                return _context2.abrupt("break", 18);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 13]]);
      }));

      return function handleUploud(_x) {
        return _ref4.apply(this, arguments);
      };
    }();

    var handleRemove =
    /*#__PURE__*/
    function () {
      var _ref5 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(file) {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                setState(state.filter(function (sheet) {
                  return sheet.name !== file.name;
                }));
                setCountFiles(function (state) {
                  return state -= 1;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function handleRemove(_x2) {
        return _ref5.apply(this, arguments);
      };
    }();

    var handleConfirm = function handleConfirm() {
      var data = [];

      external_lodash_default.a.forIn(getRecord(), function (value, key) {
        var newData = value.map(function (text) {
          return {
            id: external_lodash_default.a.uniqueId(),
            text: text,
            new: true
          };
        });
        data.push.apply(data, Object(toConsumableArray["a" /* default */])(newData));
      });

      setResultData(data);
      handleNext();
    };

    var beforeUpload = function beforeUpload(file) {
      var fileType = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

      if (!fileType) {
        external_antd_["message"].error('We only support XLS, or XLSX spreadsheet.');
      }

      var fileSize = file.size / 1024 / 1024 < 500;

      if (!fileSize) {
        external_antd_["message"].error('Please upload a file smaller than 500 MB.');
      }

      return fileSize;
    };

    var propsDagger = {
      accept: '.xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      beforeUpload: beforeUpload,
      onChange: handleUploud,
      onRemove: handleRemove
    };
    return external_react_default.a.createElement(external_antd_["Row"], null, external_react_default.a.createElement(external_antd_["Card"], {
      bordered: false
    }, external_react_default.a.createElement(external_antd_["Row"], {
      gutter: 16,
      type: "flex"
    }, external_react_default.a.createElement(external_antd_["Col"], {
      md: 24
    }, external_react_default.a.createElement(external_antd_["Upload"], propsDagger, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
      type: "upload"
    }), " Upload")), countFiles <= 0 && external_react_default.a.createElement(external_antd_["Empty"], {
      image: external_antd_["Empty"].PRESENTED_IMAGE_SIMPLE
    })))), external_react_default.a.createElement("div", {
      className: "d-flex justify-content-flex-end"
    }, external_react_default.a.createElement(external_antd_["Button"], {
      type: "primary",
      onClick: handleConfirm,
      disabled: state.length === 0
    }, "Confirm")));
  };

  var ManualTextInput = function ManualTextInput() {
    var _useState13 = Object(external_react_["useState"])([]),
        _useState14 = Object(slicedToArray["a" /* default */])(_useState13, 2),
        state = _useState14[0],
        setState = _useState14[1];

    var _useState15 = Object(external_react_["useState"])(null),
        _useState16 = Object(slicedToArray["a" /* default */])(_useState15, 2),
        input = _useState16[0],
        setInput = _useState16[1];

    var handlePushSource =
    /*#__PURE__*/
    function () {
      var _ref6 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(text) {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!external_lodash_default.a.isEmpty(text)) {
                  _context4.next = 3;
                  break;
                }

                external_antd_["message"].error("This field is empty.");
                return _context4.abrupt("return");

              case 3:
                setState(function (state) {
                  return [].concat(Object(toConsumableArray["a" /* default */])(state), [{
                    id: now_default()(),
                    text: text,
                    new: true
                  }]);
                });
                setInput(null);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function handlePushSource(_x3) {
        return _ref6.apply(this, arguments);
      };
    }();

    var handleRemoveSource = function handleRemoveSource(idx) {
      setState(function (state) {
        return state.filter(function (item, i) {
          return i !== idx;
        });
      });
    };

    var handleEditSource =
    /*#__PURE__*/
    function () {
      var _ref7 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(idx) {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return setInput(state[idx].text);

              case 2:
                handleRemoveSource(idx);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function handleEditSource(_x4) {
        return _ref7.apply(this, arguments);
      };
    }();

    var handleConfirm =
    /*#__PURE__*/
    function () {
      var _ref8 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6() {
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                setResultData(state);
                handleNext();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function handleConfirm() {
        return _ref8.apply(this, arguments);
      };
    }();

    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Row"], {
      gutter: 16,
      type: "flex"
    }, external_react_default.a.createElement(external_antd_["Col"], {
      md: 16
    }, external_react_default.a.createElement(TextArea, {
      rows: 15,
      value: input,
      onChange: function onChange(e) {
        return setInput(e.target.value);
      },
      style: {
        marginBottom: 16
      },
      autosize: false,
      onPressEnter: function onPressEnter(e) {
        return handlePushSource(e.target.value);
      }
    }), external_react_default.a.createElement("div", {
      className: "d-flex justify-content-flex-end"
    }, external_react_default.a.createElement(external_antd_["Button"], {
      onClick: function onClick() {
        return handlePushSource(input);
      }
    }, "Push"))), external_react_default.a.createElement(external_antd_["Col"], {
      md: 8
    }, external_react_default.a.createElement(external_antd_["List"], {
      bordered: true,
      style: {
        height: 325,
        marginBottom: 16,
        overflow: 'auto'
      },
      className: "pl-0",
      itemLayout: "vertical",
      dataSource: state,
      header: external_react_default.a.createElement(external_antd_["Typography"].Text, null, state.length, " Items"),
      renderItem: function renderItem(item, i) {
        return external_react_default.a.createElement(external_antd_["List"].Item, {
          actions: [external_react_default.a.createElement(external_antd_["Button"], {
            size: "small",
            onClick: function onClick() {
              return handleEditSource(i);
            }
          }, "Change"), external_react_default.a.createElement(external_antd_["Button"], {
            type: "danger",
            size: "small",
            onClick: function onClick() {
              return handleRemoveSource(i);
            }
          }, "Pop")]
        }, external_react_default.a.createElement(external_antd_["Typography"].Paragraph, {
          ellipsis: {
            rows: 3
          }
        }, item.text));
      }
    }), external_react_default.a.createElement("div", {
      className: "d-flex justify-content-flex-end"
    }, external_react_default.a.createElement(external_antd_["Button"], {
      type: "primary",
      onClick: handleConfirm,
      disabled: state.length === 0
    }, "Confirm")))));
  };

  var ConfirmSource = function ConfirmSource() {
    var handleRemove = function handleRemove(key) {
      setResultData(function (state) {
        return state.filter(function (item) {
          return item.id !== key;
        });
      });
    };

    var columns = [{
      title: 'Text',
      key: 'text',
      render: function render(text, record) {
        return external_react_default.a.createElement(external_antd_["Typography"].Paragraph, {
          ellipsis: {
            rows: 3
          }
        }, record.text);
      }
    }, {
      key: 'operation',
      width: 120,
      align: 'center',
      render: function render(text, record) {
        return external_react_default.a.createElement(external_antd_["Button"], {
          size: "small",
          onClick: function onClick() {
            return handleRemove(record.id);
          }
        }, "Remove");
      }
    }];

    var handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref9 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7() {
        var sources, input, _response, result, _result, response;

        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                sources = props.sources.map(function (item) {
                  return item.id;
                });

                if (!resultData[0].new) {
                  _context7.next = 9;
                  break;
                }

                input = resultData.map(function (item) {
                  return item.text;
                });
                _context7.next = 5;
                return external_axios_default()({
                  method: "POST",
                  url: "".concat(props.apiUrl, "/source"),
                  data: {
                    text: input
                  },
                  headers: {
                    authorization: props.token
                  }
                });

              case 5:
                _response = _context7.sent;

                if (_response.status === 200) {
                  result = _response.data.map(function (item) {
                    return item.id;
                  });
                  sources = [].concat(Object(toConsumableArray["a" /* default */])(sources), Object(toConsumableArray["a" /* default */])(result));
                }

                _context7.next = 11;
                break;

              case 9:
                _result = resultData.map(function (item) {
                  return item.id;
                });
                sources = [].concat(Object(toConsumableArray["a" /* default */])(sources), Object(toConsumableArray["a" /* default */])(_result));

              case 11:
                _context7.next = 13;
                return external_axios_default()({
                  method: "POST",
                  url: "".concat(props.modelApi, "/source"),
                  data: {
                    sourceIds: sources
                  },
                  headers: {
                    authorization: props.token
                  }
                });

              case 13:
                response = _context7.sent;

                if (response.status === 200) {
                  props.onOk(response.data);
                  setCurrentStep(0);
                  external_antd_["message"].success("Source berhasil ditambahkan");
                }

              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function handleSubmit() {
        return _ref9.apply(this, arguments);
      };
    }();

    return external_react_default.a.createElement(external_antd_["Row"], null, external_react_default.a.createElement(external_antd_["Table"], {
      rowKey: "id",
      style: {
        marginBottom: 16
      },
      columns: columns,
      dataSource: resultData
    }), external_react_default.a.createElement("div", {
      className: "d-flex justify-content-flex-end"
    }, external_react_default.a.createElement(external_antd_["Button"], {
      type: "primary",
      onClick: handleSubmit,
      disabled: resultData.length === 0
    }, "Confirm")));
  };
  /* HANDLE MODAL */


  var SelectingMethod = function SelectingMethod() {
    var handleMethod = function handleMethod(key) {
      setMethod(key);
      handleNext();
    };

    return external_react_default.a.createElement(external_antd_["Row"], null, external_react_default.a.createElement(external_antd_["Card"], {
      hoverable: true,
      onClick: function onClick() {
        return handleMethod(0);
      },
      style: {
        marginBottom: 16
      }
    }, external_react_default.a.createElement(external_antd_["Card"].Meta, {
      title: "Get Data From Resource",
      description: "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting."
    })), external_react_default.a.createElement(external_antd_["Card"], {
      hoverable: true,
      onClick: function onClick() {
        return handleMethod(1);
      },
      style: {
        marginBottom: 16
      }
    }, external_react_default.a.createElement(external_antd_["Card"].Meta, {
      title: "File Uploud",
      description: "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting."
    })), external_react_default.a.createElement(external_antd_["Card"], {
      hoverable: true,
      onClick: function onClick() {
        return handleMethod(2);
      },
      style: {
        marginBottom: 16
      }
    }, external_react_default.a.createElement(external_antd_["Card"].Meta, {
      title: "Manual Text Input",
      description: "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf."
    })));
  };

  var SelectingSource = function SelectingSource() {
    return external_react_default.a.createElement(external_antd_["Row"], null, external_react_default.a.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, method === 0 ? external_react_default.a.createElement(TransferSource, null) : method === 1 ? external_react_default.a.createElement(UploudSource, null) : external_react_default.a.createElement(ManualTextInput, null)));
  };

  var steps = [{
    key: 0,
    title: "Select Method",
    content: external_react_default.a.createElement(SelectingMethod, null)
  }, {
    key: 1,
    title: "Set Source",
    content: external_react_default.a.createElement(SelectingSource, null)
  }, {
    key: 2,
    title: "Confirm",
    content: external_react_default.a.createElement(ConfirmSource, null)
  }];

  var handleToRoute = function handleToRoute(key) {
    setCurrentStep(key);
  };

  return external_react_default.a.createElement(external_antd_["Modal"], {
    centered: true,
    title: "Add Source",
    width: 900,
    visible: props.visible,
    maskClosable: false,
    onCancel: handleOnClose,
    footer: null
  }, external_react_default.a.createElement(external_antd_["Breadcrumb"], null, steps.filter(function (item) {
    return item.key <= currentStep;
  }).map(function (item) {
    return currentStep === item.key ? external_react_default.a.createElement(external_antd_["Breadcrumb"].Item, {
      key: item.key
    }, item.title) : external_react_default.a.createElement(external_antd_["Breadcrumb"].Item, {
      key: item.key,
      href: "#",
      onClick: function onClick() {
        return handleToRoute(item.key);
      }
    }, item.title);
  })), external_react_default.a.createElement("div", {
    className: "steps-content",
    style: {
      marginTop: 16
    }
  }, steps[currentStep].content));
}

/* harmony default export */ var components_AddModelSourceModal = (AddModelSourceModal);
// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__("SMlj");

// CONCATENATED MODULE: ./pages/me-model-source.js















function ModelSource(props) {
  if (props.errorCode) return external_react_default.a.createElement(error_default.a, {
    statusCode: props.errorCode
  });
  var selectedKeys = props.route.parsedUrl.pathname;

  var _useState = Object(external_react_["useState"])(props.sourceWithoutTrain),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      source = _useState2[0],
      setSource = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      modalVisible = _useState4[0],
      setModalVisible = _useState4[1];

  var handleInsert = function handleInsert(record) {
    setModalVisible(false);
    setSource(record);
  };

  function handleDelete(_x) {
    return _handleDelete.apply(this, arguments);
  }

  function _handleDelete() {
    _handleDelete = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2(_ref) {
      var id, text, handleOk;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _ref.id, text = _ref.text;

              handleOk =
              /*#__PURE__*/
              function () {
                var _ref2 = Object(asyncToGenerator["a" /* default */])(
                /*#__PURE__*/
                regenerator_default.a.mark(function _callee() {
                  var response;
                  return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return external_axios_default()({
                            method: "DELETE",
                            url: "".concat(props.modelApi, "/source/").concat(id),
                            headers: {
                              authorization: props.token
                            }
                          });

                        case 2:
                          response = _context.sent;

                          if (response.status === 200) {
                            external_antd_["message"].success('Source deleted successfully.');
                            setSource(function (state) {
                              return state.filter(function (item) {
                                return item.id !== id ? true : false;
                              });
                            });
                          }

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function handleOk() {
                  return _ref2.apply(this, arguments);
                };
              }();

              external_antd_["Modal"].confirm({
                title: 'Are you sure?',
                content: 'You will not be able to recover this source.',
                okText: 'Yes',
                onOk: handleOk,
                cancelText: 'Cancel'
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleDelete.apply(this, arguments);
  }

  var columns = [{
    title: 'Text',
    dataIndex: 'text',
    render: function render(text) {
      return external_react_default.a.createElement(external_antd_["Typography"].Paragraph, {
        ellipsis: {
          rows: 3
        }
      }, text);
    }
  }, {
    title: 'Date',
    key: 'createdAt',
    width: 150,
    align: 'center',
    render: function render(text, record) {
      return external_react_default.a.createElement("span", null, external_moment_default()(record.createdAt).fromNow());
    }
  }, {
    title: 'Action',
    key: 'operation',
    width: 100,
    render: function render(text, record) {
      return external_react_default.a.createElement(external_antd_["Button"], {
        className: "btn-danger",
        onClick: function onClick() {
          return handleDelete(record);
        }
      }, "Delete");
    }
  }];

  var CardBody = function CardBody() {
    if (source.length === 0) return external_react_default.a.createElement(external_antd_["Empty"], {
      image: external_antd_["Empty"].PRESENTED_IMAGE_SIMPLE
    });
    return external_react_default.a.createElement("div", {
      style: {}
    }, external_react_default.a.createElement(external_antd_["Table"], {
      rowKey: "id",
      showHeader: false,
      columns: columns,
      dataSource: source,
      scroll: {
        y: 500
      }
    }));
  };

  return external_react_default.a.createElement(UserLayout["a" /* default */], props, external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    gutter: 16
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "My Model Source - Sistem Anotasi Named Entity")), external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    md: 6
  }, external_react_default.a.createElement(MeModelSider["a" /* default */], {
    current: selectedKeys,
    dataSource: props.model
  })), external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    md: 18
  }, external_react_default.a.createElement(external_antd_["Card"], {
    title: "Sources",
    extra: external_react_default.a.createElement(external_antd_["Button"], {
      className: "ml-4",
      type: "primary",
      onClick: function onClick() {
        return setModalVisible(true);
      }
    }, "Add Source")
  }, external_react_default.a.createElement(CardBody, null))), external_react_default.a.createElement(components_AddModelSourceModal, Object(esm_extends["a" /* default */])({}, props, {
    visible: modalVisible,
    onOk: handleInsert,
    onCancel: function onCancel() {
      return setModalVisible(false);
    }
  }))));
}

ModelSource.Layout = UserLayout["a" /* default */];

ModelSource.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(_ref3) {
    var apiUrl, token, query, id, modelApi, model, sources, resources, sourceWithoutTrain;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            apiUrl = _ref3.apiUrl, token = _ref3.token, query = _ref3.query;
            id = query.id;
            modelApi = "".concat(apiUrl, "/model/").concat(id);
            _context3.prev = 3;
            _context3.next = 6;
            return external_axios_default()({
              method: "GET",
              url: modelApi,
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 6:
            model = _context3.sent;
            _context3.next = 9;
            return external_axios_default()({
              method: "GET",
              url: "".concat(modelApi, "/source"),
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 9:
            sources = _context3.sent;
            _context3.next = 12;
            return external_axios_default()({
              method: "GET",
              url: "".concat(apiUrl, "/source"),
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 12:
            resources = _context3.sent;
            _context3.next = 15;
            return external_axios_default()({
              method: "GET",
              url: "".concat(modelApi, "/source/no_process"),
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 15:
            sourceWithoutTrain = _context3.sent;
            return _context3.abrupt("return", {
              modelApi: modelApi,
              model: model,
              sources: sources,
              resources: resources,
              sourceWithoutTrain: sourceWithoutTrain
            });

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](3);
            return _context3.abrupt("return", {
              errorCode: _context3.t0.response.status
            });

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 19]]);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ var me_model_source = __webpack_exports__["default"] = (Object(auth["c" /* withAuthSync */])(ModelSource));

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
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

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

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
      children = _ref.children;
  var selectedKeys = route.parsedUrl.pathname;

  var handleMenu = function handleMenu(n) {
    return _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute(n.key);
  };

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: _utils_auth__WEBPACK_IMPORTED_MODULE_3__[/* logout */ "b"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "logout"
  }), " Logout")))));

  var FooterComponent = function FooterComponent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
      style: {
        textAlign: 'center'
      }
    }, "SANE \xA92019");
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

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

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