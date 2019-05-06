'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async echo() {
  const {ctx} = this;
  await ctx.render('page');
  }
}

module.exports = NewsController;
