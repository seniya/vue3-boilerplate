<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>표기법</h3>
          <div class="table-scroll">
            <table class="table">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>구분</th>
                  <th>번호</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-l">
                    ID Selector
                  </td>
                  <td class="align-l">
                    카멜표기법 (camelCase)
                  </td>
                  <td class="align-l">
                    한 자리수 (생략가능, 2, 3)
                  </td>
                  <td class="align-l">
                    errorMesage, controlCenter, controlCenter2
                  </td>
                </tr>
                <tr>
                  <td class="align-l">
                    Class Selector
                  </td>
                  <td class="align-l">
                    스네이크 표기법 (hyphen-nate)
                  </td>
                  <td class="align-l">
                    한 자리수 (생략가능, 2, 3)
                  </td>
                  <td class="align-l">
                    tab-page, table-type1, table-type2
                  </td>
                </tr>
                <tr>
                  <td class="align-l">
                    Image
                  </td>
                  <td class="align-l">
                    스네이크 표기법 (underbar_nate)
                  </td>
                  <td class="align-l">
                    두 자리수 (01, 02, 03)
                  </td>
                  <td class="align-l">
                    icon_arr1_wh.png, icon_symbol_card1.png
                  </td>
                </tr>
                <tr>
                  <td class="align-l">
                    파일 및 폴더
                  </td>
                  <td class="align-l">
                    스네이크 표기법 (underbar_nate)
                  </td>
                  <td class="align-l">
                    두 자리수 (01, 02, 03)
                  </td>
                  <td class="align-l">
                    cyber_center
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>ID Selector</h3>
          <ul class="list-dot">
            <li>
              최상위 레이아웃, 폼 요소, 책갈피를 제외하고 id를 사용하지
              않는다.
            </li>
          </ul>
          <table class="table">
            <caption>
              예약어
            </caption>
            <colgroup>
              <col
                span="2"
                style="width: 25%"
              >
              <col>
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>예약어</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="5">
                  사이트 레이아웃
                </td>
                <td>#wrap</td>
                <td>사이트 전체영역</td>
              </tr>
              <tr>
                <td class="td-line">
                  #aside
                </td>
                <td>사이드 영역</td>
              </tr>
              <tr>
                <td class="td-line">
                  #header
                </td>
                <td>머리글 영역</td>
              </tr>
              <tr>
                <td class="td-line">
                  #content
                </td>
                <td>본문 영역</td>
              </tr>
              <tr>
                <td class="td-line">
                  #footer
                </td>
                <td>바닥글 영역</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>Class Selector</h3>
          <ul class="list-dot">
            <li>체인 선택자의 개수는 3개까지 권장한다.</li>
            <li>클래스 예약어는 상황에 맞게 선택적으로 참고한다.</li>
            <li>
              레이아웃에 한하여 정의된 예시이며, 자세한 내용은 설계가이드를
              참고한다.
            </li>
          </ul>
          <table class="table">
            <caption>
              예약어
            </caption>
            <colgroup>
              <col
                span="2"
                style="width: 25%"
              >
              <col>
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>예약어</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="4">
                  네비게이션
                </td>
                <td>.nav</td>
                <td>전체 메뉴</td>
              </tr>
              <tr>
                <td class="td-line">
                  .nav-main
                </td>
                <td>주 메뉴</td>
              </tr>
              <tr>
                <td class="td-line">
                  .nav-sub
                </td>
                <td>서브 메뉴 (Sub Navigation Bar)</td>
              </tr>
              <tr>
                <td class="td-line">
                  .aside
                </td>
                <td>사이드 메뉴</td>
              </tr>
              <tr>
                <td rowspan="3">
                  컨텐츠 레이아웃
                </td>
                <td>.content .category</td>
                <td>본문 영역</td>
              </tr>
              <tr>
                <td class="td-line">
                  .content-header
                </td>
                <td>본문 헤더 영역</td>
              </tr>
              <tr>
                <td class="td-line">
                  .content-body
                </td>
                <td>본문 내용 영역</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>이미지 네이밍</h3>
          <ul class="list-dot">
            <li>종류별로 스프라이트 방식을 적용한다.</li>
            <li>
              이미지 네이밍의 조합은 '형태_의미_순서_상태'의 순서로 조합한다.
            </li>
          </ul>
          <table class="table">
            <caption>
              예약어
            </caption>
            <colgroup>
              <col
                span="2"
                style="width: 25%"
              >
              <col>
            </colgroup>
            <thead>
              <tr>
                <th>분류</th>
                <th>파일명</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>버튼</td>
                <td>btn_</td>
                <td />
              </tr>
              <tr>
                <td>아이콘</td>
                <td>icon_</td>
                <td />
              </tr>
              <tr>
                <td>배경</td>
                <td>bg_</td>
                <td />
              </tr>
              <tr>
                <td>비주얼</td>
                <td>visual_</td>
                <td />
              </tr>
              <tr>
                <td>일반</td>
                <td>img_</td>
                <td />
              </tr>
              <tr>
                <td>임시</td>
                <td>@*</td>
                <td>
                  관리자나 사용자에 의해 등록될 이미지 영역으로 기본코딩을
                  위한 임시이미지
                </td>
              </tr>
            </tbody>
          </table>
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
