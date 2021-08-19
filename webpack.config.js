

const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  devtool:"inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use:'babel-loader',
      },
      // { babel loader에서 안해줄 때
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   use: 'ts-loader',        
      // },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader ,'css-loader'],
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: 'html-loader',
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],

};