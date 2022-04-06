<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>modal datepicker</h3>
          <h4>modal datepicker(줄 표출)</h4>
          <div class="view-exam">
            <div style="border:0.1rem solid lightgray;">
              <div class="date-picker-area">
                <ul class="date-picker">
                  <li class="date-item">
                    <a href="javascript:;">2020년 12월</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">2021년 1월</a>
                  </li>
                  <li class="date-item selected">
                    <a href="javascript:;">2021년 2월</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">2021년 3월</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">2021년 4월</a>
                  </li>
                </ul>
                <div class="selected-box" />
              </div>
            </div>
          </div>
          <h4>modal datepicker(3출 표출)</h4>
          <div class="view-exam">
            <div style="border:0.1rem solid lightgray;">
              <div class="date-picker-area type2">
                <ul class="date-picker">
                  <li class="date-item">
                    <a href="javascript:;">2021년 1월</a>
                  </li>
                  <li class="date-item selected">
                    <a href="javascript:;">2021년 2월</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">2021년 3월</a>
                  </li>
                </ul>
                <div class="selected-box" />
              </div>
            </div>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;div class="date-picker-area"&gt;
      &lt;ul class="date-picker"&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2020년 12월&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;">2021년 1월&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item selected"&gt;
          &lt;a href="javascript:;"&gt;2021년 2월&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2021년 3월&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2021년 4월&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;div class="selected-box" /&gt;
    &lt;/div&gt;

    &lt;div class="date-picker-area type2"&gt;
      &lt;ul class="date-picker"&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2021년 1월&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item selected"&gt;
          &lt;a href="javascript:;"&gt;2021년 2월&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2021년 3월&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;div class="selected-box" /&gt;
    &lt;/div&gt;
                </code>
            </pre>
          </div>
          <div class="view-exam">
            <div style="border:0.1rem solid lightgray;">
              <div class="date-picker-area">
                <ul class="date-picker">
                  <li class="date-item" />
                  <li class="date-item">
                    <a href="javascript:;">매일</a>
                  </li>
                  <li class="date-item selected">
                    <a href="javascript:;">매주</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">매월</a>
                  </li>
                  <li class="date-item" />
                </ul>
                <ul class="date-picker">
                  <li class="date-item">
                    <a href="javascript:;">토요일</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">일요일</a>
                  </li>
                  <li class="date-item selected">
                    <a href="javascript:;">월요일</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">화요일</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">수요일</a>
                  </li>
                </ul>
                <div class="selected-box" />
              </div>
            </div>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;div class="date-picker-area"&gt;
      &lt;ul class="date-picker"&gt;
        &lt;li class="date-item"&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;">매일&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item selected"&gt;
          &lt;a href="javascript:;"&gt;매주&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;매월&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;ul class="date-picker"&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;일요일&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;">월요일&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item selected"&gt;
          &lt;a href="javascript:;"&gt;화요일&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;수요일&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;목요일&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;div class="selected-box" /&gt;
    &lt;/div&gt;
                </code>
            </pre>
          </div>
          <div class="view-exam">
            <div style="border:0.1rem solid lightgray;">
              <div class="date-picker-area date">
                <ul class="date-picker col-date">
                  <li class="date-item">
                    <a href="javascript:;">2월 16일 월</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">2월 17일 화</a>
                  </li>
                  <li class="date-item selected">
                    <a href="javascript:;">오늘 2월 18일 수</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">2월 19일 목</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">2월 20일 금</a>
                  </li>
                </ul>
                <ul class="date-picker col-time">
                  <li class="date-item">
                    <a href="javascript:;">21</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">22</a>
                  </li>
                  <li class="date-item selected">
                    <a href="javascript:;">23</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">24</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">25</a>
                  </li>
                </ul>
                <ul class="date-picker col-time">
                  <li class="date-item">
                    <a href="javascript:;">28</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">29</a>
                  </li>
                  <li class="date-item selected">
                    <a href="javascript:;">30</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">29</a>
                  </li>
                  <li class="date-item">
                    <a href="javascript:;">30</a>
                  </li>
                </ul>
                <div class="selected-box" />
              </div>
            </div>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;div class="date-picker-area date"&gt;
      &lt;ul class="date-picker col-date"&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2월 16일 월&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2월 17일 화&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item selected"&gt;
          &lt;a href="javascript:;"&gt;오늘 2월 18일 수&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2월 19일 목&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;2월 20일 금&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;ul class="date-picker col-time">
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;21&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;22&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item selected"&gt;
          &lt;a href="javascript:;"&gt;23&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;24&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;25&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;ul class="date-picker col-time"&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;27&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;28&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item selected"&gt;
          &lt;a href="javascript:;"&gt;29&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;30&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="date-item"&gt;
          &lt;a href="javascript:;"&gt;31&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;div class="selected-box" /&gt;
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
