'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 网页：广告页
  router.get('/', controller.news.echo);
  // 网页：我的
  router.get('/myMessage', controller.homes.indexss);
  // 网页：关联用户
  router.get('/user', controller.homes.user);
  // 网页：开门记录
  router.get('/close_door', controller.homes.close_door);
  // 网页：安全
  router.get('/state', controller.homes.state);
  // 网页：报警记录
  router.get('/Rrcord', controller.homes.Rrcord);
  // 网页：添加保险箱（扫描二维码版）
  router.get('/scanning', controller.scanning.index);
  // 网页：扫一扫
  router.get('/scan', controller.scan.index);
  // 网页：添加保险箱（输入名字版）
  router.get('/addto', controller.homes.index);
  // 网页：保险箱详情
  router.get('/datails',controller.datails.index);
  // 网页：首页
  router.get('/phonePage',controller.phonePage.phonePage);
  // 网页:注册
  router.get('/ragister', controller.wzfragister.index);
  //网页：登录
  router.get('/wzflogin', controller.wzflogin.index);
  //网页：忘记密码
  router.get('/password', controller.wzfpassword.index);
  router.get('/ok', controller.wzfok.index);
};
