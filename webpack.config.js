const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './dev/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './assets/js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: './assets/img/[name].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: './dev/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
  ]
};
