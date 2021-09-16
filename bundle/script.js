/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 31:
/***/ (() => {

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
var colors = ['red', 'green', 'violet', 'gray', 'blue', 'yellow'];
console.log(colors);
var refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body')
};
var colorInterval;

var randomIntegerFromInterval = function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startChanging);
refs.stopBtn.addEventListener('click', stopChanging);

function startChanging() {
  colorInterval = setInterval(function () {
    var index = randomIntegerFromInterval(0, 5);
    refs.body.style.background = colors[index];
    refs.body.style.transition = 'all 0.5s ease-in-out';
  }, 1000);
  refs.startBtn.setAttribute('disabled', true);
  console.log('start');
}

;
startChanging();

function stopChanging() {
  clearInterval(colorInterval);
  refs.startBtn.removeAttribute('disabled');
}

;
stopChanging(); // export default task_1;

/***/ }),

/***/ 123:
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.
var users = [{
  name: 'Mango',
  active: true
}, {
  name: 'Poly',
  active: false
}, {
  name: 'Ajax',
  active: true
}, {
  name: 'Lux',
  active: false
}];

var toggleUserState = function toggleUserState(allUsers, userName) {
  var updatedUsers = allUsers.map(function (user) {
    return user.name === userName ? _objectSpread(_objectSpread({}, user), {}, {
      active: !user.active
    }) : user;
  }); // callback(updatedUsers);

  return new Promise(function (resolve, reject) {
    resolve(updatedUsers);
  });
};

var logger = function logger(updatedUsers) {
  return console.table(updatedUsers);
};
/*
 * Сейчас работает так
 */


toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);
/*
 * Должно работать так
 */

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

/***/ }),

/***/ 225:
/***/ (() => {

// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.
var randomIntegerFromInterval = function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; // const makeTransaction = (transaction, onSuccess, onError)


var makeTransaction = function makeTransaction(transaction) {
  var delay = randomIntegerFromInterval(200, 500);
  return new Promise(function (resolve, reject) {
    var canProcess = Math.random() > 0.3;
    setTimeout(function () {
      if (canProcess) {
        resolve({
          id: transaction.id,
          time: delay
        });
      } else {
        reject("Server Error");
      }
    }, delay);
  });
};

var logSuccess = function logSuccess(_ref) {
  var id = _ref.id,
      time = _ref.time;
  console.log("Transaction ".concat(id, " processed in ").concat(time, "ms"));
};

var logError = function logError(id) {
  console.warn("Error processing transaction ".concat(id, ". Please try again later."));
};
/*
 * Работает так
 */


makeTransaction({
  id: 70,
  amount: 150
}, logSuccess, logError);
makeTransaction({
  id: 71,
  amount: 230
}, logSuccess, logError);
makeTransaction({
  id: 72,
  amount: 75
}, logSuccess, logError);
makeTransaction({
  id: 73,
  amount: 100
}, logSuccess, logError);
/*
 * Должно работать так
 */

makeTransaction({
  id: 70,
  amount: 150
}).then(logSuccess)["catch"](logError);
makeTransaction({
  id: 71,
  amount: 230
}).then(logSuccess)["catch"](logError);
makeTransaction({
  id: 72,
  amount: 75
}).then(logSuccess)["catch"](logError);
makeTransaction({
  id: 73,
  amount: 100
}).then(logSuccess)["catch"](logError);

/***/ }),

/***/ 437:
/***/ (() => {

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. 
// Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.
var delay = function delay(ms) {
  // Твой код
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(ms);
    }, ms);
  });
};

var logger = function logger(time) {
  return console.log("Resolved after ".concat(time, "ms"));
}; // Вызовы функции для проверки


delay(2000).then(logger); // Resolved after 2000ms

delay(1000).then(logger); // Resolved after 1000ms

delay(1500).then(logger); // Resolved after 1500ms

/***/ }),

/***/ 530:
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Оформить красиво, сделать в класе (ООП) и это можно прикладывать в резюме.
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.
var refs = {
  mainTimer: document.querySelector('#timer-1'),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]')
}; // console.log(refs);

var counter = new Date("September 22, 2021 09:00:00");

var Timer = /*#__PURE__*/function () {
  function Timer(counter, res) {
    _classCallCheck(this, Timer);

    this.counter = counter;
  }

  _createClass(Timer, [{
    key: "showCounting",
    value: function showCounting() {
      var countdownResult = setInterval(function () {
        var currentDate = Date.now();
        var res = counter - currentDate;
        var days = Math.floor(res / 1000 / 60 / 60 / 24); // console.log(days);

        var hours = Math.floor(res % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); // console.log(hours);

        var minutes = Math.floor(res % (1000 * 60 * 60) / (1000 * 60)); // console.log(minutes);

        var seconds = Math.floor(res % (1000 * 60) / 1000); // console.log(seconds);

        refs.days.innerHTML = "".concat(days);
        refs.hours.innerHTML = "".concat(hours);
        refs.minutes.innerHTML = "".concat(minutes);
        refs.seconds.innerHTML = "".concat(seconds);

        if (res < 0) {
          clearInterval(countdownResult);
          return;
        }
      }, 1000);
    }
  }]);

  return Timer;
}();

;
var finishTime = new Timer(counter, refs.seconds);
finishTime.showCounting(); // console.log(finishTime.showCounting());
// let resOfCounter = setInterval(() => {
//     let currentDate = Date.now();
//     let res = counter - currentDate;
//     let days = Math.floor(res / 1000 / 60 / 60 / 24);
//     // console.log(days);
//     let hours = Math.floor(
//         (res % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     // console.log(hours);
//     let minutes = Math.floor((res % (1000 * 60 * 60)) / (1000 * 60));
//     // console.log(minutes);
//     let seconds = Math.floor((res % (1000 * 60)) / 1000);
//     // console.log(seconds);
//     refs.days.innerHTML = `${days}`;
//     refs.hours.innerHTML = `${hours}`;
//     refs.minutes.innerHTML = `${minutes}`;
//     refs.seconds.innerHTML = `${seconds}`;
// }, 1000);

/***/ }),

/***/ 964:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/task_1.js
var task_1 = __webpack_require__(31);
// EXTERNAL MODULE: ./src/js/task_2.js
var task_2 = __webpack_require__(437);
// EXTERNAL MODULE: ./src/js/task_2.2.js
var task_2_2 = __webpack_require__(123);
// EXTERNAL MODULE: ./src/js/task_2.3.js
var task_2_3 = __webpack_require__(225);
// EXTERNAL MODULE: ./src/js/task_3.js
var task_3 = __webpack_require__(530);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss
var main = __webpack_require__(964);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
;// CONCATENATED MODULE: ./src/scss/main.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()((main_default()), options);




       /* harmony default export */ const scss_main = ((main_default()) && (main_default()).locals ? (main_default()).locals : undefined);

;// CONCATENATED MODULE: ./src/index.js






})();

/******/ })()
;