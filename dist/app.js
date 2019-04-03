"use strict";

const Koa = require("koa");

const render = require('koa-swig');

const co = require('co');

const path = require('path');

const serve = require('koa-static');

const app = new Koa();

const errorHandler = require('./middlewares/errorHandler');

const log4js = require('log4js');

const config = require("./config");

const bodyParser = require("koa-bodyparser");

app.use(serve(config.staticDir)); //设置静态文件

app.use(bodyParser());
app.context.render = co.wrap(render({
  root: path.join(config.viewDir),
  autoescape: true,
  cache: config.cacheMode,
  ext: "html",
  writeBody: false,
  varControls: ["[[", "]]"]
}));
log4js.configure({
  //日志配置
  appenders: {
    cheese: {
      type: 'file',
      filename: 'logs/hs.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
});
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger); //错误日志

require('./controllers')(app);

app.listen(config.port, () => {
  console.log(`server is running at ....${config.port}`);
});