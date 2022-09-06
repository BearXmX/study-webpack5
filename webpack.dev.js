/*
 * @Date: 2022-06-03 22:05:13
 * @LastEditors: 熊明祥
 * @LastEditTime: 2022-06-04 17:04:20
 * @Description: 
 */

const path = require('path')
const { merge } = require('webpack-merge')

const WebpackBaseConfig = require('./webpack.config.js')

module.exports = merge(WebpackBaseConfig, {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname + '/dist'),
    hot: true,
    port: '3000',
    open: true,
  }
})
