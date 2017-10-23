import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
<<<<<<< HEAD
import Rittiphon from '@/components/Rittiphon'
=======
import Rachata from '@/components/Rachata'

>>>>>>> bf281b1d3166dacb7e27d9458dc79c0c6442a363
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
      path: '/rittiphon',
      name: 'Rittiphon',
      component: Rittiphon
=======
      path: '/Rachata',
      name: 'Rachata',
      component: Rachata
>>>>>>> bf281b1d3166dacb7e27d9458dc79c0c6442a363
    }
  ]
})
