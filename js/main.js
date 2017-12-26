import Paint from './app/App';
import Controls from './app/Controls';
import Palette from './app/ColorPalette';
import Tools from './app/Tools';

const drawer = new Paint({
  elem: document.getElementById('canvas'),
  controls: new Controls({
    lineWidth: 3,
    minValue: 1,
    maxValue: 10
  }),
  palette: new Palette({
    colors: [
      '#f6402c', '#eb1460', '#9c1ab1', '#6633b9', '#3d4db7',
      '#46af4a', '#009687', '#00a6f6', '#00bbd5', '#1093f5',
      '#88c440', '#ccdd1e', '#ffec16', '#ffc100', '#ff9800',
      '#000000', '#5e7c8b', '#9d9d9d', '#7a5547', '#ff5505',
    ]
  }),
  tools: new Tools()
});
