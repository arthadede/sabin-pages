(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["6da5"],{

/***/ "+c4W":
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__("711d"),
    basePropertyDeep = __webpack_require__("4/ic"),
    isKey = __webpack_require__("9ggG"),
    toKey = __webpack_require__("9Nap");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


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

var react_1 = __importDefault(__webpack_require__("q1tI"));

var head_1 = __importDefault(__webpack_require__("PgRs"));

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

/***/ "09Wf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresetColorTypes; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CWQg");

var PresetColorTypes = Object(_type__WEBPACK_IMPORTED_MODULE_0__[/* tuple */ "a"])('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');

/***/ }),

/***/ "0Cz8":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xi7e"),
    Map = __webpack_require__("ebwN"),
    MapCache = __webpack_require__("e4Nc");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "0ycA":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "1hJj":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("e4Nc"),
    setCacheAdd = __webpack_require__("ftKO"),
    setCacheHas = __webpack_require__("3A9y");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "2ajD":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "3A9y":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "4/ic":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("ZWtO");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "4sDh":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("4uTw"),
    isArguments = __webpack_require__("03A+"),
    isArray = __webpack_require__("Z0cm"),
    isIndex = __webpack_require__("wJg7"),
    isLength = __webpack_require__("shjB"),
    toKey = __webpack_require__("9Nap");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "5aQc":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/me-model-info", function() {
      var page = __webpack_require__("pvUb")
      if(false) {}
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "5rEg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/omit.js/es/index.js
var es = __webpack_require__("BGR+");

// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("VCL8");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__("CWQg");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/warning.js
var warning = __webpack_require__("6CfX");

// CONCATENATED MODULE: ./node_modules/antd/es/input/Input.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

function hasPrefixSuffix(props) {
  return !!('prefix' in props || props.suffix || props.allowClear);
}

var InputSizes = Object(type["a" /* tuple */])('small', 'default', 'large');

var Input_Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.handleReset = function (e) {
      _this.setValue('', e, function () {
        _this.focus();
      });
    };

    _this.handleChange = function (e) {
      _this.setValue(e.target.value, e);
    };

    _this.renderComponent = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var customizePrefixCls = _this.props.prefixCls;
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      return _this.renderLabeledInput(prefixCls, _this.renderInput(prefixCls));
    };

    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(Input, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if (hasPrefixSuffix(prevProps) !== hasPrefixSuffix(this.props)) {
        Object(warning["a" /* default */])(this.input !== document.activeElement, 'Input', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ");
      }

      return null;
    } // Since polyfill `getSnapshotBeforeUpdate` need work with `componentDidUpdate`.
    // We keep an empty function here.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "select",
    value: function select() {
      this.input.select();
    }
  }, {
    key: "getInputClassName",
    value: function getInputClassName(prefixCls) {
      var _classNames;

      var _this$props2 = this.props,
          size = _this$props2.size,
          disabled = _this$props2.disabled;
      return classnames_default()(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
    }
  }, {
    key: "setValue",
    value: function setValue(value, e, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }

      var onChange = this.props.onChange;

      if (onChange) {
        var event = e;

        if (e.type === 'click') {
          // click clear icon
          event = Object.create(e);
          event.target = this.input;
          event.currentTarget = this.input;
          var originalInputValue = this.input.value; // change input value cause e.target.value should be '' when clear input

          this.input.value = '';
          onChange(event); // reset input value

          this.input.value = originalInputValue;
          return;
        }

        onChange(event);
      }
    }
  }, {
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var allowClear = this.props.allowClear;
      var value = this.state.value;

      if (!allowClear || value === undefined || value === null || value === '') {
        return null;
      }

      return react["createElement"](icon["a" /* default */], {
        type: "close-circle",
        theme: "filled",
        onClick: this.handleReset,
        className: "".concat(prefixCls, "-clear-icon"),
        role: "button"
      });
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props3 = this.props,
          suffix = _this$props3.suffix,
          allowClear = _this$props3.allowClear;

      if (suffix || allowClear) {
        return react["createElement"]("span", {
          className: "".concat(prefixCls, "-suffix")
        }, this.renderClearIcon(prefixCls), suffix);
      }

      return null;
    }
  }, {
    key: "renderLabeledInput",
    value: function renderLabeledInput(prefixCls, children) {
      var _classNames3;

      var _this$props4 = this.props,
          addonBefore = _this$props4.addonBefore,
          addonAfter = _this$props4.addonAfter,
          style = _this$props4.style,
          size = _this$props4.size,
          className = _this$props4.className; // Not wrap when there is not addons

      if (!addonBefore && !addonAfter) {
        return children;
      }

      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? react["createElement"]("span", {
        className: addonClassName
      }, addonBefore) : null;
      var addonAfterNode = addonAfter ? react["createElement"]("span", {
        className: addonClassName
      }, addonAfter) : null;
      var mergedWrapperClassName = classnames_default()("".concat(prefixCls, "-wrapper"), _defineProperty({}, wrapperClassName, addonBefore || addonAfter));
      var mergedGroupClassName = classnames_default()(className, "".concat(prefixCls, "-group-wrapper"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _classNames3)); // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper

      return react["createElement"]("span", {
        className: mergedGroupClassName,
        style: style
      }, react["createElement"]("span", {
        className: mergedWrapperClassName
      }, addonBeforeNode, react["cloneElement"](children, {
        style: null
      }), addonAfterNode));
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, children) {
      var _classNames4;

      var props = this.props;
      var suffix = this.renderSuffix(prefixCls);

      if (!hasPrefixSuffix(props)) {
        return children;
      }

      var prefix = props.prefix ? react["createElement"]("span", {
        className: "".concat(prefixCls, "-prefix")
      }, props.prefix) : null;
      var affixWrapperCls = classnames_default()(props.className, "".concat(prefixCls, "-affix-wrapper"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-affix-wrapper-sm"), props.size === 'small'), _defineProperty(_classNames4, "".concat(prefixCls, "-affix-wrapper-lg"), props.size === 'large'), _classNames4));
      return react["createElement"]("span", {
        className: affixWrapperCls,
        style: props.style
      }, prefix, react["cloneElement"](children, {
        style: null,
        className: this.getInputClassName(prefixCls)
      }), suffix);
    }
  }, {
    key: "renderInput",
    value: function renderInput(prefixCls) {
      var _this$props5 = this.props,
          className = _this$props5.className,
          addonBefore = _this$props5.addonBefore,
          addonAfter = _this$props5.addonAfter;
      var value = this.state.value; // Fix https://fb.me/react-unknown-prop

      var otherProps = Object(es["a" /* default */])(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      'defaultValue']);
      return this.renderLabeledIcon(prefixCls, react["createElement"]("input", _extends({}, otherProps, {
        value: fixControlledValue(value),
        onChange: this.handleChange,
        className: classnames_default()(this.getInputClassName(prefixCls), _defineProperty({}, className, className && !addonBefore && !addonAfter)),
        onKeyDown: this.handleKeyDown,
        ref: this.saveInput
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(react["Component"]);

Input_Input.defaultProps = {
  type: 'text',
  disabled: false
};
Input_Input.propTypes = {
  type: prop_types["string"],
  id: prop_types["string"],
  size: prop_types["oneOf"](InputSizes),
  maxLength: prop_types["number"],
  disabled: prop_types["bool"],
  value: prop_types["any"],
  defaultValue: prop_types["any"],
  className: prop_types["string"],
  addonBefore: prop_types["node"],
  addonAfter: prop_types["node"],
  prefixCls: prop_types["string"],
  onPressEnter: prop_types["func"],
  onKeyDown: prop_types["func"],
  onKeyUp: prop_types["func"],
  onFocus: prop_types["func"],
  onBlur: prop_types["func"],
  prefix: prop_types["node"],
  suffix: prop_types["node"],
  allowClear: prop_types["bool"]
};
Object(react_lifecycles_compat_es["polyfill"])(Input_Input);
/* harmony default export */ var input_Input = (Input_Input);
// CONCATENATED MODULE: ./node_modules/antd/es/input/Group.js
function Group_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Group_Group = function Group(props) {
  return react["createElement"](config_provider["a" /* ConfigConsumer */], null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className;
    var prefixCls = getPrefixCls('input-group', customizePrefixCls);
    var cls = classnames_default()(prefixCls, (_classNames = {}, Group_defineProperty(_classNames, "".concat(prefixCls, "-lg"), props.size === 'large'), Group_defineProperty(_classNames, "".concat(prefixCls, "-sm"), props.size === 'small'), Group_defineProperty(_classNames, "".concat(prefixCls, "-compact"), props.compact), _classNames), className);
    return react["createElement"]("span", {
      className: cls,
      style: props.style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    }, props.children);
  });
};

/* harmony default export */ var input_Group = (Group_Group);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("2/Rp");

// CONCATENATED MODULE: ./node_modules/antd/es/input/Search.js
function Search_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Search_typeof = function _typeof(obj) { return typeof obj; }; } else { Search_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Search_typeof(obj); }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Search_extends() { Search_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Search_extends.apply(this, arguments); }

function Search_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Search_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Search_createClass(Constructor, protoProps, staticProps) { if (protoProps) Search_defineProperties(Constructor.prototype, protoProps); if (staticProps) Search_defineProperties(Constructor, staticProps); return Constructor; }

function Search_possibleConstructorReturn(self, call) { if (call && (Search_typeof(call) === "object" || typeof call === "function")) { return call; } return Search_assertThisInitialized(self); }

function Search_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Search_getPrototypeOf(o) { Search_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Search_getPrototypeOf(o); }

function Search_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Search_setPrototypeOf(subClass, superClass); }

function Search_setPrototypeOf(o, p) { Search_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Search_setPrototypeOf(o, p); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








var Search_Search =
/*#__PURE__*/
function (_React$Component) {
  Search_inherits(Search, _React$Component);

  function Search() {
    var _this;

    Search_classCallCheck(this, Search);

    _this = Search_possibleConstructorReturn(this, Search_getPrototypeOf(Search).apply(this, arguments));

    _this.onSearch = function (e) {
      var onSearch = _this.props.onSearch;

      if (onSearch) {
        onSearch(_this.input.input.value, e);
      }

      _this.input.focus();
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.renderSuffix = function (prefixCls) {
      var _this$props = _this.props,
          suffix = _this$props.suffix,
          enterButton = _this$props.enterButton;
      if (enterButton) return suffix;
      var node = react["createElement"](icon["a" /* default */], {
        className: "".concat(prefixCls, "-icon"),
        type: "search",
        key: "searchIcon",
        onClick: _this.onSearch
      });

      if (suffix) {
        var cloneSuffix = suffix;

        if (react["isValidElement"](cloneSuffix) && !cloneSuffix.key) {
          cloneSuffix = react["cloneElement"](cloneSuffix, {
            key: 'originSuffix'
          });
        }

        return [cloneSuffix, node];
      }

      return node;
    };

    _this.renderAddonAfter = function (prefixCls) {
      var _this$props2 = _this.props,
          enterButton = _this$props2.enterButton,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          addonAfter = _this$props2.addonAfter;
      if (!enterButton) return addonAfter;
      var btnClassName = "".concat(prefixCls, "-button");
      var button;
      var enterButtonAsElement = enterButton;

      if (enterButtonAsElement.type === es_button["a" /* default */] || enterButtonAsElement.type === 'button') {
        button = react["cloneElement"](enterButtonAsElement, Search_extends({
          onClick: _this.onSearch,
          key: 'enterButton'
        }, enterButtonAsElement.type === es_button["a" /* default */] ? {
          className: btnClassName,
          size: size
        } : {}));
      } else {
        button = react["createElement"](es_button["a" /* default */], {
          className: btnClassName,
          type: "primary",
          size: size,
          disabled: disabled,
          key: "enterButton",
          onClick: _this.onSearch
        }, enterButton === true ? react["createElement"](icon["a" /* default */], {
          type: "search"
        }) : enterButton);
      }

      if (addonAfter) {
        return [button, addonAfter];
      }

      return button;
    };

    _this.renderSearch = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customizeInputPrefixCls = _a.inputPrefixCls,
          size = _a.size,
          enterButton = _a.enterButton,
          className = _a.className,
          restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "size", "enterButton", "className"]);

      delete restProps.onSearch;
      var prefixCls = getPrefixCls('input-search', customizePrefixCls);
      var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
      var inputClassName;

      if (enterButton) {
        var _classNames;

        inputClassName = classnames_default()(prefixCls, className, (_classNames = {}, Search_defineProperty(_classNames, "".concat(prefixCls, "-enter-button"), !!enterButton), Search_defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _classNames));
      } else {
        inputClassName = classnames_default()(prefixCls, className);
      }

      return react["createElement"](input_Input, Search_extends({
        onPressEnter: _this.onSearch
      }, restProps, {
        size: size,
        prefixCls: inputPrefixCls,
        addonAfter: _this.renderAddonAfter(prefixCls),
        suffix: _this.renderSuffix(prefixCls),
        ref: _this.saveInput,
        className: inputClassName
      }));
    };

    return _this;
  }

  Search_createClass(Search, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderSearch);
    }
  }]);

  return Search;
}(react["Component"]);


Search_Search.defaultProps = {
  enterButton: false
};
// EXTERNAL MODULE: ./node_modules/antd/es/input/TextArea.js + 1 modules
var TextArea = __webpack_require__("whJP");

// CONCATENATED MODULE: ./node_modules/antd/es/input/Password.js
function Password_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Password_typeof = function _typeof(obj) { return typeof obj; }; } else { Password_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Password_typeof(obj); }

function Password_extends() { Password_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Password_extends.apply(this, arguments); }

function Password_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Password_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Password_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Password_createClass(Constructor, protoProps, staticProps) { if (protoProps) Password_defineProperties(Constructor.prototype, protoProps); if (staticProps) Password_defineProperties(Constructor, staticProps); return Constructor; }

function Password_possibleConstructorReturn(self, call) { if (call && (Password_typeof(call) === "object" || typeof call === "function")) { return call; } return Password_assertThisInitialized(self); }

function Password_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Password_getPrototypeOf(o) { Password_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Password_getPrototypeOf(o); }

function Password_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Password_setPrototypeOf(subClass, superClass); }

function Password_setPrototypeOf(o, p) { Password_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Password_setPrototypeOf(o, p); }

var Password_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};

var Password_Password =
/*#__PURE__*/
function (_React$Component) {
  Password_inherits(Password, _React$Component);

  function Password() {
    var _this;

    Password_classCallCheck(this, Password);

    _this = Password_possibleConstructorReturn(this, Password_getPrototypeOf(Password).apply(this, arguments));
    _this.state = {
      visible: false
    };

    _this.onChange = function () {
      _this.setState({
        visible: !_this.state.visible
      });
    };

    return _this;
  }

  Password_createClass(Password, [{
    key: "getIcon",
    value: function getIcon() {
      var _iconProps;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          action = _this$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconProps = (_iconProps = {}, Password_defineProperty(_iconProps, iconTrigger, this.onChange), Password_defineProperty(_iconProps, "className", "".concat(prefixCls, "-icon")), Password_defineProperty(_iconProps, "type", this.state.visible ? 'eye' : 'eye-invisible'), Password_defineProperty(_iconProps, "key", 'passwordIcon'), Password_defineProperty(_iconProps, "onMouseDown", function onMouseDown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), _iconProps);
      return react["createElement"](icon["a" /* default */], iconProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          prefixCls = _a.prefixCls,
          inputPrefixCls = _a.inputPrefixCls,
          size = _a.size,
          suffix = _a.suffix,
          visibilityToggle = _a.visibilityToggle,
          restProps = Password_rest(_a, ["className", "prefixCls", "inputPrefixCls", "size", "suffix", "visibilityToggle"]);

      var suffixIcon = visibilityToggle && this.getIcon();
      var inputClassName = classnames_default()(prefixCls, className, Password_defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));
      return react["createElement"](input_Input, Password_extends({}, restProps, {
        type: this.state.visible ? 'text' : 'password',
        size: size,
        className: inputClassName,
        prefixCls: inputPrefixCls,
        suffix: suffixIcon
      }));
    }
  }]);

  return Password;
}(react["Component"]);


Password_Password.defaultProps = {
  inputPrefixCls: 'ant-input',
  prefixCls: 'ant-input-password',
  action: 'click',
  visibilityToggle: true
};
// CONCATENATED MODULE: ./node_modules/antd/es/input/index.js





input_Input.Group = input_Group;
input_Input.Search = Search_Search;
input_Input.TextArea = TextArea["a" /* default */];
input_Input.Password = Password_Password;
/* harmony default export */ var input = __webpack_exports__["a"] = (input_Input);

/***/ }),

