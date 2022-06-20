import Vue from 'vue'
import App from './App.vue'
// 引入全局外部css文件
import '@/assets/base.css'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;  //安装全局事件总线，$bus就是当前应用的vm，公共课访问的vm组件
  }
}).$mount('#app')
