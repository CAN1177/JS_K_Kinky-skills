const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  devServer: {
    // devServer 从哪里获取内容
    contentBase: "./dist",
    // 配置转发
    proxy: {
      "/api/Yixiantong": {
        target: "http://study.jsplusplus.com",
        changeOrigin: true,
        // 重写 去掉路径中的path
        pathRewrite: {
          '^/api': ""
        }
      },
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // 缓存设为false
      cache: false,
    }),
    new CleanWebpackPlugin(),
  ],
};
