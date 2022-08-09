import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import 'echarts';
import ECharts from 'vue-echarts'
Vue.component('ECharts', ECharts)

Vue.config.productionTip = false

// 引入 mock 拦截
if (process.env.NODE_ENV === 'development') {
  require('./mock/mock')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
