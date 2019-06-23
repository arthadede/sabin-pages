(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["af52"],{

/***/ "/h46":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("cHUd")('Map');


/***/ }),

/***/ "0KLy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

var _interopRequireDefault = __webpack_require__("KI45");

var _isArray = _interopRequireDefault(__webpack_require__("p0XB"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault(__webpack_require__("sLSF"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("MI3g"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("a7VT"));

var _inherits2 = _interopRequireDefault(__webpack_require__("Tit0"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _keys = _interopRequireDefault(__webpack_require__("pLtp"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__("q1tI"));

var loadable_context_1 = __webpack_require__("Q0KE");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    (0, _keys.default)(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = _promise.default.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return react_1.default.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _a;

  var opts = (0, _assign.default)({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  } // Server only


  if (typeof window === 'undefined') {
    ALL_INITIALIZERS.push(init);
  } // Client only


  if (!initialized && typeof window !== 'undefined' && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator2.default)(moduleIds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  }

  return _a =
  /*#__PURE__*/
  function (_react_1$default$Comp) {
    (0, _inherits2.default)(LoadableComponent, _react_1$default$Comp);

    function LoadableComponent(props) {
      var _this;

      (0, _classCallCheck2.default)(this, LoadableComponent);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoadableComponent).call(this, props));

      _this.retry = function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      };

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    (0, _createClass2.default)(LoadableComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this._mounted = true;

        this._loadModule();
      }
    }, {
      key: "_loadModule",
      value: function _loadModule() {
        var _this2 = this;

        if (this.context && (0, _isArray.default)(opts.modules)) {
          opts.modules.forEach(function (moduleName) {
            _this2.context(moduleName);
          });
        }

        if (!res.loading) {
          return;
        }

        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this.setState({
              pastDelay: true
            });
          } else {
            this._delay = setTimeout(function () {
              _this2.setState({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this2.setState({
              timedOut: true
            });
          }, opts.timeout);
        }

        var update = function update() {
          if (!_this2._mounted) {
            return;
          }

          _this2.setState({
            error: res.error,
            loaded: res.loaded,
            loading: res.loading
          });

          _this2._clearTimeouts();
        };

        res.promise.then(function () {
          update();
        }) // eslint-disable-next-line handle-callback-err
        .catch(function (err) {
          update();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._mounted = false;

        this._clearTimeouts();
      }
    }, {
      key: "_clearTimeouts",
      value: function _clearTimeouts() {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loading || this.state.error) {
          return react_1.default.createElement(opts.loading, {
            isLoading: this.state.loading,
            pastDelay: this.state.pastDelay,
            timedOut: this.state.timedOut,
            error: this.state.error,
            retry: this.retry
          });
        } else if (this.state.loaded) {
          return opts.render(this.state.loaded, this.props);
        } else {
          return null;
        }
      }
    }], [{
      key: "preload",
      value: function preload() {
        return init();
      }
    }]);
    return LoadableComponent;
  }(react_1.default.Component), _a.contextType = loadable_context_1.LoadableContext, _a;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return _promise.default.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new _promise.default(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function (ids) {
  return new _promise.default(function (resolve) {
    var res = function res() {
      initialized = true;
      return resolve();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

exports.default = Loadable;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("GbXU");
module.exports = __webpack_require__("BMP1");


/***/ }),

/***/ "8+Nu":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("8bdy");

var iterableToArrayLimit = __webpack_require__("fprZ");

var nonIterableRest = __webpack_require__("Bh1o");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "8bdy":
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__("p0XB");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "BMP1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __importStar(__webpack_require__("IKlv")),
    next = _1;

window.next = next;

_1.default().catch(function (err) {
  console.error("".concat(err.message, "\n").concat(err.stack));
});

/***/ }),

/***/ "Bh1o":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "DqTX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

var HeadManager =
/*#__PURE__*/
function () {
  function HeadManager() {
    var _this = this;

    (0, _classCallCheck2.default)(this, HeadManager);

    this.updateHead = function (head) {
      var promise = _this.updatePromise = _promise.default.resolve().then(function () {
        if (promise !== _this.updatePromise) return;
        _this.updatePromise = null;

        _this.doUpdateHead(head);
      });
    };

    this.updatePromise = null;
  }

  (0, _createClass2.default)(HeadManager, [{
    key: "doUpdateHead",
    value: function doUpdateHead(head) {
      var _this2 = this;

      var tags = {};
      head.forEach(function (h) {
        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      this.updateTitle(tags.title ? tags.title[0] : null);
      var types = ['meta', 'base', 'link', 'style', 'script'];
      types.forEach(function (type) {
        _this2.updateElements(type, tags[type] || []);
      });
    }
  }, {
    key: "updateTitle",
    value: function updateTitle(component) {
      var title = '';

      if (component) {
        var children = component.props.children;
        title = typeof children === 'string' ? children : children.join('');
      }

      if (title !== document.title) document.title = title;
    }
  }, {
    key: "updateElements",
    value: function updateElements(type, components) {
      var headEl = document.getElementsByTagName('head')[0];
      var oldTags = Array.prototype.slice.call(headEl.querySelectorAll(type + '.next-head'));
      var newTags = components.map(reactElementToDOM).filter(function (newTag) {
        for (var i = 0, len = oldTags.length; i < len; i++) {
          var oldTag = oldTags[i];

          if (oldTag.isEqualNode(newTag)) {
            oldTags.splice(i, 1);
            return false;
          }
        }

        return true;
      });
      oldTags.forEach(function (t) {
        return t.parentNode.removeChild(t);
      });
      newTags.forEach(function (t) {
        return headEl.appendChild(t);
      });
    }
  }]);
  return HeadManager;
}();

exports.default = HeadManager;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : children.join('');
  }

  return el;
}

/***/ }),

/***/ "GbXU":
/***/ (function(module, exports) {

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/service-worker.js', {scope: '/'})
      .then(function(registration) {
        console.log('SW registered: ', registration);
      })
      .catch(function(registrationError) {
        console.log('SW registration failed: ', registrationError);
      });
  });
}


/***/ }),

/***/ "HohS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var runtimeConfig;

exports.default = function () {
  return runtimeConfig;
};

function setConfig(configValue) {
  runtimeConfig = configValue;
}

exports.setConfig = setConfig;

/***/ }),

