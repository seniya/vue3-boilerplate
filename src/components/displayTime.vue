<template>
  <span>{{displayTime}}</span>
</template>

<script>
export default {
  props: ['time', 'type'],
  computed: {
    displayTime () {
      if (this.type === 'normal') {
        return this.$moment(this.time).format('MM-DD HH:mm:ss')
      } else if (this.type === 'full') {
        return this.$moment(this.time).format('YYYY MMMM Do, HH:mm:ss')
      } else if (this.type === 'clock') {
        return this.$moment(this.time).format('HH:mm:ss')
      } else {
        const bt = this.$moment(this.time)
        const ct = this.$moment()
        const diff = ct.diff(bt, 'days')
        if (diff > 0) return bt.toDate().toLocaleDateString()
        return bt.fromNow()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
