<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>VUE 기본문서</h3>
          <pre class="language-html">
              <code>
      &lt;template&gt;
        &lt;div&gt;

        &lt;/div&gt;
      &lt;/template&gt;

      &lt;script&gt;
        export default {

        }
      &lt;/script&gt;

      &lt;style lang="scss" scoped&gt;

      &lt;/style&gt;
              </code>
            </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>HTML 기본문서(/public/index.html)</h3>
          <h4>DOCTYPE HTML5선언</h4>
          <ul class="list-dot">
            <li>
              HTML5로 선언한다. DTD 선언시 앞에 공백이 오지 않도록 해야하며,
              문서 최상단에 선언 한다.
            </li>
          </ul>
          <pre class="language-html">
            <code>
      &lt;!DOCTYPE html&gt;
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>언어 정의</h4>
          <ul class="list-dot">
            <li>
              lang="ko"를 기본으로 표기하며 언어에 따라서 해당국가 언어로
              표기한다.
            </li>
            <li>
              <a
                href="https://www.w3schools.com/tags/ref_language_codes.asp"
                target="_blank"
                title="새창열림"
              >ISO Language Codes</a>
              (참고)
            </li>
          </ul>
          <pre class="language-html">
            <code>
      &lt;html lang="ko"&gt; /* Korean 한국 */
      &lt;html lang="ko"&gt; /* English 영어 */
      &lt;html lang="ja"&gt; /* Japanese 일본 */
      &lt;html lang="zh"&gt; /* Chinese 중국 */
      &lt;html lang="ru"&gt; /* Russian 러시아 */
      &lt;html lang="de"&gt; /* German 독일 */
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>인코딩 정의</h4>
          <ul class="list-dot">
            <li>
              charset="utf-8"를 기본값으로 사용하고, &lt;head>첫 번째에
              선언한다.
            </li>
          </ul>
          <pre>
            <code class="language-html">
      &lt;meta charset="utf-8" /&gt;
      &lt;meta charset="euc-kr" /&gt;
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>뷰포트 정의</h4>
          <pre>
            <code class="language-html">
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            </code>
          </pre>
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

<style lang="scss">
@import "@/assets/scss/guide.scss";
</style>
