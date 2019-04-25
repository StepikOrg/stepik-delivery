import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import router from './router'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
import './styles.scss'
new Vue({
  router,
  store,
  beforeCreate () {
    if (!localStorage.getItem('apiIp')) {
      const apiIp = prompt("Введите IP сервера", "/");
      if (apiIp != null) {
        localStorage.setItem('apiIp', apiIp)
      } else {
        alert('Это обязательно!')
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
