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

var _ColorPalette = __webpack_require__(4);

var _ColorPalette2 = _interopRequireDefault(_ColorPalette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawer = new _App2.default({
  elem: document.getElementById('canvas'),
  controls: new _Controls2.default({
    lineWidth: 3,
    minValue: 1,
    maxValue: 10
  }),
  palette: new _ColorPalette2.default({
    colors: ['#f6402c', '#eb1460', '#9c1ab1', '#6633b9', '#3d4db7', '#46af4a', '#009687', '#00a6f6', '#00bbd5', '#1093f5', '#88c440', '#ccdd1e', '#ffec16', '#ffc100', '#ff9800', '#000000', '#5e7c8b', '#9d9d9d', '#7a5547', '#ff5505']
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
        controls = _ref.controls,
        palette = _ref.palette;

    _classCallCheck(this, Paint);

    this.isDrawing = false;
    this.controls = controls;
    this.palette = palette.palette.colors;
    this.elem = elem;
    this.ctx = elem.getContext('2d');

    this.lineWidth = this.controls.lineWidth;
    this.strokeStyle = '#000';

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
        value: this.controls.lineWidth.toString()
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
      this.btnClear = btnClear;
      this.btnPallete = btnPalette;
      this.slider = input;
    }
  }, {
    key: 'buildPaletteDOM',
    value: function buildPaletteDOM() {
      var box = new _Elementator2.default('div', { class: 'box hidden' }).render();
      var heading = new _Elementator2.default('p', { class: 'box__heading' }).render();
      var ul = new _Elementator2.default('ul', { id: 'color-palette', class: 'palette' }).render();
      var triangle = new _Elementator2.default('div', { class: 'triangle-down' }).render();
      for (var i = 0; i < this.palette.length; i += 1) {
        var y = new _Elementator2.default('li', {
          class: 'palette__color-item',
          style: 'background-color: ' + this.palette[i],
          'data-color': '' + this.palette[i]
        }).render();
        ul.appendChild(y);
      }
      heading.textContent = 'Choose a color:';
      box.appendChild(heading);
      box.appendChild(ul);
      box.appendChild(triangle);
      this.elem.after(box);
      this.listPalette = box;
    }
  }, {
    key: 'init',
    value: function init() {
      if (this.controls) {
        this.buildControlsDOM();
        this.buildPaletteDOM();
      }
      this.elem.addEventListener('mousedown', this.handleMouseDown.bind(this));
      this.elem.addEventListener('mouseup', this.handleMouseUp.bind(this));
      this.elem.addEventListener('mousemove', this.handleMouseMove.bind(this));
      this.elem.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
      this.btnClear.addEventListener('click', this.handleClearCanvas.bind(this));
      this.btnPallete.addEventListener('click', this.handleShowPalette.bind(this));
      this.slider.addEventListener('change', this.handleBrushSizeChange.bind(this));
      this.listPalette.addEventListener('click', this.handleSelectColor.bind(this));
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
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(e.offsetX + 0.1, e.offsetY + 0.1);
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
  }, {
    key: 'handleClearCanvas',
    value: function handleClearCanvas() {
      this.ctx.clearRect(0, 0, this.elem.width, this.elem.height);
    }
  }, {
    key: 'handleShowPalette',
    value: function handleShowPalette() {
      this.listPalette.classList.toggle('hidden');
    }
  }, {
    key: 'handleBrushSizeChange',
    value: function handleBrushSizeChange(e) {
      this.lineWidth = e.target.value;
    }
  }, {
    key: 'handleSelectColor',
    value: function handleSelectColor(e) {
      var li = document.querySelectorAll('.palette__color-item');

      for (var i = 0; i < li.length; i += 1) {
        li[i].classList.remove('active');
      }
      var target = e.target;
      if (target.tagName === 'LI') {
        target.classList.toggle('active');
        this.strokeStyle = target.dataset.color;
      }
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = function Controls(_ref) {
  var lineWidth = _ref.lineWidth,
      minValue = _ref.minValue,
      maxValue = _ref.maxValue;

  _classCallCheck(this, Controls);

  this.lineWidth = lineWidth;
  this.minValue = minValue;
  this.maxValue = maxValue;
};

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
          elem.className = this.attrs[attr];
        }
        elem.setAttribute(attr, this.attrs[attr]);
      }
      return elem;
    }
  }]);

  return Element;
}();

exports.default = Element;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Palette = function Palette(colors) {
  _classCallCheck(this, Palette);

  this.palette = colors;
};

exports.default = Palette;

/***/ })
/******/ ]);