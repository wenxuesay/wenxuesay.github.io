import axios from 'axios';
// import { Message } from 'element-ui';
import router from './router';
import store from './store';
import util from './lib/util';


axios.defaults.timeout = 60000;
// http request 拦截器
// $axios.defaults.baseURL = "http://localhost:8083/";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


axios.interceptors.request.use(
  config => config,
  // if(store.state.global.userToken){
  //   // config.Authorization = `token ${store.state.currentUser.userToken}`;
  //   config.headers["access-token"] = store.state.currentUser.userToken;
  // }

  err => Promise.reject(err),
);

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
    if (res.data.succ === 'jump') {
      util.deleCookies();
      window.location.href = res.data.result.redirect;
    }
    // 全局统一出错处理
    if (res.data.succ !== 'ok') {
      if (res.data.message) {
        // Message.error(res.data.message);
        return res;
      }
    }

    return res.data;
  },
  (error) => {
    // Vue.$Progress.fail();
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
          // Message.error('没有权限');
          break;
        default:
          break;
      }
    }
    return Promise.reject(error.response);
  },
);
export default axios;
