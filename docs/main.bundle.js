/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/App.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/App.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../public/background.png */ "./public/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.app-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 120% auto;\n  background-position: right bottom;\n  height: 100vh;\n  padding-bottom: 70px;\n  position: relative;\n  width: 100%;\n}\n.app-navbar {\n  bottom: 0;\n  left: 0;\n  position: fixed;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/App.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AARE;EACE,yDAAA;EACA,4BAAA;EACA,0BAAA;EACA,iCAAA;EACA,aAAA;EACA,oBDPY;ECQZ,kBAAA;EACA,WAAA;AAUJ;AAPE;EACE,SAAA;EACA,OAAA;EACA,eAAA;AASJ","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/theme.scss';\n\n.app {\n  &-container {\n    background-image: url('/public/background.png');\n    background-repeat: no-repeat;\n    background-size: 120% auto;\n    background-position: right bottom;\n    height: 100vh;\n    padding-bottom: $navbar-height;\n    position: relative;\n    width: 100%;\n  }\n\n  &-navbar {\n    bottom: 0;\n    left: 0;\n    position: fixed;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Fields/Search/SearchInput.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Fields/Search/SearchInput.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search-input {\n  min-width: 300px;\n}\n.search-input.form-field-control {\n  margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/components/Fields/Search/SearchInput.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;AACF;AACE;EACE,gBAAA;AACJ","sourcesContent":[".search-input {\n  min-width: 300px;\n\n  &.form-field-control {\n    margin-bottom: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/ImageLoading/ImageLoading.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/ImageLoading/ImageLoading.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.image-loading-hidden {\n  display: none !important;\n}\n.image-loading-spinner {\n  animation: 2s rotate linear infinite;\n}\n.image-loading-spinner:before {\n  font-size: 2.5rem;\n}\n\n#image-loading-spinner-container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/components/ImageLoading/ImageLoading.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AARE;EACE,wBAAA;AAUJ;AARE;EACE,oCAAA;AAUJ;AARI;EACE,iBAAA;AAUN;;AALA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;AAQF","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/theme.scss';\n\n.image-loading {\n  &-hidden {\n    display: none !important;\n  }\n  &-spinner {\n    animation: 2s rotate linear infinite;\n\n    &:before {\n      font-size: font-size(pagetitle);\n    }\n  }\n}\n\n#image-loading-spinner-container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Loading/LoadingOverlay.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Loading/LoadingOverlay.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.app-loader {\n  animation: 1s rotate linear infinite;\n  transform-origin: 50% 50%;\n  width: 150px;\n}\n\n.app-loading {\n  align-items: center;\n  background-color: #fff;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  opacity: 0.7;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 99;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/components/Loading/LoadingOverlay.scss","webpack://./src/styles/color.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AARA;EACE,oCAAA;EACA,yBAAA;EACA,YAAA;AAUF;;AAPA;EACE,mBAAA;EACA,sBCNM;EDON,aAAA;EACA,YAAA;EACA,uBAAA;EACA,OAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,WAAA;AAUF","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/color.scss';\n@import 'src/styles/theme.scss';\n\n.app-loader {\n  animation: 1s rotate linear infinite;\n  transform-origin: 50% 50%;\n  width: 150px;\n}\n\n.app-loading {\n  align-items: center;\n  background-color: $white;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  opacity: 0.7;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 99;\n}\n","$black: #000;\n$green: #008000;\n$grey: #999;\n$grey-dark: #333;\n$red: #f00;\n$white: #fff;\n$yellow: #fed500;\n\n$css-reset-grey: $grey;\n$css-reset-grey-dark: $grey-dark;\n\n$page-content-background: $white;\n$layout-divider-color: rgba($black, 0.1);\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Navbar/Navbar.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Navbar/Navbar.scss ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.app-navbar {\n  display: flex;\n  background-color: #fff;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  height: 70px;\n  justify-content: center;\n  width: 100%;\n}\n.app-navbar-list {\n  display: flex;\n  height: 100%;\n}\n.app-navbar-link {\n  border-top: 4px solid #000;\n  width: 200px;\n}\n.app-navbar-link:hover a {\n  color: #fff;\n}\n.app-navbar-link .active {\n  color: #fff;\n}\n.app-navbar-link a {\n  align-items: center;\n  display: flex;\n  font-size: 1.2rem;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n.app-navbar-link a * {\n  margin-right: 16px;\n}\n.app-navbar-link.home {\n  border-color: #f00;\n}\n.app-navbar-link.home:hover a {\n  background-color: #f00;\n}\n.app-navbar-link.home .active {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n.app-navbar-link.details {\n  border-color: #008000;\n}\n.app-navbar-link.details:hover a {\n  background-color: #008000;\n}\n.app-navbar-link.details .active {\n  background-color: rgba(0, 128, 0, 0.5);\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/components/Navbar/Navbar.scss","webpack://./src/styles/color.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AAMA;EACE,aAAA;EACA,sBCdM;EDeN,wCAAA;EACA,YDnBc;ECoBd,uBAAA;EACA,WAAA;AAJF;AAME;EACE,aAAA;EACA,YAAA;AAJJ;AAOE;EACE,0BAAA;EACA,YAAA;AALJ;AAOI;EACE,WC9BE;ADyBR;AAQI;EACE,WClCE;AD4BR;AASI;EACE,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;AAPN;AASM;EACE,kBAAA;AAPR;AAWI;EA/CF,kBCJI;AD2CN;AAtCE;EACE,sBCNE;AD8CN;AAtCE;EACE,sCAAA;AAwCJ;AAKI;EAlDF,qBCPM;ADuDR;AA/CE;EACE,yBCTI;AD0DR;AA/CE;EACE,sCAAA;AAiDJ","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/color.scss';\n@import 'src/styles/theme.scss';\n\n$details-color: $green;\n$home-color: $red;\n$link-active-opacity: 0.5;\n\n@mixin link-styles($color) {\n  border-color: $color;\n  &:hover a {\n    background-color: $color;\n  }\n  .active {\n    background-color: rgba($color, $link-active-opacity);\n  }\n}\n\n.app-navbar {\n  display: flex;\n  background-color: $white;\n  border-top: border($layout-divider-color);\n  height: $navbar-height;\n  justify-content: center;\n  width: 100%;\n\n  &-list {\n    display: flex;\n    height: 100%;\n  }\n\n  &-link {\n    border-top: 4px solid $black;\n    width: 200px;\n\n    &:hover a {\n      color: $white;\n    }\n\n    .active {\n      color: $white;\n    }\n\n    a {\n      align-items: center;\n      display: flex;\n      font-size: font-size(subtitle);\n      height: 100%;\n      justify-content: center;\n      width: 100%;\n\n      * {\n        margin-right: spacing(2);\n      }\n    }\n\n    &.home {\n      @include link-styles($home-color);\n    }\n    &.details {\n      @include link-styles($details-color);\n    }\n  }\n}\n","$black: #000;\n$green: #008000;\n$grey: #999;\n$grey-dark: #333;\n$red: #f00;\n$white: #fff;\n$yellow: #fed500;\n\n$css-reset-grey: $grey;\n$css-reset-grey-dark: $grey-dark;\n\n$page-content-background: $white;\n$layout-divider-color: rgba($black, 0.1);\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PageContainer/PageContainer.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PageContainer/PageContainer.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.page {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  max-width: 1280px;\n  height: 100%;\n  width: 100%;\n}\n.page-container {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.page-content {\n  height: calc(100% - 90px);\n  overflow-y: auto;\n  padding: 32px;\n  width: 100%;\n}\n.page-title {\n  font-size: 2.5rem;\n  line-height: 1;\n}\n.page-title-container {\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  justify-content: space-between;\n  display: flex;\n  height: 90px;\n  padding: 0 32px;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/components/PageContainer/PageContainer.scss","webpack://./src/styles/color.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AALA;EACE,sBCFM;EDGN,oCAAA;EACA,iBANmB;EAOnB,YAAA;EACA,WAAA;AAOF;AALE;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;AAOJ;AAJE;EACE,yBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;AAMJ;AAHE;EACE,iBAAA;EACA,cAAA;AAKJ;AAHI;EACE,mBAAA;EACA,2CAAA;EACA,8BAAA;EACA,aAAA;EACA,YAlCU;EAmCV,eAAA;AAKN","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/color.scss';\n@import 'src/styles/theme.scss';\n\n$page-content-width: 1280px;\n$header-height: 90px;\n\n.page {\n  background-color: $page-content-background;\n  border: border($layout-divider-color);\n  max-width: $page-content-width;\n  height: 100%;\n  width: 100%;\n\n  &-container {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n  }\n\n  &-content {\n    height: calc(100% - $header-height);\n    overflow-y: auto;\n    padding: spacing(4);\n    width: 100%;\n  }\n\n  &-title {\n    font-size: font-size(pagetitle);\n    line-height: 1;\n\n    &-container {\n      align-items: center;\n      border-bottom: border($layout-divider-color);\n      justify-content: space-between;\n      display: flex;\n      height: $header-height;\n      padding: 0 spacing(4);\n    }\n  }\n}\n","$black: #000;\n$green: #008000;\n$grey: #999;\n$grey-dark: #333;\n$red: #f00;\n$white: #fff;\n$yellow: #fed500;\n\n$css-reset-grey: $grey;\n$css-reset-grey-dark: $grey-dark;\n\n$page-content-background: $white;\n$layout-divider-color: rgba($black, 0.1);\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonCard/PokemonCard.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonCard/PokemonCard.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pokemon-card {\n  align-items: center;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 16px;\n  position: relative;\n}\n.pokemon-card.pressable:hover {\n  background-color: #f2f2f2;\n  cursor: pointer;\n}\n.pokemon-image {\n  width: 128px;\n  margin-bottom: 8px;\n}\n.pokemon-name {\n  font-size: 1.2rem;\n  line-height: 1;\n}\n.pokemon-favorite-buttom {\n  cursor: pointer;\n  font-size: 1.2rem;\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n.pokemon-favorite-buttom .fas {\n  color: #fed500;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/components/PokemonCard/PokemonCard.scss","webpack://./src/styles/color.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AAPE;EACE,mBAAA;EACA,sBCDI;EDEJ,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;EACA,kBAAA;AASJ;AAPI;EACE,yBAAA;EACA,eAAA;AASN;AALE;EACE,YAAA;EACA,kBAAA;AAOJ;AAJE;EACE,iBAAA;EACA,cAAA;AAMJ;AAHE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AAKJ;AAHI;EACE,cC/BG;ADoCT","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/color.scss';\n@import 'src/styles/theme.scss';\n\n.pokemon {\n  &-card {\n    align-items: center;\n    background-color: $page-content-background;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: spacing(2);\n    position: relative;\n\n    &.pressable:hover {\n      background-color: darken($page-content-background, 5%);\n      cursor: pointer;\n    }\n  }\n\n  &-image {\n    width: 128px;\n    margin-bottom: spacing();\n  }\n\n  &-name {\n    font-size: font-size(subtitle);\n    line-height: 1;\n  }\n\n  &-favorite-buttom {\n    cursor: pointer;\n    font-size: font-size(subtitle);\n    position: absolute;\n    right: spacing(2);\n    top: spacing(2);\n\n    .fas {\n      color: $yellow;\n    }\n  }\n}\n","$black: #000;\n$green: #008000;\n$grey: #999;\n$grey-dark: #333;\n$red: #f00;\n$white: #fff;\n$yellow: #fed500;\n\n$css-reset-grey: $grey;\n$css-reset-grey-dark: $grey-dark;\n\n$page-content-background: $white;\n$layout-divider-color: rgba($black, 0.1);\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonPanel/PokemonPanel.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonPanel/PokemonPanel.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pokemon-panel {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n}\n.pokemon-panel-data-container {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 24px;\n}\n.pokemon-panel-data-content {\n  height: 100%;\n  max-width: 500px;\n  width: 100%;\n}\n.pokemon-panel-description {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.pokemon-panel-image {\n  display: block;\n  width: 200px;\n}\n.pokemon-panel-row {\n  margin-bottom: 8px;\n}\n.pokemon-panel-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.pokemon-panel-stats {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: table;\n  width: 100%;\n}\n.pokemon-panel-stats .stat-row {\n  clear: both;\n  display: table-row;\n  width: auto;\n}\n.pokemon-panel-stats .stat-element {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: table-column;\n  float: left;\n  padding: 8px;\n  width: 50%;\n}\n.pokemon-panel-stats .stat-element.center {\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/components/PokemonPanel/PokemonPanel.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AARA;EACE,oCAAA;EACA,aAAA;AAUF;AARE;EACE,yCAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;AAUJ;AAPE;EACE,YAAA;EACA,gBAAA;EACA,WAAA;AASJ;AANE;EACE,eAAA;EACA,gBAAA;AAQJ;AALE;EACE,cAAA;EACA,YAAA;AAOJ;AAJE;EACE,kBAAA;AAMJ;AAHE;EACE,iBAAA;EACA,iBAAA;AAKJ;AAFE;EACE,oCAAA;EACA,cAAA;EACA,WAAA;AAIJ;AAFI;EACE,WAAA;EACA,kBAAA;EACA,WAAA;AAIN;AAFI;EACE,oCAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AAIN;AAFM;EACE,kBAAA;AAIR","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/color.scss';\n@import 'src/styles/theme.scss';\n\n.pokemon-panel {\n  border: border($layout-divider-color);\n  display: flex;\n\n  &-data-container {\n    border-left: border($layout-divider-color);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: spacing(3);\n  }\n\n  &-data-content {\n    height: 100%;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  &-description {\n    font-size: font-size(normal);\n    line-height: 1.5;\n  }\n\n  &-image {\n    display: block;\n    width: 200px;\n  }\n\n  &-row {\n    margin-bottom: spacing();\n  }\n\n  &-title {\n    font-size: font-size(subtitle);\n    font-weight: bold;\n  }\n\n  &-stats {\n    border: border($layout-divider-color);\n    display: table;\n    width: 100%;\n\n    .stat-row {\n      clear: both;\n      display: table-row;\n      width: auto;\n    }\n    .stat-element {\n      border: border($layout-divider-color);\n      display: table-column;\n      float: left;\n      padding: spacing();\n      width: 50%;\n\n      &.center {\n        text-align: center;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonType/PokemonType.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonType/PokemonType.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pokemon-type {\n  background: #6aa596;\n  color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 0.75rem;\n  line-height: 2;\n  margin-right: 8px;\n  text-align: center;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);\n  text-transform: uppercase;\n  width: 66px;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/components/PokemonType/PokemonType.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AARA;EACE,mBAAA;EACA,WAAA;EACA,oCAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,2CAAA;EACA,yBAAA;EACA,WAAA;AAUF","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/color.scss';\n@import 'src/styles/theme.scss';\n\n.pokemon-type {\n  background: #6aa596;\n  color: $white;\n  border: border(rgba(0, 0, 0, 0.2));\n  border-radius: border-radius(sm);\n  display: inline-block;\n  font-size: font-size(label);\n  line-height: 2;\n  margin-right: spacing();\n  text-align: center;\n  text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);\n  text-transform: uppercase;\n  width: 66px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.scss ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  font-family: sans-serif;\n  margin: 0;\n  padding: 0;\n}\n*:focus {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan,\nlabel,\ninput,\na,\nbutton,\nselect,\ntextarea {\n  color: #333;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0;\n}\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\ninput,\nselect,\ntextarea,\nbutton {\n  border: 0;\n  border-radius: 0;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\nbutton {\n  background: transparent;\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\na:focus, a:active {\n  color: #333;\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n::placeholder {\n  color: #999;\n  opacity: 1;\n}\n\nb,\nstrong {\n  font-weight: normal;\n}\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.button, .button-tertiary, .button-secondary, .button-primary {\n  background-color: #333;\n  color: #fff;\n  cursor: pointer;\n  padding: 16px;\n  text-align: center;\n}\n.button:hover, .button-tertiary:hover, .button-secondary:hover, .button-primary:hover {\n  background-color: #404040;\n}\n.button:focus, .button-tertiary:focus, .button-secondary:focus, .button-primary:focus {\n  background-color: #262626;\n  box-shadow: 0px 0px 0px 2px #b3b3b3;\n}\n.button:disabled, .button-tertiary:disabled, .button-secondary:disabled, .button-primary:disabled {\n  background-color: #b3b3b3;\n  box-shadow: none;\n  cursor: auto;\n}\n\n.form-field {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  position: relative;\n}\n.form-field-control {\n  border: 1px solid #999;\n  margin-bottom: 16px;\n  padding: 8px;\n}\n.form-field-control-error {\n  border: 1px solid #f00;\n}\n.form-field-error {\n  color: #f00;\n}\n.form-field-label {\n  margin-bottom: 8px;\n}\n.form-field-message {\n  bottom: 0px;\n  font-size: 0.7em;\n  left: 0;\n  position: absolute;\n}\n.form-field-container-icon {\n  position: relative;\n}\n.form-field-container-icon i {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.form-field-container-icon input {\n  padding-right: 32px;\n}\n.form-field-container-icon .action-icon {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.scss","webpack://./src/index.scss","webpack://./src/styles/color.scss","webpack://./src/styles/theme.scss","webpack://./src/styles/button.scss","webpack://./src/styles/form.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,uBAAA;EACA,SAAA;EACA,UAAA;ACCF;ADCE;EACE,aAAA;ACCJ;;ADGA;;;;;;;;;;;;;;EAcE,WEtBU;EFuBV,eAAA;EACA,gBAAA;EACA,cAAA;EACA,SAAA;ACAF;;ADGA;EACE,qBAAA;EACA,wBAAA;ACAF;;ADGA;EACE,yBAAA;EACA,mBAAA;ACAF;;ADGA;;;;EAIE,SAAA;EACA,gBAAA;ACAF;;ADGA;;EAEE,wBAAA;EACA,SAAA;ACAF;;ADGA;EACE,uBAAA;EACA,eAAA;ACAF;;ADGA;EACE,SAAA;ACAF;;ADGA;EACE,eAAA;EACA,qBAAA;ACAF;ADEE;EAEE,WEpEQ;EFqER,qBAAA;ACDJ;;ADKA;;EAEE,qBAAA;EACA,SAAA;EACA,UAAA;ACFF;;ADKA;EACE,WElFK;EFmFL,UAAA;ACFF;;ADKA;;EAEE,mBAAA;ACFF;;AEpFA;EACE,8BAAA;AFuFF;;AEvCA;EACE;IACE,uBAAA;EF0CF;EExCA;IACE,yBAAA;EF0CF;AACF;AG9FA;EACE,sBFLU;EEMV,WFJM;EEKN,eAAA;EACA,aAAA;EACA,kBAAA;AHgGF;AG9FE;EACE,yBAAA;AHgGJ;AG9FE;EACE,yBAAA;EACA,mCAAA;AHgGJ;AG9FE;EACE,yBAAA;EACA,gBAAA;EACA,YAAA;AHgGJ;;AIvHE;EACE,oBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AJ0HJ;AIxHI;EACE,sBAAA;EACA,mBAAA;EACA,YAAA;AJ0HN;AIxHM;EACE,sBAAA;AJ0HR;AItHI;EACE,WHfA;ADuIN;AIrHI;EACE,kBAAA;AJuHN;AIpHI;EACE,WAAA;EACA,gBAAA;EACA,OAAA;EACA,kBAAA;AJsHN;AInHI;EACE,kBAAA;AJqHN;AInHM;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,2BAAA;AJqHR;AIlHM;EACE,mBAAA;AJoHR;AIjHM;EACE,eAAA;AJmHR","sourcesContent":["* {\n  box-sizing: border-box;\n  font-family: sans-serif;\n  margin: 0;\n  padding: 0;\n\n  &:focus {\n    outline: none;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan,\nlabel,\ninput,\na,\nbutton,\nselect,\ntextarea {\n  color: $css-reset-grey-dark;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0;\n}\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\ninput,\nselect,\ntextarea,\nbutton {\n  border: 0;\n  border-radius: 0;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\nbutton {\n  background: transparent;\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\na {\n  cursor: pointer;\n  text-decoration: none;\n\n  &:focus,\n  &:active {\n    color: $css-reset-grey-dark;\n    text-decoration: none;\n  }\n}\n\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n::placeholder {\n  color: $css-reset-grey;\n  opacity: 1;\n}\n\nb,\nstrong {\n  font-weight: normal;\n}\n","* {\n  box-sizing: border-box;\n  font-family: sans-serif;\n  margin: 0;\n  padding: 0;\n}\n*:focus {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan,\nlabel,\ninput,\na,\nbutton,\nselect,\ntextarea {\n  color: #333;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0;\n}\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\ninput,\nselect,\ntextarea,\nbutton {\n  border: 0;\n  border-radius: 0;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\nbutton {\n  background: transparent;\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\na:focus, a:active {\n  color: #333;\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n::placeholder {\n  color: #999;\n  opacity: 1;\n}\n\nb,\nstrong {\n  font-weight: normal;\n}\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.button, .button-tertiary, .button-secondary, .button-primary {\n  background-color: #333;\n  color: #fff;\n  cursor: pointer;\n  padding: 16px;\n  text-align: center;\n}\n.button:hover, .button-tertiary:hover, .button-secondary:hover, .button-primary:hover {\n  background-color: #404040;\n}\n.button:focus, .button-tertiary:focus, .button-secondary:focus, .button-primary:focus {\n  background-color: #262626;\n  box-shadow: 0px 0px 0px 2px #b3b3b3;\n}\n.button:disabled, .button-tertiary:disabled, .button-secondary:disabled, .button-primary:disabled {\n  background-color: #b3b3b3;\n  box-shadow: none;\n  cursor: auto;\n}\n\n.form-field {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  position: relative;\n}\n.form-field-control {\n  border: 1px solid #999;\n  margin-bottom: 16px;\n  padding: 8px;\n}\n.form-field-control-error {\n  border: 1px solid #f00;\n}\n.form-field-error {\n  color: #f00;\n}\n.form-field-label {\n  margin-bottom: 8px;\n}\n.form-field-message {\n  bottom: 0px;\n  font-size: 0.7em;\n  left: 0;\n  position: absolute;\n}\n.form-field-container-icon {\n  position: relative;\n}\n.form-field-container-icon i {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.form-field-container-icon input {\n  padding-right: 32px;\n}\n.form-field-container-icon .action-icon {\n  cursor: pointer;\n}","$black: #000;\n$green: #008000;\n$grey: #999;\n$grey-dark: #333;\n$red: #f00;\n$white: #fff;\n$yellow: #fed500;\n\n$css-reset-grey: $grey;\n$css-reset-grey-dark: $grey-dark;\n\n$page-content-background: $white;\n$layout-divider-color: rgba($black, 0.1);\n\n","$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","$tint-percentage: 5%;\n$tint-percentage-disabled: 50%;\n\n@function button-shadow($color: $white) {\n  @return 0px 0px 0px 2px lighten($color, 50%);\n}\n\n.button {\n  background-color: $grey-dark;\n  color: $white;\n  cursor: pointer;\n  padding: spacing(2);\n  text-align: center;\n\n  &:hover {\n    background-color: lighten($grey-dark, $tint-percentage);\n  }\n  &:focus {\n    background-color: darken($grey-dark, $tint-percentage);\n    box-shadow: button-shadow($grey-dark);\n  }\n  &:disabled {\n    background-color: lighten($grey-dark, $tint-percentage-disabled);\n    box-shadow: none;\n    cursor: auto;\n  }\n}\n\n.button-primary {\n  @extend .button;\n}\n\n.button-secondary {\n  @extend .button;\n}\n\n.button-tertiary {\n  @extend .button;\n}\n",".form {\n  &-field {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: spacing(2);\n    position: relative;\n\n    &-control {\n      border: border();\n      margin-bottom: spacing(2);\n      padding: spacing();\n\n      &-error {\n        border: border($red);\n      }\n    }\n\n    &-error {\n      color: $red;\n    }\n\n    &-label {\n      margin-bottom: spacing();\n    }\n\n    &-message {\n      bottom: 0px;\n      font-size: 0.7em;\n      left: 0;\n      position: absolute;\n    }\n\n    &-container-icon {\n      position: relative;\n\n      i {\n        position: absolute;\n        right: spacing();\n        top: 50%;\n        transform: translateY(-50%);\n      }\n\n      input {\n        padding-right: spacing(4);\n      }\n\n      .action-icon {\n        cursor: pointer;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Login/LoginForm/LoginForm.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Login/LoginForm/LoginForm.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-form {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n}\n.login-form-fields {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/pages/Login/LoginForm/LoginForm.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AAHA;EALE,oBAAA;EACA,aAAA;EACA,sBAAA;AAWF;AALE;EARA,oBAAA;EACA,aAAA;EACA,sBAAA;EAQE,mBAAA;AASJ","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/theme.scss';\n\n@mixin form-layout() {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n}\n\n.login-form {\n  @include form-layout;\n\n  &-fields {\n    @include form-layout;\n    margin-bottom: spacing(2);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Login/LoginPage.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Login/LoginPage.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-container {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n.login-form-container {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 24px;\n  width: 500px;\n}\n.login-logo {\n  display: block;\n  margin: 16px auto 40px;\n  width: 400px;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/pages/Login/LoginPage.scss","webpack://./src/styles/color.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AAPE;EACE,mBAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;AASJ;AANE;EACE,sBCRI;EDSJ,oCAAA;EACA,aAAA;EACA,YAAA;AAQJ;AALE;EACE,cAAA;EACA,sBAAA;EACA,YAAA;AAOJ","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/color.scss';\n@import 'src/styles/theme.scss';\n\n.login {\n  &-container {\n    align-items: center;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    width: 100%;\n  }\n\n  &-form-container {\n    background-color: $page-content-background;\n    border: border($layout-divider-color);\n    padding: spacing(3);\n    width: 500px;\n  }\n\n  &-logo {\n    display: block;\n    margin: spacing(2) auto spacing(5);\n    width: 400px;\n  }\n}\n","$black: #000;\n$green: #008000;\n$grey: #999;\n$grey-dark: #333;\n$red: #f00;\n$white: #fff;\n$yellow: #fed500;\n\n$css-reset-grey: $grey;\n$css-reset-grey-dark: $grey-dark;\n\n$page-content-background: $white;\n$layout-divider-color: rgba($black, 0.1);\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Pokedex/PokedexPage.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Pokedex/PokedexPage.scss ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pokemon-grid {\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  gap: 16px;\n}\n.pokemon-paginator {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/theme.scss","webpack://./src/pages/Pokedex/PokedexPage.scss"],"names":[],"mappings":"AAIA;EACE,8BAAA;ACHF;;ADmDA;EACE;IACE,uBAAA;EChDF;EDkDA;IACE,yBAAA;EChDF;AACF;AARE;EACE,aAAA;EACA,sCAAA;EACA,SAAA;AAUJ;AAPE;EACE,aAAA;EACA,uBAAA;EACA,aAAA;EACA,WAAA;AASJ","sourcesContent":["$base-unit: 8px;\n$base-font-size: 1rem;\n$navbar-height: 70px;\n\n.empty-list-message {\n  font-size: font-size(subtitle);\n}\n\n@function border($color: $grey) {\n  @return 1px solid $color;\n}\n\n@function border-radius($size: bs) {\n  $radius: $base-unit;\n  @if $size == bs {\n    $radius: $radius * 1;\n  } @else if $size == lg {\n    $radius: $radius * 1.25;\n  } @else if $size == sm {\n    $radius: $radius * 0.5;\n  } @else if $size == xs {\n    $radius: $radius * 0.25;\n  } @else if $size == xl {\n    $radius: $radius * 1.5;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $radius;\n}\n\n@function spacing($space: 1) {\n  $base-space: $base-unit;\n  @return $base-space * $space;\n}\n\n@function font-size($size: normal) {\n  $font-size: $base-font-size;\n  @if $size == normal {\n    $font-size: $font-size * 1;\n  } @else if $size == header {\n    $font-size: $font-size * 2;\n  } @else if $size == subtitle {\n    $font-size: $font-size * 1.2;\n  } @else if $size == pagetitle {\n    $font-size: $font-size * 2.5;\n  } @else if $size == label {\n    $font-size: $font-size * 0.75;\n  } @else {\n    @error \"Unknown size #{$size}.\";\n  }\n  @return $font-size;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","@import 'src/styles/theme.scss';\n\n.pokemon {\n  &-grid {\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n    gap: spacing(2);\n  }\n\n  &-paginator {\n    display: flex;\n    justify-content: center;\n    padding: spacing(2);\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Pokemon/PokemonPage.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Pokemon/PokemonPage.scss ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pokemon-container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/pages/Pokemon/PokemonPage.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;AACF","sourcesContent":[".pokemon-container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./App.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/App.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_App_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Fields/Search/SearchInput.scss":
/*!*******************************************************!*\
  !*** ./src/components/Fields/Search/SearchInput.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_SearchInput_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./SearchInput.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Fields/Search/SearchInput.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_SearchInput_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_SearchInput_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_SearchInput_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_SearchInput_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ImageLoading/ImageLoading.scss":
/*!*******************************************************!*\
  !*** ./src/components/ImageLoading/ImageLoading.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ImageLoading_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./ImageLoading.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/ImageLoading/ImageLoading.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ImageLoading_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ImageLoading_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ImageLoading_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ImageLoading_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Loading/LoadingOverlay.scss":
/*!****************************************************!*\
  !*** ./src/components/Loading/LoadingOverlay.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoadingOverlay_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./LoadingOverlay.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Loading/LoadingOverlay.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoadingOverlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoadingOverlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoadingOverlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoadingOverlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/Navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/Navbar/Navbar.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./Navbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Navbar/Navbar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PageContainer/PageContainer.scss":
/*!*********************************************************!*\
  !*** ./src/components/PageContainer/PageContainer.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PageContainer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./PageContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PageContainer/PageContainer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PageContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PageContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PageContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PageContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PokemonCard/PokemonCard.scss":
/*!*****************************************************!*\
  !*** ./src/components/PokemonCard/PokemonCard.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonCard_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./PokemonCard.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonCard/PokemonCard.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonCard_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonCard_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonCard_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonCard_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PokemonPanel/PokemonPanel.scss":
/*!*******************************************************!*\
  !*** ./src/components/PokemonPanel/PokemonPanel.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPanel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./PokemonPanel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonPanel/PokemonPanel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPanel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPanel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPanel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPanel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PokemonType/PokemonType.scss":
/*!*****************************************************!*\
  !*** ./src/components/PokemonType/PokemonType.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonType_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./PokemonType.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/PokemonType/PokemonType.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonType_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonType_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonType_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonType_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Login/LoginForm/LoginForm.scss":
/*!**************************************************!*\
  !*** ./src/pages/Login/LoginForm/LoginForm.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./LoginForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Login/LoginForm/LoginForm.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Login/LoginPage.scss":
/*!****************************************!*\
  !*** ./src/pages/Login/LoginPage.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./LoginPage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Login/LoginPage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Pokedex/PokedexPage.scss":
/*!********************************************!*\
  !*** ./src/pages/Pokedex/PokedexPage.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokedexPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./PokedexPage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Pokedex/PokedexPage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokedexPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokedexPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokedexPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokedexPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Pokemon/PokemonPage.scss":
/*!********************************************!*\
  !*** ./src/pages/Pokemon/PokemonPage.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./PokemonPage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/pages/Pokemon/PokemonPage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_PokemonPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/context/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./src/pages/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/routes/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");







var App = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context__WEBPACK_IMPORTED_MODULE_1__.LoadingProvider, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "app-container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__.ProtectedRoute, null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__.DetailsPage, null)), path: _routes__WEBPACK_IMPORTED_MODULE_3__.ROUTES.details }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context__WEBPACK_IMPORTED_MODULE_1__.PokemonProvider, null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__.ProtectedRoute, null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Outlet, null))), path: _routes__WEBPACK_IMPORTED_MODULE_3__.ROUTES.home },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__.PokedexPage, null), path: "" }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__.PokemonPage, null), path: ":pokemonID" })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__.PublicRoute, null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__.LoginPage, null)), path: _routes__WEBPACK_IMPORTED_MODULE_3__.ROUTES.login }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Navigate, { to: _routes__WEBPACK_IMPORTED_MODULE_3__.ROUTES.home }), path: "*" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_4__.AppNavbar, null))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/Buttons/ButtonLoading.tsx":
/*!**************************************************!*\
  !*** ./src/components/Buttons/ButtonLoading.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ButtonLoading = function (_a) {
    var isLoading = _a.isLoading, text = _a.text, buttonProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["isLoading", "text"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: "button-primary", disabled: isLoading, type: "button" }, buttonProps), text));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLoading);


/***/ }),

/***/ "./src/components/Buttons/index.ts":
/*!*****************************************!*\
  !*** ./src/components/Buttons/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonLoading": () => (/* reexport safe */ _ButtonLoading__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ButtonLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonLoading */ "./src/components/Buttons/ButtonLoading.tsx");