/***/ "6sVZ":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "711d":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "77Zs":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xi7e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "7GkX":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("b80T"),
    baseKeys = __webpack_require__("A90E"),
    isArrayLike = __webpack_require__("MMmD");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "7fqy":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "8z0m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("VCL8");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("QbLZ");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("iCc5");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("V7oC");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("FYw3");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("mRg0");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("YEIV");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/rc-upload/es/request.js
function getError(option, xhr) {
  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

// option {
//  onProgress: (event: { percent: number }): void,
//  onError: (event: Error, body?: Object): void,
//  onSuccess: (body: Object): void,
//  data: Object,
//  filename: String,
//  file: File,
//  withCredentials: Boolean,
//  action: String,
//  headers: Object,
// }
function upload(option) {
  var xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).map(function (key) {
      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    option.onSuccess(getBody(xhr), xhr);
  };

  xhr.open('post', option.action, true);

  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  for (var h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);

  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}
// CONCATENATED MODULE: ./node_modules/rc-upload/es/uid.js
var now = +new Date();
var uid_index = 0;

function uid_uid() {
  return "rc-upload-" + now + "-" + ++uid_index;
}
// CONCATENATED MODULE: ./node_modules/rc-upload/es/attr-accept.js
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

/* harmony default export */ var attr_accept = (function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');

    return acceptedFilesArray.some(function (type) {
      var validType = type.trim();
      if (validType.charAt(0) === '.') {
        return endsWith(fileName.toLowerCase(), validType.toLowerCase());
      } else if (/\/\*$/.test(validType)) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
});
// CONCATENATED MODULE: ./node_modules/rc-upload/es/traverseFileTree.js
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];

  function sequence() {
    dirReader.readEntries(function (entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList);

      // Check if all the file has been viewed
      var isFinished = !entryList.length;

      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }

  sequence();
}

var traverseFileTree = function traverseFileTree(files, callback, isAccepted) {
  var _traverseFileTree = function _traverseFileTree(item, path) {
    path = path || '';
    if (item.isFile) {
      item.file(function (file) {
        if (isAccepted(file)) {
          // https://github.com/ant-design/ant-design/issues/16426
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            });
            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }
          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function (entries) {
        entries.forEach(function (entryItem) {
          _traverseFileTree(entryItem, '' + path + item.name + '/');
        });
      });
    }
  };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var file = _step.value;

      _traverseFileTree(file.webkitGetAsEntry());
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/* harmony default export */ var es_traverseFileTree = (traverseFileTree);
// CONCATENATED MODULE: ./node_modules/rc-upload/es/AjaxUploader.js






/* eslint react/no-is-mounted:0 react/sort-comp:0 */









var AjaxUploader_AjaxUploader = function (_Component) {
  inherits_default()(AjaxUploader, _Component);

  function AjaxUploader() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, AjaxUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = AjaxUploader.__proto__ || Object.getPrototypeOf(AjaxUploader)).call.apply(_ref, [this].concat(args))), _this), _this.state = { uid: uid_uid() }, _this.reqs = {}, _this.onChange = function (e) {
      var files = e.target.files;
      _this.uploadFiles(files);
      _this.reset();
    }, _this.onClick = function () {
      var el = _this.fileInput;
      if (!el) {
        return;
      }
      el.click();
    }, _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.onClick();
      }
    }, _this.onFileDrop = function (e) {
      e.preventDefault();

      if (e.type === 'dragover') {
        return;
      }

      if (_this.props.directory) {
        es_traverseFileTree(e.dataTransfer.items, _this.uploadFiles, function (_file) {
          return attr_accept(_file, _this.props.accept);
        });
      } else {
        var files = Array.prototype.slice.call(e.dataTransfer.files).filter(function (file) {
          return attr_accept(file, _this.props.accept);
        });
        _this.uploadFiles(files);
      }
    }, _this.uploadFiles = function (files) {
      var postFiles = Array.prototype.slice.call(files);
      postFiles.map(function (file) {
        file.uid = uid_uid();
        return file;
      }).forEach(function (file) {
        _this.upload(file, postFiles);
      });
    }, _this.saveFileInput = function (node) {
      _this.fileInput = node;
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(AjaxUploader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.abort();
    }
  }, {
    key: 'upload',
    value: function upload(file, fileList) {
      var _this2 = this;

      var props = this.props;

      if (!props.beforeUpload) {
        // always async in case use react state to keep fileList
        return setTimeout(function () {
          return _this2.post(file);
        }, 0);
      }

      var before = props.beforeUpload(file, fileList);
      if (before && before.then) {
        before.then(function (processedFile) {
          var processedFileType = Object.prototype.toString.call(processedFile);
          if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
            return _this2.post(processedFile);
          }
          return _this2.post(file);
        })['catch'](function (e) {
          console && console.log(e); // eslint-disable-line
        });
      } else if (before !== false) {
        setTimeout(function () {
          return _this2.post(file);
        }, 0);
      }
    }
  }, {
    key: 'post',
    value: function post(file) {
      var _this3 = this;

      if (!this._isMounted) {
        return;
      }
      var props = this.props;
      var data = props.data;
      var onStart = props.onStart,
          onProgress = props.onProgress;

      if (typeof data === 'function') {
        data = data(file);
      }
      new Promise(function (resolve) {
        var action = props.action;

        if (typeof action === 'function') {
          return resolve(action(file));
        }
        resolve(action);
      }).then(function (action) {
        var uid = file.uid;

        var request = props.customRequest || upload;
        _this3.reqs[uid] = request({
          action: action,
          filename: props.name,
          file: file,
          data: data,
          headers: props.headers,
          withCredentials: props.withCredentials,
          onProgress: onProgress ? function (e) {
            onProgress(e, file);
          } : null,
          onSuccess: function onSuccess(ret, xhr) {
            delete _this3.reqs[uid];
            props.onSuccess(ret, file, xhr);
          },
          onError: function onError(err, ret) {
            delete _this3.reqs[uid];
            props.onError(err, ret, file);
          }
        });
        onStart(file);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({
        uid: uid_uid()
      });
    }
  }, {
    key: 'abort',
    value: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file;
        if (file && file.uid) {
          uid = file.uid;
        }
        if (reqs[uid]) {
          reqs[uid].abort();
          delete reqs[uid];
        }
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          Tag = _props.component,
          prefixCls = _props.prefixCls,
          className = _props.className,
          disabled = _props.disabled,
          id = _props.id,
          style = _props.style,
          multiple = _props.multiple,
          accept = _props.accept,
          children = _props.children,
          directory = _props.directory,
          openFileDialogOnClick = _props.openFileDialogOnClick;

      var cls = classnames_default()((_classNames = {}, defineProperty_default()(_classNames, prefixCls, true), defineProperty_default()(_classNames, prefixCls + '-disabled', disabled), defineProperty_default()(_classNames, className, className), _classNames));
      var events = disabled ? {} : {
        onClick: openFileDialogOnClick ? this.onClick : function () {},
        onKeyDown: openFileDialogOnClick ? this.onKeyDown : function () {},
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: '0'
      };
      return react_default.a.createElement(
        Tag,
        extends_default()({}, events, {
          className: cls,
          role: 'button',
          style: style
        }),
        react_default.a.createElement('input', {
          id: id,
          type: 'file',
          ref: this.saveFileInput,
          key: this.state.uid,
          style: { display: 'none' },
          accept: accept,
          directory: directory ? 'directory' : null,
          webkitdirectory: directory ? 'webkitdirectory' : null,
          multiple: multiple,
          onChange: this.onChange
        }),
        children
      );
    }
  }]);

  return AjaxUploader;
}(react["Component"]);

AjaxUploader_AjaxUploader.propTypes = {
  id: prop_types_default.a.string,
  component: prop_types_default.a.string,
  style: prop_types_default.a.object,
  prefixCls: prop_types_default.a.string,
  className: prop_types_default.a.string,
  multiple: prop_types_default.a.bool,
  directory: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  accept: prop_types_default.a.string,
  children: prop_types_default.a.any,
  onStart: prop_types_default.a.func,
  data: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),
  action: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func]),
  headers: prop_types_default.a.object,
  beforeUpload: prop_types_default.a.func,
  customRequest: prop_types_default.a.func,
  onProgress: prop_types_default.a.func,
  withCredentials: prop_types_default.a.bool,
  openFileDialogOnClick: prop_types_default.a.bool
};


/* harmony default export */ var es_AjaxUploader = (AjaxUploader_AjaxUploader);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__("2W6z");
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// CONCATENATED MODULE: ./node_modules/rc-upload/es/IframeUploader.js






/* eslint react/sort-comp:0 */







var IFRAME_STYLE = {
  position: 'absolute',
  top: 0,
  opacity: 0,
  filter: 'alpha(opacity=0)',
  left: 0,
  zIndex: 9999
};

// diferent from AjaxUpload, can only upload on at one time, serial seriously

var IframeUploader_IframeUploader = function (_Component) {
  inherits_default()(IframeUploader, _Component);

  function IframeUploader() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, IframeUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = IframeUploader.__proto__ || Object.getPrototypeOf(IframeUploader)).call.apply(_ref, [this].concat(args))), _this), _this.state = { uploading: false }, _this.file = {}, _this.onLoad = function () {
      if (!_this.state.uploading) {
        return;
      }
      var _this2 = _this,
          props = _this2.props,
          file = _this2.file;

      var response = void 0;
      try {
        var doc = _this.getIframeDocument();
        var script = doc.getElementsByTagName('script')[0];
        if (script && script.parentNode === doc.body) {
          doc.body.removeChild(script);
        }
        response = doc.body.innerHTML;
        props.onSuccess(response, file);
      } catch (err) {
        warning_default()(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
        response = 'cross-domain';
        props.onError(err, null, file);
      }
      _this.endUpload();
    }, _this.onChange = function () {
      var target = _this.getFormInputNode();
      // ie8/9 don't support FileList Object
      // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
      var file = _this.file = {
        uid: uid_uid(),
        name: target.value && target.value.substring(target.value.lastIndexOf('\\') + 1, target.value.length)
      };
      _this.startUpload();
      var _this3 = _this,
          props = _this3.props;

      if (!props.beforeUpload) {
        return _this.post(file);
      }
      var before = props.beforeUpload(file);
      if (before && before.then) {
        before.then(function () {
          _this.post(file);
        }, function () {
          _this.endUpload();
        });
      } else if (before !== false) {
        _this.post(file);
      } else {
        _this.endUpload();
      }
    }, _this.saveIframe = function (node) {
      _this.iframe = node;
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(IframeUploader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateIframeWH();
      this.initIframe();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateIframeWH();
    }
  }, {
    key: 'getIframeNode',
    value: function getIframeNode() {
      return this.iframe;
    }
  }, {
    key: 'getIframeDocument',
    value: function getIframeDocument() {
      return this.getIframeNode().contentDocument;
    }
  }, {
    key: 'getFormNode',
    value: function getFormNode() {
      return this.getIframeDocument().getElementById('form');
    }
  }, {
    key: 'getFormInputNode',
    value: function getFormInputNode() {
      return this.getIframeDocument().getElementById('input');
    }
  }, {
    key: 'getFormDataNode',
    value: function getFormDataNode() {
      return this.getIframeDocument().getElementById('data');
    }
  }, {
    key: 'getFileForMultiple',
    value: function getFileForMultiple(file) {
      return this.props.multiple ? [file] : file;
    }
  }, {
    key: 'getIframeHTML',
    value: function getIframeHTML(domain) {
      var domainScript = '';
      var domainInput = '';
      if (domain) {
        var script = 'script';
        domainScript = '<' + script + '>document.domain="' + domain + '";</' + script + '>';
        domainInput = '<input name="_documentDomain" value="' + domain + '" />';
      }
      return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    ' + domainScript + '\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="" id="form"\n    style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="' + this.props.name + '"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    ' + domainInput + '\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    ';
    }
  }, {
    key: 'initIframeSrc',
    value: function initIframeSrc() {
      if (this.domain) {
        this.getIframeNode().src = 'javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain=\'' + this.domain + '\';\n        d.write(\'\');\n        d.close();\n      })())';
      }
    }
  }, {
    key: 'initIframe',
    value: function initIframe() {
      var iframeNode = this.getIframeNode();
      var win = iframeNode.contentWindow;
      var doc = void 0;
      this.domain = this.domain || '';
      this.initIframeSrc();
      try {
        doc = win.document;
      } catch (e) {
        this.domain = document.domain;
        this.initIframeSrc();
        win = iframeNode.contentWindow;
        doc = win.document;
      }
      doc.open('text/html', 'replace');
      doc.write(this.getIframeHTML(this.domain));
      doc.close();
      this.getFormInputNode().onchange = this.onChange;
    }
  }, {
    key: 'endUpload',
    value: function endUpload() {
      if (this.state.uploading) {
        this.file = {};
        // hack avoid batch
        this.state.uploading = false;
        this.setState({
          uploading: false
        });
        this.initIframe();
      }
    }
  }, {
    key: 'startUpload',
    value: function startUpload() {
      if (!this.state.uploading) {
        this.state.uploading = true;
        this.setState({
          uploading: true
        });
      }
    }
  }, {
    key: 'updateIframeWH',
    value: function updateIframeWH() {
      var rootNode = react_dom_default.a.findDOMNode(this);
      var iframeNode = this.getIframeNode();
      iframeNode.style.height = rootNode.offsetHeight + 'px';
      iframeNode.style.width = rootNode.offsetWidth + 'px';
    }
  }, {
    key: 'abort',
    value: function abort(file) {
      if (file) {
        var uid = file;
        if (file && file.uid) {
          uid = file.uid;
        }
        if (uid === this.file.uid) {
          this.endUpload();
        }
      } else {
        this.endUpload();
      }
    }
  }, {
    key: 'post',
    value: function post(file) {
      var _this4 = this;

      var formNode = this.getFormNode();
      var dataSpan = this.getFormDataNode();
      var data = this.props.data;
      var onStart = this.props.onStart;

      if (typeof data === 'function') {
        data = data(file);
      }
      var inputs = document.createDocumentFragment();
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var input = document.createElement('input');
          input.setAttribute('name', key);
          input.value = data[key];
          inputs.appendChild(input);
        }
      }
      dataSpan.appendChild(inputs);
      new Promise(function (resolve) {
        var action = _this4.props.action;

        if (typeof action === 'function') {
          return resolve(action(file));
        }
        resolve(action);
      }).then(function (action) {
        formNode.setAttribute('action', action);
        formNode.submit();
        dataSpan.innerHTML = '';
        onStart(file);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          Tag = _props.component,
          disabled = _props.disabled,
          className = _props.className,
          prefixCls = _props.prefixCls,
          children = _props.children,
          style = _props.style;

      var iframeStyle = extends_default()({}, IFRAME_STYLE, {
        display: this.state.uploading || disabled ? 'none' : ''
      });
      var cls = classnames_default()((_classNames = {}, defineProperty_default()(_classNames, prefixCls, true), defineProperty_default()(_classNames, prefixCls + '-disabled', disabled), defineProperty_default()(_classNames, className, className), _classNames));
      return react_default.a.createElement(
        Tag,
        {
          className: cls,
          style: extends_default()({ position: 'relative', zIndex: 0 }, style)
        },
        react_default.a.createElement('iframe', {
          ref: this.saveIframe,
          onLoad: this.onLoad,
          style: iframeStyle
        }),
        children
      );
    }
  }]);

  return IframeUploader;
}(react["Component"]);

IframeUploader_IframeUploader.propTypes = {
  component: prop_types_default.a.string,
  style: prop_types_default.a.object,
  disabled: prop_types_default.a.bool,
  prefixCls: prop_types_default.a.string,
  className: prop_types_default.a.string,
  accept: prop_types_default.a.string,
  onStart: prop_types_default.a.func,
  multiple: prop_types_default.a.bool,
  children: prop_types_default.a.any,
  data: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),
  action: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func]),
  name: prop_types_default.a.string
};


/* harmony default export */ var es_IframeUploader = (IframeUploader_IframeUploader);
// CONCATENATED MODULE: ./node_modules/rc-upload/es/Upload.js










function empty() {}

var Upload_Upload = function (_Component) {
  inherits_default()(Upload, _Component);

  function Upload() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, Upload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = Upload.__proto__ || Object.getPrototypeOf(Upload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      Component: null
    }, _this.saveUploader = function (node) {
      _this.uploader = node;
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(Upload, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.supportServerRender) {
        /* eslint react/no-did-mount-set-state:0 */
        this.setState({
          Component: this.getComponent()
        }, this.props.onReady);
      }
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return typeof File !== 'undefined' ? es_AjaxUploader : es_IframeUploader;
    }
  }, {
    key: 'abort',
    value: function abort(file) {
      this.uploader.abort(file);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.supportServerRender) {
        var _ComponentUploader = this.state.Component;
        if (_ComponentUploader) {
          return react_default.a.createElement(_ComponentUploader, extends_default()({}, this.props, { ref: this.saveUploader }));
        }
        return null;
      }
      var ComponentUploader = this.getComponent();
      return react_default.a.createElement(ComponentUploader, extends_default()({}, this.props, { ref: this.saveUploader }));
    }
  }]);

  return Upload;
}(react["Component"]);

