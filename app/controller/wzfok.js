'use strict';

const Controller = require('egg').Controller;

class wzf_okController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("wzfok")
  }
}

module.exports = wzf_okController;