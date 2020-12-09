const { merge } = require("webpack-merge");
const base = require('./webpack.config.base');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const checkCompilerPlugin = require('../src/plugins/checkCompilerPlugin');
const consoleLogOnBuildWebpackPlugin = require('../src/plugins/consoleLogOnBuildWebpackPlugin');
const checkCompilationPlugin = require('../src/plugins/checkCompilationPlugin');
const checkTapAsyncPlugin = require('../src/plugins/checkTapAsyncPlugin');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssPlugin(), // 压缩css
    new checkCompilerPlugin(),
    new checkCompilationPlugin(),
    new checkTapAsyncPlugin(),
    new consoleLogOnBuildWebpackPlugin(),
  ]
})