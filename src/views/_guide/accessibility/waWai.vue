<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>WAI-ARIA</h3>
          <h4>코드 들여쓰기</h4>
          <ul class="list-dot">
            <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 4칸으로 설정한다.</li>
          </ul>
          <pre class="language-html">
            <code>
      &lt;!doctype html&gt;
      &lt;html lang="ko"&gt;
          &lt;head&gt;
          &lt;/head&gt;
          &lt;body&gt;
              &lt;div id="wrap"&gt;
              &lt;/div&gt;
          &lt;/body&gt;
      &lt;/html&gt;
            </code>
        </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>주석/빈줄</h4>
          <ul class="list-dot">
            <li>
              가독성을 고려하여 빈 줄을 추가한다. 단, 1줄을 초과하지 않는다.
            </li>
          </ul>
          <pre>
            <code class="language-html">
      &lt;!-- header --&gt;
      &lt;header id="header"&gt;
      &lt;/header&gt;
      &lt;!-- header// --&gt;

      &lt;!-- content --&gt;
      &lt;div id="content"&gt;
      &lt;/div&gt;
      &lt;!-- //content --&gt;

      &lt;!-- footer --&gt;
      &lt;footer id="footer"&gt;
      &lt;/footer&gt;
      &lt;!-- footer// --&gt;
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>CSS 기본 규칙</h3>
          <h4>들여쓰기/줄 바꿈</h4>
          <ul class="list-dot">
            <li>CSS 코드 작성시 들여쓰기는 허용하지 않는다.</li>
            <li>
              공통으로 사용되는 속성의 선택자간의 줄 바꿈은 허용하며 이 외의
              줄바꿈은 허용하지 않는다.
            </li>
          </ul>
          <pre>
            <code class="language-css">
      div.class-name {font-size: 1.25em;letter-spacing: -1px;margin: 0.5em 0 0 0;}

      .class-name,
      .class-name .child-class {background: url(../img/img.gif) no-repeat;}
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
          <h4>주석/빈줄</h4>
          <ul class="list-dot">
            <li>종료 주석은 작성하지 않는다.</li>
            <li>
              코드 그룹 간 1줄의 빈 줄을 허용한다. 단, 1줄을 초과하지 않는다.
            </li>
          </ul>
          <pre>
            <code class="language-css">
      /* title */
      .title-type1 {margin:30px 0 10px 0;}

      /* description */
      .desc1 {padding:2px 0 0 15px;font-size:0.917em;}
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>선택자</h4>
          <ul class="list-dot">
            <li>
              '*' 공통 선택자는 웹 페이지의 성능을 저하를 가져오기 때문에 가급적
              사용하지 않는다.
            </li>
          </ul>
          <pre>
            <code class="language-css">
      /* 잘못된 예 */
      * {margin:0;padding:0}
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>속성의 선언 순서</h4>
          <table class="table">
            <caption>
              CSS 속성선언순서
            </caption>
            <colgroup>
              <col style="width: 20%">
              <col style="width: 20%">
              <col>
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>속성</th>
                <th>속성 값</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="3">
                  1. 위치
                </td>
                <td>position</td>
                <td>absolute, fixed, relative, static</td>
              </tr>
              <tr>
                <td class="td-line">
                  top, right, bottom, left
                </td>
                <td>length(px), %</td>
              </tr>
              <tr>
                <td class="td-line">
                  z-index
                </td>
                <td>number</td>
              </tr>
              <tr>
                <td rowspan="2">
                  2. 넘침/흐름
                </td>
                <td>overflow</td>
                <td>visible, hidden, scroll, auto</td>
              </tr>
              <tr>
                <td class="td-line">
                  float
                </td>
                <td>left, right, none</td>
              </tr>
              <tr>
                <td rowspan="2">
                  3. 표시
                </td>
                <td>display</td>
                <td>
                  none, block, inline, inline-block, inline-table, list-item,
                  table, table-caption, table-cell, table-column,
                  table-column-group, table-footer-group, table-header-group,
                  table-row, table-row-group, flex
                </td>
              </tr>
              <tr>
                <td class="td-line">
                  visibility
                </td>
                <td>visible, hidden, collapse</td>
              </tr>
              <tr>
                <td rowspan="4">
                  4. 크기/간격
                </td>
                <td>width, max-width, min-width</td>
                <td>auto, length(px, em, rem), %</td>
              </tr>
              <tr>
                <td class="td-line">
                  height, max-height, min-height
                </td>
                <td>auto, length(px, em, rem), %</td>
              </tr>
              <tr>
                <td class="td-line">
                  margin
                </td>
                <td>auto, length(px, em, rem), %</td>
              </tr>
              <tr>
                <td class="td-line">
                  padding
                </td>
                <td>auto, length(px, em, rem), %</td>
              </tr>
              <tr>
                <td rowspan="4">
                  5. 글꼴/정렬
                </td>
                <td>font</td>
                <td>
                  font-style, font-variant, font-weigth, font-size/line-height,
                  font-family, letter-spacing
                </td>
              </tr>
              <tr>
                <td class="td-line">
                  color
                </td>
                <td>hex_number</td>
              </tr>
              <tr>
                <td class="td-line">
                  text-align
                </td>
                <td>left, right, center, justify</td>
              </tr>
              <tr>
                <td class="td-line">
                  vertical-align
                </td>
                <td>top, middle, bottom, baseline</td>
              </tr>
              <tr>
                <td rowspan="3">
                  6. 박스모양
                </td>
                <td>border</td>
                <td>border-width, border-style, border-color</td>
              </tr>
              <tr>
                <td class="td-line">
                  border-radius
                </td>
                <td>length(px, em, rem), %</td>
              </tr>
              <tr>
                <td class="td-line">
                  background
                </td>
                <td>
                  background-color, background-image, background-repeat,
                  background-attachment, background-position, background-size
                </td>
              </tr>
              <tr>
                <td>7. 기타</td>
                <td />
                <td>언급되지 않은 속성들은 후순위로 적용한다.</td>
              </tr>
            </tbody>
          </table>
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
