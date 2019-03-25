class TestController {
    constructor() {}
    actionIndex() {
        return async(ctx, root)=> {
            ctx.body = {
                data: "han"
            }
        }
    }
}
module.exports = TestController;