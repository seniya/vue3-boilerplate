import { AxiosPromise } from 'axios'
import { axiosInstance } from '@/utils/instance.axios'
import { RequestEnum } from '@/utils/common.constants'

import { AuthResponseInterface } from '@/service/auth/model/auth.interface'

enum Api {
  auth = '/auth',
}

/**
 * @description: httpAuth
 */
export const httpAuth = (
  data: any
): AxiosPromise<AuthResponseInterface> => {
  return axiosInstance({
    method: RequestEnum.GET,
    url: Api.auth,
    data
  })
}
