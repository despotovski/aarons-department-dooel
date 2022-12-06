(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_domain_Test_pages_AuthCreateAccount_js"],{

/***/ "./resources/js/components/Accordion/Accordion.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Accordion/Accordion.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kunukn/react-collapse */ "./node_modules/@kunukn/react-collapse/dist/Collapse.umd.js");
/* harmony import */ var _kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      heading = _ref.heading,
      onToggle = _ref.onToggle,
      customWrapperClass = _ref.customWrapperClass,
      _ref$labelColor = _ref.labelColor,
      labelColor = _ref$labelColor === void 0 ? '' : _ref$labelColor;
  var isOpenClass = isOpen ? ' open' : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "accordion ".concat(customWrapperClass || ''),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "accordion__button".concat(isOpenClass).concat(labelColor),
      onClick: onToggle,
      children: heading
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((_kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_1___default()), {
      overflowOnExpanded: true,
      isOpen: isOpen,
      children: children
    })]
  });
};

/***/ }),

/***/ "./resources/js/components/DataTable/BulkActions/BulkActionsSelect.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DataTable/BulkActions/BulkActionsSelect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function BulkActionsSelect(_ref) {
  var bulkActions = _ref.bulkActions,
      selectedRowsEntityIds = _ref.selectedRowsEntityIds,
      dataSize = _ref.dataSize;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(),
      t = _useTranslation.t;

  var options = bulkActions.map(function (row) {
    return {
      label: row.name,
      value: row.name,
      callback: row.callback
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "select-input",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      children: [t('ui.bulk_action'), " - ", selectedRowsEntityIds.length, " / ", dataSize]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: options,
      value: "",
      onChange: function onChange(e) {
        e.callback(selectedRowsEntityIds);
      },
      isMulti: false,
      placeholder: t('ui.select_option'),
      noOptionsMessage: function noOptionsMessage() {
        return t('ui.no_options');
      },
      className: "select-custom-input",
      classNamePrefix: "select",
      isSearchable: false,
      isClearable: false,
      isDisabled: selectedRowsEntityIds.length === 0
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulkActionsSelect);

/***/ }),

/***/ "./resources/js/components/DataTable/Cell/CellParse.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/DataTable/Cell/CellParse.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");


var CellParse = function CellParse(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;

  if (typeof value === 'string') {
    return (0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  }

  return value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CellParse);

/***/ }),

/***/ "./resources/js/components/DataTable/DataTable.js":
/*!********************************************************!*\
  !*** ./resources/js/components/DataTable/DataTable.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./resources/js/components/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var DataTable = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _initialState$pageSiz, _initialState$sortBy, _initialState$hiddenC;

  var columns = _ref.columns,
      fetchUrl = _ref.fetchUrl,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      _ref$globalSearch = _ref.globalSearch,
      globalSearch = _ref$globalSearch === void 0 ? false : _ref$globalSearch,
      _ref$globalDateRangeS = _ref.globalDateRangeSearch,
      globalDateRangeSearch = _ref$globalDateRangeS === void 0 ? false : _ref$globalDateRangeS,
      noDataMessage = _ref.noDataMessage,
      _ref$filterMultipleCo = _ref.filterMultipleColumns,
      filterMultipleColumns = _ref$filterMultipleCo === void 0 ? false : _ref$filterMultipleCo,
      bulkActions = _ref.bulkActions,
      customClass = _ref.customClass,
      _ref$rowProps = _ref.rowProps,
      rowProps = _ref$rowProps === void 0 ? {} : _ref$rowProps;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
      t = _useTranslation.t; // We'll start our table without any data


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      controlledPageCount = _useState6[0],
      setControlledPageCount = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      filteredCount = _useState8[0],
      setFilteredCount = _useState8[1]; // eslint-disable-line


  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      recordsFrom = _useState10[0],
      setRecordFrom = _useState10[1]; // eslint-disable-line


  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      recordsTo = _useState12[0],
      setRecordTo = _useState12[1]; // eslint-disable-line


  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      filterMultipleColumnsValue = _useState14[0],
      setFilterMultipleColumnsValue = _useState14[1];

  var fetchIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedRowsEntityIds = _useState16[0],
      setSelectedRowsEntityIds = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      globalDateRangeFilter = _useState18[0],
      setGlobalDateRangeFilter = _useState18[1];

  var ajaxRequest = null;
  var defaultColumn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      // Let's set up our default Filter UI
      filterComponent: ___WEBPACK_IMPORTED_MODULE_3__.TextColumnFilter,
      Cell: ___WEBPACK_IMPORTED_MODULE_3__.CellParse
    };
  }, []);
  var initialFilters = [];
  columns.forEach(function (c) {
    if (c.filterSettings && c.filterSettings.initialValue) {
      initialFilters.push({
        id: c.id,
        test: 'OK',
        value: c.filterSettings.initialValue
      });
    }
  });

  if (!initialState.hiddenColumns) {
    initialState.hiddenColumns = [];
  }

  var _useTable = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({
    columns: columns,
    data: data,
    defaultColumn: defaultColumn,
    initialState: {
      pageIndex: 0,
      filters: initialFilters,
      pageSize: (_initialState$pageSiz = initialState.pageSize) !== null && _initialState$pageSiz !== void 0 ? _initialState$pageSiz : 10,
      sortBy: (_initialState$sortBy = initialState.sortBy) !== null && _initialState$sortBy !== void 0 ? _initialState$sortBy : [],
      hiddenColumns: (_initialState$hiddenC = initialState.hiddenColumns) !== null && _initialState$hiddenC !== void 0 ? _initialState$hiddenC : [],
      selectedRowIds: {}
    },
    // Pass our hoisted table state
    manualPagination: true,
    // Tell the usePagination
    // hook that we'll handle our own data fetching
    // This means we'll also have to provide our own
    // pageCount.
    pageCount: controlledPageCount,
    manualSortBy: true,
    manualGlobalFilter: true,
    manualFilters: true
  }, react_table__WEBPACK_IMPORTED_MODULE_1__.useGlobalFilter, react_table__WEBPACK_IMPORTED_MODULE_1__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_1__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_1__.usePagination, react_table__WEBPACK_IMPORTED_MODULE_1__.useRowSelect, function (hooks) {
    !!bulkActions && !!bulkActions.length && hooks.visibleColumns.push(function (columns) {
      return [// Let's make a column for selection
      {
        id: 'selection',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: function Header(_ref2) {
          var getToggleAllRowsSelectedProps = _ref2.getToggleAllRowsSelectedProps;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.SelectRowCheckbox, _objectSpread({}, getToggleAllRowsSelectedProps()))
          });
        },
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: function Cell(_ref3) {
          var row = _ref3.row;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.SelectRowCheckbox, _objectSpread({}, row.getToggleRowSelectedProps()))
          });
        }
      }].concat(_toConsumableArray(columns));
    });
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      allColumns = _useTable.allColumns,
      prepareRow = _useTable.prepareRow,
      page = _useTable.page,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      pageCount = _useTable.pageCount,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize,
      sortBy = _useTable$state.sortBy,
      globalFilter = _useTable$state.globalFilter,
      filters = _useTable$state.filters,
      selectedRowIds = _useTable$state.selectedRowIds,
      setGlobalFilter = _useTable.setGlobalFilter,
      setAllFilters = _useTable.setAllFilters;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      reload: function reload() {
        fetchData({
          pageIndex: pageIndex,
          pageSize: pageSize,
          sortBy: sortBy,
          globalFilter: globalFilter,
          filters: filters,
          filterMultipleColumnsValue: filterMultipleColumnsValue
        });
      }
    };
  }); // Listen for changes in selected row

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var selectedRowsIndexes = Object.keys(selectedRowIds);
    var selectedData = data.filter(function (rows, i) {
      return selectedRowsIndexes.includes(i.toString());
    });
    var selectedDataIds = [];

    if (selectedData.length) {
      selectedDataIds = selectedData.map(function (row) {
        return row.id;
      });
    }

    setSelectedRowsEntityIds(selectedDataIds);
  }, [selectedRowIds]); // Listen for changes in and use the state to fetch our new data

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    gotoPage(0);
  }, [globalFilter, filters, filterMultipleColumnsValue, globalDateRangeFilter]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchData({
      pageIndex: pageIndex,
      pageSize: pageSize,
      sortBy: sortBy,
      globalFilter: globalFilter,
      filters: filters,
      filterMultipleColumnsValue: filterMultipleColumnsValue,
      globalDateRangeFilter: globalDateRangeFilter
    });
  }, [pageIndex, pageSize, sortBy, globalFilter, filters, filterMultipleColumnsValue, globalDateRangeFilter]);
  var fetchData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref4) {
    var pageSize = _ref4.pageSize,
        pageIndex = _ref4.pageIndex,
        sortBy = _ref4.sortBy,
        globalFilter = _ref4.globalFilter,
        filters = _ref4.filters,
        filterMultipleColumnsValue = _ref4.filterMultipleColumnsValue,
        globalDateRangeFilter = _ref4.globalDateRangeFilter;
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.
    // Give this fetch an ID
    var fetchId = ++fetchIdRef.current;
    var dataTableColumns = columns.map(function (c) {
      var _c$orderRule, _c$filterRule;

      return {
        id: c.id,
        name: c.name,
        accessor: c.accessor,
        orderable: c.orderable,
        searchable: c.searchable,
        orderRule: (_c$orderRule = c.orderRule) !== null && _c$orderRule !== void 0 ? _c$orderRule : '',
        filterRule: (_c$filterRule = c.filterRule) !== null && _c$filterRule !== void 0 ? _c$filterRule : '',
        search: {
          value: c.search.value,
          regex: c.search.regex
        } // value is '' to reset filter

      };
    }); // Set the loading state

    setLoading(true); // Only update the data if this is the latest fetch

    if (fetchId === fetchIdRef.current) {
      // sort column
      var order = [];
      sortBy.forEach(function (el, i) {
        order[i] = {};
        order[i].column = dataTableColumns.findIndex(function (x) {
          return x.id === el.id;
        }).toString();
        order[i].dir = el.desc ? 'desc' : 'asc';
      }); // filters

      if (filters.length) {
        filters.forEach(function (f) {
          dataTableColumns.forEach(function (c) {
            if (c.id === f.id) {
              c.search.value = f.value ? encodeURIComponent(f.value) : f.value;
            }
          });
        });
      }

      var additionalParams = {};

      if (filterMultipleColumns) {
        additionalParams.multiple_columns = {
          columns: filterMultipleColumns.columns,
          value: filterMultipleColumnsValue ? encodeURIComponent(filterMultipleColumnsValue) : filterMultipleColumnsValue
        };
      }

      if (globalDateRangeFilter) {
        additionalParams.global_date_range = globalDateRangeFilter;

        if (globalDateRangeSearch.params) {
          additionalParams.global_date_range = _objectSpread(_objectSpread({}, additionalParams.global_date_range), globalDateRangeSearch.params);
        }
      }

      var params = _objectSpread({
        draw: fetchId,
        columns: dataTableColumns,
        start: pageIndex * pageSize,
        length: pageSize,
        order: order,
        search: {
          value: globalFilter ? encodeURIComponent(globalFilter) : '',
          regex: 'false'
        }
      }, additionalParams);

      params = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectToQuerystring)(params);

      if (ajaxRequest) {
        ajaxRequest.cancel();
      }

      ajaxRequest = _utils__WEBPACK_IMPORTED_MODULE_2__.api.CancelToken.source();
      _utils__WEBPACK_IMPORTED_MODULE_2__.api.get(fetchUrl + params, {
        cancelToken: ajaxRequest.token
      }).then(function (res) {
        setData(res.data.data); // Your server could send back total page count.
        // For now we'll just fake it, too

        setControlledPageCount(Math.ceil(res.data.recordsFiltered / pageSize));
        setFilteredCount(res.data.recordsFiltered);
        setRecordFrom(pageSize * pageIndex + 1);
        setRecordTo(pageSize * pageIndex + res.data.data.length);
        setLoading(false);
      })["catch"](function (error) {}); // eslint-disable-line
    }
  }, []);

  var getVisiblePages = function getVisiblePages(page, total) {
    if (total < 7) {
      return [1, 2, 3, 4, 5, 6].filter(function (page) {
        return page <= total;
      });
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  }; // Render the UI for your table


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "table-layout-container",
    children: [globalSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.GlobalFilter, {
          globalFilter: globalFilter,
          setGlobalFilter: setGlobalFilter
        })
      })
    }), globalDateRangeSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.GlobalDateRangeFilter, {
        filterValue: globalDateRangeFilter,
        setFilter: setGlobalDateRangeFilter,
        filterSettings: globalDateRangeSearch
      })
    }), (!!headerGroups.filter(function (hg) {
      return hg.headers.filter(function (c) {
        return c.canFilter;
      }).length;
    }).length || filterMultipleColumns) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "row",
      children: [filterMultipleColumns && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "col-md-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.TextColumnFilter, {
          column: {
            Header: filterMultipleColumns.header,
            filterValue: filterMultipleColumnsValue,
            setFilter: setFilterMultipleColumnsValue,
            filterSettings: filterMultipleColumns.filterSettings
          }
        })
      }), allColumns.length && allColumns.map(function (column, i) {
        return column.canFilter && !initialState.hiddenColumns.includes(column.id) || column.forceFilter ? !column.noWrap ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-md-3",
          children: column.render('filterComponent')
        }, "search-column-".concat(i)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: column.render('filterComponent')
        }, "search-column-".concat(i)) : null;
      })]
    }), (!!globalFilter || !!globalDateRangeFilter || !!filters.length || filterMultipleColumnsValue) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
      className: "btn btn-primary-ghost mb-5",
      onClick: function onClick() {
        setGlobalFilter(null);
        setGlobalDateRangeFilter(null);
        setAllFilters([]);
        setFilterMultipleColumnsValue('');
      },
      children: t('ui.reset_filters')
    }), !!bulkActions && !!bulkActions.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "col-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.BulkActionsSelect, {
          bulkActions: bulkActions,
          selectedRowsEntityIds: selectedRowsEntityIds,
          dataSize: data.length
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "table-scroll-wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
        className: "table-layout table-striped ".concat(customClass || '', " ").concat(loading ? 'loading-table-data' : ''),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
          className: "table-layout__header",
          children: headerGroups.map(function (headerGroup, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
              className: "table-layout__header-row",
              children: headerGroup.headers.map(function (column, j) {
                var _column$headerClassNa;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
                  className: "table-layout__header-col ".concat((_column$headerClassNa = column.headerClassName) !== null && _column$headerClassNa !== void 0 ? _column$headerClassNa : ''),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "table-layout__header-col-container",
                    children: [column.render('Header'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "table-layout__header-icon",
                      children: column.isSorted ? column.isSortedDesc ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.IconChevronDown, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.IconChevronUp, {}) : ''
                    })]
                  })
                }), "header-".concat(j));
              })
            }), "header-group-".concat(i));
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
          className: "table-layout__body",
          children: !!pageCount && page.map(function (row, i) {
            prepareRow(row);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
              className: "table-layout__body-row ".concat(rowProps && rowProps.onClick ? 'hover-pointer' : ''),
              onClick: function onClick() {
                return rowProps && rowProps.onClick && rowProps.onClick(row);
              },
              children: row.cells.map(function (cell) {
                var _cell$column$cellClas;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                  className: "table-layout__body-col ".concat((_cell$column$cellClas = cell.column.cellClassName) !== null && _cell$column$cellClas !== void 0 ? _cell$column$cellClas : ''),
                  children: cell.render('Cell')
                }), "cell-".concat(cell.id));
              })
            }), "row-".concat(i));
          })
        }))]
      })), !loading && !pageCount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "table-layout__body-row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "table-layout__body-col text-center",
          children: noDataMessage !== null && noDataMessage !== void 0 ? noDataMessage : t('ui.no_results')
        })
      }), !!loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "table-layout__body-row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "table-layout__body-col text-center",
          children: t('ui.loading')
        })
      })]
    }), !!pageCount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "table-pagination__wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "table-pagination",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          onClick: function onClick() {
            return previousPage();
          },
          disabled: !canPreviousPage,
          className: "table-pagination__directions prev ".concat(canPreviousPage ? '' : 'is-disabled'),
          children: [canPreviousPage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.IconChevronLeft, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: t('ui.previous')
          })]
        }), getVisiblePages(pageIndex, pageCount).map(function (page, index, array) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [page === pageCount && pageCount > 6 && pageIndex < pageCount - 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "table-pagination__button",
              children: "..."
            }, 'prev-pages'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "table-pagination__button ".concat(pageIndex + 1 === page ? 'is-active' : ''),
              onClick: function onClick() {
                return gotoPage(page - 1);
              },
              children: page
            }, index), page === 1 && pageCount > 6 && pageIndex > 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "table-pagination__button",
              children: "..."
            }, 'prev-pages')]
          }, "pagination-".concat(index));
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          onClick: function onClick() {
            return nextPage();
          },
          disabled: !canNextPage,
          className: "table-pagination__directions next ".concat(canNextPage ? '' : 'is-disabled'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: t('ui.next')
          }), canNextPage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.IconChevronRight, {})]
        })]
      })
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTable);

/***/ }),

/***/ "./resources/js/components/DataTable/Filters/AsyncSelectColumnFilter.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/DataTable/Filters/AsyncSelectColumnFilter.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function AsyncSelectColumnFilter(_ref) {
  var _ref$column = _ref.column,
      Header = _ref$column.Header,
      filterValue = _ref$column.filterValue,
      setFilter = _ref$column.setFilter,
      filterSettings = _ref$column.filterSettings;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      fieldSelect = _useState2[0],
      setFieldSelect = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      inputSelect = _useState4[0],
      setInputSelect = _useState4[1];

  var _ref2 = filterSettings !== null && filterSettings !== void 0 ? filterSettings : {},
      _ref2$minSearchLength = _ref2.minSearchLength,
      minSearchLength = _ref2$minSearchLength === void 0 ? 0 : _ref2$minSearchLength,
      fetchUrl = _ref2.fetchUrl,
      isMulti = _ref2.isMulti,
      isClearable = _ref2.isClearable,
      hideSelectedOptions = _ref2.hideSelectedOptions,
      escapeClearsValue = _ref2.escapeClearsValue,
      customHeader = _ref2.customHeader;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    !filterValue && setFieldSelect(null);
  }, [filterValue]);

  var searchFilterOptions = function searchFilterOptions(inputValue, callback) {
    setInputSelect(inputValue);

    if (inputValue.length >= minSearchLength) {
      var params = {
        searchValue: inputValue
      };
      params = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectToQuerystring)(params);
      _utils__WEBPACK_IMPORTED_MODULE_2__.api.get(fetchUrl + params).then(function (res) {
        callback(res.data);
      });
    } else {
      callback(null);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "select-input",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
      children: customHeader ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(customHeader) : Header
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_select_async__WEBPACK_IMPORTED_MODULE_1__["default"], {
      minimumInput: 3,
      loadOptions: function loadOptions(inputValue, callback) {
        return searchFilterOptions(inputValue, callback);
      },
      value: fieldSelect || '',
      onChange: function onChange(e) {
        setFieldSelect(e);
        var value = isMulti ? e ? e.map(function (el) {
          return "^".concat(el.value, "$");
        }).join('|') : null : e ? "^".concat(e.value, "$") : null;
        setFilter(value);
      },
      isMulti: typeof isMulti !== 'undefined' && isMulti,
      placeholder: t('ui.select_option'),
      noOptionsMessage: function noOptionsMessage() {
        return inputSelect.length < minSearchLength ? t('ui.min_chars_search', {
          length: minSearchLength
        }) : t('ui.no_results');
      },
      className: "select-custom-input",
      classNamePrefix: typeof isMulti !== 'undefined' && isMulti ? 'select-multi' : 'select',
      isSearchable: true,
      isClearable: typeof isClearable !== 'undefined' ? isClearable : true,
      hideSelectedOptions: typeof hideSelectedOptions !== 'undefined' ? hideSelectedOptions : false,
      escapeClearsValue: typeof escapeClearsValue !== 'undefined' ? escapeClearsValue : false
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsyncSelectColumnFilter);

/***/ }),

/***/ "./resources/js/components/DataTable/Filters/DatePickerFilter.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/DataTable/Filters/DatePickerFilter.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerFilter": () => (/* binding */ DatePickerFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/en-GB/index.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/fr/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var locale = {
  en: date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_3__["default"],
  fr: date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_4__["default"]
};
(0,react_datepicker__WEBPACK_IMPORTED_MODULE_5__.registerLocale)(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language, locale[i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language]);
var DatePickerFilter = function DatePickerFilter(_ref) {
  var _ref$column = _ref.column,
      Header = _ref$column.Header,
      filterValue = _ref$column.filterValue,
      setFilter = _ref$column.setFilter,
      filterSettings = _ref$column.filterSettings,
      id = _ref$column.id;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _ref2 = filterSettings !== null && filterSettings !== void 0 ? filterSettings : {},
      _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled,
      maxDate = _ref2.maxDate,
      minDate = _ref2.minDate,
      _ref2$isClearable = _ref2.isClearable,
      isClearable = _ref2$isClearable === void 0 ? true : _ref2$isClearable,
      _ref2$showMonthYearPi = _ref2.showMonthYearPicker,
      showMonthYearPicker = _ref2$showMonthYearPi === void 0 ? false : _ref2$showMonthYearPi,
      _ref2$dateFormat = _ref2.dateFormat,
      dateFormat = _ref2$dateFormat === void 0 ? ['dd/MM/yyyy', 'dd-MM-yyyy'] : _ref2$dateFormat,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? null : _ref2$placeholder;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    !filterValue && setDate('');
  }, [filterValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "input-element input-text",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      children: Header
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
      selected: date,
      onChange: function onChange(date) {
        setDate(date);
        setFilter("^".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(date, dateFormat[0]), "$"));
      },
      minDate: minDate,
      maxDate: maxDate,
      locale: i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language,
      showYearDropdown: true,
      showMonthDropdown: true,
      dateFormat: dateFormat,
      isClearable: !isDisabled && isClearable,
      disabled: isDisabled,
      dropdownMode: "select",
      showMonthYearPicker: showMonthYearPicker,
      placeholderText: placeholder !== null && placeholder !== void 0 ? placeholder : t('ui.select_date')
    })]
  });
};

/***/ }),

/***/ "./resources/js/components/DataTable/Filters/DateRangeFilter.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/DataTable/Filters/DateRangeFilter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/en-GB/index.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/fr/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var locale = {
  en: date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_3__["default"],
  fr: date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_4__["default"]
};
(0,react_datepicker__WEBPACK_IMPORTED_MODULE_5__.registerLocale)(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language, locale[i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language]);

function DateRangeFilter(_ref) {
  var _ref$column = _ref.column,
      Header = _ref$column.Header,
      filterValue = _ref$column.filterValue,
      setFilter = _ref$column.setFilter,
      filterSettings = _ref$column.filterSettings,
      id = _ref$column.id;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filterValue === null || filterValue === void 0 ? void 0 : filterValue.startDate),
      _useState2 = _slicedToArray(_useState, 2),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filterValue === null || filterValue === void 0 ? void 0 : filterValue.endDate),
      _useState4 = _slicedToArray(_useState3, 2),
      endDate = _useState4[0],
      setEndDate = _useState4[1];

  var _ref2 = filterSettings !== null && filterSettings !== void 0 ? filterSettings : {},
      labels = _ref2.labels,
      placeholder = _ref2.placeholder;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!filterValue) {
      setStartDate(null);
      setEndDate(null);
    }
  }, [filterValue]);

  var onChangeStartDate = function onChangeStartDate(date) {
    setStartDate(date);

    if (!!endDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(date, endDate)) {
      setEndDate(null);
    }

    if (!!date || !!endDate) {
      setFilter({
        startDate: date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(date, 'yyyy-MM-dd') : '',
        endDate: endDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(endDate, 'yyyy-MM-dd') : ''
      });
    } else {
      setFilter(null);
    }
  };

  var onChangeEndDate = function onChangeEndDate(date) {
    setEndDate(date);

    if (!!date || !!startDate) {
      setFilter({
        startDate: startDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(startDate, 'yyyy-MM-dd') : '',
        endDate: date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(date, 'yyyy-MM-dd') : ''
      });
    } else {
      setFilter(null);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "col-md-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "input-element input-text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          children: labels && labels.startDate ? labels.startDate : t('ui.from')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
            locale: i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language,
            selected: startDate,
            onChange: onChangeStartDate,
            selectsStart: true,
            startDate: startDate,
            endDate: endDate,
            placeholderText: placeholder !== null && placeholder !== void 0 ? placeholder : t('ui.select_date'),
            dateFormat: "dd-MM-yyyy",
            isClearable: true
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "col-md-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "input-element input-text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          htmlFor: "global-search",
          children: labels && labels.endDate ? labels.endDate : t('ui.to')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
            locale: i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language,
            selected: endDate,
            onChange: onChangeEndDate,
            selectsEnd: true,
            startDate: startDate,
            endDate: endDate,
            minDate: startDate,
            placeholderText: placeholder !== null && placeholder !== void 0 ? placeholder : t('ui.select_date'),
            dateFormat: "dd-MM-yyyy",
            isClearable: true
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateRangeFilter);

/***/ }),

/***/ "./resources/js/components/DataTable/Filters/GlobalDateRangeFilter.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DataTable/Filters/GlobalDateRangeFilter.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/en-GB/index.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/fr/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var locale = {
  en: date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_3__["default"],
  fr: date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_4__["default"]
};
(0,react_datepicker__WEBPACK_IMPORTED_MODULE_5__.registerLocale)(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language, locale[i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language]);

function GlobalDateRangeFilter(_ref) {
  var filterValue = _ref.filterValue,
      setFilter = _ref.setFilter,
      filterSettings = _ref.filterSettings;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filterValue === null || filterValue === void 0 ? void 0 : filterValue.startDate),
      _useState2 = _slicedToArray(_useState, 2),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filterValue === null || filterValue === void 0 ? void 0 : filterValue.endDate),
      _useState4 = _slicedToArray(_useState3, 2),
      endDate = _useState4[0],
      setEndDate = _useState4[1];

  var labels = filterSettings.labels;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!filterValue) {
      setStartDate(null);
      setEndDate(null);
    }
  }, [filterValue]);

  var onChangeStartDate = function onChangeStartDate(date) {
    setStartDate(date);

    if (!!endDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(date, endDate)) {
      setEndDate(null);
    }

    if (!!date || !!endDate) {
      setFilter({
        startDate: date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(date, 'yyyy-MM-dd') : '',
        endDate: endDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(endDate, 'yyyy-MM-dd') : ''
      });
    } else {
      setFilter(null);
    }
  };

  var onChangeEndDate = function onChangeEndDate(date) {
    setEndDate(date);

    if (!!date || !!startDate) {
      setFilter({
        startDate: startDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(startDate, 'yyyy-MM-dd') : '',
        endDate: date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(date, 'yyyy-MM-dd') : ''
      });
    } else {
      setFilter(null);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "col-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "input-element input-text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          htmlFor: "global-search",
          children: labels.startDate
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
            locale: i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language,
            selected: startDate,
            onChange: onChangeStartDate,
            selectsStart: true,
            startDate: startDate,
            endDate: endDate,
            dateFormat: "dd-MM-yyyy",
            isClearable: true
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "col-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "input-element input-text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          htmlFor: "global-search",
          children: labels.endDate
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
            locale: i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language,
            selected: endDate,
            onChange: onChangeEndDate,
            selectsEnd: true,
            startDate: startDate,
            endDate: endDate,
            minDate: startDate,
            dateFormat: "dd-MM-yyyy",
            isClearable: true
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalDateRangeFilter);

/***/ }),

/***/ "./resources/js/components/DataTable/Filters/GlobalFilter.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/DataTable/Filters/GlobalFilter.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./resources/js/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // Define a default UI for filtering




function GlobalFilter(_ref) {
  var globalFilter = _ref.globalFilter,
      setGlobalFilter = _ref.setGlobalFilter;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(globalFilter),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _onChange = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useAsyncDebounce)(function (value) {
    setGlobalFilter(value || undefined);
  }, 200);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setValue(globalFilter);
  }, [globalFilter]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "input-element input-text input-search",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
      htmlFor: "global-search",
      children: "Search"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "input-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
        type: "text",
        id: "global-search",
        value: value || '',
        onChange: function onChange(e) {
          setValue(e.target.value);

          _onChange(e.target.value);
        },
        placeholder: "search here..."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.IconSearch, {
        className: "icon-small"
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalFilter);

/***/ }),

/***/ "./resources/js/components/DataTable/Filters/SelectColumnFilter.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/DataTable/Filters/SelectColumnFilter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import Select, { components } from 'react-select'



 // import { IconArrowDown } from '../../Icons'




function SelectColumnFilter(_ref) {
  var _ref$column = _ref.column,
      Header = _ref$column.Header,
      filterValue = _ref$column.filterValue,
      setFilter = _ref$column.setFilter,
      filterSettings = _ref$column.filterSettings;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  var innerValue;

  if (filterSettings.isMulti) {
    innerValue = filterSettings.options.filter(function (o) {
      return filterSettings.initialValue && filterSettings.initialValue.length && filterSettings.initialValue.indexOf(o.value) !== -1;
    });
  } else {
    innerValue = filterSettings.options.filter(function (o) {
      return filterSettings.initialValue === o.value;
    })[0];
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(innerValue),
      _useState2 = _slicedToArray(_useState, 2),
      fieldSelect = _useState2[0],
      setFieldSelect = _useState2[1];

  var _ref2 = filterSettings !== null && filterSettings !== void 0 ? filterSettings : {},
      options = _ref2.options,
      _ref2$isMulti = _ref2.isMulti,
      isMulti = _ref2$isMulti === void 0 ? false : _ref2$isMulti,
      _ref2$isSearchable = _ref2.isSearchable,
      isSearchable = _ref2$isSearchable === void 0 ? false : _ref2$isSearchable,
      _ref2$isClearable = _ref2.isClearable,
      isClearable = _ref2$isClearable === void 0 ? false : _ref2$isClearable,
      _ref2$hideSelectedOpt = _ref2.hideSelectedOptions,
      hideSelectedOptions = _ref2$hideSelectedOpt === void 0 ? false : _ref2$hideSelectedOpt,
      _ref2$escapeClearsVal = _ref2.escapeClearsValue,
      escapeClearsValue = _ref2$escapeClearsVal === void 0 ? false : _ref2$escapeClearsVal,
      customHeader = _ref2.customHeader; // const DropdownIndicator = props => {
  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <IconArrowDown />
  //     </components.DropdownIndicator>
  //   );
  // };


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    !filterValue && setFieldSelect(null);
  }, [filterValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "select-input",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      children: customHeader ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(customHeader) : Header
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: options,
      value: fieldSelect || '',
      onChange: function onChange(e) {
        setFieldSelect(e);
        var value = isMulti ? e ? e.map(function (el) {
          return "^".concat(el.value, "$");
        }).join('|') : null : e ? "^".concat(e.value, "$") : null;
        setFilter(value);
      },
      isMulti: isMulti // components={{ DropdownIndicator }}
      ,
      placeholder: t('ui.select_option'),
      noOptionsMessage: function noOptionsMessage() {
        return t('ui.no_results');
      },
      className: "select-custom-input",
      classNamePrefix: isMulti ? 'select-multi' : 'select',
      isSearchable: isSearchable,
      isClearable: isClearable,
      hideSelectedOptions: hideSelectedOptions,
      escapeClearsValue: escapeClearsValue
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectColumnFilter);

/***/ }),

/***/ "./resources/js/components/DataTable/Filters/TextColumnFilter.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/DataTable/Filters/TextColumnFilter.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function TextColumnFilter(_ref) {
  var _ref$column = _ref.column,
      Header = _ref$column.Header,
      filterValue = _ref$column.filterValue,
      setFilter = _ref$column.setFilter,
      filterSettings = _ref$column.filterSettings,
      id = _ref$column.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filterValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _ref2 = filterSettings !== null && filterSettings !== void 0 ? filterSettings : {},
      _ref2$minSearchLength = _ref2.minSearchLength,
      minSearchLength = _ref2$minSearchLength === void 0 ? 0 : _ref2$minSearchLength,
      customHeader = _ref2.customHeader;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setValue(filterValue);
  }, [filterValue]);

  var _onChange = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useAsyncDebounce)(function (value) {
    if (value.length === 0 || value.length >= minSearchLength) {
      setFilter(value);
    }
  }, 200);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "input-element input-text",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
      htmlFor: "search-".concat(id),
      children: customHeader ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(customHeader) : Header
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "input-container filter-search",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "text",
        id: "search-".concat(id),
        value: value || '',
        onChange: function onChange(e) {
          setValue(e.target.value);

          _onChange(e.target.value);
        },
        placeholder: "Search"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconSearch, {
        className: "icon-search"
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextColumnFilter);

