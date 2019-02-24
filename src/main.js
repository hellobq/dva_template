import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

module.hot && module.hot.accept(App)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
