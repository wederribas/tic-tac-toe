const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  entry: {
    app: ['./src/main.js'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
    library: '[name]',
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tic Tac Toe',
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/robots.txt', to: 'robots.txt' },
      { from: 'public/favicon.ico', to: 'favicon.ico' },
    ]),
  ],
}
