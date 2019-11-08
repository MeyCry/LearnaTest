const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'main.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, ),
    filename: 'build/[name].js'
  }
};
