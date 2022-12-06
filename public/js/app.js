(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

var el = document.getElementById('app');
/**
 * inertia progress init
 */

_inertiajs_progress__WEBPACK_IMPORTED_MODULE_3__.InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,
  // The color of the progress bar.
  color: '#29d',
  // Whether to include the default NProgress styles.
  includeCSS: true,
  // Whether the NProgress spinner will be shown.
  showSpinner: false
});
/**
 * page data init
 */

var initialPageData = JSON.parse(el.dataset.page);
/**
 * ie8n init
 */

i18next__WEBPACK_IMPORTED_MODULE_5__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_7__.initReactI18next) // passes i18n down to react-i18next
.init({
  resources: initialPageData.props.translations,
  lng: initialPageData.props.app.locale,
  fallbackLng: 'en',
  returnObjects: true,
  interpolation: {
    escapeValue: false // react already safes from xss

  }
});
(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastProvider, {
  autoDismiss: true,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.App, {
    initialPage: initialPageData,
    resolveComponent: function resolveComponent(name) {
      return __webpack_require__("./resources/js/domain lazy recursive ^\\.\\/.*$")("./".concat(name)).then(function (module) {
        return module["default"];
      });
    }
  })
}), el);

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
// Add here polyfills or custom shared methods
 // eslint-disable-line

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/domain lazy recursive ^\\.\\/.*$":
/*!*************************************************************!*\
  !*** ./resources/js/domain/ lazy ^\.\/.*$ namespace object ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Employee/EmployeePayments": [
		"./resources/js/domain/Employee/EmployeePayments.js",
		"/js/vendor",
		"resources_js_domain_Employee_EmployeePayments_js"
	],
	"./Employee/EmployeePayments.js": [
		"./resources/js/domain/Employee/EmployeePayments.js",
		"/js/vendor",
		"resources_js_domain_Employee_EmployeePayments_js"
	],
	"./Employee/ImportList": [
		"./resources/js/domain/Employee/ImportList.js",
		"/js/vendor",
		"resources_js_domain_Employee_ImportList_js"
	],
	"./Employee/ImportList.js": [
		"./resources/js/domain/Employee/ImportList.js",
		"/js/vendor",
		"resources_js_domain_Employee_ImportList_js"
	],
	"./Employee/Index": [
		"./resources/js/domain/Employee/Index.js",
		"/js/vendor",
		"resources_js_domain_Employee_Index_js"
	],
	"./Employee/Index.js": [
		"./resources/js/domain/Employee/Index.js",
		"/js/vendor",
		"resources_js_domain_Employee_Index_js"
	],
	"./Employee/Show": [
		"./resources/js/domain/Employee/Show.js",
		"/js/vendor",
		"resources_js_domain_Employee_Show_js"
	],
	"./Employee/Show.js": [
		"./resources/js/domain/Employee/Show.js",
		"/js/vendor",
		"resources_js_domain_Employee_Show_js"
	],
	"./Error": [
		"./resources/js/domain/Error.js",
		"/js/vendor",
		"resources_js_domain_Error_js"
	],
	"./Error.js": [
		"./resources/js/domain/Error.js",
		"/js/vendor",
		"resources_js_domain_Error_js"
	],
	"./Shift/Create": [
		"./resources/js/domain/Shift/Create.js",
		"/js/vendor",
		"resources_js_domain_Shift_Create_js"
	],
	"./Shift/Create.js": [
		"./resources/js/domain/Shift/Create.js",
		"/js/vendor",
		"resources_js_domain_Shift_Create_js"
	],
	"./Shift/Index": [
		"./resources/js/domain/Shift/Index.js",
		"/js/vendor",
		"resources_js_domain_Shift_Index_js"
	],
	"./Shift/Index.js": [
		"./resources/js/domain/Shift/Index.js",
		"/js/vendor",
		"resources_js_domain_Shift_Index_js"
	],
	"./Shift/RemoveShift": [
		"./resources/js/domain/Shift/RemoveShift.js",
		"/js/vendor",
		"resources_js_domain_Shift_RemoveShift_js"
	],
	"./Shift/RemoveShift.js": [
		"./resources/js/domain/Shift/RemoveShift.js",
		"/js/vendor",
		"resources_js_domain_Shift_RemoveShift_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/domain lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map