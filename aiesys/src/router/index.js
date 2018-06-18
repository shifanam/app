import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/components/demo'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
