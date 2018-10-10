import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Home from '@/views/home/home'
import Registered from '@/views/registered/registered'
import Announcement from '@/views/home/announcement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    },
    {
      path: '/',
      redirect: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home',
          component: Home
        }
      ]
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: Announcement
    },
  ]
})
