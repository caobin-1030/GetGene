import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Echarts from 'echarts'
import sta from '../public/js/index.js'
Vue.prototype.echarts = Echarts
Vue.use(Echarts)
var echarts = require('echarts');
//然后再修改原型链
Vue.prototype.$axios = axios
window.Vue = Vue
Vue.prototype.axios=axios
import VueI18n from 'vue-i18n'
const i18n = new VueI18n({
  locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./VueI18n/language-zh'),  //
    'en': require('./VueI18n/language-en')
  },
  silentTranslationWarn: true,
})
Vue.use(VueI18n) // 通过插件的形式挂载，通过全局方法 Vue.use() 使用插件
Vue.config.productionTip = false
Vue.use(ElementUI, { zIndex: 9999 });
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
