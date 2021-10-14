"use strict";

const path = require("path");

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
  mode: "production",
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
      //less 解析
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader",]
      }
    ],
  },
};
