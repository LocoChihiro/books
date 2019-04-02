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
     constructor(app ){}
    /**
     * 获取后台的数据方法
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

 }
 module.exports = Index;