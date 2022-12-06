"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_domain_Test_pages_public_homepage_shared_TabList_js"],{

/***/ "./resources/js/domain/Test/pages/public/homepage/shared/TabList.js":
/*!**************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/shared/TabList.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TabList = function TabList(props) {
  var _props$listClass;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_props$listClass = props.listClass) !== null && _props$listClass !== void 0 ? _props$listClass : 'tabs-pill',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "tabs-pill__item active",
      url: "/",
      href: "/",
      children: t('category.category_tab')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "tabs-pill__item",
      url: "/",
      href: "/",
      children: t('category.sub_category_tab')
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabList);

/***/ }),

/***/ "./resources/js/utils/api.js":
/*!***********************************!*\
  !*** ./resources/js/utils/api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var api = (axios__WEBPACK_IMPORTED_MODULE_0___default());
api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response && [401, 403, 419, 503].includes(error.response.status)) {
    window.location.replace("/error/".concat(error.response.status));
    return false;
  } else {
    return Promise.reject(error);
  }
});

/***/ }),

/***/ "./resources/js/utils/auth.js":
/*!************************************!*\
  !*** ./resources/js/utils/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "can": () => (/* binding */ can),
/* harmony export */   "has": () => (/* binding */ has)
/* harmony export */ });
var has = function has(auth) {
  if (!auth) {
    return false;
  }

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    if (auth.roles.includes(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1])) {
      return true;
    }
  }

  return false;
};
var can = function can(auth) {
  if (!auth) {
    return false;
  }

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    if (auth.permissions.includes(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1])) {
      return true;
    }
  }

  return false;
};

/***/ }),

/***/ "./resources/js/utils/conditionalWrapper.js":
/*!**************************************************!*\
  !*** ./resources/js/utils/conditionalWrapper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionalWrapper": () => (/* binding */ ConditionalWrapper)
/* harmony export */ });
var ConditionalWrapper = function ConditionalWrapper(_ref) {
  var condition = _ref.condition,
      wrapper = _ref.wrapper,
      children = _ref.children;
  return condition ? wrapper(children) : children;
};

/***/ }),

/***/ "./resources/js/utils/fileDownload.js":
/*!********************************************!*\
  !*** ./resources/js/utils/fileDownload.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fileDownload": () => (/* binding */ fileDownload)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/utils/api.js");

var fileDownload = function fileDownload(url, callback, errorCallback) {
  (0,_api__WEBPACK_IMPORTED_MODULE_0__.api)({
    url: url,
    method: 'GET',
    responseType: 'blob' // important

  }).then(function (response) {
    var filename = response.headers['content-disposition'].split(';').find(function (n) {
      return n.includes('filename=');
    }).replace('filename=', '').replace(/"/g, '').trim();
    var blob = new Blob([response.data]); // eslint-disable-line

    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      // IE workaround for "HTML7007: One or more blob URLs were
      // revoked by closing the blob for which they were created.
      // These URLs will no longer resolve as the data backing
      // the URL has been freed."
      window.navigator.msSaveBlob(blob, filename);
    } else {
      var blobURL = window.URL.createObjectURL(blob);
      var tempLink = document.createElement('a');
      tempLink.style.display = 'none';
      tempLink.href = blobURL;
      tempLink.setAttribute('download', filename); // Safari thinks _blank anchor are pop ups. We only want to set _blank
      // target if the browser does not support the HTML5 download attribute.
      // This allows you to download files in desktop safari if pop up blocking
      // is enabled.

      if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
      }

      document.body.appendChild(tempLink);
      tempLink.click(); // Fixes "webkit blob resource error 1"

      setTimeout(function () {
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
      }, 0);
    }

    if (callback) {
      callback();
    }
  })["catch"](function (error) {
    if (errorCallback) {
      errorCallback(error);
    }
  });
};

/***/ }),

/***/ "./resources/js/utils/forms.js":
/*!*************************************!*\
  !*** ./resources/js/utils/forms.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleApiFormErrors": () => (/* binding */ handleApiFormErrors),
/* harmony export */   "handleFormErrors": () => (/* binding */ handleFormErrors),
/* harmony export */   "validateFormData": () => (/* binding */ validateFormData)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./resources/js/utils/index.js");

