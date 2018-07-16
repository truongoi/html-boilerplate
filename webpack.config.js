const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = 'development'
let plugins = [
  new MiniCssExtractPlugin({
    filename: "../css/[name].css",
    chunkFilename: "../css/[id].css"
  })
]

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  plugins.push(new UglifyJsPlugin())
}

module.exports = {
  mode,
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'vendors',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
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
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
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