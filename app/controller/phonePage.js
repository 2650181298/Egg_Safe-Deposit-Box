'use strict';

const Controller = require('egg').Controller;

class PhonePageController extends Controller {
  async phonePage() {
    const{
        ctx
    } = this;
    await ctx.render('PhonePage')
  }
}

module.exports = PhonePageController;
