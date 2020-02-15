# egg-coca-server-side

Coca 快速开发框架 Coca rapid development framework For Amoy Freesailing Company Base On EggJs

## 依赖

- 前端框架 [egg-coca-admin-front-end](https://github.com/rojer95/egg-coca-admin-front-end)
- 数据库操作库 [egg-coca-sequelize](https://github.com/rojer95/egg-coca-sequelize)
- LBS 定位 快速开发包 [egg-coca-lbs](https://github.com/rojer95/egg-coca-lbs)
- RESTFUL 快速开发包 [egg-coca-restful](https://github.com/rojer95/egg-coca-restful)
- 微信支付 快速开发包 [egg-coca-tenpay](https://github.com/rojer95/egg-coca-tenpay)
- 文件上传 快速开发包[本地，七牛云][egg-coca-upload](https://github.com/rojer95/egg-coca-upload)
- 后台用户权限角色 快速开发包 [egg-coca-user-permission](https://github.com/rojer95/egg-coca-user-permission)
- 小程序用户&SDK 快速开发包 [egg-coca-wx-member](https://github.com/rojer95/egg-coca-wx-member)
- CLI 工具包 [egg-coca-cli](https://github.com/rojer95/egg-coca-cli)
- 其他工具包 [egg-coca-helper](https://github.com/rojer95/egg-coca-helper)

## 快速开始

<!-- add docs here for user -->

```bash
$ git clone https://github.com/rojer95/egg-coca-server-side.git
$ cd ./egg-coca-server-side
$ yarn install
$ yarn coca rsa:build
$ yarn coca db:migrate
$ npm run debug
```

## Coca Cli

```bash
$ yarn coca rsa:build # 生成rsa秘钥
$ yarn coca db:migrate # 迁移数据库表格结构
$ yarn coca db:init # 生成sequelize配置目录
$ yarn coca db:add # 创建数据库迁移文件
```

## 部署

```bash
$ npm start
$ npm stop
```

## 更新日志

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志由 `conventional-changelog` 自动生成。完整日志请点击 [CHANGELOG.md](./CHANGELOG.md)。
