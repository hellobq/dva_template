import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/a',
    component: () => import(/* webpackChunkName: 'a' */ './components/a.vue')
  }, {
    path: '/b',
    component: () => import(/* webpackChunkName: 'b' */ './components/b.vue')
  }]
})
