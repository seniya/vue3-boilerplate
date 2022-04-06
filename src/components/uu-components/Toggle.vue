<template>
  <label
    class="toggle-switch"
    :class="isStatus"
  >
    <input
      v-model="value"
      type="checkbox"
      :disabled="isDisabled"
      @click="sendStatus"
    >
    <span class="slider" />
  </label>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    checked: Boolean
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {
    isStatus () {
      return this.disabled === true ? 'no-active' : ''
    },
    isDisabled () {
      return this.disabled
    }
  },
  // watch: {
  //   value: function () {
  //     this.$emit('status', this.value)
  //   }
  // },
  mounted () {
    this.value = this.checked
  },
  methods: {
    sendStatus () {
      this.$emit('status', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
