"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_domain_Test_pages_public_homepage_HomepageBanner_js"],{

/***/ "./resources/js/domain/Test/pages/public/homepage/HomepageBanner.js":
/*!**************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/HomepageBanner.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/hooks */ "./resources/js/utils/hooks.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-collection-nft-2.jpg */ "./resources/assets/images/public/image-collection-nft-2.jpg");
/* harmony import */ var _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-main-nfc.jpg */ "./resources/assets/images/public/image-main-nfc.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var HomepageBanner = function HomepageBanner() {
  var slickSliderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useWindowResized = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.useWindowResized)(),
      _useWindowResized2 = _slicedToArray(_useWindowResized, 1),
      screenWidth = _useWindowResized2[0];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.calculateSlickToWindowOffset)(slickSliderRef, screenWidth);
  }, [screenWidth]);
  var settings = {
    className: 'slick-overflow-right',
    arrows: false,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '10%',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // onReInit: () => calculateSlickToWindowOffset(slickSliderRef, screenWidth),
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '16px'
      }
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: "homepage__banner",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "section__bg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "homepage__banner-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "homepage__banner-title",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
            className: "public-h1 text-white",
            children: ["Cr\xE9ez, g\xE9rez et partagez", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "text-light-green-2",
              children: "vos collections num\xE9riques NFTs"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
            className: "homepage__subtitle text-white",
            children: ["Plongez dans le monde des NFTs avec WawStreet,", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
              children: "la plateforme belge"
            }), " pour collectionner vos cr\xE9ations NFTs"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "homepage__banner-description",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
            className: "list__cubes",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              children: ["Des ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
                children: "collections exclusives"
              }), " et des ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
                children: "cr\xE9ateurs locaux"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              children: ["Acheter et vendre ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
                children: "vos NFTs en euros"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              children: ["Des ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
                children: "NFTs rares et certifi\xE9s"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "homepage__subtitle mb-lg",
            children: "Entrez dans l\u2019univers des NFTs avec Wawstreet !"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "btn btn-turquoise btn-public btn-md",
            children: "Voir les collections"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "homepage__banner-slider",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "homepage__subtitle text-white mb-lg",
            children: "Les nouvelles mises en vente"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "homepage__banner-slick",
            ref: slickSliderRef,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, settings), {}, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "slide__content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "card card__slider card__hoverable card__square-base",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "card__header card__square",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__hover-content",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "card card--md",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "card__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                            children: "Harp in a post-digital World - Prelude"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                            children: "Exclusive digital VR experience"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "card__footer card__footer--border",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                            className: "card__slider-nft",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "badge card__slider-nft-owner",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                                className: "badge__thumbnail",
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
                                  alt: "User thumbnail"
                                })
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                                className: "badge__body",
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                  className: "public-h5",
                                  children: "Johan Govaerts"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                  children: "12 available arts on sale"
                                })]
                              })]
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "card__slider-nft-info",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                children: "5 d\xE9tenteurs"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                children: "Prix minimum: 150\u20AC"
                              })]
                            })]
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__thumbnail",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                        src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
                        alt: "banner slider thumbnail"
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "slide__content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "card card__slider card__hoverable card__square-base",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "card__header card__square",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__hover-content",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "card card--md",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "card__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                            children: "Harp in a post-digital World - Prelude"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                            children: "Exclusive digital VR experience"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "card__footer card__footer--border",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                            className: "card__slider-nft",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "badge card__slider-nft-owner",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                                className: "badge__thumbnail",
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
                                  alt: "User thumbnail"
                                })
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                                className: "badge__body",
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                  className: "public-h5",
                                  children: "Johan Govaerts"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                  children: "12 available arts on sale"
                                })]
                              })]
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "card__slider-nft-info",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                children: "5 d\xE9tenteurs"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                children: "Prix minimum: 150\u20AC"
                              })]
                            })]
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__thumbnail",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                        src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
                        alt: "banner slider thumbnail"
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "slide__content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "card card__slider card__hoverable card__square-base",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "card__header card__square",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__hover-content",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "card card--md",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "card__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                            children: "Harp in a post-digital World - Prelude"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                            children: "Exclusive digital VR experience"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "card__footer card__footer--border",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                            className: "card__slider-nft",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "badge card__slider-nft-owner",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                                className: "badge__thumbnail",
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
                                  alt: "User thumbnail"
                                })
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                                className: "badge__body",
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                  className: "public-h5",
                                  children: "Johan Govaerts"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                  children: "12 available arts on sale"
                                })]
                              })]
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "card__slider-nft-info",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                children: "5 d\xE9tenteurs"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                children: "Prix minimum: 150\u20AC"
                              })]
                            })]
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__thumbnail",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                        src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
                        alt: "banner slider thumbnail"
                      })
                    })]
                  })
                })
              })]
            }))
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageBanner);

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

/***/ "./resources/assets/images/public/image-collection-nft-2.jpg":
/*!*******************************************************************!*\
  !*** ./resources/assets/images/public/image-collection-nft-2.jpg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/image-collection-nft-2.jpg?b849a10ebe0cfb5fd0757ebb17050ba1");

/***/ }),

/***/ "./resources/assets/images/public/image-main-nfc.jpg":
/*!***********************************************************!*\
  !*** ./resources/assets/images/public/image-main-nfc.jpg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/image-main-nfc.jpg?aec2d6f3a8122fa20753853ff37218a6");

/***/ })

}]);
//# sourceMappingURL=resources_js_domain_Test_pages_public_homepage_HomepageBanner_js.js.map?id=90a72f071d109754