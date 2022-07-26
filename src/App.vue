<template>
  <div id="app">
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

<style>
/* When setting CSS, remember that priority increases with specificity, so don't forget to select the existing classes as well */
.Vue-Toastification__toast--default.my-custom-toast-class {
    background-color: black;
}
/* Applied to the toast body when using regular strings as content */
.Vue-Toastification__toast-body.custom-class-1 {
  /* font-size: 30px; */
}
/* Applied to a wrapper div when using a custom component as content */
.Vue-Toastification__toast-component-body.custom-class-2 {
  /* width: 100%; */
}
</style>
