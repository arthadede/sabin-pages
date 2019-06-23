(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["1215"],{

/***/ "/ezw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Avatar.js
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




var Avatar_SkeletonAvatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SkeletonAvatar, _React$Component);

  function SkeletonAvatar() {
    _classCallCheck(this, SkeletonAvatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(SkeletonAvatar).apply(this, arguments));
  }

  _createClass(SkeletonAvatar, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          size = _this$props.size,
          shape = _this$props.shape;
      var sizeCls = classnames_default()((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
      var shapeCls = classnames_default()((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), _defineProperty(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), _classNames2));
      var sizeStyle = typeof size === 'number' ? {
        width: size,
        height: size,
        lineHeight: "".concat(size, "px")
      } : {};
      return react["createElement"]("span", {
        className: classnames_default()(prefixCls, className, sizeCls, shapeCls),
        style: _extends({}, sizeStyle, style)
      });
    }
  }]);

  return SkeletonAvatar;
}(react["Component"]);

Avatar_SkeletonAvatar.defaultProps = {
  size: 'large'
};
/* harmony default export */ var Avatar = (Avatar_SkeletonAvatar);
// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Title.js
function Title_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Title_typeof = function _typeof(obj) { return typeof obj; }; } else { Title_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Title_typeof(obj); }

function Title_extends() { Title_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Title_extends.apply(this, arguments); }

function Title_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Title_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Title_createClass(Constructor, protoProps, staticProps) { if (protoProps) Title_defineProperties(Constructor.prototype, protoProps); if (staticProps) Title_defineProperties(Constructor, staticProps); return Constructor; }

function Title_possibleConstructorReturn(self, call) { if (call && (Title_typeof(call) === "object" || typeof call === "function")) { return call; } return Title_assertThisInitialized(self); }

function Title_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Title_getPrototypeOf(o) { Title_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Title_getPrototypeOf(o); }

function Title_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Title_setPrototypeOf(subClass, superClass); }

function Title_setPrototypeOf(o, p) { Title_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Title_setPrototypeOf(o, p); }




var Title_Title =
/*#__PURE__*/
function (_React$Component) {
  Title_inherits(Title, _React$Component);

  function Title() {
    Title_classCallCheck(this, Title);

    return Title_possibleConstructorReturn(this, Title_getPrototypeOf(Title).apply(this, arguments));
  }

  Title_createClass(Title, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          width = _this$props.width,
          style = _this$props.style;
      return react["createElement"]("h3", {
        className: classnames_default()(prefixCls, className),
        style: Title_extends({
          width: width
        }, style)
      });
    }
  }]);

  return Title;
}(react["Component"]);

/* harmony default export */ var skeleton_Title = (Title_Title);
// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Paragraph.js
function Paragraph_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Paragraph_typeof = function _typeof(obj) { return typeof obj; }; } else { Paragraph_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Paragraph_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Paragraph_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Paragraph_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Paragraph_createClass(Constructor, protoProps, staticProps) { if (protoProps) Paragraph_defineProperties(Constructor.prototype, protoProps); if (staticProps) Paragraph_defineProperties(Constructor, staticProps); return Constructor; }

function Paragraph_possibleConstructorReturn(self, call) { if (call && (Paragraph_typeof(call) === "object" || typeof call === "function")) { return call; } return Paragraph_assertThisInitialized(self); }

function Paragraph_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Paragraph_getPrototypeOf(o) { Paragraph_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Paragraph_getPrototypeOf(o); }

function Paragraph_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Paragraph_setPrototypeOf(subClass, superClass); }

function Paragraph_setPrototypeOf(o, p) { Paragraph_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Paragraph_setPrototypeOf(o, p); }




var Paragraph_Paragraph =
/*#__PURE__*/
function (_React$Component) {
  Paragraph_inherits(Paragraph, _React$Component);

  function Paragraph() {
    Paragraph_classCallCheck(this, Paragraph);

    return Paragraph_possibleConstructorReturn(this, Paragraph_getPrototypeOf(Paragraph).apply(this, arguments));
  }

  Paragraph_createClass(Paragraph, [{
    key: "getWidth",
    value: function getWidth(index) {
      var _this$props = this.props,
          width = _this$props.width,
          _this$props$rows = _this$props.rows,
          rows = _this$props$rows === void 0 ? 2 : _this$props$rows;

      if (Array.isArray(width)) {
        return width[index];
      } // last paragraph


      if (rows - 1 === index) {
        return width;
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          rows = _this$props2.rows;

      var rowList = _toConsumableArray(Array(rows)).map(function (_, index) {
        return react["createElement"]("li", {
          key: index,
          style: {
            width: _this.getWidth(index)
          }
        });
      });

      return react["createElement"]("ul", {
        className: classnames_default()(prefixCls, className),
        style: style
      }, rowList);
    }
  }]);

  return Paragraph;
}(react["Component"]);

/* harmony default export */ var skeleton_Paragraph = (Paragraph_Paragraph);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/index.js
function skeleton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function skeleton_extends() { skeleton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return skeleton_extends.apply(this, arguments); }

function skeleton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function skeleton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function skeleton_createClass(Constructor, protoProps, staticProps) { if (protoProps) skeleton_defineProperties(Constructor.prototype, protoProps); if (staticProps) skeleton_defineProperties(Constructor, staticProps); return Constructor; }

function skeleton_possibleConstructorReturn(self, call) { if (call && (skeleton_typeof(call) === "object" || typeof call === "function")) { return call; } return skeleton_assertThisInitialized(self); }

function skeleton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function skeleton_getPrototypeOf(o) { skeleton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return skeleton_getPrototypeOf(o); }

function skeleton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) skeleton_setPrototypeOf(subClass, superClass); }

function skeleton_setPrototypeOf(o, p) { skeleton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return skeleton_setPrototypeOf(o, p); }

function skeleton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { skeleton_typeof = function _typeof(obj) { return typeof obj; }; } else { skeleton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return skeleton_typeof(obj); }








function getComponentProps(prop) {
  if (prop && skeleton_typeof(prop) === 'object') {
    return prop;
  }

  return {};
}

function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return {
      shape: 'square'
    };
  }

  return {
    shape: 'circle'
  };
}

function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }

  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {}; // Width

  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  } // Rows


  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

var skeleton_Skeleton =
/*#__PURE__*/
function (_React$Component) {
  skeleton_inherits(Skeleton, _React$Component);

  function Skeleton() {
    var _this;

    skeleton_classCallCheck(this, Skeleton);

    _this = skeleton_possibleConstructorReturn(this, skeleton_getPrototypeOf(Skeleton).apply(this, arguments));

    _this.renderSkeleton = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          loading = _this$props.loading,
          className = _this$props.className,
          children = _this$props.children,
          avatar = _this$props.avatar,
          title = _this$props.title,
          paragraph = _this$props.paragraph,
          active = _this$props.active;
      var prefixCls = getPrefixCls('skeleton', customizePrefixCls);

      if (loading || !('loading' in _this.props)) {
        var _classNames;

        var hasAvatar = !!avatar;
        var hasTitle = !!title;
        var hasParagraph = !!paragraph; // Avatar

        var avatarNode;

        if (hasAvatar) {
          var avatarProps = skeleton_extends({
            prefixCls: "".concat(prefixCls, "-avatar")
          }, getAvatarBasicProps(hasTitle, hasParagraph), getComponentProps(avatar));

          avatarNode = react["createElement"]("div", {
            className: "".concat(prefixCls, "-header")
          }, react["createElement"](Avatar, avatarProps));
        }

        var contentNode;

        if (hasTitle || hasParagraph) {
          // Title
          var $title;

          if (hasTitle) {
            var titleProps = skeleton_extends({
              prefixCls: "".concat(prefixCls, "-title")
            }, getTitleBasicProps(hasAvatar, hasParagraph), getComponentProps(title));

            $title = react["createElement"](skeleton_Title, titleProps);
          } // Paragraph


          var paragraphNode;

          if (hasParagraph) {
            var paragraphProps = skeleton_extends({
              prefixCls: "".concat(prefixCls, "-paragraph")
            }, getParagraphBasicProps(hasAvatar, hasTitle), getComponentProps(paragraph));

            paragraphNode = react["createElement"](skeleton_Paragraph, paragraphProps);
          }

          contentNode = react["createElement"]("div", {
            className: "".concat(prefixCls, "-content")
          }, $title, paragraphNode);
        }

        var cls = classnames_default()(prefixCls, className, (_classNames = {}, skeleton_defineProperty(_classNames, "".concat(prefixCls, "-with-avatar"), hasAvatar), skeleton_defineProperty(_classNames, "".concat(prefixCls, "-active"), active), _classNames));
        return react["createElement"]("div", {
          className: cls
        }, avatarNode, contentNode);
      }

      return children;
    };

    return _this;
  }

  skeleton_createClass(Skeleton, [{
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderSkeleton);
    }
  }]);

  return Skeleton;
}(react["Component"]);

skeleton_Skeleton.defaultProps = {
  avatar: false,
  title: true,
  paragraph: true
};
/* harmony default export */ var skeleton = __webpack_exports__["a"] = (skeleton_Skeleton);

/***/ }),

/***/ "2fM7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");

// CONCATENATED MODULE: ./node_modules/rc-select/es/OptGroup.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OptGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(OptGroup, _Component);

  function OptGroup() {
    _classCallCheck(this, OptGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptGroup).apply(this, arguments));
  }

  return OptGroup;
}(react["Component"]);


OptGroup.isSelectOptGroup = true;
// CONCATENATED MODULE: ./node_modules/rc-select/es/Option.js
function Option_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Option_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Option_assertThisInitialized(self); }

function Option_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Option_getPrototypeOf(o) { Option_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Option_getPrototypeOf(o); }

function Option_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Option_setPrototypeOf(subClass, superClass); }

function Option_setPrototypeOf(o, p) { Option_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Option_setPrototypeOf(o, p); }




var Option =
/*#__PURE__*/
function (_Component) {
  Option_inherits(Option, _Component);

  function Option() {
    Option_classCallCheck(this, Option);

    return Option_possibleConstructorReturn(this, Option_getPrototypeOf(Option).apply(this, arguments));
  }

  return Option;
}(react["Component"]);


Option.propTypes = {
  value: prop_types["oneOfType"]([prop_types["string"], prop_types["number"]])
};
Option.isSelectOption = true;
// CONCATENATED MODULE: ./node_modules/rc-select/es/PropTypes.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



function propsValueType() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var props = args[0],
      propName = args[1],
      componentName = args[2],
      rest = args.slice(3);
  var basicType = prop_types["oneOfType"]([prop_types["string"], prop_types["number"]]);
  var labelInValueShape = prop_types["shape"]({
    key: basicType.isRequired,
    label: prop_types["node"]
  });

  if (props.labelInValue) {
    var validate = prop_types["oneOfType"]([prop_types["arrayOf"](labelInValueShape), labelInValueShape]);
    var error = validate.apply(void 0, [props, propName, componentName].concat(_toConsumableArray(rest)));

    if (error) {
      return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(componentName, "`, ") + "when you set `labelInValue` to `true`, `".concat(propName, "` should in ") + "shape of `{ key: string | number, label?: ReactNode }`.");
    }
  } else if ((props.mode === 'multiple' || props.mode === 'tags' || props.multiple || props.tags) && props[propName] === '') {
    return new Error("Invalid prop `".concat(propName, "` of type `string` supplied to `").concat(componentName, "`, ") + "expected `array` when `multiple` or `tags` is `true`.");
  } else {
    var _validate = prop_types["oneOfType"]([prop_types["arrayOf"](basicType), basicType]);

    return _validate.apply(void 0, [props, propName, componentName].concat(_toConsumableArray(rest)));
  }

  return null;
}

var SelectPropTypes = {
  id: prop_types["string"],
  defaultActiveFirstOption: prop_types["bool"],
  multiple: prop_types["bool"],
  filterOption: prop_types["any"],
  children: prop_types["any"],
  showSearch: prop_types["bool"],
  disabled: prop_types["bool"],
  allowClear: prop_types["bool"],
  showArrow: prop_types["bool"],
  tags: prop_types["bool"],
  prefixCls: prop_types["string"],
  className: prop_types["string"],
  transitionName: prop_types["string"],
  optionLabelProp: prop_types["string"],
  optionFilterProp: prop_types["string"],
  animation: prop_types["string"],
  choiceTransitionName: prop_types["string"],
  open: prop_types["bool"],
  defaultOpen: prop_types["bool"],
  onChange: prop_types["func"],
  onBlur: prop_types["func"],
  onFocus: prop_types["func"],
  onSelect: prop_types["func"],
  onSearch: prop_types["func"],
  onPopupScroll: prop_types["func"],
  onMouseEnter: prop_types["func"],
  onMouseLeave: prop_types["func"],
  onInputKeyDown: prop_types["func"],
  placeholder: prop_types["any"],
  onDeselect: prop_types["func"],
  labelInValue: prop_types["bool"],
  loading: prop_types["bool"],
  value: propsValueType,
  defaultValue: propsValueType,
  dropdownStyle: prop_types["object"],
  maxTagTextLength: prop_types["number"],
  maxTagCount: prop_types["number"],
  maxTagPlaceholder: prop_types["oneOfType"]([prop_types["node"], prop_types["func"]]),
  tokenSeparators: prop_types["arrayOf"](prop_types["string"]),
  getInputElement: prop_types["func"],
  showAction: prop_types["arrayOf"](prop_types["string"]),
  clearIcon: prop_types["node"],
  inputIcon: prop_types["node"],
  removeIcon: prop_types["node"],
  menuItemSelectedIcon: prop_types["oneOfType"]([prop_types["func"], prop_types["node"]]),
  dropdownRender: prop_types["func"]
};
/* harmony default export */ var PropTypes = (SelectPropTypes);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/component-classes/index.js
var component_classes = __webpack_require__("PFWz");
var component_classes_default = /*#__PURE__*/__webpack_require__.n(component_classes);

// EXTERNAL MODULE: ./node_modules/rc-animate/es/Animate.js + 3 modules
var Animate = __webpack_require__("MFj2");

// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 9 modules
var es = __webpack_require__("1j5w");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("VCL8");

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__("2W6z");
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./node_modules/raf/index.js
var raf = __webpack_require__("xEkU");
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);

// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 4 modules
var rc_trigger_es = __webpack_require__("uciX");

// EXTERNAL MODULE: ./node_modules/dom-scroll-into-view/lib/index.js
var lib = __webpack_require__("9Do8");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/rc-select/es/util.js

function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }

  return '';
}
function getValuePropValue(child) {
  if (!child) {
    return null;
  }

  var props = child.props;

  if ('value' in props) {
    return props.value;
  }

  if (child.key) {
    return child.key;
  }

  if (child.type && child.type.isSelectOptGroup && props.label) {
    return props.label;
  }

  throw new Error("Need at least a key or a value or a label (only for OptGroup) for ".concat(child));
}
function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }

  return child.props[prop];
}
function isMultiple(props) {
  return props.multiple;
}
function isCombobox(props) {
  return props.combobox;
}
function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}
function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}
function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}
function util_toArray(value) {
  var ret = value;

  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }

  return ret;
}
function getMapKey(value) {
  return "".concat(typeof value, "-").concat(value);
}
function preventDefaultEvent(e) {
  e.preventDefault();
}
function findIndexInValueBySingleValue(value, singleValue) {
  var index = -1;

  if (value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === singleValue) {
        index = i;
        break;
      }
    }
  }

  return index;
}
function getLabelFromPropsValue(value, key) {
  var label;
  value = util_toArray(value);

  if (value) {
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < value.length; i++) {
      if (value[i].key === key) {
        label = value[i].label;
        break;
      }
    }
  }

  return label;
}
function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }

  var selectedKeys = [];
  react_default.a.Children.forEach(menuItems, function (item) {
    var type = item.type;

    if (type.isMenuItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;

      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}
var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};
var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'on'
};
function findFirstMenuItem(children) {
  // tslint:disable-next-line:prefer-for-of
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.type.isMenuItemGroup) {
      var found = findFirstMenuItem(child.props.children);

      if (found) {
        return found;
      }
    } else if (!child.props.disabled) {
      return child;
    }
  }

  return null;
}
function includesSeparators(str, separators) {
  // tslint:disable-next-line:prefer-for-of
  for (var i = 0; i < separators.length; ++i) {
    if (str.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }

  return false;
}
function splitBySeparators(str, separators) {
  var reg = new RegExp("[".concat(separators.join(), "]"));
  return str.split(reg).filter(function (token) {
    return token;
  });
}
function defaultFilterFn(input, child) {
  if (child.props.disabled) {
    return false;
  }

  var value = util_toArray(getPropValue(child, this.props.optionFilterProp)).join('');
  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
}
function validateOptionValue(value, props) {
  if (isSingleMode(props) || isMultiple(props)) {
    return;
  }

  if (typeof value !== 'string') {
    throw new Error("Invalid `value` of type `".concat(typeof value, "` supplied to Option, ") + "expected `string` when `tags/combobox` is `true`.");
  }
}
function saveRef(instance, name) {
  return function (node) {
    instance[name] = node;
  };
}
function generateUUID() {
  if (false) {}

  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16); // tslint:disable-next-line:no-bitwise

    return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return uuid;
}
// CONCATENATED MODULE: ./node_modules/rc-select/es/DropdownMenu.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DropdownMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function DropdownMenu_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return DropdownMenu_assertThisInitialized(self); }

function DropdownMenu_getPrototypeOf(o) { DropdownMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DropdownMenu_getPrototypeOf(o); }

function DropdownMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DropdownMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DropdownMenu_setPrototypeOf(subClass, superClass); }

function DropdownMenu_setPrototypeOf(o, p) { DropdownMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DropdownMenu_setPrototypeOf(o, p); }