/***/ }),

/***/ "./src/components/Fields/Input/Input.props.ts":
/*!****************************************************!*\
  !*** ./src/components/Fields/Input/Input.props.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/components/Fields/Input/Input.tsx":
/*!***********************************************!*\
  !*** ./src/components/Fields/Input/Input.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");




var InputField = function (_a) {
    var error = _a.error, errorMessage = _a.errorMessage, label = _a.label, touched = _a.touched, fieldProps = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__rest)(_a, ["error", "errorMessage", "label", "touched"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-field" },
        label && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-field-label'), htmlFor: fieldProps.name },
            label,
            " ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "form-field-error" }, "*"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Field, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-field-control', { 'form-field-control-error': touched && error }) }, fieldProps)),
        touched && errorMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-field-message', { 'form-field-error': error }) }, errorMessage))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);


/***/ }),

/***/ "./src/components/Fields/Input/index.ts":
/*!**********************************************!*\
  !*** ./src/components/Fields/Input/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputField": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/components/Fields/Input/Input.tsx");
/* harmony import */ var _Input_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.props */ "./src/components/Fields/Input/Input.props.ts");




/***/ }),

/***/ "./src/components/Fields/Password/Password.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Fields/Password/Password.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_components_Fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Fields */ "./src/components/Fields/index.ts");



var PasswordField = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components_Fields__WEBPACK_IMPORTED_MODULE_1__.InputField, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, { type: "password" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordField);


/***/ }),

/***/ "./src/components/Fields/Password/index.ts":
/*!*************************************************!*\
  !*** ./src/components/Fields/Password/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordField": () => (/* reexport safe */ _Password__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Password__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Password */ "./src/components/Fields/Password/Password.tsx");



/***/ }),

/***/ "./src/components/Fields/Search/SearchInput.tsx":
/*!******************************************************!*\
  !*** ./src/components/Fields/Search/SearchInput.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchInput.scss */ "./src/components/Fields/Search/SearchInput.scss");



var SearchInput = function (_a) {
    var _b = _a.onSearch, onSearch = _b === void 0 ? function () { } : _b, props = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["onSearch"]);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), inputValue = _c[0], setValue = _c[1];
    var handleKeyPress = function (event) {
        if (event.key === 'Enter')
            onSearch(inputValue);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-field-container-icon search-input-container" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fas fa-search action-icon", title: "Press for search", onClick: function () { return onSearch(inputValue); } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: "form-field-control search-input" }, props, { onChange: function (event) { return setValue(event.target.value); }, onKeyPress: handleKeyPress }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);


/***/ }),

/***/ "./src/components/Fields/Search/index.ts":
/*!***********************************************!*\
  !*** ./src/components/Fields/Search/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchInput": () => (/* reexport safe */ _SearchInput__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchInput */ "./src/components/Fields/Search/SearchInput.tsx");



/***/ }),

/***/ "./src/components/Fields/index.ts":
/*!****************************************!*\
  !*** ./src/components/Fields/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputField": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_0__.InputField),
/* harmony export */   "PasswordField": () => (/* reexport safe */ _Password__WEBPACK_IMPORTED_MODULE_1__.PasswordField),
/* harmony export */   "SearchInput": () => (/* reexport safe */ _Search__WEBPACK_IMPORTED_MODULE_2__.SearchInput)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/components/Fields/Input/index.ts");
/* harmony import */ var _Password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Password */ "./src/components/Fields/Password/index.ts");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ "./src/components/Fields/Search/index.ts");





/***/ }),

/***/ "./src/components/ImageLoading/ImageLoading.tsx":
/*!******************************************************!*\
  !*** ./src/components/ImageLoading/ImageLoading.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants */ "./src/constants/index.ts");
/* harmony import */ var _ImageLoading_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageLoading.scss */ "./src/components/ImageLoading/ImageLoading.scss");





var ImageLoading = function (props) {
    var _a;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), imgLoaded = _b[0], setImgLoaded = _b[1];
    var spinnerContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var handleImageLoaded = function () {
        setImgLoaded(true);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        !imgLoaded && (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: props.className, id: "image-loading-spinner-container", ref: spinnerContainerRef, style: { height: (_a = spinnerContainerRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", { className: "fas fa-spinner image-loading-spinner" }))),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, props, { className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])([props.className, { 'image-loading-hidden': !imgLoaded }]), ref: imgRef, onError: function () {
                if (imgRef.current)
                    imgRef.current.src = src_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ASSETS.defaultImagePath;
            }, onLoad: handleImageLoaded }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageLoading);


/***/ }),

/***/ "./src/components/ImageLoading/index.ts":
/*!**********************************************!*\
  !*** ./src/components/ImageLoading/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageLoading": () => (/* reexport safe */ _ImageLoading__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ImageLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageLoading */ "./src/components/ImageLoading/ImageLoading.tsx");



/***/ }),

/***/ "./src/components/Loading/LoadingOverlay.tsx":
/*!***************************************************!*\
  !*** ./src/components/Loading/LoadingOverlay.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants/index.ts");
/* harmony import */ var _LoadingOverlay_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingOverlay.scss */ "./src/components/Loading/LoadingOverlay.scss");



var LoadingOverlay = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "app-loading" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: "app-loader", src: src_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ASSETS.defaultImagePath })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingOverlay);


/***/ }),

/***/ "./src/components/Loading/index.ts":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingOverlay": () => (/* reexport safe */ _LoadingOverlay__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _LoadingOverlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingOverlay */ "./src/components/Loading/LoadingOverlay.tsx");



/***/ }),

/***/ "./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/context */ "./src/context/index.ts");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/routes */ "./src/routes/index.ts");
/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.scss */ "./src/components/Navbar/Navbar.scss");





var AppNavbar = function () {
    var isLoggedIn = (0,src_context__WEBPACK_IMPORTED_MODULE_1__.useAuth)().isLoggedIn;
    return isLoggedIn ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { className: "app-navbar" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "app-navbar-list" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "app-navbar-link home" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, { to: src_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.home },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fas fa-home" }),
                    "Home")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "app-navbar-link details" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, { to: src_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.details },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fas fa-address-card" }),
                    "Details"))))) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppNavbar);


/***/ }),

/***/ "./src/components/Navbar/index.ts":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppNavbar": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar/Navbar.tsx");



/***/ }),

/***/ "./src/components/PageContainer/PageContainer.tsx":
/*!********************************************************!*\
  !*** ./src/components/PageContainer/PageContainer.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PageContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContainer.scss */ "./src/components/PageContainer/PageContainer.scss");



var PageContainer = function (_a) {
    var children = _a.children, title = _a.title, _b = _a.renderItemHeader, renderItemHeader = _b === void 0 ? function () { return null; } : _b, props = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["children", "title", "renderItemHeader"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "page-container" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "page" },
            title && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "page-title-container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "page-title" }, title),
                renderItemHeader())),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: "page-content" }, props), children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContainer);


/***/ }),

/***/ "./src/components/PageContainer/index.ts":
/*!***********************************************!*\
  !*** ./src/components/PageContainer/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContainer": () => (/* reexport safe */ _PageContainer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageContainer */ "./src/components/PageContainer/PageContainer.tsx");



/***/ }),

/***/ "./src/components/PokemonCard/PokemonCard.props.ts":
/*!*********************************************************!*\
  !*** ./src/components/PokemonCard/PokemonCard.props.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/components/PokemonCard/PokemonCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/PokemonCard/PokemonCard.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components */ "./src/components/index.ts");
/* harmony import */ var _PokemonCard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PokemonCard.scss */ "./src/components/PokemonCard/PokemonCard.scss");




var PokemonCard = function (_a) {
    var pokemon = _a.pokemon, pressable = _a.pressable, _b = _a.onClick, onClick = _b === void 0 ? function (Pokemon) { } : _b, _c = _a.onSelectAsFavorite, onSelectAsFavorite = _c === void 0 ? function () { } : _c;
    var onSelectAsFavoriteHandler = function (event) {
        event.stopPropagation();
        onSelectAsFavorite(pokemon);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({ 'pokemon-card': true, pressable: pressable }), onClick: function () { return onClick(pokemon); } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "pokemon-favorite-buttom", title: "Select as favorite", onClick: onSelectAsFavoriteHandler },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({ 'far fa-star': !pokemon.favorite, 'fas fa-star': pokemon.favorite }) })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_2__.ImageLoading, { alt: pokemon.name, className: "pokemon-image", src: pokemon.image }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "pokemon-name" },
            "#",
            pokemon.id,
            " ",
            pokemon.name)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonCard);


/***/ }),

/***/ "./src/components/PokemonCard/index.ts":
/*!*********************************************!*\
  !*** ./src/components/PokemonCard/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonCard": () => (/* reexport safe */ _PokemonCard__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PokemonCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonCard */ "./src/components/PokemonCard/PokemonCard.tsx");
/* harmony import */ var _PokemonCard_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokemonCard.props */ "./src/components/PokemonCard/PokemonCard.props.ts");




/***/ }),

/***/ "./src/components/PokemonPanel/PokemonPanel.tsx":
/*!******************************************************!*\
  !*** ./src/components/PokemonPanel/PokemonPanel.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components */ "./src/components/index.ts");
/* harmony import */ var _PokemonPanel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokemonPanel.scss */ "./src/components/PokemonPanel/PokemonPanel.scss");



var PokemonPanel = function (_a) {
    var _b, _c;
    var pokemon = _a.pokemon;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel-data-container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.ImageLoading, { alt: pokemon.name, className: "pokemon-panel-image", src: pokemon.image })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel-data-container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel-data-content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "pokemon-panel-title" },
                        "#",
                        pokemon.id,
                        " - ",
                        pokemon.name)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel-row" }, (_b = pokemon.types) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
                    var name = _a.name, slot = _a.slot;
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.PokemonType, { key: slot, type: name }));
                })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "pokemon-panel-description" }, pokemon.description)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-panel-stats" }, (_c = pokemon.stats) === null || _c === void 0 ? void 0 : _c.map(function (_a) {
                        var base = _a.base, name = _a.name;
                        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "stat-row", key: name },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "stat-element" }, name.toUpperCase()),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "stat-element center" }, base)));
                    })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonPanel);


/***/ }),

/***/ "./src/components/PokemonPanel/index.ts":
/*!**********************************************!*\
  !*** ./src/components/PokemonPanel/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonPanel": () => (/* reexport safe */ _PokemonPanel__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PokemonPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonPanel */ "./src/components/PokemonPanel/PokemonPanel.tsx");



/***/ }),

/***/ "./src/components/PokemonType/PokemonType.tsx":
/*!****************************************************!*\
  !*** ./src/components/PokemonType/PokemonType.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants/index.ts");
/* harmony import */ var _PokemonType_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokemonType.scss */ "./src/components/PokemonType/PokemonType.scss");



var PokemonType = function (_a) {
    var type = _a.type;
    var resolveClassByType = function (name) {
        return src_constants__WEBPACK_IMPORTED_MODULE_1__.POKEMON_TYPE_COLOR[name];
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-type", style: { backgroundColor: resolveClassByType(type) } }, type));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonType);


/***/ }),

/***/ "./src/components/PokemonType/index.ts":
/*!*********************************************!*\
  !*** ./src/components/PokemonType/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonType": () => (/* reexport safe */ _PokemonType__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PokemonType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonType */ "./src/components/PokemonType/PokemonType.tsx");



/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonLoading": () => (/* reexport safe */ _Buttons__WEBPACK_IMPORTED_MODULE_0__.ButtonLoading),
/* harmony export */   "InputField": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_1__.InputField),
/* harmony export */   "PasswordField": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_1__.PasswordField),
/* harmony export */   "SearchInput": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_1__.SearchInput),
/* harmony export */   "ImageLoading": () => (/* reexport safe */ _ImageLoading__WEBPACK_IMPORTED_MODULE_2__.ImageLoading),
/* harmony export */   "LoadingOverlay": () => (/* reexport safe */ _Loading__WEBPACK_IMPORTED_MODULE_3__.LoadingOverlay),
/* harmony export */   "AppNavbar": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_4__.AppNavbar),
/* harmony export */   "PageContainer": () => (/* reexport safe */ _PageContainer__WEBPACK_IMPORTED_MODULE_5__.PageContainer),
/* harmony export */   "PokemonCard": () => (/* reexport safe */ _PokemonCard__WEBPACK_IMPORTED_MODULE_6__.PokemonCard),
/* harmony export */   "PokemonPanel": () => (/* reexport safe */ _PokemonPanel__WEBPACK_IMPORTED_MODULE_7__.PokemonPanel),
/* harmony export */   "PokemonType": () => (/* reexport safe */ _PokemonType__WEBPACK_IMPORTED_MODULE_8__.PokemonType)
/* harmony export */ });
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons/index.ts");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fields */ "./src/components/Fields/index.ts");
/* harmony import */ var _ImageLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageLoading */ "./src/components/ImageLoading/index.ts");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading/index.ts");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar/index.ts");
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageContainer */ "./src/components/PageContainer/index.ts");
/* harmony import */ var _PokemonCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PokemonCard */ "./src/components/PokemonCard/index.ts");
/* harmony import */ var _PokemonPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PokemonPanel */ "./src/components/PokemonPanel/index.ts");
/* harmony import */ var _PokemonType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PokemonType */ "./src/components/PokemonType/index.ts");











/***/ }),

/***/ "./src/constants/defaultAssets.ts":
/*!****************************************!*\
  !*** ./src/constants/defaultAssets.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ASSETS": () => (/* binding */ DEFAULT_ASSETS)
/* harmony export */ });
var DEFAULT_ASSETS = {
    defaultImagePath: '/default_image.png',
};


/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ASSETS": () => (/* reexport safe */ _defaultAssets__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ASSETS),
/* harmony export */   "POKEMON_TYPE": () => (/* reexport safe */ _pokemonTypes__WEBPACK_IMPORTED_MODULE_1__.POKEMON_TYPE),
/* harmony export */   "POKEMON_TYPE_COLOR": () => (/* reexport safe */ _pokemonTypes__WEBPACK_IMPORTED_MODULE_1__.POKEMON_TYPE_COLOR)
/* harmony export */ });
/* harmony import */ var _defaultAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultAssets */ "./src/constants/defaultAssets.ts");
/* harmony import */ var _pokemonTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemonTypes */ "./src/constants/pokemonTypes.ts");




/***/ }),

/***/ "./src/constants/pokemonTypes.ts":
/*!***************************************!*\
  !*** ./src/constants/pokemonTypes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POKEMON_TYPE": () => (/* binding */ POKEMON_TYPE),
/* harmony export */   "POKEMON_TYPE_COLOR": () => (/* binding */ POKEMON_TYPE_COLOR)
/* harmony export */ });
var _a;
var POKEMON_TYPE;
(function (POKEMON_TYPE) {
    POKEMON_TYPE["BUG"] = "bug";
    POKEMON_TYPE["DARK"] = "dark";
    POKEMON_TYPE["DRAGON"] = "dragon";
    POKEMON_TYPE["ELECTRIC"] = "electric";
    POKEMON_TYPE["FAIRY"] = "fairy";
    POKEMON_TYPE["FIGHTING"] = "fighting";
    POKEMON_TYPE["FIRE"] = "fire";
    POKEMON_TYPE["FLYING"] = "flying";
    POKEMON_TYPE["GHOST"] = "ghost";
    POKEMON_TYPE["GRASS"] = "grass";
    POKEMON_TYPE["GROUND"] = "ground";
    POKEMON_TYPE["ICE"] = "ice";
    POKEMON_TYPE["NORMAL"] = "normal";
    POKEMON_TYPE["PHYCHIC"] = "psychic";
    POKEMON_TYPE["POISON"] = "poison";
    POKEMON_TYPE["ROCK"] = "rock";
    POKEMON_TYPE["STEEL"] = "steel";
    POKEMON_TYPE["WATER"] = "water";
})(POKEMON_TYPE || (POKEMON_TYPE = {}));
var POKEMON_TYPE_COLOR = (_a = {},
    _a[POKEMON_TYPE.BUG] = '#ab2',
    _a[POKEMON_TYPE.DARK] = '#754',
    _a[POKEMON_TYPE.DRAGON] = '#76e',
    _a[POKEMON_TYPE.ELECTRIC] = '#fc3',
    _a[POKEMON_TYPE.FAIRY] = '#e9e',
    _a[POKEMON_TYPE.FIGHTING] = '#b54',
    _a[POKEMON_TYPE.FIRE] = '#f42',
    _a[POKEMON_TYPE.FLYING] = '#89f',
    _a[POKEMON_TYPE.GHOST] = '#66b',
    _a[POKEMON_TYPE.GRASS] = '#7c5',
    _a[POKEMON_TYPE.GROUND] = '#db5',
    _a[POKEMON_TYPE.ICE] = '#6cf',
    _a[POKEMON_TYPE.NORMAL] = '#aa9',
    _a[POKEMON_TYPE.PHYCHIC] = '#f59',
    _a[POKEMON_TYPE.POISON] = '#a59',
    _a[POKEMON_TYPE.ROCK] = '#ba6',
    _a[POKEMON_TYPE.STEEL] = '#aab',
    _a[POKEMON_TYPE.WATER] = '#39f',
    _a);


/***/ }),

/***/ "./src/context/AuthProvider/AuthProvider.props.ts":
/*!********************************************************!*\
  !*** ./src/context/AuthProvider/AuthProvider.props.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_CONTEXT_DEFAULT_VALUES": () => (/* binding */ AUTH_CONTEXT_DEFAULT_VALUES)
