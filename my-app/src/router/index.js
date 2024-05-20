import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse/',
      name: 'browse',
      component: () => import('../views/BrowseView.vue')
    },
    {
      path: '/data/:id',
      name: 'data',
      component: () => import('../views/BrowseView.vue')
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: () => import('../views/CartView.vue')
    },
  
  ]
})

export default router
