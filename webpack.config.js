const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let mode = 'development'
let plugins = []

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  plugins.push(new UglifyJsPlugin())
}

module.exports = {
  mode,
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        loader: 'webpack-modernizr-loader',
        test: /\.modernizrrc\.js$/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, './.modernizrrc.js')
    }
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins
}