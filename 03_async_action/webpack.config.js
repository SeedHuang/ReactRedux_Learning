const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = function(env, args) {
  console.log(args.mode, '>>>>>>>>');
  const config = {
    entry: {
      index: "./index.js"
    },
    mode: args.mode,
    output: {
      filename: "[name]_[hash].js",
      path: path.resolve(__dirname, './dist')
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /\/node_modules\//,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  [
                    "@babel/plugin-transform-runtime",
                    {
                      "corejs": false,
                      "helpers": true,
                      "regenerator": true,
                      "useESModules": false
                    }
                  ]
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
      })
    ]
  };
  return config;
};
