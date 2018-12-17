const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  rules: [
    {
      test: /\.scss$/,
      use: [
        process.env.NODE_ENV !== "production"
          ? "style-loader"
          : MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }
  ],
  plugins: [
    new UglifyJSPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
