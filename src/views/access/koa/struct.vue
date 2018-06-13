<template lang="pug">
  article.markdown
    .t22 项目
    bdp-row
      bdp-col(:span="6")
        img(src="/static/koaStruct.png")
      bdp-col(:span="18")
        pre(v-highlightjs='')
          code
            |├── config                      # 环境配置
            |│   ├── default.js              # 默认环境配置(pro)
            |│   ├── dev.js                  # 开发环境配置(sit,local)
            |│   ├── log.js                  # log4js日志配置
            |├── controllers
            |│   ├── api.js                  # restful 示例
            |│   ├── index.js                # controllers层统一输出
            |│   ├── user.js                 # userContrller示例
            |│   ├── es.js                   # elasticsearch示例
            |├── lib
            |│   ├── cas                     # 公司cas认证中间件
            |│   ├── es.js                   # elasticsearch客户端
            |│   ├── sequlize.js             # sequlize mysql orm 入口
            |│   ├── store.js                # redis 入口
            |├── models
            |│   ├── re_users.js             # sequlize orm models
            |├── routes
            |│   ├── main-routes.js          # 主路由配置
            |│   ├── error-router.js         # 出错处理配置
            |├── service                     #业务层
            |├── .eslintrc.yml               # eslint规则配置(可写入package.json)
            |├── app.js                      # 项目入口
            |└── package.json                # npm 依赖，其他配置'
</template>
