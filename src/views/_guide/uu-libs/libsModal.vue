<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12 view-exam">
          <h3>Modal</h3>
          <section class="view-section">
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="bottomModalShow"
              >
                Bottom modal
              </button>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="fullModalShow"
              >
                Full modal
              </button>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="alertModalShow"
              >
                Alert modal
              </button>
            </div>

            <!-- bottom modal -->
            <div class="modal-area">
              <transition name="slide-up">
                <uu-modal
                  v-if="bottomModal"
                  type="bottom"
                  hide-backdrop
                  title-left
                  floating
                  :etarget="etarget"
                  @close="bottomModal = false"
                >
                  <template v-slot:modal-body>
                    <input
                      type="text"
                      placeholder="inputTest"
                    ><br>
                    <button
                      type="button"
                      @click="innerModalShow"
                    >
                      innerModal!
                    </button>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>마지막</p>
                  </template>
                </uu-modal>
              </transition>
              <!-- backdrop hide시 hide-backdrop 옵션추가 -->
              <uu-backdrop
                v-if="bottomModal"
                :etarget="etarget"
                @close="bottomModal = false"
              />
              <!-- // backdrop hide시 hide-backdrop 옵션추가 -->
            </div>

            <!-- full modal -->
            <div class="modal-area">
              <transition name="slide-up">
                <uu-modal
                  v-if="fullModal"
                  type="full"
                  hide-header
                  hide-backdrop
                  floating
                  :etarget="etarget"
                  @close="fullModal = false"
                >
                  <template v-slot:native-header>
                    <!-- native -->
                    <div class="native-header">
                      <Header
                        back
                        title="팝업타이틀"
                        close
                      />
                    </div>
                    <!-- // native -->
                  </template>
                  <template v-slot:modal-body>
                    <h4>
                      type
                    </h4>
                    <button
                      type="button"
                      @click="innerModalShow"
                    >
                      innerModal!
                    </button>
                    <br>
                    <input type="text">
                    <p>
                      bottom || full || alert
                    </p>
                    <br>
                    <h4>*공통 Modal Option</h4>
                    <p>
                      hideHeader(해더x)<br>
                      hideFooter(푸터x)<br>
                      hideBackdrop(배경x)<br>
                      hideClose(닫기버튼x)<br>
                      inner(모달+모달)<br>
                      noScroll(스크롤 없음)<br>
                      floating(하단버튼플로팅)<br>
                      bodyScroll(modal-body에 scroll)<br>
                      scroll-floating(스크롤이 생기면 하단버튼플로팅)<br>
                      <br>
                      *Header 옵션<br>
                      titleLeft(타이틀왼쪽정렬)<br>
                      back(이전버튼추가)<br>
                      headerType2(예외케이스타입)<br>
                      btn-header(bottom모달 header에 버튼유형)<br>
                      divHeader(div해더)<br>
                    </p>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>test</p><br>
                    <p>마지막</p>
                  </template>
                </uu-modal>
              </transition>
              <uu-backdrop
                v-if="fullModal"
                :etarget="etarget"
                @close="fullModal = false"
              />
            </div>

            <!-- alert -->
            <div class="modal-area">
              <uu-modal
                v-if="alertModal"
                type="alert"
                title-left
                hide-header
                close
                :etarget="etarget"
                @close="alertModal = false"
              />
            </div>

            <!-- inner modal bottom -->
            <!-- 210618 수정 -->
            <div class="modal-area">
              <transition name="slide-up">
                <uu-modal
                  v-if="innerModal"
                  inner
                  hide-backdrop
                  title-left
                  type="bottom"
                  :etargetinner="etargetinner"
                  @close="innerModal = false"
                />
              </transition>
              <uu-backdrop
                v-if="innerModal"
                :etargetinner="etargetinner"
                @close="innerModal = false"
              />
            </div>
            <!-- // 210618 수정 -->

            <!-- inner modal alert-->
            <!-- alert일때는 transition, backdrop 제거 -->
            <!-- <div class="modal-area">
              <uu-modal
                v-if="innerModal"
                inner
                type="alert"
                title-left
                hide-header
                :etargetinner="etargetinner"
                @close="innerModal = false"
              />
            </div> -->
          </section>
        </div>
        <div class="col-12 view-code">
          <pre class="language-html">
            <code>
&lt;!-- bottom modal --&gt;
&lt;div class="modal-area"&gt;
  &lt;transition name="slide-up"&gt;
    &lt;uu-modal
      v-if="bottomModal"
      type="bottom"
      hide-backdrop
      title-left
      :etarget="etarget"
      @close="bottomModal = false"
    /&gt;
  &lt;/transition&gt;
  &lt;!-- backdrop hide시 hide-backdrop 옵션추가 --&gt;
  &lt;uu-backdrop
    v-if="bottomModal"
    :etarget="etarget"
    hide-backdrop
    @close="bottomModal = false"
  /&gt;
  &lt;!-- // backdrop hide시 hide-backdrop 옵션추가 --&gt;
&lt;/div&gt;

