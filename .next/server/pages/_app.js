/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("function _taggedTemplateLiteral(strings, raw) {\n  if (!raw) {\n    raw = strings.slice(0);\n  }\n\n  return Object.freeze(Object.defineProperties(strings, {\n    raw: {\n      value: Object.freeze(raw)\n    }\n  }));\n}\n\nmodule.exports = _taggedTemplateLiteral;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSx5QkFBeUIsbUJBQW1CLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3lvbG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzPzQ1MTYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWw7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\n");

/***/ }),

/***/ "./components/Layout/Header/index.jsx":
/*!********************************************!*\
  !*** ./components/Layout/Header/index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _templateObject;\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_2__.Layout.Header;\n\nvar MainHeader = function MainHeader() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderMenu, {\n    mode: \"horizontal\",\n    defaultSelectedKeys: ['1']\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n    key: 1\n  }, \"Introduce\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n    key: 2\n  }, \"Post\"))));\n};\n\nvar HeaderMenu = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Menu)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  justify-content: flex-end;\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFRSSxNQUFSLEdBQW1CSCwrQ0FBbkI7O0FBQ0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixzQkFDRSx1SUFDRSwyREFBQyxNQUFELHFCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERixlQUVFLDJEQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUMsWUFBakI7QUFBOEIsdUJBQW1CLEVBQUUsQ0FBQyxHQUFEO0FBQW5ELGtCQUNFLDJEQUFDLDJDQUFEO0FBQVcsT0FBRyxFQUFFO0FBQWhCLGlCQURGLGVBRUUsMkRBQUMsMkNBQUQ7QUFBVyxPQUFHLEVBQUU7QUFBaEIsWUFGRixDQUZGLENBREYsQ0FERjtBQVdELENBWkQ7O0FBY0EsSUFBTUMsVUFBVSxHQUFHSCxzREFBTSxDQUFDRCxzQ0FBRCxDQUFULGtLQUFoQjtBQUlBLGlFQUFlRyxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9sb2cvLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIvaW5kZXguanN4Pzg1MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmNvbnN0IHsgSGVhZGVyIH0gPSBMYXlvdXQ7XHJcbmNvbnN0IE1haW5IZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICA8SGVhZGVyTWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXsxfT5JbnRyb2R1Y2U8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXsyfT5Qb3N0PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9IZWFkZXJNZW51PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlck1lbnUgPSBzdHlsZWQoTWVudSlgXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiTWVudSIsInN0eWxlZCIsIkhlYWRlciIsIk1haW5IZWFkZXIiLCJIZWFkZXJNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Header/index.jsx\n");

/***/ }),

/***/ "./components/index.jsx":
/*!******************************!*\
  !*** ./components/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout/Header */ \"./components/Layout/Header/index.jsx\");\n\n\n\nvar index = function index() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Index Component\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLHNCQUNFLHVJQUNFLDJEQUFDLHNEQUFELE9BREYsZUFFRSwwRkFGRixDQURGO0FBUUQsQ0FURDs7QUFXQSxpRUFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3lvbG9nLy4vY29tcG9uZW50cy9pbmRleC5qc3g/ZWU4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tICcuL0xheW91dC9IZWFkZXInO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNYWluSGVhZGVyIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgSW5kZXggQ29tcG9uZW50XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbkhlYWRlciIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ \"./components/index.jsx\");\n/* harmony import */ var _public_style_yolog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/style/yolog.css */ \"./public/style/yolog.css\");\n/* harmony import */ var _public_style_yolog_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_style_yolog_css__WEBPACK_IMPORTED_MODULE_2__);\n\n // import \"antd/dist/antd.css\";\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7O0FBRUEsSUFBTUUsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQixzQkFDRSx1SUFDRSwyREFBQyx5REFBRCxPQURGLENBREY7QUFLRCxDQU5EOztBQVFBLGlFQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9sb2cvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleCc7XHJcbi8vIGltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvc3R5bGUveW9sb2cuY3NzXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNYWluIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbiIsIkFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/style/yolog.css":
/*!********************************!*\
  !*** ./public/style/yolog.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();