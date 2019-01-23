import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/css/base.css'
import './assets/js/font'

import axios from './plugins/axios'
Vue.use(axios)

import filters from './filters'
Object.keys(filters).forEach(items=>Vue.filter(items,filters[items]))

import loading from './components/loading'
Vue.use(loading)

import 'animate.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
