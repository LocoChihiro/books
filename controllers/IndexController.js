const Index = require("../models/index");
class IndexController {
    constructor() {}
    actionIndex() {  //首页控制器
        return async(ctx, root)=> {
            const index = new Index();
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
}
module.exports = IndexController;