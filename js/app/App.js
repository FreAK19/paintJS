import Element from './Elementator';

export default class Paint {
  constructor({elem, controls}) {
    this.isDrawing = false;
    this.controls = controls;
    this.elem = elem;
    this.ctx = elem.getContext('2d');
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

  init() {
    if (this.controls) { this.buildControlsDOM() }
    this.elem.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.elem.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.elem.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.elem.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
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
}