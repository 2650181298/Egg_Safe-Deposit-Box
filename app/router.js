'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 网页：我的信息
  router.get('/myMessage', controller.myMessage.index);
  //广告页
  router.get('/', controller.news.echo);
  //首页
  router.get('/phonePage', controller.phonePage.phonePage);
  //添加保险箱
  router.get('/addto', controller.addto.index);
  //扫描二维码
};
