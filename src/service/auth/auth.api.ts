import { AxiosPromise } from 'axios'
import { axiosInstance } from '@/utils/instance.axios'
import { RequestEnum } from '@/utils/common.constants'

import { AuthenticateResponseInterface } from '@/service/auth/model/authenticate.interface'

enum Api {
  authenticatePost = '/authenticate',
}

/**
 * @description: httpAuthenticatePost
 */
export const httpAuthenticatePost = (
  data: any
): AxiosPromise<AuthenticateResponseInterface> => {
  return axiosInstance({
    method: RequestEnum.POST,
    url: Api.authenticatePost,
    data
  })
}
