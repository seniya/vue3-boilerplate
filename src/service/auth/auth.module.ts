import { defineStore } from 'pinia'

import { httpAuthenticatePost } from '@/service/auth/auth.api'
import { logger } from '@/utils/instance.logger'
import { StorageNameCode } from '@/utils/common.constants'

interface authState {
  token: string | null;
}

export const userAuthStore = defineStore({
  id: 'auth-store',
  state: (): authState => ({
    token: null
  }),
  getters: {
    getIsLogin (): boolean {
      if (this.token && this.token.length > 1) {
        return true
      }
      return false
    }
  },
  actions: {
    async actionHttpAuthenticate (fdata: any) {
      localStorage.removeItem(StorageNameCode.TOKEN)
      this.token = null
      try {
        const res = await httpAuthenticatePost(fdata)
        if (res.data) {
          if (res.data.token) {
            localStorage.setItem(StorageNameCode.TOKEN, res.data.token)
            this.token = res.data.token
          }
        }
        logger.debug('module actionHttpAuthenticate res.data : ', res.data)
        return res
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})
