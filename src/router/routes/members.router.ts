const DefaultLayout = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "members" */ '@/views/members/_container.vue')

const Main = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "members" */ '@/views/members/main.vue')

const Example = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "members" */ '@/views/members/example.vue')

export default {
  path: '/members',
  component: DefaultLayout,
  redirect: '/members/main',

  children: [
    {
      path: '/members/main',
      component: Main,
      meta: {
        title: '내부직원조회'
      }
    },
    {
      path: '/members/example',
      component: Example,
      meta: {
        title: '내부직원조회 예제 페이지'
      }
    }
  ]
}
