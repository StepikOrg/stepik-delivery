import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import filters from './filters'

import router from './router'
import store from '@/store'

import './styles.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(filters)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