Upload_Upload.propTypes = {
  component: prop_types_default.a.string,
  style: prop_types_default.a.object,
  prefixCls: prop_types_default.a.string,
  action: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func]),
  name: prop_types_default.a.string,
  multipart: prop_types_default.a.bool,
  directory: prop_types_default.a.bool,
  onError: prop_types_default.a.func,
  onSuccess: prop_types_default.a.func,
  onProgress: prop_types_default.a.func,
  onStart: prop_types_default.a.func,
  data: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),
  headers: prop_types_default.a.object,
  accept: prop_types_default.a.string,
  multiple: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  beforeUpload: prop_types_default.a.func,
  customRequest: prop_types_default.a.func,
  onReady: prop_types_default.a.func,
  withCredentials: prop_types_default.a.bool,
  supportServerRender: prop_types_default.a.bool,
  openFileDialogOnClick: prop_types_default.a.bool
};
Upload_Upload.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onReady: empty,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  supportServerRender: false,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false,
  openFileDialogOnClick: true
};


/* harmony default export */ var es_Upload = (Upload_Upload);
// CONCATENATED MODULE: ./node_modules/rc-upload/es/index.js
// export this package's api


/* harmony default export */ var es = (es_Upload);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__("qPyV");
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);

// EXTERNAL MODULE: ./node_modules/lodash/findIndex.js
var findIndex = __webpack_require__("UfWW");
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex);

// EXTERNAL MODULE: ./node_modules/rc-animate/es/Animate.js + 3 modules
var Animate = __webpack_require__("MFj2");

// CONCATENATED MODULE: ./node_modules/antd/es/upload/utils.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function T() {
  return true;
} // Fix IE file.status problem
// via coping a new Object

function fileToObject(file) {
  return _extends({}, file, {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  });
}
/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */

function genPercentAdd() {
  var k = 0.1;
  var i = 0.01;
  var end = 0.98;
  return function (s) {
    var start = s;

    if (start >= end) {
      return start;
    }

    start += k;
    k = k - i;

    if (k < 0.001) {
      k = 0.001;
    }

    return start;
  };
}
function getFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  return fileList.filter(function (item) {
    return item[matchKey] === file[matchKey];
  })[0];
}
function removeFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  var removed = fileList.filter(function (item) {
    return item[matchKey] !== file[matchKey];
  });

  if (removed.length === fileList.length) {
    return null;
  }

  return removed;
} // ==================== Default Image Preview ====================

var extname = function extname(url) {
  if (!url) {
    return '';
  }

  var temp = url.split('/');
  var filename = temp[temp.length - 1];
  var filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

var isImageFileType = function isImageFileType(type) {
  return !!type && type.indexOf('image/') === 0;
};

var isImageUrl = function isImageUrl(file) {
  if (isImageFileType(file.type)) {
    return true;
  }

  var url = file.thumbUrl || file.url;
  var extension = extname(url);

  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|bmp|dpg)$/i.test(extension)) {
    return true;
  } else if (/^data:/.test(url)) {
    // other file types of base64
    return false;
  } else if (extension) {
    // other file types which have extension
    return false;
  }

  return true;
};
var MEASURE_SIZE = 200;
function previewImage(file) {
  return new Promise(function (resolve) {
    if (!isImageFileType(file.type)) {
      resolve('');
      return;
    }

    var canvas = document.createElement('canvas');
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(MEASURE_SIZE, "px; height: ").concat(MEASURE_SIZE, "px; z-index: 9999; display: none;");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var img = new Image();

    img.onload = function () {
      var width = img.width,
          height = img.height;
      var drawWidth = MEASURE_SIZE;
      var drawHeight = MEASURE_SIZE;
      var offsetX = 0;
      var offsetY = 0;

      if (width < height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      var dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);
      resolve(dataURL);
    };

    img.src = window.URL.createObjectURL(file);
  });
}
// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var es_icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__("3S7+");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__("CWQg");

// CONCATENATED MODULE: ./node_modules/antd/es/progress/utils.js
function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  } else if (progress > 100) {
    return 100;
  }

  return progress;
}
// CONCATENATED MODULE: ./node_modules/antd/es/progress/Line.js
function Line_extends() { Line_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Line_extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



/**
 * {
 *   '0%': '#afc163',
 *   '75%': '#009900',
 *   '50%': 'green',     ====>     '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *   '25%': '#66FF00',
 *   '100%': '#ffffff'
 * }
 */

var sortGradient = function sortGradient(gradients) {
  var tempArr = [];

  for (var _i = 0, _Object$entries = Object.entries(gradients); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var formatKey = parseFloat(key.replace(/%/g, ''));

    if (isNaN(formatKey)) {
      return {};
    }

    tempArr.push({
      key: formatKey,
      value: value
    });
  }

  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};
/**
 * {
 *   '0%': '#afc163',
 *   '25%': '#66FF00',
 *   '50%': '#00CC00',     ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *   '75%': '#009900',              #00CC00 50%, #009900 75%, #ffffff 100%)
 *   '100%': '#ffffff'
 * }
 *
 * Then this man came to realize the truth:
 * Besides six pence, there is the moon.
 * Besides bread and butter, there is the bug.
 * And...
 * Besides women, there is the code.
 */

var handleGradient = function handleGradient(strokeColor) {
  var _strokeColor$from = strokeColor.from,
      from = _strokeColor$from === void 0 ? '#1890ff' : _strokeColor$from,
      _strokeColor$to = strokeColor.to,
      to = _strokeColor$to === void 0 ? '#1890ff' : _strokeColor$to,
      _strokeColor$directio = strokeColor.direction,
      direction = _strokeColor$directio === void 0 ? 'to right' : _strokeColor$directio,
      rest = __rest(strokeColor, ["from", "to", "direction"]);

  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }

  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};

var Line_Line = function Line(props) {
  var prefixCls = props.prefixCls,
      percent = props.percent,
      successPercent = props.successPercent,
      strokeWidth = props.strokeWidth,
      size = props.size,
      strokeColor = props.strokeColor,
      strokeLinecap = props.strokeLinecap,
      children = props.children;
  var backgroundProps;

  if (strokeColor && typeof strokeColor !== 'string') {
    backgroundProps = handleGradient(strokeColor);
  } else {
    backgroundProps = {
      background: strokeColor
    };
  }

  var percentStyle = Line_extends({
    width: "".concat(validProgress(percent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : '100px'
  }, backgroundProps);

  var successPercentStyle = {
    width: "".concat(validProgress(successPercent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : '100px'
  };
  var successSegment = successPercent !== undefined ? react["createElement"]("div", {
    className: "".concat(prefixCls, "-success-bg"),
    style: successPercentStyle
  }) : null;
  return react["createElement"]("div", null, react["createElement"]("div", {
    className: "".concat(prefixCls, "-outer")
  }, react["createElement"]("div", {
    className: "".concat(prefixCls, "-inner")
  }, react["createElement"]("div", {
    className: "".concat(prefixCls, "-bg"),
    style: percentStyle
  }), successSegment)), children);
};

/* harmony default export */ var progress_Line = (Line_Line);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("jo6Y");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: ./node_modules/rc-progress/es/enhancer.js



var enhancer_enhancer = function enhancer(WrappedComponent) {
  return function (_WrappedComponent) {
    inherits_default()(Progress, _WrappedComponent);

    function Progress() {
      classCallCheck_default()(this, Progress);

      return possibleConstructorReturn_default()(this, _WrappedComponent.apply(this, arguments));
    }

    Progress.prototype.componentDidUpdate = function componentDidUpdate() {
      var _this2 = this;

      var now = Date.now();
      var updated = false;

      Object.keys(this.paths).forEach(function (key) {
        var path = _this2.paths[key];

        if (!path) {
          return;
        }

        updated = true;
        var pathStyle = path.style;
        pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

        if (_this2.prevTimeStamp && now - _this2.prevTimeStamp < 100) {
          pathStyle.transitionDuration = '0s, 0s';
        }
      });

      if (updated) {
        this.prevTimeStamp = Date.now();
      }
    };

    Progress.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return Progress;
  }(WrappedComponent);
};

/* harmony default export */ var es_enhancer = (enhancer_enhancer);
// CONCATENATED MODULE: ./node_modules/rc-progress/es/types.js


var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};

var mixedType = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]);

var propTypes = {
  className: prop_types_default.a.string,
  percent: prop_types_default.a.oneOfType([mixedType, prop_types_default.a.arrayOf(mixedType)]),
  prefixCls: prop_types_default.a.string,
  strokeColor: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.arrayOf(prop_types_default.a.string)]),
  strokeLinecap: prop_types_default.a.oneOf(['butt', 'round', 'square']),
  strokeWidth: mixedType,
  style: prop_types_default.a.object,
  trailColor: prop_types_default.a.string,
  trailWidth: mixedType
};
// CONCATENATED MODULE: ./node_modules/rc-progress/es/Line.js









var es_Line_Line = function (_Component) {
  inherits_default()(Line, _Component);

  function Line() {
    var _temp, _this, _ret;

    classCallCheck_default()(this, Line);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.paths = {}, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  Line.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        percent = _props.percent,
        prefixCls = _props.prefixCls,
        strokeColor = _props.strokeColor,
        strokeLinecap = _props.strokeLinecap,
        strokeWidth = _props.strokeWidth,
        style = _props.style,
        trailColor = _props.trailColor,
        trailWidth = _props.trailWidth,
        restProps = objectWithoutProperties_default()(_props, ['className', 'percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'trailWidth']);

    delete restProps.gapPosition;

    var percentList = Array.isArray(percent) ? percent : [percent];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;

    var stackPtg = 0;

    return react_default.a.createElement(
      'svg',
      extends_default()({
        className: prefixCls + '-line ' + className,
        viewBox: viewBoxString,
        preserveAspectRatio: 'none',
        style: style
      }, restProps),
      react_default.a.createElement('path', {
        className: prefixCls + '-line-trail',
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0'
      }),
      percentList.map(function (ptg, index) {
        var pathStyle = {
          strokeDasharray: ptg + 'px, 100px',
          strokeDashoffset: '-' + stackPtg + 'px',
          transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
        };
        var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];

        stackPtg += ptg;

        return react_default.a.createElement('path', {
          key: index,
          className: prefixCls + '-line-path',
          d: pathString,
          strokeLinecap: strokeLinecap,
          stroke: color,
          strokeWidth: strokeWidth,
          fillOpacity: '0',
          ref: function ref(path) {
            _this2.paths[index] = path;
          },
          style: pathStyle
        });
      })
    );
  };

  return Line;
}(react["Component"]);

es_Line_Line.propTypes = propTypes;

es_Line_Line.defaultProps = defaultProps;

/* harmony default export */ var es_Line = (es_enhancer(es_Line_Line));
// CONCATENATED MODULE: ./node_modules/rc-progress/es/Circle.js





/* eslint react/prop-types: 0 */





var Circle_Circle = function (_Component) {
  inherits_default()(Circle, _Component);

  function Circle() {
    var _temp, _this, _ret;

    classCallCheck_default()(this, Circle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.paths = {}, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  Circle.prototype.getPathStyles = function getPathStyles(offset, percent, strokeColor, strokeWidth) {
    var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var gapPosition = arguments[5];

    var radius = 50 - strokeWidth / 2;
    var beginPositionX = 0;
    var beginPositionY = -radius;
    var endPositionX = 0;
    var endPositionY = -2 * radius;
    switch (gapPosition) {
      case 'left':
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = 2 * radius;
        endPositionY = 0;
        break;
      case 'right':
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = -2 * radius;
        endPositionY = 0;
        break;
      case 'bottom':
        beginPositionY = radius;
        endPositionY = 2 * radius;
        break;
      default:
    }
    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
    var len = Math.PI * 2 * radius;

    var pathStyle = {
      stroke: strokeColor,
      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
      strokeDashoffset: '-' + (gapDegree / 2 + offset / 100 * (len - gapDegree)) + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
    };

    return {
      pathString: pathString,
      pathStyle: pathStyle
    };
  };

  Circle.prototype.getStokeList = function getStokeList() {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        percent = _props.percent,
        strokeColor = _props.strokeColor,
        strokeWidth = _props.strokeWidth,
        strokeLinecap = _props.strokeLinecap,
        gapDegree = _props.gapDegree,
        gapPosition = _props.gapPosition;

    var percentList = Array.isArray(percent) ? percent : [percent];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];

      var _getPathStyles = _this2.getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition),
          pathString = _getPathStyles.pathString,
          pathStyle = _getPathStyles.pathStyle;

      stackPtg += ptg;

      return react_default.a.createElement('path', {
        key: index,
        className: prefixCls + '-circle-path',
        d: pathString,
        strokeLinecap: strokeLinecap,
        strokeWidth: ptg === 0 ? 0 : strokeWidth,
        fillOpacity: '0',
        style: pathStyle,
        ref: function ref(path) {
          _this2.paths[index] = path;
        }
      });
    });
  };

  Circle.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        strokeWidth = _props2.strokeWidth,
        trailWidth = _props2.trailWidth,
        gapDegree = _props2.gapDegree,
        gapPosition = _props2.gapPosition,
        trailColor = _props2.trailColor,
        strokeLinecap = _props2.strokeLinecap,
        style = _props2.style,
        className = _props2.className,
        restProps = objectWithoutProperties_default()(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'gapDegree', 'gapPosition', 'trailColor', 'strokeLinecap', 'style', 'className']);

    var _getPathStyles2 = this.getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
        pathString = _getPathStyles2.pathString,
        pathStyle = _getPathStyles2.pathStyle;

    delete restProps.percent;
    delete restProps.strokeColor;
    return react_default.a.createElement(
      'svg',
      extends_default()({
        className: prefixCls + '-circle ' + className,
        viewBox: '0 0 100 100',
        style: style
      }, restProps),
      react_default.a.createElement('path', {
        className: prefixCls + '-circle-trail',
        d: pathString,
        stroke: trailColor,
        strokeLinecap: strokeLinecap,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0',
        style: pathStyle
      }),
      this.getStokeList()
    );
  };

  return Circle;
}(react["Component"]);

Circle_Circle.propTypes = extends_default()({}, propTypes, {
  gapPosition: prop_types_default.a.oneOf(['top', 'bottom', 'left', 'right'])
});

Circle_Circle.defaultProps = extends_default()({}, defaultProps, {
  gapPosition: 'top'
});

/* harmony default export */ var es_Circle = (es_enhancer(Circle_Circle));
// CONCATENATED MODULE: ./node_modules/rc-progress/es/index.js





/* harmony default export */ var rc_progress_es = ({
  Line: es_Line,
  Circle: es_Circle
});
// CONCATENATED MODULE: ./node_modules/antd/es/progress/Circle.js



var statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068'
};

function getPercentage(_ref) {
  var percent = _ref.percent,
      successPercent = _ref.successPercent;
  var ptg = validProgress(percent);
  if (!successPercent) return ptg;
  var successPtg = validProgress(successPercent);
  return [successPercent, validProgress(ptg - successPtg)];
}

function getStrokeColor(_ref2) {
  var progressStatus = _ref2.progressStatus,
      successPercent = _ref2.successPercent,
      strokeColor = _ref2.strokeColor;
  var color = strokeColor || statusColorMap[progressStatus];
  if (!successPercent) return color;
  return [statusColorMap.success, color];
}

var progress_Circle_Circle = function Circle(props) {
  var prefixCls = props.prefixCls,
      width = props.width,
      strokeWidth = props.strokeWidth,
      trailColor = props.trailColor,
      strokeLinecap = props.strokeLinecap,
      gapPosition = props.gapPosition,
      gapDegree = props.gapDegree,
      type = props.type,
      children = props.children;
  var circleSize = width || 120;
  var circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: circleSize * 0.15 + 6
  };
  var circleWidth = strokeWidth || 6;
  var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
  var gapDeg = gapDegree || type === 'dashboard' && 75;
  return react["createElement"]("div", {
    className: "".concat(prefixCls, "-inner"),
    style: circleStyle
  }, react["createElement"](es_Circle, {
    percent: getPercentage(props),
    strokeWidth: circleWidth,
    trailWidth: circleWidth,
    strokeColor: getStrokeColor(props),
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: gapDeg,
    gapPosition: gapPos
  }), children);
};

