<template>
  <div>
    <button
      type="button"
      @click="defaultModalShow"
    >
      default!
    </button>
    <br>
    <button
      type="button"
      @click="bottomModalShow"
    >
      bottom modal
    </button>
    <br>
    <button
      type="button"
      @click="fullModalShow"
    >
      full modal
    </button>
    <br>
    <button
      type="button"
      @click="alertModalShow"
    >
      alert modal
    </button>

    <!-- default -->
    <uu-modal
      v-if="defaultModal"
      :etarget="etarget"
      @close="defaultModal = false"
    >
      <template v-slot:modal-header>
        제목입니다.
      </template>
      <template v-slot:modal-body>
        <button
          type="button"
          @click="innerModalShow"
        >
          innerMdoal!
        </button>
      </template>
      <template v-slot:modal-footer>
        <button
          type="button"
          class="btn btn-secondary"
          @click="defaultModalHide"
        >
          취소
        </button>
      </template>
    </uu-modal>

    <!-- inner modal -->
    <uu-modal
      v-if="innerModal"
      type="inner"
      :etargetinner="etargetinner"
      @close="innerModal = false"
    />

    <!-- bottom modal -->
    <transition name="slide-up">
      <uu-modal
        v-if="bottomModal"
        type="bottom"
        hide-backdrop
        hide-footer
        :etarget="etarget"
        @close="bottomModal = false"
      >
        <template v-slot:modal-body>
          내용입니다.<br>
          내용입니다.<br>
          내용입니다.<br>
          내용입니다.<br>
          내용입니다.<br>
        </template>
      </uu-modal>
    </transition>
    <uu-backdrop
      v-if="bottomModal"
      :etarget="etarget"
      @close="bottomModal = false"
    />

    <!-- full modal -->
    <transition name="slide-up">
      <uu-modal
        v-if="fullModal"
        type="full"
        hide-backdrop
        :etarget="etarget"
        @close="fullModal = false"
      />
    </transition>
    <uu-backdrop
      v-if="fullModal"
      :etarget="etarget"
      @close="fullModal = false"
    />

    <!-- alert -->
    <uu-modal
      v-if="alertModal"
      type="alert"
      hide-header
      :etarget="etarget"
      @close="alertModal = false"
    >
      <template v-slot:modal-footer>
        <button
          type="button"
          class="btn btn-primary"
          @click="alertModalHide"
        >
          확인
        </button>
      </template>
    </uu-modal>
  </div>
</template>

<script>
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

</style>
