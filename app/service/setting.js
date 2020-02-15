'use strict';
const Service = require('egg').Service;

class _Service extends Service {
  /**
   * 获取系统配置
   */
  async show() {
    const { app } = this;
    const configs = await app.model.Setting.findAll();
    const data = {
      id: 1,
    };

    for (const config of configs) {
      data[config.key] = config.value;
    }

    return data;
  }

  /**
   * 更新配置
   * @param {*} data 数据
   */
  async update(data) {
    const { app } = this;
    await app.model.transaction(async transaction => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          const item = await app.model.Setting.findOne({
            where: {
              key,
            },
            transaction,
          });
          if (item) {
            item.value = value;
            await item.save({ transaction });
          } else {
            await app.model.Setting.create(
              {
                key,
                value,
              },
              {
                transaction,
              }
            );
          }
        }
      }
    });

    return data;
  }
}

module.exports = _Service;
