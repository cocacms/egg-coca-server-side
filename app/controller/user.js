'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const body = ctx.request.body;
    ctx.body = await service.user.login(body.account, body.password);
  }

  async logout() {
    const { ctx, service } = this;
    ctx.body = await service.user.logout();
  }

  async reset() {
    const { ctx, service } = this;

    const body = await ctx.request.body;

    ctx.body = await service.user.changePassword(
      body.password,
      body.newpassword
    );
  }

  async info() {
    const { ctx, service } = this;
    ctx.body = await service.user.info();
  }
}

module.exports = UserController;
