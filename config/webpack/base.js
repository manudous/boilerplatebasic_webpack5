const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const helpers = require("./helpers");

module.exports = {
  context: helpers.resolveFromRootPath("src"),
  resolve: {
    alias: {
      assets: helpers.resolveFromRootPath('src/assets'),
      common: helpers.resolveFromRootPath('src/common'),
      core: helpers.resolveFromRootPath('src/core'),
      layouts: helpers.resolveFromRootPath('src/layouts'),
      pods: helpers.resolveFromRootPath('src/pods'),
      scenes: helpers.resolveFromRootPath('src/scenes'),
      'common-app': helpers.resolveFromRootPath('src/common-app'),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: {
    app: ['regenerator-runtime/runtime', './index.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      scriptLoading: "blocking",
    }),
    new CleanWebpackPlugin(),
  ],
};
