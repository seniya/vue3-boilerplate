<template>
  <span
    class="tooltip-wrap"
    :class="[{'absolute':absolute},{'fixed':fixed}, {'left-center':leftCenter}]"
    :style="{top : absoluteTop+'px', bottom: absoluteBottom+'px', left:absoluteLeft+'px', right:absoluteRight+'px'}"
  >
    <button
      v-if="type === 'type1'"
      type="button"
      class="btn-tooltip"
      aria-label="툴팁 열림"
      :aria-describedby="randomString + 'Tooltip'"
      @click="tooltipShow = true"
    >
      <slot
        name="tooltip-button"
      >
        <uu-icon
          icon="tip"
          size="24"
        />
      </slot>
    </button>
    <span
      v-if="long"
      v-show="tooltipShow"
      :id="randomString + 'Tooltip'"
      class="tooltip2"
      :class="[type,{'top':top},{'bottom':bottom},{'left':left},{'right':right},{'center':center},{'small':small},{'hide-close':hideClose},{'in-btn':inBtn},{'light':light},{'no-fade':noFade},{'long':long}]"
      :style="{width:width+'px',top : tailTop, bottom: tailBottom, left: tailLeft, right : tailRight}"
      role="tooltip"
    >
      <span
        class="tooltip-inner"
      >
        <span
          v-if="hasTitle"
          class="tooltip-title"
        >
          <slot name="tooltip-title" />
        </span>
        <span class="tooltip-content">
          <slot name="tooltip-content" />
        </span>
        <span
          v-if="hideClose || inBtn || type==='type3' || type==='type4' || type==='type5' ? false : true"
          class="tooltip-close"
        >
          <button
            class="btn-close"
            @click="tooltipShow = false"
          >
            <uu-icon
              v-if="type === 'type1' || light"
              icon="close"
              size="16"
            >
              <span class="sr-only">닫기</span>
            </uu-icon>
            <uu-icon
              v-else
              icon="close"
              size="16"
              color="wh"
            >
              <span class="sr-only">닫기</span>
            </uu-icon>
          </button>
        </span>
      </span>
    </span>
    <!--  -->
    <span
      v-else
      v-show="tooltipShow"
      :id="randomString + 'Tooltip'"
      class="tooltip2"
      :class="[type,{'top':top},{'bottom':bottom},{'left':left},{'right':right},{'center':center},{'small':small},{'hide-close':hideClose},{'in-btn':inBtn},{'light':light},{'no-fade':noFade}]"
      :style="{position: tipPosition, width:width+'px',top : tailTop, bottom: tailBottom, left: tailLeft, right : tailRight}"
      role="tooltip"
    >
      <span
        v-if="hasTitle"
        class="tooltip-title"
      >
        <slot name="tooltip-title" />
      </span>
      <span class="tooltip-content">
        <slot name="tooltip-content" />
      </span>
      <span
        v-if="hideClose || inBtn || type==='type3' || type==='type4' || type==='type5' ? false : true"
        class="tooltip-close"
      >
        <button
          class="btn-close"
          @click="tooltipShow = false"
        >
          <uu-icon
            v-if="type === 'type1' || light"
            icon="close"
            size="16"
          >
            <span class="sr-only">닫기</span>
          </uu-icon>
          <uu-icon
            v-else
            icon="close"
            size="16"
            color="wh"
          >
            <span class="sr-only">닫기</span>
          </uu-icon>
        </button>
      </span>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'type1'
    },
    width: {
      type: String,
      default: ''
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    hasTitle: {
      type: Boolean,
      default: false
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    inBtn: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    },
    absoluteTop: {
      type: String,
      default: ''
    },
    absoluteBottom: {
      type: String,
      default: ''
    },
    absoluteLeft: {
      type: String,
      default: ''
    },
    absoluteRight: {
      type: String,
      default: ''
    },
    noFade: {
      type: Boolean,
      default: false
    },
    leftCenter: {
      type: Boolean,
      default: false
    },
    tipPosition: {
      type: String,
      default: ''
    },
    tipLeft: {
      type: String,
      default: ''
    },
    tipRight: {
      type: String,
      default: ''
    },
    tipTop: {
      type: String,
      default: ''
    },
    tipBottom: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tooltipShow: true,
      tailTop: 'auto',
      tailBottom: 'auto',
      tailLeft: 'auto',
      tailRight: 'auto'
    }
  },
  computed: {
    // 랜덤아이디생성
    randomString () {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
      var stringLength = 15
      var randomstring = ''
      for (var i = 0; i < stringLength; i++) {
        var rnum = Math.floor(Math.random() * chars.length)
        randomstring += chars.substring(rnum, rnum + 1)
      }
      return randomstring
    }
  },
  mounted () {
    if (this.top) {
      this.tailTop = 'calc(100% + 8px)'
    }
    if (this.bottom) {
      this.tailBottom = 'calc(100% + 8px)'
    }
    if (this.left || this.center) {
      this.tailLeft = '50%'
    }
    if (this.right) {
      this.tailRight = '50%'
    }
    if (this.type === 'type1') {
      this.tooltipShow = false
    }
    if (this.type === 'type2' && this.small) {
      var tootipBtn = document.querySelector('.btn')
      if (!tootipBtn.classList.contains('btn-underline') && !this.hideClose) {
        var tooltip2 = document.querySelectorAll('.tooltip2')
        for (var i = 0; i < tooltip2.length; i++) {
          tooltip2[i].classList.add('hide-close')
        }
      }
    }
    if (this.tipPosition === 'fixed') {
      if (this.tipTop) {
        this.tailTop = this.tipTop + 'px'
      }
      if (this.tipBottom) {
        this.tailBottom = this.tipBottom + 'px'
      }
      if (this.tipRight) {
        this.tailRight = this.tipRight + 'px'
      }
      if (this.tipLeft) {
        this.tailLeft = this.tipLeft + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  // .fade-enter-active {
  //   transition: opacity 2s;
  // }
  // .fade-leave-to {
  //   opacity: 0;
  // }
</style>
