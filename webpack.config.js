'use strict'
let CopyWebpackPlugin = require('copy-webpack-plugin')
let path = require('path')

let config = {
  context: path.join(__dirname, 'src'),
  entry: './main.jsx',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },

  // Resolve
  resolve: {
    modules: [
      path.resolve('./src/'),
      path.resolve('./node_modules')
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './index.html',
        to: '../build/index.html'
      },
      {
        from: '../feeds',
        to: '../build'
      }
    ])
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: [ 'transform-runtime', ['babel-root-import', {
            'rootPathSuffix': './src/'
          }]]
        }
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style', 'css', 'sass']
      },
      // fonts etc..
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'}
    ]
  }
}
module.exports = config
