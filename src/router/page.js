import util from '../lib/util';

const pageLayOut = () => import('@/views/page/layout');
const base = () => import('@/views/page/base');
const routes = [
  {
    path: '/page',
    component: pageLayOut,
    meta: {
      title: '页面',
    },
    children: [
      { path: '/', redirect: '/page/base' },
      { path: '/page/base', component: base, meta: { title: '第一页' } },
    ],
  },
];
export default routes;
const menu = util.routes(routes);
export { menu };
