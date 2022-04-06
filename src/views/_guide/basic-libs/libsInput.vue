<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Input</h3>
          <p>**title / name / aria-label / aria-descriptby / id 등은 <b style="color:blue">웹접근성을 위해 상황에 맞게 수정</b>해 주세요**</p>
          <p>인풋을 readonly처리하고 키패드 띄울때 인풋에 .readonly-bk 클래스 추가해주세요</p>
          <!-- 이름 -->
          <h4>이름</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group">
                  <label
                    class="form-label"
                    for="userName"
                  >이름</label>
                  <div class="input-group">
                    <input
                      id="userName"
                      class="form-control input-grow"
                      name="userName"
                      type="text"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group invalid">
                  <label
                    class="form-label"
                    for="userName"
                  >이름</label>
                  <div class="input-group">
                    <input
                      id="userName"
                      class="form-control input-grow"
                      name="userName"
                      type="text"
                      value="김신한"
                      aria-describedby="invalidText"
                      aria-invalid="true"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    정보가 올바르지 않습니다.
                  </div>
                </div>
              </div>
              <!-- disabled / readonly-->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div class="form-group disabled">
                  <label
                    class="form-label"
                    for="userName"
                  >이름</label>
                  <div class="input-group">
                    <input
                      id="userName"
                      class="form-control input-grow"
                      name="userName"
                      type="text"
                      value="김신한"
                      disabled
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group"&gt;
      &lt;label
        class="form-label"
        for="userName"
      &gt;이름&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          id="userName"
          class="form-control input-grow"
          name="userName"
          type="text"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

      &lt;!-- error --&gt;
      &lt;div class="form-group invalid"&gt;
        &lt;label
          class="form-label"
          for="userName"
        &gt;이름&lt;/label&gt;
        &lt;div class="input-group"&gt;
          &lt;input
            id="userName"
            class="form-control input-grow"
            name="userName"
            type="text"
            value="김신한"
            aria-describedby="invalidText"
            aria-invalid="true"
          &gt;
          &lt;div class="input-group-append">
            &lt;button
              type="button"
              class="btn btn-input"
            &gt;
              &lt;uu-icon
                icon="delete"
                size="20"
              /&gt;
              &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div
          id="invalidText"
          class="invalid-feedback"
          role="alert"
        &gt;
          정보가 올바르지 않습니다.
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- disabled / readonly--&gt;
      &lt;div class="form-group disabled"&gt;
        &lt;label
          class="form-label"
          for="userName"
        &gt;이름&lt;/label&gt;
        &lt;div class="input-group"&gt;
          &lt;input
            id="userName"
            class="form-control input-grow"
            name="userName"
            type="text"
            value="김신한"
            disabled
          &gt;
          &lt;div class="input-group-append"&gt;
            &lt;button
              type="button"
              class="btn btn-input"
            &gt;
              &lt;uu-icon
                icon="delete"
                size="20"
              /&gt;
              &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 주민등록번호(type1) -->
          <h4>주민등록번호(type1) : 보안부분은 입력할때마다 동그라미 채워지고, 그 외 부분은 포커스시 동그라미 사라지고 숫자입력</h4>
          <!-- <p>
            개발시 참고 : <a
              href="https://codepen.io/himalayasingh/pen/QVRZXG"
              target="_blank"
            >링크</a>
          </p> -->
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div
                  class="form-group jumin-group"
                  role="group"
                  aria-labelledby="juminNum"
                >
                  <label
                    id="juminNum"
                    class="form-label"
                  >주민등록번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="6"
                            aria-label="주민등록번호 앞자리"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            name="jumin2"
                            type="password"
                            maxlength="7"
                            aria-label="주민등록번호 뒷자리"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div
                  class="form-group jumin-group invalid"
                  role="group"
                  aria-labelledby="juminNum"
                >
                  <label
                    id="juminNum"
                    class="form-label"
                  >주민등록번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="6"
                            value="920233"
                            aria-label="주민등록번호 앞자리"
                            aria-describedby="invalidText"
                          >
                        </div>
                        <div class="key-dots d-none">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            name="jumin2"
                            type="password"
                            maxlength="7"
                            aria-label="주민등록번호 뒷자리"
                            aria-describedby="invalidText"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    주민등록번호가 올바르지 않습니다.
                  </div>
                </div>
              </div>

              <!-- disabled -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div
                  class="form-group jumin-group disabled"
                  role="group"
                  aria-labelledby="juminNum"
                >
                  <label
                    id="juminNum"
                    class="form-label"
                  >주민등록번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="6"
                            value="990104"
                            aria-label="주민등록번호 앞자리"
                            disabled
                          >
                        </div>
                        <div class="key-dots d-none">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            name="jumin2"
                            type="password"
                            maxlength="7"
                            aria-label="주민등록번호 뒷자리"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div
      class="form-group jumin-group"
      role="group"
      aria-labelledby="juminNum"
    &gt;
      &lt;label
        id="juminNum"
        class="form-label"
      &gt;주민등록번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="6"
                aria-label="주민등록번호 앞자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                name="jumin2"
                type="password"
                maxlength="7"
                aria-label="주민등록번호 뒷자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;
              지우기
            &lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div
      class="form-group jumin-group invalid"
      role="group"
      aria-labelledby="juminNum"
    &gt;
      &lt;label
        id="juminNum"
        class="form-label"
      &gt;주민등록번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="6"
                value="920233"
                aria-label="주민등록번호 앞자리"
                aria-describedby="invalidText"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots d-none"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                name="jumin2"
                type="password"
                maxlength="7"
                aria-label="주민등록번호 뒷자리"
                aria-describedby="invalidText"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;
              지우기
            &lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        주민등록번호가 올바르지 않습니다.
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled / readonly--&gt;
    &lt;div
      class="form-group jumin-group disabled"
      role="group"
      aria-labelledby="juminNum"
    &gt;
      &lt;label
        id="juminNum"
        class="form-label"
      &gt;주민등록번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="6"
                value="990104"
                aria-label="주민등록번호 앞자리"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots d-none"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                name="jumin2"
                type="password"
                maxlength="7"
                aria-label="주민등록번호 뒷자리"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;
              지우기
            &lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 주민등록번호(type2) -->
          <h4>주민등록번호(type2) : 보안부분은 입력할때마다 동그라미 채워지고, 그 외 부분은 포커스시 동그라미 사라지고 숫자입력</h4>
          <!-- <p>
            개발시 참고 : <a
              href="https://codepen.io/himalayasingh/pen/QVRZXG"
              target="_blank"
            >링크</a>
          </p> -->
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div
                  class="form-group jumin-group"
                  role="group"
                  aria-labelledby="juminNum"
                >
                  <label
                    id="juminNum"
                    class="form-label"
                  >주민등록번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="6"
                            aria-label="주민등록번호 앞자리"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            name="jumin2"
                            type="text"
                            maxlength="1"
                            aria-label="주민등록번호 뒷자리 첫번째"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div
                  class="form-group jumin-group invalid"
                  role="group"
                  aria-labelledby="juminNum"
                >
                  <label
                    id="juminNum"
                    class="form-label"
                  >주민등록번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="6"
                            value="990104"
                            aria-label="주민등록번호 앞자리"
                            aria-describedby="invalidText"
                          >
                        </div>
                        <div class="key-dots d-none">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            name="jumin2"
                            type="text"
                            maxlength="1"
                            value="2"
                            aria-label="주민등록번호 뒷자리 첫번째"
                            aria-describedby="invalidText"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot empty" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    주민등록번호가 올바르지 않습니다.
                  </div>
                </div>
              </div>

              <!-- disabled / readonly -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div
                  class="form-group jumin-group disabled"
                  role="group"
                  aria-labelledby="juminNum"
                >
                  <label
                    id="juminNum"
                    class="form-label"
                  >주민등록번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="6"
                            value="990104"
                            aria-label="주민등록번호 앞자리"
                            disabled
                          >
                        </div>
                        <div class="key-dots d-none">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            name="jumin2"
                            type="text"
                            maxlength="1"
                            value="2"
                            aria-label="주민등록번호 뒷자리 첫번째"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot empty" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div
      class="form-group jumin-group"
      role="group"
      aria-labelledby="juminNum"
    &gt;
      &lt;label
        id="juminNum"
        class="form-label"
      &gt;주민등록번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="6"
                aria-label="주민등록번호 앞자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                name="jumin2"
                type="text"
                maxlength="1"
                aria-label="주민등록번호 뒷자리 첫번째"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;
              지우기
            &lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div
      class="form-group jumin-group invalid"
      role="group"
      aria-labelledby="juminNum"
    &gt;
      &lt;label
        id="juminNum"
        class="form-label"
      &gt;주민등록번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="6"
                value="990104"
                aria-label="주민등록번호 앞자리"
                aria-describedby="invalidText"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots d-none"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                name="jumin2"
                type="text"
                maxlength="1"
                value="2"
                aria-label="주민등록번호 뒷자리 첫번째"
                aria-describedby="invalidText"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot empty" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;
              지우기
            &lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        주민등록번호가 올바르지 않습니다.
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled / readonly--&gt;
    &lt;div
      class="form-group jumin-group disabled"
      role="group"
      aria-labelledby="juminNum"
    &gt;
      &lt;label
        id="juminNum"
        class="form-label"
      &gt;주민등록번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="6"
                value="990104"
                aria-label="주민등록번호 앞자리"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots d-none"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                name="jumin2"
                type="text"
                maxlength="1"
                value="2"
                aria-label="주민등록번호 뒷자리 첫번째"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot empty" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;
              지우기
            &lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 휴대폰번호 -->
          <h4>휴대폰번호</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div
                  class="form-group phone-num-group"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">SKT</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        aria-label="휴대폰 번호"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div
                  class="form-group phone-num-group invalid"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">SKT</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        value="010-1234-5678"
                        aria-label="휴대폰 번호"
                        aria-describedby="invalidText"
                        aria-invalid="true"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    휴대폰번호가 올바르지 않습니다.
                  </div>
                </div>
              </div>
              <!-- disabled / readonly-->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div
                  class="form-group phone-num-group disabled"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">SKT</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        value="010-1234-5678"
                        aria-label="휴대폰 번호"
                        disabled
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- U+알뜰폰 -->
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div
                  class="form-group phone-num-group"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">LG U+ 알뜰폰</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        aria-label="휴대폰 번호"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div
                  class="form-group phone-num-group invalid"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">LG U+ 알뜰폰</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        value="010-****-****"
                        aria-label="휴대폰 번호"
                        aria-describedby="invalidText"
                        aria-invalid="true"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    휴대폰번호가 올바르지 않습니다.
                  </div>
                </div>
              </div>
              <!-- disabled / readonly -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div
                  class="form-group phone-num-group disabled"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">LG U+ 알뜰폰</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        value="010-****-****"
                        aria-label="휴대폰 번호"
                        disabled
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- guide text -->
              <div>
                <p class="desc-text">
                  guide-text
                </p>
                <div
                  class="form-group phone-num-group"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">SKT</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        value="010-1234-5678"
                        aria-label="휴대폰 번호"
                        aria-describedby="guideText"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="guideText"
                    class="guide-feedback"
                    role="alert"
                  >
                    휴대폰 정보와 통신사 가입정보의 일치여부를 확인합니다.
                  </div>
                </div>
              </div>
              <div>
                <p class="desc-text">
                  guide-text
                </p>
                <div
                  class="form-group phone-num-group"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">LG U+ 알뜰폰</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        value="010-****-****"
                        aria-label="휴대폰 번호"
                        aria-describedby="guideText"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="guideText"
                    class="guide-feedback"
                    role="alert"
                  >
                    휴대폰 정보와 통신사 가입정보의 일치여부를 확인합니다.
                  </div>
                </div>
              </div>
              <!-- disabled(readonly) + guide text -->
              <div>
                <p class="desc-text">
                  disabled(readonly) + guide-text
                </p>
                <div
                  class="form-group phone-num-group disabled"
                  role="group"
                  aria-labelledby="phoneNum"
                >
                  <label
                    id="phoneNum"
                    class="form-label"
                  >휴대폰번호</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input-select"
                        data-toggle="dropdown"
                        aria-label="통신사 선택"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="select-text">LG U+ 알뜰폰</span>
                        <uu-icon
                          icon="arrow1"
                          size="24"
                          direction="bottom"
                        />
                      </button>
                    </div>
                    <div class="input-grow">
                      <input
                        class="form-control"
                        type="tell"
                        name="phone-num"
                        value="010-****-****"
                        aria-label="휴대폰 번호"
                        aria-describedby="guideText"
                        disabled
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="guideText"
                    class="guide-feedback"
                    role="alert"
                  >
                    휴대폰 정보와 통신사 가입정보의 일치여부를 확인합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div
      class="form-group phone-num-group"
      role="group"
      aria-labelledby="phoneNum"
    &gt;
      &lt;label
        id="phoneNum"
        class="form-label"
      &gt;휴대폰번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-group-prepend"&gt;
          &lt;button
            type="button"
            class="btn btn-input-select"
            data-toggle="dropdown"
            aria-label="통신사 선택"
            aria-haspopup="true"
            aria-expanded="false"
          &gt;
            &lt;span class="select-text"&gt;SKT&lt;/span&gt;
            &lt;uu-icon
              icon="arrow1"
              size="24"
              direction="bottom"
            /&gt;
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            class="form-control"
            type="tell"
            name="phone-num"
            aria-label="휴대폰 번호"
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div
      class="form-group phone-num-group invalid"
      role="group"
      aria-labelledby="phoneNum"
    &gt;
      &lt;label
        id="phoneNum"
        class="form-label"
      &gt;휴대폰번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-group-prepend"&gt;
          &lt;button
            type="button"
            class="btn btn-input-select"
            data-toggle="dropdown"
            aria-label="통신사 선택"
            aria-haspopup="true"
            aria-expanded="false"
          &gt;
            &lt;span class="select-text"&gt;SKT&lt;/span&gt;
            &lt;uu-icon
              icon="arrow1"
              size="24"
              direction="bottom"
            /&gt;
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            class="form-control"
            type="tell"
            name="phone-num"
            value="010-1234-5678"
            aria-label="휴대폰 번호"
            aria-describedby="invalidText"
            aria-invalid="ture"
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        휴대폰번호가 올바르지 않습니다.
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled / readonly--&gt;
    &lt;div
      class="form-group phone-num-group disabled"
      role="group"
      aria-labelledby="phoneNum"
    &gt;
      &lt;label
        id="phoneNum"
        class="form-label"
      &gt;휴대폰번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-group-prepend"&gt;
          &lt;button
            type="button"
            class="btn btn-input-select"
            data-toggle="dropdown"
            aria-label="통신사 선택"
            aria-haspopup="true"
            aria-expanded="false"
          &gt;
            &lt;span class="select-text"&gt;SKT&lt;/span&gt;
            &lt;uu-icon
              icon="arrow1"
              size="24"
              direction="bottom"
            /&gt;
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            class="form-control"
            type="tell"
            name="phone-num"
            value="010-1234-5678"
            aria-label="휴대폰 번호"
            disabled
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled(readonly) + guide-text --&gt;
    &lt;div
      class="form-group phone-num-group disabled"
      role="group"
      aria-labelledby="phoneNum"
    &gt;
      &lt;label
        id="phoneNum"
        class="form-label"
      &gt;휴대폰번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-group-prepend"&gt;
          &lt;button
            type="button"
            class="btn btn-input-select"
            data-toggle="dropdown"
            aria-label="통신사 선택"
            aria-haspopup="true"
            aria-expanded="false"
          &gt;
            &lt;span class="select-text"&gt;LG U+ 알뜰폰&lt;/span&gt;
            &lt;uu-icon
              icon="arrow1"
              size="24"
              direction="bottom"
            /&gt;
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            class="form-control"
            type="tell"
            name="phone-num"
            value="010-1234-5678"
            aria-label="휴대폰 번호"
            aria-describedby="guideText"
            disabled
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="guideText"
        class="guide-feedback"
        role="alert"
      &gt;
        휴대폰 정보와 통신사 가입정보의 일치여부를 확인합니다.
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- text count -->
          <h4>text count</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- 라벨 있을때 -->
              <div>
                <p class="desc-text">
                  라벨 있을때
                </p>
                <div class="form-group">
                  <label
                    class="form-label"
                    for="testLabel"
                  >라벨명</label>
                  <div class="input-group">
                    <input
                      id="testLabel"
                      class="form-control input-grow"
                      name="testLabel"
                      type="text"
                      aria-describedby="textCount"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="textCount"
                    class="text-count"
                    role="status"
                    aria-live="polite"
                    aria-relevant="additions"
                  >
                    <span class="sr-only">60자까지 입력가능</span>
                    <span>0</span> <b class="text-bar">|</b> 60
                  </div>
                </div>
              </div>
              <!-- 라벨 없을때 -->
              <div>
                <p class="desc-text">
                  라벨 없을때
                </p>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="aaLabel"
                      class="form-control input-grow"
                      name="aa-label"
                      type="text"
                      aria-label="라벨이름"
                      aria-describedby="textCount"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="textCount"
                    class="text-count"
                    role="status"
                    aria-live="polite"
                    aria-relevant="additions"
                  >
                    <span class="sr-only">60자까지 입력가능</span>
                    <span>0</span> <b class="text-bar">|</b> 60
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- 라벨 있을때 --&gt;
    &lt;div class="form-group"&gt;
      &lt;label
        class="form-label"
        for="testLabel"
      &gt;라벨명&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          id="testLabel"
          class="form-control input-grow"
          name="testLabel"
          type="text"
          aria-describedby="textCount"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="textCount"
        class="text-count"
        role="status"
        aria-live="polite"
        aria-relevant="additions"
      &gt;
        &lt;span class="sr-only"&gt;60자까지 입력가능&lt;/span&gt;
        &lt;span&gt;0&lt;/span&gt; &lt;b class="text-bar"&gt;|&lt;/b&gt; 60
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- 라벨 없을때 --&gt;
    &lt;div class="form-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          id="aaLabel"
          class="form-control input-grow"
          name="aa-label"
          type="text"
          aria-label="라벨이름"
          aria-describedby="textCount"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="textCount"
        class="text-count"
        role="status"
        aria-live="polite"
        aria-relevant="additions"
      &gt;
        &lt;span class="sr-only"&gt;60자까지 입력가능&lt;/span&gt;
        &lt;span&gt;0&lt;/span&gt; &lt;b class="text-bar"&gt;|&lt;/b&gt; 60
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 카드 비밀번호 -->
          <h4>카드비밀번호</h4>
          <!-- <p>
            개발시 참고 : <a
              href="https://codepen.io/himalayasingh/pen/QVRZXG"
              target="_blank"
            >링크</a>
          </p> -->
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group card-pw-group">
                  <label
                    class="form-label"
                    for="cardPw"
                  >카드비밀번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="cardPw"
                            class="key"
                            name="cardPw"
                            type="password"
                            maxlength="4"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group card-pw-group invalid">
                  <label
                    class="form-label"
                    for="cardPw"
                  >카드비밀번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="cardPw"
                            class="key"
                            name="card-pw"
                            type="password"
                            maxlength="4"
                            aria-describedby="invalidText"
                            aria-invalid="true"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    카드비밀번호가 일치하지 않습니다
                  </div>
                </div>
              </div>
              <!-- disabled / readonly -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div class="form-group card-pw-group disabled">
                  <label
                    class="form-label"
                    for="cardPw"
                  >카드비밀번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="cardPw"
                            class="key"
                            name="cardPw"
                            type="password"
                            maxlength="4"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 ���정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group card-pw-group"&gt;
      &lt;label
        class="form-label"
        for="cardPw"
      &gt;카드 비밀번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                id="cardPw"
                class="key"
                name="cardPw"
                type="password"
                maxlength="4"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots-10"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append">
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

  &lt;!-- error --&gt;
  &lt;div class="form-group card-pw-group invalid"&gt;
    &lt;label
      class="form-label"
      for="cardPw"
    &gt;카드 비밀번호&lt;/label&gt;
    &lt;div class="input-group"&gt;
      &lt;div class="input-grow"&gt;
        &lt;div class="pad-cnt-wrap"&gt;
          &lt;div class="key-cover"&gt;
            &lt;input
              id="cardPw"
              class="key"
              name="card-pw"
              type="password"
              maxlength="4"
              aria-describedby="invalidText"
              aria-invalid="true"
            &gt;
          &lt;/div&gt;
          &lt;div class="key-dots"&gt;
            &lt;div class="dots-10"&gt;
              &lt;span class="dot full" /&gt;
              &lt;span class="dot full" /&gt;
              &lt;span class="dot full" /&gt;
              &lt;span class="dot full" /&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="input-group-append">
        &lt;button
          type="button"
          class="btn btn-input"
        &gt;
          &lt;uu-icon
            icon="delete"
            size="20"
          /&gt;
          &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div
      id="invalidText"
      class="invalid-feedback"
      role="alert"
    &gt;
      카드 비밀번호가 일치하지 않습니다
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- disabled / readonly --&gt;
  &lt;div class="form-group card-pw-group disabled"&gt;
    &lt;label
      class="form-label"
      for="cardPw"
    &gt;카드 비밀번호&lt;/label&gt;
    &lt;div class="input-group"&gt;
      &lt;div class="input-grow"&gt;
        &lt;div class="pad-cnt-wrap"&gt;
          &lt;div class="key-cover"&gt;
            &lt;input
              id="cardPw"
              class="key"
              name="cardPw"
              type="password"
              maxlength="4"
              disabled
            &gt;
          &lt;/div&gt;
          &lt;div class="key-dots"&gt;
            &lt;div class="dots-10"&gt;
              &lt;span class="dot" /&gt;
              &lt;span class="dot" /&gt;
              &lt;span class="dot" /&gt;
              &lt;span class="dot" /&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="input-group-append">
        &lt;button
          type="button"
          class="btn btn-input"
        &gt;
          &lt;uu-icon
            icon="delete"
            size="20"
          /&gt;
          &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 공동인증서 비밀번호 -->
          <h4>공동인증서 비밀번호</h4>
          <!-- <p>
            개발시 참고 : <a
              href="https://codepen.io/himalayasingh/pen/QVRZXG"
              target="_blank"
            >링크</a>
          </p> -->
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group certifi-pw-group">
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="certiPw"
                            class="key fs-16"
                            name="certiPw"
                            type="password"
                            maxlength="4"
                            placeholder="공동인증서 비밀번호를 입력해주세요."
                            aria-label="공동인증서 비밀번호"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group certifi-pw-group invalid">
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="certiPw"
                            class="key fs-16"
                            name="certiPw"
                            type="password"
                            maxlength="4"
                            value="1234"
                            placeholder="공동인증서 비밀번호를 입력해주세요."
                            aria-label="공동인증서 비밀번호"
                            aria-describedby="invalidText"
                            aria-invalid="true"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    공동인증서의 비밀번호와 일치하지 않습니다.<br>확인 후 다시 입력해주세요.
                  </div>
                </div>
              </div>
              <!-- disabled / readonly -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div class="form-group certifi-pw-group disabled">
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="certiPw"
                            class="key fs-16"
                            name="certiPw"
                            type="password"
                            maxlength="4"
                            value="1234"
                            placeholder="공동인증서 비밀번호를 입력해주세요."
                            aria-label="공동인증서 비밀번호"
                            aria-invalid="false"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">
                          지우기
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group certifi-pw-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                id="certiPw"
                class="key fs-16"
                name="certiPw"
                type="password"
                maxlength="4"
                placeholder="공동인증서 비밀번호를 입력해주세요."
                aria-label="공동인증서 비밀번호"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots-10"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div class="form-group certifi-pw-group invalid"&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                id="certiPw"
                class="key fs-16"
                name="certiPw"
                type="password"
                maxlength="4"
                placeholder="공동인증서 비밀번호를 입력해주세요."
                aria-label="공동인증서 비밀번호"
                aria-describedby="invalidText"
                aria-invalid="true"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots-10"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append">
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;
              지우기
            &lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        공동인증서의 비밀번호와 일치하지 않습니다.&lt;br&gt;확인 후 다시 입력해주세요.
      &lt;/div&gt;
    &lt;/div&gt;

  &lt;!-- disabled / readonly --&gt;
  &lt;div class="form-group certifi-pw-group disabled"&gt;
    &lt;div class="input-group"&gt;
      &lt;div class="input-grow"&gt;
        &lt;div class="pad-cnt-wrap"&gt;
          &lt;div class="key-cover"&gt;
            &lt;input
              id="certiPw"
              class="key fs-16"
              name="certiPw"
              type="password"
              maxlength="4"
              placeholder="공동인증서 비밀번호를 입력해주세요."
              aria-label="공동인증서 비밀번호"
              aria-invalid="false"
              disabled
            &gt;
          &lt;/div&gt;
          &lt;div class="key-dots"&gt;
            &lt;div class="dots-10"&gt;
              &lt;span class="dot" /&gt;
              &lt;span class="dot" /&gt;
              &lt;span class="dot" /&gt;
              &lt;span class="dot" /&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="input-group-append"&gt;
        &lt;button
          type="button"
          class="btn btn-input"
        &gt;
          &lt;uu-icon
            icon="delete"
            size="20"
          /&gt;
          &lt;span class="sr-only"&gt;
            지우기
          &lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 인증번호 -->
          <h4>인증번호(type1)</h4>
          <p>
            개발시 참고 : <a
              href="https://codepen.io/datwood/pen/NOpgNe"
              target="_blank"
            >링크1</a>
            <a
              href="https://codepen.io/olton/pen/NWNBEod"
              target="_blank"
            >링크2</a>
            <a
              href="https://codepen.io/geforester/pen/LMNQoe"
              target="_blank"
            >링크3</a>
          </p>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group">
                  <label
                    class="form-label"
                    for="validity"
                  >
                    <span>인증번호 받는 방법</span>&nbsp;
                    <uu-tooltip
                      bottom
                      left
                      small
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="tip"
                          size="16"
                          color="gray"
                        />
                      </template>
                      <template v-slot:tooltip-content>
                        내용입력
                      </template>
                    </uu-tooltip>
                  </label>
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="validity"
                        class="form-control"
                        name="validity"
                        type="text"
                        maxlength="14"
                        placeholder="1234 - 1234 - 1234"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group invalid">
                  <label
                    class="form-label"
                    for="validity"
                  >
                    <span>인증번호 받는 방법</span>&nbsp;
                    <uu-tooltip
                      bottom
                      left
                      small
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="tip"
                          size="16"
                          color="gray"
                        />
                      </template>
                      <template v-slot:tooltip-content>
                        내용입력
                      </template>
                    </uu-tooltip>
                  </label>
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="validity"
                        class="form-control"
                        name="validity"
                        type="text"
                        maxlength="14"
                        value="1234 - 1234 - 1234"
                        placeholder="1234 - 1234 - 1234"
                        aria-describedby="invalidText"
                        aria-invalid="true"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    정확한 인증번호가 아닙니다. 확인 후 다시 입력해주세요.
                  </div>
                </div>
              </div>
              <!-- disabled / readonly -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div class="form-group disabled">
                  <label
                    class="form-label"
                    for="validity"
                  >
                    <span>인증번호 받는 방법</span>&nbsp;
                    <uu-tooltip
                      bottom
                      left
                      small
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="tip"
                          size="16"
                          color="gray"
                        />
                      </template>
                      <template v-slot:tooltip-content>
                        내용입력
                      </template>
                    </uu-tooltip>
                  </label>
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="validity"
                        class="form-control"
                        name="validity"
                        type="text"
                        maxlength="14"
                        value="1234 - 1234 - 1234"
                        placeholder="1234 - 1234 - 1234"
                        disabled
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group"&gt;
      &lt;label
        class="form-label"
        for="validity"
      &gt;
        &lt;span&gt;인증번호 받는 방법&lt;/span&gt;&nbsp;
        &lt;uu-tooltip
          bottom
          left
          small
        &gt;
          &lt;template v-slot:tooltip-button&gt;
            &lt;uu-icon
              icon="tip"
              size="16"
              color="gray"
            /&gt;
          &lt;/template&gt;
          &lt;template v-slot:tooltip-content&gt;
            내용입력
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
      &lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            id="validity"
            class="form-control"
            name="validity"
            type="text"
            maxlength="14"
            placeholder="1234 - 1234 - 1234"
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div class="form-group invalid"&gt;
      &lt;label
        class="form-label"
        for="validity"
      &gt;
        &lt;span&gt;인증번호 받는 방법&lt;/span&gt;&nbsp;
        &lt;uu-tooltip
          bottom
          left
          small
        &gt;
          &lt;template v-slot:tooltip-button&gt;
            &lt;uu-icon
              icon="tip"
              size="16"
              color="gray"
            /&gt;
          &lt;/template&gt;
          &lt;template v-slot:tooltip-content&gt;
            내용입력
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
      &lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            id="validity"
            class="form-control"
            name="validity"
            type="text"
            maxlength="14"
            value="1234 - 1234 - 1234"
            placeholder="1234 - 1234 - 1234"
            aria-describedby="invalidText"
            aria-invalid="true"
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        정확한 인증번호가 아닙니다. 확인 후 다시 입력해주세요.
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled / readonly--&gt;
    &lt;div class="form-group disabled"&gt;
      &lt;label
        class="form-label"
        for="validity"
      &gt;
        &lt;span&gt;인증번호 받는 방법&lt;/span&gt;&nbsp;
        &lt;uu-tooltip
          bottom
          left
          small
        &gt;
          &lt;template v-slot:tooltip-button&gt;
            &lt;uu-icon
              icon="tip"
              size="16"
              color="gray"
            /&gt;
          &lt;/template&gt;
          &lt;template v-slot:tooltip-content&gt;
            내용입력
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
      &lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            id="validity"
            class="form-control"
            name="validity"
            type="text"
            maxlength="14"
            value="1234 - 1234 - 1234"
            placeholder="1234 - 1234 - 1234"
            disabled
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 인증번호(type2) -->
          <h4>인증번호(type2)</h4>
          <div class="view-exam">
            <div class="flex-area">
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="validity"
                        class="form-control"
                        name="validity"
                        type="text"
                        maxlength="6"
                        aria-label="인증번호"
                      >
                    </div>
                    <div class="input-group-append">
                      <div
                        id="timeCount"
                        class="time-count"
                        role="count"
                        aria-live="polite"
                        aria-relevant="additions"
                      >
                        <span class="sr-only">3분 이내 입력가능</span>
                        <span>03<span class="colon">:</span>00</span>
                      </div>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm"
                      >
                        <span>재요청</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group invalid">
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="validity"
                        class="form-control"
                        name="validity"
                        type="text"
                        maxlength="6"
                        placeholder="000000"
                        value="236322"
                        aria-label="인증번호"
                        aria-describedby="invalidText"
                        aria-invalid="true"
                      >
                    </div>
                    <div class="input-group-append">
                      <div
                        id="timeCount"
                        class="time-count"
                        role="count"
                        aria-live="polite"
                        aria-relevant="additions"
                      >
                        <span class="sr-only">3분 이내 입력가능</span>
                        <span>02<span class="colon">:</span>12</span>
                      </div>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm"
                      >
                        <span>재요청</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    공동인증서의 비밀번호와 일치하지 않습니다. <br>확인 후 다시 입력해주세요.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            id="validity"
            class="form-control"
            name="validity"
            type="text"
            maxlength="6"
            placeholder="000000"
            aria-label="인증번호"
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;div
            id="timeCount"
            class="time-count"
            role="count"
            aria-live="polite"
            aria-relevant="additions"
          &gt;
            &lt;span class="sr-only"&gt;3분 이내 입력가능&lt;/span&gt;
            &lt;span&gt;03&lt;span class="colon"&gt;:&lt;/span&gt;00&lt;/span&gt;
          &lt;/div&gt;
          &lt;button
            type="button"
            class="btn btn-secondary btn-sm"
          &gt;
            &lt;span&gt;재요청&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div class="form-group invalid"&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            id="validity"
            class="form-control"
            name="validity"
            type="text"
            maxlength="6"
            placeholder="000000"
            value="236322"
            aria-label="인증번호"
            aria-describedby="invalidText"
            aria-invalid="true"
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;div
            id="timeCount"
            class="time-count"
            role="count"
            aria-live="polite"
            aria-relevant="additions"
          &gt;
            &lt;span class="sr-only"&gt;3분 이내 입력가능&lt;/span&gt;
            &lt;span&gt;02&lt;span class="colon"&gt;:&lt;/span&gt;12&lt;/span&gt;
          &lt;/div&gt;
          &lt;button
            type="button"
            class="btn btn-secondary btn-sm"
          &gt;
            &lt;span&gt;재요청&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        공동인증서의 비밀번호와 일치하지 않습니다. &lt;br&gt;확인 후 다시 입력해주세요.
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 유효기간 -->
          <h4>유효기간</h4>
          <p>
            개발시 참고 : <a
              href="https://codepen.io/datwood/pen/NOpgNe"
              target="_blank"
            >링크1</a>
            <a
              href="https://codepen.io/olton/pen/NWNBEod"
              target="_blank"
            >링크2</a>
            <a
              href="https://codepen.io/geforester/pen/LMNQoe"
              target="_blank"
            >링크3</a>
          </p>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group">
                  <label
                    class="form-label"
                    for="validity"
                  >유효기간</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="validity"
                        class="form-control"
                        name="validity"
                        type="text"
                        maxlength="5"
                        placeholder="MM/YY"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group invalid">
                  <label
                    class="form-label"
                    for="validity"
                  >유효기간</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="validity"
                        class="form-control"
                        name="validity"
                        type="text"
                        maxlength="5"
                        placeholder="MM/YY"
                        value="03 / YY"
                        aria-describedby="invalidText"
                        aria-invalid="true"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    유효기간의 형식과 맞지 않습니다.
                  </div>
                </div>
              </div>
              <!-- disabled / readonly -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div class="form-group disabled">
                  <label
                    class="form-label"
                    for="validity"
                  >유효기간</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="validity"
                        class="form-control"
                        name="validity"
                        type="text"
                        maxlength="5"
                        placeholder="MM/YY"
                        value="03 / YY"
                        disabled
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group"&gt;
      &lt;label
        class="form-label"
        for="validity"
      &gt;유효기간&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          id="validity"
          class="form-control"
          name="validity"
          type="text"
          maxlength="5"
          placeholder="MM/YY"
        &gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div class="form-group invalid"&gt;
      &lt;label
        class="form-label"
        for="validity"
      &gt;유효기간&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          id="validity"
          class="form-control"
          name="validity"
          type="text"
          maxlength="5"
          placeholder="MM/YY"
          value="03 / YY"
          aria-describedby="invalidText"
          aria-invalid="true"
        &gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        유효기간의 형식과 맞지 않습니다.
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled / readonly--&gt;
    &lt;div class="form-group"&gt;
      &lt;label
        class="form-label"
        for="validity"
      &gt;유효기간&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          id="validity"
          class="form-control"
          name="validity"
          type="text"
          maxlength="5"
          placeholder="MM/YY"
          disabled
        &gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 카드번호 -->
          <h4>카드번호</h4>
          <!-- <p>
            개발시 참고 : <a
              href="https://codepen.io/himalayasingh/pen/QVRZXG"
              target="_blank"
            >링크</a>
          </p> -->
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div
                  class="form-group card-num-group"
                  role="group"
                  aria-labelledby="cardNum"
                >
                  <label
                    id="cardNum"
                    class="form-label"
                  >카드번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="4"
                            aria-label="카드번호 네개중 첫번째"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin2"
                            maxlength="4"
                            aria-label="카드번호 네개중 두번째"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin3"
                            maxlength="4"
                            aria-label="카드번호 네개중 세번째"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin4"
                            maxlength="4"
                            aria-label="카드번호 네개중 마지막"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div
                  class="form-group card-num-group invalid"
                  role="group"
                  aria-labelledby="cardNum"
                >
                  <label
                    id="cardNum"
                    class="form-label"
                  >카드번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="4"
                            value="1234"
                            aria-label="카드번호 네개중 첫번째"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin2"
                            maxlength="4"
                            aria-label="카드번호 네개중 두번째"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin3"
                            maxlength="4"
                            aria-label="카드번호 네개중 세번째"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin4"
                            maxlength="4"
                            value="5678"
                            aria-label="카드번호 네개중 마지막"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    존재하지 않는 카드번호입니다.
                  </div>
                </div>
              </div>
              <!-- disabled / readonly -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div
                  class="form-group card-num-group disabled"
                  role="group"
                  aria-labelledby="cardNum"
                >
                  <label
                    id="cardNum"
                    class="form-label"
                  >카드번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin1"
                            maxlength="4"
                            aria-label="카드번호 네개중 첫번째"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin2"
                            maxlength="4"
                            aria-label="카드번호 네개중 두번째"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin3"
                            maxlength="4"
                            aria-label="카드번호 네개중 세번째"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="jumin4"
                            maxlength="4"
                            aria-label="카드번호 네개중 마지막"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div
      class="form-group card-num-group"
      role="group"
      aria-labelledby="cardNum"
    &gt;
      &lt;label
        id="cardNum"
        class="form-label"
      &gt;카드번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="4"
                aria-label="카드번호 네개중 첫번째"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin2"
                maxlength="4"
                aria-label="카드번호 네개중 두번째"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin3"
                maxlength="4"
                aria-label="카드번호 네개중 세번째"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin4"
                maxlength="4"
                aria-label="카드번호 네개중 마지막"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div
      class="form-group card-num-group invalid"
      role="group"
      aria-labelledby="cardNum"
    &gt;
      &lt;label
        id="cardNum"
        class="form-label"
      &gt;카드번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="4"
                value="1234"
                aria-label="카드번호 네개중 첫번째"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin2"
                maxlength="4"
                aria-label="카드번호 네개중 두번째"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin3"
                maxlength="4"
                aria-label="카드번호 네개중 세번째"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin4"
                maxlength="4"
                value="5678"
                aria-label="카드번호 네개중 마지막"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        존재하지 않는 카드번호입니다.
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled / readonly--&gt;
   &lt;div
      class="form-group card-num-group disabled"
      role="group"
      aria-labelledby="cardNum"
    &gt;
      &lt;label
        id="cardNum"
        class="form-label"
      &gt;카드번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin1"
                maxlength="4"
                aria-label="카드번호 네개중 첫번째"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin2"
                maxlength="4"
                aria-label="카드번호 네개중 두번째"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin3"
                maxlength="4"
                aria-label="카드번호 네개중 세번째"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="jumin4"
                maxlength="4"
                aria-label="카드번호 네개중 마지막"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!--  cvc번호 -->
          <h4>CVC번호(type1)</h4>
          <!-- <p>
            개발시 참고 : <a
              href="https://codepen.io/himalayasingh/pen/QVRZXG"
              target="_blank"
            >링크</a>
          </p> -->
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group cvc-circle-group">
                  <label
                    class="form-label"
                    for="cvcPw"
                  >
                    <span>CVC번호</span>&nbsp;
                    <uu-tooltip
                      bottom
                      left
                      small
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="tip"
                          size="16"
                          color="gray"
                        />
                      </template>
                      <template v-slot:tooltip-content>
                        내용입력
                      </template>
                    </uu-tooltip>
                  </label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="cvcPw"
                            class="key"
                            name="cvcPw"
                            type="password"
                            maxlength="3"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group cvc-circle-group invalid">
                  <label
                    class="form-label"
                    for="cvcPw"
                  >
                    <span>CVC번호</span>&nbsp;
                    <uu-tooltip
                      bottom
                      left
                      small
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="tip"
                          size="16"
                          color="gray"
                        />
                      </template>
                      <template v-slot:tooltip-content>
                        내용입력
                      </template>
                    </uu-tooltip>
                  </label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="cvcPw"
                            class="key"
                            name="cvcPw"
                            type="password"
                            maxlength="3"
                            aria-describedby="invalidText"
                            aria-invalid="true"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    존재하지 않는 카드번호입니다.
                  </div>
                </div>
              </div>
              <!-- disabled / readonly -->
              <div>
                <p class="desc-text">
                  disabled / readonly
                </p>
                <div class="form-group cvc-circle-group disabled">
                  <label
                    class="form-label"
                    for="cvcPw"
                  >
                    <span>CVC번호</span>&nbsp;
                    <uu-tooltip
                      bottom
                      left
                      small
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="tip"
                          size="16"
                          color="gray"
                        />
                      </template>
                      <template v-slot:tooltip-content>
                        내용입력
                      </template>
                    </uu-tooltip>
                  </label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            id="cvcPw"
                            class="key"
                            name="cvcPw"
                            type="password"
                            maxlength="3"
                            disabled
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots-10">
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group cvc-circle-group"&gt;
      &lt;label
        class="form-label"
        for="cvcPw"
      &gt;
        &lt;span&gt;CVC번호&lt;/span&gt;&nbsp;
        &lt;uu-tooltip
          bottom
          left
          small
        &gt;
          &lt;template v-slot:tooltip-button&gt;
            &lt;uu-icon
              icon="tip"
              size="16"
              color="gray"
            /&gt;
          &lt;/template&gt;
          &lt;template v-slot:tooltip-content&gt;
            내용입력
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
      &lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                id="cvcPw"
                class="key"
                name="cvcPw"
                type="password"
                maxlength="3"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots-10"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div class="form-group cvc-circle-group invalid"&gt;
      &lt;label
        class="form-label"
        for="cvcPw"
      &gt;
        &lt;span>CVC번호&lt;/span>&nbsp;
        &lt;uu-tooltip
          bottom
          left
          small
        &gt;
          &lt;template v-slot:tooltip-button&gt;
            &lt;uu-icon
              icon="tip"
              size="16"
              color="gray"
            /&gt;
          &lt;/template&gt;
          &lt;template v-slot:tooltip-content&gt;
            내용입력
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
      &lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                id="cvcPw"
                class="key"
                name="cvcPw"
                type="password"
                maxlength="3"
                aria-describedby="invalidText"
                aria-invalid="true"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots-10"&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        존재하지 않는 카드번호입니다.
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled / readonly--&gt;
    &lt;div class="form-group cvc-circle-group disabled"&gt;
      &lt;label
        class="form-label"
        for="cvcPw"
      &gt;
        &lt;span&gt;CVC번호&lt;/span&gt;&nbsp;
        &lt;uu-tooltip
          bottom
          left
          small
        &gt;
          &lt;template v-slot:tooltip-button&gt;
            &lt;uu-icon
              icon="tip"
              size="16"
              color="gray"
            /&gt;
          &lt;/template&gt;
          &lt;template v-slot:tooltip-content&gt;
            내용입력
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
      &lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                id="cvcPw"
                class="key"
                name="cvcPw"
                type="password"
                maxlength="3"
                disabled
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots-10"&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- CVC 번호 -->
          <h4>cvc번호(type2)</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group">
                  <label
                    class="form-label"
                    for="cvcNum"
                  >
                    <span>CVC번호</span>&nbsp;
                    <uu-tooltip
                      bottom
                      left
                      small
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="tip"
                          size="16"
                          color="gray"
                        />
                      </template>
                      <template v-slot:tooltip-content>
                        내용입력
                      </template>
                    </uu-tooltip>
                  </label>
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="cvcNum"
                        class="form-control"
                        name="cvcNum"
                        type="text"
                        maxlength="3"
                        placeholder="CVC 3자리 입력"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm disabled"
                      >
                        <span>버튼이름</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group invalid">
                  <label
                    class="form-label"
                    for="cvcNum"
                  >
                    <span>CVC번호</span>&nbsp;
                    <uu-tooltip
                      bottom
                      left
                      small
                    >
                      <template v-slot:tooltip-button>
                        <uu-icon
                          icon="tip"
                          size="16"
                          color="gray"
                        />
                      </template>
                      <template v-slot:tooltip-content>
                        내용입력
                      </template>
                    </uu-tooltip>
                  </label>
                  <div class="input-group">
                    <div class="input-grow">
                      <input
                        id="cvcNum"
                        class="form-control"
                        name="cvcNum"
                        type="text"
                        maxlength="3"
                        value="485"
                        placeholder="CVC 3자리 입력"
                        aria-describedby="invalidText"
                        aria-invalid="true"
                      >
                    </div>
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                      >
                        <span>버튼이름</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    체크메세지 출력영역입니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group"&gt;
      &lt;label
        class="form-label"
        for="cvcNum"
      &gt;
        &lt;span&gt;CVC번호&lt;/span&gt;&nbsp;
        &lt;uu-tooltip
          bottom
          left
          small
        &gt;
          &lt;template v-slot:tooltip-button&gt;
            &lt;uu-icon
              icon="tip"
              size="16"
              color="gray"
            /&gt;
          &lt;/template&gt;
          &lt;template v-slot:tooltip-content&gt;
            내용입력
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
      &lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            id="cvcNum"
            class="form-control"
            name="cvcNum"
            type="text"
            maxlength="3"
            placeholder="CVC 3자리 입력"
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="btn btn-primary btn-sm disabeld"
          &gt;
            &lt;span&gt;버튼이름&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div class="form-group invalid"&gt;
      &lt;label
        class="form-label"
        for="cvcNum"
      &gt;
        &lt;span>CVC번호&lt;/span>&nbsp;
        &lt;uu-tooltip
          bottom
          left
          small
        &gt;
          &lt;template v-slot:tooltip-button&gt;
            &lt;uu-icon
              icon="tip"
              size="16"
              color="gray"
            /&gt;
          &lt;/template&gt;
          &lt;template v-slot:tooltip-content&gt;
            내용입력
          &lt;/template&gt;
        &lt;/uu-tooltip&gt;
      &lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;input
            id="cvcNum"
            class="form-control"
            name="cvcNum"
            type="text"
            maxlength="3"
            value="485"
            placeholder="CVC 3자리 입력"
            aria-describedby="invalidText"
            aria-invalid="true"
          &gt;
        &lt;/div&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="btn btn-primary btn-sm"
          &gt;
            &lt;span&gt;버튼이름&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        체크메세지 출력영역입니다.
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 금액충전 -->
          <h4>금액충전</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default1
                </p>
                <div class="form-group charge-amount-group">
                  <div class="input-group">
                    <input
                      class="form-control input-grow ph-888"
                      type="text"
                      name="charge-amount"
                      placeholder="충전금액"
                      aria-label="충전금액"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- default -->
              <div>
                <p class="desc-text">
                  default2
                </p>
                <div class="form-group charge-amount-group">
                  <div class="input-group">
                    <input
                      class="form-control input-grow ph-888"
                      type="text"
                      name="charge-amount"
                      placeholder="충전금액"
                      aria-label="충전금액"
                      aria-describedby="chargeAmountHelper"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="chargeAmountHelper"
                    class="input-helper"
                    role="group"
                  >
                    <span class="helper1">
                      최소 1만원<b class="text-bar">|</b>최대 150,123원 <span>&#x1F4AC;</span>
                    </span>
                    <span class="helper3">잔액 : <span class="won">430,000원</span></span>
                  </div>
                  <div class="charge-amount-btns">
                    <div class="row">
                      <div class="col-3">
                        <button
                          type="button"
                          class="btn btn-line btn-sm"
                        >
                          <span>1만원</span>
                        </button>
                      </div>
                      <div class="col-3">
                        <button
                          type="button"
                          class="btn btn-line btn-sm"
                        >
                          <span>5만원</span>
                        </button>
                      </div>
                      <div class="col-3">
                        <button
                          type="button"
                          class="btn btn-line btn-sm"
                        >
                          <span>10만원</span>
                        </button>
                      </div>
                      <div class="col-3">
                        <button
                          type="button"
                          class="btn btn-line btn-sm"
                        >
                          <span>50만원</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group charge-amount-group invalid">
                  <div class="input-group">
                    <input
                      class="form-control input-grow ph-888"
                      type="text"
                      name="charge-amount"
                      value="500원"
                      placeholder="충전금액"
                      aria-label="충전금액"
                      aria-describedby="chargeAmountHelper"
                      aria-invalid="true"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="chargeAmountHelper"
                    class="input-helper"
                    role="group"
                  >
                    <span class="helper1 fc-red">
                      최소 1만원<b class="text-bar">|</b>최대 150,123원
                    </span>
                    <span class="helper3">잔액 : <span class="won">430,000원</span></span>
                  </div>
                  <div class="charge-amount-btns">
                    <div class="row">
                      <div class="col-3">
                        <button
                          type="button"
                          class="btn btn-line btn-sm"
                        >
                          <span>1만원</span>
                        </button>
                      </div>
                      <div class="col-3">
                        <button
                          type="button"
                          class="btn btn-line btn-sm"
                        >
                          <span>5만원</span>
                        </button>
                      </div>
                      <div class="col-3">
                        <button
                          type="button"
                          class="btn btn-line btn-sm"
                        >
                          <span>10만원</span>
                        </button>
                      </div>
                      <div class="col-3">
                        <button
                          type="button"
                          class="btn btn-line btn-sm"
                        >
                          <span>50만원</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- end 상태일때 border-bottom이 검정색으로 바뀌는건 프론트에서 처리예정 --&gt;

    &lt;!--  .charge-amount-group에 있는 div.input-helper는 position: absolute로 처리되어 있습니다.
             position : relative로 사용시  div.input-helper에 'relative' 클래스 추가하여 사용해주세요.
     --&gt;

    &lt;!-- default1 --&gt;
    &lt;div class="form-group charge-amount-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow ph-888"
          type="text"
          name="charge-amount"
          placeholder="충전금액"
          aria-label="충전금액"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- default2 --&gt;
    &lt;div class="form-group charge-amount-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow ph-888"
          type="text"
          name="charge-amount"
          placeholder="충전금액"
          aria-label="충전금액"
          aria-describedby="chargeAmountHelper"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="chargeAmountHelper"
        class="input-helper"
        role="group"
      &gt;
        &lt;span class="helper1"&gt;
          최소 1만원&lt;b class="text-bar"&gt;|&lt;/b&gt;최대 150,123원 &lt;span&gt;&#x1F4AC;&lt;/span&gt;
        &lt;/span&gt;
        &lt;span class="helper3"&gt;잔액 : &lt;span class="won"&gt;430,000원&lt;/span&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="charge-amount-btns"&gt;
        &lt;div class="row"&gt;
          &lt;div class="col-3"&gt;
            &lt;button
              type="button"
              class="btn btn-line btn-sm"
            &gt;
              &lt;span&gt;1만원&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="col-3"&gt;
            &lt;button
              type="button"
              class="btn btn-line btn-sm"
            &gt;
              &lt;span&gt;5만원&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="col-3"&gt;
            &lt;button
              type="button"
              class="btn btn-line btn-sm"
            &gt;
              &lt;span&gt;10만원&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="col-3"&gt;
            &lt;button
              type="button"
              class="btn btn-line btn-sm"
            &gt;
              &lt;span&gt;50만원&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div class="form-group charge-amount-group invalid"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow ph-888"
          type="text"
          name="charge-amount"
          value="500원"
          placeholder="충전금액"
          aria-label="충전금액"
          aria-describedby="chargeAmountHelper"
          aria-invalid="true"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="chargeAmountHelper"
        class="input-helper"
        role="group"
      &gt;
        &lt;span class="helper1 fc-red"&gt;
          최소 1만원&lt;b class="text-bar"&gt;|&lt;/b&gt;최대 150,123원
        &lt;/span&gt;
        &lt;span class="helper3"&gt;잔액 : &lt;span class="won"&gt;430,000원&lt;/span&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="charge-amount-btns"&gt;
        &lt;div class="row"&gt;
          &lt;div class="col-3"&gt;
            &lt;button
              type="button"
              class="btn btn-line btn-sm"
            &gt;
              &lt;span&gt;1만원&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="col-3"&gt;
            &lt;button
              type="button"
              class="btn btn-line btn-sm"
            &gt;
              &lt;span&gt;5만원&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="col-3"&gt;
            &lt;button
              type="button"
              class="btn btn-line btn-sm"
            &gt;
              &lt;span&gt;10만원&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="col-3"&gt;
            &lt;button
              type="button"
              class="btn btn-line btn-sm"
            &gt;
              &lt;span&gt;50만원&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
            </code>
            </pre>
          </div>
          <!-- Underline(디스커버) -->
          <h4>Underline(디스커버)</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group underline-group">
                  <div class="input-group">
                    <input
                      class="form-control input-grow ph-light"
                      type="text"
                      name="text-only"
                      placeholder="텍스트를 입력해 주세요"
                      aria-label="텍스트입력"
                      aria-describedby="onlyTextError"
                      aria-invalid="false"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div class="form-group underline-group invalid">
                  <div class="input-group">
                    <input
                      class="form-control input-grow ph-light"
                      type="text"
                      name="text-only"
                      value="입력값이 잘못 되었다면"
                      aria-label="텍스트입력"
                      aria-describedby="invalidText"
                      aria-invalid="true"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    체크메세지 출력영역입니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group underline-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow ph-light"
          type="text"
          name="text-only"
          placeholder="텍스트를 입력해 주세요"
          aria-label="텍스트입력"
          aria-describedby="onlyTextError"
          aria-invalid="false"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div class="form-group underline-group invalid"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow ph-light"
          type="text"
          name="text-only"
          value="입력값이 잘못 되었다면"
          aria-label="텍스트입력"
          aria-describedby="invalidText"
          aria-invalid="true"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        체크메세지 출력영역입니다.
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- Underline(월렛) -->
          <h4>Underline(월렛)</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group search-under-group">
                  <div class="input-group">
                    <input
                      class="form-control input-grow ph-light"
                      type="search"
                      name="search"
                      placeholder="이름 또는 휴대폰 번호"
                      aria-label="통합검색"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="search2"
                          size="32"
                        />
                        <span class="sr-only">검색</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group search-under-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow ph-light"
          type="search"
          name="search"
          placeholder="이름 또는 휴대폰 번호"
          aria-label="통합검색"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="search2"
              size="32"
            /&gt;
            &lt;span class="sr-only"&gt;검색&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 메뉴/통합검색 -->
          <div class="view-exam">
            <h4>메뉴/통합검색</h4>
            <div class="flex-area">
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group all-search-group">
                  <div class="input-group">
                    <input
                      class="form-control input-grow ph-light"
                      type="search"
                      name="search"
                      placeholder="검색어를 입력해 주세요"
                      aria-label="통합검색"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="24"
                          color="gray"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="search"
                          size="32"
                        />
                        <span class="sr-only">검색</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p class="desc-text">
                  search_result
                </p>
                <div class="form-group all-search-group search_result">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="arrow2"
                          size="24"
                          direction="left"
                        />
                        <span class="sr-only">뒤로가기</span>
                      </button>
                    </div>
                    <input
                      class="form-control input-grow ph-light"
                      type="search"
                      name="search"
                      value="이용금액"
                      aria-label="통합검색"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="24"
                          color="gray"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- default --&gt;
    &lt;div class="form-group all-search-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow ph-light"
          type="search"
          name="search"
          placeholder="검색어를 입력해 주세요"
          aria-label="통합검색"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="24"
              color="gray"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="search"
              size="32"
            /&gt;
            &lt;span class="sr-only"&gt;검색&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- search_result --&gt;
    &lt;div class="form-group all-search-group search_result"&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-group-prepend"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="arrow2"
              size="24"
              direction="left"
            /&gt;
            &lt;span class="sr-only"&gt;뒤로가기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;input
          class="form-control input-grow ph-light"
          type="search"
          name="search"
          value="이용금액"
          aria-label="통합검색"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="24"
              color="gray"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- toast search -->
          <h4>toast search</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div class="form-group search-toast-group">
                  <div class="input-group">
                    <input
                      class="form-control input-grow"
                      type="search"
                      name="search"
                      aria-label="검색"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="search2"
                          size="32"
                        />
                        <span class="sr-only">검색</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div class="form-group search-toast-group"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow"
          type="search"
          name="search"
          aria-label="검색"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="search2"
              size="32"
            /&gt;
            &lt;span class="sr-only"&gt;검색&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- // toast input -->
          <div class="view-exam">
            <div class="flex-area">
              <!-- case1 -->
              <div>
                <p class="desc-text">
                  case1
                </p>
                <div class="form-group sm">
                  <div class="input-group">
                    <input
                      class="form-control input-grow"
                      name=""
                      type="text"
                      aria-label="타이틀 입력"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="16"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- case1 --&gt;
    &lt;div class="form-group sm"&gt;
      &lt;div class="input-group"&gt;
        &lt;input
          class="form-control input-grow"
          name=""
          type="text"
          aria-label="타이틀 입력"
        &gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="16"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!--  date -->
          <div class="view-exam">
            <div class="flex-area">
              <div>
                <div class="form-group">
                  <div class="filter-group">
                    <div class="input-group">
                      <input
                        class="form-control input-grow"
                        maxlength="8"
                        placeholder="시작일 선택"
                        name="startDate"
                        type="text"
                        aria-label="시작일 선택"
                      >
                      <div class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-input"
                        >
                          <uu-icon
                            icon="delete"
                            size="16"
                          />
                          <span class="sr-only">지우기</span>
                        </button>
                      </div>
                    </div>
                    <div class="middle-hyphen">
                      -
                    </div>
                    <div class="input-group">
                      <input
                        class="form-control input-grow"
                        maxlength="8"
                        placeholder="종료일 선택"
                        name="eneDate"
                        type="text"
                        aria-label="종료일 선택"
                      >
                      <div class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-input"
                        >
                          <uu-icon
                            icon="delete"
                            size="16"
                          />
                          <span class="sr-only">지우기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;div class="form-group"&gt;
      &lt;div class="filter-group"&gt;
        &lt;div class="input-group"&gt;
          &lt;input
            class="form-control input-grow"
            maxlength="8"
            placeholder="시작일 선택"
            name="startDate"
            type="text"
            aria-label="시작일 선택"
          &gt;
          &lt;div class="input-group-append"&gt;
            &lt;button
              type="button"
              class="btn btn-input"
            &gt;
              &lt;uu-icon
                icon="delete"
                size="16"
              /&gt;
              &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="middle-hyphen"&gt;
          -
        &lt;/div&gt;
        &lt;div class="input-group"&gt;
          &lt;input
            class="form-control input-grow"
            maxlength="8"
            placeholder="종료일 선택"
            name="eneDate"
            type="text"
            aria-label="종료일 선택"
          &gt;
          &lt;div class="input-group-append"&gt;
            &lt;button
              type="button"
              class="btn btn-input"
            &gt;
              &lt;uu-icon
                icon="delete"
                size="16"
              /&gt;
              &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- select -->
          <h4>select</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- type1 -->
              <div>
                <p class="desc-text">
                  select
                </p>
                <div
                  class="form-group"
                >
                  <div
                    class="form-label"
                    aria-label="날짜"
                    aria-describedby="dateInput"
                  >
                    날짜
                  </div>
                  <div class="input-group">
                    <button
                      id="dateInput"
                      type="button"
                      class="btn-select"
                      aria-label="날짜 선택"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      2021.04.09
                    </button>
                  </div>
                </div>
              </div>
              <!-- type1: placeholder -->
              <div>
                <p class="desc-text">
                  select:placeholder
                </p>
                <div
                  class="form-group"
                >
                  <div
                    class="form-label"
                    aria-label="날짜"
                    aria-describedby="dateInput"
                  >
                    날짜
                  </div>
                  <div class="input-group">
                    <button
                      id="dateInput"
                      type="button"
                      class="btn-select"
                      aria-label="날짜 선택"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="placeholder">날짜를 선택해 주세요.</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- select sm -->
              <div>
                <p class="desc-text">
                  select-sm
                </p>
                <div
                  class="form-group"
                >
                  <div class="input-group select-sm">
                    <uu-icon
                      icon="lock2"
                      size="24"
                    />
                    <button
                      id="dateInput"
                      type="button"
                      class="btn-select"
                      aria-label="주민등록증"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      주민등록증
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- select --&gt;
    &lt;div
      class="form-group"
    &gt;
      &lt;div
        class="form-label"
        aria-label="날짜"
        aria-describedby="dateInput"
      &gt;
        날짜
      &lt;/div&gt;
      &lt;div class="input-group"&gt;
        &lt;button
          id="dateInput"
          type="button"
          class="btn-select"
          aria-label="날짜 선택"
          aria-haspopup="true"
          aria-expanded="false"
        &gt;
          2021.04.09
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- select:placeholder --&gt;
    &lt;div
      class="form-group"
    &gt;
      &lt;div
        class="form-label"
        aria-label="날짜"
        aria-describedby="dateInput"
      &gt;
        날짜
      &lt;/div&gt;
      &lt;div class="input-group"&gt;
        &lt;button
          id="dateInput"
          type="button"
          class="btn-select"
          aria-label="날짜 선택"
          aria-haspopup="true"
          aria-expanded="false"
        &gt;
          &lt;span class="placeholder"&gt;날짜를 선택해 주세요.&lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- select sm--&gt;
    &lt;div
      class="form-group"
    &gt;
      &lt;div class="input-group select-sm"&gt;
        &lt;uu-icon
          icon="lock2"
          size="24"
        /&gt;
        &lt;button
          id="dateInput"
          type="button"
          class="btn-select"
          aria-label="주민등록증"
          aria-haspopup="true"
          aria-expanded="false"
        &gt;
          주민등록증
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
              </code>
            </pre>
          </div>
          <!-- 운전면허증 -->
          <h4>운전면허증</h4>
          <div class="view-exam">
            <div class="flex-area">
              <!-- default -->
              <div>
                <p class="desc-text">
                  default
                </p>
                <div
                  class="form-group driving-license-group"
                  role="group"
                  aria-labelledby="drivingLicense"
                >
                  <label
                    id="drivingLicense"
                    class="form-label"
                  >운전면허번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="driving1"
                            maxlength="2"
                            aria-label="운전면허번호 첫번째 자리"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="driving2"
                            maxlength="6"
                            aria-label="운전면허번호 두번째 자리"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="driving3"
                            maxlength="2"
                            aria-label="운전면허번호 세번째 자리"
                          >
                        </div>
                        <div class="key-dots">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot" />
                            <span class="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 인풋 내용 비었을 경우, input-group-append에 d-none 추가 -->
                    <div class="input-group-append d-none">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <!-- <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    운전면허번호의 형식이 맞지 않습니다.
                  </div> -->
                </div>
              </div>
              <!-- error -->
              <div>
                <p class="desc-text">
                  error
                </p>
                <div
                  class="form-group driving-license-group invalid"
                  role="group"
                  aria-labelledby="drivingLicense"
                >
                  <label
                    id="drivingLicense"
                    class="form-label"
                  >운전면허번호</label>
                  <div class="input-group">
                    <div class="input-grow">
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="driving1"
                            maxlength="2"
                            value="12"
                            aria-label="운전면허번호 첫번째 자리"
                          >
                        </div>
                        <div class="key-dots d-none">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="driving2"
                            maxlength="6"
                            value="345678"
                            aria-label="운전면허번호 두번째 자리"
                          >
                        </div>
                        <div class="key-dots d-none">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                      <span class="middle-hyphen">-</span>
                      <div class="pad-cnt-wrap">
                        <div class="key-cover">
                          <input
                            class="key"
                            type="text"
                            name="driving3"
                            maxlength="2"
                            value="90"
                            aria-label="운전면허번호 세번째 자리"
                          >
                        </div>
                        <div class="key-dots d-none">
                          <div class="dots">
                            <!--
                              글자 채워질 때 => dot에 empty 클래스 추가
                              동그라미 채워질 때 => dot에 full 클래스 추가
                            -->
                            <span class="dot full" />
                            <span class="dot full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 인풋 내용 비었을 경우, input-group-append에 d-none 추가 -->
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-input"
                      >
                        <uu-icon
                          icon="delete"
                          size="20"
                        />
                        <span class="sr-only">지우기</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="invalidText"
                    class="invalid-feedback"
                    role="alert"
                  >
                    운전면허번호의 형식이 맞지 않습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="view-code"
          >
            <pre>
              <code class="language-html">
    &lt;!-- !!! id / title / name / aria-label / aria-descriptby 상황에 맞게 수정!!! --&gt;

    &lt;!-- default --&gt;
    &lt;div
      class="form-group driving-license-group"
      role="group"
      aria-labelledby="drivingLicense"
    &gt;
      &lt;label
        id="drivingLicense"
        class="form-label"
      &gt;운전면허번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving1"
                maxlength="2"
                aria-label="운전면허번호 첫번째 자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving2"
                maxlength="6"
                aria-label="운전면허번호 두번째 자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving3"
                maxlength="2"
                aria-label="운전면허번호 세번째 자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- 인풋 내용 비었을 경우, input-group-append에 d-none 추가 --&gt;
        &lt;div class="input-group-append d-none"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;!-- &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        운전면허번호의 형식이 맞지 않습니다.
      &lt;/div&gt; --&gt;
    &lt;/div&gt;

    &lt;!-- error --&gt;
    &lt;div
      class="form-group driving-license-group invalid"
      role="group"
      aria-labelledby="drivingLicense"
    &gt;
      &lt;label
        id="drivingLicense"
        class="form-label"
      &gt;운전면허번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving1"
                maxlength="2"
                aria-label="운전면허번호 첫번째 자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving2"
                maxlength="6"
                aria-label="운전면허번호 두번째 자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving3"
                maxlength="2"
                aria-label="운전면허번호 세번째 자리"
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot full" /&gt;
                &lt;span class="dot full" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- 인풋 내용 비었을 경우, input-group-append에 d-none 추가 --&gt;
        &lt;div class="input-group-append"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        운전면허번호의 형식이 맞지 않습니다.
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- disabled --&gt;
    &lt;div
      class="form-group driving-license-group disabled"
      role="group"
      aria-labelledby="drivingLicense"
    &gt;
      &lt;label
        id="drivingLicense"
        class="form-label"
      &gt;운전면허번호&lt;/label&gt;
      &lt;div class="input-group"&gt;
        &lt;div class="input-grow"&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving1"
                maxlength="2"
                aria-label="운전면허번호 첫번째 자리"
                disabeld
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving2"
                maxlength="6"
                aria-label="운전면허번호 두번째 자리"
                disabeld
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;span class="middle-hyphen"&gt;-&lt;/span&gt;
          &lt;div class="pad-cnt-wrap"&gt;
            &lt;div class="key-cover"&gt;
              &lt;input
                class="key"
                type="text"
                name="driving3"
                maxlength="2"
                aria-label="운전면허번호 세번째 자리"
                disabeld
              &gt;
            &lt;/div&gt;
            &lt;div class="key-dots"&gt;
              &lt;div class="dots"&gt;
                &lt;!--
                  글자 채워질 때 =&gt; dot에 empty 클래스 추가
                  동그라미 채워질 때 =&gt; dot에 full 클래스 추가
                --&gt;
                &lt;span class="dot" /&gt;
                &lt;span class="dot" /&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- 인풋 내용 비었을 경우, input-group-append에 d-none 추가 --&gt;
        &lt;div class="input-group-append d-none"&gt;
          &lt;button
            type="button"
            class="btn btn-input"
          &gt;
            &lt;uu-icon
              icon="delete"
              size="20"
            /&gt;
            &lt;span class="sr-only"&gt;지우기&lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;!-- &lt;div
        id="invalidText"
        class="invalid-feedback"
        role="alert"
      &gt;
        운전면허번호의 형식이 맞지 않습니다.
      &lt;/div&gt; --&gt;
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
  h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    + p {
      margin-bottom: 1rem;
      a {
        padding: 0 0.5rem;
        color: $blue100;
      }
    }
  }
  .flex-area {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid darkgray;
    > div {
      width: 33.3%;
      padding: 2.4rem;
      .desc-text {
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        color: #9a3e3e;
      }
    }
  }
</style>
