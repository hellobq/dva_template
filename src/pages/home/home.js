import Vue from 'vue'
import Home from './Home.vue'

module.hot && module.hot.accept(Home)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(Home)
})
