const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
// const BrotliPlugin = require('brotli-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin()
    // new CompressionPlugin({
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 8192,
    //   minRatio: 0.8
    // }),
    // new BrotliPlugin({
    //   asset: '[path].br[query]',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 8192,
    //   minRatio: 0.8
    // })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    },
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
    // usedExports: true
  }
  // externals: {
  //   'bootstrap.native/dist/bootstrap-native-v4': 'bootstrap.native',
  //   hammerjs: 'hammerjs'
  // }
})
