<template>
  <div id="application">
    <mainContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { logger } from '@/utils/instance.logger'
import mainContainer from '@/views/_container.vue'

export default defineComponent({
  name: 'App',
  components: {
    mainContainer
  },
  setup () {
    onMounted(() => {
      logger.debug('onMounted App')
    })
    return { }
  }
})
</script>
