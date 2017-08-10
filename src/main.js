// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Home from './web/Home'
import { sync } from 'vuex-router-sync'

sync(Home, router)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  Home,
  template: '<App/>',
  components: { App }
})