var handleFormErrors = function handleFormErrors(formRef, errors) {
  if (!!errors && !!Object.keys(errors).length) {
    formRef.current.setErrors(errors);
    formRef.current.setSubmitting(false);
  }
};
var handleApiFormErrors = function handleApiFormErrors(error, setErrors) {
  if (error.response.status === 422) {
    setErrors(error.response.data.errors);
  } else {
    window.location.replace("/error/".concat(error.response.status));
  }
};
var validateFormData = function validateFormData(values, rules) {
  var messages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var attributeNames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var errors = {};
  var validation = new _utils__WEBPACK_IMPORTED_MODULE_0__.Validate(values, rules, messages);
  validation.setAttributeNames(attributeNames);

  if (validation.fails()) {
    errors = validation.errors.errors;
  }

  return errors;
};

/***/ }),

/***/ "./resources/js/utils/ga.js":
/*!**********************************!*\
  !*** ./resources/js/utils/ga.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventTrack": () => (/* binding */ eventTrack)
/* harmony export */ });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");


var eventTrack = function eventTrack(category, action, label, value) {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('analytics-cookies') === 'true') {
    var data = {
      category: category,
      action: action,
      label: label
    };

    if (value) {
      data.value = value;
    }

    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event(data);
  }
};

/***/ }),

/***/ "./resources/js/utils/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/utils/helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateSlickToWindowOffset": () => (/* binding */ calculateSlickToWindowOffset),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "flatArrayObject": () => (/* binding */ flatArrayObject),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "isRequiredFromRules": () => (/* binding */ isRequiredFromRules),
/* harmony export */   "objectToQuerystring": () => (/* binding */ objectToQuerystring),
/* harmony export */   "parseQueryString": () => (/* binding */ parseQueryString),
/* harmony export */   "stringSplice": () => (/* binding */ stringSplice),
/* harmony export */   "trans": () => (/* binding */ trans)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parse/index.js");
var _this = undefined;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var el = document.getElementById('app');
var initialPageData = JSON.parse(el.dataset.page);
var parseQueryString = function parseQueryString() {
  var str = window.location.search;
  var objURL = {};
  str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), // eslint-disable-line
  function ($0, $1, $2, $3) {
    objURL[$1] = $3;
  });
  return objURL;
};
var objectToQuerystring = function objectToQuerystring(params) {
  var result = '';

  function convertJsonToQueryString(data, progress, name) {
    name = name || '';
    progress = progress || '';

    if (data && _typeof(data) === 'object') {
      Object.keys(data).forEach(function (key) {
        var value = data[key];

        if (key !== 'Cell' && key !== 'Filter' && key !== 'filterMethod' && key !== 'Expander') {
          if (name === '') {
            convertJsonToQueryString(value, progress, key);
          } else {
            convertJsonToQueryString(value, progress, name + '[' + key + ']');
          }
        }
      });
    } else {
      result = result ? result.concat('&') : result.concat('?');
      result = result.concat("".concat(name, "=").concat(data));
    }
  }

  convertJsonToQueryString(params);
  return result;
};
var formatDate = function formatDate(date) {
  return date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date, 'yyyy-MM-dd HH:mm:ss', new Date()) : null;
};
var isRequiredFromRules = function isRequiredFromRules(rules) {
  var returnValue = false;

  if (Array.isArray(rules)) {
    rules.forEach(function (rule) {
      if (rule === 'required') {
        returnValue = true;
      }
    });
  }

  if (typeof rules === 'string') {
    rules.split('|').forEach(function (rule) {
      if (rule === 'required') {
        returnValue = true;
      }
    });
  }

  return returnValue;
};
var flatArrayObject = function flatArrayObject(array, property) {
  var result = [];
  array.forEach(function (a) {
    result.push(a);

    if (Array.isArray(a[property])) {
      result = result.concat(flatArrayObject(a[property], property));
    }
  });
  return result;
};
var debounce = function debounce(func, limit) {
  var lastFunc;
  var context = _this;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(lastFunc);
    lastFunc = setTimeout(function () {
      func.apply(context, args);
    }, limit);
  };
};
var calculateSlickToWindowOffset = function calculateSlickToWindowOffset(sliderRef, windowWidth) {
  var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'right';
  var slickSliderWrapper = sliderRef.current;

  if (slickSliderWrapper) {
    var slickPosition = slickSliderWrapper.getBoundingClientRect();
    var spaceToOffset = Math.floor(windowWidth - slickPosition[orientation]);
    var slickSliderEle = slickSliderWrapper.querySelector(".slick-overflow-".concat(orientation));
    slickSliderEle.setAttribute('style', "margin-".concat(orientation, ": -").concat(spaceToOffset, "px"));
  }
};
var trans = function trans(key) {
  if (key[initialPageData.props.app.locale]) {
    return key[initialPageData.props.app.locale];
  }

  return key.en;
};
var stringSplice = function stringSplice(str, index, charDelete, add) {
  // This does not mutate original string
  // handle from end of string if index is negative
  if (index < 0) {
    index = str.length + index;

    if (index < 0) {
      index = 0;
    }
  }

  var firstSlice = str.slice(0, index);
  var secondSlice = '';

  if (charDelete !== undefined && charDelete !== null && charDelete > 0) {
    firstSlice = str.slice(0, index);
    secondSlice = str.slice(charDelete, str.length);
  }

  return firstSlice + (add || '') + secondSlice;
};

