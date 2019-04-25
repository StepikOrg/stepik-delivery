import Vue from 'vue'
import Router from 'vue-router'

import Start from './views/Start.vue'
import Home from './views/Home.vue'

import Sleep from './views/Sleep.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/home',
      name: 'home',
      component: Home
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: Sleep
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
