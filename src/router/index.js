import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
import Nuttakit from '@/components/Nuttakit'
import kanyaruk from '@/components/kanyaruk'
import sirirat from '@/components/sirirat'
import Chonticha from '@/components/Chonticha'
import warakana from '@/components/warakana'
import Kittitah from '@/components/Kittitah'
import nanthawad from '@/components/nanthawad'
import Fuse from '@/components/Fuse'
import jack from '@/components/jack'
import benjarong from '@/components/benjarong'
import Sillawat from '@/components/Sillawat'
import Rittiphon from '@/components/Rittiphon'
import Sirinun from '@/components/Sirinun'
import Sahapat from '@/components/Sahapat'
import Rachata from '@/components/Rachata2'
import kawin from '@/components/kawin'
import Kittanai from '@/components/Kittanai'
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
      path: '/nuttakit',
      name: 'Nuttakit',
      component: Nuttakit
    },
    {
      path: '/kanyaruk',
      name: 'kanyaruk',
      component: kanyaruk
    },
    {
      path: '/sirirat',
      name: 'sirirat',
      component: sirirat
    },
    {
      path: '/Chonticha',
      name: 'Chonticha',
      component: Chonticha
    },
    {
      path: '/warakana',
      name: 'warakana',
      component: warakana
    },
    {
      path: '/Kittitah',
      name: 'Kittitah',
      component: Kittitah
    },
    {
      path: '/nanthawad',
      name: 'nanthawad',
      component: nanthawad
    },
    {
      path: '/Fuse',
      name: 'Fuse',
      component: Fuse
    },
    {
      path: '/jack',
      name: 'jack',
      component: jack
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
      path: '/Sirinun',
      name: 'Sirinun',
      component: Sirinun
    },
    {
      path: '/benjarong',
      name: 'benjarong',
      component: benjarong
    },
    {
      path: '/Kittanai',
      name: 'Kittanai',
      component: Kittanai
    }
  ]
})