/***/ "IKlv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

var doRender = function doRender(_ref5) {
  var App = _ref5.App,
      Component = _ref5.Component,
      props = _ref5.props,
      err = _ref5.err;

  try {
    function _temp11() {
      Component = Component || lastAppProps.Component;
      props = props || lastAppProps.props;
      var appProps = (0, _assign.default)({
        Component: Component,
        err: err,
        router: exports.router
      }, props); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

      lastAppProps = appProps;
      exports.emitter.emit('before-reactdom-render', {
        Component: Component,
        ErrorComponent: exports.ErrorComponent,
        appProps: appProps
      }); // In development runtime errors are caught by react-error-overlay.

      if (false) {} else {
        // In production we catch runtime errors using componentDidCatch which will trigger renderError.
        renderReactElement(react_1.default.createElement(error_boundary_1.ErrorBoundary, {
          fn: function fn(error) {
            return renderError({
              App: App,
              err: error
            }).catch(function (err) {
              return console.error('Error rendering page: ', err);
            });
          }
        }, react_1.default.createElement(react_1.Suspense, {
          fallback: react_1.default.createElement("div", null, "Loading...")
        }, react_1.default.createElement(router_context_1.RouterContext.Provider, {
          value: router_1.makePublicRouterInstance(exports.router)
        }, react_1.default.createElement(data_manager_context_1.DataManagerContext.Provider, {
          value: exports.dataManager
        }, react_1.default.createElement(head_manager_context_1.HeadManagerContext.Provider, {
          value: headManager.updateHead
        }, react_1.default.createElement(App, (0, _assign.default)({}, appProps))))))), appContainer);
      }

      exports.emitter.emit('after-reactdom-render', {
        Component: Component,
        ErrorComponent: exports.ErrorComponent,
        appProps: appProps
      });
    }

    var _temp12 = function () {
      if (!props && Component && Component !== exports.ErrorComponent && lastAppProps.Component === exports.ErrorComponent) {
        var _exports$router = exports.router,
            pathname = _exports$router.pathname,
            _query = _exports$router.query,
            _asPath = _exports$router.asPath;
        return _promise.default.resolve(utils_1.loadGetInitialProps(App, {
          Component: Component,
          router: exports.router,
          ctx: {
            err: err,
            pathname: pathname,
            query: _query,
            asPath: _asPath
          }
        })).then(function (_utils_1$loadGetIniti) {
          props = _utils_1$loadGetIniti;
        });
      }
    }();

    // Usual getInitialProps fetching is handled in next/router
    // this is for when ErrorComponent gets replaced by Component by HMR
    return _promise.default.resolve(_temp12 && _temp12.then ? _temp12.then(_temp11) : _temp11(_temp12));
  } catch (e) {
    return _promise.default.reject(e);
  }
};

