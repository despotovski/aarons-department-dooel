"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_domain_Test_components_RadioTab_js"],{

/***/ "./resources/js/domain/Test/components/RadioTab.js":
/*!*********************************************************!*\
  !*** ./resources/js/domain/Test/components/RadioTab.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var RadioTab = function RadioTab(_ref) {
  var values = _ref.values,
      name = _ref.name;
  var value = values.value,
      label = values.label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "input-element input-radio-tab",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        type: "radio",
        id: "".concat(name, "-radio-input-").concat(label),
        value: value.toString(),
        name: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
        htmlFor: "".concat(name, "-radio-input-").concat(label),
        children: label
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioTab);

/***/ })

}]);
//# sourceMappingURL=resources_js_domain_Test_components_RadioTab_js.js.map?id=342cb26f7726b580