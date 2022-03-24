import { HttpResponseCode } from '@/utils/common.constants'

/**
 * @description: Default Response interface
 * @example
 * interface Response extends HttpResponseInterface {
 *    items: [];
 * }
 * TODO: Change to enum after code definition
 */
export interface HttpResponseInterface {
  code: HttpResponseCode;
  msg: string;
}