var DropdownMenu_DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  DropdownMenu_inherits(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _this;

    DropdownMenu_classCallCheck(this, DropdownMenu);

    _this = DropdownMenu_possibleConstructorReturn(this, DropdownMenu_getPrototypeOf(DropdownMenu).call(this, props));
    _this.rafInstance = null;
    _this.lastVisible = false;

    _this.scrollActiveItemToView = function () {
      // scroll into view
      var itemComponent = Object(react_dom["findDOMNode"])(_this.firstActiveItem);
      var _this$props = _this.props,
          visible = _this$props.visible,
          firstActiveValue = _this$props.firstActiveValue;
      var value = _this.props.value;

      if (!itemComponent || !visible) {
        return;
      }

      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };

      if ((!value || value.length === 0) && firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      } // Delay to scroll since current frame item position is not ready when pre view is by filter
      // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462


      _this.rafInstance = raf_default()(function () {
        lib_default()(itemComponent, Object(react_dom["findDOMNode"])(_this.menuRef), scrollIntoViewOpts);
      });
    };

    _this.renderMenu = function () {
      var _this$props2 = _this.props,
          menuItems = _this$props2.menuItems,
          menuItemSelectedIcon = _this$props2.menuItemSelectedIcon,
          defaultActiveFirstOption = _this$props2.defaultActiveFirstOption,
          prefixCls = _this$props2.prefixCls,
          multiple = _this$props2.multiple,
          onMenuSelect = _this$props2.onMenuSelect,
          inputValue = _this$props2.inputValue,
          backfillValue = _this$props2.backfillValue,
          onMenuDeselect = _this$props2.onMenuDeselect,
          visible = _this$props2.visible;
      var firstActiveValue = _this.props.firstActiveValue;

      if (menuItems && menuItems.length) {
        var menuProps = {};

        if (multiple) {
          menuProps.onDeselect = onMenuDeselect;
          menuProps.onSelect = onMenuSelect;
        } else {
          menuProps.onClick = onMenuSelect;
        }

        var value = _this.props.value;
        var selectedKeys = getSelectKeys(menuItems, value);
        var activeKeyProps = {};
        var defaultActiveFirst = defaultActiveFirstOption;
        var clonedMenuItems = menuItems;

        if (selectedKeys.length || firstActiveValue) {
          if (visible && !_this.lastVisible) {
            activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
          } else if (!visible) {
            // Do not trigger auto active since we already have selectedKeys
            if (selectedKeys[0]) {
              defaultActiveFirst = false;
            }

            activeKeyProps.activeKey = undefined;
          }

          var foundFirst = false; // set firstActiveItem via cloning menus
          // for scroll into view

          var clone = function clone(item) {
            var key = item.key;

            if (!foundFirst && selectedKeys.indexOf(key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
              foundFirst = true;
              return react["cloneElement"](item, {
                ref: function ref(_ref) {
                  _this.firstActiveItem = _ref;
                }
              });
            }

            return item;
          };

          clonedMenuItems = menuItems.map(function (item) {
            if (item.type.isMenuItemGroup) {
              var children = Object(toArray["a" /* default */])(item.props.children).map(clone);
              return react["cloneElement"](item, {}, children);
            }

            return clone(item);
          });
        } else {
          // Clear firstActiveItem when dropdown menu items was empty
          // Avoid `Unable to find node on an unmounted component`
          // https://github.com/ant-design/ant-design/issues/10774
          _this.firstActiveItem = null;
        } // clear activeKey when inputValue change


        var lastValue = value && value[value.length - 1];

        if (inputValue !== _this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
          activeKeyProps.activeKey = '';
        }

        return react["createElement"](es["e" /* default */], _extends({
          ref: _this.saveMenuRef,
          style: _this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirst,
          role: "listbox",
          itemIcon: multiple ? menuItemSelectedIcon : null
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: "".concat(prefixCls, "-menu")
        }), clonedMenuItems);
      }

      return null;
    };

    _this.lastInputValue = props.inputValue;
    _this.saveMenuRef = saveRef(DropdownMenu_assertThisInitialized(_this), 'menuRef');
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollActiveItemToView();
      this.lastVisible = this.props.visible;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (!nextProps.visible) {
        this.lastVisible = false;
      } // freeze when hide


      return this.props.visible && !nextProps.visible || nextProps.visible || nextProps.inputValue !== this.props.inputValue;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (!prevProps.visible && props.visible) {
        this.scrollActiveItemToView();
      }

      this.lastVisible = props.visible;
      this.lastInputValue = props.inputValue;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafInstance) {
        raf_default.a.cancel(this.rafInstance);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var renderMenu = this.renderMenu();
      return renderMenu ? react["createElement"]("div", {
        style: {
          overflow: 'auto',
          transform: 'translateZ(0)'
        },
        id: this.props.ariaId,
        onFocus: this.props.onPopupFocus,
        onMouseDown: preventDefaultEvent,
        onScroll: this.props.onPopupScroll
      }, renderMenu) : null;
    }
  }]);

  return DropdownMenu;
}(react["Component"]);


DropdownMenu_DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu_DropdownMenu.propTypes = {
  ariaId: prop_types["string"],
  defaultActiveFirstOption: prop_types["bool"],
  value: prop_types["any"],
  dropdownMenuStyle: prop_types["object"],
  multiple: prop_types["bool"],
  onPopupFocus: prop_types["func"],
  onPopupScroll: prop_types["func"],
  onMenuDeSelect: prop_types["func"],
  onMenuSelect: prop_types["func"],
  prefixCls: prop_types["string"],
  menuItems: prop_types["any"],
  inputValue: prop_types["string"],
  visible: prop_types["bool"],
  firstActiveValue: prop_types["string"],
  menuItemSelectedIcon: prop_types["oneOfType"]([prop_types["func"], prop_types["node"]])
};
// CONCATENATED MODULE: ./node_modules/rc-select/es/SelectTrigger.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SelectTrigger_extends() { SelectTrigger_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SelectTrigger_extends.apply(this, arguments); }

function SelectTrigger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SelectTrigger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SelectTrigger_createClass(Constructor, protoProps, staticProps) { if (protoProps) SelectTrigger_defineProperties(Constructor.prototype, protoProps); if (staticProps) SelectTrigger_defineProperties(Constructor, staticProps); return Constructor; }

function SelectTrigger_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return SelectTrigger_assertThisInitialized(self); }

function SelectTrigger_getPrototypeOf(o) { SelectTrigger_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SelectTrigger_getPrototypeOf(o); }

function SelectTrigger_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SelectTrigger_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SelectTrigger_setPrototypeOf(subClass, superClass); }

function SelectTrigger_setPrototypeOf(o, p) { SelectTrigger_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SelectTrigger_setPrototypeOf(o, p); }

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









rc_trigger_es["a" /* default */].displayName = 'Trigger';
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger_SelectTrigger =
/*#__PURE__*/
function (_React$Component) {
  SelectTrigger_inherits(SelectTrigger, _React$Component);

  function SelectTrigger(props) {
    var _this;

    SelectTrigger_classCallCheck(this, SelectTrigger);

    _this = SelectTrigger_possibleConstructorReturn(this, SelectTrigger_getPrototypeOf(SelectTrigger).call(this, props));
    _this.dropdownMenuRef = null;
    _this.rafInstance = null;

    _this.setDropdownWidth = function () {
      _this.cancelRafInstance();

      _this.rafInstance = raf_default()(function () {
        var dom = react_dom["findDOMNode"](SelectTrigger_assertThisInitialized(_this));
        var width = dom.offsetWidth;

        if (width !== _this.state.dropdownWidth) {
          _this.setState({
            dropdownWidth: width
          });
        }
      });
    };

    _this.cancelRafInstance = function () {
      if (_this.rafInstance) {
        raf_default.a.cancel(_this.rafInstance);
      }
    };

    _this.getInnerMenu = function () {
      return _this.dropdownMenuRef && _this.dropdownMenuRef.menuRef;
    };

    _this.getPopupDOMNode = function () {
      return _this.triggerRef.getPopupDomNode();
    };

    _this.getDropdownElement = function (newProps) {
      var props = _this.props;
      var dropdownRender = props.dropdownRender,
          ariaId = props.ariaId;
      var menuNode = react["createElement"](DropdownMenu_DropdownMenu, SelectTrigger_extends({
        ref: _this.saveDropdownMenuRef
      }, newProps, {
        ariaId: ariaId,
        prefixCls: _this.getDropdownPrefixCls(),
        onMenuSelect: props.onMenuSelect,
        onMenuDeselect: props.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        value: props.value,
        backfillValue: props.backfillValue,
        firstActiveValue: props.firstActiveValue,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        menuItemSelectedIcon: props.menuItemSelectedIcon
      }));

      if (dropdownRender) {
        return dropdownRender(menuNode, props);
      }

      return null;
    };

    _this.getDropdownTransitionName = function () {
      var props = _this.props;
      var transitionName = props.transitionName;

      if (!transitionName && props.animation) {
        transitionName = "".concat(_this.getDropdownPrefixCls(), "-").concat(props.animation);
      }

      return transitionName;
    };

    _this.getDropdownPrefixCls = function () {
      return "".concat(_this.props.prefixCls, "-dropdown");
    };

    _this.saveDropdownMenuRef = saveRef(SelectTrigger_assertThisInitialized(_this), 'dropdownMenuRef');
    _this.saveTriggerRef = saveRef(SelectTrigger_assertThisInitialized(_this), 'triggerRef');
    _this.state = {
      dropdownWidth: 0
    };
    return _this;
  }

  SelectTrigger_createClass(SelectTrigger, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDropdownWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setDropdownWidth();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRafInstance();
    }
  }, {
    key: "render",
    value: function render() {
      var _popupClassName;

      var _a = this.props,
          onPopupFocus = _a.onPopupFocus,
          empty = _a.empty,
          props = __rest(_a, ["onPopupFocus", "empty"]);

      var multiple = props.multiple,
          visible = props.visible,
          inputValue = props.inputValue,
          dropdownAlign = props.dropdownAlign,
          disabled = props.disabled,
          showSearch = props.showSearch,
          dropdownClassName = props.dropdownClassName,
          dropdownStyle = props.dropdownStyle,
          dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
      var dropdownPrefixCls = this.getDropdownPrefixCls();
      var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty(_popupClassName, "".concat(dropdownPrefixCls, "--").concat(multiple ? 'multiple' : 'single'), 1), _defineProperty(_popupClassName, "".concat(dropdownPrefixCls, "--empty"), empty), _popupClassName);
      var popupElement = this.getDropdownElement({
        menuItems: props.options,
        onPopupFocus: onPopupFocus,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible
      });
      var hideAction;

      if (disabled) {
        hideAction = [];
      } else if (isSingleMode(props) && !showSearch) {
        hideAction = ['click'];
      } else {
        hideAction = ['blur'];
      }

      var popupStyle = SelectTrigger_extends({}, dropdownStyle);

      var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';

      if (this.state.dropdownWidth) {
        popupStyle[widthProp] = "".concat(this.state.dropdownWidth, "px");
      }

      return react["createElement"](rc_trigger_es["a" /* default */], SelectTrigger_extends({}, props, {
        showAction: disabled ? [] : this.props.showAction,
        hideAction: hideAction,
        ref: this.saveTriggerRef,
        popupPlacement: "bottomLeft",
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: classnames_default()(popupClassName),
        popupStyle: popupStyle
      }), props.children);
    }
  }]);

  return SelectTrigger;
}(react["Component"]);


SelectTrigger_SelectTrigger.defaultProps = {
  dropdownRender: function dropdownRender(menu) {
    return menu;
  }
};
SelectTrigger_SelectTrigger.propTypes = {
  onPopupFocus: prop_types["func"],
  onPopupScroll: prop_types["func"],
  dropdownMatchSelectWidth: prop_types["bool"],
  dropdownAlign: prop_types["object"],
  visible: prop_types["bool"],
  disabled: prop_types["bool"],
  showSearch: prop_types["bool"],
  dropdownClassName: prop_types["string"],
  multiple: prop_types["bool"],
  inputValue: prop_types["string"],
  filterOption: prop_types["any"],
  options: prop_types["any"],
  prefixCls: prop_types["string"],
  popupClassName: prop_types["string"],
  children: prop_types["any"],
  showAction: prop_types["arrayOf"](prop_types["string"]),
  menuItemSelectedIcon: prop_types["oneOfType"]([prop_types["func"], prop_types["node"]]),
  dropdownRender: prop_types["func"],
  ariaId: prop_types["string"]
};
SelectTrigger_SelectTrigger.displayName = 'SelectTrigger';
// CONCATENATED MODULE: ./node_modules/rc-select/es/Select.js
function Select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }

function Select_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Select_createClass(Constructor, protoProps, staticProps) { if (protoProps) Select_defineProperties(Constructor.prototype, protoProps); if (staticProps) Select_defineProperties(Constructor, staticProps); return Constructor; }

function Select_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Select_assertThisInitialized(self); }

function Select_getPrototypeOf(o) { Select_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Select_getPrototypeOf(o); }

function Select_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Select_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Select_setPrototypeOf(subClass, superClass); }

function Select_setPrototypeOf(o, p) { Select_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Select_setPrototypeOf(o, p); }















var SELECT_EMPTY_VALUE_KEY = 'RC_SELECT_EMPTY_VALUE_KEY';

var noop = function noop() {
  return null;
};

function chaining() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(chaining, args);
      }
    }
  };
}

