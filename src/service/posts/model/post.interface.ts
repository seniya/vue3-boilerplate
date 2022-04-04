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
  createAt: Date | null
}

/**
 * @description: 게시글 list API 응답
 * PostsResponseInterface
 */
export interface PostsResponseInterface extends HttpResponseInterface{
  result: {
    items: PostInterface[]
  }
}

/**
 * @description: 게시글 detail API 응답
 * PostInfoResponseInterface
 */
export interface PostInfoResponseInterface extends HttpResponseInterface{
  result: {
    item: PostInterface
  }
}
