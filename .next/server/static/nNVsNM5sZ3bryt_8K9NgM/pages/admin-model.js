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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GuSX");


/***/ }),

/***/ "1lYi":
/***/ (function(module, exports) {

module.exports = require("react-highlight-words");

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

/***/ "GuSX":
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("SMlj");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("1lYi");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_AdminLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("hJmc");
/* harmony import */ var js_flock_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("N6Po");
/* harmony import */ var js_flock_sort__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_flock_sort__WEBPACK_IMPORTED_MODULE_13__);















function AdminModel(props) {
  var searchInput = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(props.model),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      model = _useState2[0],
      setModel = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      filteredInfo = _useState6[0],
      setFilteredInfo = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState7, 2),
      sortedInfo = _useState8[0],
      setSortedInfo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState9, 2),
      searchText = _useState10[0],
      setSearchText = _useState10[1];

  var handleDeleteSoft =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ids, isDeleted) {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: 'PATCH',
                url: "".concat(props.apiModel),
                data: {
                  ids: ids,
                  isDeleted: isDeleted
                },
                headers: {
                  authorization: props.token
                }
              });

            case 2:
              response = _context.sent;

              if (response.status === 200) {
                antd__WEBPACK_IMPORTED_MODULE_4__["message"].success("Model updated successfully.");
                setModel(response.data);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDeleteSoft(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDestroy = function handleDestroy(ids) {
    var handleOk =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                  method: 'DELETE',
                  url: "".concat(props.apiModel),
                  headers: {
                    authorization: props.token
                  },
                  data: {
                    ids: ids
                  }
                });

              case 2:
                response = _context2.sent;

                if (response.status === 200) {
                  antd__WEBPACK_IMPORTED_MODULE_4__["message"].success("Model deleted successfully.");
                  setModel(response.data);
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function handleOk() {
        return _ref2.apply(this, arguments);
      };
    }();

    antd__WEBPACK_IMPORTED_MODULE_4__["Modal"].confirm({
      title: 'Are you sure?',
      content: 'You will not be able to recover this model.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel'
    });
  };

  var getColumnSearchProps = function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: function filterDropdown(_ref3) {
        var setSelectedKeys = _ref3.setSelectedKeys,
            selectedKeys = _ref3.selectedKeys,
            confirm = _ref3.confirm,
            clearFilters = _ref3.clearFilters;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          style: {
            padding: 8
          }
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
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
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
        }, "Search"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
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
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_highlight_words__WEBPACK_IMPORTED_MODULE_11___default.a, {
          className: "table-text",
          highlightStyle: {
            backgroundColor: '#ffc069',
            padding: 0
          },
          searchWords: [searchText],
          autoEscape: true,
          textToHighlight: text.toString()
        });
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

  var handleTable = function handleTable(pagination, filters, sorter) {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  var handleRemoves = function handleRemoves() {
    if (selected.length === 0) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].warning("Nothing was selected.");
      return;
    }

    handleDestroy(selected);
  };

  var handleMenuClick = function handleMenuClick(e, id) {
    switch (e.key) {
      case 'undelete_soft':
        handleDeleteSoft(id, false);
        break;

      case 'delete_soft':
        handleDeleteSoft(id, true);
        break;

      case 'destroy':
        handleDestroy(id);
        break;
    }
  };

  var columns = [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, getColumnSearchProps('name')), {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    width: 200
  }, {
    title: 'Type',
    dataIndex: 'isPrivate',
    width: 110,
    align: 'center',
    render: function render(text) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        status: !text ? 'green' : 'blue',
        text: text ? 'Private' : 'Public'
      });
    }
  }, {
    title: 'Status',
    dataIndex: 'isDeleted',
    width: 110,
    align: 'center',
    render: function render(text) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
        status: text ? 'error' : 'success',
        text: text ? 'Disabled' : 'Active'
      });
    }
  }, {
    title: 'Last Modified',
    dataIndex: 'updatedAt',
    width: 200,
    align: 'center',
    render: function render(text) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text, null, moment__WEBPACK_IMPORTED_MODULE_7___default()(text).fromNow());
    }
  }, {
    key: 'operation',
    width: 200,
    align: 'right',
    render: function render(text, record) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
        overlay: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
          onClick: function onClick(key) {
            return handleMenuClick(key, record.id);
          }
        }, record.isDeleted && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          key: "undelete_soft"
        }, "Recovery"), !record.isDeleted && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          key: "delete_soft"
        }, "Disable"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
          key: "destroy"
        }, "Delete"))
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], null, "Actions ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "down"
      })));
    }
  }];

  var ExpandedComponent = function ExpandedComponent(record) {
    var config = record.config;
    var user = record.user;

    var getAnnotator = function getAnnotator() {
      return record.annotator === 'classifier' ? 'Classifier' : record.annotator === 'extractor' ? 'Extractor' : 'Pattern Extractor';
    };

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"], {
      title: "Model Information",
      bordered: true
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Author"
    }, "".concat(user.firstname, " ").concat(user.lastname)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Name"
    }, record.name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Description"
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Paragraph, null, record.desc)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Labels"
    }, record.label.map(function (item, key) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Tag"], {
        key: key,
        className: "ant-custom",
        color: item.color
      }, item.name);
    })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Annotator"
    }, getAnnotator()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Type"
    }, record.isPrivate ? 'Private' : 'Public'), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Status"
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
      status: record.isDeleted ? 'error' : 'success',
      text: record.isDeleted ? 'Not Active' : 'Active'
    })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "UI Stats"
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
      status: config.UIStats ? 'success' : 'error',
      text: config.UIStats ? 'Active' : 'Not Active'
    })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "UI Annotation"
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
      status: config.UIAnnotation ? 'success' : 'error',
      text: config.UIAnnotation ? 'Active' : 'Not Active'
    })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Created Date"
    }, moment__WEBPACK_IMPORTED_MODULE_7___default()(record.createdAt).fromNow()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Descriptions"].Item, {
      span: 3,
      label: "Updated Date"
    }, moment__WEBPACK_IMPORTED_MODULE_7___default()(record.updatedAt).fromNow()));
  };

  var CardExtra = [react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    key: "0",
    type: "danger",
    onClick: handleRemoves
  }, "Delete Selected")];
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AdminLayout__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], props, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", null, "Admin Model - Sistem Anotasi Named Entity")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    bordered: false,
    title: "Model Data",
    extra: CardExtra
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    rowKey: "id",
    scroll: {
      x: 1100
    },
    columns: columns,
    dataSource: model,
    onChange: handleTable,
    rowSelection: {
      selectedRowKeys: selected,
      onChange: function onChange(selectedRowKeys) {
        setSelected(selectedRowKeys);
      }
    },
    expandedRowRender: ExpandedComponent
  }))));
}

