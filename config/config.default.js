'use strict';
const path = require('path');
const permission = require('./permission');
const setting = require('./setting');

const { readFileSync } = require('fs');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576733286424_2068';

  // add your middleware config here
  config.middleware = [ 'error' ]; // 错误处理

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  /**
   * csrf配置
   */
  config.security = {
    csrf: {
      ignore: [ '/backend', '/mini' ],
    },
  };

  /**
   * 文件上传配置
   */
  config.multipart = {
    mode: 'file',
    // whitelist: [],
    fileSize: '50mb',
    cleanSchedule: {
      // 定时清理缓存
      cron: '0 30 4 * * *',
    },
  };

  /**
   * 上次文件限制
   */
  config.bodyParser = {
    formLimit: '50mb',
    jsonLimit: '10mb',
    textLimit: '10mb',
  };

  /**
   * 权限
   */
  config.permission = permission;

  /**
   * 国际化（I18n）
   */

  config.i18n = {
    defaultLocale: 'zh-CN',
  };

  /**
   * 系统配置
   */
  config.setting = setting;

  const localEnvConfig = {
    /**
     * 数据库配置
     */
    sequelize: {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'coca',
      username: 'root',
      password: 'root',
      timezone: '+08:00',
      dialectOptions: {
        charset: 'utf8mb4',
        dateStrings: true,
        typeCast(field, next) {
          // for reading from database
          if (field.type === 'DATETIME') {
            return field.string();
          }
          return next();
        },
      },
    },

    /**
     * 用户-权限-角色 配置
     */
    userPermimission: {
      dirver: 'jwt',
      algorithm: 'RS256',
      jwk: {
        private: [
          readFileSync(path.join(__dirname, './rsa/rsa_private_key.pem')),
        ],
        public: [
          readFileSync(path.join(__dirname, './rsa/rsa_public_key.pem')),
        ],
      },
    },

    /**
     * 日志
     */

    logger: {
      consoleLevel: 'DEBUG',
    },

    /**
     * 七牛云 cdn上传
     */

    upload: {
      dirver: 'qiniu',
      qiniu: {
        AccessKey: '',
        SecretKey: '',
        Bucket: '',
        Cdn: '', // cdn域名 如：//cdn.xxxx.cn/
        Host: '//upload-z2.qiniup.com', // 上传域，与bucket所在地区有关
      },
    },

    /**
     * LBS
     */

    lbs: {
      table_id: '',
      key: '',
    },

    /**
     * 微信小程序
     */
    weapp: {
      appId: '',
      appSecret: '',
    },

    /**
     * 微信支付
     */
    wxTenpay: {
      appid: '',
      mchid: '',
      partnerKey: '',
      pfx: '',
      notify_url: '',
      spbill_create_ip: '',
    },
  };

  return {
    ...config,
    ...localEnvConfig,
  };
};
