import Paint from './app/App';
import Controls from './app/Controls';

const drawer = new Paint({
  elem: document.getElementById('canvas'),
  controls: new Controls({
    sliderWidthStroke: document.getElementById('brush-size-slider'),
    btnClear: document.querySelector('#color-button'),
    btnPalette: document.querySelector('#clear-canvas-button')
  })
});
