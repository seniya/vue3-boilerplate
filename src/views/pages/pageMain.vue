<template>
  <div>
    <p>메인 화면</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { POSITION, useToast } from 'vue-toastification'

export default defineComponent({
  name: 'homeMain',
  components: { },
  setup () {
    const toast = useToast()
    toast("I'm a toast!")

    // or with options
    toast('My toast content', {
      position: POSITION.BOTTOM_CENTER,
      timeout: 2000,
      toastClassName: 'my-custom-toast-class',
      bodyClassName: ['custom-class-1', 'custom-class-2']
    })

    return {
      toast
    }
  }
})
</script>
