import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './pages/about/About.vue')
  }, {
    path: '*',
    name: 'nofind',
    component: () => import(/* webpackChunkName: "no-find" */ './pages/404/NoFind.vue')
  }]
})
