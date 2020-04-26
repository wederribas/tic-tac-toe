const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'dev',
      DEBUG: true,
    }),
  ],
  mode: 'development',
  // watch: true,
  devServer: {
    contentBase: './dist',
  },
})
