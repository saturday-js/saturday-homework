import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
<<<<<<< HEAD
import sirirat from '@/components/sirirat'

=======
import Sillawat from '@/components/Sillawat'
import Rittiphon from '@/components/Rittiphon'
import Rachata from '@/components/Rachata'
import kawin from '@/components/kawin'
>>>>>>> 7447e89f4582290c04cae6d6ffc21adef71a303f
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
<<<<<<< HEAD
      path: '/sirirat',
      name: 'sirirat',
      component: sirirat
=======
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
>>>>>>> 7447e89f4582290c04cae6d6ffc21adef71a303f
    }
  ]
})
