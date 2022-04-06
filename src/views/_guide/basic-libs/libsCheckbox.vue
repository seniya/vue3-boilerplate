<template>
  <div class="page-body">
    <div class="container">
      <!-- Default checkbox -->
      <div class="row">
        <div class="col-12">
          <h3>Checkbox</h3>
          <div class="view-exam">
            <h4>Default Checkbox</h4>
            <form>
              <div class="form-group">
                <div class="form-checkbox">
                  <label for="defaultCheckbox1">
                    <input
                      id="defaultCheckbox1"
                      class="form-checkbox-input"
                      type="checkbox"
                    >
                    <span class="form-checkbox-btn">
                      <span />
                    </span>
                    <span class="form-checkbox-label">unchecked</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="defaultCheckbox2">
                    <input
                      id="defaultCheckbox2"
                      class="form-checkbox-input"
                      type="checkbox"
                      checked
                    >
                    <span class="form-checkbox-btn">
                      <span />
                    </span>
                    <span class="form-checkbox-label">checked</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="defaultCheckbox3">
                    <input
                      id="defaultCheckbox3"
                      class="form-checkbox-input"
                      type="checkbox"
                      disabled
                    >
                    <span class="form-checkbox-btn">
                      <span />
                    </span>
                    <span class="form-checkbox-label">disabled</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="defaultCheckbox4">
                    <input
                      id="defaultCheckbox4"
                      class="form-checkbox-input"
                      type="checkbox"
                      disabled
                      checked
                    >
                    <span class="form-checkbox-btn">
                      <span />
                    </span>
                    <span class="form-checkbox-label">disabled checked</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="view-code">
            <pre>
            <code class="language-html">
    &lt;!-- Default Checkbox --&gt;
    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="defaultCheckbox1"&gt;
            &lt;input
              id="defaultCheckbox1"
              class="form-checkbox-input"
              type="checkbox"
              name="defaultcheckbox"
              checked
            &gt;
            &lt;span class="form-checkbox-btn"&gt;
              &lt;span /&gt;
            &lt;/span&gt;
            &lt;!-- 라벨 안의 내용은 자유롭게 type 추가해서 편집 가능합니다. --&gt;
            &lt;span class="form-checkbox-label"&gt;내용을 자유롭게 입력하세요!&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-checkbox"&gt; ... &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- Default checkbox //-->
      <!-- Default checkbox - mini -->
      <div class="row">
        <div class="col-12">
          <div class="view-exam">
            <h4>Default Checkbox - mini</h4>
            <form>
              <div class="form-group">
                <div class="form-checkbox">
                  <label for="defaultCheckboxmini1">
                    <input
                      id="defaultCheckboxmini1"
                      class="form-checkbox-input"
                      type="checkbox"
                    >
                    <span class="form-checkbox-btn mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">unchecked</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="defaultCheckboxmini2">
                    <input
                      id="defaultCheckboxmini2"
                      class="form-checkbox-input"
                      type="checkbox"
                      checked
                    >
                    <span class="form-checkbox-btn mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">checked</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="defaultCheckboxmini3">
                    <input
                      id="defaultCheckboxmini3"
                      class="form-checkbox-input"
                      type="checkbox"
                      disabled
                    >
                    <span class="form-checkbox-btn mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">disabled</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="defaultCheckboxmini4">
                    <input
                      id="defaultCheckboxmini4"
                      class="form-checkbox-input"
                      type="checkbox"
                      disabled
                      checked
                    >
                    <span class="form-checkbox-btn mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">disabled checked</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="view-code">
            <pre>
            <code class="language-html">
    &lt;!-- Default Checkbox - mini --&gt;
    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="defaultCheckbox1"&gt;
            &lt;input
              id="defaultCheckbox1"
              class="form-checkbox-input"
              type="checkbox"
              name="defaultcheckbox"
              checked
            &gt;
            &lt;span class="form-checkbox-btn mini"&gt;
              &lt;span /&gt;
            &lt;/span&gt;
            &lt;!-- 라벨 안의 내용은 자유롭게 type 추가해서 편집 가능합니다. --&gt;
            &lt;span class="form-checkbox-label"&gt;내용을 자유롭게 입력하세요!&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-checkbox"&gt; ... &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- Default checkbox //-->
      <!-- Sub checkbox -->
      <div class="row">
        <div class="col-12">
          <div class="view-exam">
            <h4>Sub Checkbox</h4>
            <form>
              <div class="form-group">
                <div class="form-checkbox">
                  <label for="subCheckbox1">
                    <input
                      id="subCheckbox1"
                      class="form-checkbox-input"
                      type="checkbox"
                    >
                    <span class="form-checkbox-btn type2">
                      <span />
                    </span>
                    <span class="form-checkbox-label">unchecked</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="subCheckbox2">
                    <input
                      id="subCheckbox2"
                      class="form-checkbox-input"
                      type="checkbox"
                      checked
                    >
                    <span class="form-checkbox-btn type2">
                      <span />
                    </span>
                    <span class="form-checkbox-label">checked</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="subCheckbox2">
                    <input
                      id="subCheckbox2"
                      class="form-checkbox-input"
                      type="checkbox"
                      disabled
                    >
                    <span class="form-checkbox-btn type2">
                      <span />
                    </span>
                    <span class="form-checkbox-label">disabled</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="subCheckbox3">
                    <input
                      id="subCheckbox3"
                      class="form-checkbox-input"
                      type="checkbox"
                      checked
                    >
                    <span class="form-checkbox-btn type2">
                      <span />
                    </span>
                    <span class="form-checkbox-label">텍스트가 두줄일 때 <br>이렇게 됩니다.</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label
                    for="subCheckbox4"
                    class="align-items-baseline"
                  >
                    <input
                      id="subCheckbox4"
                      class="form-checkbox-input"
                      type="checkbox"
                      checked
                    >
                    <span class="form-checkbox-btn type2">
                      <span />
                    </span>
                    <span class="form-checkbox-label">텍스트가 두줄일 때 <br>이렇게 쓸수도 있어요.</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
    &lt;!-- Sub Checkbox --&gt;
    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="subCheckbox1"&gt;
            &lt;input
              id="subCheckbox1"
              class="form-checkbox-input"
              type="checkbox"
              name="subcheckbox"
              checked
            &gt;
            &lt;span class="form-checkbox-btn type2"&gt;&lt;!-- 버튼 type2 --&gt;
              &lt;span /&gt;
            &lt;/span&gt;
            &lt;!-- 라벨 안의 내용은 자유롭게 type 추가해서 편집 가능합니다. --&gt;
            &lt;span class="form-checkbox-label"&gt;내용을 자유롭게 입력하세요!&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-checkbox"&gt; ... &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="form-group"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="subCheckbox4" class="align-items-baseline"&gt;&lt;!-- 두줄일때 수직상단 정렬 --&gt;
            &lt;input
              id="subCheckbox4"
              class="form-checkbox-input"
              type="checkbox"
              name="subcheckbox"
              checked
            &gt;
            &lt;span class="form-checkbox-btn type2"&gt;&lt;!-- 버튼 type2 --&gt;
              &lt;span /&gt;
            &lt;/span&gt;
            &lt;!-- 라벨 안의 내용은 자유롭게 type 추가해서 편집 가능합니다. --&gt;
            &lt;span class="form-checkbox-label"&gt;내용을 자유롭게 입력하세요!&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-checkbox"&gt; ... &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- Sub checkbox //-->
      <!-- Sub checkbox - mini -->
      <div class="row">
        <div class="col-12">
          <div class="view-exam">
            <h4>Sub Checkbox - mini </h4>
            <form>
              <div class="form-group">
                <div class="form-checkbox">
                  <label for="subCheckboxmini1">
                    <input
                      id="subCheckboxmini1"
                      class="form-checkbox-input"
                      type="checkbox"
                    >
                    <span class="form-checkbox-btn type2 mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">unchecked</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="subCheckboxmini2">
                    <input
                      id="subCheckboxmini2"
                      class="form-checkbox-input"
                      type="checkbox"
                      checked
                    >
                    <span class="form-checkbox-btn type2 mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">checked</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="subCheckboxmini2">
                    <input
                      id="subCheckboxmini2"
                      class="form-checkbox-input"
                      type="checkbox"
                      disabled
                    >
                    <span class="form-checkbox-btn type2 mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">disabled</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label for="subCheckboxmini3">
                    <input
                      id="subCheckboxmini3"
                      class="form-checkbox-input"
                      type="checkbox"
                      checked
                    >
                    <span class="form-checkbox-btn type2 mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">텍스트가 두줄일 때 <br>이렇게 됩니다.</span>
                  </label>
                </div>
                <div class="form-checkbox">
                  <label
                    for="subCheckboxmini4"
                    class="align-items-baseline"
                  >
                    <input
                      id="subCheckboxmini4"
                      class="form-checkbox-input"
                      type="checkbox"
                      checked
                    >
                    <span class="form-checkbox-btn type2 mini">
                      <span />
                    </span>
                    <span class="form-checkbox-label">텍스트가 두줄일 때 <br>이렇게 쓸수도 있어요.</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
    &lt;!-- Sub Checkbox --&gt;
    &lt;form&gt;
      &lt;div class="form-group"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="subCheckbox1"&gt;
            &lt;input
              id="subCheckbox1"
              class="form-checkbox-input"
              type="checkbox"
              name="subcheckbox"
              checked
            &gt;
            &lt;span class="form-checkbox-btn type2 mini"&gt;&lt;!-- 버튼 type2 --&gt;
              &lt;span /&gt;
            &lt;/span&gt;
            &lt;!-- 라벨 안의 내용은 자유롭게 type 추가해서 편집 가능합니다. --&gt;
            &lt;span class="form-checkbox-label"&gt;내용을 자유롭게 입력하세요!&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-checkbox"&gt; ... &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="form-group"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="subCheckbox4" class="align-items-baseline"&gt;&lt;!-- 두줄일때 수직상단 정렬 --&gt;
            &lt;input
              id="subCheckbox4"
              class="form-checkbox-input"
              type="checkbox"
              name="subcheckbox"
              checked
            &gt;
            &lt;span class="form-checkbox-btn type2 mini"&gt;&lt;!-- 버튼 type2 --&gt;
              &lt;span /&gt;
            &lt;/span&gt;
            &lt;!-- 라벨 안의 내용은 자유롭게 type 추가해서 편집 가능합니다. --&gt;
            &lt;span class="form-checkbox-label"&gt;내용을 자유롭게 입력하세요!&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-checkbox"&gt; ... &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- Sub checkbox //-->
      <div class="row">
        <div class="col-12 view-exam">
          <br>
          <section>
            <!-- Button checkbox -->
            <h4 class="code-title">
              Button Checkbox
            </h4>
            <form>
              <div class="form-group btn-type">
                <div class="form-checkbox">
                  <label for="btnChckbox1">
                    <input
                      id="btnChckbox1"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">결제(승인)</span>
                  </label>
                  <label for="btnChckbox2">
                    <input
                      id="btnChckbox2"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">송금/충전/조르기</span>
                  </label>
                  <label for="btnChckbox3">
                    <input
                      id="btnChckbox3"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">리포트</span>
                  </label>
                  <label for="btnChckbox4">
                    <input
                      id="btnChckbox4"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">지출</span>
                  </label>
                  <label for="btnChckbox5">
                    <input
                      id="btnChckbox5"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">월납</span>
                  </label>
                  <label for="btnChckbox6">
                    <input
                      id="btnChckbox6"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">금융추천</span>
                  </label>
                  <label for="btnChckbox7">
                    <input
                      id="btnChckbox7"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">커뮤니티</span>
                  </label>
                  <label for="btnChckbox8">
                    <input
                      id="btnChckbox8"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">혜택</span>
                  </label>
                  <label for="btnChckbox9">
                    <input
                      id="btnChckbox9"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">주문/배송</span>
                  </label>
                  <label for="btnChckbox10">
                    <input
                      id="btnChckbox10"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">포인트</span>
                  </label>
                  <label for="btnChckbox11">
                    <input
                      id="btnChckbox11"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">공지사항</span>
                  </label>
                  <label for="btnChckbox12">
                    <input
                      id="btnChckbox12"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">이벤트</span>
                  </label>
                  <label for="btnChckbox13">
                    <input
                      id="btnChckbox13"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">정산</span>
                  </label>
                  <label for="btnChckbox14">
                    <input
                      id="btnChckbox14"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">서비스</span>
                  </label>
                  <label for="btnChckbox15">
                    <input
                      id="btnChckbox15"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">공지</span>
                  </label>
                </div>
              </div>
            </form>
            <!-- Button checkbox // -->
          </section>
          <br>
          <section>
            <!-- Button checkbox type2 -->
            <h4 class="code-title">
              Button Checkbox type2
            </h4>
            <form>
              <div class="form-group btn-type type2">
                <div class="form-checkbox">
                  <label for="btnChckbox21">
                    <input
                      id="btnChckbox21"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">신용카드</span>
                  </label>
                  <label for="btnChckbox22">
                    <input
                      id="btnChckbox22"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">계좌</span>
                  </label>
                  <label for="btnChckbox23">
                    <input
                      id="btnChckbox23"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">산한Pay머니</span>
                  </label>
                  <label for="btnChckbox24">
                    <input
                      id="btnChckbox24"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">FAN 충전</span>
                  </label>
                </div>
              </div>
            </form>
            <!-- Button checkbox type2 // -->
          </section>
          <br>
          <section>
            <!-- Button checkbox type2 -->
            <h4 class="code-title">
              Button Checkbox type2 icon
            </h4>
            <form>
              <div class="form-group btn-type type2 icon">
                <div class="form-checkbox">
                  <label for="btnChckbox31">
                    <input
                      id="btnChckbox31"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox2"
                    >
                    <span class="form-checkbox-label icon-name">신용카드</span>
                  </label>
                  <label for="btnChckbox32">
                    <input
                      id="btnChckbox32"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox2"
                    >
                    <span class="form-checkbox-label icon-name">계좌</span>
                  </label>
                  <label for="btnChckbox33">
                    <input
                      id="btnChckbox33"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox2"
                    >
                    <span class="form-checkbox-label icon-name">산한Pay머니</span>
                  </label>
                  <label for="btnChckbox34">
                    <input
                      id="btnChckbox34"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox2"
                    >
                    <span class="form-checkbox-label icon-name">FAN 충전</span>
                  </label>
                </div>
              </div>
            </form>
            <!-- Button checkbox type2 // -->
          </section>
          <br>
          <section>
            <!-- Button checkbox type3 -->
            <h4 class="code-title">
              Button Checkbox type3
            </h4>
            <form>
              <div class="form-group btn-type type3">
                <div class="form-checkbox">
                  <label for="btnChckbox211">
                    <input
                      id="btnChckbox211"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">일간</span>
                  </label>
                  <label for="btnChckbox222">
                    <input
                      id="btnChckbox222"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">주간</span>
                  </label>
                  <label for="btnChckbox233">
                    <input
                      id="btnChckbox233"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">월간</span>
                  </label>
                  <label for="btnChckbox244">
                    <input
                      id="btnChckbox244"
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">기간설정</span>
                  </label>
                </div>
              </div>
            </form>
            <!-- Button checkbox type3 // -->
          </section>
          <br>
          <section>
            <!-- Button checkbox type4 -->
            <h4 class="code-title">
              Button Checkbox type4
            </h4>
            <form>
              <div class="form-group btn-type type4">
                <div class="form-checkbox">
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_coupang.png"
                          alt="쿠팡"
                        >
                      </span>
                      <span class="item-text">쿠팡</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_11st.png"
                          alt="11번가"
                        >
                      </span>
                      <span class="item-text">11번가</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_tmon.png"
                          alt="11번가"
                        >
                      </span>
                      <span class="item-text">티몬</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_wemap.png"
                          alt="위메프"
                        >
                      </span>
                      <span class="item-text">위메프</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_ak.png"
                          alt="AK몰"
                        >
                      </span>
                      <span class="item-text">AK몰</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_homenshopping.png"
                          alt="홈앤쇼핑"
                        >
                      </span>
                      <span class="item-text">홈앤쇼핑</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_yes24.png"
                          alt="YES24"
                        >
                      </span>
                      <span class="item-text">YES24</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_ridi.png"
                          alt="리디북스"
                        >
                      </span>
                      <span class="item-text">리디북스</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_kfc.png"
                          alt="KFC"
                        >
                      </span>
                      <span class="item-text">KFC</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_seouland.png"
                          alt="서울랜드"
                        >
                      </span>
                      <span class="item-text">서울랜드</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label row2">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_everland.png"
                          alt="에버랜드 캐리비안베이"
                        >
                      </span>
                      <span class="item-text">에버랜드<br>캐리비안베이</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_cgv.png"
                          alt="CGV"
                        >
                      </span>
                      <span class="item-text">CGV</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_yogiyo.png"
                          alt="요기요"
                        >
                      </span>
                      <span class="item-text">요기요</span>
                    </span>
                  </label>
                  <label>
                    <input
                      class="form-checkbox-input"
                      type="checkbox"
                      name="btnChckbox"
                    >
                    <span class="form-checkbox-label">
                      <span class="item-img">
                        <img
                          src="~@/assets/images/common/icons/symbol/logo_bamin.png"
                          alt="배달의 민족"
                        >
                      </span>
                      <span class="item-text">배달의 민족</span>
                    </span>
                  </label>
                </div>
              </div>
            </form>
            <!-- Button checkbox type3 // -->
          </section>
        </div>
        <!-- view-exam //-->
        <!-- view-code -->
        <div class="col-12 view-code">
          <pre>
            <code class="language-html">
    &lt;!-- Button checkbox --&gt;
    &lt;form&gt;
      &lt;div class="form-group btn-type"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="btnChckbox1"&gt;
            &lt;input
              id="btnChckbox1"
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;span class="form-checkbox-label"&gt;결제(승인)&lt;/span&gt;
          &lt;/label&gt;
          &lt;label for="btnChckbox2"&gt;
            &lt;input
              id="btnChckbox2"
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;span class="form-checkbox-label"&gt;송금/충전/조르기&lt;/span&gt;
          &lt;/label&gt;
          ...
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;

    &lt;!-- Button checkbox type2 --&gt;
    &lt;form&gt;
      &lt;div class="form-group btn-type type2"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="btnChckbox21"&gt;
            &lt;input
              id="btnChckbox21"
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;!-- icon-name : 자유롭게 클래스이름 변경 가능 ex) .icon-card::before { background: url() no-repeat 0 0 / 100% auto; }--&gt;
            &lt;span class="form-checkbox-label icon-name"&gt;신용카드&lt;/span&gt;
          &lt;/label&gt;
          &lt;label for="btnChckbox22"&gt;
            &lt;input
              id="btnChckbox22"
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;span class="form-checkbox-label icon-name"&gt;계좌&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
    &lt;!-- Button checkbox type2 // --&gt;

    &lt;!-- Button checkbox type2 icon --&gt;
    &lt;form&gt;
      &lt;div class="form-group btn-type type2 icon"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="btnChckbox21"&gt;
            &lt;input
              id="btnChckbox21"
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;!-- icon-name : 자유롭게 클래스이름 변경 가능 ex) .icon-card::before { background: url() no-repeat 0 0 / 100% auto; }--&gt;
            &lt;span class="form-checkbox-label icon-name"&gt;신용카드&lt;/span&gt;
          &lt;/label&gt;
          &lt;label for="btnChckbox22"&gt;
            &lt;input
              id="btnChckbox22"
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;span class="form-checkbox-label icon-name"&gt;계좌&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
    &lt;!-- Button checkbox type2 icon // --&gt;

    &lt;!-- Button checkbox type3 --&gt;
    &lt;form&gt;
      &lt;div class="form-group btn-type type2"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label for="btnChckbox21"&gt;
            &lt;input
              id="btnChckbox21"
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;!-- icon-name : 자유롭게 클래스이름 변경 가능 ex) .icon-card::before { background: url() no-repeat 0 0 / 100% auto; }--&gt;
            &lt;span class="form-checkbox-label icon-name"&gt;신용카드&lt;/span&gt;
          &lt;/label&gt;
          &lt;label for="btnChckbox22"&gt;
            &lt;input
              id="btnChckbox22"
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;span class="form-checkbox-label icon-name"&gt;계좌&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
    &lt;!-- Button checkbox type3 // --&gt;

    &lt;!-- Button checkbox type4 --&gt;
    &lt;form&gt;
      &lt;div class="form-group btn-type type4"&gt;
        &lt;div class="form-checkbox"&gt;
          &lt;label&gt;
            &lt;input
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;span class="form-checkbox-label"&gt;
              &lt;span class="item-img"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/logo_coupang.png"
                  alt="쿠팡"
                &gt;
              &lt;/span&gt;
              &lt;span class="item-text"&gt;쿠팡&lt;/span&gt;
            &lt;/span&gt;
          &lt;/label&gt;
          &lt;label&gt;
            &lt;input
              class="form-checkbox-input"
              type="checkbox"
              name="btnChckbox"
            &gt;
            &lt;span class="form-checkbox-label row2"&gt;
              &lt;span class="item-img"&gt;
                &lt;img
                  src="~@/assets/images/common/icons/symbol/logo_everland.png"
                  alt="에버랜드 캐리비안베이"
                &gt;
              &lt;/span&gt;
              &lt;span class="item-text"&gt;에버랜드&lt;br&gt;캐리비안베이&lt;/span&gt;
            &lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
    &lt;!-- Button checkbox type4 // --&gt;

            </code>
          </pre>
        </div>
        <!-- view-code //-->
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  data () {
    return {
      selectedValue: '1'
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
</style>
