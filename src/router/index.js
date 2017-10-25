import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
import nanthawad from '@/components/nanthawad'
import Sillawat from '@/components/Sillawat'
import Rittiphon from '@/components/Rittiphon'
import Rachata from '@/components/Rachata'
import kawin from '@/components/kawin'
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
    },
    {
      path: '/Sillawat',
      name: 'Sillawat',
      component: Sillawat
    },
    {
      path: '/rittiphon',
      name: 'Rittiphon',
      component: Rittiphon
    },
    {
      path: '/Rachata',
      name: 'Rachata',
      component: Rachata
    },
    {
      path: '/kawin',
      name: 'kawin',
      component: kawin
    }
  ]
})
