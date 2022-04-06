<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Inactive -->
          <div class="view-exam">
            <uu-toggletext
              name="order"
              left-text="조회수"
              right-text="좋아요"
              @toggle="toggle"
            />
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;uu-toggletext
        name="order"
        left-text="조회수"
        right-text="좋아요"
        @toggle="toggle"
      /&gt;
              </code>
            </pre>
            <pre>
              <code class="language-js">
      export default {
        methods: {
          toggle (selected) {
            console.log('selected', selected)
          }
        }
      }
              </code>
            </pre>
          </div>
          <!-- type2 -->
          <div class="view-exam">
            <uu-toggletext
              type="type2"
              name="toggle-text"
              left-text="수입"
              right-text="지출"
              @toggle="toggle"
            />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
      &lt;uu-toggletext
        type="type2"
        name="toggle-text"
        left-text="수입"
        right-text="지출"
        @toggle="toggle"
      /&gt;
              </code>
            </pre>
          </div>
          <!-- type3 -->
          <div class="view-exam">
            <uu-toggletext
              type="type3"
              name="toggle-text"
              left-text="주간"
              right-text="월간"
              :state-value="false"
              @toggle="toggle"
            />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
      &lt;uu-toggletext
        type="type3"
        name="toggle-text"
        left-text="주간"
        right-text="월간"
        :state-value="false"
        @toggle="toggle"
      /&gt;
              </code>
            </pre>
          </div>
          <!-- type4 -->
          <div class="view-exam">
            <uu-toggletext
              type="type4"
              name="toggle-text"
              left-text="달력"
              right-text="목록"
              @toggle="toggle"
            />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
      &lt;uu-toggletext
        type="type4"
        name="toggle-text"
        left-text="달력"
        right-text="목록"
        @toggle="toggle"
      /&gt;
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
export default {
  mounted () {
    Prism.highlightAll()
  },
  methods: {
    toggle (selected) {
      console.log('selected', selected)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/guide.scss";
.toggletext {
    &.type4 {
      @include fontHeight(1.6);
    }
  }
</style>
