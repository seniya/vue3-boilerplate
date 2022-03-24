import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import routerHome from '@/router/routes/home.router'
import routerMember from '@/router/routes/member.router'

const routes: Array<RouteRecordRaw> = [
  routerHome,
  routerMember,
  {
    path: '/',
    redirect: '/home/main',
    meta: {
      title: 'HomeMain'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