/* harmony export */ });
var AUTH_CONTEXT_DEFAULT_VALUES = {
    isLoggedIn: false,
    login: function () { },
    logout: function () { },
};


/***/ }),

/***/ "./src/context/AuthProvider/AuthProvider.tsx":
/*!***************************************************!*\
  !*** ./src/context/AuthProvider/AuthProvider.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext),
/* harmony export */   "useAuth": () => (/* binding */ useAuth),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var _AuthProvider_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthProvider.props */ "./src/context/AuthProvider/AuthProvider.props.ts");




var AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(_AuthProvider_props__WEBPACK_IMPORTED_MODULE_2__.AUTH_CONTEXT_DEFAULT_VALUES);
var AuthProvider = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(src_services__WEBPACK_IMPORTED_MODULE_1__.AuthService.isLoggedIn()), isLoggedIn = _a[0], setIsLoggedIn = _a[1];
    var login = function (loginData) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function () {
        var loggedIn;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, src_services__WEBPACK_IMPORTED_MODULE_1__.AuthService.login(loginData)];
                case 1:
                    loggedIn = _a.sent();
                    setIsLoggedIn(loggedIn);
                    return [2 /*return*/];
            }
        });
    }); };
    var logout = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function () {
        var loggedOut;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, src_services__WEBPACK_IMPORTED_MODULE_1__.AuthService.logout()];
                case 1:
                    loggedOut = _a.sent();
                    setIsLoggedIn(loggedOut);
                    return [2 /*return*/];
            }
        });
    }); };
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthContext.Provider, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ value: { isLoggedIn: isLoggedIn, login: login, logout: logout } }, props));
};
var useAuth = function () {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);
    if (!context) {
        throw new Error('useAuth must be inside AuthProvider');
    }
    return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);


/***/ }),

/***/ "./src/context/AuthProvider/index.ts":
/*!*******************************************!*\
  !*** ./src/context/AuthProvider/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "AuthContext": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_0__.AuthContext),
/* harmony export */   "useAuth": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_0__.useAuth),
/* harmony export */   "AUTH_CONTEXT_DEFAULT_VALUES": () => (/* reexport safe */ _AuthProvider_props__WEBPACK_IMPORTED_MODULE_1__.AUTH_CONTEXT_DEFAULT_VALUES)
/* harmony export */ });
/* harmony import */ var _AuthProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthProvider */ "./src/context/AuthProvider/AuthProvider.tsx");
/* harmony import */ var _AuthProvider_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthProvider.props */ "./src/context/AuthProvider/AuthProvider.props.ts");




/***/ }),

/***/ "./src/context/LoadingProvider/LoadingProvider.tsx":
/*!*********************************************************!*\
  !*** ./src/context/LoadingProvider/LoadingProvider.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingContext": () => (/* binding */ LoadingContext),
/* harmony export */   "useLoading": () => (/* binding */ useLoading),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components */ "./src/components/index.ts");


var LoadingContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    isLoading: false,
    dispatchLoading: function () { },
});
var LoadingProvider = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isLoading = _a[0], setIsLoading = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingContext.Provider, { value: {
            isLoading: isLoading,
            dispatchLoading: setIsLoading,
        } },
        isLoading && react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlay, null),
        props.children));
};
var useLoading = function () {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LoadingContext);
    if (!context) {
        throw new Error('useAuth must be inside AuthProvider');
    }
    return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingProvider);


/***/ }),

/***/ "./src/context/LoadingProvider/index.ts":
/*!**********************************************!*\
  !*** ./src/context/LoadingProvider/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingProvider": () => (/* reexport safe */ _LoadingProvider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "LoadingContext": () => (/* reexport safe */ _LoadingProvider__WEBPACK_IMPORTED_MODULE_0__.LoadingContext),
/* harmony export */   "useLoading": () => (/* reexport safe */ _LoadingProvider__WEBPACK_IMPORTED_MODULE_0__.useLoading)
/* harmony export */ });
/* harmony import */ var _LoadingProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingProvider */ "./src/context/LoadingProvider/LoadingProvider.tsx");



/***/ }),

/***/ "./src/context/PokemonProvider/PokemonProvider.actions.ts":
/*!****************************************************************!*\
  !*** ./src/context/PokemonProvider/PokemonProvider.actions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonProviderActionKind": () => (/* binding */ PokemonProviderActionKind)
/* harmony export */ });
var PokemonProviderActionKind;
(function (PokemonProviderActionKind) {
    PokemonProviderActionKind["CHANGE_LOADING"] = "CHANGE_LOADING";
    PokemonProviderActionKind["ERROR"] = "ERROR";
    PokemonProviderActionKind["RELOAD_LIST"] = "RELOAD_LIST";
    PokemonProviderActionKind["UPDATE_POKEMON"] = "UPDATE_POKEMON";
    PokemonProviderActionKind["UPDATE_POKEMON_LIST"] = "UPDATE_POKEMON_LIST";
    PokemonProviderActionKind["UPDATE_FAVORITE_POKEMONS"] = "UPDATE_FOVORITE_POKEMONS";
})(PokemonProviderActionKind || (PokemonProviderActionKind = {}));


/***/ }),

/***/ "./src/context/PokemonProvider/PokemonProvider.props.ts":
/*!**************************************************************!*\
  !*** ./src/context/PokemonProvider/PokemonProvider.props.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_POKEMON_PAGE_SIZE": () => (/* binding */ DEFAULT_POKEMON_PAGE_SIZE),
/* harmony export */   "DEFAULT_POKEMON_PAGE_OFFSET": () => (/* binding */ DEFAULT_POKEMON_PAGE_OFFSET),
/* harmony export */   "POKEMON_CONTEXT_DEFAULT_VALUES": () => (/* binding */ POKEMON_CONTEXT_DEFAULT_VALUES),
/* harmony export */   "POKEMON_CONTEXT_DEFAULT_STATE": () => (/* binding */ POKEMON_CONTEXT_DEFAULT_STATE)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DEFAULT_POKEMON_PAGE_SIZE = 20;
var DEFAULT_POKEMON_PAGE_OFFSET = 0;
var DEFAULT_BASE_PROPERTIES = {
    error: false,
    isLoading: true,
    pokemon: null,
    pokemonsList: [],
    pagination: {
        totalRecords: 0,
        nextUrl: null,
        previousUrl: null,
    },
};
var POKEMON_CONTEXT_DEFAULT_VALUES = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, DEFAULT_BASE_PROPERTIES), { getPokemonByID: function () { return Promise.resolve(); }, getPokemonByName: function () { return Promise.resolve(); }, nextPage: function () { }, updateFavoritePokemons: function () { return Promise.resolve(); } });
var POKEMON_CONTEXT_DEFAULT_STATE = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, DEFAULT_BASE_PROPERTIES);


/***/ }),

/***/ "./src/context/PokemonProvider/PokemonProvider.reducer.ts":
/*!****************************************************************!*\
  !*** ./src/context/PokemonProvider/PokemonProvider.reducer.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pokemonReducer": () => (/* binding */ pokemonReducer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonProvider.actions */ "./src/context/PokemonProvider/PokemonProvider.actions.ts");


var mapFavoritesUtil = function (favoritePokemons) { return function (pokemon) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, pokemon), { favorite: favoritePokemons.some(function (favorite) { return favorite == pokemon.id; }) })); }; };
var pokemonReducer = function (prevState, action) {
    switch (action.type) {
        case _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_0__.PokemonProviderActionKind.CHANGE_LOADING: {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevState), { error: false, isLoading: action.isLoading });
        }
        case _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_0__.PokemonProviderActionKind.ERROR: {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevState), { error: true, isLoading: false });
        }
        case _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_0__.PokemonProviderActionKind.RELOAD_LIST: {
            var _a = action.payload, data = _a.data, pagination = _a.pagination;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevState), { error: false, isLoading: false, pokemonsList: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], data, true), pagination: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, pagination) });
        }
        case _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_0__.PokemonProviderActionKind.UPDATE_FAVORITE_POKEMONS: {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevState), { error: false, isLoading: false, pokemonsList: prevState.pokemonsList.map(mapFavoritesUtil(action.favoritePokemons)) });
        }
        case _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_0__.PokemonProviderActionKind.UPDATE_POKEMON: {
            var data = action.payload.data;
            var pokemon = data.find(function (pokemon) { return pokemon.id; });
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevState), { error: false, isLoading: false, pokemon: pokemon || null });
        }
        case _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_0__.PokemonProviderActionKind.UPDATE_POKEMON_LIST: {
            var _b = action.payload, data = _b.data, pagination = _b.pagination;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevState), { error: false, isLoading: false, pokemonsList: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], prevState.pokemonsList, true), data, true), pagination: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, pagination) });
        }
        default:
            return prevState;
    }
};


/***/ }),

/***/ "./src/context/PokemonProvider/PokemonProvider.tsx":
/*!*********************************************************!*\
  !*** ./src/context/PokemonProvider/PokemonProvider.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonContext": () => (/* binding */ PokemonContext),
/* harmony export */   "usePokemon": () => (/* binding */ usePokemon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PokemonProvider.props */ "./src/context/PokemonProvider/PokemonProvider.props.ts");
/* harmony import */ var _PokemonProvider_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PokemonProvider.reducer */ "./src/context/PokemonProvider/PokemonProvider.reducer.ts");
/* harmony import */ var _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PokemonProvider.actions */ "./src/context/PokemonProvider/PokemonProvider.actions.ts");








var PokemonContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(_PokemonProvider_props__WEBPACK_IMPORTED_MODULE_3__.POKEMON_CONTEXT_DEFAULT_VALUES);
var PokemonProvider = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_PokemonProvider_reducer__WEBPACK_IMPORTED_MODULE_4__.pokemonReducer, _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_3__.POKEMON_CONTEXT_DEFAULT_STATE), state = _a[0], dispatch = _a[1];
    var isMountedRef = (0,src_hooks__WEBPACK_IMPORTED_MODULE_2__.useIsMountedRef)();
    var setLoading = function (isLoading) {
        return dispatch({ type: _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_5__.PokemonProviderActionKind.CHANGE_LOADING, isLoading: isLoading });
    };
    var setError = function () { return dispatch({ type: _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_5__.PokemonProviderActionKind.ERROR }); };
    var getPokemonByID = function (id) { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var response, error_1;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, src_services__WEBPACK_IMPORTED_MODULE_1__.PokemonService.getPokemon(id)];
                case 2:
                    response = _a.sent();
                    dispatch({ type: _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_5__.PokemonProviderActionKind.UPDATE_POKEMON, payload: response });
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setError();
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getPokemonByName = function (name) { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var response, error_2;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!name)
                        return [2 /*return*/, getPokemonList()];
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, src_services__WEBPACK_IMPORTED_MODULE_1__.PokemonService.getPokemon(name)];
                case 2:
                    response = _a.sent();
                    dispatch({ type: _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_5__.PokemonProviderActionKind.RELOAD_LIST, payload: response });
                    return [3 /*break*/, 5];
                case 3:
                    error_2 = _a.sent();
                    setError();
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getPokemonList = function (url) { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var response, _a, action, error_3;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    if (!url) return [3 /*break*/, 3];
                    return [4 /*yield*/, src_services__WEBPACK_IMPORTED_MODULE_1__.PokemonService.getPokemonListByUrl(url)];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, src_services__WEBPACK_IMPORTED_MODULE_1__.PokemonService.getPokemonList({
                        limit: _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_POKEMON_PAGE_SIZE,
                        offset: _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_POKEMON_PAGE_OFFSET,
                    })];
                case 4:
                    _a = _b.sent();
                    _b.label = 5;
                case 5:
                    response = _a;
                    action = url
                        ? { type: _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_5__.PokemonProviderActionKind.UPDATE_POKEMON_LIST, payload: response }
                        : { type: _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_5__.PokemonProviderActionKind.RELOAD_LIST, payload: response };
                    isMountedRef.current && dispatch(action);
                    return [3 /*break*/, 8];
                case 6:
                    error_3 = _b.sent();
                    isMountedRef.current && setError();
                    return [3 /*break*/, 8];
                case 7:
                    isMountedRef.current && setLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var updateFavoritePokemons = function (pokemonID, isFavorite) { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var favoritePokemons, _a, error_4;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    if (!isFavorite) return [3 /*break*/, 3];
                    return [4 /*yield*/, src_services__WEBPACK_IMPORTED_MODULE_1__.PokemonService.saveAsFavorite(pokemonID)];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, src_services__WEBPACK_IMPORTED_MODULE_1__.PokemonService.removeFromFavorites(pokemonID)];
                case 4:
                    _a = _b.sent();
                    _b.label = 5;
                case 5:
                    favoritePokemons = _a;
                    dispatch({ type: _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_5__.PokemonProviderActionKind.UPDATE_FAVORITE_POKEMONS, favoritePokemons: favoritePokemons });
                    return [3 /*break*/, 8];
                case 6:
                    error_4 = _b.sent();
                    setError();
                    return [3 /*break*/, 8];
                case 7:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var nextPage = function () {
        if (!state.pagination.nextUrl)
            return;
        getPokemonList(state.pagination.nextUrl);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        getPokemonList();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(PokemonContext.Provider, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ value: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, state), { getPokemonByID: getPokemonByID, getPokemonByName: getPokemonByName, nextPage: nextPage, updateFavoritePokemons: updateFavoritePokemons }) }, props)));
};
var usePokemon = function () {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PokemonContext);
    if (!context) {
        throw new Error('usePokemon must be inside PkemonProvider');
    }
    return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonProvider);


/***/ }),

/***/ "./src/context/PokemonProvider/index.ts":
/*!**********************************************!*\
  !*** ./src/context/PokemonProvider/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonProvider": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "PokemonContext": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_0__.PokemonContext),
/* harmony export */   "usePokemon": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_0__.usePokemon),
/* harmony export */   "PokemonProviderActionKind": () => (/* reexport safe */ _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_1__.PokemonProviderActionKind),
/* harmony export */   "DEFAULT_POKEMON_PAGE_OFFSET": () => (/* reexport safe */ _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_POKEMON_PAGE_OFFSET),
/* harmony export */   "DEFAULT_POKEMON_PAGE_SIZE": () => (/* reexport safe */ _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_POKEMON_PAGE_SIZE),
/* harmony export */   "POKEMON_CONTEXT_DEFAULT_STATE": () => (/* reexport safe */ _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_2__.POKEMON_CONTEXT_DEFAULT_STATE),
/* harmony export */   "POKEMON_CONTEXT_DEFAULT_VALUES": () => (/* reexport safe */ _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_2__.POKEMON_CONTEXT_DEFAULT_VALUES),
/* harmony export */   "pokemonReducer": () => (/* reexport safe */ _PokemonProvider_reducer__WEBPACK_IMPORTED_MODULE_3__.pokemonReducer)
/* harmony export */ });
/* harmony import */ var _PokemonProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonProvider */ "./src/context/PokemonProvider/PokemonProvider.tsx");
/* harmony import */ var _PokemonProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokemonProvider.actions */ "./src/context/PokemonProvider/PokemonProvider.actions.ts");
/* harmony import */ var _PokemonProvider_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokemonProvider.props */ "./src/context/PokemonProvider/PokemonProvider.props.ts");
/* harmony import */ var _PokemonProvider_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PokemonProvider.reducer */ "./src/context/PokemonProvider/PokemonProvider.reducer.ts");






/***/ }),

/***/ "./src/context/index.ts":
/*!******************************!*\
  !*** ./src/context/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_CONTEXT_DEFAULT_VALUES": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_0__.AUTH_CONTEXT_DEFAULT_VALUES),
/* harmony export */   "AuthContext": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_0__.AuthContext),
/* harmony export */   "AuthProvider": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),
/* harmony export */   "useAuth": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_0__.useAuth),
/* harmony export */   "LoadingContext": () => (/* reexport safe */ _LoadingProvider__WEBPACK_IMPORTED_MODULE_1__.LoadingContext),
/* harmony export */   "LoadingProvider": () => (/* reexport safe */ _LoadingProvider__WEBPACK_IMPORTED_MODULE_1__.LoadingProvider),
/* harmony export */   "useLoading": () => (/* reexport safe */ _LoadingProvider__WEBPACK_IMPORTED_MODULE_1__.useLoading),
/* harmony export */   "DEFAULT_POKEMON_PAGE_OFFSET": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_POKEMON_PAGE_OFFSET),
/* harmony export */   "DEFAULT_POKEMON_PAGE_SIZE": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_POKEMON_PAGE_SIZE),
/* harmony export */   "POKEMON_CONTEXT_DEFAULT_STATE": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.POKEMON_CONTEXT_DEFAULT_STATE),
/* harmony export */   "POKEMON_CONTEXT_DEFAULT_VALUES": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.POKEMON_CONTEXT_DEFAULT_VALUES),
/* harmony export */   "PokemonContext": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.PokemonContext),
/* harmony export */   "PokemonProvider": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.PokemonProvider),
/* harmony export */   "PokemonProviderActionKind": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.PokemonProviderActionKind),
/* harmony export */   "pokemonReducer": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.pokemonReducer),
/* harmony export */   "usePokemon": () => (/* reexport safe */ _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__.usePokemon)
/* harmony export */ });
/* harmony import */ var _AuthProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthProvider */ "./src/context/AuthProvider/index.ts");
/* harmony import */ var _LoadingProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingProvider */ "./src/context/LoadingProvider/index.ts");
/* harmony import */ var _PokemonProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokemonProvider */ "./src/context/PokemonProvider/index.ts");





/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMountedRef": () => (/* reexport safe */ _useUnMountedRef__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _useUnMountedRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUnMountedRef */ "./src/hooks/useUnMountedRef.ts");



/***/ }),

/***/ "./src/hooks/useUnMountedRef.ts":
/*!**************************************!*\
  !*** ./src/hooks/useUnMountedRef.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var useIsMountedRef = function () {
    var isMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        isMountedRef.current = true;
        return function () {
            isMountedRef.current = false;
        };
    });
    return isMountedRef;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsMountedRef);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");




var rootNode = document.getElementById('root');
rootNode && react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));


/***/ }),

/***/ "./src/models/API/ListResponse.ts":
/*!****************************************!*\
  !*** ./src/models/API/ListResponse.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_PAGINATION_RESPONSE": () => (/* binding */ DEFAULT_PAGINATION_RESPONSE)
/* harmony export */ });
var DEFAULT_PAGINATION_RESPONSE = {
    data: [],
    pagination: {
        totalRecords: 0,
        previousUrl: null,
        nextUrl: null,
    },
};


/***/ }),

/***/ "./src/models/API/index.ts":
/*!*********************************!*\
  !*** ./src/models/API/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_PAGINATION_RESPONSE": () => (/* reexport safe */ _ListResponse__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PAGINATION_RESPONSE)
/* harmony export */ });
/* harmony import */ var _ListResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListResponse */ "./src/models/API/ListResponse.ts");



/***/ }),

/***/ "./src/models/Login.ts":
/*!*****************************!*\
  !*** ./src/models/Login.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_LOGIN_DATA": () => (/* binding */ DEFAULT_LOGIN_DATA)
/* harmony export */ });
var DEFAULT_LOGIN_DATA = {
    password: '',
    username: '',
};


/***/ }),

/***/ "./src/models/Pagination.ts":
/*!**********************************!*\
  !*** ./src/models/Pagination.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/models/Pokemon.ts":
/*!*******************************!*\
  !*** ./src/models/Pokemon.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_PAGINATION_RESPONSE": () => (/* reexport safe */ _API__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PAGINATION_RESPONSE),
/* harmony export */   "DEFAULT_LOGIN_DATA": () => (/* reexport safe */ _Login__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOGIN_DATA)
/* harmony export */ });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/models/API/index.ts");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./src/models/Login.ts");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination */ "./src/models/Pagination.ts");
/* harmony import */ var _Pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pokemon */ "./src/models/Pokemon.ts");






/***/ }),

/***/ "./src/pages/Details/DetailsPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/Details/DetailsPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components */ "./src/components/index.ts");


var DatailsPage = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.PageContainer, { title: "Details" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Details Content")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatailsPage);


/***/ }),

/***/ "./src/pages/Details/index.ts":
/*!************************************!*\
  !*** ./src/pages/Details/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* reexport safe */ _DetailsPage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DetailsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsPage */ "./src/pages/Details/DetailsPage.tsx");



/***/ }),

/***/ "./src/pages/Login/LoginForm/LoginForm.tsx":
/*!*************************************************!*\
  !*** ./src/pages/Login/LoginForm/LoginForm.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var src_components_Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Fields */ "./src/components/Fields/index.ts");
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
/* harmony import */ var _LoginForm_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm.scss */ "./src/pages/Login/LoginForm/LoginForm.scss");






var LoginForm = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, props), function (_a) {
        var errors = _a.errors, touched = _a.touched;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, { noValidate: true, className: "login-form" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "login-form-fields" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components_Fields__WEBPACK_IMPORTED_MODULE_2__.InputField, { required: true, error: !!(errors === null || errors === void 0 ? void 0 : errors.username), errorMessage: errors === null || errors === void 0 ? void 0 : errors.username, id: "username", label: "Username", name: "username", placeholder: "Enter your username", touched: touched.username, validate: usernameValidator() }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components_Fields__WEBPACK_IMPORTED_MODULE_2__.PasswordField, { required: true, error: !!(errors === null || errors === void 0 ? void 0 : errors.password), errorMessage: errors === null || errors === void 0 ? void 0 : errors.password, id: "password", label: "Password", name: "password", placeholder: "Enter your password", touched: touched.password, validate: passwordValidator() })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "button-primary", type: "submit" }, "Sign in")));
    }));
};
var usernameValidator = function () {
    return (0,src_utils__WEBPACK_IMPORTED_MODULE_3__.formValidations)('Username', [src_utils__WEBPACK_IMPORTED_MODULE_3__.FormValidation.REQUIRED]);
};
var passwordValidator = function () {
    return (0,src_utils__WEBPACK_IMPORTED_MODULE_3__.formValidations)('Password', [
        src_utils__WEBPACK_IMPORTED_MODULE_3__.FormValidation.REQUIRED,
        { validator: src_utils__WEBPACK_IMPORTED_MODULE_3__.FormValidationWithValue.MIN_LENGTH, value: 6 },
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);


/***/ }),

/***/ "./src/pages/Login/LoginForm/index.ts":
/*!********************************************!*\
  !*** ./src/pages/Login/LoginForm/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": () => (/* reexport safe */ _LoginForm__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm */ "./src/pages/Login/LoginForm/LoginForm.tsx");



/***/ }),

/***/ "./src/pages/Login/LoginPage.tsx":
/*!***************************************!*\
  !*** ./src/pages/Login/LoginPage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/context */ "./src/context/index.ts");
/* harmony import */ var src_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models */ "./src/models/index.ts");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginForm */ "./src/pages/Login/LoginForm/index.ts");
/* harmony import */ var _LoginPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginPage.scss */ "./src/pages/Login/LoginPage.scss");






var LoginPage = function () {
    var login = (0,src_context__WEBPACK_IMPORTED_MODULE_1__.useAuth)().login;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "login-container" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "login-form-container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: "login-logo", src: "./logo.png" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_3__.LoginForm, { initialValues: (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, src_models__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_LOGIN_DATA), onSubmit: function (values) { return login(values); } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);


/***/ }),

/***/ "./src/pages/Login/index.ts":
/*!**********************************!*\
  !*** ./src/pages/Login/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* reexport safe */ _LoginPage__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "LoginForm": () => (/* reexport safe */ _LoginForm__WEBPACK_IMPORTED_MODULE_1__.LoginForm)
/* harmony export */ });
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginPage */ "./src/pages/Login/LoginPage.tsx");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm */ "./src/pages/Login/LoginForm/index.ts");




/***/ }),

/***/ "./src/pages/Pokedex/PokedexPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/Pokedex/PokedexPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components */ "./src/components/index.ts");
/* harmony import */ var src_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/context */ "./src/context/index.ts");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/routes */ "./src/routes/index.ts");
/* harmony import */ var _PokedexPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PokedexPage.scss */ "./src/pages/Pokedex/PokedexPage.scss");






var PokedexPage = function () {
    var dispatchLoading = (0,src_context__WEBPACK_IMPORTED_MODULE_2__.useLoading)().dispatchLoading;
    var _a = (0,src_context__WEBPACK_IMPORTED_MODULE_2__.usePokemon)(), getPokemonByName = _a.getPokemonByName, isLoading = _a.isLoading, nextPage = _a.nextPage, pokemonsList = _a.pokemonsList, pagination = _a.pagination, updateFavoritePokemons = _a.updateFavoritePokemons;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        dispatchLoading(isLoading);
    }, [isLoading]);
    var handlerCardClick = function (pokemon) {
        navigate("".concat(src_routes__WEBPACK_IMPORTED_MODULE_3__.ROUTES.home, "/").concat(pokemon.id));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.PageContainer, { renderItemHeader: function () { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.SearchInput, { placeholder: "Search by name", onSearch: function (name) { return getPokemonByName(name); } }); }, title: "Pokedex" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-grid" }, pokemonsList.length ? (pokemonsList.map(function (pokemon) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.PokemonCard, { pressable: true, key: pokemon.id, pokemon: pokemon, onClick: handlerCardClick, onSelectAsFavorite: function () { return updateFavoritePokemons(pokemon.id, !pokemon.favorite); } })); })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "empty-list-message" }, "Pokemon not found"))),
            pokemonsList.length < pagination.totalRecords && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-paginator" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.ButtonLoading, { isLoading: isLoading, text: "Show More", onClick: function () { return nextPage(); } }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokedexPage);


/***/ }),

