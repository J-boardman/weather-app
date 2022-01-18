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


const weatherModule = (() => {
    //INIT: API CALL
    const search = async(search='Brisbane') => {
        try{
            let fetching = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=ff71f5f04b4f0fca53bfdce95b8318ee`,{mode:'cors'});
            
            let response = await fetching.then(response => response.json())
            
            const parsedInfo = parseInfo(response);
            
            return render(parsedInfo);
            
        } catch (err) {
            return console.log(err)
        }
    }
    search();

    //EVENT LISTENERS
    form.addEventListener('submit', (event) => {handleForm(event, form)});

    //RENDER
    const render = (info) => {
        while (main.firstChild) {
            main.removeChild(main.lastChild);
          }
        Object.keys(info).forEach(key => {
            (0,_createAppendChild__WEBPACK_IMPORTED_MODULE_0__["default"])('div',main,`${info[key]}`,null,`${key}`);
        })
    }

    //ADDITIONAL FUNCTIONS
    const handleForm = (event, form) => {
        event.preventDefault();
        search(form[0].value);
        form.reset();
    }

    const parseInfo = (info) => {
        return {
            'location': `${info.name}, ${info.sys.country}`,
            'temperature': parseKelvins(info.main.temp),
            'weather': info.weather[0].description,
            'minMax' : `Min: ${parseKelvins(info.main.temp_min)}  Max: ${parseKelvins(info.main.temp_max)}`,
            'humidity' : `Humidity: ${info.main.humidity}%`,
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixPQUFPLDBDQUEwQyxZQUFZO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELHdCQUF3Qjs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBaUIsZUFBZSxVQUFVLFVBQVUsSUFBSTtBQUNwRSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxJQUFJLGlCQUFpQjtBQUMxRDtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQyxPQUFPLGlDQUFpQztBQUMxRyxzQ0FBc0MsbUJBQW1CO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0NBQWtDO0FBQ3BEOztBQUVBO0FBQ0EsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jcmVhdGVBcHBlbmRDaGlsZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwcGVuZENoaWxkKHR5cGUscGFyZW50RWwsdGV4dENvbnRlbnQsaWQsLi4uY2xhc3Nlcyl7XG4gICAgXG4gICAgbGV0IG5ld0VsID0gcGFyZW50RWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKSk7XG5cbiAgICB0ZXh0Q29udGVudD09IHVuZGVmaW5lZCA/IG51bGwgOiBuZXdFbC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGlkID09IHVuZGVmaW5lZCA/IG51bGwgOiBuZXdFbC5zZXRBdHRyaWJ1dGUoJ2lkJyxpZCk7XG4gICAgY2xhc3Nlcz09IHVuZGVmaW5lZCA/IG51bGwgOiBjbGFzc2VzLmZvckVhY2gobmV3Q2xhc3MgPT4gbmV3RWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcykpO1xuXG4gICAgcmV0dXJuIG5ld0VsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUFwcGVuZENoaWxkIGZyb20gXCIuL2NyZWF0ZUFwcGVuZENoaWxkXCI7XG5cbmNvbnN0IHdlYXRoZXJNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vSU5JVDogQVBJIENBTExcbiAgICBjb25zdCBzZWFyY2ggPSBhc3luYyhzZWFyY2g9J0JyaXNiYW5lJykgPT4ge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBsZXQgZmV0Y2hpbmcgPSBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3NlYXJjaH0mQVBQSUQ9ZmY3MWY1ZjA0YjRmMGZjYTUzYmZkY2U5NWI4MzE4ZWVgLHttb2RlOidjb3JzJ30pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaGluZy50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcGFyc2VkSW5mbyA9IHBhcnNlSW5mbyhyZXNwb25zZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZW5kZXIocGFyc2VkSW5mbyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlYXJjaCgpO1xuXG4gICAgLy9FVkVOVCBMSVNURU5FUlNcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge2hhbmRsZUZvcm0oZXZlbnQsIGZvcm0pfSk7XG5cbiAgICAvL1JFTkRFUlxuICAgIGNvbnN0IHJlbmRlciA9IChpbmZvKSA9PiB7XG4gICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoaW5mbykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQXBwZW5kQ2hpbGQoJ2RpdicsbWFpbixgJHtpbmZvW2tleV19YCxudWxsLGAke2tleX1gKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL0FERElUSU9OQUwgRlVOQ1RJT05TXG4gICAgY29uc3QgaGFuZGxlRm9ybSA9IChldmVudCwgZm9ybSkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWFyY2goZm9ybVswXS52YWx1ZSk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZUluZm8gPSAoaW5mbykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2xvY2F0aW9uJzogYCR7aW5mby5uYW1lfSwgJHtpbmZvLnN5cy5jb3VudHJ5fWAsXG4gICAgICAgICAgICAndGVtcGVyYXR1cmUnOiBwYXJzZUtlbHZpbnMoaW5mby5tYWluLnRlbXApLFxuICAgICAgICAgICAgJ3dlYXRoZXInOiBpbmZvLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAnbWluTWF4JyA6IGBNaW46ICR7cGFyc2VLZWx2aW5zKGluZm8ubWFpbi50ZW1wX21pbil9ICBNYXg6ICR7cGFyc2VLZWx2aW5zKGluZm8ubWFpbi50ZW1wX21heCl9YCxcbiAgICAgICAgICAgICdodW1pZGl0eScgOiBgSHVtaWRpdHk6ICR7aW5mby5tYWluLmh1bWlkaXR5fSVgLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VLZWx2aW5zID0gKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3BhcnNlRmxvYXQoaXRlbSAtIDI3NSkudG9GaXhlZCgxKX3CsGBcbiAgICB9O1xuXG4gICAgLy9SRVRVUk5cbiAgICByZXR1cm4ge3NlYXJjaH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=