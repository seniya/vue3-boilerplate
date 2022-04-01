import { defineStore } from 'pinia'

import { PostInterface } from '@/service/posts/model/post.interface'
import { httpPosts } from '@/service/posts/posts.api'
import { logger } from '@/utils/instance.logger'

interface postsState {
  posts: PostInterface[];
  isLodingPostsInfos: boolean;
  isDonePostsInfos: boolean;
  errorPostsInfos: string | null;
}

export const userPostStore = defineStore({
  id: 'post-store',
  state: (): postsState => ({
    posts: [],
    isLodingPostsInfos: false,
    isDonePostsInfos: false,
    errorPostsInfos: null
  }),
  getters: {
    getPosts (): PostInterface[] {
      return this.posts
    }
  },
  actions: {
    async actionHttpPosts () {
      this.posts = []
      this.isLodingPostsInfos = true
      this.isDonePostsInfos = false
      this.errorPostsInfos = null
      try {
        const res = await httpPosts()
        if (res.data) {
          if (res.data.result.items) {
            this.posts = res.data.result.items
          }
        }
        logger.debug('module actionHttpPosts : ', this.posts)
        this.isLodingPostsInfos = false
        this.isDonePostsInfos = true
        return res
      } catch (error) {
        this.isLodingPostsInfos = false
        this.isDonePostsInfos = false
        this.errorPostsInfos = '에러가 발생했습니다. #1'
        return Promise.reject(error)
      }
    }
  }
})
