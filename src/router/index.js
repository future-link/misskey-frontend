import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Mention from '@/pages/Mention'
import Status from '@/pages/Status'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/i/mentions',
      name: 'mention',
      component: Mention
    },
    {
      path: '/@:screenname/:statusid',
      name: 'status',
      component: Status
    }
  ]
})
