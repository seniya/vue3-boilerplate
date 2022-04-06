const DefaultLayout = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "members" */ '@/views/members/_container.vue')

const Main = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "members" */ '@/views/members/main.vue')

export default {
  path: '/members',
  component: DefaultLayout,
  redirect: '/members/main',

  children: [
    {
      path: '/members/main',
      component: Main,
      meta: {
        title: '로그인/아웃 페이지'
      }
    }
  ]
}
