import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
import Rittiphon from '@/components/Rittiphon'
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
      path: '/rittiphon',
      name: 'Rittiphon',
      component: Rittiphon
    }
  ]
})
