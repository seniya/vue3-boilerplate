import { AxiosPromise } from 'axios'
import { axiosInstance } from '@/utils/instance.axios'
import { RequestEnum } from '@/utils/common.constants'
import { MemberResponseInterface } from '@/service/member/model/memberInfo.interface'

enum Api {
  members = '/member',
  alldeptWithId = '/member-alldept',
}

/**
 * @description: httpMembers
 */
export const httpMembers = (): AxiosPromise<MemberResponseInterface> => {
  return axiosInstance({
    method: RequestEnum.GET,
    url: Api.members
  })
}
