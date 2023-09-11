(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/Banner/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Banner/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





var query;
function Banner(_ref) {
  var bannerUrls = _ref.bannerUrls;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(150),
    _useState2 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    h = _useState2[0],
    setH = _useState2[1];
  if (!bannerUrls) {
    return null;
  }
  if (bannerUrls.length > 1) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Swiper */ "e"], {
      circular: true,
      autoplay: true,
      indicatorDots: true,
      className: "swiper",
      style: {
        height: h
      },
      indicatorColor: "#999",
      indicatorActiveColor: "#333",
      children: bannerUrls.map(function (_ref2) {
        var bannerId = _ref2.bannerId,
          bannerImage = _ref2.bannerImage;
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* SwiperItem */ "f"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
            src: bannerImage,
            className: "banner",
            mode: "widthFix",
            onLoad: function onLoad(e) {
              if (!query) {
                var _e$target = e.target,
                  width = _e$target.width,
                  height = _e$target.height;
                query = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["createSelectorQuery"])();
                query.select('.swiper').boundingClientRect().exec(function (res) {
                  setH(res[0].width * height / width);
                });
              }
            }
          })
        }, bannerId);
      })
    });
  }
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
    src: bannerUrls[0].bannerImage,
    className: "banner",
    mode: "widthFix"
  });
}
/* harmony default export */ __webpack_exports__["a"] = (Banner);

/***/ }),

/***/ "./src/components/EntityCard/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/EntityCard/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/components/EntityCard/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function EntityCard(_ref) {
  var data = _ref.data,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? Function.prototype : _ref$onClick;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "h"], {
    onClick: onClick,
    className: "entity-card font-size-14",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "b"], {
      mode: "widthFix",
      style: {
        width: '50%'
      },
      src: data.activityThumb || data.gameThumb || data.courseThumb
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "h"], {
      className: "flex-1 content",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "h"], {
        className: "inner",
        children: data.activityTitle || data.gameTitle || data.courseTitle
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["a"] = (EntityCard);

/***/ }),

/***/ "./src/components/EntityCard/index.less":
/*!**********************************************!*\
  !*** ./src/components/EntityCard/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/InfiniteScrollHolder/index.jsx":
/*!*******************************************************!*\
  !*** ./src/components/InfiniteScrollHolder/index.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/components/InfiniteScrollHolder/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function InfiniteScrollHolder(_ref) {
  var hasMore = _ref.hasMore,
    className = _ref.className;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "h"], {
    className: "align-center color-gray font-size-12 infinite-scroll-holder".concat(className ? " ".concat(className) : ''),
    children: hasMore ? '加载中...' : '没有更多了'
  });
}
/* harmony default export */ __webpack_exports__["a"] = (InfiniteScrollHolder);

/***/ }),

/***/ "./src/components/InfiniteScrollHolder/index.less":
/*!********************************************************!*\
  !*** ./src/components/InfiniteScrollHolder/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/env.js":
/*!**************************!*\
  !*** ./src/utils/env.js ***!
  \**************************/
/*! exports provided: default, isH5, isWx, isPlainH5 */
/*! exports used: default, isH5, isWx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(navigator) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isH5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isWx; });
/* unused harmony export isPlainH5 */
var development = {
  commonUrl: 'https://aistar.topwuhan.com'
};
var production = {
  commonUrl: 'https://aistar.topwuhan.com'
};
var envMap = {
  development: development,
  production: production
};
var TARO_ENV = "weapp";
var NODE_ENV = "development";
var isH5 = TARO_ENV ? TARO_ENV === 'h5' : true; // 微信环境h5
var isWx = TARO_ENV === 'weapp';
var appConfigs = envMap[NODE_ENV] || development;
var isPlainH5 = isH5 && !navigator.userAgent.toLowerCase().includes('micromessenger'); // 非微信环境h5

/* harmony default export */ __webpack_exports__["a"] = (appConfigs);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"]))

/***/ }),

/***/ "./src/utils/interactHelper.js":
/*!*************************************!*\
  !*** ./src/utils/interactHelper.js ***!
  \*************************************/