var Select_Select =
/*#__PURE__*/
function (_React$Component) {
  Select_inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    Select_classCallCheck(this, Select);

    _this = Select_possibleConstructorReturn(this, Select_getPrototypeOf(Select).call(this, props));
    _this.inputRef = null;
    _this.inputMirrorRef = null;
    _this.topCtrlRef = null;
    _this.selectTriggerRef = null;
    _this.rootRef = null;
    _this.selectionRef = null;
    _this.dropdownContainer = null;
    _this.blurTimer = null;
    _this.focusTimer = null;
    _this.comboboxTimer = null; // tslint:disable-next-line:variable-name

    _this._focused = false; // tslint:disable-next-line:variable-name

    _this._mouseDown = false; // tslint:disable-next-line:variable-name

    _this._options = []; // tslint:disable-next-line:variable-name

    _this._empty = false;

    _this.onInputChange = function (event) {
      var tokenSeparators = _this.props.tokenSeparators;
      var val = event.target.value;

      if (isMultipleOrTags(_this.props) && tokenSeparators.length && includesSeparators(val, tokenSeparators)) {
        var nextValue = _this.getValueByInput(val);

        if (nextValue !== undefined) {
          _this.fireChange(nextValue);
        }

        _this.setOpenState(false, {
          needFocus: true
        });

        _this.setInputValue('', false);

        return;
      }

      _this.setInputValue(val);

      _this.setState({
        open: true
      });

      if (isCombobox(_this.props)) {
        _this.fireChange([val]);
      }
    };

    _this.onDropdownVisibleChange = function (open) {
      if (open && !_this._focused) {
        _this.clearBlurTime();

        _this.timeoutFocus();

        _this._focused = true;

        _this.updateFocusClassName();
      }

      _this.setOpenState(open);
    }; // combobox ignore


    _this.onKeyDown = function (event) {
      var open = _this.state.open;
      var disabled = _this.props.disabled;

      if (disabled) {
        return;
      }

      var keyCode = event.keyCode;

      if (open && !_this.getInputDOMNode()) {
        _this.onInputKeyDown(event);
      } else if (keyCode === KeyCode["a" /* default */].ENTER || keyCode === KeyCode["a" /* default */].DOWN) {
        if (!open) {
          _this.setOpenState(true);
        }

        event.preventDefault();
      } else if (keyCode === KeyCode["a" /* default */].SPACE) {
        // Not block space if popup is shown
        if (!open) {
          _this.setOpenState(true);

          event.preventDefault();
        }
      }
    };

    _this.onInputKeyDown = function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          combobox = _this$props.combobox,
          defaultActiveFirstOption = _this$props.defaultActiveFirstOption;

      if (disabled) {
        return;
      }

      var state = _this.state;

      var isRealOpen = _this.getRealOpenState(state); // magic code


      var keyCode = event.keyCode;

      if (isMultipleOrTags(_this.props) && !event.target.value && keyCode === KeyCode["a" /* default */].BACKSPACE) {
        event.preventDefault();
        var value = state.value;

        if (value.length) {
          _this.removeSelected(value[value.length - 1]);
        }

        return;
      }

      if (keyCode === KeyCode["a" /* default */].DOWN) {
        if (!state.open) {
          _this.openIfHasChildren();

          event.preventDefault();
          event.stopPropagation();
          return;
        }
      } else if (keyCode === KeyCode["a" /* default */].ENTER && state.open) {
        // Aviod trigger form submit when select item
        // https://github.com/ant-design/ant-design/issues/10861
        // https://github.com/ant-design/ant-design/issues/14544
        if (isRealOpen || !combobox) {
          event.preventDefault();
        } // Hard close popup to avoid lock of non option in combobox mode


        if (isRealOpen && combobox && defaultActiveFirstOption === false) {
          _this.comboboxTimer = setTimeout(function () {
            _this.setOpenState(false);
          });
        }
      } else if (keyCode === KeyCode["a" /* default */].ESC) {
        if (state.open) {
          _this.setOpenState(false);

          event.preventDefault();
          event.stopPropagation();
        }

        return;
      }

      if (isRealOpen && _this.selectTriggerRef) {
        var menu = _this.selectTriggerRef.getInnerMenu();

        if (menu && menu.onKeyDown(event, _this.handleBackfill)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    _this.onMenuSelect = function (_ref) {
      var item = _ref.item;

      if (!item) {
        return;
      }

      var value = _this.state.value;
      var props = _this.props;
      var selectedValue = getValuePropValue(item);
      var lastValue = value[value.length - 1];

      _this.fireSelect(selectedValue);

      if (isMultipleOrTags(props)) {
        if (findIndexInValueBySingleValue(value, selectedValue) !== -1) {
          return;
        }

        value = value.concat([selectedValue]);
      } else {
        if (!isCombobox(props) && lastValue !== undefined && lastValue === selectedValue && selectedValue !== _this.state.backfillValue) {
          _this.setOpenState(false, {
            needFocus: true,
            fireSearch: false
          });

          return;
        }

        value = [selectedValue];

        _this.setOpenState(false, {
          needFocus: true,
          fireSearch: false
        });
      }

      _this.fireChange(value);

      var inputValue = isCombobox(props) ? getPropValue(item, props.optionLabelProp) : '';

      if (props.autoClearSearchValue) {
        _this.setInputValue(inputValue, false);
      }
    };

    _this.onMenuDeselect = function (_ref2) {
      var item = _ref2.item,
          domEvent = _ref2.domEvent;

      if (domEvent.type === 'keydown' && domEvent.keyCode === KeyCode["a" /* default */].ENTER) {
        _this.removeSelected(getValuePropValue(item));

        return;
      }

      if (domEvent.type === 'click') {
        _this.removeSelected(getValuePropValue(item));
      }

      var props = _this.props;

      if (props.autoClearSearchValue) {
        _this.setInputValue('');
      }
    };

    _this.onArrowClick = function (e) {
      e.stopPropagation();
      e.preventDefault();

      if (!_this.props.disabled) {
        _this.setOpenState(!_this.state.open, {
          needFocus: !_this.state.open
        });
      }
    };

    _this.onPlaceholderClick = function () {
      if (_this.getInputDOMNode && _this.getInputDOMNode()) {
        _this.getInputDOMNode().focus();
      }
    };

    _this.onOuterFocus = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.clearBlurTime(); // In IE11, onOuterFocus will be trigger twice when focus input
      // First one: e.target is div
      // Second one: e.target is input
      // other browser only trigger second one
      // https://github.com/ant-design/ant-design/issues/15942
      // Here we ignore the first one when e.target is div


      var inputNode = _this.getInputDOMNode();

      if (inputNode && e.target === _this.rootRef) {
        return;
      }

      if (!isMultipleOrTagsOrCombobox(_this.props) && e.target === inputNode) {
        return;
      }

      if (_this._focused) {
        return;
      }

      _this._focused = true;

      _this.updateFocusClassName(); // only effect multiple or tag mode


      if (!isMultipleOrTags(_this.props) || !_this._mouseDown) {
        _this.timeoutFocus();
      }
    };

    _this.onPopupFocus = function () {
      // fix ie scrollbar, focus element again
      _this.maybeFocus(true, true);
    };

    _this.onOuterBlur = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.blurTimer = window.setTimeout(function () {
        _this._focused = false;

        _this.updateFocusClassName();

        var props = _this.props;
        var value = _this.state.value;
        var inputValue = _this.state.inputValue;

        if (isSingleMode(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
          var options = _this._options || [];

          if (options.length) {
            var firstOption = findFirstMenuItem(options);

            if (firstOption) {
              value = [getValuePropValue(firstOption)];

              _this.fireChange(value);
            }
          }
        } else if (isMultipleOrTags(props) && inputValue) {
          if (_this._mouseDown) {
            // need update dropmenu when not blur
            _this.setInputValue('');
          } else {
            // why not use setState?
            // https://github.com/ant-design/ant-design/issues/14262
            _this.state.inputValue = '';

            if (_this.getInputDOMNode && _this.getInputDOMNode()) {
              _this.getInputDOMNode().value = '';
            }
          }

          var tmpValue = _this.getValueByInput(inputValue);

          if (tmpValue !== undefined) {
            value = tmpValue;

            _this.fireChange(value);
          }
        } // if click the rest space of Select in multiple mode


        if (isMultipleOrTags(props) && _this._mouseDown) {
          _this.maybeFocus(true, true);

          _this._mouseDown = false;
          return;
        }

        _this.setOpenState(false);

        if (props.onBlur) {
          props.onBlur(_this.getVLForOnChange(value));
        }
      }, 10);
    };

    _this.onClearSelection = function (event) {
      var props = _this.props;
      var state = _this.state;

      if (props.disabled) {
        return;
      }

      var inputValue = state.inputValue;
      var value = state.value;
      event.stopPropagation();

      if (inputValue || value.length) {
        if (value.length) {
          _this.fireChange([]);
        }

        _this.setOpenState(false, {
          needFocus: true
        });

        if (inputValue) {
          _this.setInputValue('');
        }
      }
    };

    _this.onChoiceAnimationLeave = function () {
      _this.forcePopupAlign();
    };

    _this.getOptionInfoBySingleValue = function (value, optionsInfo) {
      var info;
      optionsInfo = optionsInfo || _this.state.optionsInfo;

      if (optionsInfo[getMapKey(value)]) {
        info = optionsInfo[getMapKey(value)];
      }

      if (info) {
        return info;
      }

      var defaultLabel = value;

      if (_this.props.labelInValue) {
        var valueLabel = getLabelFromPropsValue(_this.props.value, value);
        var defaultValueLabel = getLabelFromPropsValue(_this.props.defaultValue, value);

        if (valueLabel !== undefined) {
          defaultLabel = valueLabel;
        } else if (defaultValueLabel !== undefined) {
          defaultLabel = defaultValueLabel;
        }
      }

      var defaultInfo = {
        option: react["createElement"](Option, {
          value: value,
          key: value
        }, value),
        value: value,
        label: defaultLabel
      };
      return defaultInfo;
    };

    _this.getOptionBySingleValue = function (value) {
      var _this$getOptionInfoBy = _this.getOptionInfoBySingleValue(value),
          option = _this$getOptionInfoBy.option;

      return option;
    };

    _this.getOptionsBySingleValue = function (values) {
      return values.map(function (value) {
        return _this.getOptionBySingleValue(value);
      });
    };

    _this.getValueByLabel = function (label) {
      if (label === undefined) {
        return null;
      }

      var value = null;
      Object.keys(_this.state.optionsInfo).forEach(function (key) {
        var info = _this.state.optionsInfo[key];
        var disabled = info.disabled;

        if (disabled) {
          return;
        }

        var oldLable = util_toArray(info.label);

        if (oldLable && oldLable.join('') === label) {
          value = info.value;
        }
      });
      return value;
    };

    _this.getVLBySingleValue = function (value) {
      if (_this.props.labelInValue) {
        return {
          key: value,
          label: _this.getLabelBySingleValue(value)
        };
      }

      return value;
    };

    _this.getVLForOnChange = function (vlsS) {
      var vls = vlsS;

      if (vls !== undefined) {
        if (!_this.props.labelInValue) {
          vls = vls.map(function (v) {
            return v;
          });
        } else {
          vls = vls.map(function (vl) {
            return {
              key: vl,
              label: _this.getLabelBySingleValue(vl)
            };
          });
        }

        return isMultipleOrTags(_this.props) ? vls : vls[0];
      }

      return vls;
    };

    _this.getLabelBySingleValue = function (value, optionsInfo) {
      var _this$getOptionInfoBy2 = _this.getOptionInfoBySingleValue(value, optionsInfo),
          label = _this$getOptionInfoBy2.label;

      return label;
    };

    _this.getDropdownContainer = function () {
      if (!_this.dropdownContainer) {
        _this.dropdownContainer = document.createElement('div');
        document.body.appendChild(_this.dropdownContainer);
      }

      return _this.dropdownContainer;
    };

    _this.getPlaceholderElement = function () {
      var props = _this.props;
      var state = _this.state;
      var hidden = false;

      if (state.inputValue) {
        hidden = true;
      }

      var value = state.value;

      if (value.length) {
        hidden = true;
      }

      if (isCombobox(props) && value.length === 1 && state.value && !state.value[0]) {
        hidden = false;
      }

      var placeholder = props.placeholder;

      if (placeholder) {
        return react["createElement"]("div", Select_extends({
          onMouseDown: preventDefaultEvent,
          style: Select_extends({
            display: hidden ? 'none' : 'block'
          }, UNSELECTABLE_STYLE)
        }, UNSELECTABLE_ATTRIBUTE, {
          onClick: _this.onPlaceholderClick,
          className: "".concat(props.prefixCls, "-selection__placeholder")
        }), placeholder);
      }

      return null;
    };

    _this.getInputElement = function () {
      var props = _this.props;
      var defaultInput = react["createElement"]("input", {
        id: props.id,
        autoComplete: "off"
      }); // tslint:disable-next-line:typedef-whitespace

      var inputElement = props.getInputElement ? props.getInputElement() : defaultInput;
      var inputCls = classnames_default()(inputElement.props.className, Select_defineProperty({}, "".concat(props.prefixCls, "-search__field"), true)); // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
      // Add space to the end of the inputValue as the width measurement tolerance

      return react["createElement"]("div", {
        className: "".concat(props.prefixCls, "-search__field__wrap")
      }, react["cloneElement"](inputElement, {
        ref: _this.saveInputRef,
        onChange: _this.onInputChange,
        onKeyDown: chaining(_this.onInputKeyDown, inputElement.props.onKeyDown, _this.props.onInputKeyDown),
        value: _this.state.inputValue,
        disabled: props.disabled,
        className: inputCls
      }), react["createElement"]("span", {
        ref: _this.saveInputMirrorRef,
        className: "".concat(props.prefixCls, "-search__field__mirror")
      }, _this.state.inputValue, "\xA0"));
    };

    _this.getInputDOMNode = function () {
      return _this.topCtrlRef ? _this.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : _this.inputRef;
    };

    _this.getInputMirrorDOMNode = function () {
      return _this.inputMirrorRef;
    };

    _this.getPopupDOMNode = function () {
      if (_this.selectTriggerRef) {
        return _this.selectTriggerRef.getPopupDOMNode();
      }
    };

    _this.getPopupMenuComponent = function () {
      if (_this.selectTriggerRef) {
        return _this.selectTriggerRef.getInnerMenu();
      }
    };

    _this.setOpenState = function (open) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var needFocus = config.needFocus,
          fireSearch = config.fireSearch;
      var props = _this.props;
      var state = _this.state;

      if (state.open === open) {
        _this.maybeFocus(open, !!needFocus);

        return;
      }

      if (_this.props.onDropdownVisibleChange) {
        _this.props.onDropdownVisibleChange(open);
      }

      var nextState = {
        open: open,
        backfillValue: ''
      }; // clear search input value when open is false in singleMode.
      // https://github.com/ant-design/ant-design/issues/16572

      if (!open && isSingleMode(props) && props.showSearch) {
        _this.setInputValue('', fireSearch);
      }

      if (!open) {
        _this.maybeFocus(open, !!needFocus);
      }

      _this.setState(Select_extends({
        open: open
      }, nextState), function () {
        if (open) {
          _this.maybeFocus(open, !!needFocus);
        }
      });
    };

    _this.setInputValue = function (inputValue) {
      var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var onSearch = _this.props.onSearch;

      if (inputValue !== _this.state.inputValue) {
        _this.setState(function (prevState) {
          // Additional check if `inputValue` changed in latest state.
          if (fireSearch && inputValue !== prevState.inputValue && onSearch) {
            onSearch(inputValue);
          }

          return {
            inputValue: inputValue
          };
        }, _this.forcePopupAlign);
      }
    };

    _this.getValueByInput = function (str) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          tokenSeparators = _this$props2.tokenSeparators;
      var nextValue = _this.state.value;
      var hasNewValue = false;
      splitBySeparators(str, tokenSeparators).forEach(function (label) {
        var selectedValue = [label];

        if (multiple) {
          var value = _this.getValueByLabel(label);

          if (value && findIndexInValueBySingleValue(nextValue, value) === -1) {
            nextValue = nextValue.concat(value);
            hasNewValue = true;

            _this.fireSelect(value);
          }
        } else if (findIndexInValueBySingleValue(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;

          _this.fireSelect(label);
        }
      });
      return hasNewValue ? nextValue : undefined;
    };

    _this.getRealOpenState = function (state) {
      // tslint:disable-next-line:variable-name
      var _open = _this.props.open;

      if (typeof _open === 'boolean') {
        return _open;
      }

      var open = (state || _this.state).open;
      var options = _this._options || [];

      if (isMultipleOrTagsOrCombobox(_this.props) || !_this.props.showSearch) {
        if (open && !options.length) {
          open = false;
        }
      }

      return open;
    };

    _this.markMouseDown = function () {
      _this._mouseDown = true;
    };

    _this.markMouseLeave = function () {
      _this._mouseDown = false;
    };

    _this.handleBackfill = function (item) {
      if (!_this.props.backfill || !(isSingleMode(_this.props) || isCombobox(_this.props))) {
        return;
      }

      var key = getValuePropValue(item);

      if (isCombobox(_this.props)) {
        _this.setInputValue(key, false);
      }

      _this.setState({
        value: [key],
        backfillValue: key
      });
    };

    _this.filterOption = function (input, child) {
      var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFilterFn;
      var value = _this.state.value;
      var lastValue = value[value.length - 1];

      if (!input || lastValue && lastValue === _this.state.backfillValue) {
        return true;
      }

      var filterFn = _this.props.filterOption;

      if ('filterOption' in _this.props) {
        if (filterFn === true) {
          filterFn = defaultFilter.bind(Select_assertThisInitialized(_this));
        }
      } else {
        filterFn = defaultFilter.bind(Select_assertThisInitialized(_this));
      }

      if (!filterFn) {
        return true;
      } else if (typeof filterFn === 'function') {
        return filterFn.call(Select_assertThisInitialized(_this), input, child);
      } else if (child.props.disabled) {
        return false;
      }

      return true;
    };

    _this.timeoutFocus = function () {
      var onFocus = _this.props.onFocus;

      if (_this.focusTimer) {
        _this.clearFocusTime();
      }

      _this.focusTimer = window.setTimeout(function () {
        if (onFocus) {
          onFocus();
        }
      }, 10);
    };

    _this.clearFocusTime = function () {
      if (_this.focusTimer) {
        clearTimeout(_this.focusTimer);
        _this.focusTimer = null;
      }
    };

    _this.clearBlurTime = function () {
      if (_this.blurTimer) {
        clearTimeout(_this.blurTimer);
        _this.blurTimer = null;
      }
    };

    _this.clearComboboxTime = function () {
      if (_this.comboboxTimer) {
        clearTimeout(_this.comboboxTimer);
        _this.comboboxTimer = null;
      }
    };

    _this.updateFocusClassName = function () {
      var rootRef = _this.rootRef;
      var props = _this.props; // avoid setState and its side effect

      if (_this._focused) {
        component_classes_default()(rootRef).add("".concat(props.prefixCls, "-focused"));
      } else {
        component_classes_default()(rootRef).remove("".concat(props.prefixCls, "-focused"));
      }
    };

    _this.maybeFocus = function (open, needFocus) {
      if (needFocus || open) {
        var input = _this.getInputDOMNode();

        var _document = document,
            activeElement = _document.activeElement;

        if (input && (open || isMultipleOrTagsOrCombobox(_this.props))) {
          if (activeElement !== input) {
            input.focus();
            _this._focused = true;
          }
        } else if (activeElement !== _this.selectionRef && _this.selectionRef) {
          _this.selectionRef.focus();

          _this._focused = true;
        }
      }
    };

    _this.removeSelected = function (selectedKey, e) {
      var props = _this.props;

      if (props.disabled || _this.isChildDisabled(selectedKey)) {
        return;
      } // Do not trigger Trigger popup


      if (e && e.stopPropagation) {
        e.stopPropagation();
      }

      var oldValue = _this.state.value;
      var value = oldValue.filter(function (singleValue) {
        return singleValue !== selectedKey;
      });
      var canMultiple = isMultipleOrTags(props);

      if (canMultiple) {
        var event = selectedKey;

        if (props.labelInValue) {
          event = {
            key: selectedKey,
            label: _this.getLabelBySingleValue(selectedKey)
          };
        }

        if (props.onDeselect) {
          props.onDeselect(event, _this.getOptionBySingleValue(selectedKey));
        }
      }

      _this.fireChange(value);
    };

    _this.openIfHasChildren = function () {
      var props = _this.props;

      if (react["Children"].count(props.children) || isSingleMode(props)) {
        _this.setOpenState(true);
      }
    };

    _this.fireSelect = function (value) {
      if (_this.props.onSelect) {
        _this.props.onSelect(_this.getVLBySingleValue(value), _this.getOptionBySingleValue(value));
      }
    };

    _this.fireChange = function (value) {
      var props = _this.props;

      if (!('value' in props)) {
        _this.setState({
          value: value
        }, _this.forcePopupAlign);
      }

      var vls = _this.getVLForOnChange(value);

      var options = _this.getOptionsBySingleValue(value);

      if (props.onChange) {
        props.onChange(vls, isMultipleOrTags(_this.props) ? options : options[0]);
      }
    };

    _this.isChildDisabled = function (key) {
      return Object(toArray["a" /* default */])(_this.props.children).some(function (child) {
        var childValue = getValuePropValue(child);
        return childValue === key && child.props && child.props.disabled;
      });
    };

    _this.forcePopupAlign = function () {
      if (!_this.state.open) {
        return;
      }

      if (_this.selectTriggerRef && _this.selectTriggerRef.triggerRef) {
        _this.selectTriggerRef.triggerRef.forcePopupAlign();
      }
    };

    _this.renderFilterOptions = function () {
      var inputValue = _this.state.inputValue;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          tags = _this$props3.tags,
          notFoundContent = _this$props3.notFoundContent;
      var menuItems = [];
      var childrenKeys = [];
      var empty = false;

      var options = _this.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);

      if (tags) {
        // tags value must be string
        var value = _this.state.value;
        value = value.filter(function (singleValue) {
          return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
        }); // sort by length

        value.sort(function (val1, val2) {
          return val1.length - val2.length;
        });
        value.forEach(function (singleValue) {
          var key = singleValue;
          var menuItem = react["createElement"](es["b" /* Item */], {
            style: UNSELECTABLE_STYLE,
            role: "option",
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: key,
            key: key
          }, key);
          options.push(menuItem);
          menuItems.push(menuItem);
        }); // ref: https://github.com/ant-design/ant-design/issues/14090

        if (inputValue && menuItems.every(function (option) {
          return getValuePropValue(option) !== inputValue;
        })) {
          options.unshift(react["createElement"](es["b" /* Item */], {
            style: UNSELECTABLE_STYLE,
            role: "option",
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: inputValue,
            key: inputValue
          }, inputValue));
        }
      }

      if (!options.length && notFoundContent) {
        empty = true;
        options = [react["createElement"](es["b" /* Item */], {
          style: UNSELECTABLE_STYLE,
          attribute: UNSELECTABLE_ATTRIBUTE,
          disabled: true,
          role: "option",
          value: "NOT_FOUND",
          key: "NOT_FOUND"
        }, notFoundContent)];
      }

      return {
        empty: empty,
        options: options
      };
    };

    _this.renderFilterOptionsFromChildren = function (children, childrenKeys, menuItems) {
      var sel = [];
      var props = _this.props;
      var inputValue = _this.state.inputValue;
      var tags = props.tags;
      react["Children"].forEach(children, function (child) {
        if (!child) {
          return;
        }

        var type = child.type;

        if (type.isSelectOptGroup) {
          var label = child.props.label;
          var key = child.key;

          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          } // Match option group label


          if (inputValue && _this.filterOption(inputValue, child)) {
            var innerItems = Object(toArray["a" /* default */])(child.props.children).map(function (subChild) {
              var childValueSub = getValuePropValue(subChild) || subChild.key;
              return react["createElement"](es["b" /* Item */], Select_extends({
                key: childValueSub,
                value: childValueSub
              }, subChild.props));
            });
            sel.push(react["createElement"](es["c" /* ItemGroup */], {
              key: key,
              title: label
            }, innerItems)); // Not match
          } else {
            var _innerItems = _this.renderFilterOptionsFromChildren(child.props.children, childrenKeys, menuItems);

            if (_innerItems.length) {
              sel.push(react["createElement"](es["c" /* ItemGroup */], {
                key: key,
                title: label
              }, _innerItems));
            }
          }

          return;
        }

        warning_default()(type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + "instead of `".concat(type.name || type.displayName || child.type, "`."));
        var childValue = getValuePropValue(child);
        validateOptionValue(childValue, _this.props);

        if (_this.filterOption(inputValue, child)) {
          var menuItem = react["createElement"](es["b" /* Item */], Select_extends({
            style: UNSELECTABLE_STYLE,
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: childValue,
            key: childValue,
            role: "option"
          }, child.props));
          sel.push(menuItem);
          menuItems.push(menuItem);
        }

        if (tags) {
          childrenKeys.push(childValue);
        }
      });
      return sel;
    };

    _this.renderTopControlNode = function () {
      var _this$state = _this.state,
          open = _this$state.open,
          inputValue = _this$state.inputValue;
      var value = _this.state.value;
      var props = _this.props;
      var choiceTransitionName = props.choiceTransitionName,
          prefixCls = props.prefixCls,
          maxTagTextLength = props.maxTagTextLength,
          maxTagCount = props.maxTagCount,
          showSearch = props.showSearch,
          removeIcon = props.removeIcon;
      var maxTagPlaceholder = props.maxTagPlaceholder;
      var className = "".concat(prefixCls, "-selection__rendered"); // search input is inside topControlNode in single, multiple & combobox. 2016/04/13

      var innerNode = null;

      if (isSingleMode(props)) {
        var selectedValue = null;

        if (value.length) {
          var showSelectedValue = false;
          var opacity = 1;

          if (!showSearch) {
            showSelectedValue = true;
          } else if (open) {
            showSelectedValue = !inputValue;

            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }

          var singleValue = value[0];

          var _this$getOptionInfoBy3 = _this.getOptionInfoBySingleValue(singleValue),
              label = _this$getOptionInfoBy3.label,
              title = _this$getOptionInfoBy3.title;

          selectedValue = react["createElement"]("div", {
            key: "value",
            className: "".concat(prefixCls, "-selection-selected-value"),
            title: toTitle(title || label),
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          }, label);
        }

        if (!showSearch) {
          innerNode = [selectedValue];
        } else {
          innerNode = [selectedValue, react["createElement"]("div", {
            className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
            key: "input",
            style: {
              display: open ? 'block' : 'none'
            }
          }, _this.getInputElement())];
        }
      } else {
        var selectedValueNodes = [];
        var limitedCountValue = value;
        var maxTagPlaceholderEl;

        if (maxTagCount !== undefined && value.length > maxTagCount) {
          limitedCountValue = limitedCountValue.slice(0, maxTagCount);

          var omittedValues = _this.getVLForOnChange(value.slice(maxTagCount, value.length));

          var content = "+ ".concat(value.length - maxTagCount, " ...");

          if (maxTagPlaceholder) {
            content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
          }

          maxTagPlaceholderEl = react["createElement"]("li", Select_extends({
            style: UNSELECTABLE_STYLE
          }, UNSELECTABLE_ATTRIBUTE, {
            role: "presentation",
            onMouseDown: preventDefaultEvent,
            className: "".concat(prefixCls, "-selection__choice ").concat(prefixCls, "-selection__choice__disabled"),
            key: "maxTagPlaceholder",
            title: toTitle(content)
          }), react["createElement"]("div", {
            className: "".concat(prefixCls, "-selection__choice__content")
          }, content));
        }

        if (isMultipleOrTags(props)) {
          selectedValueNodes = limitedCountValue.map(function (singleValue) {
            var info = _this.getOptionInfoBySingleValue(singleValue);

            var content = info.label;
            var title = info.title || content;

            if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
              content = "".concat(content.slice(0, maxTagTextLength), "...");
            }

            var disabled = _this.isChildDisabled(singleValue);

            var choiceClassName = disabled ? "".concat(prefixCls, "-selection__choice ").concat(prefixCls, "-selection__choice__disabled") : "".concat(prefixCls, "-selection__choice");
            return react["createElement"]("li", Select_extends({
              style: UNSELECTABLE_STYLE
            }, UNSELECTABLE_ATTRIBUTE, {
              onMouseDown: preventDefaultEvent,
              className: choiceClassName,
              role: "presentation",
              key: singleValue || SELECT_EMPTY_VALUE_KEY,
              title: toTitle(title)
            }), react["createElement"]("div", {
              className: "".concat(prefixCls, "-selection__choice__content")
            }, content), disabled ? null : react["createElement"]("span", {
              onClick: function onClick(event) {
                _this.removeSelected(singleValue, event);
              },
              className: "".concat(prefixCls, "-selection__choice__remove")
            }, removeIcon || react["createElement"]("i", {
              className: "".concat(prefixCls, "-selection__choice__remove-icon")
            }, "\xD7")));
          });
        }

        if (maxTagPlaceholderEl) {
          selectedValueNodes.push(maxTagPlaceholderEl);
        }

        selectedValueNodes.push(react["createElement"]("li", {
          className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
          key: "__input"
        }, _this.getInputElement()));

        if (isMultipleOrTags(props) && choiceTransitionName) {
          innerNode = react["createElement"](Animate["a" /* default */], {
            onLeave: _this.onChoiceAnimationLeave,
            component: "ul",
            transitionName: choiceTransitionName
          }, selectedValueNodes);
        } else {
          innerNode = react["createElement"]("ul", null, selectedValueNodes);
        }
      }

      return react["createElement"]("div", {
        className: className,
        ref: _this.saveTopCtrlRef
      }, _this.getPlaceholderElement(), innerNode);
    };

    var optionsInfo = Select.getOptionsInfoFromProps(props);

    if (props.tags && typeof props.filterOption !== 'function') {
      var isDisabledExist = Object.keys(optionsInfo).some(function (key) {
        return optionsInfo[key].disabled;
      });
      warning_default()(!isDisabledExist, 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');
    }

    _this.state = {
      value: Select.getValueFromProps(props, true),
      inputValue: props.combobox ? Select.getInputValueForCombobox(props, optionsInfo, true) : '',
      open: props.defaultOpen,
      optionsInfo: optionsInfo,
      backfillValue: '',
      // a flag for aviod redundant getOptionsInfoFromProps call
      skipBuildOptionsInfo: true,
      ariaId: ''
    };
    _this.saveInputRef = saveRef(Select_assertThisInitialized(_this), 'inputRef');
    _this.saveInputMirrorRef = saveRef(Select_assertThisInitialized(_this), 'inputMirrorRef');
    _this.saveTopCtrlRef = saveRef(Select_assertThisInitialized(_this), 'topCtrlRef');
    _this.saveSelectTriggerRef = saveRef(Select_assertThisInitialized(_this), 'selectTriggerRef');
    _this.saveRootRef = saveRef(Select_assertThisInitialized(_this), 'rootRef');
    _this.saveSelectionRef = saveRef(Select_assertThisInitialized(_this), 'selectionRef');
    return _this;
  }

  Select_createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // when defaultOpen is true, we should auto focus search input
      // https://github.com/ant-design/ant-design/issues/14254
      if (this.props.autoFocus || this.state.open) {
        this.focus();
      }

      this.setState({
        ariaId: generateUUID()
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (isMultipleOrTags(this.props)) {
        var inputNode = this.getInputDOMNode();
        var mirrorNode = this.getInputMirrorDOMNode();

        if (inputNode && inputNode.value && mirrorNode) {
          inputNode.style.width = '';
          inputNode.style.width = "".concat(mirrorNode.clientWidth, "px");
        } else if (inputNode) {
          inputNode.style.width = '';
        }
      }

      this.forcePopupAlign();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearFocusTime();
      this.clearBlurTime();
      this.clearComboboxTime();

      if (this.dropdownContainer) {
        react_dom["unmountComponentAtNode"](this.dropdownContainer);
        document.body.removeChild(this.dropdownContainer);
        this.dropdownContainer = null;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (isSingleMode(this.props) && this.selectionRef) {
        this.selectionRef.focus();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (isSingleMode(this.props) && this.selectionRef) {
        this.selectionRef.blur();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().blur();
      }
    }
  }, {
    key: "renderArrow",
    value: function renderArrow(multiple) {
      // showArrow : Set to true if not multiple by default but keep set value.
      var _this$props4 = this.props,
          _this$props4$showArro = _this$props4.showArrow,
          showArrow = _this$props4$showArro === void 0 ? !multiple : _this$props4$showArro,
          loading = _this$props4.loading,
          inputIcon = _this$props4.inputIcon,
          prefixCls = _this$props4.prefixCls;

      if (!showArrow && !loading) {
        return null;
      } // if loading  have loading icon


      var defaultIcon = loading ? react["createElement"]("i", {
        className: "".concat(prefixCls, "-arrow-loading")
      }) : react["createElement"]("i", {
        className: "".concat(prefixCls, "-arrow-icon")
      });
      return react["createElement"]("span", Select_extends({
        key: "arrow",
        className: "".concat(prefixCls, "-arrow"),
        style: UNSELECTABLE_STYLE
      }, UNSELECTABLE_ATTRIBUTE, {
        onClick: this.onArrowClick
      }), inputIcon || defaultIcon);
    }
  }, {
    key: "renderClear",
    value: function renderClear() {
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          allowClear = _this$props5.allowClear,
          clearIcon = _this$props5.clearIcon;
      var inputValue = this.state.inputValue;
      var value = this.state.value;
      var clear = react["createElement"]("span", Select_extends({
        key: "clear",
        className: "".concat(prefixCls, "-selection__clear"),
        onMouseDown: preventDefaultEvent,
        style: UNSELECTABLE_STYLE
      }, UNSELECTABLE_ATTRIBUTE, {
        onClick: this.onClearSelection
      }), clearIcon || react["createElement"]("i", {
        className: "".concat(prefixCls, "-selection__clear-icon")
      }, "\xD7"));

      if (!allowClear) {
        return null;
      }

      if (isCombobox(this.props)) {
        if (inputValue) {
          return clear;
        }

        return null;
      }

      if (inputValue || value.length) {
        return clear;
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _rootCls;

      var props = this.props;
      var multiple = isMultipleOrTags(props); // Default set showArrow to true if not set (not set directly in defaultProps to handle multiple case)

      var _props$showArrow = props.showArrow,
          showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
      var state = this.state;
      var className = props.className,
          disabled = props.disabled,
          prefixCls = props.prefixCls,
          loading = props.loading;
      var ctrlNode = this.renderTopControlNode();
      var _this$state2 = this.state,
          open = _this$state2.open,
          ariaId = _this$state2.ariaId;

      if (open) {
        var filterOptions = this.renderFilterOptions();
        this._empty = filterOptions.empty;
        this._options = filterOptions.options;
      }

      var realOpen = this.getRealOpenState();
      var empty = this._empty;
      var options = this._options || [];
      var dataOrAriaAttributeProps = {};
      Object.keys(props).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(props, key) && (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')) {
          dataOrAriaAttributeProps[key] = props[key];
        }
      }); // for (const key in props) {
      //   if (
      //     Object.prototype.hasOwnProperty.call(props, key) &&
      //     (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')
      //   ) {
      //     dataOrAriaAttributeProps[key] = props[key];
      //   }
      // }

      var extraSelectionProps = Select_extends({}, dataOrAriaAttributeProps);

      if (!isMultipleOrTagsOrCombobox(props)) {
        extraSelectionProps = Select_extends({}, extraSelectionProps, {
          onKeyDown: this.onKeyDown,
          tabIndex: props.disabled ? -1 : props.tabIndex
        });
      }

      var rootCls = (_rootCls = {}, Select_defineProperty(_rootCls, className, !!className), Select_defineProperty(_rootCls, prefixCls, 1), Select_defineProperty(_rootCls, "".concat(prefixCls, "-open"), open), Select_defineProperty(_rootCls, "".concat(prefixCls, "-focused"), open || !!this._focused), Select_defineProperty(_rootCls, "".concat(prefixCls, "-combobox"), isCombobox(props)), Select_defineProperty(_rootCls, "".concat(prefixCls, "-disabled"), disabled), Select_defineProperty(_rootCls, "".concat(prefixCls, "-enabled"), !disabled), Select_defineProperty(_rootCls, "".concat(prefixCls, "-allow-clear"), !!props.allowClear), Select_defineProperty(_rootCls, "".concat(prefixCls, "-no-arrow"), !showArrow), Select_defineProperty(_rootCls, "".concat(prefixCls, "-loading"), !!loading), _rootCls);
      return react["createElement"](SelectTrigger_SelectTrigger, {
        onPopupFocus: this.onPopupFocus,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        empty: empty,
        multiple: multiple,
        disabled: disabled,
        visible: realOpen,
        inputValue: state.inputValue,
        value: state.value,
        backfillValue: state.backfillValue,
        firstActiveValue: props.firstActiveValue,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        showAction: props.showAction,
        ref: this.saveSelectTriggerRef,
        menuItemSelectedIcon: props.menuItemSelectedIcon,
        dropdownRender: props.dropdownRender,
        ariaId: ariaId
      }, react["createElement"]("div", {
        id: props.id,
        style: props.style,
        ref: this.saveRootRef,
        onBlur: this.onOuterBlur,
        onFocus: this.onOuterFocus,
        className: classnames_default()(rootCls),
        onMouseDown: this.markMouseDown,
        onMouseUp: this.markMouseLeave,
        onMouseOut: this.markMouseLeave
      }, react["createElement"]("div", Select_extends({
        ref: this.saveSelectionRef,
        key: "selection",
        className: "".concat(prefixCls, "-selection\n            ").concat(prefixCls, "-selection--").concat(multiple ? 'multiple' : 'single'),
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-haspopup": "true",
        "aria-controls": ariaId,
        "aria-expanded": realOpen
      }, extraSelectionProps), ctrlNode, this.renderClear(), this.renderArrow(!!multiple))));
    }
  }]);

  return Select;
}(react["Component"]);

