/*
 * @Date: 2022-06-03 20:31:00
 * @LastEditors: 熊明祥
 * @LastEditTime: 2022-06-04 18:14:41
 * @Description: 
 */
const path = require('path')
const mode = false ? 'production' : 'development'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/* 
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack-dev-server --open --config wbpack.dev.js"
*/

module.exports = {
  // todo 多入口打包 params => Array
  /* entry: [path.resolve('./index.js'), path.resolve('./vendors.js')], */
  entry: {
    index: path.resolve(__dirname + '/index.js'),
    utils: path.resolve(__dirname + '/src/utils/index.js')
  },
  output: {
    path: path.resolve('./dist'),
    // todo 多入口打包文件名 
    filename: 'js/[name].[hash].bundle.js',
    // todo 单入口打包文件名
    /*     filename: 'js/bundle.js', */
    clean: true
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname + '/src/')
    },
    extensions: ['.js', '.less', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
              // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
              publicPath: './',
              // publicPath: devMode ? './' : '../',   // 根据不同环境指定不同的publicPath
            },
          },
          {
            loader: 'css-loader',
          }
          ,
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'webpack5',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // 这里的配置和webpackOptions.output中的配置相似
      // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
      filename: 'css/[contenthash].css',
      chunkFilename: 'css/[contenthash].css',
    })
  ],
}