/***/ }),

/***/ "./resources/js/components/DataTable/SelectRows/SelectRowCheckbox.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/DataTable/SelectRows/SelectRowCheckbox.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["indeterminate"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var getId = function getId() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

var SelectRowCheckbox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var indeterminate = _ref.indeterminate,
      rest = _objectWithoutProperties(_ref, _excluded);

  var defaultRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var resolvedRef = ref || defaultRef;
  var uniqueId = getId();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "input-checkbox input-element",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", _objectSpread(_objectSpread({
        type: "checkbox",
        ref: resolvedRef
      }, rest), {}, {
        id: uniqueId
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        htmlFor: uniqueId
      })]
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRowCheckbox);

/***/ }),

/***/ "./resources/js/components/DataTable/index.js":
/*!****************************************************!*\
  !*** ./resources/js/components/DataTable/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSelectColumnFilter": () => (/* reexport safe */ _Filters_AsyncSelectColumnFilter__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "BulkActionsSelect": () => (/* reexport safe */ _BulkActions_BulkActionsSelect__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "CellParse": () => (/* reexport safe */ _Cell_CellParse__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "DataTable": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "DatePickerFilter": () => (/* reexport safe */ _Filters_DatePickerFilter__WEBPACK_IMPORTED_MODULE_10__.DatePickerFilter),
/* harmony export */   "DateRangeFilter": () => (/* reexport safe */ _Filters_DateRangeFilter__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "GlobalDateRangeFilter": () => (/* reexport safe */ _Filters_GlobalDateRangeFilter__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "GlobalFilter": () => (/* reexport safe */ _Filters_GlobalFilter__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "SelectColumnFilter": () => (/* reexport safe */ _Filters_SelectColumnFilter__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "SelectRowCheckbox": () => (/* reexport safe */ _SelectRows_SelectRowCheckbox__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "TextColumnFilter": () => (/* reexport safe */ _Filters_TextColumnFilter__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _DataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable */ "./resources/js/components/DataTable/DataTable.js");
/* harmony import */ var _Filters_SelectColumnFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters/SelectColumnFilter */ "./resources/js/components/DataTable/Filters/SelectColumnFilter.js");
/* harmony import */ var _Filters_AsyncSelectColumnFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filters/AsyncSelectColumnFilter */ "./resources/js/components/DataTable/Filters/AsyncSelectColumnFilter.js");
/* harmony import */ var _Filters_TextColumnFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filters/TextColumnFilter */ "./resources/js/components/DataTable/Filters/TextColumnFilter.js");
/* harmony import */ var _Filters_GlobalDateRangeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filters/GlobalDateRangeFilter */ "./resources/js/components/DataTable/Filters/GlobalDateRangeFilter.js");
/* harmony import */ var _Filters_DateRangeFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Filters/DateRangeFilter */ "./resources/js/components/DataTable/Filters/DateRangeFilter.js");
/* harmony import */ var _Filters_GlobalFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Filters/GlobalFilter */ "./resources/js/components/DataTable/Filters/GlobalFilter.js");
/* harmony import */ var _SelectRows_SelectRowCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectRows/SelectRowCheckbox */ "./resources/js/components/DataTable/SelectRows/SelectRowCheckbox.js");
/* harmony import */ var _BulkActions_BulkActionsSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BulkActions/BulkActionsSelect */ "./resources/js/components/DataTable/BulkActions/BulkActionsSelect.js");
/* harmony import */ var _Cell_CellParse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Cell/CellParse */ "./resources/js/components/DataTable/Cell/CellParse.js");
/* harmony import */ var _Filters_DatePickerFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Filters/DatePickerFilter */ "./resources/js/components/DataTable/Filters/DatePickerFilter.js");













/***/ }),

/***/ "./resources/js/components/Form/FormBuilder.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Form/FormBuilder.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./resources/js/components/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _FormElements_RichTextEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormElements/RichTextEditor */ "./resources/js/components/Form/FormElements/RichTextEditor.js");
/* harmony import */ var _FormElements_MultiDatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormElements/MultiDatepicker */ "./resources/js/components/Form/FormElements/MultiDatepicker.js");
/* harmony import */ var _FormElements_Gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormElements/Gallery */ "./resources/js/components/Form/FormElements/Gallery.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var FormBuilder = function FormBuilder(props) {
  var formData = props.formData,
      _props$useInertia = props.useInertia,
      useInertia = _props$useInertia === void 0 ? true : _props$useInertia,
      _props$validateOnChan = props.validateOnChange,
      validateOnChange = _props$validateOnChan === void 0 ? false : _props$validateOnChan,
      _props$validateOnBlur = props.validateOnBlur,
      validateOnBlur = _props$validateOnBlur === void 0 ? false : _props$validateOnBlur,
      successCallback = props.successCallback,
      errorCallback = props.errorCallback,
      model = props.model,
      _props$showFormError = props.showFormError,
      showFormError = _props$showFormError === void 0 ? true : _props$showFormError,
      _props$showOnly = props.showOnly,
      showOnly = _props$showOnly === void 0 ? false : _props$showOnly;
  var errors = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.usePage)().props.errors;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      errorsFirstLoad = _useState2[0],
      setErrorsFirstLoad = _useState2[1];

  var submitter = useInertia ? _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia : _utils__WEBPACK_IMPORTED_MODULE_2__.api;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var getInitialValues = function getInitialValues() {
    var buildInitialValues = {
      submitAction: ''
    };
    formData.fields.forEach(function (formField) {
      buildInitialValues[formField.name] = formField.value;
    });
    return buildInitialValues;
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialValues()),
      _useState4 = _slicedToArray(_useState3, 2),
      initialValues = _useState4[0],
      setInitialValues = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!!errors && !!Object.keys(errors).length && !errorsFirstLoad) {
      formRef.current.setErrors(errors);
      formRef.current.setSubmitting(false);
    }

    setErrorsFirstLoad(false);
  }, [errors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    formRef.current.setSubmitting(false);
    setInitialValues(getInitialValues());
  }, [model, formData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    innerRef: formRef,
    initialValues: initialValues,
    enableReinitialize: true,
    validate: function validate(values) {
      var _formData$validationM;

      var errors = {};
      var validate = {};
      var rules = {};
      var messages = (_formData$validationM = formData.validationMessages) !== null && _formData$validationM !== void 0 ? _formData$validationM : [];
      var attributeNames = {};
      formData.fields.forEach(function (formField) {
        // don't include text elements
        if (formField.element === ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.TEXT) {
          return;
        } // don't include not visible elements


        if (!!formField.visible && !formField.visible(values)) {
          return;
        }

        validate = _objectSpread(_objectSpread({}, validate), {}, _defineProperty({}, formField.name, typeof values[formField.name] === 'boolean' ? (+values[formField.name]).toString() : values[formField.name]));

        if (typeof formField.rules !== 'undefined' || formField.rules != null) {
          rules = _objectSpread(_objectSpread({}, rules), {}, _defineProperty({}, formField.name, formField.rules));
        }

        attributeNames[formField.name] = formField.attributeName ? formField.attributeName : formField.label ? formField.label : formField.name;
      });
      var validation = new _utils__WEBPACK_IMPORTED_MODULE_2__.Validate(validate, rules, messages);
      validation.setAttributeNames(attributeNames);

      if (validation.fails()) {
        errors = validation.errors.errors;
      }

      return errors;
    },
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting,
          setErrors = _ref.setErrors;
      var data = {
        submitAction: values.submitAction
      };
      formData.fields.forEach(function (formField) {
        // don't include text elements
        if (formField.element === ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.TEXT) {
          return;
        } // don't include not visible elements


        if (!!formField.visible && !formField.visible(values)) {
          return;
        }

        if (typeof values[formField.name] !== 'undefined') {
          data[formField.name] = formField.submitFormat ? formField.submitFormat(values[formField.name]) : values[formField.name];
        }
      });
      var method = formData.form.method;

      if (formData.form.method === 'put') {
        data._method = 'put';
        method = 'post';
      }

      if (formData.form.method === 'delete') {
        data._method = 'delete';
        method = 'post';
      }

      var request = submitter[method](formData.form.url, data);

      if (!useInertia) {
        request.then(function (res) {
          setSubmitting(false);
          !!successCallback && successCallback(res);
        })["catch"](function (error) {
          setSubmitting(false);

          if (error.response.status === 422) {
            setErrors(error.response.data.errors);
          } else {
            if (errorCallback) {
              /**
               * error will be manually handled
               */
              errorCallback(error);
            } else {
              /**
               * default error handle
               */
              if (Object.keys(error.response.data).length === 1) {
                /**
                 * TODO: set other way to check for prod?
                 */
                window.location.replace("/error/".concat(error.response.status));
              } else {
                /**
                 * TODO: set better ui
                 */
                alert(JSON.stringify(error.response.data)); // eslint-disable-line
              }
            }
          }
        });
      }
    },
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur,
    children: function children(_ref2) {
      var _formData$form$class, _formData$buttons$cla, _formData$buttons, _formData$buttons2, _formData$buttons3, _formData$buttons3$su, _formData$buttons$sub, _formData$buttons4, _formData$buttons4$su, _formData$buttons$sub2, _formData$buttons5, _formData$buttons5$su;

      var values = _ref2.values,
          errors = _ref2.errors,
          touched = _ref2.touched,
          handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          handleSubmit = _ref2.handleSubmit,
          isSubmitting = _ref2.isSubmitting,
          setFieldValue = _ref2.setFieldValue;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("form", {
        onSubmit: handleSubmit,
        className: (_formData$form$class = formData.form["class"]) !== null && _formData$form$class !== void 0 ? _formData$form$class : 'form-class',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(___WEBPACK_IMPORTED_MODULE_4__.FieldWrapper, {
          wrapper: formData.form.wrapper,
          children: [
          /*eslint-disable*/
          formData.fields.map(function (formField) {
            var _errors$formField$nam;

            if (formField.visible && !formField.visible(values)) {
              return null;
            }

            switch (formField.element) {
              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.INPUT:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Input, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    var value = e.target.value;
                    setFieldValue(formField.name, value);
                    !!formField.callback && formField.callback(value, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.CHECKBOX:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    var value = e.target.checked;
                    setFieldValue(formField.name, value);
                    !!formField.callback && formField.callback(value, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.RADIO:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Radio, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    var value = e.target.value;
                    setFieldValue(formField.name, value);
                    !!formField.callback && formField.callback(value, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.TEXTAREA:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Textarea, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    var value = e.target.value;
                    setFieldValue(formField.name, value);
                    !!formField.callback && formField.callback(value, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.SELECT:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Select, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.ASYNC_SELECT:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.AsyncSelect, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.SELECT_LARGE_LISTS:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.SelectLargeListLocal, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.TEXT:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Text, {
                  formField: formField
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.DATEPICKER:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Datepicker, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  minDate: formField.minDateElement ? values[formField.minDateElement] : null,
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.MULTI_DATEPICKER:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FormElements_MultiDatepicker__WEBPACK_IMPORTED_MODULE_7__.MultiDatepicker, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.RECAPTCHA:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.ReCaptcha, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: errors[formField.name]
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.IMAGE_DROPZONE:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.ImageDropzone, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.RICH_TEXT_EDITOR:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FormElements_RichTextEditor__WEBPACK_IMPORTED_MODULE_6__.RichTextEditor, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: errors[formField.name],
                  showOnly: showOnly
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.FILE_UPLOAD:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.FileUpload, {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: errors[formField.name]
                }, formField.name);

              case ___WEBPACK_IMPORTED_MODULE_4__.FORM_ELEMENT_TYPES.GALLERY:
                var galleryErrors = (_errors$formField$nam = errors[formField.name]) !== null && _errors$formField$nam !== void 0 ? _errors$formField$nam : [];
                values[formField.name] && values[formField.name].forEach(function (v, i) {
                  var subError = errors["".concat(formField.name, ".").concat(i, ".file")];

                  if (subError) {
                    galleryErrors = galleryErrors.concat(subError.map(function (err) {
                      return "".concat(v.name, " ").concat(err);
                    }));
                  }
                });
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FormElements_Gallery__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  formField: formField,
                  value: values[formField.name],
                  onChange: function onChange(e) {
                    setFieldValue(formField.name, e);
                    !!formField.callback && formField.callback(e, values, setFieldValue);
                  },
                  errors: galleryErrors,
                  showOnly: showOnly
                }, formField.name);
            }
          })
          /* eslint-enable */
          , showFormError && !!errors && !!Object.keys(errors).length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "col-12 mt-lg",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("small", {
              className: "input-error-message text-danger",
              children: t('validation.form_submit_error')
            })
          }), !showOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: (_formData$buttons$cla = (_formData$buttons = formData.buttons) === null || _formData$buttons === void 0 ? void 0 : _formData$buttons["class"]) !== null && _formData$buttons$cla !== void 0 ? _formData$buttons$cla : 'form-footer form-footer-right col-12',
            children: [!!((_formData$buttons2 = formData.buttons) !== null && _formData$buttons2 !== void 0 && _formData$buttons2.additional) && formData.buttons.additional.map(function (btn, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                className: btn["class"],
                type: btn.type,
                disabled: isSubmitting,
                onClick: function onClick() {
                  return btn.onClick && btn.onClick(setFieldValue, formRef);
                },
                children: btn.text
              }, "form-additional-button-".concat(i));
            }), !((_formData$buttons3 = formData.buttons) !== null && _formData$buttons3 !== void 0 && (_formData$buttons3$su = _formData$buttons3.submit) !== null && _formData$buttons3$su !== void 0 && _formData$buttons3$su.hidden) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              className: (_formData$buttons$sub = (_formData$buttons4 = formData.buttons) === null || _formData$buttons4 === void 0 ? void 0 : (_formData$buttons4$su = _formData$buttons4.submit) === null || _formData$buttons4$su === void 0 ? void 0 : _formData$buttons4$su["class"]) !== null && _formData$buttons$sub !== void 0 ? _formData$buttons$sub : 'btn btn-primary',
              type: "submit",
              disabled: isSubmitting,
              onClick: function onClick(e) {
                setFieldValue('submitAction', '');
              },
              children: (_formData$buttons$sub2 = (_formData$buttons5 = formData.buttons) === null || _formData$buttons5 === void 0 ? void 0 : (_formData$buttons5$su = _formData$buttons5.submit) === null || _formData$buttons5$su === void 0 ? void 0 : _formData$buttons5$su.text) !== null && _formData$buttons$sub2 !== void 0 ? _formData$buttons$sub2 : t('ui.submit')
            })]
          })]
        })
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBuilder);

/***/ }),

/***/ "./resources/js/components/Form/FormElements/AsyncSelect.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/AsyncSelect.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSelect": () => (/* binding */ AsyncSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var AsyncSelect = function AsyncSelect(_ref) {
  var _formField$fetchOnOpe2;

  var formField = _ref.formField,
      value = _ref.value,
      _onChange = _ref.onChange,
      errors = _ref.errors,
      showOnly = _ref.showOnly;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(),
      t = _useTranslation.t;

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_3__.FieldWrapper, {
      wrapper: formField.wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "field-wrapper-selector input-element",
        children: [formField.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          htmlFor: formField.name,
          children: formField.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: value !== null && value !== void 0 ? value : ''
        })]
      })
    });
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      fieldSelect = _useState2[0],
      setFieldSelect = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      inputSelect = _useState4[0],
      setInputSelect = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var params = {
      selectedValues: value
    };
    params = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectToQuerystring)(params);
    _utils__WEBPACK_IMPORTED_MODULE_2__.api.get(fetchUrl + params).then(function (res) {
      if (formField.isMulti) {
        setFieldSelect(res.data);
      } else {
        setFieldSelect(res.data[0]);
      }
    });
  }, [value]);
  var _formField$minSearchL = formField.minSearchLength,
      minSearchLength = _formField$minSearchL === void 0 ? 0 : _formField$minSearchL,
      fetchUrl = formField.fetchUrl,
      wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      _formField$isMulti = formField.isMulti,
      isMulti = _formField$isMulti === void 0 ? false : _formField$isMulti,
      _formField$isClearabl = formField.isClearable,
      isClearable = _formField$isClearabl === void 0 ? false : _formField$isClearabl,
      _formField$hideSelect = formField.hideSelectedOptions,
      hideSelectedOptions = _formField$hideSelect === void 0 ? true : _formField$hideSelect,
      _formField$escapeClea = formField.escapeClearsValue,
      escapeClearsValue = _formField$escapeClea === void 0 ? false : _formField$escapeClea,
      _formField$isDisabled = formField.isDisabled,
      isDisabled = _formField$isDisabled === void 0 ? false : _formField$isDisabled,
      rules = formField.rules,
      _formField$fetchOnOpe = formField.fetchOnOpen,
      fetchOnOpen = _formField$fetchOnOpe === void 0 ? (_formField$fetchOnOpe2 = formField.fetchOnOpen) !== null && _formField$fetchOnOpe2 !== void 0 ? _formField$fetchOnOpe2 : false : _formField$fetchOnOpe;
  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isRequiredFromRules)(rules);

  var searchFilterOptions = function searchFilterOptions(inputValue, callback) {
    setInputSelect(inputValue);

    if (inputValue.length >= minSearchLength) {
      var params = {
        searchValue: inputValue
      };
      params = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectToQuerystring)(params);
      _utils__WEBPACK_IMPORTED_MODULE_2__.api.get(fetchUrl + params).then(function (res) {
        callback(res.data);
      });
    } else {
      callback(null);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_3__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "select-input",
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_select_async__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ref: ref,
        onMenuOpen: function onMenuOpen() {
          return fetchOnOpen && ref.current.handleInputChange(' ');
        },
        minimumInput: minSearchLength,
        loadOptions: function loadOptions(inputValue, callback) {
          return searchFilterOptions(inputValue, callback);
        },
        value: fieldSelect || '',
        onChange: function onChange(e) {
          setFieldSelect(e);
          var value = isMulti ? e ? e.map(function (el) {
            return el.value;
          }) : null : e ? e.value : null;

          _onChange(value);
        },
        isMulti: isMulti,
        isClearable: isClearable,
        placeholder: t('ui.select_option'),
        noOptionsMessage: function noOptionsMessage() {
          return inputSelect.length < minSearchLength ? t('ui.min_chars_search', {
            length: minSearchLength
          }) : t('ui.no_results');
        },
        name: name,
        className: "select-custom-input",
        classNamePrefix: isMulti ? 'select-multi' : 'select',
        isSearchable: true,
        hideSelectedOptions: hideSelectedOptions,
        escapeClearsValue: escapeClearsValue,
        isDisabled: isDisabled
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_4__.FieldError, {
        errors: errors
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/Checkbox.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/Checkbox.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Checkbox = function Checkbox(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      onChange = _ref.onChange,
      errors = _ref.errors,
      showOnly = _ref.showOnly,
      onParentClick = _ref.onParentClick;
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      readOnly = formField.readOnly;

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {
      wrapper: wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "field-wrapper-selector input-element",
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          htmlFor: name,
          children: label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: value !== null && value !== void 0 ? value : ''
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "input-checkbox input-element",
      onClick: onParentClick,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "input-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          type: "checkbox",
          value: value !== null && value !== void 0 ? value : false,
          name: name,
          id: name,
          onChange: onChange // defaultChecked={value}
          ,
          checked: value !== null && value !== void 0 ? value : false,
          disabled: readOnly
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          htmlFor: name,
          children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(label)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_3__.FieldError, {
        errors: errors
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/Datepicker.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/Datepicker.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Datepicker": () => (/* binding */ Datepicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/en-GB/index.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/fr/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var locale = {
  en: date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_6__["default"],
  fr: date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_7__["default"]
};
(0,react_datepicker__WEBPACK_IMPORTED_MODULE_8__.registerLocale)(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language, locale[i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language]);
var Datepicker = function Datepicker(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      _onChange = _ref.onChange,
      errors = _ref.errors,
      minDate = _ref.minDate,
      showOnly = _ref.showOnly;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)(),
      t = _useTranslation.t;

  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      _formField$isDisabled = formField.isDisabled,
      isDisabled = _formField$isDisabled === void 0 ? false : _formField$isDisabled,
      maxDate = formField.maxDate,
      _formField$isClearabl = formField.isClearable,
      isClearable = _formField$isClearabl === void 0 ? true : _formField$isClearabl,
      rules = formField.rules,
      _formField$showMonthY = formField.showMonthYearPicker,
      showMonthYearPicker = _formField$showMonthY === void 0 ? false : _formField$showMonthY,
      _formField$dateFormat = formField.dateFormat,
      dateFormat = _formField$dateFormat === void 0 ? ['dd/MM/yyyy', 'dd-MM-yyyy'] : _formField$dateFormat,
      _formField$placeholde = formField.placeholder,
      placeholder = _formField$placeholde === void 0 ? null : _formField$placeholde,
      _formField$excludeDat = formField.excludeDates,
      excludeDates = _formField$excludeDat === void 0 ? null : _formField$excludeDat,
      _formField$includeDat = formField.includeDates,
      includeDates = _formField$includeDat === void 0 ? null : _formField$includeDat,
      _formField$showYearPi = formField.showYearPicker,
      showYearPicker = _formField$showYearPi === void 0 ? false : _formField$showYearPi,
      showTimeSelect = formField.showTimeSelect,
      showTimeSelectOnly = formField.showTimeSelectOnly,
      timeIntervals = formField.timeIntervals,
      timeCaption = formField.timeCaption;
  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isRequiredFromRules)(rules);

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {
      wrapper: wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "input-element input-text",
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          htmlFor: name,
          children: label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: value !== null && value !== void 0 ? value : ''
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "form-field input-element ".concat(!!errors && !!errors.length ? 'has-errors' : ''),
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), {
        selected: value,
        onChange: function onChange(date) {
          _onChange(date);
        },
        minDate: minDate || formField.minDate,
        maxDate: maxDate,
        locale: i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language,
        showYearDropdown: true,
        showMonthDropdown: true,
        dateFormat: dateFormat,
        isClearable: !isDisabled && isClearable,
        disabled: isDisabled,
        dropdownMode: "select",
        showMonthYearPicker: showMonthYearPicker,
        placeholderText: placeholder !== null && placeholder !== void 0 ? placeholder : t('ui.select_date'),
        excludeDates: excludeDates,
        includeDates: includeDates,
        showYearPicker: showYearPicker,
        showTimeSelect: showTimeSelect,
        showTimeSelectOnly: showTimeSelectOnly,
        timeIntervals: timeIntervals,
        timeCaption: timeCaption
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_3__.FieldError, {
        errors: errors
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/FieldError.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/FieldError.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldError": () => (/* binding */ FieldError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var FieldError = function FieldError(_ref) {
  var errors = _ref.errors,
      customMessage = _ref.customMessage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: errors && errors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
      className: "input-error-message text-danger",
      children: customMessage || (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(errors.join(' '))
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/FieldWrapper.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/FieldWrapper.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldWrapper": () => (/* binding */ FieldWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var FieldWrapper = function FieldWrapper(props) {
  var wrapper = props.wrapper,
      children = props.children;

  if (typeof wrapper !== 'undefined' || wrapper != null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(wrapper.element, {
      className: wrapper["class"]
    }, children);
  }

  return children;
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/FileUpload.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/FileUpload.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUpload": () => (/* binding */ FileUpload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var FileUpload = function FileUpload(_ref) {
  var formField = _ref.formField,
      errors = _ref.errors,
      onChange = _ref.onChange,
      value = _ref.value;
  var wrapper = formField.wrapper,
      name = formField.name,
      label = formField.label,
      description = formField.description,
      rules = formField.rules,
      accept = formField.accept;
  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (acceptedFiles) {
    onChange(acceptedFiles[0]);
  }, []);

  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_6__.useDropzone)({
    onDrop: onDrop,
    multiple: false,
    maxSize: 2097152,
    accept: accept
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isRequiredFromRules)(rules);

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "dropzone-upload-image",
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
        className: "dropzone",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", _objectSpread({}, getInputProps())), isDragActive && isDragAccept && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: t('ui.drop_files_here')
        }), isDragActive && isDragReject && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: t('ui.file_not_allowed')
        }), !isDragActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_4__.IconUpload, {
            className: "icon-upload"
          }), value ? value.name : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "dropzone-text-b",
            children: t('ui.image_dropzone_placeholder')
          })]
        })]
      }))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_3__.FieldError, {
      errors: errors
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "description",
      children: description
    })]
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/Gallery.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/Gallery.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-upload-gallery */ "./node_modules/react-upload-gallery/dist/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./resources/js/components/Form/index.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Gallery = function Gallery(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      _onChange = _ref.onChange,
      errors = _ref.errors,
      showOnly = _ref.showOnly;
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      rules = formField.rules;
  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isRequiredFromRules)(rules);

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {
      wrapper: wrapper,
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
        htmlFor: name,
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "rug",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "rug-items __card",
          children: value.map(function (img, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "rug-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "rug-card ",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "rug-card-name",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      children: img.name
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "rug-card-image",
                    style: {
                      backgroundImage: "url(".concat(img.source, ")")
                    }
                  })]
                })
              })
            }, "rug-card-item-".concat(i));
          })
        })
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {
    wrapper: wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "col-md-6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_upload_gallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
      action: null,
      autoUpload: false,
      initialState: value,
      inOrder: true,
      header: function header(_ref2) {
        var openDialogue = _ref2.openDialogue;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_upload_gallery__WEBPACK_IMPORTED_MODULE_1__.DropArea, {
          children: function children(isDrag) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "form-group",
              children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                htmlFor: name,
                children: [label, " ", isRequired ? '*' : '']
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "input-file",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "input-file-placeholder",
                  children: "S\xE9lectionner une image"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  type: "button",
                  className: "btn-tertiary",
                  onClick: openDialogue,
                  children: "Parcourir"
                })]
              })]
            });
          }
        });
      },
      onChange: function onChange(images) {
        images.forEach(function (img, i) {
          img.done = true;
          img.order = i;
        });

        _onChange(images);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_3__.FieldError, {
      errors: errors
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

/***/ }),

/***/ "./resources/js/components/Form/FormElements/ImageDropzone.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/ImageDropzone.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageDropzone": () => (/* binding */ ImageDropzone)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ImageDropzone = function ImageDropzone(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      onChange = _ref.onChange,
      errors = _ref.errors,
      showOnly = _ref.showOnly,
      onDropRejectedCallback = _ref.onDropRejectedCallback;
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      initialValue = formField.initialValue;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    backgroundImage: initialValue ? "url(\"".concat(initialValue, "\")") : 'none'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dropZoneStyle = _useState2[0],
      setDropZoneStyle = _useState2[1];

  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (acceptedFiles) {
    setDropZoneStyle({
      backgroundImage: acceptedFiles.length ? "url(".concat(URL.createObjectURL(acceptedFiles[0]), ")") : 'none'
    });
    onChange(acceptedFiles[0]);
  }, []);

  var onDropRejected = function onDropRejected(files) {
    var image = files[0];
    var errors = {};

    if (image.errors[0].code === 'file-invalid-type') {
      errors[name] = [t('ui.file_not_allowed')];
    }

    if (image.errors[0].code === 'file-too-large') {
      errors[name] = [t('ui.max_file_size')];
    }

    onDropRejectedCallback(errors);
  };

  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_6__.useDropzone)({
    onDrop: onDrop,
    onDropRejected: onDropRejected,
    multiple: false,
    maxSize: 2097152,
    accept: 'image/jpeg,image/png,image/gif'
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
      wrapper: wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "field-wrapper-selector input-element",
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          htmlFor: name,
          children: label
        }), initialValue ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          className: "full-width-profile-picture",
          src: initialValue,
          alt: name
        }) : '/']
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "dropzone-upload-image",
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
        htmlFor: name,
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
        className: "dropzone",
        style: dropZoneStyle,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread({}, getInputProps())), isDragActive && isDragAccept && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: t('ui.drop_files_here')
        }), isDragActive && isDragReject && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: t('ui.file_not_allowed')
        }), !isDragActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_3__.IconUpload, {
            className: "icon-upload"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "dropzone-text-b",
            children: t('ui.image_dropzone_placeholder')
          })]
        })]
      }))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
      errors: errors
    })]
  });
}; // export class ImageDropzone extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.onDrop = (files) => {
//             this.setState({
//                 files: files,
//                 bgImg: files.length ? `url(${URL.createObjectURL(files[0])})` : 'none'
//             });
//
//             props.onChange(files, props.formField.name);
//         };
//
//         this.state = {
//             files: [],
//             bgImg: props.formField.value ? `url("${props.formField.value}")` : 'none'
//         };
//     }
//
//     render() {
//         const { files, bgImg } = this.state;
//         const {formField, options, onChange, hasErrors, errors} = this.props;
//
//         // const thumbs = files.map(file => (
//         //     <div style={thumb} key={file.name}>
//         //         <div style={thumbInner}>
//         //             <img
//         //                 src={URL.createObjectURL(file)}
//         //                 style={img}
//         //                 alt={file.name}
//         //             />
//         //         </div>
//         //     </div>
//         // ));
//
//         const dropzone = {
//             backgroundImage: bgImg
//         };
//
//         return (
//             <FieldWrapper wrapper={formField.wrapper}>
//                 {formField.label &&
//                     <label htmlFor={formField.name}>{formField.label}</label>
//                 }
//
//                 <Dropzone
//                     accept="image/jpeg,image/png,image/bmp,image/gif"
//                     onDrop={this.onDrop}
//                     multiple={false}
//                 >
//                     {
//                         ({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => {
//                             let placeholder = <div className="dropzone-placeholder">
//                                 <p>Drag your picture here or</p>
//                                 <button className="btn-upload" type="button">{<IconUpload />}Upload</button>
//                             </div>;
//
//                             if (isDragAccept) {
//                                 placeholder = <p className="text-success">Drop file here :)</p>;
//                             }
//
//                             if (isDragReject) {
//                                 placeholder = <p className="text-danger">File not allowed!</p>
//                             }
//
//                             return (
//                                 <div {...getRootProps({className: 'dropzone'})} style={dropzone}>
//                                     <input {...getInputProps()} name={formField.name}/>
//                                     {placeholder}
//                                 </div>
//                             )
//                         }
//                     }
//                 </Dropzone>
//
//                 <FieldError name={formField.name} hasErrors={hasErrors} errors={errors}/>
//             </FieldWrapper>
//         );
//     }
// }

/***/ }),

