'use strict';

module.exports = app => {
  /**
   * 后台管理，通用router
   */
  const { router, controller, middlewares, field, model } = app;
  const { validate, permission, curd, user } = middlewares;
  const { User, Role } = model;

  const prefix = '/backend';

  const adminWithoutAuth = router.namespace(prefix);

  /**
   * 登录
   */
  adminWithoutAuth.post(
    '/login',
    validate([
      field('account', '账号').required(),
      field('password', '密码').required(),
    ]),
    controller.user.login
  );

  /**
   * 登出
   */
  adminWithoutAuth.post('/logout', controller.user.logout);

  /**
   * 权限表
   */
  adminWithoutAuth.get('/permission', async (ctx, next) => {
    ctx.body = ctx.app.config.permission;
    await next();
  });

  const admin = router.namespace(prefix, user());

  /**
   * 上传
   */
  admin.post('/upload', async (ctx, next) => {
    ctx.body = await ctx.service.upload.upload();
    await next();
  });

  /**
   * 修改密码
   */
  admin.post(
    '/reset',
    validate([
      field('newpassword', '新密码').required(),
      field('password', '旧密码').required(),
    ]),
    controller.user.reset
  );

  /**
   * 个人信息
   */
  admin.get('/info', controller.user.info);

  /**
   * 用户 Restful
   */
  admin.resources(
    'user',
    '/user',
    validate([ field('password', '密码').required() ], {
      method: [ 'POST', 'PUT' ],
    }),
    permission('user'),
    curd(User)
  );

  /**
   * 角色 Restful
   */
  admin.get('/role', curd(Role, 'index')); // 获取列表不用权限
  admin.resources(
    'role',
    '/role',
    validate([ field('name', '名称').required() ], {
      method: [ 'POST', 'PUT' ],
    }),
    permission('role'),
    curd(Role)
  );
};
