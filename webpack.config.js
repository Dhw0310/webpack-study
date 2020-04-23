const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "test.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: "/.js$/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: "/.css$/",
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