/***/ "./resources/js/components/Form/FormElements/Input.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/Input.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./resources/js/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Input = function Input(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      onChange = _ref.onChange,
      errors = _ref.errors,
      showOnly = _ref.showOnly,
      onKeyUp = _ref.onKeyUp;
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      readOnly = formField.readOnly,
      isDisabled = formField.isDisabled,
      type = formField.type,
      min = formField.min,
      max = formField.max,
      step = formField.step,
      accept = formField.accept,
      placeholder = formField.placeholder,
      description = formField.description,
      rules = formField.rules;

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
      wrapper: wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "field-wrapper-selector input-element",
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          htmlFor: name,
          children: label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: value !== null && value !== void 0 ? value : ''
        })]
      })
    });
  }

  if (type === 'hidden') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
      wrapper: wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "field-wrapper-selector input-element ".concat(!!errors && !!errors.length ? 'has-errors' : ''),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "hidden",
          value: value !== null && value !== void 0 ? value : '',
          name: name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
          errors: errors
        })]
      })
    });
  }

  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isRequiredFromRules)(rules);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      passwordShown = _React$useState2[0],
      setPasswordShown = _React$useState2[1];

  var togglePasswordVisibility = function togglePasswordVisibility() {
    setPasswordShown(!passwordShown);
  };

  if (type === 'password') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
      wrapper: wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "field-wrapper-selector input-element ".concat(!!errors && !!errors.length ? 'has-errors' : ''),
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
          htmlFor: name,
          children: [label, " ", isRequired ? '*' : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "pass-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            id: name,
            type: passwordShown ? 'text' : 'password',
            min: min,
            max: max,
            value: value !== null && value !== void 0 ? value : '',
            name: name,
            accept: accept,
            placeholder: placeholder,
            readOnly: readOnly,
            onChange: onChange,
            disabled: isDisabled
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("i", {
            onClick: togglePasswordVisibility,
            children: [" ", passwordShown ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.IconEyeVisibility, {
              className: "fill-current input-width-25"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.IconEyeVisibilityOff, {
              className: "fill-current input-width-25"
            }), " "]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
          errors: errors
        }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "description",
          children: description
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "field-wrapper-selector input-element ".concat(!!errors && !!errors.length ? 'has-errors' : '', " ").concat(type === 'search' ? 'input-search' : ''),
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        id: name,
        type: type,
        min: min,
        max: max,
        value: value !== null && value !== void 0 ? value : '',
        name: name,
        step: step,
        accept: accept,
        placeholder: placeholder,
        readOnly: readOnly,
        onChange: onChange,
        disabled: isDisabled,
        onKeyUp: onKeyUp
      }), type === 'search' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.IconSearch, {}), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "description",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
        errors: errors
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/MultiDatepicker.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/MultiDatepicker.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDatepicker": () => (/* binding */ MultiDatepicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-date-picker */ "./node_modules/react-multi-date-picker/build/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_date_object_locales_gregorian_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-date-object/locales/gregorian_en */ "./node_modules/react-date-object/locales/gregorian_en.js");
/* harmony import */ var react_date_object_locales_gregorian_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_date_object_locales_gregorian_en__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_multi_date_picker_plugins_date_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-multi-date-picker/plugins/date_panel */ "./node_modules/react-multi-date-picker/plugins/date_panel.js");
/* harmony import */ var _Utils_MultiDatePickerLocales_gregorian_fr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils/MultiDatePickerLocales/gregorian_fr */ "./resources/js/components/Form/Utils/MultiDatePickerLocales/gregorian_fr.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var locale = {
  en: (react_date_object_locales_gregorian_en__WEBPACK_IMPORTED_MODULE_6___default()),
  fr: _Utils_MultiDatePickerLocales_gregorian_fr__WEBPACK_IMPORTED_MODULE_8__["default"]
};
var MultiDatepicker = function MultiDatepicker(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      _onChange = _ref.onChange,
      errors = _ref.errors,
      showOnly = _ref.showOnly;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)(),
      t = _useTranslation.t; // const [date, setDate] = useState(value)


  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      rules = formField.rules,
      _formField$dateFormat = formField.dateFormat,
      dateFormat = _formField$dateFormat === void 0 ? 'DD/MM/YYYY' : _formField$dateFormat,
      _formField$onlyMonthP = formField.onlyMonthPicker,
      onlyMonthPicker = _formField$onlyMonthP === void 0 ? false : _formField$onlyMonthP;
  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isRequiredFromRules)(rules);

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_3__.FieldWrapper, {
      wrapper: wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "field-wrapper-selector input-element",
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
          htmlFor: name,
          children: label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          children: value !== null && value !== void 0 ? value : ''
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_3__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "input-element input-text ".concat(!!errors && !!errors.length ? 'has-errors' : ''),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_4__.FieldError, {
        errors: errors
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
        multiple: true,
        value: value,
        onChange: function onChange(date) {
          var formatDates = date.map(function (value) {
            return new Date(value);
          });

          _onChange(formatDates);
        },
        locale: locale[i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language],
        onlyMonthPicker: onlyMonthPicker,
        plugins: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_multi_date_picker_plugins_date_panel__WEBPACK_IMPORTED_MODULE_7__["default"], {
          position: "right",
          header: t('ui.dates')
        }) // eslint-disable-line
        ],
        format: dateFormat
      }), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/MultiFileUpload.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/MultiFileUpload.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFileUpload": () => (/* binding */ MultiFileUpload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var MultiFileUpload = function MultiFileUpload(_ref) {
  var _errors$files;

  var formField = _ref.formField,
      errors = _ref.errors,
      _onChange = _ref.onChange,
      value = _ref.value;
  var wrapper = formField.wrapper,
      name = formField.name,
      type = formField.type,
      label = formField.label,
      description = formField.description,
      rules = formField.rules,
      _formField$isMulti = formField.isMulti,
      isMulti = _formField$isMulti === void 0 ? true : _formField$isMulti;
  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (acceptedFiles) {
    _onChange(acceptedFiles);
  }, []);

  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_6__.useDropzone)({
    onDrop: onDrop,
    multiple: true,
    maxSize: 2097152,
    accept: 'image/jpeg,image/png,image/gif,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isRequiredFromRules)(rules);

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "dropzone-upload-image",
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
        className: "dropzone",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", _objectSpread(_objectSpread({}, getInputProps()), {}, {
          type: type,
          multiple: isMulti,
          name: name,
          onChange: function onChange(e) {
            return _onChange(e.target.files);
          }
        })), isDragActive && isDragAccept && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: t('ui.drop_files_here')
        }), isDragActive && isDragReject && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: t('ui.file_not_allowed')
        }), !isDragActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_4__.IconUpload, {
            className: "icon-upload"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "dropzone-text-b",
            children: t('ui.image_dropzone_placeholder')
          })]
        })]
      }))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_3__.FieldError, {
      errors: errors
    }), value && Object.values(value).map(function (file, i) {
      var _errors$;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "message message-success categories-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "word-break-all",
            children: file.name
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
          className: "input-error-message text-danger",
          children: (_errors$ = errors["files.".concat(i)]) !== null && _errors$ !== void 0 ? _errors$ : ''
        })]
      }, 'file_' + i);
    }), errors.files && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
      className: "input-error-message text-danger",
      children: (_errors$files = errors.files) !== null && _errors$files !== void 0 ? _errors$files : ''
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "description",
      children: description
    })]
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/Radio.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/Radio.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Radio": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Radio = function Radio(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      onChange = _ref.onChange,
      errors = _ref.errors;
  var selectedOption = value !== null && value !== void 0 ? value : '';
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      options = formField.options,
      isDisabled = formField.isDisabled,
      rules = formField.rules;
  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isRequiredFromRules)(rules);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "input-element input-radio",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
        errors: errors
      }), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
        children: [label, " ", isRequired ? '*' : '']
      }), options.map(function (_ref2) {
        var value = _ref2.value,
            label = _ref2.label;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "input-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "radio",
            id: "".concat(name, "-radio-input-").concat(value),
            value: value.toString(),
            name: name,
            onChange: onChange,
            checked: selectedOption && selectedOption.toString() === value.toString(),
            disabled: isDisabled
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
            htmlFor: "".concat(name, "-radio-input-").concat(value),
            children: label
          }, value)]
        }, "".concat(name, "-radio-input-").concat(value));
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/ReCaptcha.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/ReCaptcha.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReCaptcha": () => (/* binding */ ReCaptcha)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var reaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reaptcha */ "./node_modules/reaptcha/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var ReCaptcha = function ReCaptcha(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      onChange = _ref.onChange,
      errors = _ref.errors;
  var wrapper = formField.wrapper;
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props,
      recaptchaSiteKey = _usePage$props.recaptchaSiteKey,
      app = _usePage$props.app;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [recaptchaSiteKey && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(reaptcha__WEBPACK_IMPORTED_MODULE_4__["default"], {
        sitekey: recaptchaSiteKey,
        onVerify: function onVerify(e) {
          return onChange(e);
        },
        hl: app.locale
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
        errors: errors
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/RichTextEditor.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/RichTextEditor.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichTextEditor": () => (/* binding */ RichTextEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js-export-html */ "./node_modules/draft-js-export-html/esm/main.js");
/* harmony import */ var draft_js_import_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! draft-js-import-html */ "./node_modules/draft-js-import-html/esm/main.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var RichTextEditor = function RichTextEditor(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      onChange = _ref.onChange,
      errors = _ref.errors;
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      readOnly = formField.readOnly,
      rules = formField.rules,
      description = formField.description;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(function () {
    var _value;

    return draft_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.createWithContent((0,draft_js_import_html__WEBPACK_IMPORTED_MODULE_5__.stateFromHTML)((_value = value) !== null && _value !== void 0 ? _value : ''));
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      editorState = _React$useState2[0],
      setEditorState = _React$useState2[1];

  var handleOnChange = function handleOnChange(editorState) {
    setEditorState(editorState);
    value = editorState.getCurrentContent().hasText() ? (0,draft_js_export_html__WEBPACK_IMPORTED_MODULE_4__.stateToHTML)(editorState.getCurrentContent()) : '';
    onChange(value);
  };

  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isRequiredFromRules)(rules);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "input-element",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "input-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
          errors: errors
        }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          className: "description",
          children: description
        }), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
          htmlFor: name,
          children: [label, " ", isRequired ? '*' : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_6__.Editor, {
          editorState: editorState,
          onEditorStateChange: handleOnChange,
          readOnly: readOnly,
          toolbar: {
            options: ['inline', 'list', 'textAlign'],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough']
            },
            textAlign: {
              options: ['left', 'center', 'right', 'justify']
            },
            list: {
              options: ['unordered', 'ordered']
            }
          }
        })]
      })
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/Select.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/Select.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../index */ "./resources/js/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Select = function Select(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      _onChange = _ref.onChange,
      errors = _ref.errors,
      showOnly = _ref.showOnly;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
      t = _useTranslation.t;

  var customStyle = {
    menu: function menu(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        zIndex: 9999,
        marginTop: '0px',
        position: 'absolute',
        bottom: '0',
        backgroundColor: 'white'
      });
    },
    menuList: function menuList(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        backgroundColor: 'white',
        marginBottom: '-10px',
        bottom: '10px',
        borderRadius: '0px',
        border: '2px solid #C9CBCE',
        borderTop: 'none'
      });
    }
  };

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
      wrapper: formField.wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "field-wrapper-selector input-element",
        children: [formField.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
          htmlFor: formField.name,
          children: formField.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: value !== null && value !== void 0 ? value : ''
        })]
      })
    });
  }

  var innerValue;

  if (formField.isMulti) {
    innerValue = formField.options.filter(function (o) {
      return value && value.length && value.indexOf(o.value) !== -1;
    });
  } else {
    innerValue = formField.options.filter(function (o) {
      return value === o.value;
    })[0];
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(innerValue),
      _useState2 = _slicedToArray(_useState, 2),
      fieldSelect = _useState2[0],
      setFieldSelect = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (value !== innerValue) {
      if (formField.isMulti) {
        innerValue = formField.options.filter(function (o) {
          return value && value.length && value.indexOf(o.value) !== -1;
        });
      } else {
        var temp = formField.options.filter(function (o) {
          return value === o.value;
        });
        innerValue = temp || null;
      }

      setFieldSelect(innerValue);
    }
  }, [value]);
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      options = formField.options,
      _formField$isMulti = formField.isMulti,
      isMulti = _formField$isMulti === void 0 ? false : _formField$isMulti,
      _formField$isSearchab = formField.isSearchable,
      isSearchable = _formField$isSearchab === void 0 ? false : _formField$isSearchab,
      _formField$isClearabl = formField.isClearable,
      isClearable = _formField$isClearabl === void 0 ? false : _formField$isClearabl,
      _formField$hideSelect = formField.hideSelectedOptions,
      hideSelectedOptions = _formField$hideSelect === void 0 ? false : _formField$hideSelect,
      _formField$escapeClea = formField.escapeClearsValue,
      escapeClearsValue = _formField$escapeClea === void 0 ? false : _formField$escapeClea,
      createAction = formField.createAction,
      editAction = formField.editAction,
      showCustomValue = formField.showCustomValue,
      _formField$isDisabled = formField.isDisabled,
      isDisabled = _formField$isDisabled === void 0 ? false : _formField$isDisabled,
      description = formField.description,
      rules = formField.rules,
      menuPortalTarget = formField.menuPortalTarget,
      _formField$minSearchL = formField.minSearchLength,
      minSearchLength = _formField$minSearchL === void 0 ? 0 : _formField$minSearchL;

  var filterOption = function filterOption(candidate, input) {
    return (// Min input length
      input.length >= minSearchLength && // Use Select's default filtering for string matching by creating filter
      (0,react_select__WEBPACK_IMPORTED_MODULE_8__.c)({})(candidate, input)
    );
  };

  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isRequiredFromRules)(rules);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "select-input input-element ".concat(!!errors && !!errors.length ? 'has-errors' : ''),
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: fieldSelect,
        filterOption: filterOption,
        menuPortalTarget: menuPortalTarget || false,
        styles: menuPortalTarget && customStyle,
        onChange: function onChange(e) {
          // setFieldSelect(e)
          var value = isMulti ? e ? e.map(function (el) {
            return el.value;
          }) : null : e ? e.value : null;

          _onChange(value);
        },
        options: options,
        isMulti: isMulti,
        isClearable: isClearable,
        placeholder: t('ui.select_option'),
        noOptionsMessage: function noOptionsMessage() {
          return t('ui.no_results');
        },
        name: name,
        className: "select-custom-input ".concat(menuPortalTarget && 'body-parent-dropdown'),
        classNamePrefix: isMulti ? 'select-multi' : 'select',
        isSearchable: isSearchable,
        hideSelectedOptions: hideSelectedOptions,
        escapeClearsValue: escapeClearsValue,
        isDisabled: isDisabled
      }), createAction && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "btn-select-action__wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_index__WEBPACK_IMPORTED_MODULE_5__.ReactTooltip, {
          content: createAction.tooltip,
          placement: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_3__.Link, {
            href: createAction.link,
            className: "btn-select-action",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_4__.IconToolsAdd, {})
          })
        })
      }), editAction && !isMulti && fieldSelect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "btn-select-action__wrap btn-select-action__wrap-edit",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_index__WEBPACK_IMPORTED_MODULE_5__.ReactTooltip, {
          content: editAction.tooltip,
          placement: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_3__.Link, {
            href: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.route)(editAction.link, {
              id: fieldSelect.value
            }),
            className: "btn-select-action",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_4__.IconToolsEdit, {})
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
        errors: errors
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "description",
        children: description
      })]
    }), showCustomValue && !isMulti && fieldSelect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "input-element input-text",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
        children: showCustomValue.label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-bold ml-4",
        children: fieldSelect[showCustomValue.value]
      })]
    })]
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/SelectLargeListLocal.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/SelectLargeListLocal.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLargeListLocal": () => (/* binding */ SelectLargeListLocal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../index */ "./resources/js/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var SelectLargeListLocal = function SelectLargeListLocal(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      _onChange = _ref.onChange,
      hasErrors = _ref.hasErrors,
      errors = _ref.errors;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
      t = _useTranslation.t;

  var innerValue;

  if (formField.isMulti) {
    innerValue = formField.options.filter(function (o) {
      return value && value.length && value.indexOf(o.value) !== -1;
    });
  } else {
    innerValue = formField.options.filter(function (o) {
      return value === o.value;
    })[0];
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(innerValue),
      _useState2 = _slicedToArray(_useState, 2),
      fieldSelect = _useState2[0],
      setFieldSelect = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (value !== innerValue) {
      if (formField.isMulti) {
        innerValue = formField.options.filter(function (o) {
          return value && value.length && value.indexOf(o.value) !== -1;
        });
      } else {
        var temp = formField.options.filter(function (o) {
          return value === o.value;
        });
        innerValue = temp || null;
      }

      setFieldSelect(innerValue);
    }
  }, [value]);
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      options = formField.options,
      _formField$isMulti = formField.isMulti,
      isMulti = _formField$isMulti === void 0 ? false : _formField$isMulti,
      _formField$isSearchab = formField.isSearchable,
      isSearchable = _formField$isSearchab === void 0 ? false : _formField$isSearchab,
      _formField$isClearabl = formField.isClearable,
      isClearable = _formField$isClearabl === void 0 ? false : _formField$isClearabl,
      _formField$hideSelect = formField.hideSelectedOptions,
      hideSelectedOptions = _formField$hideSelect === void 0 ? false : _formField$hideSelect,
      _formField$escapeClea = formField.escapeClearsValue,
      escapeClearsValue = _formField$escapeClea === void 0 ? false : _formField$escapeClea,
      createAction = formField.createAction,
      editAction = formField.editAction,
      showCustomValue = formField.showCustomValue,
      _formField$isDisabled = formField.isDisabled,
      isDisabled = _formField$isDisabled === void 0 ? false : _formField$isDisabled,
      description = formField.description,
      rules = formField.rules;
  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isRequiredFromRules)(rules);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "select-input input-element ".concat(!!errors && !!errors.length ? 'has-errors' : ''),
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: fieldSelect,
        onChange: function onChange(e) {
          // setFieldSelect(e)
          var value = isMulti ? e ? e.map(function (el) {
            return el.value;
          }) : null : e ? e.value : null;

          _onChange(value);
        },
        options: options,
        isMulti: isMulti,
        isClearable: isClearable,
        placeholder: t('ui.select_option'),
        noOptionsMessage: function noOptionsMessage() {
          return t('ui.no_results');
        },
        name: name,
        className: "select-custom-input",
        classNamePrefix: isMulti ? 'select-multi' : 'select',
        isSearchable: !!isSearchable === false ? isSearchable : true,
        components: {
          MenuList: MenuList
        },
        isDisabled: isDisabled,
        hideSelectedOptions: hideSelectedOptions,
        escapeClearsValue: escapeClearsValue,
        styles: {
          option: function option(styles, _ref2) {
            var data = _ref2.data,
                isDisabled = _ref2.isDisabled,
                isFocused = _ref2.isFocused,
                isSelected = _ref2.isSelected;
            return _objectSpread(_objectSpread({}, styles), {}, {
              backgroundColor: data.nonActive ? '#bfbfbf' : styles.backgroundColor,
              color: data.nonActive ? '#444444' : styles.color
            });
          }
        }
      }), createAction && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "btn-select-action__wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_index__WEBPACK_IMPORTED_MODULE_5__.ReactTooltip, {
          content: createAction.tooltip,
          placement: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_3__.Link, {
            href: createAction.link,
            className: "btn-select-action",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_4__.IconToolsAdd, {})
          })
        })
      }), editAction && !isMulti && fieldSelect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "btn-select-action__wrap btn-select-action__wrap-edit",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_index__WEBPACK_IMPORTED_MODULE_5__.ReactTooltip, {
          content: editAction.tooltip,
          placement: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_3__.Link, {
            href: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.route)(editAction.link, {
              id: fieldSelect.value
            }),
            className: "btn-select-action",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_4__.IconToolsEdit, {})
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
        errors: errors
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "description",
        children: description
      })]
    }), showCustomValue && !isMulti && fieldSelect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "input-element input-text",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
        children: showCustomValue.label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-bold ml-4",
        children: fieldSelect[showCustomValue.value]
      })]
    })]
  });
};

var MenuList = /*#__PURE__*/function (_Component) {
  _inherits(MenuList, _Component);

  var _super = _createSuper(MenuList);

  function MenuList() {
    _classCallCheck(this, MenuList);

    return _super.apply(this, arguments);
  }

  _createClass(MenuList, [{
    key: "render",
    value: function render() {
      var height = 35;
      var _this$props = this.props,
          options = _this$props.options,
          _children = _this$props.children,
          maxHeight = _this$props.maxHeight,
          getValue = _this$props.getValue;

      var _getValue = getValue(),
          _getValue2 = _slicedToArray(_getValue, 1),
          value = _getValue2[0];

      var initialOffset = options.indexOf(value) * height;
      var listHeight = maxHeight <= _children.length * height ? maxHeight : _children.length * height + 5;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_9__.FixedSizeList, {
        height: listHeight,
        itemCount: _children.length,
        itemSize: height,
        initialScrollOffset: initialOffset,
        children: function children(_ref3) {
          var index = _ref3.index,
              style = _ref3.style;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            style: style,
            children: _children[index]
          });
        }
      });
    }
  }]);

  return MenuList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./resources/js/components/Form/FormElements/Text.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Form/FormElements/Text.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Text = function Text(_ref) {
  var formField = _ref.formField;
  var wrapper = formField.wrapper,
      disableParse = formField.disableParse,
      text = formField.text,
      label = formField.label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper, {
    wrapper: wrapper,
    children: [!!label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
      children: label
    }), disableParse && text, !disableParse && (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(text)]
  });
};

/***/ }),

/***/ "./resources/js/components/Form/FormElements/Textarea.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Form/FormElements/Textarea.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Textarea": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Textarea = function Textarea(_ref) {
  var formField = _ref.formField,
      value = _ref.value,
      onChange = _ref.onChange,
      errors = _ref.errors,
      showOnly = _ref.showOnly;
  var wrapper = formField.wrapper,
      label = formField.label,
      name = formField.name,
      rows = formField.rows,
      maxLength = formField.maxLength,
      placeholder = formField.placeholder,
      counter = formField.counter,
      rules = formField.rules,
      description = formField.description;
  var isRequired = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isRequiredFromRules)(rules);

  if (showOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
      wrapper: wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "input-text input-element ".concat(!!errors && !!errors.length ? 'has-errors' : ''),
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          htmlFor: name,
          children: [label, " ", isRequired ? '*' : '']
        }), value]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldWrapper__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper, {
    wrapper: wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "input-element ".concat(!!errors && !!errors.length ? 'has-errors' : ''),
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
        htmlFor: name,
        children: [label, " ", isRequired ? '*' : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
        id: name,
        value: value,
        name: name,
        rows: rows,
        maxLength: maxLength,
        placeholder: placeholder,
        onChange: onChange
      }), counter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "textarea-counter",
        children: [value.length ? value.length : 0, "/", maxLength]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, {
        errors: errors
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "description",
        children: description
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/Form/Utils/Constants.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Form/Utils/Constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORM_ELEMENT_TYPES": () => (/* binding */ FORM_ELEMENT_TYPES)
/* harmony export */ });
var FORM_ELEMENT_TYPES = {
  INPUT: 'input',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  ASYNC_SELECT: 'async-select',
  TEXT: 'text',
  DATEPICKER: 'datepicker',
  RECAPTCHA: 'recaptcha',
  IMAGE_DROPZONE: 'image-dropzone',
  SELECT_LARGE_LISTS: 'select-large-list',
  RICH_TEXT_EDITOR: 'rich-text-editor',
  MULTI_DATEPICKER: 'multi-datepicker',
  GALLERY: 'gallery',
  MULTI_FIlE_UPLOAD: 'multi-file-upload',
  FILE_UPLOAD: 'file-upload'
};

/***/ }),

/***/ "./resources/js/components/Form/Utils/MultiDatePickerLocales/gregorian_fr.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Form/Utils/MultiDatePickerLocales/gregorian_fr.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'gregorian_fr',
  months: [['janvier', 'janv.'], ['février', 'févr.'], ['mars', 'mars'], ['avril', 'avr.'], ['mai', 'mai'], ['juin', 'juin'], ['juillet', 'juil.'], ['août', 'août'], ['septembre', 'sept.'], ['octobre', 'oct.'], ['novembre', 'nov.'], ['décembre', 'déc.']],
  days: [['samedi', 'Sa'], ['dimanche', 'Di'], ['lundi', 'Lu'], ['mardi', 'Ma'], ['mercredi', 'Me'], ['jeudi', 'Je'], ['vendredi', 'Ve']],
  digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  meridiems: [['AM', 'am'], ['PM', 'pm']]
});

/***/ }),

/***/ "./resources/js/components/Form/index.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Form/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSelect": () => (/* reexport safe */ _FormElements_AsyncSelect__WEBPACK_IMPORTED_MODULE_7__.AsyncSelect),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _FormElements_Checkbox__WEBPACK_IMPORTED_MODULE_3__.Checkbox),
/* harmony export */   "Datepicker": () => (/* reexport safe */ _FormElements_Datepicker__WEBPACK_IMPORTED_MODULE_9__.Datepicker),
/* harmony export */   "FORM_ELEMENT_TYPES": () => (/* reexport safe */ _Utils_Constants__WEBPACK_IMPORTED_MODULE_15__.FORM_ELEMENT_TYPES),
/* harmony export */   "FieldWrapper": () => (/* reexport safe */ _FormElements_FieldWrapper__WEBPACK_IMPORTED_MODULE_2__.FieldWrapper),
/* harmony export */   "FileUpload": () => (/* reexport safe */ _FormElements_FileUpload__WEBPACK_IMPORTED_MODULE_14__.FileUpload),
/* harmony export */   "FormBuilder": () => (/* reexport safe */ _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ImageDropzone": () => (/* reexport safe */ _FormElements_ImageDropzone__WEBPACK_IMPORTED_MODULE_11__.ImageDropzone),
/* harmony export */   "Input": () => (/* reexport safe */ _FormElements_Input__WEBPACK_IMPORTED_MODULE_1__.Input),
/* harmony export */   "MultiFileUpload": () => (/* reexport safe */ _FormElements_MultiFileUpload__WEBPACK_IMPORTED_MODULE_13__.MultiFileUpload),
/* harmony export */   "Radio": () => (/* reexport safe */ _FormElements_Radio__WEBPACK_IMPORTED_MODULE_4__.Radio),
/* harmony export */   "ReCaptcha": () => (/* reexport safe */ _FormElements_ReCaptcha__WEBPACK_IMPORTED_MODULE_10__.ReCaptcha),
/* harmony export */   "Select": () => (/* reexport safe */ _FormElements_Select__WEBPACK_IMPORTED_MODULE_6__.Select),
/* harmony export */   "SelectLargeListLocal": () => (/* reexport safe */ _FormElements_SelectLargeListLocal__WEBPACK_IMPORTED_MODULE_12__.SelectLargeListLocal),
/* harmony export */   "Text": () => (/* reexport safe */ _FormElements_Text__WEBPACK_IMPORTED_MODULE_8__.Text),
/* harmony export */   "Textarea": () => (/* reexport safe */ _FormElements_Textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea)
/* harmony export */ });
/* harmony import */ var _FormBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormBuilder */ "./resources/js/components/Form/FormBuilder.js");
/* harmony import */ var _FormElements_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormElements/Input */ "./resources/js/components/Form/FormElements/Input.js");
/* harmony import */ var _FormElements_FieldWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormElements/FieldWrapper */ "./resources/js/components/Form/FormElements/FieldWrapper.js");
/* harmony import */ var _FormElements_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormElements/Checkbox */ "./resources/js/components/Form/FormElements/Checkbox.js");
/* harmony import */ var _FormElements_Radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormElements/Radio */ "./resources/js/components/Form/FormElements/Radio.js");
/* harmony import */ var _FormElements_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormElements/Textarea */ "./resources/js/components/Form/FormElements/Textarea.js");
/* harmony import */ var _FormElements_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormElements/Select */ "./resources/js/components/Form/FormElements/Select.js");
/* harmony import */ var _FormElements_AsyncSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormElements/AsyncSelect */ "./resources/js/components/Form/FormElements/AsyncSelect.js");
/* harmony import */ var _FormElements_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormElements/Text */ "./resources/js/components/Form/FormElements/Text.js");
/* harmony import */ var _FormElements_Datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormElements/Datepicker */ "./resources/js/components/Form/FormElements/Datepicker.js");
/* harmony import */ var _FormElements_ReCaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormElements/ReCaptcha */ "./resources/js/components/Form/FormElements/ReCaptcha.js");
/* harmony import */ var _FormElements_ImageDropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormElements/ImageDropzone */ "./resources/js/components/Form/FormElements/ImageDropzone.js");
/* harmony import */ var _FormElements_SelectLargeListLocal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormElements/SelectLargeListLocal */ "./resources/js/components/Form/FormElements/SelectLargeListLocal.js");
/* harmony import */ var _FormElements_MultiFileUpload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormElements/MultiFileUpload */ "./resources/js/components/Form/FormElements/MultiFileUpload.js");
/* harmony import */ var _FormElements_FileUpload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormElements/FileUpload */ "./resources/js/components/Form/FormElements/FileUpload.js");
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Utils/Constants */ "./resources/js/components/Form/Utils/Constants.js");


















/***/ }),

/***/ "./resources/js/components/Icons/IconArrowDown.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconArrowDown.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconArrowDown = function IconArrowDown(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17 11",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
      points: "8.5,6.6 15.1,0 17,1.9 8.5,10.4 0,1.9 1.9,0 "
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconArrowDown);

/***/ }),

/***/ "./resources/js/components/Icons/IconArrowThin.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconArrowThin.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconArrowThin = function IconArrowThin(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13.3 21.8",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12.3,21.8c-0.2,0-0.5-0.1-0.7-0.3L0,10.9L11.6,0.3c0.4-0.4,1-0.3,1.4,0.1c0.4,0.4,0.3,1-0.1,1.4L3,10.9l10,9.2 c0.4,0.4,0.4,1,0.1,1.4C12.8,21.7,12.6,21.8,12.3,21.8z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconArrowThin);

/***/ }),

/***/ "./resources/js/components/Icons/IconAuction.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Icons/IconAuction.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var IconAuction = function IconAuction(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: width || '23',
    height: height || '23',
    viewBox: "0 0 24 23",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title", {
      children: "icons/icon-menu-auction"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
      id: "Desktop",
      stroke: "none",
      strokeWidth: "1",
      fill: fill || color,
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
        id: "Dili-Desktop-Auction-Detail",
        transform: "translate(-681.000000, -22.000000)",
        stroke: color || '#FD7E03',
        strokeWidth: "1.08",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
          id: "icons/icon-menu-auction",
          transform: "translate(680.000000, 21.000000)",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M14.6529093,18.689117 C14.6529093,18.689117 4.03077113,18.689117 4.03077113,18.689117 C3.14981344,18.689117 2.43492404,19.3343529 2.43492404,20.1296608 C2.43492404,20.1296608 2.43492404,21.0028065 2.43492404,22.749098 L16.248712,22.749098 C16.248712,21.0028065 16.248712,20.1296608 16.248712,20.1296608 C16.248712,19.3343462 15.533867,18.689117 14.6529093,18.689117 Z",
            id: "Trac\xE9-1027"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M23.2753441,19.4530868 L13.5607491,9.73469043 C14.8116602,8.4855172 15.4371157,7.86093059 15.4371157,7.86093059 C15.7465073,8.13386206 16.2222798,8.12051695 16.5150362,7.82764732 C16.8211253,7.51814328 16.8211253,7.02220522 16.5150362,6.71270118 C16.5150362,6.71270118 12.4695393,2.6689286 12.4695393,2.6689286 C12.163443,2.35942456 11.6644087,2.35942456 11.3583629,2.6689286 C11.0489786,2.97514335 11.0489786,3.4743707 11.3583629,3.78054207 C11.3583629,3.78054207 11.3472728,3.76944765 11.3250925,3.7472588 L6.18829911,8.88266332 C6.21047456,8.90704503 6.22156228,8.91923588 6.22156228,8.91923588 C5.9154804,8.60973184 5.41643888,8.60973184 5.11039313,8.91923588 C4.80100877,9.22545063 4.80100877,9.72467797 5.11039313,10.0308927 C5.11039313,10.0308927 9.15258754,14.0779546 9.15258754,14.0779546 C9.46197189,14.3841693 9.96101341,14.3841693 10.2671025,14.0779546 C10.5731989,13.7684506 10.5731989,13.2725559 10.2671025,12.9630952 C10.2671025,12.9630952 10.2781927,12.9741607 10.3003729,12.9962917 L12.1767396,11.1225319 C18.6509057,17.5992411 21.8879887,20.8375956 21.8879887,20.8375956 C22.2705983,21.2203388 22.8927417,21.2203388 23.2753369,20.8375956 C23.657932,20.4548525 23.657932,19.8357938 23.2753369,19.4530941 C23.2753369,19.4530941 23.2753393,19.4530917 23.2753441,19.4530868 Z",
            id: "Trac\xE9-1028"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconAuction);

/***/ }),

