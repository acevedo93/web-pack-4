const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtreactPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    home:path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js')
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'dist/',
    chunkFilename: './js/[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtreactPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.jpg|png|gif$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtreactPlugin({
      filename: 'css/[name].css',
      chunkFilename:'css/[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWepackPlugin({
      title : 'React Application',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest:require('./modules-manifest.json')
    })

  ],
}