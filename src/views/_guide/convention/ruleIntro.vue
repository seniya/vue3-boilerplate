<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>환경 정의</h3>
          <table class="table">
            <tbody>
              <tr>
                <th>문서 및 버전</th>
                <td>HTML, SCSS, VUE</td>
              </tr>
              <tr>
                <th>인코딩</th>
                <td>UTF-8</td>
              </tr>
              <tr>
                <th>웹 유형</th>
                <td>Mobile Web App</td>
              </tr>
              <tr>
                <th>해상도 범위</th>
                <td>Android 기준 : 360 * 740 (Galaxy S8)<br>iOS 기준 : 375 * 812 (iPhone X)</td>
              </tr>
              <tr>
                <th>최적화 대응</th>
                <td>태블릿 미지원, 가로 화면 미지원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>파일/폴더 규칙</h3>
          <ul class="list">
            <li>스네이크 표기법(underbar_nate)을 사용한다.</li>
          </ul>
          <div class="table-scroll">
            <table class="table">
              <thead>
                <tr>
                  <th colspan="2">
                    분류 폴더
                  </th>
                  <th>구분 폴더</th>
                  <th>파일 이름</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    views
                  </td>
                  <td>카테고리별</td>
                  <td>*.vue</td>
                  <td>페이지</td>
                </tr>
                <tr>
                  <td colspan="2">
                    components
                  </td>
                  <td />
                  <td>*.vue</td>
                  <td>컴포넌트</td>
                </tr>
                <tr>
                  <td rowspan="5">
                    assets
                  </td>
                  <td>scss</td>
                  <td />
                  <td>_common.scss<br>_font.scss<br>_layout.scss<br>_reset.scss<br>_util.scss<br>_value.scss<br>style.scss<br></td>
                  <td>공통<br>글꼴<br>레이아웃<br>리셋<br>유틸<br>정의<br>전체스타일</td>
                </tr>
                <tr>
                  <td class="td-line">
                    fonts
                  </td>
                  <td>SpoqaHanSansNeo</td>
                  <td>.eot / .woff / .ttp / .otf</td>
                  <td>글꼴</td>
                </tr>
                <tr>
                  <td
                    rowspan="2"
                    class="td-line"
                  >
                    images
                  </td>
                  <td rowspan="2">
                    common<br>mydata<br>payfan<br>prepay
                  </td>
                  <td>.gif / .jpg / .png</td>
                  <td>공통이미지<br>카테고리별 이미지</td>
                </tr>
                <tr>
                  <td class="td-line">
                    @.gif / @.jpg / @.png
                  </td>
                  <td>임시 이미지</td>
                </tr>
                <tr>
                  <td class="td-line">
                    libs
                  </td>
                  <td />
                  <td>@a11y-kit/vue-tabs<br>@splidejs/vue-splide<br>@vue-a11y/focus-loop<br>@webzlodimir/vue-bottom-sheet<br>prismjs<br>vue-axe<br>vue-infinite-loading<br>vue-simple-range-slider</td>
                  <td>탭<br>슬라이드<br>접근성 포커스<br>스와이프 팝업<br>가이드<br>접근성 검사<br>인피니티 스크롤<br>범위 슬라이더</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
</style>
