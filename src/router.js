import Vue from 'vue'
import Router from 'vue-router'

import Start from './views/Start.vue'
import Home from './views/Home.vue'
import Order from './views/Order.vue'
import Profile from './views/Profile.vue'

import Sleep from './views/Sleep.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
      meta: {
        navbar: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        title: "Корзина"
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        title: "Профиль"
      }
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: Sleep,
      meta: {
        navbar: false
      }
    }
  ]
})
