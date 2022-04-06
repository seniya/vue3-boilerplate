<template>
  <div class="page-body">
    <div class="container">
      <h3>Overview</h3>
      <ul class="list-dot">
        <li>베이직타입은 카드 헤더의 타이틀과 툴바의 버튼 영역이 수직 가운데 정렬로 되어 있습니다.</li>
        <li>.card-header.type2 일 경우 수직 상단 정렬 됩니다.</li>
        <li>카드 다음에 카드가 나올 경우 상단에 회색 라인이 추가 됩니다.</li>
        <li>카드 타이틀 기본 글꼴은 font-weight: medium, font-size: 1.8rem입니다.</li>
      </ul>
      <div class="row">
        <div class="col">
          <div class="view-exam">
            <section class="section mt40">
              <h3>카드 로딩중</h3>
              <ul class="list-dot">
                <li>기본 높이는 400px</li>
              </ul>
              <div class="card card-loading" />
            </section>
          </div>

          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;div class="card card-loading" /&gt;
              </code>
            </pre>
          </div>
          <div class="view-exam">
            <section class="section">
              <div class="card">
                <div class="card-header">
                  <div class="card-title">
                    <span>은행</span>
                  </div>
                  <div class="card-toolbar">
                    <button
                      type="button"
                      class="btn btn-line btn-xs"
                    >
                      <span>설정</span>
                    </button>
                    <button
                      type="button"
                      class="btn btn-line btn-xs"
                    >
                      <span>이력</span>
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  card-body
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <div class="card-title">
                    <span>예금/적금</span>
                  </div>
                  <div class="card-toolbar">
                    <button
                      type="button"
                      class="btn btn-text btn-arrow"
                    >
                      <span class="text-sm">자세히보기</span>
                    </button>
                  </div>
                </div>
                <div class="card-body" />
              </div>
            </section>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;div class="card"&gt;
        &lt;div class="card-header"&gt;
          &lt;div class="card-title"&gt;
            &lt;span&gt;은행&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class="card-toolbar"&gt;
            &lt;button type="button" class="btn btn-line btn-xs"&gt;
              &lt;span&gt;설정&lt;/span&gt;
            &lt;/button&gt;
            &lt;button type="button" class="btn btn-line btn-xs"&gt;
              &lt;span&gt;이력&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="card-body"&gt;
          card-body
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="card"&gt;
        &lt;div class="card-header"&gt;
          &lt;div class="card-title"&gt;
            &lt;span&gt;예금/적금&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class="card-toolbar"&gt;
            &lt;button type="button" class="btn btn-text btn-arrow"&gt;
              &lt;span class="text-sm"&gt;자세히보기&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="card-body" /&gt;
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
