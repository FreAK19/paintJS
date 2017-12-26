import Element from "./Elementator";

export default class Controls {
  constructor({lineWidth, minValue, maxValue}) {
    this.lineWidth = lineWidth;
    this.minValue = minValue;
    this.maxValue = maxValue;

    this.btnClear = null;
    this.btnPallete = null;
    this.slider = null;
    this.controlsContainer = null;
    this.init();
  }

  buildControlsDOM() {
    const div = new Element('div', {class: 'controls'}).render();
    const btnPalette = new Element('button', {id: 'new-color-button'}).render();
    const paletteIcon = new Element('i', {class: 'material-icons'}).render();
    const btnClear = new Element('button', {id: 'clear-canvas-button'}).render();
    const clearIcon = new Element('i', {class: 'material-icons'}).render();
    const input = new Element('input', {
      type: 'range',
      id: 'brush-size-slider',
      min: this.minValue.toString(),
      max: this.maxValue.toString(),
      value: this.lineWidth.toString()
    }).render();

    paletteIcon.textContent = 'palette';
    clearIcon.textContent = 'clear';
    btnPalette.appendChild(paletteIcon);
    btnClear.appendChild(clearIcon);
    div.append(btnPalette);
    div.append(btnClear);
    div.append(input);

    this.controlsContainer = div;
    this.btnClear = btnClear;
    this.btnPallete = btnPalette;
    this.slider = input;
  }

  init() {
    this.buildControlsDOM();
  }

}