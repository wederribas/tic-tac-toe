const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
})
