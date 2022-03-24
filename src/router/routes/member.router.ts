const DefaultLayout = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "member" */ '@/views/member/_container.vue')

const Main = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "member" */ '@/views/member/main.vue')

const Example = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "member" */ '@/views/member/example.vue')

export default {
  path: '/member',
  component: DefaultLayout,
  redirect: '/member/main',

  children: [
    {
      path: '/member/main',
      component: Main,
      meta: {
        title: '내부직원조회'
      }
    },
    {
      path: '/member/example',
      component: Example,
      meta: {
        title: '내부직원조회 예제 페이지'
      }
    }
  ]
}
