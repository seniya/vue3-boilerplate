<template>
  <div>
    <div>
      <h4>Posts 컨테이너</h4>
    </div>
    <div style="padding: 20px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'postsContainer',
  components: { },
  setup () {
    return { }
  }
})
</script>

<style>
</style>