Select_Select.propTypes = PropTypes;
Select_Select.defaultProps = {
  prefixCls: 'rc-select',
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onSelect: noop,
  onSearch: noop,
  onDeselect: noop,
  onInputKeyDown: noop,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found',
  backfill: false,
  showAction: ['click'],
  tokenSeparators: [],
  autoClearSearchValue: true,
  tabIndex: 0,
  dropdownRender: function dropdownRender(menu) {
    return menu;
  }
};

Select_Select.getDerivedStateFromProps = function (nextProps, prevState) {
  var optionsInfo = prevState.skipBuildOptionsInfo ? prevState.optionsInfo : Select_Select.getOptionsInfoFromProps(nextProps, prevState);
  var newState = {
    optionsInfo: optionsInfo,
    skipBuildOptionsInfo: false
  };

  if ('open' in nextProps) {
    newState.open = nextProps.open;
  }

  if ('value' in nextProps) {
    var value = Select_Select.getValueFromProps(nextProps);
    newState.value = value;

    if (nextProps.combobox) {
      newState.inputValue = Select_Select.getInputValueForCombobox(nextProps, optionsInfo);
    }
  }

  return newState;
};

Select_Select.getOptionsFromChildren = function (children) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  react["Children"].forEach(children, function (child) {
    if (!child) {
      return;
    }

    var type = child.type;

    if (type.isSelectOptGroup) {
      Select_Select.getOptionsFromChildren(child.props.children, options);
    } else {
      options.push(child);
    }
  });
  return options;
};

Select_Select.getInputValueForCombobox = function (props, optionsInfo, useDefaultValue) {
  var value = [];

  if ('value' in props && !useDefaultValue) {
    value = util_toArray(props.value);
  }

  if ('defaultValue' in props && useDefaultValue) {
    value = util_toArray(props.defaultValue);
  }

  if (value.length) {
    value = value[0];
  } else {
    return '';
  }

  var label = value;

  if (props.labelInValue) {
    label = value.label;
  } else if (optionsInfo[getMapKey(value)]) {
    label = optionsInfo[getMapKey(value)].label;
  }

  if (label === undefined) {
    label = '';
  }

  return label;
};

Select_Select.getLabelFromOption = function (props, option) {
  return getPropValue(option, props.optionLabelProp);
};

Select_Select.getOptionsInfoFromProps = function (props, preState) {
  var options = Select_Select.getOptionsFromChildren(props.children);
  var optionsInfo = {};
  options.forEach(function (option) {
    var singleValue = getValuePropValue(option);
    optionsInfo[getMapKey(singleValue)] = {
      option: option,
      value: singleValue,
      label: Select_Select.getLabelFromOption(props, option),
      title: option.props.title,
      disabled: option.props.disabled
    };
  });

  if (preState) {
    // keep option info in pre state value.
    var oldOptionsInfo = preState.optionsInfo;
    var value = preState.value;

    if (value) {
      value.forEach(function (v) {
        var key = getMapKey(v);

        if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
          optionsInfo[key] = oldOptionsInfo[key];
        }
      });
    }
  }

  return optionsInfo;
};

Select_Select.getValueFromProps = function (props, useDefaultValue) {
  var value = [];

  if ('value' in props && !useDefaultValue) {
    value = util_toArray(props.value);
  }

  if ('defaultValue' in props && useDefaultValue) {
    value = util_toArray(props.defaultValue);
  }

  if (props.labelInValue) {
    value = value.map(function (v) {
      return v.key;
    });
  }

  return value;
};

Select_Select.displayName = 'Select';
Object(react_lifecycles_compat_es["polyfill"])(Select_Select);
/* harmony default export */ var es_Select = (Select_Select);
// CONCATENATED MODULE: ./node_modules/rc-select/es/index.js




es_Select.Option = Option;
es_Select.OptGroup = OptGroup;

/* harmony default export */ var rc_select_es = (es_Select);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/omit.js/es/index.js
var omit_js_es = __webpack_require__("BGR+");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__("6CfX");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__("CWQg");

// CONCATENATED MODULE: ./node_modules/antd/es/select/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return select_Select; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function select_extends() { select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return select_extends.apply(this, arguments); }

function select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function select_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function select_createClass(Constructor, protoProps, staticProps) { if (protoProps) select_defineProperties(Constructor.prototype, protoProps); if (staticProps) select_defineProperties(Constructor, staticProps); return Constructor; }

function select_possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return select_assertThisInitialized(self); }

