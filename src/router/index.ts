import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import routerGuide from '@/router/routes/guide.router'
import routerPages from '@/router/routes/pages.router'
import { setupRouterGuard } from '@/router/guard.config'

const guideComponent = () => import('@/views/_guide/listIA.vue')

const routes: Array<RouteRecordRaw> = [
  routerGuide,
  routerPages,
  {
    path: '/',
    redirect: '/pages/main',
    meta: {
      title: 'HomeMain'
    }
  },
  {
    path: '*',
    component: guideComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 라우터 가드(router before/after) setup
setupRouterGuard(router)

export default router
