<template>
  <div
    v-if="multiple"
    :class="['accordion-panel', type, {'active': multiVisible}]"
  >
    <div
      class="accordion-header"
    >
      <!-- 헤더 안에 버튼 클릭 -->
      <div
        v-if="hasbtn"
        class="accordion-header-inner"
        tabindex="0"
      >
        <slot name="accordion-header" />
        <button
          :id="randomString + 'Acc'"
          :class="arrowgray ? 'btn-toggle gray' : 'btn-toggle'"
          type="button"
          :aria-expanded="multiVisible ? 'true' : 'false'"
          :aria-controls="'con-'+ randomString"
          :aria-disabled="multiVisible ? 'true' : 'false'"
          @click="open"
        >
          <uu-icon
            v-if="type === 'type2'"
            icon="arrow1"
            size="16"
            direction="bottom"
          />
          <uu-icon
            v-else
            icon="arrow1"
            size="24"
            direction="bottom"
          />
          <span
            v-if="multiVisible"
            class="sr-only"
          >닫기</span>
          <span
            v-else
            class="sr-only"
          >열기</span>
        </button>
      </div>
      <!-- 헤더 전체 클릭 -->
      <button
        v-else
        :id="randomString + 'Acc'"
        class="accordion-header-inner"
        type="button"
        :aria-expanded="multiVisible ? 'true' : 'false'"
        :aria-controls="'con-'+ randomString"
        :aria-disabled="multiVisible ? 'true' : 'false'"
        @click="open"
      >
        <slot name="accordion-header" />
        <div :class="arrowgray ? 'ico-toggle gray' : 'ico-toggle'">
          <uu-icon
            v-if="type === 'type2'"
            icon="arrow1"
            size="16"
            direction="bottom"
          />
          <uu-icon
            v-else
            icon="arrow1"
            size="24"
            direction="bottom"
          />
        </div>
      </button>
    </div>
    <transition
      name="accordion-content"
      mode="out-in"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-if="multiVisible"
        :id="'con-'+ randomString"
        class="accordion-content"
        role="region"
        :aria-labelledby="randomString + 'Acc'"
        tabindex="0"
      >
        <div class="accordion-content-inner">
          <slot name="accordion-content" />
        </div>
      </div>
    </transition>
  </div>
  <!--  -->
  <div
    v-else
    :class="['accordion-panel', type, {'active':visible }]"
  >
    <div
      class="accordion-header"
    >
      <!-- 헤더 안에 버튼 클릭 -->
      <div
        v-if="hasbtn"
        class="accordion-header-inner"
        tabindex="0"
      >
        <slot name="accordion-header" />
        <button
          :id="randomString + 'Acc'"
          :class="arrowgray ? 'btn-toggle gray' : 'btn-toggle'"
          type="button"
          :aria-expanded="multiVisible ? 'true' : 'false'"
          :aria-controls="'con-'+ randomString"
          :aria-disabled="multiVisible ? 'true' : 'false'"
          @click="open"
        >
          <uu-icon
            v-if="type === 'type2'"
            icon="arrow1"
            size="16"
            direction="bottom"
          />
          <uu-icon
            v-else
            icon="arrow1"
            size="24"
            direction="bottom"
          />
          <span
            v-if="multiVisible"
            class="sr-only"
          >닫기</span>
          <span
            v-else
            class="sr-only"
          >열기</span>
        </button>
      </div>
      <!-- 헤더 전체 클릭 -->
      <button
        v-else
        :id="randomString + 'Acc'"
        class="accordion-header-inner"
        type="button"
        :disabled="disabled"
        :aria-expanded="multiVisible ? 'true' : 'false'"
        :aria-controls="'con-'+ randomString"
        :aria-disabled="multiVisible ? 'true' : 'false'"
        @click="open"
      >
        <slot name="accordion-header" />
        <div :class="arrowgray ? 'ico-toggle gray' : 'ico-toggle'">
          <uu-icon
            v-if="type === 'type2'"
            icon="arrow1"
            size="16"
            direction="bottom"
          />
          <uu-icon
            v-else
            icon="arrow1"
            size="24"
            direction="bottom"
          />
        </div>
      </button>
    </div>
    <transition
      name="accordion-content"
      mode="out-in"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-if="visible"
        :id="'con-'+ randomString"
        class="accordion-content"
        role="region"
        :aria-labelledby="randomString + 'Acc'"
        tabindex="0"
      >
        <div class="accordion-content-inner">
          <slot
            name="accordion-content"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    hasbtn: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    arrowgray: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      index: null,
      multiVisible: false,
      type: this.$parent.Accordion.type
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
    },
    visible () {
      return this.index === this.$parent.Accordion.active
    }
  },
  created () {
    this.index = this.$parent.Accordion.count++
  },
  mounted () {
    if (this.active && this.multiple) {
      this.multiVisible = true
    }
    if (this.active) {
      this.$parent.Accordion.active = this.index
    }
  },
  methods: {
    open () {
      if (this.multiple) {
        this.multiVisible = !this.multiVisible
      } else {
        if (this.visible) {
          this.$parent.Accordion.active = null
        } else {
          this.$parent.Accordion.active = this.index
        }
      }
    },
    startTransition (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    endTransition (el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
