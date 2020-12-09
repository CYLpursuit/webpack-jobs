const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/login.js'
  },
  output: {
    path: resolve('dist'), // 必须是绝对路径
    filename: '[name].[hash:6].js'
  },
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
  resolve: {
    modules: ['./src/components', 'node_modules'], //从左到右依次查找
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      '@utils': resolve('src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ["@babel/preset-env"],
        //     plugins: [
        //       [
        //         "@babel/plugin-transform-runtime",
        //         {
        //           "corejs": 3
        //         }
        //       ]
        //     ]
        //   }
        // },
        exclude: /node_modules/ // 排除 node_modules 目录
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 'postcss-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240, // 10K
              esModule: false,
              name: '[name]_[hash:6].[ext]',
              outputPath: 'assets'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', // 打包后的文件名
      chunks: ['index'],
      minify: {
        removeAttributeQuotes: false, // 是否删除属性的双引号
        collapseWhitespace: false, // 是否折叠空白
      }
      // hash: true // 是否加上hash，默认是 false
    }),
    new HtmlWebpackPlugin({
      template: './public/login.html',
      filename: 'login.html', // 打包后的文件名
      chunks: ['login'],
      minify: {
        removeAttributeQuotes: false, // 是否删除属性的双引号
        collapseWhitespace: false, // 是否折叠空白
      }
      // hash: true // 是否加上hash，默认是 false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
      // publicPath:'../'   // 如果你的output的publicPath配置的是 './' 这种相对路径，那么如果将css文件放在单独目录下，记得在这里指定一下publicPath 
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/js/*.js',
        to: path.resolve(__dirname, '../dist', 'js'),
        flatten: true, // 设置为 true，那么它只会拷贝文件，而不会把文件夹路径都拷贝上，可以不设置 flatten 时，看下构建结果
      },
      //还可以继续配置其它要拷贝的文件
    ], {
      ignore: ['other.js'] // 过滤不拷贝的文件
    }
    )
  ]
}