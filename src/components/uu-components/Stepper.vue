<template>
  <div class="stepper">
    <button
      :disabled="minusDeactivate"
      @click="onDecrease"
    >
      –
    </button>
    <input
      type="number"
      :value="numValue"
      :min="numMin"
      :max="numMax"
      :step="numStep"
    >
    <button
      :disabled="plusDeactivate"
      @click="onIncrease"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '0'
    },
    min: {
      type: String,
      default: '0'
    },
    max: {
      type: String,
      default: '100'
    },
    step: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      numValue: parseInt(this.value),
      numMin: parseInt(this.min),
      numMax: parseInt(this.max),
      numStep: parseInt(this.step),
      minusDeactivate: false,
      plusDeactivate: false
    }
  },
  mounted () {
    this.onDeactivate()
  },
  methods: {
    onDecrease () {
      if (this.numValue > this.numMin) {
        this.numValue = this.numValue - this.numStep
      }
      this.onDeactivate()
    },
    onIncrease () {
      if (this.numValue < this.numMax) {
        this.numValue = this.numValue + this.numStep
      }
      this.onDeactivate()
    },
    onDeactivate () {
      if (this.numValue <= this.numMin) {
        this.minusDeactivate = true
      } else if (this.numValue >= this.numMax) {
        this.plusDeactivate = true
      } else {
        this.minusDeactivate = false
        this.plusDeactivate = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