/*! exports provided: showErrorMsg, showSuccessMsg, showLoading, hideLoading */
/*! exports used: hideLoading, showErrorMsg, showLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showErrorMsg; });
/* unused harmony export showSuccessMsg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hideLoading; });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

function showErrorMsg(msg) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  if (msg) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showToast({
      title: msg,
      duration: duration,
      icon: (msg === null || msg === void 0 ? void 0 : msg.length) > 7 ? 'none' : 'error'
    });
  }
}
function showSuccessMsg(msg) {
  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showToast({
    title: msg,
    duration: 3000,
    icon: 'success',
    success: success
  });
}
function showLoading() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading({
    title: msg
  });
}
function hideLoading() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.hideLoading();
}

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default, isResponseOk, normalizeUrl, defaultCatchHandler */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isResponseOk */
/* unused harmony export normalizeUrl */
/* unused harmony export defaultCatchHandler */
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./src/utils/env.js");
/* harmony import */ var _storageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageHelper */ "./src/utils/storageHelper.js");
/* harmony import */ var _interactHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactHelper */ "./src/utils/interactHelper.js");

var _excluded = ["showLoadModal"];




var SLASH = '/';
var slashRE = /([^:]\/\/)/g;
var commonUrl = _env__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].commonUrl;
function clearMultSlash(str) {
  var result = str;
  try {
    result = str.replace(slashRE, SLASH); // 去除拼接字符串时产生的多余斜线【/】
  } finally {
    return result;
  }
}
function normalizeUrl(url) {
  var fullUrl = "".concat(commonUrl).concat(url.startsWith(SLASH) ? url : "".concat(SLASH).concat(url));
  return clearMultSlash(fullUrl);
}
function isResponseOk(code) {
  return String(code) === '200';
}
function defaultCatchHandler(err) {
  Object(_interactHelper__WEBPACK_IMPORTED_MODULE_4__[/* showErrorMsg */ "b"])((err === null || err === void 0 ? void 0 : err.message) || '请求异常');
}
function httpRequest() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var url = options.url,
    data = options.data;
  var requestOptions = {
    data: data,
    method: method,
    header: {},
    timeout: 10000,
    url: normalizeUrl(url)
  };
  var openid = Object(_storageHelper__WEBPACK_IMPORTED_MODULE_3__[/* getStorage */ "b"])('openid');
  if (openid) {
    requestOptions.header.openid = openid;
  }
  var appid = Object(_storageHelper__WEBPACK_IMPORTED_MODULE_3__[/* getStorage */ "b"])('appid');
  if (appid) {
    requestOptions.header.appid = appid;
  }
  var token = Object(_storageHelper__WEBPACK_IMPORTED_MODULE_3__[/* getStorage */ "b"])('accessToken');
  if (token) {
    requestOptions.header.authorization = "Bearer ".concat(token);
  }
  requestOptions.header['Content-Type'] = 'application/json';
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request(requestOptions);
}
var loadingDelay = 500; // 500ms内接口返回数据则不展示加载框

