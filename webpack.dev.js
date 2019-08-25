const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const publicUrl = process.env.PUBLIC_URL || '/'
const port = process.env.PORT || 8080
const host = '0.0.0.0'

module.exports = ({ mode }) => {
  process.env.BABEL_ENV = mode
  process.env.NODE_ENV = mode

  return merge(common, {
    mode: mode,
    devtool: 'inline-source-map',
    devServer: {
      publicPath: publicUrl,
      port: port,
      host: host,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  })
}
