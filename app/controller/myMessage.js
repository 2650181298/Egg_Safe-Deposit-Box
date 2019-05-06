'use strict';

const Controller = require('egg').Controller;

class MyMessageController extends Controller {
  async index() {
    const { 
      ctx
    } = this;
    await ctx.render('myMessage',{
      mynane:"123754234"
    });
    
  }

  

}




module.exports = MyMessageController;