AdminModel.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref4) {
    var apiUrl, token, apiModel, fetchModel, _ref6, _ref7, model;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            apiUrl = _ref4.apiUrl, token = _ref4.token;
            apiModel = "".concat(apiUrl, "/admin/model");

            fetchModel = function fetchModel() {
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: 'GET',
                url: "".concat(apiUrl, "/admin/model"),
                headers: {
                  authorization: token
                }
              });
            };

            _context3.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.all([fetchModel()]);

          case 5:
            _ref6 = _context3.sent;
            _ref7 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ref6, 1);
            model = _ref7[0];
            return _context3.abrupt("return", {
              apiModel: apiModel,
              model: model.data
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_8__[/* withAuthSync */ "c"])(AdminModel, 1));

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "N6Po":
/***/ (function(module, exports) {

module.exports = require("js-flock/sort");

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

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hJmc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SMlj");





var Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content,
    Sider = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Sider;
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var route = _ref.route,
      children = _ref.children,
      auth = _ref.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var selectedKeys = route.parsedUrl.pathname;

  var handleToggle = function handleToggle() {
    return setCollapsed(function (n) {
      return !n;
    });
  };

  var handleMenu = function handleMenu(n) {
    return _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute(n.key);
  };

  var SiderComp = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Sider, {
    collapsible: true,
    trigger: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, {
      style: {
        color: '#fff'
      },
      onClick: function onClick() {
        return _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/');
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "left"
    }), " Homepage"),
    collapsed: collapsed
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "logo"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    onClick: handleMenu,
    selectedKeys: [selectedKeys],
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['1']
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: 64
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "/admin"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "appstore"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "/admin/model"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "crown"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Model")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "/admin/user"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "user"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Users"))));
  var DropdownComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    onClick: _utils_auth__WEBPACK_IMPORTED_MODULE_4__[/* logout */ "b"]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "logout"
  }), " Logout"));
  var HeaderComp = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Header, {
    style: {
      background: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    type: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    className: "trigger",
    type: collapsed ? 'menu-unfold' : 'menu-fold',
    onClick: handleToggle
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 20
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h-100 d-flex align-items-center justify-content-flex-end"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    overlay: DropdownComponent
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, {
    style: {
      cursor: 'pointer'
    }
  }, auth.email, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "down"
  })))))));
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      minHeight: '100%'
    }
  }, SiderComp, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, HeaderComp, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
    style: {
      margin: '24px 16px',
      padding: 24,
      background: '#fff'
    }
  }, children)));
});

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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