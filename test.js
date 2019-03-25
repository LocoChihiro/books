const Koa = require('koa');
// const swig = require('swig');
const render = require('koa-swig');
const path = require('path');
const co = require('co');
const serve = require('koa-static');
const errorHandler = require('./middlewares/errorHandler.js'); 
const log4js = require('log4js');
// const config = require("./config");
const app = new Koa();
// app.set('view engine','html');
// app.engine('html', swig.renderFile);
app.use(serve(__dirname + '/assets'));
// app.use(serve(config.staticDir));

app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    // root: path.join(config.viewDir),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));



log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: 'logs/books.log'
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

errorHandler.error(app,logger);
require('./controllers')(app);

app.listen(3000, () => {
    console.log('server is running at 3000...');
})