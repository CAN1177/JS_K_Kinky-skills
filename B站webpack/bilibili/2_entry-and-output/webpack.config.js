const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // 入口
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  },
  // 出口
  output: {
    publicPath: 'http://cdn.xxx.com/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}