/***/ "./resources/js/components/Icons/IconBasketEmpty.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Icons/IconBasketEmpty.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconBasketEmpty = function IconBasketEmpty(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 55 48",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M37.5,40.3c-2.1,0-3.9,1.7-3.9,3.9s1.7,3.9,3.9,3.9c2.1,0,3.9-1.7,3.9-3.9S39.7,40.3,37.5,40.3z M14.2,40.3 c-2.1,0-3.9,1.7-3.9,3.9s1.7,3.9,3.9,3.9c2.1,0,3.9-1.7,3.9-3.9S16.4,40.3,14.2,40.3z M42,28.1l2.1-7.6c-5.4-0.3-9.7-4.8-9.7-10.3 c0-0.3,0-0.6,0-0.9H9.8l-0.1-1c-0.2-0.9-1-1.6-1.9-1.6H1.9C0.9,6.9,0,7.7,0,8.8c0,1.1,0.9,1.9,1.9,1.9h4.2L11,36.2 c0.2,0.9,1,1.6,1.8,1.6h26.6c1.1,0,1.9-0.9,1.9-1.9c0-1.1-0.9-1.9-1.9-1.9H14.5L13.8,30h25.6C40.6,30,41.6,29.2,42,28.1z M44.7,9.1 l-2.4-2.4L41,7.9l2.4,2.4L41,12.7l1.2,1.2l2.4-2.4l2.4,2.4l1.2-1.2l-2.4-2.4l2.4-2.4l-1.2-1.2L44.7,9.1z M44.7,18.9 c-4.7,0-8.6-3.8-8.6-8.6s3.8-8.6,8.6-8.6s8.6,3.8,8.6,8.6S49.4,18.9,44.7,18.9L44.7,18.9z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconBasketEmpty);

/***/ }),

/***/ "./resources/js/components/Icons/IconBubble.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconBubble.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconBubble = function IconBubble(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    className: className,
    width: "1081px",
    height: "792px",
    viewBox: "0 0 1081 792",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
      children: "Path Copy"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      id: "Page-1",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      opacity: "0.735909598",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M853.333143,75.2740927 C973.342425,166.144248 1070.06991,296.551659 1041.26768,400.528088 C1012.46545,504.504516 857.893496,582.268399 737.884214,636.877868 C617.874932,691.487336 532.428323,722.94239 413.379116,753.523693 C294.329908,784.104995 141.438083,814.030984 64.6321425,759.421515 C-12.1737979,704.812047 -12.8938536,565.667121 8.22778001,445.963166 C29.3494136,326.25921 72.7927737,225.996226 149.598714,134.907632 C226.404654,43.8190388 336.573175,-37.6582884 463.302977,-52.7305017 C590.032779,-67.5842772 733.323861,-15.8145009 853.333143,75.2740927",
        id: "Path-Copy",
        fill: "#FFECD1",
        fillRule: "nonzero",
        transform: "translate(521.390425, 367.246569) scale(-1, -1) rotate(10.000000) translate(-521.390425, -367.246569) "
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconBubble);

/***/ }),

/***/ "./resources/js/components/Icons/IconBurger.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconBurger.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var IconBurger = function IconBurger(_ref) {
  var clasName = _ref.clasName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "40px",
    height: "40px",
    viewBox: "0 0 40 40",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title", {
      children: "Icons/icon-burger"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
      id: "Desktop",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
        id: "Dili-Mobile-Auction-Detail",
        transform: "translate(-336.000000, -56.000000)",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
          id: "Icons/icon-burger",
          transform: "translate(336.000000, 56.000000)",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
            id: "Path",
            points: "0 0 40 0 40 40 0 40"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M5,6.66666667 L35,6.66666667 L35,10 L5,10 L5,6.66666667 Z M15,18.3333333 L35,18.3333333 L35,21.6666667 L15,21.6666667 L15,18.3333333 Z M5,30 L35,30 L35,33.3333333 L5,33.3333333 L5,30 Z",
            id: "Shape",
            fill: "#FD7E03",
            fillRule: "nonzero"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconBurger);

/***/ }),

/***/ "./resources/js/components/Icons/IconCalendar.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconCalendar.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var IconMenu = function IconMenu(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75    c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75    c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v24c0,2.343,1.907,4.25,4.25,4.25h24    c2.344,0,4.25-1.907,4.25-4.25v-24C34.474,5.855,32.567,3.948,30.224,3.948z M25.286,2.75c0-0.689,0.525-1.25,1.17-1.25    c0.646,0,1.17,0.561,1.17,1.25v4.896c0,0.689-0.524,1.25-1.17,1.25c-0.645,0-1.17-0.561-1.17-1.25V2.75z M17.206,2.75    c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z M9.125,2.75    c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z     M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75v-22h27.5V32.198z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "6.724",
        y: "14.626",
        width: "4.595",
        height: "4.089"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "12.857",
        y: "14.626",
        width: "4.596",
        height: "4.089"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "18.995",
        y: "14.626",
        width: "4.595",
        height: "4.089"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "25.128",
        y: "14.626",
        width: "4.596",
        height: "4.089"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "6.724",
        y: "20.084",
        width: "4.595",
        height: "4.086"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "12.857",
        y: "20.084",
        width: "4.596",
        height: "4.086"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "18.995",
        y: "20.084",
        width: "4.595",
        height: "4.086"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "25.128",
        y: "20.084",
        width: "4.596",
        height: "4.086"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "6.724",
        y: "25.54",
        width: "4.595",
        height: "4.086"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "12.857",
        y: "25.54",
        width: "4.596",
        height: "4.086"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "18.995",
        y: "25.54",
        width: "4.595",
        height: "4.086"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "25.128",
        y: "25.54",
        width: "4.596",
        height: "4.086"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMenu);

/***/ }),

/***/ "./resources/js/components/Icons/IconCart.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconCart.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconCart = function IconCart(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 16",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3,0c0.4,0,0.7,0.3,0.7,0.6l0,0.4H17c0.6,0,1.1,0.6,1,1.3l-1.7,6c-0.1,0.4-0.5,0.7-1,0.7H5.4l0.3,1.5h9.7 c0.4,0,0.8,0.3,0.8,0.8S15.7,12,15.3,12H5c-0.3,0-0.6-0.3-0.7-0.6L2.4,1.5H0.8C0.3,1.5,0,1.2,0,0.8S0.3,0,0.8,0H3z M4,14.5 C4,13.7,4.7,13,5.5,13S7,13.7,7,14.5S6.4,16,5.5,16S4,15.3,4,14.5z M16.1,14.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5 s0.7-1.5,1.5-1.5C15.4,13,16.1,13.7,16.1,14.5z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCart);

/***/ }),

/***/ "./resources/js/components/Icons/IconCheck.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconCheck.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconCheck = function IconCheck(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 23.3 23.3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M11.7,0C5.2,0,0,5.2,0,11.7s5.2,11.7,11.7,11.7s11.7-5.2,11.7-11.7S18.1,0,11.7,0z M10.3,15.7l-4.1-4l1.4-1.3l2.7,2.6 l5.5-5.3L17.2,9L10.3,15.7z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCheck);

/***/ }),

/***/ "./resources/js/components/Icons/IconChevronDown.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Icons/IconChevronDown.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconChevronDown = function IconChevronDown(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline icon-chevron-down ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      className: "icon",
      d: "M20.5 18.363L13.11 26 11 23.818 20.5 14l9.5 9.818L27.89 26z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconChevronDown);

/***/ }),

/***/ "./resources/js/components/Icons/IconChevronLeft.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Icons/IconChevronLeft.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconChevronLeft = function IconChevronLeft(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline icon-chevron-left ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      className: "icon",
      d: "M20.5 18.363L13.11 26 11 23.818 20.5 14l9.5 9.818L27.89 26z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconChevronLeft);

/***/ }),

/***/ "./resources/js/components/Icons/IconChevronRight.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Icons/IconChevronRight.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconChevronRight = function IconChevronRight(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline icon-chevron-right ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      className: "icon",
      d: "M20.5 18.363L13.11 26 11 23.818 20.5 14l9.5 9.818L27.89 26z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconChevronRight);

/***/ }),

/***/ "./resources/js/components/Icons/IconChevronThin.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Icons/IconChevronThin.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconChevronThin = function IconChevronThin(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.8 13.3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M0,12.3c0-0.2,0.1-0.5,0.3-0.7L10.9,0l10.6,11.6c0.4,0.4,0.3,1-0.1,1.4s-1,0.3-1.4-0.1L10.9,3L1.7,13 c-0.4,0.4-1,0.4-1.4,0.1C0.1,12.8,0,12.6,0,12.3z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconChevronThin);

/***/ }),

/***/ "./resources/js/components/Icons/IconChevronUp.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconChevronUp.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconChevronUp = function IconChevronUp(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline icon-chevron-up ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      className: "icon",
      d: "M20.5 18.363L13.11 26 11 23.818 20.5 14l9.5 9.818L27.89 26z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconChevronUp);

/***/ }),

/***/ "./resources/js/components/Icons/IconChild.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconChild.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMoney = function IconMoney(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      d: "M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMoney);

/***/ }),

/***/ "./resources/js/components/Icons/IconClose.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconClose.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconClose = function IconClose(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    viewBox: "0 0 46 46",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      strokeWidth: "8",
      d: "M45.647 44.033c1.064 1.066-.526 2.693-1.61 1.61L23 24.607 1.962 45.643C.884 46.72-.712 45.098.353 44.033l21.038-21.035L.353 1.962C-.718.89.891-.718 1.963.353L23 21.39 44.038.353c1.072-1.071 2.68.537 1.61 1.61L24.61 22.997l21.037 21.035z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconClose);

/***/ }),

/***/ "./resources/js/components/Icons/IconCloseBold.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconCloseBold.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconCloseBold = function IconCloseBold(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16.6",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
      points: "8,7 11.8,3.2 13.1,4.5 9.3,8.3 13.1,12.1 11.8,13.4 8,9.6 4.2,13.4 2.9,12.1 6.7,8.3 2.9,4.5 4.2,3.2 "
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCloseBold);

/***/ }),

/***/ "./resources/js/components/Icons/IconCookies.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Icons/IconCookies.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconCookies = function IconCookies(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M27.5,8.3c0.7,0,1.3,0.3,1.8,0.7c0.5,0.5,0.7,1.1,0.7,1.8s-0.3,1.3-0.7,1.8c-0.5,0.5-1.1,0.7-1.8,0.7 c-0.7,0-1.3-0.3-1.8-0.7c-0.5-0.5-0.7-1.1-0.7-1.8s0.3-1.3,0.7-1.8C26.2,8.6,26.8,8.3,27.5,8.3L27.5,8.3z M30,18.3 c0.9,0,1.7,0.4,2.4,1c0.6,0.6,1,1.5,1,2.4c0,0.9-0.4,1.7-1,2.4c-0.6,0.6-1.5,1-2.4,1c-0.9,0-1.7-0.4-2.4-1c-0.6-0.6-1-1.5-1-2.4 c0-0.9,0.4-1.7,1-2.4C28.3,18.7,29.1,18.3,30,18.3z M15.7,25.1c0.9,0,1.7,0.4,2.4,1c0.6,0.6,1,1.5,1,2.4c0,0.9-0.4,1.7-1,2.4 c-0.6,0.6-1.5,1-2.4,1c-0.9,0-1.7-0.4-2.4-1c-0.6-0.6-1-1.5-1-2.4c0-0.9,0.4-1.7,1-2.4C14,25.4,14.8,25.1,15.7,25.1L15.7,25.1z M20.1,0c5.3,0,10.4,2.2,14.1,5.9S40,14.8,40,20.1c0,5.3-2.1,10.4-5.9,14.1C30.3,37.9,25.3,40,20,40c-5.3,0-10.4-2.1-14.1-5.9 C2.1,30.4,0,25.3,0,20c6.5,1.8,12.3-4,10-10C16.7,11.2,21.3,5.5,20.1,0L20.1,0z M8.6,6.4c0,1.5-1.2,2.7-2.7,2.7 c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7C7.4,3.6,8.6,4.9,8.6,6.4 M5.9,14.1c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4 s0.6-1.4,1.4-1.4S5.9,13.3,5.9,14.1"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCookies);

/***/ }),

/***/ "./resources/js/components/Icons/IconCreators.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconCreators.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconCreators = function IconCreators(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M12,4c-4.4,0-8,3.6-8,8s3.6,8,8,8 s8-3.6,8-8S16.4,4,12,4z M9,8c1.1,0,2.1,0.4,2.8,1.2l-1.4,1.4C9.8,10,9,9.8,8.2,10.2S7,11.2,7,12c0,0.8,0.5,1.5,1.2,1.8 c0.7,0.3,1.6,0.1,2.2-0.4l1.4,1.4C10.7,16,9,16.3,7.5,15.7C6,15.1,5,13.6,5,12C5,9.8,6.8,8,9,8L9,8z M16,8c1.1,0,2.1,0.4,2.8,1.2 l-1.4,1.4c-0.6-0.6-1.4-0.7-2.2-0.4c-0.7,0.3-1.2,1-1.2,1.8c0,0.8,0.5,1.5,1.2,1.8c0.7,0.3,1.6,0.1,2.2-0.4l1.4,1.4 c-1.1,1.1-2.9,1.5-4.4,0.9C13,15.1,12,13.6,12,12C12,9.8,13.8,8,16,8L16,8z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCreators);

/***/ }),

/***/ "./resources/js/components/Icons/IconCube2.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconCube2.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconCube2 = function IconCube2(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M0.7,15.4l8.4-4.9l7.7,4.5l-8.4,5L0.7,15.4z M8.4,9L0,13.9v-9L8.4,0V9z M10.3,0.1L18,4.6v9l-7.7-4.5V0.1z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCube2);

/***/ }),

/***/ "./resources/js/components/Icons/IconDelete.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconDelete.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconDelete = function IconDelete(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3.5,2.8V0.7C3.5,0.3,3.8,0,4.2,0h5.6c0.4,0,0.7,0.3,0.7,0.7v2.1H14v1.4h-1.4v9.1 c0,0.4-0.3,0.7-0.7,0.7H2.1c-0.4,0-0.7-0.3-0.7-0.7V4.2H0V2.8H3.5z M4.9,1.4v1.4h4.2V1.4H4.9z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconDelete);

/***/ }),

/***/ "./resources/js/components/Icons/IconDiscord.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Icons/IconDiscord.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconDiscord = function IconDiscord() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "margin-bottom": "5px",
    viewBox: "-5 0 1024 1024",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "512",
      cy: "512",
      r: "512",
      fill: "#5865f2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconDiscord);

/***/ }),

/***/ "./resources/js/components/Icons/IconDollar.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconDollar.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconDollar = function IconDollar(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M22.979,0C10.287,0,0,10.288,0,22.979s10.287,22.979,22.979,22.979s22.979-10.289,22.979-22.979S35.67,0,22.979,0z    M24.37,33.215v2.66c0,0.415-0.323,0.717-0.739,0.717h-1.773c-0.416,0-0.751-0.302-0.751-0.717v-2.426   c-1.632-0.074-3.278-0.422-4.524-0.896c-0.675-0.256-1.051-0.979-0.872-1.679L16,29.748c0.101-0.395,0.365-0.725,0.726-0.91   c0.361-0.188,0.785-0.207,1.164-0.062c1.187,0.459,2.589,0.793,4.086,0.793c1.906,0,3.211-0.736,3.211-2.074   c0-1.271-1.07-2.074-3.546-2.911c-3.579-1.204-6.03-2.876-6.03-6.121c0-2.943,2.083-5.251,5.644-5.954v-2.426   c0-0.415,0.355-0.787,0.771-0.787h1.773c0.416,0,0.721,0.372,0.721,0.787v2.191c1.557,0.067,2.681,0.298,3.621,0.604   c0.711,0.232,1.131,0.977,0.944,1.703l-0.254,1.008c-0.099,0.384-0.353,0.71-0.701,0.898s-0.759,0.222-1.135,0.093   c-0.854-0.293-1.968-0.559-3.38-0.559c-2.174,0-2.877,0.937-2.877,1.874c0,1.104,1.171,1.806,4.014,2.877   c3.98,1.405,5.579,3.245,5.579,6.254C30.33,30.003,28.227,32.547,24.37,33.215z"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconDollar);

/***/ }),

/***/ "./resources/js/components/Icons/IconDone.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconDone.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var IconDone = function IconDone(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      className: "icon",
      d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconDone);

/***/ }),

/***/ "./resources/js/components/Icons/IconEdit.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconEdit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var IconEdit = function IconEdit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "16px",
    height: "16px",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title", {
      children: "Icons/icon-edit"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
      id: "Desktop",
      stroke: "none",
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
        id: "Dili-Desktop-Gestion-Ench\xE8re",
        transform: "translate(-966.000000, -650.000000)",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
          id: "Form",
          transform: "translate(360.000000, 318.000000)",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
            id: "Table",
            transform: "translate(24.000000, 289.000000)",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
              id: "Row-Odd",
              transform: "translate(0.000000, 31.000000)",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
                id: "Tools",
                transform: "translate(560.000000, 12.000000)",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
                  id: "Icons/icon-edit",
                  transform: "translate(22.000000, 0.000000)",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
                    id: "Path",
                    points: "0 0 16 0 16 16 0 16"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M8.6,4.572 L11.428,7.40066667 L4.828,14 L2,14 L2,11.1713333 L8.6,4.57133333 L8.6,4.572 Z M9.54266667,3.62933333 L10.9566667,2.21466667 C11.2169999,1.95441204 11.6390001,1.95441204 11.8993333,2.21466667 L13.7853333,4.10066667 C14.045588,4.3609999 14.045588,4.7830001 13.7853333,5.04333333 L12.3706667,6.45733333 L9.54266667,3.62933333 L9.54266667,3.62933333 Z",
                    id: "Shape",
                    fill: "#0D616C",
                    fillRule: "nonzero"
                  })]
                })
              })
            })
          })
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconEdit);

/***/ }),

/***/ "./resources/js/components/Icons/IconExport.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconExport.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconExport = function IconExport(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      id: "path-1_1_",
      d: "M12,13.8h-1.2c-2,0-3.8,1.1-4.8,2.9c0-0.2,0-0.3,0-0.5c0-3.3,2.7-6,6-6v-3l6,4.8l-6,4.8V13.8z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconExport);

/***/ }),

/***/ "./resources/js/components/Icons/IconExport2.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Icons/IconExport2.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconExport = function IconExport(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 25",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      d: "M10.4,8.3v1.6H6.6v8.6h8.6v-3.9h1.6v4.7c0,0.4-0.3,0.8-0.8,0.8H5.8C5.3,20,5,19.6,5,19.2V9.1 c0-0.4,0.3-0.8,0.8-0.8H10.4z M19,6v7l-3-3l-4.7,4.7l-1.1-1.1l4.7-4.7L12,6H19z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconExport);

/***/ }),

/***/ "./resources/js/components/Icons/IconExportXML.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconExportXML.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconExportXML = function IconExportXML(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 25",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12.9,13l2.2,3.2h-1.9L12,14.3l-1.2,1.8H8.9l2.2-3.2L8.9,9.8h1.9l1.2,1.8l1.2-1.8h1.1V6.6H6.6v12.8 h10.9V9.8h-2.3L12.9,13z M5,5.8C5,5.3,5.3,5,5.8,5h9.3L19,9v11.2c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.3,0.2-0.5,0.2H5.8 C5.3,21,5,20.6,5,20.2V5.8z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconExportXML);

/***/ }),

/***/ "./resources/js/components/Icons/IconEyeVisibility.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Icons/IconEyeVisibility.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconEyeVisibility = function IconEyeVisibility(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16.2 13.5",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M0,6.8C0.7,2.9,4.1,0,8.1,0s7.4,2.9,8.1,6.8c-0.7,3.8-4.1,6.8-8.1,6.8S0.7,10.6,0,6.8z M8.1,10.5c2.1,0,3.8-1.7,3.8-3.8S10.2,3,8.1,3S4.4,4.7,4.4,6.8S6,10.5,8.1,10.5L8.1,10.5z M8.1,9C6.9,9,5.9,8,5.9,6.8 s1-2.2,2.2-2.2s2.2,1,2.2,2.2S9.4,9,8.1,9z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconEyeVisibility);

/***/ }),

/***/ "./resources/js/components/Icons/IconEyeVisibilityOff.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Icons/IconEyeVisibilityOff.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var IconEyeVisibilityOff = function IconEyeVisibilityOff(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconEyeVisibilityOff);

/***/ }),

/***/ "./resources/js/components/Icons/IconFacebook.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconFacebook.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconFacebook = function IconFacebook() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M2.5,18c0-8.5,7-15.5,15.5-15.5s15.5,7,15.5,15.5s-7,15.5-15.5,15.5S2.5,26.5,2.5,18z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#3B5998",
      d: "M0,18C0,8.1,8.1,0,18,0s18,8.1,18,18s-8.1,18-18,18S0,27.9,0,18z M19.9,28.6v-9.8h2.7l0.4-3.4h-3.1v-1.7 c0-0.9,0.1-1.4,1.3-1.4h1.7V9h-2.7c-3.2,0-4.4,1.6-4.4,4.4v2h-2v3.4h2v9.8C15.8,28.6,19.9,28.6,19.9,28.6z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconFacebook);

/***/ }),

/***/ "./resources/js/components/Icons/IconFavorite.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconFavorite.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var IconFavorute = function IconFavorute(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 19",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M17,11v3h3v2h-3v3h-2v-3h-3v-2h3v-3H17z M18.2,1.8c2.2,2.2,2.3,5.6,0.5,7.9C17.9,9.2,17,9,16,9c-3.3,0-6,2.7-6,6 c0,1,0.2,2,0.7,2.8L10,18.5L1.5,10c-2.1-2.4-2-6,0.2-8.2C4-0.5,7.6-0.6,10,1.5C12.4-0.6,16-0.5,18.2,1.8z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconFavorute);

/***/ }),

/***/ "./resources/js/components/Icons/IconFolder.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconFolder.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconFolder = function IconFolder(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22,8v12c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V7h19C21.6,7,22,7.4,22,8z M12.4,5H2V4c0-0.6,0.4-1,1-1 h7.4L12.4,5z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconFolder);

/***/ }),

/***/ "./resources/js/components/Icons/IconGallery.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Icons/IconGallery.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconGallery = function IconGallery(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M17.4,19c-0.8-2.4-2.3-3.9-4.3-5.6c1.9-1.6,4.4-2.4,6.9-2.4V3h1c0.5,0,1,0.4,1,1v16c0,0.5-0.4,1-1,1 H3c-0.5,0-1-0.4-1-1V4c0-0.5,0.4-1,1-1h3V1h2v4H4v7c5.2,0,9.7,2.5,11.3,7H17.4z M18,1v4h-8V3h6V1H18z M16.5,10 C15.7,10,15,9.3,15,8.5S15.7,7,16.5,7C17.3,7,18,7.7,18,8.5S17.3,10,16.5,10L16.5,10z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconGallery);

/***/ }),

/***/ "./resources/js/components/Icons/IconHeart.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconHeart.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconHeart = function IconHeart(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6,1.6c1.4-1.2,3.5-1.2,4.8,0.1c1.3,1.3,1.4,3.4,0.1,4.8l-4.9,5l-4.9-5c-1.2-1.4-1.2-3.5,0.1-4.8 C2.5,0.5,4.6,0.4,6,1.6z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconHeart);

/***/ }),

/***/ "./resources/js/components/Icons/IconHeartOutline.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Icons/IconHeartOutline.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconHeartOutline = function IconHeartOutline(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 17",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M9.5,1.6L10,2.1l0.5-0.5c1.3-1.3,3.1-1.8,4.9-1.5C18,0.5,20,2.8,20,5.6v0.2c0,1.6-0.7,3.2-1.9,4.3l-7.1,6.5 C10.8,16.8,10.4,17,10,17s-0.8-0.2-1.1-0.4L1.9,10C0.7,8.9,0,7.4,0,5.8V5.6c0-2.7,2-5,4.7-5.5C6.4-0.2,8.3,0.4,9.5,1.6 C9.5,1.6,9.5,1.6,9.5,1.6L9.5,1.6z M10,4.7L8.2,2.9C7.4,2.1,6.2,1.7,5,1.9C3.2,2.2,1.9,3.7,1.9,5.6v0.2c0,1.1,0.5,2.1,1.3,2.9L10,15 l6.9-6.4c0.8-0.7,1.3-1.8,1.3-2.9V5.6c0-1.8-1.3-3.3-3.1-3.6c-1.2-0.2-2.4,0.2-3.2,1L10,4.7z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconHeartOutline);

/***/ }),

/***/ "./resources/js/components/Icons/IconHome.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconHome.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconDashboard = function IconDashboard(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M19,19c0,0.6-0.4,1-1,1H4c-0.6,0-1-0.4-1-1v-9H0l10.3-9.4c0.4-0.3,1-0.3,1.3,0L22,10h-3V19z M10,12 v6h2v-6H10z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconDashboard);

/***/ }),

/***/ "./resources/js/components/Icons/IconImage.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconImage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconImage = function IconImage(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M20,5H4v14l9.3-9.3c0.4-0.4,1-0.4,1.4,0L20,15V5z M2,4c0-0.5,0.4-1,1-1h18c0.5,0,1,0.4,1,1v16 c0,0.5-0.4,1-1,1H3c-0.5,0-1-0.4-1-1V4z M8,11c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,11,8,11z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconImage);

/***/ }),

/***/ "./resources/js/components/Icons/IconInfo.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconInfo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconInfo = function IconInfo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      xmlns: "http://www.w3.org/2000/svg",
      d: "M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconInfo);

/***/ }),

/***/ "./resources/js/components/Icons/IconInstagram.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconInstagram.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconInstagram = function IconInstagram() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 333333 333333",
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    imageRendering: "optimizeQuality",
    fillRule: "evenodd",
    clipRule: "evenodd",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
        id: "a",
        gradientUnits: "userSpaceOnUse",
        x1: "250181",
        y1: "308196",
        x2: "83152.4",
        y2: "25137",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          offset: "0",
          stopColor: "#f58529"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          offset: ".169",
          stopColor: "#feda77"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          offset: ".478",
          stopColor: "#dd2a7b"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          offset: ".78",
          stopColor: "#8134af"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          offset: "1",
          stopColor: "#515bd4"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-40642 71361h81288c30526 0 55489 24654 55489 54772v81069c0 30125-24963 54771-55488 54771l-81289-1c-30526 0-55492-24646-55492-54771v-81069c0-30117 24966-54771 55492-54771zm40125 43843c29663 0 53734 24072 53734 53735 0 29667-24071 53735-53734 53735-29672 0-53739-24068-53739-53735 0-29663 24068-53735 53739-53735zm0 18150c19643 0 35586 15939 35586 35585 0 19647-15943 35589-35586 35589-19650 0-35590-15943-35590-35589s15940-35585 35590-35585zm51986-25598c4819 0 8726 3907 8726 8721 0 4819-3907 8726-8726 8726-4815 0-8721-3907-8721-8726 0-4815 3907-8721 8721-8721zm-85468-20825h68009c25537 0 46422 20782 46422 46178v68350c0 25395-20885 46174-46422 46174l-68009 1c-25537 0-46426-20778-46426-46174v-68352c0-25395 20889-46177 46426-46177z",
      fill: "url(#a)"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconInstagram);

/***/ }),

/***/ "./resources/js/components/Icons/IconInstagramOutline.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Icons/IconInstagramOutline.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var IconInstagramOutline = function IconInstagramOutline(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M8,3.9C5.7,3.9,3.9,5.7,3.9,8s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S10.3,3.9,8,3.9z M8,10.7c-1.5,0-2.7-1.2-2.7-2.7 S6.5,5.3,8,5.3s2.7,1.2,2.7,2.7S9.5,10.7,8,10.7L8,10.7z M13.2,3.7c0,0.5-0.4,1-1,1c-0.5,0-1-0.4-1-1s0.4-1,1-1 C12.8,2.8,13.2,3.2,13.2,3.7z M15.9,4.7c-0.1-1.3-0.4-2.4-1.3-3.4c-0.9-0.9-2.1-1.2-3.4-1.3C10,0,6,0,4.7,0.1 C3.4,0.1,2.3,0.4,1.3,1.3C0.4,2.3,0.1,3.4,0.1,4.7C0,6,0,10,0.1,11.3c0.1,1.3,0.4,2.4,1.3,3.4c0.9,0.9,2.1,1.2,3.4,1.3 C6,16,10,16,11.3,15.9c1.3-0.1,2.4-0.4,3.4-1.3c0.9-0.9,1.2-2.1,1.3-3.4C16,10,16,6,15.9,4.7z M14.2,12.7c-0.3,0.7-0.8,1.2-1.5,1.5 c-1.1,0.4-3.6,0.3-4.7,0.3c-1.2,0-3.7,0.1-4.7-0.3C2.6,14,2,13.4,1.8,12.7C1.3,11.7,1.4,9.2,1.4,8S1.4,4.3,1.8,3.3 C2,2.6,2.6,2,3.3,1.8C4.3,1.3,6.8,1.4,8,1.4c1.2,0,3.7-0.1,4.7,0.3C13.4,2,14,2.6,14.2,3.3c0.4,1.1,0.3,3.6,0.3,4.7 S14.7,11.7,14.2,12.7z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconInstagramOutline);

/***/ }),

/***/ "./resources/js/components/Icons/IconLess.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconLess.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconLess = function IconLess(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M27.3,14c0,7.4-6,13.3-13.3,13.3S0.7,21.4,0.7,14c0-7.4,6-13.3,13.3-13.3C21.3,0.7,27.3,6.6,27.3,14 z M20.7,15.4v-2.7H7.3v2.7H20.7z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconLess);

/***/ }),

/***/ "./resources/js/components/Icons/IconLinkedin.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconLinkedin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconLinkedin = function IconLinkedin() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M2.5,18c0-8.5,7-15.5,15.5-15.5s15.5,7,15.5,15.5s-7,15.5-15.5,15.5S2.5,26.5,2.5,18z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#0077B5",
      d: "M0,18C0,8.1,8.1,0,18,0s18,8.1,18,18s-8.1,18-18,18S0,27.9,0,18z M13.9,14.2h-3.6V25h3.6V14.2z M14.1,10.9 c0-1.1-0.8-1.9-2-1.9S10,9.8,10,10.9c0,1,0.8,1.9,2,1.9l0,0C13.3,12.7,14.1,11.9,14.1,10.9z M27,18.8c0-3.3-1.8-4.9-4.2-4.9 c-1.9,0-2.8,1-3.3,1.8v-1.5h-3.6c0,1,0,10.8,0,10.8h3.6v-6c0-0.3,0-0.6,0.1-0.9c0.3-0.6,0.9-1.3,1.9-1.3c1.3,0,1.8,1,1.8,2.4V25H27 V18.8z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconLinkedin);

/***/ }),

/***/ "./resources/js/components/Icons/IconList.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconCreators = function IconCreators(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8,4h13v2H8V4z M4.5,6.5C3.7,6.5,3,5.8,3,5s0.7-1.5,1.5-1.5S6,4.2,6,5S5.3,6.5,4.5,6.5z M4.5,13.5 C3.7,13.5,3,12.8,3,12s0.7-1.5,1.5-1.5S6,11.2,6,12S5.3,13.5,4.5,13.5z M4.5,20.4c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5 S6,18.1,6,18.9C6,19.7,5.3,20.4,4.5,20.4z M8,11h13v2H8V11z M8,18h13v2H8V18z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCreators);

/***/ }),

/***/ "./resources/js/components/Icons/IconLock.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconLock.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconLock = function IconLock(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 14",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      d: "M10.5,6H12v7.5H0V6h1.5V4.5C1.5,2,3.5,0,6,0s4.5,2,4.5,4.5V6z M7.5,6V4.5C7.5,3.7,6.8,3,6,3S4.5,3.7,4.5,4.5 V6H7.5z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconLock);

/***/ }),

