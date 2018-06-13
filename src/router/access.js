const accessLayOut = () => import('@/views/access/layout');
const start = () => import('@/views/access/start');
const koaInfo = () => import('@/views/access/koa/info');
const koaStruct = () => import('@/views/access/koa/struct');
const koaApp = () => import('@/views/access/koa/app');
const koaCas = () => import('@/views/access/koa/cas');
const koaOrm = () => import('@/views/access/koa/orm');
const koaConfig = () => import('@/views/access/koa/config');
const koaES = () => import('@/views/access/koa/es');
const koaService = () => import('@/views/access/koa/service');
const layout = () => import('@/views/layout');

const springBootInfo = () => import('@/views/access/springboot/info.vue');
const springMybatis = () => import('@/views/access/springboot/mybatis');
const springTools = () => import('@/views/access/springboot/tools');
const springStruct = () => import('@/views/access/springboot/struct');
// const springApp = () => import('@/views/access/springboot/app');
const springCas = () => import('@/views/access/springboot/cas');

const springConfig = () => import('@/views/access/springboot/config');
const springService = () => import('@/views/access/springboot/service');
const router = [
  {
    path: '/access',
    component: accessLayOut,
    meta: {
      title: '组件',
    },
    children: [
      { path: '/', redirect: '/access/start' },
      { path: '/access/start', component: start, meta: { title: '前言' } },
      {
        path: '/access/koa',
        component: layout,
        meta: { title: 'Koa', show: false },
        children: [
          { path: '/', redirect: '/access/koa/info' },
          { path: '/access/koa/info', component: koaInfo, meta: { title: 'koa简介' } },
          { path: '/access/koa/struct', component: koaStruct, meta: { title: '项目结构' } },
          { path: '/access/koa/config', component: koaConfig, meta: { title: '环境配置' } },
          { path: '/access/koa/app', component: koaApp, meta: { title: 'App' } },
          { path: '/access/koa/Cas', component: koaCas, meta: { title: 'Cas' } },
          { path: '/access/koa/orm', component: koaOrm, meta: { title: 'Sequelize' } },
          { path: '/access/koa/es', component: koaES, meta: { title: 'ElasticSearch' } },
          { path: '/access/koa/service', component: koaService, meta: { title: '部署' } },
        ],
      },
      {
        path: '/access/springboot',
        component: layout,
        meta: { title: 'springboot', show: false },
        children: [
          { path: '/', redirect: '/access/springboot/info' },
          { path: '/access/springboot/info', component: springBootInfo, meta: { title: 'springboot简介' } },
          { path: '/access/springboot/mybatis', component: springMybatis, meta: { title: 'mybatis' } },
          { path: '/access/springboot/tools', component: springTools, meta: { title: 'tools' } },
          { path: '/access/springboot/struct', component: springStruct, meta: { title: '项目结构' } },
          { path: '/access/springboot/spring-security', component: springCas, meta: { title: 'spring-security' } },
          { path: '/access/springboot/config', component: springConfig, meta: { title: '环境配置' } },
          { path: '/access/springboot/service', component: springService, meta: { title: '部署' } },
        ],
      },
    ],
  },
];
export default router;
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
