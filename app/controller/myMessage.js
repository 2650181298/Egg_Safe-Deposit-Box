'use strict';

const Controller = require('egg').Controller;

class MyMessageController extends Controller {
  async index() {
    const { 
      ctx
    } = this;
    await ctx.render('myMessage');
    
  }

  

}




module.exports = MyMessageController;
