const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Common Webpack Configuration
const { ProvidePlugin } = require('webpack');
const commonWebpackConfig = require('./webpack.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  performance: { hints: false },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new TerserPlugin({
      parallel: true,
      extractComments: true,
    }),
    new ProvidePlugin({ Cookies: 'js-cookie/src/js.cookie.js' }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      // favicon: path.join(__dirname, '../public/favicon.ico'),
      template: path.join(__dirname, '../public/index.html'),
      filename: path.join(__dirname, '../build/index.html'),
      // manifest: path.join(__dirname, '../public/manifest.json'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
