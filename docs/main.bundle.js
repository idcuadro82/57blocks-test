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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9BcHAuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvRmllbGRzL1NlYXJjaC9TZWFyY2hJbnB1dC5zY3NzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9JbWFnZUxvYWRpbmcvSW1hZ2VMb2FkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZ092ZXJsYXkuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5zY3NzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9QYWdlQ29udGFpbmVyL1BhZ2VDb250YWluZXIuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbkNhcmQvUG9rZW1vbkNhcmQuc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vblBhbmVsL1Bva2Vtb25QYW5lbC5zY3NzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uVHlwZS9Qb2tlbW9uVHlwZS5zY3NzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0uc2NzcyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0xvZ2luL0xvZ2luUGFnZS5zY3NzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvUG9rZWRleC9Qb2tlZGV4UGFnZS5zY3NzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvUG9rZW1vbi9Qb2tlbW9uUGFnZS5zY3NzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvQXBwLnNjc3M/ZDhmMSIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvRmllbGRzL1NlYXJjaC9TZWFyY2hJbnB1dC5zY3NzPzYzNWUiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ltYWdlTG9hZGluZy9JbWFnZUxvYWRpbmcuc2Nzcz8wODM3Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmdPdmVybGF5LnNjc3M/YjcwMyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5zY3NzP2NiYjMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1BhZ2VDb250YWluZXIvUGFnZUNvbnRhaW5lci5zY3NzPzY2OTQiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25DYXJkL1Bva2Vtb25DYXJkLnNjc3M/ZDgxNiIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vblBhbmVsL1Bva2Vtb25QYW5lbC5zY3NzP2ZlYzkiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25UeXBlL1Bva2Vtb25UeXBlLnNjc3M/MGQ1MCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2luZGV4LnNjc3M/OTgzMCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0uc2Nzcz84ZWIwIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvTG9naW4vTG9naW5QYWdlLnNjc3M/OGY1NiIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL1Bva2VkZXgvUG9rZWRleFBhZ2Uuc2Nzcz85ZjIwIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvUG9rZW1vbi9Qb2tlbW9uUGFnZS5zY3NzPzkxMTUiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9CdXR0b25zL0J1dHRvbkxvYWRpbmcudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9CdXR0b25zL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9GaWVsZHMvSW5wdXQvSW5wdXQucHJvcHMudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL0ZpZWxkcy9JbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvRmllbGRzL1Bhc3N3b3JkL1Bhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvRmllbGRzL1Bhc3N3b3JkL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9GaWVsZHMvU2VhcmNoL1NlYXJjaElucHV0LnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvRmllbGRzL1NlYXJjaC9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvRmllbGRzL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9JbWFnZUxvYWRpbmcvSW1hZ2VMb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvSW1hZ2VMb2FkaW5nL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmdPdmVybGF5LnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9QYWdlQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbkNhcmQvUG9rZW1vbkNhcmQucHJvcHMudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25DYXJkL1Bva2Vtb25DYXJkLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbkNhcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25QYW5lbC9Qb2tlbW9uUGFuZWwudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uUGFuZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25UeXBlL1Bva2Vtb25UeXBlLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vblR5cGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29uc3RhbnRzL2RlZmF1bHRBc3NldHMudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb25zdGFudHMvcG9rZW1vblR5cGVzLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29udGV4dC9BdXRoUHJvdmlkZXIvQXV0aFByb3ZpZGVyLnByb3BzLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29udGV4dC9BdXRoUHJvdmlkZXIvQXV0aFByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnRleHQvQXV0aFByb3ZpZGVyL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29udGV4dC9Mb2FkaW5nUHJvdmlkZXIvTG9hZGluZ1Byb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnRleHQvTG9hZGluZ1Byb3ZpZGVyL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvY29udGV4dC9Qb2tlbW9uUHJvdmlkZXIvUG9rZW1vblByb3ZpZGVyLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb250ZXh0L1Bva2Vtb25Qcm92aWRlci9Qb2tlbW9uUHJvdmlkZXIucHJvcHMudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb250ZXh0L1Bva2Vtb25Qcm92aWRlci9Qb2tlbW9uUHJvdmlkZXIucmVkdWNlci50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnRleHQvUG9rZW1vblByb3ZpZGVyL1Bva2Vtb25Qcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9jb250ZXh0L1Bva2Vtb25Qcm92aWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2NvbnRleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9ob29rcy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2hvb2tzL3VzZVVuTW91bnRlZFJlZi50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvbW9kZWxzL0FQSS9MaXN0UmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9tb2RlbHMvQVBJL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvbW9kZWxzL0xvZ2luLnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvbW9kZWxzL1BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9tb2RlbHMvUG9rZW1vbi50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0RldGFpbHMvRGV0YWlsc1BhZ2UudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvRGV0YWlscy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0udHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvTG9naW4vTG9naW5Gb3JtL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvTG9naW4vTG9naW5QYWdlLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3BhZ2VzL0xvZ2luL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvUG9rZWRleC9Qb2tlZGV4UGFnZS50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9Qb2tlZGV4L2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvUG9rZW1vbi9Qb2tlbW9uUGFnZS50c3giLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9wYWdlcy9Qb2tlbW9uL2luZGV4LnRzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcGFnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9yb3V0ZXMvUHJvdGVjdGVkUm91dGUudHN4Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3QvLi9zcmMvcm91dGVzL1B1YmxpY1JvdXRlLnRzeCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3JvdXRlcy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3NlcnZpY2VzL1Bva2Vtb24vUG9rZW1vblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9zZXJ2aWNlcy9Qb2tlbW9uL2NvbmZpZy50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3NlcnZpY2VzL1Bva2Vtb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0Ly4vc3JjL3V0aWxzL0FzeW5jVXRpbHMudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy91dGlscy9Gb3JtVmFsaWRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy91dGlscy9TdHJpbmdGb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLzU3YmxvY2tzLXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vNTdibG9ja3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLzU3YmxvY2tzLXRlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly81N2Jsb2Nrcy10ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3B1YmxpYy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5hcHAtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMjAlIGF1dG87XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFwcC1uYXZiYXIge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvQXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBUkU7RUFDRSx5REFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQkRQWTtFQ1FaLGtCQUFBO0VBQ0EsV0FBQTtBQVVKO0FBUEU7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUFTSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3JjL3N0eWxlcy90aGVtZS5zY3NzJztcXG5cXG4uYXBwIHtcXG4gICYtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvcHVibGljL2JhY2tncm91bmQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAkbmF2YmFyLWhlaWdodDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICYtbmF2YmFyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zZWFyY2gtaW5wdXQge1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuLnNlYXJjaC1pbnB1dC5mb3JtLWZpZWxkLWNvbnRyb2wge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRmllbGRzL1NlYXJjaC9TZWFyY2hJbnB1dC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VhcmNoLWlucHV0IHtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuXFxuICAmLmZvcm0tZmllbGQtY29udHJvbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5pbWFnZS1sb2FkaW5nLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5pbWFnZS1sb2FkaW5nLXNwaW5uZXIge1xcbiAgYW5pbWF0aW9uOiAycyByb3RhdGUgbGluZWFyIGluZmluaXRlO1xcbn1cXG4uaW1hZ2UtbG9hZGluZy1zcGlubmVyOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuI2ltYWdlLWxvYWRpbmctc3Bpbm5lci1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9JbWFnZUxvYWRpbmcvSW1hZ2VMb2FkaW5nLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBUkU7RUFDRSx3QkFBQTtBQVVKO0FBUkU7RUFDRSxvQ0FBQTtBQVVKO0FBUkk7RUFDRSxpQkFBQTtBQVVOOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFRRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3JjL3N0eWxlcy90aGVtZS5zY3NzJztcXG5cXG4uaW1hZ2UtbG9hZGluZyB7XFxuICAmLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gICYtc3Bpbm5lciB7XFxuICAgIGFuaW1hdGlvbjogMnMgcm90YXRlIGxpbmVhciBpbmZpbml0ZTtcXG5cXG4gICAgJjpiZWZvcmUge1xcbiAgICAgIGZvbnQtc2l6ZTogZm9udC1zaXplKHBhZ2V0aXRsZSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI2ltYWdlLWxvYWRpbmctc3Bpbm5lci1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLmFwcC1sb2FkZXIge1xcbiAgYW5pbWF0aW9uOiAxcyByb3RhdGUgbGluZWFyIGluZmluaXRlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmFwcC1sb2FkaW5nIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogOTk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nT3ZlcmxheS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9yLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBUkE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVVGOztBQVBBO0VBQ0UsbUJBQUE7RUFDQSxzQkNOTTtFRE9OLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFVRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3JjL3N0eWxlcy9jb2xvci5zY3NzJztcXG5AaW1wb3J0ICdzcmMvc3R5bGVzL3RoZW1lLnNjc3MnO1xcblxcbi5hcHAtbG9hZGVyIHtcXG4gIGFuaW1hdGlvbjogMXMgcm90YXRlIGxpbmVhciBpbmZpbml0ZTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5hcHAtbG9hZGluZyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogOTk7XFxufVxcblwiLFwiJGJsYWNrOiAjMDAwO1xcbiRncmVlbjogIzAwODAwMDtcXG4kZ3JleTogIzk5OTtcXG4kZ3JleS1kYXJrOiAjMzMzO1xcbiRyZWQ6ICNmMDA7XFxuJHdoaXRlOiAjZmZmO1xcbiR5ZWxsb3c6ICNmZWQ1MDA7XFxuXFxuJGNzcy1yZXNldC1ncmV5OiAkZ3JleTtcXG4kY3NzLXJlc2V0LWdyZXktZGFyazogJGdyZXktZGFyaztcXG5cXG4kcGFnZS1jb250ZW50LWJhY2tncm91bmQ6ICR3aGl0ZTtcXG4kbGF5b3V0LWRpdmlkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEpO1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5hcHAtbmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hcHAtbmF2YmFyLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmFwcC1uYXZiYXItbGluayB7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLmFwcC1uYXZiYXItbGluazpob3ZlciBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYXBwLW5hdmJhci1saW5rIC5hY3RpdmUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5hcHAtbmF2YmFyLWxpbmsgYSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFwcC1uYXZiYXItbGluayBhICoge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4uYXBwLW5hdmJhci1saW5rLmhvbWUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjAwO1xcbn1cXG4uYXBwLW5hdmJhci1saW5rLmhvbWU6aG92ZXIgYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xcbn1cXG4uYXBwLW5hdmJhci1saW5rLmhvbWUgLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuLmFwcC1uYXZiYXItbGluay5kZXRhaWxzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwODAwMDtcXG59XFxuLmFwcC1uYXZiYXItbGluay5kZXRhaWxzOmhvdmVyIGEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcXG59XFxuLmFwcC1uYXZiYXItbGluay5kZXRhaWxzIC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9yLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JDZE07RURlTix3Q0FBQTtFQUNBLFlEbkJjO0VDb0JkLHVCQUFBO0VBQ0EsV0FBQTtBQUpGO0FBTUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUpKO0FBT0U7RUFDRSwwQkFBQTtFQUNBLFlBQUE7QUFMSjtBQU9JO0VBQ0UsV0M5QkU7QUR5QlI7QUFRSTtFQUNFLFdDbENFO0FENEJSO0FBU0k7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFQTjtBQVNNO0VBQ0Usa0JBQUE7QUFQUjtBQVdJO0VBL0NGLGtCQ0pJO0FEMkNOO0FBdENFO0VBQ0Usc0JDTkU7QUQ4Q047QUF0Q0U7RUFDRSxzQ0FBQTtBQXdDSjtBQUtJO0VBbERGLHFCQ1BNO0FEdURSO0FBL0NFO0VBQ0UseUJDVEk7QUQwRFI7QUEvQ0U7RUFDRSxzQ0FBQTtBQWlESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3JjL3N0eWxlcy9jb2xvci5zY3NzJztcXG5AaW1wb3J0ICdzcmMvc3R5bGVzL3RoZW1lLnNjc3MnO1xcblxcbiRkZXRhaWxzLWNvbG9yOiAkZ3JlZW47XFxuJGhvbWUtY29sb3I6ICRyZWQ7XFxuJGxpbmstYWN0aXZlLW9wYWNpdHk6IDAuNTtcXG5cXG5AbWl4aW4gbGluay1zdHlsZXMoJGNvbG9yKSB7XFxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcXG4gICY6aG92ZXIgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXG4gIH1cXG4gIC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvciwgJGxpbmstYWN0aXZlLW9wYWNpdHkpO1xcbiAgfVxcbn1cXG5cXG4uYXBwLW5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgYm9yZGVyLXRvcDogYm9yZGVyKCRsYXlvdXQtZGl2aWRlci1jb2xvcik7XFxuICBoZWlnaHQ6ICRuYXZiYXItaGVpZ2h0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gICYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gICYtbGluayB7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAkYmxhY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG5cXG4gICAgJjpob3ZlciBhIHtcXG4gICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5hY3RpdmUge1xcbiAgICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgYSB7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgKiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHNwYWNpbmcoMik7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYuaG9tZSB7XFxuICAgICAgQGluY2x1ZGUgbGluay1zdHlsZXMoJGhvbWUtY29sb3IpO1xcbiAgICB9XFxuICAgICYuZGV0YWlscyB7XFxuICAgICAgQGluY2x1ZGUgbGluay1zdHlsZXMoJGRldGFpbHMtY29sb3IpO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGJsYWNrOiAjMDAwO1xcbiRncmVlbjogIzAwODAwMDtcXG4kZ3JleTogIzk5OTtcXG4kZ3JleS1kYXJrOiAjMzMzO1xcbiRyZWQ6ICNmMDA7XFxuJHdoaXRlOiAjZmZmO1xcbiR5ZWxsb3c6ICNmZWQ1MDA7XFxuXFxuJGNzcy1yZXNldC1ncmV5OiAkZ3JleTtcXG4kY3NzLXJlc2V0LWdyZXktZGFyazogJGdyZXktZGFyaztcXG5cXG4kcGFnZS1jb250ZW50LWJhY2tncm91bmQ6ICR3aGl0ZTtcXG4kbGF5b3V0LWRpdmlkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEpO1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBtYXgtd2lkdGg6IDEyODBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFnZS1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBhZ2UtY29udGVudCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDMycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBhZ2UtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnBhZ2UtdGl0bGUtY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogOTBweDtcXG4gIHBhZGRpbmc6IDAgMzJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9QYWdlQ29udGFpbmVyL1BhZ2VDb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsOEJBQUE7QUNIRjs7QURtREE7RUFDRTtJQUNFLHVCQUFBO0VDaERGO0VEa0RBO0lBQ0UseUJBQUE7RUNoREY7QUFDRjtBQUxBO0VBQ0Usc0JDRk07RURHTixvQ0FBQTtFQUNBLGlCQU5tQjtFQU9uQixZQUFBO0VBQ0EsV0FBQTtBQU9GO0FBTEU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFPSjtBQUpFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBTUo7QUFIRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUtKO0FBSEk7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFsQ1U7RUFtQ1YsZUFBQTtBQUtOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRiYXNlLXVuaXQ6IDhweDtcXG4kYmFzZS1mb250LXNpemU6IDFyZW07XFxuJG5hdmJhci1oZWlnaHQ6IDcwcHg7XFxuXFxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXIoJGNvbG9yOiAkZ3JleSkge1xcbiAgQHJldHVybiAxcHggc29saWQgJGNvbG9yO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyLXJhZGl1cygkc2l6ZTogYnMpIHtcXG4gICRyYWRpdXM6ICRiYXNlLXVuaXQ7XFxuICBAaWYgJHNpemUgPT0gYnMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGcge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc20ge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJHJhZGl1cztcXG59XFxuXFxuQGZ1bmN0aW9uIHNwYWNpbmcoJHNwYWNlOiAxKSB7XFxuICAkYmFzZS1zcGFjZTogJGJhc2UtdW5pdDtcXG4gIEByZXR1cm4gJGJhc2Utc3BhY2UgKiAkc3BhY2U7XFxufVxcblxcbkBmdW5jdGlvbiBmb250LXNpemUoJHNpemU6IG5vcm1hbCkge1xcbiAgJGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcbiAgQGlmICRzaXplID09IG5vcm1hbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBoZWFkZXIge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc3VidGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMS4yO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBwYWdldGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMi41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYWJlbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAwLjc1O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRmb250LXNpemU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdzcmMvc3R5bGVzL2NvbG9yLnNjc3MnO1xcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvdGhlbWUuc2Nzcyc7XFxuXFxuJHBhZ2UtY29udGVudC13aWR0aDogMTI4MHB4O1xcbiRoZWFkZXItaGVpZ2h0OiA5MHB4O1xcblxcbi5wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwYWdlLWNvbnRlbnQtYmFja2dyb3VuZDtcXG4gIGJvcmRlcjogYm9yZGVyKCRsYXlvdXQtZGl2aWRlci1jb2xvcik7XFxuICBtYXgtd2lkdGg6ICRwYWdlLWNvbnRlbnQtd2lkdGg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gICYtY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICRoZWFkZXItaGVpZ2h0KTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZzogc3BhY2luZyg0KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBmb250LXNpemUocGFnZXRpdGxlKTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuXFxuICAgICYtY29udGFpbmVyIHtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGJvcmRlci1ib3R0b206IGJvcmRlcigkbGF5b3V0LWRpdmlkZXItY29sb3IpO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XFxuICAgICAgcGFkZGluZzogMCBzcGFjaW5nKDQpO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGJsYWNrOiAjMDAwO1xcbiRncmVlbjogIzAwODAwMDtcXG4kZ3JleTogIzk5OTtcXG4kZ3JleS1kYXJrOiAjMzMzO1xcbiRyZWQ6ICNmMDA7XFxuJHdoaXRlOiAjZmZmO1xcbiR5ZWxsb3c6ICNmZWQ1MDA7XFxuXFxuJGNzcy1yZXNldC1ncmV5OiAkZ3JleTtcXG4kY3NzLXJlc2V0LWdyZXktZGFyazogJGdyZXktZGFyaztcXG5cXG4kcGFnZS1jb250ZW50LWJhY2tncm91bmQ6ICR3aGl0ZTtcXG4kbGF5b3V0LWRpdmlkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEpO1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5wb2tlbW9uLWNhcmQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnBva2Vtb24tY2FyZC5wcmVzc2FibGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBva2Vtb24taW1hZ2Uge1xcbiAgd2lkdGg6IDEyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4ucG9rZW1vbi1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5wb2tlbW9uLWZhdm9yaXRlLWJ1dHRvbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNnB4O1xcbiAgdG9wOiAxNnB4O1xcbn1cXG4ucG9rZW1vbi1mYXZvcml0ZS1idXR0b20gLmZhcyB7XFxuICBjb2xvcjogI2ZlZDUwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uQ2FyZC9Qb2tlbW9uQ2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9yLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBUEU7RUFDRSxtQkFBQTtFQUNBLHNCQ0RJO0VERUosYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFTSjtBQVBJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBU047QUFMRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQU9KO0FBSkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFNSjtBQUhFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUtKO0FBSEk7RUFDRSxjQy9CRztBRG9DVFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3JjL3N0eWxlcy9jb2xvci5zY3NzJztcXG5AaW1wb3J0ICdzcmMvc3R5bGVzL3RoZW1lLnNjc3MnO1xcblxcbi5wb2tlbW9uIHtcXG4gICYtY2FyZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdlLWNvbnRlbnQtYmFja2dyb3VuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgJi5wcmVzc2FibGU6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcGFnZS1jb250ZW50LWJhY2tncm91bmQsIDUlKTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTI4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IHNwYWNpbmcoKTtcXG4gIH1cXG5cXG4gICYtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuXFxuICAmLWZhdm9yaXRlLWJ1dHRvbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiBzcGFjaW5nKDIpO1xcbiAgICB0b3A6IHNwYWNpbmcoMik7XFxuXFxuICAgIC5mYXMge1xcbiAgICAgIGNvbG9yOiAkeWVsbG93O1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGJsYWNrOiAjMDAwO1xcbiRncmVlbjogIzAwODAwMDtcXG4kZ3JleTogIzk5OTtcXG4kZ3JleS1kYXJrOiAjMzMzO1xcbiRyZWQ6ICNmMDA7XFxuJHdoaXRlOiAjZmZmO1xcbiR5ZWxsb3c6ICNmZWQ1MDA7XFxuXFxuJGNzcy1yZXNldC1ncmV5OiAkZ3JleTtcXG4kY3NzLXJlc2V0LWdyZXktZGFyazogJGdyZXktZGFyaztcXG5cXG4kcGFnZS1jb250ZW50LWJhY2tncm91bmQ6ICR3aGl0ZTtcXG4kbGF5b3V0LWRpdmlkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEpO1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5wb2tlbW9uLXBhbmVsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wb2tlbW9uLXBhbmVsLWRhdGEtY29udGFpbmVyIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcbi5wb2tlbW9uLXBhbmVsLWRhdGEtY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wb2tlbW9uLXBhbmVsLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5wb2tlbW9uLXBhbmVsLWltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4ucG9rZW1vbi1wYW5lbC1yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4ucG9rZW1vbi1wYW5lbC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucG9rZW1vbi1wYW5lbC1zdGF0cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucG9rZW1vbi1wYW5lbC1zdGF0cyAuc3RhdC1yb3cge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnBva2Vtb24tcGFuZWwtc3RhdHMgLnN0YXQtZWxlbWVudCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiB0YWJsZS1jb2x1bW47XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbi5wb2tlbW9uLXBhbmVsLXN0YXRzIC5zdGF0LWVsZW1lbnQuY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uUGFuZWwvUG9rZW1vblBhbmVsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBUkE7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7QUFVRjtBQVJFO0VBQ0UseUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFVSjtBQVBFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVNKO0FBTkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFRSjtBQUxFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFPSjtBQUpFO0VBQ0Usa0JBQUE7QUFNSjtBQUhFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUtKO0FBRkU7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSUo7QUFGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFJTjtBQUZJO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUlOO0FBRk07RUFDRSxrQkFBQTtBQUlSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRiYXNlLXVuaXQ6IDhweDtcXG4kYmFzZS1mb250LXNpemU6IDFyZW07XFxuJG5hdmJhci1oZWlnaHQ6IDcwcHg7XFxuXFxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXIoJGNvbG9yOiAkZ3JleSkge1xcbiAgQHJldHVybiAxcHggc29saWQgJGNvbG9yO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyLXJhZGl1cygkc2l6ZTogYnMpIHtcXG4gICRyYWRpdXM6ICRiYXNlLXVuaXQ7XFxuICBAaWYgJHNpemUgPT0gYnMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGcge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc20ge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJHJhZGl1cztcXG59XFxuXFxuQGZ1bmN0aW9uIHNwYWNpbmcoJHNwYWNlOiAxKSB7XFxuICAkYmFzZS1zcGFjZTogJGJhc2UtdW5pdDtcXG4gIEByZXR1cm4gJGJhc2Utc3BhY2UgKiAkc3BhY2U7XFxufVxcblxcbkBmdW5jdGlvbiBmb250LXNpemUoJHNpemU6IG5vcm1hbCkge1xcbiAgJGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcbiAgQGlmICRzaXplID09IG5vcm1hbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBoZWFkZXIge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc3VidGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMS4yO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBwYWdldGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMi41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYWJlbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAwLjc1O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRmb250LXNpemU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdzcmMvc3R5bGVzL2NvbG9yLnNjc3MnO1xcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvdGhlbWUuc2Nzcyc7XFxuXFxuLnBva2Vtb24tcGFuZWwge1xcbiAgYm9yZGVyOiBib3JkZXIoJGxheW91dC1kaXZpZGVyLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAmLWRhdGEtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLWxlZnQ6IGJvcmRlcigkbGF5b3V0LWRpdmlkZXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogc3BhY2luZygzKTtcXG4gIH1cXG5cXG4gICYtZGF0YS1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICYtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZShub3JtYWwpO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgfVxcblxcbiAgJi1pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICAmLXJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IHNwYWNpbmcoKTtcXG4gIH1cXG5cXG4gICYtdGl0bGUge1xcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgJi1zdGF0cyB7XFxuICAgIGJvcmRlcjogYm9yZGVyKCRsYXlvdXQtZGl2aWRlci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgLnN0YXQtcm93IHtcXG4gICAgICBjbGVhcjogYm90aDtcXG4gICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG4gICAgLnN0YXQtZWxlbWVudCB7XFxuICAgICAgYm9yZGVyOiBib3JkZXIoJGxheW91dC1kaXZpZGVyLWNvbG9yKTtcXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jb2x1bW47XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgcGFkZGluZzogc3BhY2luZygpO1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuXFxuICAgICAgJi5jZW50ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ucG9rZW1vbi10eXBlIHtcXG4gIGJhY2tncm91bmQ6ICM2YWE1OTY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHdpZHRoOiA2NnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25UeXBlL1Bva2Vtb25UeXBlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBUkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFVRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS11bml0OiA4cHg7XFxuJGJhc2UtZm9udC1zaXplOiAxcmVtO1xcbiRuYXZiYXItaGVpZ2h0OiA3MHB4O1xcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyKCRjb2xvcjogJGdyZXkpIHtcXG4gIEByZXR1cm4gMXB4IHNvbGlkICRjb2xvcjtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlci1yYWRpdXMoJHNpemU6IGJzKSB7XFxuICAkcmFkaXVzOiAkYmFzZS11bml0O1xcbiAgQGlmICRzaXplID09IGJzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxnIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHNtIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geHMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0geGwge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS41O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRyYWRpdXM7XFxufVxcblxcbkBmdW5jdGlvbiBzcGFjaW5nKCRzcGFjZTogMSkge1xcbiAgJGJhc2Utc3BhY2U6ICRiYXNlLXVuaXQ7XFxuICBAcmV0dXJuICRiYXNlLXNwYWNlICogJHNwYWNlO1xcbn1cXG5cXG5AZnVuY3Rpb24gZm9udC1zaXplKCRzaXplOiBub3JtYWwpIHtcXG4gICRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gIEBpZiAkc2l6ZSA9PSBub3JtYWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gaGVhZGVyIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHN1YnRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDEuMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gcGFnZXRpdGxlIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDIuNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFiZWwge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkZm9udC1zaXplO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3JjL3N0eWxlcy9jb2xvci5zY3NzJztcXG5AaW1wb3J0ICdzcmMvc3R5bGVzL3RoZW1lLnNjc3MnO1xcblxcbi5wb2tlbW9uLXR5cGUge1xcbiAgYmFja2dyb3VuZDogIzZhYTU5NjtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBib3JkZXI6IGJvcmRlcihyZ2JhKDAsIDAsIDAsIDAuMikpO1xcbiAgYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyhzbSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShsYWJlbCk7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIG1hcmdpbi1yaWdodDogc3BhY2luZygpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYigwIDAgMCAvIDcwJSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgd2lkdGg6IDY2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuKjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbnNwYW4sXFxubGFiZWwsXFxuaW5wdXQsXFxuYSxcXG5idXR0b24sXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhLFxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuYSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmE6Zm9jdXMsIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLmJ1dHRvbiwgLmJ1dHRvbi10ZXJ0aWFyeSwgLmJ1dHRvbi1zZWNvbmRhcnksIC5idXR0b24tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uLXRlcnRpYXJ5OmhvdmVyLCAuYnV0dG9uLXNlY29uZGFyeTpob3ZlciwgLmJ1dHRvbi1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcbi5idXR0b246Zm9jdXMsIC5idXR0b24tdGVydGlhcnk6Zm9jdXMsIC5idXR0b24tc2Vjb25kYXJ5OmZvY3VzLCAuYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjYjNiM2IzO1xcbn1cXG4uYnV0dG9uOmRpc2FibGVkLCAuYnV0dG9uLXRlcnRpYXJ5OmRpc2FibGVkLCAuYnV0dG9uLXNlY29uZGFyeTpkaXNhYmxlZCwgLmJ1dHRvbi1wcmltYXJ5OmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2IzYjM7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4uZm9ybS1maWVsZCB7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZvcm0tZmllbGQtY29udHJvbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLmZvcm0tZmllbGQtY29udHJvbC1lcnJvciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjAwO1xcbn1cXG4uZm9ybS1maWVsZC1lcnJvciB7XFxuICBjb2xvcjogI2YwMDtcXG59XFxuLmZvcm0tZmllbGQtbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4uZm9ybS1maWVsZC1tZXNzYWdlIHtcXG4gIGJvdHRvbTogMHB4O1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRhaW5lci1pY29uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZvcm0tZmllbGQtY29udGFpbmVyLWljb24gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRhaW5lci1pY29uIGlucHV0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRhaW5lci1pY29uIC5hY3Rpb24taWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3Iuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvcm0uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7O0FER0E7Ozs7Ozs7Ozs7Ozs7O0VBY0UsV0V0QlU7RUZ1QlYsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTs7OztFQUlFLFNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUNBRjtBREVFO0VBRUUsV0VwRVE7RUZxRVIscUJBQUE7QUNESjs7QURLQTs7RUFFRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSxXRWxGSztFRm1GTCxVQUFBO0FDRkY7O0FES0E7O0VBRUUsbUJBQUE7QUNGRjs7QUVwRkE7RUFDRSw4QkFBQTtBRnVGRjs7QUV2Q0E7RUFDRTtJQUNFLHVCQUFBO0VGMENGO0VFeENBO0lBQ0UseUJBQUE7RUYwQ0Y7QUFDRjtBRzlGQTtFQUNFLHNCRkxVO0VFTVYsV0ZKTTtFRUtOLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUhnR0Y7QUc5RkU7RUFDRSx5QkFBQTtBSGdHSjtBRzlGRTtFQUNFLHlCQUFBO0VBQ0EsbUNBQUE7QUhnR0o7QUc5RkU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBSGdHSjs7QUl2SEU7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUowSEo7QUl4SEk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBSjBITjtBSXhITTtFQUNFLHNCQUFBO0FKMEhSO0FJdEhJO0VBQ0UsV0hmQTtBRHVJTjtBSXJISTtFQUNFLGtCQUFBO0FKdUhOO0FJcEhJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FKc0hOO0FJbkhJO0VBQ0Usa0JBQUE7QUpxSE47QUluSE07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUpxSFI7QUlsSE07RUFDRSxtQkFBQTtBSm9IUjtBSWpITTtFQUNFLGVBQUE7QUptSFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgJjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuc3BhbixcXG5sYWJlbCxcXG5pbnB1dCxcXG5hLFxcbmJ1dHRvbixcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6ICRjc3MtcmVzZXQtZ3JleS1kYXJrO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhLFxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuYSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxuICAmOmZvY3VzLFxcbiAgJjphY3RpdmUge1xcbiAgICBjb2xvcjogJGNzcy1yZXNldC1ncmV5LWRhcms7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogJGNzcy1yZXNldC1ncmV5O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXCIsXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbio6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5zcGFuLFxcbmxhYmVsLFxcbmlucHV0LFxcbmEsXFxuYnV0dG9uLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSxcXG5idXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmZvY3VzLCBhOmFjdGl2ZSB7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzk5OTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5idXR0b24sIC5idXR0b24tdGVydGlhcnksIC5idXR0b24tc2Vjb25kYXJ5LCAuYnV0dG9uLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbi10ZXJ0aWFyeTpob3ZlciwgLmJ1dHRvbi1zZWNvbmRhcnk6aG92ZXIsIC5idXR0b24tcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbn1cXG4uYnV0dG9uOmZvY3VzLCAuYnV0dG9uLXRlcnRpYXJ5OmZvY3VzLCAuYnV0dG9uLXNlY29uZGFyeTpmb2N1cywgLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggI2IzYjNiMztcXG59XFxuLmJ1dHRvbjpkaXNhYmxlZCwgLmJ1dHRvbi10ZXJ0aWFyeTpkaXNhYmxlZCwgLmJ1dHRvbi1zZWNvbmRhcnk6ZGlzYWJsZWQsIC5idXR0b24tcHJpbWFyeTpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmZvcm0tZmllbGQge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRyb2wge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRyb2wtZXJyb3Ige1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwMDtcXG59XFxuLmZvcm0tZmllbGQtZXJyb3Ige1xcbiAgY29sb3I6ICNmMDA7XFxufVxcbi5mb3JtLWZpZWxkLWxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmZvcm0tZmllbGQtbWVzc2FnZSB7XFxuICBib3R0b206IDBweDtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uZm9ybS1maWVsZC1jb250YWluZXItaWNvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mb3JtLWZpZWxkLWNvbnRhaW5lci1pY29uIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDhweDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uZm9ybS1maWVsZC1jb250YWluZXItaWNvbiBpbnB1dCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbn1cXG4uZm9ybS1maWVsZC1jb250YWluZXItaWNvbiAuYWN0aW9uLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIixcIiRibGFjazogIzAwMDtcXG4kZ3JlZW46ICMwMDgwMDA7XFxuJGdyZXk6ICM5OTk7XFxuJGdyZXktZGFyazogIzMzMztcXG4kcmVkOiAjZjAwO1xcbiR3aGl0ZTogI2ZmZjtcXG4keWVsbG93OiAjZmVkNTAwO1xcblxcbiRjc3MtcmVzZXQtZ3JleTogJGdyZXk7XFxuJGNzcy1yZXNldC1ncmV5LWRhcms6ICRncmV5LWRhcms7XFxuXFxuJHBhZ2UtY29udGVudC1iYWNrZ3JvdW5kOiAkd2hpdGU7XFxuJGxheW91dC1kaXZpZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xKTtcXG5cXG5cIixcIiRiYXNlLXVuaXQ6IDhweDtcXG4kYmFzZS1mb250LXNpemU6IDFyZW07XFxuJG5hdmJhci1oZWlnaHQ6IDcwcHg7XFxuXFxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXIoJGNvbG9yOiAkZ3JleSkge1xcbiAgQHJldHVybiAxcHggc29saWQgJGNvbG9yO1xcbn1cXG5cXG5AZnVuY3Rpb24gYm9yZGVyLXJhZGl1cygkc2l6ZTogYnMpIHtcXG4gICRyYWRpdXM6ICRiYXNlLXVuaXQ7XFxuICBAaWYgJHNpemUgPT0gYnMge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGcge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMS4yNTtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc20ge1xcbiAgICAkcmFkaXVzOiAkcmFkaXVzICogMC41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJHJhZGl1cztcXG59XFxuXFxuQGZ1bmN0aW9uIHNwYWNpbmcoJHNwYWNlOiAxKSB7XFxuICAkYmFzZS1zcGFjZTogJGJhc2UtdW5pdDtcXG4gIEByZXR1cm4gJGJhc2Utc3BhY2UgKiAkc3BhY2U7XFxufVxcblxcbkBmdW5jdGlvbiBmb250LXNpemUoJHNpemU6IG5vcm1hbCkge1xcbiAgJGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcbiAgQGlmICRzaXplID09IG5vcm1hbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBoZWFkZXIge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMjtcXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gc3VidGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMS4yO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBwYWdldGl0bGUge1xcbiAgICAkZm9udC1zaXplOiAkZm9udC1zaXplICogMi41O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYWJlbCB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAwLjc1O1xcbiAgfSBAZWxzZSB7XFxuICAgIEBlcnJvciBcXFwiVW5rbm93biBzaXplICN7JHNpemV9LlxcXCI7XFxuICB9XFxuICBAcmV0dXJuICRmb250LXNpemU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsXCIkdGludC1wZXJjZW50YWdlOiA1JTtcXG4kdGludC1wZXJjZW50YWdlLWRpc2FibGVkOiA1MCU7XFxuXFxuQGZ1bmN0aW9uIGJ1dHRvbi1zaGFkb3coJGNvbG9yOiAkd2hpdGUpIHtcXG4gIEByZXR1cm4gMHB4IDBweCAwcHggMnB4IGxpZ2h0ZW4oJGNvbG9yLCA1MCUpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWRhcms7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogc3BhY2luZygyKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRncmV5LWRhcmssICR0aW50LXBlcmNlbnRhZ2UpO1xcbiAgfVxcbiAgJjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZ3JleS1kYXJrLCAkdGludC1wZXJjZW50YWdlKTtcXG4gICAgYm94LXNoYWRvdzogYnV0dG9uLXNoYWRvdygkZ3JleS1kYXJrKTtcXG4gIH1cXG4gICY6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRncmV5LWRhcmssICR0aW50LXBlcmNlbnRhZ2UtZGlzYWJsZWQpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBjdXJzb3I6IGF1dG87XFxuICB9XFxufVxcblxcbi5idXR0b24tcHJpbWFyeSB7XFxuICBAZXh0ZW5kIC5idXR0b247XFxufVxcblxcbi5idXR0b24tc2Vjb25kYXJ5IHtcXG4gIEBleHRlbmQgLmJ1dHRvbjtcXG59XFxuXFxuLmJ1dHRvbi10ZXJ0aWFyeSB7XFxuICBAZXh0ZW5kIC5idXR0b247XFxufVxcblwiLFwiLmZvcm0ge1xcbiAgJi1maWVsZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiBzcGFjaW5nKDIpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICYtY29udHJvbCB7XFxuICAgICAgYm9yZGVyOiBib3JkZXIoKTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiBzcGFjaW5nKDIpO1xcbiAgICAgIHBhZGRpbmc6IHNwYWNpbmcoKTtcXG5cXG4gICAgICAmLWVycm9yIHtcXG4gICAgICAgIGJvcmRlcjogYm9yZGVyKCRyZWQpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLWVycm9yIHtcXG4gICAgICBjb2xvcjogJHJlZDtcXG4gICAgfVxcblxcbiAgICAmLWxhYmVsIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiBzcGFjaW5nKCk7XFxuICAgIH1cXG5cXG4gICAgJi1tZXNzYWdlIHtcXG4gICAgICBib3R0b206IDBweDtcXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuXFxuICAgICYtY29udGFpbmVyLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICBpIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiBzcGFjaW5nKCk7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICB9XFxuXFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogc3BhY2luZyg0KTtcXG4gICAgICB9XFxuXFxuICAgICAgLmFjdGlvbi1pY29uIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtcHR5LWxpc3QtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IGZvbnQtc2l6ZShzdWJ0aXRsZSk7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLmxvZ2luLWZvcm0ge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmxvZ2luLWZvcm0tZmllbGRzIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBSEE7RUFMRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVdGO0FBTEU7RUFSQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQVFFLG1CQUFBO0FBU0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdGhlbWUuc2Nzcyc7XFxuXFxuQG1peGluIGZvcm0tbGF5b3V0KCkge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgQGluY2x1ZGUgZm9ybS1sYXlvdXQ7XFxuXFxuICAmLWZpZWxkcyB7XFxuICAgIEBpbmNsdWRlIGZvcm0tbGF5b3V0O1xcbiAgICBtYXJnaW4tYm90dG9tOiBzcGFjaW5nKDIpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ubG9naW4tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxvZ2luLWZvcm0tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG4ubG9naW4tbG9nbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTZweCBhdXRvIDQwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhZ2VzL0xvZ2luL0xvZ2luUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9yLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBUEU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBU0o7QUFORTtFQUNFLHNCQ1JJO0VEU0osb0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTEU7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBT0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvY29sb3Iuc2Nzcyc7XFxuQGltcG9ydCAnc3JjL3N0eWxlcy90aGVtZS5zY3NzJztcXG5cXG4ubG9naW4ge1xcbiAgJi1jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICYtZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZS1jb250ZW50LWJhY2tncm91bmQ7XFxuICAgIGJvcmRlcjogYm9yZGVyKCRsYXlvdXQtZGl2aWRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMyk7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gIH1cXG5cXG4gICYtbG9nbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IHNwYWNpbmcoMikgYXV0byBzcGFjaW5nKDUpO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICB9XFxufVxcblwiLFwiJGJsYWNrOiAjMDAwO1xcbiRncmVlbjogIzAwODAwMDtcXG4kZ3JleTogIzk5OTtcXG4kZ3JleS1kYXJrOiAjMzMzO1xcbiRyZWQ6ICNmMDA7XFxuJHdoaXRlOiAjZmZmO1xcbiR5ZWxsb3c6ICNmZWQ1MDA7XFxuXFxuJGNzcy1yZXNldC1ncmV5OiAkZ3JleTtcXG4kY3NzLXJlc2V0LWdyZXktZGFyazogJGdyZXktZGFyaztcXG5cXG4kcGFnZS1jb250ZW50LWJhY2tncm91bmQ6ICR3aGl0ZTtcXG4kbGF5b3V0LWRpdmlkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEpO1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiBmb250LXNpemUoc3VidGl0bGUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5wb2tlbW9uLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG4ucG9rZW1vbi1wYWdpbmF0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9Qb2tlZGV4L1Bva2VkZXhQYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw4QkFBQTtBQ0hGOztBRG1EQTtFQUNFO0lBQ0UsdUJBQUE7RUNoREY7RURrREE7SUFDRSx5QkFBQTtFQ2hERjtBQUNGO0FBUkU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxTQUFBO0FBVUo7QUFQRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBU0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtdW5pdDogOHB4O1xcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcXG4kbmF2YmFyLWhlaWdodDogNzBweDtcXG5cXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogZm9udC1zaXplKHN1YnRpdGxlKTtcXG59XFxuXFxuQGZ1bmN0aW9uIGJvcmRlcigkY29sb3I6ICRncmV5KSB7XFxuICBAcmV0dXJuIDFweCBzb2xpZCAkY29sb3I7XFxufVxcblxcbkBmdW5jdGlvbiBib3JkZXItcmFkaXVzKCRzaXplOiBicykge1xcbiAgJHJhZGl1czogJGJhc2UtdW5pdDtcXG4gIEBpZiAkc2l6ZSA9PSBicyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAxLjI1O1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XFxuICAgICRyYWRpdXM6ICRyYWRpdXMgKiAwLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhzIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDAuMjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHhsIHtcXG4gICAgJHJhZGl1czogJHJhZGl1cyAqIDEuNTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAZXJyb3IgXFxcIlVua25vd24gc2l6ZSAjeyRzaXplfS5cXFwiO1xcbiAgfVxcbiAgQHJldHVybiAkcmFkaXVzO1xcbn1cXG5cXG5AZnVuY3Rpb24gc3BhY2luZygkc3BhY2U6IDEpIHtcXG4gICRiYXNlLXNwYWNlOiAkYmFzZS11bml0O1xcbiAgQHJldHVybiAkYmFzZS1zcGFjZSAqICRzcGFjZTtcXG59XFxuXFxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkc2l6ZTogbm9ybWFsKSB7XFxuICAkZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBAaWYgJHNpemUgPT0gbm9ybWFsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDE7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGhlYWRlciB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBzdWJ0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAxLjI7XFxuICB9IEBlbHNlIGlmICRzaXplID09IHBhZ2V0aXRsZSB7XFxuICAgICRmb250LXNpemU6ICRmb250LXNpemUgKiAyLjU7XFxuICB9IEBlbHNlIGlmICRzaXplID09IGxhYmVsIHtcXG4gICAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XFxuICB9IEBlbHNlIHtcXG4gICAgQGVycm9yIFxcXCJVbmtub3duIHNpemUgI3skc2l6ZX0uXFxcIjtcXG4gIH1cXG4gIEByZXR1cm4gJGZvbnQtc2l6ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdGhlbWUuc2Nzcyc7XFxuXFxuLnBva2Vtb24ge1xcbiAgJi1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XFxuICAgIGdhcDogc3BhY2luZygyKTtcXG4gIH1cXG5cXG4gICYtcGFnaW5hdG9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9rZW1vbi1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL1Bva2Vtb24vUG9rZW1vblBhZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBva2Vtb24tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL0FwcC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vQXBwLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1NlYXJjaElucHV0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9TZWFyY2hJbnB1dC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9JbWFnZUxvYWRpbmcuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL0ltYWdlTG9hZGluZy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Mb2FkaW5nT3ZlcmxheS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vTG9hZGluZ092ZXJsYXkuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vTmF2YmFyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9OYXZiYXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUGFnZUNvbnRhaW5lci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUGFnZUNvbnRhaW5lci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Qb2tlbW9uQ2FyZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUG9rZW1vbkNhcmQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUG9rZW1vblBhbmVsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Qb2tlbW9uUGFuZWwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUG9rZW1vblR5cGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1Bva2Vtb25UeXBlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Mb2dpbkZvcm0uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL0xvZ2luRm9ybS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Mb2dpblBhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL0xvZ2luUGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9Qb2tlZGV4UGFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUG9rZWRleFBhZ2Uuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vUG9rZW1vblBhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL1Bva2Vtb25QYWdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciwgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyLCBMb2FkaW5nUHJvdmlkZXIsIFBva2Vtb25Qcm92aWRlciB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgeyBEZXRhaWxzUGFnZSwgTG9naW5QYWdlLCBQb2tlZGV4UGFnZSwgUG9rZW1vblBhZ2UgfSBmcm9tICcuL3BhZ2VzJztcbmltcG9ydCB7IFByb3RlY3RlZFJvdXRlLCBQdWJsaWNSb3V0ZSwgUk9VVEVTIH0gZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHsgQXBwTmF2YmFyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0ICcuL0FwcC5zY3NzJztcblxuY29uc3QgQXBwOiBGQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPExvYWRpbmdQcm92aWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8RGV0YWlsc1BhZ2UgLz5cbiAgICAgICAgICAgICAgICAgIDwvUHJvdGVjdGVkUm91dGU+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGg9e1JPVVRFUy5kZXRhaWxzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICAgIDxQb2tlbW9uUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQcm90ZWN0ZWRSb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUHJvdGVjdGVkUm91dGU+XG4gICAgICAgICAgICAgICAgICA8L1Bva2Vtb25Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aD17Uk9VVEVTLmhvbWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Um91dGUgZWxlbWVudD17PFBva2VkZXhQYWdlIC8+fSBwYXRoPVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgZWxlbWVudD17PFBva2Vtb25QYWdlIC8+fSBwYXRoPVwiOnBva2Vtb25JRFwiIC8+XG4gICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFB1YmxpY1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8TG9naW5QYWdlIC8+XG4gICAgICAgICAgICAgICAgICA8L1B1YmxpY1JvdXRlPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoPXtST1VURVMubG9naW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8TmF2aWdhdGUgdG89e1JPVVRFUy5ob21lfSAvPn0gcGF0aD1cIipcIiAvPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICA8QXBwTmF2YmFyIC8+XG4gICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Mb2FkaW5nUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJ1dHRvbkxvYWRpbmc6IEZDPFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiAmIHsgdGV4dDogc3RyaW5nOyBpc0xvYWRpbmc6IGJvb2xlYW4gfT4gPSAoe1xuICBpc0xvYWRpbmcsXG4gIHRleHQsXG4gIC4uLmJ1dHRvblByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeVwiIGRpc2FibGVkPXtpc0xvYWRpbmd9IHR5cGU9XCJidXR0b25cIiB7Li4uYnV0dG9uUHJvcHN9PlxuICAgICAge3RleHR9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Mb2FkaW5nO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b25Mb2FkaW5nIH0gZnJvbSAnLi9CdXR0b25Mb2FkaW5nJztcbiIsImltcG9ydCB7IEZpZWxkQXR0cmlidXRlcyB9IGZyb20gJ2Zvcm1payc7XG5cbmV4cG9ydCB0eXBlIEN1c3RvbUlucHV0ID0ge1xuICBlcnJvcj86IGJvb2xlYW47XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHRvdWNoZWQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgSW5wdXRGaWVsZFByb3BzID0gRmllbGRBdHRyaWJ1dGVzPEN1c3RvbUlucHV0PjtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgSW5wdXRGaWVsZFByb3BzIH0gZnJvbSAnLi9JbnB1dC5wcm9wcyc7XG5cbmNvbnN0IElucHV0RmllbGQ6IEZDPElucHV0RmllbGRQcm9wcz4gPSAoeyBlcnJvciwgZXJyb3JNZXNzYWdlLCBsYWJlbCwgdG91Y2hlZCwgLi4uZmllbGRQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICB7bGFiZWwgJiYgKFxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbHN4KCdmb3JtLWZpZWxkLWxhYmVsJyl9IGh0bWxGb3I9e2ZpZWxkUHJvcHMubmFtZX0+XG4gICAgICAgICAge2xhYmVsfSA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkLWVycm9yXCI+Kjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICl9XG4gICAgICA8RmllbGQgY2xhc3NOYW1lPXtjbHN4KCdmb3JtLWZpZWxkLWNvbnRyb2wnLCB7ICdmb3JtLWZpZWxkLWNvbnRyb2wtZXJyb3InOiB0b3VjaGVkICYmIGVycm9yIH0pfSB7Li4uZmllbGRQcm9wc30gLz5cbiAgICAgIHt0b3VjaGVkICYmIGVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeCgnZm9ybS1maWVsZC1tZXNzYWdlJywgeyAnZm9ybS1maWVsZC1lcnJvcic6IGVycm9yIH0pfT57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dEZpZWxkIH0gZnJvbSAnLi9JbnB1dCc7XG5leHBvcnQgKiBmcm9tICcuL0lucHV0LnByb3BzJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0RmllbGQsIElucHV0RmllbGRQcm9wcyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL0ZpZWxkcyc7XG5cbmNvbnN0IFBhc3N3b3JkRmllbGQ6IEZDPElucHV0RmllbGRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxJbnB1dEZpZWxkIHsuLi5wcm9wc30gdHlwZT1cInBhc3N3b3JkXCIgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZEZpZWxkO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXNzd29yZEZpZWxkIH0gZnJvbSAnLi9QYXNzd29yZCc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIElucHV0SFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vU2VhcmNoSW5wdXQuc2Nzcyc7XG5cbmNvbnN0IFNlYXJjaElucHV0OiBGQzxJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYgeyBvblNlYXJjaD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkIH0+ID0gKHtcbiAgb25TZWFyY2ggPSAoKSA9PiB7fSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIG9uU2VhcmNoKGlucHV0VmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkLWNvbnRhaW5lci1pY29uIHNlYXJjaC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2ggYWN0aW9uLWljb25cIiB0aXRsZT1cIlByZXNzIGZvciBzZWFyY2hcIiBvbkNsaWNrPXsoKSA9PiBvblNlYXJjaChpbnB1dFZhbHVlKX0gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWZpZWxkLWNvbnRyb2wgc2VhcmNoLWlucHV0XCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoSW5wdXQgfSBmcm9tICcuL1NlYXJjaElucHV0JztcbiIsImV4cG9ydCAqIGZyb20gJy4vSW5wdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9QYXNzd29yZCc7XG5leHBvcnQgKiBmcm9tICcuL1NlYXJjaCc7XG4iLCJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBSZWFjdCwgeyBGQywgSW1nSFRNTEF0dHJpYnV0ZXMsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBERUZBVUxUX0FTU0VUUyB9IGZyb20gJ3NyYy9jb25zdGFudHMnO1xuXG5pbXBvcnQgJy4vSW1hZ2VMb2FkaW5nLnNjc3MnO1xuXG5jb25zdCBJbWFnZUxvYWRpbmc6IEZDPEltZ0hUTUxBdHRyaWJ1dGVzPEhUTUxJbWFnZUVsZW1lbnQ+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaW1nTG9hZGVkLCBzZXRJbWdMb2FkZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBzcGlubmVyQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaW1nUmVmID0gdXNlUmVmPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlTG9hZGVkID0gKCkgPT4ge1xuICAgIHNldEltZ0xvYWRlZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWltZ0xvYWRlZCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBpZD1cImltYWdlLWxvYWRpbmctc3Bpbm5lci1jb250YWluZXJcIlxuICAgICAgICAgIHJlZj17c3Bpbm5lckNvbnRhaW5lclJlZn1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IHNwaW5uZXJDb250YWluZXJSZWYuY3VycmVudD8uY2xpZW50V2lkdGggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zcGlubmVyIGltYWdlLWxvYWRpbmctc3Bpbm5lclwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChbcHJvcHMuY2xhc3NOYW1lLCB7ICdpbWFnZS1sb2FkaW5nLWhpZGRlbic6ICFpbWdMb2FkZWQgfV0pfVxuICAgICAgICByZWY9e2ltZ1JlZn1cbiAgICAgICAgb25FcnJvcj17KCkgPT4ge1xuICAgICAgICAgIGlmIChpbWdSZWYuY3VycmVudCkgaW1nUmVmLmN1cnJlbnQuc3JjID0gREVGQVVMVF9BU1NFVFMuZGVmYXVsdEltYWdlUGF0aDtcbiAgICAgICAgfX1cbiAgICAgICAgb25Mb2FkPXtoYW5kbGVJbWFnZUxvYWRlZH1cbiAgICAgID48L2ltZz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlTG9hZGluZztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2VMb2FkaW5nIH0gZnJvbSAnLi9JbWFnZUxvYWRpbmcnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREVGQVVMVF9BU1NFVFMgfSBmcm9tICdzcmMvY29uc3RhbnRzJztcblxuaW1wb3J0ICcuL0xvYWRpbmdPdmVybGF5LnNjc3MnO1xuXG5jb25zdCBMb2FkaW5nT3ZlcmxheTogRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtbG9hZGluZ1wiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJhcHAtbG9hZGVyXCIgc3JjPXtERUZBVUxUX0FTU0VUUy5kZWZhdWx0SW1hZ2VQYXRofT48L2ltZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdPdmVybGF5O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nT3ZlcmxheSB9IGZyb20gJy4vTG9hZGluZ092ZXJsYXknO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ3NyYy9jb250ZXh0JztcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJ3NyYy9yb3V0ZXMnO1xuXG5pbXBvcnQgJy4vTmF2YmFyLnNjc3MnO1xuXG5jb25zdCBBcHBOYXZiYXI6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZUF1dGgoKTtcbiAgcmV0dXJuIGlzTG9nZ2VkSW4gPyAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJhcHAtbmF2YmFyXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiYXBwLW5hdmJhci1saXN0XCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcHAtbmF2YmFyLWxpbmsgaG9tZVwiPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPXtST1VURVMuaG9tZX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXBwLW5hdmJhci1saW5rIGRldGFpbHNcIj5cbiAgICAgICAgICA8TmF2TGluayB0bz17Uk9VVEVTLmRldGFpbHN9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFkZHJlc3MtY2FyZFwiIC8+XG4gICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBOYXZiYXI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFwcE5hdmJhciB9IGZyb20gJy4vTmF2YmFyJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vUGFnZUNvbnRhaW5lci5zY3NzJztcblxuY29uc3QgUGFnZUNvbnRhaW5lcjogRkM8eyB0aXRsZT86IHN0cmluZzsgcmVuZGVySXRlbUhlYWRlcj86ICgpID0+IFJlYWN0RWxlbWVudCB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSxcbiAgcmVuZGVySXRlbUhlYWRlciA9ICgpID0+IG51bGwsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIHtyZW5kZXJJdGVtSGVhZGVyKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCIgey4uLnByb3BzfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGFpbmVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlQ29udGFpbmVyIH0gZnJvbSAnLi9QYWdlQ29udGFpbmVyJztcbiIsImltcG9ydCB7IFBva2Vtb24gfSBmcm9tICdzcmMvbW9kZWxzJztcblxuZXhwb3J0IHR5cGUgUG9rZW1vbkNhcmRQcm9wcyA9IHtcbiAgcG9rZW1vbjogUG9rZW1vbjtcbiAgcHJlc3NhYmxlPzogYm9vbGVhbjtcbiAgb25DbGljaz86IChwb2tlbW9uOiBQb2tlbW9uKSA9PiB2b2lkO1xuICBvblNlbGVjdEFzRmF2b3JpdGU/OiAocG9rZW1vbj86IFBva2Vtb24pID0+IHZvaWQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBJbWFnZUxvYWRpbmcgfSBmcm9tICdzcmMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQb2tlbW9uQ2FyZFByb3BzIH0gZnJvbSAnLi9Qb2tlbW9uQ2FyZC5wcm9wcyc7XG5cbmltcG9ydCAnLi9Qb2tlbW9uQ2FyZC5zY3NzJztcblxuY29uc3QgUG9rZW1vbkNhcmQ6IEZDPFBva2Vtb25DYXJkUHJvcHM+ID0gKHtcbiAgcG9rZW1vbixcbiAgcHJlc3NhYmxlLFxuICBvbkNsaWNrID0gKFBva2Vtb24pID0+IHt9LFxuICBvblNlbGVjdEFzRmF2b3JpdGUgPSAoKSA9PiB7fSxcbn0pID0+IHtcbiAgY29uc3Qgb25TZWxlY3RBc0Zhdm9yaXRlSGFuZGxlciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvblNlbGVjdEFzRmF2b3JpdGUocG9rZW1vbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCh7ICdwb2tlbW9uLWNhcmQnOiB0cnVlLCBwcmVzc2FibGUgfSl9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2socG9rZW1vbil9PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2tlbW9uLWZhdm9yaXRlLWJ1dHRvbVwiIHRpdGxlPVwiU2VsZWN0IGFzIGZhdm9yaXRlXCIgb25DbGljaz17b25TZWxlY3RBc0Zhdm9yaXRlSGFuZGxlcn0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17Y2xzeCh7ICdmYXIgZmEtc3Rhcic6ICFwb2tlbW9uLmZhdm9yaXRlLCAnZmFzIGZhLXN0YXInOiBwb2tlbW9uLmZhdm9yaXRlIH0pfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8SW1hZ2VMb2FkaW5nIGFsdD17cG9rZW1vbi5uYW1lfSBjbGFzc05hbWU9XCJwb2tlbW9uLWltYWdlXCIgc3JjPXtwb2tlbW9uLmltYWdlfSAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9rZW1vbi1uYW1lXCI+XG4gICAgICAgICN7cG9rZW1vbi5pZH0ge3Bva2Vtb24ubmFtZX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25DYXJkO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQb2tlbW9uQ2FyZCB9IGZyb20gJy4vUG9rZW1vbkNhcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uQ2FyZC5wcm9wcyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbWFnZUxvYWRpbmcsIFBva2Vtb25UeXBlIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJ3NyYy9tb2RlbHMnO1xuXG5pbXBvcnQgJy4vUG9rZW1vblBhbmVsLnNjc3MnO1xuXG5jb25zdCBQb2tlbW9uUGFuZWw6IEZDPHsgcG9rZW1vbjogUG9rZW1vbiB9PiA9ICh7IHBva2Vtb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi1wYW5lbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXBhbmVsLWRhdGEtY29udGFpbmVyXCI+XG4gICAgICAgIDxJbWFnZUxvYWRpbmcgYWx0PXtwb2tlbW9uLm5hbWV9IGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWwtaW1hZ2VcIiBzcmM9e3Bva2Vtb24uaW1hZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi1wYW5lbC1kYXRhLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWwtZGF0YS1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXBhbmVsLXJvd1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9rZW1vbi1wYW5lbC10aXRsZVwiPlxuICAgICAgICAgICAgICAje3Bva2Vtb24uaWR9IC0ge3Bva2Vtb24ubmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWwtcm93XCI+XG4gICAgICAgICAgICB7cG9rZW1vbi50eXBlcz8ubWFwKCh7IG5hbWUsIHNsb3QgfSkgPT4gKFxuICAgICAgICAgICAgICA8UG9rZW1vblR5cGUga2V5PXtzbG90fSB0eXBlPXtuYW1lfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXBhbmVsLXJvd1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9rZW1vbi1wYW5lbC1kZXNjcmlwdGlvblwiPntwb2tlbW9uLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWwtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tcGFuZWwtc3RhdHNcIj5cbiAgICAgICAgICAgICAge3Bva2Vtb24uc3RhdHM/Lm1hcCgoeyBiYXNlLCBuYW1lIH0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtcm93XCIga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1lbGVtZW50XCI+e25hbWUudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1lbGVtZW50IGNlbnRlclwiPntiYXNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vblBhbmVsO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQb2tlbW9uUGFuZWwgfSBmcm9tICcuL1Bva2Vtb25QYW5lbCc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQT0tFTU9OX1RZUEUsIFBPS0VNT05fVFlQRV9DT0xPUiB9IGZyb20gJ3NyYy9jb25zdGFudHMnO1xuXG5pbXBvcnQgJy4vUG9rZW1vblR5cGUuc2Nzcyc7XG5cbmNvbnN0IFBva2Vtb25UeXBlOiBGQzx7IHR5cGU6IHN0cmluZyB9PiA9ICh7IHR5cGUgfSkgPT4ge1xuICBjb25zdCByZXNvbHZlQ2xhc3NCeVR5cGUgPSAobmFtZTogUE9LRU1PTl9UWVBFKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gUE9LRU1PTl9UWVBFX0NPTE9SW25hbWVdO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXR5cGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHJlc29sdmVDbGFzc0J5VHlwZSh0eXBlIGFzIFBPS0VNT05fVFlQRSkgfX0+XG4gICAgICB7dHlwZX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25UeXBlO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQb2tlbW9uVHlwZSB9IGZyb20gJy4vUG9rZW1vblR5cGUnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9CdXR0b25zJztcbmV4cG9ydCAqIGZyb20gJy4vRmllbGRzJztcbmV4cG9ydCAqIGZyb20gJy4vSW1hZ2VMb2FkaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL05hdmJhcic7XG5leHBvcnQgKiBmcm9tICcuL1BhZ2VDb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uQ2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL1Bva2Vtb25QYW5lbCc7XG5leHBvcnQgKiBmcm9tICcuL1Bva2Vtb25UeXBlJztcbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX0FTU0VUUyA9IHtcbiAgZGVmYXVsdEltYWdlUGF0aDogJy9kZWZhdWx0X2ltYWdlLnBuZycsXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9kZWZhdWx0QXNzZXRzJztcbmV4cG9ydCAqIGZyb20gJy4vcG9rZW1vblR5cGVzJztcbiIsImV4cG9ydCBlbnVtIFBPS0VNT05fVFlQRSB7XG4gIEJVRyA9ICdidWcnLFxuICBEQVJLID0gJ2RhcmsnLFxuICBEUkFHT04gPSAnZHJhZ29uJyxcbiAgRUxFQ1RSSUMgPSAnZWxlY3RyaWMnLFxuICBGQUlSWSA9ICdmYWlyeScsXG4gIEZJR0hUSU5HID0gJ2ZpZ2h0aW5nJyxcbiAgRklSRSA9ICdmaXJlJyxcbiAgRkxZSU5HID0gJ2ZseWluZycsXG4gIEdIT1NUID0gJ2dob3N0JyxcbiAgR1JBU1MgPSAnZ3Jhc3MnLFxuICBHUk9VTkQgPSAnZ3JvdW5kJyxcbiAgSUNFID0gJ2ljZScsXG4gIE5PUk1BTCA9ICdub3JtYWwnLFxuICBQSFlDSElDID0gJ3BzeWNoaWMnLFxuICBQT0lTT04gPSAncG9pc29uJyxcbiAgUk9DSyA9ICdyb2NrJyxcbiAgU1RFRUwgPSAnc3RlZWwnLFxuICBXQVRFUiA9ICd3YXRlcicsXG59XG5cbmV4cG9ydCBjb25zdCBQT0tFTU9OX1RZUEVfQ09MT1I6IHtcbiAgW2tleSBpbiBQT0tFTU9OX1RZUEVdOiBzdHJpbmc7XG59ID0ge1xuICBbUE9LRU1PTl9UWVBFLkJVR106ICcjYWIyJyxcbiAgW1BPS0VNT05fVFlQRS5EQVJLXTogJyM3NTQnLFxuICBbUE9LRU1PTl9UWVBFLkRSQUdPTl06ICcjNzZlJyxcbiAgW1BPS0VNT05fVFlQRS5FTEVDVFJJQ106ICcjZmMzJyxcbiAgW1BPS0VNT05fVFlQRS5GQUlSWV06ICcjZTllJyxcbiAgW1BPS0VNT05fVFlQRS5GSUdIVElOR106ICcjYjU0JyxcbiAgW1BPS0VNT05fVFlQRS5GSVJFXTogJyNmNDInLFxuICBbUE9LRU1PTl9UWVBFLkZMWUlOR106ICcjODlmJyxcbiAgW1BPS0VNT05fVFlQRS5HSE9TVF06ICcjNjZiJyxcbiAgW1BPS0VNT05fVFlQRS5HUkFTU106ICcjN2M1JyxcbiAgW1BPS0VNT05fVFlQRS5HUk9VTkRdOiAnI2RiNScsXG4gIFtQT0tFTU9OX1RZUEUuSUNFXTogJyM2Y2YnLFxuICBbUE9LRU1PTl9UWVBFLk5PUk1BTF06ICcjYWE5JyxcbiAgW1BPS0VNT05fVFlQRS5QSFlDSElDXTogJyNmNTknLFxuICBbUE9LRU1PTl9UWVBFLlBPSVNPTl06ICcjYTU5JyxcbiAgW1BPS0VNT05fVFlQRS5ST0NLXTogJyNiYTYnLFxuICBbUE9LRU1PTl9UWVBFLlNURUVMXTogJyNhYWInLFxuICBbUE9LRU1PTl9UWVBFLldBVEVSXTogJyMzOWYnLFxufTtcbiIsImltcG9ydCB7IExvZ2luRGF0YSB9IGZyb20gJ3NyYy9tb2RlbHMnO1xuXG5leHBvcnQgdHlwZSBBdXRoUHJvdmlkZXJWYWx1ZXMgPSB7XG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gIGxvZ2luOiAobG9naW5EYXRhOiBMb2dpbkRhdGEpID0+IHZvaWQ7XG4gIGxvZ291dDogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBVVRIX0NPTlRFWFRfREVGQVVMVF9WQUxVRVM6IEF1dGhQcm92aWRlclZhbHVlcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGxvZ2luOiAoKSA9PiB7fSxcbiAgbG9nb3V0OiAoKSA9PiB7fSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9naW5EYXRhIH0gZnJvbSAnc3JjL21vZGVscyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXJWYWx1ZXMsIEFVVEhfQ09OVEVYVF9ERUZBVUxUX1ZBTFVFUyB9IGZyb20gJy4vQXV0aFByb3ZpZGVyLnByb3BzJztcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoUHJvdmlkZXJWYWx1ZXM+KEFVVEhfQ09OVEVYVF9ERUZBVUxUX1ZBTFVFUyk7XG5cbmNvbnN0IEF1dGhQcm92aWRlcjogRkMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oQXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChsb2dpbkRhdGE6IExvZ2luRGF0YSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlZEluID0gYXdhaXQgQXV0aFNlcnZpY2UubG9naW4obG9naW5EYXRhKTtcbiAgICBzZXRJc0xvZ2dlZEluKGxvZ2dlZEluKTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VkT3V0ID0gYXdhaXQgQXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgc2V0SXNMb2dnZWRJbihsb2dnZWRPdXQpO1xuICB9O1xuXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNMb2dnZWRJbiwgbG9naW4sIGxvZ291dCB9fSB7Li4ucHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKTogQXV0aFByb3ZpZGVyVmFsdWVzID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSBpbnNpZGUgQXV0aFByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoUHJvdmlkZXI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEF1dGhQcm92aWRlciwgQXV0aENvbnRleHQsIHVzZUF1dGggfSBmcm9tICcuL0F1dGhQcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL0F1dGhQcm92aWRlci5wcm9wcyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGluZ092ZXJsYXkgfSBmcm9tICdzcmMvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBMb2FkaW5nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8e1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGRpc3BhdGNoTG9hZGluZzogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xufT4oe1xuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBkaXNwYXRjaExvYWRpbmc6ICgpID0+IHt9LFxufSk7XG5cbmNvbnN0IExvYWRpbmdQcm92aWRlcjogRkMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8TG9hZGluZ0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgZGlzcGF0Y2hMb2FkaW5nOiBzZXRJc0xvYWRpbmcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmdPdmVybGF5IC8+fVxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvTG9hZGluZ0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTG9hZGluZyA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTG9hZGluZ0NvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSBpbnNpZGUgQXV0aFByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nUHJvdmlkZXI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmdQcm92aWRlciwgTG9hZGluZ0NvbnRleHQsIHVzZUxvYWRpbmcgfSBmcm9tICcuL0xvYWRpbmdQcm92aWRlcic7XG4iLCJpbXBvcnQgeyBMaXN0UmVzcG9uc2UsIFBva2Vtb24gfSBmcm9tICdzcmMvbW9kZWxzJztcblxuZXhwb3J0IGVudW0gUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZCB7XG4gIENIQU5HRV9MT0FESU5HID0gJ0NIQU5HRV9MT0FESU5HJyxcbiAgRVJST1IgPSAnRVJST1InLFxuICBSRUxPQURfTElTVCA9ICdSRUxPQURfTElTVCcsXG4gIFVQREFURV9QT0tFTU9OID0gJ1VQREFURV9QT0tFTU9OJyxcbiAgVVBEQVRFX1BPS0VNT05fTElTVCA9ICdVUERBVEVfUE9LRU1PTl9MSVNUJyxcbiAgVVBEQVRFX0ZBVk9SSVRFX1BPS0VNT05TID0gJ1VQREFURV9GT1ZPUklURV9QT0tFTU9OUycsXG59XG5cbmV4cG9ydCB0eXBlIFBva2Vtb25Qcm92aWRlckFjdGlvbiA9XG4gIHwgeyB0eXBlOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLkNIQU5HRV9MT0FESU5HOyBpc0xvYWRpbmc6IGJvb2xlYW4gfVxuICB8IHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5FUlJPUiB9XG4gIHwgeyB0eXBlOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlVQREFURV9GQVZPUklURV9QT0tFTU9OUzsgZmF2b3JpdGVQb2tlbW9uczogc3RyaW5nW10gfVxuICB8IHtcbiAgICAgIHR5cGU6IFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuVVBEQVRFX1BPS0VNT047XG4gICAgICBwYXlsb2FkOiBMaXN0UmVzcG9uc2U8UG9rZW1vbj47XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuVVBEQVRFX1BPS0VNT05fTElTVDtcbiAgICAgIHBheWxvYWQ6IExpc3RSZXNwb25zZTxQb2tlbW9uPjtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5SRUxPQURfTElTVDtcbiAgICAgIHBheWxvYWQ6IExpc3RSZXNwb25zZTxQb2tlbW9uPjtcbiAgICB9O1xuIiwiaW1wb3J0IHsgUGFnaW5hdGlvblJlc3BvbnNlLCBQb2tlbW9uIH0gZnJvbSAnc3JjL21vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPS0VNT05fUEFHRV9TSVpFID0gMjA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QT0tFTU9OX1BBR0VfT0ZGU0VUID0gMDtcblxudHlwZSBCYXNlUHJvcGVydGllcyA9IHtcbiAgZXJyb3I6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgcG9rZW1vbjogUG9rZW1vbiB8IG51bGw7XG4gIHBva2Vtb25zTGlzdDogUG9rZW1vbltdO1xuICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uUmVzcG9uc2U7XG59O1xuXG5jb25zdCBERUZBVUxUX0JBU0VfUFJPUEVSVElFUzogQmFzZVByb3BlcnRpZXMgPSB7XG4gIGVycm9yOiBmYWxzZSxcbiAgaXNMb2FkaW5nOiB0cnVlLFxuICBwb2tlbW9uOiBudWxsLFxuICBwb2tlbW9uc0xpc3Q6IFtdLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgdG90YWxSZWNvcmRzOiAwLFxuICAgIG5leHRVcmw6IG51bGwsXG4gICAgcHJldmlvdXNVcmw6IG51bGwsXG4gIH0sXG59O1xuXG5leHBvcnQgdHlwZSBQb2tlbW9uUHJvdmlkZXJWYWx1ZXMgPSBCYXNlUHJvcGVydGllcyAmIHtcbiAgZ2V0UG9rZW1vbkJ5SUQ6IChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIGdldFBva2Vtb25CeU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIG5leHRQYWdlOiAoKSA9PiB2b2lkO1xuICB1cGRhdGVGYXZvcml0ZVBva2Vtb25zOiAocG9rZW1vbklEOiBzdHJpbmcsIGlzRmF2b3JpdGU6IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XG59O1xuXG5leHBvcnQgY29uc3QgUE9LRU1PTl9DT05URVhUX0RFRkFVTFRfVkFMVUVTOiBQb2tlbW9uUHJvdmlkZXJWYWx1ZXMgPSB7XG4gIC4uLkRFRkFVTFRfQkFTRV9QUk9QRVJUSUVTLFxuICBnZXRQb2tlbW9uQnlJRDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCksXG4gIGdldFBva2Vtb25CeU5hbWU6ICgpID0+IFByb21pc2UucmVzb2x2ZSgpLFxuICBuZXh0UGFnZTogKCkgPT4ge30sXG4gIHVwZGF0ZUZhdm9yaXRlUG9rZW1vbnM6ICgpID0+IFByb21pc2UucmVzb2x2ZSgpLFxufTtcblxuZXhwb3J0IHR5cGUgUG9rZW1vblN0YXRlID0gQmFzZVByb3BlcnRpZXM7XG5cbmV4cG9ydCBjb25zdCBQT0tFTU9OX0NPTlRFWFRfREVGQVVMVF9TVEFURTogUG9rZW1vblN0YXRlID0ge1xuICAuLi5ERUZBVUxUX0JBU0VfUFJPUEVSVElFUyxcbn07XG4iLCJpbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnc3JjL21vZGVscyc7XG5pbXBvcnQgeyBQb2tlbW9uUHJvdmlkZXJBY3Rpb24sIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQgfSBmcm9tICcuL1Bva2Vtb25Qcm92aWRlci5hY3Rpb25zJztcbmltcG9ydCB7IFBva2Vtb25TdGF0ZSB9IGZyb20gJy4vUG9rZW1vblByb3ZpZGVyLnByb3BzJztcblxuY29uc3QgbWFwRmF2b3JpdGVzVXRpbCA9IChmYXZvcml0ZVBva2Vtb25zOiBzdHJpbmdbXSkgPT4gKHBva2Vtb246IFBva2Vtb24pID0+ICh7XG4gIC4uLnBva2Vtb24sXG4gIGZhdm9yaXRlOiBmYXZvcml0ZVBva2Vtb25zLnNvbWUoKGZhdm9yaXRlKSA9PiBmYXZvcml0ZSA9PSBwb2tlbW9uLmlkKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcG9rZW1vblJlZHVjZXIgPSAocHJldlN0YXRlOiBQb2tlbW9uU3RhdGUsIGFjdGlvbjogUG9rZW1vblByb3ZpZGVyQWN0aW9uKTogUG9rZW1vblN0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5DSEFOR0VfTE9BRElORzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogYWN0aW9uLmlzTG9hZGluZyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5FUlJPUjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5SRUxPQURfTElTVDoge1xuICAgICAgY29uc3QgeyBkYXRhLCBwYWdpbmF0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBwb2tlbW9uc0xpc3Q6IFsuLi5kYXRhXSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIC4uLnBhZ2luYXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuVVBEQVRFX0ZBVk9SSVRFX1BPS0VNT05TOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcG9rZW1vbnNMaXN0OiBwcmV2U3RhdGUucG9rZW1vbnNMaXN0Lm1hcChtYXBGYXZvcml0ZXNVdGlsKGFjdGlvbi5mYXZvcml0ZVBva2Vtb25zKSksXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuVVBEQVRFX1BPS0VNT046IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBwb2tlbW9uID0gZGF0YS5maW5kKChwb2tlbW9uKSA9PiBwb2tlbW9uLmlkKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBwb2tlbW9uOiBwb2tlbW9uIHx8IG51bGwsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuVVBEQVRFX1BPS0VNT05fTElTVDoge1xuICAgICAgY29uc3QgeyBkYXRhLCBwYWdpbmF0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBwb2tlbW9uc0xpc3Q6IFsuLi5wcmV2U3RhdGUucG9rZW1vbnNMaXN0LCAuLi5kYXRhXSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIC4uLnBhZ2luYXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBGQywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZXMnO1xuaW1wb3J0IHsgdXNlSXNNb3VudGVkUmVmIH0gZnJvbSAnc3JjL2hvb2tzJztcbmltcG9ydCB7XG4gIFBva2Vtb25Qcm92aWRlclZhbHVlcyxcbiAgUE9LRU1PTl9DT05URVhUX0RFRkFVTFRfVkFMVUVTLFxuICBQT0tFTU9OX0NPTlRFWFRfREVGQVVMVF9TVEFURSxcbiAgREVGQVVMVF9QT0tFTU9OX1BBR0VfU0laRSxcbn0gZnJvbSAnLi9Qb2tlbW9uUHJvdmlkZXIucHJvcHMnO1xuaW1wb3J0IHsgcG9rZW1vblJlZHVjZXIgfSBmcm9tICcuL1Bva2Vtb25Qcm92aWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IFBva2Vtb25Qcm92aWRlckFjdGlvbiwgUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZCB9IGZyb20gJy4vUG9rZW1vblByb3ZpZGVyLmFjdGlvbnMnO1xuaW1wb3J0IHsgREVGQVVMVF9QT0tFTU9OX1BBR0VfT0ZGU0VUIH0gZnJvbSAnLi9Qb2tlbW9uUHJvdmlkZXIucHJvcHMnO1xuXG5leHBvcnQgY29uc3QgUG9rZW1vbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFBva2Vtb25Qcm92aWRlclZhbHVlcz4oUE9LRU1PTl9DT05URVhUX0RFRkFVTFRfVkFMVUVTKTtcblxuY29uc3QgUG9rZW1vblByb3ZpZGVyOiBGQyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocG9rZW1vblJlZHVjZXIsIFBPS0VNT05fQ09OVEVYVF9ERUZBVUxUX1NUQVRFKTtcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gdXNlSXNNb3VudGVkUmVmKCk7XG5cbiAgY29uc3Qgc2V0TG9hZGluZyA9IChpc0xvYWRpbmc6IGJvb2xlYW4pID0+XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLkNIQU5HRV9MT0FESU5HLCBpc0xvYWRpbmc6IGlzTG9hZGluZyB9KTtcblxuICBjb25zdCBzZXRFcnJvciA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5FUlJPUiB9KTtcblxuICBjb25zdCBnZXRQb2tlbW9uQnlJRCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uKGlkKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5VUERBVEVfUE9LRU1PTiwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRQb2tlbW9uQnlOYW1lID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIGdldFBva2Vtb25MaXN0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uKG5hbWUpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlJFTE9BRF9MSVNULCBwYXlsb2FkOiByZXNwb25zZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFBva2Vtb25MaXN0ID0gYXN5bmMgKHVybD86IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdXJsXG4gICAgICAgID8gYXdhaXQgUG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbkxpc3RCeVVybCh1cmwpXG4gICAgICAgIDogYXdhaXQgUG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbkxpc3Qoe1xuICAgICAgICAgICAgbGltaXQ6IERFRkFVTFRfUE9LRU1PTl9QQUdFX1NJWkUsXG4gICAgICAgICAgICBvZmZzZXQ6IERFRkFVTFRfUE9LRU1PTl9QQUdFX09GRlNFVCxcbiAgICAgICAgICB9KTtcblxuICAgICAgY29uc3QgYWN0aW9uOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb24gPSB1cmxcbiAgICAgICAgPyB7IHR5cGU6IFBva2Vtb25Qcm92aWRlckFjdGlvbktpbmQuVVBEQVRFX1BPS0VNT05fTElTVCwgcGF5bG9hZDogcmVzcG9uc2UgfVxuICAgICAgICA6IHsgdHlwZTogUG9rZW1vblByb3ZpZGVyQWN0aW9uS2luZC5SRUxPQURfTElTVCwgcGF5bG9hZDogcmVzcG9uc2UgfTtcbiAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ICYmIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ICYmIHNldEVycm9yKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ICYmIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVGYXZvcml0ZVBva2Vtb25zID0gYXN5bmMgKHBva2Vtb25JRDogc3RyaW5nLCBpc0Zhdm9yaXRlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmF2b3JpdGVQb2tlbW9ucyA9IGlzRmF2b3JpdGVcbiAgICAgICAgPyBhd2FpdCBQb2tlbW9uU2VydmljZS5zYXZlQXNGYXZvcml0ZShwb2tlbW9uSUQpXG4gICAgICAgIDogYXdhaXQgUG9rZW1vblNlcnZpY2UucmVtb3ZlRnJvbUZhdm9yaXRlcyhwb2tlbW9uSUQpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBQb2tlbW9uUHJvdmlkZXJBY3Rpb25LaW5kLlVQREFURV9GQVZPUklURV9QT0tFTU9OUywgZmF2b3JpdGVQb2tlbW9ucyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5leHRQYWdlID0gKCkgPT4ge1xuICAgIGlmICghc3RhdGUucGFnaW5hdGlvbi5uZXh0VXJsKSByZXR1cm47XG4gICAgZ2V0UG9rZW1vbkxpc3Qoc3RhdGUucGFnaW5hdGlvbi5uZXh0VXJsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBva2Vtb25MaXN0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxQb2tlbW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgLi4uc3RhdGUsIGdldFBva2Vtb25CeUlELCBnZXRQb2tlbW9uQnlOYW1lLCBuZXh0UGFnZSwgdXBkYXRlRmF2b3JpdGVQb2tlbW9ucyB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlUG9rZW1vbiA9ICgpOiBQb2tlbW9uUHJvdmlkZXJWYWx1ZXMgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChQb2tlbW9uQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlUG9rZW1vbiBtdXN0IGJlIGluc2lkZSBQa2Vtb25Qcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vblByb3ZpZGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQb2tlbW9uUHJvdmlkZXIsIFBva2Vtb25Db250ZXh0LCB1c2VQb2tlbW9uIH0gZnJvbSAnLi9Qb2tlbW9uUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uUHJvdmlkZXIuYWN0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL1Bva2Vtb25Qcm92aWRlci5wcm9wcyc7XG5leHBvcnQgKiBmcm9tICcuL1Bva2Vtb25Qcm92aWRlci5yZWR1Y2VyJztcbiIsImV4cG9ydCAqIGZyb20gJy4vQXV0aFByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vUG9rZW1vblByb3ZpZGVyJztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlSXNNb3VudGVkUmVmIH0gZnJvbSAnLi91c2VVbk1vdW50ZWRSZWYnO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZUlzTW91bnRlZFJlZiA9ICgpID0+IHtcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBpc01vdW50ZWRSZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJc01vdW50ZWRSZWY7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCByb290Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5yb290Tm9kZSAmJiBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iLCJleHBvcnQgdHlwZSBQYWdpbmF0aW9uUGFyYW1zID0geyBsaW1pdDogbnVtYmVyOyBvZmZzZXQ6IG51bWJlciB9O1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0aW9uUmVzcG9uc2UgPSB7XG4gIHRvdGFsUmVjb3JkczogbnVtYmVyO1xuICBuZXh0VXJsPzogc3RyaW5nIHwgbnVsbDtcbiAgcHJldmlvdXNVcmw/OiBzdHJpbmcgfCBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFHSU5BVElPTl9SRVNQT05TRSA9IHtcbiAgZGF0YTogW10sXG4gIHBhZ2luYXRpb246IHtcbiAgICB0b3RhbFJlY29yZHM6IDAsXG4gICAgcHJldmlvdXNVcmw6IG51bGwsXG4gICAgbmV4dFVybDogbnVsbCxcbiAgfSxcbn07XG5cbmV4cG9ydCB0eXBlIExpc3RSZXNwb25zZTxUPiA9IHtcbiAgZGF0YTogVFtdO1xuICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uUmVzcG9uc2U7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9MaXN0UmVzcG9uc2UnO1xuIiwiZXhwb3J0IHR5cGUgTG9naW5EYXRhID0ge1xuICBwYXNzd29yZDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTE9HSU5fREFUQTogTG9naW5EYXRhID0ge1xuICBwYXNzd29yZDogJycsXG4gIHVzZXJuYW1lOiAnJyxcbn07XG4iLCJleHBvcnQgdHlwZSBQYWdpbmF0aW9uU3RhdGUgPSB7XG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgdG90YWxSZWNvcmRzOiBudW1iZXI7XG59O1xuIiwiaW1wb3J0IHsgUE9LRU1PTl9UWVBFIH0gZnJvbSAnc3JjL2NvbnN0YW50cyc7XG5cbmV4cG9ydCB0eXBlIFBva2Vtb24gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBmYXZvcml0ZTogYm9vbGVhbjtcbiAgaW1hZ2U6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBsaW5rSW5mbz86IHN0cmluZztcbiAgc3RhdHM/OiB7XG4gICAgYmFzZTogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgfVtdO1xuICB0eXBlcz86IHtcbiAgICBzbG90OiBudW1iZXI7XG4gICAgbmFtZTogUE9LRU1PTl9UWVBFO1xuICB9W107XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9BUEknO1xuZXhwb3J0ICogZnJvbSAnLi9Mb2dpbic7XG5leHBvcnQgKiBmcm9tICcuL1BhZ2luYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhZ2VDb250YWluZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cyc7XG5cbmNvbnN0IERhdGFpbHNQYWdlOiBGQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lciB0aXRsZT1cIkRldGFpbHNcIj5cbiAgICAgIDxkaXY+RGV0YWlscyBDb250ZW50PC9kaXY+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YWlsc1BhZ2U7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIERldGFpbHNQYWdlIH0gZnJvbSAnLi9EZXRhaWxzUGFnZSc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBGb3JtaWssIEZvcm1pa0NvbmZpZywgRm9ybWlrUHJvcHMgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCwgUGFzc3dvcmRGaWVsZCB9IGZyb20gJ3NyYy9jb21wb25lbnRzL0ZpZWxkcyc7XG5pbXBvcnQgeyBMb2dpbkRhdGEgfSBmcm9tICdzcmMvbW9kZWxzJztcbmltcG9ydCB7IEZvcm1WYWxpZGF0aW9uLCBmb3JtVmFsaWRhdGlvbnMsIEZvcm1WYWxpZGF0aW9uV2l0aFZhbHVlIH0gZnJvbSAnc3JjL3V0aWxzJztcblxuaW1wb3J0ICcuL0xvZ2luRm9ybS5zY3NzJztcblxuY29uc3QgTG9naW5Gb3JtOiBGQzxGb3JtaWtDb25maWc8TG9naW5EYXRhPj4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrIHsuLi5wcm9wc30+XG4gICAgICB7KHsgZXJyb3JzLCB0b3VjaGVkIH06IEZvcm1pa1Byb3BzPExvZ2luRGF0YT4pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1maWVsZHNcIj5cbiAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9ycz8udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvcnM/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt1c2VybmFtZVZhbGlkYXRvcigpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8UGFzc3dvcmRGaWVsZFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzPy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9ycz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWQucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bhc3N3b3JkVmFsaWRhdG9yKCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5jb25zdCB1c2VybmFtZVZhbGlkYXRvciA9ICgpID0+IHtcbiAgcmV0dXJuIGZvcm1WYWxpZGF0aW9ucygnVXNlcm5hbWUnLCBbRm9ybVZhbGlkYXRpb24uUkVRVUlSRURdKTtcbn07XG5cbmNvbnN0IHBhc3N3b3JkVmFsaWRhdG9yID0gKCkgPT4ge1xuICByZXR1cm4gZm9ybVZhbGlkYXRpb25zKCdQYXNzd29yZCcsIFtcbiAgICBGb3JtVmFsaWRhdGlvbi5SRVFVSVJFRCxcbiAgICB7IHZhbGlkYXRvcjogRm9ybVZhbGlkYXRpb25XaXRoVmFsdWUuTUlOX0xFTkdUSCwgdmFsdWU6IDYgfSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luRm9ybSB9IGZyb20gJy4vTG9naW5Gb3JtJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdzcmMvY29udGV4dCc7XG5pbXBvcnQgeyBERUZBVUxUX0xPR0lOX0RBVEEsIExvZ2luRGF0YSB9IGZyb20gJ3NyYy9tb2RlbHMnO1xuaW1wb3J0IHsgTG9naW5Gb3JtIH0gZnJvbSAnLi9Mb2dpbkZvcm0nO1xuXG5pbXBvcnQgJy4vTG9naW5QYWdlLnNjc3MnO1xuXG5jb25zdCBMb2dpblBhZ2U6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VBdXRoKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ2luLWxvZ29cIiBzcmM9XCIuL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPExvZ2luRm9ybSBpbml0aWFsVmFsdWVzPXt7IC4uLkRFRkFVTFRfTE9HSU5fREFUQSB9fSBvblN1Ym1pdD17KHZhbHVlczogTG9naW5EYXRhKSA9PiBsb2dpbih2YWx1ZXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luUGFnZSB9IGZyb20gJy4vTG9naW5QYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vTG9naW5Gb3JtJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEJ1dHRvbkxvYWRpbmcsIFBhZ2VDb250YWluZXIsIFBva2Vtb25DYXJkLCBTZWFyY2hJbnB1dCB9IGZyb20gJ3NyYy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUxvYWRpbmcsIHVzZVBva2Vtb24gfSBmcm9tICdzcmMvY29udGV4dCc7XG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnc3JjL21vZGVscyc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICdzcmMvcm91dGVzJztcblxuaW1wb3J0ICcuL1Bva2VkZXhQYWdlLnNjc3MnO1xuXG5jb25zdCBQb2tlZGV4UGFnZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGlzcGF0Y2hMb2FkaW5nIH0gPSB1c2VMb2FkaW5nKCk7XG4gIGNvbnN0IHsgZ2V0UG9rZW1vbkJ5TmFtZSwgaXNMb2FkaW5nLCBuZXh0UGFnZSwgcG9rZW1vbnNMaXN0LCBwYWdpbmF0aW9uLCB1cGRhdGVGYXZvcml0ZVBva2Vtb25zIH0gPSB1c2VQb2tlbW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoTG9hZGluZyhpc0xvYWRpbmcpO1xuICB9LCBbaXNMb2FkaW5nXSk7XG5cbiAgY29uc3QgaGFuZGxlckNhcmRDbGljayA9IChwb2tlbW9uOiBQb2tlbW9uKSA9PiB7XG4gICAgbmF2aWdhdGUoYCR7Uk9VVEVTLmhvbWV9LyR7cG9rZW1vbi5pZH1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlQ29udGFpbmVyXG4gICAgICByZW5kZXJJdGVtSGVhZGVyPXsoKSA9PiA8U2VhcmNoSW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgbmFtZVwiIG9uU2VhcmNoPXsobmFtZSkgPT4gZ2V0UG9rZW1vbkJ5TmFtZShuYW1lKX0gLz59XG4gICAgICB0aXRsZT1cIlBva2VkZXhcIlxuICAgID5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi1ncmlkXCI+XG4gICAgICAgICAge3Bva2Vtb25zTGlzdC5sZW5ndGggPyAoXG4gICAgICAgICAgICBwb2tlbW9uc0xpc3QubWFwKChwb2tlbW9uKSA9PiAoXG4gICAgICAgICAgICAgIDxQb2tlbW9uQ2FyZFxuICAgICAgICAgICAgICAgIHByZXNzYWJsZVxuICAgICAgICAgICAgICAgIGtleT17cG9rZW1vbi5pZH1cbiAgICAgICAgICAgICAgICBwb2tlbW9uPXtwb2tlbW9ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJDYXJkQ2xpY2t9XG4gICAgICAgICAgICAgICAgb25TZWxlY3RBc0Zhdm9yaXRlPXsoKSA9PiB1cGRhdGVGYXZvcml0ZVBva2Vtb25zKHBva2Vtb24uaWQsICFwb2tlbW9uLmZhdm9yaXRlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVtcHR5LWxpc3QtbWVzc2FnZVwiPlBva2Vtb24gbm90IGZvdW5kPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cG9rZW1vbnNMaXN0Lmxlbmd0aCA8IHBhZ2luYXRpb24udG90YWxSZWNvcmRzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tcGFnaW5hdG9yXCI+XG4gICAgICAgICAgICA8QnV0dG9uTG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30gdGV4dD1cIlNob3cgTW9yZVwiIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICA8L1BhZ2VDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2tlZGV4UGFnZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUG9rZWRleFBhZ2UgfSBmcm9tICcuL1Bva2VkZXhQYWdlJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUGFnZUNvbnRhaW5lciwgUG9rZW1vblBhbmVsIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlTG9hZGluZywgdXNlUG9rZW1vbiB9IGZyb20gJ3NyYy9jb250ZXh0JztcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJ3NyYy9yb3V0ZXMnO1xuXG5pbXBvcnQgJy4vUG9rZW1vblBhZ2Uuc2Nzcyc7XG5cbmNvbnN0IFBva2Vtb25QYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBkaXNwYXRjaExvYWRpbmcgfSA9IHVzZUxvYWRpbmcoKTtcbiAgY29uc3QgeyBnZXRQb2tlbW9uQnlJRCwgaXNMb2FkaW5nLCBwb2tlbW9uIH0gPSB1c2VQb2tlbW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3Qgcm91dGVQYXJhbXMgPSB1c2VQYXJhbXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoTG9hZGluZyhpc0xvYWRpbmcpO1xuICB9LCBbaXNMb2FkaW5nXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVQYXJhbXMucG9rZW1vbklEKSBnZXRQb2tlbW9uQnlJRChyb3V0ZVBhcmFtcy5wb2tlbW9uSUQpO1xuICB9LCBbcm91dGVQYXJhbXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlQ29udGFpbmVyXG4gICAgICByZW5kZXJJdGVtSGVhZGVyPXsoKSA9PiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShST1VURVMuaG9tZSl9PlxuICAgICAgICAgIFJldHVybiB0byBQb2tlZGV4XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHRpdGxlPXtpc0xvYWRpbmcgPyAnJyA6IHBva2Vtb24/Lm5hbWUgfHwgJ1Bva2Vtb24gbm90IGZvdW5kJ31cbiAgICA+XG4gICAgICB7cG9rZW1vbiAmJiAhaXNMb2FkaW5nICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxQb2tlbW9uUGFuZWwgcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25QYWdlO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQb2tlbW9uUGFnZSB9IGZyb20gJy4vUG9rZW1vblBhZ2UnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9EZXRhaWxzJztcbmV4cG9ydCAqIGZyb20gJy4vTG9naW4nO1xuZXhwb3J0ICogZnJvbSAnLi9Qb2tlbW9uJztcbmV4cG9ydCAqIGZyb20gJy4vUG9rZWRleCc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ3NyYy9jb250ZXh0JztcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vcm91dGVzJztcblxuY29uc3QgUHJpdmF0ZVJvdXRlOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VBdXRoKCk7XG4gIHJldHVybiBpc0xvZ2dlZEluID8gPD57Y2hpbGRyZW59PC8+IDogPE5hdmlnYXRlIHRvPXtST1VURVMubG9naW59IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZVJvdXRlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdzcmMvY29udGV4dCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbmNvbnN0IFB1YmxpY1JvdXRlOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VBdXRoKCk7XG4gIHJldHVybiBpc0xvZ2dlZEluID8gPE5hdmlnYXRlIHRvPXtST1VURVMuaG9tZX0gLz4gOiA8PntjaGlsZHJlbn08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWJsaWNSb3V0ZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvdGVjdGVkUm91dGUgfSBmcm9tICcuL1Byb3RlY3RlZFJvdXRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHVibGljUm91dGUgfSBmcm9tICcuL1B1YmxpY1JvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVzJztcbiIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XG4gIGRldGFpbHM6ICcvZGV0YWlscycsXG4gIGxvZ2luOiAnL2xvZ2luJyxcbiAgaG9tZTogJy9wb2tlZGV4Jyxcbn07XG4iLCJpbXBvcnQgeyBMb2dpbkRhdGEgfSBmcm9tICdzcmMvbW9kZWxzJztcblxuY29uc3QgU0VTU0lPTl9EQVRBX0tFWSA9ICdTRVNTSU9OX0RBVEEnO1xuXG5jbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBBdXRoU2VydmljZTtcblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEF1dGhTZXJ2aWNlIHtcbiAgICB0aGlzLmluc3RhbmNlID0gQXV0aFNlcnZpY2UuaW5zdGFuY2UgfHwgbmV3IEF1dGhTZXJ2aWNlKCk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgaXNMb2dnZWRJbiA9ICgpOiBib29sZWFuID0+ICEhdGhpcy5nZXRVc2VyRGF0YSgpO1xuXG4gIHB1YmxpYyBnZXRVc2VyRGF0YSA9ICgpOiBMb2dpbkRhdGEgPT4ge1xuICAgIGNvbnN0IHNlc3Npb25EYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU0VTU0lPTl9EQVRBX0tFWSk7XG4gICAgcmV0dXJuIHNlc3Npb25EYXRhID8gSlNPTi5wYXJzZShzZXNzaW9uRGF0YSkgOiBudWxsO1xuICB9O1xuXG4gIHB1YmxpYyBsb2dpbiA9IGFzeW5jIChsb2dpbkRhdGE6IExvZ2luRGF0YSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VTU0lPTl9EQVRBX0tFWSwgSlNPTi5zdHJpbmdpZnkobG9naW5EYXRhKSk7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBsb2dvdXQgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuIiwiaW1wb3J0IHsgTGlzdFJlc3BvbnNlLCBQYWdpbmF0aW9uUGFyYW1zLCBQb2tlbW9uIH0gZnJvbSAnc3JjL21vZGVscyc7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICdzcmMvdXRpbHMnO1xuaW1wb3J0IHsgUE9LRU1PTl9VUkxTIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgUG9rZW1vbkFwaUxpc3RJdGVtLCBQb2tlbW9uQXBpLCBQb2tlbW9uU3BlY2llc0FwaSB9IGZyb20gJy4vUG9rZW1vbkFwaSc7XG5cbmNvbnN0IEZBVk9SSVRFX1BPS0VNT05TX0tFWSA9ICdGQVZPUklURV9QT0tFTU9OU19LRVknO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9LRU1PTl9QQUdJTkFUSU9OX1JFU1BPTlNFOiBMaXN0UmVzcG9uc2U8UG9rZW1vbj4gPSB7XG4gIGRhdGE6IFtdLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgbmV4dFVybDogbnVsbCxcbiAgICBwcmV2aW91c1VybDogbnVsbCxcbiAgICB0b3RhbFJlY29yZHM6IDAsXG4gIH0sXG59O1xuXG5jbGFzcyBQb2tlbW9uU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQb2tlbW9uU2VydmljZTtcblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFBva2Vtb25TZXJ2aWNlIHtcbiAgICB0aGlzLmluc3RhbmNlID0gUG9rZW1vblNlcnZpY2UuaW5zdGFuY2UgfHwgbmV3IFBva2Vtb25TZXJ2aWNlKCk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBnZXRQb2tlbW9uID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8TGlzdFJlc3BvbnNlPFBva2Vtb24+PiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7UE9LRU1PTl9VUkxTLmdldFBva2Vtb259LyR7bmFtZS50b0xvd2VyQ2FzZSgpfWApO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwuaHJlZik7XG4gICAgICBjb25zdCBkYXRhID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgUG9rZW1vbkFwaTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYXdhaXQgdGhpcy5nZXRQb2tlbW9uRGVzY3JpcHRpb24obmFtZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZhdm9yaXRlOiB0aGlzLmdldEZhdm9yaXRlTGlzdExvY2FsU3RvcmFnZSgpLnNvbWUoKGZhdm9yaXRlKSA9PiBmYXZvcml0ZSA9PSBkYXRhLmlkKSxcbiAgICAgICAgICAgIGltYWdlOiBQT0tFTU9OX1VSTFMuZ2V0UG9rZW1vblNwcml0ZXNVcmwoZGF0YS5uYW1lKSxcbiAgICAgICAgICAgIGxpbmtJbmZvOiB1cmwuaHJlZixcbiAgICAgICAgICAgIG5hbWU6IGNhcGl0YWxpemVGaXJzdExldHRlcihkYXRhLm5hbWUpLFxuICAgICAgICAgICAgc3RhdHM6IGRhdGEuc3RhdHMubWFwKChwb2tlbW9uU3RhdCkgPT4gKHtcbiAgICAgICAgICAgICAgYmFzZTogcG9rZW1vblN0YXQuYmFzZV9zdGF0LFxuICAgICAgICAgICAgICBuYW1lOiBwb2tlbW9uU3RhdC5zdGF0Lm5hbWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0eXBlczogZGF0YS50eXBlcy5tYXAoKHBva2Vtb25UeXBlKSA9PiAoe1xuICAgICAgICAgICAgICBzbG90OiBwb2tlbW9uVHlwZS5zbG90LFxuICAgICAgICAgICAgICBuYW1lOiBwb2tlbW9uVHlwZS50eXBlLm5hbWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIG5leHRVcmw6IG51bGwsXG4gICAgICAgICAgcHJldmlvdXNVcmw6IG51bGwsXG4gICAgICAgICAgdG90YWxSZWNvcmRzOiAxLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHsgLi4uREVGQVVMVF9QT0tFTU9OX1BBR0lOQVRJT05fUkVTUE9OU0UgfTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0UG9rZW1vbkRlc2NyaXB0aW9uID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7UE9LRU1PTl9VUkxTLmdldFBva2Vtb25TcGVjaWVzfS8ke2lkLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwuaHJlZik7XG4gICAgY29uc3QgZGF0YSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIFBva2Vtb25TcGVjaWVzQXBpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS5mbGF2b3JfdGV4dF9lbnRyaWVzLmZpbmQoKGVudHJ5KSA9PiBlbnRyeS5sYW5ndWFnZS5uYW1lID09PSAnZW4nKTtcbiAgICByZXR1cm4gZGVzY3JpcHRpb24/LmZsYXZvcl90ZXh0IHx8ICcnO1xuICB9O1xuXG4gIGdldFBva2Vtb25MaXN0ID0gKHBhZ2luYXRpb25EYXRhPzogUGFnaW5hdGlvblBhcmFtcyk6IFByb21pc2U8TGlzdFJlc3BvbnNlPFBva2Vtb24+PiA9PiB7XG4gICAgY29uc3QgbGltaXQgPSBwYWdpbmF0aW9uRGF0YSA/IHBhZ2luYXRpb25EYXRhLmxpbWl0IDogMjA7XG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbkRhdGEgPyBwYWdpbmF0aW9uRGF0YS5vZmZzZXQgOiAwO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoUE9LRU1PTl9VUkxTLmdldFBva2Vtb24pO1xuICAgIHVybC5zZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKCksIG9mZnNldDogb2Zmc2V0LnRvU3RyaW5nKCkgfSkudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRQb2tlbW9uTGlzdEJ5VXJsKHVybC5ocmVmKS5jYXRjaCgoZXJyb3IpID0+IGVycm9yKTtcbiAgfTtcblxuICBnZXRQb2tlbW9uTGlzdEJ5VXJsID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxMaXN0UmVzcG9uc2U8UG9rZW1vbj4+ID0+IHtcbiAgICBjb25zdCB1cmxQYXJzZWQgPSBuZXcgVVJMKHVybCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gTnVtYmVyKHVybFBhcnNlZC5zZWFyY2hQYXJhbXMuZ2V0KCdvZmZzZXQnKSk7XG4gICAgbGV0IGJhc2VJRCA9IGlzTmFOKG9mZnNldCkgPyAxIDogb2Zmc2V0ICsgMTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBkYXRhID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgUG9rZW1vbkFwaUxpc3RJdGVtO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGRhdGEucmVzdWx0cy5tYXAoKHBva2Vtb24pID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSAoYmFzZUlEKyspLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgaW1hZ2U6IFBPS0VNT05fVVJMUy5nZXRQb2tlbW9uU3ByaXRlc1VybChwb2tlbW9uLm5hbWUpLFxuICAgICAgICAgIG5hbWU6IGNhcGl0YWxpemVGaXJzdExldHRlcihwb2tlbW9uLm5hbWUpLFxuICAgICAgICAgIGZhdm9yaXRlOiB0aGlzLmdldEZhdm9yaXRlTGlzdExvY2FsU3RvcmFnZSgpLnNvbWUoKGZhdm9yaXRlKSA9PiBmYXZvcml0ZSA9PSBpZCksXG4gICAgICAgIH0gYXMgUG9rZW1vbjtcbiAgICAgIH0pLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICB0b3RhbFJlY29yZHM6IGRhdGEuY291bnQsXG4gICAgICAgIG5leHRVcmw6IGRhdGEubmV4dCxcbiAgICAgICAgcHJldmlvdXNVcmw6IGRhdGEucHJldmlvdXMsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgZ2V0RmF2b3JpdGVMaXN0TG9jYWxTdG9yYWdlID0gKCk6IHN0cmluZ1tdID0+IHtcbiAgICBjb25zdCBmYXZvcml0ZUxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShGQVZPUklURV9QT0tFTU9OU19LRVkpO1xuICAgIHJldHVybiBmYXZvcml0ZUxpc3QgPyBKU09OLnBhcnNlKGZhdm9yaXRlTGlzdCkgOiBbXTtcbiAgfTtcblxuICBnZXRGYXZvcml0ZUxpc3QgPSAoKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh0aGlzLmdldEZhdm9yaXRlTGlzdExvY2FsU3RvcmFnZSgpKTtcbiAgICB9KTtcbiAgfTtcblxuICBzYXZlQXNGYXZvcml0ZSA9IGFzeW5jIChwb2tlbW9uSUQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgICBjb25zdCBmYXZvcml0ZUxpc3QgPSBhd2FpdCB0aGlzLmdldEZhdm9yaXRlTGlzdCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgRkFWT1JJVEVfUE9LRU1PTlNfS0VZLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoWy4uLmZhdm9yaXRlTGlzdCwgcG9rZW1vbklEXS5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYikpKSxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmdldEZhdm9yaXRlTGlzdCgpO1xuICB9O1xuXG4gIHJlbW92ZUZyb21GYXZvcml0ZXMgPSBhc3luYyAocG9rZW1vbklEOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG4gICAgY29uc3QgZmF2b3JpdGVMaXN0ID0gYXdhaXQgdGhpcy5nZXRGYXZvcml0ZUxpc3QoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShGQVZPUklURV9QT0tFTU9OU19LRVksIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlTGlzdC5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gcG9rZW1vbklEKSkpO1xuICAgIHJldHVybiB0aGlzLmdldEZhdm9yaXRlTGlzdCgpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuIiwiZXhwb3J0IGNvbnN0IFVSTF9CQVNFID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjInO1xuXG5leHBvcnQgY29uc3QgUE9LRU1PTl9VUkxTID0ge1xuICBnZXRQb2tlbW9uOiBgJHtVUkxfQkFTRX0vcG9rZW1vbmAsXG4gIGdldFBva2Vtb25TcGVjaWVzOiBgJHtVUkxfQkFTRX0vcG9rZW1vbi1zcGVjaWVzYCxcbiAgZ2V0UG9rZW1vblNwcml0ZXNVcmw6IChuYW1lOiBzdHJpbmcpID0+IGBodHRwczovL2ltZy5wb2tlbW9uZGIubmV0L3Nwcml0ZXMvaG9tZS9ub3JtYWwvJHtuYW1lfS5wbmdgLFxufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUG9rZW1vblNlcnZpY2UgfSBmcm9tICcuL1Bva2Vtb25TZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnJztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQXV0aFNlcnZpY2UgfSBmcm9tICcuL0F1dGhTZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vUG9rZW1vbic7XG4iLCJleHBvcnQgY29uc3QgZGVib3VuY2UgPSA8UGFyYW1zIGV4dGVuZHMgdW5rbm93bltdPihcbiAgZnVuYzogKC4uLmFyZ3M6IFBhcmFtcykgPT4gdm9pZCxcbiAgdGltZW91dCA9IDMwMCxcbik6ICgoLi4uYXJnczogUGFyYW1zKSA9PiB2b2lkKSA9PiB7XG4gIGxldCB0aW1lcjogTm9kZUpTLlRpbWVvdXQ7XG4gIHJldHVybiAoLi4uYXJnczogUGFyYW1zKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBGaWVsZFZhbGlkYXRvciB9IGZyb20gJ2Zvcm1payc7XG5cbmV4cG9ydCBlbnVtIEZvcm1WYWxpZGF0aW9uIHtcbiAgUkVRVUlSRUQgPSAnUkVRVUlSRUQnLFxufVxuXG5leHBvcnQgZW51bSBGb3JtVmFsaWRhdGlvbldpdGhWYWx1ZSB7XG4gIE1JTl9MRU5HVEggPSAnTUlOX0xFTkdUSCcsXG59XG5cbnR5cGUgVmFsaWRhdG9yID0ge1xuICBlcnJvck1lc3NhZ2U6IChmaWVsZE5hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICB2YWxpZGF0b3I6ICh2YWx1ZTogdW5rbm93biwgY29tcGFyYXRpdmVWYWx1ZT86IHVua25vd24pID0+IGJvb2xlYW47XG59O1xuXG50eXBlIFZhbGlkYXRvck9iamVjdCA9IHtcbiAgW2tleSBpbiBGb3JtVmFsaWRhdGlvbiB8IEZvcm1WYWxpZGF0aW9uV2l0aFZhbHVlXTogVmFsaWRhdG9yO1xufTtcblxudHlwZSBGb3JtVmFsaWRhdGlvbk9iamVjdCA9IHtcbiAgdmFsaWRhdG9yOiBGb3JtVmFsaWRhdGlvbldpdGhWYWx1ZTtcbiAgdmFsdWU6IHVua25vd247XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRpb25zID0gKFxuICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgdmFsaWRhdGlvbnM6IChGb3JtVmFsaWRhdGlvbiB8IEZvcm1WYWxpZGF0aW9uT2JqZWN0KVtdLFxuKTogRmllbGRWYWxpZGF0b3IgPT4ge1xuICByZXR1cm4gKGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcbiAgICB2YWxpZGF0aW9ucy5ldmVyeSgodmFsaWRhdGlvbikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGlvbk5hbWUgPSBpc0Zvcm1WYWxpZGF0aW9uT2JqZWN0KHZhbGlkYXRpb24pID8gdmFsaWRhdGlvbi52YWxpZGF0b3IgOiB2YWxpZGF0aW9uO1xuICAgICAgY29uc3QgdmFsaWRhdG9yT2JqID0gdmFsaWRhdG9yT2JqZWN0W3ZhbGlkYXRpb25OYW1lXSBhcyBWYWxpZGF0b3I7XG4gICAgICBjb25zdCByZXN1bHQgPSBpc0Zvcm1WYWxpZGF0aW9uT2JqZWN0KHZhbGlkYXRpb24pXG4gICAgICAgID8gdmFsaWRhdG9yT2JqLnZhbGlkYXRvcihjdXJyZW50VmFsdWUsIHZhbGlkYXRpb24udmFsdWUpXG4gICAgICAgIDogdmFsaWRhdG9yT2JqLnZhbGlkYXRvcihjdXJyZW50VmFsdWUpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkgZXJyb3JNZXNzYWdlID0gdmFsaWRhdG9yT2JqLmVycm9yTWVzc2FnZShmaWVsZE5hbWUpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVycm9yTWVzc2FnZTtcbiAgfTtcbn07XG5cbmNvbnN0IHZhbGlkYXRvck9iamVjdDogVmFsaWRhdG9yT2JqZWN0ID0ge1xuICBbRm9ybVZhbGlkYXRpb24uUkVRVUlSRURdOiB7XG4gICAgZXJyb3JNZXNzYWdlOiAoZmllbGROYW1lOiBzdHJpbmcpID0+IGAke2ZpZWxkTmFtZX0gaXMgcmVxdWlyZWRgLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiAhIXZhbHVlLFxuICB9LFxuICBbRm9ybVZhbGlkYXRpb25XaXRoVmFsdWUuTUlOX0xFTkdUSF06IHtcbiAgICBlcnJvck1lc3NhZ2U6IChmaWVsZE5hbWU6IHN0cmluZykgPT4gYCR7ZmllbGROYW1lfSByZXF1aXJlIDMgY2hhcmFjdGVycyBtaW5pbXVtYCxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZSwgY29tcGFyYXRpdmVWYWx1ZSkgPT4gKHZhbHVlIGFzIHN0cmluZykubGVuZ3RoID49IChjb21wYXJhdGl2ZVZhbHVlIGFzIG51bWJlciksXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBpc0Zvcm1WYWxpZGF0aW9uT2JqZWN0KHZhbGlkYXRpb246IEZvcm1WYWxpZGF0aW9uIHwgRm9ybVZhbGlkYXRpb25PYmplY3QpOiB2YWxpZGF0aW9uIGlzIEZvcm1WYWxpZGF0aW9uT2JqZWN0IHtcbiAgcmV0dXJuICh2YWxpZGF0aW9uIGFzIEZvcm1WYWxpZGF0aW9uT2JqZWN0KS52YWxpZGF0b3IgIT09IHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQXN5bmNVdGlscyc7XG5leHBvcnQgKiBmcm9tICcuL0Zvcm1WYWxpZGF0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL1N0cmluZ0Zvcm1hdHRlcic7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXzU3YmxvY2tzX3Rlc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rXzU3YmxvY2tzX3Rlc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nsc3hfZGlzdF9jbHN4X21fanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZC1jMTNmNmRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==