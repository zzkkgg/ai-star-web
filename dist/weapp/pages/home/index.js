(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/home/index.jsx":
/*!******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/home/index.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_InfiniteScrollHolder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/InfiniteScrollHolder */ "./src/components/InfiniteScrollHolder/index.jsx");
/* harmony import */ var _assets_images_icons_ai_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/icons/ai.png */ "./src/assets/images/icons/ai.png");
/* harmony import */ var _assets_images_icons_ai_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_icons_ai_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ "./src/pages/home/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
    _useState2 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
    _useState4 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
    _useState6 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
    pageTotal = _useState6[0],
    setPageTotal = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
    _useState8 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
    bannerUrl = _useState8[0],
    setBannerUrl = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
    _useState10 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
    courseList = _useState10[0],
    setCourseList = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
    _useState12 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState11, 2),
    courseTypeList = _useState12[0],
    setCourseTypeList = _useState12[1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchCourseTypeList();
    fetchCourseList();
    fetchBanner();
  }, []);
  function fetchBanner() {
    _utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get({
      url: '/api/banner/list',
      data: {
        bannerType: 0,
        page: 1,
        size: 5
      }
    }).then(function (_ref) {
      var data = _ref.data;
      if (Array.isArray(data === null || data === void 0 ? void 0 : data.list)) {
        setBannerUrl(data.list[0].bannerImage);
      }
    });
  }
  function fetchCourseTypeList() {
    _utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get({
      url: '/api/course/typeList',
      data: {
        page: 1,
        size: 5
      }
    }).then(function (_ref2) {
      var data = _ref2.data;
      setCourseTypeList(data === null || data === void 0 ? void 0 : data.list);
    });
  }
  function fetchCourseList() {
    setLoading(true);
    _utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get({
      url: '/api/course/list',
      data: {
        page: current,
        size: 10
      }
    }).then(function (_ref3) {
      var data = _ref3.data;
      setPageTotal(data.pages);
      setCourseList((courseList || []).concat(data.list || []));
    }).finally(function () {
      setLoading(false);
    });
  }
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(fetchCourseList, [current]);
  function hasMore() {
    if (courseList == null || current < pageTotal) {
      return true;
    }
    return false;
  }
  function onLoadMore() {
    if (!hasMore() || loading) {
      return;
    }
    setCurrent(current + 1);
  }
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "home bg-gray",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
      className: "container full-height",
      children: [bannerUrl && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
        src: bannerUrl,
        className: "banner",
        mode: "heightFix"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
        className: "hot-course-list font-size-14",
        children: courseTypeList === null || courseTypeList === void 0 ? void 0 : courseTypeList.map(function (_ref4) {
          var typeId = _ref4.typeId,
            typeName = _ref4.typeName,
            typeThumb = _ref4.typeThumb;
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
            className: "hot-course-item align-center",
            onClick: function onClick() {
              Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
                url: "/pages/courseGroup/index?typeId=".concat(typeId)
              });
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
              mode: "widthFix",
              className: "course-icon",
              src: typeThumb || _assets_images_icons_ai_png__WEBPACK_IMPORTED_MODULE_6___default.a
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
              className: "font-size-12 m-t-5",
              children: typeName
            })]
          }, typeId);
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
        className: "banner-holder m-b-20"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
        className: "font-size-14 m-b-10",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "e"], {
          className: "m-l-10",
          children: "\u5168\u90E8"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
        className: "course-box",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* ScrollView */ "d"], {
          scrollY: true,
          onScrollToLower: onLoadMore,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
            className: "course-list",
            children: [courseList === null || courseList === void 0 ? void 0 : courseList.map(function (_ref5) {
              var courseId = _ref5.courseId,
                courseThumb = _ref5.courseThumb,
                courseTitle = _ref5.courseTitle;
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
                onClick: function onClick() {
                  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
                    url: "/pages/courseDetail/index?id=".concat(courseId)
                  });
                },
                className: "course-card align-center",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
                  className: "thumbnail-box",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
                    src: courseThumb,
                    mode: "widthFix",
                    className: "image"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
                  className: "title font-size-14 m-t-5",
                  children: courseTitle
                })]
              }, courseId);
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_InfiniteScrollHolder__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
              className: "infinite-load",
              hasMore: hasMore()
            })]
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/assets/images/icons/ai.png":
/*!****************************************!*\
  !*** ./src/assets/images/icons/ai.png ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/ai.png";

/***/ }),

/***/ "./src/pages/home/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.jsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/home/index.jsx");


var config = {"navigationBarTitleText":"爱思塔编程"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/home/index.less":
/*!***********************************!*\
  !*** ./src/pages/home/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/home/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map