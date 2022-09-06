/*
 * @Date: 2022-06-03 22:05:37
 * @LastEditors: 熊明祥
 * @LastEditTime: 2022-06-04 17:04:23
 * @Description: 
 */

const { merge } = require('webpack-merge')

const WebpackBaseConfig = require('./webpack.config.js')
module.exports = merge(WebpackBaseConfig, {
  mode: 'production'
})