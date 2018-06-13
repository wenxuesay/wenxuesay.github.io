<template>
<article class="markdown">
  <p class="t22">cas</p>
  <p class="t16">cas作为统一认证，前后台分离项目,我们提供了一套登录规范。配合接入层(bdp-springboot,bdp-koa),可以直接生成应用。</p>
    <pre v-highlightjs>
response示例
    <code class="javascript">
      {
        state:'ok',
        result:{}
      }
      {
        state:'fail',
        message:'系统错误'
      }
      {
        state:'jump',
        result:{
          redirect:'http://cas......com/cas/login?service=http%3A%2F%2Feos-dcds-core.com%2F%2Fadmin%2Flogin#'
        }
      }
    </code></pre>
  <pre v-highlightjs>
    <p class="t16">前端axios拦截器配置(统一出错处理,拦截登录)</p>
    <code class="javascript">
import axios from 'axios';
import { Message } from 'element-ui';
import router from './router';
import store from './store';
import util from './lib/util';


axios.defaults.timeout = 60000;
// http request 拦截器
// $axios.defaults.baseURL = "http://localhost:8083/";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


axios.interceptors.request.use(
  config =>
    // if(store.state.global.userToken){
    //   // config.Authorization = `token ${store.state.currentUser.userToken}`;
    //   config.headers["access-token"] = store.state.currentUser.userToken;
    // }
     config,
  err => Promise.reject(err));

axios.interceptors.response.use(
  (res) => {
    // 取消lid对应的loading
    if (res.data.code === 401) {
      store.commit('clearUserName');
      router.replace({
        path: '/401',
      });
      return res;
    }
    // cas 跳转登录
    if (res.data.state === 'jump') {
      util.deleCookies();
      window.location.href = res.data.result.redirect;
    }
    // 全局统一出错处理
    if (res.data.state !== 'ok') {
      if (res.data.message) {
        Message.error(res.data.message);
        return res;
      }
    }

    return res.data;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit('clearUser');
          router.replace({
            path: 'signIn',
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
          break;
        case 403:
          Message.error('没有权限');
          break;
        default:
          break;
      }
    }
    return Promise.reject(error.response);
  });
export default axios;
    </code></pre>
    <p class="t22">本地开发设置</p>
  <pre v-highlightjs>
config/index.js
    <code class="bash">
'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8082,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: { //配置后台地址
      "/api": {
        target: "http://vue.sf-express.com:8080/",
        pathRewrite: {
          '^/api': ''
        }
      },
      "/test": {
        target: "..../org/2017-10-31%2012:15:00",
        pathRewrite: {
          '^/test': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
    </code></pre>
  <p class="t22">本地Host配置(C:\Windows\System32\drivers\etc) 添加下列配置</p>
    <pre v-highlightjs><code class="bash">
      127.0.0.1 vue.sf-express.com
    </code></pre>
</article>

</template>

