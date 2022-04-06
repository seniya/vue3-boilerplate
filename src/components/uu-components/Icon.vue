<template>
  <span
    class="icon"
    :class="[computedDirection, computedVertical]"
    :style="{
      width: computedSize+'rem',
      height: computedSize+'rem'
    }"
  >
    <img
      v-if="png"
      :src="require('@/assets/images/'+ category + '/icons/' + subcategory + '/icon_' + size + '_' + icon + computedColor + computedActive +'.png')"
      alt=""
    >
    <object
      v-else
      :data="require('@/assets/images/'+ category + '/icons/' + subcategory + '/icon_' + size + '_' + icon + computedColor + computedActive +'.svg')"
      type="image/svg+xml"
      :style="{
        width: computedSize+'rem',
        height: computedSize+'rem'
      }"
    >
      <img
        :src="require('@/assets/images/'+ category + '/icons/' + subcategory + '/icon_' + size + '_' + icon + computedColor + computedActive +'.svg')"
        alt=""
      >
    </object>
    <span
      class="icon-click"
      :style="{
        width: computedSize+'rem',
        height: computedSize+'rem'
      }"
    />
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: '24'
    },
    // 대분류
    category: {
      type: String,
      default: 'common'
    },
    // 소분류
    subcategory: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: null
    },
    active: {
      type: String,
      default: null
    },
    direction: {
      type: String,
      default: null
    },
    vertical: {
      type: String,
      default: null
    },
    png: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedSize () {
      return parseInt(this.size) / 10
    },
    computedColor () {
      if (this.color === null || this.color === '') {
        return ''
      } else if (this.color === 'black') {
        return '_bk'
      } else if (this.color === 'gray') {
        return '_gr'
      } else if (this.color === 'white') {
        return '_wh'
      } else {
        return '_' + this.color
      }
    },
    computedActive () {
      if (this.active === 'active') {
        return '_active'
      } else {
        return ''
      }
    },
    computedDirection () {
      if (this.direction === 'left') {
        return 'direction-left'
      } else if (this.direction === 'right') {
        return 'direction-right'
      } else if (this.direction === 'bottom') {
        return 'direction-bottom'
      } else {
        return null
      }
    },
    computedVertical () {
      if (this.vertical === 'top') {
        return 'vertical-top'
      } else if (this.vertical === 'bottom') {
        return 'vertical-bottom'
      } else if (this.vertical === 'middle') {
        return 'vertical-middle'
      } else if (this.vertical === 'textTop') {
        return 'vertical-text-top'
      } else if (this.vertical === 'textBottom') {
        return 'vertical-text-bottom'
      } else if (this.vertical === 'sub') {
        return 'vertical-sub'
      } else if (this.vertical === 'super') {
        return 'vertical-super'
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss">
</style>
