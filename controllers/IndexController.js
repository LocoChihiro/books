const Index = require("../models/index");
const { URLSearchParams } = require('url');
class IndexController {
    constructor() {}
    actionIndex() {  //首页控制器
        return async(ctx, root)=> {
            const index = new Index();
            // console.log(index,123);
            const result = await index.getData();
            ctx.body = await ctx.render(
                "Index",
                {
                data:
                    result.data
                }
            ); //吐出模板内容
        }
    }
    actionAdd() {   //add路由控制器
        return async (ctx, root) => {
            ctx.body = await ctx.render("add");   //吐出模板内容
        }
    }
    actionSave() {
        return async (ctx, root) => {
            const index = new Index();
            const params = new URLSearchParams();
            params.append("Books[name]","测试吧");
            params.append("Books[author]","测试1");
            params.append("Books[price]",20);
            // console.log(index.saveData);
            const result = await index.saveData({
                params
            });
            ctx.body = result;
        }
    }
}
module.exports = IndexController;