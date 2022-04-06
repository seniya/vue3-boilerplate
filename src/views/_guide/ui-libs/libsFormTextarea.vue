<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Textarea</h3>
          <div class="view-exam">
            <form>
              <div class="form-group">
                <label class="form-label">Before input</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="이름을 입력하세요."
                />
              </div>
              <div class="form-group">
                <label class="form-label">Enter input</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="이름을 입력하세요."
                  value="김희재"
                />
              </div>
              <div class="form-group">
                <label class="form-label">Disabled input</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="이름을 입력하세요."
                  value="김희재"
                  disabled
                />
              </div>
            </form>
            <!-- -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
      &lt;div class="form-group"&gt;
        &lt;label class="form-label"&gt;Before input&lt;/label&gt;
        &lt;textarea
          type="text"
          class="form-control"
          placeholder="이름을 입력하세요."
        /&gt;
      &lt;/div&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-label"&gt;Enter input&lt;/label&gt;
        &lt;textarea
          type="text"
          class="form-control"
          placeholder="이름을 입력하세요."
          value="김희재"
        /&gt;
      &lt;/div&gt;
      &lt;div class="form-group"&gt;
        &lt;label class="form-label"&gt;Disabled input&lt;/label&gt;
        &lt;textarea
          type="text"
          class="form-control"
          placeholder="이름을 입력하세요."
          value="김희재"
          disabled
        /&gt;
      &lt;/div&gt;
                </code>
            </pre>
          </div>
          <!-- Basic checkbox //-->
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
