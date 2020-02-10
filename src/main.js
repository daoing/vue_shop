import Vue from 'vue'
import routers from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router:routers, //如果是router:router  那么 就可以直接写一个  touter
  render: h => h(App),
}).$mount('#app')
