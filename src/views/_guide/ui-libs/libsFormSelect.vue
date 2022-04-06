<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Select</h3>
          <div class="view-exam">
            <form>
              <div class="form-group">
                <label class="form-label">Default Select</label>
                <select class="form-control">
                  <option>전체</option>
                  <option>선택1</option>
                  <option>선택2</option>
                </select>
              </div>
              <!-- -->
            </form>
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
        &lt;div class="form-group"&gt;
          &lt;label class="form-label"&gt;Before input&lt;/label&gt;
          &lt;select class="form-control"&gt;
            &lt;option&gt;전체&lt;/option&gt;
            &lt;option&gt;선택1&lt;/option&gt;
            &lt;option&gt;선택2&lt;/option&gt;
          &lt;/select&gt;
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
