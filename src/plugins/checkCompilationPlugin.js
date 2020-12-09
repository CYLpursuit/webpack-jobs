const { compilation } = require("webpack");

const pluginName = 'CheckCompilationPlugin';

module.exports = class CheckCompilationPlugin{
  constructor(options) {
    console.log('CheckCompilationPlugin constructor called');
  }

  apply(compiler) {
    console.log('CheckCompilationPlugin apply called');
    // compiler.hooks.emit.tap(pluginName, compilation => {
      // compilation hooks
      // for(var hook of Object.keys(compilation.hooks)){
          // console.log(hook);
      // }
      // console.log('compilation hooks', compilation.hooks);
    // })
  }
}