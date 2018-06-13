import Vue from 'vue';
import Vuex from 'vuex';
import el from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import axios from './http';
import App from './App';
import './lib/index';
import swal from './lib/alert';
import bdp from './bdp';


Vue.use(el);
Vue.use(bdp);
Vue.config.productionTip = false;
Vue.prototype.$swal = swal;
Vue.prototype.$axios = axios;

Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
