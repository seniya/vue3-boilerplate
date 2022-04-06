<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Basic Input -->
          <h3>Input</h3>
          <h4>Basic Input</h4>
          <div class="view-exam">
            <form>
              <div class="form-group">
                <label class="form-label">Before input</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="이름을 입력하세요."
                >
              </div>
              <div class="form-group">
                <label class="form-label">Enter input</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="이름을 입력하세요."
                  value="김희재"
                >
              </div>
              <div class="form-group">
                <label class="form-label">Disabled input</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="이름을 입력하세요."
                  value="김희재"
                  disabled
                >
              </div>
            </form>
            <!-- -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;!-- Before input --&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-label"&gt;Before input&lt;/label&gt;
        &lt;input
          type="text"
          class="form-control"
          placeholder="이름을 입력하세요."
        &gt;
      &lt;/div&gt;
      &lt;!-- Enter input --&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-label"&gt;Enter input&lt;/label&gt;
        &lt;input
          type="text"
          class="form-control"
          placeholder="이름을 입력하세요."
          value="김희재"
        &gt;
      &lt;/div&gt;
      &lt;!-- Disabled input --&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-label"&gt;Disabled input&lt;/label&gt;
        &lt;input
          type="text"
          class="form-control"
          placeholder="이름을 입력하세요."
          value="김희재"
          disabled
        &gt;
      &lt;/div&gt;
                </code>
            </pre>
          </div>
          <!-- Basic Input //-->
          <h4>Sizing</h4>
          <div class="view-exam">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder=".form-control-lg"
                >
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control"
                  placeholder="Default"
                >
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder=".form-control-sm"
                >
              </div>
            </form>
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