function select_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function select_getPrototypeOf(o) { select_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return select_getPrototypeOf(o); }

function select_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) select_setPrototypeOf(subClass, superClass); }

function select_setPrototypeOf(o, p) { select_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return select_setPrototypeOf(o, p); }

var select_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var SelectSizes = Object(_util_type["a" /* tuple */])('default', 'large', 'small');
var select_SelectPropTypes = {
  prefixCls: prop_types["string"],
  className: prop_types["string"],
  size: prop_types["oneOf"](SelectSizes),
  notFoundContent: prop_types["any"],
  showSearch: prop_types["bool"],
  optionLabelProp: prop_types["string"],
  transitionName: prop_types["string"],
  choiceTransitionName: prop_types["string"],
  id: prop_types["string"]
}; // => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var select_Select =
/*#__PURE__*/
function (_React$Component) {
  select_inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    select_classCallCheck(this, Select);

    _this = select_possibleConstructorReturn(this, select_getPrototypeOf(Select).call(this, props));

    _this.saveSelect = function (node) {
      _this.rcSelect = node;
    };

    _this.renderSelect = function (_ref) {
      var _classNames;

      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          _a$className = _a.className,
          className = _a$className === void 0 ? '' : _a$className,
          size = _a.size,
          mode = _a.mode,
          getPopupContainer = _a.getPopupContainer,
          removeIcon = _a.removeIcon,
          clearIcon = _a.clearIcon,
          menuItemSelectedIcon = _a.menuItemSelectedIcon,
          showArrow = _a.showArrow,
          restProps = select_rest(_a, ["prefixCls", "className", "size", "mode", "getPopupContainer", "removeIcon", "clearIcon", "menuItemSelectedIcon", "showArrow"]);

      var rest = Object(omit_js_es["a" /* default */])(restProps, ['inputIcon']);
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var cls = classnames_default()((_classNames = {}, select_defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), select_defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), select_defineProperty(_classNames, "".concat(prefixCls, "-show-arrow"), showArrow), _classNames), className);
      var optionLabelProp = _this.props.optionLabelProp;

      if (_this.isCombobox()) {
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var modeConfig = {
        multiple: mode === 'multiple',
        tags: mode === 'tags',
        combobox: _this.isCombobox()
      };
      var finalRemoveIcon = removeIcon && (react["isValidElement"](removeIcon) ? react["cloneElement"](removeIcon, {
        className: classnames_default()(removeIcon.props.className, "".concat(prefixCls, "-remove-icon"))
      }) : removeIcon) || react["createElement"](icon["a" /* default */], {
        type: "close",
        className: "".concat(prefixCls, "-remove-icon")
      });
      var finalClearIcon = clearIcon && (react["isValidElement"](clearIcon) ? react["cloneElement"](clearIcon, {
        className: classnames_default()(clearIcon.props.className, "".concat(prefixCls, "-clear-icon"))
      }) : clearIcon) || react["createElement"](icon["a" /* default */], {
        type: "close-circle",
        theme: "filled",
        className: "".concat(prefixCls, "-clear-icon")
      });
      var finalMenuItemSelectedIcon = menuItemSelectedIcon && (react["isValidElement"](menuItemSelectedIcon) ? react["cloneElement"](menuItemSelectedIcon, {
        className: classnames_default()(menuItemSelectedIcon.props.className, "".concat(prefixCls, "-selected-icon"))
      }) : menuItemSelectedIcon) || react["createElement"](icon["a" /* default */], {
        type: "check",
        className: "".concat(prefixCls, "-selected-icon")
      });
      return react["createElement"](rc_select_es, select_extends({
        inputIcon: _this.renderSuffixIcon(prefixCls),
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon,
        menuItemSelectedIcon: finalMenuItemSelectedIcon,
        showArrow: showArrow
      }, rest, modeConfig, {
        prefixCls: prefixCls,
        className: cls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: _this.getNotFoundContent(renderEmpty),
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        ref: _this.saveSelect
      }));
    };

    Object(_util_warning["a" /* default */])(props.mode !== 'combobox', 'Select', 'The combobox mode is deprecated, ' + 'it will be removed in next major version, ' + 'please use AutoComplete instead');
    return _this;
  }

  select_createClass(Select, [{
    key: "focus",
    value: function focus() {
      this.rcSelect.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSelect.blur();
    }
  }, {
    key: "getNotFoundContent",
    value: function getNotFoundContent(renderEmpty) {
      var notFoundContent = this.props.notFoundContent;

      if (notFoundContent !== undefined) {
        return notFoundContent;
      }

      if (this.isCombobox()) {
        return null;
      }

      return renderEmpty('Select'); // if (this.isCombobox()) {
      //   // AutoComplete don't have notFoundContent defaultly
      //   return notFoundContent === undefined ? null : notFoundContent;
      // }
      // return renderEmpty('Select');
      // // return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
    }
  }, {
    key: "isCombobox",
    value: function isCombobox() {
      var mode = this.props.mode;
      return mode === 'combobox' || mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE;
    }
  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon(prefixCls) {
      var _this$props = this.props,
          loading = _this$props.loading,
          suffixIcon = _this$props.suffixIcon;

      if (suffixIcon) {
        return react["isValidElement"](suffixIcon) ? react["cloneElement"](suffixIcon, {
          className: classnames_default()(suffixIcon.props.className, "".concat(prefixCls, "-arrow-icon"))
        }) : suffixIcon;
      }

      if (loading) {
        return react["createElement"](icon["a" /* default */], {
          type: "loading"
        });
      }

      return react["createElement"](icon["a" /* default */], {
        type: "down",
        className: "".concat(prefixCls, "-arrow-icon")
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderSelect);
    }
  }]);

  return Select;
}(react["Component"]);


select_Select.Option = Option;
select_Select.OptGroup = OptGroup;
select_Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
select_Select.defaultProps = {
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};
select_Select.propTypes = select_SelectPropTypes;

/***/ }),

/***/ "2wU4":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard", function() {
      var page = __webpack_require__("u9iw")
      if(false) {}
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "NUBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("YEIV");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

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

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Pager.js



var Pager_Pager = function Pager(props) {
  var prefixCls = props.rootPrefixCls + '-item';
  var cls = prefixCls + ' ' + prefixCls + '-' + props.page;

  if (props.active) {
    cls = cls + ' ' + prefixCls + '-active';
  }

  if (props.className) {
    cls = cls + ' ' + props.className;
  }

  if (!props.page) {
    cls = cls + ' ' + prefixCls + '-disabled';
  }

  var handleClick = function handleClick() {
    props.onClick(props.page);
  };

  var handleKeyPress = function handleKeyPress(e) {
    props.onKeyPress(e, props.onClick, props.page);
  };

  return react_default.a.createElement(
    'li',
    {
      title: props.showTitle ? props.page : null,
      className: cls,
      onClick: handleClick,
      onKeyPress: handleKeyPress,
      tabIndex: '0'
    },
    props.itemRender(props.page, 'page', react_default.a.createElement(
      'a',
      null,
      props.page
    ))
  );
};

Pager_Pager.propTypes = {
  page: prop_types_default.a.number,
  active: prop_types_default.a.bool,
  last: prop_types_default.a.bool,
  locale: prop_types_default.a.object,
  className: prop_types_default.a.string,
  showTitle: prop_types_default.a.bool,
  rootPrefixCls: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  onKeyPress: prop_types_default.a.func,
  itemRender: prop_types_default.a.func
};

/* harmony default export */ var es_Pager = (Pager_Pager);
// CONCATENATED MODULE: ./node_modules/rc-pagination/es/KeyCode.js
/* harmony default export */ var KeyCode = ({
  ZERO: 48,
  NINE: 57,

  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,

  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,

  ARROW_UP: 38,
  ARROW_DOWN: 40
});
// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Options.js








var Options_Options = function (_React$Component) {
  inherits_default()(Options, _React$Component);

  function Options(props) {
    classCallCheck_default()(this, Options);

    var _this = possibleConstructorReturn_default()(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this.buildOptionText = function (value) {
      return value + ' ' + _this.props.locale.items_per_page;
    };

    _this.changeSize = function (value) {
      _this.props.changeSize(Number(value));
    };

    _this.handleChange = function (e) {
      _this.setState({
        goInputText: e.target.value
      });
    };

    _this.go = function (e) {
      var val = _this.state.goInputText;
      if (val === '') {
        return;
      }
      val = isNaN(val) ? _this.props.current : Number(val);
      if (e.keyCode === KeyCode.ENTER || e.type === 'click') {
        _this.setState({
          goInputText: ''
        });
        _this.props.quickGo(val);
      }
    };

    _this.state = {
      goInputText: ''
    };
    return _this;
  }

  createClass_default()(Options, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          pageSize = _props.pageSize,
          pageSizeOptions = _props.pageSizeOptions,
          locale = _props.locale,
          rootPrefixCls = _props.rootPrefixCls,
          changeSize = _props.changeSize,
          quickGo = _props.quickGo,
          goButton = _props.goButton,
          selectComponentClass = _props.selectComponentClass,
          buildOptionText = _props.buildOptionText,
          selectPrefixCls = _props.selectPrefixCls,
          disabled = _props.disabled;
      var goInputText = this.state.goInputText;

      var prefixCls = rootPrefixCls + '-options';
      var Select = selectComponentClass;
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;

      if (!changeSize && !quickGo) {
        return null;
      }

      if (changeSize && Select) {
        var options = pageSizeOptions.map(function (opt, i) {
          return react_default.a.createElement(
            Select.Option,
            { key: i, value: opt },
            (buildOptionText || _this2.buildOptionText)(opt)
          );
        });

        changeSelect = react_default.a.createElement(
          Select,
          {
            disabled: disabled,
            prefixCls: selectPrefixCls,
            showSearch: false,
            className: prefixCls + '-size-changer',
            optionLabelProp: 'children',
            dropdownMatchSelectWidth: false,
            value: (pageSize || pageSizeOptions[0]).toString(),
            onChange: this.changeSize,
            getPopupContainer: function getPopupContainer(triggerNode) {
              return triggerNode.parentNode;
            }
          },
          options
        );
      }

      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === 'boolean' ? react_default.a.createElement(
            'button',
            {
              type: 'button',
              onClick: this.go,
              onKeyUp: this.go,
              disabled: disabled
            },
            locale.jump_to_confirm
          ) : react_default.a.createElement(
            'span',
            {
              onClick: this.go,
              onKeyUp: this.go
            },
            goButton
          );
        }
        goInput = react_default.a.createElement(
          'div',
          { className: prefixCls + '-quick-jumper' },
          locale.jump_to,
          react_default.a.createElement('input', {
            disabled: disabled,
            type: 'text',
            value: goInputText,
            onChange: this.handleChange,
            onKeyUp: this.go
          }),
          locale.page,
          gotoButton
        );
      }

      return react_default.a.createElement(
        'li',
        { className: '' + prefixCls },
        changeSelect,
        goInput
      );
    }
  }]);

  return Options;
}(react_default.a.Component);

Options_Options.propTypes = {
  disabled: prop_types_default.a.bool,
  changeSize: prop_types_default.a.func,
  quickGo: prop_types_default.a.func,
  selectComponentClass: prop_types_default.a.func,
  current: prop_types_default.a.number,
  pageSizeOptions: prop_types_default.a.arrayOf(prop_types_default.a.string),
  pageSize: prop_types_default.a.number,
  buildOptionText: prop_types_default.a.func,
  locale: prop_types_default.a.object,
  rootPrefixCls: prop_types_default.a.string,
  selectPrefixCls: prop_types_default.a.string,
  goButton: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.node])
};
Options_Options.defaultProps = {
  pageSizeOptions: ['10', '20', '30', '40']
};


/* harmony default export */ var es_Options = (Options_Options);
// CONCATENATED MODULE: ./node_modules/rc-pagination/es/locale/zh_CN.js
/* harmony default export */ var zh_CN = ({
  // Options.jsx
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',

  // Pagination.jsx
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页'
});
// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("VCL8");

// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Pagination.js















function noop() {}

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function defaultItemRender(page, type, element) {
  return element;
}

function calculatePage(p, state, props) {
  var pageSize = p;
  if (typeof pageSize === 'undefined') {
    pageSize = state.pageSize;
  }
  return Math.floor((props.total - 1) / pageSize) + 1;
}

var Pagination_Pagination = function (_React$Component) {
  inherits_default()(Pagination, _React$Component);

  function Pagination(props) {
    classCallCheck_default()(this, Pagination);

    var _this = possibleConstructorReturn_default()(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    Pagination_initialiseProps.call(_this);

    var hasOnChange = props.onChange !== noop;
    var hasCurrent = 'current' in props;
    if (hasCurrent && !hasOnChange) {
      console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.'); // eslint-disable-line
    }

    var current = props.defaultCurrent;
    if ('current' in props) {
      current = props.current;
    }

    var pageSize = props.defaultPageSize;
    if ('pageSize' in props) {
      pageSize = props.pageSize;
    }

    _this.state = {
      current: current,
      currentInputValue: current,
      pageSize: pageSize
    };
    return _this;
  }

  createClass_default()(Pagination, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      var prefixCls = this.props.prefixCls;

      if (prevState.current !== this.state.current && this.paginationNode) {
        var lastCurrentNode = this.paginationNode.querySelector('.' + prefixCls + '-item-' + prevState.current);
        if (lastCurrentNode && document.activeElement === lastCurrentNode) {
          lastCurrentNode.blur();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          disabled = _props.disabled;

      // When hideOnSinglePage is true and there is only 1 page, hide the pager

      if (this.props.hideOnSinglePage === true && this.props.total <= this.state.pageSize) {
        return null;
      }

      var props = this.props;
      var locale = props.locale;

      var allPages = calculatePage(undefined, this.state, this.props);
      var pagerList = [];
      var jumpPrev = null;
      var jumpNext = null;
      var firstPager = null;
      var lastPager = null;
      var gotoButton = null;

      var goButton = props.showQuickJumper && props.showQuickJumper.goButton;
      var pageBufferSize = props.showLessItems ? 1 : 2;
      var _state = this.state,
          current = _state.current,
          pageSize = _state.pageSize;


      var prevPage = current - 1 > 0 ? current - 1 : 0;
      var nextPage = current + 1 < allPages ? current + 1 : allPages;

      var dataOrAriaAttributeProps = Object.keys(props).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          prev[key] = props[key];
        }
        return prev;
      }, {});

      if (props.simple) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: this.handleGoTO,
                onKeyUp: this.handleGoTO
              },
              locale.jump_to_confirm
            );
          } else {
            gotoButton = react_default.a.createElement(
              'span',
              {
                onClick: this.handleGoTO,
                onKeyUp: this.handleGoTO
              },
              goButton
            );
          }
          gotoButton = react_default.a.createElement(
            'li',
            {
              title: props.showTitle ? '' + locale.jump_to + this.state.current + '/' + allPages : null,
              className: prefixCls + '-simple-pager'
            },
            gotoButton
          );
        }

        return react_default.a.createElement(
          'ul',
          extends_default()({
            className: prefixCls + ' ' + prefixCls + '-simple ' + props.className,
            style: props.style,
            ref: this.savePaginationNode
          }, dataOrAriaAttributeProps),
          react_default.a.createElement(
            'li',
            {
              title: props.showTitle ? locale.prev_page : null,
              onClick: this.prev,
              tabIndex: this.hasPrev() ? 0 : null,
              onKeyPress: this.runIfEnterPrev,
              className: (this.hasPrev() ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-prev',
              'aria-disabled': !this.hasPrev()
            },
            props.itemRender(prevPage, 'prev', this.getItemIcon(props.prevIcon))
          ),
          react_default.a.createElement(
            'li',
            {
              title: props.showTitle ? this.state.current + '/' + allPages : null,
              className: prefixCls + '-simple-pager'
            },
            react_default.a.createElement('input', {
              type: 'text',
              value: this.state.currentInputValue,
              onKeyDown: this.handleKeyDown,
              onKeyUp: this.handleKeyUp,
              onChange: this.handleKeyUp,
              size: '3'
            }),
            react_default.a.createElement(
              'span',
              { className: prefixCls + '-slash' },
              '\uFF0F'
            ),
            allPages
          ),
          react_default.a.createElement(
            'li',
            {
              title: props.showTitle ? locale.next_page : null,
              onClick: this.next,
              tabIndex: this.hasPrev() ? 0 : null,
              onKeyPress: this.runIfEnterNext,
              className: (this.hasNext() ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-next',
              'aria-disabled': !this.hasNext()
            },
            props.itemRender(nextPage, 'next', this.getItemIcon(props.nextIcon))
          ),
          gotoButton
        );
      }

      if (allPages <= 5 + pageBufferSize * 2) {
        var pagerProps = {
          locale: locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        };
        if (!allPages) {
          pagerList.push(react_default.a.createElement(es_Pager, extends_default()({}, pagerProps, {
            key: 'noPager',
            page: allPages,
            className: prefixCls + '-disabled'
          })));
        }
        for (var i = 1; i <= allPages; i++) {
          var active = this.state.current === i;
          pagerList.push(react_default.a.createElement(es_Pager, extends_default()({}, pagerProps, {
            key: i,
            page: i,
            active: active
          })));
        }
      } else {
        var prevItemTitle = props.showLessItems ? locale.prev_3 : locale.prev_5;
        var nextItemTitle = props.showLessItems ? locale.next_3 : locale.next_5;
        if (props.showPrevNextJumpers) {
          var jumpPrevClassString = prefixCls + '-jump-prev';
          if (props.jumpPrevIcon) {
            jumpPrevClassString += ' ' + prefixCls + '-jump-prev-custom-icon';
          }
          jumpPrev = react_default.a.createElement(
            'li',
            {
              title: props.showTitle ? prevItemTitle : null,
              key: 'prev',
              onClick: this.jumpPrev,
              tabIndex: '0',
              onKeyPress: this.runIfEnterJumpPrev,
              className: jumpPrevClassString
            },
            props.itemRender(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(props.jumpPrevIcon))
          );
          var jumpNextClassString = prefixCls + '-jump-next';
          if (props.jumpNextIcon) {
            jumpNextClassString += ' ' + prefixCls + '-jump-next-custom-icon';
          }
          jumpNext = react_default.a.createElement(
            'li',
            {
              title: props.showTitle ? nextItemTitle : null,
              key: 'next',
              tabIndex: '0',
              onClick: this.jumpNext,
              onKeyPress: this.runIfEnterJumpNext,
              className: jumpNextClassString
            },
            props.itemRender(this.getJumpNextPage(), 'jump-next', this.getItemIcon(props.jumpNextIcon))
          );
        }
        lastPager = react_default.a.createElement(es_Pager, {
          locale: props.locale,
          last: true,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: allPages,
          page: allPages,
          active: false,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        });
        firstPager = react_default.a.createElement(es_Pager, {
          locale: props.locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: false,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        });

        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize, allPages);

        if (current - 1 <= pageBufferSize) {
          right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
          left = allPages - pageBufferSize * 2;
        }

        for (var _i = left; _i <= right; _i++) {
          var _active = current === _i;
          pagerList.push(react_default.a.createElement(es_Pager, {
            locale: props.locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: _i,
            page: _i,
            active: _active,
            showTitle: props.showTitle,
            itemRender: props.itemRender
          }));
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
          pagerList[0] = react_default.a.cloneElement(pagerList[0], {
            className: prefixCls + '-item-after-jump-prev'
          });
          pagerList.unshift(jumpPrev);
        }
        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
          pagerList[pagerList.length - 1] = react_default.a.cloneElement(pagerList[pagerList.length - 1], {
            className: prefixCls + '-item-before-jump-next'
          });
          pagerList.push(jumpNext);
        }

        if (left !== 1) {
          pagerList.unshift(firstPager);
        }
        if (right !== allPages) {
          pagerList.push(lastPager);
        }
      }

      var totalText = null;

      if (props.showTotal) {
        totalText = react_default.a.createElement(
          'li',
          { className: prefixCls + '-total-text' },
          props.showTotal(props.total, [props.total === 0 ? 0 : (current - 1) * pageSize + 1, current * pageSize > props.total ? props.total : current * pageSize])
        );
      }
      var prevDisabled = !this.hasPrev() || !allPages;
      var nextDisabled = !this.hasNext() || !allPages;
      return react_default.a.createElement(
        'ul',
        extends_default()({
          className: classnames_default()(prefixCls, className, defineProperty_default()({}, prefixCls + '-disabled', disabled)),
          style: props.style,
          unselectable: 'unselectable',
          ref: this.savePaginationNode
        }, dataOrAriaAttributeProps),
        totalText,
        react_default.a.createElement(
          'li',
          {
            title: props.showTitle ? locale.prev_page : null,
            onClick: this.prev,
            tabIndex: prevDisabled ? null : 0,
            onKeyPress: this.runIfEnterPrev,
            className: (!prevDisabled ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-prev',
            'aria-disabled': prevDisabled
          },
          props.itemRender(prevPage, 'prev', this.getItemIcon(props.prevIcon))
        ),
        pagerList,
        react_default.a.createElement(
          'li',
          {
            title: props.showTitle ? locale.next_page : null,
            onClick: this.next,
            tabIndex: nextDisabled ? null : 0,
            onKeyPress: this.runIfEnterNext,
            className: (!nextDisabled ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-next',
            'aria-disabled': nextDisabled
          },
          props.itemRender(nextPage, 'next', this.getItemIcon(props.nextIcon))
        ),
        react_default.a.createElement(es_Options, {
          disabled: disabled,
          locale: props.locale,
          rootPrefixCls: prefixCls,
          selectComponentClass: props.selectComponentClass,
          selectPrefixCls: props.selectPrefixCls,
          changeSize: this.props.showSizeChanger ? this.changePageSize : null,
          current: this.state.current,
          pageSize: this.state.pageSize,
          pageSizeOptions: this.props.pageSizeOptions,
          quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
          goButton: goButton
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, prevState) {
      var newState = {};

      if ('current' in props) {
        newState.current = props.current;

        if (props.current !== prevState.current) {
          newState.currentInputValue = newState.current;
        }
      }

      if ('pageSize' in props && props.pageSize !== prevState.pageSize) {
        var current = prevState.current;
        var newCurrent = calculatePage(props.pageSize, prevState, props);
        current = current > newCurrent ? newCurrent : current;

        if (!('current' in props)) {
          newState.current = current;
          newState.currentInputValue = current;
        }
        newState.pageSize = props.pageSize;
      }

      return newState;
    }

    /**
     * computed icon node that need to be rendered.
     * @param {React.ReactNode | React.ComponentType<PaginationProps>} icon received icon.
     * @returns {React.ReactNode}
     */

  }]);

  return Pagination;
}(react_default.a.Component);

