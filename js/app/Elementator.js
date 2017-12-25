export default class Element {
  constructor(tagName, attr) {
    this.tagName = tagName;
    this.attrs = attr;
    this.render();
  }

  render() {
    const elem = document.createElement(this.tagName);
    for (const attr in this.attrs) {
      if (attr === 'class') {
        elem.className = this.attrs[attr]
      }
        elem.setAttribute(attr, this.attrs[attr]);
    }
    return elem;
  }
}