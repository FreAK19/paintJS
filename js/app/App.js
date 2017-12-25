import Element from './Elementator';

export default class Paint {
  constructor({elem, controls}) {
    this.isDrawing = false;
    this.controls = controls;
    this.elem = elem;
    this.ctx = elem.getContext('2d');

    this.lineWidth = this.controls.lineWidth;

    this.init();
  }

  buildControlsDOM() {
    const fragment = document.createDocumentFragment();
    const div = new Element('div', {class: 'controls'}).render();
    const btnPalette = new Element('button', {id: 'new-color-button'}).render();
    const paletteIcon = new Element('i', {class: 'material-icons'}).render();
    const btnClear = new Element('button', {id: 'clear-canvas-button'}).render();
    const clearIcon = new Element('i', {class: 'material-icons'}).render();
    const input = new Element('input', {
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

  init() {
    if (this.controls) {
      this.buildControlsDOM()
    }
    this.elem.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.elem.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.elem.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.elem.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    this.btnClear.addEventListener('click', this.handleClearCanvas.bind(this));
    this.btnPallete.addEventListener('click', this.handleShowPalette.bind(this));
    this.slider.addEventListener('change', this.handleBrushSizeChange.bind(this));
  }

  handleMouseDown(e) {
    this.isDrawing = true;
    this.y = e.offsetY;
    this.x = e.offsetX;
  }

  handleMouseUp() {
    this.isDrawing = false;
  }

  handleMouseMove(e) {
    if (this.isDrawing) {
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
      this.ctx.closePath();
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }

  handleMouseLeave() {
    this.isDrawing = false;
  }

  handleClearCanvas() {
    this.ctx.clearRect(0, 0, this.elem.width, this.elem.height);
  }

  handleShowPalette() {
  }

  handleBrushSizeChange(e) {
    this.lineWidth = e.target.value;
  }

}