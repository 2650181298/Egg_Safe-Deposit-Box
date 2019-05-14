'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async user() {
    // const { ctx } = this;
    await this.ctx.render('user.html',{
      state_img:'../public/images/fase1.png',
      state_a:'保险箱',
      Open_door:"../public/images/Opendoor1.png",
      Rrcord:"../public/images/Callthepolice1.png",
      user:"../public/images/Relation2.png",
    })
  }
  async close_door() {
    // const { ctx } = this;
    await this.ctx.render('close_door.html',{
      state_img:'../public/images/fase1.png',
      state_a:'保险箱',
      Open_door:"../public/images/Opendoor2.png",
      Rrcord:"../public/images/Callthepolice1.png",
      user:"../public/images/Relation1.png",
    })
  }
  async state() {
    // const { ctx } = this;
    await this.ctx.render('state.html' ,{
      state_img:'../public/images/fase2.png',
      state_a:'保险箱',
      Open_door:"../public/images/Opendoor1.png",
      Rrcord:"../public/images/Callthepolice1.png",
      user:"../public/images/Relation1.png",
    }
    )
  }
  async Rrcord() {
    // const { ctx } = this;
    await this.ctx.render('Rrcord.html',{
      state_img:'../public/images/fase1.png',
      state_a:'保险箱',
      Open_door:"../public/images/Opendoor1.png",
      Rrcord:"../public/images/Callthepolice2.png",
      user:"../public/images/Relation1.png",
    })
  }
  async index() {
    const { ctx } = this;
    await ctx.render("addto",{
      Add_safe:"添加保险箱"
    })
  }
  async indexss() {
    const { 
      ctx
    } = this;
    await ctx.render('myMessage');
    
  }
}
module.exports = HomeController;  