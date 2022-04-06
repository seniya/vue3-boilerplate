<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Basic Type - full Modal</h3>
          <div class="view-exam">
            <div class="agreement full">
              <form>
                <div class="terms-depth2">
                  <ul class="list-group">
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
                                  name="defaultcheckbox"
                                >
                                <span class="form-checkbox-btn"><span /></span>
                                <span class="form-checkbox-label">
                                  약관 전체 동의
                                </span></label>
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
                              size="24"
                            />
                          </button>
                        </div>
                      </div>
                    </li>
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
                                  name="defaultcheckbox"
                                >
                                <span class="form-checkbox-btn"><span /></span>
                                <span class="form-checkbox-label">
                                  약관 전체 동의 - 텍스트 길어졌을 때 테스트 중입니다.
                                </span></label>
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
                              size="24"
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
    &lt;div class="agreement full"&gt;
      &lt;form&gt;
        &lt;div class="terms-depth2"&gt;
          &lt;ul class="list-group"&gt;
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
                          name="defaultcheckbox"
                        &gt;
                        &lt;span class="form-checkbox-btn"&gt;&lt;span /&gt;&lt;/span&gt;
                        &lt;span class="form-checkbox-label"&gt;
                          약관 전체 동의
                        &lt;/span&gt;&lt;/label&gt;
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
                      size="24"
                    /&gt;
                  &lt;/button&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/li&gt;
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
                          name="defaultcheckbox"
                        &gt;
                        &lt;span class="form-checkbox-btn"&gt;&lt;span /&gt;&lt;/span&gt;
                        &lt;span class="form-checkbox-label"&gt;
                          약관 전체 동의 - 텍스트 길어졌을 때 테스트 중입니다.
                        &lt;/span&gt;&lt;/label&gt;
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
                      size="24"
                    /&gt;
                  &lt;/button&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/form&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>Accordion Type - full Modal</h3>
          <div class="view-exam">
            <div class="agreement full">
              <form>
                <!-- 약관 전체 체크 - 1depth check-all -->
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
                  <p class="caution-type1">
                    ※ 아래 약관을 동의 또는 펼치기를 선택하시면, <br>
                    각 약관별 필수/선택 약관을 확인할 수 있습니다.
                  </p>
                </div>
                <!-- // 1depth check-all -->
                <!-- 약관 상세 영역  -->
                <div class="terms">
                  <p class="terms-title">
                    신한Pay머니 계좌 만들기
                  </p>
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
                                <span class="label-category">[필수]</span><span class="label-text">Depth2 아코디언</span>
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 일반</span></span>
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 일반</span></span>
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
                          </ul>
                        </div>
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
                              <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth2 아코디언 - 텍스트가 길면 줄바꿈 됩니다.</span></span>
                            </label>
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 일반 - 텍스트가 길면 줄바꿈 됩니다.</span></span>
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
                              <div class="item-bottom-content">
                                <div class="terms-depth4">
                                  <ul class="list-group">
                                    <!-- 4depth check-btn : 하단의 내용 있을 때 -->
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
                                                <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3에 속하지 않은 Depth4 일반 + 하단 박스</span></span>
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
                                      <div class="item-bg-box">
                                        <dl>
                                          <dt>항목</dt>
                                          <dd>모바일앱을 통한 마케팅 정보 수신동의</dd>
                                        </dl>
                                        <dl>
                                          <dt>이용목적</dt>
                                          <dd>
                                            각종 이벤트, 할인, 혜택정보 등의
                                            안내
                                          </dd>
                                        </dl>
                                        <dl>
                                          <dt>보유기간</dt>
                                          <dd>별도 동의 철회시까지</dd>
                                        </dl>
                                      </div>
                                    </li>
                                    <!-- //4depth check-btn : 하단의 내용 있을 때 -->
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <!-- //3depth check-btn -->
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
                                    <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 아코디언</span></span>
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
                                              <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth4 일반</span></span>
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
                                              <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth4 일반</span></span>
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
                                              <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth4 일반</span></span>
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
                                  <!-- //4depth check-btn -->
                                </ul>
                              </div>
                            </template>
                            <!-- // 4depth -->
                          </uu-accordionitem>
                        </uu-accordion>
                        <!-- // 3depth check-accordion -->
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 일반</span></span>
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
                            <!-- //3depth check-btn -->
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
                                    <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 아코디언</span></span>
                                  </label>
                                </div>
                              </div>
                            </template>
                            <!-- // 3depth check-btn -->
                            <!-- 4depth -->
                            <template v-slot:accordion-content>
                              <div class="terms-depth4">
                                <ul class="list-group">
                                  <!-- 4depth check-btn : 하단의 내용 있을 때 -->
                                  <li class="list-item depth4-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <p class="item-text">
                                          Depth4 체크박스 없을 때
                                        </p>
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
                                    <div class="item-bg-box">
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
                                            <span class="form-checkbox-label">Depth5 체크박스</span>
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
                                            <span class="form-checkbox-label">Depth5 체크박스</span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn : 하단의 내용 있을 때 -->
                                  <!-- 4depth check-btn : 하단의 내용 있을 때 -->
                                  <li class="list-item depth4-item">
                                    <div
                                      class="item-area item-flex"
                                    >
                                      <div class="item-left">
                                        <p class="item-text">
                                          Depth4 체크박스 없을 때
                                        </p>
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
                                  </li>
                                  <!-- //4depth check-btn : 하단의 내용 있을 때 -->
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
                                    <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 아코디언 - 텍스트가 길면 줄바꿈 됩니다. <br> 줄바꿈 확인용</span></span>
                                  </label>
                                </div>
                              </div>
                            </template>
                            <!-- // 3depth check-btn -->
                            <!-- 4depth -->
                            <template v-slot:accordion-content>
                              <div class="terms-depth4">
                                <ul class="list-group">
                                  <!-- 4depth check-btn : 하단의 내용 있을 때 -->
                                  <li class="list-item">
                                    <div class="item-bg-box">
                                      <ul class="list-group">
                                        <li class="list-item">
                                          <a
                                            href="javascript:;"
                                            title=""
                                            class="item-area item-flex"
                                          >
                                            <div class="item-left">
                                              <p class="item-text">
                                                전자금융거래 기본약관
                                              </p>
                                            </div>
                                            <div class="item-right">
                                              <button type="button">
                                                <uu-icon
                                                  icon="arrow1"
                                                  direction="right"
                                                  size="16"
                                                  color="gray"
                                                />
                                              </button>
                                            </div>
                                          </a>
                                        </li>
                                        <li class="list-item">
                                          <a
                                            href="javascript:;"
                                            title=""
                                            class="item-area item-flex"
                                          >
                                            <div class="item-left">
                                              <p class="item-text">
                                                전자금융거래 기본약관
                                              </p>
                                            </div>
                                            <div class="item-right">
                                              <button type="button">
                                                <uu-icon
                                                  icon="arrow1"
                                                  direction="right"
                                                  size="16"
                                                  color="gray"
                                                />
                                              </button>
                                            </div>
                                          </a>
                                        </li>
                                        <li class="list-item">
                                          <a
                                            href="javascript:;"
                                            title=""
                                            class="item-area item-flex"
                                          >
                                            <div class="item-left">
                                              <p class="item-text">
                                                전자금융거래 기본약관
                                              </p>
                                            </div>
                                            <div class="item-right">
                                              <button type="button">
                                                <uu-icon
                                                  icon="arrow1"
                                                  direction="right"
                                                  size="16"
                                                  color="gray"
                                                />
                                              </button>
                                            </div>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <!-- //4depth check-btn : 하단의 내용 있을 때 --><!-- 4depth check-btn : 하단의 내용 있을 때 -->
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
                                              <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth4 일반<br>2줄 일 때 </span></span>
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
                                  <!-- //4depth check-btn : 하단의 내용 있을 때 -->
                                </ul>
                              </div>
                            </template>
                            <!-- // 4depth -->
                          </uu-accordionitem>
                        </uu-accordion>
                        <!-- // 3depth check-accordion -->
                      </template>
                      <!-- //3depth -->
                    </uu-accordionitem>
                  </uu-accordion>
                  <!-- // 2depth check-accordion -->
                </div>
                <!-- // 약관 상세 영역  -->
                <!-- 약관 상세 영역  -->
                <div class="terms">
                  <p class="terms-title">
                    휴대폰 본인인증
                  </p>
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
                                <span class="label-category">[필수]</span><span class="label-text">Depth2 아코디언</span>
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 일반</span></span>
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth3 일반</span></span>
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
                          </ul>
                        </div>
                      </template>
                    </uu-accordionitem>
                  </uu-accordion>
                  <!-- // 2depth check-accordion -->
                </div>
                <!-- // 약관 상세 영역  -->
                <!-- 약관 상세 영역 -->
                <div class="terms">
                  <div class="terms-depth2">
                    <ul class="list-group">
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
                                    name="defaultcheckbox"
                                  >
                                  <span class="form-checkbox-btn"><span /></span>
                                  <span class="form-checkbox-label">
                                    약관 전체 동의
                                  </span></label>
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
                                size="24"
                              />
                            </button>
                          </div>
                        </div>
                      </li>
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
                                    name="defaultcheckbox"
                                  >
                                  <span class="form-checkbox-btn"><span /></span>
                                  <span class="form-checkbox-label">
                                    약관 전체 동의 - 텍스트 길어졌을 때 테스트 중입니다.
                                  </span></label>
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
                                size="24"
                              />
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- // 약관 상세 영역 -->
              </form>
            </div>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
    &lt;div class="agreement full"&gt;
      &lt;form&gt;
        &lt;!-- 약관 전체 체크 - 1depth check-all --&gt;
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
          &lt;p class="caution-type1"&gt;
            ※ 아래 약관을 동의 또는 펼치기를 선택하시면, &lt;br&gt;
            각 약관별 필수/선택 약관을 확인할 수 있습니다.
          &lt;/p&gt;
        &lt;/div&gt;
        &lt;!-- // 1depth check-all --&gt;
        &lt;!-- 약관 상세 영역  --&gt;
        &lt;div class="terms"&gt;
          &lt;p class="terms-title"&gt;
            신한Pay머니 계좌 만들기
          &lt;/p&gt;
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
                        &lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 아코디언&lt;/span&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 일반&lt;/span&gt;&lt;/span&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 일반&lt;/span&gt;&lt;/span&gt;
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
                  &lt;/ul&gt;
                &lt;/div&gt;
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
                      &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 아코디언 - 텍스트가 길면 줄바꿈 됩니다.&lt;/span&gt;&lt;/span&gt;
                    &lt;/label&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 일반 - 텍스트가 길면 줄바꿈 됩니다.&lt;/span&gt;&lt;/span&gt;
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
                      &lt;div class="item-bottom-content"&gt;
                        &lt;div class="terms-depth4"&gt;
                          &lt;ul class="list-group"&gt;
                            &lt;!-- 4depth check-btn : 하단의 내용 있을 때 --&gt;
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
                                        &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3에 속하지 않은 Depth4 일반 + 하단 박스&lt;/span&gt;&lt;/span&gt;
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
                              &lt;div class="item-bg-box"&gt;
                                &lt;dl&gt;
                                  &lt;dt&gt;항목&lt;/dt&gt;
                                  &lt;dd&gt;모바일앱을 통한 마케팅 정보 수신동의&lt;/dd&gt;
                                &lt;/dl&gt;
                                &lt;dl&gt;
                                  &lt;dt&gt;이용목적&lt;/dt&gt;
                                  &lt;dd&gt;
                                    각종 이벤트, 할인, 혜택정보 등의
                                    안내
                                  &lt;/dd&gt;
                                &lt;/dl&gt;
                                &lt;dl&gt;
                                  &lt;dt&gt;보유기간&lt;/dt&gt;
                                  &lt;dd&gt;별도 동의 철회시까지&lt;/dd&gt;
                                &lt;/dl&gt;
                              &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;!-- //4depth check-btn : 하단의 내용 있을 때 --&gt;
                          &lt;/ul&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/li&gt;
                    &lt;!-- //3depth check-btn --&gt;
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
                            &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 아코디언&lt;/span&gt;&lt;/span&gt;
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
                                      &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth4 일반&lt;/span&gt;&lt;/span&gt;
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
                                      &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth4 일반&lt;/span&gt;&lt;/span&gt;
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
                                      &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth4 일반&lt;/span&gt;&lt;/span&gt;
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
                          &lt;!-- //4depth check-btn --&gt;
                        &lt;/ul&gt;
                      &lt;/div&gt;
                    &lt;/template&gt;
                    &lt;!-- // 4depth --&gt;
                  &lt;/uu-accordionitem&gt;
                &lt;/uu-accordion&gt;
                &lt;!-- // 3depth check-accordion --&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 일반&lt;/span&gt;&lt;/span&gt;
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
                    &lt;!-- //3depth check-btn --&gt;
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
                            &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 아코디언&lt;/span&gt;&lt;/span&gt;
                          &lt;/label&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/template&gt;
                    &lt;!-- // 3depth check-btn --&gt;
                    &lt;!-- 4depth --&gt;
                    &lt;template v-slot:accordion-content&gt;
                      &lt;div class="terms-depth4"&gt;
                        &lt;ul class="list-group"&gt;
                          &lt;!-- 4depth check-btn : 하단의 내용 있을 때 --&gt;
                          &lt;li class="list-item depth4-item"&gt;
                            &lt;div
                              class="item-area item-flex"
                            &gt;
                              &lt;div class="item-left"&gt;
                                &lt;p class="item-text"&gt;
                                  Depth4 체크박스 없을 때
                                &lt;/p&gt;
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
                            &lt;div class="item-bg-box"&gt;
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
                                    &lt;span class="form-checkbox-label"&gt;Depth5 체크박스&lt;/span&gt;
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
                                    &lt;span class="form-checkbox-label"&gt;Depth5 체크박스&lt;/span&gt;
                                  &lt;/label&gt;
                                &lt;/div&gt;
                              &lt;/div&gt;
                            &lt;/div&gt;
                          &lt;/li&gt;
                          &lt;!-- //4depth check-btn : 하단의 내용 있을 때 --&gt;
                          &lt;!-- 4depth check-btn : 하단의 내용 있을 때 --&gt;
                          &lt;li class="list-item depth4-item"&gt;
                            &lt;div
                              class="item-area item-flex"
                            &gt;
                              &lt;div class="item-left"&gt;
                                &lt;p class="item-text"&gt;
                                  Depth4 체크박스 없을 때
                                &lt;/p&gt;
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
                          &lt;/li&gt;
                          &lt;!-- //4depth check-btn : 하단의 내용 있을 때 --&gt;
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
                            &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 아코디언 - 텍스트가 길면 줄바꿈 됩니다. &lt;br&gt; 줄바꿈 확인용&lt;/span&gt;&lt;/span&gt;
                          &lt;/label&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/template&gt;
                    &lt;!-- // 3depth check-btn --&gt;
                    &lt;!-- 4depth --&gt;
                    &lt;template v-slot:accordion-content&gt;
                      &lt;div class="terms-depth4"&gt;
                        &lt;ul class="list-group"&gt;
                          &lt;!-- 4depth check-btn : 하단의 내용 있을 때 --&gt;
                          &lt;li class="list-item"&gt;
                            &lt;div class="item-bg-box"&gt;
                              &lt;ul class="list-group"&gt;
                                &lt;li class="list-item"&gt;
                                  &lt;a
                                    href="javascript:;"
                                    title=""
                                    class="item-area item-flex"
                                  &gt;
                                    &lt;div class="item-left"&gt;
                                      &lt;p class="item-text"&gt;
                                        전자금융거래 기본약관
                                      &lt;/p&gt;
                                    &lt;/div&gt;
                                    &lt;div class="item-right"&gt;
                                      &lt;button type="button"&gt;
                                        &lt;uu-icon
                                          icon="arrow1"
                                          direction="right"
                                          size="16"
                                          color="gray"
                                        /&gt;
                                      &lt;/button&gt;
                                    &lt;/div&gt;
                                  &lt;/a&gt;
                                &lt;/li&gt;
                                &lt;li class="list-item"&gt;
                                  &lt;a
                                    href="javascript:;"
                                    title=""
                                    class="item-area item-flex"
                                  &gt;
                                    &lt;div class="item-left"&gt;
                                      &lt;p class="item-text"&gt;
                                        전자금융거래 기본약관
                                      &lt;/p&gt;
                                    &lt;/div&gt;
                                    &lt;div class="item-right"&gt;
                                      &lt;button type="button"&gt;
                                        &lt;uu-icon
                                          icon="arrow1"
                                          direction="right"
                                          size="16"
                                          color="gray"
                                        /&gt;
                                      &lt;/button&gt;
                                    &lt;/div&gt;
                                  &lt;/a&gt;
                                &lt;/li&gt;
                                &lt;li class="list-item"&gt;
                                  &lt;a
                                    href="javascript:;"
                                    title=""
                                    class="item-area item-flex"
                                  &gt;
                                    &lt;div class="item-left"&gt;
                                      &lt;p class="item-text"&gt;
                                        전자금융거래 기본약관
                                      &lt;/p&gt;
                                    &lt;/div&gt;
                                    &lt;div class="item-right"&gt;
                                      &lt;button type="button"&gt;
                                        &lt;uu-icon
                                          icon="arrow1"
                                          direction="right"
                                          size="16"
                                          color="gray"
                                        /&gt;
                                      &lt;/button&gt;
                                    &lt;/div&gt;
                                  &lt;/a&gt;
                                &lt;/li&gt;
                              &lt;/ul&gt;
                            &lt;/div&gt;
                          &lt;/li&gt;
                          &lt;!-- //4depth check-btn : 하단의 내용 있을 때 --&gt;&lt;!-- 4depth check-btn : 하단의 내용 있을 때 --&gt;
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
                                      &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth4 일반&lt;br&gt;2줄 일 때 &lt;/span&gt;&lt;/span&gt;
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
                          &lt;!-- //4depth check-btn : 하단의 내용 있을 때 --&gt;
                        &lt;/ul&gt;
                      &lt;/div&gt;
                    &lt;/template&gt;
                    &lt;!-- // 4depth --&gt;
                  &lt;/uu-accordionitem&gt;
                &lt;/uu-accordion&gt;
                &lt;!-- // 3depth check-accordion --&gt;
              &lt;/template&gt;
              &lt;!-- //3depth --&gt;
            &lt;/uu-accordionitem&gt;
          &lt;/uu-accordion&gt;
          &lt;!-- // 2depth check-accordion --&gt;
        &lt;/div&gt;
        &lt;!-- // 약관 상세 영역  --&gt;
        &lt;!-- 약관 상세 영역  --&gt;
        &lt;div class="terms"&gt;
          &lt;p class="terms-title"&gt;
            휴대폰 본인인증
          &lt;/p&gt;
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
                        &lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 아코디언&lt;/span&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 일반&lt;/span&gt;&lt;/span&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth3 일반&lt;/span&gt;&lt;/span&gt;
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
                  &lt;/ul&gt;
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/uu-accordionitem&gt;
          &lt;/uu-accordion&gt;
          &lt;!-- // 2depth check-accordion --&gt;
        &lt;/div&gt;
        &lt;!-- // 약관 상세 영역  --&gt;
        &lt;!-- 약관 상세 영역 --&gt;
        &lt;div class="terms"&gt;
          &lt;div class="terms-depth2"&gt;
            &lt;ul class="list-group"&gt;
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
                            name="defaultcheckbox"
                          &gt;
                          &lt;span class="form-checkbox-btn"&gt;&lt;span /&gt;&lt;/span&gt;
                          &lt;span class="form-checkbox-label"&gt;
                            약관 전체 동의
                          &lt;/span&gt;&lt;/label&gt;
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
                        size="24"
                      /&gt;
                    &lt;/button&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/li&gt;
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
                            name="defaultcheckbox"
                          &gt;
                          &lt;span class="form-checkbox-btn"&gt;&lt;span /&gt;&lt;/span&gt;
                          &lt;span class="form-checkbox-label"&gt;
                            약관 전체 동의 - 텍스트 길어졌을 때 테스트 중입니다.
                          &lt;/span&gt;&lt;/label&gt;
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
                        size="24"
                      /&gt;
                    &lt;/button&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- // 약관 상세 영역 --&gt;
      &lt;/form&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>bottom basic Type</h3>
          <div class="view-exam">
            <div class="agreement bottom">
              <form>
                <!-- depth1 -->
                <div class="terms-depth1">
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
                              name="defaultcheckbox"
                            >
                            <span class="form-checkbox-btn"><span /></span>
                            <span class="form-checkbox-label">
                              약관 전체 동의
                            </span></label>
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
                          size="24"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- // depth1 -->
                <!-- 약관 상세 -->
                <div class="terms">
                  <div class="terms-depth2">
                    <ul class="list-group">
                      <!-- 2depth check-btn -->
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
                                  <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth2 일반</span></span>
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
                      <!-- // 2depth check-btn -->
                      <!-- 2depth check-btn -->
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
                                  <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth2 일반</span></span>
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
                    <!-- // 2depth check-btn -->
                    </ul>
                  </div>
                </div>
                <!-- //약관 상세 -->
              </form>
            </div>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
    &lt;div class="agreement bottom"&gt;
      &lt;form&gt;
        &lt;!-- depth1 --&gt;
        &lt;div class="terms-depth1"&gt;
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
                      name="defaultcheckbox"
                    &gt;
                    &lt;span class="form-checkbox-btn"&gt;&lt;span /&gt;&lt;/span&gt;
                    &lt;span class="form-checkbox-label"&gt;
                      약관 전체 동의
                    &lt;/span&gt;&lt;/label&gt;
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
                  size="24"
                /&gt;
              &lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- // depth1 --&gt;
        &lt;!-- 약관 상세 --&gt;
        &lt;div class="terms"&gt;
          &lt;div class="terms-depth2"&gt;
            &lt;ul class="list-group"&gt;
              &lt;!-- 2depth check-btn --&gt;
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
                          &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 일반&lt;/span&gt;&lt;/span&gt;
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
              &lt;!-- // 2depth check-btn --&gt;
              &lt;!-- 2depth check-btn --&gt;
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
                          &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 일반&lt;/span&gt;&lt;/span&gt;
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
            &lt;!-- // 2depth check-btn --&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- //약관 상세 --&gt;
      &lt;/form&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>bottom accordion Type - 풀팝업에도 사용하는 부분이 있음</h3>
          <div class="view-exam">
            <div class="agreement bottom">
              <form>
                <!-- 1depth check-accordion -->
                <uu-accordion class="terms-depth1">
                  <uu-accordionitem
                    hasbtn
                    active
                  >
                    <!-- 1depth check-btn -->
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
                              약관 전체 동의
                            </span></label>
                        </div>
                      </div>
                    </template>
                    <!-- // 1depth check-btn -->
                    <!-- 2depth -->
                    <template v-slot:accordion-content>
                      <!-- 약관 상세 -->
                      <div class="terms">
                        <p class="terms-title">
                          오픈뱅킹 이용약관
                        </p>
                        <div class="terms-depth2">
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth2 일반</span></span>
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth2 일반</span></span>
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
                          </ul>
                        </div>
                      </div>
                      <!-- //약관 상세 -->
                      <!-- 약관 상세 -->
                      <div class="terms">
                        <p class="terms-title">
                          계좌결제 이용약관
                        </p>
                        <div class="terms-depth2">
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth2 일반</span></span>
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
                                        <span class="form-checkbox-label"><span class="label-category">[필수]</span><span class="label-text">Depth2 일반</span></span>
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
                          </ul>
                        </div>
                      </div>
                      <!-- //약관 상세 -->
                    </template>
                    <!-- // 2depth -->
                  </uu-accordionitem>
                </uu-accordion>
                <!-- //1depth check-accordion -->
              </form>
            </div>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
    &lt;div class="agreement bottom"&gt;
      &lt;form&gt;
        &lt;!-- 1depth check-accordion --&gt;
        &lt;uu-accordion class="terms-depth1"&gt;
          &lt;uu-accordionitem
            hasbtn
            active
          &gt;
            &lt;!-- 1depth check-btn --&gt;
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
                      약관 전체 동의
                    &lt;/span&gt;&lt;/label&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/template&gt;
            &lt;!-- // 1depth check-btn --&gt;
            &lt;!-- 2depth --&gt;
            &lt;template v-slot:accordion-content&gt;
              &lt;!-- 약관 상세 --&gt;
              &lt;div class="terms"&gt;
                &lt;p class="terms-title"&gt;
                  오픈뱅킹 이용약관
                &lt;/p&gt;
                &lt;div class="terms-depth2"&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 일반&lt;/span&gt;&lt;/span&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 일반&lt;/span&gt;&lt;/span&gt;
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
                  &lt;/ul&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;!-- //약관 상세 --&gt;
              &lt;!-- 약관 상세 --&gt;
              &lt;div class="terms"&gt;
                &lt;p class="terms-title"&gt;
                  계좌결제 이용약관
                &lt;/p&gt;
                &lt;div class="terms-depth2"&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 일반&lt;/span&gt;&lt;/span&gt;
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
                                &lt;span class="form-checkbox-label"&gt;&lt;span class="label-category"&gt;[필수]&lt;/span&gt;&lt;span class="label-text"&gt;Depth2 일반&lt;/span&gt;&lt;/span&gt;
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
                  &lt;/ul&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;!-- //약관 상세 --&gt;
            &lt;/template&gt;
            &lt;!-- // 2depth --&gt;
          &lt;/uu-accordionitem&gt;
        &lt;/uu-accordion&gt;
        &lt;!-- //1depth check-accordion --&gt;
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
