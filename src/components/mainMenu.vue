<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="home">
      <router-link to="/">home</router-link>
    </a-menu-item>
    <a-menu-item key="members">
        <router-link to="/members/main">
          로그인
          <span v-if="authStore.getIsLogin" style="color: red;">(로그인됨)</span>
          <span v-else>@</span>
        </router-link>
    </a-menu-item>
    <a-menu-item key="posts">
      <router-link to="/posts">게시판 with Vuex</router-link>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>페이지 모음</template>
      <a-menu-item-group title="Item 1">
        <a-menu-item key="page:1">
          <router-link to="/pages/1">페이지1 - 권한없이 접근</router-link>
        </a-menu-item>
        <a-menu-item key="page:2">
          <router-link to="/pages/2">페이지2 - 권한확인 with page</router-link>
        </a-menu-item>
        <a-menu-item key="page:3">
          <router-link to="/pages/3">페이지3 - 권한확인 with router</router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { useAuthStore } from '@/service/auth/auth.module'
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { logger } from '@/utils/instance.logger'

export default defineComponent({
  name: 'mainMenu',
  components: { },
  setup () {
    const current = ref<string[]>(['home'])
    const authStore = useAuthStore()

    onMounted(() => {
      logger.debug('mounted mainMenu')
    })
    onUnmounted(() => {
      logger.debug('unmounted mainMenu')
    });
    (() => {
      logger.debug('initailize mainMenu')
    })()

    return {
      current,
      authStore
    }
  }
})
</script>
