import { defineStore } from 'pinia'

import { PostInterface } from '@/service/posts/model/post.interface'
import { httpPostInfo, httpPosts } from '@/service/posts/posts.api'

interface postsState {
  posts: PostInterface[]
  isLodingPosts: boolean
  isDonePosts: boolean
  errorPosts: string | null

  postInfo: PostInterface
  isLodingPostInfo: boolean
  isDonePostInfo: boolean
  errorPostInfo: string | null
}

export const postInfoInit = {
  id: '',
  title: '',
  content: '',
  image: '',
  animals: '',
  author: '',
  createAt: null
}

export const usePostStore = defineStore({
  id: 'post-store',

  state: (): postsState => ({
    posts: [],
    isLodingPosts: false,
    isDonePosts: false,
    errorPosts: null,

    postInfo: postInfoInit,
    isLodingPostInfo: false,
    isDonePostInfo: false,
    errorPostInfo: null
  }),

  getters: {
    getPosts (): PostInterface[] {
      // 데이터 가공
      return this.posts
    },
    getPostInfo (): PostInterface {
      // 데이터 가공
      return this.postInfo
    }
  },
  actions: {
    async actionHttpPosts () {
      this.posts = []
      this.isLodingPosts = true
      this.isDonePosts = false
      this.errorPosts = null
      try {
        const res = await httpPosts()
        if (res.data) {
          if (res.data.result.items) {
            this.posts = res.data.result.items
          }
        }
        this.isLodingPosts = false
        this.isDonePosts = true
        return res.data
      } catch (error) {
        this.isLodingPosts = false
        this.isDonePosts = false
        this.errorPosts = '에러가 발생했습니다. #1'
        return Promise.reject(error)
      }
    },

    async actionHttpPostInfo () {
      this.postInfo = postInfoInit
      this.isLodingPostInfo = true
      this.isDonePostInfo = false
      this.errorPostInfo = null
      try {
        const res = await httpPostInfo()
        if (res.data) {
          if (res.data.result.item) {
            this.postInfo = res.data.result.item
          }
        }
        this.isLodingPostInfo = false
        this.isDonePostInfo = true
        return res.data
      } catch (error) {
        this.isLodingPostInfo = false
        this.isDonePostInfo = false
        this.errorPostInfo = '에러가 발생했습니다. #1'
        return Promise.reject(error)
      }
    }
  }
})
