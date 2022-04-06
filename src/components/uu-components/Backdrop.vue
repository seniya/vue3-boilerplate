<template>
  <div
    class="modal-backdrop"
    :class="hideBackdrop? 'hide-backdrop':''"
    aria-label="닫기"
    @click="closebtn"
  />
</template>

<script>
export default {
  props: {
    etarget: {
      type: Element,
      default: null
    },
    etargetinner: {
      type: Element,
      default: null
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closebtn () {
      this.$emit('close', 'backdrop')
      if (this.etarget != null) {
        this.etarget.focus()
      }
      if (this.etargetinner != null) {
        this.etargetinner.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
