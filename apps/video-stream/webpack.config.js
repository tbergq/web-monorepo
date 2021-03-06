// @flow

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const modeIndex = process.argv.findIndex((i) => i === '--mode');
const isProduction = process.argv[modeIndex + 1] === 'production';

module.exports = {
  entry: './src/renderer/index.js',
  output: {
    path: (path.join(__dirname, '.build') /*: string */),
    filename: 'bundle.js',
  },
  target: 'electron-renderer',
  watch: !isProduction,
  externals: {
    electron: 'electron',
  },
  devServer: {
    contentBase: (path.join(__dirname, 'dist') /*: string */),
    compress: true,
    port: 9000,
  },
  plugins: [
    (new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src', 'renderer', 'index.html'),
          to: path.join(__dirname, '.build', 'index.html'),
        },
      ],
    // $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
    }) /*: CopyPlugin */),
  ],
  module: {
    rules: [
      {
        test: (/\.(?:js|jsx)$/ /*: RegExp */),
        exclude: (/node_modules\/(?!@tbergq\/components|!@tbergq\/theme)/ /*: RegExp */),
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
        },
      },
      {
        test: (/\.(?:png|jpe?g|gif)$/i /*: RegExp */),
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: (/\.css$/ /*: RegExp */),
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
};
