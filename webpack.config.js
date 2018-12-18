
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var path = require("path");

var config = {
  entry: path.resolve(__dirname, 'src'),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader'
        }
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      ]
    }]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ]
};

module.exports = config;
