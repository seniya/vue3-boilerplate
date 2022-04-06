<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h3>General layout</h3>
          <ul class="list-dot">
            <li>각 페이지의 헤더는 네이티브 영역입니다.</li>
          </ul>
          <div class="ly-box ly-box-wrap">
            <span>#app</span>
            <div class="ly-box">
              <span>#page</span>
              <div class="ly-box">
                <span>#header</span>
              </div>
              <div class="ly-box ly-box-body">
                <span>#content</span>
              </div>
              <div class="ly-box">
                <span>#footer</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;div id="app"&gt;
        &lt;div id="page"&gt;
          &lt;!-- native --&gt;
          &lt;div id="header" /&gt;
          &lt;!-- // native --&gt;
          &lt;div id="content" /&gt;
          &lt;div id="footer" /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-auto">
          <h3>Content layout</h3>
          <ul class="list-dot">
            <li>제목 태그는 h2 부터 시작합니다.</li>
            <li>각 카테고리 클래스는 .content.category에서 .category 삭제 후 추가 해 주세요. </li>
            <li>푸터 버튼이 떠있는 버튼일 경우 .content 클래스에 .floating을 넣어주세요.</li>
          </ul>
          <div class="ly-box ly-box-wrap">
            <span>#content.content.category</span>
            <div class="ly-box">
              <span>.content-header</span>
            </div>
            <div class="ly-box ly-box-body">
              <span>.content-body</span>
              <div class="ly-box">
                <span>.section</span>
                <div class="ly-box">
                  <span>.section-header</span>
                </div>
                <div class="ly-box">
                  <span>.section-body</span>
                  <div class="ly-box">
                    <span>.card</span>
                  </div>
                </div>
              </div>
              <div class="ly-box">
                <span>.section</span>
                <div class="ly-box">
                  <span>.card</span>
                </div>
                <div class="ly-box">
                  <span>.card</span>
                </div>
              </div>
              <div class="ly-box">
                <span>.section</span>
              </div>
            </div>
            <div class="ly-box">
              <span>.content-footer</span>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!-- content-footer 버튼이 플로팅일 경우 btn-floating 추가
            ex) class="content category floating" --&gt;
      &lt;div
        id="content"
        class="content category"
      &gt;
        &lt;div class="content-header" /&gt;
        &lt;div class="content-body"&gt;
          &lt;section class="section"&gt;
            &lt;div class="section-header" /&gt;
            &lt;div class="section-body"&gt;
              &lt;div class="card" /&gt;
            &lt;/div&gt;
          &lt;/section&gt;
          &lt;section class="section"&gt;
            &lt;div class="card" /&gt;
          &lt;/section&gt;
        &lt;/div&gt;
        &lt;div class="content-footer" /&gt;
      &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-auto">
          <h3>Modal layout</h3>
          <ul class="list-dot">
            <li>제목 태그는 h3 부터 시작합니다.</li>
          </ul>
        </div>
        <div class="col" />
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
  .ly-box {
    padding: 1.6rem 2rem;
    border: 1px solid #ccc;
    +.ly-box {
      margin-top: 1rem;
    }
    .ly-box {
      margin-top: 1rem;
    }
    .ly-box-body {
      min-height: 48rem;
    }
  }
  .ly-box-wrap {
    display: none;
    width: 100%;
    @media(min-width: 415px) {
      display: block;
      width: 36rem;
      height: 74rem;
    }
  }
</style>
