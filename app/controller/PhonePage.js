'use strict';

const Controller = require('egg').Controller;

class PhonePageController extends Controller {
  async PhonePage() {
    const{
        ctx
    } = this;
    await ctx.render('PhonePage')
  }
}

module.exports = PhonePageController;
