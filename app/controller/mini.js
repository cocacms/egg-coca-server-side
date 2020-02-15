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
    const { ctx, service } = this;
    ctx.body = await service.wxMember.bind_tel(
      ctx.request.body.encryptedData,
      ctx.request.body.iv
    );
  }
}

module.exports = _Controller;