function handleReject(reject, msg) {
  reject(msg);
}
function handleException(statusCode, message, rawOptions, method, _request, resolve, reject) {
  if (statusCode === 400) {
    if (!rawOptions.hideError) {
      Object(_interactHelper__WEBPACK_IMPORTED_MODULE_4__[/* showErrorMsg */ "b"])(message);
    }
    handleReject(reject, message);
    return;
  }
  if (statusCode === 401) {
    // 接口授权失败，没有登录或者token过期
    handleReject(reject, '未登录');
    return;
  }
  if (!rawOptions.hideError) {
    Object(_interactHelper__WEBPACK_IMPORTED_MODULE_4__[/* showErrorMsg */ "b"])('请求异常');
  }
  handleReject(reject, '请求异常');
}
function partialRequest() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
  function _request(rawOptions) {
    var timer = null;
    var startTime;
    return new Promise(function (resolve, reject) {
      var _rawOptions$showLoadM = rawOptions.showLoadModal,
        showLoadModal = _rawOptions$showLoadM === void 0 ? true : _rawOptions$showLoadM,
        options = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(rawOptions, _excluded);
      if (showLoadModal) {
        timer = setTimeout(function () {
          Object(_interactHelper__WEBPACK_IMPORTED_MODULE_4__[/* showLoading */ "c"])((showLoadModal === null || showLoadModal === void 0 ? void 0 : showLoadModal.title) || '加载中');
        }, loadingDelay);
        startTime = Date.now();
      }
      httpRequest(options, method).then(function (res) {
        var data = res.data,
          statusCode = res.statusCode;
        var _ref = data || {},
          message = _ref.message;
        if (statusCode === 200) {
          if (isResponseOk(data === null || data === void 0 ? void 0 : data.code)) {
            resolve(data);
            return;
          }
          Object(_interactHelper__WEBPACK_IMPORTED_MODULE_4__[/* showErrorMsg */ "b"])(message);
          reject(message);
        }
        console.log('statusCode error', res);
        handleException(statusCode, message || data.title, rawOptions, method, _request, resolve, reject);
      }).catch(function (err) {
        console.log('request err', err);
        reject(err);
      }).finally(function () {
        if (timer) {
          if (Date.now() - startTime <= loadingDelay) {
            // 接口在loadingDelay时间内完成请求，则取消显示loading
            clearTimeout(timer);
            timer = null;
          } else {
            setTimeout(_interactHelper__WEBPACK_IMPORTED_MODULE_4__[/* hideLoading */ "a"], loadingDelay);
          }
        }
      });
    });
  }
  return _request;
}
var _get = partialRequest();
var _post = partialRequest('POST');
var _put = partialRequest('PUT');
var _delete = partialRequest('DELETE');
var request = {
  get: _get,
  put: _put,
  post: _post,
  delete: _delete
};
/* harmony default export */ __webpack_exports__["a"] = (request);


/***/ }),

/***/ "./src/utils/routeHelper.js":
/*!**********************************!*\
  !*** ./src/utils/routeHelper.js ***!
  \**********************************/
/*! exports provided: concatRedirectUrl, redirectToLogin, redirectTo, switchTab, navigateTo, navigateBack, getRouterParams, requireLoginRedirectTo */
/*! exports used: getRouterParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export concatRedirectUrl */
/* unused harmony export redirectToLogin */
/* unused harmony export redirectTo */
/* unused harmony export switchTab */
/* unused harmony export navigateTo */
/* unused harmony export navigateBack */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRouterParams; });
/* unused harmony export requireLoginRedirectTo */
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./src/utils/env.js");
/* harmony import */ var _storageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageHelper */ "./src/utils/storageHelper.js");




function getUrl(route, params) {
  var queryArr = [];
  Object.entries(params).forEach(function (_ref) {
    var _ref2 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    queryArr.push("".concat(key, "=").concat(value));
  });
  var url = queryArr.length ? "/pages/".concat(route, "/index?").concat(queryArr.join('&')) : "/pages/".concat(route, "/index");
  return url;
}
function appendInviterId(params, rawUrl) {
  if (params.inviterId) {
    rawUrl = "".concat(rawUrl, "?inviterId=").concat(params.inviterId);
  }
  var _Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getCurrentInstance().router,
    path = _Taro$getCurrentInsta.path,
    routeParams = _Taro$getCurrentInsta.params;
  if (path === '/pages/packageShare/index') {
    Object(_storageHelper__WEBPACK_IMPORTED_MODULE_3__[/* setStorage */ "c"])('redirectPath', "/pages/packageShare/index?packageId=".concat(routeParams.packageId));
  }
  return rawUrl;
}
function concatRedirectUrl(navigateToUrl) {
  if (!location.href.includes('redirectUrl')) {
    var urlSearch = location.search;
    var redirectUrl = location.hash.slice(1);
    if (urlSearch) {
      var filterSearch = urlSearch.slice(1).split('&').filter(function (s) {
        return !s.match(/(state|code)=/);
      }).join('&');
      if (redirectUrl && filterSearch) {
        redirectUrl += "?".concat(filterSearch);
      }
    }
    if (redirectUrl && !redirectUrl.includes('/login/index')) {
      return "".concat(navigateToUrl, "?redirectUrl=").concat(encodeURIComponent(redirectUrl));
    }
  } else {
    var _location$href$split = location.href.split('redirectUrl'),
      _location$href$split2 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_location$href$split, 2),
      _ = _location$href$split2[0],
      search = _location$href$split2[1];
    return "".concat(navigateToUrl, "?redirectUrl").concat(search);
  }
  return navigateToUrl;
}
function redirectToLogin() {
  var params = getRouterParams();
  Object(_storageHelper__WEBPACK_IMPORTED_MODULE_3__[/* clearUserCache */ "a"])();
  if (_env__WEBPACK_IMPORTED_MODULE_2__[/* isWx */ "c"]) {
    // 微信小程序
    var url = '/pages/login/index';
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.reLaunch({
      url: appendInviterId(params, url)
    });
  } else {
    var newUrl = "".concat(location.origin, "/#/pages").concat(location.href.includes('maternalAndEducation') ? '/maternalAndEducation' : '', "/login/index");
    location.href = concatRedirectUrl(newUrl);
  }
}
// 不可返回，非 tabBar 页面跳转
function redirectTo(route) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var url = getUrl(route, params);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
    url: url
  });
}

