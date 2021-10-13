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
    filename: '[name].js',
    path:  path.join(__dirname,"dist"),
  },
  mode: "production",
};
