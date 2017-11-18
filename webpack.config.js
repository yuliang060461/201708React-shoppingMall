let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',//入口文件
  output: {//输出配置项
    path: path.resolve('build'),//输出的目录
    filename: 'bundle.js',//输出的文件名
  },
  //配置模块
  module: {
    //很多的模块加载规则
    rules: [
      {
        test: /\.js$/,//如果说要加载的文件后缀是.js的话
        use: 'babel-loader',//指定加载器
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  //在出错的时候可以提示具体源文件的代码行数，而非bundle.js行数
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {historyApiFallback:true}})
  ]
}