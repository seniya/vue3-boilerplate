import { HttpResponseInterface } from '@/utils/common.interface'

/**
 * @description: 인증 API
 * AuthInterface
 */
export interface AuthInterface {
  userId: string,
  name: string,
  lv: number,
  token: string // 토큰
}

/**
 * @description: 토큰 API 응답
 * AuthResponseInterface
 */
export interface AuthResponseInterface extends HttpResponseInterface {
  result: AuthInterface
}
