class IndexController {
    constructor() {}
    actionIndex() {
        return async(ctx, root)=> {
            ctx.body = await ctx.render('index');
        }
    }
}
module.exports = IndexController;