<template>
  <transition
    :name="slide"
    @leave="endTransition"
  >
    <div
      v-show="openToast"
      ref="toast"
      class="toast"
      :class="button? 'button':''"
      tabindex="0"
    >
      <p class="toast-message">
        {{ message }}
      </p>
      <slot
        v-if="button"
        name="toast-button"
      >
        <button
          type="button"
          class="toast-button"
          @click="$emit('click')"
        >
          보기
        </button>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: null
    },
    button: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      slide: '',
      openToast: false,
      target: null
    }
  },
  mounted () {
    this.$refs.toast.focus()
  },
  methods: {
    showToast () {
      this.slide = 'slide-up'
      this.openToast = !this.openToast
      setTimeout(() => {
        this.openToast = !this.openToast
      }, 3000)
    },
    endTransition () {
      this.slide = 'slide-down'
    }
  }
}
</script>

<style lang="scss">
</style>
