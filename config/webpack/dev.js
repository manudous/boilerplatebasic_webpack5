const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const common = require("./base.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  stats: "minimal",
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
});
