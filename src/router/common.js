import util from '../lib/util';

const docsLayOut = () => import('@/views/common/layout');
const filter = () => import('@/views/common/filter');
const table = () => import('@/views/common/table');
const base = () => import('@/views/common/base');
const form = () => import('@/views/common/form');
const charts = () => import('@/views/common/charts');
const nav = () => import('@/views/common/nav');
const modal = () => import('@/views/common/modal');
const map = () => import('@/views/common/map');
const sfMap = () => import('@/views/common/sfMap');
// const test = () => import('@/views/common/test');
const routes = [
  {
    path: '/common',
    component: docsLayOut,
    meta: {
      title: '组件',
    },
    children: [
      { path: '/', redirect: '/common/base' },
      { path: '/common/base', component: base, meta: { title: '基础组件' } },
      { path: '/common/nav', component: nav, meta: { title: '布局/导航' } },
      { path: '/common/modal', component: modal, meta: { title: '弹出层' } },
      { path: '/common/form', component: form, meta: { title: '表单' } },
      { path: '/common/filter', component: filter, meta: { title: '筛选' } },
      { path: '/common/table', component: table, meta: { title: '表格' } },
      { path: '/common/charts', component: charts, meta: { title: '图表' } },
      { path: '/common/map', component: map, meta: { title: '地图' } },
      { path: '/common/sfMap', component: sfMap, meta: { title: '顺丰地图' } },
      // { path: '/common/test', component: test, meta: { title: '富文本' } },
    ],
  },
];
export default routes;
const menu = util.routes(routes);
export { menu };
