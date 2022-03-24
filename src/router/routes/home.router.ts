const DefaultLayout = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "home" */ '@/views/home/_container.vue')

const HomeMain = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "home" */ '@/views/home/main.vue')

export default {
  path: '/home',
  component: DefaultLayout,
  redirect: '/home/main',

  children: [
    {
      path: '/home/main',
      component: HomeMain,
      meta: {
        title: 'HomeMain'
      }
    }
  ]
}
