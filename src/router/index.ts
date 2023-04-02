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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      //Compornentについてのメインページ
      path: '/compornent',
      name: 'compornent',
      component: () => import('../A01_CompornentMain.vue')
    },
    {
      //Compornentについてのメインページ
      path: '/compornent2',
      name: 'compornent2',
      component: () => import('../A02_CompornentMain.vue')
    },
    {
      path: '/inject',
      name: 'inject',
      component: () => import('../A03_CompornentMain.vue')
    }
  ]
})

export default router
