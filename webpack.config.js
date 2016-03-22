var webpack = require('webpack');
 
module.exports = {
  entry: './js/index.js',
  output: { path: 'dist', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};