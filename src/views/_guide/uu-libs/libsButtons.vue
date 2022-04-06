<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Icon</h3>
          <div class="view-exam">
            <uu-btn icon>
              <!-- <uu-icon icon="util1" /> -->
              <span class="sr-only">삭제</span>
            </uu-btn>
            <uu-btn
              icon
              variant="send"
            >
              <span class="sr-only">전송</span>
            </uu-btn>
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-btn icon&gt;
      &lt;uu-icon icon="delete" /&gt;
      &lt;span class="sr-only"&gt;전송&lt;/span&gt;
    &lt;/uu-btn&gt;
              </code>
            </pre>
          </div>
          <!-- variants -->
          <h3>Variants</h3>
          <div class="view-exam">
            <uu-btn variant="primary">
              Primary
            </uu-btn>
            <uu-btn variant="secondary">
              Secondary
            </uu-btn>
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-btn variant="primary"&gt;Primary&lt;/uu-btn&gt;
    &lt;uu-btn variant="secondary"&gt;Secondary&lt;/uu-btn&gt;
              </code>
            </pre>
          </div>
          <!-- block -->
          <h3 class="card-title">
            Block level buttons
          </h3>
          <div class="view-exam">
            <uu-btn
              block
              variant="primary"
            >
              Primary
            </uu-btn>
            <uu-btn
              block
              variant="secondary"
            >
              Secondary
            </uu-btn>
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-btn block variant="primary"&gt;Primary&lt;/uu-btn&gt;
    &lt;uu-btn block variant="secondary"&gt;Secondary&lt;/uu-btn&gt;
              </code>
            </pre>
          </div>
          <h3>Link</h3>
          <div class="view-exam">
            <uu-btn variant="link">
              비밀번호 재설정
            </uu-btn>
            <uu-btn variant="link">
              비밀번호 재설정
            </uu-btn>
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-btn block variant="link""&gt;비밀번호 재설정&lt;/uu-btn&gt;
              </code>
            </pre>
          </div>
          <!-- Disabled State -->
          <h3>Disabled State</h3>
          <div class="view-exam">
            <uu-btn
              variant="primary"
              disabled
            >
              Primary
            </uu-btn>
            <uu-btn
              variant="secondary"
              disabled
            >
              Secondary
            </uu-btn>
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-btn variant="primary" disabled&gt;Primary&lt;/uu-btn&gt;
    &lt;uu-btn variant="secondary" disabled&gt;Secondary&lt;/uu-btn&gt;
              </code>
            </pre>
          </div>

          <!-- Small -->
          <h3>Size</h3>
          <div class="view-exam">
            <uu-btn
              variant="primary"
              size="small"
            >
              small
            </uu-btn>
            <uu-btn
              variant="secondary"
              size="small"
            >
              small
            </uu-btn>
            <uu-btn
              variant="primary"
            >
              normal
            </uu-btn>
            <uu-btn
              variant="secondary"
            >
              normal
            </uu-btn>
            <uu-btn
              variant="primary"
              size="large"
            >
              large
            </uu-btn>
            <uu-btn
              variant="secondary"
              size="large"
            >
              large
            </uu-btn>
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
    &lt;uu-btn variant="primary" size="small"&gt;small&lt;/uu-btn&gt;
    &lt;uu-btn variant="secondary" size="small"&gt;small&lt;/uu-btn&gt;
    &lt;uu-btn variant="primary" size="large"&gt;large&lt;/uu-btn&gt;
    &lt;uu-btn variant="secondary" size="large"&gt;large&lt;/uu-btn&gt;
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
