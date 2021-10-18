"use strict";

const path = require("path");
const { webpack } = require("webpack");

module.exports = {
  // entry: "./src/index.js",
  // output: {
  //   path: path.join(__dirname,"dist"),
  //   filename: "bundle.js"
  // },

  // 多入口配置
  entry: {
    index: "./src/index.js",
    search: "./src/search.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  mode: "development",  // production or development
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      //css 解析
      {
        test: /\.css$/,
        // 注意这里是执行是从又到左
        use: ["style-loader", "css-loader"],
      },
      //less 解析, 这里需要css解析的了loader
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader",]
      },
      // 图片解析
      { 
        test: /\.(png|jpg|gif|jpeg)$/, 
        use: 'file-loader'
      },
      // 字体解析
      {
        test: /\.(woff||woff2||eot||ttf||otf)$/,
        use: "file-loader"
      }
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    // contentBase: './dist',
    hot: true,
  }
};
