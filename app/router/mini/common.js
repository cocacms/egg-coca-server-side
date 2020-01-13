'use strict';

module.exports = app => {
  /**
   * 小程序，通用router
   */
  const { router, middlewares, controller, field } = app;
  const { validate, wxMember } = middlewares;
  const prefix = '/mini';

  const adminWithoutAuth = router.namespace(prefix);
  /**
   * 登录
   */
  adminWithoutAuth.get('/login', controller.mini.login);

  const admin = router.namespace(prefix, wxMember());

  /**
   * 修改个人信息
   */

  admin.put(
    '/info',
    validate([
      field('nick_name', '昵称').required(),
      field('avatar_url', '头像').required(),
      field('gender', '性别').required(),
      field('country', '国家').required(),
      field('province', '省份').required(),
      field('city', '城市').required(),
    ]),
    controller.mini.update
  );

  /**
   * 绑定手机
   */
  admin.put(
    '/tel',
    validate([
      field('iv', '电话').required(),
      field('encryptedData', '电话').required(),
    ]),
    controller.mini.update_tel
  );
};