/***/ "./src/pages/Pokedex/index.ts":
/*!************************************!*\
  !*** ./src/pages/Pokedex/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokedexPage": () => (/* reexport safe */ _PokedexPage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PokedexPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokedexPage */ "./src/pages/Pokedex/PokedexPage.tsx");



/***/ }),

/***/ "./src/pages/Pokemon/PokemonPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/Pokemon/PokemonPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components */ "./src/components/index.ts");
/* harmony import */ var src_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/context */ "./src/context/index.ts");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/routes */ "./src/routes/index.ts");
/* harmony import */ var _PokemonPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PokemonPage.scss */ "./src/pages/Pokemon/PokemonPage.scss");






var PokemonPage = function () {
    var dispatchLoading = (0,src_context__WEBPACK_IMPORTED_MODULE_2__.useLoading)().dispatchLoading;
    var _a = (0,src_context__WEBPACK_IMPORTED_MODULE_2__.usePokemon)(), getPokemonByID = _a.getPokemonByID, isLoading = _a.isLoading, pokemon = _a.pokemon;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    var routeParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        dispatchLoading(isLoading);
    }, [isLoading]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (routeParams.pokemonID)
            getPokemonByID(routeParams.pokemonID);
    }, [routeParams]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.PageContainer, { renderItemHeader: function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "button-primary", onClick: function () { return navigate(src_routes__WEBPACK_IMPORTED_MODULE_3__.ROUTES.home); } }, "Return to Pokedex")); }, title: isLoading ? '' : (pokemon === null || pokemon === void 0 ? void 0 : pokemon.name) || 'Pokemon not found' }, pokemon && !isLoading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pokemon-container" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components__WEBPACK_IMPORTED_MODULE_1__.PokemonPanel, { pokemon: pokemon })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonPage);


/***/ }),

/***/ "./src/pages/Pokemon/index.ts":
/*!************************************!*\
  !*** ./src/pages/Pokemon/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonPage": () => (/* reexport safe */ _PokemonPage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PokemonPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonPage */ "./src/pages/Pokemon/PokemonPage.tsx");



/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* reexport safe */ _Details__WEBPACK_IMPORTED_MODULE_0__.DetailsPage),
/* harmony export */   "LoginForm": () => (/* reexport safe */ _Login__WEBPACK_IMPORTED_MODULE_1__.LoginForm),
/* harmony export */   "LoginPage": () => (/* reexport safe */ _Login__WEBPACK_IMPORTED_MODULE_1__.LoginPage),
/* harmony export */   "PokemonPage": () => (/* reexport safe */ _Pokemon__WEBPACK_IMPORTED_MODULE_2__.PokemonPage),
/* harmony export */   "PokedexPage": () => (/* reexport safe */ _Pokedex__WEBPACK_IMPORTED_MODULE_3__.PokedexPage)
/* harmony export */ });
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details */ "./src/pages/Details/index.ts");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./src/pages/Login/index.ts");
/* harmony import */ var _Pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pokemon */ "./src/pages/Pokemon/index.ts");
/* harmony import */ var _Pokedex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pokedex */ "./src/pages/Pokedex/index.ts");






/***/ }),

/***/ "./src/routes/ProtectedRoute.tsx":
/*!***************************************!*\
  !*** ./src/routes/ProtectedRoute.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/context */ "./src/context/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/routes/routes.ts");




var PrivateRoute = function (_a) {
    var children = _a.children;
    var isLoggedIn = (0,src_context__WEBPACK_IMPORTED_MODULE_1__.useAuth)().isLoggedIn;
    return isLoggedIn ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, { to: _routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.login });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);


/***/ }),

/***/ "./src/routes/PublicRoute.tsx":
/*!************************************!*\
  !*** ./src/routes/PublicRoute.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/context */ "./src/context/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/routes/routes.ts");




var PublicRoute = function (_a) {
    var children = _a.children;
    var isLoggedIn = (0,src_context__WEBPACK_IMPORTED_MODULE_1__.useAuth)().isLoggedIn;
    return isLoggedIn ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, { to: _routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.home }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicRoute);


/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedRoute": () => (/* reexport safe */ _ProtectedRoute__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "PublicRoute": () => (/* reexport safe */ _PublicRoute__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ROUTES": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES)
/* harmony export */ });
/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProtectedRoute */ "./src/routes/ProtectedRoute.tsx");
/* harmony import */ var _PublicRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicRoute */ "./src/routes/PublicRoute.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/routes/routes.ts");





/***/ }),

/***/ "./src/routes/routes.ts":
/*!******************************!*\
  !*** ./src/routes/routes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
var ROUTES = {
    details: '/details',
    login: '/login',
    home: '/pokedex',
};


/***/ }),

/***/ "./src/services/AuthService.ts":
/*!*************************************!*\
  !*** ./src/services/AuthService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SESSION_DATA_KEY = 'SESSION_DATA';
var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.isLoggedIn = function () { return !!_this.getUserData(); };
        this.getUserData = function () {
            var sessionData = localStorage.getItem(SESSION_DATA_KEY);
            return sessionData ? JSON.parse(sessionData) : null;
        };
        this.login = function (loginData) { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        localStorage.setItem(SESSION_DATA_KEY, JSON.stringify(loginData));
                        resolve(true);
                    })];
            });
        }); };
        this.logout = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        localStorage.clear();
                        resolve(false);
                    })];
            });
        }); };
    }
    AuthService.getInstance = function () {
        this.instance = AuthService.instance || new AuthService();
        return this.instance;
    };
    return AuthService;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthService.getInstance());


/***/ }),

/***/ "./src/services/Pokemon/PokemonService.ts":
/*!************************************************!*\
  !*** ./src/services/Pokemon/PokemonService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_POKEMON_PAGINATION_RESPONSE": () => (/* binding */ DEFAULT_POKEMON_PAGINATION_RESPONSE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/Pokemon/config.ts");



var FAVORITE_POKEMONS_KEY = 'FAVORITE_POKEMONS_KEY';
var DEFAULT_POKEMON_PAGINATION_RESPONSE = {
    data: [],
    pagination: {
        nextUrl: null,
        previousUrl: null,
        totalRecords: 0,
    },
};
var PokemonService = /** @class */ (function () {
    function PokemonService() {
        var _this = this;
        this.getPokemon = function (name) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
            var url, response, data_1, description, error_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        url = new URL("".concat(_config__WEBPACK_IMPORTED_MODULE_1__.POKEMON_URLS.getPokemon, "/").concat(name.toLowerCase()));
                        return [4 /*yield*/, fetch(url.href)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data_1 = (_a.sent());
                        return [4 /*yield*/, this.getPokemonDescription(name)];
                    case 3:
                        description = _a.sent();
                        return [2 /*return*/, {
                                data: [
                                    {
                                        id: data_1.id,
                                        description: description,
                                        favorite: this.getFavoriteListLocalStorage().some(function (favorite) { return favorite == data_1.id; }),
                                        image: _config__WEBPACK_IMPORTED_MODULE_1__.POKEMON_URLS.getPokemonSpritesUrl(data_1.name),
                                        linkInfo: url.href,
                                        name: (0,src_utils__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(data_1.name),
                                        stats: data_1.stats.map(function (pokemonStat) { return ({
                                            base: pokemonStat.base_stat,
                                            name: pokemonStat.stat.name,
                                        }); }),
                                        types: data_1.types.map(function (pokemonType) { return ({
                                            slot: pokemonType.slot,
                                            name: pokemonType.type.name,
                                        }); }),
                                    },
                                ],
                                pagination: {
                                    nextUrl: null,
                                    previousUrl: null,
                                    totalRecords: 1,
                                },
                            }];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, DEFAULT_POKEMON_PAGINATION_RESPONSE)];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.getPokemonDescription = function (id) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
            var url, response, data, description;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = new URL("".concat(_config__WEBPACK_IMPORTED_MODULE_1__.POKEMON_URLS.getPokemonSpecies, "/").concat(id.toLowerCase()));
                        return [4 /*yield*/, fetch(url.href)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = (_a.sent());
                        description = data.flavor_text_entries.find(function (entry) { return entry.language.name === 'en'; });
                        return [2 /*return*/, (description === null || description === void 0 ? void 0 : description.flavor_text) || ''];
                }
            });
        }); };
        this.getPokemonList = function (paginationData) {
            var limit = paginationData ? paginationData.limit : 20;
            var offset = paginationData ? paginationData.offset : 0;
            var url = new URL(_config__WEBPACK_IMPORTED_MODULE_1__.POKEMON_URLS.getPokemon);
            url.search = new URLSearchParams({ limit: limit.toString(), offset: offset.toString() }).toString();
            return _this.getPokemonListByUrl(url.href).catch(function (error) { return error; });
        };
        this.getPokemonListByUrl = function (url) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
            var urlParsed, offset, baseID, response, data;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlParsed = new URL(url);
                        offset = Number(urlParsed.searchParams.get('offset'));
                        baseID = isNaN(offset) ? 1 : offset + 1;
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = (_a.sent());
                        return [2 /*return*/, {
                                data: data.results.map(function (pokemon) {
                                    var id = (baseID++).toString();
                                    return {
                                        id: id,
                                        image: _config__WEBPACK_IMPORTED_MODULE_1__.POKEMON_URLS.getPokemonSpritesUrl(pokemon.name),
                                        name: (0,src_utils__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(pokemon.name),
                                        favorite: _this.getFavoriteListLocalStorage().some(function (favorite) { return favorite == id; }),
                                    };
                                }),
                                pagination: {
                                    totalRecords: data.count,
                                    nextUrl: data.next,
                                    previousUrl: data.previous,
                                },
                            }];
                }
            });
        }); };
        this.getFavoriteListLocalStorage = function () {
            var favoriteList = localStorage.getItem(FAVORITE_POKEMONS_KEY);
            return favoriteList ? JSON.parse(favoriteList) : [];
        };
        this.getFavoriteList = function () {
            return new Promise(function (resolve) {
                resolve(_this.getFavoriteListLocalStorage());
            });
        };
        this.saveAsFavorite = function (pokemonID) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
            var favoriteList;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFavoriteList()];
                    case 1:
                        favoriteList = _a.sent();
                        localStorage.setItem(FAVORITE_POKEMONS_KEY, JSON.stringify((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], favoriteList, true), [pokemonID], false).sort(function (a, b) { return Number(a) - Number(b); })));
                        return [2 /*return*/, this.getFavoriteList()];
                }
            });
        }); };
        this.removeFromFavorites = function (pokemonID) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
            var favoriteList;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFavoriteList()];
                    case 1:
                        favoriteList = _a.sent();
                        localStorage.setItem(FAVORITE_POKEMONS_KEY, JSON.stringify(favoriteList.filter(function (id) { return id !== pokemonID; })));
                        return [2 /*return*/, this.getFavoriteList()];
                }
            });
        }); };
    }
    PokemonService.getInstance = function () {
        this.instance = PokemonService.instance || new PokemonService();
        return this.instance;
    };
    return PokemonService;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonService.getInstance());


/***/ }),

/***/ "./src/services/Pokemon/config.ts":
/*!****************************************!*\
  !*** ./src/services/Pokemon/config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL_BASE": () => (/* binding */ URL_BASE),
/* harmony export */   "POKEMON_URLS": () => (/* binding */ POKEMON_URLS)
/* harmony export */ });
var URL_BASE = 'https://pokeapi.co/api/v2';
var POKEMON_URLS = {
    getPokemon: "".concat(URL_BASE, "/pokemon"),
    getPokemonSpecies: "".concat(URL_BASE, "/pokemon-species"),
    getPokemonSpritesUrl: function (name) { return "https://img.pokemondb.net/sprites/home/normal/".concat(name, ".png"); },
};


/***/ }),

/***/ "./src/services/Pokemon/index.ts":
/*!***************************************!*\
  !*** ./src/services/Pokemon/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonService": () => (/* reexport safe */ _PokemonService__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "POKEMON_URLS": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_1__.POKEMON_URLS),
/* harmony export */   "URL_BASE": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_1__.URL_BASE)
/* harmony export */ });
/* harmony import */ var _PokemonService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonService */ "./src/services/Pokemon/PokemonService.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/Pokemon/config.ts");




/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* reexport safe */ _AuthService__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "POKEMON_URLS": () => (/* reexport safe */ _Pokemon__WEBPACK_IMPORTED_MODULE_1__.POKEMON_URLS),
/* harmony export */   "PokemonService": () => (/* reexport safe */ _Pokemon__WEBPACK_IMPORTED_MODULE_1__.PokemonService),
/* harmony export */   "URL_BASE": () => (/* reexport safe */ _Pokemon__WEBPACK_IMPORTED_MODULE_1__.URL_BASE)
/* harmony export */ });
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthService */ "./src/services/AuthService.ts");
/* harmony import */ var _Pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pokemon */ "./src/services/Pokemon/index.ts");




/***/ }),

/***/ "./src/utils/AsyncUtils.ts":
/*!*********************************!*\
  !*** ./src/utils/AsyncUtils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
var debounce = function (func, timeout) {
    if (timeout === void 0) { timeout = 300; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(void 0, args);
        }, timeout);
    };
};


/***/ }),

/***/ "./src/utils/FormValidations.ts":
/*!**************************************!*\
  !*** ./src/utils/FormValidations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidation": () => (/* binding */ FormValidation),
/* harmony export */   "FormValidationWithValue": () => (/* binding */ FormValidationWithValue),
/* harmony export */   "formValidations": () => (/* binding */ formValidations)
/* harmony export */ });
var _a;
var FormValidation;
(function (FormValidation) {
    FormValidation["REQUIRED"] = "REQUIRED";
})(FormValidation || (FormValidation = {}));
var FormValidationWithValue;
(function (FormValidationWithValue) {
    FormValidationWithValue["MIN_LENGTH"] = "MIN_LENGTH";
})(FormValidationWithValue || (FormValidationWithValue = {}));
var formValidations = function (fieldName, validations) {
    return function (currentValue) {
        var errorMessage = '';
        validations.every(function (validation) {
            var validationName = isFormValidationObject(validation) ? validation.validator : validation;
            var validatorObj = validatorObject[validationName];
            var result = isFormValidationObject(validation)
                ? validatorObj.validator(currentValue, validation.value)
                : validatorObj.validator(currentValue);
            if (!result)
                errorMessage = validatorObj.errorMessage(fieldName);
            return result;
        });
        return errorMessage;
    };
};
var validatorObject = (_a = {},
    _a[FormValidation.REQUIRED] = {
        errorMessage: function (fieldName) { return "".concat(fieldName, " is required"); },
        validator: function (value) { return !!value; },
    },
    _a[FormValidationWithValue.MIN_LENGTH] = {
        errorMessage: function (fieldName) { return "".concat(fieldName, " require 3 characters minimum"); },
        validator: function (value, comparativeValue) { return value.length >= comparativeValue; },
    },
    _a);
function isFormValidationObject(validation) {
    return validation.validator !== undefined;
}


/***/ }),

/***/ "./src/utils/StringFormatter.ts":
/*!**************************************!*\
  !*** ./src/utils/StringFormatter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
var capitalizeFirstLetter = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* reexport safe */ _AsyncUtils__WEBPACK_IMPORTED_MODULE_0__.debounce),
/* harmony export */   "FormValidation": () => (/* reexport safe */ _FormValidations__WEBPACK_IMPORTED_MODULE_1__.FormValidation),
/* harmony export */   "FormValidationWithValue": () => (/* reexport safe */ _FormValidations__WEBPACK_IMPORTED_MODULE_1__.FormValidationWithValue),
/* harmony export */   "formValidations": () => (/* reexport safe */ _FormValidations__WEBPACK_IMPORTED_MODULE_1__.formValidations),
/* harmony export */   "capitalizeFirstLetter": () => (/* reexport safe */ _StringFormatter__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)
/* harmony export */ });
/* harmony import */ var _AsyncUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncUtils */ "./src/utils/AsyncUtils.ts");
/* harmony import */ var _FormValidations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidations */ "./src/utils/FormValidations.ts");
/* harmony import */ var _StringFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StringFormatter */ "./src/utils/StringFormatter.ts");





/***/ }),

