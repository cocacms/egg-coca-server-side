'use strict';

const Controller = require('egg').Controller;

class ConfigController extends Controller {
  async show() {
    const { ctx, service } = this;
    ctx.body = await service.setting.show();
  }

  async update() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    ctx.body = await service.setting.update(data);
  }
}

module.exports = ConfigController;
