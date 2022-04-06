<template>
  <div class="bubble-area">
    <div
      :class="layout? 'bubble2' : 'bubble'"
      :style="{left: left, right: right, top: top, bottom: bottom, width: width}"
    >
      <template v-if="layout">
        <div class="bubble-content">
          <slot />
          <span
            class="bubble-tale"
            :style="{left: taleLeft,right: taleRight,top: taleTop, bottom: taleBottom}"
          />
        </div>
      </template>
      <template v-else>
        <div class="bubble-content">
          <div class="bubble-icon">
            <span class="icon">
              <slot name="bubble-icon">
                icon
              </slot>
            </span>
          </div>
          <div class="bubble-text">
            <slot name="bubble-content">
              sksksk
            </slot>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: ''
    },
    bottom: {
      type: String,
      default: ''
    },
    layout: {
      type: Boolean,
      default: false
    },
    taleLeft: {
      type: String,
      default: ''
    },
    taleRight: {
      type: String,
      default: ''
    },
    taleTop: {
      type: String,
      default: ''
    },
    taleBottom: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
</style>
