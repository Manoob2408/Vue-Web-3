import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Drawer from '@/components/Drawer'
import Card from '@/components/Card'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: HelloWorld
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../App.vue')
  },
  {
    path: '/drawer',
    name: 'Drawer',
    component: Drawer
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  }
]

const router = new VueRouter({
  routes
})

export default router
