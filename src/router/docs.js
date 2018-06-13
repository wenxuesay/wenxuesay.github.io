import util from '../lib/util';

const docsLayOut = () => import('@/views/docs/layout');
const index = () => import('@/views/docs/start');
const style = () => import('@/views/docs/style');
const eslint = () => import('@/views/docs/eslint');
const router = () => import('@/views/docs/router');
const system = () => import('@/views/docs/system');
const cas = () => import('@/views/docs/cas');
const build = () => import('@/views/docs/build');
const routes = [
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
      { path: '/docs/system', component: system, meta: { title: '系统基础设置' } },
      { path: '/docs/cas', component: cas, meta: { title: 'cas联调测试' } },
      { path: '/docs/build', component: build, meta: { title: '构建和部署', requireAuth: ['admin'] } },
    ],
  },
];
const menu = util.routes(routes);
export { menu };
export default routes;
