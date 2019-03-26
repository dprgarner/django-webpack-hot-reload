const path = require('path');
const webpack = require('webpack');

const outputPath = path.resolve(
  __dirname,
  '..',
  'hello',
  'hello',
  'static',
  'hello',
  'dist'
);

module.exports = {
  mode: 'development',

  entry: './hello/hello/frontend/index.js',

  output: {
    filename: 'bundle.js',
    path: outputPath,
    publicPath: 'http://localhost:9000/',
  },

  devServer: {
    contentBase: outputPath,
    compress: true,
    port: 9000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
};
