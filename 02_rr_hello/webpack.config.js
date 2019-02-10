const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanPlugin = require('clean-webpack-plugin');


module.exports = function(env, args){
  return {
    entry: "./index.jsx",
    output: {
      filename: '[name]_[hash].js',
      path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    resolve: {
      extensions: ['.jsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /\/node_modules\//,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          ]
        },
        {
          test: /\.(sc|c)ss$/,
          exclude: /\/node_modules\//,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                import: true
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanPlugin(['dist']),
      new MiniCssExtractPlugin({
        filename: '[name]_[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html'
      })
    ]
  }
};
