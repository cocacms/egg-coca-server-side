"use strict";
const Service = require("egg").Service;

class _Service extends Service {
  /**
   * 获取系统配置
   */
  async show() {
    const { app } = this;
    let config;
    try {
      const config_str = await app.redis.get("system.setting");
      config = JSON.parse(config_str);
      if (!config) throw new Error("empty");
    } catch (error) {
      config = {};
    }
    config.id = 1;
    return config;
  }

  /**
   * 更新配置
   * @param {*} data 数据
   */
  async update(data) {
    const { app } = this;
    return await app.redis.set("system.setting", JSON.stringify(data));
  }
}

module.exports = _Service;
