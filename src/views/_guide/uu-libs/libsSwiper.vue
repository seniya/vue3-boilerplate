<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Swiper</h3>
          <p>
            *<a
              href="https://splidejs.com/integration-vue-splide/"
              target="_blank"
            >SPLIDE(https://splidejs.com/integration-vue-splide/)</a> 참고
          </p>
          <p>기본적으로 this.$emit('event', this.swiper)로 swiper를 보내고 있음. 개발시 참고.</p>
          <p>@moved 이벤트 $emit 으로 보내고 있음. 개발시 참고.</p>
          <h4>Basic</h4>
          <div class="view-exam">
            <!-- Swiper basic -->
            <uu-swiper
              type="basic"
              slide="3"
              width="30rem"
              height="40rem"
              @moved="movedEvent"
              @event="event"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  basic1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  basic2
                </div>
              </template>
              <template v-slot:slide3>
                <div class="slide-inner">
                  basic3
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper basic -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
&lt;uu-swiper
  type="basic"
  slide="3"
  width="30rem"
  height="40rem"
&gt;
  &lt;template v-slot:slide1&gt;
    basic1
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    basic2
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    basic3
  &lt;/template&gt;
&lt;/uu-swiper&gt;
                </code>
            </pre>
          </div>
          <h4>Progress</h4>
          <div class="view-exam">
            <!-- Swiper progress -->
            <uu-swiper
              type="progress"
              slide="3"
              height="40rem"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  progress1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  progress2
                </div>
              </template>
              <template v-slot:slide3>
                <div class="slide-inner">
                  progress3
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper progress -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
&lt;!-- Swiper progress --&gt;
&lt;uu-swiper
  type="progress"
  slide="3"
  height="40rem"
&gt;
  &lt;template v-slot:slide1&gt;
    progress1
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    progress2
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    progress3
  &lt;/template&gt;
&lt;/uu-swiper&gt;
&lt;!-- // Swiper progress --&gt;
                </code>
            </pre>
          </div>
          <h4>Bullet</h4>
          <div class="view-exam">
            <!-- Swiper bullet -->
            <uu-swiper
              type="bullet"
              slide="2"
              height="40rem"
              color="black"
              class-type="type1"
              auto
              @event="event"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  bullet1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  bullet2
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper bullet -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;!-- 기본 loop로 되어 있으며 mode="slide" 추가시 단방향 --&gt;
    &lt;!-- Swiper bullet --&gt;
    &lt;uu-swiper
      type="bullet"
      slide="2"
      height="40rem"
      color="black"
      class-type="type1"
      auto
    &gt;
      &lt;template v-slot:slide1&gt;
        &lt;div class="slide-inner"&gt;
          bullet1
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:slide2&gt;
        &lt;div class="slide-inner"&gt;
          bullet2
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-swiper&gt;
    &lt;!-- // Swiper bullet --&gt;
                </code>
            </pre>
          </div>
          <br>
          <h4>Bullet type2</h4>
          <div class="view-exam">
            <!-- Swiper bullet -->
            <uu-swiper
              type="bullet"
              slide="2"
              height="20rem"
              color="black"
              class-type="type2"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  bullet1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  bullet2
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper bullet -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;!-- 기본 loop로 되어 있으며 mode="slide" 추가시 단방향 --&gt;
    &lt;!-- Swiper bullet --&gt;
    &lt;uu-swiper
      type="bullet"
      slide="2"
      height="20rem"
      color="black"
      class-type="type2"
    &gt;
      &lt;template v-slot:slide1&gt;
        &lt;div class="slide-inner"&gt;
          bullet1
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:slide2&gt;
        &lt;div class="slide-inner"&gt;
          bullet2
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-swiper&gt;
    &lt;!-- // Swiper bullet --&gt;
                </code>
            </pre>
          </div>
          <br>
          <h4>Bullet type3</h4>
          <div class="view-exam">
            <!-- Swiper bullet -->
            <uu-swiper
              type="bullet"
              slide="2"
              height="20rem"
              class-type="type3"
              color="black"
              position="bottom-left"
              gap="1.6rem"
              padding-left="1.6rem"
              padding-right="1.6rem"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  bullet1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  bullet2
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper bullet -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;!-- position="" || bottom-left || bottom-right || bottom-center || top-left || top-right || top-center // default: bottom-center --&gt;
    &lt;!-- gap="" || 1.6rem || 16px // default: 0 --&gt;
    &lt;!-- padding-left="" || 1.6rem || 16px // default: 0 --&gt;
    &lt;!-- padding-right="" || 1.6rem || 16px // default: 0 --&gt;
    &lt;!-- Swiper bullet --&gt;
    &lt;uu-swiper
      type="bullet"
      slide="2"
      height="20rem"
      class-type="type3"
      color="black"
      position="bottom-left"
      gap="1.6rem"
      padding-left="1.6rem"
      padding-right="1.6rem"
    &gt;
      &lt;template v-slot:slide1&gt;
        &lt;div class="slide-inner"&gt;
          bullet1
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:slide2&gt;
        &lt;div class="slide-inner"&gt;
          bullet2
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-swiper&gt;
    &lt;!-- // Swiper bullet --&gt;
                </code>
            </pre>
          </div>
          <h4>Custom</h4>
          <div class="view-exam">
            <!-- Swiper Custom -->
            <uu-swiper
              type="custom"
              slide="2"
              :custom="custom"
            >
              <template v-slot:slide1>
                <div style="background-color: red">
                  custom1
                </div>
              </template>
              <template v-slot:slide2>
                <div style="height: 100%; background-color: black; overflow-y: auto; color:#fff;">
                  custom2
                  <p style="height:1000px">
                    height: 100%; background-color: black; overflow-y: auto; color:#fff;
                  </p>
                </div>
              </template>
            </uu-swiper>
            <br>
            <!-- type2 -->
            <uu-swiper
              type="custom"
              slide="2"
              :custom="custom2"
            >
              <template v-slot:slide1>
                <div style="background-color: red">
                  custom1
                </div>
              </template>
              <template v-slot:slide2>
                <div style="height: 100%; background-color: black; overflow-y: auto; color:#fff;">
                  custom2
                  <p style="height:1000px">
                    height: 100%; background-color: black; overflow-y: auto; color:#fff;
                  </p>
                </div>
              </template>
            </uu-swiper>
            <br>
            <!-- type3 -->
            <uu-swiper
              type="custom"
              slide="2"
              :custom="custom3"
            >
              <template v-slot:slide1>
                <div style="background-color: red">
                  custom1
                </div>
              </template>
              <template v-slot:slide2>
                <div style="height: 100%; background-color: black; overflow-y: auto; color:#fff;">
                  custom2
                  <p style="height:1000px">
                    height: 100%; background-color: black; overflow-y: auto; color:#fff;
                  </p>
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper Custom -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
&lt;uu-swiper
  type="custom"
  slide="2"
  :custom="custom"
&gt;
  &lt;template v-slot:slide1&gt;
    custom1
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    custom2
  &lt;/template&gt;
&lt;/uu-swiper&gt;
                </code>
            </pre>

            <pre>
                <code class="language-js">
export default {
  data () {
    return {
      custom: {
        type: 'slide',
        fixedWidth: '40rem',
        height: '40rem',
        padding: '2.4rem',
        gap: '1.6rem',
        focus: 'center',
        arrows: false,
        pagination: false
      }
    }
  }
}
                </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  data () {
    return {
      custom: {
        type: 'slide',
        width: '100%',
        height: '10rem',
        // heightRatio: 0.3, width값에 따라 height가 변함 width의 30% 너비를 높이로..
        focus: 'center',
        arrows: false,
        pagination: false,
        autoplay: false
      },
      custom2: {
        type: 'slide',
        width: '100%',
        heightRatio: 0.3,
        focus: 'center',
        arrows: false,
        pagination: false,
        autoplay: false
      },
      custom3: {
        type: 'fade',
        width: '100%',
        autoHeight: true,
        focus: 'center',
        arrows: false,
        pagination: false,
        autoplay: false
      },
      swiper: null
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  methods: {
    event (swiper) {
      this.swiper = swiper
    },
    movedEvent () {
      console.log(this.swiper)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
.slide-inner {
  width: 100%;
  height: 100%;
  background-color: $gray080;
}
</style>