Pagination_Pagination.propTypes = {
  disabled: prop_types_default.a.bool,
  prefixCls: prop_types_default.a.string,
  className: prop_types_default.a.string,
  current: prop_types_default.a.number,
  defaultCurrent: prop_types_default.a.number,
  total: prop_types_default.a.number,
  pageSize: prop_types_default.a.number,
  defaultPageSize: prop_types_default.a.number,
  onChange: prop_types_default.a.func,
  hideOnSinglePage: prop_types_default.a.bool,
  showSizeChanger: prop_types_default.a.bool,
  showLessItems: prop_types_default.a.bool,
  onShowSizeChange: prop_types_default.a.func,
  selectComponentClass: prop_types_default.a.func,
  showPrevNextJumpers: prop_types_default.a.bool,
  showQuickJumper: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.object]),
  showTitle: prop_types_default.a.bool,
  pageSizeOptions: prop_types_default.a.arrayOf(prop_types_default.a.string),
  showTotal: prop_types_default.a.func,
  locale: prop_types_default.a.object,
  style: prop_types_default.a.object,
  itemRender: prop_types_default.a.func,
  prevIcon: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node]),
  nextIcon: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node]),
  jumpPrevIcon: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node]),
  jumpNextIcon: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node])
};
Pagination_Pagination.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: noop,
  className: '',
  selectPrefixCls: 'rc-select',
  prefixCls: 'rc-pagination',
  selectComponentClass: null,
  hideOnSinglePage: false,
  showPrevNextJumpers: true,
  showQuickJumper: false,
  showSizeChanger: false,
  showLessItems: false,
  showTitle: true,
  onShowSizeChange: noop,
  locale: zh_CN,
  style: {},
  itemRender: defaultItemRender
};

var Pagination_initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getJumpPrevPage = function () {
    return Math.max(1, _this2.state.current - (_this2.props.showLessItems ? 3 : 5));
  };

  this.getJumpNextPage = function () {
    return Math.min(calculatePage(undefined, _this2.state, _this2.props), _this2.state.current + (_this2.props.showLessItems ? 3 : 5));
  };

  this.getItemIcon = function (icon) {
    var prefixCls = _this2.props.prefixCls;

    var iconNode = icon || react_default.a.createElement('a', { className: prefixCls + '-item-link' });
    if (typeof icon === 'function') {
      iconNode = react_default.a.createElement(icon, extends_default()({}, _this2.props));
    }
    return iconNode;
  };

  this.savePaginationNode = function (node) {
    _this2.paginationNode = node;
  };

  this.isValid = function (page) {
    return isInteger(page) && page >= 1 && page !== _this2.state.current;
  };

  this.shouldDisplayQuickJumper = function () {
    var _props2 = _this2.props,
        showQuickJumper = _props2.showQuickJumper,
        pageSize = _props2.pageSize,
        total = _props2.total;

    if (total <= pageSize) {
      return false;
    }
    return showQuickJumper;
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === KeyCode.ARROW_UP || e.keyCode === KeyCode.ARROW_DOWN) {
      e.preventDefault();
    }
  };

  this.handleKeyUp = function (e) {
    var inputValue = e.target.value;
    var currentInputValue = _this2.state.currentInputValue;
    var value = void 0;

    if (inputValue === '') {
      value = inputValue;
    } else if (isNaN(Number(inputValue))) {
      value = currentInputValue;
    } else {
      value = Number(inputValue);
    }

    if (value !== currentInputValue) {
      _this2.setState({
        currentInputValue: value
      });
    }

    if (e.keyCode === KeyCode.ENTER) {
      _this2.handleChange(value);
    } else if (e.keyCode === KeyCode.ARROW_UP) {
      _this2.handleChange(value - 1);
    } else if (e.keyCode === KeyCode.ARROW_DOWN) {
      _this2.handleChange(value + 1);
    }
  };

  this.changePageSize = function (size) {
    var current = _this2.state.current;
    var newCurrent = calculatePage(size, _this2.state, _this2.props);
    current = current > newCurrent ? newCurrent : current;
    // fix the issue:
    // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.
    if (newCurrent === 0) {
      current = _this2.state.current;
    }

    if (typeof size === 'number') {
      if (!('pageSize' in _this2.props)) {
        _this2.setState({
          pageSize: size
        });
      }
      if (!('current' in _this2.props)) {
        _this2.setState({
          current: current,
          currentInputValue: current
        });
      }
    }
    _this2.props.onShowSizeChange(current, size);
  };

  this.handleChange = function (p) {
    var disabled = _this2.props.disabled;


    var page = p;
    if (_this2.isValid(page) && !disabled) {
      var currentPage = calculatePage(undefined, _this2.state, _this2.props);
      if (page > currentPage) {
        page = currentPage;
      }

      if (!('current' in _this2.props)) {
        _this2.setState({
          current: page,
          currentInputValue: page
        });
      }

      var pageSize = _this2.state.pageSize;
      _this2.props.onChange(page, pageSize);

      return page;
    }

    return _this2.state.current;
  };

  this.prev = function () {
    if (_this2.hasPrev()) {
      _this2.handleChange(_this2.state.current - 1);
    }
  };

  this.next = function () {
    if (_this2.hasNext()) {
      _this2.handleChange(_this2.state.current + 1);
    }
  };

  this.jumpPrev = function () {
    _this2.handleChange(_this2.getJumpPrevPage());
  };

  this.jumpNext = function () {
    _this2.handleChange(_this2.getJumpNextPage());
  };

  this.hasPrev = function () {
    return _this2.state.current > 1;
  };

  this.hasNext = function () {
    return _this2.state.current < calculatePage(undefined, _this2.state, _this2.props);
  };

  this.runIfEnter = function (event, callback) {
    for (var _len = arguments.length, restParams = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      restParams[_key - 2] = arguments[_key];
    }

    if (event.key === 'Enter' || event.charCode === 13) {
      callback.apply(undefined, restParams);
    }
  };

  this.runIfEnterPrev = function (e) {
    _this2.runIfEnter(e, _this2.prev);
  };

  this.runIfEnterNext = function (e) {
    _this2.runIfEnter(e, _this2.next);
  };

  this.runIfEnterJumpPrev = function (e) {
    _this2.runIfEnter(e, _this2.jumpPrev);
  };

  this.runIfEnterJumpNext = function (e) {
    _this2.runIfEnter(e, _this2.jumpNext);
  };

  this.handleGoTO = function (e) {
    if (e.keyCode === KeyCode.ENTER || e.type === 'click') {
      _this2.handleChange(_this2.state.currentInputValue);
    }
  };
};

Object(react_lifecycles_compat_es["polyfill"])(Pagination_Pagination);

/* harmony default export */ var es_Pagination = (Pagination_Pagination);
// CONCATENATED MODULE: ./node_modules/rc-pagination/es/index.js

// EXTERNAL MODULE: ./node_modules/rc-pagination/es/locale/en_US.js
var en_US = __webpack_require__("H4fg");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 8 modules
var es_select = __webpack_require__("2fM7");

// CONCATENATED MODULE: ./node_modules/antd/es/pagination/MiniSelect.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MiniSelect_MiniSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MiniSelect, _React$Component);

  function MiniSelect() {
    _classCallCheck(this, MiniSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(MiniSelect).apply(this, arguments));
  }

  _createClass(MiniSelect, [{
    key: "render",
    value: function render() {
      return react["createElement"](es_select["a" /* default */], _extends({
        size: "small"
      }, this.props));
    }
  }]);

  return MiniSelect;
}(react["Component"]);


MiniSelect_MiniSelect.Option = es_select["a" /* default */].Option;
// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var es_icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js
var LocaleReceiver = __webpack_require__("YMnH");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// CONCATENATED MODULE: ./node_modules/antd/es/pagination/Pagination.js
function Pagination_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Pagination_typeof = function _typeof(obj) { return typeof obj; }; } else { Pagination_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Pagination_typeof(obj); }

function Pagination_extends() { Pagination_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pagination_extends.apply(this, arguments); }

function Pagination_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Pagination_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Pagination_createClass(Constructor, protoProps, staticProps) { if (protoProps) Pagination_defineProperties(Constructor.prototype, protoProps); if (staticProps) Pagination_defineProperties(Constructor, staticProps); return Constructor; }

function Pagination_possibleConstructorReturn(self, call) { if (call && (Pagination_typeof(call) === "object" || typeof call === "function")) { return call; } return Pagination_assertThisInitialized(self); }

function Pagination_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Pagination_getPrototypeOf(o) { Pagination_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Pagination_getPrototypeOf(o); }

function Pagination_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Pagination_setPrototypeOf(subClass, superClass); }

function Pagination_setPrototypeOf(o, p) { Pagination_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Pagination_setPrototypeOf(o, p); }

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











var pagination_Pagination_Pagination =
/*#__PURE__*/
function (_React$Component) {
  Pagination_inherits(Pagination, _React$Component);

  function Pagination() {
    var _this;

    Pagination_classCallCheck(this, Pagination);

    _this = Pagination_possibleConstructorReturn(this, Pagination_getPrototypeOf(Pagination).apply(this, arguments));

    _this.getIconsProps = function (prefixCls) {
      var prevIcon = react["createElement"]("a", {
        className: "".concat(prefixCls, "-item-link")
      }, react["createElement"](es_icon["a" /* default */], {
        type: "left"
      }));
      var nextIcon = react["createElement"]("a", {
        className: "".concat(prefixCls, "-item-link")
      }, react["createElement"](es_icon["a" /* default */], {
        type: "right"
      }));
      var jumpPrevIcon = react["createElement"]("a", {
        className: "".concat(prefixCls, "-item-link")
      }, react["createElement"]("div", {
        className: "".concat(prefixCls, "-item-container")
      }, react["createElement"](es_icon["a" /* default */], {
        className: "".concat(prefixCls, "-item-link-icon"),
        type: "double-left"
      }), react["createElement"]("span", {
        className: "".concat(prefixCls, "-item-ellipsis")
      }, "\u2022\u2022\u2022")));
      var jumpNextIcon = react["createElement"]("a", {
        className: "".concat(prefixCls, "-item-link")
      }, react["createElement"]("div", {
        className: "".concat(prefixCls, "-item-container")
      }, react["createElement"](es_icon["a" /* default */], {
        className: "".concat(prefixCls, "-item-link-icon"),
        type: "double-right"
      }), react["createElement"]("span", {
        className: "".concat(prefixCls, "-item-ellipsis")
      }, "\u2022\u2022\u2022")));
      return {
        prevIcon: prevIcon,
        nextIcon: nextIcon,
        jumpPrevIcon: jumpPrevIcon,
        jumpNextIcon: jumpNextIcon
      };
    };

    _this.renderPagination = function (contextLocale) {
      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customizeSelectPrefixCls = _a.selectPrefixCls,
          className = _a.className,
          size = _a.size,
          customLocale = _a.locale,
          restProps = __rest(_a, ["prefixCls", "selectPrefixCls", "className", "size", "locale"]);

      var locale = Pagination_extends({}, contextLocale, customLocale);

      var isSmall = size === 'small';
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, function (_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var prefixCls = getPrefixCls('pagination', customizePrefixCls);
        var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
        return react["createElement"](es_Pagination, Pagination_extends({}, restProps, {
          prefixCls: prefixCls,
          selectPrefixCls: selectPrefixCls
        }, _this.getIconsProps(prefixCls), {
          className: classnames_default()(className, {
            mini: isSmall
          }),
          selectComponentClass: isSmall ? MiniSelect_MiniSelect : es_select["a" /* default */],
          locale: locale
        }));
      });
    };

    return _this;
  }

  Pagination_createClass(Pagination, [{
    key: "render",
    value: function render() {
      return react["createElement"](LocaleReceiver["a" /* default */], {
        componentName: "Pagination",
        defaultLocale: en_US["a" /* default */]
      }, this.renderPagination);
    }
  }]);

  return Pagination;
}(react["Component"]);


// CONCATENATED MODULE: ./node_modules/antd/es/pagination/index.js

/* harmony default export */ var pagination = __webpack_exports__["a"] = (pagination_Pagination_Pagination);

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

/***/ "VXEj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__("W9HT");

// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 8 modules
var es_pagination = __webpack_require__("NUBc");

// EXTERNAL MODULE: ./node_modules/antd/es/grid/row.js
var row = __webpack_require__("qrJ5");

// EXTERNAL MODULE: ./node_modules/antd/es/grid/col.js
var col = __webpack_require__("/kpp");

// CONCATENATED MODULE: ./node_modules/antd/es/_util/reactNode.js

function cloneElement(element) {
  if (!react["isValidElement"](element)) return element;

  for (var _len = arguments.length, restArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restArgs[_key - 1] = arguments[_key];
  }

  return react["cloneElement"].apply(react, [element].concat(restArgs));
}
// CONCATENATED MODULE: ./node_modules/antd/es/list/Item.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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







var Item_Meta = function Meta(props) {
  return react["createElement"](config_provider["a" /* ConfigConsumer */], null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var prefixCls = getPrefixCls('list', customizePrefixCls);
    var classString = classnames_default()("".concat(prefixCls, "-item-meta"), className);
    var content = react["createElement"]("div", {
      className: "".concat(prefixCls, "-item-meta-content")
    }, title && react["createElement"]("h4", {
      className: "".concat(prefixCls, "-item-meta-title")
    }, title), description && react["createElement"]("div", {
      className: "".concat(prefixCls, "-item-meta-description")
    }, description));
    return react["createElement"]("div", _extends({}, others, {
      className: classString
    }), avatar && react["createElement"]("div", {
      className: "".concat(prefixCls, "-item-meta-avatar")
    }, avatar), (title || description) && content);
  });
};

function getGrid(grid, t) {
  return grid[t] && Math.floor(24 / grid[t]);
}

