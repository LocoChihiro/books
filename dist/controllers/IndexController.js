"use strict";

const Index = require("../models/index");

const {
  URLSearchParams
} = require('url');

const cheerio = require('cheerio');

class IndexController {
  constructor() {}

  actionIndex() {
    //首页控制器
    return async (ctx, root) => {
      const index = new Index();
      const result = await index.getData();
      const html = await ctx.render("books/pages/list", {
        data: result.data
      }); //吐出模板内容

      if (ctx.request.header['x-pjax']) {
        const $ = cheerio.load(html);
        ctx.body = $('#hooks-data').html();
      } else {
        ctx.body = html;
      }
    };
  }

  actionAdd() {
    //add路由控制器
    return async (ctx, root) => {
      const html = await ctx.render("books/pages/add");
      console.log(html);
      const $ = cheerio.load(html);
      let _result = '';

      if (ctx.request.header['x-pjax']) {
        $('.pjaxcontent').each(function () {
          _result += $(this).html();
        });
        $('.layload-js').each(function () {
          // console.log($(this).attr('src'));
          _result += `<script src="${$(this).attr('src')}"></script>`;
        });
        $('.layload-css').each(function () {
          _result += `<link rel="stylesheet" href="${$(this).attr('href')}">`;
        });
        console.log(_result);
        ctx.body = _result;
      } else {
        ctx.body = html;
      }
    };
  }

  actionSave() {
    return async (ctx, root) => {
      const index = new Index();
      const params = new URLSearchParams();
      params.append("Books[name]", ctx.request.body.name);
      params.append("Books[author]", ctx.request.body.author);
      params.append("Books[price]", ctx.request.body.price);
      Number(ctx.request.body.price);
      const result = await index.saveData({
        params
      });
      ctx.redirect("/");
      ctx.body = result;
    };
  }

}

module.exports = IndexController;