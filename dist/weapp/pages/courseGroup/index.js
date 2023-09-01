(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/courseGroup/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/courseGroup/index.jsx":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/courseGroup/index.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_EntityCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/EntityCard */ "./src/components/EntityCard/index.jsx");
/* harmony import */ var _utils_routeHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/routeHelper */ "./src/utils/routeHelper.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_InfiniteScrollHolder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/InfiniteScrollHolder */ "./src/components/InfiniteScrollHolder/index.jsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/pages/courseGroup/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











function CourseGroup() {
  var _courseTypeList$find;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
    _useState2 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    _useState4 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
    _useState6 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
    timeStamp = _useState6[0],
    setTimeStamp = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
    _useState8 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
    pageTotal = _useState8[0],
    setPageTotal = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
    _useState10 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
    courseList = _useState10[0],
    setCourseList = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
    _useState12 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState11, 2),
    activeGroupId = _useState12[0],
    setActiveGroupId = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
    _useState14 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState13, 2),
    courseTypeList = _useState14[0],
    setCourseTypeList = _useState14[1];
  function updateTimeStamp() {
    setTimeStamp(Date.now());
  }
  function fetchCourseTypeList() {
    _utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get({
      url: '/api/course/typeList',
      data: {
        page: 1,
        size: 4
      }
    }).then(function (_ref) {
      var data = _ref.data;
      setCourseTypeList(data === null || data === void 0 ? void 0 : data.list);
    });
  }
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _getRouterParams = Object(_utils_routeHelper__WEBPACK_IMPORTED_MODULE_5__[/* getRouterParams */ "a"])(),
      typeId = _getRouterParams.typeId;
    setActiveGroupId(typeId);
    fetchCourseTypeList();
    updateTimeStamp();
  }, []);
  function fetchCourseList() {
    _utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get({
      url: '/api/course/list',
      data: {
        page: current,
        size: 10,
        typeId: activeGroupId
      }
    }).then(function (_ref2) {
      var data = _ref2.data;
      setPageTotal(data === null || data === void 0 ? void 0 : data.pages);
      setCourseList(data === null || data === void 0 ? void 0 : data.list);
    });
  }
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (timeStamp) {
      fetchCourseList();
    }
  }, [timeStamp]);
  function hasMore() {
    if (courseList == null || current < pageTotal) {
      return true;
    }
    return false;
  }
  function onLoadMore() {
    if (hasMore() && !loading) {
      setCurrent(current + 1);
      updateTimeStamp();
    }
  }
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
    className: "course-group container full-height bg-gray",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
      className: "group-list full-height font-size-14",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "d"], {
        scrollY: true,
        children: courseTypeList === null || courseTypeList === void 0 ? void 0 : courseTypeList.map(function (_ref3) {
          var typeId = _ref3.typeId,
            typeName = _ref3.typeName,
            typeThumb = _ref3.typeThumb;
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
            className: "group-item ".concat(activeGroupId === typeId ? 'active' : 'normal'),
            onClick: function onClick() {
              setActiveGroupId(typeId);
              setCurrent(1);
              setPageTotal(0);
              setCourseList(null);
              updateTimeStamp();
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"], {
              src: typeThumb,
              className: "image",
              mode: "widthFix"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "e"], {
              children: typeName
            })]
          }, typeId);
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
      className: "course-list flex-1 full-height",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "d"], {
        scrollY: true,
        className: "scroll-view",
        onScrollToLower: onLoadMore,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "font-bold m-b-10 font-size-14 align-center",
          children: courseTypeList === null || courseTypeList === void 0 ? void 0 : (_courseTypeList$find = courseTypeList.find(function (item) {
            return item.typeId === activeGroupId;
          })) === null || _courseTypeList$find === void 0 ? void 0 : _courseTypeList$find.typeName
        }), courseList === null || courseList === void 0 ? void 0 : courseList.map(function (data) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_EntityCard__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
            data: data,
            onClick: function onClick() {
              Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
                url: "/pages/courseDetail/index?id=".concat(data.courseId)
              });
            }
          }, data.courseId);
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_InfiniteScrollHolder__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
          hasMore: hasMore()
        })]
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["a"] = (CourseGroup);

/***/ }),

/***/ "./src/pages/courseGroup/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/courseGroup/index.jsx ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/courseGroup/index.jsx");


var config = {"navigationBarTitleText":"爱思塔编程"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/courseGroup/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/courseGroup/index.less":
/*!******************************************!*\
  !*** ./src/pages/courseGroup/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/courseGroup/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map