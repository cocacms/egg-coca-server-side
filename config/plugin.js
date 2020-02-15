'use strict';
// const path = require('path');

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

/**
 * 以下为 coca 框架插件包
 */

//  数据库
exports.sequelize = {
  enable: true,
  package: 'egg-coca-sequelize',
};

// restful
exports.cocaRestful = {
  enable: true,
  package: 'egg-coca-restful',
  // path: path.join(__dirname, '../lib/egg-coca-restful'),
};

// 上传
exports.cocaUpload = {
  enable: true,
  package: 'egg-coca-upload',
};

// 后台 用户-角色-权限 快速开发包
exports.cocaUserPermission = {
  enable: true,
  package: 'egg-coca-user-permission',
  // path: path.join(__dirname, '../lib/egg-coca-user-permission'),
};

// 微信小程序-sdk与用户
exports.cocaWxMember = {
  enable: true,
  package: 'egg-coca-wx-member',
};

// 微信小程序-sdk与用户
exports.cocaTenpay = {
  enable: true,
  package: 'egg-coca-tenpay',
};

// LBS
exports.cocaLbs = {
  enable: true,
  package: 'egg-coca-lbs',
};

// 其他工具包
exports.cocaHelper = {
  enable: true,
  package: 'egg-coca-helper',
};
