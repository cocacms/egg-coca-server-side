# egg-coca-server-side
> Coca rapid development framework For Amoy Freesailing Company Base On EggJs


## QuickStart

<!-- add docs here for user -->
```bash
$ git clone https://github.com/rojer95/egg-coca-server-side.git
$ cd ./egg-coca-server-side
$ npm install
$ npx coca rsa:build 
$ npx coca db:migrate 
$ npm run debug
```

### Coca Cli
```bash
$ npx coca rsa:build # 生成rsa秘钥
$ npx coca db:migrate # 迁移数据库表格结构
$ npx coca db:init # 生成sequelize配置目录
$ npx coca db:add # 创建数据库迁移文件
```


### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org