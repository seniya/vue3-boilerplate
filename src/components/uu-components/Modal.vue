<template>
  <div
    class="modal"
    role="dialog"
    :class="[type, inner? 'inner':'']"
    :aria-labelledby="randomString + 'Title'"
    :aria-describedby="randomString + 'Desc'"
  >
    <div class="modal-dialog">
      <div
        ref="modalContent"
        class="modal-content"
        :class="[hideHeader? 'hide-header':'', hideFooter? 'hide-footer':'', close? 'close':'', btnHeader? 'btn-header':'', noScroll? 'no-scroll':'', floating? 'floating':'', bodyScroll? 'body-scroll':'']"
        tabindex="0"
      >
        <!-- modal-header -->
        <div v-if="btnHeader">
          <slot name="modal-header-btn">
            <button
              type="button"
              class="btn btn-primary"
            >
              <span>확인</span>
            </button>
          </slot>
        </div>
        <slot
          v-if="!hideHeader"
          name="native-header"
        />
        <div
          v-if="!hideHeader"
          class="modal-header"
          :class="headerType2? 'header-type2':''"
        >
          <div class="modal-header-inner">
            <!-- back -->
            <button
              v-if="back"
              type="button"
              class="btn-header back"
              aria-label="이전"
              @click="closebtn"
            >
              <uu-icon
                icon="arrow2"
                size="24"
                direction="left"
              />
            </button>
            <!--// back -->
            <div
              v-if="divHeader"
              :id="randomString + 'Title'"
            >
              <slot name="modal-header">
                div-header
              </slot>
            </div>
            <h2
              v-else
              :id="randomString + 'Title'"
              class="modal-title"
              :class="titleLeft? 'text-left':''"
            >
              <span
                v-if="hideTitle"
                class="sr-only"
              >팝업 타이틀</span>
              <slot
                v-else
                name="modal-header"
              >
                <span>팝업 타이틀</span>
              </slot>
            </h2>
            <!-- modal-close -->
            <button
              v-if="!hideClose"
              type="button"
              class="btn-header close"
              aria-label="닫기"
              @click="closebtn"
            >
              <uu-icon
                icon="close"
                size="24"
              />
            </button>
            <!-- modal-close -->
          </div>
        </div>
        <!-- modal-header //-->
        <!-- modal-body -->
        <div
          :id="randomString + 'Desc'"
          class="modal-body"
        >
          <!-- modal-close -->
          <button
            v-if="close"
            type="button"
            class="btn-header close"
            aria-label="닫기"
            @click="closebtn"
          >
            <uu-icon
              icon="close"
              size="24"
            />
          </button>
          <!-- modal-close -->
          <slot name="modal-body">
            <h4>type</h4>
            <p>
              bottom || full || alert
            </p>
            <br>
            <h4>option</h4>
            <p>
              hideHeader(해더x) || hideFooter(푸터x) || hideBackdrop(배경x) || hideClose(닫기버튼x) || titleLeft(타이틀왼쪽정렬) || inner(모달+모달)
              || back(이전버튼추가) || headerType2(예외케이스타입) || btn-header(bottom모달 header에 버튼유형) || divHeader(div해더) || noScroll(스크롤 없음) || floating(하단버튼플로팅) || bodyScroll(modal-body에 scroll)
              || scroll-floating(스크롤이 생기면 하단버튼플로팅)
            </p>
          </slot>
        </div>
        <!-- modal-body //-->
        <!-- modal-footer -->
        <div
          v-if="!hideFooter"
          class="modal-footer"
        >
          <slot
            v-if="type === 'full' || type === 'bottom'"
            name="modal-footer"
          >
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-primary"
                @click="okbtn"
              >
                <span>확인</span>
              </button>
            </div>
          </slot>
          <slot
            v-else
            name="modal-footer"
          >
            <button
              type="button"
              class="btn text-secondary"
              @click="closebtn"
            >
              <span>취소</span>
            </button>
            <button
              type="button"
              class="btn text-primary"
              @click="okbtn"
            >
              <span>확인</span>
            </button>
          </slot>
        </div>
        <!-- modal-footer //-->
      </div>
    </div>
    <div
      v-if="!hideBackdrop"
      class="modal-backdrop"
      aria-label="닫기"
      @click="closebtn"
    />
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    etarget: {
      type: Element,
      default: null
    },
    etargetinner: {
      type: Element,
      default: null
    },
    inner: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null
    },
    titleLeft: {
      type: Boolean,
      default: false
    },
    back: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    headerType2: {
      type: Boolean,
      default: false
    },
    btnHeader: {
      type: Boolean,
      default: false
    },
    divHeader: {
      type: Boolean,
      default: false
    },
    noScroll: {
      type: Boolean,
      default: false
    },
    floating: {
      type: Boolean,
      default: false
    },
    bodyScroll: {
      type: Boolean,
      default: false
    },
    scrollFloating: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scrollFloatingHeight: null,
      scrollInterval: null,
      overflowScroll: null,
      scrollY: null
    }
  },
  computed: {
    // 랜덤아이디생성
    randomString () {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
      var stringLength = 15
      var randomstring = ''
      for (var i = 0; i < stringLength; i++) {
        var rnum = Math.floor(Math.random() * chars.length)
        randomstring += chars.substring(rnum, rnum + 1)
      }
      return randomstring
    }
  },
  mounted () {
    document.body.classList.add('modal-open')
    // backdrop
    if (this.inner) {
      var backdrop = document.querySelectorAll('.modal-backdrop')
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].classList.add('hide')
      }
      var inner = document.querySelector('.inner')
      if (this.type === 'bottom') {
        inner.nextElementSibling.classList.remove('hide')
      } else {
        document.querySelector('.inner .modal-backdrop').classList.remove('hide')
      }
    }
    if (this.type === 'full' && this.inner) {
      inner.nextElementSibling.classList.remove('hide')
    }
    // focus
    this.$refs.modalContent.focus()
    // hide-header
    if (this.btnHeader) {
      this.hideHeader = true
    }

    // scroll
    this.scrollY = window.pageYOffset

    // scroll overflow-y
    this.overflowScroll = setInterval(() => {
      var modalFooter = 0
      var modalHeader = 0
      var modalHeight = document.querySelector('.modal-content').clientHeight
      var modalBodyHeight = document.querySelector('.modal-body').clientHeight
      var modalViewHeight = modalHeight - (modalFooter + modalHeader)
      if (!this.hideFooter) {
        modalFooter = document.querySelector('.modal-footer').clientHeight
        if (this.inner) {
          modalFooter = document.querySelector('.inner .modal-footer').clientHeight
        }
      }
      if (!this.hideHeader) {
        modalHeader = document.querySelector('.modal-header').clientHeight
        if (this.inner) {
          modalHeader = document.querySelector('.inner .modal-header').clientHeight
        }
      }
      if (this.type === 'bottom' || this.type === 'alert' || this.type === 'full') {
        modalViewHeight = modalHeight - (modalFooter + modalHeader)
        if (modalViewHeight < modalBodyHeight) {
          document.querySelector('.modal-content').classList.add('overflow-y')
        }
      }
      if (this.inner) {
        modalHeight = document.querySelector('.inner .modal-content').clientHeight
        modalBodyHeight = document.querySelector('.inner .modal-body').clientHeight
        modalViewHeight = modalHeight - (modalFooter + modalHeader)
        if (modalViewHeight < modalBodyHeight) {
          document.querySelector('.inner .modal-content').classList.add('overflow-y')
        }
        var modalClass = document.querySelectorAll('.modal')
        for (var j = 0; j < modalClass.length; j++) {
          if (!modalClass[j].classList.contains('inner')) {
            if (modalClass[j].querySelector('.modal-content').classList.contains('overflow-y')) {
              modalClass[j].querySelector('.modal-content').classList.add('overflow-hidden')
            }
          }
        }
      }
    }, 100)

    // scroll floating
    if (this.scrollFloating) {
      this.scrollFloatingHeight = setInterval(() => {
        var modalBodyHeight = document.querySelector('.modal-body').clientHeight
        var modalHeight = document.querySelector('.modal').clientHeight
        if (modalBodyHeight >= modalHeight) {
          this.$refs.modalContent.classList.add('floating')
        } else {
          this.$refs.modalContent.classList.remove('floating')
        }
        if (this.inner) {
          var innerModalBodyHeight = document.querySelector('.inner .modal-body').clientHeight
          var innerModalHeight = document.querySelector('.inner .modal').clientHeight
          if (innerModalBodyHeight >= innerModalHeight) {
            document.querySelector('.inner .modal-content').add('floating')
          } else {
            document.querySelector('.inner .modal-content').remove('floating')
          }
        }
      }, 100)
    }
    // scroll gradient
    this.scrollInterval = setInterval(() => {
      var scrollTop
      if (this.type === 'bottom') {
        if (this.bodyScroll || this.floating || this.hideFooter) {
          scrollTop = document.querySelector('.modal-body').scrollTop
          if (scrollTop > 0) {
            document.querySelector('.modal-content').classList.add('scroll')
          } else {
            document.querySelector('.modal-content').classList.remove('scroll')
          }
        } else {
          scrollTop = document.querySelector('.modal-content').scrollTop
          if (scrollTop > 0) {
            this.$refs.modalContent.classList.add('scroll')
          } else {
            this.$refs.modalContent.classList.remove('scroll')
          }
        }
      }
      if (this.inner) {
        if (this.bodyScroll) {
          scrollTop = document.querySelector('.inner .modal-body').scrollTop
          if (scrollTop > 0) {
            document.querySelector('.inner .modal-content').classList.add('scroll')
          } else {
            document.querySelector('.inner .modal-content').classList.remove('scroll')
          }
        } else {
          scrollTop = document.querySelector('.inner .modal-content').scrollTop
          if (scrollTop > 0) {
            this.$refs.modalContent.classList.add('scroll')
          } else {
            this.$refs.modalContent.classList.remove('scroll')
          }
        }
      }
    }, 100)
  },
  destroyed () {
    clearInterval(this.overflowScroll)
    clearInterval(this.scrollInterval)
    if (!this.inner) {
      document.body.classList.remove('modal-open')
    }
    if (this.scrollFloating) {
      clearInterval(this.scrollFloatingHeight)
    }
    if (this.inner) {
      var backdrop = document.querySelectorAll('.modal-backdrop')
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].classList.remove('hide')
      }
      if (document.querySelector('.modal-content').classList.contains('overflow-hidden')) {
        document.querySelector('.modal-content').classList.remove('overflow-hidden')
      }
    }
    // scroll 원위치
    window.scrollTo(0, this.scrollY)
  },
  methods: {
    closebtn () {
      this.$emit('close', 'close')
      if (this.etargetinner != null) {
        this.etargetinner.focus()
      } else if (this.etarget != null) {
        this.etarget.focus()
      }
    },
    okbtn () {
      this.$emit('close', 'ok')
      if (this.etargetinner != null) {
        this.etargetinner.focus()
      } else if (this.etarget != null) {
        this.etarget.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
