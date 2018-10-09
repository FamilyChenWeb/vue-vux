import Vue from 'vue'
import Router from 'vue-router'
import Cs from '@/components/HelloFromVux'
import Login from '@/views/login/login'
import Home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
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
      path: '/cs',
      name: 'HelloFromVux',
      component: Cs
    }
  ]
})
