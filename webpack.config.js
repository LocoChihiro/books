const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode;
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require('webpack-merge');
const glob = require("glob");
const files = glob.sync('./src/web/views/**/*.entry.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const _entry = {};
const _plugin = [];
for (let item of files) {
  if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) {
    const entryKey = RegExp.$1;
    _entry[entryKey] = item;
    const [dist, template] = entryKey.split('-');
    _plugin.push(new HtmlWebpackPlugin({  // Also generate a test.html
      filename: `views/${dist}/pages/${template}.html`, //输出路径
      template: `src/web/views/${dist}/pages/${template}.html`, //入口路径
      inject: false 
    }))
  }
}
console.log(argv);

module.exports = {
  entry: _entry
}