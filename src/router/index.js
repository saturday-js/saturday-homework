import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
import benjarong from '@/components/benjarong'
import Sillawat from '@/components/Sillawat'
import Rittiphon from '@/components/Rittiphon'
import Sahapat from '@/components/Sahapat'
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
      path: '/Sahapat',
      name: 'Sahapat',
      component: Sahapat
    },
    {
      path: '/kawin',
      name: 'kawin',
      component: kawin
    },
    {
      path: '/benjarong',
      name: 'benjarong',
      component: benjarong
    }
  ]
})
