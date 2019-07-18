const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWepackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js'
  },
  devServer:{
    hot: true,
    open:true,
    port: 9090,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWepackPlugin({
      title : 'Hot Reload'
    })
  ]
}