/***/ "./resources/js/components/Icons/IconLogo.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconLogo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconLogo = function IconLogo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "159px",
    height: "137px",
    viewBox: "0 0 130 106",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
      children: "E05E16B7-034C-4EDC-A840-282D9F2E8825"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M38.3392 96.4753C17.8812 86.804 -11.8694 56.228 15.7293 29.0695C23.271 21.2334 49.2964 6.29418 89.3699 4.60562C111.772 3.71079 143.512 13.2001 112.594 64.8882C95.5261 93.4167 67.7954 110.403 38.3392 96.4753Z",
      fill: "#007480"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M92.141 4.55001C114.248 4.55001 142.258 15.2981 112.594 64.8882C99.6928 86.4501 80.6914 101.43 59.4518 101.43C52.1307 101.374 44.9157 99.6804 38.3392 96.4753C17.8812 86.804 -11.8694 56.228 15.7293 29.0695C23.271 21.2334 49.2964 6.29418 89.3699 4.60562C90.2784 4.55001 91.2071 4.55001 92.141 4.55001ZM92.141 0C91.1614 0 90.1718 0 89.1872 0.0606668C71.1602 0.819001 53.6966 4.3579 38.664 10.3032C27.4022 14.7673 17.597 20.5863 12.4812 25.8744C7.36548 30.9198 3.77226 36.4001 1.8031 42.123C-0.0253668 47.4583 -0.472251 53.1671 0.50386 58.7204C1.97566 67.421 6.80721 76.3087 14.4656 84.4279C20.7284 91.0659 28.7116 96.9556 36.3802 100.606C43.5699 104.097 51.4534 105.94 59.4518 106C80.9807 106 101.779 91.8697 116.517 67.2339C130.012 44.676 133.397 27.1737 126.581 15.2223C123.429 9.67129 118.248 5.56112 111.142 2.99289C105.758 1.03639 99.1853 0 92.141 0Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M82.5032 26.9209H76.814V78.6494H82.5032V26.9209Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M95.1201 44.944H89.4308V78.7252H95.1201V44.944Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M95.1201 26.9209H89.4308V38.0532H95.1201V26.9209Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M68.511 44.9389H57.2746V26.8855H51.5803V44.9389H39.9937C30.4963 44.9399 22.7851 52.5858 22.7399 62.0464C22.6952 71.507 30.3333 79.2254 39.8303 79.316C49.3272 79.4065 57.1124 71.8353 57.2492 62.3756V50.6113H64.1971V78.7252H69.8915V44.944H68.511V44.9389ZM51.5803 62.1834C51.5782 66.854 48.7506 71.0629 44.4171 72.846C40.0836 74.6291 35.0984 73.6348 31.7882 70.3271C28.4779 67.0195 27.495 62.0506 29.2983 57.7393C31.1016 53.428 35.3355 50.6243 40.0241 50.6365H51.5549L51.5803 62.1834Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M78.7324 25.4952C78.7534 19.1264 73.5875 13.9465 67.194 13.9255C60.8005 13.9046 55.6005 19.0506 55.5795 25.4194C55.5314 28.5064 56.7569 31.4779 58.9697 33.6397L59.1118 33.7863L67.1712 41.8146L75.4589 33.5386L75.7482 33.2353C77.6619 31.1069 78.7239 28.3524 78.7324 25.4952Z",
      fill: "#F18700"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M73.0787 26.8299C74.0482 25.798 74.3347 24.3023 73.8147 22.9873C73.2948 21.6723 72.0613 20.773 70.6458 20.6769C69.2303 20.5808 67.8857 21.3051 67.1915 22.5377C66.5004 21.2988 65.1534 20.5686 63.7338 20.6634C62.3141 20.7582 61.0771 21.661 60.5582 22.9807C60.0393 24.3004 60.3319 25.7999 61.3094 26.8299L67.2067 32.9572L72.9873 26.931L73.0533 26.8552H73.0837L73.0787 26.8299Z",
      fill: "white"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconLogo);

/***/ }),

/***/ "./resources/js/components/Icons/IconLogout.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconLogout.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconLogout = function IconLogout(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      d: "M17,9H9v2h8v3l5-4l-5-4V9z M18,16h-2.7c-3.2,2.8-8.1,2.6-11.1-0.5s-3-8,0-11.1S12.1,1.2,15.3,4H18 c-1.9-2.5-4.9-4-8-4C4.5,0,0,4.5,0,10s4.5,10,10,10C13.1,20,16.1,18.5,18,16L18,16z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconLogout);

/***/ }),

/***/ "./resources/js/components/Icons/IconMail.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconMail.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMail = function IconMail(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 19",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M1.1,0h19.1c0.6,0,1.1,0.5,1.1,1v16.2c0,0.6-0.5,1-1.1,1H1.1c-0.6,0-1.1-0.5-1.1-1V1C0,0.5,0.5,0,1.1,0z M19.1,4.3l-8.4,7.2L2.1,4.3v12h17V4.3z M2.7,2l8,6.8L18.6,2H2.7z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMail);

/***/ }),

/***/ "./resources/js/components/Icons/IconMenu.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconMenu.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMenu = function IconMenu(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    viewBox: "0 0 24 19",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeWidth: "3.6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M2 1.86h19.566848M2 9.06h14.4M2 16.26h19.566848"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMenu);

/***/ }),

/***/ "./resources/js/components/Icons/IconMenuProfile.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Icons/IconMenuProfile.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMenuProfile = function IconMenuProfile(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: width || '22',
    height: height || '22',
    viewBox: "0 0 22 22",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
      children: "icons/icon-menu-profile"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      id: "Desktop",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
        id: "Dili-Desktop-Auction-Detail",
        transform: "translate(-901.000000, -22.000000)",
        fill: color || '#FD7E03',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
          id: "icons/icon-menu-profile",
          transform: "translate(899.000000, 20.000000)",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M6.0441875,19.2095881 C9.74822063,15.0549263 16.2527544,15.0558931 19.9556581,19.2095881 C16.2392181,23.3674756 9.76224438,23.3687675 6.0441875,19.2095881 Z M13.0000081,3.67528687 C18.1416869,3.67528687 22.3247131,7.85832125 22.3247131,12.9999919 C22.3247131,14.8808563 21.7652906,16.6887094 20.7278337,18.2199956 C16.5618862,13.7387981 9.44571062,13.7307381 5.2721825,18.2199956 C4.23472562,16.6887094 3.67530312,14.8808563 3.67530312,12.9999919 C3.67530312,7.85831312 7.8583375,3.67528687 13.0000081,3.67528687 Z M23.5625,13 C23.5625,7.16222812 18.8384219,2.4375 13,2.4375 C7.16222812,2.4375 2.4375,7.16158625 2.4375,13 C2.4375,18.78604 7.12209875,23.5625 13,23.5625 C18.8537294,23.5625 23.5625,18.8126331 23.5625,13 Z",
            id: "Trac\xE9-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10.7618388,8.88178688 C10.7618388,7.64779437 11.7656581,6.64399125 12.9996588,6.64399125 C14.2336594,6.64399125 15.2374544,7.64779437 15.2374544,8.88178688 C15.2374544,8.88178688 15.2374544,10.0006887 15.2374544,10.0006887 C15.2374544,11.2346894 14.2336594,12.2385006 12.9996588,12.2385006 C11.7656581,12.2385006 10.7618388,11.2346894 10.7618388,10.0006887 C10.7618388,10.0006887 10.7618388,8.88178688 10.7618388,8.88178688 Z M12.9996587,13.3574106 C14.8505175,13.3574106 16.3563563,11.8515556 16.3563563,10.0006969 C16.3563563,10.0006969 16.3563563,8.881795 16.3563563,8.881795 C16.3563563,7.0309525 14.8505256,5.5250975 12.9996587,5.5250975 C11.1488,5.5250975 9.64293687,7.0309525 9.64293687,8.881795 C9.64293687,8.881795 9.64293687,10.0006969 9.64293687,10.0006969 C9.64293687,11.8515556 11.1487919,13.3574106 12.9996587,13.3574106 Z",
            id: "Trac\xE9-4"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMenuProfile);

/***/ }),

/***/ "./resources/js/components/Icons/IconMenuPublic.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Icons/IconMenuPublic.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMenuPublic = function IconMenuPublic(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 17",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15.9,2.9H0.1V1.5h15.8V2.9z M15.9,7.8H5.6v1.4h10.3V7.8z M15.9,14.1H0.1v1.4h15.8V14.1z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMenuPublic);

/***/ }),

/***/ "./resources/js/components/Icons/IconMenuPublicClosed.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Icons/IconMenuPublicClosed.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMenuPublicClosed = function IconMenuPublicClosed(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12.2 12.2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
      points: "7.1,6.1 12.2,11.2 11.2,12.2 6.1,7.1 1,12.2 0,11.2 5.1,6.1 0,1 1,0 6.1,5.1 11.2,0 12.2,1 "
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMenuPublicClosed);

/***/ }),

/***/ "./resources/js/components/Icons/IconMoney.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconMoney.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMoney = function IconMoney(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      d: "M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M8,9c0.2-0.9,0.8-1.6,1.6-1.9 c0.8-0.3,1.8-0.1,2.4,0.5l1.7-1.1c-1.2-1.3-3-1.8-4.7-1.2C7.4,5.8,6.2,7.2,6,9H5v2h1c0.2,1.8,1.4,3.2,3.1,3.8 c1.7,0.5,3.5,0.1,4.7-1.2l-1.7-1.1c-0.7,0.6-1.6,0.7-2.4,0.5c-0.8-0.3-1.5-1-1.6-1.9l5,0V9L8,9L8,9z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMoney);

/***/ }),

/***/ "./resources/js/components/Icons/IconMore.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconMore.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMore2 = function IconMore2(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M14,27.3c-7.4,0-13.3-6-13.3-13.3S6.6,0.7,14,0.7s13.3,6,13.3,13.3S21.4,27.3,14,27.3z M12.7,12.7 H7.3v2.7h5.3v5.3h2.7v-5.3h5.3v-2.7h-5.3V7.3h-2.7V12.7z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMore2);

/***/ }),

/***/ "./resources/js/components/Icons/IconMove.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconMove.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconMove = function IconMove(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
      fill: "currentColor",
      className: "st0",
      points: "19.2,10.8 19.2,7.2 24,12 19.2,16.8 19.2,13.2 13.2,13.2 13.2,19.2 16.8,19.2 12,24 7.2,19.2 10.8,19.2 10.8,13.2 4.8,13.2 4.8,16.8 0,12 4.8,7.2 4.8,10.8 10.8,10.8 10.8,4.8 7.2,4.8 12,0 16.8,4.8 13.2,4.8 13.2,10.8 "
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMove);

/***/ }),

/***/ "./resources/js/components/Icons/IconNegative.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconNegative.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconNegative = function IconNegative(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    viewBox: "0 0 15 15",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M16.47,13.13c-0.12,0.13-0.29,0.2-0.47,0.2H8c-0.37-0.01-0.66-0.3-0.67-0.67v-1.33  c0.01-0.36,0.31-0.65,0.67-0.66h8c0.37,0.01,0.66,0.3,0.67,0.67v1.33C16.67,12.84,16.6,13.01,16.47,13.13z M18.92,8  c-0.7-1.21-1.71-2.22-2.92-2.92C14.79,4.37,13.41,3.99,12,4c-1.41-0.01-2.79,0.37-4,1.08C6.79,5.78,5.78,6.79,5.08,8  C4.37,9.21,3.99,10.59,4,12c-0.01,1.41,0.36,2.79,1.07,4c0.7,1.21,1.71,2.22,2.93,2.92c1.21,0.71,2.59,1.09,4,1.08  c1.41,0.01,2.79-0.36,4-1.07c1.21-0.7,2.22-1.71,2.92-2.93c0.71-1.21,1.09-2.59,1.08-4C20.01,10.59,19.63,9.21,18.92,8z"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconNegative);

/***/ }),

/***/ "./resources/js/components/Icons/IconOpenNewTab.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Icons/IconOpenNewTab.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconOpenNewTab = function IconOpenNewTab(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconOpenNewTab);

/***/ }),

/***/ "./resources/js/components/Icons/IconOwners.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconOwners.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconOwners = function IconOwners(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21 16",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.3,8c2.3,0,4.2-1.8,4.2-4S9.7,0,7.3,0S3.2,1.8,3.2,4S5,8,7.3,8z M9,9.5H5.7C2.5,9.5,0,11.9,0,14.9 C0,15.5,0.5,16,1.1,16h12.4c0.6,0,1.1-0.5,1.1-1.1C14.7,11.9,12.2,9.5,9,9.5z M15.7,10h-2.4c1.5,1.2,2.5,2.9,2.5,4.9 c0,0.4-0.1,0.8-0.3,1.1H20c0.6,0,1-0.4,1-1C21,12.2,18.7,10,15.7,10z M14.2,8c2,0,3.7-1.6,3.7-3.5S16.2,1,14.2,1 c-0.8,0-1.6,0.3-2.2,0.7c0.4,0.7,0.6,1.5,0.6,2.3c0,1.1-0.4,2.1-1,3C12.2,7.6,13.2,8,14.2,8z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconOwners);

/***/ }),

/***/ "./resources/js/components/Icons/IconPeople.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconPeople.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconPeople = function IconPeople(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      d: "M18.9,9.9c4.4,0.9,5,2.2,5.1,6.9c0,0.3,0,0.3,0,0.3l0,0v0.4l0,0c-0.1,0.2-1.3,2.3-7.2,2.3 c-3,0-4.8-0.5-5.8-1.1C10.4,19.2,8.9,20,5.7,20c-3.9,0-5.2-1.2-5.6-1.6l-0.1-0.1c0,0,0-0.1-0.1-0.1l0,0l0-0.4c0,0,0-0.1,0-0.3 c0.1-3.7,0.6-4.7,4.1-5.4c0,0,0.5,0.7,1.7,0.7s1.7-0.7,1.7-0.7c1.2,0.2,2.1,0.5,2.7,1c0.5-1.8,1.8-2.6,4.7-3.2c0,0,0.6,0.8,2.1,0.8 S18.9,9.9,18.9,9.9z M5.7,4.2c2.6,0,3.1,1.8,3.1,4c0,2.2-1.4,4-3.1,4c-1.7,0-3.1-1.8-3.1-4C2.6,5.9,3.1,4.2,5.7,4.2z M16.8,0 c3.3,0,3.9,2.2,3.9,4.9c0,2.7-1.7,4.9-3.9,4.9c-2.1,0-3.9-2.2-3.9-4.9C13,2.2,13.6,0,16.8,0z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPeople);

/***/ }),

/***/ "./resources/js/components/Icons/IconPhoneBook.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconPhoneBook.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconPhoneBook = function IconPhoneBook(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fill: "currentColor",
      fillRule: "nonzero",
      d: "M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99A7.512 7.512 0 0116.28 14c-.18-.64-.28-1.31-.28-2s.1-1.36.28-2a7.474 7.474 0 012.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPhoneBook);

/***/ }),

/***/ "./resources/js/components/Icons/IconPinterest.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconPinterest.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconPinterest = function IconPinterest() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 34 34",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M17,0C7.611,0,0,7.61,0,17c0,9.391,7.611,17,17,17c9.389,0,17-7.609,17-17C34,7.61,26.389,0,17,0z M28.211,17.595   c-1.795,3.79-6.324,5.89-10.521,4.636c0.346,2.484-0.535,5.512-3.253,6.435c-1.299,0.44-2.715,0.242-3.945-0.292   c-1.342-0.58-0.622-2.862-0.734-4.014c0.818,0.172,1.604,1.002,2.489,0.607c0.765-0.338,0.784-1.979,0.812-2.662   c0.096-2.295-0.076-4.619-0.076-6.917c0-0.77,0-1.539,0-2.308c0-0.315,0-0.632,0-0.948c0-0.391,0.021-0.332,0.381-0.395   c0.964-0.165,1.978-0.113,2.947-0.038c0.276,0.022,0.551,0.049,0.827,0.082c0.35,0.044,0.309-0.035,0.309,0.385   c0,0.687,0,1.373,0,2.058c0,1.373,0,2.744,0,4.115c0,0.525,0.433,0.509,0.92,0.622c0.287,0.066,0.578,0.117,0.871,0.146   c0.527,0.053,1.062,0.037,1.582-0.056c0.893-0.157,1.734-0.55,2.399-1.141c1.271-1.128,1.571-2.852,1.112-4.409   c-1.107-3.764-6.064-5.286-9.724-4.403c-3.93,0.948-7.069,5.203-4.106,8.637c-0.886,0.757-1.649,1.656-2.685,2.24   C7.563,20.12,7.3,20.241,7.028,20.336c-0.151-0.156-0.293-0.325-0.424-0.499c-0.271-0.356-0.5-0.744-0.689-1.146   c-0.854-1.806-0.99-3.915-0.633-5.851c0.58-3.148,2.662-5.484,5.725-6.699c5.102-2.019,12.416-1.192,16.021,3.105   C28.949,11.543,29.488,14.896,28.211,17.595z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPinterest);

/***/ }),

/***/ "./resources/js/components/Icons/IconPlus.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconPlus.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconPlus = function IconPlus(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15.4 16.1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
      fill: "currentColor",
      fillRule: "nonzero",
      points: "6.8,7.1 6.8,1.7 8.6,1.7 8.6,7.1 14,7.1 14,8.9 8.6,8.9 8.6,14.3 6.8,14.3 6.8,8.9 1.4,8.9 1.4,7.1 "
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPlus);

/***/ }),

/***/ "./resources/js/components/Icons/IconPositive.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconPositive.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconPositive = function IconPositive(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    viewBox: "0 0 15 15",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M16.66,12.67c-0.01,0.37-0.3,0.66-0.67,0.67h-2.66V16c-0.01,0.37-0.3,0.66-0.67,0.67h-1.33  c-0.36-0.01-0.65-0.31-0.66-0.67v-2.67H8c-0.37-0.01-0.66-0.3-0.67-0.67v-1.33c0.01-0.36,0.31-0.65,0.67-0.66h2.67V8  c0.01-0.37,0.3-0.66,0.67-0.67h1.33c0.37,0.01,0.66,0.3,0.67,0.67v2.67H16c0.37,0.01,0.66,0.3,0.67,0.67v1.33l0,0H16.66z M18.92,8  c-0.7-1.21-1.71-2.22-2.92-2.92C14.79,4.37,13.41,3.99,12,4c-1.41-0.01-2.79,0.37-4,1.08C6.79,5.78,5.78,6.79,5.08,8  C4.37,9.21,3.99,10.59,4,12c-0.01,1.41,0.36,2.79,1.07,4c0.7,1.21,1.71,2.22,2.93,2.92c1.21,0.71,2.59,1.09,4,1.08  c1.41,0.01,2.79-0.36,4-1.07c1.21-0.7,2.22-1.71,2.92-2.93c0.71-1.21,1.09-2.59,1.08-4C20.01,10.59,19.63,9.21,18.92,8z"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPositive);

/***/ }),

/***/ "./resources/js/components/Icons/IconProfile.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Icons/IconProfile.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconProfile = function IconProfile(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    fillRule: "nonzero",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17 17",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8.5,0C13.2,0,17,3.8,17,8.5S13.2,17,8.5,17S0,13.2,0,8.5S3.8,0,8.5,0z M3.4,11.4c1.2,1.9,3.1,3,5.2,3 c2.1,0,4-1.2,5.2-3c-1.4-1.3-3.3-2.1-5.2-2.1C6.7,9.3,4.8,10.1,3.4,11.4L3.4,11.4z M8.5,7.7c1.4,0,2.6-1.1,2.6-2.6S9.9,2.5,8.5,2.5 S5.9,3.7,5.9,5.1S7.1,7.7,8.5,7.7z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconProfile);

/***/ }),

/***/ "./resources/js/components/Icons/IconProfileMobile.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Icons/IconProfileMobile.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var IconProfileMobile = function IconProfileMobile(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19 22",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M9,13.1V21H0c0-2.3,1-4.5,2.7-6S6.7,12.8,9,13.1L9,13.1z M8,12c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6 S11.3,12,8,12z M13.8,18.9l3.5-3.5l1.4,1.4l-5,5l-3.5-3.5l1.4-1.4L13.8,18.9L13.8,18.9z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconProfileMobile);

/***/ }),

/***/ "./resources/js/components/Icons/IconSearch.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconSearch.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconSearch = function IconSearch(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M31.5664 28.7821L40 37.2137L37.2137 40L28.7821 31.5664C25.6449 34.0814 21.7426 35.4493 17.7218 35.4435C7.93935 35.4435 0 27.5042 0 17.7218C0 7.93935 7.93935 0 17.7218 0C27.5042 0 35.4435 7.93935 35.4435 17.7218C35.4493 21.7426 34.0814 25.6449 31.5664 28.7821ZM27.6164 27.3211C30.1154 24.7512 31.511 21.3064 31.5054 17.7218C31.5054 10.1053 25.3362 3.93817 17.7218 3.93817C10.1053 3.93817 3.93817 10.1053 3.93817 17.7218C3.93817 25.3362 10.1053 31.5054 17.7218 31.5054C21.3064 31.511 24.7512 30.1154 27.3211 27.6164L27.6164 27.3211Z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconSearch);

/***/ }),

/***/ "./resources/js/components/Icons/IconSettings.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconSettings.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconSettings = function IconSettings(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      d: "M1,15c-0.4-0.7-0.8-1.5-1-2.3c1-0.5,1.6-1.5,1.6-2.7S1,7.8,0,7.3C0.5,5.7,1.3,4.2,2.5,3c0.9,0.6,2.2,0.6,3.1,0.1 s1.6-1.6,1.5-2.8c1.6-0.4,3.4-0.4,5,0c-0.1,1.1,0.5,2.2,1.5,2.8s2.2,0.5,3.1-0.1c0.6,0.6,1.1,1.3,1.5,2c0.4,0.7,0.8,1.5,1,2.3 c-1,0.5-1.6,1.5-1.6,2.7c0,1.1,0.6,2.2,1.6,2.7c-0.5,1.6-1.3,3.1-2.5,4.3c-0.9-0.6-2.2-0.6-3.1-0.1c-1,0.6-1.6,1.6-1.5,2.8 c-1.6,0.4-3.4,0.4-5,0c0.1-1.1-0.5-2.2-1.5-2.8S3.4,16.4,2.5,17C1.9,16.4,1.4,15.7,1,15z M6.6,15.2c1.1,0.6,1.9,1.6,2.2,2.8 c0.5,0,1,0,1.5,0c0.4-1.2,1.2-2.2,2.3-2.8c1.1-0.6,2.3-0.8,3.5-0.6c0.3-0.4,0.5-0.8,0.7-1.3c-0.8-0.9-1.3-2.1-1.3-3.3 c0-1.3,0.5-2.4,1.3-3.3c-0.2-0.5-0.5-0.9-0.8-1.3c-1.2,0.3-2.5,0.1-3.5-0.6c-1.1-0.6-1.9-1.6-2.2-2.8c-0.5,0-1,0-1.5,0 C8.5,3.2,7.7,4.2,6.6,4.8C5.6,5.4,4.3,5.6,3.1,5.4C2.8,5.8,2.6,6.2,2.4,6.7C3.2,7.6,3.6,8.8,3.6,10c0,1.3-0.5,2.4-1.3,3.3 c0.2,0.5,0.5,0.9,0.8,1.3C4.3,14.4,5.6,14.6,6.6,15.2z M9.6,13c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S11.3,13,9.6,13z M9.6,11 c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1C8.6,10.6,9.1,11,9.6,11z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconSettings);

/***/ }),

/***/ "./resources/js/components/Icons/IconShare.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconShare.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var IconShare = function IconShare(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 448",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M448,96c0,53-43,96-96,96c-28.9,0-54.8-12.8-72.4-33l-89.7,44.9c1.4,6.5,1.2,13.2,1.2,19.2c0,7.8,0.2,14.5-1.2,21l89.7,44 c17.6-19.3,43.5-33,72.4-33c53,0,96,43,96,96.9c0,53-43,96-96,96c-53.9,0-96-43-96-96c0-6.9,0.7-13.6,2.1-20.1L168.4,287 c-17.6,20.2-43.5,33-72.4,33c-53,0-96-43-96-96.9c0-53,43-96,96-96c28.9,0,54.8,13.7,72.4,33l89.7-44c-1.4-6.5-2.1-13.2-2.1-20.1 c0-53,42.1-96,96-96C405,0,448,43,448,96L448,96z M95.1,272c27.4,0,48-21.5,48-48s-20.6-48-48-48c-25.6,0-48,21.5-48,48 S69.5,272,95.1,272z M352,48c-26.5,0-48,21.5-48,48s21.5,48,48,48s48-21.5,48-48S378.5,48,352,48z M352,400c26.5,0,48-21.5,48-48 s-21.5-48-48-48s-48,21.5-48,48S325.5,400,352,400z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconShare);

/***/ }),

/***/ "./resources/js/components/Icons/IconTiktok.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconTiktok.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var IconTiktok = function IconTiktok() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#000000",
    viewBox: "0 0 50 50",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconTiktok);

/***/ }),

/***/ "./resources/js/components/Icons/IconToolsAdd.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Icons/IconToolsAdd.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconToolsAdd = function IconToolsAdd(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      className: "icon",
      d: "M19,19v-9h3v9h9v3h-9v9h-3v-9h-9v-3H19z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconToolsAdd);

/***/ }),

/***/ "./resources/js/components/Icons/IconToolsEdit.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Icons/IconToolsEdit.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconToolsEdit = function IconToolsEdit(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 15",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4.9,12.9H14v1.6H0v-3.4l7.7-8L11,6.5L4.9,12.9L4.9,12.9z M8.8,2.4l1.7-1.7 c0.3-0.3,0.8-0.3,1.1,0L13.8,3c0.3,0.3,0.3,0.8,0,1.1l-1.7,1.7L8.8,2.4L8.8,2.4z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconToolsEdit);

/***/ }),

/***/ "./resources/js/components/Icons/IconTotalCollection.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Icons/IconTotalCollection.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconTotalCollection = function IconTotalCollection(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6,4.5C6,5.3,5.3,6,4.5,6h-3C0.7,6,0,5.3,0,4.5v-3C0,0.7,0.7,0,1.5,0h3C5.3,0,6,0.7,6,1.5V4.5z M6,12.5 C6,13.3,5.3,14,4.5,14h-3C0.7,14,0,13.3,0,12.5v-3C0,8.7,0.7,8,1.5,8h3C5.3,8,6,8.7,6,9.5V12.5z M8,1.5C8,0.7,8.7,0,9.5,0h3 C13.3,0,14,0.7,14,1.5v3C14,5.3,13.3,6,12.5,6h-3C8.7,6,8,5.3,8,4.5V1.5z M14,12.5c0,0.8-0.7,1.5-1.5,1.5h-3C8.7,14,8,13.3,8,12.5 v-3C8,8.7,8.7,8,9.5,8h3C13.3,8,14,8.7,14,9.5V12.5z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconTotalCollection);

/***/ }),

/***/ "./resources/js/components/Icons/IconTransaction.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Icons/IconTransaction.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconTransaction = function IconTransaction(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3,3h18c0.6,0,1,0.4,1,1v16c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V4C2,3.4,2.4,3,3,3z M15,7v2h-4v2h4v2l3.5-3L15,7z M9,17v-2 h4v-2H9v-2l-3.5,3L9,17z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconTransaction);

/***/ }),

/***/ "./resources/js/components/Icons/IconTrash.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconTrash.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconTrash = function IconTrash(_ref) {
  var className = _ref.className,
      color = _ref.color;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4.66666667,2.66666667 L4.66666667,1.33333333 L11.3333333,1.33333333 L11.3333333,2.66666667 L14.6666667,2.66666667 L14.6666667,4 L13.3333333,4 L13.3333333,14 C13.3333333,14.3681898 13.0348565,14.6666667 12.6666667,14.6666667 L3.33333333,14.6666667 C2.9651435,14.6666667 2.66666667,14.3681898 2.66666667,14 L2.66666667,4 L1.33333333,4 L1.33333333,2.66666667 L4.66666667,2.66666667 Z M4,4 L4,13.3333333 L12,13.3333333 L12,4 L4,4 Z M6,6 L7.33333333,6 L7.33333333,11.3333333 L6,11.3333333 L6,6 Z M8.66666667,6 L10,6 L10,11.3333333 L8.66666667,11.3333333 L8.66666667,6 Z",
      id: "Shape",
      fillRule: "nonzero"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconTrash);

/***/ }),

/***/ "./resources/js/components/Icons/IconTwitter.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Icons/IconTwitter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconTwitter = function IconTwitter() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M2.5,18c0-8.5,7-15.5,15.5-15.5s15.5,7,15.5,15.5s-7,15.5-15.5,15.5S2.5,26.5,2.5,18z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#55ACEE",
      d: "M0,18C0,8.1,8.1,0,18,0s18,8.1,18,18s-8.1,18-18,18S0,27.9,0,18z M17.5,14.6v0.6l-0.6-0.1 c-2.3-0.3-4.3-1.3-6-2.9L10,11.4L9.8,12c-0.5,1.4-0.2,2.8,0.8,3.8c0.5,0.5,0.4,0.6-0.5,0.3C9.8,16,9.5,15.9,9.5,16 c0,0,0.3,1.2,0.5,1.6c0.3,0.6,1,1.3,1.7,1.6l0.6,0.3h-0.7c-0.7,0-0.7,0-0.7,0.3c0.3,0.8,1.2,1.7,2.4,2.1l0.8,0.3l-0.7,0.4 c-1,0.6-2.2,0.9-3.4,0.9c-0.6,0-1,0.1-1,0.1c0,0.1,1.5,0.8,2.4,1.1c2.7,0.8,5.9,0.5,8.3-0.9c1.7-1,3.4-3,4.2-4.9 c0.4-1,0.9-2.9,0.9-3.8c0-0.6,0-0.7,0.7-1.4c0.4-0.4,0.8-0.9,0.9-1c0.1-0.2,0.1-0.2-0.5,0c-1.1,0.4-1.2,0.3-0.7-0.2 c0.4-0.4,0.9-1.1,0.9-1.4c0,0-0.2,0-0.4,0.1c-0.2,0.1-0.7,0.3-1.1,0.4l-0.7,0.2l-0.6-0.4c-0.3-0.2-0.8-0.5-1.1-0.6 c-0.6-0.2-1.6-0.2-2.2,0.1C18.3,11.5,17.3,13,17.5,14.6z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconTwitter);

/***/ }),

/***/ "./resources/js/components/Icons/IconTwitterSimple.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Icons/IconTwitterSimple.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var IconTwitterSimple = function IconTwitterSimple(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 15",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M16.1,3.7c0,0.2,0,0.3,0,0.5c0,5-3.7,10.8-10.5,10.8c-2.1,0-4-0.6-5.7-1.7c0.3,0,0.6,0,0.9,0 c1.7,0,3.3-0.6,4.6-1.6c-1.6,0-3-1.1-3.4-2.6c0.2,0,0.5,0.1,0.7,0.1c0.3,0,0.7,0,1-0.1c-1.7-0.4-3-1.9-3-3.7v0 c0.5,0.3,1.1,0.5,1.7,0.5c-1-0.7-1.6-1.8-1.6-3.2c0-0.7,0.2-1.3,0.5-1.9c1.8,2.3,4.5,3.8,7.6,4C8.8,4.4,8.8,4.1,8.8,3.8 c0-2.1,1.6-3.8,3.7-3.8c1.1,0,2,0.5,2.7,1.2C16,1,16.8,0.7,17.5,0.3c-0.3,0.9-0.9,1.6-1.6,2.1c0.7-0.1,1.5-0.3,2.1-0.6 C17.5,2.5,16.9,3.2,16.1,3.7z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconTwitterSimple);

/***/ }),

/***/ "./resources/js/components/Icons/IconUpload.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconUpload.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconUpload = function IconUpload(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 19",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "nonzero",
      d: "M0,12.5C0,10.3,1.2,8.2,3.1,7C3.6,3,7,0,11,0s7.4,3,7.9,7c2.4,1.5,3.5,4.3,2.9,7.1c-0.7,2.7-3,4.7-5.8,4.9 L6,19C2.6,18.7,0,15.9,0,12.5z M15.8,17c1.9-0.1,3.6-1.5,4-3.4c0.5-1.9-0.3-3.9-2-4.9l-0.8-0.5L17,7.2C16.6,4.2,14,2,11,2 S5.4,4.2,5,7.2L4.9,8.2L4.1,8.7c-1.7,1-2.5,3-2,4.9s2.1,3.3,4,3.4l0.2,0h9.4L15.8,17L15.8,17z M12,10h3l-4,5l-4-5h3V6h2V10z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconUpload);

/***/ }),

/***/ "./resources/js/components/Icons/IconUser.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Icons/IconUser.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconUser = function IconUser(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21 21",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12.6,13.4c2.3,0,4.2,1.9,4.2,4.2v1.7h-1.7v-1.7c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5v1.7H3.4v-1.7 c0-2.3,1.9-4.2,4.2-4.2H12.6z M10.1,1.7c2.8,0,5,2.2,5,5s-2.2,5-5,5c-1.8,0-3.4-1-4.3-2.5s-0.9-3.5,0-5S8.3,1.7,10.1,1.7z M10.1,3.4 c-1.8,0-3.3,1.5-3.3,3.3S8.2,10,10.1,10s3.3-1.5,3.3-3.3S11.9,3.4,10.1,3.4z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconUser);

