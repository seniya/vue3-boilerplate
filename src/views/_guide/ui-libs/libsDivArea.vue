<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Division Area -->
          <h3>Division Area</h3>
          <!-- type1 -->
          <h4>type1</h4>
          <div class="view-exam">
            <div
              class="div-area type1"
            >
              <div
                class="div-item-1"
                tabindex="0"
              >
                <dl>
                  <dt>지난달 지출</dt>
                  <dd>
                    <strong class="flu-cost">3,924,357원</strong>
                    <span class="flu-compare">
                      <span class="sr-only">전월대비</span>
                      <em>1,602,433원</em>
                      <uu-icon
                        icon="increase"
                        size="12"
                        color="blue"
                      >
                        <span class="sr-only">증가</span>
                      </uu-icon>
                    </span>
                  </dd>
                </dl>
              </div>
              <div
                class="div-item-2"
                tabindex="0"
              >
                <dl>
                  <dt>3개월 평균 지출</dt>
                  <dd>
                    <strong class="flu-cost">2,924,357원</strong>
                    <span class="flu-compare">
                      <span class="sr-only">3개월 평균 지출 대비</span>
                      <em>1,214,433원</em>
                      <uu-icon
                        icon="decrease"
                        size="12"
                        color="blue"
                      >
                        <span class="sr-only">감소</span>
                      </uu-icon>
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;div
      class="div-area type1"
    >
      &lt;div
        class="div-item-1"
        tabindex="0"
      &gt;
        &lt;dl&gt;
          &lt;dt&gt;지난달 지출&lt;/dt&gt;
          &lt;dd&gt;
            &lt;strong class="flu-cost"&gt;3,924,357원&lt;/strong&gt;
            &lt;span class="flu-compare"&gt;
              &lt;span class="sr-only"&gt;전월대비&lt;/span&gt;
              &lt;em&gt;1,602,433원&lt;/em&gt;
              &lt;uu-icon
                icon="increase"
                size="12"
                color="blue"
              &gt;
                &lt;span class="sr-only"&gt;증가&lt;/span&gt;
              &lt;/uu-icon&gt;
            &lt;/span&gt;
          &lt;/dd&gt;
        &lt;/dl&gt;
      &lt;/div&gt;
      &lt;div
        class="div-item-2"
        tabindex="0"
      &gt;
        &lt;dl&gt;
          &lt;dt&gt;3개월 평균 지출&lt;/dt&gt;
          &lt;dd&gt;
            &lt;strong class="flu-cost"&gt;2,924,357원&lt;/strong&gt;
            &lt;span class="flu-compare"&gt;
              &lt;span class="sr-only"&gt;3개월 평균 지출 대비&lt;/span&gt;
              &lt;em&gt;1,214,433원&lt;/em&gt;
              &lt;uu-icon
                icon="decrease"
                size="12"
                color="blue"
              &gt;
                &lt;span class="sr-only"&gt;감소&lt;/span&gt;
              &lt;/uu-icon&gt;
            &lt;/span&gt;
          &lt;/dd&gt;
        &lt;/dl&gt;
      &lt;/div&gt;
    &lt;/div&gt;
                </code>
            </pre>
          </div>
          <!-- type2 -->
          <h4>type2</h4>
          <div class="view-exam">
            <div
              class="div-area type2"
            >
              <div
                class="div-item-1"
                tabindex="0"
              >
                <dl>
                  <dt>총 이용횟수</dt>
                  <dd>
                    <span class="flu-count">2건</span>
                  </dd>
                </dl>
              </div>
              <div
                class="div-item-2"
                tabindex="0"
              >
                <dl>
                  <dt>총 이용금액</dt>
                  <dd>
                    <span class="flu-cost">2,924,357원</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;div
      class="div-area type2"
    &gt;
      &lt;div
        class="div-item-1"
        tabindex="0"
      &gt;
        &lt;dl&gt;
          &lt;dt&gt;총 이용횟수&lt;/dt&gt;
          &lt;dd&gt;
            &lt;span class="flu-count"&gt;2건&lt;/span&gt;
          &lt;/dd&gt;
        &lt;/dl&gt;
      &lt;/div&gt;
      &lt;div
        class="div-item-2"
        tabindex="0"
      &gt;
        &lt;dl&gt;
          &lt;dt&gt;총 이용금액&lt;/dt&gt;
          &lt;dd&gt;
            &lt;span class="flu-cost"&gt;2,924,357원&lt;/span&gt;
          &lt;/dd&gt;
        &lt;/dl&gt;
      &lt;/div&gt;
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
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
</style>
