/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getLocation.js":
/*!****************************!*\
  !*** ./src/getLocation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(search){
        let fetching = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=ff71f5f04b4f0fca53bfdce95b8318ee`);
        console.log('fetching');

        let fetched = await fetching;
        return await fetched.json();
}

/***/ }),

/***/ "./src/parseInfo.js":
/*!**************************!*\
  !*** ./src/parseInfo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(info){
    
    let location = info.name;
    let timezone = info.timezone;
    let weather = {
        'name' : info.weather[0].main,
        'description' : info.weather[0].description
    }
    let main =  {
        'Temperature': `${parseFloat(info.main.temp - 275).toFixed(1)}°C`,
        'Feels like': `${parseFloat(info.main.feels_like - 275).toFixed(1)}°C`,
        'Min' : `${parseFloat(info.main.temp_min - 275).toFixed(1)}°C`,
        'Max' : `${parseFloat(info.main.temp_max - 275).toFixed(1)}°C`,
        'humidity' : `${info.main.humidity}%`,
    }
    let sys = {
        'Country' : info.sys.country,
        'Sunrise' : info.sys.sunrise,
        'Sunset' : info.sys.sunset
    }

    console.log(timezone)

    // Object.keys(info).forEach(key => {
    //     console.log(`%c${key}:`,'font-weight:bold');
    //     console.log(info[key])
    // });
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocation */ "./src/getLocation.js");
/* harmony import */ var _parseInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseInfo */ "./src/parseInfo.js");



const getInfo = async(search = 'Brisbane') => {
    const info = await (0,_getLocation__WEBPACK_IMPORTED_MODULE_0__["default"])(search);
    return (0,_parseInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(info)
};

getInfo();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQWUsMENBQWU7QUFDOUIsaUZBQWlGLE9BQU87QUFDeEY7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQSw2QkFBZSxvQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUE0QztBQUN0RSx5QkFBeUIsa0RBQWtEO0FBQzNFLG1CQUFtQixnREFBZ0Q7QUFDbkUsbUJBQW1CLGdEQUFnRDtBQUNuRSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixJQUFJO0FBQ2hDO0FBQ0EsUUFBUTtBQUNSOzs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDSjs7QUFFcEM7QUFDQSx1QkFBdUIsd0RBQVc7QUFDbEMsV0FBVyxzREFBUztBQUNwQjs7QUFFQSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZ2V0TG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGFyc2VJbmZvLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oc2VhcmNoKXtcbiAgICAgICAgbGV0IGZldGNoaW5nID0gZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3NlYXJjaH0mQVBQSUQ9ZmY3MWY1ZjA0YjRmMGZjYTUzYmZkY2U5NWI4MzE4ZWVgKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoaW5nJyk7XG5cbiAgICAgICAgbGV0IGZldGNoZWQgPSBhd2FpdCBmZXRjaGluZztcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoZWQuanNvbigpO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5mbyl7XG4gICAgXG4gICAgbGV0IGxvY2F0aW9uID0gaW5mby5uYW1lO1xuICAgIGxldCB0aW1lem9uZSA9IGluZm8udGltZXpvbmU7XG4gICAgbGV0IHdlYXRoZXIgPSB7XG4gICAgICAgICduYW1lJyA6IGluZm8ud2VhdGhlclswXS5tYWluLFxuICAgICAgICAnZGVzY3JpcHRpb24nIDogaW5mby53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgfVxuICAgIGxldCBtYWluID0gIHtcbiAgICAgICAgJ1RlbXBlcmF0dXJlJzogYCR7cGFyc2VGbG9hdChpbmZvLm1haW4udGVtcCAtIDI3NSkudG9GaXhlZCgxKX3CsENgLFxuICAgICAgICAnRmVlbHMgbGlrZSc6IGAke3BhcnNlRmxvYXQoaW5mby5tYWluLmZlZWxzX2xpa2UgLSAyNzUpLnRvRml4ZWQoMSl9wrBDYCxcbiAgICAgICAgJ01pbicgOiBgJHtwYXJzZUZsb2F0KGluZm8ubWFpbi50ZW1wX21pbiAtIDI3NSkudG9GaXhlZCgxKX3CsENgLFxuICAgICAgICAnTWF4JyA6IGAke3BhcnNlRmxvYXQoaW5mby5tYWluLnRlbXBfbWF4IC0gMjc1KS50b0ZpeGVkKDEpfcKwQ2AsXG4gICAgICAgICdodW1pZGl0eScgOiBgJHtpbmZvLm1haW4uaHVtaWRpdHl9JWAsXG4gICAgfVxuICAgIGxldCBzeXMgPSB7XG4gICAgICAgICdDb3VudHJ5JyA6IGluZm8uc3lzLmNvdW50cnksXG4gICAgICAgICdTdW5yaXNlJyA6IGluZm8uc3lzLnN1bnJpc2UsXG4gICAgICAgICdTdW5zZXQnIDogaW5mby5zeXMuc3Vuc2V0XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGltZXpvbmUpXG5cbiAgICAvLyBPYmplY3Qua2V5cyhpbmZvKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGAlYyR7a2V5fTpgLCdmb250LXdlaWdodDpib2xkJyk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGluZm9ba2V5XSlcbiAgICAvLyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IHBhcnNlSW5mbyBmcm9tIFwiLi9wYXJzZUluZm9cIjtcblxuY29uc3QgZ2V0SW5mbyA9IGFzeW5jKHNlYXJjaCA9ICdCcmlzYmFuZScpID0+IHtcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgZ2V0TG9jYXRpb24oc2VhcmNoKTtcbiAgICByZXR1cm4gcGFyc2VJbmZvKGluZm8pXG59O1xuXG5nZXRJbmZvKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9