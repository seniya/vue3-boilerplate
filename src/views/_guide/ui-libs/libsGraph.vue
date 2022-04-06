<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Graph 가로형</h3>
          <div class="view-exam">
            <!-- 가로형 그래프 type1 -->
            <div class="graph-area">
              <div class="label-group">
                <span class="label">소비<em class="price">3,150,000원</em></span>
                <span class="label">예산<em class="price">2,510,500원</em></span>
              </div>
              <div class="graph-bar">
                <!-- .line의 width : 기준값 / .active-bar의 width : 값 -->
                <span
                  class="line"
                  style="width: 50%;"
                />
                <span
                  class="active-bar"
                  style="width: 70%;"
                />
              </div>
            </div>
            <!-- // 가로형 그래프 type1 -->

            <br>
            <!-- 가로형 그래프 type2 -->
            <div class="graph-area">
              <div class="label-group">
                <span class="label">잔고<em class="price">5,210,500원</em></span>
                <span class="label">부족<em class="price">1,550,000원</em></span>
              </div>
              <div class="graph-bar dark">
                <!-- .line의 width : 기준값 / .active-bar의 width : 값 / .dark -->
                <span
                  class="line"
                  style="width: 70%;"
                />
                <span
                  class="active-bar"
                  style="width: 70%;"
                />
              </div>
            </div>
            <!-- // 가로형 그래프 type2 -->

            <br>
            <!-- 가로형 그래프 type3 -->
            <div class="graph-area type3">
              <div class="graph-bar bold">
                <span
                  class="active-bar"
                  style="width: 30%;"
                />
              </div>
              <div class="label-group mt12">
                <span class="label dot-gray">
                  이용가능 <span class="ml4">57%</span>
                  <em class="price">7,522,000원</em>
                </span>
                <span class="label dot-blue mt6">
                  누적이용 <span class="ml4">33%</span>
                  <em class="price">2,488,000원</em>
                </span>
              </div>
            </div>
            <!-- // 가로형 그래프 type3 -->
            <br>
            <!-- 가로형 그래프 type3 orange -->
            <div class="graph-area type3 orange">
              <div class="label-group">
                <span class="label dot-light-orange">
                  예산
                  <em class="price">2,000,000원</em>
                </span>
                <span class="label dot-orange mt6">
                  지출
                  <em class="price">1,760,000원</em>
                </span>
              </div>
              <div class="graph-bar bold mt10">
                <span
                  class="active-bar"
                  style="width: 70%;"
                />
              </div>
            </div>
            <!-- // 가로형 그래프 type3 orange -->

            <br>
            <!-- 가로형 그래프 type4 -->
            <div class="graph-area type4">
              <div class="graph-bar bold">
                <div
                  class="active-bar"
                  style="width: 30%;"
                >
                  <div class="graph-tooltip">
                    <div class="tooltip-inner">
                      <span>최소실적 달성!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="label-group">
                <span class="label">0</span>
                <span class="label">20만</span>
                <span class="label">30만</span>
                <span class="label">50만</span>
                <span class="label">100만</span>
              </div>
            </div>
            <!-- // 가로형 그래프 type4 -->

            <br>
            <!-- 가로형 그래프 type5 -->
            <div class="graph-area type5">
              <div class="graph-horizontal mt12 mb16">
                <div class="label-group">
                  <span class="label">1주차</span>
                  <span class="label">2주차</span>
                  <span class="label">3주차</span>
                  <span class="label">4주차</span>
                  <span class="label">5주차</span>
                </div>
                <div class="bar-area">
                  <button
                    type="button"
                    class="bar-group"
                  >
                    <span
                      class="graph-bar"
                      style="width: 30%"
                    />
                    <span class="graph-bar-value">123,000원</span>
                  </button>
                  <button
                    type="button"
                    class="bar-group"
                  >
                    <span
                      class="graph-bar"
                      style="width: 80%"
                    />
                    <span class="graph-bar-value">176,000원</span>
                  </button>
                  <button
                    type="button"
                    class="bar-group active"
                  >
                    <!-- .active -->
                    <span
                      class="graph-bar"
                      style="width: 100%"
                    />
                    <span class="graph-bar-value">2,500,000원</span>
                  </button>
                  <button
                    type="button"
                    class="bar-group"
                  >
                    <span
                      class="graph-bar"
                      style="width: 40%"
                    />
                    <span class="graph-bar-value">56,000원</span>
                  </button>
                  <button
                    type="button"
                    class="bar-group"
                  >
                    <span
                      class="graph-bar"
                      style="width: 20%"
                    />
                    <span class="graph-bar-value">9,000원</span>
                  </button>
                </div>
              </div>
              <div class="graph-title-group">
                <span class="graph-title">월간 지출금액</span>
                <span class="graph-price">2,800,000<span class="won">원</span></span>
              </div>
            </div>
            <!-- // 가로형 그래프 type5 -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;!-- 가로형 그래프 type1 --&gt;
    &lt;div class="graph-area"&gt;
      &lt;div class="label-group"&gt;
        &lt;span class="label"&gt;소비&lt;em class="price"&gt;3,150,000원&lt;/em&gt;&lt;/span&gt;
        &lt;span class="label"&gt;예산&lt;em class="price"&gt;2,510,500원&lt;/em&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="graph-bar"&gt;
        &lt;!-- .line의 width : 기준값 / .active-bar의 width : 값 --&gt;
        &lt;span
          class="line"
          style="width: 50%;"
        /&gt;
        &lt;span
          class="active-bar"
          style="width: 70%;"
        /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- // 가로형 그래프 type1 --&gt;

    &lt;!-- 가로형 그래프 type2 --&gt;
    &lt;div class="graph-area"&gt;
      &lt;div class="label-group"&gt;
        &lt;span class="label"&gt;잔고&lt;em class="price"&gt;5,210,500원&lt;/em&gt;&lt;/span&gt;
        &lt;span class="label"&gt;부족&lt;em class="price"&gt;1,550,000원&lt;/em&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="graph-bar dark"&gt;
        &lt;!-- .line의 width : 기준값 / .active-bar의 width : 값 / .dark --&gt;
        &lt;span
          class="line"
          style="width: 70%;"
        /&gt;
        &lt;span
          class="active-bar"
          style="width: 70%;"
        /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- // 가로형 그래프 type2 --&gt;

    &lt;!-- 가로형 그래프 type3 --&gt;
    &lt;div class="graph-area type3"&gt;
      &lt;div class="graph-bar bold"&gt;
        &lt;span
          class="active-bar"
          style="width: 30%;"
        /&gt;
      &lt;/div&gt;
      &lt;div class="label-group mt12"&gt;
        &lt;span class="label dot-gray"&gt;
          이용가능 &lt;span class="ml4"&gt;57%&lt;/span&gt;
          &lt;em class="price"&gt;7,522,000원&lt;/em&gt;
        &lt;/span&gt;
        &lt;span class="label dot-blue mt6"&gt;
          누적이용 &lt;span class="ml4"&gt;33%&lt;/span&gt;
          &lt;em class="price"&gt;2,488,000원&lt;/em&gt;
        &lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- // 가로형 그래프 type3 --&gt;

    &lt;!-- 가로형 그래프 type3 orange --&gt;
    &lt;div class="graph-area type3 orange"&gt;
      &lt;div class="label-group"&gt;
        &lt;span class="label dot-light-orange"&gt;
          예산
          &lt;em class="price"&gt;2,000,000원&lt;/em&gt;
        &lt;/span&gt;
        &lt;span class="label dot-orange mt6"&gt;
          지출
          &lt;em class="price"&gt;1,760,000원&lt;/em&gt;
        &lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="graph-bar bold mt10"&gt;
        &lt;span
          class="active-bar"
          style="width: 70%;"
        /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- // 가로형 그래프 type3 orange --&gt;

    &lt;!-- 가로형 그래프 type4 --&gt;
    &lt;div class="graph-area type4"&gt;
      &lt;div class="graph-bar bold"&gt;
        &lt;div
          class="active-bar"
          style="width: 30%;"
        &gt;
          &lt;div class="graph-tooltip"&gt;
            &lt;div class="tooltip-inner"&gt;
              &lt;span&gt;최소실적 달성!&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="label-group"&gt;
        &lt;span class="label"&gt;0&lt;/span&gt;
        &lt;span class="label"&gt;20만&lt;/span&gt;
        &lt;span class="label"&gt;30만&lt;/span&gt;
        &lt;span class="label"&gt;50만&lt;/span&gt;
        &lt;span class="label"&gt;100만&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- // 가로형 그래프 type4 --&gt;

    &lt;!-- 가로형 그래프 type5 --&gt;
    &lt;div class="graph-area type5"&gt;
      &lt;div class="graph-horizontal mt12 mb16"&gt;
        &lt;div class="label-group"&gt;
          &lt;span class="label"&gt;1주차&lt;/span&gt;
          &lt;span class="label"&gt;2주차&lt;/span&gt;
          &lt;span class="label"&gt;3주차&lt;/span&gt;
          &lt;span class="label"&gt;4주차&lt;/span&gt;
          &lt;span class="label"&gt;5주차&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="bar-area"&gt;
          &lt;button
            type="button"
            class="bar-group"
          &gt;
            &lt;span
              class="graph-bar"
              style="width: 30%"
            /&gt;
            &lt;span class="graph-bar-value"&gt;123,000원&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="bar-group"
          &gt;
            &lt;span
              class="graph-bar"
              style="width: 80%"
            /&gt;
            &lt;span class="graph-bar-value"&gt;176,000원&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="bar-group active"
          &gt;
            &lt;!-- .active --&gt;
            &lt;span
              class="graph-bar"
              style="width: 100%"
            /&gt;
            &lt;span class="graph-bar-value"&gt;2,500,000원&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="bar-group"
          &gt;
            &lt;span
              class="graph-bar"
              style="width: 40%"
            /&gt;
            &lt;span class="graph-bar-value"&gt;56,000원&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="bar-group"
          &gt;
            &lt;span
              class="graph-bar"
              style="width: 20%"
            /&gt;
            &lt;span class="graph-bar-value"&gt;9,000원&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="graph-title-group"&gt;
        &lt;span class="graph-title"&gt;월간 지출금액&lt;/span&gt;
        &lt;span class="graph-price"&gt;2,800,000&lt;span class="won"&gt;원&lt;/span&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- // 가로형 그래프 type5 --&gt;
                </code>
            </pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>Graph 세로형</h3>
          <div class="view-exam">
            <!-- 세로형 type1 -->
            <div class="graph-area vertical">
              <div class="graph-title-group">
                <span class="graph-title">월간 소비 금액</span>
                <span class="graph-price">2,800,000원</span>
              </div>
              <div class="time">
                12:35
              </div>
              <div class="graph-vertical">
                <div class="bar-group">
                  <button
                    type="button"
                    class="graph-bar"
                    style="height: 60%"
                  >
                    <uu-tooltip
                      type="type6"
                      bottom
                      center
                      hide-close
                      no-fade
                      absolute
                      absolute-top="-37"
                      left-center
                    >
                      <template v-slot:tooltip-content>
                        <p>230,350원</p>
                      </template>
                    </uu-tooltip>
                  </button>
                  <button
                    type="button"
                    class="graph-bar"
                    style="height: 30%"
                  >
                    <uu-tooltip
                      type="type6"
                      bottom
                      center
                      hide-close
                      no-fade
                      absolute
                      absolute-top="-38"
                      left-center
                    >
                      <template v-slot:tooltip-content>
                        <p>230,350원</p>
                      </template>
                    </uu-tooltip>
                  </button>
                  <button
                    type="button"
                    class="graph-bar"
                    style="height: 60%"
                  >
                    <uu-tooltip
                      type="type6"
                      bottom
                      center
                      hide-close
                      no-fade
                      absolute
                      absolute-top="-37"
                      left-center
                    >
                      <template v-slot:tooltip-content>
                        <p>230,350원</p>
                      </template>
                    </uu-tooltip>
                  </button>
                  <!-- 클릭시 .active 추가 -->
                  <button
                    type="button"
                    class="graph-bar active"
                    style="height: 70%"
                  >
                    <uu-tooltip
                      type="type6"
                      bottom
                      center
                      hide-close
                      no-fade
                      absolute
                      absolute-top="-37"
                      left-center
                    >
                      <template v-slot:tooltip-content>
                        <p>230,350원</p>
                      </template>
                    </uu-tooltip>
                  </button>
                </div>
                <div class="label-group">
                  <span class="label">1주차</span>
                  <span class="label">2주차</span>
                  <span class="label">3주차</span>
                  <span class="label">4주차</span>
                </div>
              </div>
            </div>
            <!-- // 세로형 type1 -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;!-- 세로형 type1 --&gt;
    &lt;div class="graph-area vertical"&gt;
      &lt;div class="graph-title-group"&gt;
        &lt;span class="graph-title"&gt;월간 소비 금액&lt;/span&gt;
        &lt;span class="graph-price"&gt;2,800,000원&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="time"&gt;
        12:35
      &lt;/div&gt;
      &lt;div class="graph-vertical"&gt;
        &lt;div class="bar-group"&gt;
          &lt;button
            type="button"
            class="graph-bar"
            style="height: 60%"
          &gt;
            &lt;uu-tooltip
              type="type6"
              bottom
              center
              hide-close
              no-fade
              absolute
              absolute-top="-37"
              left-center
            &gt;
              &lt;template v-slot:tooltip-content&gt;
                &lt;p&gt;230,350원&lt;/p&gt;
              &lt;/template&gt;
            &lt;/uu-tooltip&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="graph-bar"
            style="height: 30%"
          &gt;
            &lt;uu-tooltip
              type="type6"
              bottom
              center
              hide-close
              no-fade
              absolute
              absolute-top="-38"
              left-center
            &gt;
              &lt;template v-slot:tooltip-content&gt;
                &lt;p&gt;230,350원&lt;/p&gt;
              &lt;/template&gt;
            &lt;/uu-tooltip&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="graph-bar"
            style="height: 60%"
          &gt;
            &lt;uu-tooltip
              type="type6"
              bottom
              center
              hide-close
              no-fade
              absolute
              absolute-top="-37"
              left-center
            &gt;
              &lt;template v-slot:tooltip-content&gt;
                &lt;p&gt;230,350원&lt;/p&gt;
              &lt;/template&gt;
            &lt;/uu-tooltip&gt;
          &lt;/button&gt;
          &lt;!-- 클릭시 .active 추가 --&gt;
          &lt;button
            type="button"
            class="graph-bar active"
            style="height: 70%"
          &gt;
            &lt;uu-tooltip
              type="type6"
              bottom
              center
              hide-close
              no-fade
              absolute
              absolute-top="-37"
              left-center
            &gt;
              &lt;template v-slot:tooltip-content&gt;
                &lt;p&gt;230,350원&lt;/p&gt;
              &lt;/template&gt;
            &lt;/uu-tooltip&gt;
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="label-group"&gt;
          &lt;span class="label"&gt;1주차&lt;/span&gt;
          &lt;span class="label"&gt;2주차&lt;/span&gt;
          &lt;span class="label"&gt;3주차&lt;/span&gt;
          &lt;span class="label"&gt;4주차&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- // 세로형 type1 --&gt;
                </code>
            </pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>Graph progress circle</h3>
          <div class="view-exam">
            <!-- progress circle -->
            <div class="progress-area">
              <!-- percent에 따라 클래스명 변경 - ex) 20% : progress-20 -->
              <div class="progress-circle progress-73">
                <div class="progress-bg">
                  <!-- 샘플 이미지 -->
                  <img
                    src="~@/assets/images/@sample/@visual_bucket.png"
                    alt=""
                  >
                  <!-- //샘플 이미지 -->
                </div>
                <span class="progress-percent">
                  <span>73%</span>
                </span>
              </div>
            </div>
            <!-- // progress circle -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;div class="progress-area"&gt;
      &lt;!-- percent에 따라 클래스명 변경 - ex) 20% : progress-20 --&gt;
      &lt;div class="progress-circle progress-73"&gt;
        &lt;div class="progress-bg"&gt;
          &lt;!-- 샘플 이미지 --&gt;
          &lt;img
            src="~@/assets/images/@sample/@visual_bucket.png"
            alt=""
          &gt;
          &lt;!-- //샘플 이미지 --&gt;
        &lt;/div&gt;
        &lt;span class="progress-percent"&gt;
          &lt;span&gt;73%&lt;/span&gt;
        &lt;/span&gt;
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
