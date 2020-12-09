const { merge } = require("webpack-merge");
const base = require('./webpack.config.base');
module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', //开发环境下使用
  devServer: {
    port: 3000, // 端口 默认 8080
    overlay: false, // 启用 overlay 后，当编译出错时，会在浏览器窗口全屏输出错误，默认是关闭的
    quiet: false, // 默认不启用 启用后除了初始启动信息之外的任何内容都不会被打印到控制台
    host: require('ip').address(), // 默认 localhost 可以获取IP设置 
    open: false,
    proxy: {
      '/api': {
        target: 'http://192.168.1.30:8085', // 代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        // pathRewrite方法重写url
        pathRewrite: {
          '^/api': '/'
          // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          // pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        }
      }
    }
  },
  plugins: []
})