const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = function(env, args) {
  return {
    entry: {
      index: "./index.jsx"
    },
    mode: "development",
    output: {
      filename: "[name]_[hash].js",
      chunkFilename: "[chunkname]_[chunkhash].js",
      path: path.resolve(__dirname, "./dist")
    },
    resolve:{
      extensions: ['.jsx', '.js']
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /\/node_modules\/|webpack\.config\.js/
        },
        {
          test: /\.(sc|c)ss/,
          exclude: /\/node_modules\/|webpack\.config\.js/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                import: true
              }
            },
            {
              loader: "scss-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanPlugin(['dist']),
      new MiniCssExtractPlugin({
        filename: "[name]_[hash].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html"
      })
    ]
  };
}