/***/ }),

/***/ "./resources/js/components/Icons/IconUsers.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Icons/IconUsers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconUsers = function IconUsers(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M18.9,9.9c4.4,0.9,5,2.2,5.1,6.9c0,0.3,0,0.3,0,0.3l0,0v0.4l0,0c-0.1,0.2-1.3,2.3-7.2,2.3 c-3,0-4.8-0.5-5.8-1.1C10.4,19.2,8.9,20,5.7,20c-3.9,0-5.2-1.2-5.6-1.6l-0.1-0.1C0,18.2,0,18.2,0,18.2l0,0l0-0.4c0,0,0-0.1,0-0.3 c0.1-3.7,0.6-4.7,4.1-5.4c0,0,0.5,0.7,1.7,0.7s1.7-0.7,1.7-0.7c1.2,0.2,2.1,0.5,2.7,1c0.5-1.8,1.8-2.6,4.7-3.2c0,0,0.6,0.8,2.1,0.8 C18.3,10.7,18.9,9.9,18.9,9.9z M5.7,4.2c2.6,0,3.1,1.8,3.1,4c0,2.2-1.4,4-3.1,4c-1.7,0-3.1-1.8-3.1-4C2.6,5.9,3.1,4.2,5.7,4.2z M16.8,0c3.3,0,3.9,2.2,3.9,4.9c0,2.7-1.7,4.9-3.9,4.9c-2.1,0-3.9-2.2-3.9-4.9C13,2.2,13.6,0,16.8,0z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconUsers);

/***/ }),

/***/ "./resources/js/components/Icons/IconWallet.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Icons/IconWallet.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconWallet = function IconWallet(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 14",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M14,0c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1H2.5C2.2,2,2,2.2,2,2.5S2.2,3,2.5,3H14c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2 H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2H14z M13,9.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S12.4,9.5,13,9.5z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconWallet);

/***/ }),

/***/ "./resources/js/components/Icons/IconX.js":
/*!************************************************!*\
  !*** ./resources/js/components/Icons/IconX.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var IconX = function IconX(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "svg-inline ".concat(className || ''),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M15,13.6L13.6,15L10,11.4L6.4,15L5,13.6L8.6,10L5,6.4L6.4,5  L10,8.6L13.6,5L15,6.4L11.4,10L15,13.6z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconX);

/***/ }),

/***/ "./resources/js/components/Icons/index.js":
/*!************************************************!*\
  !*** ./resources/js/components/Icons/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconArrowDown": () => (/* reexport safe */ _IconArrowDown__WEBPACK_IMPORTED_MODULE_46__["default"]),
/* harmony export */   "IconArrowThin": () => (/* reexport safe */ _IconArrowThin__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   "IconAuction": () => (/* reexport safe */ _IconAuction__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   "IconBasketEmpty": () => (/* reexport safe */ _IconBasketEmpty__WEBPACK_IMPORTED_MODULE_79__["default"]),
/* harmony export */   "IconBubble": () => (/* reexport safe */ _IconBubble__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   "IconBurger": () => (/* reexport safe */ _IconBurger__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   "IconCalendar": () => (/* reexport safe */ _IconCalendar__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   "IconCart": () => (/* reexport safe */ _IconCart__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   "IconCheck": () => (/* reexport safe */ _IconCheck__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   "IconChevronDown": () => (/* reexport safe */ _IconChevronDown__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "IconChevronLeft": () => (/* reexport safe */ _IconChevronLeft__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "IconChevronRight": () => (/* reexport safe */ _IconChevronRight__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "IconChevronThin": () => (/* reexport safe */ _IconChevronThin__WEBPACK_IMPORTED_MODULE_78__["default"]),
/* harmony export */   "IconChevronUp": () => (/* reexport safe */ _IconChevronUp__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "IconChild": () => (/* reexport safe */ _IconChild__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   "IconClose": () => (/* reexport safe */ _IconClose__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "IconCloseBold": () => (/* reexport safe */ _IconCloseBold__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "IconCookies": () => (/* reexport safe */ _IconCookies__WEBPACK_IMPORTED_MODULE_73__["default"]),
/* harmony export */   "IconCreators": () => (/* reexport safe */ _IconCreators__WEBPACK_IMPORTED_MODULE_53__["default"]),
/* harmony export */   "IconCube2": () => (/* reexport safe */ _IconCube2__WEBPACK_IMPORTED_MODULE_70__["default"]),
/* harmony export */   "IconDelete": () => (/* reexport safe */ _IconDelete__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   "IconDiscord": () => (/* reexport safe */ _IconDiscord__WEBPACK_IMPORTED_MODULE_74__["default"]),
/* harmony export */   "IconDollar": () => (/* reexport safe */ _IconDollar__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   "IconDone": () => (/* reexport safe */ _IconDone__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   "IconEdit": () => (/* reexport safe */ _IconEdit__WEBPACK_IMPORTED_MODULE_44__["default"]),
/* harmony export */   "IconExport": () => (/* reexport safe */ _IconExport__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "IconExport2": () => (/* reexport safe */ _IconExport2__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "IconExportXML": () => (/* reexport safe */ _IconExportXML__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "IconEyeVisibility": () => (/* reexport safe */ _IconEyeVisibility__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "IconEyeVisibilityOff": () => (/* reexport safe */ _IconEyeVisibilityOff__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "IconFacebook": () => (/* reexport safe */ _IconFacebook__WEBPACK_IMPORTED_MODULE_60__["default"]),
/* harmony export */   "IconFavorite": () => (/* reexport safe */ _IconFavorite__WEBPACK_IMPORTED_MODULE_66__["default"]),
/* harmony export */   "IconFolder": () => (/* reexport safe */ _IconFolder__WEBPACK_IMPORTED_MODULE_52__["default"]),
/* harmony export */   "IconGallery": () => (/* reexport safe */ _IconGallery__WEBPACK_IMPORTED_MODULE_51__["default"]),
/* harmony export */   "IconHeart": () => (/* reexport safe */ _IconHeart__WEBPACK_IMPORTED_MODULE_68__["default"]),
/* harmony export */   "IconHeartOutline": () => (/* reexport safe */ _IconHeartOutline__WEBPACK_IMPORTED_MODULE_69__["default"]),
/* harmony export */   "IconHome": () => (/* reexport safe */ _IconHome__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "IconImage": () => (/* reexport safe */ _IconImage__WEBPACK_IMPORTED_MODULE_50__["default"]),
/* harmony export */   "IconInfo": () => (/* reexport safe */ _IconInfo__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   "IconInstagram": () => (/* reexport safe */ _IconInstagram__WEBPACK_IMPORTED_MODULE_61__["default"]),
/* harmony export */   "IconInstagramOutline": () => (/* reexport safe */ _IconInstagramOutline__WEBPACK_IMPORTED_MODULE_62__["default"]),
/* harmony export */   "IconLess": () => (/* reexport safe */ _IconLess__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   "IconLinkedin": () => (/* reexport safe */ _IconLinkedin__WEBPACK_IMPORTED_MODULE_65__["default"]),
/* harmony export */   "IconList": () => (/* reexport safe */ _IconList__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "IconLock": () => (/* reexport safe */ _IconLock__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "IconLogo": () => (/* reexport safe */ _IconLogo__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   "IconLogout": () => (/* reexport safe */ _IconLogout__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "IconMail": () => (/* reexport safe */ _IconMail__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   "IconMenu": () => (/* reexport safe */ _IconMenu__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "IconMenuProfile": () => (/* reexport safe */ _IconMenuProfile__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   "IconMenuPublic": () => (/* reexport safe */ _IconMenuPublic__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "IconMenuPublicClosed": () => (/* reexport safe */ _IconMenuPublicClosed__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "IconMoney": () => (/* reexport safe */ _IconMoney__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "IconMore": () => (/* reexport safe */ _IconMore__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   "IconMove": () => (/* reexport safe */ _IconMove__WEBPACK_IMPORTED_MODULE_55__["default"]),
/* harmony export */   "IconNegative": () => (/* reexport safe */ _IconNegative__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   "IconOpenNewTab": () => (/* reexport safe */ _IconOpenNewTab__WEBPACK_IMPORTED_MODULE_77__["default"]),
/* harmony export */   "IconOwners": () => (/* reexport safe */ _IconOwners__WEBPACK_IMPORTED_MODULE_72__["default"]),
/* harmony export */   "IconPeople": () => (/* reexport safe */ _IconPeople__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "IconPhoneBook": () => (/* reexport safe */ _IconPhoneBook__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   "IconPinterest": () => (/* reexport safe */ _IconPinterest__WEBPACK_IMPORTED_MODULE_75__["default"]),
/* harmony export */   "IconPlus": () => (/* reexport safe */ _IconPlus__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   "IconPositive": () => (/* reexport safe */ _IconPositive__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   "IconProfile": () => (/* reexport safe */ _IconProfile__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   "IconProfileMobile": () => (/* reexport safe */ _IconProfileMobile__WEBPACK_IMPORTED_MODULE_67__["default"]),
/* harmony export */   "IconSearch": () => (/* reexport safe */ _IconSearch__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "IconSettings": () => (/* reexport safe */ _IconSettings__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   "IconShare": () => (/* reexport safe */ _IconShare__WEBPACK_IMPORTED_MODULE_80__["default"]),
/* harmony export */   "IconTiktok": () => (/* reexport safe */ _IconTiktok__WEBPACK_IMPORTED_MODULE_76__["default"]),
/* harmony export */   "IconToolsAdd": () => (/* reexport safe */ _IconToolsAdd__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "IconToolsEdit": () => (/* reexport safe */ _IconToolsEdit__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "IconTotalCollection": () => (/* reexport safe */ _IconTotalCollection__WEBPACK_IMPORTED_MODULE_71__["default"]),
/* harmony export */   "IconTransaction": () => (/* reexport safe */ _IconTransaction__WEBPACK_IMPORTED_MODULE_54__["default"]),
/* harmony export */   "IconTrash": () => (/* reexport safe */ _IconTrash__WEBPACK_IMPORTED_MODULE_43__["default"]),
/* harmony export */   "IconTwitter": () => (/* reexport safe */ _IconTwitter__WEBPACK_IMPORTED_MODULE_63__["default"]),
/* harmony export */   "IconTwitterSimple": () => (/* reexport safe */ _IconTwitterSimple__WEBPACK_IMPORTED_MODULE_64__["default"]),
/* harmony export */   "IconUpload": () => (/* reexport safe */ _IconUpload__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "IconUser": () => (/* reexport safe */ _IconUser__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   "IconUsers": () => (/* reexport safe */ _IconUsers__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   "IconWallet": () => (/* reexport safe */ _IconWallet__WEBPACK_IMPORTED_MODULE_59__["default"]),
/* harmony export */   "IconX": () => (/* reexport safe */ _IconX__WEBPACK_IMPORTED_MODULE_36__["default"])
/* harmony export */ });
/* harmony import */ var _IconChevronDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconChevronDown */ "./resources/js/components/Icons/IconChevronDown.js");
/* harmony import */ var _IconChevronLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconChevronLeft */ "./resources/js/components/Icons/IconChevronLeft.js");
/* harmony import */ var _IconChevronRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconChevronRight */ "./resources/js/components/Icons/IconChevronRight.js");
/* harmony import */ var _IconChevronUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconChevronUp */ "./resources/js/components/Icons/IconChevronUp.js");
/* harmony import */ var _IconSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconSearch */ "./resources/js/components/Icons/IconSearch.js");
/* harmony import */ var _IconToolsAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconToolsAdd */ "./resources/js/components/Icons/IconToolsAdd.js");
/* harmony import */ var _IconToolsEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconToolsEdit */ "./resources/js/components/Icons/IconToolsEdit.js");
/* harmony import */ var _IconEyeVisibility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconEyeVisibility */ "./resources/js/components/Icons/IconEyeVisibility.js");
/* harmony import */ var _IconEyeVisibilityOff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IconEyeVisibilityOff */ "./resources/js/components/Icons/IconEyeVisibilityOff.js");
/* harmony import */ var _IconUpload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IconUpload */ "./resources/js/components/Icons/IconUpload.js");
/* harmony import */ var _IconHome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IconHome */ "./resources/js/components/Icons/IconHome.js");
/* harmony import */ var _IconList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./IconList */ "./resources/js/components/Icons/IconList.js");
/* harmony import */ var _IconLock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./IconLock */ "./resources/js/components/Icons/IconLock.js");
/* harmony import */ var _IconMoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./IconMoney */ "./resources/js/components/Icons/IconMoney.js");
/* harmony import */ var _IconPeople__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./IconPeople */ "./resources/js/components/Icons/IconPeople.js");
/* harmony import */ var _IconLogout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IconLogout */ "./resources/js/components/Icons/IconLogout.js");
/* harmony import */ var _IconExport__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./IconExport */ "./resources/js/components/Icons/IconExport.js");
/* harmony import */ var _IconExport2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./IconExport2 */ "./resources/js/components/Icons/IconExport2.js");
/* harmony import */ var _IconExportXML__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./IconExportXML */ "./resources/js/components/Icons/IconExportXML.js");
/* harmony import */ var _IconMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./IconMenu */ "./resources/js/components/Icons/IconMenu.js");
/* harmony import */ var _IconMenuPublic__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./IconMenuPublic */ "./resources/js/components/Icons/IconMenuPublic.js");
/* harmony import */ var _IconMenuPublicClosed__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IconMenuPublicClosed */ "./resources/js/components/Icons/IconMenuPublicClosed.js");
/* harmony import */ var _IconClose__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./IconClose */ "./resources/js/components/Icons/IconClose.js");
/* harmony import */ var _IconCloseBold__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./IconCloseBold */ "./resources/js/components/Icons/IconCloseBold.js");
/* harmony import */ var _IconSettings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./IconSettings */ "./resources/js/components/Icons/IconSettings.js");
/* harmony import */ var _IconProfile__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./IconProfile */ "./resources/js/components/Icons/IconProfile.js");
/* harmony import */ var _IconDelete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./IconDelete */ "./resources/js/components/Icons/IconDelete.js");
/* harmony import */ var _IconPhoneBook__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./IconPhoneBook */ "./resources/js/components/Icons/IconPhoneBook.js");
/* harmony import */ var _IconChild__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./IconChild */ "./resources/js/components/Icons/IconChild.js");
/* harmony import */ var _IconPlus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./IconPlus */ "./resources/js/components/Icons/IconPlus.js");
/* harmony import */ var _IconDone__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./IconDone */ "./resources/js/components/Icons/IconDone.js");
/* harmony import */ var _IconCalendar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./IconCalendar */ "./resources/js/components/Icons/IconCalendar.js");
/* harmony import */ var _IconPositive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./IconPositive */ "./resources/js/components/Icons/IconPositive.js");
/* harmony import */ var _IconNegative__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./IconNegative */ "./resources/js/components/Icons/IconNegative.js");
/* harmony import */ var _IconDollar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./IconDollar */ "./resources/js/components/Icons/IconDollar.js");
/* harmony import */ var _IconCheck__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./IconCheck */ "./resources/js/components/Icons/IconCheck.js");
/* harmony import */ var _IconX__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./IconX */ "./resources/js/components/Icons/IconX.js");
/* harmony import */ var _IconInfo__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./IconInfo */ "./resources/js/components/Icons/IconInfo.js");
/* harmony import */ var _IconLogo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./IconLogo */ "./resources/js/components/Icons/IconLogo.js");
/* harmony import */ var _IconBurger__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./IconBurger */ "./resources/js/components/Icons/IconBurger.js");
/* harmony import */ var _IconMenuProfile__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./IconMenuProfile */ "./resources/js/components/Icons/IconMenuProfile.js");
/* harmony import */ var _IconMail__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./IconMail */ "./resources/js/components/Icons/IconMail.js");
/* harmony import */ var _IconAuction__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./IconAuction */ "./resources/js/components/Icons/IconAuction.js");
/* harmony import */ var _IconTrash__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./IconTrash */ "./resources/js/components/Icons/IconTrash.js");
/* harmony import */ var _IconEdit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./IconEdit */ "./resources/js/components/Icons/IconEdit.js");
/* harmony import */ var _IconBubble__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./IconBubble */ "./resources/js/components/Icons/IconBubble.js");
/* harmony import */ var _IconArrowDown__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./IconArrowDown */ "./resources/js/components/Icons/IconArrowDown.js");
/* harmony import */ var _IconArrowThin__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./IconArrowThin */ "./resources/js/components/Icons/IconArrowThin.js");
/* harmony import */ var _IconUsers__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./IconUsers */ "./resources/js/components/Icons/IconUsers.js");
/* harmony import */ var _IconUser__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./IconUser */ "./resources/js/components/Icons/IconUser.js");
/* harmony import */ var _IconImage__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./IconImage */ "./resources/js/components/Icons/IconImage.js");
/* harmony import */ var _IconGallery__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./IconGallery */ "./resources/js/components/Icons/IconGallery.js");
/* harmony import */ var _IconFolder__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./IconFolder */ "./resources/js/components/Icons/IconFolder.js");
/* harmony import */ var _IconCreators__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./IconCreators */ "./resources/js/components/Icons/IconCreators.js");
/* harmony import */ var _IconTransaction__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./IconTransaction */ "./resources/js/components/Icons/IconTransaction.js");
/* harmony import */ var _IconMove__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./IconMove */ "./resources/js/components/Icons/IconMove.js");
/* harmony import */ var _IconMore__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./IconMore */ "./resources/js/components/Icons/IconMore.js");
/* harmony import */ var _IconLess__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./IconLess */ "./resources/js/components/Icons/IconLess.js");
/* harmony import */ var _IconCart__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./IconCart */ "./resources/js/components/Icons/IconCart.js");
/* harmony import */ var _IconWallet__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./IconWallet */ "./resources/js/components/Icons/IconWallet.js");
/* harmony import */ var _IconFacebook__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./IconFacebook */ "./resources/js/components/Icons/IconFacebook.js");
/* harmony import */ var _IconInstagram__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./IconInstagram */ "./resources/js/components/Icons/IconInstagram.js");
/* harmony import */ var _IconInstagramOutline__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./IconInstagramOutline */ "./resources/js/components/Icons/IconInstagramOutline.js");
/* harmony import */ var _IconTwitter__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./IconTwitter */ "./resources/js/components/Icons/IconTwitter.js");
/* harmony import */ var _IconTwitterSimple__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./IconTwitterSimple */ "./resources/js/components/Icons/IconTwitterSimple.js");
/* harmony import */ var _IconLinkedin__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./IconLinkedin */ "./resources/js/components/Icons/IconLinkedin.js");
/* harmony import */ var _IconFavorite__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./IconFavorite */ "./resources/js/components/Icons/IconFavorite.js");
/* harmony import */ var _IconProfileMobile__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./IconProfileMobile */ "./resources/js/components/Icons/IconProfileMobile.js");
/* harmony import */ var _IconHeart__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./IconHeart */ "./resources/js/components/Icons/IconHeart.js");
/* harmony import */ var _IconHeartOutline__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./IconHeartOutline */ "./resources/js/components/Icons/IconHeartOutline.js");
/* harmony import */ var _IconCube2__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./IconCube2 */ "./resources/js/components/Icons/IconCube2.js");
/* harmony import */ var _IconTotalCollection__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./IconTotalCollection */ "./resources/js/components/Icons/IconTotalCollection.js");
/* harmony import */ var _IconOwners__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./IconOwners */ "./resources/js/components/Icons/IconOwners.js");
/* harmony import */ var _IconCookies__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./IconCookies */ "./resources/js/components/Icons/IconCookies.js");
/* harmony import */ var _IconDiscord__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./IconDiscord */ "./resources/js/components/Icons/IconDiscord.js");
/* harmony import */ var _IconPinterest__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./IconPinterest */ "./resources/js/components/Icons/IconPinterest.js");
/* harmony import */ var _IconTiktok__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./IconTiktok */ "./resources/js/components/Icons/IconTiktok.js");
/* harmony import */ var _IconOpenNewTab__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./IconOpenNewTab */ "./resources/js/components/Icons/IconOpenNewTab.js");
/* harmony import */ var _IconChevronThin__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./IconChevronThin */ "./resources/js/components/Icons/IconChevronThin.js");
/* harmony import */ var _IconBasketEmpty__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./IconBasketEmpty */ "./resources/js/components/Icons/IconBasketEmpty.js");
/* harmony import */ var _IconShare__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./IconShare */ "./resources/js/components/Icons/IconShare.js");



















































































/***/ }),

/***/ "./resources/js/components/Modal/ReactModal.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Modal/ReactModal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement('#app');
var ReactModal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      body = _useState6[0],
      setBody = _useState6[1];

  var className = props.className,
      overlayClassName = props.overlayClassName,
      _props$showCloseButto = props.showCloseButton,
      showCloseButton = _props$showCloseButto === void 0 ? true : _props$showCloseButto,
      _props$onRequestClose = props.onRequestClose,
      _onRequestClose = _props$onRequestClose === void 0 ? true : _props$onRequestClose,
      _props$displayHeader = props.displayHeader,
      displayHeader = _props$displayHeader === void 0 ? true : _props$displayHeader;

  var modalClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('Content', className);
  var modalOverlayClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('Overlay', overlayClassName);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      setContent: function setContent(contentTitle, contentBody) {
        _setContent(contentTitle, contentBody);
      },
      open: function open() {
        _open();
      },
      close: function close() {
        _close();
      }
    };
  });

  var _setContent = function _setContent(contentTitle, contentBody) {
    var openModal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    setTitle(contentTitle !== null && contentTitle !== void 0 ? contentTitle : null);
    setBody(contentBody !== null && contentBody !== void 0 ? contentBody : null);
    setIsOpen(openModal);
  };

  var _open = function _open() {
    setIsOpen(true);
  };

  var _close = function _close() {
    setIsOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: modalClass,
    overlayClassName: modalOverlayClass,
    isOpen: isOpen,
    onRequestClose: function onRequestClose() {
      return _onRequestClose && _close();
    },
    shouldCloseOnOverlayClick: false,
    children: [displayHeader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "modal-header ".concat(!title || !title.length ? 'modal-no-border' : ''),
      children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        children: title
      }), showCloseButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: _close,
        className: "modal-btn-close"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "modal-body",
      children: body
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactModal);

/***/ }),

/***/ "./resources/js/components/Popover/ReactPopover.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Popover/ReactPopover.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_tiny_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tiny-popover */ "./node_modules/react-tiny-popover/dist/Popover.js");
/* harmony import */ var react_tiny_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tiny_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ReactPopover = function ReactPopover(_ref) {
  var _content = _ref.content,
      position = _ref.position,
      children = _ref.children,
      _ref$closeOnClickOuts = _ref.closeOnClickOutside,
      closeOnClickOutside = _ref$closeOnClickOuts === void 0 ? true : _ref$closeOnClickOuts;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPopoverOpen = _useState2[0],
      setIsPopoverOpen = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_tiny_popover__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    isOpen: isPopoverOpen,
    onClickOutside: function onClickOutside() {
      return closeOnClickOutside && setIsPopoverOpen(false);
    },
    positions: position || ['bottom'],
    content: function content(_ref2) {
      var position = _ref2.position,
          childRect = _ref2.childRect,
          popoverRect = _ref2.popoverRect;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_tiny_popover__WEBPACK_IMPORTED_MODULE_1__.ArrowContainer, {
        position: position,
        childRect: childRect,
        popoverRect: popoverRect,
        arrowColor: "white",
        arrowSize: 10,
        arrowStyle: {
          opacity: 1
        },
        className: "popover-arrow-container",
        arrowClassName: "popover-arrow",
        children: _content
      });
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      onClick: function onClick() {
        return setIsPopoverOpen(!isPopoverOpen);
      },
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactPopover);

/***/ }),

/***/ "./resources/js/components/Shared/CookiePolicy.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Shared/CookiePolicy.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./resources/js/components/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/build/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Cookie = function Cookie(_ref) {
  var AcceptAllCookiesCallback = _ref.AcceptAllCookiesCallback,
      SaveSettingsCallback = _ref.SaveSettingsCallback;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      analyticsCookie = _useState2[0],
      setAnalyticsCookie = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      thirdPartyCookie = _useState4[0],
      setThirdPartyCookie = _useState4[1];

  var handleAllCookies = function handleAllCookies() {
    setAnalyticsCookie(true);
    setThirdPartyCookie(true);
    AcceptAllCookiesCallback(true, true);
  };

  var handleChosenCookies = function handleChosenCookies() {
    setAnalyticsCookie(analyticsCookie);
    setThirdPartyCookie(thirdPartyCookie);
    SaveSettingsCallback(analyticsCookie, thirdPartyCookie);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "form-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "form-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        formField: {
          name: 'functional_cookies',
          label: t('cookies.functional_cookies'),
          readOnly: true
        },
        value: true,
        onChange: function onChange(e) {}
      }, 'functional_cookies'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
        formField: {
          name: 'functional_cookies_content',
          disableParse: true,
          text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "message",
            children: t('cookies.functional_cookies_content')
          })
        }
      }, 'functional_cookies_content'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        formField: {
          name: 'analytics_cookies',
          label: t('cookies.analytics_cookies'),
          readOnly: false
        },
        value: analyticsCookie,
        onChange: function onChange(e) {
          setAnalyticsCookie(!analyticsCookie);
        }
      }, 'analytics_cookies'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
        formField: {
          name: 'analytics_cookies_content',
          disableParse: true,
          text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "message",
            children: t('cookies.analytics_cookies_content')
          })
        }
      }, 'analytics_cookies_content'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        formField: {
          name: 'third_party_cookies',
          label: t('cookies.third_party_cookies'),
          readOnly: false
        },
        value: thirdPartyCookie,
        onChange: function onChange(e) {
          setThirdPartyCookie(!thirdPartyCookie);
        }
      }, 'third_party_cookies'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
        formField: {
          name: 'third_party_cookies_content',
          disableParse: true,
          text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "message",
            children: t('cookies.third_party_cookies_content')
          })
        }
      }, 'third_party_cookies_content'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "form-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "btn btn-primary-ghost-2 btn-public btn-sm",
          type: "button",
          onClick: function onClick() {
            return handleChosenCookies();
          },
          children: t('cookies.save_settings')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "btn btn-primary btn-public btn-sm",
          type: "submit",
          onClick: function onClick() {
            return handleAllCookies();
          },
          children: t('cookies.accept_all')
        })]
      })]
    })
  });
};

