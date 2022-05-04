const container = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "pages" */ '@/views/pages/_container.vue')
const pageMain = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "pages" */ '@/views/pages/pageMain.vue')
const page1 = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "pages" */ '@/views/pages/page1.vue')
const page2 = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "pages" */ '@/views/pages/page2.vue')
const page3 = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "pages" */ '@/views/pages/page3.vue')
const page4 = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "pages" */ '@/views/pages/page4.vue')
const page5 = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "pages" */ '@/views/pages/page5.vue')

export default {
  path: '/pages',
  component: container,
  redirect: '/pages/1',

  children: [
    {
      path: '/pages/main',
      component: pageMain,
      meta: {
        title: 'pageMain'
      }
    },
    {
      path: '/pages/1',
      component: page1,
      meta: {
        title: 'page1'
      }
    },
    {
      path: '/pages/2',
      component: page2,
      meta: {
        title: 'page2'
      }
    },
    {
      path: '/pages/3',
      component: page3,
      meta: {
        title: 'page3'
      }
    },
    {
      path: '/pages/4',
      component: page4,
      meta: {
        title: 'page4'
      }
    },
    {
      path: '/pages/5',
      component: page5,
      meta: {
        title: 'page5'
      }
    }
  ]
}
