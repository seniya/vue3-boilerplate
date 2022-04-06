<template>
  <div>
    <p>페이지 2화면</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { logger } from '@/utils/instance.logger'
import { StorageNameCode } from '@/utils/common.constants'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'pageTwo',
  components: { },
  setup () {
    const router = useRouter()
    const route = useRoute()

    onMounted(() => {
      logger.debug('mounted pageTwo')
    })
    onUnmounted(() => {
      logger.debug('unmounted pageTwo')
    });

    (() => {
      const token = localStorage.getItem(StorageNameCode.TOKEN) || null
      if (!(token && token.length > 1)) {
        router.push({
          path: '/members/main',
          query: { ...route.query }
        })
      }
      logger.debug('pageTwo init')
    })()
    return { }
  }
})
</script>
