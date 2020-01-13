'use strict';

const Controller = require('egg').Controller;

class _Controller extends Controller {
  async login() {
    const { ctx, service } = this;
    ctx.body = await service.wxMember.login();
  }

  async update() {
    const { ctx, service } = this;
    ctx.body = await service.wxMember.update();
  }

  async update_tel() {
    const { ctx, app } = this;
    const result = app.weapp.crypto.decryptData({
      sessionKey: ctx.wx_member.session_key,
      encryptedData: ctx.request.body.encryptedData,
      iv: ctx.request.body.iv,
    });

    if (!result.purePhoneNumber) {
      ctx.throw('手机号码无效');
    }

    try {
      ctx.body = await ctx.wx_member.update({
        tel: result.purePhoneNumber,
      });
    } catch (e) {
      ctx.throw('号码已被别人绑定');
    }
  }
}

module.exports = _Controller;