var Item_Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    var _this;

    _classCallCheck(this, Item);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));

    _this.renderItem = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;
      var _this$context = _this.context,
          grid = _this$context.grid,
          itemLayout = _this$context.itemLayout;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          children = _a.children,
          actions = _a.actions,
          extra = _a.extra,
          className = _a.className,
          others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className"]);

      var prefixCls = getPrefixCls('list', customizePrefixCls);
      var actionsContent = actions && actions.length > 0 && react["createElement"]("ul", {
        className: "".concat(prefixCls, "-item-action"),
        key: "actions"
      }, actions.map(function (action, i) {
        return react["createElement"]("li", {
          key: "".concat(prefixCls, "-item-action-").concat(i)
        }, action, i !== actions.length - 1 && react["createElement"]("em", {
          className: "".concat(prefixCls, "-item-action-split")
        }));
      }));
      var Tag = grid ? 'div' : 'li';
      var itemChildren = react["createElement"](Tag, _extends({}, others, {
        // `li` element `onCopy` prop args is not same as `div`
        className: classnames_default()("".concat(prefixCls, "-item"), className, _defineProperty({}, "".concat(prefixCls, "-item-no-flex"), !_this.isFlexMode()))
      }), itemLayout === 'vertical' && extra ? [react["createElement"]("div", {
        className: "".concat(prefixCls, "-item-main"),
        key: "content"
      }, children, actionsContent), react["createElement"]("div", {
        className: "".concat(prefixCls, "-item-extra"),
        key: "extra"
      }, extra)] : [children, actionsContent, cloneElement(extra, {
        key: 'extra'
      })]);
      return grid ? react["createElement"](col["a" /* default */], {
        span: getGrid(grid, 'column'),
        xs: getGrid(grid, 'xs'),
        sm: getGrid(grid, 'sm'),
        md: getGrid(grid, 'md'),
        lg: getGrid(grid, 'lg'),
        xl: getGrid(grid, 'xl'),
        xxl: getGrid(grid, 'xxl')
      }, itemChildren) : itemChildren;
    };

    return _this;
  }

  _createClass(Item, [{
    key: "isItemContainsTextNode",
    value: function isItemContainsTextNode() {
      var children = this.props.children;
      var result;
      react["Children"].forEach(children, function (element) {
        if (typeof element === 'string') {
          result = true;
        }
      });
      return result;
    }
  }, {
    key: "isFlexMode",
    value: function isFlexMode() {
      var extra = this.props.extra;
      var itemLayout = this.context.itemLayout;

      if (itemLayout === 'vertical') {
        return !!extra;
      }

      return !this.isItemContainsTextNode();
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderItem);
    }
  }]);

  return Item;
}(react["Component"]);


Item_Item.Meta = Item_Meta;
Item_Item.contextTypes = {
  grid: prop_types["any"],
  itemLayout: prop_types["string"]
};
// CONCATENATED MODULE: ./node_modules/antd/es/list/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return list_List; });
function list_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { list_typeof = function _typeof(obj) { return typeof obj; }; } else { list_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return list_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function list_extends() { list_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return list_extends.apply(this, arguments); }

function list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function list_createClass(Constructor, protoProps, staticProps) { if (protoProps) list_defineProperties(Constructor.prototype, protoProps); if (staticProps) list_defineProperties(Constructor, staticProps); return Constructor; }

function list_possibleConstructorReturn(self, call) { if (call && (list_typeof(call) === "object" || typeof call === "function")) { return call; } return list_assertThisInitialized(self); }

function list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function list_getPrototypeOf(o) { list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return list_getPrototypeOf(o); }

function list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) list_setPrototypeOf(subClass, superClass); }

function list_setPrototypeOf(o, p) { list_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return list_setPrototypeOf(o, p); }

var list_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var list_List =
/*#__PURE__*/
function (_React$Component) {
  list_inherits(List, _React$Component);

  function List(props) {
    var _this;

    list_classCallCheck(this, List);

    _this = list_possibleConstructorReturn(this, list_getPrototypeOf(List).call(this, props));
    _this.defaultPaginationProps = {
      current: 1,
      total: 0
    };
    _this.keys = {};
    _this.onPaginationChange = _this.triggerPaginationEvent('onChange');
    _this.onPaginationShowSizeChange = _this.triggerPaginationEvent('onShowSizeChange');

    _this.renderItem = function (item, index) {
      var _this$props = _this.props,
          renderItem = _this$props.renderItem,
          rowKey = _this$props.rowKey;
      if (!renderItem) return null;
      var key;

      if (typeof rowKey === 'function') {
        key = rowKey(item);
      } else if (typeof rowKey === 'string') {
        key = item[rowKey];
      } else {
        key = item.key;
      }

      if (!key) {
        key = "list-item-".concat(index);
      }

      _this.keys[index] = key;
      return renderItem(item, index);
    };

    _this.renderEmpty = function (prefixCls, renderEmpty) {
      var locale = _this.props.locale;
      return react["createElement"]("div", {
        className: "".concat(prefixCls, "-empty-text")
      }, locale && locale.emptyText || renderEmpty('List'));
    };

    _this.renderList = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;
      var _this$state = _this.state,
          paginationCurrent = _this$state.paginationCurrent,
          paginationSize = _this$state.paginationSize;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          bordered = _a.bordered,
          split = _a.split,
          className = _a.className,
          children = _a.children,
          itemLayout = _a.itemLayout,
          loadMore = _a.loadMore,
          pagination = _a.pagination,
          grid = _a.grid,
          _a$dataSource = _a.dataSource,
          dataSource = _a$dataSource === void 0 ? [] : _a$dataSource,
          size = _a.size,
          rowKey = _a.rowKey,
          renderItem = _a.renderItem,
          header = _a.header,
          footer = _a.footer,
          loading = _a.loading,
          locale = _a.locale,
          rest = list_rest(_a, ["prefixCls", "bordered", "split", "className", "children", "itemLayout", "loadMore", "pagination", "grid", "dataSource", "size", "rowKey", "renderItem", "header", "footer", "loading", "locale"]);

      var prefixCls = getPrefixCls('list', customizePrefixCls);
      var loadingProp = loading;

      if (typeof loadingProp === 'boolean') {
        loadingProp = {
          spinning: loadingProp
        };
      }

      var isLoading = loadingProp && loadingProp.spinning; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';

        default:
          break;
      }

      var classString = classnames_default()(prefixCls, className, (_classNames = {}, list_defineProperty(_classNames, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), list_defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), list_defineProperty(_classNames, "".concat(prefixCls, "-split"), split), list_defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), list_defineProperty(_classNames, "".concat(prefixCls, "-loading"), isLoading), list_defineProperty(_classNames, "".concat(prefixCls, "-grid"), grid), list_defineProperty(_classNames, "".concat(prefixCls, "-something-after-last-item"), _this.isSomethingAfterLastItem()), _classNames));

      var paginationProps = list_extends({}, _this.defaultPaginationProps, {
        total: dataSource.length,
        current: paginationCurrent,
        pageSize: paginationSize
      }, pagination || {});

      var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);

      if (paginationProps.current > largestPage) {
        paginationProps.current = largestPage;
      }

      var paginationContent = pagination ? react["createElement"]("div", {
        className: "".concat(prefixCls, "-pagination")
      }, react["createElement"](es_pagination["a" /* default */], list_extends({}, paginationProps, {
        onChange: _this.onPaginationChange,
        onShowSizeChange: _this.onPaginationShowSizeChange
      }))) : null;

      var splitDataSource = _toConsumableArray(dataSource);

      if (pagination) {
        if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
          splitDataSource = _toConsumableArray(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
        }
      }

      var childrenContent;
      childrenContent = isLoading && react["createElement"]("div", {
        style: {
          minHeight: 53
        }
      });

      if (splitDataSource.length > 0) {
        var items = splitDataSource.map(function (item, index) {
          return _this.renderItem(item, index);
        });
        var childrenList = [];
        react["Children"].forEach(items, function (child, index) {
          childrenList.push(react["cloneElement"](child, {
            key: _this.keys[index]
          }));
        });
        childrenContent = grid ? react["createElement"](row["a" /* default */], {
          gutter: grid.gutter
        }, childrenList) : react["createElement"]("ul", {
          className: "".concat(prefixCls, "-items")
        }, childrenList);
      } else if (!children && !isLoading) {
        childrenContent = _this.renderEmpty(prefixCls, renderEmpty);
      }

      var paginationPosition = paginationProps.position || 'bottom';
      return react["createElement"]("div", list_extends({
        className: classString
      }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && react["createElement"]("div", {
        className: "".concat(prefixCls, "-header")
      }, header), react["createElement"](spin["a" /* default */], loadingProp, childrenContent, children), footer && react["createElement"]("div", {
        className: "".concat(prefixCls, "-footer")
      }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent);
    };

    var pagination = props.pagination;
    var paginationObj = pagination && list_typeof(pagination) === 'object' ? pagination : {};
    _this.state = {
      paginationCurrent: paginationObj.defaultCurrent || 1,
      paginationSize: paginationObj.defaultPageSize || 10
    };
    return _this;
  }

  list_createClass(List, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        grid: this.props.grid,
        itemLayout: this.props.itemLayout
      };
    }
  }, {
    key: "triggerPaginationEvent",
    value: function triggerPaginationEvent(eventName) {
      var _this2 = this;

      return function (page, pageSize) {
        var pagination = _this2.props.pagination;

        _this2.setState({
          paginationCurrent: page,
          paginationSize: pageSize
        });

        if (pagination && pagination[eventName]) {
          pagination[eventName](page, pageSize);
        }
      };
    }
  }, {
    key: "isSomethingAfterLastItem",
    value: function isSomethingAfterLastItem() {
      var _this$props2 = this.props,
          loadMore = _this$props2.loadMore,
          pagination = _this$props2.pagination,
          footer = _this$props2.footer;
      return !!(loadMore || pagination || footer);
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderList);
    }
  }]);

  return List;
}(react["Component"]);


list_List.Item = Item_Item;
list_List.childContextTypes = {
  grid: prop_types["any"],
  itemLayout: prop_types["string"]
};
list_List.defaultProps = {
  dataSource: [],
  bordered: false,
  split: true,
  loading: false,
  pagination: false
};

/***/ }),

/***/ "W9HT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BGR+");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sEfC");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wEI+");
/* harmony import */ var _util_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CWQg");
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








var SpinSizes = Object(_util_type__WEBPACK_IMPORTED_MODULE_6__[/* tuple */ "a"])('small', 'default', 'large'); // Render indicator

var defaultIndicator = null;

function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot");

  if (react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](indicator)) {
    return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](indicator, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(indicator.props.className, dotClassName)
    });
  }

  if (react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](defaultIndicator)) {
    return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](defaultIndicator, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(defaultIndicator.props.className, dotClassName)
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Spin, _React$Component);

  function Spin(props) {
    var _this;

    _classCallCheck(this, Spin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spin).call(this, props));

    _this.debouncifyUpdateSpinning = function (props) {
      var _ref = props || _this.props,
          delay = _ref.delay;

      if (delay) {
        _this.cancelExistingSpin();

        _this.updateSpinning = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(_this.originalUpdateSpinning, delay);
      }
    };

    _this.updateSpinning = function () {
      var spinning = _this.props.spinning;
      var currentSpinning = _this.state.spinning;

      if (currentSpinning !== spinning) {
        _this.setState({
          spinning: spinning
        });
      }
    };

    _this.renderSpin = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          tip = _a.tip,
          wrapperClassName = _a.wrapperClassName,
          style = _a.style,
          restProps = __rest(_a, ["prefixCls", "className", "size", "tip", "wrapperClassName", "style"]);

      var spinning = _this.state.spinning;
      var prefixCls = getPrefixCls('spin', customizePrefixCls);
      var spinClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-spinning"), spinning), _defineProperty(_classNames, "".concat(prefixCls, "-show-text"), !!tip), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(restProps, ['spinning', 'delay', 'indicator']);
      var spinElement = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, divProps, {
        style: style,
        className: spinClassName
      }), renderIndicator(prefixCls, _this.props), tip ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "".concat(prefixCls, "-text")
      }, tip) : null);

      if (_this.isNestedPattern()) {
        var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-container"), _defineProperty({}, "".concat(prefixCls, "-blur"), spinning));
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, divProps, {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-nested-loading"), wrapperClassName)
        }), spinning && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          key: "loading"
        }, spinElement), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: containerClassName,
          key: "container"
        }, _this.props.children));
      }

      return spinElement;
    };

    var spinning = props.spinning,
        delay = props.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    _this.state = {
      spinning: spinning && !shouldBeDelayed
    };
    _this.originalUpdateSpinning = _this.updateSpinning;

    _this.debouncifyUpdateSpinning(props);

    return _this;
  }

  _createClass(Spin, [{
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelExistingSpin();
    }
  }, {
    key: "cancelExistingSpin",
    value: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSpinning();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_config_provider__WEBPACK_IMPORTED_MODULE_5__[/* ConfigConsumer */ "a"], null, this.renderSpin);
    }
  }], [{
    key: "setDefaultIndicator",
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);

  return Spin;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Spin.defaultProps = {
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
Spin.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  spinning: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"](SpinSizes),
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  indicator: prop_types__WEBPACK_IMPORTED_MODULE_1__["element"]
};
/* harmony default export */ __webpack_exports__["a"] = (Spin);

/***/ }),

/***/ "XBQK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 4 modules
var es = __webpack_require__("uciX");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};

/* harmony default export */ var es_placements = (placements);
// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("VCL8");

// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/Dropdown.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Dropdown_Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    Dropdown_initialiseProps.call(_this);

    if ('visible' in props) {
      _this.state = {
        visible: props.visible
      };
    } else {
      _this.state = {
        visible: props.defaultVisible
      };
    }
    return _this;
  }

  Dropdown.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible
      };
    }
    return null;
  };

  Dropdown.prototype.getOverlayElement = function getOverlayElement() {
    var overlay = this.props.overlay;

    var overlayElement = void 0;
    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  };

  Dropdown.prototype.getMenuElementOrLambda = function getMenuElementOrLambda() {
    var overlay = this.props.overlay;

    if (typeof overlay === 'function') {
      return this.getMenuElement;
    }
    return this.getMenuElement();
  };

  Dropdown.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Dropdown.prototype.getOpenClassName = function getOpenClassName() {
    var _props = this.props,
        openClassName = _props.openClassName,
        prefixCls = _props.prefixCls;

    if (openClassName !== undefined) {
      return openClassName;
    }
    return prefixCls + '-open';
  };

  Dropdown.prototype.renderChildren = function renderChildren() {
    var children = this.props.children;
    var visible = this.state.visible;

    var childrenProps = children.props ? children.props : {};
    var childClassName = classnames_default()(childrenProps.className, this.getOpenClassName());
    return visible && children ? Object(react["cloneElement"])(children, { className: childClassName }) : children;
  };

  Dropdown.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        transitionName = _props2.transitionName,
        animation = _props2.animation,
        align = _props2.align,
        placement = _props2.placement,
        getPopupContainer = _props2.getPopupContainer,
        showAction = _props2.showAction,
        hideAction = _props2.hideAction,
        overlayClassName = _props2.overlayClassName,
        overlayStyle = _props2.overlayStyle,
        trigger = _props2.trigger,
        otherProps = _objectWithoutProperties(_props2, ['prefixCls', 'transitionName', 'animation', 'align', 'placement', 'getPopupContainer', 'showAction', 'hideAction', 'overlayClassName', 'overlayStyle', 'trigger']);

    var triggerHideAction = hideAction;
    if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
      triggerHideAction = ['click'];
    }

    return react_default.a.createElement(
      es["a" /* default */],
      _extends({}, otherProps, {
        prefixCls: prefixCls,
        ref: this.saveTrigger,
        popupClassName: overlayClassName,
        popupStyle: overlayStyle,
        builtinPlacements: es_placements,
        action: trigger,
        showAction: showAction,
        hideAction: triggerHideAction || [],
        popupPlacement: placement,
        popupAlign: align,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupVisible: this.state.visible,
        afterPopupVisibleChange: this.afterVisibleChange,
        popup: this.getMenuElementOrLambda(),
        onPopupVisibleChange: this.onVisibleChange,
        getPopupContainer: getPopupContainer
      }),
      this.renderChildren()
    );
  };

  return Dropdown;
}(react["Component"]);

Dropdown_Dropdown.propTypes = {
  minOverlayWidthMatchTrigger: prop_types_default.a.bool,
  onVisibleChange: prop_types_default.a.func,
  onOverlayClick: prop_types_default.a.func,
  prefixCls: prop_types_default.a.string,
  children: prop_types_default.a.any,
  transitionName: prop_types_default.a.string,
  overlayClassName: prop_types_default.a.string,
  openClassName: prop_types_default.a.string,
  animation: prop_types_default.a.any,
  align: prop_types_default.a.object,
  overlayStyle: prop_types_default.a.object,
  placement: prop_types_default.a.string,
  overlay: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  trigger: prop_types_default.a.array,
  alignPoint: prop_types_default.a.bool,
  showAction: prop_types_default.a.array,
  hideAction: prop_types_default.a.array,
  getPopupContainer: prop_types_default.a.func,
  visible: prop_types_default.a.bool,
  defaultVisible: prop_types_default.a.bool
};
Dropdown_Dropdown.defaultProps = {
  prefixCls: 'rc-dropdown',
  trigger: ['hover'],
  showAction: [],
  overlayClassName: '',
  overlayStyle: {},
  defaultVisible: false,
  onVisibleChange: function onVisibleChange() {},

  placement: 'bottomLeft'
};

