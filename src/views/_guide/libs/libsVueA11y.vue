<template>
  <div>
    <!-- <p>
      <button class="trigger" ref="trigger" @click="shown = true">
        Open a Modal Dialog
      </button>
    </p> -->
    <!-- <div v-show="shown" class="dialog">
      <VueFocusTrap
        ref="dialog"
        @open="open"
        @gofirst="goFirst"
        @golast="goLast"
      >
        <h1>Modal Dialog</h1>
        <label>
          Email:
          <input ref="email" type="email" />
        </label>
        <label>
          Password
          <input ref="password" type="password" />
        </label>
        <button ref="login" @click="shown = false">Login</button>
        <button ref="cancel" @click="shown = false">Cancel</button>
      </VueFocusTrap>
    </div> -->
    <FocusLoop>
      <form>
        focus loop<br>
        <input type="text "><br>
        <input type="text "><br>
        <input type="text "><br>
        <input type="text "><br>
        <input type="text "><br>
      </form>
    </FocusLoop>
  </div>
</template>

<script>
// https://jiongks.name/vue-a11y-utils/#table-of-contents
// import { VueFocusTrap } from "vue-a11y-utils";
// https://github.com/vue-a11y/vue-focus-loop
import { FocusLoop } from '@vue-a11y/focus-loop'
export default {
  components: {
    // VueFocusTrap
    FocusLoop

  },
  data () {
    return {
      // shown: false
    }
  },

  // watch: {
  //   shown(value) {
  //     if (value) {
  //       setTimeout(() => {
  //         const dialog = this.$refs.dialog;
  //         dialog.open();
  //       }, 50);
  //     } else {
  //       const dialog = this.$refs.dialog;
  //       dialog.close(true);
  //     }
  //   }
  // },
  methods: {
    // open() {
    //   this.goFirst();
    // },
    // goFirst() {
    //   this.$refs.email.focus();
    // },
    // goLast() {
    //   this.$refs.cancel.focus();
    // }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: white;
  opacity: 0.9;
  box-sizing: border-box;
  padding: 8em 4em;
  text-align: center;
}
</style>
