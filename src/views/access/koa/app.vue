<template>
  <article class="markdown">
    <p class="t22">
      app.js(入口配置文件)
    </p>
    <pre v-highlightjs><code>
const Koa2 = require('koa')
const KoaBody = require('koa-body')
const KoaStatic = require('koa-static2')
const log4js = require('koa-log4')
const MainRoutes = require('./routes/main-routes')
const ErrorRoutes = require('./routes/error-routes')
const session = require('koa-session')
const Cas = require('./lib/cas')
const path = require('path')
require('./config/log.js')
const app = new Koa2()
const logger = log4js.getLogger('app')
const config = require('config-lite')(path.join(__dirname, 'config'))
// logger 日志
if (process.env.NODE_ENV === 'dev') {
  app.use((ctx, next) => {
    if (ctx.url === '/favicon.ico') return next()
    const start = new Date()
    return next().then(() => {
      const ms = new Date() - start
      logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
      logger.info(`${JSON.stringify(ctx.response.header['content-type'])}:${JSON.stringify(ctx.body)} - ${ms}ms`)
    })
  })
}
// cas处理
const cas = new Cas({casUrl: config.cas.baseUrl, serverUrl: config.cas.serverUrl, indexUrl: config.cas.indexUrl})
app.keys = ['zach']
app.use(session({key: 'NSESSION'}, app))
app.use(cas.logout())
app.use(cas.core())
// 统一出错处理
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    logger.error('server error', err)
    ctx.body = {
      succ: false,
      message: err
    }
    ctx.status = err.status || 500
  }
})
// 主要配置
app
  .use((ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    // if (ctx.request.header.host.split(':')[0] === 'localhost' || ctx.request.header.host.split(':')[0] === '127.0.0.1') {
    //   ctx.set('Access-Control-Allow-Origin', '*')
    // } else {
    //   // ctx.set('Access-Control-Allow-Origin', config.system.front_host)
    // }
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    ctx.set('Access-Control-Allow-Credentials', true) // 允许带上 cookie
    return next()
  })
  .use(KoaStatic('assets', path.resolve(__dirname, '../assets')))// 静态资源处理
  .use(KoaBody({
    multipart: true,
    strict: false,
    formidable: {
      uploadDir: path.join(__dirname, '../assets/uploads/tmp')
    },
    jsonLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb'
  })) // 处理表单带附件请求 request
  .use(MainRoutes.routes())
  .use(MainRoutes.allowedMethods())
  .use(ErrorRoutes())
  .use(log4js.koaLogger(log4js.getLogger('http', {level: 'auto'})))

logger.info(`Now start API server: ${config.system.server_type}://${config.system.server_host}:${config.system.server_port} `)
app.listen(config.system.server_port)

    </code></pre>
  </article>
</template>
