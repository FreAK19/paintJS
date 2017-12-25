export default class Controls {
  constructor({widthStrokeValue, minValue, maxValue}) {
    this.widthStrokeValue = widthStrokeValue;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.btnClear = document.getElementById('clear-canvas-button');
  }

  init() {
    this.btnClear.addEventListener('click', () => {
      console.log(this)
    })
  }

}