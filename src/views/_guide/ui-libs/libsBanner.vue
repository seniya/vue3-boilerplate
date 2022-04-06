<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Banner</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4 class="view-title">
            일반배너(타 컨텐트 유도 배너)
          </h4>
          <!-- banner : 일반배너 -->
          <div class="view-exam">
            <!-- banner-area -->
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner-img"
                title="상세 화면 이동"
              >
                <span class="banner-visual">
                  <img
                    src="~@/assets/images/@sample/@visual_banner.png"
                    alt="추가 한도가 필요하신가요? 한도상향 신청하세요!"
                  >
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner-img"
                title="상세 화면 이동"
              >
                <span class="banner-visual">
                  <img
                    src="~@/assets/images/mydata/banner/banner_basic_money.png"
                    alt="금융사를 추가연결할 수 있어요. 마이데이터 연결하기"
                  >
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner-img"
                title="상세 화면 이동"
              >
                <span class="banner-visual">
                  <img
                    src="~@/assets/images/mydata/banner/banner_basic_file.png"
                    alt="내 데이터 상세내역 다운로드. 엑셀, CSV파일로 저장할 수 있어요."
                  >
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner-img"
                title="상세 화면 이동"
              >
                <span class="banner-visual">
                  <img
                    src="~@/assets/images/mydata/banner/banner_basic_revolving.png"
                    alt="리볼빙 신청하기. 이번달 결제할 금액이 부담스럽다면?"
                  >
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner-img"
                title="상세 화면 이동"
              >
                <span class="banner-visual">
                  <img
                    src="~@/assets/images/mydata/banner/banner_basic_bankbook.png"
                    alt="다른은행으로 송금하기. 오픈뱅킹으로 간편하게 이체하세요."
                  >
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner-img"
                title="상세 화면 이동"
              >
                <span class="banner-visual">
                  <img
                    src="~@/assets/images/mydata/banner/banner_basic_bankbook2.png"
                    alt="투자 자산현황 조회. 나의 투자 자산현황이 궁금하세요?"
                  >
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner-img"
                title="상세 화면 이동"
              >
                <span class="banner-visual">
                  <img
                    src="~@/assets/images/mydata/banner/banner_basic_bankbook3.png"
                    alt="연금 운용상품 조회하기. 든든한 미래를 미리 준비하려면?"
                  >
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner-img"
                title="상세 화면 이동"
              >
                <span class="banner-visual">
                  <img
                    src="~@/assets/images/mydata/banner/banner_basic_credit.png"
                    alt="신용정보 관리. 소중한 신용정보 손쉽게 관리해보세요."
                  >
                </span>
              </a>
            </div>
            <!-- // banner-area -->
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
    &lt;!-- 한도상향 --&gt;

    &lt;!-- banner-area --&gt;
    &lt;div class="banner-area"&gt;
      &lt;a href="javascript:;" class="banner-img" title="상세 화면 이동"&gt;
        &lt;span class="banner-visual"&gt;
          &lt;img
            src="~@/assets/images/@sample/@visual_banner.png"
            alt="추가 한도가 필요하신가요? 한도상향 신청하세요!"
          &gt;
        &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;!-- // banner-area --&gt;

    &lt;!-- 금융사 연동 --&gt;

    &lt;!-- banner-area --&gt;
    &lt;div class="banner-area"&gt;
      &lt;a href="javascript:;" class="banner-img" title="상세 화면 이동"&gt;
        &lt;span class="banner-visual"&gt;
          &lt;img
            src="~@/assets/images/mydata/banner/banner_basic_money.png"
            alt="금융사를 추가연결할 수 있어요. 마이데이터 연결하기"
          &gt;
        &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;!-- // banner-area --&gt;

    &lt;!-- 상세내역 다운로드 --&gt;

    &lt;!-- banner-area --&gt;
    &lt;div class="banner-area"&gt;
      &lt;a href="javascript:;" class="banner-img" title="상세 화면 이동"&gt;
        &lt;span class="banner-visual"&gt;
          &lt;img
            src="~@/assets/images/mydata/banner/banner_basic_file.png"
            alt="내 데이터 상세내역 다운로드. 엑셀, CSV파일로 저장할 수 있어요."
          &gt;
        &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;!-- // banner-area --&gt;

    &lt;!-- 리볼빙 신청하기 --&gt;

    &lt;!-- banner-area --&gt;
    &lt;div class="banner-area"&gt;
      &lt;a href="javascript:;" class="banner-img" title="상세 화면 이동"&gt;
        &lt;span class="banner-visual"&gt;
          &lt;img
            src="~@/assets/images/mydata/banner/banner_basic_revolving.png"
            alt="리볼빙 신청하기. 이번달 결제할 금액이 부담스럽다면?"
          &gt;
        &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;!-- // banner-area --&gt;

    &lt;!-- 다른은행 송금하기 --&gt;

    &lt;!-- banner-area --&gt;
    &lt;div class="banner-area"&gt;
      &lt;a href="javascript:;" class="banner-img" title="상세 화면 이동"&gt;
        &lt;span class="banner-visual"&gt;
          &lt;img
            src="~@/assets/images/mydata/banner/banner_basic_bankbook.png"
            alt="다른은행으로 송금하기. 오픈뱅킹으로 간편하게 이체하세요."
          &gt;
        &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;!-- // banner-area --&gt;

    &lt;!-- 투자 자산현황 조회 --&gt;

    &lt;!-- banner-area --&gt;
    &lt;div class="banner-area"&gt;
      &lt;a href="javascript:;" class="banner-img" title="상세 화면 이동"&gt;
        &lt;span class="banner-visual"&gt;
          &lt;img
            src="~@/assets/images/mydata/banner/banner_basic_bankbook2.png"
            alt="투자 자산현황 조회. 나의 투자 자산현황이 궁금하세요?"
          &gt;
        &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;!-- // banner-area --&gt;

    &lt;!-- 연금 운용상품 조회하기 --&gt;

    &lt;!-- banner-area --&gt;
    &lt;div class="banner-area"&gt;
      &lt;a href="javascript:;" class="banner-img" title="상세 화면 이동"&gt;
        &lt;span class="banner-visual"&gt;
          &lt;img
            src="~@/assets/images/mydata/banner/banner_basic_bankbook3.png"
            alt="연금 운용상품 조회하기. 든든한 미래를 미리 준비하려면?"
          &gt;
        &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;!-- // banner-area --&gt;

    &lt;!-- 신용정보 관리 --&gt;

    &lt;!-- banner-area --&gt;
    &lt;div class="banner-area"&gt;
      &lt;a href="javascript:;" class="banner-img" title="상세 화면 이동"&gt;
        &lt;span class="banner-visual"&gt;
          &lt;img
            src="~@/assets/images/mydata/banner/banner_basic_credit.png"
            alt="신용정보 관리. 소중한 신용정보 손쉽게 관리해보세요."
          &gt;
        &lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;!-- // banner-area --&gt;
              </code>
            </pre>
          </div>
          <!-- // banner : 일반배너 -->
        </div>
      </div>
      <!--  -->
      <div class="row">
        <div class="col-12">
          <h4>팁 조언 (사람일러스트 오른쪽)</h4>
          <div class="view-exam">
            <!-- banner-area -->
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_payment.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_calendar.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_asset.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_etc.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_bank.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_investment.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_insurance.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_pension.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_pay.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_loan.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_lease.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_point.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_card.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_car.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <br>
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner tip"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_house.png') + ')'}"
              >
                <span class="banner-cont">
                  <span>TIP텍스트영역입니다.<br>자산 지출관리 팁 영역 더미 텍스트</span>
                </span>
              </a>
            </div>
            <!-- // banner-area -->
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!--
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_payment.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_calendar.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_asset.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_etc.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_bank.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_investment.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_insurance.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_pension.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_pay.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_loan.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_lease.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_point.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_card.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_car.png') + ')'}"
      :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_house.png') + ')'}"
      --&gt;

      &lt;!-- banner-area --&gt;
      &lt;div class="banner-area"&gt;
        &lt;a
          href="javascript:;"
          class="banner tip"
          role="button"
          :style="{'backgroundImage': 'url(' + require('@/assets/images/mydata/banner/banner_tip_point.png') + ')'}"
        &gt;
          &lt;span class="banner-cont"&gt;
            &lt;span&gt;TIP텍스트영역입니다.&lt;br&gt;자산 지출관리 팁 영역 더미 텍스트&lt;/span&gt;
          &lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
      &lt;!-- // banner-area --&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="row">
        <div class="col-12">
          <h4>상단조언(사람일러스트 왼쪽)</h4>
          <div class="view-exam">
            <!-- banner : advice -->
            <div class="banner-area advice-banner-area">
              <a
                href="javascript:;"
                class="banner advice"
                role="button"
              >
                <span class="banner-visual visual-advice" />
                <span class="banner-cont">
                  <span><b>적금 만기가 곧 다가와요!</b><br>만기 후 예금 계좌로 전환해보세요.</span>
                </span>
                <uu-icon
                  icon="arrow1"
                  size="16"
                  color="gray"
                  direction="right"
                />
              </a>
            </div>
            <div class="banner-area advice-banner-area">
              <a
                href="javascript:;"
                class="banner advice"
                role="button"
              >
                <span class="banner-visual visual-advice2" />
                <span class="banner-cont">
                  <span><b>적금 만기가 곧 다가와요!</b><br>만기 후 예금 계좌로 전환해보세요.</span>
                </span>
                <uu-icon
                  icon="arrow1"
                  size="16"
                  color="gray"
                  direction="right"
                />
              </a>
            </div>
            <!-- // banner : advice -->
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!-- banner : advice --&gt;
      &lt;div class="banner-area advice-banner-area"&gt;
        &lt;a
          href="javascript:;"
          class="banner advice"
          role="button"
        &gt;
          &lt;span class="banner-visual visual-advice" /&gt;
          &lt;span class="banner-cont"&gt;
            &lt;span&gt;&lt;b&gt;적금 만기가 곧 다가와요!&lt;/b&gt;&lt;br&gt;만기 후 예금 계좌로 전환해보세요.&lt;/span&gt;
          &lt;/span&gt;
          &lt;uu-icon
            icon="arrow1"
            size="16"
            color="gray"
            direction="right"
          /&gt;
        &lt;/a&gt;
      &lt;/div&gt;
      &lt;!-- // banner : advice --&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="row">
        <div class="col-12">
          <h4>카드배너</h4>
          <div
            class="view-exam"
          >
            <!-- banner-area -->
            <div class="banner-area">
              <a
                href="javascript:;"
                class="banner theme"
                role="button"
                :style="{'backgroundImage': 'url(' + require('@/assets/images/@sample/@recommend_banner1.png') + ')'}"
              >
                <span class="label">테마</span>
                <span class="banner-text-box">
                  <span class="title">카드회사 직원들이<br>많이 사용하는 카드 BEST 3</span>
                  <span class="text">지금 바로 알짜 카드 알아보세요</span>
                </span>
              </a>
            </div>
            <div class="view-code">
              <pre>
              <code class="language-html">
      &lt;!-- banner-area --&gt;
      &lt;div class="banner-area"&gt;
        &lt;a
          href="javascript:;"
          class="banner theme" role="button"
          role="button"
          :style="{'backgroundImage': 'url(' + require('@/assets/images/@sample/@recommend_banner1.png') + ')'}"
        &gt;
          &lt;span class="label"&gt;테마&lt;/span&gt;
          &lt;span class="banner-text-box"&gt;
            &lt;span class="title"&gt;카드회사 직원들이&lt;br&gt;많이 사용하는 카드 BEST 3&lt;/span&gt;
            &lt;span class="text"&gt;지금 바로 알짜 카드 알아보세요&lt;/span&gt;
          &lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
      &lt;!-- // banner-area --&gt;
              </code>
            </pre>
            </div>
            <!-- // banner-area -->
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

<style lang="scss">
@import "@/assets/scss/guide.scss";
h4 {
  margin-top: 2rem;
  font-size: 1.8rem;
  font-weight: $fontMedium;
}
</style>
