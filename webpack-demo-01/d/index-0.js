/******/ (function(modules) { // webpackBootstrap
/******/ 	// 模块缓存
/******/ 	var installedModules = {};
/******/
/******/ 	// 需求功能
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// 检查模块是否在缓存中
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// 创建一个新模块（并将其放入缓存）
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// 执行模块功能
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// 将模块标记为已加载
/******/ 		module.l = true;
/******/
/******/ 		// 返回模块的导出
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// 公开模块对象（__webpack_modules__）
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// 暴露模块缓存
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// 为和谐输出定义吸气功能
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// 在出口上定义__esModule
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// 创建一个假的名称空间对象
/******/ 	// 模式＆1：值是模块ID，需要它
/******/ 	// 模式＆2：将value的所有属性合并到ns中
/******/ 	// 模式＆4：当已为ns对象时返回值
/******/ 	// 模式＆8 | 1：表现为require
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
/******/ 	// getDefaultExport函数，用于与非和谐模块兼容
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
/******/ 	// 加载输入模块并返回导出
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index-0.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index-0.js":
/*!************************!*\
  !*** ./src/index-0.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

  eval("function render() {\n  let div = document.createElement('div')\n  div.innerHTML = 'Hello World 0'\n  document.body.appendChild(div)\n}\n\nrender()\n\n\n\n//# sourceURL=webpack:///./src/index-0.js?");

  /***/ })
  
  /******/ });