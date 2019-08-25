const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({mode, preview}) => {
  process.env.BABEL_ENV = mode
  process.env.NODE_ENV = mode
  process.env.PREVIEW = preview
  
  return merge(common, {
    mode: mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        hash: true,
        filename: './index.html'
      })
    ]
  });
}