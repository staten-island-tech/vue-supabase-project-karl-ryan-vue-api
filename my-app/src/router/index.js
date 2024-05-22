import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '@/stores/loginStore'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: HomeView
    },
    {
      path: '/loggedout',
      name: 'loggedout',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../views/BrowseView.vue'),
      beforeEnter: (to, from, next) => {
        if(userStore.isUserLoggedIn != true) {
            next('/');
        } else {
            next();
        }
    }
    },
    {
      path: '/data/:id',
      name: 'data',
      component: () => import('../views/BrowseView.vue'),
      beforeEnter: (to, from, next) => {
        if(userStore.isUserLoggedIn != true) {
            next('/');
        } else {
            next();
        }
      }
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: () => import('../views/CartView.vue')
    },
  
  ]
})

export default router
