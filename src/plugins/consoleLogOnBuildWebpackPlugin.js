//console-log-on-build-webpack-plugin.js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
module.exports = class ConsoleLogOnBuildWebpackPlugin {
    constructor(option) {
        console.log('ConsoleLogOnBuildWebpackPlugin constructor called');
    }
    apply(compiler){
        console.log('ConsoleLogOnBuildWebpackPlugin apply called');
        compiler.hooks.shouldEmit.tap(pluginName, compilation=>{
            console.log('构建过程:shouldEmit'); 
        });
        compiler.hooks.done.tap(pluginName, (compilation)=>{
            console.log('结束：done'); 
        });
        compiler.hooks.additionalPass.tap(pluginName, compilation=>{
            console.log('构建过程:additionalPass'); 
        });
        compiler.hooks.beforeRun.tap(pluginName, compilation=>{
            console.log('构建过程:beforeRun'); 
        });
        compiler.hooks.run.tap(pluginName, compilation=>{
            console.log('开始：run'); 
         });
        compiler.hooks.emit.tap(pluginName, compilation=>{
            console.log('生成文件到output目录：emit');
            var filelist = '\n';
            for (var filename in compilation.assets) {
                filelist += '- ' + filename + '\n';
            }
            console.log('compilation.assets', filelist); 
        });
        compiler.hooks.assetEmitted.tap(pluginName, compilation=>{
            console.log('构建过程:assetEmitted'); 
        });
        compiler.hooks.afterEmit.tap(pluginName, compilation=>{
            console.log('构建过程:afterEmit'); 
        });
        compiler.hooks.thisCompilation.tap(pluginName, compilation=>{
            console.log('构建过程:thisCompilation'); 
        });
        compiler.hooks.compilation.tap(pluginName, compilation=>{
            console.log('构建过程:compilation'); 
        });
        compiler.hooks.normalModuleFactory.tap(pluginName, compilation=>{
            console.log('构建过程:normalModuleFactory'); 
        });
        compiler.hooks.contextModuleFactory.tap(pluginName, compilation=>{
            console.log('构建过程:contextModuleFactory'); 
        });
        compiler.hooks.beforeCompile.tap(pluginName, compilation=>{
            console.log('构建过程:beforeCompile'); 
        });
        compiler.hooks.compile.tap(pluginName, compilation=>{
            console.log('构建过程:compile'); 
        });
        compiler.hooks.normalModuleFactory.tap(pluginName, compilation=>{
            console.log('构建过程:shouldEmit'); 
        });
        compiler.hooks.make.tap(pluginName, compilation=>{
            console.log('构建过程:make'); 
        });
        compiler.hooks.afterCompile.tap(pluginName, compilation=>{
            console.log('构建过程:afterCompile'); 
        });
        compiler.hooks.watchRun.tap(pluginName, compilation=>{
            console.log('构建过程:watchRun'); 
        });
        compiler.hooks.failed.tap(pluginName, compilation=>{
            console.log('构建过程:failed'); 
        });
        compiler.hooks.invalid.tap(pluginName, compilation=>{
            console.log('构建过程:invalid'); 
        });
        compiler.hooks.watchClose.tap(pluginName, compilation=>{
            console.log('构建过程:watchClose'); 
        });
        compiler.hooks.infrastructureLog.tap(pluginName, compilation=>{
            console.log('构建过程:infrastructureLog'); 
        });
        compiler.hooks.environment.tap(pluginName, compilation=>{
            console.log('构建过程:environment'); 
        });
        compiler.hooks.afterEnvironment.tap(pluginName, compilation=>{
            console.log('构建过程:afterEnvironment'); 
        });
        compiler.hooks.afterPlugins.tap(pluginName, compilation=>{
            console.log('构建过程:afterPlugins'); 
        });
        compiler.hooks.afterResolvers.tap(pluginName, compilation=>{
            console.log('构建过程:afterResolvers'); 
        });
        compiler.hooks.entryOption.tap(pluginName, compilation=>{
            console.log('构建过程:entryOption'); 
        });
        compiler.hooks.infrastructurelog.tap(pluginName, compilation=>{
            console.log('构建过程:infrastructurelog'); 
        });
    }
}
