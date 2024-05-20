import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseCata from '@/components/BrowseCata.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse', //tank gun ammo price and information 
      name: 'browse',
      component: BrowseCata
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: () => import('../views/AboutView.vue')
    },
  
  ]
})

export default router