/* harmony default export */ var progress_Circle = (progress_Circle_Circle);
// CONCATENATED MODULE: ./node_modules/antd/es/progress/progress.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function progress_extends() { progress_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return progress_extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var progress_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var ProgressTypes = Object(_util_type["a" /* tuple */])('line', 'circle', 'dashboard');
var ProgressStatuses = Object(_util_type["a" /* tuple */])('normal', 'exception', 'active', 'success');

var progress_Progress =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress() {
    var _this;

    _classCallCheck(this, Progress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Progress).apply(this, arguments));

    _this.renderProgress = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var props = _this.props;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          _props$percent = props.percent,
          percent = _props$percent === void 0 ? 0 : _props$percent,
          status = props.status,
          format = props.format,
          trailColor = props.trailColor,
          size = props.size,
          successPercent = props.successPercent,
          type = props.type,
          strokeWidth = props.strokeWidth,
          width = props.width,
          showInfo = props.showInfo,
          _props$gapDegree = props.gapDegree,
          gapDegree = _props$gapDegree === void 0 ? 0 : _props$gapDegree,
          gapPosition = props.gapPosition,
          strokeColor = props.strokeColor,
          _props$strokeLinecap = props.strokeLinecap,
          strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
          restProps = progress_rest(props, ["prefixCls", "className", "percent", "status", "format", "trailColor", "size", "successPercent", "type", "strokeWidth", "width", "showInfo", "gapDegree", "gapPosition", "strokeColor", "strokeLinecap"]);

      var prefixCls = getPrefixCls('progress', customizePrefixCls);

      var progressStatus = _this.getProgressStatus();

      var progressInfo = _this.renderProcessInfo(prefixCls, progressStatus);

      var progress; // Render progress shape

      if (type === 'line') {
        progress = react["createElement"](progress_Line, progress_extends({}, _this.props, {
          prefixCls: prefixCls
        }), progressInfo);
      } else if (type === 'circle' || type === 'dashboard') {
        progress = react["createElement"](progress_Circle, progress_extends({}, _this.props, {
          prefixCls: prefixCls,
          progressStatus: progressStatus
        }), progressInfo);
      }

      var classString = classnames_default()(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || type), true), _defineProperty(_classNames, "".concat(prefixCls, "-status-").concat(progressStatus), true), _defineProperty(_classNames, "".concat(prefixCls, "-show-info"), showInfo), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames), className);
      return react["createElement"]("div", progress_extends({}, restProps, {
        className: classString
      }), progress);
    };

    return _this;
  }

  _createClass(Progress, [{
    key: "getPercentNumber",
    value: function getPercentNumber() {
      var _this$props = this.props,
          successPercent = _this$props.successPercent,
          _this$props$percent = _this$props.percent,
          percent = _this$props$percent === void 0 ? 0 : _this$props$percent;
      return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
    }
  }, {
    key: "getProgressStatus",
    value: function getProgressStatus() {
      var status = this.props.status;

      if (ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
        return 'success';
      }

      return status || 'normal';
    }
  }, {
    key: "renderProcessInfo",
    value: function renderProcessInfo(prefixCls, progressStatus) {
      var _this$props2 = this.props,
          showInfo = _this$props2.showInfo,
          format = _this$props2.format,
          type = _this$props2.type,
          percent = _this$props2.percent,
          successPercent = _this$props2.successPercent;
      if (!showInfo) return null;
      var text;

      var textFormatter = format || function (percentNumber) {
        return "".concat(percentNumber, "%");
      };

      var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';

      if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus === 'exception') {
        text = react["createElement"](es_icon["a" /* default */], {
          type: "close".concat(iconType),
          theme: type === 'line' ? 'filled' : 'outlined'
        });
      } else if (progressStatus === 'success') {
        text = react["createElement"](es_icon["a" /* default */], {
          type: "check".concat(iconType),
          theme: type === 'line' ? 'filled' : 'outlined'
        });
      }

      return react["createElement"]("span", {
        className: "".concat(prefixCls, "-text"),
        title: typeof text === 'string' ? text : undefined
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderProgress);
    }
  }]);

  return Progress;
}(react["Component"]);


progress_Progress.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  trailColor: '#f3f3f3',
  size: 'default',
  gapDegree: 0,
  strokeLinecap: 'round'
};
progress_Progress.propTypes = {
  status: prop_types["oneOf"](ProgressStatuses),
  type: prop_types["oneOf"](ProgressTypes),
  showInfo: prop_types["bool"],
  percent: prop_types["number"],
  width: prop_types["number"],
  strokeWidth: prop_types["number"],
  strokeLinecap: prop_types["oneOf"](['round', 'square']),
  strokeColor: prop_types["oneOfType"]([prop_types["string"], prop_types["object"]]),
  trailColor: prop_types["string"],
  format: prop_types["func"],
  gapDegree: prop_types["number"]
};
// CONCATENATED MODULE: ./node_modules/antd/es/progress/index.js

/* harmony default export */ var es_progress = (progress_Progress);
// CONCATENATED MODULE: ./node_modules/antd/es/upload/UploadList.js
function UploadList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UploadList_typeof = function _typeof(obj) { return typeof obj; }; } else { UploadList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UploadList_typeof(obj); }

function UploadList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UploadList_extends() { UploadList_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UploadList_extends.apply(this, arguments); }

function UploadList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UploadList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UploadList_createClass(Constructor, protoProps, staticProps) { if (protoProps) UploadList_defineProperties(Constructor.prototype, protoProps); if (staticProps) UploadList_defineProperties(Constructor, staticProps); return Constructor; }

function UploadList_possibleConstructorReturn(self, call) { if (call && (UploadList_typeof(call) === "object" || typeof call === "function")) { return call; } return UploadList_assertThisInitialized(self); }

function UploadList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UploadList_getPrototypeOf(o) { UploadList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UploadList_getPrototypeOf(o); }

function UploadList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UploadList_setPrototypeOf(subClass, superClass); }

function UploadList_setPrototypeOf(o, p) { UploadList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UploadList_setPrototypeOf(o, p); }










var UploadList_UploadList =
/*#__PURE__*/
function (_React$Component) {
  UploadList_inherits(UploadList, _React$Component);

  function UploadList() {
    var _this;

    UploadList_classCallCheck(this, UploadList);

    _this = UploadList_possibleConstructorReturn(this, UploadList_getPrototypeOf(UploadList).apply(this, arguments));

    _this.handleClose = function (file) {
      var onRemove = _this.props.onRemove;

      if (onRemove) {
        onRemove(file);
      }
    };

    _this.handlePreview = function (file, e) {
      var onPreview = _this.props.onPreview;

      if (!onPreview) {
        return;
      }

      e.preventDefault();
      return onPreview(file);
    };

    _this.renderUploadList = function (_ref) {
      var _classNames2;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          _this$props$items = _this$props.items,
          items = _this$props$items === void 0 ? [] : _this$props$items,
          listType = _this$props.listType,
          showPreviewIcon = _this$props.showPreviewIcon,
          showRemoveIcon = _this$props.showRemoveIcon,
          locale = _this$props.locale;
      var prefixCls = getPrefixCls('upload', customizePrefixCls);
      var list = items.map(function (file) {
        var _classNames;

        var progress;
        var icon = react["createElement"](es_icon["a" /* default */], {
          type: file.status === 'uploading' ? 'loading' : 'paper-clip'
        });

        if (listType === 'picture' || listType === 'picture-card') {
          if (listType === 'picture-card' && file.status === 'uploading') {
            icon = react["createElement"]("div", {
              className: "".concat(prefixCls, "-list-item-uploading-text")
            }, locale.uploading);
          } else if (!file.thumbUrl && !file.url) {
            icon = react["createElement"](es_icon["a" /* default */], {
              className: "".concat(prefixCls, "-list-item-thumbnail"),
              type: "picture",
              theme: "twoTone"
            });
          } else {
            var thumbnail = isImageUrl(file) ? react["createElement"]("img", {
              src: file.thumbUrl || file.url,
              alt: file.name
            }) : react["createElement"](es_icon["a" /* default */], {
              type: "file",
              className: "".concat(prefixCls, "-list-item-icon"),
              theme: "twoTone"
            });
            icon = react["createElement"]("a", {
              className: "".concat(prefixCls, "-list-item-thumbnail"),
              onClick: function onClick(e) {
                return _this.handlePreview(file, e);
              },
              href: file.url || file.thumbUrl,
              target: "_blank",
              rel: "noopener noreferrer"
            }, thumbnail);
          }
        }

        if (file.status === 'uploading') {
          // show loading icon if upload progress listener is disabled
          var loadingProgress = 'percent' in file ? react["createElement"](es_progress, UploadList_extends({
            type: "line"
          }, _this.props.progressAttr, {
            percent: file.percent
          })) : null;
          progress = react["createElement"]("div", {
            className: "".concat(prefixCls, "-list-item-progress"),
            key: "progress"
          }, loadingProgress);
        }

        var infoUploadingClass = classnames_default()((_classNames = {}, UploadList_defineProperty(_classNames, "".concat(prefixCls, "-list-item"), true), UploadList_defineProperty(_classNames, "".concat(prefixCls, "-list-item-").concat(file.status), true), _classNames));
        var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
        var preview = file.url ? react["createElement"]("a", UploadList_extends({
          target: "_blank",
          rel: "noopener noreferrer",
          className: "".concat(prefixCls, "-list-item-name"),
          title: file.name
        }, linkProps, {
          href: file.url,
          onClick: function onClick(e) {
            return _this.handlePreview(file, e);
          }
        }), file.name) : react["createElement"]("span", {
          className: "".concat(prefixCls, "-list-item-name"),
          onClick: function onClick(e) {
            return _this.handlePreview(file, e);
          },
          title: file.name
        }, file.name);
        var style = {
          pointerEvents: 'none',
          opacity: 0.5
        };
        var previewIcon = showPreviewIcon ? react["createElement"]("a", {
          href: file.url || file.thumbUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          style: file.url || file.thumbUrl ? undefined : style,
          onClick: function onClick(e) {
            return _this.handlePreview(file, e);
          },
          title: locale.previewFile
        }, react["createElement"](es_icon["a" /* default */], {
          type: "eye-o"
        })) : null;
        var removeIcon = showRemoveIcon ? react["createElement"](es_icon["a" /* default */], {
          type: "delete",
          title: locale.removeFile,
          onClick: function onClick() {
            return _this.handleClose(file);
          }
        }) : null;
        var removeIconClose = showRemoveIcon ? react["createElement"](es_icon["a" /* default */], {
          type: "close",
          title: locale.removeFile,
          onClick: function onClick() {
            return _this.handleClose(file);
          }
        }) : null;
        var actions = listType === 'picture-card' && file.status !== 'uploading' ? react["createElement"]("span", {
          className: "".concat(prefixCls, "-list-item-actions")
        }, previewIcon, removeIcon) : removeIconClose;
        var message;

        if (file.response && typeof file.response === 'string') {
          message = file.response;
        } else {
          message = file.error && file.error.statusText || locale.uploadError;
        }

        var iconAndPreview = file.status === 'error' ? react["createElement"](tooltip["a" /* default */], {
          title: message
        }, icon, preview) : react["createElement"]("span", null, icon, preview);
        return react["createElement"]("div", {
          className: infoUploadingClass,
          key: file.uid
        }, react["createElement"]("div", {
          className: "".concat(prefixCls, "-list-item-info")
        }, iconAndPreview), actions, react["createElement"](Animate["a" /* default */], {
          transitionName: "fade",
          component: ""
        }, progress));
      });
      var listClassNames = classnames_default()((_classNames2 = {}, UploadList_defineProperty(_classNames2, "".concat(prefixCls, "-list"), true), UploadList_defineProperty(_classNames2, "".concat(prefixCls, "-list-").concat(listType), true), _classNames2));
      var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
      return react["createElement"](Animate["a" /* default */], {
        transitionName: "".concat(prefixCls, "-").concat(animationDirection),
        component: "div",
        className: listClassNames
      }, list);
    };

    return _this;
  }

  UploadList_createClass(UploadList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var _this$props2 = this.props,
          listType = _this$props2.listType,
          items = _this$props2.items,
          previewFile = _this$props2.previewFile;

      if (listType !== 'picture' && listType !== 'picture-card') {
        return;
      }

      (items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
          return;
        }

        file.thumbUrl = '';

        if (previewFile) {
          previewFile(file.originFileObj).then(function (previewDataUrl) {
            // Need append '' to avoid dead loop
            file.thumbUrl = previewDataUrl || '';

            _this2.forceUpdate();
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderUploadList);
    }
  }]);

  return UploadList;
}(react["Component"]);


UploadList_UploadList.defaultProps = {
  listType: 'text',
  progressAttr: {
    strokeWidth: 2,
    showInfo: false
  },
  showRemoveIcon: true,
  showPreviewIcon: true,
  previewFile: previewImage
};
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js
var LocaleReceiver = __webpack_require__("YMnH");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/default.js + 3 modules
var locale_provider_default = __webpack_require__("Kz+r");

// CONCATENATED MODULE: ./node_modules/antd/es/upload/Upload.js
function Upload_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Upload_typeof = function _typeof(obj) { return typeof obj; }; } else { Upload_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Upload_typeof(obj); }

function Upload_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Upload_extends() { Upload_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Upload_extends.apply(this, arguments); }

function Upload_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Upload_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Upload_createClass(Constructor, protoProps, staticProps) { if (protoProps) Upload_defineProperties(Constructor.prototype, protoProps); if (staticProps) Upload_defineProperties(Constructor, staticProps); return Constructor; }

function Upload_possibleConstructorReturn(self, call) { if (call && (Upload_typeof(call) === "object" || typeof call === "function")) { return call; } return Upload_assertThisInitialized(self); }

function Upload_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Upload_getPrototypeOf(o) { Upload_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Upload_getPrototypeOf(o); }

function Upload_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Upload_setPrototypeOf(subClass, superClass); }

function Upload_setPrototypeOf(o, p) { Upload_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Upload_setPrototypeOf(o, p); }













