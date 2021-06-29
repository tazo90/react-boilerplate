import path from 'path';

import wp from '@cypress/webpack-preprocessor';

const webpackOptions = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../../../src/client'),
      '@resources': path.resolve(__dirname, '../../../src/resources'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};

const options = { webpackOptions };

export default wp(options);
