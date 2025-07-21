const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(_dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
};
