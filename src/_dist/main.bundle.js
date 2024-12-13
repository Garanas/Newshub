/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_site/scripts/main.js":
/*!***********************************!*\
  !*** ./src/_site/scripts/main.js ***!
  \***********************************/
/***/ (() => {

eval("// Only trigger if service workers are supported in browser.\r\nif (\"serviceWorker\" in navigator) {\r\n  // Wait until window is loaded before registering.\r\n  window.addEventListener(\"load\", () => {\r\n    // Register the service worker with \"/\" as it's scope.\r\n    navigator.serviceWorker\r\n      .register(\"/scripts/service-worker.js\", { scope: \"/\" })\r\n      // Output success/failure of registration.\r\n      .then(() => console.log(\"SW registered\"))\r\n      .catch(() => console.error(\"SW registration failed\"));\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://faforever-newshub/./src/_site/scripts/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/_site/scripts/main.js"]();
/******/ 	
/******/ })()
;