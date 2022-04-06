<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>List</h3>
          <section class="view-section mb16">
            <!-- overview -->
            <h4 class="mb8">
              Overview
            </h4>
            <p class="mb8">
              1. list-group 클래스가 있는 태그에 <span class="fc-blue">line</span> 클래스 추가 시 회색 선이 있는 리스트가 된다.<br>
              ex) &lt;ul class="list-group <span class="fc-blue">line</span>"&gt;
            </p>
            <p>
              2. list-group 클래스가 있는 태그에 item-gap-24 등의 사이즈를 넣으면 상하 여백이 숫자 사이즈에 맞게 조절된다.<br>
              * 기본 사이즈 - list-group line: 20px, list-group: 16px)<br>
              * 옵션 사이즈 - 8, 10, 12, 14, 16, 20, 22, 24, 28, 32 (_component.scss에 필요한 사이즈가 있으면 더 추가 가능)
            </p>
            <p>
              ex) &lt;ul class="list-group line <span class="fc-blue">item-gap-32</span>" &gt;
            </p>
          </section>
          <!-- list type - 한줄 -->
          <h4 class="fs-20">
            로고 아이콘 + 한줄
          </h4>
          <div class="view-exam">
            <ul class="list-group line">
              <li class="list-item">
                <div
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-sm">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_28_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-left">
                    <span class="item-title fw-regular">주거래 우대 통장</span>
                  </span>
                  <span class="item-right">
                    <span class="item-title">
                      <span class="item-title-money">40,000,000</span>
                      <span class="money-unit">원</span>
                    </span>
                  </span>
                </div>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-sm">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_28_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-left">
                    <span class="item-title fw-regular">주거래 우대 통장</span>
                  </span>
                  <span class="item-right">
                    <span class="item-title-arrow">
                      <span class="item-title-money">40,000,000</span>
                      <span class="money-unit">원</span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;!-- 로고 아이콘 + 한줄 --&gt;
      &lt;ul class="list-group line"&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-sm"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_28_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title fw-regular"&gt;주거래 우대 통장&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-title"&gt;
                &lt;span class="item-title-money"&gt;40,000,000&lt;/span&gt;
                &lt;span class="money-unit"&gt;원&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-sm"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_28_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title fw-regular"&gt;주거래 우대 통장&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-title-arrow"&gt;
                &lt;span class="item-title-money"&gt;40,000,000&lt;/span&gt;
                &lt;span class="money-unit"&gt;원&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
                </code>
            </pre>
          </div>
          <!-- list type - 한줄 //-->
          <!-- list type - 두줄 -->
          <h4 class="fs-20">
            로고 아이콘 + 두줄
          </h4>
          <div class="view-exam">
            <ul class="list-group line item-gap-24">
              <li class="list-item">
                <div
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-md">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-left">
                    <span class="item-title">신한 무지 만능계좌</span>
                    <span class="item-text">
                      110-456-8554
                    </span>
                  </span>
                </div>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-md">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-left">
                    <span class="item-title">신한은행 정기 예금</span>
                    <span class="item-text">
                      <span class="sub-text">기본 1.70% ~ 2.10%</span>
                      <span class="sub-text">12개월 기준 세전</span>
                    </span>
                  </span>
                  <span class="item-right">
                    <span class="item-title-arrow" />
                  </span>
                </a>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-md">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-left">
                    <span class="item-title">신한 무지 만능계좌<span class="title-gray">에서 출금</span></span>
                    <span class="item-text">
                      110-456-8554
                    </span>
                  </span>
                  <span class="item-right">
                    <span class="item-title-arrow arrow-bottom" />
                  </span>
                </a>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-md">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-full">
                    <span class="item-flex">
                      <span class="item-left">
                        <span class="item-title">신한카드</span>
                      </span>
                      <span class="item-right">
                        <span class="item-title-arrow">
                          <span class="item-title-money">40,000,000</span>
                          <span class="money-unit">원</span>
                        </span>
                      </span>
                    </span>
                    <span class="item-flex">
                      <span class="item-left">
                        <span class="item-text">신한은행 110-2446-84532</span>
                      </span>
                    </span>
                  </span>
                </a>
              </li>
              <li class="list-item">
                <div
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-md">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-full">
                    <span class="item-flex">
                      <span class="item-left">
                        <span class="item-title">현금</span>
                      </span>
                      <span class="item-right">
                        <span class="item-title">
                          <span class="item-title-money">200,000</span>
                          <span class="money-unit">원</span>
                        </span>
                      </span>
                    </span>
                    <span class="item-flex">
                      <span class="item-left">
                        <span class="item-text">1월 용돈</span>
                      </span>
                    </span>
                  </span>
                </div>
              </li>
              <li class="list-item">
                <div
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-md">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-left">
                    <span class="item-title">아현 푸르지오 2차</span>
                    <span class="item-text">서울 특별시 마포구 아현동</span>
                  </span>
                  <span class="item-right">
                    <button
                      type="button"
                      class="btn btn-line3 btn-xs"
                    >
                      <span class="fc-red">확인</span>
                    </button>
                  </span>
                </div>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area item-flex"
                >
                  <span class="item-icon">
                    <span class="icon-size-sm">
                      <img
                        src="~@/assets/images/common/icons/symbol/icon_28_bank.png"
                        alt=""
                      >
                    </span>
                  </span>
                  <span class="item-left">
                    <span class="item-title fw-regular">네이버페이</span>
                  </span>
                  <span class="item-right">
                    <span class="item-title-arrow"><span class="item-title-money">200,000</span><span class="money-unit">원</span></span>
                  </span>
                </a>
                <div class="item-area-bottom">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                  >
                    <span>금리인하 신청하기</span>
                  </button>
                </div>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area"
                >
                  <span class="item-flex">
                    <span class="item-icon">
                      <span class="icon-size-md">
                        <img
                          src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                          alt=""
                        >
                      </span>
                    </span>
                    <span class="item-left">
                      <span class="item-title">직장인 신용대출</span>
                      <span class="item-hashtag">
                        <span>#해외결제</span>
                        <span class="active">#모바일전용</span>
                      </span>
                    </span>
                    <span class="item-right align-self-top">
                      <span class="item-title-arrow" />
                    </span>
                  </span>
                  <span class="item-area-bottom type2">
                    <span class="item-div-area">
                      <span class="item-div">
                        <span class="item-text fc-666">금리 연</span>
                        <span class="item-title-lg mt4">4.8~26.4%</span>
                      </span>
                      <span class="item-div">
                        <span class="item-text fc-666">최대</span>
                        <span class="item-title-lg mt4">1억원</span>
                      </span>
                    </span>
                    <span class="item-text-sm mt8 text-gray">준법감시인 심의필 2009-000 (0000.00.00 현재)</span>
                  </span>
                </a>
              </li>
              <li class="list-item">
                <div
                  class="item-area"
                >
                  <span class="item-flex">
                    <span class="item-icon align-self-top">
                      <span class="icon-size-md">
                        <img
                          src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                          alt=""
                        >
                      </span>
                    </span>
                    <span class="item-full">
                      <span class="item-title">신한생명[무]신한인터넷보험(갱신형)</span>
                      <span class="item-text">
                        처음 보험료 그대로, 비갱신 형으로 최대 80세
                        까지 든든하게(80세 만기 선택 시, 90일 면책)
                      </span>
                      <span class="item-text-sm mt12 text-gray">준법감시인 심의필 2009-000 (0000.00.00 현재)</span>
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;!-- 로고 아이콘 + 두줄 --&gt;
      &lt;ul class="list-group line item-gap-24"&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-md"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title"&gt;신한 무지 만능계좌&lt;/span&gt;
              &lt;span class="item-text"&gt;
                110-456-8554
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-md"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title"&gt;신한은행 정기 예금&lt;/span&gt;
              &lt;span class="item-text"&gt;
                &lt;span class="sub-text"&gt;기본 1.70% ~ 2.10%&lt;/span&gt;
                &lt;span class="sub-text"&gt;12개월 기준 세전&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-title-arrow" /&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-md"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title"&gt;신한 무지 만능계좌&lt;span class="title-gray"&gt;에서 출금&lt;/span&gt;&lt;/span&gt;
              &lt;span class="item-text"&gt;
                110-456-8554
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-title-arrow arrow-bottom" /&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-md"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-full"&gt;
              &lt;span class="item-flex"&gt;
                &lt;span class="item-left"&gt;
                  &lt;span class="item-title"&gt;신한카드&lt;/span&gt;
                &lt;/span&gt;
                &lt;span class="item-right"&gt;
                  &lt;span class="item-title-arrow"&gt;
                    &lt;span class="item-title-money"&gt;40,000,000&lt;/span&gt;
                    &lt;span class="money-unit"&gt;원&lt;/span&gt;
                  &lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-flex"&gt;
                &lt;span class="item-left"&gt;
                  &lt;span class="item-text"&gt;신한은행 110-2446-84532&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-md"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-full"&gt;
              &lt;span class="item-flex"&gt;
                &lt;span class="item-left"&gt;
                  &lt;span class="item-title"&gt;현금&lt;/span&gt;
                &lt;/span&gt;
                &lt;span class="item-right"&gt;
                  &lt;span class="item-title"&gt;
                    &lt;span class="item-title-money"&gt;200,000&lt;/span&gt;
                    &lt;span class="money-unit"&gt;원&lt;/span&gt;
                  &lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-flex"&gt;
                &lt;span class="item-left"&gt;
                  &lt;span class="item-text"&gt;1월 용돈&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-md"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title"&gt;아현 푸르지오 2차&lt;/span&gt;
              &lt;span class="item-text"&gt;서울 특별시 마포구 아현동&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;button
                type="button"
                class="btn btn-line3 btn-xs"
              &gt;
                &lt;span class="fc-red"&gt;확인&lt;/span&gt;
              &lt;/button&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area item-flex"
          &gt;
            &lt;span class="item-icon"&gt;
              &lt;span class="icon-size-sm"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/icon_28_bank.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title fw-regular"&gt;네이버페이&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-title-arrow"&gt;&lt;span class="item-title-money"&gt;200,000&lt;/span&gt;&lt;span class="money-unit"&gt;원&lt;/span&gt;&lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
          &lt;div class="item-area-bottom"&gt;
            &lt;button
              type="button"
              class="btn btn-secondary btn-sm"
            &gt;
              &lt;span&gt;금리인하 신청하기&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area"
          &gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-icon"&gt;
                &lt;span class="icon-size-md"&gt;
                  &lt;img
                    src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                    alt=""
                  &gt;
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-title"&gt;직장인 신용대출&lt;/span&gt;
                &lt;span class="item-hashtag"&gt;
                  &lt;span&gt;#해외결제&lt;/span&gt;
                  &lt;span class="active"&gt;#모바일전용&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right align-self-top"&gt;
                &lt;span class="item-title-arrow" /&gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-area-bottom type2"&gt;
              &lt;span class="item-div-area"&gt;
                &lt;span class="item-div"&gt;
                  &lt;span class="item-text fc-666"&gt;금리 연&lt;/span&gt;
                  &lt;span class="item-title-lg mt4"&gt;4.8~26.4%&lt;/span&gt;
                &lt;/span&gt;
                &lt;span class="item-div"&gt;
                  &lt;span class="item-text fc-666"&gt;최대&lt;/span&gt;
                  &lt;span class="item-title-lg mt4"&gt;1억원&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-text-sm mt8 text-gray"&gt;준법감시인 심의필 2009-000 (0000.00.00 현재)&lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area"
          &gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-icon align-self-top"&gt;
                &lt;span class="icon-size-md"&gt;
                  &lt;img
                    src="~@/assets/images/common/icons/symbol/icon_36_bank.png"
                    alt=""
                  &gt;
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-full"&gt;
                &lt;span class="item-title"&gt;신한생명[무]신한인터넷보험(갱신형)&lt;/span&gt;
                &lt;span class="item-text"&gt;
                  처음 보험료 그대로, 비갱신 형으로 최대 80세
                  까지 든든하게(80세 만기 선택 시, 90일 면책)
                &lt;/span&gt;
                &lt;span class="item-text-sm mt12 text-gray"&gt;준법감시인 심의필 2009-000 (0000.00.00 현재)&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
                </code>
            </pre>
          </div>
          <!-- list type - 두줄 //-->
          <!-- list type2 - 한줄 -->
          <h4 class="fs-20">
            아이콘X + 한줄
          </h4>
          <div class="view-exam">
            <ul class="list-group line">
              <li class="list-item">
                <div
                  class="item-area item-flex"
                >
                  <span class="item-left">
                    <span class="item-title fw-regular">할인</span>
                  </span>
                  <span class="item-right">
                    <span class="item-title">
                      <span class="item-title-money">500</span>
                      <span class="money-unit">원</span>
                    </span>
                  </span>
                </div>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area item-flex"
                >
                  <span class="item-left">
                    <span class="item-title fw-regular">무이자</span>
                  </span>
                  <span class="item-right">
                    <span class="item-title-arrow">
                      <span class="item-title-money">2,500</span>
                      <span class="money-unit">원</span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <!-- -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;!-- 아이콘X + 한줄 --&gt;
      &lt;ul class="list-group line"&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area item-flex"
          &gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title fw-regular"&gt;할인&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-title"&gt;
                &lt;span class="item-title-money"&gt;500&lt;/span&gt;
                &lt;span class="money-unit"&gt;원&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area item-flex"
          &gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title fw-regular"&gt;무이자&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-title-arrow"&gt;
                &lt;span class="item-title-money"&gt;2,500&lt;/span&gt;
                &lt;span class="money-unit"&gt;원&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
                </code>
            </pre>
          </div>
          <!-- list type2 - 한줄 // -->
          <!-- list type2 - 두줄 -->
          <h4 class="fs-20">
            아이콘X + 두줄
          </h4>
          <div class="view-exam">
            <ul class="list-group line">
              <li class="list-item">
                <div
                  class="item-area"
                >
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-title">유엔가든(UN가든)</span>
                    </span>
                    <span class="item-right">
                      <span class="item-title">
                        <span class="item-title-money">456,000</span>
                        <span class="money-unit">원</span>
                      </span>
                    </span>
                  </span>
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-text">2020.11.18 14:00</span>
                    </span>
                  </span>
                </div>
              </li>
              <li class="list-item">
                <div
                  class="item-area"
                >
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-title">유엔가든(UN가든)</span>
                    </span>
                    <span class="item-right">
                      <span class="item-title">
                        <span class="item-title-money">456,000</span>
                        <span class="money-unit">원</span>
                      </span>
                    </span>
                  </span>
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-text">
                        <span class="sub-text">14:00</span>
                        <span class="sub-text">신한Pay머니</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <span class="item-text fc-blue">받기완료</span>
                    </span>
                  </span>
                </div>
              </li>
              <li class="list-item">
                <div
                  class="item-area"
                >
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-title">유엔가든(UN가든)</span>
                    </span>
                    <span class="item-right">
                      <span class="item-title line-through">
                        <span class="item-title-money">456,000</span>
                        <span class="money-unit">원</span>
                      </span>
                    </span>
                  </span>
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-text">
                        <span class="sub-text">14:00</span>
                        <span class="sub-text">신한Pay머니</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <span class="item-text fc-red">보내기거절(11.18 14:00)</span>
                    </span>
                  </span>
                </div>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area"
                >
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-title">유엔가든(UN가든)</span>
                    </span>
                    <span class="item-right">
                      <span class="item-title-arrow">
                        <span class="item-title-money">456,000</span>
                        <span class="money-unit">원</span>
                      </span>
                    </span>
                  </span>
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-text">
                        14:00:25
                      </span>
                    </span>
                    <span class="item-right">
                      <span class="item-text">잔액 40,000,000원</span>
                    </span>
                  </span>
                </a>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area"
                >
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-title">유엔가든(UN가든)</span>
                    </span>
                    <span class="item-right">
                      <span class="item-title-arrow arrow-bottom">
                        <span class="item-title-money">456,000</span>
                        <span class="money-unit">원</span>
                      </span>
                    </span>
                  </span>
                  <span class="item-flex">
                    <span class="item-left">
                      <span class="item-text">
                        <span class="sub-text">14:00</span>
                        <span class="sub-text">신한Pay머니</span>
                      </span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;!-- 아이콘X + 두줄 --&gt;
      &lt;ul class="list-group line"&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area"
          &gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-title"&gt;유엔가든(UN가든)&lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right"&gt;
                &lt;span class="item-title"&gt;
                  &lt;span class="item-title-money"&gt;456,000&lt;/span&gt;
                  &lt;span class="money-unit"&gt;원&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-text"&gt;2020.11.18 14:00&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area"
          &gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-title"&gt;유엔가든(UN가든)&lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right"&gt;
                &lt;span class="item-title"&gt;
                  &lt;span class="item-title-money"&gt;456,000&lt;/span&gt;
                  &lt;span class="money-unit"&gt;원&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-text"&gt;
                  &lt;span class="sub-text"&gt;14:00&lt;/span&gt;
                  &lt;span class="sub-text"&gt;신한Pay머니&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right"&gt;
                &lt;span class="item-text fc-blue"&gt;받기완료&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area"
          &gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-title"&gt;유엔가든(UN가든)&lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right"&gt;
                &lt;span class="item-title line-through"&gt;
                  &lt;span class="item-title-money"&gt;456,000&lt;/span&gt;
                  &lt;span class="money-unit"&gt;원&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-text"&gt;
                  &lt;span class="sub-text"&gt;14:00&lt;/span&gt;
                  &lt;span class="sub-text"&gt;신한Pay머니&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right"&gt;
                &lt;span class="item-text fc-red"&gt;보내기거절(11.18 14:00)&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area"
          &gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-title"&gt;유엔가든(UN가든)&lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right"&gt;
                &lt;span class="item-title-arrow"&gt;
                  &lt;span class="item-title-money"&gt;456,000&lt;/span&gt;
                  &lt;span class="money-unit"&gt;원&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-text"&gt;
                  14:00:25
                &lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right"&gt;
                &lt;span class="item-text"&gt;잔액 40,000,000원&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area"
          &gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-title"&gt;유엔가든(UN가든)&lt;/span&gt;
              &lt;/span&gt;
              &lt;span class="item-right"&gt;
                &lt;span class="item-title-arrow arrow-bottom"&gt;
                  &lt;span class="item-title-money"&gt;456,000&lt;/span&gt;
                  &lt;span class="money-unit"&gt;원&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-flex"&gt;
              &lt;span class="item-left"&gt;
                &lt;span class="item-text"&gt;
                  &lt;span class="sub-text"&gt;14:00&lt;/span&gt;
                  &lt;span class="sub-text"&gt;신한Pay머니&lt;/span&gt;
                &lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
                </code>
            </pre>
          </div>
          <!-- list type2 - 두줄 // -->
          <!-- list type3 - 왼쪽 -->
          <h4 class="fs-20">
            카드 왼쪽
          </h4>
          <div class="view-exam">
            <ul class="list-group line">
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area item-flex"
                >
                  <span class="item-icon-card-vertical">
                    <img
                      src="~@/assets/images/@sample/@list_card.png"
                      alt=""
                    >
                  </span>
                  <span class="item-left">
                    <span class="item-title">신한카드 Deep Oil</span>
                    <span class="item-text">
                      주유비 연간 최대 36만원 할인
                    </span>
                  </span>
                  <span class="item-right">
                    <span class="item-title-arrow" />
                  </span>
                </a>
              </li>
              <li class="list-item">
                <div
                  class="item-area item-flex"
                >
                  <span class="item-icon-card-horizontal">
                    <img
                      src="~@/assets/images/@sample/@list_card.png"
                      alt=""
                    >
                  </span>
                  <span class="item-left">
                    <span class="item-title">Deep Dream</span>
                    <span class="item-text">
                      <span class="sub-text">신한카드</span>
                      <span class="sub-text">546-8490-1120</span>
                    </span>
                  </span>
                </div>
              </li>
            </ul>
            <!-- -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;!-- 카드 왼쪽  --&gt;
       &lt;ul class="list-group line"&gt;
         &lt;li class="list-item"&gt;
           &lt;a
            href="javascript:;"
            title=""
            class="item-area item-flex"
          &gt;
             &lt;span class="item-icon-card-vertical"&gt;
               &lt;img
                src="~@/assets/images/@sample/@list_card.png"
                alt=""
              &gt;
             &lt;/span&gt;
             &lt;span class="item-left"&gt;
               &lt;span class="item-title"&gt;신한카드 Deep Oil &lt;/span&gt;
               &lt;span class="item-text"&gt;
                주유비 연간 최대 36만원 할인
               &lt;/span&gt;
             &lt;/span&gt;
             &lt;span class="item-right"&gt;
               &lt;span class="item-title-arrow" /&gt;
             &lt;/span&gt;
           &lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="list-item"&gt;
           &lt;div
            class="item-area item-flex"
          &gt;
             &lt;span class="item-icon-card-horizontal"&gt;
               &lt;img
                src="~@/assets/images/@sample/@list_card.png"
                alt=""
              &gt;
             &lt;/span&gt;
             &lt;span class="item-left"&gt;
               &lt;span class="item-title"&gt;Deep Dream &lt;/span&gt;
               &lt;span class="item-text"&gt;
                 &lt;span class="sub-text"&gt;신한카드 &lt;/span&gt;
                 &lt;span class="sub-text"&gt;546-8490-1120 &lt;/span&gt;
               &lt;/span&gt;
             &lt;/span&gt;
           &lt;/div&gt;
         &lt;/li&gt;
       &lt;/ul&gt;
                </code>
            </pre>
          </div>
          <!-- list type3 - 왼쪽 // -->
          <!-- list type3 - 오른쪽 -->
          <h4 class="fs-20">
            카드 오른쪽
          </h4>
          <div class="view-exam">
            <ul class="list-group line">
              <li class="list-item">
                <a
                  href="javascript:;"
                  title=""
                  class="item-area item-flex"
                >
                  <span class="item-left">
                    <span class="item-title">신한 Deep Dream</span>
                    <span class="item-text">
                      본인 2715
                    </span>
                  </span>
                  <span class="item-right">
                    <span class="item-icon-card-vertical">
                      <img
                        src="~@/assets/images/@sample/@list_card.png"
                        alt=""
                      >
                    </span>
                  </span>
                </a>
              </li>
              <li class="list-item">
                <div
                  class="item-area item-flex"
                >
                  <span class="item-left">
                    <span class="item-title">Deep Dream</span>
                    <span class="item-text">
                      <uu-icon
                        icon="absence"
                        size="16"
                        color="red"
                        class="sub-text-icon"
                      />
                      <span class="sub-text fc-red">터치결제 미지원 카드</span>
                    </span>
                  </span>
                  <span class="item-right">
                    <span class="item-icon-card-horizontal">
                      <img
                        src="~@/assets/images/@sample/@list_card.png"
                        alt=""
                      >
                    </span>
                  </span>
                </div>
              </li>
            </ul>
            <!-- -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;!-- 카드 오른쪽  --&gt;
      &lt;ul class="list-group line"&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            title=""
            class="item-area item-flex"
          &gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title"&gt;신한 Deep Dream&lt;/span&gt;
              &lt;span class="item-text"&gt;
                본인 2715
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-icon-card-vertical"&gt;
                &lt;img
                  src="~@/assets/images/@sample/@list_card.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="list-item"&gt;
          &lt;div
            class="item-area item-flex"
          &gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title"&gt;Deep Dream&lt;/span&gt;
              &lt;span class="item-text"&gt;
                &lt;uu-icon
                  icon="absence"
                  size="16"
                  color="red"
                  class="sub-text-icon"
                /&gt;
                &lt;span class="sub-text fc-red"&gt;터치결제 미지원 카드&lt;/span&gt;
              &lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-icon-card-horizontal"&gt;
                &lt;img
                  src="~@/assets/images/@sample/@list_card.png"
                  alt=""
                &gt;
              &lt;/span&gt;
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
                </code>
            </pre>
          </div>
          <!-- list type3 - 오른쪽 // -->
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