var upload_Upload_Upload =
/*#__PURE__*/
function (_React$Component) {
  Upload_inherits(Upload, _React$Component);

  function Upload(props) {
    var _this;

    Upload_classCallCheck(this, Upload);

    _this = Upload_possibleConstructorReturn(this, Upload_getPrototypeOf(Upload).call(this, props));

    _this.onStart = function (file) {
      var targetItem = fileToObject(file);
      targetItem.status = 'uploading';

      var nextFileList = _this.state.fileList.concat();

      var fileIndex = findIndex_default()(nextFileList, function (_ref) {
        var uid = _ref.uid;
        return uid === targetItem.uid;
      });

      if (fileIndex === -1) {
        nextFileList.push(targetItem);
      } else {
        nextFileList[fileIndex] = targetItem;
      }

      _this.onChange({
        file: targetItem,
        fileList: nextFileList
      }); // fix ie progress


      if (!window.FormData) {
        _this.autoUpdateProgress(0, targetItem);
      }
    };

    _this.onSuccess = function (response, file) {
      _this.clearProgressTimer();

      try {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      } catch (e) {
        /* do nothing */
      }

      var fileList = _this.state.fileList;
      var targetItem = getFileItem(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.status = 'done';
      targetItem.response = response;

      _this.onChange({
        file: Upload_extends({}, targetItem),
        fileList: fileList
      });
    };

    _this.onProgress = function (e, file) {
      var fileList = _this.state.fileList;
      var targetItem = getFileItem(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.percent = e.percent;

      _this.onChange({
        event: e,
        file: Upload_extends({}, targetItem),
        fileList: _this.state.fileList
      });
    };

    _this.onError = function (error, response, file) {
      _this.clearProgressTimer();

      var fileList = _this.state.fileList;
      var targetItem = getFileItem(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';

      _this.onChange({
        file: Upload_extends({}, targetItem),
        fileList: fileList
      });
    };

    _this.handleManualRemove = function (file) {
      if (_this.upload) {
        _this.upload.abort(file);
      }

      _this.handleRemove(file);
    };

    _this.onChange = function (info) {
      if (!('fileList' in _this.props)) {
        _this.setState({
          fileList: info.fileList
        });
      }

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(info);
      }
    };

    _this.onFileDrop = function (e) {
      _this.setState({
        dragState: e.type
      });
    };

    _this.beforeUpload = function (file, fileList) {
      if (!_this.props.beforeUpload) {
        return true;
      }

      var result = _this.props.beforeUpload(file, fileList);

      if (result === false) {
        _this.onChange({
          file: file,
          fileList: uniqBy_default()(_this.state.fileList.concat(fileList.map(fileToObject)), function (item) {
            return item.uid;
          })
        });

        return false;
      }

      if (result && result.then) {
        return result;
      }

      return true;
    };

    _this.saveUpload = function (node) {
      _this.upload = node;
    };

    _this.renderUploadList = function (locale) {
      var _this$props = _this.props,
          showUploadList = _this$props.showUploadList,
          listType = _this$props.listType,
          onPreview = _this$props.onPreview,
          previewFile = _this$props.previewFile,
          disabled = _this$props.disabled;
      var showRemoveIcon = showUploadList.showRemoveIcon,
          showPreviewIcon = showUploadList.showPreviewIcon;
      return react["createElement"](UploadList_UploadList, {
        listType: listType,
        items: _this.state.fileList,
        previewFile: previewFile,
        onPreview: onPreview,
        onRemove: _this.handleManualRemove,
        showRemoveIcon: !disabled && showRemoveIcon,
        showPreviewIcon: showPreviewIcon,
        locale: Upload_extends({}, locale, _this.props.locale)
      });
    };

    _this.renderUpload = function (_ref2) {
      var _classNames2;

      var getPrefixCls = _ref2.getPrefixCls;
      var _this$props2 = _this.props,
          customizePrefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          showUploadList = _this$props2.showUploadList,
          listType = _this$props2.listType,
          type = _this$props2.type,
          disabled = _this$props2.disabled,
          children = _this$props2.children;
      var prefixCls = getPrefixCls('upload', customizePrefixCls);

      var rcUploadProps = Upload_extends({
        onStart: _this.onStart,
        onError: _this.onError,
        onProgress: _this.onProgress,
        onSuccess: _this.onSuccess
      }, _this.props, {
        prefixCls: prefixCls,
        beforeUpload: _this.beforeUpload
      });

      delete rcUploadProps.className;
      var uploadList = showUploadList ? react["createElement"](LocaleReceiver["a" /* default */], {
        componentName: "Upload",
        defaultLocale: locale_provider_default["a" /* default */].Upload
      }, _this.renderUploadList) : null;

      if (type === 'drag') {
        var _classNames;

        var dragCls = classnames_default()(prefixCls, (_classNames = {}, Upload_defineProperty(_classNames, "".concat(prefixCls, "-drag"), true), Upload_defineProperty(_classNames, "".concat(prefixCls, "-drag-uploading"), _this.state.fileList.some(function (file) {
          return file.status === 'uploading';
        })), Upload_defineProperty(_classNames, "".concat(prefixCls, "-drag-hover"), _this.state.dragState === 'dragover'), Upload_defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
        return react["createElement"]("span", {
          className: className
        }, react["createElement"]("div", {
          className: dragCls,
          onDrop: _this.onFileDrop,
          onDragOver: _this.onFileDrop,
          onDragLeave: _this.onFileDrop
        }, react["createElement"](es, Upload_extends({}, rcUploadProps, {
          ref: _this.saveUpload,
          className: "".concat(prefixCls, "-btn")
        }), react["createElement"]("div", {
          className: "".concat(prefixCls, "-drag-container")
        }, children))), uploadList);
      }

      var uploadButtonCls = classnames_default()(prefixCls, (_classNames2 = {}, Upload_defineProperty(_classNames2, "".concat(prefixCls, "-select"), true), Upload_defineProperty(_classNames2, "".concat(prefixCls, "-select-").concat(listType), true), Upload_defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2)); // Remove id to avoid open by label when trigger is hidden
      // https://github.com/ant-design/ant-design/issues/14298
      // https://github.com/ant-design/ant-design/issues/16478

      if (!children || disabled) {
        delete rcUploadProps.id;
      }

      var uploadButton = react["createElement"]("div", {
        className: uploadButtonCls,
        style: children ? undefined : {
          display: 'none'
        }
      }, react["createElement"](es, Upload_extends({}, rcUploadProps, {
        ref: _this.saveUpload
      })));

      if (listType === 'picture-card') {
        return react["createElement"]("span", {
          className: className
        }, uploadList, uploadButton);
      }

      return react["createElement"]("span", {
        className: className
      }, uploadButton, uploadList);
    };

    _this.state = {
      fileList: props.fileList || props.defaultFileList || [],
      dragState: 'drop'
    };
    return _this;
  }

  Upload_createClass(Upload, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearProgressTimer();
    }
  }, {
    key: "autoUpdateProgress",
    value: function autoUpdateProgress(_, file) {
      var _this2 = this;

      var getPercent = genPercentAdd();
      var curPercent = 0;
      this.clearProgressTimer();
      this.progressTimer = setInterval(function () {
        curPercent = getPercent(curPercent);

        _this2.onProgress({
          percent: curPercent * 100
        }, file);
      }, 200);
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(file) {
      var _this3 = this;

      var onRemove = this.props.onRemove;
      var status = file.status;
      file.status = 'removed'; // eslint-disable-line

      Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
        // Prevent removing file
        if (ret === false) {
          file.status = status;
          return;
        }

        var removedFileList = removeFileItem(file, _this3.state.fileList);

        if (removedFileList) {
          _this3.onChange({
            file: file,
            fileList: removedFileList
          });
        }
      });
    }
  }, {
    key: "clearProgressTimer",
    value: function clearProgressTimer() {
      clearInterval(this.progressTimer);
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderUpload);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('fileList' in nextProps) {
        return {
          fileList: nextProps.fileList || []
        };
      }

      return null;
    }
  }]);

  return Upload;
}(react["Component"]);

upload_Upload_Upload.defaultProps = {
  type: 'select',
  multiple: false,
  action: '',
  data: {},
  accept: '',
  beforeUpload: T,
  showUploadList: true,
  listType: 'text',
  className: '',
  disabled: false,
  supportServerRender: true
};
Object(react_lifecycles_compat_es["polyfill"])(upload_Upload_Upload);
/* harmony default export */ var upload_Upload = (upload_Upload_Upload);
// CONCATENATED MODULE: ./node_modules/antd/es/upload/Dragger.js
function Dragger_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Dragger_typeof = function _typeof(obj) { return typeof obj; }; } else { Dragger_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Dragger_typeof(obj); }

function Dragger_extends() { Dragger_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dragger_extends.apply(this, arguments); }

function Dragger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Dragger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Dragger_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dragger_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dragger_defineProperties(Constructor, staticProps); return Constructor; }

function Dragger_possibleConstructorReturn(self, call) { if (call && (Dragger_typeof(call) === "object" || typeof call === "function")) { return call; } return Dragger_assertThisInitialized(self); }

function Dragger_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Dragger_getPrototypeOf(o) { Dragger_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Dragger_getPrototypeOf(o); }

function Dragger_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Dragger_setPrototypeOf(subClass, superClass); }

function Dragger_setPrototypeOf(o, p) { Dragger_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Dragger_setPrototypeOf(o, p); }




var Dragger_Dragger =
/*#__PURE__*/
function (_React$Component) {
  Dragger_inherits(Dragger, _React$Component);

  function Dragger() {
    Dragger_classCallCheck(this, Dragger);

    return Dragger_possibleConstructorReturn(this, Dragger_getPrototypeOf(Dragger).apply(this, arguments));
  }

  Dragger_createClass(Dragger, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return react["createElement"](upload_Upload, Dragger_extends({}, props, {
        type: "drag",
        style: Dragger_extends({}, props.style, {
          height: props.height
        })
      }));
    }
  }]);

  return Dragger;
}(react["Component"]);


// CONCATENATED MODULE: ./node_modules/antd/es/upload/index.js


upload_Upload.Dragger = Dragger_Dragger;
/* harmony default export */ var es_upload = __webpack_exports__["a"] = (upload_Upload);

/***/ }),

/***/ "9yH6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");

// EXTERNAL MODULE: ./node_modules/rc-checkbox/es/index.js + 1 modules
var es = __webpack_require__("x1Ya");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("Gytx");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// CONCATENATED MODULE: ./node_modules/antd/es/radio/radio.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








var radio_Radio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    var _this;

    _classCallCheck(this, Radio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Radio).apply(this, arguments));

    _this.saveCheckbox = function (node) {
      _this.rcCheckbox = node;
    };

    _this.onChange = function (e) {
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }

      if (_this.context.radioGroup && _this.context.radioGroup.onChange) {
        _this.context.radioGroup.onChange(e);
      }
    };

    _this.renderRadio = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props,
          context = _assertThisInitialize.context;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          children = props.children,
          style = props.style,
          restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

      var radioGroup = context.radioGroup;
      var prefixCls = getPrefixCls('radio', customizePrefixCls);

      var radioProps = _extends({}, restProps);

      if (radioGroup) {
        radioProps.name = radioGroup.name;
        radioProps.onChange = _this.onChange;
        radioProps.checked = props.value === radioGroup.value;
        radioProps.disabled = props.disabled || radioGroup.disabled;
      }

      var wrapperClassString = classnames_default()(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), _classNames));
      return react["createElement"]("label", {
        className: wrapperClassString,
        style: style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave
      }, react["createElement"](es["a" /* default */], _extends({}, radioProps, {
        prefixCls: prefixCls,
        ref: _this.saveCheckbox
      })), children !== undefined ? react["createElement"]("span", null, children) : null);
    };

    return _this;
  }

  _createClass(Radio, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !shallowequal_default()(this.props, nextProps) || !shallowequal_default()(this.state, nextState) || !shallowequal_default()(this.context.radioGroup, nextContext.radioGroup);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.rcCheckbox.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcCheckbox.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderRadio);
    }
  }]);

  return Radio;
}(react["Component"]);


radio_Radio.defaultProps = {
  type: 'radio'
};
radio_Radio.contextTypes = {
  radioGroup: prop_types["any"]
};
// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("VCL8");

// CONCATENATED MODULE: ./node_modules/antd/es/radio/group.js
function group_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { group_typeof = function _typeof(obj) { return typeof obj; }; } else { group_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return group_typeof(obj); }

function group_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function group_createClass(Constructor, protoProps, staticProps) { if (protoProps) group_defineProperties(Constructor.prototype, protoProps); if (staticProps) group_defineProperties(Constructor, staticProps); return Constructor; }

function group_possibleConstructorReturn(self, call) { if (call && (group_typeof(call) === "object" || typeof call === "function")) { return call; } return group_assertThisInitialized(self); }

function group_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function group_getPrototypeOf(o) { group_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return group_getPrototypeOf(o); }

function group_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) group_setPrototypeOf(subClass, superClass); }

function group_setPrototypeOf(o, p) { group_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return group_setPrototypeOf(o, p); }









function getCheckedValue(children) {
  var value = null;
  var matched = false;
  react["Children"].forEach(children, function (radio) {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? {
    value: value
  } : undefined;
}

var group_RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  group_inherits(RadioGroup, _React$Component);

  function RadioGroup(props) {
    var _this;

    group_classCallCheck(this, RadioGroup);

    _this = group_possibleConstructorReturn(this, group_getPrototypeOf(RadioGroup).call(this, props));

    _this.onRadioChange = function (ev) {
      var lastValue = _this.state.value;
      var value = ev.target.value;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      var onChange = _this.props.onChange;

      if (onChange && value !== lastValue) {
        onChange(ev);
      }
    };

    _this.renderGroup = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var props = _this.props;
      var customizePrefixCls = props.prefixCls,
          _props$className = props.className,
          className = _props$className === void 0 ? '' : _props$className,
          options = props.options,
          buttonStyle = props.buttonStyle;
      var prefixCls = getPrefixCls('radio', customizePrefixCls);
      var groupPrefixCls = "".concat(prefixCls, "-group");
      var classString = classnames_default()(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), group_defineProperty({}, "".concat(groupPrefixCls, "-").concat(props.size), props.size), className);
      var children = props.children; // 如果存在 options, 优先使用

      if (options && options.length > 0) {
        children = options.map(function (option, index) {
          if (typeof option === 'string') {
            // 此处类型自动推导为 string
            return react["createElement"](radio_Radio, {
              key: index,
              prefixCls: prefixCls,
              disabled: _this.props.disabled,
              value: option,
              checked: _this.state.value === option
            }, option);
          } else {
            // 此处类型自动推导为 { label: string value: string }
            return react["createElement"](radio_Radio, {
              key: index,
              prefixCls: prefixCls,
              disabled: option.disabled || _this.props.disabled,
              value: option.value,
              checked: _this.state.value === option.value
            }, option.label);
          }
        });
      }

      return react["createElement"]("div", {
        className: classString,
        style: props.style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        id: props.id
      }, children);
    };

    var value;

    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      var checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }

    _this.state = {
      value: value
    };
    return _this;
  }

  group_createClass(RadioGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        radioGroup: {
          onChange: this.onRadioChange,
          value: this.state.value,
          disabled: this.props.disabled,
          name: this.props.name
        }
      };
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowequal_default()(this.props, nextProps) || !shallowequal_default()(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderGroup);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      } else {
        var checkedValue = getCheckedValue(nextProps.children);

        if (checkedValue) {
          return {
            value: checkedValue.value
          };
        }
      }

      return null;
    }
  }]);

  return RadioGroup;
}(react["Component"]);

group_RadioGroup.defaultProps = {
  disabled: false,
  buttonStyle: 'outline'
};
group_RadioGroup.childContextTypes = {
  radioGroup: prop_types["any"]
};
Object(react_lifecycles_compat_es["polyfill"])(group_RadioGroup);
/* harmony default export */ var group = (group_RadioGroup);
// CONCATENATED MODULE: ./node_modules/antd/es/radio/radioButton.js
function radioButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { radioButton_typeof = function _typeof(obj) { return typeof obj; }; } else { radioButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return radioButton_typeof(obj); }

function radioButton_extends() { radioButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return radioButton_extends.apply(this, arguments); }

function radioButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function radioButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function radioButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) radioButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) radioButton_defineProperties(Constructor, staticProps); return Constructor; }

function radioButton_possibleConstructorReturn(self, call) { if (call && (radioButton_typeof(call) === "object" || typeof call === "function")) { return call; } return radioButton_assertThisInitialized(self); }

function radioButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function radioButton_getPrototypeOf(o) { radioButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return radioButton_getPrototypeOf(o); }

function radioButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) radioButton_setPrototypeOf(subClass, superClass); }

function radioButton_setPrototypeOf(o, p) { radioButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return radioButton_setPrototypeOf(o, p); }

var radioButton_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var radioButton_RadioButton =
/*#__PURE__*/
function (_React$Component) {
  radioButton_inherits(RadioButton, _React$Component);

  function RadioButton() {
    var _this;

    radioButton_classCallCheck(this, RadioButton);

    _this = radioButton_possibleConstructorReturn(this, radioButton_getPrototypeOf(RadioButton).apply(this, arguments));

    _this.renderRadioButton = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          radioProps = radioButton_rest(_a, ["prefixCls"]);

      var prefixCls = getPrefixCls('radio-button', customizePrefixCls);

      if (_this.context.radioGroup) {
        radioProps.checked = _this.props.value === _this.context.radioGroup.value;
        radioProps.disabled = _this.props.disabled || _this.context.radioGroup.disabled;
      }

      return react["createElement"](radio_Radio, radioButton_extends({
        prefixCls: prefixCls
      }, radioProps));
    };

    return _this;
  }

  radioButton_createClass(RadioButton, [{
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderRadioButton);
    }
  }]);

  return RadioButton;
}(react["Component"]);


radioButton_RadioButton.contextTypes = {
  radioGroup: prop_types["any"]
};
// CONCATENATED MODULE: ./node_modules/antd/es/radio/index.js
/* unused concated harmony import Button */
/* unused concated harmony import Group */



radio_Radio.Button = radioButton_RadioButton;
radio_Radio.Group = group;

/* harmony default export */ var es_radio = __webpack_exports__["a"] = (radio_Radio);

/***/ }),

/***/ "A90E":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("6sVZ"),
    nativeKeys = __webpack_require__("V6Ve");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "AzOL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BvKs");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);





var MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].ItemGroup;

function ModelSider(_ref) {
  var dataSource = _ref.dataSource,
      current = _ref.current,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["dataSource", "current"]);

  var handleMenu = function handleMenu(n) {
    return _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute(n.key);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, rest, {
    onClick: handleMenu,
    selectedKeys: [current],
    style: {
      minHeight: '100%'
    },
    mode: "inline"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].Item, {
    key: "/me/model/".concat(dataSource.id)
  }, "Info"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].Item, {
    key: "/me/model/".concat(dataSource.id, "/stats")
  }, "Stats"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItemGroup, {
    key: "g2",
    title: "Build"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].Item, {
    key: "/me/model/".concat(dataSource.id, "/anno")
  }, "Annotation"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].Item, {
    key: "/me/model/".concat(dataSource.id, "/train")
  }, "Training"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].Item, {
    key: "/me/model/".concat(dataSource.id, "/source")
  }, "Source")));
}

/* harmony default export */ __webpack_exports__["a"] = (ModelSider);

/***/ }),

