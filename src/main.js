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
  beforeCreate () {
    if (!localStorage.getItem('apiIp')) {
      const apiIp = prompt("Введите IP сервера", "http://kosmose.online:8000/");
      if (apiIp != null) {
        localStorage.setItem('apiIp', apiIp)
      } else {
        alert('Это обязательно!')
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