// This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.
var renderError = function renderError(props) {
  try {
    var _App = props.App,
        _err = props.err;

    if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


    console.error(_err);
    return _promise.default.resolve(pageLoader.loadPage('/_error')).then(function (_pageLoader$loadPage3) {
      function _temp8(initProps) {
        return _promise.default.resolve(doRender((0, _assign.default)({}, props, {
          err: _err,
          Component: exports.ErrorComponent,
          props: initProps
        }))).then(function () {});
      }

      exports.ErrorComponent = _pageLoader$loadPage3;
      var _props$props = props.props;
      // In production we do a normal render with the `ErrorComponent` as component.
      // If we've gotten here upon initial render, we can use the props from the server.
      // Otherwise, we need to call `getInitialProps` on `App` before mounting.
      return _props$props ? _temp8(props.props) : _promise.default.resolve(utils_1.loadGetInitialProps(_App, {
        Component: exports.ErrorComponent,
        router: exports.router,
        ctx: {
          err: _err,
          pathname: page,
          query: query,
          asPath: asPath
        }
      })).then(_temp8);
    });
  } catch (e) {
    return _promise.default.reject(e);
  }
};

var render = function render(props) {
  try {
    var _exit3 = false;

    function _temp6(_result2) {
      if (_exit3) return _result2;

      var _temp3 = _catch(function () {
        return _promise.default.resolve(doRender(props)).then(function () {});
      }, function (err) {
        return _promise.default.resolve(renderError((0, _assign.default)({}, props, {
          err: err
        }))).then(function () {});
      });

      if (_temp3 && _temp3.then) return _temp3.then(function () {});
    }

    var _temp7 = function () {
      if (props.err) {
        return _promise.default.resolve(renderError(props)).then(function () {
          _exit3 = true;
        });
      }
    }();

    return _promise.default.resolve(_temp7 && _temp7.then ? _temp7.then(_temp6) : _temp6(_temp7));
  } catch (e) {
    return _promise.default.reject(e);
  }
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("q1tI"));

var react_dom_1 = __importDefault(__webpack_require__("i8i4"));

var head_manager_1 = __importDefault(__webpack_require__("DqTX"));

var router_1 = __webpack_require__("nOHt");

var mitt_1 = __importDefault(__webpack_require__("kiME"));

var utils_1 = __webpack_require__("Bu4q");

var page_loader_1 = __importDefault(__webpack_require__("zmvN"));

var envConfig = __importStar(__webpack_require__("PBx+"));

var error_boundary_1 = __webpack_require__("XXkD");

var loadable_1 = __importDefault(__webpack_require__("0KLy"));

var head_manager_context_1 = __webpack_require__("IClC");

var data_manager_context_1 = __webpack_require__("qS9g");

var router_context_1 = __webpack_require__("9EOK");

var data_manager_1 = __webpack_require__("cuFY"); // Polyfill Promise globally
// This is needed because Webpack's dynamic loading(common chunks) code
// depends on Promise.
// So, we need to polyfill it.
// See: https://webpack.js.org/guides/code-splitting/#dynamic-imports