/***/ "B8du":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "CH3K":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "CMye":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("GoyQ");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "CZoQ":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "DSRE":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("Kz5y"),
    stubFalse = __webpack_require__("B8du");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YuTi")(module)))

/***/ }),

/***/ "GDhZ":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("wF/u"),
    get = __webpack_require__("mwIZ"),
    hasIn = __webpack_require__("hgQt"),
    isKey = __webpack_require__("9ggG"),
    isStrictComparable = __webpack_require__("CMye"),
    matchesStrictComparable = __webpack_require__("IOzZ"),
    toKey = __webpack_require__("9Nap");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "HDyB":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc"),
    Uint8Array = __webpack_require__("JHRd"),
    eq = __webpack_require__("ljhN"),
    equalArrays = __webpack_require__("or5M"),
    mapToArray = __webpack_require__("7fqy"),
    setToArray = __webpack_require__("rEGp");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "HOxn":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "IOzZ":
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "JHRd":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("Kz5y");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "Juji":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "KwMD":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "L8xA":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "LGYb":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("1hJj"),
    arrayIncludes = __webpack_require__("jbM+"),
    arrayIncludesWith = __webpack_require__("Xt/L"),
    cacheHas = __webpack_require__("xYSL"),
    createSet = __webpack_require__("dQpi"),
    setToArray = __webpack_require__("rEGp");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "LXxW":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "MMmD":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("lSCD"),
    isLength = __webpack_require__("shjB");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "MvSz":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("LXxW"),
    stubArray = __webpack_require__("0ycA");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "O7RO":
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__("CMye"),
    keys = __webpack_require__("7GkX");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "Of+w":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "PgRs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("m/Pd")


/***/ }),

/***/ "QoRX":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "QqLw":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("tadb"),
    Map = __webpack_require__("ebwN"),
    Promise = __webpack_require__("HOxn"),
    Set = __webpack_require__("yGk4"),
    WeakMap = __webpack_require__("Of+w"),
    baseGetTag = __webpack_require__("NykK"),
    toSource = __webpack_require__("3Fdi");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "R/W3":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("KwMD"),
    baseIsNaN = __webpack_require__("2ajD"),
    strictIndexOf = __webpack_require__("CZoQ");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "Sxd8":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("ZCgT");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "Tckk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CtXQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wEI+");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var Avatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
    _this.state = {
      scale: 1,
      isImgExist: true
    };

    _this.setScale = function () {
      if (!_this.avatarChildren || !_this.avatarNode) {
        return;
      }

      var childrenWidth = _this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale

      var nodeWidth = _this.avatarNode.offsetWidth; // denominator is 0 is no meaning

      if (childrenWidth === 0 || nodeWidth === 0 || _this.lastChildrenWidth === childrenWidth && _this.lastNodeWidth === nodeWidth) {
        return;
      }

      _this.lastChildrenWidth = childrenWidth;
      _this.lastNodeWidth = nodeWidth; // add 4px gap for each side to get better performance

      _this.setState({
        scale: nodeWidth - 8 < childrenWidth ? (nodeWidth - 8) / childrenWidth : 1
      });
    };

    _this.handleImgLoadError = function () {
      var onError = _this.props.onError;
      var errorFlag = onError ? onError() : undefined;

      if (errorFlag !== false) {
        _this.setState({
          isImgExist: false
        });
      }
    };

    _this.renderAvatar = function (_ref) {
      var _classNames, _classNames2;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          shape = _a.shape,
          size = _a.size,
          src = _a.src,
          srcSet = _a.srcSet,
          icon = _a.icon,
          className = _a.className,
          alt = _a.alt,
          others = __rest(_a, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "alt"]);

      var _this$state = _this.state,
          isImgExist = _this$state.isImgExist,
          scale = _this$state.scale;
      var prefixCls = getPrefixCls('avatar', customizePrefixCls);
      var sizeCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
      var classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className, sizeCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames2, "".concat(prefixCls, "-image"), src && isImgExist), _defineProperty(_classNames2, "".concat(prefixCls, "-icon"), icon), _classNames2));
      var sizeStyle = typeof size === 'number' ? {
        width: size,
        height: size,
        lineHeight: "".concat(size, "px"),
        fontSize: icon ? size / 2 : 18
      } : {};
      var children = _this.props.children;

      if (src && isImgExist) {
        children = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
          src: src,
          srcSet: srcSet,
          onError: _this.handleImgLoadError,
          alt: alt
        });
      } else if (icon) {
        children = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
          type: icon
        });
      } else {
        var childrenNode = _this.avatarChildren;

        if (childrenNode || scale !== 1) {
          var transformString = "scale(".concat(scale, ") translateX(-50%)");
          var childrenStyle = {
            msTransform: transformString,
            WebkitTransform: transformString,
            transform: transformString
          };
          var sizeChildrenStyle = typeof size === 'number' ? {
            lineHeight: "".concat(size, "px")
          } : {};
          children = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
            className: "".concat(prefixCls, "-string"),
            ref: function ref(node) {
              return _this.avatarChildren = node;
            },
            style: _extends({}, sizeChildrenStyle, childrenStyle)
          }, children);
        } else {
          children = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
            className: "".concat(prefixCls, "-string"),
            ref: function ref(node) {
              return _this.avatarChildren = node;
            }
          }, children);
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", _extends({}, others, {
        style: _extends({}, sizeStyle, others.style),
        className: classString,
        ref: function ref(node) {
          return _this.avatarNode = node;
        }
      }), children);
    };

    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScale();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.setScale();

      if (prevProps.src !== this.props.src) {
        this.setState({
          isImgExist: true,
          scale: 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_config_provider__WEBPACK_IMPORTED_MODULE_3__[/* ConfigConsumer */ "a"], null, this.renderAvatar);
    }
  }]);

  return Avatar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Avatar.defaultProps = {
  shape: 'circle',
  size: 'default'
};

/***/ }),

/***/ "UNi/":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "UfWW":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("KwMD"),
    baseIteratee = __webpack_require__("ut/Y"),
    toInteger = __webpack_require__("Sxd8");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "V6Ve":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("kekF");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "VaNO":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "Xt/L":
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "ZCgT":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("tLB3");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "ZCpW":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__("lm/5"),
    getMatchData = __webpack_require__("O7RO"),
    matchesStrictComparable = __webpack_require__("IOzZ");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "b80T":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("UNi/"),
    isArguments = __webpack_require__("03A+"),
    isArray = __webpack_require__("Z0cm"),
    isBuffer = __webpack_require__("DSRE"),
    isIndex = __webpack_require__("wJg7"),
    isTypedArray = __webpack_require__("c6wG");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "c6wG":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("dD9F"),
    baseUnary = __webpack_require__("sEf8"),
    nodeUtil = __webpack_require__("mdPL");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "dD9F":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isLength = __webpack_require__("shjB"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "dQpi":
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__("yGk4"),
    noop = __webpack_require__("vN+2"),
    setToArray = __webpack_require__("rEGp");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "e5cp":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("fmRc"),
    equalArrays = __webpack_require__("or5M"),
    equalByTag = __webpack_require__("HDyB"),
    equalObjects = __webpack_require__("seXi"),
    getTag = __webpack_require__("QqLw"),
    isArray = __webpack_require__("Z0cm"),
    isBuffer = __webpack_require__("DSRE"),
    isTypedArray = __webpack_require__("c6wG");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "fR/l":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("CH3K"),
    isArray = __webpack_require__("Z0cm");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "fmRc":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xi7e"),
    stackClear = __webpack_require__("77Zs"),
    stackDelete = __webpack_require__("L8xA"),
    stackGet = __webpack_require__("gCq4"),
    stackHas = __webpack_require__("VaNO"),
    stackSet = __webpack_require__("0Cz8");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "ftKO":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "gCq4":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "hgQt":
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__("Juji"),
    hasPath = __webpack_require__("4sDh");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "jbM+":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("R/W3");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "kLXV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("QbLZ");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("iCc5");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("FYw3");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("mRg0");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__("l4aY");

// EXTERNAL MODULE: ./node_modules/rc-animate/es/Animate.js + 3 modules
var Animate = __webpack_require__("MFj2");

// CONCATENATED MODULE: ./node_modules/rc-dialog/es/LazyRenderBox.js






var LazyRenderBox_LazyRenderBox = function (_React$Component) {
    inherits_default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        classCallCheck_default()(this, LazyRenderBox);

        return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += " " + this.props.hiddenClassName;
        }
        var props = extends_default()({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return react["createElement"]("div", extends_default()({}, props));
    };

    return LazyRenderBox;
}(react["Component"]);

/* harmony default export */ var es_LazyRenderBox = (LazyRenderBox_LazyRenderBox);
// EXTERNAL MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__("qx4F");

// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog.js











var uuid = 0;
var openCount = 0;
/* eslint react/no-is-mounted:0 */
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog_Dialog = function (_React$Component) {
    inherits_default()(Dialog, _React$Component);

    function Dialog() {
        classCallCheck_default()(this, Dialog);

        var _this = possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));

        _this.onAnimateLeave = function () {
            var afterClose = _this.props.afterClose;
            // need demo?
            // https://github.com/react-component/dialog/pull/28

            if (_this.wrap) {
                _this.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            if (afterClose) {
                afterClose();
            }
        };
        _this.onDialogMouseDown = function () {
            _this.dialogMouseDown = true;
        };
        _this.onMaskMouseUp = function () {
            if (_this.dialogMouseDown) {
                _this.timeoutId = setTimeout(function () {
                    _this.dialogMouseDown = false;
                }, 0);
            }
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget && !_this.dialogMouseDown) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === KeyCode["a" /* default */].ESC) {
                e.stopPropagation();
                _this.close(e);
                return;
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === KeyCode["a" /* default */].TAB) {
                    var activeElement = document.activeElement;
                    var sentinelStart = _this.sentinelStart;
                    if (e.shiftKey) {
                        if (activeElement === sentinelStart) {
                            _this.sentinelEnd.focus();
                        }
                    } else if (activeElement === _this.sentinelEnd) {
                        sentinelStart.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = react["createElement"]("div", { className: prefixCls + '-footer', ref: _this.saveRef('footer') }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = react["createElement"]("div", { className: prefixCls + '-header', ref: _this.saveRef('header') }, react["createElement"]("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = react["createElement"]("button", { type: "button", onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, props.closeIcon || react["createElement"]("span", { className: prefixCls + '-close-x' }));
            }
            var style = extends_default()({}, props.style, dest);
            var sentinelStyle = { width: 0, height: 0, overflow: 'hidden' };
            var transitionName = _this.getTransitionName();
            var dialogElement = react["createElement"](es_LazyRenderBox, { key: "dialog-element", role: "document", ref: _this.saveRef('dialog'), style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible, onMouseDown: _this.onDialogMouseDown }, react["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelStart'), style: sentinelStyle, "aria-hidden": "true" }), react["createElement"]("div", { className: prefixCls + '-content' }, closer, header, react["createElement"]("div", extends_default()({ className: prefixCls + '-body', style: props.bodyStyle, ref: _this.saveRef('body') }, props.bodyProps), props.children), footer), react["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelEnd'), style: sentinelStyle, "aria-hidden": "true" }));
            return react["createElement"](Animate["a" /* default */], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return extends_default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return extends_default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = react["createElement"](es_LazyRenderBox, extends_default()({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = react["createElement"](Animate["a" /* default */], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.setScrollbar = function () {
            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
            }
        };
        _this.addScrollingEffect = function () {
            openCount++;
            if (openCount !== 1) {
                return;
            }
            _this.checkScrollbar();
            _this.setScrollbar();
            document.body.style.overflow = 'hidden';
            // this.adjustDialog();
        };
        _this.removeScrollingEffect = function () {
            openCount--;
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            _this.resetScrollbar();
            // this.resetAdjustments();
        };
        _this.close = function (e) {
            var onClose = _this.props.onClose;

            if (onClose) {
                onClose(e);
            }
        };
        _this.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                // workaround for missing window.innerWidth in IE8
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (_this.bodyIsOverflowing) {
                _this.scrollbarWidth = Object(getScrollBarSize["a" /* default */])();
            }
        };
        _this.resetScrollbar = function () {
            document.body.style.paddingRight = '';
        };
        _this.adjustDialog = function () {
            if (_this.wrap && _this.scrollbarWidth !== undefined) {
                var modalIsOverflowing = _this.wrap.scrollHeight > document.documentElement.clientHeight;
                _this.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
                _this.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
            }
        };
        _this.resetAdjustments = function () {
            if (_this.wrap) {
                _this.wrap.style.paddingLeft = _this.wrap.style.paddingLeft = '';
            }
        };
        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            };
        };
        return _this;
    }

    Dialog.prototype.componentWillMount = function componentWillMount() {
        this.inTransition = false;
        this.titleId = 'rcDialogTitle' + uuid++;
    };

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
        // if forceRender is true, set element style display to be none;
        if (this.props.forceRender && this.wrap) {
            this.wrap.style.display = 'none';
        }
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;
        var mousePosition = this.props.mousePosition;
        if (props.visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.addScrollingEffect();
                this.tryFocus();
                var dialogNode = react_dom["findDOMNode"](this.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (props.mask && this.lastOutSideFocusNode) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.visible || this.inTransition) {
            this.removeScrollingEffect();
        }
        clearTimeout(this.timeoutId);
    };

    Dialog.prototype.tryFocus = function tryFocus() {
        if (!Object(contains["a" /* default */])(this.wrap, document.activeElement)) {
            this.lastOutSideFocusNode = document.activeElement;
            this.sentinelStart.focus();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return react["createElement"]("div", null, this.getMaskElement(), react["createElement"]("div", extends_default()({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: this.saveRef('wrap'), onClick: maskClosable ? this.onMaskClick : null, onMouseUp: maskClosable ? this.onMaskMouseUp : null, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(react["Component"]);

/* harmony default export */ var es_Dialog = (Dialog_Dialog);

Dialog_Dialog.defaultProps = {
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog'
};
// EXTERNAL MODULE: ./node_modules/rc-util/es/ContainerRender.js
var ContainerRender = __webpack_require__("PIAm");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Portal.js
var Portal = __webpack_require__("QC+M");

// CONCATENATED MODULE: ./node_modules/rc-dialog/es/DialogWrap.js









var IS_REACT_16 = 'createPortal' in react_dom;

var DialogWrap_DialogWrap = function (_React$Component) {
    inherits_default()(DialogWrap, _React$Component);

    function DialogWrap() {
        classCallCheck_default()(this, DialogWrap);

        var _this = possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));

        _this.saveDialog = function (node) {
            _this._component = node;
        };
        _this.getComponent = function () {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return react["createElement"](es_Dialog, extends_default()({ ref: _this.saveDialog }, _this.props, extra, { key: "dialog" }));
        };
        // fix issue #10656
        /*
        * Custom container should not be return, because in the Portal component, it will remove the
        * return container element here, if the custom container is the only child of it's component,
        * like issue #10656, It will has a conflict with removeChild method in react-dom.
        * So here should add a child (div element) to custom container.
        * */
        _this.getContainer = function () {
            var container = document.createElement('div');
            if (_this.props.getContainer) {
                _this.props.getContainer().appendChild(container);
            } else {
                document.body.appendChild(container);
            }
            return container;
        };
        return _this;
    }

    DialogWrap.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref) {
        var visible = _ref.visible,
            forceRender = _ref.forceRender;

        return !!(this.props.visible || visible) || this.props.forceRender || forceRender;
    };

    DialogWrap.prototype.componentWillUnmount = function componentWillUnmount() {
        if (IS_REACT_16) {
            return;
        }
        if (this.props.visible) {
            this.renderComponent({
                afterClose: this.removeContainer,
                onClose: function onClose() {},

                visible: false
            });
        } else {
            this.removeContainer();
        }
    };

    DialogWrap.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            visible = _props.visible,
            forceRender = _props.forceRender;

        var portal = null;
        if (!IS_REACT_16) {
            return react["createElement"](ContainerRender["a" /* default */], { parent: this, visible: visible, autoDestroy: false, getComponent: this.getComponent, getContainer: this.getContainer, forceRender: forceRender }, function (_ref2) {
                var renderComponent = _ref2.renderComponent,
                    removeContainer = _ref2.removeContainer;

                _this2.renderComponent = renderComponent;
                _this2.removeContainer = removeContainer;
                return null;
            });
        }
        if (visible || forceRender || this._component) {
            portal = react["createElement"](Portal["a" /* default */], { getContainer: this.getContainer }, this.getComponent());
        }
        return portal;
    };

    return DialogWrap;
}(react["Component"]);

DialogWrap_DialogWrap.defaultProps = {
    visible: false,
    forceRender: false
};
/* harmony default export */ var es_DialogWrap = (DialogWrap_DialogWrap);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__("zT1h");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/default.js + 3 modules
var locale_provider_default = __webpack_require__("Kz+r");

// CONCATENATED MODULE: ./node_modules/antd/es/modal/locale.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var locale_runtimeLocale = _extends({}, locale_provider_default["a" /* default */].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    locale_runtimeLocale = _extends({}, locale_runtimeLocale, newLocale);
  } else {
    locale_runtimeLocale = _extends({}, locale_provider_default["a" /* default */].Modal);
  }
}
function getConfirmLocale() {
  return locale_runtimeLocale;
}
// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var es_icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js
var LocaleReceiver = __webpack_require__("YMnH");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// CONCATENATED MODULE: ./node_modules/antd/es/modal/Modal.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Modal_extends() { Modal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Modal_extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var Modal_mousePosition;
var destroyFns = []; // ref: https://github.com/ant-design/ant-design/issues/15795

var getClickPosition = function getClickPosition(e) {
  Modal_mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    return Modal_mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  Object(addEventListener["a" /* default */])(document.documentElement, 'click', getClickPosition);
}

var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));

    _this.handleCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.handleOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    _this.renderFooter = function (locale) {
      var _this$props = _this.props,
          okText = _this$props.okText,
          okType = _this$props.okType,
          cancelText = _this$props.cancelText,
          confirmLoading = _this$props.confirmLoading;
      return react["createElement"]("div", null, react["createElement"](es_button["a" /* default */], Modal_extends({
        onClick: _this.handleCancel
      }, _this.props.cancelButtonProps), cancelText || locale.cancelText), react["createElement"](es_button["a" /* default */], Modal_extends({
        type: okType,
        loading: confirmLoading,
        onClick: _this.handleOk
      }, _this.props.okButtonProps), okText || locale.okText));
    };

    _this.renderModal = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          footer = _a.footer,
          visible = _a.visible,
          wrapClassName = _a.wrapClassName,
          centered = _a.centered,
          getContainer = _a.getContainer,
          restProps = __rest(_a, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer"]);

      var prefixCls = getPrefixCls('modal', customizePrefixCls);
      var defaultFooter = react["createElement"](LocaleReceiver["a" /* default */], {
        componentName: "Modal",
        defaultLocale: getConfirmLocale()
      }, _this.renderFooter);
      var closeIcon = react["createElement"]("span", {
        className: "".concat(prefixCls, "-close-x")
      }, react["createElement"](es_icon["a" /* default */], {
        className: "".concat(prefixCls, "-close-icon"),
        type: 'close'
      }));
      return react["createElement"](es_DialogWrap, Modal_extends({}, restProps, {
        getContainer: getContainer || getContextPopupContainer,
        prefixCls: prefixCls,
        wrapClassName: classnames_default()(_defineProperty({}, "".concat(prefixCls, "-centered"), !!centered), wrapClassName),
        footer: footer === undefined ? defaultFooter : footer,
        visible: visible,
        mousePosition: Modal_mousePosition,
        onClose: _this.handleCancel,
        closeIcon: closeIcon
      }));
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderModal);
    }
  }]);

  return Modal;
}(react["Component"]);