var CookiePolicy = function CookiePolicy() {
  var _useTranslation2 = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(),
      t = _useTranslation2.t;

  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get('consent-cookie') ? 'hidden' : 'show '),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      timer = _useState8[0],
      setTimer = _useState8[1];

  var links = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.usePage)().props.links;

  var handleCookiePolicy = function handleCookiePolicy() {
    var title = t('cookies.summary_title');

    var body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Cookie, {
      AcceptAllCookiesCallback: handleAcceptAllCookiesCallback,
      SaveSettingsCallback: handleSaveSettingsCallback
    });

    modalRef.current.setContent(title, body);
  };

  function setCookiesAndVisibility(analyticsCookie, thirdPartyCookie) {
    clearTimeout(timer);
    setVisible('hidden');
    js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set('consent-cookie', true, {
      expires: 3650,
      sameSite: 'Lax'
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set('functional-cookies', true, {
      expires: 3650,
      sameSite: 'Lax'
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set('analytics-cookies', analyticsCookie !== null && analyticsCookie !== void 0 ? analyticsCookie : true, {
      expires: 3650,
      sameSite: 'Lax'
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set('third-party-cookies', thirdPartyCookie !== null && thirdPartyCookie !== void 0 ? thirdPartyCookie : true, {
      expires: 3650,
      sameSite: 'Lax'
    });
  }

  var handleAcceptAllCookiesCallback = function handleAcceptAllCookiesCallback(analyticsCookie, thirdPartyCookie) {
    setCookiesAndVisibility(analyticsCookie, thirdPartyCookie);
    modalRef.current.close();
  };

  var handleSaveSettingsCallback = function handleSaveSettingsCallback(analyticsCookie, thirdPartyCookie) {
    setCookiesAndVisibility(analyticsCookie, thirdPartyCookie);
    modalRef.current.close();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get('consent-cookie')) {
      setTimer(setTimeout(function () {
        setCookiesAndVisibility(false, false);
      }, 900000));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((react_cookie_consent__WEBPACK_IMPORTED_MODULE_2___default()), {
      location: "bottom",
      visible: visible,
      cookieName: "consent-cookie",
      style: {
        background: '#E2F0F3'
      },
      buttonStyle: {
        display: 'none'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "cookies-banner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "cookies-banner__wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "cookies-banner__info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.IconCookies, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "ml-xl",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  children: t('cookies.cookie_title')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                  children: [t('cookies.content'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    href: links.privacyPolicy.index,
                    target: "_blank",
                    rel: "noreferrer",
                    children: t('cookies.privacy_policy')
                  }), "."]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              className: "btn btn-primary-ghost-2 btn-public btn-sm",
              onClick: function onClick() {
                return handleCookiePolicy();
              },
              children: t('cookies.manage_settings')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              className: "btn btn-primary btn-public btn-sm",
              onClick: function onClick() {
                return setCookiesAndVisibility();
              },
              children: t('cookies.accept_cookies')
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.ReactModal, {
        ref: modalRef,
        className: "ReactModal__Content--Medium ReactModal__Cookies public-page",
        overlayClassName: "ReactModal__Overlay--dark"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookiePolicy);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Admin/Header.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Admin/Header.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _assets_images_logo_waw_street_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/images/logo-waw-street.svg */ "./resources/assets/images/logo-waw-street.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Header = function Header() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props,
      auth = _usePage$props.auth,
      links = _usePage$props.links;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("header", {
    className: "main-header",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: "aside-menu__burger",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconMenu, {
          className: "text-19"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
        className: "branding",
        href: links.admin.users.index,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "branding__mark",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: _assets_images_logo_waw_street_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
            alt: "Pisaaf"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "anchor-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconProfile, {
          className: "user-icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "welcome-user",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            children: [t('ui.hello'), "  ", auth.user.username, ","]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: links.user.myProfile.index,
            children: t('ui.manage_profile')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
          className: "logout-btn",
          href: "/logout",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconLogout, {
            className: "fill-tertiary"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Admin/LayoutAdmin.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Admin/LayoutAdmin.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideMenu */ "./resources/js/components/Shared/Layout/Admin/SideMenu.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./resources/js/components/Shared/Layout/Admin/Header.js");
/* harmony import */ var _ToastMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ToastMessages */ "./resources/js/components/Shared/ToastMessages.js");
/* harmony import */ var _CookiePolicy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CookiePolicy */ "./resources/js/components/Shared/CookiePolicy.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var LayoutAdmin = function LayoutAdmin(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    id: "main-layout",
    className: "admin-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SideMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("main", {
      id: "main",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container",
        children: props.children
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ToastMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CookiePolicy__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutAdmin);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Admin/SideMenu.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Admin/SideMenu.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var SideMenu = function SideMenu() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      links = _usePage$props.links,
      url = _usePage$props.url;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("aside", {
    onMouseEnter: function onMouseEnter() {
      return setIsOpen(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsOpen(false);
    },
    className: "aside-menu ".concat(isOpen ? 'is-open' : ''),
    id: "side-nav",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
        className: "aside-menu__nav",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          onClick: function onClick() {
            return setIsOpen(!isOpen);
          },
          className: "aside-menu__burger",
          children: isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconClose, {
            className: "text-19 text-white stroke-current"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconMenu, {
            className: "text-19"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
        className: "aside-menu-navigation__main",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
          className: "aside-menu-navigation__list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "aside-menu-navigation__list-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: links.admin.users.index,
              className: "aside-menu-navigation__anchor ".concat(url.current_uri === links.admin.users.index ? 'active' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconUsers, {
                className: "text-22"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "aside-menu-navigation__text",
                children: t('menu.users')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "aside-menu-navigation__list-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: links.creators.index,
              className: "aside-menu-navigation__anchor ".concat(url.current_uri === links.creators.index ? 'active' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconCreators, {
                className: "text-22"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "aside-menu-navigation__text",
                children: t('menu.creators')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "aside-menu-navigation__list-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: links.category.index,
              className: "aside-menu-navigation__anchor ".concat(url.current_uri === links.category.index ? 'active' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconList, {
                className: "text-22"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "aside-menu-navigation__text",
                children: t('menu.categories')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "aside-menu-navigation__list-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: links.collection.index,
              className: "aside-menu-navigation__anchor ".concat(url.current_uri === links.collection.index ? 'active' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconFolder, {
                className: "text-22"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "aside-menu-navigation__text",
                children: t('menu.collections')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "aside-menu-navigation__list-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: links.item.index,
              className: "aside-menu-navigation__anchor ".concat(url.current_uri === links.item.index ? 'active' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconImage, {
                className: "text-22"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "aside-menu-navigation__text",
                children: t('menu.items')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "aside-menu-navigation__list-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: links.nft.index,
              className: "aside-menu-navigation__anchor ".concat(url.current_uri === links.nft.index ? 'active' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconGallery, {
                className: "text-22"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "aside-menu-navigation__text",
                children: t('menu.nfts')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            className: "aside-menu-navigation__list-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: links.transaction.index,
              className: "aside-menu-navigation__anchor ".concat(url.current_uri === links.transaction.index ? 'active' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconTransaction, {
                className: "text-22"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "aside-menu-navigation__text",
                children: t('menu.transactions')
              })]
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
      className: "aside-menu-link",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
        href: "/",
        className: "logout-btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconLogout, {
          className: "text-22"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMenu);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Auth/LayoutAuth.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Auth/LayoutAuth.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ToastMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ToastMessages */ "./resources/js/components/Shared/ToastMessages.js");
/* harmony import */ var _CookiePolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CookiePolicy */ "./resources/js/components/Shared/CookiePolicy.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var LayoutAuthTest = function LayoutAuthTest(_ref) {
  var children = _ref.children;
  var isAdminSubdomain = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props.isAdminSubdomain;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    id: "main-layout",
    className: "auth-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container auth-container",
      id: "main-container",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ToastMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {}), !isAdminSubdomain && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CookiePolicy__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutAuthTest);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/FaqPublic.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/FaqPublic.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Accordion/Accordion */ "./resources/js/components/Accordion/Accordion.js");
/* harmony import */ var _assets_images_public_image_background_header_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/images/public/image-background-header.jpg */ "./resources/assets/images/public/image-background-header.jpg");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var FaqPublic = function FaqPublic() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)(),
      t = _useTranslation.t;

  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__.usePage)().props,
      links = _usePage$props.links,
      app = _usePage$props.app;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeQuestion = _useState2[0],
      setActiveQuestion = _useState2[1];

  var setIsOpenQuestion = function setIsOpenQuestion(activeQuestionLocal) {
    setActiveQuestion(activeQuestion === activeQuestionLocal ? null : activeQuestionLocal); // setActiveProject(null)
  };

  var settings = {
    className: 'slick-overflow-right',
    arrows: false,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '18%',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 576
    }, {
      breakpoint: 10000,
      settings: 'unslick'
    }]
  };
  var faqList = [{
    id: 1,
    faq_title: t('footer.faq.questions.what_is_nft'),
    faq_body: t('footer.faq.answers.what_is_nft')
  }, {
    id: 2,
    faq_title: t('footer.faq.questions.how_to_by'),
    faq_body: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(t('footer.faq.answers.how_to_by', {
      link: "<a href=\"https://youtu.be/PwmWbJl-xNA\" target='_blank' class='text-white text-bold'>".concat(t('ui.this_video').toLowerCase(), "</a>"),
      link2: "<a href=\"/assets/pdf/wawstreet_how_to_metamask_".concat(app.locale, ".pdf\" target=\"_blank\" rel=\"noreferrer\"  class='text-white text-bold'>").concat(t('ui.pdf_file_2'), "</a>")
    }))
  }, {
    id: 3,
    faq_title: t('footer.faq.questions.creator'),
    faq_body: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(t('footer.faq.answers.creator', {
      linkContact: links.contactUs.index
    }))
  }, {
    id: 4,
    faq_title: t('footer.faq.questions.sell_nft'),
    faq_body: t('footer.faq.answers.sell_nft')
  }, {
    id: 5,
    faq_title: t('footer.faq.questions.contact'),
    faq_body: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(t('footer.faq.answers.contact', {
      linkFaq: links.faq.index,
      linkContact: links.contactUs.index
    }))
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
    className: "faq faq--shared",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "col-12 col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "faq__split faq__split--left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "faq__split-bg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                src: _assets_images_public_image_background_header_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
                alt: "background for faq section"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h3", {
              className: "faq__heading",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-light-green-2",
                children: t('faq.quickLinks_title.start')
              }), t('faq.quickLinks_title.your_journey_in_the_nfts_world')]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "faq__split-tags",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, settings), {}, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                  href: links.faq.index,
                  className: "tags__item",
                  children: t('homepage.quickLinks.faq')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                  href: links.collection["public"].index,
                  className: "tags__item",
                  children: t('homepage.quickLinks.list_collections')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                  href: links.creators["public"].index,
                  className: "tags__item",
                  children: t('homepage.quickLinks.list_creators')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                  href: links.user.register.index,
                  className: "tags__item",
                  children: t('homepage.quickLinks.sign_up_page')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                  href: links.aboutUs.index,
                  className: "tags__item",
                  children: t('homepage.quickLinks.about_us')
                })]
              }))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "col-12 col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "faq__split faq__split--right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "faq__split-bg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h3", {
              className: "faq__heading",
              children: [t('faq.quickLinks_title.we_answer'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-light-green-2",
                children: t('faq.quickLinks_title.your_questions')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "faq__questions",
              children: faqList.map(function (faqItem) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                  isOpen: activeQuestion === faqItem.id,
                  onToggle: function onToggle() {
                    return setIsOpenQuestion(faqItem.id);
                  },
                  customWrapperClass: "accordion__stacks accordion--xl",
                  heading: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      children: faqItem.faq_title
                    }), activeQuestion === faqItem.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_4__.IconChevronUp, {
                      className: "fill-light-green-2"
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_4__.IconChevronDown, {
                      className: "fill-light-green-2"
                    })]
                  }),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "accordion__body",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "text-white",
                      children: faqItem.faq_body
                    })
                  })
                }, 'team-' + faqItem.id);
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FaqPublic);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/FooterPublic.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/FooterPublic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _WawStreetLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WawStreetLogo */ "./resources/js/components/Shared/Layout/Public/WawStreetLogo.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var FooterPublic = function FooterPublic() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(),
      t = _useTranslation.t;

  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      links = _usePage$props.links,
      activeCategories = _usePage$props.activeCategories,
      socialNetworks = _usePage$props.socialNetworks;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("footer", {
    className: "footer",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "col-lg-6 col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "footer__branding-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_WawStreetLogo__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "footer__copyrights",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                children: ["\xA9 WawStreet 2022 - ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                  href: links.termsAndConditions.index,
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Terms and conditions"
                }), "- ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                  href: links.privacyPolicy.index,
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Privacy Policy"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "col-lg-6 col-md-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "col-sm-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "footer__links",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  className: "public-h4",
                  children: t('footer.browse_collections')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "list",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_4__.Link, {
                      href: links.collection["public"].index,
                      children: t('footer.all_collections')
                    })
                  }), activeCategories.map(function (category, i) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_utils__WEBPACK_IMPORTED_MODULE_4__.Link, {
                        href: "".concat(links.collection["public"].index, "?categoryId=").concat(category.id),
                        children: [" ", (0,_utils__WEBPACK_IMPORTED_MODULE_4__.trans)(category.name), " "]
                      })
                    }, "category-".concat(i));
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "col-sm-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "footer__links",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  className: "public-h4",
                  children: t('footer.getting_started_ with_nft')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "list",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_4__.Link, {
                      href: "".concat(links.faq.index, "?activeFaqLink=general"),
                      children: t('faq.general_info.general_info')
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_4__.Link, {
                      href: "".concat(links.faq.index, "?activeFaqLink=practical"),
                      children: t('faq.practical_information.practical_information')
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_4__.Link, {
                      href: "".concat(links.faq.index, "?activeFaqLink=buyingNfts"),
                      children: t('faq.buying_nfts.buying_nfts')
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_4__.Link, {
                      href: "".concat(links.faq.index, "?activeFaqLink=technical"),
                      children: t('faq.technical_information.technical_information')
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "footer__links",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  className: "public-h4",
                  children: t('footer.follow_us')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "inline-list footer__links-social",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: socialNetworks.twitter,
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconTwitter, {})
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: socialNetworks.instagram,
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconInstagram, {})
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: socialNetworks.facebook,
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconFacebook, {})
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: socialNetworks.discord,
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconDiscord, {})
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "footer__copyrights--mobile",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                  children: ["\xA9 WawStreet 2022 - ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    href: links.termsAndConditions.index,
                    children: "Terms and conditions - Privacy Policy"
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "col-sm-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "footer__links",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  className: "public-h4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_4__.Link, {
                    href: links.contactUs.index,
                    target: "_blank",
                    rel: "noreferrer",
                    children: t('footer.contact')
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
                  className: "list",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                      className: "public-h4",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_4__.Link, {
                        href: links.aboutUs.index,
                        target: "_blank",
                        rel: "noreferrer",
                        children: t('footer.about_us')
                      })
                    })
                  })
                })]
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterPublic);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/Header/Basket.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/Header/Basket.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _BasketItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasketItem */ "./resources/js/components/Shared/Layout/Public/Header/BasketItem.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Form_FormElements_FieldError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Form/FormElements/FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _utils_eventEmitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utils/eventEmitter */ "./resources/js/utils/eventEmitter.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Basket = function Basket() {
  var _errors$;

  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      links = _usePage$props.links,
      auth = _usePage$props.auth;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      basketData = _useState2[0],
      setBasketData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      basketMessage = _useState4[0],
      setBasketMessage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      paymentResponseUrl = _useState6[0],
      setPaymentResponseUrl = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      redirectingCheckout = _useState10[0],
      setRedirectingCheckout = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (paymentResponseUrl) {
      window.location = paymentResponseUrl;
    }
  }, [paymentResponseUrl]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _utils__WEBPACK_IMPORTED_MODULE_2__.api.get(links.order.getBasketData).then(function (res) {
      var result = Object.keys(res.data.basket).map(function (key) {
        return [Number(key), res.data.basket[key]];
      });
      setBasketData(result);
      setBasketMessage((0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])("<p className='text-center'>".concat(t('order.basket.empty_basket'), "</p>")));
    });
  }, []);

  var calculateTotalCost = function calculateTotalCost() {
    var total = 0;
    basketData.forEach(function (element, index) {
      total = total + element[1].price * element[1].quantity;
    });
    return total;
  };

  var handleCheckoutBasket = function handleCheckoutBasket(e) {
    e.target.disabled = true;
    var data = {
      basket: true
    };

    if (!auth) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__.Inertia.visit(links.user.login);
    } else if (!auth.user.wallet) {
      document.getElementById('meta-mask-button').click();
    } else {
      setRedirectingCheckout(true);
      _utils__WEBPACK_IMPORTED_MODULE_2__.api.post(links.order.checkoutBasket, data).then(function (res) {
        setPaymentResponseUrl(res.data.redirectUrl);
      })["catch"](function (error) {
        setRedirectingCheckout(false);
        e.target.disabled = false;
        setErrors(JSON.parse(error.response.data.errors.basket[0]));
      });
    }
  };

  _utils_eventEmitter__WEBPACK_IMPORTED_MODULE_6__.EventEmitter.on('clear-basket', function () {
    setBasketData([]);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "dropdown__menu dropdown__basket",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "dropdown__header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
          className: "dropdown__title",
          children: t('order.basket.title')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "dropdown__body basket",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "dropdown__max-height dropdown__max-height--30vh",
          children: !!basketData.length && basketData.map(function (element, index) {
            var _errors$saleId;

            var order = element[1];
            var saleId = element[0];
            var checkoutErrors = (_errors$saleId = errors[saleId]) !== null && _errors$saleId !== void 0 ? _errors$saleId : null;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_BasketItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              saleId: saleId,
              order: order,
              index: index,
              setBasketData: setBasketData,
              checkoutErrors: checkoutErrors
            }, index);
          })
        }), !!basketData.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "basket__orders basket__section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
              className: "basket__subtitle",
              children: t('order.basket.basket_info')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", {
              className: "basket__orders-list list",
              children: basketData.map(function (element, index) {
                var order = element[1];
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                    className: "basket__orders-label",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      className: "basket__orders-quantity",
                      children: "".concat(order.quantity, " x ")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      children: order.nftName
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                    className: "basket__orders-price",
                    children: "\u20AC ".concat(parseFloat(order.price))
                  })]
                }, index);
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "basket__total",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "flex-space-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "basket__subtitle",
                children: t('order.basket.total')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "basket__subtitle text-light-green-1",
                children: "".concat(calculateTotalCost(), " \u20AC")
              })]
            }), !redirectingCheckout && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                type: "button",
                className: "btn btn-primary",
                onClick: function onClick(e) {
                  return handleCheckoutBasket(e);
                },
                children: t('ui.checkout')
              })
            }), redirectingCheckout && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                children: t('order.redirecting')
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Form_FormElements_FieldError__WEBPACK_IMPORTED_MODULE_5__.FieldError, {
                errors: (_errors$ = errors[0]) !== null && _errors$ !== void 0 ? _errors$ : ''
              })
            })]
          })]
        }), !basketData.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "dropdown__basket--empty",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_7__.IconBasketEmpty, {}), basketMessage]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basket);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/Header/BasketItem.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/Header/BasketItem.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _Form_FormElements_FieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Form/FormElements/FieldError */ "./resources/js/components/Form/FormElements/FieldError.js");
/* harmony import */ var _utils_eventEmitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/eventEmitter */ "./resources/js/utils/eventEmitter.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var BasketItem = function BasketItem(_ref) {
  var saleId = _ref.saleId,
      order = _ref.order,
      index = _ref.index,
      setBasketData = _ref.setBasketData,
      checkoutErrors = _ref.checkoutErrors;
  var links = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.links;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      quantityError = _useState2[0],
      setQuantityError = _useState2[1];

  var handleBasketQuantityChange = function handleBasketQuantityChange(type, saleId) {
    setQuantityError([]);
    var data = {
      saleId: saleId,
      type: type
    };
    _utils__WEBPACK_IMPORTED_MODULE_3__.api.post(links.order.basketQuantityChange, data).then(function (res) {
      var result = Object.keys(res.data.basket).map(function (key) {
        return [Number(key), res.data.basket[key]];
      });
      setBasketData(result);
      _utils_eventEmitter__WEBPACK_IMPORTED_MODULE_5__.EventEmitter.emit('update-basket-counter', res.data.basketCounter);
    })["catch"](function (error) {
      setQuantityError(error.response.data.errors.saleId);
    });
  };

  var handleDeleteFromBasket = function handleDeleteFromBasket(saleId) {
    var data = {
      saleId: saleId
    };
    _utils__WEBPACK_IMPORTED_MODULE_3__.api.post(links.order.deleteFromBasket, data).then(function (res) {
      var result = Object.keys(res.data.basket).map(function (key) {
        return [Number(key), res.data.basket[key]];
      });
      setBasketData(result);
      _utils_eventEmitter__WEBPACK_IMPORTED_MODULE_5__.EventEmitter.emit('update-basket-counter', res.data.basketCounter);
      setQuantityError([]);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "basket__nft basket__section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "basket__nft-thumbnail",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
        src: order.nftImage,
        alt: "nft thumbnail"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "basket__nft-price",
        children: "\u20AC ".concat(parseFloat(order.price))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "basket__nft-details",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
        className: "basket__nft-name",
        children: order.nftName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "basket__nft-collection-name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
          children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.trans)(order.collectionName)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "basket__nft-order",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "basket__nft-quantity",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            type: "button",
            className: "btn-stripped btn-circle",
            onClick: function onClick() {
              return handleBasketQuantityChange('minus', saleId);
            },
            children: "-"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "basket__nft-quantity-indicator",
            children: order.quantity
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            type: "button",
            className: "btn-stripped btn-circle",
            onClick: function onClick() {
              return handleBasketQuantityChange('plus', saleId);
            },
            children: "+"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Form_FormElements_FieldError__WEBPACK_IMPORTED_MODULE_4__.FieldError, {
            errors: quantityError.length ? quantityError : checkoutErrors
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "basket__nft-remove",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "btn-stripped btn-circle btn-circle--dark",
            onClick: function onClick() {
              return handleDeleteFromBasket(saleId);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconTrash, {})
          })
        })]
      })]
    })]
  }, index);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketItem);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/Header/Metamask.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/Header/Metamask.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_copy_to_clipboard_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-copy-to-clipboard/src */ "./node_modules/react-copy-to-clipboard/src/index.js");
/* harmony import */ var react_copy_to_clipboard_src__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard_src__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_open_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-open-app */ "./node_modules/react-open-app/dist/index.js");
/* harmony import */ var react_open_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_open_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var Metamask = function Metamask(_ref) {
  var modalRef = _ref.modalRef,
      setIsModalOpen = _ref.setIsModalOpen;
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      auth = _usePage$props.auth,
      links = _usePage$props.links,
      app = _usePage$props.app,
      url = _usePage$props.url;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(auth ? auth.user.wallet : null),
      _useState2 = _slicedToArray(_useState, 2),
      wallet = _useState2[0],
      setWallet = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      balance = _useState4[0],
      setBalance = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      metamaskConnectionOpen = _useState6[0],
      setMetamaskConnectionOpen = _useState6[1];

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)(),
      t = _useTranslation.t;

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts)(),
      addToast = _useToasts.addToast;

  var isMobileTablet = react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile || react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isTablet;
  var metaMaskUrl = "https://metamask.app.link/dapp/".concat(url.current_full.replace('http://', '').replace('https://', '')); // const modalRef = useRef()

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (wallet) {
      getBalance(wallet);
    }
  }, [wallet]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (auth) {
      setWallet(auth.user.wallet);
    }
  }, [auth]);

  var handleConnect = function handleConnect() {
    if (!auth) {
      var title = '';

      var body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(t('metamask.need_auth', {
          link: "<a href=\"".concat(links.user.login, "\" class=\"text-link\">").concat(t('ui.sign_in'), "</a>")
        }))
      });

      modalRef.current.setContent(title, body);
    } else {
      if (window.ethereum) {
        setMetamaskConnectionOpen(true);
        window.ethereum.request({
          method: 'eth_requestAccounts'
        }).then(function (res) {
          var wallet = res[0];
          _utils__WEBPACK_IMPORTED_MODULE_2__.api.post(links.user.setWallet, {
            wallet: wallet
          }).then(function (res2) {
            setMetamaskConnectionOpen(false);
            _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.reload();
          })["catch"](function (error) {
            setMetamaskConnectionOpen(false);

            if (error.response.status === 422) {
              var _title = '';

              var _body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                children: t('metamask.used_wallet')
              });

              modalRef.current.setContent(_title, _body);
            }
          });
        })["catch"](function (error) {
          if (error) {
            setMetamaskConnectionOpen(false);
            var _title2 = '';

            var _body2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              children: t('metamask.something_went_wrong_with_connect')
            });

            modalRef.current.setContent(_title2, _body2);
          }
        });
      } else {
        var _title3 = '';

        var _body3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(t('metamask.no_metamask', {
            link: "<a href=\"https://youtu.be/PwmWbJl-xNA\" target='_blank' class='text-link'>".concat(t('ui.video').toLowerCase(), "</a>"),
            link2: "<a href=\"/assets/pdf/wawstreet_how_to_metamask_".concat(app.locale, ".pdf\" target=\"_blank\" rel=\"noreferrer\"  class='text-link'>").concat(t('ui.pdf_file'), "</a>")
          }))
        });

        modalRef.current.setContent(_title3, _body3);
      }
    }
  };

  var handleDisconnect = function handleDisconnect() {
    setIsModalOpen(true);
    var title = '';

    var body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        children: t('metamask.disconnect_message')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "form-footer form-footer-right col-md-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
          className: "btn btn-primary-ghost",
          type: "submit",
          onClick: function onClick() {
            modalRef.current.close();
            setIsModalOpen(false);
          },
          children: t('ui.no')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
          className: "btn btn-primary",
          type: "submit",
          onClick: function onClick() {
            _utils__WEBPACK_IMPORTED_MODULE_2__.api.post(links.user.setWallet, {
              wallet: null
            }).then(function (res2) {
              modalRef.current.close();
              _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.reload();
              setIsModalOpen(false);
            });
          },
          children: t('ui.yes')
        })]
      })]
    });

    modalRef.current.setContent(title, body);
  };

  var getBalance = function getBalance(address) {
    // Requesting balance method
    if (window.ethereum) {
      window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      }).then(function (balance) {
        // Setting balance
        setBalance(ethers__WEBPACK_IMPORTED_MODULE_11__.formatEther(balance));
      });
    }
  };

  var copyToClipboard = function copyToClipboard() {
    addToast(t('metamask.copied_to_clipboard'), {
      appearance: 'success'
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "dropdown__menu dropdown__wallet",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "dropdown__header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
          className: "dropdown__title",
          children: t('metamask.my_wallet')
        }), auth && wallet && window.ethereum && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_copy_to_clipboard_src__WEBPACK_IMPORTED_MODULE_5__.CopyToClipboard, {
          text: wallet,
          onCopy: function onCopy() {
            return copyToClipboard();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
            className: "dropdown__link",
            children: [wallet.substring(0, 4), "...", wallet.substring(wallet.length - 4, wallet.length)]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "dropdown__body",
        children: [auth && wallet && window.ethereum && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "mock__input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              children: t('metamask.current_balance')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h5", {
              children: [parseFloat(balance).toFixed(4), " MATIC"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
            className: "btn btn-primary-ghost",
            onClick: handleDisconnect,
            children: t('metamask.disconnect_wallet')
          })]
        }), (!auth || auth && !wallet || !window.ethereum) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-14",
            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(t('metamask.description', {
              link: "<a className='text-underline text-primary text-bold' \n                href=".concat(links.termsAndConditions.index, " target=\"_blank\">").concat(t('metamask.terms_of_service'), "</a>")
            }))
          }), (!isMobileTablet || isMobileTablet && window.ethereum) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
            className: "btn btn-primary-ghost",
            onClick: handleConnect,
            children: metamaskConnectionOpen ? t('metamask.connecting_to_metamask') : t('metamask.connect_to_metamask')
          }), isMobileTablet && !window.ethereum && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((react_open_app__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: metaMaskUrl,
            android: metaMaskUrl,
            ios: metaMaskUrl,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "btn btn-primary-ghost width-100",
              children: metamaskConnectionOpen ? t('metamask.connecting_to_metamask') : t('metamask.connect_to_metamask')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "dropdown__section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
              className: "text-dark-blue-2",
              children: t('metamask.need_help')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              className: "text-14",
              children: t('metamask.we_give_answer')
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "dropdown__section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
              className: "dropdown__link",
              href: "https://youtu.be/PwmWbJl-xNA",
              target: "_blank",
              rel: "noreferrer",
              children: t('metamask.how_to_create')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
              href: '/assets/pdf/wawstreet_how_to_metamask_' + app.locale + '.pdf',
              className: "dropdown__link",
              target: "_blank",
              rel: "noreferrer",
              children: t('ui.download_pdf')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
              className: "dropdown__link",
              href: "https://youtu.be/MGHCff9rjGk",
              target: "_blank",
              rel: "noreferrer",
              children: t('metamask.how_to_connect')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
              href: '/assets/pdf/wawstreet_how_to_metamask_' + app.locale + '.pdf',
              className: "dropdown__link",
              target: "_blank",
              rel: "noreferrer",
              children: t('ui.download_pdf')
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Metamask);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/HeaderPublic.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/HeaderPublic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _assets_images_public_image_background_header_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/images/public/image-background-header.jpg */ "./resources/assets/images/public/image-background-header.jpg");
/* harmony import */ var _WawStreetLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WawStreetLogo */ "./resources/js/components/Shared/Layout/Public/WawStreetLogo.js");
/* harmony import */ var _Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Popover/ReactPopover */ "./resources/js/components/Popover/ReactPopover.js");
/* harmony import */ var _LanguageDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LanguageDropdown */ "./resources/js/components/Shared/Layout/Public/LanguageDropdown.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils */ "./resources/js/utils/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../domain/Shared/Constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Header_Metamask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header/Metamask */ "./resources/js/components/Shared/Layout/Public/Header/Metamask.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../index */ "./resources/js/components/index.js");
/* harmony import */ var _Header_Basket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header/Basket */ "./resources/js/components/Shared/Layout/Public/Header/Basket.js");
/* harmony import */ var _utils_eventEmitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utils/eventEmitter */ "./resources/js/utils/eventEmitter.js");
/* harmony import */ var _Icons_IconInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../Icons/IconInfo */ "./resources/js/components/Icons/IconInfo.js");
/* harmony import */ var _Tooltip_ReactTooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../Tooltip/ReactTooltip */ "./resources/js/components/Tooltip/ReactTooltip.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























