const pluginName = 'checkCompilerPlugin';
module.exports = class checkCompilerPlugin {
    constructor(option) {
        console.log('checkCompilerPlugin constructor called');
    }
    apply(compiler){
        console.log('checkCompilerPlugin apply called');
        // compiler hooks
        // for(var hook of Object.keys(compiler.hooks)){
        //     console.log(hook);
        // }
        // console.log(compiler.hooks);
        // compiler options
        // console.log('compiler配置选项', compiler.options);
    }
}