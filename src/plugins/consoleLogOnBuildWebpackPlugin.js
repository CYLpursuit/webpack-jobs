//console-log-on-build-webpack-plugin.js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
module.exports = class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler){
        compiler.hooks.run.tap(pluginName, compilation=>{
           console.log('webpack构建过程开始'); 
        });
    }
}
