const { merge } = require("webpack-merge");
const base = require('./webpack.config.base');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const checkCompilerHooksPlugin = require('../src/plugins/checkCompilerHooksPlugin');
const consoleLogOnBuildWebpackPlugin = require('../src/plugins/consoleLogOnBuildWebpackPlugin');
const path = require('path');
module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssPlugin(), // 压缩css
    new checkCompilerHooksPlugin(),
    new consoleLogOnBuildWebpackPlugin(),
  ]
})