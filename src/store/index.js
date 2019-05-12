import Vue from 'vue'
import Vuex from 'vuex'

import order from './modules/order'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    order,
    profile
  },
  strict: true
})