if (!window.Promise) {
  window.Promise = _promise.default;
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var props = data.props,
    err = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    dynamicBuildId = data.dynamicBuildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds;
var d = JSON.parse(window.__NEXT_DATA__.dataManager);
exports.dataManager = new data_manager_1.DataManager(d);
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig
});
var asPath = utils_1.getURL();
var pageLoader = new page_loader_1.default(buildId, prefix);

var register = function register(_ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  window.__NEXT_P.map(register);
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = new head_manager_1.default();
var appContainer = document.getElementById('__next');
var lastAppProps;
var webpackHMR;
var Component;
var App;
exports.emitter = mitt_1.default();

exports.default = function () {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      passedWebpackHMR = _ref3.webpackHMR;

  try {
    // This makes sure this specific line is removed in production
    if (false) {}

    return _promise.default.resolve(pageLoader.loadPage('/_app')).then(function (_pageLoader$loadPage) {
      var _exit = false;

      function _temp2(_result) {
        return _exit ? _result : _promise.default.resolve(loadable_1.default.preloadReady(dynamicIds || [])).then(function () {
          if (dynamicBuildId === true) {
            pageLoader.onDynamicBuildId();
          }

          exports.router = router_1.createRouter(page, query, asPath, {
            initialProps: props,
            pageLoader: pageLoader,
            App: App,
            Component: Component,
            err: initialErr
          });
          exports.router.subscribe(function (_ref4) {
            var App = _ref4.App,
                Component = _ref4.Component,
                props = _ref4.props,
                err = _ref4.err;
            render({
              App: App,
              Component: Component,
              props: props,
              err: err,
              emitter: exports.emitter
            });
          });
          render({
            App: App,
            Component: Component,
            props: props,
            err: initialErr,
            emitter: exports.emitter
          });
          return exports.emitter;
        });
      }

      App = _pageLoader$loadPage;
      var initialErr = err;

      var _temp = _catch(function () {
        return _promise.default.resolve(pageLoader.loadPage(page)).then(function (_pageLoader$loadPage2) {
          Component = _pageLoader$loadPage2;

          if (false) { var _require, isValidElementType; }
        });
      }, function (error) {
        // This catches errors like throwing in the top level of a module
        initialErr = error;
      });

      return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
    });
  } catch (e) {
    return _promise.default.reject(e);
  }
};

exports.render = render;
exports.renderError = renderError;
var isInitialRender = true;

function renderReactElement(reactEl, domEl) {
  // The check for `.hydrate` is there to support React alternatives like preact
  if (isInitialRender && typeof react_dom_1.default.hydrate === 'function') {
    react_dom_1.default.hydrate(reactEl, domEl);
    isInitialRender = false;
  } else {
    react_dom_1.default.render(reactEl, domEl);
  }
}

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UDep");

/***/ }),

/***/ "PBx+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HohS")


/***/ }),

/***/ "Q0KE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("q1tI")); // @ts-ignore for some reason the React types don't like this, but it's correct.


exports.LoadableContext = React.createContext(null);

/***/ }),

/***/ "UDep":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("wgeU");
__webpack_require__("FlQf");
__webpack_require__("bBy9");
__webpack_require__("g33z");
__webpack_require__("XLbu");
__webpack_require__("/h46");
__webpack_require__("dVTT");
module.exports = __webpack_require__("WEpk").Map;


/***/ }),

/***/ "XLbu":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("Y7ZC");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("8iia")('Map') });


/***/ }),

/***/ "XXkD":
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

var ErrorBoundary =
/*#__PURE__*/
function (_react_1$default$Comp) {
  (0, _inherits2.default)(ErrorBoundary, _react_1$default$Comp);

  function ErrorBoundary() {
    (0, _classCallCheck2.default)(this, ErrorBoundary);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorBoundary).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      this.props.fn(err, info);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return ErrorBoundary;
}(react_1.default.Component);

exports.ErrorBoundary = ErrorBoundary;

