import Vue from 'vue';
import echarts from 'echarts';

import 'echarts-gl';
import VueHighlightJS from 'vue-highlightjs';
import VueQuillEditor from 'vue-quill-editor';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import '../assets/style.scss';


const chinaJson = require('echarts/map/json/china.json');

echarts.registerMap('china', chinaJson);
Vue.use(VueQuillEditor);
Vue.prototype.$echarts = echarts;
Vue.use(VueHighlightJS);
Vue.component('icon', Icon);

