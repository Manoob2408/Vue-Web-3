import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../App.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router