export default class Controls {
  constructor({lineWidth, minValue, maxValue}) {
    this.lineWidth = lineWidth;
    this.minValue = minValue;
    this.maxValue = maxValue;
  }

  init() {
    this.btnClear.addEventListener('click', () => {
      console.log(this)
    })
  }

}