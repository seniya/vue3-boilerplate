<template>
  <div>
    <splide :options="options">
      <splide-slide>
        <div class="slide">
          1번
        </div>
      </splide-slide>
      <splide-slide>
        <div class="slide">
          2번
        </div>
      </splide-slide>
      <splide-slide>
        <div class="slide">
          3번
        </div>
      </splide-slide>
      <splide-slide>
        <div class="slide">
          4번
        </div>
      </splide-slide>
      <splide-slide>
        <div class="slide">
          5번
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
  data () {
    return {
      options: {
        type: 'splide',
        direction: 'ttb',
        heightRatio: 0.6,
        perPage: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
