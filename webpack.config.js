const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = 'development'
let plugins = [
  new MiniCssExtractPlugin({
    filename: "../css/[name].css"
  }),
  new HtmlWebpackPlugin({
    template: './src/templates/pages/index.edge'
  })
]
let minimizer = []

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  minimizer.push(
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      canPrint: true
    })
  )
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
    },
    minimizer
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