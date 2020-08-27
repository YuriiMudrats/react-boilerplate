const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: "./src/index.tsx",
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.min.js"
  },  
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};