var Dropdown_initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onClick = function (e) {
    var props = _this2.props;
    var overlayProps = _this2.getOverlayElement().props;
    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
    if (!('visible' in props)) {
      _this2.setState({
        visible: false
      });
    }
    if (props.onOverlayClick) {
      props.onOverlayClick(e);
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  this.onVisibleChange = function (visible) {
    var props = _this2.props;
    if (!('visible' in props)) {
      _this2.setState({
        visible: visible
      });
    }
    props.onVisibleChange(visible);
  };

  this.getMinOverlayWidthMatchTrigger = function () {
    var _props3 = _this2.props,
        minOverlayWidthMatchTrigger = _props3.minOverlayWidthMatchTrigger,
        alignPoint = _props3.alignPoint;

    if ('minOverlayWidthMatchTrigger' in _this2.props) {
      return minOverlayWidthMatchTrigger;
    }

    return !alignPoint;
  };

  this.getMenuElement = function () {
    var prefixCls = _this2.props.prefixCls;

    var overlayElement = _this2.getOverlayElement();
    var extraOverlayProps = {
      prefixCls: prefixCls + '-menu',
      onClick: _this2.onClick
    };
    if (typeof overlayElement.type === 'string') {
      delete extraOverlayProps.prefixCls;
    }
    return react_default.a.cloneElement(overlayElement, extraOverlayProps);
  };

  this.afterVisibleChange = function (visible) {
    if (visible && _this2.getMinOverlayWidthMatchTrigger()) {
      var overlayNode = _this2.getPopupDomNode();
      var rootNode = react_dom_default.a.findDOMNode(_this2);
      if (rootNode && overlayNode && rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style.minWidth = rootNode.offsetWidth + 'px';
        if (_this2.trigger && _this2.trigger._component && _this2.trigger._component.alignInstance) {
          _this2.trigger._component.alignInstance.forceAlign();
        }
      }
    }
  };

  this.saveTrigger = function (node) {
    _this2.trigger = node;
  };
};

Object(react_lifecycles_compat_es["polyfill"])(Dropdown_Dropdown);

/* harmony default export */ var es_Dropdown = (Dropdown_Dropdown);
// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/index.js

/* harmony default export */ var rc_dropdown_es = (es_Dropdown);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/warning.js
var warning = __webpack_require__("6CfX");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__("CWQg");

// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropdown_Dropdown; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function dropdown_extends() { dropdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dropdown_extends.apply(this, arguments); }

function dropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function dropdown_possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function dropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Placements = Object(type["a" /* tuple */])('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight');

var dropdown_Dropdown =
/*#__PURE__*/
function (_React$Component) {
  dropdown_inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _this;

    dropdown_classCallCheck(this, Dropdown);

    _this = dropdown_possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));

    _this.renderOverlay = function (prefixCls) {
      // rc-dropdown already can process the function of overlay, but we have check logic here.
      // So we need render the element to check and pass back to rc-dropdown.
      var overlay = _this.props.overlay;
      var overlayNode;

      if (typeof overlay === 'function') {
        overlayNode = overlay();
      } else {
        overlayNode = overlay;
      }

      overlayNode = react["Children"].only(overlayNode);
      var overlayProps = overlayNode.props; // Warning if use other mode

      Object(warning["a" /* default */])(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu.")); // menu cannot be selectable in dropdown defaultly
      // menu should be focusable in dropdown defaultly

      var _overlayProps$selecta = overlayProps.selectable,
          selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
          _overlayProps$focusab = overlayProps.focusable,
          focusable = _overlayProps$focusab === void 0 ? true : _overlayProps$focusab;
      var expandIcon = react["createElement"]("span", {
        className: "".concat(prefixCls, "-menu-submenu-arrow")
      }, react["createElement"](icon["a" /* default */], {
        type: "right",
        className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
      }));
      var fixedModeOverlay = typeof overlayNode.type === 'string' ? overlay : react["cloneElement"](overlayNode, {
        mode: 'vertical',
        selectable: selectable,
        focusable: focusable,
        expandIcon: expandIcon
      });
      return fixedModeOverlay;
    };

    _this.renderDropDown = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          children = _this$props.children,
          trigger = _this$props.trigger,
          disabled = _this$props.disabled,
          getPopupContainer = _this$props.getPopupContainer;
      var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
      var child = react["Children"].only(children);
      var dropdownTrigger = react["cloneElement"](child, {
        className: classnames_default()(child.props.className, "".concat(prefixCls, "-trigger")),
        disabled: disabled
      });
      var triggerActions = disabled ? [] : trigger;
      var alignPoint;

      if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
        alignPoint = true;
      }

      return react["createElement"](rc_dropdown_es, dropdown_extends({
        alignPoint: alignPoint
      }, _this.props, {
        prefixCls: prefixCls,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        transitionName: _this.getTransitionName(),
        trigger: triggerActions,
        overlay: function overlay() {
          return _this.renderOverlay(prefixCls);
        }
      }), dropdownTrigger);
    };

    return _this;
  }

  _createClass(Dropdown, [{
    key: "getTransitionName",
    value: function getTransitionName() {
      var _this$props2 = this.props,
          _this$props2$placemen = _this$props2.placement,
          placement = _this$props2$placemen === void 0 ? '' : _this$props2$placemen,
          transitionName = _this$props2.transitionName;

      if (transitionName !== undefined) {
        return transitionName;
      }

      if (placement.indexOf('top') >= 0) {
        return 'slide-down';
      }

      return 'slide-up';
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderDropDown);
    }
  }]);

  return Dropdown;
}(react["Component"]);


dropdown_Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1,
  placement: 'bottomLeft'
};

/***/ }),

/***/ "bE4q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/dropdown.js + 3 modules
var dropdown = __webpack_require__("XBQK");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbItem.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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







var BreadcrumbItem_BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    var _this;

    _classCallCheck(this, BreadcrumbItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BreadcrumbItem).apply(this, arguments));

    _this.renderBreadcrumbItem = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          separator = _a.separator,
          children = _a.children,
          overlay = _a.overlay,
          restProps = __rest(_a, ["prefixCls", "separator", "children", "overlay"]);

      var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
      var link;

      if ('href' in _this.props) {
        link = react["createElement"]("a", _extends({
          className: "".concat(prefixCls, "-link")
        }, restProps), children);
      } else {
        link = react["createElement"]("span", _extends({
          className: "".concat(prefixCls, "-link")
        }, restProps), children);
      } // wrap to dropDown


      link = _this.renderBreadcrumbNode(link, prefixCls);

      if (children) {
        return react["createElement"]("span", null, link, react["createElement"]("span", {
          className: "".concat(prefixCls, "-separator")
        }, separator));
      }

      return null;
    };
    /**
     * if overlay is have
     * Wrap a DropDown
     */


    _this.renderBreadcrumbNode = function (breadcrumbItem, prefixCls) {
      var overlay = _this.props.overlay;

      if (overlay) {
        return react["createElement"](dropdown["a" /* default */], {
          overlay: overlay,
          placement: "bottomCenter"
        }, react["createElement"]("span", {
          className: "".concat(prefixCls, "-overlay-link")
        }, breadcrumbItem, react["createElement"](icon["a" /* default */], {
          type: "down"
        })));
      }

      return breadcrumbItem;
    };

    return _this;
  }

  _createClass(BreadcrumbItem, [{
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderBreadcrumbItem);
    }
  }]);

  return BreadcrumbItem;
}(react["Component"]);


BreadcrumbItem_BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem_BreadcrumbItem.defaultProps = {
  separator: '/'
};
BreadcrumbItem_BreadcrumbItem.propTypes = {
  prefixCls: prop_types["string"],
  separator: prop_types["oneOfType"]([prop_types["string"], prop_types["element"]]),
  href: prop_types["string"]
};
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var menu = __webpack_require__("BvKs");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/warning.js
var warning = __webpack_require__("6CfX");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/Breadcrumb.js
function Breadcrumb_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Breadcrumb_typeof = function _typeof(obj) { return typeof obj; }; } else { Breadcrumb_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Breadcrumb_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Breadcrumb_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Breadcrumb_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Breadcrumb_createClass(Constructor, protoProps, staticProps) { if (protoProps) Breadcrumb_defineProperties(Constructor.prototype, protoProps); if (staticProps) Breadcrumb_defineProperties(Constructor, staticProps); return Constructor; }

function Breadcrumb_possibleConstructorReturn(self, call) { if (call && (Breadcrumb_typeof(call) === "object" || typeof call === "function")) { return call; } return Breadcrumb_assertThisInitialized(self); }

function Breadcrumb_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Breadcrumb_getPrototypeOf(o) { Breadcrumb_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Breadcrumb_getPrototypeOf(o); }

function Breadcrumb_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Breadcrumb_setPrototypeOf(subClass, superClass); }

function Breadcrumb_setPrototypeOf(o, p) { Breadcrumb_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Breadcrumb_setPrototypeOf(o, p); }










function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }

  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? react["createElement"]("span", null, name) : react["createElement"]("a", {
    href: "#/".concat(paths.join('/'))
  }, name);
}

var Breadcrumb_Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  Breadcrumb_inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    var _this;

    Breadcrumb_classCallCheck(this, Breadcrumb);

    _this = Breadcrumb_possibleConstructorReturn(this, Breadcrumb_getPrototypeOf(Breadcrumb).apply(this, arguments));

    _this.getPath = function (path, params) {
      path = (path || '').replace(/^\//, '');
      Object.keys(params).forEach(function (key) {
        path = path.replace(":".concat(key), params[key]);
      });
      return path;
    };

    _this.addChildPath = function (paths) {
      var childPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var params = arguments.length > 2 ? arguments[2] : undefined;

      var originalPaths = _toConsumableArray(paths);

      var path = _this.getPath(childPath, params);

      if (path) {
        originalPaths.push(path);
      }

      return originalPaths;
    };

    _this.genForRoutes = function (_ref) {
      var _ref$routes = _ref.routes,
          routes = _ref$routes === void 0 ? [] : _ref$routes,
          _ref$params = _ref.params,
          params = _ref$params === void 0 ? {} : _ref$params,
          separator = _ref.separator,
          _ref$itemRender = _ref.itemRender,
          itemRender = _ref$itemRender === void 0 ? defaultItemRender : _ref$itemRender;
      var paths = [];
      return routes.map(function (route) {
        var path = _this.getPath(route.path, params);

        if (path) {
          paths.push(path);
        } // generated overlay by route.children


        var overlay = null;

        if (route.children && route.children.length) {
          overlay = react["createElement"](menu["b" /* default */], null, route.children.map(function (child) {
            return react["createElement"](menu["b" /* default */].Item, {
              key: child.breadcrumbName || child.path
            }, itemRender(child, params, routes, _this.addChildPath(paths, child.path, params)));
          }));
        }

        return react["createElement"](BreadcrumbItem_BreadcrumbItem, {
          overlay: overlay,
          separator: separator,
          key: route.breadcrumbName || path
        }, itemRender(route, params, routes, paths));
      });
    };

    _this.renderBreadcrumb = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;
      var crumbs;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          separator = _this$props.separator,
          style = _this$props.style,
          className = _this$props.className,
          routes = _this$props.routes,
          children = _this$props.children;
      var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);

      if (routes && routes.length > 0) {
        // generated by route
        crumbs = _this.genForRoutes(_this.props);
      } else if (children) {
        crumbs = react["Children"].map(children, function (element, index) {
          if (!element) {
            return element;
          }

          Object(warning["a" /* default */])(element.type && element.type.__ANT_BREADCRUMB_ITEM, 'Breadcrumb', "Only accepts Breadcrumb.Item as it's children");
          return Object(react["cloneElement"])(element, {
            separator: separator,
            key: index
          });
        });
      }

      return react["createElement"]("div", {
        className: classnames_default()(className, prefixCls),
        style: style
      }, crumbs);
    };

    return _this;
  }

  Breadcrumb_createClass(Breadcrumb, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      Object(warning["a" /* default */])(!('linkRender' in props || 'nameRender' in props), 'Breadcrumb', '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: https://u.ant.design/item-render.');
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](config_provider["a" /* ConfigConsumer */], null, this.renderBreadcrumb);
    }
  }]);

  return Breadcrumb;
}(react["Component"]);


Breadcrumb_Breadcrumb.defaultProps = {
  separator: '/'
};
Breadcrumb_Breadcrumb.propTypes = {
  prefixCls: prop_types["string"],
  separator: prop_types["node"],
  routes: prop_types["array"],
  params: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/index.js


Breadcrumb_Breadcrumb.Item = BreadcrumbItem_BreadcrumbItem;
/* harmony default export */ var breadcrumb = __webpack_exports__["a"] = (Breadcrumb_Breadcrumb);

/***/ }),

/***/ "bf48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/antd/es/divider/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var divider_Divider = function Divider(props) {
  return react["createElement"](config_provider["a" /* ConfigConsumer */], null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        _props$type = props.type,
        type = _props$type === void 0 ? 'horizontal' : _props$type,
        _props$orientation = props.orientation,
        orientation = _props$orientation === void 0 ? 'center' : _props$orientation,
        className = props.className,
        children = props.children,
        dashed = props.dashed,
        restProps = __rest(props, ["prefixCls", "type", "orientation", "className", "children", "dashed"]);

    var prefixCls = getPrefixCls('divider', customizePrefixCls);
    var orientationPrefix = orientation.length > 0 ? '-' + orientation : orientation;
    var classString = classnames_default()(className, prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-with-text").concat(orientationPrefix), children), _defineProperty(_classNames, "".concat(prefixCls, "-dashed"), !!dashed), _classNames));
    return react["createElement"]("div", _extends({
      className: classString
    }, restProps), children && react["createElement"]("span", {
      className: "".concat(prefixCls, "-inner-text")
    }, children));
  });
};

/* harmony default export */ var divider = (divider_Divider);
// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/index.js + 2 modules
var es_breadcrumb = __webpack_require__("bE4q");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/transButton.js
var transButton = __webpack_require__("gDlH");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js
var LocaleReceiver = __webpack_require__("YMnH");

// CONCATENATED MODULE: ./node_modules/antd/es/page-header/index.js
function page_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var page_header_renderBack = function renderBack(prefixCls, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }

  return react["createElement"](LocaleReceiver["a" /* default */], {
    componentName: "PageHeader"
  }, function (_ref) {
    var back = _ref.back;
    return react["createElement"]("div", {
      className: "".concat(prefixCls, "-back")
    }, react["createElement"](transButton["a" /* default */], {
      onClick: function onClick(e) {
        if (onBack) {
          onBack(e);
        }
      },
      className: "".concat(prefixCls, "-back-button"),
      "aria-label": back
    }, backIcon), react["createElement"](divider, {
      type: "vertical"
    }));
  });
};

var page_header_renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
  return react["createElement"](es_breadcrumb["a" /* default */], breadcrumb);
};

var renderHeader = function renderHeader(prefixCls, props) {
  var breadcrumb = props.breadcrumb,
      backIcon = props.backIcon,
      onBack = props.onBack;

  if (breadcrumb && breadcrumb.routes && breadcrumb.routes.length >= 2) {
    return page_header_renderBreadcrumb(breadcrumb);
  }

  return page_header_renderBack(prefixCls, backIcon, onBack);
};

var page_header_renderTitle = function renderTitle(prefixCls, props) {
  var title = props.title,
      subTitle = props.subTitle,
      tags = props.tags,
      extra = props.extra;
  var titlePrefixCls = "".concat(prefixCls, "-title-view");

  if (title || subTitle || tags || extra) {
    return react["createElement"]("div", {
      className: titlePrefixCls
    }, title && react["createElement"]("span", {
      className: "".concat(titlePrefixCls, "-title")
    }, title), subTitle && react["createElement"]("span", {
      className: "".concat(titlePrefixCls, "-sub-title")
    }, subTitle), tags && react["createElement"]("span", {
      className: "".concat(titlePrefixCls, "-tags")
    }, tags), extra && react["createElement"]("span", {
      className: "".concat(titlePrefixCls, "-extra")
    }, extra));
  }

  return null;
};

var page_header_renderFooter = function renderFooter(prefixCls, footer) {
  if (footer) {
    return react["createElement"]("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  return null;
};

var page_header_PageHeader = function PageHeader(props) {
  return react["createElement"](config_provider["a" /* ConfigConsumer */], null, function (_ref2) {
    var getPrefixCls = _ref2.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        style = props.style,
        footer = props.footer,
        children = props.children,
        customizeClassName = props.className;
    var prefixCls = getPrefixCls('page-header', customizePrefixCls);
    var className = classnames_default()(prefixCls, page_header_defineProperty({}, "".concat(prefixCls, "-has-footer"), footer), customizeClassName);
    return react["createElement"]("div", {
      className: className,
      style: style
    }, renderHeader(prefixCls, props), page_header_renderTitle(prefixCls, props), children && react["createElement"]("div", {
      className: "".concat(prefixCls, "-content-view")
    }, children), page_header_renderFooter(prefixCls, footer));
  });
};

page_header_PageHeader.defaultProps = {
  backIcon: react["createElement"](icon["a" /* default */], {
    type: "arrow-left"
  })
};
/* harmony default export */ var page_header = __webpack_exports__["a"] = (page_header_PageHeader);

/***/ }),

/***/ "u9iw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("doui");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BMrR");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VXEj");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/ezw");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bx4M");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Tckk");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wFql");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bf48");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2/Rp");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ECub");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("m/Pd");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("SMlj");
/* harmony import */ var _components_UserLayout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("y6HG");











var getRandomInt = function getRandomInt() {
  var colorArr = ['#FF6384', '#36A2EB', '#FFCE56', '#2ecc71', '#686de0'];
  var min = 0,
      max = colorArr.length - 1;
  min = Math.ceil(min);
  max = Math.floor(max);
  var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return colorArr[randomInt];
};

function DashboardPage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(props.model),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      model = _useState2[0],
      setModel = _useState2[1];

  var ComponentModelMe = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    type: "flex",
    gutter: 16
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    pagination: true,
    grid: {
      gutter: 16,
      xs: 1,
      sm: 2,
      lg: 3
    },
    dataSource: model,
    renderItem: function renderItem(item, key) {
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Item, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        avatar: true,
        title: false,
        loading: false,
        active: true
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        hoverable: true,
        style: {
          marginBottom: 16,
          height: 163.090
        },
        onClick: function onClick() {
          return _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].pushRoute('MeModelInfo', {
            id: item.id
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Item.Meta, {
        avatar: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
          size: 50,
          src: item.avatar.path
        }),
        title: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Title, {
          level: 4
        }, item.name),
        description: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Paragraph, {
          ellipsis: {
            rows: 3
          }
        }, item.desc)
      }))));
    }
  }));
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_UserLayout__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], props, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("title", null, "Dashboard - Sistem Anotasi Named Entity")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    title: "Your Model",
    extra: [react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      key: "1",
      className: "btn-success",
      onClick: function onClick() {
        return _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].pushRoute('/create');
      }
    }, "Create Model")]
  }, model.length !== 0 ? ComponentModelMe : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    image: antd__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].PRESENTED_IMAGE_SIMPLE
  }))));
}

DashboardPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var apiUrl, token, getModel, _ref3, _ref4, model;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiUrl = _ref.apiUrl, token = _ref.token;

            getModel = function getModel() {
              return axios__WEBPACK_IMPORTED_MODULE_12___default()({
                method: "GET",
                url: "".concat(apiUrl, "/model/me"),
                headers: {
                  authorization: token
                }
              });
            };

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_12___default.a.all([getModel()]);

          case 4:
            _ref3 = _context.sent;
            _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 1);
            model = _ref4[0];
            return _context.abrupt("return", {
              model: model.data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_16__[/* withAuthSync */ "c"])(DashboardPage));

/***/ })

},[["2wU4","5d41","9da1"]]]);