/***/ }),

/***/ "cuFY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault(__webpack_require__("sLSF"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var DataManager =
/*#__PURE__*/
function () {
  function DataManager(data) {
    (0, _classCallCheck2.default)(this, DataManager);
    this.data = new _map.default(data);
  }

  (0, _createClass2.default)(DataManager, [{
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.data.get(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data.set(key, value);
    }
  }, {
    key: "overwrite",
    value: function overwrite(data) {
      this.data = new _map.default(data);
    }
  }]);
  return DataManager;
}();

exports.DataManager = DataManager;

/***/ }),

/***/ "dVTT":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("aPfg")('Map');


/***/ }),

/***/ "fprZ":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("XXOK");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "g33z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("Wu5q");
var validate = __webpack_require__("n3ko");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("raTm")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "m/Gl":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.mjs.map


/***/ }),

/***/ "qS9g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("q1tI"));

exports.DataManagerContext = React.createContext(null);

/***/ }),

/***/ "zmvN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _set = _interopRequireDefault(__webpack_require__("ttDY"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global document */

var mitt_1 = __importDefault(__webpack_require__("kiME"));

var unfetch_1 = __importDefault(__webpack_require__("m/Gl")); // smaller version of https://gist.github.com/igrigorik/a02f2359f3bc50ca7a9c


function supportsPreload(list) {
  if (!list || !list.supports) {
    return false;
  }

  try {
    return list.supports('preload');
  } catch (e) {
    return false;
  }
}

var hasPreload = supportsPreload(document.createElement('link').relList);

