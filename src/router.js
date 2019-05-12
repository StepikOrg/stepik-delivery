import Vue from 'vue'
import Router from 'vue-router'

import Start from './views/Start.vue'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Orders from './views/Orders.vue'
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
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title: "Корзина"
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta: {
        title: "История заказов"
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
