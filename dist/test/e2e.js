"use strict";

var _rize = require("rize");

var _rize2 = _interopRequireDefault(_rize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rize = new _rize2.default();
rize.goto('http://localhost:3000/') //访问哪个网页
.type() //对页面的元素进行操作
.press() //结束操作所做的事情
.waitForNavigation() //等待
.assertSee('searching-node.png') //保存截图
.end(); // 别忘了调用 `end` 方法来退出浏览器！