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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _Controls = __webpack_require__(2);

var _Controls2 = _interopRequireDefault(_Controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawer = new _App2.default({
  elem: document.getElementById('canvas'),
  controls: new _Controls2.default({
    widthStrokeValue: 4,
    minValue: 1,
    maxValue: 10
  })
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Elementator = __webpack_require__(3);

var _Elementator2 = _interopRequireDefault(_Elementator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paint = function () {
  function Paint(_ref) {
    var elem = _ref.elem,
        controls = _ref.controls;

    _classCallCheck(this, Paint);

    this.isDrawing = false;
    this.controls = controls;
    this.elem = elem;
    this.ctx = elem.getContext('2d');
    this.init();
  }

  _createClass(Paint, [{
    key: 'buildControlsDOM',
    value: function buildControlsDOM() {
      var fragment = document.createDocumentFragment();
      var div = new _Elementator2.default('div', { class: 'controls' }).render();
      var btnPalette = new _Elementator2.default('button', { id: 'new-color-button' }).render();
      var paletteIcon = new _Elementator2.default('i', { class: 'material-icons' }).render();
      var btnClear = new _Elementator2.default('button', { id: 'clear-canvas-button' }).render();
      var clearIcon = new _Elementator2.default('i', { class: 'material-icons' }).render();
      var input = new _Elementator2.default('input', {
        type: 'range',
        id: 'brush-size-slider',
        min: this.controls.minValue.toString(),
        max: this.controls.maxValue.toString(),
        value: this.controls.widthStrokeValue.toString()
      }).render();

      paletteIcon.textContent = 'palette';
      clearIcon.textContent = 'clear';
      btnPalette.appendChild(paletteIcon);
      btnClear.appendChild(clearIcon);
      div.append(btnPalette);
      div.append(btnClear);
      div.append(input);
      fragment.appendChild(div);

      this.elem.after(fragment);
    }
  }, {
    key: 'init',
    value: function init() {
      if (this.controls) {
        this.buildControlsDOM();
      }
      this.elem.addEventListener('mousedown', this.handleMouseDown.bind(this));
      this.elem.addEventListener('mouseup', this.handleMouseUp.bind(this));
      this.elem.addEventListener('mousemove', this.handleMouseMove.bind(this));
      this.elem.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this.isDrawing = true;
      this.y = e.offsetY;
      this.x = e.offsetX;
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.isDrawing = false;
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (this.isDrawing) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
        this.ctx.closePath();
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.isDrawing = false;
    }
  }]);

  return Paint;
}();

exports.default = Paint;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = function () {
  function Controls(_ref) {
    var widthStrokeValue = _ref.widthStrokeValue,
        minValue = _ref.minValue,
        maxValue = _ref.maxValue;

    _classCallCheck(this, Controls);

    this.widthStrokeValue = widthStrokeValue;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.btnClear = document.getElementById('clear-canvas-button');
  }

  _createClass(Controls, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.btnClear.addEventListener('click', function () {
        console.log(_this);
      });
    }
  }]);

  return Controls;
}();

exports.default = Controls;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(tagName, attr) {
    _classCallCheck(this, Element);

    this.tagName = tagName;
    this.attrs = attr;
    this.render();
  }

  _createClass(Element, [{
    key: 'render',
    value: function render() {
      var elem = document.createElement(this.tagName);
      for (var attr in this.attrs) {
        if (attr === 'class') {
          elem.classList.add(this.attrs[attr]);
        }
        elem.setAttribute(attr, this.attrs[attr]);
      }
      return elem;
    }
  }]);

  return Element;
}();

exports.default = Element;

/***/ })
/******/ ]);