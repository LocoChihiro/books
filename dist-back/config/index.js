'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var _ = _interopDefault(require('lodash'));

// const { join } = require("path");
// const _ = require("lodash");
let config = {
  viewDir: path.join(__dirname, "..", "views"), //view的根目录
  staticDir: path.join(__dirname, "..", "assets") //assets的根目录
};
{ //生产环境
  const prodConfig = {
    port: 8081, //端口号
    cacheMode: "memory" //生产环境让浏览器缓存
  };
  config = _.extend(config, prodConfig);
}
module.exports = config;
