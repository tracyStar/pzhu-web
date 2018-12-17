const merge = require("webpack-merge");
const path = require("path");
let webpack = require("webpack");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  devtool: "inline-soure-map",
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"), //本地服务器所加载的页面所在的目录
    inline: true, //实时刷新
    open: true,
    compress: true,
    port: 3000,
    hot: true //开启热更新
  },
  plugins: [
    //热更新,不是刷新
    new webpack.HotModuleReplacementPlugin()
  ]
});
