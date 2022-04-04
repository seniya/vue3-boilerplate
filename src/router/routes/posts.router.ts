const container = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/_container.vue')
const postsList = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/postsList.vue')
const postsRead = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/postsRead.vue')
const postsCreate = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/postsCreate.vue')

export default {
  path: '/posts',
  component: container,
  redirect: '/posts-list',

  children: [
    {
      path: '/posts-list',
      component: postsList,
      meta: {
        title: 'postsList'
      }
    },
    {
      name: 'postsRead',
      component: postsRead,
      path: '/posts-read/:id',
      meta: {
        title: 'postsRead'
      }
    },
    {
      name: 'postsCreate',
      path: '/posts-create',
      component: postsCreate,
      meta: {
        title: 'postsCreate'
      }
    }
  ]
}