/***/ }),

/***/ "./resources/js/utils/hooks.js":
/*!*************************************!*\
  !*** ./resources/js/utils/hooks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePrevious": () => (/* binding */ usePrevious),
/* harmony export */   "useWindowResized": () => (/* binding */ useWindowResized)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./resources/js/utils/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var usePrevious = function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Store current value in ref

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
};
var useWindowResized = function useWindowResized() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 0]),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var html = document.querySelector('html');

  var updateSize = function updateSize() {
    setSize([html.clientWidth, html.clientHeight]);
  };

  var debouncedUpdateSize = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(updateSize, 200);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    window.addEventListener('resize', debouncedUpdateSize);
    updateSize();
    return function () {
      return window.removeEventListener('resize', debouncedUpdateSize);
    };
  }, []);
  return size;
};

/***/ }),

/***/ "./resources/js/utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/utils/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionalWrapper": () => (/* reexport safe */ _conditionalWrapper__WEBPACK_IMPORTED_MODULE_6__.ConditionalWrapper),
/* harmony export */   "Link": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_0__.Link),
/* harmony export */   "Validate": () => (/* reexport safe */ _validator__WEBPACK_IMPORTED_MODULE_3__.Validate),
/* harmony export */   "api": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.api),
/* harmony export */   "calculateSlickToWindowOffset": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.calculateSlickToWindowOffset),
/* harmony export */   "can": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.can),
/* harmony export */   "debounce": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.debounce),
/* harmony export */   "eventTrack": () => (/* reexport safe */ _ga__WEBPACK_IMPORTED_MODULE_9__.eventTrack),
/* harmony export */   "fileDownload": () => (/* reexport safe */ _fileDownload__WEBPACK_IMPORTED_MODULE_7__.fileDownload),
/* harmony export */   "flatArrayObject": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.flatArrayObject),
/* harmony export */   "formatDate": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.formatDate),
/* harmony export */   "handleApiFormErrors": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_10__.handleApiFormErrors),
/* harmony export */   "handleFormErrors": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_10__.handleFormErrors),
/* harmony export */   "has": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.has),
/* harmony export */   "isRequiredFromRules": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.isRequiredFromRules),
/* harmony export */   "objectToQuerystring": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.objectToQuerystring),
/* harmony export */   "parseQueryString": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.parseQueryString),
/* harmony export */   "route": () => (/* reexport safe */ _route__WEBPACK_IMPORTED_MODULE_4__.route),
/* harmony export */   "stringSplice": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.stringSplice),
/* harmony export */   "trans": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.trans),
/* harmony export */   "usePrevious": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_8__.usePrevious),
/* harmony export */   "useWindowResized": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_8__.useWindowResized),
/* harmony export */   "validateFormData": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_10__.validateFormData)
/* harmony export */ });
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./resources/js/utils/link.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./resources/js/utils/auth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./resources/js/utils/api.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator */ "./resources/js/utils/validator.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route */ "./resources/js/utils/route.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _conditionalWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conditionalWrapper */ "./resources/js/utils/conditionalWrapper.js");
/* harmony import */ var _fileDownload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fileDownload */ "./resources/js/utils/fileDownload.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ "./resources/js/utils/hooks.js");
/* harmony import */ var _ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ga */ "./resources/js/utils/ga.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms */ "./resources/js/utils/forms.js");