// 跳转到 tabBar 页面
function switchTab(route) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var url = getUrl(route, params);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.switchTab({
    url: url
  });
}

// 可返回跳转
function navigateTo(route) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var events = arguments.length > 2 ? arguments[2] : undefined;
  var url = getUrl(route, params);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
    url: url,
    events: events
  });
}
// 跳转返回跳转 delta <= 10
function navigateBack() {
  var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateBack({
    delta: delta
  });
}
function getRouterParams() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getCurrentInstance().router.params;
}
function requireLoginRedirectTo(option) {
  var isRedirectTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var accessToken = Object(_storageHelper__WEBPACK_IMPORTED_MODULE_3__[/* getStorage */ "b"])('accessToken');
  if (!accessToken) {
    var params = getRouterParams();
    var url = '/pages/login/index';
    if (params.inviterId) {
      url = "".concat(url, "?inviterId=").concat(params.inviterId);
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
      url: url
    });
  } else {
    if (isRedirectTo) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo(option);
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo(option);
    }
  }
}

/***/ }),

/***/ "./src/utils/storageHelper.js":
/*!************************************!*\
  !*** ./src/utils/storageHelper.js ***!
  \************************************/
/*! exports provided: setStorage, getStorage, removeStorage, clearUserCache, batchSetStorage, default */
/*! exports used: clearUserCache, getStorage, setStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStorage; });
/* unused harmony export removeStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearUserCache; });
/* unused harmony export batchSetStorage */
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/env */ "./src/utils/env.js");




function setStorage(key, data) {
  var _value = data;
  if (_utils_env__WEBPACK_IMPORTED_MODULE_3__[/* isH5 */ "b"]) {
    if (Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(data) === 'object') {
      _value = JSON.stringify(data);
    }
    localStorage.setItem(key, _value);
    return;
  }
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.setStorageSync(key, _value);
}
function batchSetStorage() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.entries(data).forEach(function (_ref) {
    var _ref2 = Object(D_zkg_ai_star_web_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    setStorage(key, value);
  });
}
function getStorage(key) {
  var value = _utils_env__WEBPACK_IMPORTED_MODULE_3__[/* isH5 */ "b"] ? localStorage.getItem(key) : _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync(key);
  if (typeof value === 'string' && value !== null && value !== void 0 && value.match(/^\{[\s\S]+}$/)) {
    return JSON.parse(value);
  }
  return value;
}
function removeStorage(key) {
  if (_utils_env__WEBPACK_IMPORTED_MODULE_3__[/* isH5 */ "b"]) {
    localStorage.removeItem(key);
    return;
  }
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.removeStorageSync(key);
}
function clearUserCache() {
  ['user', 'personalAssets', 'appid', 'unionid', 'code', 'mpOpenId', 'accessToken', 'expiresAt', 'refreshToken', 'openid', 'userId', 'initialAccount', 'personalAssets', 'isAuthenticated', 'inviterId'].forEach(function (k) {
    removeStorage(k);
  });
}

/* unused harmony default export */ var _unused_webpack_default_export = (getStorage);

/***/ })

}]);
//# sourceMappingURL=common.js.map