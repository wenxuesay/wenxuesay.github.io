<template>
<article class="markdown">
  <p class="t22">路由/权限</p>
  <p class="t18"><a href="https://router.vuejs.org/zh-cn/">vue-router</a></p>
  <p class="t16">前后台分离项目,路由是一个关键的骨架。我们提供一套路由编写规范，帮助你快速搭建系统。</p>
  <p class="t18">模块结构</p>
  <img class="mr" src="/static/router-c.png">
  <p class="t18">路由权限控制</p>
  <pre v-highlightjs>
路由基本配置,配置子路由,401/404页面，通过vuex获取用户权限,控制访问。
    <code class="javascript">
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import docs from './docs';
import main from './main';
import E401 from '../components/401';
import E404 from '../components/404';
Vue.use(VueRouter);
const routeIndex = [{
  path: '/401',
  component: E401,
}, {
  path: '*',
  component: E404,
},
];
const routes = [].concat(main, docs, routeIndex);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});
router.beforeEach((to, from, next) => {
  // 中止之前加入的请求
  // 权限控制
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.global.auth) {
      const flag = to.meta.requireAuth.every(v => store.state.global.auth.includes(v));
      if (flag) {
        next();
      } else {
        next({
          path: '401',
          query: { redirect: to.fullPath },
        });
      }
      next();
    } else {
      next({
        path: '401',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});
router.afterEach((route) => {
  let documentTitle = 'bdp前端';
  route.matched.forEach((path) => {
    if (path.meta.title) {
      documentTitle += ` - ${path.meta.title}`;
    }
  });
  document.title = documentTitle;
});
export default router;
    </code></pre>
  <pre v-highlightjs>
子路由基础模板,包括权限控制,自定义字段(meta),requireAuth控制访问权限;
    <code class="javascript">
const docsLayOut = () => import('@/views/docs/layout');
const index = () => import('@/views/docs/start');
const style = () => import('@/views/docs/style');
const eslint = () => import('@/views/docs/eslint');
const router = [
  {
    path: '/docs',
    component: docsLayOut,
    meta: {
      title: '文档',
    },
    children: [
      { path: '/', redirect: '/docs/start' },
      { path: '/docs/start', component: index, meta: { title: '起步' } },
      { path: '/docs/style', component: style, meta: { title: '样式与布局' } },
      { path: '/docs/eslint', component: eslint, meta: { title: '代码规范' } },
      { path: '/docs/router', component: router, meta: { title: '路由和菜单' } },
    ],
  },
];

export default router;
//用于menu输出
const menu = router[0].children.map((v) => {
  const obj = Object.assign({}, v);
  if (v.children) {
    obj.children = v.children.map((vv) => {
      const child = Object.assign({}, vv);
      delete child.component;
      return child;
    });
  }
  delete obj.component;
  return obj;
});
export { menu };
    </code></pre>
  <p class="t22">菜单/导航栏/面包屑</p>
  <div>
    <p class="t18">提供基础思维，根据路由渲染对应的菜单/导航栏/面包屑</p>
    <bdp-row>
      <bdp-col :span="10">
        <img src="/static/router.png">
      </bdp-col>
      <bdp-col :span="14">
        <pre v-highlightjs style="margin:0"><code class="vue">
.left-menu
  LeftMenu(:menus="menus")

import { menu } from '../../router/common';
export default {
  components: {
    LeftMenu,
  },
  data() {
    return {
      menus: menu,
    };
  },
};
        </code></pre>
      </bdp-col>
    </bdp-row>
  </div>
</article>
</template>
