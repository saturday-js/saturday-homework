import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
import jack from '@/components/jack'
import Rittiphon from '@/components/Rittiphon'
import Rachata from '@/components/Rachata2'
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
      path: '/jack',
      name: 'jack',
      component: jack
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
