import Vue from 'vue'
import About from './About.vue'

module.hot && module.hot.accept(About)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(About)
})
