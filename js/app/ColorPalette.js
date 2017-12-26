import Element from "./Elementator";

export default class Palette {
  constructor({colors}) {
    this.palette = colors;
    this.containerPaletteList = null;
    this.init();
  }

  buildPaletteDOM() {
    const box = new Element('div', {class: 'box hidden'}).render();
    const heading = new Element('p', {class: 'box__heading'}).render();
    const ul = new Element('ul', {class: 'palette'}).render();
    const triangle = new Element('div', {class: 'triangle-down'}).render();

    for (let i = 0; i < this.palette.length; i += 1) {
      let y = new Element('li', {
        class: 'palette__color-item',
        style: `background-color: ${this.palette[i]}`
      }).render();
      ul.appendChild(y);
    }
    heading.textContent = 'Choose a color:';
    box.appendChild(heading);
    box.appendChild(ul);
    box.appendChild(triangle);

    this.containerPaletteList = box;
  }

  init() {
    this.buildPaletteDOM();
  }

}