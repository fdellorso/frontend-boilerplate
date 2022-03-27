const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

// TODO take hostname after 2nd boot and generate frontend/dist
const hostname = 'localhost'

module.exports = {
  entry: {
    index: path.resolve(__dirname, './js/index.js')
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      canonical: '<link rel="canonical" href="https://' + hostname + '" />',
      template: path.resolve(__dirname, './index.html'),
      chunks: ['index'],
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './asset'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
      // runtimeCaching: [{
      //   urlPattern: new RegExp('https://[sS]*.local/capture'),
      //   handler: 'NetworkFirst',
      //   options: {
      //     precacheFallback: {
      //       fallbackURL: '/offline.html'
      //     }
      //   }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  externals: {
    bootstrap: 'bootstrap.native',
    hammerjs: 'hammerJs'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
}
