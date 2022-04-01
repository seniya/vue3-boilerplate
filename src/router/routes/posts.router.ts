const container = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/_container.vue')
const postsList = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/postsList.vue')
const postsCreate = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/postsCreate.vue')

export default {
  path: '/posts',
  component: container,
  redirect: '/posts/list',

  children: [
    {
      path: '/posts/list',
      component: postsList,
      meta: {
        title: 'postsList'
      }
    },
    {
      path: '/posts/create',
      component: postsCreate,
      meta: {
        title: 'postsCreate'
      }
    }
  ]
}
