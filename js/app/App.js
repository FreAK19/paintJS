export default class Paint {
  constructor({elem, controls, palette}) {
    this.isDrawing = false;
    this.controls = controls;
    this.btnClear = controls.btnClear;
    this.btnPallete = controls.btnPallete;
    this.slider = controls.slider;
    this.controlsContainer = controls.controlsContainer;
    this.containerPaletteList = palette.containerPaletteList;
    this.elem = elem;
    this.ctx = elem.getContext('2d');

    this.lineWidth = this.controls.lineWidth;
    this.strokeStyle = '#000';

    this.init();
  }

  buildTree() {
    this.elem.after(this.containerPaletteList);
    this.elem.after(this.controlsContainer);
  }

  init() {
    this.buildTree();
    this.elem.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.elem.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.elem.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.elem.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    this.btnClear.addEventListener('click', this.handleClearCanvas.bind(this));
    this.btnPallete.addEventListener('click', this.handleShowPalette.bind(this));
    this.slider.addEventListener('change', this.handleBrushSizeChange.bind(this));
    this.containerPaletteList.addEventListener('click', this.handleSelectColor.bind(this));
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
      this.ctx.strokeStyle = this.strokeStyle;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
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
    this.containerPaletteList.classList.toggle('hidden')
  }

  handleBrushSizeChange(e) {
    this.lineWidth = e.target.value;
  }

  handleSelectColor({target}) {
    const li = document.querySelectorAll('.palette__color-item');
    if (target.tagName === 'LI') {

      /// remove class from all palette items
      for (let i = 0; i < li.length; i += 1) {
        li[i].classList.remove('active');
      }

      /// select only one palette item and add active state
      target.classList.add('active');
      this.strokeStyle = target.style.backgroundColor;
    }
  }
}