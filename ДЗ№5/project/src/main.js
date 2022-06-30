import Vue from 'vue'
import store from '../store/index.js'
import App from './App.vue'
import router from '../router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
