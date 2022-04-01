import { AxiosPromise } from 'axios'
import { axiosInstance } from '@/utils/instance.axios'
import { RequestEnum } from '@/utils/common.constants'
import { PostsResponseInterface } from '@/service/posts/model/post.interface'

enum Api {
  members = '/posts',
}

/**
 * @description: httpPosts
 */
export const httpPosts = (): AxiosPromise<PostsResponseInterface> => {
  return axiosInstance({
    method: RequestEnum.GET,
    url: Api.members
  })
}
