<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Inactive -->
          <h3>Inactive</h3>
          <div class="view-exam">
            <uu-toggle active />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-toggle /&gt;
              </code>
            </pre>
          </div>
          <!-- selected -->
          <h3 class="card-title">
            Selected
          </h3>
          <div class="view-exam">
            <uu-toggle checked />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-toggle checked /&gt;
              </code>
            </pre>
          </div>
          <!-- Inactive disabled -->
          <h3>Inactive disabled</h3>
          <div class="view-exam">
            <uu-toggle disabled />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-toggle disabled /&gt;
              </code>
            </pre>
          </div>
          <!-- Selected disabled -->
          <h3>Selected disabled</h3>
          <div class="view-exam">
            <uu-toggle
              disabled
              checked
            />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-toggle disabled checked /&gt;
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
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/guide.scss";
</style>
