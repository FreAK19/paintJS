import Paint from './app/App';
import Controls from './app/Controls';

const drawer = new Paint({
  elem: document.getElementById('canvas'),
  controls: new Controls({
    lineWidth: 4,
    minValue: 1,
    maxValue: 10
  })
});
