const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // static: './dist'
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
    // compress: true,
    // host: '0.0.0.0',
    // http2: true,
    // useLocalIp: true,
    port: 9000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
})
