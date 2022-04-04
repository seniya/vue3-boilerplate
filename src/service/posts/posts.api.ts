import { AxiosPromise } from 'axios'
import { axiosInstance } from '@/utils/instance.axios'
import { RequestEnum } from '@/utils/common.constants'
import { PostsResponseInterface, PostInfoResponseInterface } from '@/service/posts/model/post.interface'

enum Api {
  posts = '/posts',
  postInfo = '/postInfo',
}

/**
 * @description: httpPosts
 */
export const httpPosts = (): AxiosPromise<PostsResponseInterface> => {
  return axiosInstance({
    method: RequestEnum.GET,
    url: Api.posts
  })
}

/**
 * @description: httpPostInfo
 */
export const httpPostInfo = (): AxiosPromise<PostInfoResponseInterface> => {
  return axiosInstance({
    method: RequestEnum.GET,
    url: Api.postInfo
  })
}
