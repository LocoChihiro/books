const router = require('koa-simple-router');
const IndexController = require('./IndexController');
const TestController = require('./TestController');

const indexController = new IndexController();
const testController = new TestController();

module.exports = (app)=> {
    app.use(router(_ => {
        _.get('/', indexController.actionIndex()),
        _.get('/index.html', indexController.actionIndex()),
        _.get('/books', testController.actionIndex())
      }));
};