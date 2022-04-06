<template>
  <div
    ref="tabWrap"
    class="tab-wrap"
    :class="[type, activeBar? 'splide-active-bar':'', tabName]"
  >
    <!-- tab menu -->
    <splide
      ref="tabmenu"
      :options="menu"
      class="tab-menu"
      :class="[menuCenter? 'tab-menu-center':'']"
      @splide:moved="activeBarEvent"
      @splide:drag="dragStart"
      @splide:dragged="dragEnd"
    >
      <splide-slide
        v-for="(tab, index) in items"
        :key="index"
        role="presentation"
        :class="names[index]"
      >
        <span
          v-if="typeof(tab) == 'string'"
          class="tab-btn"
        >
          {{ tab }}
        </span>
        <span
          v-if="typeof(tab) == 'object'"
          class="tab-btn"
        >
          <span class="menu-name">
            {{ tab.name }}
          </span>
          <span class="menu-count">
            {{ tab.count }}
          </span>
        </span>
      </splide-slide>
    </splide>

    <!-- tab content -->
    <splide
      ref="tabcon"
      :options="options"
      class="tab-con"
    >
      <splide-slide
        v-for="(tab, index) in items"
        :key="index"
      >
        <div
          class="tab-panel"
          role="tabpanel"
        >
          <slot
            :name="'slide'+(index+1)"
          />
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
// https://splidejs.com/integration-vue-splide/
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
export default {
  components: {
    Splide,
    SplideSlide
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    names: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: null
    },
    start: {
      type: [Number, String],
      default: 1
    },
    menuDrag: {
      type: Boolean,
      default: true
    },
    contDrag: {
      type: Boolean,
      default: true
    },
    menuCenter: {
      type: Boolean,
      default: false
    },
    option: {
      type: String,
      default: 'fade'
    },
    paddingLeft: {
      type: String,
      default: '0'
    },
    paddingRight: {
      type: String,
      default: '0'
    },
    tabName: {
      type: String,
      default: ''
    },
    activeBar: {
      type: Boolean,
      default: false
    },
    focus: {
      type: String,
      default: '0'
    },
    updateOnMove: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // tab menu
      menu: {
        type: 'splide',
        speed: 100,
        autoWidth: true,
        isNavigation: true,
        pagination: false,
        arrows: false,
        keyboard: false,
        start: this.start - 1,
        focus: this.focus,
        easing: 'linear',
        drag: this.menuDrag,
        updateOnMove: this.updateOnMove,
        padding: {
          left: this.paddingLeft,
          right: this.paddingRight
        }
      },
      // tab content
      options: {
        type: 'fade',
        pagination: false,
        arrows: false,
        keyboard: false,
        start: this.start - 1,
        drag: this.contDrag
      },
      activeSetTimeout: null,
      tabmenu: null
    }
  },
  mounted () {
    // Set the sync target.
    this.$refs.tabcon.sync(this.$refs.tabmenu.splide)
    this.tabmenu = this.$refs.tabmenu.splide
    this.$emit('custom', this.tabmenu)

    if (this.activeBar) {
      // div 만들기
      var tabmenu = document.querySelector('.' + this.tabName + ' .tab-menu')
      var newActive = document.createElement('div')
      tabmenu.appendChild(newActive)
      newActive.classList.add('active-state')

      // 이벤트 실행
      this.activeSetTimeout = setTimeout(() => {
        this.activeBarEvent()
      }, 300)
    }
  },
  destroyed () {
    clearTimeout(this.activeSetTimeout)
    document.body.style = ''
  },
  methods: {
    // active bar
    activeBarEvent () {
      this.$emit('tabmoved')
      if (this.activeBar) {
        var activeBar = document.querySelector('.' + this.tabName + ' .active-state')
        var isActive = document.querySelector('.' + this.tabName + ' .splide__slide.is-active .tab-btn')
        var target = isActive.parentNode
        var targetLeft = target.offsetLeft + isActive.offsetLeft
        var targetWidth = isActive.offsetWidth
        var targetHeight = target.offsetHeight
        activeBar.style = 'left: ' + targetLeft + 'px;height:' + targetHeight + 'px;width: ' + targetWidth + 'px;opacity: 1;'
      }
    },
    dragStart () {
      document.body.style = 'overflow: hidden;'
    },
    dragEnd () {
      document.body.style = ''
    }
  }
}
</script>

<style lang="scss">
</style>
