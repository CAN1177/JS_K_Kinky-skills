"use strict";

const path = require("path");
const { webpack } = require("webpack");
const { MiniCssExtractPlugin } = require("mini-css-extract-plugin");

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
    // 生产环境创建 文件指纹
    filename: "[name]_[chunkhash:8].js",
    path: path.join(__dirname, "dist"),
  },
  mode: "production", // production or development
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
        use: [
            MiniCssExtractPlugin.loader,
           "css-loader"
          ],
      },
      //less 解析, 这里需要css解析的了loader
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      // 图片解析
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // 图片的文件指纹
              name: "[name]_[hash:8].[ext]",
            },
          },
        ],
      },
      // 字体解析
      {
        test: /\.(woff||woff2||eot||ttf||otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // 文字的文件指纹
              name: "[name]_[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
  ],
};
