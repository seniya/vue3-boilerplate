<template>
  <div>
    메뉴영역
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/service/auth/auth.module'
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { logger } from '@/utils/instance.logger'

export default defineComponent({
  name: 'mainMenu',
  components: { },
  setup () {
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
      authStore
    }
  }
})
</script>
