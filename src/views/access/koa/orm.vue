<template>
  <article class="markdown">
    <p class="t22">
      <a href="http://docs.sequelizejs.com/">Sequelize文档</a>
    </p>
    <p class="t18">
      Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
    </p>
    <p class="t18">
      逆向工程生产models(sequelize-auto -o "./models" -d database -h localhost -u user -p 3306 -x password -e mysql)
    </p>
    <p class="t22">Sequelize配置 示例</p>
    <pre v-highlightjs><code class="javascript">
const Sequelize = require('sequelize')
const path = require('path')
const config = require('config-lite')(path.join(__dirname, '../config'))
let Db = config.mysql
module.exports = new Sequelize(Db.database, Db.username, Db.password, {
  host: Db.host,
  port: Db.port,
  dialect: 'mysql',
  dialectOptions: { // MySQL > 5.5，其它数据库删除此项
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_520_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  pool: {
    max: 50,
    min: 0,
    idle: 10000
  }
})
    </code></pre>
    <p class="t22">
      service models示例
    </p>
    <pre v-highlightjs><code class="javascript">
const sequelize = require('../lib/sequelize.js')
const User = sequelize.import('../models/re_users.js')
let getAll = async () => {
  let users = await User.findAll()
  return users
}
module.exports = {getAll}
    </code></pre>
    <p class="t22">
      restful 示例
    </p>
    <pre v-highlightjs><code class="javascript">
let Get = (ctx) => {
  ctx.body = {
    ok: true,
    message: JSON.stringify(ctx.method)
  }
}

let Post = async (ctx) => {
  ctx.body = {
    ok: true,
    message: JSON.stringify(ctx.method)
  }
}

let Put = (ctx) => {
  ctx.body = {
    ok: true,
    message: JSON.stringify(ctx.method)
  }
}

let Delete = (ctx) => {
  ctx.body = {
    ok: true,
    message: JSON.stringify(ctx.method)
  }
}
module.exports = {
  Get,
  Post,
  Put,
  Delete
}
    </code></pre>
  </article>
</template>
