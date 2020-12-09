const pluginName = 'checkTapAsync';
const axios = require('axios');

module.exports = class checkTapAsync{
  constructor(options) {
    console.log('checkTapAsync constructor called');
  }

  apply(compiler) {
    console.log('checkTapAsync apply called');

    compiler.hooks.emit.tap(pluginName, compilation => {
      this.getData('tap');
    })

    compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
      this.getData('tapAsync');
      // 继续
      callback();
    })
  }

  async getData(req) {
    const res = await axios.get('https://api.tuiketg.com/daihuowang/wxauth/userInfo');
    console.log(`${req} data back: ${res.status}`);
  }
}