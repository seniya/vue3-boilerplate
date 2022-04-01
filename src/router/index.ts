import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import routerPages from '@/router/routes/pages.router'
import routerMembers from '@/router/routes/members.router'
import routerPosts from '@/router/routes/posts.router'

const routes: Array<RouteRecordRaw> = [
  routerPages,
  routerMembers,
  routerPosts,
  {
    path: '/',
    redirect: '/pages/main',
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
