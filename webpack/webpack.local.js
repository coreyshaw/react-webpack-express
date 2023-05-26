const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Common Webpack Configuration
const commonWebpackConfig = require('./webpack.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: path.join(__dirname, '../public/favicon.ico'),
      manifest: path.join(__dirname, '../public/manifest.json'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'build'),
    static: './public',
    historyApiFallback: true,
    allowedHosts: 'all',
    port: 3001,
    open: false,
    hot: true,
  },
});
