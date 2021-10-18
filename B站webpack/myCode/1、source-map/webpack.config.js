const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // 开发环境最佳配置： eval-cheap-module-source-map 保证打包速度||准确定位出错代码位置
  // 生产环境可以不配置，也可以用: cheap-module-source-map
  devtool: 'eval-source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
