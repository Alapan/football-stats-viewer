var path = require('path');
var webpack = require('webpack');

/*
  New webpack 4 features used here:
    - mode
    - Replace CommonsChunkPlugin with optimization.splitChunks
    - Replace module.loaders with module.rules
*/
module.exports = {
  entry: {
    app: './client/index.js',
    vendor: [
      'jquery',
      'bootstrap',
      'react',
      'lodash'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, "node_modules"),
          name: 'vendor',
          filename: 'js/vendor.js',
          enforce: true
        }
      }
    }
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'scss-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
        ]
      }
    ]
  },

  devtool: 'source-map',
  stats: {
    colors: true
  }
}
