import { HttpResponseInterface } from '@/utils/common.interface'

/**
 * @description: 게시글 정보
 * PostInterface
 */
export interface PostInterface {
  id: string
  title: string
  content: string
  image: string
  animals: string
  author: string
  createAt: Date
}

/**
 * @description: 게시글 list 정보 API 응답
 * PostsResponseInterface
 */
export interface PostsResponseInterface extends HttpResponseInterface{
  result: {
    items: PostInterface[]
  }
}
