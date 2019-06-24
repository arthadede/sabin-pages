(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ce6e"],{

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/next-server/dist/lib/head.js
var head = __webpack_require__("m/Pd");
var head_default = /*#__PURE__*/__webpack_require__.n(head);

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__("BMrR");

// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__("kPKH");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__("Ol7k");

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__("SMlj");

// CONCATENATED MODULE: ./components/LandingLayout.js




var Header = layout["a" /* default */].Header,
    Content = layout["a" /* default */].Content,
    Footer = layout["a" /* default */].Footer;
/* harmony default export */ var LandingLayout = (function (props) {
  var HeaderComponent = react_default.a.createElement(Header, null, react_default.a.createElement("ul", {
    className: "menu-items"
  }, !props.token && react_default.a.createElement("li", {
    className: "item",
    onClick: function onClick() {
      return routes["Router"].pushRoute('/login');
    }
  }, react_default.a.createElement("a", {
    className: "item-btn"
  }, "Log in")), props.token && react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("li", {
    className: "item",
    onClick: function onClick() {
      return routes["Router"].pushRoute('/dashboard');
    }
  }, react_default.a.createElement("a", null, "Dashboard")), react_default.a.createElement("li", {
    className: "item",
    onClick: auth["b" /* logout */]
  }, react_default.a.createElement("a", {
    className: "item-btn"
  }, "Log out")))));
  return react_default.a.createElement("div", {
    className: "wrapper"
  }, react_default.a.createElement(layout["a" /* default */], null, HeaderComponent, react_default.a.createElement(Content, null, props.children), react_default.a.createElement(Footer, null, react_default.a.createElement("div", {
    className: "text-center"
  }, "Sistem Anotasi Named Entity \xA92019"))));
});
// CONCATENATED MODULE: ./pages/index.js






var pages_LandingPage = function LandingPage(props) {
  return react_default.a.createElement(LandingLayout, props, react_default.a.createElement(head_default.a, null, react_default.a.createElement("title", null, "Sistem Anotasi Named Entity")), react_default.a.createElement(row["a" /* default */], {
    type: "flex",
    className: "mb-3"
  }, react_default.a.createElement(col["a" /* default */], {
    xs: 24,
    md: 8
  }, react_default.a.createElement("div", {
    className: "mb-3"
  }, react_default.a.createElement("h3", null, "Create new value from your data"), react_default.a.createElement("p", {
    className: "h4 text-secondary"
  }, "Bring your own data and train it with this tools, once you try it you will never regret it.")), react_default.a.createElement("a", {
    onClick: function onClick() {
      return routes["Router"].pushRoute('/register');
    },
    className: "btn-link"
  }, "Let's get started")), react_default.a.createElement(col["a" /* default */], {
    xs: 24,
    md: 16
  }, react_default.a.createElement("div", {
    className: "img-landing"
  }, react_default.a.createElement("img", {
    src: "https://monkeylearn.com/static/img/img_video.png",
    alt: ""
  })))), react_default.a.createElement("div", {
    className: "px-4"
  }, react_default.a.createElement("h2", {
    className: "text-center"
  }, "Train Fitures"), react_default.a.createElement(row["a" /* default */], {
    type: "flex",
    justify: "center",
    gutter: 32
  }, react_default.a.createElement(col["a" /* default */], {
    xs: 24,
    md: 8
  }, react_default.a.createElement("div", {
    className: "card"
  }, react_default.a.createElement("div", {
    className: "d-flex flex-row align-items-center mb-5"
  }, react_default.a.createElement("img", {
    className: "icon block-inline",
    src: "/static/icon/classifier.png"
  }), react_default.a.createElement("h4", {
    className: "ml-4 mb-0 block-inline"
  }, "Classifier")), react_default.a.createElement("p", {
    className: "h5"
  }, "Each sentence or paragraph have value can define with existing label in model your model."))), react_default.a.createElement(col["a" /* default */], {
    xs: 24,
    md: 8
  }, react_default.a.createElement("div", {
    className: "card"
  }, react_default.a.createElement("div", {
    className: "d-flex flex-row align-items-center mb-5"
  }, react_default.a.createElement("img", {
    className: "icon block-inline",
    src: "/static/icon/extractor.png"
  }), react_default.a.createElement("h4", {
    className: "ml-4 mb-0 block-inline"
  }, "Extractor")), react_default.a.createElement("p", {
    className: "h5"
  }, "Each word on your sentence or source which have different value can define with that for distinguish the label."))))), react_default.a.createElement("div", {
    className: "px-4"
  }, react_default.a.createElement("h2", {
    className: "text-center"
  }, "Model Features"), react_default.a.createElement(row["a" /* default */], {
    gutter: 32
  }, react_default.a.createElement(col["a" /* default */], {
    xs: 24,
    md: 8
  }, react_default.a.createElement("div", {
    className: "card"
  }, react_default.a.createElement("div", {
    className: "d-flex flex-row align-items-center mb-5"
  }, react_default.a.createElement(icon["a" /* default */], {
    className: "icon",
    type: "setting",
    theme: "filled",
    style: {
      fontSize: '19px',
      color: '#2ba35e'
    }
  }), react_default.a.createElement("h4", {
    className: "ml-4 mb-0 block-inline"
  }, "Model Control")), react_default.a.createElement("p", {
    className: "h5"
  }, "Control who can see your model, if you want people see your model set it to public."))), react_default.a.createElement(col["a" /* default */], {
    xs: 24,
    md: 8
  }, react_default.a.createElement("div", {
    className: "card"
  }, react_default.a.createElement("div", {
    className: "d-flex flex-row align-items-center mb-5"
  }, react_default.a.createElement(icon["a" /* default */], {
    className: "icon",
    type: "area-chart",
    style: {
      fontSize: '19px',
      color: '#ff5b4a'
    }
  }), react_default.a.createElement("h4", {
    className: "ml-4 mb-0 block-inline"
  }, "Model Stats")), react_default.a.createElement("p", {
    className: "h5"
  }, "Each your model have a Statistics for help your to monitoring activities model, train, and contributing user."))), react_default.a.createElement(col["a" /* default */], {
    xs: 24,
    md: 8
  }, react_default.a.createElement("div", {
    className: "card"
  }, react_default.a.createElement("div", {
    className: "d-flex flex-row align-items-center mb-5"
  }, react_default.a.createElement(icon["a" /* default */], {
    className: "icon",
    type: "upload",
    style: {
      fontSize: '19px',
      color: '#009aff'
    }
  }), react_default.a.createElement("h4", {
    className: "ml-4 mb-0 block-inline"
  }, "File Upload")), react_default.a.createElement("p", {
    className: "h5"
  }, "Upload your source with file like ", react_default.a.createElement("code", null, "xls"), " or ", react_default.a.createElement("code", null, "xlsx"), ". It can help you for creating sources."))))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_LandingPage);

/***/ }),

/***/ "vlRD":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__("RNiq")
      if(false) {}
      return { page: page.default || page }
    }]);
  

/***/ })

},[["vlRD","5d41","9da1"]]]);