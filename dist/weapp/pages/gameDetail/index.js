(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/gameDetail/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/gameDetail/index.jsx":
/*!************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/gameDetail/index.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils_routeHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/routeHelper */ "./src/utils/routeHelper.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/pages/gameDetail/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









function GameDetail() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
    _useState2 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    detail = _useState2[0],
    setDetail = _useState2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _getRouterParams = Object(_utils_routeHelper__WEBPACK_IMPORTED_MODULE_5__[/* getRouterParams */ "a"])(),
      id = _getRouterParams.id;
    _utils_request__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get({
      url: '/api/game/detail',
      data: {
        gameId: id
      }
    }).then(function (_ref) {
      var data = _ref.data;
      setDetail(data);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setNavigationBarTitle({
        title: data.gameTitle
      });
    });
  }, []);
  if (!detail) {
    return null;
  }
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "game-detail container",
    children: [detail.gameThumb && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
      src: detail.gameThumb,
      mode: "widthFix",
      className: "thumb m-b-10"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
      className: "title font-size-16 font-bold m-b-10 align-center",
      children: detail.gameTitle
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
      className: "publish-time font-size-12 m-b-10 align-center color-gray",
      children: [detail.gameAuthor, " ", detail.gameBefrom, " ", detail.gameTime]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
      className: "rich-text m-t-10 m-b-10",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* RichText */ "c"], {
        nodes: detail.gameContent
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["a"] = (GameDetail);

/***/ }),

/***/ "./src/pages/gameDetail/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/gameDetail/index.jsx ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/gameDetail/index.jsx");


var config = {"navigationBarTitleText":"品牌活动"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/gameDetail/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/gameDetail/index.less":
/*!*****************************************!*\
  !*** ./src/pages/gameDetail/index.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/gameDetail/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map