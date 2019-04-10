"use strict";

const errorHandler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        ctx.status = 500;
        logger.error(error);
        ctx.body = {};
      }
    });
    app.use(async (ctx, next) => {
      await next();

      if (404 != ctx.status) {
        return;
      }

      ctx.status = 404;
      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
    });
  }

};
module.exports = errorHandler;