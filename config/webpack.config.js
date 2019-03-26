const path = require('path');

module.exports = {
  mode: 'development',

  entry: './hello/hello/frontend/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(
      __dirname,
      '..',
      'hello',
      'hello',
      'static',
      'hello',
      'dist'
    ),
  }
};
