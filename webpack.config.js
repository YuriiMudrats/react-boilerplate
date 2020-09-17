const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: "./src/index.tsx",
  devtool: 'inline-source-map',  
    devServer: {
      contentBase: './dist',
     hot: true,
    },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundel.js"
  },  
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/       
      },
      {
         test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] ,
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: 'Hot Module Replacement'
    })
  ]
};