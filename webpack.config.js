const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");
const DefinePlugin = require("webpack").DefinePlugin;
const path = require("path");
dotenv.config();

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    historyApiFallback: true,
  },
  mode: "production",
  devServer: {
    historyApiFallback: true,
  },
  output: {
    publicPath: "/",
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "" }],
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        exclude: /node_modules/,
        type: "asset/inline",
      },
    ],
  },
};
