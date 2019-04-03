import Rize from "rize";
const rize = new Rize();
rize
  .goto('http://localhost:3000/')   //访问哪个网页
  .type()     //对页面的元素进行操作
  .press()      //结束操作所做的事情
  .waitForNavigation()      //等待
  .assertSee('searching-node.png')    //保存截图
  .end()  // 别忘了调用 `end` 方法来退出浏览器！