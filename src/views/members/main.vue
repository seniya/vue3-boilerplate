<template>
  <div>
    <h3>
      로그인 페이지
    </h3>

    <div>
      <p>authStore.authInfo : {{authStore.authInfo}}</p>
      <p>authStore.isLodingAuthInfo: {{authStore.isLodingAuthInfo}}</p>
      <p>authStore.isDoneAuthInfo : {{authStore.isDoneAuthInfo}}</p>
      <p>authStore.errorAuthInfo : {{authStore.errorAuthInfo}}</p>

      <div v-if="authStore.getIsLogin && authStore.getToken !== ''">
        <p>로그인 되었습니다.</p>
        <p>userId : {{authStore.authInfo.userId}}</p>
        <p>name : {{authStore.authInfo.name}}</p>
        <p>lv : {{authStore.authInfo.lv}}</p>
        <div>
          <input type="button" value="LOGOUT" @click="onClickLogout">
        </div>
      </div>

      <div v-else>
        <form name="normal-form" @submit.prevent="onClickLogin">
          <p>
            <label for="userId">userId</label>
            <input type="text" name="userId" id="userId" >
          </p>
          <p>
            <label for="password">password</label>
            <input type="password" name="password" id="password" >
          </p>
          <p>
            <input type="submit" value="LOGIN" :disabled="authStore.isLodingAuthInfo">
          </p>
        </form>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { authInfoInit, useAuthStore } from '@/service/auth/auth.module'
import { AuthInterface } from '@/service/auth/model/auth.interface'
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { logger } from '@/utils/instance.logger'

interface stateType {
  authInfo: AuthInterface;
}

export default defineComponent({
  name: 'memberMain',
  components: { },
  setup () {
    /* request, prepare, on, cb, action */
    const router = useRouter()
    const route = useRoute()

    const authStore = useAuthStore()

    const state: stateType = reactive({ authInfo: authInfoInit })

    async function requestApiHttpAuth () {
      await authStore.actionHttpAuth({})
    }

    onMounted(() => {
      logger.debug('mounted memberMain')
    })
    onUnmounted(() => {
      logger.debug('unmounted memberMain')
    })
    function onClickLogin () {
      requestApiHttpAuth()
    }
    function onClickLogout () {
      logger.debug('log out!!')
      authStore.actionLogout()
    }

    return {
      authStore,
      state,
      onClickLogin,
      onClickLogout
    }
  }
})
</script>
