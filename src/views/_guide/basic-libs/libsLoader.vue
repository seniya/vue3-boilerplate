<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Loader 24x24</h3>
          <div class="vue-exam">
            <!-- loader -->
            <div class="loader">
              <span class="sr-only">로딩 중</span>
            </div>
            <!-- loader-dark -->
            <div class="loader-dark">
              <div class="loader">
                <span class="sr-only">로딩 중</span>
              </div>
            </div>
            <br>
            <!-- dot-loader -->
            <div class="dot-loader">
              <span class="circle" />
              <span class="circle" />
              <span class="circle" />
              <span class="sr-only">로딩 중</span>
            </div>
            <br>
            <br>
            <!-- dot-loader mini -->
            <div class="dot-loader mini">
              <span class="circle" />
              <span class="circle" />
              <span class="circle" />
              <span class="sr-only">로딩 중</span>
            </div>
            <br>
            <br>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="$router.push('/etc/ETC2000')"
              >
                <span>페이지 중앙 로딩</span>
              </button>
            </div>
            <br>
          </div>
          <div class="vue-exam">
            <pre>
              <code class="language-html">

      &lt;!-- 스피너 --&gt;
      &lt;div class="loader"&gt;
        &lt;span class="sr-only"&gt;로딩 중&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- loader-dark --&gt;
      &lt;div class="loader-dark"&gt;
        &lt;div class="loader"&gt;
          &lt;span class="sr-only"&gt;로딩 중&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- 도트 로더들은 위아래 여백 따로 없음 --&gt;
      &lt;!-- 도트 로더 --&gt;
      &lt;div class="dot-loader"&gt;
        &lt;span class="circle" /&gt;
        &lt;span class="circle" /&gt;
        &lt;span class="circle" /&gt;
        &lt;span class="sr-only"&gt;로딩 중&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- 도트 로더 mini --&gt;
      &lt;div class="dot-loader mini"&gt;
        &lt;span class="circle" /&gt;
        &lt;span class="circle" /&gt;
        &lt;span class="circle" /&gt;
        &lt;span class="sr-only"&gt;로딩 중&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- 페이지 중앙 로딩 --&gt;
      &lt;div class="loader-wrap"&gt;
        &lt;!-- 텍스트 필요없을 시 삭제 --&gt;
        &lt;p class="text"&gt;
          화면을 불러오고 있습니다.
        &lt;/p&gt;
        &lt;!-- // 텍스트 필요없을 시 삭제 --&gt;
        &lt;!-- loader-dark --&gt;
        &lt;div class="loader-dark"&gt;
          &lt;div class="loader"&gt;
            &lt;span class="sr-only"&gt;로딩 중&lt;/span&gt;
          &lt;/div&gt;
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
