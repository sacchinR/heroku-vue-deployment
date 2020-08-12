import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('@/views/Form.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('@/views/Form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
