<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Table List</h3>
          <!-- list default -->
          <h4>기본(default)</h4>
          <div class="view-exam">
            <dl class="table-list">
              <dt>출시가격</dt>
              <dd>242,100,000</dd>
              <dt>출시가 대비</dt>
              <dd>
                <uu-icon
                  icon="increase"
                  size="12"
                  color="red"
                >
                  <span class="sr-only">증가</span>
                </uu-icon>
                31,000,000원
              </dd>
              <dt>차량등록일</dt>
              <dd>2009.10.12</dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
          <!-- list type2 -->
          <h4>타입2</h4>
          <div class="view-exam">
            <dl class="table-list type2">
              <dt>보험기간</dt>
              <dd>2008.11.27 ~ 2065.11.27</dd>
              <dt>계약상태</dt>
              <dd>정상</dd>
              <dt>계약자</dt>
              <dd>김*한(8651005)</dd>
              <dt>계좌번호</dt>
              <dd>546-849-1120</dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list type2"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
          <!-- list type2 -->
          <h4>타입2</h4>
          <div class="view-exam">
            <dl class="table-list type2 dd-align-left">
              <dt>보험기간</dt>
              <dd>2008.11.27 ~ 2065.11.27</dd>
              <dt>계약상태</dt>
              <dd>정상</dd>
              <dt>계약자</dt>
              <dd>김*한(8651005)</dd>
              <dt>계좌번호</dt>
              <dd>546-849-1120</dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list type2 dd-align-left"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
          <!-- list type3 -->
          <h4>타입3</h4>
          <div class="view-exam">
            <dl class="table-list type3">
              <dt>보험기간</dt>
              <dd>2008.11.27 ~ 2065.11.27</dd>
              <dt>계약상태</dt>
              <dd>정상</dd>
              <dt>계약자</dt>
              <dd>김*한(8651005)</dd>
              <dt>계좌번호</dt>
              <dd>546-849-1120</dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list type3"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
          <!-- list type4 -->
          <h4>타입4</h4>
          <div class="view-exam">
            <dl class="table-list type4">
              <dt>보험기간</dt>
              <dd>2008.11.27 ~ 2065.11.27</dd>
              <dt>계약상태</dt>
              <dd>정상</dd>
              <dt>계약자</dt>
              <dd>김*한(8651005)</dd>
              <dt>계좌번호</dt>
              <dd>546-849-1120</dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list type4"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
          <!-- list type5 -->
          <h4>타입5 ( font-size: 1.4rem, margin-bottom: 0.8rem)</h4>
          <div class="view-exam">
            <dl class="table-list type5">
              <dt>보험기간</dt>
              <dd>2008.11.27 ~ 2065.11.27</dd>
              <dt>계약상태</dt>
              <dd>정상</dd>
              <dt>계약자</dt>
              <dd>김*한(8651005)</dd>
              <dt>계좌번호</dt>
              <dd>546-849-1120</dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list type5"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
          <!-- list type6 -->
          <h4>타입6 ( font-size: 1.4rem, margin-bottom: 0.6rem, border-top: .1rem solid #eee)</h4>
          <div class="view-exam">
            <dl class="table-list type6">
              <dt>충전 후 잔액</dt>
              <dd>110,000원</dd>
              <dt>충전수단</dt>
              <dd>마이 신한포인트</dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list type6"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
          <!-- list type7 -->
          <h4>타입7 (font-size: 1.4rem, 오른쪽 금액, margin-bottom: 2rem)</h4>
          <div class="view-exam">
            <dl class="table-list type7">
              <dt>할인</dt>
              <dd><span>500</span><span class="unit">원</span></dd>
              <dt>무이자</dt>
              <dd><span>2,500</span><span class="unit">원</span></dd>
              <dt>포인트</dt>
              <dd><span>7,500</span><span class="unit">P</span></dd>
              <dt>마일리지</dt>
              <dd><span>12,500</span><span class="unit">M</span></dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list type7"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
          <!-- list type8 -->
          <h4>타입8</h4>
          <div class="view-exam">
            <dl class="table-list type8">
              <dt>보험기간</dt>
              <dd>2008.11.27 ~ 2065.11.27</dd>
              <dt>계약상태</dt>
              <dd>정상</dd>
              <dt>계약자</dt>
              <dd>김*한(8651005)</dd>
              <dt>계좌번호</dt>
              <dd>546-849-1120</dd>
            </dl>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;dl class="table-list type8"&gt;
      &lt;dt&gt;제목&lt;/dt&gt;
      &lt;dd&gt;내용&lt;/dd&gt;
    &lt;/dl&gt;
                </code>
            </pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>Table header + Table Body</h4>
          <ul class="list-dot">
            <li>table-list 안에 table-list-header, table-list-body로 구분할 경우 사용합니다.</li>
            <li>type2, type3, type4는 계승 됩니다. ex)table-list-body type4</li>
          </ul>
          <div class="view-exam">
            <div class="table-list">
              <dl class="table-list-header">
                <dt>신한은행</dt>
                <dd>대출잔액 변동</dd>
              </dl>
              <dl class="table-list-body type4">
                <dt>최근정보변경일</dt>
                <dd class="fc-666">
                  2020.08.22
                </dd>
                <dt>정보등록일</dt>
                <dd class="fc-666">
                  2020.05.16
                </dd>
              </dl>
            </div>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;div class="table-list"&gt;
        &lt;dl class="table-list-header"&gt;
          &lt;dt&gt;신한은행&lt;/dt&gt;
          &lt;dd&gt;대출잔액 변동&lt;/dd&gt;
        &lt;/dl&gt;
        &lt;dl class="table-list-body type4"&gt;
          &lt;dt&gt;최근정보변경일&lt;/dt&gt;
          &lt;dd class="fc-666"&gt;
            2020.08.22
          &lt;/dd&gt;
          &lt;dt&gt;정보등록일&lt;/dt&gt;
          &lt;dd class="fc-666"&gt;
            2020.05.16
          &lt;/dd&gt;
        &lt;/dl&gt;
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

<style lang="scss" scoped>
@import "@/assets/scss/guide.scss";
</style>
