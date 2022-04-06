<template>
  <div>
    <div class="accordion">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'type1'
    }
  },
  data () {
    return {
      Accordion: {
        count: 0,
        active: null,
        type: this.type
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