/***/ "./public/background.png":
/*!*******************************!*\
  !*** ./public/background.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "074824c3fd868c2cb1d7.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_57blocks_test"] = self["webpackChunk_57blocks_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_clsx_dist_clsx_m_js-node_modules_css-loader_dist_runtime_api_js-node_mod-c13f6d"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9TZWFyY2gvU2VhcmNoSW5wdXQuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvSW1hZ2VMb2FkaW5nL0ltYWdlTG9hZGluZy5zY3NzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmdPdmVybGF5LnNjc3MiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9QYWdlQ29udGFpbmVyLnNjc3MiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25DYXJkL1Bva2Vtb25DYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25QYW5lbC9Qb2tlbW9uUGFuZWwuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vblR5cGUvUG9rZW1vblR5cGUuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9Mb2dpbi9Mb2dpblBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL1Bva2VkZXgvUG9rZWRleFBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL1Bva2Vtb24vUG9rZW1vblBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL0FwcC5zY3NzP2Q4ZjEiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9TZWFyY2gvU2VhcmNoSW5wdXQuc2Nzcz82MzVlIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9JbWFnZUxvYWRpbmcvSW1hZ2VMb2FkaW5nLnNjc3M/MDgzNyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nT3ZlcmxheS5zY3NzP2I3MDMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2Nzcz9jYmIzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9QYWdlQ29udGFpbmVyL1BhZ2VDb250YWluZXIuc2Nzcz82Njk0Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uQ2FyZC9Qb2tlbW9uQ2FyZC5zY3NzP2Q4MTYiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25QYW5lbC9Qb2tlbW9uUGFuZWwuc2Nzcz9mZWM5Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uVHlwZS9Qb2tlbW9uVHlwZS5zY3NzPzBkNTAiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9pbmRleC5zY3NzPzk4MzAiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLnNjc3M/OGViMCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0xvZ2luL0xvZ2luUGFnZS5zY3NzPzhmNTYiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9Qb2tlZGV4L1Bva2VkZXhQYWdlLnNjc3M/OWYyMCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL1Bva2Vtb24vUG9rZW1vblBhZ2Uuc2Nzcz85MTE1Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9ucy9CdXR0b25Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvRmllbGRzL0lucHV0L0lucHV0LnByb3BzLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9GaWVsZHMvSW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9GaWVsZHMvSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9QYXNzd29yZC9QYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9QYXNzd29yZC9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvRmllbGRzL1NlYXJjaC9TZWFyY2hJbnB1dC50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9TZWFyY2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvSW1hZ2VMb2FkaW5nL0ltYWdlTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ltYWdlTG9hZGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nT3ZlcmxheS50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1BhZ2VDb250YWluZXIvUGFnZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1BhZ2VDb250YWluZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25DYXJkL1Bva2Vtb25DYXJkLnByb3BzLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uQ2FyZC9Qb2tlbW9uQ2FyZC50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25DYXJkL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uUGFuZWwvUG9rZW1vblBhbmVsLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vblBhbmVsL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uVHlwZS9Qb2tlbW9uVHlwZS50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25UeXBlL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnN0YW50cy9kZWZhdWx0QXNzZXRzLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29uc3RhbnRzL3Bva2Vtb25UeXBlcy50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnRleHQvQXV0aFByb3ZpZGVyL0F1dGhQcm92aWRlci5wcm9wcy50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnRleHQvQXV0aFByb3ZpZGVyL0F1dGhQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb250ZXh0L0F1dGhQcm92aWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnRleHQvTG9hZGluZ1Byb3ZpZGVyL0xvYWRpbmdQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb250ZXh0L0xvYWRpbmdQcm92aWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnRleHQvUG9rZW1vblByb3ZpZGVyL1Bva2Vtb25Qcm92aWRlci5hY3Rpb25zLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29udGV4dC9Qb2tlbW9uUHJvdmlkZXIvUG9rZW1vblByb3ZpZGVyLnByb3BzLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29udGV4dC9Qb2tlbW9uUHJvdmlkZXIvUG9rZW1vblByb3ZpZGVyLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb250ZXh0L1Bva2Vtb25Qcm92aWRlci9Qb2tlbW9uUHJvdmlkZXIudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29udGV4dC9Qb2tlbW9uUHJvdmlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb250ZXh0L2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvaG9va3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9ob29rcy91c2VVbk1vdW50ZWRSZWYudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL21vZGVscy9BUEkvTGlzdFJlc3BvbnNlLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvbW9kZWxzL0FQSS9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL21vZGVscy9Mb2dpbi50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL21vZGVscy9QYWdpbmF0aW9uLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvbW9kZWxzL1Bva2Vtb24udHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9EZXRhaWxzL0RldGFpbHNQYWdlLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0RldGFpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0xvZ2luL0xvZ2luRm9ybS9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0xvZ2luL0xvZ2luUGFnZS50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9Mb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL1Bva2VkZXgvUG9rZWRleFBhZ2UudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvUG9rZWRleC9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL1Bva2Vtb24vUG9rZW1vblBhZ2UudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvUG9rZW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcm91dGVzL1Byb3RlY3RlZFJvdXRlLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3JvdXRlcy9QdWJsaWNSb3V0ZS50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9yb3V0ZXMvcm91dGVzLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvc2VydmljZXMvQXV0aFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9zZXJ2aWNlcy9Qb2tlbW9uL1Bva2Vtb25TZXJ2aWNlLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvc2VydmljZXMvUG9rZW1vbi9jb25maWcudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9zZXJ2aWNlcy9Qb2tlbW9uL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy91dGlscy9Bc3luY1V0aWxzLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvdXRpbHMvRm9ybVZhbGlkYXRpb25zLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvdXRpbHMvU3RyaW5nRm9ybWF0dGVyLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9wdWJsaWMvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uYXBwLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTIwJSBhdXRvO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hcHAtbmF2YmFyIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL0FwcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQVJFO0VBQ0UseURBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JEUFk7RUNRWixrQkFBQTtFQUNBLFdBQUE7QUFVSjtBQVBFO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FBU0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdGhlbWUuc2Nzcyc7XFxuXFxuLmFwcCB7XFxuICAmLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3B1YmxpYy9iYWNrZ3JvdW5kLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMCUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogJG5hdmJhci1oZWlnaHQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmLW5hdmJhciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoLWlucHV0IHtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcbi5zZWFyY2gtaW5wdXQuZm9ybS1maWVsZC1jb250cm9sIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9TZWFyY2gvU2VhcmNoSW5wdXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlYXJjaC1pbnB1dCB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcblxcbiAgJi5mb3JtLWZpZWxkLWNvbnRyb2wge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uaW1hZ2UtbG9hZGluZy1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uaW1hZ2UtbG9hZGluZy1zcGlubmVyIHtcXG4gIGFuaW1hdGlvbjogMnMgcm90YXRlIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLmltYWdlLWxvYWRpbmctc3Bpbm5lcjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiNpbWFnZS1sb2FkaW5nLXNwaW5uZXItY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VMb2FkaW5nL0ltYWdlTG9hZGluZy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQVJFO0VBQ0Usd0JBQUE7QUFVSjtBQVJFO0VBQ0Usb0NBQUE7QUFVSjtBQVJJO0VBQ0UsaUJBQUE7QUFVTjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBUUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdGhlbWUuc2Nzcyc7XFxuXFxuLmltYWdlLWxvYWRpbmcge1xcbiAgJi1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAmLXNwaW5uZXIge1xcbiAgICBhbmltYXRpb246IDJzIHJvdGF0ZSBsaW5lYXIgaW5maW5pdGU7XFxuXFxuICAgICY6YmVmb3JlIHtcXG4gICAgICBmb250LXNpemU6IGZvbnQtc2l6ZShwYWdldGl0bGUpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbiNpbWFnZS1sb2FkaW5nLXNwaW5uZXItY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5hcHAtbG9hZGVyIHtcXG4gIGFuaW1hdGlvbjogMXMgcm90YXRlIGxpbmVhciBpbmZpbml0ZTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5hcHAtbG9hZGluZyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZ092ZXJsYXkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQVJBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFVRjs7QUFQQTtFQUNFLG1CQUFBO0VBQ0Esc0JDTk07RURPTixhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvY29sb3Iuc2Nzcyc7XFxuQGltcG9ydCAnc3JjL3N0eWxlcy90aGVtZS5zY3NzJztcXG5cXG4uYXBwLWxvYWRlciB7XFxuICBhbmltYXRpb246IDFzIHJvdGF0ZSBsaW5lYXIgaW5maW5pdGU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uYXBwLWxvYWRpbmcge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cIixcIiRibGFjazogIzAwMDtcXG4kZ3JlZW46ICMwMDgwMDA7XFxuJGdyZXk6ICM5OTk7XFxuJGdyZXktZGFyazogIzMzMztcXG4kcmVkOiAjZjAwO1xcbiR3aGl0ZTogI2ZmZjtcXG4keWVsbG93OiAjZmVkNTAwO1xcblxcbiRjc3MtcmVzZXQtZ3JleTogJGdyZXk7XFxuJGNzcy1yZXNldC1ncmV5LWRhcms6ICRncmV5LWRhcms7XFxuXFxuJHBhZ2UtY29udGVudC1iYWNrZ3JvdW5kOiAkd2hpdGU7XFxuJGxheW91dC1kaXZpZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xKTtcXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uYXBwLW5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYXBwLW5hdmJhci1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5hcHAtbmF2YmFyLWxpbmsge1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5hcHAtbmF2YmFyLWxpbms6aG92ZXIgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmFwcC1uYXZiYXItbGluayAuYWN0aXZlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYXBwLW5hdmJhci1saW5rIGEge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hcHAtbmF2YmFyLWxpbmsgYSAqIHtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuLmFwcC1uYXZiYXItbGluay5ob21lIHtcXG4gIGJvcmRlci1jb2xvcjogI2YwMDtcXG59XFxuLmFwcC1uYXZiYXItbGluay5ob21lOmhvdmVyIGEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcXG59XFxuLmFwcC1uYXZiYXItbGluay5ob21lIC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcbi5hcHAtbmF2YmFyLWxpbmsuZGV0YWlscyB7XFxuICBib3JkZXItY29sb3I6ICMwMDgwMDA7XFxufVxcbi5hcHAtbmF2YmFyLWxpbmsuZGV0YWlsczpob3ZlciBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XFxufVxcbi5hcHAtbmF2YmFyLWxpbmsuZGV0YWlscyAuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQ2RNO0VEZU4sd0NBQUE7RUFDQSxZRG5CYztFQ29CZCx1QkFBQTtFQUNBLFdBQUE7QUFKRjtBQU1FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFKSjtBQU9FO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0FBTEo7QUFPSTtFQUNFLFdDOUJFO0FEeUJSO0FBUUk7RUFDRSxXQ2xDRTtBRDRCUjtBQVNJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBUE47QUFTTTtFQUNFLGtCQUFBO0FBUFI7QUFXSTtFQS9DRixrQkNKSTtBRDJDTjtBQXRDRTtFQUNFLHNCQ05FO0FEOENOO0FBdENFO0VBQ0Usc0NBQUE7QUF3Q0o7QUFLSTtFQWxERixxQkNQTTtBRHVEUjtBQS9DRTtFQUNFLHlCQ1RJO0FEMERSO0FBL0NFO0VBQ0Usc0NBQUE7QUFpREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvY29sb3Iuc2Nzcyc7XFxuQGltcG9ydCAnc3JjL3N0eWxlcy90aGVtZS5zY3NzJztcXG5cXG4kZGV0YWlscy1jb2xvcjogJGdyZWVuO1xcbiRob21lLWNvbG9yOiAkcmVkO1xcbiRsaW5rLWFjdGl2ZS1vcGFjaXR5OiAwLjU7XFxuXFxuQG1peGluIGxpbmstc3R5bGVzKCRjb2xvcikge1xcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XFxuICAmOmhvdmVyIGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxuICB9XFxuICAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3IsICRsaW5rLWFjdGl2ZS1vcGFjaXR5KTtcXG4gIH1cXG59XFxuXFxuLmFwcC1uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIGJvcmRlci10b3A6IGJvcmRlcigkbGF5b3V0LWRpdmlkZXItY29sb3IpO1xcbiAgaGVpZ2h0OiAkbmF2YmFyLWhlaWdodDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICAmLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAmLWxpbmsge1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgJGJsYWNrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuXFxuICAgICY6aG92ZXIgYSB7XFxuICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAuYWN0aXZlIHtcXG4gICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIGEge1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICoge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBzcGFjaW5nKDIpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLmhvbWUge1xcbiAgICAgIEBpbmNsdWRlIGxpbmstc3R5bGVzKCRob21lLWNvbG9yKTtcXG4gICAgfVxcbiAgICAmLmRldGFpbHMge1xcbiAgICAgIEBpbmNsdWRlIGxpbmstc3R5bGVzKCRkZXRhaWxzLWNvbG9yKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRibGFjazogIzAwMDtcXG4kZ3JlZW46ICMwMDgwMDA7XFxuJGdyZXk6ICM5OTk7XFxuJGdyZXktZGFyazogIzMzMztcXG4kcmVkOiAjZjAwO1xcbiR3aGl0ZTogI2ZmZjtcXG4keWVsbG93OiAjZmVkNTAwO1xcblxcbiRjc3MtcmVzZXQtZ3JleTogJGdyZXk7XFxuJGNzcy1yZXNldC1ncmV5LWRhcms6ICRncmV5LWRhcms7XFxuXFxuJHBhZ2UtY29udGVudC1iYWNrZ3JvdW5kOiAkd2hpdGU7XFxuJGxheW91dC1kaXZpZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xKTtcXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wYWdlLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wYWdlLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5wYWdlLXRpdGxlLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9QYWdlQ29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3Iuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLDhCQUFBO0FDSEY7O0FEbURBO0VBQ0U7SUFDRSx1QkFBQTtFQ2hERjtFRGtEQTtJQUNFLHlCQUFBO0VDaERGO0FBQ0Y7QUFMQTtFQUNFLHNCQ0ZNO0VER04sb0NBQUE7RUFDQSxpQkFObUI7RUFPbkIsWUFBQTtFQUNBLFdBQUE7QUFPRjtBQUxFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBT0o7QUFKRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQU1KO0FBSEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFLSjtBQUhJO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBbENVO0VBbUNWLGVBQUE7QUFLTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3JjL3N0eWxlcy9jb2xvci5zY3NzJztcXG5AaW1wb3J0ICdzcmMvc3R5bGVzL3RoZW1lLnNjc3MnO1xcblxcbiRwYWdlLWNvbnRlbnQtd2lkdGg6IDEyODBweDtcXG4kaGVhZGVyLWhlaWdodDogOTBweDtcXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZS1jb250ZW50LWJhY2tncm91bmQ7XFxuICBib3JkZXI6IGJvcmRlcigkbGF5b3V0LWRpdmlkZXItY29sb3IpO1xcbiAgbWF4LXdpZHRoOiAkcGFnZS1jb250ZW50LXdpZHRoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICAmLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgJi1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAkaGVhZGVyLWhlaWdodCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IHNwYWNpbmcoNCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgJi10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogZm9udC1zaXplKHBhZ2V0aXRsZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcblxcbiAgICAmLWNvbnRhaW5lciB7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBib3JkZXItYm90dG9tOiBib3JkZXIoJGxheW91dC1kaXZpZGVyLWNvbG9yKTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xcbiAgICAgIHBhZGRpbmc6IDAgc3BhY2luZyg0KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRibGFjazogIzAwMDtcXG4kZ3JlZW46ICMwMDgwMDA7XFxuJGdyZXk6ICM5OTk7XFxuJGdyZXktZGFyazogIzMzMztcXG4kcmVkOiAjZjAwO1xcbiR3aGl0ZTogI2ZmZjtcXG4keWVsbG93OiAjZmVkNTAwO1xcblxcbiRjc3MtcmVzZXQtZ3JleTogJGdyZXk7XFxuJGNzcy1yZXNldC1ncmV5LWRhcms6ICRncmV5LWRhcms7XFxuXFxuJHBhZ2UtY29udGVudC1iYWNrZ3JvdW5kOiAkd2hpdGU7XFxuJGxheW91dC1kaXZpZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xKTtcXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ucG9rZW1vbi1jYXJkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wb2tlbW9uLWNhcmQucHJlc3NhYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wb2tlbW9uLWltYWdlIHtcXG4gIHdpZHRoOiAxMjhweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLnBva2Vtb24tbmFtZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ucG9rZW1vbi1mYXZvcml0ZS1idXR0b20ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTZweDtcXG4gIHRvcDogMTZweDtcXG59XFxuLnBva2Vtb24tZmF2b3JpdGUtYnV0dG9tIC5mYXMge1xcbiAgY29sb3I6ICNmZWQ1MDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbkNhcmQvUG9rZW1vbkNhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQVBFO0VBQ0UsbUJBQUE7RUFDQSxzQkNESTtFREVKLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBU0o7QUFQSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQVNOO0FBTEU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFPSjtBQUpFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBTUo7QUFIRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFLSjtBQUhJO0VBQ0UsY0MvQkc7QURvQ1RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvY29sb3Iuc2Nzcyc7XFxuQGltcG9ydCAnc3JjL3N0eWxlcy90aGVtZS5zY3NzJztcXG5cXG4ucG9rZW1vbiB7XFxuICAmLWNhcmQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZS1jb250ZW50LWJhY2tncm91bmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDIpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICYucHJlc3NhYmxlOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHBhZ2UtY29udGVudC1iYWNrZ3JvdW5kLCA1JSk7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICB9XFxuXFxuICAmLWltYWdlIHtcXG4gICAgd2lkdGg6IDEyOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiBzcGFjaW5nKCk7XFxuICB9XFxuXFxuICAmLW5hbWUge1xcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcblxcbiAgJi1mYXZvcml0ZS1idXR0b20ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogc3BhY2luZygyKTtcXG4gICAgdG9wOiBzcGFjaW5nKDIpO1xcblxcbiAgICAuZmFzIHtcXG4gICAgICBjb2xvcjogJHllbGxvdztcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRibGFjazogIzAwMDtcXG4kZ3JlZW46ICMwMDgwMDA7XFxuJGdyZXk6ICM5OTk7XFxuJGdyZXktZGFyazogIzMzMztcXG4kcmVkOiAjZjAwO1xcbiR3aGl0ZTogI2ZmZjtcXG4keWVsbG93OiAjZmVkNTAwO1xcblxcbiRjc3MtcmVzZXQtZ3JleTogJGdyZXk7XFxuJGNzcy1yZXNldC1ncmV5LWRhcms6ICRncmV5LWRhcms7XFxuXFxuJHBhZ2UtY29udGVudC1iYWNrZ3JvdW5kOiAkd2hpdGU7XFxuJGxheW91dC1kaXZpZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xKTtcXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ucG9rZW1vbi1wYW5lbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucG9rZW1vbi1wYW5lbC1kYXRhLWNvbnRhaW5lciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG4ucG9rZW1vbi1wYW5lbC1kYXRhLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucG9rZW1vbi1wYW5lbC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4ucG9rZW1vbi1wYW5lbC1pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLnBva2Vtb24tcGFuZWwtcm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLnBva2Vtb24tcGFuZWwtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnBva2Vtb24tcGFuZWwtc3RhdHMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBva2Vtb24tcGFuZWwtc3RhdHMgLnN0YXQtcm93IHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZGlzcGxheTogdGFibGUtcm93O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5wb2tlbW9uLXBhbmVsLXN0YXRzIC5zdGF0LWVsZW1lbnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogdGFibGUtY29sdW1uO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4ucG9rZW1vbi1wYW5lbC1zdGF0cyAuc3RhdC1lbGVtZW50LmNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vblBhbmVsL1Bva2Vtb25QYW5lbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQVJBO0VBQ0Usb0NBQUE7RUFDQSxhQUFBO0FBVUY7QUFSRTtFQUNFLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBVUo7QUFQRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFTSjtBQU5FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUUo7QUFMRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBT0o7QUFKRTtFQUNFLGtCQUFBO0FBTUo7QUFIRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFLSjtBQUZFO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUlKO0FBRkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSU47QUFGSTtFQUNFLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFJTjtBQUZNO0VBQ0Usa0JBQUE7QUFJUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3JjL3N0eWxlcy9jb2xvci5zY3NzJztcXG5AaW1wb3J0ICdzcmMvc3R5bGVzL3RoZW1lLnNjc3MnO1xcblxcbi5wb2tlbW9uLXBhbmVsIHtcXG4gIGJvcmRlcjogYm9yZGVyKCRsYXlvdXQtZGl2aWRlci1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgJi1kYXRhLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1sZWZ0OiBib3JkZXIoJGxheW91dC1kaXZpZGVyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMyk7XFxuICB9XFxuXFxuICAmLWRhdGEtY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiBmb250LXNpemUobm9ybWFsKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIH1cXG5cXG4gICYtaW1hZ2Uge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgJi1yb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiBzcGFjaW5nKCk7XFxuICB9XFxuXFxuICAmLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gICYtc3RhdHMge1xcbiAgICBib3JkZXI6IGJvcmRlcigkbGF5b3V0LWRpdmlkZXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIC5zdGF0LXJvdyB7XFxuICAgICAgY2xlYXI6IGJvdGg7XFxuICAgICAgZGlzcGxheTogdGFibGUtcm93O1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxuICAgIC5zdGF0LWVsZW1lbnQge1xcbiAgICAgIGJvcmRlcjogYm9yZGVyKCRsYXlvdXQtZGl2aWRlci1jb2xvcik7XFxuICAgICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIHBhZGRpbmc6IHNwYWNpbmcoKTtcXG4gICAgICB3aWR0aDogNTAlO1xcblxcbiAgICAgICYuY2VudGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLnBva2Vtb24tdHlwZSB7XFxuICBiYWNrZ3JvdW5kOiAjNmFhNTk2O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB3aWR0aDogNjZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uVHlwZS9Qb2tlbW9uVHlwZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQVJBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBVUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvY29sb3Iuc2Nzcyc7XFxuQGltcG9ydCAnc3JjL3N0eWxlcy90aGVtZS5zY3NzJztcXG5cXG4ucG9rZW1vbi10eXBlIHtcXG4gIGJhY2tncm91bmQ6ICM2YWE1OTY7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgYm9yZGVyOiBib3JkZXIocmdiYSgwLCAwLCAwLCAwLjIpKTtcXG4gIGJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMoc20pO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBmb250LXNpemUobGFiZWwpO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBtYXJnaW4tcmlnaHQ6IHNwYWNpbmcoKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2IoMCAwIDAgLyA3MCUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHdpZHRoOiA2NnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbio6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5zcGFuLFxcbmxhYmVsLFxcbmlucHV0LFxcbmEsXFxuYnV0dG9uLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSxcXG5idXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmZvY3VzLCBhOmFjdGl2ZSB7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzk5OTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5idXR0b24sIC5idXR0b24tdGVydGlhcnksIC5idXR0b24tc2Vjb25kYXJ5LCAuYnV0dG9uLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbi10ZXJ0aWFyeTpob3ZlciwgLmJ1dHRvbi1zZWNvbmRhcnk6aG92ZXIsIC5idXR0b24tcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbn1cXG4uYnV0dG9uOmZvY3VzLCAuYnV0dG9uLXRlcnRpYXJ5OmZvY3VzLCAuYnV0dG9uLXNlY29uZGFyeTpmb2N1cywgLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggI2IzYjNiMztcXG59XFxuLmJ1dHRvbjpkaXNhYmxlZCwgLmJ1dHRvbi10ZXJ0aWFyeTpkaXNhYmxlZCwgLmJ1dHRvbi1zZWNvbmRhcnk6ZGlzYWJsZWQsIC5idXR0b24tcHJpbWFyeTpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmZvcm0tZmllbGQge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRyb2wge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRyb2wtZXJyb3Ige1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwMDtcXG59XFxuLmZvcm0tZmllbGQtZXJyb3Ige1xcbiAgY29sb3I6ICNmMDA7XFxufVxcbi5mb3JtLWZpZWxkLWxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmZvcm0tZmllbGQtbWVzc2FnZSB7XFxuICBib3R0b206IDBweDtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uZm9ybS1maWVsZC1jb250YWluZXItaWNvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRhaW5lci1pY29uIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDhweDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uZm9ybS1maWVsZC1jb250YWluZXItaWNvbiBpbnB1dCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbn1cXG4uZm9ybS1maWVsZC1jb250YWluZXItaWNvbiAuYWN0aW9uLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9yLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb3JtLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKOztBREdBOzs7Ozs7Ozs7Ozs7OztFQWNFLFdFdEJVO0VGdUJWLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7Ozs7RUFJRSxTQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDQUY7QURFRTtFQUVFLFdFcEVRO0VGcUVSLHFCQUFBO0FDREo7O0FES0E7O0VBRUUscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0VsRks7RUZtRkwsVUFBQTtBQ0ZGOztBREtBOztFQUVFLG1CQUFBO0FDRkY7O0FFcEZBO0VBQ0UsOEJBQUE7QUZ1RkY7O0FFdkNBO0VBQ0U7SUFDRSx1QkFBQTtFRjBDRjtFRXhDQTtJQUNFLHlCQUFBO0VGMENGO0FBQ0Y7QUc5RkE7RUFDRSxzQkZMVTtFRU1WLFdGSk07RUVLTixlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FIZ0dGO0FHOUZFO0VBQ0UseUJBQUE7QUhnR0o7QUc5RkU7RUFDRSx5QkFBQTtFQUNBLG1DQUFBO0FIZ0dKO0FHOUZFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUhnR0o7O0FJdkhFO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FKMEhKO0FJeEhJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUowSE47QUl4SE07RUFDRSxzQkFBQTtBSjBIUjtBSXRISTtFQUNFLFdIZkE7QUR1SU47QUlySEk7RUFDRSxrQkFBQTtBSnVITjtBSXBISTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBSnNITjtBSW5ISTtFQUNFLGtCQUFBO0FKcUhOO0FJbkhNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FKcUhSO0FJbEhNO0VBQ0UsbUJBQUE7QUpvSFI7QUlqSE07RUFDRSxlQUFBO0FKbUhSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gICY6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbnNwYW4sXFxubGFiZWwsXFxuaW5wdXQsXFxuYSxcXG5idXR0b24sXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiAkY3NzLXJlc2V0LWdyZXktZGFyaztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSxcXG5idXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgJjpmb2N1cyxcXG4gICY6YWN0aXZlIHtcXG4gICAgY29sb3I6ICRjc3MtcmVzZXQtZ3JleS1kYXJrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICRjc3MtcmVzZXQtZ3JleTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblwiLFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4qOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuc3BhbixcXG5sYWJlbCxcXG5pbnB1dCxcXG5hLFxcbmJ1dHRvbixcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnNlbGVjdCB7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEsXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5hIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuYTpmb2N1cywgYTphY3RpdmUge1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM5OTk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uYnV0dG9uLCAuYnV0dG9uLXRlcnRpYXJ5LCAuYnV0dG9uLXNlY29uZGFyeSwgLmJ1dHRvbi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5idXR0b246aG92ZXIsIC5idXR0b24tdGVydGlhcnk6aG92ZXIsIC5idXR0b24tc2Vjb25kYXJ5OmhvdmVyLCAuYnV0dG9uLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG59XFxuLmJ1dHRvbjpmb2N1cywgLmJ1dHRvbi10ZXJ0aWFyeTpmb2N1cywgLmJ1dHRvbi1zZWNvbmRhcnk6Zm9jdXMsIC5idXR0b24tcHJpbWFyeTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICNiM2IzYjM7XFxufVxcbi5idXR0b246ZGlzYWJsZWQsIC5idXR0b24tdGVydGlhcnk6ZGlzYWJsZWQsIC5idXR0b24tc2Vjb25kYXJ5OmRpc2FibGVkLCAuYnV0dG9uLXByaW1hcnk6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYjNiMztcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi5mb3JtLWZpZWxkIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZm9ybS1maWVsZC1jb250cm9sIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG4uZm9ybS1maWVsZC1jb250cm9sLWVycm9yIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDA7XFxufVxcbi5mb3JtLWZpZWxkLWVycm9yIHtcXG4gIGNvbG9yOiAjZjAwO1xcbn1cXG4uZm9ybS1maWVsZC1sYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbi5mb3JtLWZpZWxkLW1lc3NhZ2Uge1xcbiAgYm90dG9tOiAwcHg7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmZvcm0tZmllbGQtY29udGFpbmVyLWljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZm9ybS1maWVsZC1jb250YWluZXItaWNvbiBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA4cHg7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmZvcm0tZmllbGQtY29udGFpbmVyLWljb24gaW5wdXQge1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuLmZvcm0tZmllbGQtY29udGFpbmVyLWljb24gLmFjdGlvbi1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsXCIkYmxhY2s6ICMwMDA7XFxuJGdyZWVuOiAjMDA4MDAwO1xcbiRncmV5OiAjOTk5O1xcbiRncmV5LWRhcms6ICMzMzM7XFxuJHJlZDogI2YwMDtcXG4kd2hpdGU6ICNmZmY7XFxuJHllbGxvdzogI2ZlZDUwMDtcXG5cXG4kY3NzLXJlc2V0LWdyZXk6ICRncmV5O1xcbiRjc3MtcmVzZXQtZ3JleS1kYXJrOiAkZ3JleS1kYXJrO1xcblxcbiRwYWdlLWNvbnRlbnQtYmFja2dyb3VuZDogJHdoaXRlO1xcbiRsYXlvdXQtZGl2aWRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMSk7XFxuXFxuXCIsXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiJHRpbnQtcGVyY2VudGFnZTogNSU7XFxuJHRpbnQtcGVyY2VudGFnZS1kaXNhYmxlZDogNTAlO1xcblxcbkBmdW5jdGlvbiBidXR0b24tc2hhZG93KCRjb2xvcjogJHdoaXRlKSB7XFxuICBAcmV0dXJuIDBweCAwcHggMHB4IDJweCBsaWdodGVuKCRjb2xvciwgNTAlKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrO1xcbiAgY29sb3I6ICR3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IHNwYWNpbmcoMik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZ3JleS1kYXJrLCAkdGludC1wZXJjZW50YWdlKTtcXG4gIH1cXG4gICY6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGdyZXktZGFyaywgJHRpbnQtcGVyY2VudGFnZSk7XFxuICAgIGJveC1zaGFkb3c6IGJ1dHRvbi1zaGFkb3coJGdyZXktZGFyayk7XFxuICB9XFxuICAmOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZ3JleS1kYXJrLCAkdGludC1wZXJjZW50YWdlLWRpc2FibGVkKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uLXByaW1hcnkge1xcbiAgQGV4dGVuZCAuYnV0dG9uO1xcbn1cXG5cXG4uYnV0dG9uLXNlY29uZGFyeSB7XFxuICBAZXh0ZW5kIC5idXR0b247XFxufVxcblxcbi5idXR0b24tdGVydGlhcnkge1xcbiAgQGV4dGVuZCAuYnV0dG9uO1xcbn1cXG5cIixcIi5mb3JtIHtcXG4gICYtZmllbGQge1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogc3BhY2luZygyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAmLWNvbnRyb2wge1xcbiAgICAgIGJvcmRlcjogYm9yZGVyKCk7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogc3BhY2luZygyKTtcXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKCk7XFxuXFxuICAgICAgJi1lcnJvciB7XFxuICAgICAgICBib3JkZXI6IGJvcmRlcigkcmVkKTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi1lcnJvciB7XFxuICAgICAgY29sb3I6ICRyZWQ7XFxuICAgIH1cXG5cXG4gICAgJi1sYWJlbCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogc3BhY2luZygpO1xcbiAgICB9XFxuXFxuICAgICYtbWVzc2FnZSB7XFxuICAgICAgYm90dG9tOiAwcHg7XFxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAmLWNvbnRhaW5lci1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogc3BhY2luZygpO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgfVxcblxcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHNwYWNpbmcoNCk7XFxuICAgICAgfVxcblxcbiAgICAgIC5hY3Rpb24taWNvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5sb2dpbi1mb3JtIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5sb2dpbi1mb3JtLWZpZWxkcyB7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvTG9naW4vTG9naW5Gb3JtL0xvZ2luRm9ybS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQUhBO0VBTEUsb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFXRjtBQUxFO0VBUkEsb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFRRSxtQkFBQTtBQVNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRiYXNlLXVuaXQ6IDhweDtcXG4kYmFzZS1mb250LXNpemU6IDFyZW07XFxuJG5hdmJhci1oZWlnaHQ6IDcwcHg7XFxuXFxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXIoJGNvbG9yOiAkZ3JleSkge1xcbiAgQHJldHVybiAxcHggc29saWQgJGNvbG9yO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyLXJhZGl1cygkc2l6ZTogYnMpIHtcXG4gICRyYWRpdXM6ICRiYXNlLXVuaXQ7XFxuICBAaWYgJHNpemUgPT0gYnMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGcge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc20ge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJHJhZGl1cztcXG59XFxuXFxuQGZ1bmN0aW9uIHNwYWNpbmcoJHNwYWNlOiAxKSB7XFxuICAkYmFzZS1zcGFjZTogJGJhc2UtdW5pdDtcXG4gIEByZXR1cm4gJGJhc2Utc3BhY2UgKiAkc3BhY2U7XFxufVxcblxcbkBmdW5jdGlvbiBmb250LXNpemUoJHNpemU6IG5vcm1hbCkge1xcbiAgJGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcbiAgQGlmICRzaXplID09IG5vcm1hbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBoZWFkZXIge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc3VidGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMS4yO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBwYWdldGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMi41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYWJlbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAwLjc1O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRmb250LXNpemU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdzcmMvc3R5bGVzL3RoZW1lLnNjc3MnO1xcblxcbkBtaXhpbiBmb3JtLWxheW91dCgpIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIEBpbmNsdWRlIGZvcm0tbGF5b3V0O1xcblxcbiAgJi1maWVsZHMge1xcbiAgICBAaW5jbHVkZSBmb3JtLWxheW91dDtcXG4gICAgbWFyZ2luLWJvdHRvbTogc3BhY2luZygyKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLmxvZ2luLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuLmxvZ2luLWxvZ28ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDE2cHggYXV0byA0MHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9Mb2dpbi9Mb2dpblBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQVBFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVNKO0FBTkU7RUFDRSxzQkNSSTtFRFNKLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFRSjtBQUxFO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQU9KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRiYXNlLXVuaXQ6IDhweDtcXG4kYmFzZS1mb250LXNpemU6IDFyZW07XFxuJG5hdmJhci1oZWlnaHQ6IDcwcHg7XFxuXFxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXIoJGNvbG9yOiAkZ3JleSkge1xcbiAgQHJldHVybiAxcHggc29saWQgJGNvbG9yO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyLXJhZGl1cygkc2l6ZTogYnMpIHtcXG4gICRyYWRpdXM6ICRiYXNlLXVuaXQ7XFxuICBAaWYgJHNpemUgPT0gYnMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGcge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc20ge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJHJhZGl1cztcXG59XFxuXFxuQGZ1bmN0aW9uIHNwYWNpbmcoJHNwYWNlOiAxKSB7XFxuICAkYmFzZS1zcGFjZTogJGJhc2UtdW5pdDtcXG4gIEByZXR1cm4gJGJhc2Utc3BhY2UgKiAkc3BhY2U7XFxufVxcblxcbkBmdW5jdGlvbiBmb250LXNpemUoJHNpemU6IG5vcm1hbCkge1xcbiAgJGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcbiAgQGlmICRzaXplID09IG5vcm1hbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBoZWFkZXIge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc3VidGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMS4yO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBwYWdldGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMi41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYWJlbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAwLjc1O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRmb250LXNpemU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdzcmMvc3R5bGVzL2NvbG9yLnNjc3MnO1xcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvdGhlbWUuc2Nzcyc7XFxuXFxuLmxvZ2luIHtcXG4gICYtY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmLWZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2UtY29udGVudC1iYWNrZ3JvdW5kO1xcbiAgICBib3JkZXI6IGJvcmRlcigkbGF5b3V0LWRpdmlkZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDMpO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICB9XFxuXFxuICAmLWxvZ28ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBzcGFjaW5nKDIpIGF1dG8gc3BhY2luZyg1KTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgfVxcbn1cXG5cIixcIiRibGFjazogIzAwMDtcXG4kZ3JlZW46ICMwMDgwMDA7XFxuJGdyZXk6ICM5OTk7XFxuJGdyZXktZGFyazogIzMzMztcXG4kcmVkOiAjZjAwO1xcbiR3aGl0ZTogI2ZmZjtcXG4keWVsbG93OiAjZmVkNTAwO1xcblxcbiRjc3MtcmVzZXQtZ3JleTogJGdyZXk7XFxuJGNzcy1yZXNldC1ncmV5LWRhcms6ICRncmV5LWRhcms7XFxuXFxuJHBhZ2UtY29udGVudC1iYWNrZ3JvdW5kOiAkd2hpdGU7XFxuJGxheW91dC1kaXZpZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xKTtcXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ucG9rZW1vbi1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcXG4gIGdhcDogMTZweDtcXG59XFxuLnBva2Vtb24tcGFnaW5hdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvUG9rZWRleC9Qb2tlZGV4UGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQVJFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsU0FBQTtBQVVKO0FBUEU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRiYXNlLXVuaXQ6IDhweDtcXG4kYmFzZS1mb250LXNpemU6IDFyZW07XFxuJG5hdmJhci1oZWlnaHQ6IDcwcHg7XFxuXFxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXIoJGNvbG9yOiAkZ3JleSkge1xcbiAgQHJldHVybiAxcHggc29saWQgJGNvbG9yO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyLXJhZGl1cygkc2l6ZTogYnMpIHtcXG4gICRyYWRpdXM6ICRiYXNlLXVuaXQ7XFxuICBAaWYgJHNpemUgPT0gYnMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGcge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc20ge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJHJhZGl1cztcXG59XFxuXFxuQGZ1bmN0aW9uIHNwYWNpbmcoJHNwYWNlOiAxKSB7XFxuICAkYmFzZS1zcGFjZTogJGJhc2UtdW5pdDtcXG4gIEByZXR1cm4gJGJhc2Utc3BhY2UgKiAkc3BhY2U7XFxufVxcblxcbkBmdW5jdGlvbiBmb250LXNpemUoJHNpemU6IG5vcm1hbCkge1xcbiAgJGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcbiAgQGlmICRzaXplID09IG5vcm1hbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBoZWFkZXIge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc3VidGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMS4yO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBwYWdldGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMi41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYWJlbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAwLjc1O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRmb250LXNpemU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdzcmMvc3R5bGVzL3RoZW1lLnNjc3MnO1xcblxcbi5wb2tlbW9uIHtcXG4gICYtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xcbiAgICBnYXA6IHNwYWNpbmcoMik7XFxuICB9XFxuXFxuICAmLXBhZ2luYXRvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBva2Vtb24tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9Qb2tlbW9uL1Bva2Vtb25QYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb2tlbW9uLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9BcHAuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL0FwcC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9TZWFyY2hJbnB1dC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vU2VhcmNoSW5wdXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vSW1hZ2VMb2FkaW5nLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9JbWFnZUxvYWRpbmcuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vTG9hZGluZ092ZXJsYXkuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL0xvYWRpbmdPdmVybGF5LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL05hdmJhci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vTmF2YmFyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1BhZ2VDb250YWluZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1BhZ2VDb250YWluZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUG9rZW1vbkNhcmQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1Bva2Vtb25DYXJkLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1Bva2Vtb25QYW5lbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUG9rZW1vblBhbmVsLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1Bva2Vtb25UeXBlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Qb2tlbW9uVHlwZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vTG9naW5Gb3JtLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Mb2dpbkZvcm0uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vTG9naW5QYWdlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Mb2dpblBhZ2Uuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUG9rZWRleFBhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1Bva2VkZXhQYWdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1Bva2Vtb25QYWdlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Qb2tlbW9uUGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIE5hdmlnYXRlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciwgTG9hZGluZ1Byb3ZpZGVyLCBQb2tlbW9uUHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHsgRGV0YWlsc1BhZ2UsIExvZ2luUGFnZSwgUG9rZWRleFBhZ2UsIFBva2Vtb25QYWdlIH0gZnJvbSAnLi9wYWdlcyc7XG5pbXBvcnQgeyBQcm90ZWN0ZWRSb3V0ZSwgUHVibGljUm91dGUsIFJPVVRFUyB9IGZyb20gJy4vcm91dGVzJztcbmltcG9ydCB7IEFwcE5hdmJhciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCAnLi9BcHAuc2Nzcyc7XG5cbmNvbnN0IEFwcDogRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxMb2FkaW5nUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICAgIDxQcm90ZWN0ZWRSb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPERldGFpbHNQYWdlIC8+XG4gICAgICAgICAgICAgICAgICA8L1Byb3RlY3RlZFJvdXRlPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoPXtST1VURVMuZGV0YWlsc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICAgICAgICA8UG9rZW1vblByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8UHJvdGVjdGVkUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Byb3RlY3RlZFJvdXRlPlxuICAgICAgICAgICAgICAgICAgPC9Qb2tlbW9uUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGg9e1JPVVRFUy5ob21lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxQb2tlZGV4UGFnZSAvPn0gcGF0aD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxQb2tlbW9uUGFnZSAvPn0gcGF0aD1cIjpwb2tlbW9uSURcIiAvPlxuICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICAgIDxQdWJsaWNSb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPExvZ2luUGFnZSAvPlxuICAgICAgICAgICAgICAgICAgPC9QdWJsaWNSb3V0ZT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aD17Uk9VVEVTLmxvZ2lufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGUgZWxlbWVudD17PE5hdmlnYXRlIHRvPXtST1VURVMuaG9tZX0gLz59IHBhdGg9XCIqXCIgLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgPEFwcE5hdmJhciAvPlxuICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTG9hZGluZ1Byb3ZpZGVyPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBCdXR0b25Mb2FkaW5nOiBGQzxSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4gJiB7IHRleHQ6IHN0cmluZzsgaXNMb2FkaW5nOiBib29sZWFuIH0+ID0gKHtcbiAgaXNMb2FkaW5nLFxuICB0ZXh0LFxuICAuLi5idXR0b25Qcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiBkaXNhYmxlZD17aXNMb2FkaW5nfSB0eXBlPVwiYnV0dG9uXCIgey4uLmJ1dHRvblByb3BzfT5cbiAgICAgIHt0ZXh0fVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uTG9hZGluZztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uTG9hZGluZyB9IGZyb20gJy4vQnV0dG9uTG9hZGluZyc7XG4iLCJpbXBvcnQgeyBGaWVsZEF0dHJpYnV0ZXMgfSBmcm9tICdmb3JtaWsnO1xuXG5leHBvcnQgdHlwZSBDdXN0b21JbnB1dCA9IHtcbiAgZXJyb3I/OiBib29sZWFuO1xuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0b3VjaGVkPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIElucHV0RmllbGRQcm9wcyA9IEZpZWxkQXR0cmlidXRlczxDdXN0b21JbnB1dD47XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IElucHV0RmllbGRQcm9wcyB9IGZyb20gJy4vSW5wdXQucHJvcHMnO1xuXG5jb25zdCBJbnB1dEZpZWxkOiBGQzxJbnB1dEZpZWxkUHJvcHM+ID0gKHsgZXJyb3IsIGVycm9yTWVzc2FnZSwgbGFiZWwsIHRvdWNoZWQsIC4uLmZpZWxkUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xzeCgnZm9ybS1maWVsZC1sYWJlbCcpfSBodG1sRm9yPXtmaWVsZFByb3BzLm5hbWV9PlxuICAgICAgICAgIHtsYWJlbH0gPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1maWVsZC1lcnJvclwiPio8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICApfVxuICAgICAgPEZpZWxkIGNsYXNzTmFtZT17Y2xzeCgnZm9ybS1maWVsZC1jb250cm9sJywgeyAnZm9ybS1maWVsZC1jb250cm9sLWVycm9yJzogdG91Y2hlZCAmJiBlcnJvciB9KX0gey4uLmZpZWxkUHJvcHN9IC8+XG4gICAgICB7dG91Y2hlZCAmJiBlcnJvck1lc3NhZ2UgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goJ2Zvcm0tZmllbGQtbWVzc2FnZScsIHsgJ2Zvcm0tZmllbGQtZXJyb3InOiBlcnJvciB9KX0+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXRGaWVsZCB9IGZyb20gJy4vSW5wdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9JbnB1dC5wcm9wcyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dEZpZWxkLCBJbnB1dEZpZWxkUHJvcHMgfSBmcm9tICdzcmMvY29tcG9uZW50cy9GaWVsZHMnO1xuXG5jb25zdCBQYXNzd29yZEZpZWxkOiBGQzxJbnB1dEZpZWxkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8SW5wdXRGaWVsZCB7Li4ucHJvcHN9IHR5cGU9XCJwYXNzd29yZFwiIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRGaWVsZDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUGFzc3dvcmRGaWVsZCB9IGZyb20gJy4vUGFzc3dvcmQnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBJbnB1dEhUTUxBdHRyaWJ1dGVzLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL1NlYXJjaElucHV0LnNjc3MnO1xuXG5jb25zdCBTZWFyY2hJbnB1dDogRkM8SW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiAmIHsgb25TZWFyY2g/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCB9PiA9ICh7XG4gIG9uU2VhcmNoID0gKCkgPT4ge30sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSBvblNlYXJjaChpbnB1dFZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZC1jb250YWluZXItaWNvbiBzZWFyY2gtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoIGFjdGlvbi1pY29uXCIgdGl0bGU9XCJQcmVzcyBmb3Igc2VhcmNoXCIgb25DbGljaz17KCkgPT4gb25TZWFyY2goaW5wdXRWYWx1ZSl9IC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1maWVsZC1jb250cm9sIHNlYXJjaC1pbnB1dFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaElucHV0IH0gZnJvbSAnLi9TZWFyY2hJbnB1dCc7XG4iLCJleHBvcnQgKiBmcm9tICcuL0lucHV0JztcbmV4cG9ydCAqIGZyb20gJy4vUGFzc3dvcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9TZWFyY2gnO1xuIiwiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIEltZ0hUTUxBdHRyaWJ1dGVzLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREVGQVVMVF9BU1NFVFMgfSBmcm9tICdzcmMvY29uc3RhbnRzJztcblxuaW1wb3J0ICcuL0ltYWdlTG9hZGluZy5zY3NzJztcblxuY29uc3QgSW1hZ2VMb2FkaW5nOiBGQzxJbWdIVE1MQXR0cmlidXRlczxIVE1MSW1hZ2VFbGVtZW50Pj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2ltZ0xvYWRlZCwgc2V0SW1nTG9hZGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3Qgc3Bpbm5lckNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGltZ1JlZiA9IHVzZVJlZjxIVE1MSW1hZ2VFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVJbWFnZUxvYWRlZCA9ICgpID0+IHtcbiAgICBzZXRJbWdMb2FkZWQodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFpbWdMb2FkZWQgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgaWQ9XCJpbWFnZS1sb2FkaW5nLXNwaW5uZXItY29udGFpbmVyXCJcbiAgICAgICAgICByZWY9e3NwaW5uZXJDb250YWluZXJSZWZ9XG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBzcGlubmVyQ29udGFpbmVyUmVmLmN1cnJlbnQ/LmNsaWVudFdpZHRoIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3Bpbm5lciBpbWFnZS1sb2FkaW5nLXNwaW5uZXJcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goW3Byb3BzLmNsYXNzTmFtZSwgeyAnaW1hZ2UtbG9hZGluZy1oaWRkZW4nOiAhaW1nTG9hZGVkIH1dKX1cbiAgICAgICAgcmVmPXtpbWdSZWZ9XG4gICAgICAgIG9uRXJyb3I9eygpID0+IHtcbiAgICAgICAgICBpZiAoaW1nUmVmLmN1cnJlbnQpIGltZ1JlZi5jdXJyZW50LnNyYyA9IERFRkFVTFRfQVNTRVRTLmRlZmF1bHRJbWFnZVBhdGg7XG4gICAgICAgIH19XG4gICAgICAgIG9uTG9hZD17aGFuZGxlSW1hZ2VMb2FkZWR9XG4gICAgICA+PC9pbWc+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxvYWRpbmc7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlTG9hZGluZyB9IGZyb20gJy4vSW1hZ2VMb2FkaW5nJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERFRkFVTFRfQVNTRVRTIH0gZnJvbSAnc3JjL2NvbnN0YW50cyc7XG5cbmltcG9ydCAnLi9Mb2FkaW5nT3ZlcmxheS5zY3NzJztcblxuY29uc3QgTG9hZGluZ092ZXJsYXk6IEZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWxvYWRpbmdcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXBwLWxvYWRlclwiIHNyYz17REVGQVVMVF9BU1NFVFMuZGVmYXVsdEltYWdlUGF0aH0+PC9pbWc+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nT3ZlcmxheTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ092ZXJsYXkgfSBmcm9tICcuL0xvYWRpbmdPdmVybGF5JztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdzcmMvY29udGV4dCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICdzcmMvcm91dGVzJztcblxuaW1wb3J0ICcuL05hdmJhci5zY3NzJztcblxuY29uc3QgQXBwTmF2YmFyOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VBdXRoKCk7XG4gIHJldHVybiBpc0xvZ2dlZEluID8gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYXBwLW5hdmJhclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImFwcC1uYXZiYXItbGlzdFwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXBwLW5hdmJhci1saW5rIGhvbWVcIj5cbiAgICAgICAgICA8TmF2TGluayB0bz17Uk9VVEVTLmhvbWV9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFwcC1uYXZiYXItbGluayBkZXRhaWxzXCI+XG4gICAgICAgICAgPE5hdkxpbmsgdG89e1JPVVRFUy5kZXRhaWxzfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hZGRyZXNzLWNhcmRcIiAvPlxuICAgICAgICAgICAgRGV0YWlsc1xuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwTmF2YmFyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBOYXZiYXIgfSBmcm9tICcuL05hdmJhcic7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL1BhZ2VDb250YWluZXIuc2Nzcyc7XG5cbmNvbnN0IFBhZ2VDb250YWluZXI6IEZDPHsgdGl0bGU/OiBzdHJpbmc7IHJlbmRlckl0ZW1IZWFkZXI/OiAoKSA9PiBSZWFjdEVsZW1lbnQgfT4gPSAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG4gIHJlbmRlckl0ZW1IZWFkZXIgPSAoKSA9PiBudWxsLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICB7cmVuZGVySXRlbUhlYWRlcigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiIHsuLi5wcm9wc30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRhaW5lcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZUNvbnRhaW5lciB9IGZyb20gJy4vUGFnZUNvbnRhaW5lcic7XG4iLCJpbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnc3JjL21vZGVscyc7XG5cbmV4cG9ydCB0eXBlIFBva2Vtb25DYXJkUHJvcHMgPSB7XG4gIHBva2Vtb246IFBva2Vtb247XG4gIHByZXNzYWJsZT86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiAocG9rZW1vbjogUG9rZW1vbikgPT4gdm9pZDtcbiAgb25TZWxlY3RBc0Zhdm9yaXRlPzogKHBva2Vtb24/OiBQb2tlbW9uKSA9PiB2b2lkO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgSW1hZ2VMb2FkaW5nIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgUG9rZW1vbkNhcmRQcm9wcyB9IGZyb20gJy4vUG9rZW1vbkNhcmQucHJvcHMnO1xuXG5pbXBvcnQgJy4vUG9rZW1vbkNhcmQuc2Nzcyc7XG5cbmNvbnN0IFBva2Vtb25DYXJkOiBGQzxQb2tlbW9uQ2FyZFByb3BzPiA9ICh7XG4gIHBva2Vtb24sXG4gIHByZXNzYWJsZSxcbiAgb25DbGljayA9IChQb2tlbW9uKSA9PiB7fSxcbiAgb25TZWxlY3RBc0Zhdm9yaXRlID0gKCkgPT4ge30sXG59KSA9PiB7XG4gIGNvbnN0IG9uU2VsZWN0QXNGYXZvcml0ZUhhbmRsZXIgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25TZWxlY3RBc0Zhdm9yaXRlKHBva2Vtb24pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goeyAncG9rZW1vbi1jYXJkJzogdHJ1ZSwgcHJlc3NhYmxlIH0pfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHBva2Vtb24pfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9rZW1vbi1mYXZvcml0ZS1idXR0b21cIiB0aXRsZT1cIlNlbGVjdCBhcyBmYXZvcml0ZVwiIG9uQ2xpY2s9e29uU2VsZWN0QXNGYXZvcml0ZUhhbmRsZXJ9PlxuICAgICAgICA8aSBjbGFzc05hbWU9e2Nsc3goeyAnZmFyIGZhLXN0YXInOiAhcG9rZW1vbi5mYXZvcml0ZSwgJ2ZhcyBmYS1zdGFyJzogcG9rZW1vbi5mYXZvcml0ZSB9KX0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPEltYWdlTG9hZGluZyBhbHQ9e3Bva2Vtb24ubmFtZX0gY2xhc3NOYW1lPVwicG9rZW1vbi1pbWFnZVwiIHNyYz17cG9rZW1vbi5pbWFnZX0gLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBva2Vtb24tbmFtZVwiPlxuICAgICAgICAje3Bva2Vtb24uaWR9IHtwb2tlbW9uLm5hbWV9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uQ2FyZDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUG9rZW1vbkNhcmQgfSBmcm9tICcuL1Bva2Vtb25DYXJkJztcbmV4cG9ydCAqIGZyb20gJy4vUG9rZW1vbkNhcmQucHJvcHMnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW1hZ2VMb2FkaW5nLCBQb2tlbW9uVHlwZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzJztcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICdzcmMvbW9kZWxzJztcblxuaW1wb3J0ICcuL1Bva2Vtb25QYW5lbC5zY3NzJztcblxuY29uc3QgUG9rZW1vblBhbmVsOiBGQzx7IHBva2Vtb246IFBva2Vtb24gfT4gPSAoeyBwb2tlbW9uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi1wYW5lbC1kYXRhLWNvbnRhaW5lclwiPlxuICAgICAgICA8SW1hZ2VMb2FkaW5nIGFsdD17cG9rZW1vbi5uYW1lfSBjbGFzc05hbWU9XCJwb2tlbW9uLXBhbmVsLWltYWdlXCIgc3JjPXtwb2tlbW9uLmltYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWwtZGF0YS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXBhbmVsLWRhdGEtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi1wYW5lbC1yb3dcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgI3twb2tlbW9uLmlkfSAtIHtwb2tlbW9uLm5hbWV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXBhbmVsLXJvd1wiPlxuICAgICAgICAgICAge3Bva2Vtb24udHlwZXM/Lm1hcCgoeyBuYW1lLCBzbG90IH0pID0+IChcbiAgICAgICAgICAgICAgPFBva2Vtb25UeXBlIGtleT17c2xvdH0gdHlwZT17bmFtZX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi1wYW5lbC1yb3dcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWwtZGVzY3JpcHRpb25cIj57cG9rZW1vbi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXBhbmVsLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXBhbmVsLXN0YXRzXCI+XG4gICAgICAgICAgICAgIHtwb2tlbW9uLnN0YXRzPy5tYXAoKHsgYmFzZSwgbmFtZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0LXJvd1wiIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtZWxlbWVudFwiPntuYW1lLnRvVXBwZXJDYXNlKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtZWxlbWVudCBjZW50ZXJcIj57YmFzZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25QYW5lbDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUG9rZW1vblBhbmVsIH0gZnJvbSAnLi9Qb2tlbW9uUGFuZWwnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUE9LRU1PTl9UWVBFLCBQT0tFTU9OX1RZUEVfQ09MT1IgfSBmcm9tICdzcmMvY29uc3RhbnRzJztcblxuaW1wb3J0ICcuL1Bva2Vtb25UeXBlLnNjc3MnO1xuXG5jb25zdCBQb2tlbW9uVHlwZTogRkM8eyB0eXBlOiBzdHJpbmcgfT4gPSAoeyB0eXBlIH0pID0+IHtcbiAgY29uc3QgcmVzb2x2ZUNsYXNzQnlUeXBlID0gKG5hbWU6IFBPS0VNT05fVFlQRSk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIFBPS0VNT05fVFlQRV9DT0xPUltuYW1lXTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi10eXBlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiByZXNvbHZlQ2xhc3NCeVR5cGUodHlwZSBhcyBQT0tFTU9OX1RZUEUpIH19PlxuICAgICAge3R5cGV9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uVHlwZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUG9rZW1vblR5cGUgfSBmcm9tICcuL1Bva2Vtb25UeXBlJztcbiIsImV4cG9ydCAqIGZyb20gJy4vQnV0dG9ucyc7XG5leHBvcnQgKiBmcm9tICcuL0ZpZWxkcyc7XG5leHBvcnQgKiBmcm9tICcuL0ltYWdlTG9hZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9OYXZiYXInO1xuZXhwb3J0ICogZnJvbSAnLi9QYWdlQ29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vUG9rZW1vbkNhcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uUGFuZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uVHlwZSc7XG4iLCJleHBvcnQgY29uc3QgREVGQVVMVF9BU1NFVFMgPSB7XG4gIGRlZmF1bHRJbWFnZVBhdGg6ICcvZGVmYXVsdF9pbWFnZS5wbmcnLFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZGVmYXVsdEFzc2V0cyc7XG5leHBvcnQgKiBmcm9tICcuL3Bva2Vtb25UeXBlcyc7XG4iLCJleHBvcnQgZW51bSBQT0tFTU9OX1RZUEUge1xuICBCVUcgPSAnYnVnJyxcbiAgREFSSyA9ICdkYXJrJyxcbiAgRFJBR09OID0gJ2RyYWdvbicsXG4gIEVMRUNUUklDID0gJ2VsZWN0cmljJyxcbiAgRkFJUlkgPSAnZmFpcnknLFxuICBGSUdIVElORyA9ICdmaWdodGluZycsXG4gIEZJUkUgPSAnZmlyZScsXG4gIEZMWUlORyA9ICdmbHlpbmcnLFxuICBHSE9TVCA9ICdnaG9zdCcsXG4gIEdSQVNTID0gJ2dyYXNzJyxcbiAgR1JPVU5EID0gJ2dyb3VuZCcsXG4gIElDRSA9ICdpY2UnLFxuICBOT1JNQUwgPSAnbm9ybWFsJyxcbiAgUEhZQ0hJQyA9ICdwc3ljaGljJyxcbiAgUE9JU09OID0gJ3BvaXNvbicsXG4gIFJPQ0sgPSAncm9jaycsXG4gIFNURUVMID0gJ3N0ZWVsJyxcbiAgV0FURVIgPSAnd2F0ZXInLFxufVxuXG5leHBvcnQgY29uc3QgUE9LRU1PTl9UWVBFX0NPTE9SOiB7XG4gIFtrZXkgaW4gUE9LRU1PTl9UWVBFXTogc3RyaW5nO1xufSA9IHtcbiAgW1BPS0VNT05fVFlQRS5CVUddOiAnI2FiMicsXG4gIFtQT0tFTU9OX1RZUEUuREFSS106ICcjNzU0JyxcbiAgW1BPS0VNT05fVFlQRS5EUkFHT05dOiAnIzc2ZScsXG4gIFtQT0tFTU9OX1RZUEUuRUxFQ1RSSUNdOiAnI2ZjMycsXG4gIFtQT0tFTU9OX1RZUEUuRkFJUlldOiAnI2U5ZScsXG4gIFtQT0tFTU9OX1RZUEUuRklHSFRJTkddOiAnI2I1NCcsXG4gIFtQT0tFTU9OX1RZUEUuRklSRV06ICcjZjQyJyxcbiAgW1BPS0VNT05fVFlQRS5GTFlJTkddOiAnIzg5ZicsXG4gIFtQT0tFTU9OX1RZUEUuR0hPU1RdOiAnIzY2YicsXG4gIFtQT0tFTU9OX1RZUEUuR1JBU1NdOiAnIzdjNScsXG4gIFtQT0tFTU9OX1RZUEUuR1JPVU5EXTogJyNkYjUnLFxuICBbUE9LRU1PTl9UWVBFLklDRV06ICcjNmNmJyxcbiAgW1BPS0VNT05fVFlQRS5OT1JNQUxdOiAnI2FhOScsXG4gIFtQT0tFTU9OX1RZUEUuUEhZQ0hJQ106ICcjZjU5JyxcbiAgW1BPS0VNT05fVFlQRS5QT0lTT05dOiAnI2E1OScsXG4gIFtQT0tFTU9OX1RZUEUuUk9DS106ICcjYmE2JyxcbiAgW1BPS0VNT05fVFlQRS5TVEVFTF06ICcjYWFiJyxcbiAgW1BPS0VNT05fVFlQRS5XQVRFUl06ICcjMzlmJyxcbn07XG4iLCJpbXBvcnQgeyBMb2dpbkRhdGEgfSBmcm9tICdzcmMvbW9kZWxzJztcblxuZXhwb3J0IHR5cGUgQXV0aFByb3ZpZGVyVmFsdWVzID0ge1xuICBpc0xvZ2dlZEluOiBib29sZWFuO1xuICBsb2dpbjogKGxvZ2luRGF0YTogTG9naW5EYXRhKSA9PiB2b2lkO1xuICBsb2dvdXQ6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQVVUSF9DT05URVhUX0RFRkFVTFRfVkFMVUVTOiBBdXRoUHJvdmlkZXJWYWx1ZXMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBsb2dpbjogKCkgPT4ge30sXG4gIGxvZ291dDogKCkgPT4ge30sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIEZDLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvZ2luRGF0YSB9IGZyb20gJ3NyYy9tb2RlbHMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZXMnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyVmFsdWVzLCBBVVRIX0NPTlRFWFRfREVGQVVMVF9WQUxVRVMgfSBmcm9tICcuL0F1dGhQcm92aWRlci5wcm9wcyc7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aFByb3ZpZGVyVmFsdWVzPihBVVRIX0NPTlRFWFRfREVGQVVMVF9WQUxVRVMpO1xuXG5jb25zdCBBdXRoUHJvdmlkZXI6IEZDID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlPGJvb2xlYW4+KEF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAobG9naW5EYXRhOiBMb2dpbkRhdGEpID0+IHtcbiAgICBjb25zdCBsb2dnZWRJbiA9IGF3YWl0IEF1dGhTZXJ2aWNlLmxvZ2luKGxvZ2luRGF0YSk7XG4gICAgc2V0SXNMb2dnZWRJbihsb2dnZWRJbik7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlZE91dCA9IGF3YWl0IEF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHNldElzTG9nZ2VkSW4obG9nZ2VkT3V0KTtcbiAgfTtcblxuICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzTG9nZ2VkSW4sIGxvZ2luLCBsb2dvdXQgfX0gey4uLnByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCk6IEF1dGhQcm92aWRlclZhbHVlcyA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgaW5zaWRlIEF1dGhQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aFByb3ZpZGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBdXRoUHJvdmlkZXIsIEF1dGhDb250ZXh0LCB1c2VBdXRoIH0gZnJvbSAnLi9BdXRoUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9BdXRoUHJvdmlkZXIucHJvcHMnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIEZDLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdPdmVybGF5IH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgTG9hZGluZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBkaXNwYXRjaExvYWRpbmc6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn0+KHtcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgZGlzcGF0Y2hMb2FkaW5nOiAoKSA9PiB7fSxcbn0pO1xuXG5jb25zdCBMb2FkaW5nUHJvdmlkZXI6IEZDID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPExvYWRpbmdDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIGRpc3BhdGNoTG9hZGluZzogc2V0SXNMb2FkaW5nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nT3ZlcmxheSAvPn1cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0xvYWRpbmdDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUxvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KExvYWRpbmdDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgaW5zaWRlIEF1dGhQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1Byb3ZpZGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nUHJvdmlkZXIsIExvYWRpbmdDb250ZXh0LCB1c2VMb2FkaW5nIH0gZnJvbSAnLi9Mb2FkaW5nUHJvdmlkZXInO1xuIiwiaW1wb3J0IHsgTGlzdFJlc3BvbnNlLCBQb2tlbW9uIH0gZnJvbSAnc3JjL21vZGVscyc7XG5cbmV4cG9ydCBlbnVtIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQge1xuICBDSEFOR0VfTE9BRElORyA9ICdDSEFOR0VfTE9BRElORycsXG4gIEVSUk9SID0gJ0VSUk9SJyxcbiAgUkVMT0FEX0xJU1QgPSAnUkVMT0FEX0xJU1QnLFxuICBVUERBVEVfUE9LRU1PTiA9ICdVUERBVEVfUE9LRU1PTicsXG4gIFVQREFURV9QT0tFTU9OX0xJU1QgPSAnVVBEQVRFX1BPS0VNT05fTElTVCcsXG4gIFVQREFURV9GQVZPUklURV9QT0tFTU9OUyA9ICdVUERBVEVfRk9WT1JJVEVfUE9LRU1PTlMnLFxufVxuXG5leHBvcnQgdHlwZSBQb2tlbW9uUHJvdmlkZXJBY3Rpb24gPVxuICB8IHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5DSEFOR0VfTE9BRElORzsgaXNMb2FkaW5nOiBib29sZWFuIH1cbiAgfCB7IHR5cGU6IFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuRVJST1IgfVxuICB8IHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5VUERBVEVfRkFWT1JJVEVfUE9LRU1PTlM7IGZhdm9yaXRlUG9rZW1vbnM6IHN0cmluZ1tdIH1cbiAgfCB7XG4gICAgICB0eXBlOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlVQREFURV9QT0tFTU9OO1xuICAgICAgcGF5bG9hZDogTGlzdFJlc3BvbnNlPFBva2Vtb24+O1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlVQREFURV9QT0tFTU9OX0xJU1Q7XG4gICAgICBwYXlsb2FkOiBMaXN0UmVzcG9uc2U8UG9rZW1vbj47XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuUkVMT0FEX0xJU1Q7XG4gICAgICBwYXlsb2FkOiBMaXN0UmVzcG9uc2U8UG9rZW1vbj47XG4gICAgfTtcbiIsImltcG9ydCB7IFBhZ2luYXRpb25SZXNwb25zZSwgUG9rZW1vbiB9IGZyb20gJ3NyYy9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QT0tFTU9OX1BBR0VfU0laRSA9IDIwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9LRU1PTl9QQUdFX09GRlNFVCA9IDA7XG5cbnR5cGUgQmFzZVByb3BlcnRpZXMgPSB7XG4gIGVycm9yOiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHBva2Vtb246IFBva2Vtb24gfCBudWxsO1xuICBwb2tlbW9uc0xpc3Q6IFBva2Vtb25bXTtcbiAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblJlc3BvbnNlO1xufTtcblxuY29uc3QgREVGQVVMVF9CQVNFX1BST1BFUlRJRVM6IEJhc2VQcm9wZXJ0aWVzID0ge1xuICBlcnJvcjogZmFsc2UsXG4gIGlzTG9hZGluZzogdHJ1ZSxcbiAgcG9rZW1vbjogbnVsbCxcbiAgcG9rZW1vbnNMaXN0OiBbXSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIHRvdGFsUmVjb3JkczogMCxcbiAgICBuZXh0VXJsOiBudWxsLFxuICAgIHByZXZpb3VzVXJsOiBudWxsLFxuICB9LFxufTtcblxuZXhwb3J0IHR5cGUgUG9rZW1vblByb3ZpZGVyVmFsdWVzID0gQmFzZVByb3BlcnRpZXMgJiB7XG4gIGdldFBva2Vtb25CeUlEOiAobmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBnZXRQb2tlbW9uQnlOYW1lOiAobmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBuZXh0UGFnZTogKCkgPT4gdm9pZDtcbiAgdXBkYXRlRmF2b3JpdGVQb2tlbW9uczogKHBva2Vtb25JRDogc3RyaW5nLCBpc0Zhdm9yaXRlOiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xufTtcblxuZXhwb3J0IGNvbnN0IFBPS0VNT05fQ09OVEVYVF9ERUZBVUxUX1ZBTFVFUzogUG9rZW1vblByb3ZpZGVyVmFsdWVzID0ge1xuICAuLi5ERUZBVUxUX0JBU0VfUFJPUEVSVElFUyxcbiAgZ2V0UG9rZW1vbkJ5SUQ6ICgpID0+IFByb21pc2UucmVzb2x2ZSgpLFxuICBnZXRQb2tlbW9uQnlOYW1lOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoKSxcbiAgbmV4dFBhZ2U6ICgpID0+IHt9LFxuICB1cGRhdGVGYXZvcml0ZVBva2Vtb25zOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoKSxcbn07XG5cbmV4cG9ydCB0eXBlIFBva2Vtb25TdGF0ZSA9IEJhc2VQcm9wZXJ0aWVzO1xuXG5leHBvcnQgY29uc3QgUE9LRU1PTl9DT05URVhUX0RFRkFVTFRfU1RBVEU6IFBva2Vtb25TdGF0ZSA9IHtcbiAgLi4uREVGQVVMVF9CQVNFX1BST1BFUlRJRVMsXG59O1xuIiwiaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJ3NyYy9tb2RlbHMnO1xuaW1wb3J0IHsgUG9rZW1vblByb3ZpZGVyQWN0aW9uLCBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kIH0gZnJvbSAnLi9Qb2tlbW9uUHJvdmlkZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBQb2tlbW9uU3RhdGUgfSBmcm9tICcuL1Bva2Vtb25Qcm92aWRlci5wcm9wcyc7XG5cbmNvbnN0IG1hcEZhdm9yaXRlc1V0aWwgPSAoZmF2b3JpdGVQb2tlbW9uczogc3RyaW5nW10pID0+IChwb2tlbW9uOiBQb2tlbW9uKSA9PiAoe1xuICAuLi5wb2tlbW9uLFxuICBmYXZvcml0ZTogZmF2b3JpdGVQb2tlbW9ucy5zb21lKChmYXZvcml0ZSkgPT4gZmF2b3JpdGUgPT0gcG9rZW1vbi5pZCksXG59KTtcblxuZXhwb3J0IGNvbnN0IHBva2Vtb25SZWR1Y2VyID0gKHByZXZTdGF0ZTogUG9rZW1vblN0YXRlLCBhY3Rpb246IFBva2Vtb25Qcm92aWRlckFjdGlvbik6IFBva2Vtb25TdGF0ZSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuQ0hBTkdFX0xPQURJTkc6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5pc0xvYWRpbmcsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuRVJST1I6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuUkVMT0FEX0xJU1Q6IHtcbiAgICAgIGNvbnN0IHsgZGF0YSwgcGFnaW5hdGlvbiB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcG9rZW1vbnNMaXN0OiBbLi4uZGF0YV0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAuLi5wYWdpbmF0aW9uLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlVQREFURV9GQVZPUklURV9QT0tFTU9OUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIHBva2Vtb25zTGlzdDogcHJldlN0YXRlLnBva2Vtb25zTGlzdC5tYXAobWFwRmF2b3JpdGVzVXRpbChhY3Rpb24uZmF2b3JpdGVQb2tlbW9ucykpLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlVQREFURV9QT0tFTU9OOiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgcG9rZW1vbiA9IGRhdGEuZmluZCgocG9rZW1vbikgPT4gcG9rZW1vbi5pZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcG9rZW1vbjogcG9rZW1vbiB8fCBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlVQREFURV9QT0tFTU9OX0xJU1Q6IHtcbiAgICAgIGNvbnN0IHsgZGF0YSwgcGFnaW5hdGlvbiB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcG9rZW1vbnNMaXN0OiBbLi4ucHJldlN0YXRlLnBva2Vtb25zTGlzdCwgLi4uZGF0YV0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAuLi5wYWdpbmF0aW9uLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2VzJztcbmltcG9ydCB7IHVzZUlzTW91bnRlZFJlZiB9IGZyb20gJ3NyYy9ob29rcyc7XG5pbXBvcnQge1xuICBQb2tlbW9uUHJvdmlkZXJWYWx1ZXMsXG4gIFBPS0VNT05fQ09OVEVYVF9ERUZBVUxUX1ZBTFVFUyxcbiAgUE9LRU1PTl9DT05URVhUX0RFRkFVTFRfU1RBVEUsXG4gIERFRkFVTFRfUE9LRU1PTl9QQUdFX1NJWkUsXG59IGZyb20gJy4vUG9rZW1vblByb3ZpZGVyLnByb3BzJztcbmltcG9ydCB7IHBva2Vtb25SZWR1Y2VyIH0gZnJvbSAnLi9Qb2tlbW9uUHJvdmlkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBQb2tlbW9uUHJvdmlkZXJBY3Rpb24sIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQgfSBmcm9tICcuL1Bva2Vtb25Qcm92aWRlci5hY3Rpb25zJztcbmltcG9ydCB7IERFRkFVTFRfUE9LRU1PTl9QQUdFX09GRlNFVCB9IGZyb20gJy4vUG9rZW1vblByb3ZpZGVyLnByb3BzJztcblxuZXhwb3J0IGNvbnN0IFBva2Vtb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxQb2tlbW9uUHJvdmlkZXJWYWx1ZXM+KFBPS0VNT05fQ09OVEVYVF9ERUZBVUxUX1ZBTFVFUyk7XG5cbmNvbnN0IFBva2Vtb25Qcm92aWRlcjogRkMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHBva2Vtb25SZWR1Y2VyLCBQT0tFTU9OX0NPTlRFWFRfREVGQVVMVF9TVEFURSk7XG4gIGNvbnN0IGlzTW91bnRlZFJlZiA9IHVzZUlzTW91bnRlZFJlZigpO1xuXG4gIGNvbnN0IHNldExvYWRpbmcgPSAoaXNMb2FkaW5nOiBib29sZWFuKSA9PlxuICAgIGRpc3BhdGNoKHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5DSEFOR0VfTE9BRElORywgaXNMb2FkaW5nOiBpc0xvYWRpbmcgfSk7XG5cbiAgY29uc3Qgc2V0RXJyb3IgPSAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuRVJST1IgfSk7XG5cbiAgY29uc3QgZ2V0UG9rZW1vbkJ5SUQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbihpZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuVVBEQVRFX1BPS0VNT04sIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcigpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UG9rZW1vbkJ5TmFtZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBnZXRQb2tlbW9uTGlzdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbihuYW1lKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5SRUxPQURfTElTVCwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRQb2tlbW9uTGlzdCA9IGFzeW5jICh1cmw/OiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHVybFxuICAgICAgICA/IGF3YWl0IFBva2Vtb25TZXJ2aWNlLmdldFBva2Vtb25MaXN0QnlVcmwodXJsKVxuICAgICAgICA6IGF3YWl0IFBva2Vtb25TZXJ2aWNlLmdldFBva2Vtb25MaXN0KHtcbiAgICAgICAgICAgIGxpbWl0OiBERUZBVUxUX1BPS0VNT05fUEFHRV9TSVpFLFxuICAgICAgICAgICAgb2Zmc2V0OiBERUZBVUxUX1BPS0VNT05fUEFHRV9PRkZTRVQsXG4gICAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFjdGlvbjogUG9rZW1vblByb3ZpZGVyQWN0aW9uID0gdXJsXG4gICAgICAgID8geyB0eXBlOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlVQREFURV9QT0tFTU9OX0xJU1QsIHBheWxvYWQ6IHJlc3BvbnNlIH1cbiAgICAgICAgOiB7IHR5cGU6IFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuUkVMT0FEX0xJU1QsIHBheWxvYWQ6IHJlc3BvbnNlIH07XG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCAmJiBkaXNwYXRjaChhY3Rpb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCAmJiBzZXRFcnJvcigpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRmF2b3JpdGVQb2tlbW9ucyA9IGFzeW5jIChwb2tlbW9uSUQ6IHN0cmluZywgaXNGYXZvcml0ZTogYm9vbGVhbikgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZhdm9yaXRlUG9rZW1vbnMgPSBpc0Zhdm9yaXRlXG4gICAgICAgID8gYXdhaXQgUG9rZW1vblNlcnZpY2Uuc2F2ZUFzRmF2b3JpdGUocG9rZW1vbklEKVxuICAgICAgICA6IGF3YWl0IFBva2Vtb25TZXJ2aWNlLnJlbW92ZUZyb21GYXZvcml0ZXMocG9rZW1vbklEKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5VUERBVEVfRkFWT1JJVEVfUE9LRU1PTlMsIGZhdm9yaXRlUG9rZW1vbnMgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBuZXh0UGFnZSA9ICgpID0+IHtcbiAgICBpZiAoIXN0YXRlLnBhZ2luYXRpb24ubmV4dFVybCkgcmV0dXJuO1xuICAgIGdldFBva2Vtb25MaXN0KHN0YXRlLnBhZ2luYXRpb24ubmV4dFVybCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQb2tlbW9uTGlzdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9rZW1vbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IC4uLnN0YXRlLCBnZXRQb2tlbW9uQnlJRCwgZ2V0UG9rZW1vbkJ5TmFtZSwgbmV4dFBhZ2UsIHVwZGF0ZUZhdm9yaXRlUG9rZW1vbnMgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVBva2Vtb24gPSAoKTogUG9rZW1vblByb3ZpZGVyVmFsdWVzID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoUG9rZW1vbkNvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVBva2Vtb24gbXVzdCBiZSBpbnNpZGUgUGtlbW9uUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25Qcm92aWRlcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUG9rZW1vblByb3ZpZGVyLCBQb2tlbW9uQ29udGV4dCwgdXNlUG9rZW1vbiB9IGZyb20gJy4vUG9rZW1vblByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vUG9rZW1vblByb3ZpZGVyLmFjdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uUHJvdmlkZXIucHJvcHMnO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uUHJvdmlkZXIucmVkdWNlcic7XG4iLCJleHBvcnQgKiBmcm9tICcuL0F1dGhQcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdQcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL1Bva2Vtb25Qcm92aWRlcic7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZUlzTW91bnRlZFJlZiB9IGZyb20gJy4vdXNlVW5Nb3VudGVkUmVmJztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VJc01vdW50ZWRSZWYgPSAoKSA9PiB7XG4gIGNvbnN0IGlzTW91bnRlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gaXNNb3VudGVkUmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSXNNb3VudGVkUmVmO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3Qgcm9vdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xucm9vdE5vZGUgJiYgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuIiwiZXhwb3J0IHR5cGUgUGFnaW5hdGlvblBhcmFtcyA9IHsgbGltaXQ6IG51bWJlcjsgb2Zmc2V0OiBudW1iZXIgfTtcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGlvblJlc3BvbnNlID0ge1xuICB0b3RhbFJlY29yZHM6IG51bWJlcjtcbiAgbmV4dFVybD86IHN0cmluZyB8IG51bGw7XG4gIHByZXZpb3VzVXJsPzogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBR0lOQVRJT05fUkVTUE9OU0UgPSB7XG4gIGRhdGE6IFtdLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgdG90YWxSZWNvcmRzOiAwLFxuICAgIHByZXZpb3VzVXJsOiBudWxsLFxuICAgIG5leHRVcmw6IG51bGwsXG4gIH0sXG59O1xuXG5leHBvcnQgdHlwZSBMaXN0UmVzcG9uc2U8VD4gPSB7XG4gIGRhdGE6IFRbXTtcbiAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblJlc3BvbnNlO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vTGlzdFJlc3BvbnNlJztcbiIsImV4cG9ydCB0eXBlIExvZ2luRGF0YSA9IHtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPR0lOX0RBVEE6IExvZ2luRGF0YSA9IHtcbiAgcGFzc3dvcmQ6ICcnLFxuICB1c2VybmFtZTogJycsXG59O1xuIiwiZXhwb3J0IHR5cGUgUGFnaW5hdGlvblN0YXRlID0ge1xuICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHRvdGFsUmVjb3JkczogbnVtYmVyO1xufTtcbiIsImltcG9ydCB7IFBPS0VNT05fVFlQRSB9IGZyb20gJ3NyYy9jb25zdGFudHMnO1xuXG5leHBvcnQgdHlwZSBQb2tlbW9uID0ge1xuICBpZDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZmF2b3JpdGU6IGJvb2xlYW47XG4gIGltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbGlua0luZm8/OiBzdHJpbmc7XG4gIHN0YXRzPzoge1xuICAgIGJhc2U6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gIH1bXTtcbiAgdHlwZXM/OiB7XG4gICAgc2xvdDogbnVtYmVyO1xuICAgIG5hbWU6IFBPS0VNT05fVFlQRTtcbiAgfVtdO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQVBJJztcbmV4cG9ydCAqIGZyb20gJy4vTG9naW4nO1xuZXhwb3J0ICogZnJvbSAnLi9QYWdpbmF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vUG9rZW1vbic7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYWdlQ29udGFpbmVyIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnO1xuXG5jb25zdCBEYXRhaWxzUGFnZTogRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2VDb250YWluZXIgdGl0bGU9XCJEZXRhaWxzXCI+XG4gICAgICA8ZGl2PkRldGFpbHMgQ29udGVudDwvZGl2PlxuICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFpbHNQYWdlO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXRhaWxzUGFnZSB9IGZyb20gJy4vRGV0YWlsc1BhZ2UnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrLCBGb3JtaWtDb25maWcsIEZvcm1pa1Byb3BzIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IElucHV0RmllbGQsIFBhc3N3b3JkRmllbGQgfSBmcm9tICdzcmMvY29tcG9uZW50cy9GaWVsZHMnO1xuaW1wb3J0IHsgTG9naW5EYXRhIH0gZnJvbSAnc3JjL21vZGVscyc7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdGlvbiwgZm9ybVZhbGlkYXRpb25zLCBGb3JtVmFsaWRhdGlvbldpdGhWYWx1ZSB9IGZyb20gJ3NyYy91dGlscyc7XG5cbmltcG9ydCAnLi9Mb2dpbkZvcm0uc2Nzcyc7XG5cbmNvbnN0IExvZ2luRm9ybTogRkM8Rm9ybWlrQ29uZmlnPExvZ2luRGF0YT4+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1payB7Li4ucHJvcHN9PlxuICAgICAgeyh7IGVycm9ycywgdG91Y2hlZCB9OiBGb3JtaWtQcm9wczxMb2dpbkRhdGE+KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tZmllbGRzXCI+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnM/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JzPy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZC51c2VybmFtZX1cbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dXNlcm5hbWVWYWxpZGF0b3IoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFBhc3N3b3JkRmllbGRcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9ycz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvcnM/LnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkYXRvcigpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICk7XG4gICAgICB9fVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuY29uc3QgdXNlcm5hbWVWYWxpZGF0b3IgPSAoKSA9PiB7XG4gIHJldHVybiBmb3JtVmFsaWRhdGlvbnMoJ1VzZXJuYW1lJywgW0Zvcm1WYWxpZGF0aW9uLlJFUVVJUkVEXSk7XG59O1xuXG5jb25zdCBwYXNzd29yZFZhbGlkYXRvciA9ICgpID0+IHtcbiAgcmV0dXJuIGZvcm1WYWxpZGF0aW9ucygnUGFzc3dvcmQnLCBbXG4gICAgRm9ybVZhbGlkYXRpb24uUkVRVUlSRUQsXG4gICAgeyB2YWxpZGF0b3I6IEZvcm1WYWxpZGF0aW9uV2l0aFZhbHVlLk1JTl9MRU5HVEgsIHZhbHVlOiA2IH0sXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dpbkZvcm0gfSBmcm9tICcuL0xvZ2luRm9ybSc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnc3JjL2NvbnRleHQnO1xuaW1wb3J0IHsgREVGQVVMVF9MT0dJTl9EQVRBLCBMb2dpbkRhdGEgfSBmcm9tICdzcmMvbW9kZWxzJztcbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gJy4vTG9naW5Gb3JtJztcblxuaW1wb3J0ICcuL0xvZ2luUGFnZS5zY3NzJztcblxuY29uc3QgTG9naW5QYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2dpbiB9ID0gdXNlQXV0aCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dpbi1sb2dvXCIgc3JjPVwiLi9sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDxMb2dpbkZvcm0gaW5pdGlhbFZhbHVlcz17eyAuLi5ERUZBVUxUX0xPR0lOX0RBVEEgfX0gb25TdWJtaXQ9eyh2YWx1ZXM6IExvZ2luRGF0YSkgPT4gbG9naW4odmFsdWVzKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dpblBhZ2UgfSBmcm9tICcuL0xvZ2luUGFnZSc7XG5leHBvcnQgKiBmcm9tICcuL0xvZ2luRm9ybSc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBCdXR0b25Mb2FkaW5nLCBQYWdlQ29udGFpbmVyLCBQb2tlbW9uQ2FyZCwgU2VhcmNoSW5wdXQgfSBmcm9tICdzcmMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VMb2FkaW5nLCB1c2VQb2tlbW9uIH0gZnJvbSAnc3JjL2NvbnRleHQnO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJ3NyYy9tb2RlbHMnO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnc3JjL3JvdXRlcyc7XG5cbmltcG9ydCAnLi9Qb2tlZGV4UGFnZS5zY3NzJztcblxuY29uc3QgUG9rZWRleFBhZ2U6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGRpc3BhdGNoTG9hZGluZyB9ID0gdXNlTG9hZGluZygpO1xuICBjb25zdCB7IGdldFBva2Vtb25CeU5hbWUsIGlzTG9hZGluZywgbmV4dFBhZ2UsIHBva2Vtb25zTGlzdCwgcGFnaW5hdGlvbiwgdXBkYXRlRmF2b3JpdGVQb2tlbW9ucyB9ID0gdXNlUG9rZW1vbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaExvYWRpbmcoaXNMb2FkaW5nKTtcbiAgfSwgW2lzTG9hZGluZ10pO1xuXG4gIGNvbnN0IGhhbmRsZXJDYXJkQ2xpY2sgPSAocG9rZW1vbjogUG9rZW1vbikgPT4ge1xuICAgIG5hdmlnYXRlKGAke1JPVVRFUy5ob21lfS8ke3Bva2Vtb24uaWR9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lclxuICAgICAgcmVuZGVySXRlbUhlYWRlcj17KCkgPT4gPFNlYXJjaElucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IG5hbWVcIiBvblNlYXJjaD17KG5hbWUpID0+IGdldFBva2Vtb25CeU5hbWUobmFtZSl9IC8+fVxuICAgICAgdGl0bGU9XCJQb2tlZGV4XCJcbiAgICA+XG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tZ3JpZFwiPlxuICAgICAgICAgIHtwb2tlbW9uc0xpc3QubGVuZ3RoID8gKFxuICAgICAgICAgICAgcG9rZW1vbnNMaXN0Lm1hcCgocG9rZW1vbikgPT4gKFxuICAgICAgICAgICAgICA8UG9rZW1vbkNhcmRcbiAgICAgICAgICAgICAgICBwcmVzc2FibGVcbiAgICAgICAgICAgICAgICBrZXk9e3Bva2Vtb24uaWR9XG4gICAgICAgICAgICAgICAgcG9rZW1vbj17cG9rZW1vbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyQ2FyZENsaWNrfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0QXNGYXZvcml0ZT17KCkgPT4gdXBkYXRlRmF2b3JpdGVQb2tlbW9ucyhwb2tlbW9uLmlkLCAhcG9rZW1vbi5mYXZvcml0ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbXB0eS1saXN0LW1lc3NhZ2VcIj5Qb2tlbW9uIG5vdCBmb3VuZDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Bva2Vtb25zTGlzdC5sZW5ndGggPCBwYWdpbmF0aW9uLnRvdGFsUmVjb3JkcyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXBhZ2luYXRvclwiPlxuICAgICAgICAgICAgPEJ1dHRvbkxvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IHRleHQ9XCJTaG93IE1vcmVcIiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9rZWRleFBhZ2U7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBva2VkZXhQYWdlIH0gZnJvbSAnLi9Qb2tlZGV4UGFnZSc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFBhZ2VDb250YWluZXIsIFBva2Vtb25QYW5lbCB9IGZyb20gJ3NyYy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUxvYWRpbmcsIHVzZVBva2Vtb24gfSBmcm9tICdzcmMvY29udGV4dCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICdzcmMvcm91dGVzJztcblxuaW1wb3J0ICcuL1Bva2Vtb25QYWdlLnNjc3MnO1xuXG5jb25zdCBQb2tlbW9uUGFnZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGlzcGF0Y2hMb2FkaW5nIH0gPSB1c2VMb2FkaW5nKCk7XG4gIGNvbnN0IHsgZ2V0UG9rZW1vbkJ5SUQsIGlzTG9hZGluZywgcG9rZW1vbiB9ID0gdXNlUG9rZW1vbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHJvdXRlUGFyYW1zID0gdXNlUGFyYW1zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaExvYWRpbmcoaXNMb2FkaW5nKTtcbiAgfSwgW2lzTG9hZGluZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlUGFyYW1zLnBva2Vtb25JRCkgZ2V0UG9rZW1vbkJ5SUQocm91dGVQYXJhbXMucG9rZW1vbklEKTtcbiAgfSwgW3JvdXRlUGFyYW1zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lclxuICAgICAgcmVuZGVySXRlbUhlYWRlcj17KCkgPT4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoUk9VVEVTLmhvbWUpfT5cbiAgICAgICAgICBSZXR1cm4gdG8gUG9rZWRleFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB0aXRsZT17aXNMb2FkaW5nID8gJycgOiBwb2tlbW9uPy5uYW1lIHx8ICdQb2tlbW9uIG5vdCBmb3VuZCd9XG4gICAgPlxuICAgICAge3Bva2Vtb24gJiYgIWlzTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8UG9rZW1vblBhbmVsIHBva2Vtb249e3Bva2Vtb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1BhZ2VDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uUGFnZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUG9rZW1vblBhZ2UgfSBmcm9tICcuL1Bva2Vtb25QYWdlJztcbiIsImV4cG9ydCAqIGZyb20gJy4vRGV0YWlscyc7XG5leHBvcnQgKiBmcm9tICcuL0xvZ2luJztcbmV4cG9ydCAqIGZyb20gJy4vUG9rZW1vbic7XG5leHBvcnQgKiBmcm9tICcuL1Bva2VkZXgnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdzcmMvY29udGV4dCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbmNvbnN0IFByaXZhdGVSb3V0ZTogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlQXV0aCgpO1xuICByZXR1cm4gaXNMb2dnZWRJbiA/IDw+e2NoaWxkcmVufTwvPiA6IDxOYXZpZ2F0ZSB0bz17Uk9VVEVTLmxvZ2lufSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhdGVSb3V0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnc3JjL2NvbnRleHQnO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9yb3V0ZXMnO1xuXG5jb25zdCBQdWJsaWNSb3V0ZTogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlQXV0aCgpO1xuICByZXR1cm4gaXNMb2dnZWRJbiA/IDxOYXZpZ2F0ZSB0bz17Uk9VVEVTLmhvbWV9IC8+IDogPD57Y2hpbGRyZW59PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHVibGljUm91dGU7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb3RlY3RlZFJvdXRlIH0gZnJvbSAnLi9Qcm90ZWN0ZWRSb3V0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFB1YmxpY1JvdXRlIH0gZnJvbSAnLi9QdWJsaWNSb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcyc7XG4iLCJleHBvcnQgY29uc3QgUk9VVEVTID0ge1xuICBkZXRhaWxzOiAnL2RldGFpbHMnLFxuICBsb2dpbjogJy9sb2dpbicsXG4gIGhvbWU6ICcvcG9rZWRleCcsXG59O1xuIiwiaW1wb3J0IHsgTG9naW5EYXRhIH0gZnJvbSAnc3JjL21vZGVscyc7XG5cbmNvbnN0IFNFU1NJT05fREFUQV9LRVkgPSAnU0VTU0lPTl9EQVRBJztcblxuY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXV0aFNlcnZpY2U7XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBdXRoU2VydmljZSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IEF1dGhTZXJ2aWNlLmluc3RhbmNlIHx8IG5ldyBBdXRoU2VydmljZSgpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIGlzTG9nZ2VkSW4gPSAoKTogYm9vbGVhbiA9PiAhIXRoaXMuZ2V0VXNlckRhdGEoKTtcblxuICBwdWJsaWMgZ2V0VXNlckRhdGEgPSAoKTogTG9naW5EYXRhID0+IHtcbiAgICBjb25zdCBzZXNzaW9uRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFU1NJT05fREFUQV9LRVkpO1xuICAgIHJldHVybiBzZXNzaW9uRGF0YSA/IEpTT04ucGFyc2Uoc2Vzc2lvbkRhdGEpIDogbnVsbDtcbiAgfTtcblxuICBwdWJsaWMgbG9naW4gPSBhc3luYyAobG9naW5EYXRhOiBMb2dpbkRhdGEpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNFU1NJT05fREFUQV9LRVksIEpTT04uc3RyaW5naWZ5KGxvZ2luRGF0YSkpO1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgbG9nb3V0ID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiIsImltcG9ydCB7IExpc3RSZXNwb25zZSwgUGFnaW5hdGlvblBhcmFtcywgUG9rZW1vbiB9IGZyb20gJ3NyYy9tb2RlbHMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnc3JjL3V0aWxzJztcbmltcG9ydCB7IFBPS0VNT05fVVJMUyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IFBva2Vtb25BcGlMaXN0SXRlbSwgUG9rZW1vbkFwaSwgUG9rZW1vblNwZWNpZXNBcGkgfSBmcm9tICcuL1Bva2Vtb25BcGknO1xuXG5jb25zdCBGQVZPUklURV9QT0tFTU9OU19LRVkgPSAnRkFWT1JJVEVfUE9LRU1PTlNfS0VZJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPS0VNT05fUEFHSU5BVElPTl9SRVNQT05TRTogTGlzdFJlc3BvbnNlPFBva2Vtb24+ID0ge1xuICBkYXRhOiBbXSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIG5leHRVcmw6IG51bGwsXG4gICAgcHJldmlvdXNVcmw6IG51bGwsXG4gICAgdG90YWxSZWNvcmRzOiAwLFxuICB9LFxufTtcblxuY2xhc3MgUG9rZW1vblNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9rZW1vblNlcnZpY2U7XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBQb2tlbW9uU2VydmljZSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IFBva2Vtb25TZXJ2aWNlLmluc3RhbmNlIHx8IG5ldyBQb2tlbW9uU2VydmljZSgpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgZ2V0UG9rZW1vbiA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPExpc3RSZXNwb25zZTxQb2tlbW9uPj4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke1BPS0VNT05fVVJMUy5nZXRQb2tlbW9ufS8ke25hbWUudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLmhyZWYpO1xuICAgICAgY29uc3QgZGF0YSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIFBva2Vtb25BcGk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMuZ2V0UG9rZW1vbkRlc2NyaXB0aW9uKG5hbWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBmYXZvcml0ZTogdGhpcy5nZXRGYXZvcml0ZUxpc3RMb2NhbFN0b3JhZ2UoKS5zb21lKChmYXZvcml0ZSkgPT4gZmF2b3JpdGUgPT0gZGF0YS5pZCksXG4gICAgICAgICAgICBpbWFnZTogUE9LRU1PTl9VUkxTLmdldFBva2Vtb25TcHJpdGVzVXJsKGRhdGEubmFtZSksXG4gICAgICAgICAgICBsaW5rSW5mbzogdXJsLmhyZWYsXG4gICAgICAgICAgICBuYW1lOiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZGF0YS5uYW1lKSxcbiAgICAgICAgICAgIHN0YXRzOiBkYXRhLnN0YXRzLm1hcCgocG9rZW1vblN0YXQpID0+ICh7XG4gICAgICAgICAgICAgIGJhc2U6IHBva2Vtb25TdGF0LmJhc2Vfc3RhdCxcbiAgICAgICAgICAgICAgbmFtZTogcG9rZW1vblN0YXQuc3RhdC5uYW1lLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHlwZXM6IGRhdGEudHlwZXMubWFwKChwb2tlbW9uVHlwZSkgPT4gKHtcbiAgICAgICAgICAgICAgc2xvdDogcG9rZW1vblR5cGUuc2xvdCxcbiAgICAgICAgICAgICAgbmFtZTogcG9rZW1vblR5cGUudHlwZS5uYW1lLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBuZXh0VXJsOiBudWxsLFxuICAgICAgICAgIHByZXZpb3VzVXJsOiBudWxsLFxuICAgICAgICAgIHRvdGFsUmVjb3JkczogMSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB7IC4uLkRFRkFVTFRfUE9LRU1PTl9QQUdJTkFUSU9OX1JFU1BPTlNFIH07XG4gICAgfVxuICB9O1xuXG4gIGdldFBva2Vtb25EZXNjcmlwdGlvbiA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke1BPS0VNT05fVVJMUy5nZXRQb2tlbW9uU3BlY2llc30vJHtpZC50b0xvd2VyQ2FzZSgpfWApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLmhyZWYpO1xuICAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBQb2tlbW9uU3BlY2llc0FwaTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRhdGEuZmxhdm9yX3RleHRfZW50cmllcy5maW5kKChlbnRyeSkgPT4gZW50cnkubGFuZ3VhZ2UubmFtZSA9PT0gJ2VuJyk7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uPy5mbGF2b3JfdGV4dCB8fCAnJztcbiAgfTtcblxuICBnZXRQb2tlbW9uTGlzdCA9IChwYWdpbmF0aW9uRGF0YT86IFBhZ2luYXRpb25QYXJhbXMpOiBQcm9taXNlPExpc3RSZXNwb25zZTxQb2tlbW9uPj4gPT4ge1xuICAgIGNvbnN0IGxpbWl0ID0gcGFnaW5hdGlvbkRhdGEgPyBwYWdpbmF0aW9uRGF0YS5saW1pdCA6IDIwO1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25EYXRhID8gcGFnaW5hdGlvbkRhdGEub2Zmc2V0IDogMDtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKFBPS0VNT05fVVJMUy5nZXRQb2tlbW9uKTtcbiAgICB1cmwuc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IGxpbWl0OiBsaW1pdC50b1N0cmluZygpLCBvZmZzZXQ6IG9mZnNldC50b1N0cmluZygpIH0pLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UG9rZW1vbkxpc3RCeVVybCh1cmwuaHJlZikuY2F0Y2goKGVycm9yKSA9PiBlcnJvcik7XG4gIH07XG5cbiAgZ2V0UG9rZW1vbkxpc3RCeVVybCA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8TGlzdFJlc3BvbnNlPFBva2Vtb24+PiA9PiB7XG4gICAgY29uc3QgdXJsUGFyc2VkID0gbmV3IFVSTCh1cmwpO1xuICAgIGNvbnN0IG9mZnNldCA9IE51bWJlcih1cmxQYXJzZWQuc2VhcmNoUGFyYW1zLmdldCgnb2Zmc2V0JykpO1xuICAgIGxldCBiYXNlSUQgPSBpc05hTihvZmZzZXQpID8gMSA6IG9mZnNldCArIDE7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIFBva2Vtb25BcGlMaXN0SXRlbTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBkYXRhLnJlc3VsdHMubWFwKChwb2tlbW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gKGJhc2VJRCsrKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGltYWdlOiBQT0tFTU9OX1VSTFMuZ2V0UG9rZW1vblNwcml0ZXNVcmwocG9rZW1vbi5uYW1lKSxcbiAgICAgICAgICBuYW1lOiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocG9rZW1vbi5uYW1lKSxcbiAgICAgICAgICBmYXZvcml0ZTogdGhpcy5nZXRGYXZvcml0ZUxpc3RMb2NhbFN0b3JhZ2UoKS5zb21lKChmYXZvcml0ZSkgPT4gZmF2b3JpdGUgPT0gaWQpLFxuICAgICAgICB9IGFzIFBva2Vtb247XG4gICAgICB9KSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgdG90YWxSZWNvcmRzOiBkYXRhLmNvdW50LFxuICAgICAgICBuZXh0VXJsOiBkYXRhLm5leHQsXG4gICAgICAgIHByZXZpb3VzVXJsOiBkYXRhLnByZXZpb3VzLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGdldEZhdm9yaXRlTGlzdExvY2FsU3RvcmFnZSA9ICgpOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgZmF2b3JpdGVMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oRkFWT1JJVEVfUE9LRU1PTlNfS0VZKTtcbiAgICByZXR1cm4gZmF2b3JpdGVMaXN0ID8gSlNPTi5wYXJzZShmYXZvcml0ZUxpc3QpIDogW107XG4gIH07XG5cbiAgZ2V0RmF2b3JpdGVMaXN0ID0gKCk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUodGhpcy5nZXRGYXZvcml0ZUxpc3RMb2NhbFN0b3JhZ2UoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2F2ZUFzRmF2b3JpdGUgPSBhc3luYyAocG9rZW1vbklEOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG4gICAgY29uc3QgZmF2b3JpdGVMaXN0ID0gYXdhaXQgdGhpcy5nZXRGYXZvcml0ZUxpc3QoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIEZBVk9SSVRFX1BPS0VNT05TX0tFWSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KFsuLi5mYXZvcml0ZUxpc3QsIHBva2Vtb25JRF0uc29ydCgoYSwgYikgPT4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpKSksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZUxpc3QoKTtcbiAgfTtcblxuICByZW1vdmVGcm9tRmF2b3JpdGVzID0gYXN5bmMgKHBva2Vtb25JRDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuICAgIGNvbnN0IGZhdm9yaXRlTGlzdCA9IGF3YWl0IHRoaXMuZ2V0RmF2b3JpdGVMaXN0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oRkFWT1JJVEVfUE9LRU1PTlNfS0VZLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZUxpc3QuZmlsdGVyKChpZCkgPT4gaWQgIT09IHBva2Vtb25JRCkpKTtcbiAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZUxpc3QoKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiIsImV4cG9ydCBjb25zdCBVUkxfQkFTRSA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyJztcblxuZXhwb3J0IGNvbnN0IFBPS0VNT05fVVJMUyA9IHtcbiAgZ2V0UG9rZW1vbjogYCR7VVJMX0JBU0V9L3Bva2Vtb25gLFxuICBnZXRQb2tlbW9uU3BlY2llczogYCR7VVJMX0JBU0V9L3Bva2Vtb24tc3BlY2llc2AsXG4gIGdldFBva2Vtb25TcHJpdGVzVXJsOiAobmFtZTogc3RyaW5nKSA9PiBgaHR0cHM6Ly9pbWcucG9rZW1vbmRiLm5ldC9zcHJpdGVzL2hvbWUvbm9ybWFsLyR7bmFtZX0ucG5nYCxcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBva2Vtb25TZXJ2aWNlIH0gZnJvbSAnLi9Qb2tlbW9uU2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9BdXRoU2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL1Bva2Vtb24nO1xuIiwiZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFBhcmFtcyBleHRlbmRzIHVua25vd25bXT4oXG4gIGZ1bmM6ICguLi5hcmdzOiBQYXJhbXMpID0+IHZvaWQsXG4gIHRpbWVvdXQgPSAzMDAsXG4pOiAoKC4uLmFyZ3M6IFBhcmFtcykgPT4gdm9pZCkgPT4ge1xuICBsZXQgdGltZXI6IE5vZGVKUy5UaW1lb3V0O1xuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtcykgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfSwgdGltZW91dCk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgRmllbGRWYWxpZGF0b3IgfSBmcm9tICdmb3JtaWsnO1xuXG5leHBvcnQgZW51bSBGb3JtVmFsaWRhdGlvbiB7XG4gIFJFUVVJUkVEID0gJ1JFUVVJUkVEJyxcbn1cblxuZXhwb3J0IGVudW0gRm9ybVZhbGlkYXRpb25XaXRoVmFsdWUge1xuICBNSU5fTEVOR1RIID0gJ01JTl9MRU5HVEgnLFxufVxuXG50eXBlIFZhbGlkYXRvciA9IHtcbiAgZXJyb3JNZXNzYWdlOiAoZmllbGROYW1lOiBzdHJpbmcpID0+IHN0cmluZztcbiAgdmFsaWRhdG9yOiAodmFsdWU6IHVua25vd24sIGNvbXBhcmF0aXZlVmFsdWU/OiB1bmtub3duKSA9PiBib29sZWFuO1xufTtcblxudHlwZSBWYWxpZGF0b3JPYmplY3QgPSB7XG4gIFtrZXkgaW4gRm9ybVZhbGlkYXRpb24gfCBGb3JtVmFsaWRhdGlvbldpdGhWYWx1ZV06IFZhbGlkYXRvcjtcbn07XG5cbnR5cGUgRm9ybVZhbGlkYXRpb25PYmplY3QgPSB7XG4gIHZhbGlkYXRvcjogRm9ybVZhbGlkYXRpb25XaXRoVmFsdWU7XG4gIHZhbHVlOiB1bmtub3duO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0aW9ucyA9IChcbiAgZmllbGROYW1lOiBzdHJpbmcsXG4gIHZhbGlkYXRpb25zOiAoRm9ybVZhbGlkYXRpb24gfCBGb3JtVmFsaWRhdGlvbk9iamVjdClbXSxcbik6IEZpZWxkVmFsaWRhdG9yID0+IHtcbiAgcmV0dXJuIChjdXJyZW50VmFsdWUpID0+IHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgdmFsaWRhdGlvbnMuZXZlcnkoKHZhbGlkYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb25OYW1lID0gaXNGb3JtVmFsaWRhdGlvbk9iamVjdCh2YWxpZGF0aW9uKSA/IHZhbGlkYXRpb24udmFsaWRhdG9yIDogdmFsaWRhdGlvbjtcbiAgICAgIGNvbnN0IHZhbGlkYXRvck9iaiA9IHZhbGlkYXRvck9iamVjdFt2YWxpZGF0aW9uTmFtZV0gYXMgVmFsaWRhdG9yO1xuICAgICAgY29uc3QgcmVzdWx0ID0gaXNGb3JtVmFsaWRhdGlvbk9iamVjdCh2YWxpZGF0aW9uKVxuICAgICAgICA/IHZhbGlkYXRvck9iai52YWxpZGF0b3IoY3VycmVudFZhbHVlLCB2YWxpZGF0aW9uLnZhbHVlKVxuICAgICAgICA6IHZhbGlkYXRvck9iai52YWxpZGF0b3IoY3VycmVudFZhbHVlKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIGVycm9yTWVzc2FnZSA9IHZhbGlkYXRvck9iai5lcnJvck1lc3NhZ2UoZmllbGROYW1lKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XG4gIH07XG59O1xuXG5jb25zdCB2YWxpZGF0b3JPYmplY3Q6IFZhbGlkYXRvck9iamVjdCA9IHtcbiAgW0Zvcm1WYWxpZGF0aW9uLlJFUVVJUkVEXToge1xuICAgIGVycm9yTWVzc2FnZTogKGZpZWxkTmFtZTogc3RyaW5nKSA9PiBgJHtmaWVsZE5hbWV9IGlzIHJlcXVpcmVkYCxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4gISF2YWx1ZSxcbiAgfSxcbiAgW0Zvcm1WYWxpZGF0aW9uV2l0aFZhbHVlLk1JTl9MRU5HVEhdOiB7XG4gICAgZXJyb3JNZXNzYWdlOiAoZmllbGROYW1lOiBzdHJpbmcpID0+IGAke2ZpZWxkTmFtZX0gcmVxdWlyZSAzIGNoYXJhY3RlcnMgbWluaW11bWAsXG4gICAgdmFsaWRhdG9yOiAodmFsdWUsIGNvbXBhcmF0aXZlVmFsdWUpID0+ICh2YWx1ZSBhcyBzdHJpbmcpLmxlbmd0aCA+PSAoY29tcGFyYXRpdmVWYWx1ZSBhcyBudW1iZXIpLFxuICB9LFxufTtcblxuZnVuY3Rpb24gaXNGb3JtVmFsaWRhdGlvbk9iamVjdCh2YWxpZGF0aW9uOiBGb3JtVmFsaWRhdGlvbiB8IEZvcm1WYWxpZGF0aW9uT2JqZWN0KTogdmFsaWRhdGlvbiBpcyBGb3JtVmFsaWRhdGlvbk9iamVjdCB7XG4gIHJldHVybiAodmFsaWRhdGlvbiBhcyBGb3JtVmFsaWRhdGlvbk9iamVjdCkudmFsaWRhdG9yICE9PSB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cjogc3RyaW5nKSA9PiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL0FzeW5jVXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9Gb3JtVmFsaWRhdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9TdHJpbmdGb3JtYXR0ZXInO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua181N2Jsb2Nrc190ZXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua181N2Jsb2Nrc190ZXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jbHN4X2Rpc3RfY2xzeF9tX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2QtYzEzZjZkXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=