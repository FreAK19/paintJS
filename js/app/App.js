export default class App {
  constructor({elem}) {
    this.isDrawing = false;
    this.elem = elem;
    this.init();
  }

  init() {
    this.elem.addEventListener('mousedown', this.handleMouseDown);
    this.elem.addEventListener('mouseup', this.handleMouseUp);
    this.elem.addEventListener('mousemove', this.handleMouseMove);
    this.elem.addEventListener('mouseleave', this.handleMouseLeave);
  }

  handleMouseDown(e) {
    console.log(this)
  }

  handleMouseUp(e) {
  }

  handleMouseMove(e) {
  }

  handleMouseLeave(e) {
  }

}