<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Dropdown</h3>
          <div class="view-exam">
            <!-- dropdown -->
            <uu-dropdown position="top-left">
              <template v-slot:dropdown-name>
                <uu-icon
                  icon="more"
                  size="20"
                />
              </template>
              <template v-slot:dropdown-content>
                <ul class="dropdown-list">
                  <li class="item-list">
                    <button
                      type="button"
                      class="item-btn"
                    >
                      MY리포트 설정
                    </button>
                  </li>
                  <li class="item-list">
                    <button
                      type="button"
                      class="item-btn"
                    >
                      영수증 공유하기
                    </button>
                  </li>
                </ul>
              </template>
            </uu-dropdown>
            <uu-dropdown position="top-right">
              <template v-slot:dropdown-name>
                <uu-icon
                  icon="more"
                  size="20"
                />
              </template>
              <template v-slot:dropdown-content>
                <ul class="dropdown-list">
                  <li class="item-list">
                    <button
                      type="button"
                      class="item-btn"
                    >
                      MY리포트 설정
                    </button>
                  </li>
                  <li class="item-list">
                    <button
                      type="button"
                      class="item-btn"
                    >
                      영수증 공유하기
                    </button>
                  </li>
                </ul>
              </template>
            </uu-dropdown>
            <uu-dropdown position="bottom-left">
              <template v-slot:dropdown-name>
                <uu-icon
                  icon="more"
                  size="20"
                />
              </template>
              <template v-slot:dropdown-content>
                <ul class="dropdown-list">
                  <li class="item-list">
                    <button
                      type="button"
                      class="item-btn"
                    >
                      MY리포트 설정
                    </button>
                  </li>
                  <li class="item-list">
                    <button
                      type="button"
                      class="item-btn"
                    >
                      영수증 공유하기
                    </button>
                  </li>
                </ul>
              </template>
            </uu-dropdown>
            <uu-dropdown position="bottom-right">
              <template v-slot:dropdown-name>
                <uu-icon
                  icon="more"
                  size="20"
                />
              </template>
              <template v-slot:dropdown-content>
                <ul class="dropdown-list">
                  <li class="item-list">
                    <button
                      type="button"
                      class="item-btn"
                    >
                      MY리포트 설정
                    </button>
                  </li>
                  <li class="item-list">
                    <button
                      type="button"
                      class="item-btn"
                    >
                      영수증 공유하기
                    </button>
                  </li>
                </ul>
              </template>
            </uu-dropdown>
            <!-- // dropdown -->
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
option: [position=""] bottom-right || bottom-left || top-right || top-left

&lt;!-- dropdown --&gt;
&lt;uu-dropdown position="bottom-right"&gt;
  &lt;template v-slot:dropdown-name&gt;
    &lt;uu-icon
      icon="more"
      size="20"
    /&gt;
  &lt;/template&gt;
  &lt;template v-slot:dropdown-content&gt;
    &lt;ul class="dropdown-list"&gt;
      &lt;li class="item-list"&gt;
        &lt;button
          type="button"
          class="item-btn"
        &gt;
          MY리포트 설정
        &lt;/button&gt;
      &lt;/li&gt;
      &lt;li class="item-list"&gt;
        &lt;button
          type="button"
          class="item-btn"
        &gt;
          영수증 공유하기
        &lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/template&gt;
&lt;/uu-dropdown&gt;
&lt;!-- // dropdown --&gt;
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
  data () {
    return {

    }
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/guide.scss";

</style>
