const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: ['./src/client/index.tsx'],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[fullhash].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/client'),
      '@resources': path.resolve(__dirname, '../src/resources'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          globOptions: {
            ignore: ['*.DS_Store', 'favicon.ico', 'template.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      template: './public/template.html',
      filename: 'index.html',
    }),
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),
    new PrettierPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
