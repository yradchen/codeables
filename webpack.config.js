var path = require('path');

module.exports = {
  entry: './frontend/codeables.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }],
    },
      {
      test: /\.svg$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'quill$': path.resolve(__dirname, 'node_modules/quill/quill.js'),
    },
    extensions: ['.js', '.jsx', '*']
  }
};