Modal_Modal.defaultProps = {
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary'
};
Modal_Modal.propTypes = {
  prefixCls: prop_types["string"],
  onOk: prop_types["func"],
  onCancel: prop_types["func"],
  okText: prop_types["node"],
  cancelText: prop_types["node"],
  centered: prop_types["bool"],
  width: prop_types["oneOfType"]([prop_types["number"], prop_types["string"]]),
  confirmLoading: prop_types["bool"],
  visible: prop_types["bool"],
  footer: prop_types["node"],
  title: prop_types["node"],
  closable: prop_types["bool"]
};
// CONCATENATED MODULE: ./node_modules/antd/es/modal/ActionButton.js
function ActionButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionButton_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionButton_typeof(obj); }

function ActionButton_extends() { ActionButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ActionButton_extends.apply(this, arguments); }

function ActionButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionButton_defineProperties(Constructor, staticProps); return Constructor; }

function ActionButton_possibleConstructorReturn(self, call) { if (call && (ActionButton_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionButton_assertThisInitialized(self); }

function ActionButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionButton_getPrototypeOf(o) { ActionButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionButton_getPrototypeOf(o); }

function ActionButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionButton_setPrototypeOf(subClass, superClass); }

function ActionButton_setPrototypeOf(o, p) { ActionButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionButton_setPrototypeOf(o, p); }





var ActionButton_ActionButton =
/*#__PURE__*/
function (_React$Component) {
  ActionButton_inherits(ActionButton, _React$Component);

  function ActionButton(props) {
    var _this;

    ActionButton_classCallCheck(this, ActionButton);

    _this = ActionButton_possibleConstructorReturn(this, ActionButton_getPrototypeOf(ActionButton).call(this, props));

    _this.onClick = function () {
      var _this$props = _this.props,
          actionFn = _this$props.actionFn,
          closeModal = _this$props.closeModal;

      if (actionFn) {
        var ret;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();

          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          _this.setState({
            loading: true
          });

          ret.then(function () {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal.apply(void 0, arguments);
          }, function (e) {
            // Emit error when catch promise reject
            console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

            _this.setState({
              loading: false
            });
          });
        }
      } else {
        closeModal();
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  ActionButton_createClass(ActionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var $this = react_dom["findDOMNode"](this);
        this.timeoutId = setTimeout(function () {
          return $this.focus();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          children = _this$props2.children,
          buttonProps = _this$props2.buttonProps;
      var loading = this.state.loading;
      return react["createElement"](es_button["a" /* default */], ActionButton_extends({
        type: type,
        onClick: this.onClick,
        loading: loading
      }, buttonProps), children);
    }
  }]);

  return ActionButton;
}(react["Component"]);


// EXTERNAL MODULE: ./node_modules/antd/es/_util/warning.js
var warning = __webpack_require__("6CfX");

// CONCATENATED MODULE: ./node_modules/antd/es/modal/confirm.js
var confirm_this = undefined;

function confirm_extends() { confirm_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return confirm_extends.apply(this, arguments); }

function confirm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var confirm_IS_REACT_16 = !!react_dom["createPortal"];

var confirm_ConfirmDialog = function ConfirmDialog(props) {
  var onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$iconType = props.iconType,
      iconType = _props$iconType === void 0 ? 'question-circle' : _props$iconType;
  Object(warning["a" /* default */])(!('iconType' in props), 'Modal', "The property 'iconType' is deprecated. Use the property 'icon' instead."); // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon

  var icon = props.icon === undefined ? iconType : props.icon;
  var okType = props.okType || 'primary';
  var prefixCls = props.prefixCls || 'ant-modal';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var runtimeLocale = getConfirmLocale();
  var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = props.cancelText || runtimeLocale.cancelText;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = classnames_default()(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), props.className);
  var cancelButton = okCancel && react["createElement"](ActionButton_ActionButton, {
    actionFn: onCancel,
    closeModal: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps
  }, cancelText);
  var iconNode = typeof icon === 'string' ? react["createElement"](es_icon["a" /* default */], {
    type: icon
  }) : icon;
  return react["createElement"](Modal_Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames_default()(confirm_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!props.centered)),
    onCancel: close.bind(confirm_this, {
      triggerCancel: true
    }),
    visible: visible,
    title: "",
    transitionName: transitionName,
    footer: "",
    maskTransitionName: maskTransitionName,
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer
  }, react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, iconNode, react["createElement"]("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, react["createElement"](ActionButton_ActionButton, {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps
  }, okText))));
};

function confirm_confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  var currentConfig = confirm_extends({}, config, {
    close: close,
    visible: true
  });

  function close() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    currentConfig = confirm_extends({}, currentConfig, {
      visible: false,
      afterClose: destroy.bind.apply(destroy, [this].concat(args))
    });

    if (confirm_IS_REACT_16) {
      render(currentConfig);
    } else {
      destroy.apply(void 0, args);
    }
  }

  function update(newConfig) {
    currentConfig = confirm_extends({}, currentConfig, newConfig);
    render(currentConfig);
  }

  function destroy() {
    var unmountResult = react_dom["unmountComponentAtNode"](div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i];

      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render(props) {
    react_dom["render"](react["createElement"](confirm_ConfirmDialog, props), div);
  }

  render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
}
// CONCATENATED MODULE: ./node_modules/antd/es/modal/index.js
function modal_extends() { modal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return modal_extends.apply(this, arguments); }






