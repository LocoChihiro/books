const fetch = require('node-fetch');
const config = require('../config');
/**
 * 对请求进行配置，和容错。
 */

class SafeRequest {
  constructor(url){
    this.url = url;
    this.baseUrl = config.baseUrl;
  }
  fetch(option){
    let books = fetch(this.baseUrl + this.url);
    if(option.params) {
      books = fetch(this.baseUrl + this.url,{
        method: option.method,
        body: option.params
      });
    }
    return new Promise((resolve, reject)=>{
      let result = {  //保证前端有数据
        code: 0,
        data: [],
        message: ''
      };
      books
        .then(res=>{
          return res.json()
        })
        .then(res=>{
          result.data = res;
          resolve(result);
        }).catch(error=>{
          result.code = 1;
          result.message = error;
          reject(result);
        })
    })
  }
}
module.exports = SafeRequest;