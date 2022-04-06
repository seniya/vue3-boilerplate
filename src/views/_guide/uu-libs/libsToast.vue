<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Toast</h3>
          <div class="view-exam">
            <button
              type="button"
              @click="open"
            >
              open Toast!!
            </button>
            <br>
            <button
              type="button"
              @click="btnOpen"
            >
              open Button Toast!!
            </button>
            <uu-toast
              ref="toast"
              :message="message"
              class="text-center"
            />
            <uu-toast
              ref="toast2"
              button
              :message="message2"
              @click="btnEvent"
            />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
&lt;button
  type="button"
  @click="open"
&gt;
  open Toast!!
&lt;/button&gt;
&lt;br&gt;
&lt;button
  type="button"
  @click="btnOpen"
&gt;
  open Button Toast!!
&lt;/button&gt;
&lt;uu-toast ref="toast" :message="message" class="text-center"/&gt;
&lt;uu-toast
  ref="toast2"
  button
  :message="message2"
  @click="btnEvent"
/&gt;
              </code>
            </pre>
          </div>
          <div class="view-code">
            <pre class="language-js">
              <code>
export default {
  data(){
    return{
      message: "이건 텍스트만 있는 \n토스트입니다.",
      message2: "이건 버튼이 있는 토스트입니다."
    }
  },
  methods: {
    open(){
      this.$refs.toast.showToast();
    },
    btnOpen(){
      this.$refs.toast2.showToast();
    },
    btnEvent(){
      console.log("btnEvent");
    }
  }
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
      message: '이건 텍스트만 있는 \n토스트입니다.',
      message2: '이건 버튼이 있는 토스트입니다.'
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  methods: {
    open () {
      this.$refs.toast.showToast()
    },
    btnOpen () {
      this.$refs.toast2.showToast()
    },
    btnEvent () {
      console.log('btnEvent')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
