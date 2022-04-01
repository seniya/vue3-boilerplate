<template>
<a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="home">
      <router-link to="/">home</router-link>
    </a-menu-item>
    <a-menu-item key="members">
        <router-link to="/members/main">
          로그인
          <span style="color: red;">(로그인됨)</span>
        </router-link>
    </a-menu-item>
    <a-menu-item key="posts">
      <router-link to="/posts">게시판 with Vuex</router-link>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>페이지 모음</template>
      <a-menu-item-group title="Item 1">
        <a-menu-item key="page:1">
          <router-link to="/pages/1">페이지1 - 권한없이 접근</router-link>
        </a-menu-item>
        <a-menu-item key="page:2">
          <router-link to="/pages/2">페이지2 - 권한확인 with page</router-link>
        </a-menu-item>
        <a-menu-item key="page:3">
          <router-link to="/pages/3">페이지3 - 권한확인 with router</router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
  </a-menu>
</template>
<!--
<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">
        <router-link to="/">홈</router-link>
      </a-menu-item>
      <a-menu-item key="sign">
        <router-link to="/sign/in">
        로그인
        <span style="color: red;">(로그인됨)</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="posts">
        <router-link to="/posts">게시판 with Vuex Full</router-link>
      </a-menu-item>
      <a-menu-item key="articles">
        <router-link to="/articles">게시판 with Vuex Some</router-link>
      </a-menu-item>
      <a-menu-item key="letters">
        <router-link to="/letters">게시판 without Vuex</router-link>
      </a-menu-item>
      <a-sub-menu>
        <span class="submenu-title-wrapper">페이지 모음</span>
        <a-menu-item-group>
          <a-menu-item key="page:1">
            <router-link to="/pages/1">페이지1 - 권한없이 접근</router-link>
          </a-menu-item>
          <a-menu-item key="page:2">
            <router-link to="/pages/2">페이지2 - 권한확인 with page</router-link>
          </a-menu-item>
          <a-menu-item key="page:3">
            <router-link to="/pages/3">페이지3 - 권한확인 with router</router-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>

  </div>
</template>
-->

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { },
  setup () {
    const current = ref<string[]>(['home'])

    return {
      current
    }
  }
})
</script>