&lt;!-- full modal --&gt;
&lt;div class="modal-area"&gt;
  &lt;transition name="slide-up"&gt;
    &lt;uu-modal
      v-if="fullModal"
      type="full"
      hide-header
      hide-backdrop
      :etarget="etarget"
      @close="fullModal = false"
    &gt;
      &lt;template v-slot:native-header&gt;
        &lt;!-- native --&gt;
        &lt;div class="native-header"&gt;
          &lt;Header
            back
            title="팝업타이틀"
            close
          /&gt;
        &lt;/div&gt;
        &lt;!-- // native --&gt;
      &lt;/template&gt;
      &lt;template v-slot:modal-body&gt;
        &lt;h4&gt;type&lt;/h4&gt;
        &lt;button
          type="button"
          @click="innerModalShow"
        &gt;
          innerModal!
        &lt;/button&gt;
        &lt;p&gt;
          inner || bottom || full || alert
        &lt;/p&gt;
        &lt;br&gt;
        &lt;h4&gt;option&lt;/h4&gt;
        &lt;p&gt;
          hideHeader(해더x) || hideFooter(푸터x) || hideBackdrop(배경x) || hideClose(닫기버튼x) || titleLeft(타이틀왼쪽정렬)
          || back(이전버튼추가) || close(닫기버튼추가) || headerType2(예외케이스타입) || btn-header(bottom모달 header에 버튼유형) || divHeader(div해더) || noScroll(스크롤 없음) || floating(하단버튼플로팅) || bodyScroll(modal-body에 scroll)
        &lt;/p&gt;
      &lt;/template&gt;
    &lt;/uu-modal&gt;
  &lt;/transition&gt;
  &lt;uu-backdrop
    v-if="fullModal"
    :etarget="etarget"
    @close="fullModal = false"
  /&gt;
&lt;/div&gt;

&lt;!-- alert --&gt;
&lt;div class="modal-area"&gt;
  &lt;uu-modal
    v-if="alertModal"
    type="alert"
    title-left
    hide-close
    :etarget="etarget"
    @close="alertModal = false"
  /&gt;
&lt;/div&gt;

&lt;!-- inner modal bottom --&gt;
&lt;div class="modal-area"&gt;
  &lt;transition name="slide-up"&gt;
    &lt;uu-modal
      v-if="innerModal"
      inner
      hide-backdrop
      title-left
      type="bottom"
      :etargetinner="etargetinner"
      @close="innerModal = false"
    /&gt;
  &lt;/transition&gt;
  &lt;uu-backdrop
    v-if="innerModal"
    :etargetinner="etargetinner"
    @close="innerModal = false"
  /&gt;
&lt;/div&gt;

&lt;!-- inner modal alert--&gt;
&lt;!-- alert일때는 transition, backdrop 제거 --&gt;
&lt;div class="modal-area"&gt;
  &lt;uu-modal
    v-if="innerModal"
    inner
    type="alert"
    :etargetinner="etargetinner"
    @close="innerModal = false"
  /&gt;
&lt;/div&gt;
            </code>
          </pre>
        </div>
        <div class="col-12 view-code">
          <pre class="language-js">
            <code>
export default {
  data() {
    return {
      etarget: null,

      // default
      defaultModal: false,

      // inner modal
      innerModal: false,
      etargetinner: null,

      // bottom modal
      bottomModal: false,

      // full modal
      fullModal: false,

      //alert modal
      alertModal: false,
    };
  },
  methods: {
    // default
    defaultModalShow(e){
      this.defaultModal = !this.defaultModal
      this.etarget = e.target;
    },
    defaultModalHide(){
      this.defaultModal = !this.defaultModal
      this.etarget.focus();
    },
    // inner modal
    innerModalShow(e){
      this.innerModal = !this.innerModal
      this.etargetinner = e.target;
    },
    // bottom modal
    bottomModalShow(e){
      this.bottomModal = !this.bottomModal
      this.etarget = e.target;
    },
    // full modal
    fullModalShow(e){
      this.fullModal = !this.fullModal
      this.etarget = e.target;
    },
    // alert modal
    alertModalShow(e){
      this.alertModal = !this.alertModal
      this.etarget = e.target;
    },
    alertModalHide(){
      this.alertModal = !this.alertModal
      this.etarget.focus();
    },
  }
};
            </code>
          </pre>
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
      etarget: null,

      // default
      defaultModal: false,

      // inner modal
      innerModal: false,
      etargetinner: null,

      // bottom modal
      bottomModal: false,

      // full modal
      fullModal: false,

      // alert modal
      alertModal: false
    }
  },
  mounted () {
    Prism.highlightAll()
    console.log()
  },
  methods: {
    // default
    defaultModalShow (e) {
      this.defaultModal = !this.defaultModal
      this.etarget = e.target
    },
    defaultModalHide () {
      this.defaultModal = !this.defaultModal
      this.etarget.focus()
    },
    // inner modal
    innerModalShow (e) {
      this.innerModal = !this.innerModal
      this.etargetinner = e.target
    },
    // bottom modal
    bottomModalShow (e) {
      this.bottomModal = !this.bottomModal
      this.etarget = e.target
    },
    // full modal
    fullModalShow (e) {
      this.fullModal = !this.fullModal
      this.etarget = e.target
    },
    // alert modal
    alertModalShow (e) {
      this.alertModal = !this.alertModal
      this.etarget = e.target
    },
    alertModalHide () {
      this.alertModal = !this.alertModal
      this.etarget.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
</style>
