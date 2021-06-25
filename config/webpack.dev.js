const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
    open: true,
    compress: true,
    hot: true,
    port: 3333,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                includePaths: ['./node_modules'],
              },
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
});
