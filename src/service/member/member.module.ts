import { defineStore } from 'pinia'

import { MemberInfoInterface } from '@/service/member/model/memberInfo.interface'
import { httpMembers } from '@/service/member/member.api'
import { logger } from '@/utils/instance.logger'

interface memberState {
  memberInfos: MemberInfoInterface[];
  isLodingMemberInfos: boolean;
  isDoneMemberInfos: boolean;
  errorMemberInfos: string | null;
}

export const memberStore = defineStore({
  id: 'member-store',
  state: (): memberState => ({
    memberInfos: [],
    isLodingMemberInfos: false,
    isDoneMemberInfos: false,
    errorMemberInfos: null
  }),
  getters: {
    getMemberInfos (): MemberInfoInterface[] {
      return this.memberInfos
    }
  },
  actions: {
    async actionHttpMembers () {
      this.memberInfos = []
      this.isLodingMemberInfos = true
      this.isDoneMemberInfos = false
      this.errorMemberInfos = null
      try {
        const res = await httpMembers()
        if (res.data) {
          if (res.data.items) {
            this.memberInfos = res.data.items
          }
        }
        logger.debug('module actionHttpMembers : ', this.memberInfos)
        this.isLodingMemberInfos = false
        this.isDoneMemberInfos = true
        return res
      } catch (error) {
        this.isLodingMemberInfos = false
        this.isDoneMemberInfos = false
        this.errorMemberInfos = '에러가 발생했습니다. #1'
        return Promise.reject(error)
      }
    }
  }
})
