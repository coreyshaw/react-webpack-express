const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './client/index.js',
  plugins: [
    new WebpackBar(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      'React': 'react',
    }),
    new NodePolyfillPlugin(),
    new Dotenv({ systemvars: true }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.svg$/,
        type: 'asset',
        loader: 'svgo-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        include: path.join(__dirname, '../public'),
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'],
      },
      {
        test: /\.svg$/,
        type: 'asset',
        use: 'svgo-loader',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    fallback: {
      'fs': false,
      'os': false,
      'path': false,
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  stats: {
    warnings: false,
    assetsSort: '!size',
    children: false,
    chunks: false,
    colors: true,
    entrypoints: false,
    modules: false,
  },
  // devServer: {
  //     contentBase: path.join(__dirname, "build"),
  //     compress: true,
  //     port: 4000,
  // },
};
