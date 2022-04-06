<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Bubble</h3>
          <ul class="list-dot">
            <li>상위 엘리먼트에 position: relative 필수 사용</li>
            <li>width 옵션 사용시 단위 표기 필요(px, rem, %)</li>
            <li>버블 위치 left, right, top, bottom 옵션 사용시 단위 표기 필요(px, rem, %)</li>
            <li>버블 꼬리 tale-left, tale-right, tale-top, tale-bottom 옵션 사용시 단위 표기 필요(px, rem, %)</li>
          </ul>
          <!-- Bubble default -->
          <!-- view-exam -->
          <div class="view-exam">
            <uu-bubble
              left="31%"
              width="150px"
            >
              <template v-slot:bubble-icon>
                😰
              </template>
              <template v-slot:bubble-content>
                <div class="bubble-info">
                  <span class="text-area">
                    <span class="title">
                      <span class="fs-14">2월 5일보다</span>
                    </span>
                    <span>
                      <span class="text fw-bold">20점 하락</span>
                      <uu-icon
                        icon="decrease"
                        size="12"
                        color="purple"
                        class="ml2"
                      >
                        <span class="sr-only">증가</span>
                      </uu-icon>
                    </span>
                  </span>
                </div>
              </template>
            </uu-bubble>
            <uu-bubble
              left="0"
              width="150px"
              layout
            >
              버블버블 꼬르륵...
            </uu-bubble>
            <uu-bubble
              right="0"
              top="0"
              layout
              tale-left="25px"
            >
              <div class="part text">
                <span class="fs-14">값A</span>
                <span class="fw-bold fs-16">350,500원</span>
              </div>
              <div class="part text">
                <span class="fs-14">값B</span>
                <span class="fw-bold fs-16">350,500원</span>
              </div>
            </uu-bubble>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;div class="relative"&gt;
        &lt;!-- 기본 타입 --&gt;
        &lt;uu-bubble
          left="0"
          width="150px"
          layout
        &gt;
          버블버블
        &lt;/uu-bubble&gt;

        &lt;!-- 응용 타입 1 --&gt;
        &lt;uu-bubble
          left="31%"
          top="-100%"
          width="150px"
        &gt;
          &lt;template v-slot:bubble-icon&gt;
            😰
          &lt;/template&gt;
          &lt;template v-slot:bubble-content&gt;
            &lt;div class="bubble-info"&gt;
              &lt;span class="text-area"&gt;
                &lt;span class="title"&gt;
                  &lt;span class="fs-14"&gt;2월 5일보다&lt;/span&gt;
                &lt;/span&gt;
                &lt;span&gt;
                  &lt;span class="text fw-bold"&gt;20점 하락&lt;/span&gt;
                  &lt;uu-icon
                    icon="decrease"
                    size="12"
                    color="purple"
                    class="ml2"
                  &gt;
                    &lt;span class="sr-only"&gt;증가&lt;/span&gt;
                  &lt;/uu-icon&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/div&gt;
          &lt;/template&gt;
        &lt;/uu-bubble&gt;

        &lt;!-- 응용 타입 2 --&gt;
        &lt;!--
          uu-bubble 위치 : left, top, right, bottom
          uu-bubble 꼬리 위치 : tale-left
        --&gt;
        &lt;uu-bubble
          left="0"
          top="0"
          layout
          tale-left="25px"
        &gt;
          &lt;div class="part text"&gt;
            &lt;span class="fs-14"&gt;값A&lt;/span&gt;
            &lt;span class="fw-bold fs-16"&gt;350,500원&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class="part text"&gt;
            &lt;span class="fs-14"&gt;값B&lt;/span&gt;
            &lt;span class="fw-bold fs-16"&gt;350,500원&lt;/span&gt;
          &lt;/div&gt;
        &lt;/uu-bubble&gt;
      &lt;/div&gt;
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
      selectedValue: '1'
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
  .view-exam {
    position: relative;
    height: 300px;
    padding-top: 10rem;
    border: 1px solid #ccc;
  }
</style>
