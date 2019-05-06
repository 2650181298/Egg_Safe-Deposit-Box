'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 网页：我的信息
  router.get('/', controller.myMessage.index);
  router.get('/user', controller.home.user);
  router.get('/close_door', controller.home.close_door);
  router.get('/state', controller.home.state);
  router.get('/Rrcord', controller.home.Rrcord);
};
