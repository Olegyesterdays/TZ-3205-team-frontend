import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/views/main-page.vue'
import NotFoundPage from '@/views/not-found-page.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