var PageLoader =
/*#__PURE__*/
function () {
  function PageLoader(buildId, assetPrefix) {
    (0, _classCallCheck2.default)(this, PageLoader);
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.pageCache = {};
    this.prefetchCache = new _set.default();
    this.pageRegisterEvents = mitt_1.default();
    this.loadingRoutes = {};
    this.promisedBuildId = _promise.default.resolve();
  }

  (0, _createClass2.default)(PageLoader, [{
    key: "normalizeRoute",
    value: function normalizeRoute(route) {
      if (route[0] !== '/') {
        throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
      }

      route = route.replace(/\/index$/, '/');
      if (route === '/') return route;
      return route.replace(/\/$/, '');
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      var _this = this;

      route = this.normalizeRoute(route);
      return new _promise.default(function (resolve, reject) {
        var fire = function fire(_ref) {
          var error = _ref.error,
              page = _ref.page;

          _this.pageRegisterEvents.off(route, fire);

          delete _this.loadingRoutes[route];

          if (error) {
            reject(error);
          } else {
            resolve(page);
          }
        }; // If there's a cached version of the page, let's use it.


        var cachedPage = _this.pageCache[route];

        if (cachedPage) {
          var error = cachedPage.error,
              page = cachedPage.page;
          error ? reject(error) : resolve(page);
          return;
        } // Register a listener to get the page


        _this.pageRegisterEvents.on(route, fire); // If the page is loading via SSR, we need to wait for it
        // rather downloading it again.


        if (document.getElementById("__NEXT_PAGE__".concat(route))) {
          return;
        } // Load the script if not asked to load yet.


        if (!_this.loadingRoutes[route]) {
          _this.loadScript(route);

          _this.loadingRoutes[route] = true;
        }
      });
    }
  }, {
    key: "onDynamicBuildId",
    value: function onDynamicBuildId() {
      var _this2 = this;

      this.promisedBuildId = new _promise.default(function (resolve) {
        unfetch_1.default("".concat(_this2.assetPrefix, "/_next/static/HEAD_BUILD_ID")).then(function (res) {
          if (res.ok) {
            return res;
          }

          var err = new Error('Failed to fetch HEAD buildId');
          err.res = res;
          throw err;
        }).then(function (res) {
          return res.text();
        }).then(function (buildId) {
          _this2.buildId = buildId.trim();
        }).catch(function () {
          // When this fails it's not a _huge_ deal, preload wont work and page
          // navigation will 404, triggering a SSR refresh
          console.warn('Failed to load BUILD_ID from server. ' + 'The following client-side page transition will likely 404 and cause a SSR.\n' + 'http://err.sh/zeit/next.js/head-build-id');
        }).then(resolve, resolve);
      });
    }
  }, {
    key: "loadScript",
    value: function (route) {
      try {
        var _this4 = this;

        return _promise.default.resolve(_this4.promisedBuildId).then(function () {
          route = _this4.normalizeRoute(route);
          var scriptRoute = route === '/' ? '/index.js' : "".concat(route, ".js");
          var script = document.createElement('script');
          var url = "".concat(_this4.assetPrefix, "/_next/static/").concat(encodeURIComponent(_this4.buildId), "/pages").concat(scriptRoute);
          script.crossOrigin = undefined;
          script.src = url;

          script.onerror = function () {
            var error = new Error("Error when loading route: ".concat(route));
            error.code = 'PAGE_LOAD_ERROR';

            _this4.pageRegisterEvents.emit(route, {
              error: error
            });
          };

          document.body.appendChild(script);
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    } // This method if called by the route code.

  }, {
    key: "registerPage",
    value: function registerPage(route, regFn) {
      var _this5 = this;

      var register = function register() {
        try {
          var _regFn = regFn(),
              error = _regFn.error,
              page = _regFn.page;

          _this5.pageCache[route] = {
            error: error,
            page: page
          };

          _this5.pageRegisterEvents.emit(route, {
            error: error,
            page: page
          });
        } catch (error) {
          _this5.pageCache[route] = {
            error: error
          };

          _this5.pageRegisterEvents.emit(route, {
            error: error
          });
        }
      };

      if (false) { var check; }

      register();
    }
  }, {
    key: "prefetch",
    value: function (route) {
      try {
        var _exit2 = false;

        var _this7 = this;

        function _temp3(_result) {
          if (_exit2) return _result;

          if (document.readyState === 'complete') {
            return _this7.loadPage(route).catch(function () {});
          } else {
            return new _promise.default(function (resolve) {
              window.addEventListener('load', function () {
                _this7.loadPage(route).then(function () {
                  return resolve();
                }, function () {
                  return resolve();
                });
              });
            });
          }
        }

        route = _this7.normalizeRoute(route);
        var scriptRoute = route === '/' ? '/index.js' : "".concat(route, ".js");

        if (_this7.prefetchCache.has(scriptRoute)) {
          return _promise.default.resolve();
        }

        _this7.prefetchCache.add(scriptRoute); // Inspired by quicklink, license: https://github.com/GoogleChromeLabs/quicklink/blob/master/LICENSE
        // Don't prefetch if the user is on 2G / Don't prefetch if Save-Data is enabled


        if ('connection' in navigator) {
          if ((navigator.connection.effectiveType || '').indexOf('2g') !== -1 || navigator.connection.saveData) {
            return _promise.default.resolve();
          }
        } // Feature detection is used to see if preload is supported
        // If not fall back to loading script tags before the page is loaded
        // https://caniuse.com/#feat=link-rel-preload


        var _temp4 = function () {
          if (hasPreload) {
            return _promise.default.resolve(_this7.promisedBuildId).then(function () {
              var link = document.createElement('link');
              link.rel = 'preload';
              link.crossOrigin = undefined;
              link.href = "".concat(_this7.assetPrefix, "/_next/static/").concat(encodeURIComponent(_this7.buildId), "/pages").concat(scriptRoute);
              link.as = 'script';
              document.head.appendChild(link);
              _exit2 = true;
            });
          }
        }();

        return _promise.default.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }, {
    key: "clearCache",
    value: function clearCache(route) {
      route = this.normalizeRoute(route);
      delete this.pageCache[route];
      delete this.loadingRoutes[route];
      var script = document.getElementById("__NEXT_PAGE__".concat(route));

      if (script) {
        script.parentNode.removeChild(script);
      }
    }
  }]);
  return PageLoader;
}();

exports.default = PageLoader;

/***/ })

},[[1,"5d41","9da1"]]]);