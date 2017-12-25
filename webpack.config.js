const path = require('path');

module.exports = {

  entry: './js/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: "app.build.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader",
        ],
      }
    ]
  }

};