import { HttpResponseInterface } from '@/utils/common.interface'

/**
 * @description: 토큰 API
 * AuthenticateInterface
 */
export interface AuthenticateInterface {
  token: string; // 토큰
}

/**
 * @description: 토큰 API 응답
 * AuthenticateResponseInterface
 */
export interface AuthenticateResponseInterface
  extends HttpResponseInterface {
  token: string;
}
