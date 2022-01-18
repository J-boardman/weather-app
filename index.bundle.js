/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createAppendChild.js":
/*!**********************************!*\
  !*** ./src/createAppendChild.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAppendChild)
/* harmony export */ });
function createAppendChild(type,parentEl,textContent,id,...classes){
    
    let newEl = parentEl.appendChild(document.createElement(type));

    textContent== undefined ? null : newEl.textContent = textContent;
    id == undefined ? null : newEl.setAttribute('id',id);
    classes== undefined ? null : classes.forEach(newClass => newEl.classList.add(newClass));

    return newEl
};

/***/ }),

/***/ "./src/determineWeather.js":
/*!*********************************!*\
  !*** ./src/determineWeather.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, description){
    let weathers = [/clouds/i,/clear/i,/drizzle/i];

    weathers.forEach(weather => {
        if(weather.test(name)){
            console.log(name)
        }
    })

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
/* harmony import */ var _createAppendChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAppendChild */ "./src/createAppendChild.js");
/* harmony import */ var _determineWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./determineWeather */ "./src/determineWeather.js");



const weatherModule = (() => {
    //INIT: API CALL
    const search = async(search='Brisbane') => {
        try{
            let fetching = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=ff71f5f04b4f0fca53bfdce95b8318ee`);
            
            let response = await fetching.then(response => response.json())
            
            const parsedInfo = parseInfo(response);
            
            return render(parsedInfo);
            
        } catch (err) {
            return console.log(err)
        }
    }
    search();

    //EVENT LISTENERS
    form.addEventListener('submit', (event) => {
        handleForm(event, form)
    });

    //RENDER
    const render = (info) => {
        while (main.firstChild) {
            main.removeChild(main.lastChild);
          }
        Object.keys(info).forEach(key => {
            (0,_createAppendChild__WEBPACK_IMPORTED_MODULE_0__["default"])('div',main,`${info[key]}`,null,`${key}`);
        })
        console.log(info)
    }

    //ADDITIONAL FUNCTIONS
    const handleForm = (event, form) => {
        event.preventDefault();
        console.clear();
        search(form[0].value);
        form.reset();
    }

    const parseInfo = (info) => {
        let information = {
            'location': `${info.name}, ${info.sys.country}`,
            'temperature': parseKelvins(info.main.temp),
            'weather': info.weather[0].description,
            'minMax' : `Min: ${parseKelvins(info.main.temp_min)}  Max: ${parseKelvins(info.main.temp_max)}`,
            'humidity' : `Humidity: ${info.main.humidity}%`,
        }
        ;(0,_determineWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(info.weather[0].main, info.weather[0].description);
        return information
    }

    const parseKelvins = (item) => {
        return `${parseFloat(item - 275).toFixed(1)}°`
    };

    //RETURN
    return {search}
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RBLDZCQUFlLG9DQUFTO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0Q7QUFDRjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUYsT0FBTztBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQWlCLGVBQWUsVUFBVSxVQUFVLElBQUk7QUFDcEUsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixVQUFVLElBQUksaUJBQWlCO0FBQzFEO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DLE9BQU8saUNBQWlDO0FBQzFHLHNDQUFzQyxtQkFBbUI7QUFDekQ7QUFDQSxRQUFRLDhEQUFnQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtDQUFrQztBQUNwRDs7QUFFQTtBQUNBLFlBQVk7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY3JlYXRlQXBwZW5kQ2hpbGQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGV0ZXJtaW5lV2VhdGhlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwcGVuZENoaWxkKHR5cGUscGFyZW50RWwsdGV4dENvbnRlbnQsaWQsLi4uY2xhc3Nlcyl7XG4gICAgXG4gICAgbGV0IG5ld0VsID0gcGFyZW50RWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKSk7XG5cbiAgICB0ZXh0Q29udGVudD09IHVuZGVmaW5lZCA/IG51bGwgOiBuZXdFbC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGlkID09IHVuZGVmaW5lZCA/IG51bGwgOiBuZXdFbC5zZXRBdHRyaWJ1dGUoJ2lkJyxpZCk7XG4gICAgY2xhc3Nlcz09IHVuZGVmaW5lZCA/IG51bGwgOiBjbGFzc2VzLmZvckVhY2gobmV3Q2xhc3MgPT4gbmV3RWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcykpO1xuXG4gICAgcmV0dXJuIG5ld0VsXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGRlc2NyaXB0aW9uKXtcbiAgICBsZXQgd2VhdGhlcnMgPSBbL2Nsb3Vkcy9pLC9jbGVhci9pLC9kcml6emxlL2ldO1xuXG4gICAgd2VhdGhlcnMuZm9yRWFjaCh3ZWF0aGVyID0+IHtcbiAgICAgICAgaWYod2VhdGhlci50ZXN0KG5hbWUpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgICAgIH1cbiAgICB9KVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlQXBwZW5kQ2hpbGQgZnJvbSBcIi4vY3JlYXRlQXBwZW5kQ2hpbGRcIjtcbmltcG9ydCBkZXRlcm1pbmVXZWF0aGVyIGZyb20gXCIuL2RldGVybWluZVdlYXRoZXJcIjtcblxuY29uc3Qgd2VhdGhlck1vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy9JTklUOiBBUEkgQ0FMTFxuICAgIGNvbnN0IHNlYXJjaCA9IGFzeW5jKHNlYXJjaD0nQnJpc2JhbmUnKSA9PiB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCBmZXRjaGluZyA9IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtzZWFyY2h9JkFQUElEPWZmNzFmNWYwNGI0ZjBmY2E1M2JmZGNlOTViODMxOGVlYCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoaW5nLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRJbmZvID0gcGFyc2VJbmZvKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihwYXJzZWRJbmZvKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VhcmNoKCk7XG5cbiAgICAvL0VWRU5UIExJU1RFTkVSU1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGhhbmRsZUZvcm0oZXZlbnQsIGZvcm0pXG4gICAgfSk7XG5cbiAgICAvL1JFTkRFUlxuICAgIGNvbnN0IHJlbmRlciA9IChpbmZvKSA9PiB7XG4gICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoaW5mbykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQXBwZW5kQ2hpbGQoJ2RpdicsbWFpbixgJHtpbmZvW2tleV19YCxudWxsLGAke2tleX1gKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICB9XG5cbiAgICAvL0FERElUSU9OQUwgRlVOQ1RJT05TXG4gICAgY29uc3QgaGFuZGxlRm9ybSA9IChldmVudCwgZm9ybSkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIHNlYXJjaChmb3JtWzBdLnZhbHVlKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlSW5mbyA9IChpbmZvKSA9PiB7XG4gICAgICAgIGxldCBpbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgICdsb2NhdGlvbic6IGAke2luZm8ubmFtZX0sICR7aW5mby5zeXMuY291bnRyeX1gLFxuICAgICAgICAgICAgJ3RlbXBlcmF0dXJlJzogcGFyc2VLZWx2aW5zKGluZm8ubWFpbi50ZW1wKSxcbiAgICAgICAgICAgICd3ZWF0aGVyJzogaW5mby53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgJ21pbk1heCcgOiBgTWluOiAke3BhcnNlS2VsdmlucyhpbmZvLm1haW4udGVtcF9taW4pfSAgTWF4OiAke3BhcnNlS2VsdmlucyhpbmZvLm1haW4udGVtcF9tYXgpfWAsXG4gICAgICAgICAgICAnaHVtaWRpdHknIDogYEh1bWlkaXR5OiAke2luZm8ubWFpbi5odW1pZGl0eX0lYCxcbiAgICAgICAgfVxuICAgICAgICBkZXRlcm1pbmVXZWF0aGVyKGluZm8ud2VhdGhlclswXS5tYWluLCBpbmZvLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gaW5mb3JtYXRpb25cbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZUtlbHZpbnMgPSAoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7cGFyc2VGbG9hdChpdGVtIC0gMjc1KS50b0ZpeGVkKDEpfcKwYFxuICAgIH07XG5cbiAgICAvL1JFVFVSTlxuICAgIHJldHVybiB7c2VhcmNofVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==