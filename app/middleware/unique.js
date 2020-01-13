'use strict';

module.exports = () => {
  return async function permission(ctx, next) {
    try {
      await next();
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        ctx.throw('已存在，请勿重复添加！');
      } else {
        throw error;
      }
    }
  };
};
