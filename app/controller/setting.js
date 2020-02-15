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

  async test() {
    const r = await this.app.weapp().subscribemessage.send({
      touser: '1',
      template_id: 'nZKbaoDvGJPxAJJC9Mwc6lGpZ60MD0Teftc4rO6eTKA',
      page: '/pages/index/index',
      data: {
        date1: { value: '1' },
        name3: { value: '1' },
        thing9: { value: '1' },
        thing6: { value: '1' },
      },
    });

    this.ctx.body = r;
  }
}

module.exports = ConfigController;
