import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {app} from '../src/firebase/config'


Vue.config.productionTip = false
app

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