Modal_Modal.info = function (props) {
  var config = modal_extends({
    type: 'info',
    icon: react["createElement"](es_icon["a" /* default */], {
      type: "info-circle"
    }),
    okCancel: false
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.success = function (props) {
  var config = modal_extends({
    type: 'success',
    icon: react["createElement"](es_icon["a" /* default */], {
      type: "check-circle"
    }),
    okCancel: false
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.error = function (props) {
  var config = modal_extends({
    type: 'error',
    icon: react["createElement"](es_icon["a" /* default */], {
      type: "close-circle"
    }),
    okCancel: false
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.warning = Modal_Modal.warn = function (props) {
  var config = modal_extends({
    type: 'warning',
    icon: react["createElement"](es_icon["a" /* default */], {
      type: "exclamation-circle"
    }),
    okCancel: false
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.confirm = function (props) {
  var config = modal_extends({
    type: 'confirm',
    okCancel: true
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.destroyAll = function () {
  while (destroyFns.length) {
    var close = destroyFns.pop();

    if (close) {
      close();
    }
  }
};

/* harmony default export */ var modal = __webpack_exports__["a"] = (Modal_Modal);

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

/***/ "kekF":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "lm/5":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("fmRc"),
    baseIsEqual = __webpack_require__("wF/u");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "mdPL":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("WFqU");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YuTi")(module)))

/***/ }),

/***/ "mr32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/omit.js/es/index.js
var es = __webpack_require__("BGR+");

// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("VCL8");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// CONCATENATED MODULE: ./node_modules/antd/es/tag/CheckableTag.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var CheckableTag_CheckableTag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckableTag, _React$Component);

  function CheckableTag() {
    var _this;

    _classCallCheck(this, CheckableTag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckableTag).apply(this, arguments));

    _this.handleClick = function () {
      var _this$props = _this.props,
          checked = _this$props.checked,
          onChange = _this$props.onChange;

      if (onChange) {
        onChange(!checked);
      }
    };

    _this.renderCheckableTag = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          checked = _a.checked,
          restProps = __rest(_a, ["prefixCls", "className", "checked"]);

      var prefixCls = getPrefixCls('tag', customizePrefixCls);
      var cls = classnames_default()(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checkable"), true), _defineProperty(_classNames, "".concat(prefixCls, "-checkable-checked"), checked), _classNames), className);
      delete restProps.onChange; // TypeScript cannot check delete now.

      return react["createElement"]("div", _extends({}, restProps, {
        className: cls,
        onClick: _this.handleClick
      }));
    };

    return _this;
  }

  _createClass(CheckableTag, [{
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderCheckableTag);
    }
  }]);

  return CheckableTag;
}(react["Component"]);


// EXTERNAL MODULE: ./node_modules/antd/es/_util/colors.js
var colors = __webpack_require__("09Wf");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/warning.js
var warning = __webpack_require__("6CfX");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave.js
var wave = __webpack_require__("g0mS");

// CONCATENATED MODULE: ./node_modules/antd/es/tag/index.js
function tag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tag_typeof = function _typeof(obj) { return typeof obj; }; } else { tag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tag_typeof(obj); }

function tag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tag_extends() { tag_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tag_extends.apply(this, arguments); }

function tag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tag_createClass(Constructor, protoProps, staticProps) { if (protoProps) tag_defineProperties(Constructor.prototype, protoProps); if (staticProps) tag_defineProperties(Constructor, staticProps); return Constructor; }

function tag_possibleConstructorReturn(self, call) { if (call && (tag_typeof(call) === "object" || typeof call === "function")) { return call; } return tag_assertThisInitialized(self); }

function tag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tag_getPrototypeOf(o) { tag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tag_getPrototypeOf(o); }

function tag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tag_setPrototypeOf(subClass, superClass); }

function tag_setPrototypeOf(o, p) { tag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tag_setPrototypeOf(o, p); }

var tag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var PresetColorRegex = new RegExp("^(".concat(colors["a" /* PresetColorTypes */].join('|'), ")(-inverse)?$"));

var tag_Tag =
/*#__PURE__*/
function (_React$Component) {
  tag_inherits(Tag, _React$Component);

  function Tag(props) {
    var _this;

    tag_classCallCheck(this, Tag);

    _this = tag_possibleConstructorReturn(this, tag_getPrototypeOf(Tag).call(this, props));
    _this.state = {
      visible: true
    };

    _this.handleIconClick = function (e) {
      _this.setVisible(false, e);
    };

    _this.renderTag = function (configProps) {
      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          children = _a.children,
          otherProps = tag_rest(_a, ["prefixCls", "children"]);

      var isNeedWave = 'onClick' in otherProps || children && children.type === 'a';
      var divProps = Object(es["a" /* default */])(otherProps, ['onClose', 'afterClose', 'color', 'visible', 'closable']);
      return isNeedWave ? react["createElement"](wave["a" /* default */], null, react["createElement"]("div", tag_extends({}, divProps, {
        className: _this.getTagClassName(configProps),
        style: _this.getTagStyle()
      }), children, _this.renderCloseIcon())) : react["createElement"]("div", tag_extends({}, divProps, {
        className: _this.getTagClassName(configProps),
        style: _this.getTagStyle()
      }), children, _this.renderCloseIcon());
    };

    Object(warning["a" /* default */])(!('afterClose' in props), 'Tag', "'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version.");
    return _this;
  }

  tag_createClass(Tag, [{
    key: "setVisible",
    value: function setVisible(visible, e) {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          afterClose = _this$props.afterClose;

      if (onClose) {
        onClose(e);
      }

      if (afterClose && !onClose) {
        // next version remove.
        afterClose();
      }

      if (e.defaultPrevented) {
        return;
      }

      if (!('visible' in this.props)) {
        this.setState({
          visible: visible
        });
      }
    }
  }, {
    key: "isPresetColor",
    value: function isPresetColor(color) {
      if (!color) {
        return false;
      }

      return PresetColorRegex.test(color);
    }
  }, {
    key: "getTagStyle",
    value: function getTagStyle() {
      var _this$props2 = this.props,
          color = _this$props2.color,
          style = _this$props2.style;
      var isPresetColor = this.isPresetColor(color);
      return tag_extends({
        backgroundColor: color && !isPresetColor ? color : undefined
      }, style);
    }
  }, {
    key: "getTagClassName",
    value: function getTagClassName(_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props3 = this.props,
          customizePrefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          color = _this$props3.color;
      var visible = this.state.visible;
      var isPresetColor = this.isPresetColor(color);
      var prefixCls = getPrefixCls('tag', customizePrefixCls);
      return classnames_default()(prefixCls, (_classNames = {}, tag_defineProperty(_classNames, "".concat(prefixCls, "-").concat(color), isPresetColor), tag_defineProperty(_classNames, "".concat(prefixCls, "-has-color"), color && !isPresetColor), tag_defineProperty(_classNames, "".concat(prefixCls, "-hidden"), !visible), _classNames), className);
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      var closable = this.props.closable;
      return closable ? react["createElement"](icon["a" /* default */], {
        type: "close",
        onClick: this.handleIconClick
      }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderTag);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('visible' in nextProps) {
        return {
          visible: nextProps.visible
        };
      }

      return null;
    }
  }]);

  return Tag;
}(react["Component"]);

tag_Tag.CheckableTag = CheckableTag_CheckableTag;
tag_Tag.defaultProps = {
  closable: false
};
Object(react_lifecycles_compat_es["polyfill"])(tag_Tag);
/* harmony default export */ var tag = __webpack_exports__["a"] = (tag_Tag);

/***/ }),

/***/ "or5M":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("1hJj"),
    arraySome = __webpack_require__("QoRX"),
    cacheHas = __webpack_require__("xYSL");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "pvUb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfwq");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("doui");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tsqr");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kLXV");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("BMrR");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("kPKH");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bx4M");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2/Rp");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Tckk");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("8z0m");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("CtXQ");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("wFql");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("9yH6");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("mr32");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("5rEg");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("m/Pd");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("eomm");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_UserLayout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("y6HG");
/* harmony import */ var _components_MeModelSider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("AzOL");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("SMlj");














var colorUI = ['#36A2EB', '#FFCE56', '#2ecc71', '#9b59b6', '#7ed6df', '#686de0'];

var getRandomInt = function getRandomInt() {
  var colorArr = ['#FF6384', '#36A2EB', '#FFCE56', '#2ecc71', '#686de0'];
  var min = 0,
      max = colorArr.length - 1;
  min = Math.ceil(min);
  max = Math.floor(max);
  var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return colorArr[randomInt];
};

function ModelView(props) {
  if (props.errorCode) return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_19___default.a, {
    statusCode: props.errorCode
  });
  var selectedKeys = props.route.parsedUrl.pathname;
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_21__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(props.model),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      model = _useState2[0],
      setModel = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(props.config),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      config = _useState4[0],
      setConfig = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      inputValue = _useState6[0],
      setInputValue = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      inputVisible = _useState8[0],
      setInputVisible = _useState8[1];

  var handleModelRemove = function handleModelRemove() {
    var handleOk =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                  method: 'DELETE',
                  url: props.modelApi,
                  headers: {
                    authorization: props.token
                  }
                });

              case 2:
                response = _context.sent;

                if (response.status === 200) {
                  _routes__WEBPACK_IMPORTED_MODULE_22__["Router"].pushRoute('/dashboard');
                  antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Modal berhasil dihapus.");
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

    antd__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].confirm({
      title: 'Are you sure?',
      content: "You will not be able to recover this model.",
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel'
    });
  };

  var handleInputVisible =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return setInputVisible(true);

            case 2:
              _context2.next = 4;
              return inputRef.current.focus();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleInputVisible() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleEditName =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(text) {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                method: 'PATCH',
                url: props.modelApi,
                headers: {
                  authorization: props.token
                },
                data: {
                  name: text
                }
              });

            case 2:
              response = _context3.sent;

              if (response.status === 200) {
                setModel(function (state) {
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
                    name: response.data.name
                  });
                });
                antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Informasi berhasil diubah.");
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleEditName(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleEditDescription =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(text) {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                method: 'PATCH',
                url: props.modelApi,
                headers: {
                  authorization: props.token
                },
                data: {
                  desc: text
                }
              });

            case 2:
              response = _context4.sent;

              if (response.status === 200) {
                setModel(function (state) {
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
                    desc: response.data.desc
                  });
                });
                antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Informasi berhasil diubah.");
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleEditDescription(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleRadioPrivate =
  /*#__PURE__*/
  function () {
    var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(e) {
      var handleOk;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              handleOk =
              /*#__PURE__*/
              function () {
                var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
                  var response;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                            method: 'PATCH',
                            url: props.modelApi,
                            headers: {
                              authorization: props.token
                            },
                            data: {
                              isPrivate: e.target.value
                            }
                          });

                        case 2:
                          response = _context5.sent;

                          if (response.status === 200) {
                            setModel(function (state) {
                              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
                                isPrivate: response.data.isPrivate
                              });
                            });
                            antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Informasi berhasil diubah.");
                          }

                        case 4:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function handleOk() {
                  return _ref6.apply(this, arguments);
                };
              }();

              if (e.target.value === true) handleOk();else antd__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].confirm({
                title: 'Are you sure?',
                content: 'You will user can see your model in explore.',
                okText: 'Yes',
                onOk: handleOk,
                cancelText: 'Cancel'
              });

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function handleRadioPrivate(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var beforeUpload = function beforeUpload(file) {
    var isPNG = file.type === 'image/png';

    if (!isPNG) {
      antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error('You can only upload PNG file!');
    }

    var isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error('Image must smaller than 2MB!');
    }

    return isPNG && isLt2M;
  }; // const handleRadioAnnotator = e => {
  //   const handleOk = async () => {
  //     const response = await axios({
  //       method: 'PATCH',
  //       url: props.modelApi,
  //       headers: {authorization: props.token},
  //       data: {annotator: e.target.value}
  //     })
  //     if (response.status === 200) {
  //       setModel(state => ({...state, annotator: response.data.annotator}))
  //     }
  //   }
  //   Modal.confirm({
  //     title: 'Confirm',
  //     content: 'Bla bla ...',
  //     okText: 'Yes',
  //     onOk: handleOk,
  //     cancelText: 'Cancel',
  //   })
  // }


  var handleAddLabel =
  /*#__PURE__*/
  function () {
    var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7() {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                method: 'PATCH',
                url: props.modelApi,
                headers: {
                  authorization: props.token
                },
                data: {
                  label: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(model.label), [inputValue])
                }
              });

            case 2:
              response = _context7.sent;

              if (response.status === 200) {
                setModel(function (state) {
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
                    label: response.data.label
                  });
                });
                setInputValue(null);
                setInputVisible(false);
                antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Informasi berhasil diubah.");
              }

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function handleAddLabel() {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleOnCloseLabel = function handleOnCloseLabel(key) {
    var handleOk =
    /*#__PURE__*/
    function () {
      var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                  method: 'PATCH',
                  url: props.modelApi,
                  headers: {
                    authorization: props.token
                  },
                  data: {
                    label: model.label.filter(function (item, i) {
                      return i !== key;
                    })
                  }
                });

              case 2:
                response = _context8.sent;

                if (response.status === 200) {
                  setModel(function (state) {
                    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
                      label: response.data.label
                    });
                  });
                  antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Informasi berhasil diubah.");
                }

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function handleOk() {
        return _ref8.apply(this, arguments);
      };
    }();

    antd__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel'
    });
  };

  var handleRadioMenuStats = function handleRadioMenuStats(e) {
    var handleOk =
    /*#__PURE__*/
    function () {
      var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                  method: 'PATCH',
                  url: "".concat(props.modelApi, "/config"),
                  headers: {
                    authorization: props.token
                  },
                  data: {
                    UIStats: e.target.value
                  }
                });

              case 2:
                response = _context9.sent;

                if (response.status === 200) {
                  setConfig(function (state) {
                    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
                      UIStats: response.data.configUI.UIStats
                    });
                  });
                  antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Informasi berhasil diubah.");
                }

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function handleOk() {
        return _ref9.apply(this, arguments);
      };
    }();

    if (e.target.value === false) handleOk();else antd__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].confirm({
      title: 'Are you sure?',
      content: 'You will other can see stats your model.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel'
    });
  }; // const handleRadioMenuRun = e => {
  //   const handleOk = async () => {
  //     const response = await axios({
  //       method: 'PATCH',
  //       url: `${props.modelApi}/config`,
  //       headers: {authorization: props.token},
  //       data: {UIRun: e.target.value}
  //     })
  //     if (response.status === 200) {
  //       setConfig(state => ({...state, UIRun: response.data.configUI.UIRun}))
  //     }
  //   }
  //   if (e.target.value === false) handleOk() 
  //   else
  //     Modal.confirm({
  //       title: 'Are you sure?',
  //       content: 'You will users can make annotation in your model.',
  //       okText: 'Yes',
  //       onOk: handleOk,
  //       cancelText: 'Cancel',
  //     })
  // }


  var handleRadioAnnotation = function handleRadioAnnotation(e) {
    var handleOk =
    /*#__PURE__*/
    function () {
      var _ref10 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                  method: 'PATCH',
                  url: "".concat(props.modelApi, "/config"),
                  headers: {
                    authorization: props.token
                  },
                  data: {
                    UIAnnotation: e.target.value
                  }
                });

              case 2:
                response = _context10.sent;

                if (response.status === 200) {
                  setConfig(function (state) {
                    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
                      UIAnnotation: response.data.configUI.UIAnnotation
                    });
                  });
                  antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Informasi berhasil diubah.");
                }

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function handleOk() {
        return _ref10.apply(this, arguments);
      };
    }();

    if (e.target.value === false) handleOk();else antd__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].confirm({
      title: 'Are you sure?',
      content: 'You will users can make annotation in your model.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel'
    });
  };

  var uploudAvatar = {
    accept: 'image/png',
    name: 'file',
    action: "//jsonplaceholder.typicode.com/posts/",
    showUploadList: false,
    beforeUpload: beforeUpload,
    onChange: function () {
      var _onChange = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11(info) {
        var formData, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (info.file.status !== 'uploading') {}

                if (!(info.file.status === 'done')) {
                  _context11.next = 10;
                  break;
                }

                formData = new FormData();
                formData.append('avatar', info.file.originFileObj);
                _context11.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_20___default()({
                  method: 'PATCH',
                  url: "".concat(props.apiUrl, "/avatar/").concat(model.id),
                  data: formData,
                  headers: {
                    authorization: props.token
                  }
                });

              case 6:
                response = _context11.sent;

                if (response.status === 200) {
                  setModel(function (state) {
                    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
                      avatar: response.data
                    });
                  });
                  antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].success("Avatar changed successfully.");
                  window.location.reload();
                }

                _context11.next = 11;
                break;

              case 10:
                if (info.file.status === 'error') {
                  antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("".concat(info.file.name, " file upload failed."));
                }

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function onChange(_x4) {
        return _onChange.apply(this, arguments);
      }

      return onChange;
    }()
  };
  return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_components_UserLayout__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], props, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    type: "flex",
    gutter: 32
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_18___default.a, null, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("title", null, "My Model Info - Sistem Anotasi Named Entity")), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    xs: 24,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_components_MeModelSider__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
    current: selectedKeys,
    dataSource: model
  })), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    xs: 24,
    md: 18
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    className: "ant-custom",
    actions: [react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      className: "btn-danger",
      onClick: handleModelRemove
    }, "Delete Model")]
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    bordered: false
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end'
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    size: 70,
    src: model.avatar.path
  }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], uploudAvatar, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("a", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
    type: "edit"
  })))))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    md: 20
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    bordered: false
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Title, {
    level: 4,
    editable: {
      onChange: handleEditName
    }
  }, model.name), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Paragraph, {
    editable: {
      onChange: handleEditDescription
    }
  }, model.desc)), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    md: 12,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Group, {
    value: model.isPrivate,
    onChange: handleRadioPrivate,
    buttonStyle: "solid"
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Button, {
    value: true
  }, "Private"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Button, {
    value: false
  }, "Public"))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    md: 12,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Annotator"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Group, {
    value: model.annotator,
    buttonStyle: "solid"
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Button, {
    value: "classifier"
  }, "Classifier"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Button, {
    value: "extractor"
  }, "Extractor"))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    md: 24,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Label"), model.label.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
      key: key,
      className: "ant-custom",
      color: colorUI[key],
      style: {
        marginBottom: 8
      },
      onClose: function onClose() {
        return handleOnCloseLabel(key);
      },
      closable: true
    }, item);
  }), inputVisible && react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
    ref: inputRef,
    style: {
      width: 90
    },
    type: "text",
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    onPressEnter: handleAddLabel
  }), !inputVisible && react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
    className: "ant-custom",
    style: {
      background: '#fff',
      borderStyle: 'dashed',
      cursor: 'pointer'
    },
    onClick: handleInputVisible
  }, "New Label")))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Text, {
    style: {
      marginBottom: 16
    },
    strong: true
  }, "UI Control"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    md: 12,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Menu Stats"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Group, {
    value: config.UIStats,
    onChange: handleRadioMenuStats,
    buttonStyle: "solid"
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Button, {
    value: true
  }, "Show"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Button, {
    value: false
  }, "Hide"))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    md: 12,
    style: {
      marginBottom: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Text, {
    style: {
      display: "block",
      marginBottom: 8
    },
    type: "secondary"
  }, "Menu Annotation"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Group, {
    value: config.UIAnnotation,
    onChange: handleRadioAnnotation,
    buttonStyle: "solid"
  }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Button, {
    value: true
  }, "Show"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Button, {
    value: false
  }, "Hide")))))))))))));
}

ModelView.getInitialProps =
/*#__PURE__*/
function () {
  var _ref12 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12(_ref11) {
    var apiUrl, token, query, id, modelApi, model, config;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            apiUrl = _ref11.apiUrl, token = _ref11.token, query = _ref11.query;
            id = query.id;
            modelApi = "".concat(apiUrl, "/model/").concat(id);
            _context12.prev = 3;
            _context12.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_20___default()({
              method: "GET",
              url: modelApi,
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 6:
            model = _context12.sent;
            _context12.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_20___default()({
              method: "GET",
              url: "".concat(modelApi, "/config"),
              headers: {
                authorization: token
              }
            }).then(function (res) {
              return res.data;
            });

          case 9:
            config = _context12.sent;
            return _context12.abrupt("return", {
              modelApi: modelApi,
              model: model,
              config: config
            });

          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](3);
            return _context12.abrupt("return", {
              errorCode: _context12.t0.response.status
            });

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[3, 13]]);
  }));

  return function (_x5) {
    return _ref12.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_25__[/* withAuthSync */ "c"])(ModelView));

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

/***/ "qPyV":
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__("ut/Y"),
    baseUniq = __webpack_require__("LGYb");

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ "qZTm":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("fR/l"),
    getSymbols = __webpack_require__("MvSz"),
    keys = __webpack_require__("7GkX");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "qx4F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollBarSize; });
var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

/***/ }),

/***/ "rEGp":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "sEf8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "seXi":
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__("qZTm");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "tadb":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "ut/Y":
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__("ZCpW"),
    baseMatchesProperty = __webpack_require__("GDhZ"),
    identity = __webpack_require__("zZ0H"),
    isArray = __webpack_require__("Z0cm"),
    property = __webpack_require__("+c4W");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "vN+2":
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "wF/u":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__("e5cp"),
    isObjectLike = __webpack_require__("ExA7");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "x1Ya":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("jo6Y");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("QbLZ");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("iCc5");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("FYw3");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("mRg0");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("VCL8");

// CONCATENATED MODULE: ./node_modules/rc-checkbox/es/Checkbox.js










var Checkbox_Checkbox = function (_Component) {
  inherits_default()(Checkbox, _Component);

  function Checkbox(props) {
    classCallCheck_default()(this, Checkbox);

    var _this = possibleConstructorReturn_default()(this, _Component.call(this, props));

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (disabled) {
        return;
      }
      if (!('checked' in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }
      if (onChange) {
        onChange({
          target: extends_default()({}, _this.props, {
            checked: e.target.checked
          }),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },

          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    var checked = 'checked' in props ? props.checked : props.defaultChecked;

    _this.state = {
      checked: checked
    };
    return _this;
  }

  Checkbox.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if ('checked' in props) {
      return extends_default()({}, state, {
        checked: props.checked
      });
    }
    return null;
  };

  Checkbox.prototype.focus = function focus() {
    this.input.focus();
  };

  Checkbox.prototype.blur = function blur() {
    this.input.blur();
  };

  Checkbox.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        style = _props.style,
        name = _props.name,
        id = _props.id,
        type = _props.type,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        tabIndex = _props.tabIndex,
        onClick = _props.onClick,
        onFocus = _props.onFocus,
        onBlur = _props.onBlur,
        autoFocus = _props.autoFocus,
        value = _props.value,
        others = objectWithoutProperties_default()(_props, ['prefixCls', 'className', 'style', 'name', 'id', 'type', 'disabled', 'readOnly', 'tabIndex', 'onClick', 'onFocus', 'onBlur', 'autoFocus', 'value']);

    var globalProps = Object.keys(others).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }
      return prev;
    }, {});

    var checked = this.state.checked;

    var classString = classnames_default()(prefixCls, className, (_classNames = {}, _classNames[prefixCls + '-checked'] = checked, _classNames[prefixCls + '-disabled'] = disabled, _classNames));

    return react_default.a.createElement(
      'span',
      { className: classString, style: style },
      react_default.a.createElement('input', extends_default()({
        name: name,
        id: id,
        type: type,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: prefixCls + '-input',
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)),
      react_default.a.createElement('span', { className: prefixCls + '-inner' })
    );
  };

  return Checkbox;
}(react["Component"]);

Checkbox_Checkbox.propTypes = {
  prefixCls: prop_types_default.a.string,
  className: prop_types_default.a.string,
  style: prop_types_default.a.object,
  name: prop_types_default.a.string,
  id: prop_types_default.a.string,
  type: prop_types_default.a.string,
  defaultChecked: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.bool]),
  checked: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.bool]),
  disabled: prop_types_default.a.bool,
  onFocus: prop_types_default.a.func,
  onBlur: prop_types_default.a.func,
  onChange: prop_types_default.a.func,
  onClick: prop_types_default.a.func,
  tabIndex: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  readOnly: prop_types_default.a.bool,
  autoFocus: prop_types_default.a.bool,
  value: prop_types_default.a.any
};
Checkbox_Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {}
};


Object(react_lifecycles_compat_es["polyfill"])(Checkbox_Checkbox);

/* harmony default export */ var es_Checkbox = (Checkbox_Checkbox);
// CONCATENATED MODULE: ./node_modules/rc-checkbox/es/index.js


/* harmony default export */ var es = __webpack_exports__["a"] = (es_Checkbox);

/***/ }),

/***/ "xYSL":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "yGk4":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "zZ0H":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ })

},[["5aQc","5d41","9da1"]]]);