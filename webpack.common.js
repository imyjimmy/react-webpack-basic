const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|build)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react-app']
            }
          }
        ]
      },
      {
        test: /\.png$/,
        loader: require.resolve('url-loader')
      },
      {
        test: /\.jpe?g$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};
