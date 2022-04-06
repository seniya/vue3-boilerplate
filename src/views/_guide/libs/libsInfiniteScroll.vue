<template>
  <div>
    <p
      v-for="item in list"
      :key="item"
      class="example-list-item"
      v-text="item"
    />
    <infinite-loading @infinite="infiniteHandler" />
  </div>
</template>

<script>
// https://peachscript.github.io/vue-infinite-loading/guide/#installation
import InfiniteLoading from 'vue-infinite-loading'
export default {
  components: {
    InfiniteLoading
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    infiniteHandler ($state) {
      if (this.list.length > 200) {
        $state.complete()
      } else {
        setTimeout(() => {
          var temp = []
          for (var i = this.list.length; i <= this.list.length + 10; i++) {
            temp.push(i)
          }
          this.list.push(...temp)
          $state.loaded()
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.example-list-item {
  margin: 0;
  padding: 0 10px;
  font-size: 14px;
  line-height: 40px;
  color: #666;
  background-color: #fafafa;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #e3e3e3;
}

.example-list-item::before {
  content: 'Line: ';
}

</style>