/***/ }),

/***/ "./resources/js/utils/link.js":
/*!************************************!*\
  !*** ./resources/js/utils/link.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Link = function Link(_ref) {
  var href = _ref.href,
      url = _ref.url,
      activeClass = _ref.activeClass,
      method = _ref.method,
      children = _ref.children,
      className = _ref.className,
      data = _ref.data;
  var linkClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _defineProperty({}, activeClass || 'active', url && url.current === (href.replace(/^\/|\/$/g, '') || '/')));
  var queryParams = '';

  if ((!method || method.toLowerCase() === 'get') && !!data) {
    queryParams = "?".concat(Object.keys(data).map(function (d) {
      return "".concat(d, "=").concat(data[d]);
    }).join('&'));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
    href: "".concat(href).concat(queryParams),
    className: linkClass,
    method: method || 'get',
    data: queryParams ? null : data,
    children: children
  });
};

/***/ }),

/***/ "./resources/js/utils/route.js":
/*!*************************************!*\
  !*** ./resources/js/utils/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "route": () => (/* binding */ route)
/* harmony export */ });
var route = function route(string, params) {
  if (params && Object.keys(params).length > 0) {
    Object.keys(params).forEach(function (key, i) {
      if (params[key] !== undefined && params[key] !== null) {
        string = string.replace(new RegExp('%' + key + '%', 'g'), params[key]);
      }
    });
  }

  return string;
};

/***/ }),

/***/ "./resources/js/utils/validator.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/validator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validate": () => (/* binding */ Validate)
/* harmony export */ });
/* harmony import */ var validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validatorjs/dist/validator.min */ "./node_modules/validatorjs/dist/validator.min.js");
/* harmony import */ var validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/Translation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _i18n$t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import Validator from 'validatorjs'



var Validate = (validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0___default());
/**
 * Overwrite default validation messages
 */

var customMessages = (_i18n$t = i18next__WEBPACK_IMPORTED_MODULE_1__["default"].t('validation')) !== null && _i18n$t !== void 0 ? _i18n$t : {};

if (typeof customMessages === 'string') {
  customMessages = {};
}

var defaultMessages = Validate.getMessages(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language);

if (!defaultMessages) {
  var _Validate$getMessages;

  defaultMessages = (_Validate$getMessages = Validate.getMessages(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language.split('_')[0])) !== null && _Validate$getMessages !== void 0 ? _Validate$getMessages : {};
}

customMessages.attributes = _objectSpread(_objectSpread({}, defaultMessages.attributes), customMessages.attributes);

var messages = _objectSpread(_objectSpread({}, defaultMessages), customMessages);

Validate.useLang(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language);
Validate.setMessages(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language, messages);
/**
 * Custom validation rules (example)
 */
// validator.register('strong_password', function(value, requirement, attribute) { // requirement parameter defaults to null
//     return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
// },'The :attribute should contain at least one uppercase, lowercase and special (!@#$%*?1234567890) character.');

validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0___default().register('username', function (value, requirement, attribute) {
  return value.match(/^[a-zA-Z0-9&-_@*+=.,;:!?@$!%*?&#]*$/) && !value.match(/\S+@\S+\.\S+/);
}, 'The :attribute must have numbers letters special characters and must not be an email address');
validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0___default().register('strong_password', function (value, requirement, attribute) {
  return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-.\/:;<=>?@\[\\\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-.\/:;<=>?@\[\\\]^_`{|}~àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸåÅæÆœŒçÇðÐß]{14,}$/); // eslint-disable-line
}, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])((0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_6__.Translation, {
  children: function children(t, _ref) {
    var i18n = _ref.i18n;
    return t('passwords.criteria');
  }
}))));

/***/ })

}]);
//# sourceMappingURL=resources_js_domain_Test_pages_public_homepage_shared_TabList_js.js.map?id=1c98bd9226ded814