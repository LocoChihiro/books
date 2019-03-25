const Koa = require("koa");
const render = require('koa-swig');
const co = require('co');
const path = require('path');
const serve = require('koa-static');
const app = new Koa();
const errorHandler = require('./middlewares/errorHandler');
const log4js = require('log4js');
const config = require("./config")
// const config = require('./config');

app.use(serve(config.staticDir));

app.context.render = co.wrap(render({
    root: path.join(config.viewDir),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody:false
}));
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'logs/hs.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');
errorHandler.error(app,logger);
require('./controllers')(app);
app.listen(config.port,()=>{
    console.log(`server is running at ....`);
})