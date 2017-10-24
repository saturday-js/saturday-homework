import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nuttakit from '@/components/Nuttakit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nuttakit',
      name: 'Nuttakit',
      component: Nuttakit
    }
  ]
})
