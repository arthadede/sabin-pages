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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "19zB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("doui");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);









function ChangePassword(props) {
  var getFieldDecorator = props.form.getFieldDecorator;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields(
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(err, values) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (err) {
                  _context.next = 21;
                  break;
                }

                _context.prev = 1;
                setLoading(true);
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                  method: "POST",
                  url: "".concat(props.apiUrl, "/forget-password"),
                  data: values
                });

              case 5:
                response = _context.sent;

                if (response.status == 200) {
                  antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Thanks! Please check your email for a link to reset your password.");
                  _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/");
                }

                _context.next = 18;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 404 ? 14 : _context.t1 === 400 ? 16 : 18;
                break;

              case 14:
                antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(_context.t0.response.data.message);
                return _context.abrupt("break", 18);

              case 16:
                antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(_context.t0.response.data.message && _context.t0.response.statusText);
                return _context.abrupt("break", 18);

              case 18:
                _context.prev = 18;
                setLoading(false);
                return _context.finish(18);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9, 18, 21]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      height: "inherit",
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", null, "Forget Password - Sistem Anotasi Named Entity")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    align: "middle",
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "Forget Password",
    extra: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      onClick: function onClick() {
        return _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/");
      }
    }, "Back ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: "right"
    })),
    style: {
      minWidth: 400
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator('email', {
    rules: [{
      required: true,
      message: "This field is required."
    }, {
      type: 'email',
      message: "Please provide a valid email address."
    }]
  })(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    placeholder: "Email"
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    style: {
      margin: 0,
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading,
    block: true
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }, "Don't have an account? ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    onClick: function onClick() {
      return _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/register");
    }
  }, "Sign up")))))));
}

var WrappedChangePassword = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].create({
  name: "forget-password-form"
})(ChangePassword);
/* harmony default export */ __webpack_exports__["default"] = (WrappedChangePassword);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("19zB");


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

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

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

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

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

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });