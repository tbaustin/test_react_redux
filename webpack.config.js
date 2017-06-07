var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx', '.css']
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
