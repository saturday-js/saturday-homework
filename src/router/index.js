import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
import nanthawad from '@/components/nanthawad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nati',
      name: 'Nati',
      component: Nati
    },
    {
      path: '/nanthawad',
      name: 'nanthawad',
      component: nanthawad
    }
  ]
})
