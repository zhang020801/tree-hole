"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************************************************************************************************!*\
  !*** D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/main.js?{"page":"pages%2Funi-agree%2Funi-agree"} ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/uni-agree/uni-agree.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/uni-agree/uni-agree'\n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsbUZBQUc7QUFDWCxRQUFRLG1GQUFHO0FBQ1gsUUFBUSxtRkFBRztBQUNYLGdCQUFnQixtRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy91bmktYWdyZWUvdW5pLWFncmVlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdW5pLWFncmVlL3VuaS1hZ3JlZSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************************************************************!*\
  !*** D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/main.js?{"type":"appStyle"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************************************************************************!*\
  !*** D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".fixbg": {
    "": {
      "width": [
        100,
        0,
        0,
        1
      ],
      "height": [
        100,
        0,
        0,
        1
      ],
      "position": [
        "fixed",
        0,
        0,
        1
      ],
      "left": [
        0,
        0,
        0,
        1
      ],
      "top": [
        0,
        0,
        0,
        1
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************************************************!*\
  !*** D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/pages/uni-agree/uni-agree.nvue?mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page */ 5);\n/* harmony import */ var _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-agree.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"dca09dc4\",\n  false,\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/uni-agree/uni-agree.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNFQUE4RDtBQUNsSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0VBQThEO0FBQ3ZIOztBQUVBOztBQUVBO0FBQ2lMO0FBQ2pMLGdCQUFnQiwwTEFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktYWdyZWUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01M2NiZjI4OCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1hZ3JlZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxcSEJ1aWxkZXIgWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZGNhMDlkYzRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdW5pLWFncmVlL3VuaS1hZ3JlZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*************************************************************************************************************************************!*\
  !*** D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/pages/uni-agree/uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/pages/uni-agree/uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", { staticClass: ["page"] }, [
        _c("view", [
          _c(
            "u-text",
            {
              staticClass: ["title"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("个人信息保护指引")]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("1.在浏览使用时，我们会收集、使用设备标识信息用于推荐。")]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [
              _vm._v(
                "2.我们可能会申请位置权限，用于演示 uni-app 的地图、定位能力。"
              )
            ]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("3.你可以查看完整版")]
          )
        ]),
        _c("view", { staticClass: ["text-item", "flex-r"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl", "hl"],
              appendAsTree: true,
              attrs: { append: "tree" },
              on: { click: _vm.openprotocol }
            },
            [_vm._v("《用户协议》")]
          ),
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v(" 和 ")]
          ),
          _c(
            "u-text",
            {
              staticClass: ["tl", "hl"],
              appendAsTree: true,
              attrs: { append: "tree" },
              on: { click: _vm.openPrivacyPolicy }
            },
            [_vm._v("《隐私政策》")]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [
              _vm._v(
                "以便了解我们收集、使用、共享、存储信息的情况，以及对信息的保护措施。"
              )
            ]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["service"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("如果你同意请点击下面的按钮以接受我们的服务")]
          )
        ]),
        _c(
          "view",
          { staticClass: ["text-item", "confirm"] },
          [
            _c(
              "button",
              {
                staticClass: ["btn-privacy"],
                attrs: { type: "primary" },
                on: { click: _vm.agree }
              },
              [_vm._v("同意")]
            ),
            _c(
              "button",
              {
                staticClass: ["btn-privacy", "btn-disagree"],
                on: { click: _vm.disagree }
              },
              [_vm._v("暂不使用")]
            )
          ],
          1
        ),
        _c("view", { staticClass: ["exit-area"] })
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*******************************************************************************************************************************!*\
  !*** D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/pages/uni-agree/uni-agree.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVkLENBQWdCLGdnQkFBRyxFQUFDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXEhCdWlsZGVyIFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRTpcXFxcSEJ1aWxkZXIgWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUU6XFxcXEhCdWlsZGVyIFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxIQnVpbGRlciBYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUU6XFxcXEhCdWlsZGVyIFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFFOlxcXFxIQnVpbGRlciBYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1hZ3JlZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/pages/uni-agree/uni-agree.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniStarterConfig = _interopRequireDefault(__webpack_require__(/*! @/uni-starter.config.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar about = _uniStarterConfig.default.about;var _default = { data: function data() {return {};}, onLoad: function onLoad() {this._canBack = false;}, onBackPress: function onBackPress() {return !this._canBack;}, methods: { openprotocol: function openprotocol(e) {uni.navigateTo({ url: \"/pages/common/webview/webview?url=\" + about.agreements[0].url });}, openPrivacyPolicy: function openPrivacyPolicy(e) {uni.navigateTo({ url: \"/pages/common/webview/webview?url=\" + about.agreements[1].url });}, agree: function agree(e) {var saveStatus = uni.setStorageSync(\"userprotocol\", 1);this._canBack = true;setTimeout(function () {uni.navigateBack({ animationDuration: 0 });}, 100);}, disagree: function disagree() {plus.runtime.quit();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdW5pLWFncmVlL3VuaS1hZ3JlZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQSxzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDQSxLLEdBQUEseUIsQ0FBQSxLLGdCQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFVBRUEsQ0FKQSxFQUtBLE1BTEEsb0JBS0EsQ0FDQSxzQkFDQSxDQVBBLEVBUUEsV0FSQSx5QkFRQSxDQUNBLHNCQUNBLENBVkEsRUFXQSxXQUNBLFlBREEsd0JBQ0EsQ0FEQSxFQUNBLENBQ0EsaUJBQ0EsbUVBREEsSUFHQSxDQUxBLEVBTUEsaUJBTkEsNkJBTUEsQ0FOQSxFQU1BLENBQ0EsaUJBQ0EsbUVBREEsSUFHQSxDQVZBLEVBV0EsS0FYQSxpQkFXQSxDQVhBLEVBV0EsQ0FDQSx1REFDQSxxQkFDQSx3QkFDQSxtQkFDQSxvQkFEQSxJQUdBLENBSkEsRUFJQSxHQUpBLEVBS0EsQ0FuQkEsRUFvQkEsUUFwQkEsc0JBb0JBLENBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBLEtBckNBLEVBWEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7kuKrkurrkv6Hmga/kv53miqTmjIflvJU8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGV4dC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGxcIj4xLuWcqOa1j+iniOS9v+eUqOaXtu+8jOaIkeS7rOS8muaUtumbhuOAgeS9v+eUqOiuvuWkh+agh+ivhuS/oeaBr+eUqOS6juaOqOiNkOOAgjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0bFwiPjIu5oiR5Lus5Y+v6IO95Lya55Sz6K+35L2N572u5p2D6ZmQ77yM55So5LqO5ryU56S6IHVuaS1hcHAg55qE5Zyw5Zu+44CB5a6a5L2N6IO95Yqb44CCPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRleHQtaXRlbVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsXCI+My7kvaDlj6/ku6Xmn6XnnIvlrozmlbTniYg8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGV4dC1pdGVtIGZsZXgtclwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsIGhsXCIgQGNsaWNrPVwib3BlbnByb3RvY29sXCI+44CK55So5oi35Y2P6K6u44CLPC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsXCI+IOWSjCA8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGwgaGxcIiBAY2xpY2s9XCJvcGVuUHJpdmFjeVBvbGljeVwiPuOAiumakOengeaUv+etluOAizwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0bFwiPuS7peS+v+S6huino+aIkeS7rOaUtumbhuOAgeS9v+eUqOOAgeWFseS6q+OAgeWtmOWCqOS/oeaBr+eahOaDheWGte+8jOS7peWPiuWvueS/oeaBr+eahOS/neaKpOaOquaWveOAgjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzZXJ2aWNlXCI+5aaC5p6c5L2g5ZCM5oSP6K+354K55Ye75LiL6Z2i55qE5oyJ6ZKu5Lul5o6l5Y+X5oiR5Lus55qE5pyN5YqhPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRleHQtaXRlbSBjb25maXJtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcHJpdmFjeVwiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiYWdyZWVcIj7lkIzmhI88L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1wcml2YWN5IGJ0bi1kaXNhZ3JlZVwiIEBjbGljaz1cImRpc2FncmVlXCI+5pqC5LiN5L2/55SoPC9idXR0b24+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZXhpdC1hcmVhXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBjb25maWcgZnJvbSAnQC91bmktc3RhcnRlci5jb25maWcuanMnO1xuY29uc3QgeyBhYm91dCB9ID0gY29uZmlnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5CYWNrID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkJhY2tQcmVzcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9jYW5CYWNrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvcGVucHJvdG9jb2woZSkge1xyXG4gICAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvY29tbW9uL3dlYnZpZXcvd2Vidmlldz91cmw9XCIrYWJvdXQuYWdyZWVtZW50c1swXS51cmxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblx0XHRcdG9wZW5Qcml2YWN5UG9saWN5KGUpIHtcclxuXHRcdFx0ICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0ICAgICAgICB1cmw6IFwiL3BhZ2VzL2NvbW1vbi93ZWJ2aWV3L3dlYnZpZXc/dXJsPVwiK2Fib3V0LmFncmVlbWVudHNbMV0udXJsXHJcblx0XHRcdCAgICB9KVxyXG5cdFx0XHR9LFxyXG4gICAgICAgICAgICBhZ3JlZShlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZVN0YXR1cyA9IHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJwcm90b2NvbFwiLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbkJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc2FncmVlKCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xuXHRcdFx0XHRwbHVzLnJ1bnRpbWUucXVpdCgpO1xuXHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrprpgIDlh7rmnKzlupTnlKjvvJ8nLFxuXHRcdFx0XHRcdGNhbmNlbFRleHQ6XCLpgIDlh7pcIixcblx0XHRcdFx0XHRjb25maXJtVGV4dDpcIuWPlua2iFwiLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZighZS5jb25maXJtKXtcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWY9XCJhYm91dDpibGFua1wiO1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cuY2xvc2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyAjZW5kaWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAucGFnZSB7XHJcbiAgICAgICAgcGFkZGluZzogODBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50bCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5obCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDdBRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25maXJtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaXZhY3kge1xyXG4gICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWRpc2FncmVlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************!*\
  !*** D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/uni-starter.config.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //这是应用的配置页面，App.vue挂载到getApp().globalData.config\nvar _default = {\n  \"h5\": {\n    \"url\": \"https://uni-starter.dcloud.net.cn\" //\t前端网页托管的域名\t\n    // 在h5端全局悬浮引导用户下载app的功能 更多自定义要求在/common/openApp.js中修改\t\n    // \"openApp\": { //如不需要本功能直接移除本节点即可\t\n    // \t//点击悬浮下载栏后打开的网页链接\n    // \t\"openUrl\": '/#/pages/ucenter/invite/invite',\n    // \t//左侧显示的应用名称\t\n    // \t\"appname\": 'uni-starter',\n    // \t//应用的图标\t\n    // \t\"logo\": './static/logo.png',\n    // }\n  },\n  \"mp\": {\n    \"weixin\": {\n      //微信小程序原始id，微信小程序分享时\n      \"id\": \"gh_33446d7f7a26\" } },\n\n\n  \"router\": {\n    /*\n              \t名词解释：“强制登录页”\n              \t\t在打开定义的需强制登录的页面之前会自动检查（前端校验）uni_id_token的值是否有效,\n              \t\t如果无效会自动跳转到登录页面\n              \t两种模式：\n              \t\t1.needLogin：黑名单模式。枚举游客不可访问的页面。\n              \t\t2.visitor：白名单模式。枚举游客可访问的页面。\n              \t* 注意：黑名单与白名单模式二选一\n              */\n    // \"needLogin\" : [\n    //  \t{pattern:/^\\/pages\\/list.*/},\t//支持正则表达式\n    // \t\t\"/uni_modules/uni-news-favorite/pages/uni-news-favorite/list\",\n    // \t\t\"/uni_modules/uni-feedback/pages/uni-feedback/add\"\n    // ],\n    \"visitor\": [\n    \"/\", //注意入口页必须直接写 \"/\"\n    { \"pattern\": /^\\/pages\\/list.*/ }, //支持正则表达式\n    { \"pattern\": /^\\/pages\\/ucenter\\/login-page.*/ },\n    \"/pages/common/webview/webview\",\n    \"/pages/grid/grid\",\n    \"/pages/ucenter/ucenter\",\n    \"/pages/ucenter/guestbook/guestbook\",\n    \"/pages/ucenter/about/about\",\n    \"/pages/ucenter/settings/settings\"],\n\n    /*\n                                         login:配置登录类型与优先级\n                                         \t未列举到的，或设备环境不支持的选项，将被隐藏。如果你需要在不同平台有不同的配置，直接用条件编译即可\n                                         \t根据数组的第0项，决定登录方式的第一优先级。\n                                         */\n    \"login\": [\"weixin\", \"univerify\", \"username\", \"smsCode\", \"apple\"] },\n\n  //关于应用\n  \"about\": {\n    //应用名称\n    \"appName\": \"uni-starter\",\n    //应用logo\n    \"logo\": \"/static/logo.png\",\n    //公司名称\n    \"company\": \"北京xx网络技术有限公司\",\n    //口号\n    \"slogan\": \"云端一体应用快速开发模版\",\n    //政策协议\n    \"agreements\": [{\n      \"title\": \"用户服务协议\", //如果开启了多语言国际化，本配置将失效。请在 lang/en.js 和 lang/zh-Hans.js中配置\n      \"url\": \"请填写用户服务协议链接\" //对应的网络链接\n    },\n    {\n      \"title\": \"隐私政策\", //如果开启了多语言国际化，本配置将失效。请在 lang/en.js 和 lang/zh-Hans.js中配置\n      \"url\": \"请填写隐私政策链接\" //对应的网络链接\n    }],\n\n    //应用的链接，用于分享到第三方平台和生成关于我们页的二维码\n    \"download\": \"\",\n    //version\n    \"version\": \"1.0.0\" //用于非app端显示，app端自动获取\n  },\n  \"download\": { //用于生成二合一下载页面\n    \"ios\": \"https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8\",\n    \"android\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-97fca9f2-41f6-449f-a35e-3f135d4c3875/6d754387-a6c3-48ed-8ad2-e8f39b40fc01.apk\" },\n\n  //用于打开应用市场评分界面\n  \"marketId\": {\n    \"ios\": \"id1417078253\",\n    \"android\": \"123456\" },\n\n  //配置多语言国际化。i18n为英文单词 internationalization的首末字符i和n，18为中间的字符数 是“国际化”的简称\n  \"i18n\": {\n    \"enable\": false //默认关闭，国际化。如果你想使用国际化相关功能，请改为true\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pLXN0YXJ0ZXIuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3RkFBQTtlQUNlO0FBQ2QsUUFBTTtBQUNMLFdBQU8sbUNBREYsQ0FDdUM7QUFDM0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkssR0FEUTtBQWFkLFFBQU07QUFDTCxjQUFVO0FBQ1Q7QUFDQSxZQUFNLGlCQUZHLEVBREwsRUFiUTs7O0FBbUJkLFlBQVU7QUFDVDs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQVk7QUFDWCxPQURXLEVBQ1A7QUFDSixNQUFDLFdBQVUsa0JBQVgsRUFGVyxFQUVxQjtBQUNoQyxNQUFDLFdBQVUsaUNBQVgsRUFIVztBQUlYLG1DQUpXO0FBS1gsc0JBTFc7QUFNWCw0QkFOVztBQU9YLHdDQVBXO0FBUVgsZ0NBUlc7QUFTWCxzQ0FUVyxDQWZIOztBQTBCVDs7Ozs7QUFLQSxhQUFTLENBQUMsUUFBRCxFQUFVLFdBQVYsRUFBc0IsVUFBdEIsRUFBa0MsU0FBbEMsRUFBNkMsT0FBN0MsQ0EvQkEsRUFuQkk7O0FBb0RkO0FBQ0EsV0FBUztBQUNSO0FBQ0EsZUFBVyxhQUZIO0FBR1I7QUFDQSxZQUFRLGtCQUpBO0FBS1I7QUFDQSxlQUFXLGNBTkg7QUFPUjtBQUNBLGNBQVUsY0FSRjtBQVNSO0FBQ0Esa0JBQWMsQ0FBQztBQUNiLGVBQVMsUUFESSxFQUNNO0FBQ25CLGFBQU8sYUFGTSxDQUVRO0FBRlIsS0FBRDtBQUliO0FBQ0MsZUFBUyxNQURWLEVBQ2tCO0FBQ2pCLGFBQU8sV0FGUixDQUVvQjtBQUZwQixLQUphLENBVk47O0FBbUJSO0FBQ0EsZ0JBQVksRUFwQko7QUFxQlI7QUFDQSxlQUFVLE9BdEJGLENBc0JVO0FBdEJWLEdBckRLO0FBNkVkLGNBQVcsRUFBRTtBQUNaLFdBQU0saUVBREk7QUFFVixlQUFVLHdIQUZBLEVBN0VHOztBQWlGZDtBQUNBLGNBQVc7QUFDVixXQUFNLGNBREk7QUFFVixlQUFVLFFBRkEsRUFsRkc7O0FBc0ZkO0FBQ0EsVUFBTztBQUNOLGNBQVMsS0FESCxDQUNTO0FBRFQsR0F2Rk8sRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/ov5nmmK/lupTnlKjnmoTphY3nva7pobXpnaLvvIxBcHAudnVl5oyC6L295YiwZ2V0QXBwKCkuZ2xvYmFsRGF0YS5jb25maWdcbmV4cG9ydCBkZWZhdWx0IHtcblx0XCJoNVwiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL3VuaS1zdGFydGVyLmRjbG91ZC5uZXQuY25cIiwgLy9cdOWJjeerr+e9kemhteaJmOeuoeeahOWfn+WQjVx0XG5cdFx0IC8vIOWcqGg156uv5YWo5bGA5oKs5rWu5byV5a+855So5oi35LiL6L29YXBw55qE5Yqf6IO9IOabtOWkmuiHquWumuS5ieimgeaxguWcqC9jb21tb24vb3BlbkFwcC5qc+S4reS/ruaUuVx0XG5cdFx0Ly8gXCJvcGVuQXBwXCI6IHsgLy/lpoLkuI3pnIDopoHmnKzlip/og73nm7TmjqXnp7vpmaTmnKzoioLngrnljbPlj69cdFxuXHRcdC8vIFx0Ly/ngrnlh7vmgqzmta7kuIvovb3moI/lkI7miZPlvIDnmoTnvZHpobXpk77mjqVcblx0XHQvLyBcdFwib3BlblVybFwiOiAnLyMvcGFnZXMvdWNlbnRlci9pbnZpdGUvaW52aXRlJyxcblx0XHQvLyBcdC8v5bem5L6n5pi+56S655qE5bqU55So5ZCN56ewXHRcblx0XHQvLyBcdFwiYXBwbmFtZVwiOiAndW5pLXN0YXJ0ZXInLFxuXHRcdC8vIFx0Ly/lupTnlKjnmoTlm77moIdcdFxuXHRcdC8vIFx0XCJsb2dvXCI6ICcuL3N0YXRpYy9sb2dvLnBuZycsXG5cdFx0Ly8gfVxuXHR9LFxuXHRcIm1wXCI6IHtcblx0XHRcIndlaXhpblwiOiB7XG5cdFx0XHQvL+W+ruS/oeWwj+eoi+W6j+WOn+Wni2lk77yM5b6u5L+h5bCP56iL5bqP5YiG5Lqr5pe2XG5cdFx0XHRcImlkXCI6IFwiZ2hfMzM0NDZkN2Y3YTI2XCJcblx0XHR9XG5cdH0sXG5cdFwicm91dGVyXCI6IHtcblx0XHQvKlxuXHRcdFx05ZCN6K+N6Kej6YeK77ya4oCc5by65Yi255m75b2V6aG14oCdXG5cdFx0XHRcdOWcqOaJk+W8gOWumuS5ieeahOmcgOW8uuWItueZu+W9leeahOmhtemdouS5i+WJjeS8muiHquWKqOajgOafpe+8iOWJjeerr+agoemqjO+8iXVuaV9pZF90b2tlbueahOWAvOaYr+WQpuacieaViCxcblx0XHRcdFx05aaC5p6c5peg5pWI5Lya6Ieq5Yqo6Lez6L2s5Yiw55m75b2V6aG16Z2iXG5cdFx0XHTkuKTnp43mqKHlvI/vvJpcblx0XHRcdFx0MS5uZWVkTG9naW7vvJrpu5HlkI3ljZXmqKHlvI/jgILmnprkuL7muLjlrqLkuI3lj6/orr/pl67nmoTpobXpnaLjgIJcblx0XHRcdFx0Mi52aXNpdG9y77ya55m95ZCN5Y2V5qih5byP44CC5p6a5Li+5ri45a6i5Y+v6K6/6Zeu55qE6aG16Z2i44CCXG5cdFx0XHQqIOazqOaEj++8mum7keWQjeWNleS4jueZveWQjeWNleaooeW8j+S6jOmAieS4gFxuXHRcdCovXG5cdFx0Ly8gXCJuZWVkTG9naW5cIiA6IFtcblx0XHQvLyAgXHR7cGF0dGVybjovXlxcL3BhZ2VzXFwvbGlzdC4qL30sXHQvL+aUr+aMgeato+WImeihqOi+vuW8j1xuXHRcdC8vIFx0XHRcIi91bmlfbW9kdWxlcy91bmktbmV3cy1mYXZvcml0ZS9wYWdlcy91bmktbmV3cy1mYXZvcml0ZS9saXN0XCIsXG5cdFx0Ly8gXHRcdFwiL3VuaV9tb2R1bGVzL3VuaS1mZWVkYmFjay9wYWdlcy91bmktZmVlZGJhY2svYWRkXCJcblx0XHQvLyBdLFxuXHRcdFwidmlzaXRvclwiIDogW1xuXHRcdFx0XCIvXCIsLy/ms6jmhI/lhaXlj6PpobXlv4Xpobvnm7TmjqXlhpkgXCIvXCJcblx0XHRcdHtcInBhdHRlcm5cIjovXlxcL3BhZ2VzXFwvbGlzdC4qL30sXHQvL+aUr+aMgeato+WImeihqOi+vuW8j1xuXHRcdFx0e1wicGF0dGVyblwiOi9eXFwvcGFnZXNcXC91Y2VudGVyXFwvbG9naW4tcGFnZS4qL30sXG5cdFx0XHRcIi9wYWdlcy9jb21tb24vd2Vidmlldy93ZWJ2aWV3XCIsXG5cdFx0XHRcIi9wYWdlcy9ncmlkL2dyaWRcIixcblx0XHRcdFwiL3BhZ2VzL3VjZW50ZXIvdWNlbnRlclwiLFxuXHRcdFx0XCIvcGFnZXMvdWNlbnRlci9ndWVzdGJvb2svZ3Vlc3Rib29rXCIsXG5cdFx0XHRcIi9wYWdlcy91Y2VudGVyL2Fib3V0L2Fib3V0XCIsXG5cdFx0XHRcIi9wYWdlcy91Y2VudGVyL3NldHRpbmdzL3NldHRpbmdzXCJcblx0XHRdLFxuXHRcdC8qXG5cdFx0bG9naW466YWN572u55m75b2V57G75Z6L5LiO5LyY5YWI57qnXG5cdFx0XHTmnKrliJfkuL7liLDnmoTvvIzmiJborr7lpIfnjq/looPkuI3mlK/mjIHnmoTpgInpobnvvIzlsIbooqvpmpDol4/jgILlpoLmnpzkvaDpnIDopoHlnKjkuI3lkIzlubPlj7DmnInkuI3lkIznmoTphY3nva7vvIznm7TmjqXnlKjmnaHku7bnvJbor5HljbPlj69cblx0XHRcdOagueaNruaVsOe7hOeahOesrDDpobnvvIzlhrPlrprnmbvlvZXmlrnlvI/nmoTnrKzkuIDkvJjlhYjnuqfjgIJcblx0XHQqL1xuXHRcdFwibG9naW5cIjogW1wid2VpeGluXCIsXCJ1bml2ZXJpZnlcIixcInVzZXJuYW1lXCIsIFwic21zQ29kZVwiLCBcImFwcGxlXCJdXG5cdH0sXG5cdC8v5YWz5LqO5bqU55SoXG5cdFwiYWJvdXRcIjoge1xuXHRcdC8v5bqU55So5ZCN56ewXG5cdFx0XCJhcHBOYW1lXCI6IFwidW5pLXN0YXJ0ZXJcIixcblx0XHQvL+W6lOeUqGxvZ29cblx0XHRcImxvZ29cIjogXCIvc3RhdGljL2xvZ28ucG5nXCIsXG5cdFx0Ly/lhazlj7jlkI3np7Bcblx0XHRcImNvbXBhbnlcIjogXCLljJfkuqx4eOe9kee7nOaKgOacr+aciemZkOWFrOWPuFwiLFxuXHRcdC8v5Y+j5Y+3XG5cdFx0XCJzbG9nYW5cIjogXCLkupHnq6/kuIDkvZPlupTnlKjlv6vpgJ/lvIDlj5HmqKHniYhcIixcblx0XHQvL+aUv+etluWNj+iurlxuXHRcdFwiYWdyZWVtZW50c1wiOiBbe1xuXHRcdFx0XHRcInRpdGxlXCI6IFwi55So5oi35pyN5Yqh5Y2P6K6uXCIsIC8v5aaC5p6c5byA5ZCv5LqG5aSa6K+t6KiA5Zu96ZmF5YyW77yM5pys6YWN572u5bCG5aSx5pWI44CC6K+35ZyoIGxhbmcvZW4uanMg5ZKMIGxhbmcvemgtSGFucy5qc+S4remFjee9rlxuXHRcdFx0XHRcInVybFwiOiBcIuivt+Whq+WGmeeUqOaIt+acjeWKoeWNj+iurumTvuaOpVwiIC8v5a+55bqU55qE572R57uc6ZO+5o6lXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInRpdGxlXCI6IFwi6ZqQ56eB5pS/562WXCIsIC8v5aaC5p6c5byA5ZCv5LqG5aSa6K+t6KiA5Zu96ZmF5YyW77yM5pys6YWN572u5bCG5aSx5pWI44CC6K+35ZyoIGxhbmcvZW4uanMg5ZKMIGxhbmcvemgtSGFucy5qc+S4remFjee9rlxuXHRcdFx0XHRcInVybFwiOiBcIuivt+Whq+WGmemakOengeaUv+etlumTvuaOpVwiIC8v5a+55bqU55qE572R57uc6ZO+5o6lXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQvL+W6lOeUqOeahOmTvuaOpe+8jOeUqOS6juWIhuS6q+WIsOesrOS4ieaWueW5s+WPsOWSjOeUn+aIkOWFs+S6juaIkeS7rOmhteeahOS6jOe7tOeggVxuXHRcdFwiZG93bmxvYWRcIjogXCJcIixcblx0XHQvL3ZlcnNpb25cblx0XHRcInZlcnNpb25cIjpcIjEuMC4wXCIgLy/nlKjkuo7pnZ5hcHDnq6/mmL7npLrvvIxhcHDnq6/oh6rliqjojrflj5Zcblx0fSxcblx0XCJkb3dubG9hZFwiOnsgLy/nlKjkuo7nlJ/miJDkuozlkIjkuIDkuIvovb3pobXpnaJcblx0XHRcImlvc1wiOlwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2NuL2FwcC9oZWxsby11bmktYXBwL2lkMTQxNzA3ODI1Mz9tdD04XCIsXG5cdFx0XCJhbmRyb2lkXCI6XCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTk3ZmNhOWYyLTQxZjYtNDQ5Zi1hMzVlLTNmMTM1ZDRjMzg3NS82ZDc1NDM4Ny1hNmMzLTQ4ZWQtOGFkMi1lOGYzOWI0MGZjMDEuYXBrXCJcblx0fSxcblx0Ly/nlKjkuo7miZPlvIDlupTnlKjluILlnLror4TliIbnlYzpnaJcblx0XCJtYXJrZXRJZFwiOntcblx0XHRcImlvc1wiOlwiaWQxNDE3MDc4MjUzXCIsXG5cdFx0XCJhbmRyb2lkXCI6XCIxMjM0NTZcIlxuXHR9LFxuXHQvL+mFjee9ruWkmuivreiogOWbvemZheWMluOAgmkxOG7kuLroi7HmlofljZXor40gaW50ZXJuYXRpb25hbGl6YXRpb27nmoTpppbmnKvlrZfnrKZp5ZKMbu+8jDE45Li65Lit6Ze055qE5a2X56ym5pWwIOaYr+KAnOWbvemZheWMluKAneeahOeugOensFxuXHRcImkxOG5cIjp7XG5cdFx0XCJlbmFibGVcIjpmYWxzZSAvL+m7mOiupOWFs+mXre+8jOWbvemZheWMluOAguWmguaenOS9oOaDs+S9v+eUqOWbvemZheWMluebuOWFs+WKn+iDve+8jOivt+aUueS4unRydWVcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***************************************************************************************************************************************!*\
  !*** D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/pages/uni-agree/uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilder_X_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Users/31156/Desktop/移动互动联网开发/code/project_starter/pages/uni-agree/uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "paddingTop": [
        "80",
        0,
        0,
        0
      ],
      "paddingRight": [
        "30",
        0,
        0,
        0
      ],
      "paddingBottom": [
        "80",
        0,
        0,
        0
      ],
      "paddingLeft": [
        "30",
        0,
        0,
        0
      ]
    }
  },
  ".title": {
    "": {
      "fontSize": [
        "18",
        0,
        0,
        1
      ],
      "lineHeight": [
        "30",
        0,
        0,
        1
      ],
      "marginBottom": [
        "20",
        0,
        0,
        1
      ]
    }
  },
  ".flex-r": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        2
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        2
      ]
    }
  },
  ".text-item": {
    "": {
      "marginBottom": [
        "5",
        0,
        0,
        3
      ]
    }
  },
  ".tl": {
    "": {
      "fontSize": [
        "14",
        0,
        0,
        4
      ],
      "lineHeight": [
        "20",
        0,
        0,
        4
      ]
    }
  },
  ".hl": {
    "": {
      "color": [
        "#007AFF",
        0,
        0,
        5
      ]
    }
  },
  ".service": {
    "": {
      "fontSize": [
        "16",
        0,
        0,
        6
      ],
      "lineHeight": [
        "20",
        0,
        0,
        6
      ],
      "marginTop": [
        "20",
        0,
        0,
        6
      ]
    }
  },
  ".confirm": {
    "": {
      "marginTop": [
        "50",
        0,
        0,
        7
      ],
      "flexDirection": [
        "row",
        0,
        0,
        7
      ]
    }
  },
  ".btn-privacy": {
    "": {
      "flex": [
        1,
        0,
        0,
        8
      ]
    }
  },
  ".btn-disagree": {
    "": {
      "marginLeft": [
        "20",
        0,
        0,
        9
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);