var HeaderPublic = function HeaderPublic(_ref) {
  var headerBg = _ref.headerBg,
      headerItemDetails = _ref.headerItemDetails;
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__.usePage)().props,
      auth = _usePage$props.auth,
      links = _usePage$props.links,
      activeCategories = _usePage$props.activeCategories,
      basketCount = _usePage$props.basketCount,
      activeRouteKey = _usePage$props.activeRouteKey;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!(headerItemDetails && headerItemDetails.alwaysOpen)),
      _useState2 = _slicedToArray(_useState, 2),
      showDetails = _useState2[0],
      setShowDetails = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPageScrolled = _useState4[0],
      setIsPageScrolled = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isMenuOpen = _useState6[0],
      setIsMenuOpen = _useState6[1];

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_18__.useTranslation)(),
      t = _useTranslation.t;

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isModalOpen = _useState8[0],
      setIsModalOpen = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(basketCount),
      _useState10 = _slicedToArray(_useState9, 2),
      basketCounter = _useState10[0],
      setBasketCounter = _useState10[1];

  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var toggleDetails = function toggleDetails() {
    setShowDetails(!showDetails);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      var scrollTop = window.scrollY;

      if (scrollTop > 50 && !isPageScrolled) {
        setIsPageScrolled(true);
      } else if (scrollTop <= 50 && isPageScrolled) {
        setIsPageScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPageScrolled]);
  _utils_eventEmitter__WEBPACK_IMPORTED_MODULE_13__.EventEmitter.on('update-basket-counter', function (basketCounter) {
    setBasketCounter(basketCounter);
  });
  var settings = {
    className: 'slick-centered',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    draggable: true,
    centerMode: true,
    centerPadding: '30px',
    responsive: [{
      breakpoint: 10000,
      settings: 'unslick'
    }, {
      breakpoint: 1220,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerPadding: '10%'
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: '18%'
      }
    }]
  };
  var socialMediaLinks = (headerItemDetails === null || headerItemDetails === void 0 ? void 0 : headerItemDetails.socialMediaLinks) && headerItemDetails.socialMediaLinks.map(function (sm) {
    var key = Object.keys(sm)[0];

    if (sm[key]) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
        rel: "noreferrer",
        target: "_blank",
        href: sm[key],
        className: "btn btn-sm btn-white btn-icon-center fill-dark-blue-2 mh-xxs mv-xxs text-14",
        children: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../domain/Shared/Constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[key]
      }, key);
    }

    return '';
  });

  var handleMenuOpen = function handleMenuOpen() {
    setIsMenuOpen(function (prev) {
      document.getElementById('body').classList.toggle('body__menu--opened', !prev);
      return !prev;
    });
  };

  var handleOpenCategoryDetail = function handleOpenCategoryDetail(categoryId) {
    window.open((0,_utils__WEBPACK_IMPORTED_MODULE_8__.route)("".concat(links.collection["public"].index, "?categoryId=").concat(categoryId)), '_blank');
  };

  var handleSignIn = function handleSignIn(link) {
    handleMenuOpen();
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_16__.Inertia.visit((0,_utils__WEBPACK_IMPORTED_MODULE_8__.route)(link));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("header", {
    className: "main-header header--sticky ".concat(isPageScrolled ? 'header--scrolled' : ''),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "header__top ".concat(isMenuOpen ? 'header__menu--opened' : ''),
      children: [headerBg !== 'NO_IMAGE' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "main-header__bg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
          src: headerBg !== null && headerBg !== void 0 ? headerBg : _assets_images_public_image_background_header_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
          alt: "Header background image"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "main-header__bg-overlay"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "header__top header__top--mobile",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_WawStreetLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "anchor-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("nav", {
              className: "header-nav",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
                className: "inline-list anchor-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                  className: "dropdown",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "dropdown__menu dropdown__collections",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                        className: "dropdown__body",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("ul", {
                          className: "list dropdown__max-height",
                          children: activeCategories.map(function (category, i) {
                            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_utils__WEBPACK_IMPORTED_MODULE_8__.Link, {
                                href: "".concat(links.collection["public"].index, "?categoryId=").concat(category.id),
                                children: [" ", (0,_utils__WEBPACK_IMPORTED_MODULE_8__.trans)(category.name), " "]
                              })
                            }, "category-".concat(i));
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("a", {
                          className: "dropdown__standalone-link",
                          href: links.collection["public"].index,
                          children: [t('header.view_all_collections'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconChevronRight, {})]
                        })]
                      })
                    }),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "dropdown__btn",
                      children: t('header.explore_collections')
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                    href: links.creators["public"].index,
                    children: t('header.creators')
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                    href: links.aboutUs.index,
                    children: t('header.about_us')
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "anchor-wrapper header-links",
              children: [!auth && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  className: "btn btn-primary-ghost btn-public btn-user-desk",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_8__.Link, {
                    href: links.user.login,
                    children: t('header.sign_in')
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  className: "btn btn-primary btn-public btn-user-desk",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_8__.Link, {
                    href: links.user.register.index,
                    children: t('header.sign_up')
                  })
                })]
              }), !auth && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "dropdown__menu",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: "dropdown__header",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h4", {
                      className: "dropdown__title",
                      children: "Connection"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "dropdown__body",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                      className: "btn btn-primary-ghost btn-public mt-0 mb-xs",
                      children: "Connectez-vous"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                      className: "btn btn-primary btn-public mv-0",
                      children: "Inscrivez-vous"
                    })]
                  })]
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  className: "btn btn-primary-ghost btn-icon-center btn-public btn-user-tablet",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconUser, {
                    className: "fill-white"
                  })
                })
              }), auth && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "dropdown__menu",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: "dropdown__body",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
                      className: "list",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                          href: links.user.myProfile.index,
                          children: t('header.manage_my_profile')
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                          href: links.collection.user.myCollectionsGrid,
                          children: t('header.my_collections')
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                          href: links.transaction["public"].myTransactionsIndex,
                          children: t('header.my_transactions')
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                          href: links.user.logout,
                          children: t('header.sign_out')
                        })
                      })]
                    })
                  })
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("button", {
                  className: "btn btn-primary-ghost btn-icon-right btn-public",
                  children: [t('header.my_account'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconArrowThin, {
                    className: "icon-270 fill-white"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                closeOnClickOutside: !isModalOpen,
                content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Header_Metamask__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  modalRef: modalRef,
                  setIsModalOpen: setIsModalOpen
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  className: "btn btn-primary-ghost btn-icon-center",
                  id: "meta-mask-button",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconWallet, {
                    className: "fill-white"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Header_Basket__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
                closeOnClickOutside: !isModalOpen,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  className: "btn btn-primary-ghost btn-icon-center",
                  id: "basket-button",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                    className: "icon-counter-wrapper-layer icon-counter-wrapper",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconCart, {
                      className: "fill-white"
                    }), !!basketCounter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "icon-counter",
                      children: basketCounter
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_LanguageDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
              className: "menu__burger ".concat(isMenuOpen ? 'menu__burger--opened' : ''),
              onClick: handleMenuOpen,
              children: isMenuOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconMenuPublicClosed, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconMenuPublic, {})
            })]
          })]
        }), headerItemDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "header__item-preview",
          children: [headerItemDetails && headerItemDetails.myCollectionDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "header__nav-links",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_utils__WEBPACK_IMPORTED_MODULE_8__.Link, {
              href: headerItemDetails.myCollectionDetails.backToCollections,
              className: "btn-back text-16 text-white",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconChevronLeft, {}), t('collections.public.user.back_to_my_collections')]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_8__.Link, {
              href: headerItemDetails.myCollectionDetails.detailViewOfCollection,
              className: "btn-back text-16 text-white btn-link-warning text-right",
              children: t('collections.public.user.go_to_collection')
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h2", {
            className: "text-white public-h2",
            children: headerItemDetails.title
          }), headerItemDetails.author && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h4", {
            className: "public-h4",
            children: [t('header.created_by'), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                href: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.route)(links.creators["public"].showCollectionsGrid, {
                  creator: headerItemDetails.author.id
                }),
                children: headerItemDetails.author.name
              }), " "]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "header__item-thumbnail",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
              src: headerItemDetails.thumbnail,
              alt: "Item details thumbnail"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "menu__primary ".concat(isMenuOpen ? 'menu__primary--opened' : ''),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "header__top header__top--mobile",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_WawStreetLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "anchor-wrapper header-links",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
              content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Header_Basket__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
              closeOnClickOutside: !isModalOpen,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                className: "btn btn-primary-ghost btn-icon-center",
                id: "basket-button-mobile",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  className: "icon-counter-wrapper-layer icon-counter-wrapper",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconCart, {
                    className: "fill-white"
                  }), !!basketCounter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "icon-counter",
                    children: basketCounter
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_LanguageDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
            className: "menu__burger",
            onClick: handleMenuOpen,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconMenuPublicClosed, {})
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("nav", {
        className: "menu__nav",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
            className: "menu__list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("li", {
              className: "menu__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex-align-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3", {
                  className: "menu__heading",
                  children: "Collections"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("a", {
                  href: links.collection["public"].index,
                  className: "menu__link-more",
                  children: [t('header.view_all_collections'), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconChevronRight, {
                    className: "fill-current"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "menu__slider",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, settings), {}, {
                  children: activeCategories.map(function (cat) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      className: "card card--md",
                      onClick: function onClick() {
                        return handleOpenCategoryDetail(cat.id);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                        className: "card__header card__section--no-top-padding",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                          className: "card__thumbnail",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                            className: "card__thumbnail--ratio-071",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                              src: cat.image,
                              alt: "Card thumbnail"
                            })
                          })
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                        className: "card__body text-center",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h5", {
                          className: "public-h5 ellipsis__line",
                          children: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.trans)(cat.name)
                        })
                      })]
                    }, cat.id);
                  })
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
              className: "menu__item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3", {
                className: "menu__heading",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                  href: links.creators["public"].index,
                  children: t('header.creators')
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
              className: "menu__item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3", {
                className: "menu__heading",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                  href: "#",
                  children: t('header.about_us')
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "menu__auth",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "menu__auth-wrapper",
            children: [auth && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "menu__auth-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  position: ['top'],
                  content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: "dropdown__menu",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "dropdown__body",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
                        className: "list",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                            href: links.user.myProfile.index,
                            children: t('header.manage_my_profile')
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                            href: links.collection.user.myCollectionsGrid,
                            children: t('header.my_collections')
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                            href: links.transaction["public"].myTransactionsIndex,
                            children: t('header.my_transactions')
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                            href: links.user.logout,
                            children: t('header.sign_out')
                          })
                        })]
                      })
                    })
                  }),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("button", {
                    className: "btn btn-primary-ghost btn-icon-right btn-public btn-block",
                    children: [t('header.my_account'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconArrowThin, {
                      className: "icon-270 fill-white"
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "menu__auth-item menu__auth-wallet",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  position: ['top'],
                  closeOnClickOutside: !isModalOpen,
                  content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Header_Metamask__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    modalRef: modalRef,
                    setIsModalOpen: setIsModalOpen
                  }),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                    className: "btn btn-primary-ghost btn-icon-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconWallet, {
                      className: "fill-white"
                    })
                  })
                })
              })]
            }), !auth && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "menu__auth-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  onClick: function onClick() {
                    return handleSignIn(links.user.login);
                  },
                  className: "btn btn-primary-ghost btn-public btn-block",
                  children: t('header.sign_in')
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "menu__auth-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  onClick: function onClick() {
                    return handleSignIn(links.user.register.index);
                  },
                  className: "btn btn-primary btn-public btn-block",
                  children: t('header.sign_up')
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "menu__auth-item menu__auth-lang",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_LanguageDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
                position: ['top']
              })
            })]
          })
        })
      })]
    }), headerItemDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
      className: "header__details ".concat(showDetails ? 'header__details--open' : '', " ").concat(headerItemDetails.tabList && headerItemDetails.tabList.length ? 'header__details--with-tabs' : ''),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "header__details-links",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "col-3 col-sm-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex-align-center",
                children: headerItemDetails.aboutAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: "header__details-links--desktop",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                      href: headerItemDetails.aboutAuthor,
                      target: "_blank",
                      className: "btn btn-sm btn-white btn-public text-dark-blue-2",
                      rel: "noreferrer",
                      children: t('header.about_the_author')
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: "header__details-links--mobile",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                      href: headerItemDetails.aboutAuthor,
                      target: "_blank",
                      className: "btn btn-sm btn-turquoise btn-icon-center btn-public text-18",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconUser, {})
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "col-9 col-sm-6 flex-align-center justify-end",
              children: headerItemDetails.socialMediaLinks && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "header__details-links--desktop flex-align-center",
                  children: socialMediaLinks
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "header__details-links--mobile",
                  children: headerItemDetails.socialMediaLinks.some(function (item) {
                    var _Object$values$;

                    return ((_Object$values$ = Object.values(item)[0]) === null || _Object$values$ === void 0 ? void 0 : _Object$values$.length) > 0;
                  }) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "dropdown--md",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                        className: "dropdown__menu",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                          className: "dropdown__body",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                            className: "flex-align-center justify-between flex-wrap",
                            children: socialMediaLinks
                          })
                        })
                      })
                    }),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                      className: "btn btn-primary-ghost btn-icon-center mv-0",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconShare, {
                        className: "fill-white"
                      })
                    })
                  })
                })]
              })
            })]
          })
        }), showDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "header__details-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "col-12 col-lg-6",
              children: [headerItemDetails.figuresTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h4", {
                className: "header__details-title",
                children: headerItemDetails.figuresTitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("ul", {
                className: "list-block-label",
                children: headerItemDetails.figures && headerItemDetails.figures.map(function (fig, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                    className: "list-block-label__item",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "list-block-label__casing",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                        className: "list-block-label__core",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h5", {
                          className: "list-block-label__title",
                          children: fig.figure
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                          className: "list-block-label__subtitle",
                          children: fig.label
                        })]
                      })
                    })
                  }, index + fig.figure + fig.label);
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "col-12 col-lg-6 header__details-wrapper-mobile",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h4", {
                className: "header__details-title",
                children: headerItemDetails.detailsTitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                className: "text-white header__details-text",
                children: headerItemDetails.detailsInfo
              })]
            })]
          })
        }), showDetails && headerItemDetails && headerItemDetails.myCollectionDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "header__details-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "flex-space-between row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "row",
              children: headerItemDetails.myCollectionDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h4", {
                className: "header__details-title",
                children: t('collections.public.user.header.collection_count', {
                  value: headerItemDetails.myCollectionDetails.counter
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "row text-right",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Tooltip_ReactTooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
                content: t('collections.value_of_collection'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Icons_IconInfo__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  className: "fill-white mr-xxs text-30"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h4", {
                className: "header__details-title",
                children: t('collections.public.user.header.collection_value', {
                  value: headerItemDetails.myCollectionDetails.value
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "row justify-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "col-4 row text-center",
              children: headerItemDetails.myCollectionDetails.scarcity.map(function (element, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "col-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconCube2, {
                    className: element["class"] + ' text-18'
                  }, index), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "pl-xxs text-primary",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("strong", {
                      children: element.value
                    })
                  })]
                }, 'scarcity-' + index);
              })
            })
          })]
        }), !headerItemDetails.alwaysOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
          children: [headerItemDetails.tabList && headerItemDetails.tabList.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "header__details-footer header__details-footer--tabs",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "tabs__block",
              children: headerItemDetails.tabList.map(function (tab, index) {
                var _tab$link;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                  className: "tabs__block-item ".concat(activeRouteKey === tab.routeKey ? 'active' : ''),
                  href: (_tab$link = tab.link) !== null && _tab$link !== void 0 ? _tab$link : '#',
                  children: tab.label
                }, index);
              })
            }), !headerItemDetails.alwaysOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
              className: "tabs__block-toggle",
              type: "button",
              onClick: toggleDetails,
              children: showDetails ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconChevronUp, {}), " ", t('ui.close')]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_2__.IconChevronDown, {}), " ", t('ui.open')]
              })
            })]
          }), (!headerItemDetails.tabList || !headerItemDetails.tabList.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "header__details-footer",
            children: !headerItemDetails.alwaysOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
              className: "btn btn-dark btn-rounded",
              type: "button",
              onClick: toggleDetails,
              children: showDetails ? t('ui.close') : t('ui.open')
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_index__WEBPACK_IMPORTED_MODULE_11__.ReactModal, {
      ref: modalRef
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderPublic);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/LanguageDropdown.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/LanguageDropdown.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Popover/ReactPopover */ "./resources/js/components/Popover/ReactPopover.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var LanguageDropdown = function LanguageDropdown(_ref) {
  var position = _ref.position;
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      app = _usePage$props.app,
      languages = _usePage$props.languages,
      links = _usePage$props.links;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Popover_ReactPopover__WEBPACK_IMPORTED_MODULE_0__["default"], {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "dropdown__menu",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
        className: "list",
        children: languages.map(function (language, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.route)(links.setLocale, {
                id: language.value
              }),
              children: language.locale.toUpperCase()
            })
          }, "language-".concat(i));
        })
      })
    }),
    position: position,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
      className: "btn btn-primary-ghost btn-language btn-icon-right btn-public",
      children: [app.locale, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_1__.IconArrowThin, {
        className: "icon-270 fill-white"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageDropdown);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/LayoutPublic.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/LayoutPublic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _HeaderPublic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderPublic */ "./resources/js/components/Shared/Layout/Public/HeaderPublic.js");
/* harmony import */ var _FooterPublic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterPublic */ "./resources/js/components/Shared/Layout/Public/FooterPublic.js");
/* harmony import */ var _FaqPublic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FaqPublic */ "./resources/js/components/Shared/Layout/Public/FaqPublic.js");
/* harmony import */ var _ToastMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ToastMessages */ "./resources/js/components/Shared/ToastMessages.js");
/* harmony import */ var _CookiePolicy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CookiePolicy */ "./resources/js/components/Shared/CookiePolicy.js");
/* harmony import */ var _MetamaskCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../MetamaskCheck */ "./resources/js/components/Shared/MetamaskCheck.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import WawStreetLogo from './WawStreetLogo'




var LayoutTest = function LayoutTest(_ref) {
  var children = _ref.children,
      headerBg = _ref.headerBg,
      headerItemDetails = _ref.headerItemDetails,
      _ref$mainClassName = _ref.mainClassName,
      mainClassName = _ref$mainClassName === void 0 ? '' : _ref$mainClassName,
      _ref$isFAQ = _ref.isFAQ,
      isFAQ = _ref$isFAQ === void 0 ? true : _ref$isFAQ;
  var headerProps = {};

  if (headerBg) {
    headerProps.headerBg = headerBg;
  }

  if (headerItemDetails) {
    headerProps.headerItemDetails = headerItemDetails;
  }

  var isMobileOrDesktop = react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isMobile || react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isTablet || window.innerWidth <= 1024 ? 'is-mobile' : 'is-desktop'; // if (isMobile || isTablet || window.innerWidth <= 1024) {
  //   return (
  //     <div style={{ backgroundColor: '#00292b', height: '100vh' }}>
  //       <div style={{ display: 'flex', justifyContent: 'center' }}>
  //         <WawStreetLogo />
  //       </div>
  //
  //       <div style={{ maxWidth: 768, padding: '0px 40px', margin: '0 auto' }}>
  //         <p style={{ color: '#07F8FF', fontSize: 22, marginTop: 100, textAlign: 'center' }}>
  //           The mobile version of WawStreet is under development, it will be online soon !
  //         </p>
  //
  //         <p style={{ color: '#07F8FF', fontSize: 22, marginTop: 100, textAlign: 'center' }}>
  //           La version mobile de WawStreet est en cours de développement, elle sera bientôt en ligne !
  //         </p>
  //
  //         <p style={{ color: '#07F8FF', fontSize: 22, marginTop: 100, textAlign: 'center' }}>
  //           De mobiele versie van WawStreet is in ontwikkeling en komt binnenkort online !
  //         </p>
  //       </div>
  //     </div>
  //   )
  // }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    id: "main-layout",
    className: "public-page ".concat(mainClassName, " ").concat(isMobileOrDesktop),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HeaderPublic__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, headerProps)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("main", {
      id: "main",
      children: children
    }), isFAQ && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FaqPublic__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FooterPublic__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_CookiePolicy__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetamaskCheck__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ToastMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutTest);

/***/ }),

/***/ "./resources/js/components/Shared/Layout/Public/WawStreetLogo.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Shared/Layout/Public/WawStreetLogo.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_Logo_Wawstreet_White_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../assets/logo/Logo-Wawstreet-White.svg */ "./resources/assets/logo/Logo-Wawstreet-White.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var WawStreetLogo = function WawStreetLogo() {
  var links = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.links;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
    href: links.publicPage.index,
    className: "branding",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "branding__mark",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: _assets_logo_Logo_Wawstreet_White_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
        alt: "WawStreet logo"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "branding__wordmark-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "branding__beta",
        children: "Beta"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "branding__wordmark",
        children: ["Waw", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: "Street"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "branding__tagline",
        children: t('homepage.logoText')
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WawStreetLogo);

/***/ }),

/***/ "./resources/js/components/Shared/MetamaskCheck.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Shared/MetamaskCheck.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var MetamaskCheck = function MetamaskCheck() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      auth = _usePage$props.auth,
      links = _usePage$props.links;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      checkWallet = _useState2[0],
      setCheckWallet = _useState2[1];

  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
      t = _useTranslation.t;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (auth && auth.user.wallet && window.ethereum) {
      window.ethereum.request({
        method: 'eth_accounts'
      }).then(function (result) {
        if (result.length && !result.includes(auth.user.wallet) || !result.length) {
          setCheckWallet(true);
        }
      })["catch"](function () {
        var title = '';

        var body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: t('metamask.something_went_wrong_with_connect')
        });

        modalRef.current.setContent(title, body);
      });
    }
  }, [auth]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (checkWallet) {
      _utils__WEBPACK_IMPORTED_MODULE_2__.api.post(links.user.setWallet, {
        wallet: null
      }).then(function (res2) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.reload();
      });
    }
  }, [checkWallet]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (auth) {
      if (!window.ethereum) {
        // Nothing to do here... no ethereum provider found
        return;
      }

      var accountWasChanged = function accountWasChanged(accounts) {
        if (!accounts.length || !accounts.includes(auth.user.wallet)) {
          _utils__WEBPACK_IMPORTED_MODULE_2__.api.post(links.user.setWallet, {
            wallet: null
          }).then(function (res2) {
            _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.reload();
          });
        }
      };

      window.ethereum.on('accountsChanged', accountWasChanged);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetamaskCheck);

/***/ }),

/***/ "./resources/js/components/Shared/ToastMessages.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Shared/ToastMessages.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var ToastMessages = function ToastMessages() {
  var flash = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.flash;

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_1__.useToasts)(),
      addToast = _useToasts.addToast;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (flash.success) {
      addToast(flash.success, {
        appearance: 'success'
      });
    }

    if (flash.error) {
      addToast(flash.error, {
        appearance: 'error'
      });
    }
  }, [flash]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastMessages);

/***/ }),

/***/ "./resources/js/components/Tooltip/ReactTooltip.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Tooltip/ReactTooltip.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_simple_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-tooltip */ "./node_modules/react-simple-tooltip/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var ReactTooltip = function ReactTooltip(_ref) {
  var content = _ref.content,
      placement = _ref.placement,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_simple_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: content,
    placement: placement !== null && placement !== void 0 ? placement : 'left',
    radius: 5,
    padding: 10,
    fadeDuration: 300,
    fadeEasing: "ease-in-out",
    style: {
      whiteSpace: 'nowrap',
      fontFamily: 'Klima-Regular, sans-serif',
      fontSize: '0.875rem'
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactTooltip);

/***/ }),

/***/ "./resources/js/components/index.js":
/*!******************************************!*\
  !*** ./resources/js/components/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSelect": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.AsyncSelect),
/* harmony export */   "AsyncSelectColumnFilter": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.AsyncSelectColumnFilter),
/* harmony export */   "BulkActionsSelect": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.BulkActionsSelect),
/* harmony export */   "CellParse": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.CellParse),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.Checkbox),
/* harmony export */   "DataTable": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.DataTable),
/* harmony export */   "DatePickerFilter": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.DatePickerFilter),
/* harmony export */   "DateRangeFilter": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.DateRangeFilter),
/* harmony export */   "Datepicker": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.Datepicker),
/* harmony export */   "FORM_ELEMENT_TYPES": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.FORM_ELEMENT_TYPES),
/* harmony export */   "FieldWrapper": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.FieldWrapper),
/* harmony export */   "FileUpload": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.FileUpload),
/* harmony export */   "FormBuilder": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.FormBuilder),
/* harmony export */   "GlobalDateRangeFilter": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.GlobalDateRangeFilter),
/* harmony export */   "GlobalFilter": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.GlobalFilter),
/* harmony export */   "IconArrowDown": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconArrowDown),
/* harmony export */   "IconArrowThin": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconArrowThin),
/* harmony export */   "IconAuction": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconAuction),
/* harmony export */   "IconBasketEmpty": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconBasketEmpty),
/* harmony export */   "IconBubble": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconBubble),
/* harmony export */   "IconBurger": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconBurger),
/* harmony export */   "IconCalendar": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconCalendar),
/* harmony export */   "IconCart": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconCart),
/* harmony export */   "IconCheck": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconCheck),
/* harmony export */   "IconChevronDown": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconChevronDown),
/* harmony export */   "IconChevronLeft": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconChevronLeft),
/* harmony export */   "IconChevronRight": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconChevronRight),
/* harmony export */   "IconChevronThin": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconChevronThin),
/* harmony export */   "IconChevronUp": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconChevronUp),
/* harmony export */   "IconChild": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconChild),
/* harmony export */   "IconClose": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconClose),
/* harmony export */   "IconCloseBold": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconCloseBold),
/* harmony export */   "IconCookies": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconCookies),
/* harmony export */   "IconCreators": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconCreators),
/* harmony export */   "IconCube2": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconCube2),
/* harmony export */   "IconDelete": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconDelete),
/* harmony export */   "IconDiscord": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconDiscord),
/* harmony export */   "IconDollar": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconDollar),
/* harmony export */   "IconDone": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconDone),
/* harmony export */   "IconEdit": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconEdit),
/* harmony export */   "IconExport": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconExport),
/* harmony export */   "IconExport2": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconExport2),
/* harmony export */   "IconExportXML": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconExportXML),
/* harmony export */   "IconEyeVisibility": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconEyeVisibility),
/* harmony export */   "IconEyeVisibilityOff": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconEyeVisibilityOff),
/* harmony export */   "IconFacebook": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconFacebook),
/* harmony export */   "IconFavorite": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconFavorite),
/* harmony export */   "IconFolder": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconFolder),
/* harmony export */   "IconGallery": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconGallery),
/* harmony export */   "IconHeart": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconHeart),
/* harmony export */   "IconHeartOutline": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconHeartOutline),
/* harmony export */   "IconHome": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconHome),
/* harmony export */   "IconImage": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconImage),
/* harmony export */   "IconInfo": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconInfo),
/* harmony export */   "IconInstagram": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconInstagram),
/* harmony export */   "IconInstagramOutline": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconInstagramOutline),
/* harmony export */   "IconLess": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconLess),
/* harmony export */   "IconLinkedin": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconLinkedin),
/* harmony export */   "IconList": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconList),
/* harmony export */   "IconLock": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconLock),
/* harmony export */   "IconLogo": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconLogo),
/* harmony export */   "IconLogout": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconLogout),
/* harmony export */   "IconMail": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconMail),
/* harmony export */   "IconMenu": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconMenu),
/* harmony export */   "IconMenuProfile": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconMenuProfile),
/* harmony export */   "IconMenuPublic": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconMenuPublic),
/* harmony export */   "IconMenuPublicClosed": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconMenuPublicClosed),
/* harmony export */   "IconMoney": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconMoney),
/* harmony export */   "IconMore": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconMore),
/* harmony export */   "IconMove": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconMove),
/* harmony export */   "IconNegative": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconNegative),
/* harmony export */   "IconOpenNewTab": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconOpenNewTab),
/* harmony export */   "IconOwners": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconOwners),
/* harmony export */   "IconPeople": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconPeople),
/* harmony export */   "IconPhoneBook": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconPhoneBook),
/* harmony export */   "IconPinterest": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconPinterest),
/* harmony export */   "IconPlus": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconPlus),
/* harmony export */   "IconPositive": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconPositive),
/* harmony export */   "IconProfile": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconProfile),
/* harmony export */   "IconProfileMobile": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconProfileMobile),
/* harmony export */   "IconSearch": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconSearch),
/* harmony export */   "IconSettings": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconSettings),
/* harmony export */   "IconShare": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconShare),
/* harmony export */   "IconTiktok": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconTiktok),
/* harmony export */   "IconToolsAdd": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconToolsAdd),
/* harmony export */   "IconToolsEdit": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconToolsEdit),
/* harmony export */   "IconTotalCollection": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconTotalCollection),
/* harmony export */   "IconTransaction": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconTransaction),
/* harmony export */   "IconTrash": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconTrash),
/* harmony export */   "IconTwitter": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconTwitter),
/* harmony export */   "IconTwitterSimple": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconTwitterSimple),
/* harmony export */   "IconUpload": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconUpload),
/* harmony export */   "IconUser": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconUser),
/* harmony export */   "IconUsers": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconUsers),
/* harmony export */   "IconWallet": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconWallet),
/* harmony export */   "IconX": () => (/* reexport safe */ _Icons__WEBPACK_IMPORTED_MODULE_5__.IconX),
/* harmony export */   "ImageDropzone": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.ImageDropzone),
/* harmony export */   "Input": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.Input),
/* harmony export */   "LayoutAdmin": () => (/* reexport safe */ _Shared_Layout_Admin_LayoutAdmin__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "LayoutAuth": () => (/* reexport safe */ _Shared_Layout_Auth_LayoutAuth__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "LayoutPublic": () => (/* reexport safe */ _Shared_Layout_Public_LayoutPublic__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "MultiFileUpload": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.MultiFileUpload),
/* harmony export */   "Radio": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.Radio),
/* harmony export */   "ReCaptcha": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.ReCaptcha),
/* harmony export */   "ReactModal": () => (/* reexport safe */ _Modal_ReactModal__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "ReactTooltip": () => (/* reexport safe */ _Tooltip_ReactTooltip__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Select": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.Select),
/* harmony export */   "SelectColumnFilter": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.SelectColumnFilter),
/* harmony export */   "SelectLargeListLocal": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.SelectLargeListLocal),
/* harmony export */   "SelectRowCheckbox": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.SelectRowCheckbox),
/* harmony export */   "Text": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.Text),
/* harmony export */   "TextColumnFilter": () => (/* reexport safe */ _DataTable__WEBPACK_IMPORTED_MODULE_6__.TextColumnFilter),
/* harmony export */   "Textarea": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_7__.Textarea)
/* harmony export */ });
/* harmony import */ var _Shared_Layout_Auth_LayoutAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared/Layout/Auth/LayoutAuth */ "./resources/js/components/Shared/Layout/Auth/LayoutAuth.js");
/* harmony import */ var _Shared_Layout_Admin_LayoutAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/Layout/Admin/LayoutAdmin */ "./resources/js/components/Shared/Layout/Admin/LayoutAdmin.js");
/* harmony import */ var _Shared_Layout_Public_LayoutPublic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared/Layout/Public/LayoutPublic */ "./resources/js/components/Shared/Layout/Public/LayoutPublic.js");
/* harmony import */ var _Modal_ReactModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal/ReactModal */ "./resources/js/components/Modal/ReactModal.js");
/* harmony import */ var _Tooltip_ReactTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tooltip/ReactTooltip */ "./resources/js/components/Tooltip/ReactTooltip.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _DataTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataTable */ "./resources/js/components/DataTable/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./resources/js/components/Form/index.js");










/***/ }),

/***/ "./resources/js/domain/Test/layout/LayoutAuthTest.js":
/*!***********************************************************!*\
  !*** ./resources/js/domain/Test/layout/LayoutAuthTest.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var LayoutAuthTest = function LayoutAuthTest(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    id: "main-layout",
    className: "auth-page",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container auth-container",
      id: "main-container",
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutAuthTest);

/***/ }),

/***/ "./resources/js/domain/Test/layout/LoginContainer.js":
/*!***********************************************************!*\
  !*** ./resources/js/domain/Test/layout/LoginContainer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var LoginContainer = function LoginContainer(_ref) {
  var children = _ref.children,
      customClass = _ref.customClass,
      asideContent = _ref.asideContent;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "col-7",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
        className: "auth-container__main ".concat(customClass !== null && customClass !== void 0 ? customClass : ''),
        children: children
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "col-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "auth-container__decoration",
        children: asideContent
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginContainer);

/***/ }),

/***/ "./resources/js/domain/Test/pages/AuthCreateAccount.js":
/*!*************************************************************!*\
  !*** ./resources/js/domain/Test/pages/AuthCreateAccount.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layout_LayoutAuthTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/LayoutAuthTest */ "./resources/js/domain/Test/layout/LayoutAuthTest.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Form */ "./resources/js/components/Form/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Icons */ "./resources/js/components/Icons/index.js");
/* harmony import */ var _layout_LoginContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/LoginContainer */ "./resources/js/domain/Test/layout/LoginContainer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var AuthCreateAccount = function AuthCreateAccount() {
  var errors = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.usePage)().props.errors;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.handleFormErrors)(formRef, errors);
  }, [errors]);

  var asideContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
      className: "admin-h3 mock-tab mb-xxl",
      children: "Why create an account?"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      children: "in hac habitasse platea disctumst. Vivamus adipiscing ferm ntum quam volutpat aliquam. Integer et elit eget elit fecilisis tristique."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
        children: "In hac habitasse platea dictumst"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
        children: "Possum est sillius tremens dolorius"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
        children: "Magnus est querius tremens"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      className: "admin-h4 mt-xl",
      children: "Entrez des aujourd'hui dans l'univers des NFTs avec Wawstreet!"
    })]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_layout_LayoutAuthTest__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_layout_LoginContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      asideContent: asideContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
        className: "admin-h3 mock-tab mb-xl",
        children: "Create your WawStreet account"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
        innerRef: formRef,
        initialValues: {
          test_input: '2'
        },
        enableReinitialize: true,
        validate: function validate(values) {
          var rules = {
            username: 'required|min:2',
            email: 'required|min:2',
            password: 'required|min:6',
            reEnterPassword: 'required|min:6',
            terms_and_conditions: 'accepted',
            get_news: 'accepted'
          };
          return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.validateFormData)(values, rules);
        },
        onSubmit: function onSubmit() {
          // Example Axios
          console.log('submitting');
        },
        validateOnChange: false,
        validateOnBlur: false,
        children: function children(_ref) {
          var values = _ref.values,
              errors = _ref.errors,
              touched = _ref.touched,
              handleChange = _ref.handleChange,
              handleBlur = _ref.handleBlur,
              handleSubmit = _ref.handleSubmit,
              isSubmitting = _ref.isSubmitting,
              setFieldValue = _ref.setFieldValue;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "form-container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
              onSubmit: handleSubmit,
              className: "form-class",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "col-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.Input, {
                    formField: {
                      type: 'text',
                      name: 'username',
                      label: 'Username',
                      placeholder: 'Username'
                    },
                    value: values.username,
                    onChange: function onChange(e) {
                      var value = e.target.value;
                      setFieldValue('username', value);
                    },
                    errors: errors.username
                  }, 'username')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "col-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.Input, {
                    formField: {
                      type: 'email',
                      name: 'email',
                      label: 'Email',
                      placeholder: 'Email'
                    },
                    value: values.email,
                    onChange: function onChange(e) {
                      var value = e.target.value;
                      setFieldValue('email', value);
                    },
                    errors: errors.email
                  }, 'email')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "col-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.Input, {
                    formField: {
                      type: 'password',
                      name: 'password',
                      label: 'Password',
                      placeholder: 'Password'
                    },
                    value: values.password,
                    onChange: function onChange(e) {
                      var value = e.target.value;
                      setFieldValue('password', value);
                    },
                    errors: errors.password
                  }, 'password')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "col-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.Input, {
                    formField: {
                      type: 'password',
                      name: 're-enter-password',
                      label: 'Re-enter password',
                      placeholder: 'Re-enter password'
                    },
                    value: values.reEnterPassword,
                    onChange: function onChange(e) {
                      var value = e.target.value;
                      setFieldValue('password', value);
                    },
                    errors: errors.reEnterPassword
                  }, 'reEnterPassword')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "input-element auth-container__password-info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icons__WEBPACK_IMPORTED_MODULE_6__.IconLock, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
                    children: "Keep your account safe:"
                  }), " Your password must be minimum 8 characters, including at least 1 number, 1 upper case and a symbol"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "mv-sm",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                  formField: {
                    name: 'terms_and_conditions',
                    label: "I have read and agree to ".concat( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                      href: "#",
                      children: "Terms of Use"
                    }), " and ").concat( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                      href: "#",
                      children: "Privacy Policy"
                    }), "."),
                    value: false
                  },
                  value: values.terms_and_conditions,
                  onChange: function onChange(e) {
                    var value = e.target.checked;
                    setFieldValue('terms_and_conditions', value);
                  },
                  errors: errors.terms_and_conditions
                }, 'terms_and_conditions')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "mv-sm",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                  formField: {
                    name: 'get_news',
                    label: 'I want to receive any news or updates by email from Wawstreet',
                    value: false
                  },
                  value: values.get_news,
                  onChange: function onChange(e) {
                    var value = e.target.checked;
                    setFieldValue('get_news', value);
                  },
                  errors: errors.get_news
                }, 'get_news')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-footer flex-align",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  className: "btn btn-primary",
                  type: "submit",
                  disabled: isSubmitting,
                  children: "Sign in"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "ml-lg",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                    className: "text-bold",
                    children: ["Don't have an account yet? ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                      href: "/",
                      className: "",
                      children: "Sign up"
                    })]
                  })
                })]
              })]
            })
          });
        }
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthCreateAccount);

/***/ }),

/***/ "./resources/js/utils/api.js":
/*!***********************************!*\
  !*** ./resources/js/utils/api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./resources/js/utils/eventEmitter.js":
/*!********************************************!*\
  !*** ./resources/js/utils/eventEmitter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitter": () => (/* binding */ EventEmitter)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var EventEmitter = {
  events: {},
  // dictionary with our events
  on: function on(event, listener) {
    // add event listeners
    if (!this.events[event]) {
      this.events[event] = {
        listeners: []
      };
    }

    this.events[event].listeners.push(listener);
  },
  off: function off(event) {
    // remove listeners
    delete this.events[event];
  },
  emit: function emit(name) {
    // trigger events
    if (this.events[name]) {
      for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        payload[_key - 1] = arguments[_key];
      }

      var _iterator = _createForOfIteratorHelper(this.events[name].listeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          listener.apply(this, payload);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/utils/fileDownload.js":
/*!********************************************!*\
  !*** ./resources/js/utils/fileDownload.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ }),

/***/ "./resources/assets/images/logo-waw-street.svg":
/*!*****************************************************!*\
  !*** ./resources/assets/images/logo-waw-street.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo-waw-street.svg?3d84f30d2fa793669f640545332e5180");

/***/ }),

/***/ "./resources/assets/images/public/image-background-header.jpg":
/*!********************************************************************!*\
  !*** ./resources/assets/images/public/image-background-header.jpg ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/image-background-header.jpg?52e77f306ef37e694662ca32b608eab2");

/***/ }),

/***/ "./resources/assets/logo/Logo-Wawstreet-White.svg":
/*!********************************************************!*\
  !*** ./resources/assets/logo/Logo-Wawstreet-White.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Logo-Wawstreet-White.svg?6949e861b705a6b4c14abbaec2687ff0");

/***/ }),

/***/ "?1bfd":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=resources_js_domain_Test_pages_AuthCreateAccount_js.js.map?id=84eddfb6ca537dbf