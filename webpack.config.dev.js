var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var embedFileSize = 65536;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
    {test: /\.css$/, loaders: ['style', 'css?sourceMap']},
    {test: /\.svg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
    {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
    {test: /\.jpg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
    {test: /\.gif/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
    {
      test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=' + embedFileSize
    }
  ]
  }
};
