<template>
  <div class="page-body">
    <div class="container">
      <!-- Sizes -->
      <div class="row">
        <div class="col-12">
          <h3>Sizes</h3>
          <ul class="list-dot">
            <li>Primary, Secondary, Outline Buttons 외엔 적용 하지 말 것</li>
            <li>Extra Large, Large, Normal 글꼴 사이즈 [기본 : 16px], [.text-sm : 14px], [.text-xs: 12px] 로 조절 가능</li>
          </ul>
          <!--view-exam -->
          <div class="view-exam">
            <div class="btn-area d-block">
              <button
                type="button"
                class="btn btn-primary btn-xl"
              >
                <span>Extra Large : 60px</span>
              </button>
              <button
                type="button"
                class="btn btn-primary btn-lg"
              >
                <span>Large : 52px</span>
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                <span>Normal : 48px</span>
              </button>
              <button
                type="button"
                class="btn btn-primary btn-sm"
              >
                <span>Small : 38px</span>
              </button>
              <button
                type="button"
                class="btn btn-primary btn-xs"
              >
                <span>Extra Small : 32px</span>
              </button>
            </div>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;button type="button" class="btn btn-primary btn-xl"&gt;
        &lt;span&gt;Button&lt;/span&gt;
      &lt;/button&gt;

      &lt;button type="button" class="btn btn-primary btn-lg"&gt;
        &lt;span&gt;Button&lt;/span&gt;
      &lt;/button&gt;

      &lt;button type="button" class="btn btn-primary"&gt;
        &lt;span&gt;Button&lt;/span&gt;
      &lt;/button&gt;

      &lt;button type="button" class="btn btn-primary btn-sm"&gt;
        &lt;span&gt;Button&lt;/span&gt;
      &lt;/button&gt;

      &lt;button type="button" class="btn btn-primary btn-xs"&gt;
        &lt;span&gt;Button&lt;/span&gt;
      &lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Sizes -->
      <!-- Button area -->
      <div class="row">
        <div class="col-12">
          <h3>Button area</h3>
          <!--view-exam -->
          <div class="view-exam">
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-secondary"
              >
                <span>Secondary</span>
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                <span>Primary</span>
              </button>
            </div>
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-secondary btn-wd-sm"
              >
                <span>힌트보기</span>
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                <span>정답제출</span>
              </button>
            </div>
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-primary"
              >
                <span>확인</span>
              </button>
              <button
                type="button"
                class="btn btn-download btn-wd-xs"
                aria-label="공유"
              />
            </div>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;div class="btn-area"&gt;
        &lt;button type="button" class="btn btn-secondary"&gt;&lt;span&gt;Secondary&lt;/span&gt;&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;&lt;span&gt;Primary&lt;/span&gt;&lt;/button&gt;
      &lt;/div&gt;

      &lt;div class="btn-area"&gt;
        &lt;button type="button" class="btn btn-secondary btn-wd-sm"&gt;&lt;span&gt;힌트보기&lt;/span&gt;&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;&lt;span&gt;정답제출&lt;/span&gt;&lt;/button&gt;
      &lt;/div&gt;

      &lt;div class="btn-area"&gt;
        &lt;button type="button" class="btn btn-primary"&gt;&lt;span&gt;확인&lt;/span&gt;&lt;/button&gt;
        &lt;button type="button" class="btn btn-download btn-wd-xs" aria-label="공유"/&gt;
      &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Button area -->
      <!-- Examples -->
      <div class="row">
        <div class="col-12">
          <h3>Examples</h3>
          <!--view-exam -->
          <div class="view-exam">
            <button
              type="button"
              class="btn btn-primary"
            >
              <span>Primary</span>
            </button>
            <button
              type="button"
              class="btn btn-secondary"
            >
              <span>Secondary</span>
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              <span class="text-sm">Primary</span>
            </button>
            <button
              type="button"
              class="btn btn-secondary"
            >
              <span class="text-sm">Secondary</span>
            </button>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;button type="button" class="btn btn-primary"&gt;
        &lt;span&gt;이전&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-secondary"&gt;
        &lt;span&gt;다음&lt;/span&gt;
      &lt;/button&gt;

      &lt;!-- .text-sm: 글꼴 크기 14px 일때 --&gt;
      &lt;button type="button" class="btn btn-primary"&gt;
        &lt;span class="text-sm"&gt;이전&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-secondary"&gt;
        &lt;span class="text-sm"&gt;다음&lt;/span&gt;
      &lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Examples -->
      <!-- Active State -->
      <div class="row">
        <div class="col-12">
          <h3>Active State</h3>
          <p>활성화 상태를 표시하는 active 클래스를 사용 할 경우 aria-pressed="true"를 명시 해 주세요.</p>
          <!--view-exam -->
          <div class="view-exam">
            <button
              type="button"
              class="btn btn-primary active"
              aria-pressed="true"
            >
              <span>Primary</span>
            </button>
            <button
              type="button"
              class="btn btn-secondary active"
              aria-pressed="true"
            >
              <span>Secondary</span>
            </button>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;button type="button" class="btn btn-primary active" aria-pressed="true"&gt;
        &lt;span&gt;Primary&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-secondary active" aria-pressed="true"&gt;
        &lt;span&gt;Secondary&lt;/span&gt;
      &lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Active State -->
      <!-- Disabled -->
      <div class="row">
        <div class="col-12">
          <h3>Disabled State</h3>
          <!--view-exam -->
          <div class="view-exam">
            <button
              type="button"
              class="btn btn-primary"
              disabled="disabled"
            >
              <span>Primary</span>
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              disabled="disabled"
            >
              <span>Secondary</span>
            </button>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;button type="button" class="btn btn-primary" disabled="disabled"&gt;
        &lt;span&gt;Primary&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-secondary" disabled="disabled"&gt;
        &lt;span&gt;Secondary&lt;/span&gt;
      &lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Disabled -->
      <!-- Outline -->
      <div class="row">
        <div class="col-12">
          <h3>Outline buttons</h3>
          <h4>Line</h4>
          <!--view-exam -->
          <div class="view-exam">
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-line"
              >
                <span>Line</span>
              </button>
              <button
                type="button"
                class="btn btn-line active"
                aria-pressed="true"
              >
                <span>Line</span>
              </button>
              <button
                type="button"
                class="btn btn-line"
                disabled="disabled"
              >
                <span>Line</span>
              </button>
            </div>
          </div>
          <!-- // view-exam -->
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;button type="button" class="btn btn-line"&gt;
        &lt;span&gt;Line&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-line active" aria-pressed="true"&gt;
        &lt;span&gt;Line&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-line" disabled="disabled"&gt;
        &lt;span&gt;Line&lt;/span&gt;
      &lt;/button&gt;
              </code>
            </pre>
          </div>
          <!-- // view-code -->
          <h4>Line2</h4>
          <!--view-exam -->
          <div class="view-exam">
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-line2"
              >
                <span class="text-sm">2월 14일 결제예정 <strong>450,000원</strong></span>
              </button>
              <button
                type="button"
                class="btn btn-line2 type2"
              >
                <span class="text-sm">내 카드&middot;현금의 <strong>소득공제</strong> 금액은</span>
                <span class="btn btn-text btn-arrow">
                  <span class="text-sm">연결하기</span>
                </span>
              </button>
            </div>
          </div>
          <!-- // view-exam -->
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;div class="btn-area"&gt;
        &lt;button type="button" class="btn btn-line2"&gt;
          &lt;span class="text-sm"&gt;2월 14일 결제예정 &lt;strong&gt;450,000원&lt;/strong&gt;&lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
      &lt;!-- type2 : 배경 흰색, 좌우 여백 16px --&gt;
      &lt;div class="btn-area"&gt;
        &lt;button type="button" class="btn btn-line2 type2"&gt;
          &lt;span class="text-sm"&gt;내 카드&amp;middot;현금의 &lt;strong&gt;소득공제&lt;/strong&gt; 금액은&lt;/span&gt;
          &lt;span class="btn btn-text btn-arrow"&gt;
            &lt;span class="text-sm"&gt;연결하기&lt;/span&gt;
          &lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- // view-code -->
          <h4>Dash</h4>
          <!--view-exam -->
          <div class="view-exam">
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-dash"
              >
                <span>Dash</span>
              </button>
              <button
                type="button"
                class="btn btn-dash active"
              >
                <span>Dash</span>
              </button>
              <button
                type="button"
                class="btn btn-dash"
                disabled="disabled"
              >
                <span>Dash</span>
              </button>
            </div>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;button type="button" class="btn btn-dash"&gt;
        &lt;span&gt;Dash&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-dash active" aria-pressed="true"&gt;
        &lt;span&gt;Dash&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-dash" disabled="disabled"&gt;
        &lt;span&gt;Dash&lt;/span&gt;
      &lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Outline -->
      <!-- Round -->
      <div class="row">
        <div class="col-12">
          <h3>Round buttons</h3>
          <!--view-exam -->
          <div class="view-exam">
            <button
              type="button"
              class="btn btn-round"
            >
              <span>참여하러가기</span>
            </button>
            <button
              type="button"
              class="btn btn-round"
              disabled="disabled"
            >
              <span>참여하러가기</span>
            </button>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;button type="button" class="btn btn-round"&gt;
        &lt;span&gt;참여하러가기&lt;/span&gt;
      &lt;/button&gt;
      &lt;button type="button" class="btn btn-round" disabled="disabled"&gt;
        &lt;span&gt;참여하러가기&lt;/span&gt;
      &lt;/button&gt;
              </code>
            </pre>
          </div>
          <!-- view-exam -->
          <div class="view-exam">
            <button
              type="button"
              class="btn btn-round btn-icon"
            >
              <span>펼쳐보기</span>
              <uu-icon
                icon="arrow1"
                size="16"
                direction="bottom"
              />
            </button>
            <button
              type="button"
              class="btn btn-round"
            >
              <span class="fc-darkblue90">더보기</span>
            </button>
            <button
              type="button"
              class="btn btn-round btn-icon"
            >
              <uu-icon
                icon="refresh"
                size="24"
              />
              <span>더보기</span>
              <span class="text-sm">1/<span class="fc-ccc">8</span></span>
            </button>
            <button
              type="button"
              class="btn btn-round btn-icon"
            >
              <span>더보기</span>
              <span class="text-sm fc-666">(6개)</span>
            </button>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;button type="button" class="btn btn-round btn-icon"&gt;
        &lt;span&gt;펼쳐보기&lt;/span&gt;
        &lt;uu-icon icon="arrow1" size="16" direction="bottom" /&gt;
      &lt;/button&gt;

      &lt;button type="button" class="btn btn-round"&gt;
        &lt;span class="fc-darkblue90"&gt;더보기&lt;/span&gt;
      &lt;/button&gt;

      &lt;button type="button" class="btn btn-round btn-icon"&gt;
        &lt;uu-icon icon="refresh" size="24"&gt;
        &lt;span&gt;더보기&lt;/span&gt;
        &lt;span class="text-sm"&gt;1/&lt;span class="fc-ccc"&gt;8&lt;/span&gt;&lt;/span&gt;
      &lt;/button&gt;

      &lt;button type="button" class="btn btn-round btn-icon"&gt;
        &lt;span&gt;더보기&lt;/span&gt;
        &lt;span class="text-sm fc-666"&gt;(6개)&lt;/span&gt;
      &lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Round -->
      <!-- floating -->
      <div class="row">
        <div class="col-12">
          <h3>Floating buttons</h3>
          <!--view-exam -->
          <div class="view-exam">
            <!-- white -->
            <button
              type="button"
              class="btn btn-floating"
              aria-label="상단으로 이동"
            >
              <uu-icon
                icon="arrow2"
                size="24"
                png
              />
            </button>
            <!-- // white -->
            <!-- dark -->
            <button
              type="button"
              class="btn btn-floating dark"
              aria-label="검색"
            >
              <uu-icon
                icon="search"
                size="24"
                color="white"
                png
              />
            </button>
            <!-- // dark -->

            <!-- dark small -->
            <button
              type="button"
              class="btn btn-floating btn-sm dark"
              aria-label="선텍 메뉴 닫기"
            >
              <uu-icon
                icon="close1"
                size="20"
                color="white"
                png
              />
            </button>
            <!-- // dark small -->
            <!-- dark group -->
            <div class="btn-floating-group dark">
              <button
                type="button"
                class="btn btn-floating"
                aria-label="필터 팝업 열림"
              >
                <uu-icon
                  icon="setup2"
                  size="24"
                  color="white"
                  png
                />
              </button>
              <button
                type="button"
                class="btn btn-floating"
                aria-label="검색 팝업 열림"
              >
                <uu-icon
                  icon="search"
                  size="24"
                  color="white"
                  png
                />
              </button>
            </div>
            <!-- // dark group -->

            <!-- dark + text group -->
            <div class="btn-floating-group dark">
              <button
                type="button"
                class="btn btn-floating"
                aria-label="필터 팝업 열림"
              >
                <uu-icon
                  icon="setup2"
                  size="24"
                  color="white"
                  png
                />
                <span class="btn-text">필터</span>
              </button>
            </div>
            <!-- // dark + text group -->

            <!-- dark + white group -->
            <div class="btn-floating-group">
              <button
                type="button"
                class="btn btn-floating dark"
              >
                <uu-icon
                  icon="qrcode"
                  size="24"
                  color="white"
                  png
                />
              </button>
              <span class="btn-text">스캔·코드입력</span>
            </div>
            <!-- // dark + white group -->
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
    &lt;!-- white --&gt;
    &lt;button
      type="button"
      class="btn btn-floating"
      aria-label="상단으로 이동"
    &gt;
      &lt;uu-icon
        icon="arrow2"
        size="24"
        png
      /&gt;
    &lt;/button&gt;
    &lt;!-- // white --&gt;
    &lt;!-- dark --&gt;
    &lt;button
      type="button"
      class="btn btn-floating dark"
      aria-label="검색"
    &gt;
      &lt;uu-icon
        icon="search"
        size="24"
        color="white"
        png
      /&gt;
    &lt;/button&gt;
    &lt;!-- // dark --&gt;

    &lt;!-- dark small --&gt;
    &lt;button
      type="button"
      class="btn btn-floating btn-sm dark"
      aria-label="선텍 메뉴 닫기"
    &gt;
      &lt;uu-icon
        icon="close1"
        size="20"
        color="white"
        png
      /&gt;
    &lt;/button&gt;
    &lt;!-- // dark small --&gt;

    &lt;!-- dark group --&gt;
    &lt;div class="btn-floating-group dark"&gt;
      &lt;button
        type="button"
        class="btn btn-floating"
        aria-label="필터 팝업 열림"
      &gt;
        &lt;uu-icon
          icon="setup2"
          size="24"
          color="white"
          png
        /&gt;
      &lt;/button&gt;
      &lt;button
        type="button"
        class="btn btn-floating"
        aria-label="검색 팝업 열림"
      &gt;
        &lt;uu-icon
          icon="search"
          size="24"
          color="white"
          png
        /&gt;
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;!-- // dark group --&gt;

    &lt;!-- dark + text group --&gt;
    &lt;div class="btn-floating-group dark"&gt;
      &lt;button
        type="button"
        class="btn btn-floating"
        aria-label="필터 팝업 열림"
      &gt;
        &lt;uu-icon
          icon="setup2"
          size="24"
          color="white"
          png
        /&gt;
        &lt;span class="btn-text"&gt;필터&lt;/span&gt;
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;!-- // dark + text group --&gt;

    &lt;!-- dark + white group --&gt;
    &lt;div class="btn-floating-group"&gt;
      &lt;button
        type="button"
        class="btn btn-floating dark"
      &gt;
        &lt;uu-icon
          icon="qrcode"
          size="24"
          color="white"
          png
        /&gt;
      &lt;/button&gt;
      &lt;span class="btn-text"&gt;스캔·코드입력&lt;/span&gt;
    &lt;/div&gt;
    &lt;!-- // dark + white group --&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // floating -->
      <!-- Button tags -->
      <div class="row">
        <div class="col-12">
          <h3>Button tags</h3>
          <ul class="list-dot">
            <li>현재 화면에서의 섹션 이동, 또는 다른 화면의 이동이 아닌 &lt;a&gt; 에 사용 할 경우 role="button"을 명시 해 주세요.</li>
            <li>&lt;a&gt;는 disabled 속성을 지원하지 않으므로 비활성화 된 것처럼 보이도록 .disabled 클래스를 추가해야 합니다.</li>
            <li>비활성화 된 &lt;a&gt; 버튼에는 aria-disabled="true"를 명시 해 주세요.</li>
          </ul>
          <!--view-exam -->
          <div class="view-exam">
            <div class="btn-area">
              <a
                href="javascript:;"
                class="btn btn-primary"
                role="button"
              >
                <span>Default</span>
              </a>
              <a
                href="javascript:;"
                class="btn btn-primary active"
                role="button"
                aria-pressed="true"
              >
                <span>Pressed</span>
              </a>
              <a
                href="javascript:;"
                class="btn btn-primary disabled"
                role="button"
                aria-disabled="true"
              >
                <span>Disabled</span>
              </a>
            </div>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;a href="javascript:;" class="btn btn-primary" role="button"&gt;
        &lt;span&gt;Primary&lt;/span&gt;
      &lt;/a&gt;
      &lt;a href="javascript:;" class="btn btn-primary active" role="button" aria-pressed="true""&gt;
        &lt;span&gt;Primary&lt;/span&gt;
      &lt;/a&gt;
      &lt;a href="javascript:;" class="btn btn-primary disabled" role="button" aria-disabled="true"&gt;
        &lt;span&gt;Primary&lt;/span&gt;
      &lt;/a&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
    <!-- // Button tags -->
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
.view-exam {
  padding: 2rem 0;
  .btn-area {
    +.btn-area {
      margin-top: 1rem;
    }
  }
  .btn + .btn {
    margin-left: 1.2rem;
  }
}
.view-code {
  // border: 1px solid #ccc;
  pre {
    // display: none;
  }
}
</style>
