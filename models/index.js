/**
 * @fileoverview 实现Index的数据模型          目的
 * @author hansai1026@outlook.com           作者
 */
/**
 * Index类 获取后台相关的数据类
 * @class
 */

const SafeRequest = require('../utils/SafeRequest');

 class Index {
     /**
      * @constructor
      * @param {string} app     koa2 的执行上下文
      */
     constructor(app){}
    /**
     * 获取书籍列表的数据方法
     * @param {*} option
     * @example
     * return new Promise
     * getData(option)
     * 
     */
     getData() {
         const safeRequest = new SafeRequest("books/index");    //获取后台数据
         return safeRequest.fetch({});
     }

     /**
     * 添加书籍的方法
     * @param {*} option
     * @example
     * return new Promise
     * saveData(option)
     * 
     */
     saveData(option) {
         const safeRequest = new SafeRequest("books/create");    //添加书籍数据
         console.log(safeRequest);
         return safeRequest.fetch({
             method: "POST",
             params: option.params
         });
     }

 }
 module.exports = Index;