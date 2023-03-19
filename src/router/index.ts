import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReactiveSample from '../components/ReactiveSample.vue'

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
      path: '/reactuve',
      name: 'reactuve',
      component: ReactiveSample
    },
    {
      path: '/directive',
      name: 'directive',
      component: () => import('../components/DirectiveSample.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../components/EventSample.vue')
    },
    {
      path: '/databind',
      name: 'databind',
      component: () => import('../components/DataBindSample.vue')
    },
    {
      path: '/control',
      name: 'control',
      component: () => import('../components/ControlSample.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../components/WatchSample.vue')
    }
  ]
})

export default router
