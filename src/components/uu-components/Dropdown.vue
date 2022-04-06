<template>
  <div
    class="dropdown"
    :class="position"
  >
    <div
      class="dropdown-container"
    >
      <button
        :id="randomString"
        type="button"
        class="dropdown-name"
        aria-haspopup="true"
        :aria-expanded="dropdownCont"
        aria-label="확장 메뉴 열림"
        @click="dropdownToggle"
      >
        <slot
          name="dropdown-name"
        >
          텍스트
        </slot>
      </button>
      <div
        v-show="dropdownCont"
        class="dropdown-content"
        :aria-labelledby="randomString"
      >
        <slot
          name="dropdown-content"
        >
          내용
        </slot>
      </div>
    </div>

    <div
      v-show="dropdownBack"
      class="dropdown-backdrop"
      @click="dropdownToggle"
    />
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dropdownCont: false,
      dropdownBack: false
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
  methods: {
    dropdownToggle () {
      this.dropdownCont = !this.dropdownCont
      this.dropdownBack = !this.dropdownBack
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
