<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <!-- view-exam -->
        <div class="col-12 view-exam">
          <h3>Tooltip</h3>
          <section class="view-section">
            <!-- tooltip defaul -->
            <h4 class="code-title">
              tooltip(type1)
            </h4>
            <div class="view-exam">
              <div class="tooltip-area">
                <!-- 1번 -->
                <div>
                  <p class="desc-text">
                    1번<br>small : (top/left) (bottom/left)
                  </p>
                  <div>
                    <uu-tooltip
                      small
                      top
                      left
                    >
                      <template v-slot:tooltip-content>
                        잔액기준 충전한도 : 50만원
                      </template>
                    </uu-tooltip>
                    <uu-tooltip
                      small
                      bottom
                      left
                    >
                      <template v-slot:tooltip-content>
                        잔액기준 충전한도 : 50만원
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
                <!-- 2번 -->
                <div>
                  <p class="desc-text">
                    2번<br>small : (top/center) (bottom/center)
                  </p>
                  <div>
                    <uu-tooltip
                      small
                      top
                      center
                    >
                      <template v-slot:tooltip-content>
                        잔액기준 충전한도 : 50만원
                      </template>
                    </uu-tooltip>
                    <uu-tooltip
                      small
                      bottom
                      center
                    >
                      <template v-slot:tooltip-content>
                        잔액기준 충전한도 : 50만원
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
                <!-- 3번 -->
                <div>
                  <p class="desc-text">
                    3번<br>small : (top/right) (bottom/right)
                  </p>
                  <div>
                    <uu-tooltip
                      small
                      top
                      right
                    >
                      <template v-slot:tooltip-content>
                        잔액기준 충전한도 : 50만원
                      </template>
                    </uu-tooltip>
                    <uu-tooltip
                      small
                      bottom
                      right
                    >
                      <template v-slot:tooltip-content>
                        잔액기준 충전한도 : 50만원
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
                <!-- 4번 -->
                <div>
                  <p class="desc-text">
                    4번<br>(top/left) (bottom/left)
                  </p>
                  <div>
                    <uu-tooltip
                      top
                      left
                    >
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                    <uu-tooltip
                      bottom
                      left
                    >
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
                <!-- 5번 -->
                <div>
                  <p class="desc-text">
                    5번<br>(top/center) (bottom/center)
                  </p>
                  <div>
                    <uu-tooltip
                      top
                      center
                    >
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                    <uu-tooltip
                      bottom
                      center
                    >
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
                <!-- 6번 -->
                <div>
                  <p class="desc-text">
                    6번<br>(top/right) (bottom/right)
                  </p>
                  <div>
                    <uu-tooltip
                      top
                      right
                    >
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                    <uu-tooltip
                      bottom
                      right
                    >
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
                <!-- 7번 -->
                <div>
                  <p class="desc-text">
                    7번<br>has-title : (top/left) (bottom/left)
                  </p>
                  <div>
                    <uu-tooltip
                      has-title
                      top
                      left
                    >
                      <template v-slot:tooltip-title>
                        충전한도 타이틀
                      </template>
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                    <uu-tooltip
                      has-title
                      bottom
                      left
                    >
                      <template v-slot:tooltip-title>
                        충전한도 타이틀
                      </template>
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
                <!-- 8번 -->
                <div>
                  <p class="desc-text">
                    8번<br>has-title : (top/center) (bottom/center)
                  </p>
                  <div>
                    <uu-tooltip
                      has-title
                      top
                      center
                    >
                      <template v-slot:tooltip-title>
                        충전한도 타이틀
                      </template>
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                    <uu-tooltip
                      has-title
                      bottom
                      center
                    >
                      <template v-slot:tooltip-title>
                        충전한도 타이틀
                      </template>
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
                <!-- 9번 -->
                <div>
                  <p class="desc-text">
                    9번 버튼 커스텀<br>has-title : (top/right) (bottom/right)
                  </p>
                  <div>
                    <uu-tooltip
                      has-title
                      top
                      right
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="coin"
                          size="20"
                        />
                      </template>
                      <template v-slot:tooltip-title>
                        충전한도 타이틀
                      </template>
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip> &nbsp;
                    <uu-tooltip
                      has-title
                      bottom
                      right
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="call"
                          size="24"
                        />
                      </template>
                      <template v-slot:tooltip-title>
                        충전한도 타이틀
                      </template>
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip> &nbsp;
                    <uu-tooltip
                      has-title
                      bottom
                      right
                    >
                      <template v-slot:tooltip-button>
                        <span class="text">[텍스트 버튼]</span>
                      </template>
                      <template v-slot:tooltip-title>
                        충전한도 타이틀
                      </template>
                      <template v-slot:tooltip-content>
                        <p>잔액기준 충전한도 : 50만원</p>
                        <p>1일 충전한도 : 100만원</p>
                      </template>
                    </uu-tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="view-code"
            >
              <pre>
                <code class="language-html">
    &lt;!--
      type=""(타입선택/기본 type1) || width=""(숫자만) || small(작은 툴팁)
      || has-title(타이틀 있을때) || top, bottom, left, right, center (말꼬리 위치)
    --&gt;

    &lt;!--
      long 옵션 (type1만 해당 / 툴팁이 길어서 영역 잘릴때)
    --&gt;

    &lt;!-- 1번 small : (top/left) (bottom/left) --&gt;
      &lt;uu-tooltip
        small
        top
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;uu-tooltip
        small
        bottom
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;!--  4번 (top/left) (bottom/left) --&gt;
      &lt;uu-tooltip
        top
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;uu-tooltip
        bottom
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;!--  7번 has-title : (top/left) (bottom/left) --&gt;
      &lt;uu-tooltip
        has-title
        top
        left
      &gt;
        &lt;template v-slot:tooltip-title&gt;
          충전한도 타이틀
        &lt;/template&gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;uu-tooltip
        has-title
        bottom
        left
      &gt;
        &lt;template v-slot:tooltip-title&gt;
          충전한도 타이틀
        &lt;/template&gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;!--  9번 커스텀 버튼 --&gt;
      &lt;uu-tooltip
        has-title
        top
        left
      &gt;
        &lt;template v-slot:tooltip-button&gt;
          &lt;uu-icon
            icon="coin"
            size="20"
          /&gt;
        &lt;/template&gt;
        &lt;template v-slot:tooltip-title&gt;
          충전한도 타이틀
        &lt;/template&gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;uu-tooltip
        has-title
        bottom
        left
      &gt;
        &lt;template v-slot:tooltip-button&gt;
          &lt;uu-icon
            icon="tell"
            size="24"
          /&gt;
        &lt;/template&gt;
        &lt;template v-slot:tooltip-title&gt;
          충전한도 타이틀
        &lt;/template&gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;uu-tooltip
        has-title
        bottom
        left
      &gt;
        &lt;template v-slot:tooltip-button&gt;
          &lt;span class="text"&gt;[텍스트 버튼]&lt;/span&gt;
        &lt;/template&gt;
        &lt;template v-slot:tooltip-title&gt;
          충전한도 타이틀
        &lt;/template&gt;
        &lt;template v-slot:tooltip-content&gt;
          잔액기준 충전한도 : 50만원
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;
                </code>
              </pre>
            </div>
            <!-- tooltip(type2) -->
            <h4 class="code-title">
              tooltip(type2)
            </h4>
            <div class="view-exam">
              <div class="tooltip-area type2">
                <!-- 1번 -->
                <div>
                  <p class="desc-text">
                    1번 fade 효과<br>small : (top/left) (bottom/left)
                  </p>
                  <uu-tooltip
                    type="type2"
                    hide-close
                    small
                    top
                    left
                  >
                    <template v-slot:tooltip-content>
                      송금대기건이 있어요
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    hide-close
                    small
                    bottom
                    left
                  >
                    <template v-slot:tooltip-content>
                      송금대기건이 있어요
                    </template>
                  </uu-tooltip>
                </div>
                <!-- 2번 -->
                <div>
                  <p class="desc-text">
                    2번 fade 효과<br>small : (top/center) (bottom/center)
                  </p>
                  <uu-tooltip
                    type="type2"
                    hide-close
                    small
                    top
                    center
                  >
                    <template v-slot:tooltip-content>
                      송금대기건이 있어요
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    hide-close
                    small
                    bottom
                    center
                  >
                    <template v-slot:tooltip-content>
                      송금대기건이 있어요
                    </template>
                  </uu-tooltip>
                </div>
                <!-- 3번 -->
                <div>
                  <p class="desc-text">
                    3번 fade 효과<br>small : (top/right) (bottom/right)
                  </p>
                  <uu-tooltip
                    type="type2"
                    hide-close
                    small
                    top
                    right
                  >
                    <template v-slot:tooltip-content>
                      송금대기건이 있어요
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    hide-close
                    small
                    bottom
                    right
                  >
                    <template v-slot:tooltip-content>
                      송금대기건이 있어요
                    </template>
                  </uu-tooltip>
                </div>
                <!-- 4번 -->
                <div>
                  <p class="desc-text">
                    4번<br>(top/left) (bottom/left)
                  </p>
                  <uu-tooltip
                    type="type2"
                    top
                    left
                  >
                    <template v-slot:tooltip-content>
                      신한Pay머니 충전전용계좌로 입금하면 즉시 입금금액만큼 충전 됩니다.
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    bottom
                    left
                  >
                    <template v-slot:tooltip-content>
                      신한Pay머니 충전전용계좌로 입금하면 즉시 입금금액만큼 충전 됩니다.
                    </template>
                  </uu-tooltip>
                </div>
                <!-- 5번 -->
                <div>
                  <p class="desc-text">
                    5번<br>(top/center) (bottom/center)
                  </p>
                  <uu-tooltip
                    type="type2"
                    top
                    center
                  >
                    <template v-slot:tooltip-content>
                      신한Pay머니 충전전용계좌로 입금하면 즉시 입금금액만큼 충전 됩니다.
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    bottom
                    center
                  >
                    <template v-slot:tooltip-content>
                      신한Pay머니 충전전용계좌로 입금하면 즉시 입금금액만큼 충전 됩니다.
                    </template>
                  </uu-tooltip>
                </div>
                <!-- 6번 -->
                <div>
                  <p class="desc-text">
                    6번<br>(top/right) (bottom/right)
                  </p>
                  <uu-tooltip
                    type="type2"
                    top
                    right
                  >
                    <template v-slot:tooltip-content>
                      신한Pay머니 충전전용계좌로 입금하면 즉시 입금금액만큼 충전 됩니다.
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    bottom
                    right
                  >
                    <template v-slot:tooltip-content>
                      신한Pay머니 충전전용계좌로 입금하면 즉시 입금금액만큼 충전 됩니다.
                    </template>
                  </uu-tooltip>
                </div>
                <!-- 7번 -->
                <div>
                  <p class="desc-text">
                    7번<br>in-btn : (top/left) (bottom/left)
                  </p>
                  <uu-tooltip
                    type="type2"
                    in-btn
                    small
                    top
                    left
                  >
                    <template v-slot:tooltip-content>
                      <p>
                        <span>송금대기건이 있어요</span>
                        <button
                          type="button"
                          class="btn btn-underline"
                        >
                          <span>받기</span>
                        </button>
                      </p>
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    in-btn
                    small
                    bottom
                    left
                  >
                    <template v-slot:tooltip-content>
                      <p>
                        <span>송금대기건이 있어요</span>
                        <button
                          type="button"
                          class="btn btn-underline"
                        >
                          <span>받기</span>
                        </button>
                      </p>
                    </template>
                  </uu-tooltip>
                </div>
                <!-- 8번 -->
                <div>
                  <p class="desc-text">
                    8번<br>in-btn : (top/center) (bottom/center)
                  </p>
                  <uu-tooltip
                    type="type2"
                    in-btn
                    small
                    top
                    center
                  >
                    <template v-slot:tooltip-content>
                      <p>
                        <span>송금대기건이 있어요</span>
                        <button
                          type="button"
                          class="btn btn-underline"
                        >
                          <span>받기</span>
                        </button>
                      </p>
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    in-btn
                    small
                    bottom
                    center
                  >
                    <template v-slot:tooltip-content>
                      <p>
                        <span>송금대기건이 있어요</span>
                        <button
                          type="button"
                          class="btn btn-underline"
                        >
                          <span>받기</span>
                        </button>
                      </p>
                    </template>
                  </uu-tooltip>
                </div>
                <!-- 9번 -->
                <div>
                  <p class="desc-text">
                    9번 <br>in-btn : (top/right) (bottom/right)
                  </p>
                  <uu-tooltip
                    type="type2"
                    in-btn
                    small
                    top
                    right
                  >
                    <template v-slot:tooltip-content>
                      <p>
                        <span>송금대기건이 있어요</span>
                        <button
                          type="button"
                          class="btn btn-underline"
                        >
                          <span>받기</span>
                        </button>
                      </p>
                    </template>
                  </uu-tooltip>
                  <uu-tooltip
                    type="type2"
                    in-btn
                    small
                    bottom
                    right
                  >
                    <template v-slot:tooltip-content>
                      <p>
                        <span>송금대기건이 있어요</span>
                        <button
                          type="button"
                          class="btn btn-underline"
                        >
                          <span>받기</span>
                        </button>
                      </p>
                    </template>
                  </uu-tooltip>
                </div>
              </div>
            </div>
            <div
              class="view-code"
            >
              <pre>
                <code class="language-html">
    &lt;!--
      type=""(타입선택/기본 type1) || width=""(숫자만) || small(작은 툴팁)
      || has-title(타이틀 있을때) || hide-close(닫기 버튼 없을때/fade animation)
      || top, bottom, left, right, center (말꼬리 위치)
    --&gt;

    &lt;!-- type2에서는 'in-btn'옵션을 추가로 사용할 수 있습니다.--&gt;
    &lt;!-- fade 효과는 hide-close일 때만 적용되고 3초 동안 나타났다 사라집니다--&gt;

      &lt;!-- 1번 fade 효과 : small : (top/left) (bottom/left) --&gt;
      &lt;uu-tooltip
        type="type2"
        hide-close
        small
        top
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          송금대기건이 있어요
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;
      &lt;uu-tooltip
        type="type2"
        hide-close
        small
        bottom
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          송금대기건이 있어요
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;!--  4번 (top/left) (bottom/left) --&gt;
      &lt;uu-tooltip
        type="type2"
        top
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          신한Pay머니 충전전용계좌로 입금하면 즉시 입금금액만큼 충전 됩니다.
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;
      &lt;uu-tooltip
        type="type2"
        bottom
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          신한Pay머니 충전전용계좌로 입금하면 즉시 입금금액만큼 충전 됩니다.
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;

      &lt;!--  7번 in-btn : (top/left) (bottom/left) --&gt;
      &lt;uu-tooltip
        type="type2"
        width="160"
        in-btn
        small
        top
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          &lt;p&gt;
            &lt;span&gt;송금대기건이 있어요&lt;/span&gt;
            &lt;button
              type="button"
              class="btn btn-underline"
            &gt;
              &lt;span&gt;받기&lt;/span&gt;
            &lt;/button&gt;
          &lt;/p&gt;
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;
      &lt;uu-tooltip
        type="type2"
        width="160"
        in-btn
        small
        bottom
        left
      &gt;
        &lt;template v-slot:tooltip-content&gt;
          &lt;p&gt;
            &lt;span&gt;송금대기건이 있어요&lt;/span&gt;
            &lt;button
              type="button"
              class="btn btn-underline"
            &gt;
              &lt;span&gt;받기&lt;/span&gt;
            &lt;/button&gt;
          &lt;/p&gt;
        &lt;/template&gt;
      &lt;/uu-tooltip&gt;
                </code>
              </pre>
            </div>
            <!-- tooltip small -->
            <h4 class="code-title">
              tooltip(type3)
            </h4>
            <div class="view-exam">
              <div
                class="tooltip-area"
              >
                <!-- 1번 -->
                <div>
                  <uu-tooltip
                    type="type3"
                  >
                    <template v-slot:tooltip-content>
                      신한 활용Tip.1
                    </template>
                  </uu-tooltip>
                </div>
              </div>
            </div>
            <div
              class="view-code"
            >
              <pre>
                <code class="language-html">
      &lt;uu-tooltip
          type="type3"
        &gt;
          &lt;template v-slot:tooltip-content&gt;
            신한 활용Tip.1
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
                </code>
              </pre>
            </div>
            <br>
            <h4 class="code-title">
              tooltip(type4)
            </h4>
            <div class="view-exam">
              <div
                class="tooltip-area"
              >
                <div>
                  <uu-tooltip
                    type="type4"
                    top
                    left
                  >
                    <template v-slot:tooltip-content>
                      <uu-icon
                        icon="delete"
                        size="24"
                        color="wh"
                      />
                      <span class="fs-10 mt4">삭제</span>
                    </template>
                  </uu-tooltip>
                </div>
                <div>
                  <uu-tooltip
                    type="type4"
                    top
                    right
                  >
                    <template v-slot:tooltip-content>
                      <uu-icon
                        icon="delete"
                        size="24"
                        color="wh"
                      />
                      <span class="fs-10 mt4">삭제</span>
                    </template>
                  </uu-tooltip>
                </div>
                <div>
                  <uu-tooltip
                    type="type4"
                    bottom
                    left
                  >
                    <template v-slot:tooltip-content>
                      <uu-icon
                        icon="delete"
                        size="24"
                        color="wh"
                      />
                      <span class="fs-10 mt4">삭제</span>
                    </template>
                  </uu-tooltip>
                </div>
                <div>
                  <uu-tooltip
                    type="type4"
                    bottom
                    right
                  >
                    <template v-slot:tooltip-content>
                      <uu-icon
                        icon="delete"
                        size="24"
                        color="wh"
                      />
                      <span class="fs-10 mt4">삭제</span>
                    </template>
                  </uu-tooltip>
                </div>
              </div>
            </div>
            <div
              class="view-code"
            >
              <pre>
                <code class="language-html">
    &lt;uu-tooltip
      type="type4"
      top
      left
    &gt;
      &lt;template v-slot:tooltip-content&gt;
        &lt;uu-icon
          icon="delete"
          size="24"
          color="wh"
        /&gt;
        &lt;span class="fs-10 mt4"&gt;삭제&lt;/span&gt;
      &lt;/template&gt;
    &lt;/uu-tooltip&gt;
                </code>
              </pre>
            </div>
            <br>
            <h4 class="code-title">
              tooltip(type5)
            </h4>
            <div class="view-exam">
              <div
                class="tooltip-area"
              >
                <div>
                  <uu-tooltip
                    type="type5"
                    top
                  >
                    <template v-slot:tooltip-content>
                      <span>D-20</span>
                    </template>
                  </uu-tooltip>
                </div>
                <div>
                  <uu-tooltip
                    type="type5"
                    bottom
                  >
                    <template v-slot:tooltip-content>
                      <span>D-20</span>
                    </template>
                  </uu-tooltip>
                </div>
              </div>
            </div>
            <div class="view-code">
              <pre>
                <code class="language-html">
    &lt;uu-tooltip
      type="type5"
      top
    &gt;
      &lt;template v-slot:tooltip-content&gt;
        &lt;span"&gt;D-20&lt;/span&gt;
      &lt;/template&gt;
    &lt;/uu-tooltip&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;uu-tooltip
      type="type5"
      bottom
    &gt;
      &lt;template v-slot:tooltip-content&gt;
        &lt;span"&gt;D-20&lt;/span&gt;
      &lt;/template&gt;
    &lt;/uu-tooltip&gt;
                </code>
              </pre>
            </div>
            <h4 class="code-title">
              position : absolute
            </h4>
            <div class="view-exam">
              <div
                style="position:relative; display:block; height:200px; background-color:lightgray"
              >
                <uu-tooltip
                  type="type5"
                  bottom
                  absolute
                  absolute-bottom="50"
                  absolute-left="10"
                >
                  <template v-slot:tooltip-content>
                    첫번째 D-20
                  </template>
                </uu-tooltip>
                <uu-tooltip
                  type="type5"
                  bottom
                  absolute
                  absolute-top="30"
                  absolute-right="100"
                >
                  <template v-slot:tooltip-content>
                    두번째 D-20
                  </template>
                </uu-tooltip>
              </div>
            </div>
            <div class="view-code">
              <pre>
                <code class="language-html">
    &lt;!--  모든 tooltip은 position:relative가 기본값입니다. --&gt;
    &lt;!--
    position:absolute 사용시
    absolute/absolute-top/absolute-bottom/absolute-left/absolute-right="(숫자만)" 속성을 추가해주세요.
    --&gt;

    &lt;uu-tooltip
      type="type5"
      bottom
      absolute
      absolute-bottom="50"
      absolute-left="10"
    &gt;
      &lt;template v-slot:tooltip-content&gt;
        &lt;span"&gt;첫번째 D-20&lt;/span&gt;
      &lt;/template&gt;
    &lt;/uu-tooltip&gt;
    &lt;uu-tooltip
      type="type5"
      bottom
      absolute
      absolute-top="30"
      absolute-right="100"
    &gt;
      &lt;template v-slot:tooltip-content&gt;
        &lt;span"&gt;두번째 D-20&lt;/span&gt;
      &lt;/template&gt;
    &lt;/uu-tooltip&gt;
                </code>
              </pre>
            </div>
            <br>
            <h4 class="code-title">
              tooltip(type6)
            </h4>
            <div class="view-exam">
              <div
                class="tooltip-area"
              >
                <div>
                  <button
                    type="button"
                    style="position: relative; width: 4rem; height: 7rem; background-color: #9696de;"
                  >
                    <uu-tooltip
                      type="type6"
                      bottom
                      center
                      hide-close
                      no-fade
                      absolute
                      absolute-top="-37"
                      left-center
                    >
                      <template v-slot:tooltip-content>
                        <p>230,350원</p>
                      </template>
                    </uu-tooltip>
                  </button>
                </div>
              </div>
            </div>
            <div class="view-code">
              <pre>
                <code class="language-html">
    &lt;!--  모든 tooltip은 position:relative가 기본값입니다. --&gt;
    &lt;!--
    position:absolute 사용시
    absolute/absolute-top/absolute-bottom/absolute-left/absolute-right="(숫자만)" 속성을 추가해주세요.
    --&gt;

    &lt;uu-tooltip
      type="type6"
      bottom
      center
      hide-close
      no-fade
      absolute
      absolute-top="-37"
      left-center
    &gt;
      &lt;template v-slot:tooltip-content&gt;
        &lt;p&gt;230,350원&lt;/p&gt;
      &lt;/template&gt;
    &lt;/uu-tooltip&gt;
                </code>
              </pre>
            </div>
          </section>
        </div>
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

  .tooltip-area {
    display: grid;
    grid-template-rows: repeat(3);
    grid-template-columns: repeat(3, 1fr);
    overflow-x: auto;
    position: relative;
    background-color: lightgray;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2.5rem;
      .desc-text {
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        text-align: center;
      }
    }
    &.type2 {
      .tooltip-wrap + .tooltip-wrap {
        margin-top: 1.5rem;
      }
    }
    @media(min-width: 415px) {
      overflow-x: inherit;
    }
  }
  .tooltip2 + .tooltip2 {
        margin-top: 2rem;
      }
</style>
