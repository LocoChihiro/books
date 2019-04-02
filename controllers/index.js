const router = require('koa-simple-router');
const IndexController = require('./IndexController');
const TestController = require('./TestController');

const indexController = new IndexController();
const testController = new TestController();

module.exports = (app)=> {
    app.use(router(_ => {
        _.get('/', indexController.actionIndex()),  //根路由
        _.get('/index.html', indexController.actionIndex()),  //防止爬虫
        _.get('/add', indexController.actionAdd()),
        _.get('/books', testController.actionIndex())  //books路由
      }));
};