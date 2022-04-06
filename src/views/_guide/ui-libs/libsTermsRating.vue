<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>
            동의등급제 약관전문
          </h3>
          <ul class="list-dot">
            <li>
              <a
                href="http://localhost:8080/#/mydata/AT2201"
                target="_blank"
                style="text-decoration: underline;color: #476eff"
              >http://localhost:8080/#/mydata/AT2201 (기본)</a>
            </li>
            <li>
              <a
                href="http://localhost:8080/#/mydata/AT2202"
                target="_blank"
                style="text-decoration: underline;color: #476eff"
              >http://localhost:8080/#/mydata/AT2202 (페이지네이션)</a>
            </li>
          </ul>
          <h3>Accordion Type - full Modal</h3>
          <div class="view-exam">
            <!-- 동의등급제 유형선택 -->
            <div class="rating-type-select">
              <!-- 동의등급제 타이틀 -->
              <div class="rating-type-title">
                <span>동의등급제 유형 선택</span>
                <uu-tooltip
                  top
                  center
                  width="205"
                >
                  <template v-slot:tooltip-content>
                    <p class="fw-medium">
                      선택동의 유형 선택
                    </p>
                    <ul class="mt4 list-dot-12 fc-333">
                      <li>
                        동의서 고지사항의 요약 동의서(고지사항 중 그 일부를
                        생략하거나 중요한 사항만을 발췌) 또는 전체 동의서 (고지
                        사항 전 항목을 표기)를 선택 할 수 있습니다.
                      </li>
                      <li class="mt6">
                        동의서 유형에 따라 노출되는
                        동의서 전문이 변경되며
                        동의항목 수는 유형에 상관없이 동일합니다.
                      </li>
                    </ul>
                  </template>
                </uu-tooltip>
              </div>
              <!-- // 동의등급제 타이틀 -->
              <!-- 동의등급제 라디오 -->
              <div class="form-group btn-type type3 rating-type-radio">
                <div class="form-radio">
                  <label for="agreeSummary">
                    <input
                      id="agreeSummary"
                      class="form-radio-input"
                      type="radio"
                      name="btnChckbox"
                      checked
                    >
                    <span class="form-radio-label icon-name">요약동의서로 볼게요</span>
                  </label>
                  <label for="agreeDetail">
                    <input
                      id="agreeDetail"
                      class="form-radio-input"
                      type="radio"
                      name="btnChckbox"
                    >
                    <span class="form-radio-label icon-name">전체동의서로 볼게요</span>
                  </label>
                </div>
              </div>
              <!-- // 동의등급제 라디오 -->
            </div>
            <!-- // 동의등급제 유형선택 -->
            <div class="agreement full">
              <form>
                <!-- 약관 전체 체크 - 1depth check-all : 동의등급제 -->
                <div class="terms-check-all">
                  <div class="form-group">
                    <div class="form-checkbox">
                      <label>
                        <input
                          class="form-checkbox-input"
                          type="checkbox"
                          name="defaultcheckbox"
                        >
                        <span class="form-checkbox-all">
                          <span class="form-checkbox-btn"><span /></span>
                          <span class="form-checkbox-label">Depth 1</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="consent-rating-area">
                    <p class="rating-title">
                      동의등급제 안내
                    </p>
                    <div class="rating-graph">
                      <span class="rating level1">안심</span>
                      <span class="rating level2">다소안심</span>
                      <span class="rating level3">보통</span>
                      <span class="rating level4">신중</span>
                      <span class="rating level5">주의</span>
                    </div>
                    <p class="rating-text">
                      동의등급제는 개인(신용) 선택적 동의 항목에 대해
                      사생활의 비밀과 자유를 침해할 위험, 이익이나 혜택,
                      동의 내용의 명확성 등을 고려하여 5가지 등급을
                      부여하는 제도입니다.
                    </p>
                  </div>
                </div>
                <!-- // 1depth check-all : 동의등급제 -->
                <!-- 약관 상세 영역  -->
                <div class="terms">
                  <!-- 2depth check-accordion -->
                  <uu-accordion class="terms-depth2">
                    <uu-accordionitem
                      hasbtn
                      active
                    >
                      <!-- 2depth check-btn -->
                      <template v-slot:accordion-header>
                        <div class="form-group">
                          <div class="form-checkbox">
                            <label>
                              <input
                                class="form-checkbox-input"
                                type="checkbox"
                                name="defaultcheckbox"
                              >
                              <span class="form-checkbox-btn"><span /></span>
                              <span class="form-checkbox-label">
                                <span class="label-text">오픈뱅킹 서비스 이용약관</span>
                              </span></label>
                          </div>
                        </div>
                      </template>
                      <!-- // 2depth check-btn -->
                      <!-- 3depth -->
                      <template v-slot:accordion-content>
                        <div class="terms-depth3">
                          <ul class="list-group">
                            <!-- 3depth check-btn -->
                            <li class="list-item">
                              <div
                                class="item-area item-flex"
                              >
                                <div class="item-left">
                                  <div class="form-group">
                                    <div class="form-checkbox">
                                      <label>
                                        <input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        >
                                        <span class="form-checkbox-btn type2">
                                          <span />
                                        </span>
                                        <span class="form-checkbox-label">
                                          <span class="label-text">[선택] Depth3 일반</span>
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="item-right">
                                  <button
                                    type="button"
                                    class="btn-arrow-link"
                                  >
                                    <uu-icon
                                      icon="arrow1"
                                      direction="right"
                                      size="16"
                                    />
                                  </button>
                                </div>
                              </div>
                            </li>
                            <!-- // 3depth check-btn -->
                            <!-- 3depth check-btn -->
                            <li class="list-item">
                              <div
                                class="item-area item-flex"
                              >
                                <div class="item-left">
                                  <div class="form-group">
                                    <div class="form-checkbox">
                                      <label>
                                        <input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        >
                                        <span class="form-checkbox-btn type2">
                                          <span />
                                        </span>
                                        <span class="form-checkbox-label rating-label">
                                          <span class="label-text">[선택] Depth3 일반</span>
                                          <!-- level1 : 안심, level2 : 다소안심, level3 : 보통, level4 : 신중, level5 : 주의 -->
                                          <span class="rating-tag level2">다소안심</span>
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="item-right">
                                  <button
                                    type="button"
                                    class="btn-arrow-link"
                                  >
                                    <uu-icon
                                      icon="arrow1"
                                      direction="right"
                                      size="16"
                                    />
                                  </button>
                                </div>
                              </div>
                              <div class="terms-depth4">
                                <div class="item-bg-box grid">
                                  <div class="form-group">
                                    <div class="form-checkbox">
                                      <label>
                                        <input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        >
                                        <span class="form-checkbox-btn type2">
                                          <span />
                                        </span>
                                        <span class="form-checkbox-label">전화</span>
                                      </label>
                                    </div>
                                    <div class="form-checkbox">
                                      <label>
                                        <input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        >
                                        <span class="form-checkbox-btn type2">
                                          <span />
                                        </span>
                                        <span class="form-checkbox-label">문자메시지</span>
                                      </label>
                                    </div>
                                    <div class="form-checkbox">
                                      <label>
                                        <input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        >
                                        <span class="form-checkbox-btn type2">
                                          <span />
                                        </span>
                                        <span class="form-checkbox-label">서면</span>
                                      </label>
                                    </div>
                                    <div class="form-checkbox">
                                      <label>
                                        <input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        >
                                        <span class="form-checkbox-btn type2">
                                          <span />
                                        </span>
                                        <span class="form-checkbox-label">메일</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <!-- // 3depth check-btn -->
                          </ul>
                        </div>
                        <!-- 3depth check-accordion -->
                        <uu-accordion
                          class="terms-depth3"
                          type="type2"
                        >
                          <uu-accordionitem
                            hasbtn
                            active
                          >
                            <!-- 3depth check-btn -->
                            <template v-slot:accordion-header>
                              <div class="form-group">
                                <div class="form-checkbox">
                                  <label>
                                    <input
                                      class="form-checkbox-input"
                                      type="checkbox"
                                      name="subcheckbox"
                                    >
                                    <span class="form-checkbox-btn type2">
                                      <span />
                                    </span>
                                    <span class="form-checkbox-label rating-label">
                                      <span class="label-text">[선택] Depth3 아코디언</span>
                                      <!-- level1 : 안심, level2 : 다소안심, level3 : 보통, level4 : 신중, level5 : 주의 -->
                                      <span class="rating-tag level2">다소안심</span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </template>
                            <!-- // 3depth check-btn -->
                            <!-- 4depth -->
                            <template v-slot:accordion-content>
                              <div class="terms-depth4">
                                <ul class="list-group">
                                  <!-- 4depth check-btn -->
                                  <li class="list-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label"><span class="label-text">[필수] Depth4 일반</span></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn -->
                                  <!-- 4depth check-btn -->
                                  <li class="list-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label"><span class="label-text">[필수] Depth4 일반</span></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn -->
                                  <!-- 4depth 내용보기 버튼 -->
                                  <li class="list-item">
                                    <div class="item-area item-flex">
                                      <div class="item-left text-right">
                                        <button
                                          type="button"
                                          class="btn btn-underline"
                                        >
                                          <span class="text-xs">내용보기</span>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth 내용보기 버튼 -->
                                </ul>
                              </div>
                            </template>
                            <!-- // 4depth -->
                          </uu-accordionitem>
                        </uu-accordion>
                        <!-- // 3depth check-accordion -->
                      </template>
                    </uu-accordionitem>
                  </uu-accordion>
                  <!-- // 2depth check-accordion -->
                  <!-- 2depth check-accordion -->
                  <uu-accordion class="terms-depth2">
                    <uu-accordionitem
                      hasbtn
                      active
                    >
                      <!-- 2depth check-btn -->
                      <template v-slot:accordion-header>
                        <div class="form-group">
                          <div class="form-checkbox">
                            <label>
                              <input
                                class="form-checkbox-input"
                                type="checkbox"
                                name="defaultcheckbox"
                              >
                              <span class="form-checkbox-btn"><span /></span>
                              <span class="form-checkbox-label">
                                <span class="label-text">[필수] 개인(신용)정보 필수적 동의</span>
                              </span></label>
                          </div>
                        </div>
                      </template>
                      <!-- // 2depth check-btn -->
                      <!-- 3depth -->
                      <template v-slot:accordion-content>
                        <!-- 3depth check-accordion -->
                        <uu-accordion
                          class="terms-depth3"
                          type="type2"
                        >
                          <uu-accordionitem
                            hasbtn
                            active
                          >
                            <!-- 3depth check-btn -->
                            <template v-slot:accordion-header>
                              <div class="form-group">
                                <div class="form-checkbox">
                                  <label>
                                    <input
                                      class="form-checkbox-input"
                                      type="checkbox"
                                      name="subcheckbox"
                                    >
                                    <span class="form-checkbox-btn type2">
                                      <span />
                                    </span>
                                    <span class="form-checkbox-label rating-label">
                                      <span class="label-text">[필수] 개인(신용)정보 필수 수집•이용에 관한 동의 -
                                        카드상품 안내 및 이용권유를 위한 수집•이용</span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </template>
                            <!-- // 3depth check-btn -->
                            <!-- 4depth -->
                            <template v-slot:accordion-content>
                              <div class="terms-depth4">
                                <ul class="list-group">
                                  <!-- 4depth check-btn -->
                                  <li class="list-item">
                                    <div class="terms-depth4">
                                      <div class="item-bg-box mt0 mb8">
                                        <p class="text">
                                          귀하는 개인(신용)정보 수집•이용,,, 조회•제공 동의에 대해 거부하실 수 있습니다. 다만, 본, 계약과 관련하여 신한카드(신한비씨카드의 경우 비씨카드㈜포함, 이하 같습니다.)에 대한 개인(신용)정보 수집•이용, 조회•제공에 관한 동의는 상거래관계의 설정, 유지에 필수적이거나, 상거래관계에 따라 귀하에게 제공되는 서비스와 직접적으로 관련된 필수적 사항이므로, 아래의 사항에 동의하셔야만 (금융)거래관계의 설정 및 유지가 가능합니다.
                                        </p>
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label">고유식별 수집•이용 동의</span>
                                            </label>
                                          </div>
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label">개인신용정보 수집•이용 동의</span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn -->
                                  <!-- 4depth 내용보기 버튼 -->
                                  <li class="list-item">
                                    <div class="item-area item-flex">
                                      <div class="item-left text-right">
                                        <button
                                          type="button"
                                          class="btn btn-underline"
                                        >
                                          <span class="text-xs">내용보기</span>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth 내용보기 버튼 -->
                                </ul>
                              </div>
                            </template>
                            <!-- // 4depth -->
                          </uu-accordionitem>
                        </uu-accordion>
                        <!-- // 3depth check-accordion -->
                        <!-- 3depth check-accordion -->
                        <uu-accordion
                          class="terms-depth3"
                          type="type2"
                        >
                          <uu-accordionitem
                            hasbtn
                            active
                          >
                            <!-- 3depth check-btn -->
                            <template v-slot:accordion-header>
                              <div class="form-group">
                                <div class="form-checkbox">
                                  <label>
                                    <input
                                      class="form-checkbox-input"
                                      type="checkbox"
                                      name="subcheckbox"
                                    >
                                    <span class="form-checkbox-btn type2">
                                      <span />
                                    </span>
                                    <span class="form-checkbox-label">
                                      <span class="label-text">[필수] 개인(신용)정보 필수 제공에 관한 동의</span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </template>
                            <!-- // 3depth check-btn -->
                            <!-- 4depth -->
                            <template v-slot:accordion-content>
                              <div class="terms-depth4">
                                <p class="depth4-title">
                                  (1) 종합신용정보집중기관 및 신용정보회사에 개인(신용)정보 제공
                                </p>
                                <ul class="list-group">
                                  <!-- 4depth check-btn -->
                                  <li class="list-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label"><span class="label-text">고유식별 수집•이용 동의</span></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn -->
                                  <!-- 4depth check-btn -->
                                  <li class="list-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label"><span class="label-text">고유식별 수집•이용 동의</span></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn -->
                                  <!-- 4depth 내용보기 버튼 -->
                                  <li class="list-item">
                                    <div class="item-area item-flex pb8">
                                      <div class="item-left text-right">
                                        <button
                                          type="button"
                                          class="btn btn-underline"
                                        >
                                          <span class="text-xs">내용보기</span>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth 내용보기 버튼 -->
                                </ul>

                                <p class="depth4-title">
                                  (2) 여신금융협회 등에 개인(신용)정보 제공
                                </p>
                                <ul class="list-group">
                                  <!-- 4depth check-btn -->
                                  <li class="list-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label"><span class="label-text">개인신용정보 수집•이용 동의</span></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn -->
                                  <!-- 4depth check-btn -->
                                  <li class="list-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label"><span class="label-text">개인신용정보 수집•이용 동의</span></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn -->
                                  <!-- 4depth 내용보기 버튼 -->
                                  <li class="list-item">
                                    <div class="item-area item-flex pb8">
                                      <div class="item-left text-right">
                                        <button
                                          type="button"
                                          class="btn btn-underline"
                                        >
                                          <span class="text-xs">내용보기</span>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth 내용보기 버튼 -->

                                  <!-- 4depth check-btn -->
                                  <li class="list-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label rating-label"><span class="label-text">상품 서비스 안내)] 전자적 전송매체를 통한 광고성 정보의 수신을 동의하시겠습니까?</span></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="terms-depth4">
                                      <div class="item-bg-box grid">
                                        <div class="form-group">
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label">전체</span>
                                            </label>
                                          </div>
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label">서면</span>
                                            </label>
                                          </div>
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label">이메일</span>
                                            </label>
                                          </div>
                                          <div class="form-checkbox">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label">전화</span>
                                            </label>
                                          </div>
                                          <div class="form-checkbox w-100">
                                            <label>
                                              <input
                                                class="form-checkbox-input"
                                                type="checkbox"
                                                name="subcheckbox"
                                              >
                                              <span class="form-checkbox-btn type2">
                                                <span />
                                              </span>
                                              <span class="form-checkbox-label">문자메시지(카카오톡 포함)</span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <p class="depth4-text">
                                        ※ 카드이용 안내에 동의하셨더라도 신용정보의 이용 및 보호에 관한 법류에 따라 이용권유 목적의 연락에 대한 중단을 언제라도 카드사에 요청할 수 있습니다.(대표전화: 1544-7000 / 홈페이지: www.shinhancard.com)<br><br>

                                        ※ 갱신 및 상품서비스 변경 안내 등 필수 고지사항은 상기 동의 대상에서 제외됩니다.
                                      </p>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn -->
                                </ul>
                              </div>
                            </template>
                            <!-- // 4depth -->
                          </uu-accordionitem>
                        </uu-accordion>
                        <!-- // 3depth check-accordion -->
                      </template>
                    </uu-accordionitem>
                  </uu-accordion>
                  <!-- // 2depth check-accordion -->
                </div>
                <!-- // 약관 상세 영역  -->
              </form>
            </div>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!-- 동의등급제 유형선택 --&gt;
      &lt;div class="rating-type-select"&gt;
        &lt;!-- 동의등급제 타이틀 --&gt;
        &lt;div class="rating-type-title"&gt;
          &lt;span&gt;동의등급제 유형 선택&lt;/span&gt;
          &lt;uu-tooltip
            top
            center
            width="205"
          &gt;
            &lt;template v-slot:tooltip-content&gt;
              &lt;p class="fw-medium"&gt;
                선택동의 유형 선택
              &lt;/p&gt;
              &lt;ul class="mt4 list-dot-12 fc-333"&gt;
                &lt;li&gt;
                  동의서 고지사항의 요약 동의서(고지사항 중 그 일부를
                  생략하거나 중요한 사항만을 발췌) 또는 전체 동의서 (고지
                  사항 전 항목을 표기)를 선택 할 수 있습니다.
                &lt;/li&gt;
                &lt;li class="mt6"&gt;
                  동의서 유형에 따라 노출되는
                  동의서 전문이 변경되며
                  동의항목 수는 유형에 상관없이 동일합니다.
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/template&gt;
          &lt;/uu-tooltip&gt;
        &lt;/div&gt;
        &lt;!-- // 동의등급제 타이틀 --&gt;
        &lt;!-- 동의등급제 라디오 --&gt;
        &lt;div class="form-group btn-type type3 rating-type-radio"&gt;
          &lt;div class="form-radio"&gt;
            &lt;label for="agreeSummary"&gt;
              &lt;input
                id="agreeSummary"
                class="form-radio-input"
                type="radio"
                name="btnChckbox"
                checked
              &gt;
              &lt;span class="form-radio-label icon-name"&gt;요약동의서로 볼게요&lt;/span&gt;
            &lt;/label&gt;
            &lt;label for="agreeDetail"&gt;
              &lt;input
                id="agreeDetail"
                class="form-radio-input"
                type="radio"
                name="btnChckbox"
              &gt;
              &lt;span class="form-radio-label icon-name"&gt;전체동의서로 볼게요&lt;/span&gt;
            &lt;/label&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- // 동의등급제 라디오 --&gt;
      &lt;/div&gt;
      &lt;!-- // 동의등급제 유형선택 --&gt;
      &lt;div class="agreement full"&gt;
        &lt;form&gt;
          &lt;!-- 약관 전체 체크 - 1depth check-all : 동의등급제 --&gt;
          &lt;div class="terms-check-all"&gt;
            &lt;div class="form-group"&gt;
              &lt;div class="form-checkbox"&gt;
                &lt;label&gt;
                  &lt;input
                    class="form-checkbox-input"
                    type="checkbox"
                    name="defaultcheckbox"
                  &gt;
                  &lt;span class="form-checkbox-all"&gt;
                    &lt;span class="form-checkbox-btn"&gt;&lt;span /&gt;&lt;/span&gt;
                    &lt;span class="form-checkbox-label"&gt;Depth 1&lt;/span&gt;
                  &lt;/span&gt;
                &lt;/label&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="consent-rating-area"&gt;
              &lt;p class="rating-title"&gt;
                동의등급제 안내
              &lt;/p&gt;
              &lt;div class="rating-graph"&gt;
                &lt;span class="rating level1"&gt;안심&lt;/span&gt;
                &lt;span class="rating level2"&gt;다소안심&lt;/span&gt;
                &lt;span class="rating level3"&gt;보통&lt;/span&gt;
                &lt;span class="rating level4"&gt;신중&lt;/span&gt;
                &lt;span class="rating level5"&gt;주의&lt;/span&gt;
              &lt;/div&gt;
              &lt;p class="rating-text"&gt;
                동의등급제는 개인(신용) 선택적 동의 항목에 대해
                사생활의 비밀과 자유를 침해할 위험, 이익이나 혜택,
                동의 내용의 명확성 등을 고려하여 5가지 등급을
                부여하는 제도입니다.
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;!-- // 1depth check-all : 동의등급제 --&gt;
          &lt;!-- 약관 상세 영역  --&gt;
          &lt;div class="terms"&gt;
            &lt;!-- 2depth check-accordion --&gt;
            &lt;uu-accordion class="terms-depth2"&gt;
              &lt;uu-accordionitem
                hasbtn
                active
              &gt;
                &lt;!-- 2depth check-btn --&gt;
                &lt;template v-slot:accordion-header&gt;
                  &lt;div class="form-group"&gt;
                    &lt;div class="form-checkbox"&gt;
                      &lt;label&gt;
                        &lt;input
                          class="form-checkbox-input"
                          type="checkbox"
                          name="defaultcheckbox"
                        &gt;
                        &lt;span class="form-checkbox-btn"&gt;&lt;span /&gt;&lt;/span&gt;
                        &lt;span class="form-checkbox-label"&gt;
                          &lt;span class="label-text"&gt;오픈뱅킹 서비스 이용약관&lt;/span&gt;
                        &lt;/span&gt;&lt;/label&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/template&gt;
                &lt;!-- // 2depth check-btn --&gt;
                &lt;!-- 3depth --&gt;
                &lt;template v-slot:accordion-content&gt;
                  &lt;div class="terms-depth3"&gt;
                    &lt;ul class="list-group"&gt;
                      &lt;!-- 3depth check-btn --&gt;
                      &lt;li class="list-item"&gt;
                        &lt;div
                          class="item-area item-flex"
                        &gt;
                          &lt;div class="item-left"&gt;
                            &lt;div class="form-group"&gt;
                              &lt;div class="form-checkbox"&gt;
                                &lt;label&gt;
                                  &lt;input
                                    class="form-checkbox-input"
                                    type="checkbox"
                                    name="subcheckbox"
                                  &gt;
                                  &lt;span class="form-checkbox-btn type2"&gt;
                                    &lt;span /&gt;
                                  &lt;/span&gt;
                                  &lt;span class="form-checkbox-label"&gt;
                                    &lt;span class="label-text"&gt;[선택] Depth3 일반&lt;/span&gt;
                                  &lt;/span&gt;
                                &lt;/label&gt;
                              &lt;/div&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                          &lt;div class="item-right"&gt;
                            &lt;button
                              type="button"
                              class="btn-arrow-link"
                            &gt;
                              &lt;uu-icon
                                icon="arrow1"
                                direction="right"
                                size="16"
                              /&gt;
                            &lt;/button&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                      &lt;/li&gt;
                      &lt;!-- // 3depth check-btn --&gt;
                      &lt;!-- 3depth check-btn --&gt;
                      &lt;li class="list-item"&gt;
                        &lt;div
                          class="item-area item-flex"
                        &gt;
                          &lt;div class="item-left"&gt;
                            &lt;div class="form-group"&gt;
                              &lt;div class="form-checkbox"&gt;
                                &lt;label&gt;
                                  &lt;input
                                    class="form-checkbox-input"
                                    type="checkbox"
                                    name="subcheckbox"
                                  &gt;
                                  &lt;span class="form-checkbox-btn type2"&gt;
                                    &lt;span /&gt;
                                  &lt;/span&gt;
                                  &lt;span class="form-checkbox-label rating-label"&gt;
                                    &lt;span class="label-text"&gt;[선택] Depth3 일반&lt;/span&gt;
                                    &lt;!-- level1 : 안심, level2 : 다소안심, level3 : 보통, level4 : 신중, level5 : 주의 --&gt;
                                    &lt;span class="rating-tag level2"&gt;다소안심&lt;/span&gt;
                                  &lt;/span&gt;
                                &lt;/label&gt;
                              &lt;/div&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                          &lt;div class="item-right"&gt;
                            &lt;button
                              type="button"
                              class="btn-arrow-link"
                            &gt;
                              &lt;uu-icon
                                icon="arrow1"
                                direction="right"
                                size="16"
                              /&gt;
                            &lt;/button&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="terms-depth4"&gt;
                          &lt;div class="item-bg-box grid"&gt;
                            &lt;div class="form-group"&gt;
                              &lt;div class="form-checkbox"&gt;
                                &lt;label&gt;
                                  &lt;input
                                    class="form-checkbox-input"
                                    type="checkbox"
                                    name="subcheckbox"
                                  &gt;
                                  &lt;span class="form-checkbox-btn type2"&gt;
                                    &lt;span /&gt;
                                  &lt;/span&gt;
                                  &lt;span class="form-checkbox-label"&gt;전화&lt;/span&gt;
                                &lt;/label&gt;
                              &lt;/div&gt;
                              &lt;div class="form-checkbox"&gt;
                                &lt;label&gt;
                                  &lt;input
                                    class="form-checkbox-input"
                                    type="checkbox"
                                    name="subcheckbox"
                                  &gt;
                                  &lt;span class="form-checkbox-btn type2"&gt;
                                    &lt;span /&gt;
                                  &lt;/span&gt;
                                  &lt;span class="form-checkbox-label"&gt;문자메시지&lt;/span&gt;
                                &lt;/label&gt;
                              &lt;/div&gt;
                              &lt;div class="form-checkbox"&gt;
                                &lt;label&gt;
                                  &lt;input
                                    class="form-checkbox-input"
                                    type="checkbox"
                                    name="subcheckbox"
                                  &gt;
                                  &lt;span class="form-checkbox-btn type2"&gt;
                                    &lt;span /&gt;
                                  &lt;/span&gt;
                                  &lt;span class="form-checkbox-label"&gt;서면&lt;/span&gt;
                                &lt;/label&gt;
                              &lt;/div&gt;
                              &lt;div class="form-checkbox"&gt;
                                &lt;label&gt;
                                  &lt;input
                                    class="form-checkbox-input"
                                    type="checkbox"
                                    name="subcheckbox"
                                  &gt;
                                  &lt;span class="form-checkbox-btn type2"&gt;
                                    &lt;span /&gt;
                                  &lt;/span&gt;
                                  &lt;span class="form-checkbox-label"&gt;메일&lt;/span&gt;
                                &lt;/label&gt;
                              &lt;/div&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                      &lt;/li&gt;
                      &lt;!-- // 3depth check-btn --&gt;
                    &lt;/ul&gt;
                  &lt;/div&gt;
                  &lt;!-- 3depth check-accordion --&gt;
                  &lt;uu-accordion
                    class="terms-depth3"
                    type="type2"
                  &gt;
                    &lt;uu-accordionitem
                      hasbtn
                      active
                    &gt;
                      &lt;!-- 3depth check-btn --&gt;
                      &lt;template v-slot:accordion-header&gt;
                        &lt;div class="form-group"&gt;
                          &lt;div class="form-checkbox"&gt;
                            &lt;label&gt;
                              &lt;input
                                class="form-checkbox-input"
                                type="checkbox"
                                name="subcheckbox"
                              &gt;
                              &lt;span class="form-checkbox-btn type2"&gt;
                                &lt;span /&gt;
                              &lt;/span&gt;
                              &lt;span class="form-checkbox-label rating-label"&gt;
                                &lt;span class="label-text"&gt;[선택] Depth3 아코디언&lt;/span&gt;
                                &lt;!-- level1 : 안심, level2 : 다소안심, level3 : 보통, level4 : 신중, level5 : 주의 --&gt;
                                &lt;span class="rating-tag level2"&gt;다소안심&lt;/span&gt;
                              &lt;/span&gt;
                            &lt;/label&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                      &lt;/template&gt;
                      &lt;!-- // 3depth check-btn --&gt;
                      &lt;!-- 4depth --&gt;
                      &lt;template v-slot:accordion-content&gt;
                        &lt;div class="terms-depth4"&gt;
                          &lt;ul class="list-group"&gt;
                            &lt;!-- 4depth check-btn --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div
                                class="item-area item-flex"
                              &gt;
                                &lt;div class="item-left"&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;&lt;span class="label-text"&gt;[필수] Depth4 일반&lt;/span&gt;&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn --&gt;
                            &lt;!-- 4depth check-btn --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div
                                class="item-area item-flex"
                              &gt;
                                &lt;div class="item-left"&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;&lt;span class="label-text"&gt;[필수] Depth4 일반&lt;/span&gt;&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn --&gt;
                            &lt;!-- 4depth 내용보기 버튼 --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div class="item-area item-flex"&gt;
                                &lt;div class="item-left text-right"&gt;
                                  &lt;button
                                    type="button"
                                    class="btn btn-underline"
                                  &gt;
                                    &lt;span class="text-xs"&gt;내용보기&lt;/span&gt;
                                  &lt;/button&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth 내용보기 버튼 --&gt;
                          &lt;/ul&gt;
                        &lt;/div&gt;
                      &lt;/template&gt;
                      &lt;!-- // 4depth --&gt;
                    &lt;/uu-accordionitem&gt;
                  &lt;/uu-accordion&gt;
                  &lt;!-- // 3depth check-accordion --&gt;
                &lt;/template&gt;
              &lt;/uu-accordionitem&gt;
            &lt;/uu-accordion&gt;
            &lt;!-- // 2depth check-accordion --&gt;
            &lt;!-- 2depth check-accordion --&gt;
            &lt;uu-accordion class="terms-depth2"&gt;
              &lt;uu-accordionitem
                hasbtn
                active
              &gt;
                &lt;!-- 2depth check-btn --&gt;
                &lt;template v-slot:accordion-header&gt;
                  &lt;div class="form-group"&gt;
                    &lt;div class="form-checkbox"&gt;
                      &lt;label&gt;
                        &lt;input
                          class="form-checkbox-input"
                          type="checkbox"
                          name="defaultcheckbox"
                        &gt;
                        &lt;span class="form-checkbox-btn"&gt;&lt;span /&gt;&lt;/span&gt;
                        &lt;span class="form-checkbox-label"&gt;
                          &lt;span class="label-text"&gt;[필수] 개인(신용)정보 필수적 동의&lt;/span&gt;
                        &lt;/span&gt;&lt;/label&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/template&gt;
                &lt;!-- // 2depth check-btn --&gt;
                &lt;!-- 3depth --&gt;
                &lt;template v-slot:accordion-content&gt;
                  &lt;!-- 3depth check-accordion --&gt;
                  &lt;uu-accordion
                    class="terms-depth3"
                    type="type2"
                  &gt;
                    &lt;uu-accordionitem
                      hasbtn
                      active
                    &gt;
                      &lt;!-- 3depth check-btn --&gt;
                      &lt;template v-slot:accordion-header&gt;
                        &lt;div class="form-group"&gt;
                          &lt;div class="form-checkbox"&gt;
                            &lt;label&gt;
                              &lt;input
                                class="form-checkbox-input"
                                type="checkbox"
                                name="subcheckbox"
                              &gt;
                              &lt;span class="form-checkbox-btn type2"&gt;
                                &lt;span /&gt;
                              &lt;/span&gt;
                              &lt;span class="form-checkbox-label rating-label"&gt;
                                &lt;span class="label-text"&gt;[필수] 개인(신용)정보 필수 수집•이용에 관한 동의 -
                                  카드상품 안내 및 이용권유를 위한 수집•이용&lt;/span&gt;
                              &lt;/span&gt;
                            &lt;/label&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                      &lt;/template&gt;
                      &lt;!-- // 3depth check-btn --&gt;
                      &lt;!-- 4depth --&gt;
                      &lt;template v-slot:accordion-content&gt;
                        &lt;div class="terms-depth4"&gt;
                          &lt;ul class="list-group"&gt;
                            &lt;!-- 4depth check-btn --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div class="terms-depth4"&gt;
                                &lt;div class="item-bg-box mt0 mb8"&gt;
                                  &lt;p class="text"&gt;
                                    귀하는 개인(신용)정보 수집•이용,,, 조회•제공 동의에 대해 거부하실 수 있습니다. 다만, 본, 계약과 관련하여 신한카드(신한비씨카드의 경우 비씨카드㈜포함, 이하 같습니다.)에 대한 개인(신용)정보 수집•이용, 조회•제공에 관한 동의는 상거래관계의 설정, 유지에 필수적이거나, 상거래관계에 따라 귀하에게 제공되는 서비스와 직접적으로 관련된 필수적 사항이므로, 아래의 사항에 동의하셔야만 (금융)거래관계의 설정 및 유지가 가능합니다.
                                  &lt;/p&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;고유식별 수집•이용 동의&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;개인신용정보 수집•이용 동의&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn --&gt;
                            &lt;!-- 4depth 내용보기 버튼 --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div class="item-area item-flex"&gt;
                                &lt;div class="item-left text-right"&gt;
                                  &lt;button
                                    type="button"
                                    class="btn btn-underline"
                                  &gt;
                                    &lt;span class="text-xs"&gt;내용보기&lt;/span&gt;
                                  &lt;/button&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth 내용보기 버튼 --&gt;
                          &lt;/ul&gt;
                        &lt;/div&gt;
                      &lt;/template&gt;
                      &lt;!-- // 4depth --&gt;
                    &lt;/uu-accordionitem&gt;
                  &lt;/uu-accordion&gt;
                  &lt;!-- // 3depth check-accordion --&gt;
                  &lt;!-- 3depth check-accordion --&gt;
                  &lt;uu-accordion
                    class="terms-depth3"
                    type="type2"
                  &gt;
                    &lt;uu-accordionitem
                      hasbtn
                      active
                    &gt;
                      &lt;!-- 3depth check-btn --&gt;
                      &lt;template v-slot:accordion-header&gt;
                        &lt;div class="form-group"&gt;
                          &lt;div class="form-checkbox"&gt;
                            &lt;label&gt;
                              &lt;input
                                class="form-checkbox-input"
                                type="checkbox"
                                name="subcheckbox"
                              &gt;
                              &lt;span class="form-checkbox-btn type2"&gt;
                                &lt;span /&gt;
                              &lt;/span&gt;
                              &lt;span class="form-checkbox-label"&gt;
                                &lt;span class="label-text"&gt;[필수] 개인(신용)정보 필수 제공에 관한 동의&lt;/span&gt;
                              &lt;/span&gt;
                            &lt;/label&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                      &lt;/template&gt;
                      &lt;!-- // 3depth check-btn --&gt;
                      &lt;!-- 4depth --&gt;
                      &lt;template v-slot:accordion-content&gt;
                        &lt;div class="terms-depth4"&gt;
                          &lt;p class="depth4-title"&gt;
                            (1) 종합신용정보집중기관 및 신용정보회사에 개인(신용)정보 제공
                          &lt;/p&gt;
                          &lt;ul class="list-group"&gt;
                            &lt;!-- 4depth check-btn --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div
                                class="item-area item-flex"
                              &gt;
                                &lt;div class="item-left"&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;&lt;span class="label-text"&gt;고유식별 수집•이용 동의&lt;/span&gt;&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn --&gt;
                            &lt;!-- 4depth check-btn --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div
                                class="item-area item-flex"
                              &gt;
                                &lt;div class="item-left"&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;&lt;span class="label-text"&gt;고유식별 수집•이용 동의&lt;/span&gt;&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn --&gt;
                            &lt;!-- 4depth 내용보기 버튼 --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div class="item-area item-flex pb8"&gt;
                                &lt;div class="item-left text-right"&gt;
                                  &lt;button
                                    type="button"
                                    class="btn btn-underline"
                                  &gt;
                                    &lt;span class="text-xs"&gt;내용보기&lt;/span&gt;
                                  &lt;/button&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth 내용보기 버튼 --&gt;
                          &lt;/ul&gt;

                          &lt;p class="depth4-title"&gt;
                            (2) 여신금융협회 등에 개인(신용)정보 제공
                          &lt;/p&gt;
                          &lt;ul class="list-group"&gt;
                            &lt;!-- 4depth check-btn --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div
                                class="item-area item-flex"
                              &gt;
                                &lt;div class="item-left"&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;&lt;span class="label-text"&gt;개인신용정보 수집•이용 동의&lt;/span&gt;&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn --&gt;
                            &lt;!-- 4depth check-btn --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div
                                class="item-area item-flex"
                              &gt;
                                &lt;div class="item-left"&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;&lt;span class="label-text"&gt;개인신용정보 수집•이용 동의&lt;/span&gt;&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn --&gt;
                            &lt;!-- 4depth 내용보기 버튼 --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div class="item-area item-flex pb8"&gt;
                                &lt;div class="item-left text-right"&gt;
                                  &lt;button
                                    type="button"
                                    class="btn btn-underline"
                                  &gt;
                                    &lt;span class="text-xs"&gt;내용보기&lt;/span&gt;
                                  &lt;/button&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth 내용보기 버튼 --&gt;

                            &lt;!-- 4depth check-btn --&gt;
                            &lt;li class="list-item"&gt;
                              &lt;div
                                class="item-area item-flex"
                              &gt;
                                &lt;div class="item-left"&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label rating-label"&gt;&lt;span class="label-text"&gt;상품 서비스 안내)] 전자적 전송매체를 통한 광고성 정보의 수신을 동의하시겠습니까?&lt;/span&gt;&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                              &lt;div class="terms-depth4"&gt;
                                &lt;div class="item-bg-box grid"&gt;
                                  &lt;div class="form-group"&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;전체&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;서면&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;이메일&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                    &lt;div class="form-checkbox"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;전화&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                    &lt;div class="form-checkbox w-100"&gt;
                                      &lt;label&gt;
                                        &lt;input
                                          class="form-checkbox-input"
                                          type="checkbox"
                                          name="subcheckbox"
                                        &gt;
                                        &lt;span class="form-checkbox-btn type2"&gt;
                                          &lt;span /&gt;
                                        &lt;/span&gt;
                                        &lt;span class="form-checkbox-label"&gt;문자메시지(카카오톡 포함)&lt;/span&gt;
                                      &lt;/label&gt;
                                    &lt;/div&gt;
                                  &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;p class="depth4-text"&gt;
                                  ※ 카드이용 안내에 동의하셨더라도 신용정보의 이용 및 보호에 관한 법류에 따라 이용권유 목적의 연락에 대한 중단을 언제라도 카드사에 요청할 수 있습니다.(대표전화: 1544-7000 / 홈페이지: www.shinhancard.com)&lt;br&gt;&lt;br&gt;

                                  ※ 갱신 및 상품서비스 변경 안내 등 필수 고지사항은 상기 동의 대상에서 제외됩니다.
                                &lt;/p&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn --&gt;
                          &lt;/ul&gt;
                        &lt;/div&gt;
                      &lt;/template&gt;
                      &lt;!-- // 4depth --&gt;
                    &lt;/uu-accordionitem&gt;
                  &lt;/uu-accordion&gt;
                  &lt;!-- // 3depth check-accordion --&gt;
                &lt;/template&gt;
              &lt;/uu-accordionitem&gt;
            &lt;/uu-accordion&gt;
            &lt;!-- // 2depth check-accordion --&gt;
          &lt;/div&gt;
          &lt;!-- // 약관 상세 영역  --&gt;
        &lt;/form&gt;
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

<style lang="scss">
  @import "@/assets/scss/guide.scss";

</style>
