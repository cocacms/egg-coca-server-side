# egg-coca-server-side

Coca 快速开发框架 Coca rapid development framework For Amoy Freesailing Company Base On EggJs

## 依赖

- 前端框架 [egg-coca-admin-front-end](https://github.com/rojer95/egg-coca-admin-front-end)
- 数据库操作库 [egg-coca-sequelize](https://github.com/rojer95/egg-sequelize)
- LBS 定位 快速开发包 [egg-coca-lbs](https://github.com/rojer95/egg-coca-lbs)
- RESTFUL 快速开发包 [egg-coca-restful](https://github.com/rojer95/egg-coca-restful)
- 微信支付 快速开发包 [egg-coca-tenpay](https://github.com/rojer95/egg-coca-tenpay)
- 文件上传 快速开发包[本地，七牛云][egg-coca-upload](https://github.com/rojer95/egg-coca-upload)
- 后台用户权限角色 快速开发包 [egg-coca-user-permission](https://github.com/rojer95/egg-coca-user-permission)
- 小程序 SDK 快速开发包 [egg-coca-weapp-sdk](https://github.com/rojer95/egg-coca-weapp-sdk)
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

## 用户权限说明

---

### 用户类型

- `super`：超级管理员，无视任何权限验证
- `admin`：管理员，依据分配角色的权限能够操作所有资源
- `normal`：普通账号，依据分配角色的权限能够操作该账号所创建的资源

### 权限配置

1. 权限的定义配置路径在`/config/permission.js`，`key:name`结构
2. 在`router`文件中配置权限验证中间件`permission('xxx')`
3. 在后台创建角色，勾选你想要分配的权限
4. 将角色分配给相应的账号即可

### 普通账号资源访问控制

> 访问控制需要配合`egg-coca-restful`插件使用，判断依据为`user_id`字段，使用 restful 时普通账号会自动加入`user_id` _(前提是 model 必须存在`user_id`字段)_

### permission 中间件

> permission 中间件接受 2 个参数  
> 第一个参数：要验证的权限的`key`，必填，文本类型  
> 第二个参数：适用于`resources`定义路由时，想要某些操作不进行权限验证,可填入`['index', 'show', 'create', 'update', 'destroy']`，填入则代表不验证，参数可选，数组类型

---

## 更新日志

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志由 `conventional-changelog` 自动生成。完整日志请点击 [CHANGELOG.md](./CHANGELOG.md)。
