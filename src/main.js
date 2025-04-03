import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import { createPinia } from 'pinia';

// 添加路由懒加载
const RelationChart = () => import('./views/RelationChart.vue');
const EditorView = () => import('./views/EditorView.vue');

// 添加全局错误处理
app.config.errorHandler = (err) => {
  console.error('Global error:', err);
  // 发送错误日志到后端
};

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
