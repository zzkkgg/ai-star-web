(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/activities/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/activities/index.jsx":
/*!************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/activities/index.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activities; });
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Banner */ "./src/components/Banner/index.jsx");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_EntityCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/EntityCard */ "./src/components/EntityCard/index.jsx");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_InfiniteScrollHolder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/InfiniteScrollHolder */ "./src/components/InfiniteScrollHolder/index.jsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/pages/activities/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











function isTabActive(activeTabIndex, index) {
  return activeTabIndex === index ? 'active' : 'normal';
}
function Activities() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
    _useState2 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
    _useState4 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    current = _useState4[0],
    setCurrent = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
    _useState6 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
    _useState8 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
    pageTotal = _useState8[0],
    setPageTotal = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
    _useState10 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
    timeStamp = _useState10[0],
    setTimeStamp = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
    _useState12 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState11, 2),
    bannerUrls = _useState12[0],
    setBannerUrls = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
    _useState14 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState13, 2),
    activeTabIndex = _useState14[0],
    setActiveTabIndex = _useState14[1];
  function updateTimeStamp() {
    setTimeStamp(Date.now());
  }
  function onLoadMore() {
    if (hasMore() && !loading) {
      setCurrent(current + 1);
      updateTimeStamp();
    }
  }
  function resetStatus() {
    setCurrent(1);
    setLoading(true);
    setPageTotal(0);
    setList(null);
    updateTimeStamp();
  }
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(fetchList, [timeStamp]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(fetchBanner, []);
  function fetchBanner() {
    _utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get({
      url: '/api/banner/list',
      data: {
        bannerType: 1,
        page: 1,
        size: 5
      }
    }).then(function (_ref) {
      var data = _ref.data;
      if (Array.isArray(data === null || data === void 0 ? void 0 : data.list)) {
        setBannerUrls(data.list);
      }
    });
  }
  function hasMore() {
    if (list == null || current < pageTotal) {
      return true;
    }
    return false;
  }
  function fetchList() {
    setLoading(true);
    _utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get({
      url: "/api/".concat(activeTabIndex === 0 ? 'activity' : 'game', "/list"),
      data: {
        page: current,
        size: 10
      }
    }).then(function (_ref2) {
      var data = _ref2.data;
      var _data$list = data.list,
        _list = _data$list === void 0 ? [] : _data$list,
        pages = data.pages,
        pageNum = data.pageNum;
      setPageTotal(pages);
      setList(pageNum === 1 ? _list : list.concat(_list));
    }).finally(function () {
      setLoading(false);
    });
  }
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "h"], {
    className: "activities font-size-14",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_Banner__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      bannerUrls: bannerUrls
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "h"], {
      className: "tabs align-center m-t-15 m-b-15",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "g"], {
        onClick: function onClick() {
          setActiveTabIndex(0);
          resetStatus();
        },
        className: "tab-item m-r-20 ".concat(isTabActive(activeTabIndex, 0)),
        children: "\u6D3B\u52A8"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "g"], {
        onClick: function onClick() {
          setActiveTabIndex(1);
          resetStatus();
        },
        className: "tab-item ".concat(isTabActive(activeTabIndex, 1)),
        children: "\u8D5B\u4E8B"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "h"], {
      className: "list flex-1",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "d"], {
        scrollY: true,
        className: "scroll-view",
        onScrollToLower: onLoadMore,
        children: [list === null || list === void 0 ? void 0 : list.map(function (data) {
          var id = data.activityId || data.gameId;
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_EntityCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
            data: data,
            onClick: function onClick() {
              Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])({
                url: "/pages/".concat(activeTabIndex === 0 ? 'activity' : 'game', "Detail/index?id=").concat(id)
              });
            }
          }, id);
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_InfiniteScrollHolder__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
          hasMore: hasMore()
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/activities/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/activities/index.jsx ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/activities/index.jsx");


var config = {"navigationBarTitleText":"爱思塔编程"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/activities/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/activities/index.less":
/*!*****************************************!*\
  !*** ./src/pages/activities/index.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/activities/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map