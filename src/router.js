import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import About from '@/components/about'
import Contact from '@/components/contact'
import Work from '@/components/work'
import Success from '@/components/success'
import Fail from '@/components/fail'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/fail',
      name: 'Fail',
      component: Fail
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
