<template>
  <div>
    <splide
      ref="splide"
      :options="slideType"
      :class="[slideType === bullet ? 'bullet': '', classType === 'type3' ? 'type3': '', onlySlide? 'only-slide':'']"
      @splide:moved="$emit('moved')"
      @splide:drag="dragStart"
      @splide:dragged="dragEnd"
    >
      <splide-slide
        v-for="item in slideGroup"
        :key="item.id"
      >
        <div
          class="slide-box"
        >
          <slot
            :name="'slide' + item.id"
          >
            slide1
          </slot>
        </div>
      </splide-slide>
      <template
        v-if="type === 'progress'"
        v-slot:controls
      >
        <div
          class="splide__progress"
        >
          <div class="splide__progress__bar" />
        </div>
        <button
          type="button"
          class="splide-btn-more"
        >
          <uu-icon
            icon="view"
            size="16"
            color="white"
          />
        </button>
      </template>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
export default {
  components: {
    Splide,
    SplideSlide
  },
  props: {
    type: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    custom: {
      type: Object,
      default: () => {}
    },
    slide: {
      type: String,
      default: null
    },
    auto: {
      type: Boolean,
      default: false
    },
    classType: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'white'
    },
    mode: {
      type: String,
      default: 'loop'
    },
    position: {
      type: String,
      default: 'center'
    },
    gap: {
      type: String,
      default: '0'
    },
    paddingLeft: {
      type: String,
      default: '0'
    },
    paddingRight: {
      type: String,
      default: '0'
    },
    clones: {
      type: Number,
      default: 0
    },
    interval: {
      type: String,
      default: '3000'
    }
  },
  data () {
    return {
      slideType: null,
      slideGroup: [],
      slideLength: null,
      basic: {
        type: 'slide',
        fixedWidth: this.width,
        height: this.height,
        padding: '2.4rem',
        gap: '1.6rem',
        focus: 'center',
        autoplay: this.auto,
        interval: 3000,
        arrows: false,
        pagination: false
      },
      progress: {
        type: 'loop',
        fixedWidth: this.width,
        height: this.height,
        arrows: false,
        pagination: false,
        autoplay: true,
        interval: 3000
      },
      bullet: {
        type: this.mode,
        width: this.width,
        height: this.height,
        arrows: false,
        autoplay: this.auto,
        interval: this.interval,
        gap: this.gap,
        clones: this.clones,
        drag: true,
        waitForTransition: false,
        padding: {
          left: this.paddingLeft,
          right: this.paddingRight
        },
        classes: {
          pagination: 'splide__pagination ' + this.classType + ' ' + this.color + ' ' + this.position,
          page: 'splide__pagination__page splide-pagination-page'// each button
        }
      },
      swiper: null,
      onlySlide: false
    }
  },
  created () {
    // 슬라이드 갯수에 따라 추가
    this.slideLength = Number(this.slide)
    for (var i = 0; i < this.slideLength; i++) {
      var max = this.slideGroup.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0)
      this.slideGroup.push({
        id: max + 1
      })
    }
    if (this.type === 'basic') {
      this.slideType = this.basic
    } else if (this.type === 'progress') {
      this.slideType = this.progress
    } else if (this.type === 'bullet') {
      this.slideType = this.bullet
    } else if (this.type === 'custom') {
      this.slideType = this.custom
    }
    if (this.slideGroup.length < 2) {
      this.onlySlide = true
      this.bullet.drag = false
    }
  },
  mounted () {
    this.swiper = this.$refs.splide
    this.$emit('event', this.swiper)
  },
  destroyed () {
    document.body.style = ''
  },
  methods: {
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
