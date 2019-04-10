"use strict";

var _path = require("path");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const { join } = require("path");
// const _ = require("lodash");
let config = {
  viewDir: (0, _path.join)(__dirname, "..", "views"),
  //view的根目录
  staticDir: (0, _path.join)(__dirname, "..", "assets") //assets的根目录

};

if (process.env.NODE_DEV == "development") {
  //开发环境
  const localConfig = {
    port: 3000,
    //端口号
    baseUrl: "http://localhost/basic/web/index.php?r=",
    // base地址
    cacheMode: false //开发环境，不让浏览器缓存

  };
  config = _lodash2.default.extend(config, localConfig);
}

if (process.env.NODE_DEV == "production") {
  //生产环境
  const prodConfig = {
    port: 8081,
    //端口号
    cacheMode: "memory" //生产环境让浏览器缓存

  };
  config = _lodash2.default.extend(config, prodConfig);
}

module.exports = config;