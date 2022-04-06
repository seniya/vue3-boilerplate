<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Box list1 -->
          <h3>Box List</h3>
          <h4>Box List1</h4>
          <div class="view-exam">
            <ul class="list-group box">
              <li class="list-item">
                <a
                  href="javascript:;"
                  class="item-area item-flex"
                >
                  <span class="item-left">
                    <span class="item-title">이달에 받은 혜택</span>
                  </span>
                  <span class="item-right">
                    <span class="item-title-arrow">
                      300,000원
                    </span>
                  </span>
                </a>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  class="item-area item-flex"
                >
                  <span class="item-left">
                    <span class="item-title">참여한 이벤트</span>
                  </span>
                  <span class="item-right">
                    <span class="item-title-arrow">8건</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
    &lt;div class="view-exam"&gt;
      &lt;ul class="list-group box"&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            class="item-area item-flex"
          &gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-title"&gt;이달에 받은 혜택&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class="item-right"&gt;
              &lt;span class="item-title-arrow"&gt;300,000원&lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
                </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Box list1 -->
      <!-- Box list2 -->
      <div class="row">
        <div class="col-12">
          <h4>Box List2</h4>
          <div class="view-exam">
            <ul class="list-group box box-gap-20">
              <li class="list-item">
                <a
                  href="javascript:;"
                  class="item-area item-flex"
                >
                  <span class="item-thumbnail">
                    <img
                      src="~@/assets/images/@sample/@list_card.png"
                      alt=""
                    >
                  </span>
                  <span class="item-left">
                    <span class="item-text fw-bold">신한카드 Deep Dream</span>
                    <span class="item-text-sm fc-666">본인 9140</span>
                  </span>
                </a>
              </li>
              <li class="list-item">
                <a
                  href="javascript:;"
                  class="item-area item-flex"
                >
                  <span class="item-thumbnail">
                    <img
                      src="~@/assets/images/@sample/@list_card.png"
                      alt=""
                    >
                  </span>
                  <span class="item-left">
                    <span class="item-text fw-bold">신한카드 Deep Dream</span>
                    <span class="item-text-sm fc-666">본인 9140</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;ul class="list-group box box-gap-20"&gt;
        &lt;li class="list-item"&gt;
          &lt;a
            href="javascript:;"
            class="item-area item-flex"
          &gt;
            &lt;span class="item-thumbnail"&gt;
              &lt;img
                src="~@/assets/images/@sample/@list_card.png"
                alt=""
              &gt;
            &lt;/span&gt;
            &lt;span class="item-left"&gt;
              &lt;span class="item-text fw-bold"&gt;신한카드 Deep Dream&lt;/span&gt;
              &lt;span class="item-text-sm fc-666"&gt;본인 9140&lt;/span&gt;
            &lt;/span&gt;
          &lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
                </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Box list2 -->
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
