<template>
  <div>
    <div>
      <h4>
        POSTS 목록 페이지
        <button @click="onClcikRefresh">새로고침</button>
        &nbsp;&nbsp;
        <button @click="onClickCreate">새글작성</button>
      </h4>
    </div>

    <!-- -->
    <viewList
      :items="state.posts"
      :isLoadingPostItems="postStore.getIsLodingPosts"
      :donePostItems="postStore.getIsDonePosts"
      :onClickMoreBtn_="actionMore"
      :onClickEditBtn_="actionEdit"
      :onClickReadBtn_="actionRead" />

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { cloneDeep } from 'lodash'

import viewList from '@/views/posts/components/viewList.vue'
import { usePostStore } from '@/service/posts/posts.module'
import { PostInterface } from '@/service/posts/model/post.interface'
import { logger } from '@/utils/instance.logger'

interface stateType {
  posts: PostInterface[];
}

export default defineComponent({
  name: 'postsList',
  components: {
    viewList
  },
  setup () {
    /* request, prepare, on, cb, action */
    const router = useRouter()
    const route = useRoute()
    const postStore = usePostStore()
    const state: stateType = reactive({ posts: [] })

    async function requestApiHttpPosts () {
      const resResult = await postStore.actionHttpPosts()
      if (resResult.result) {
        prepareData()
      }
    }

    function prepareData () {
      const items = postStore.getPosts
      if (items.length > 0) {
        const posts_ = cloneDeep(items)
        /*
          데이터 가공 영역
        */
        state.posts = posts_
      }
    }

    async function actionMore () {
      logger.debug('postsList actionMore')
    }
    function actionEdit () {
      logger.debug('postsList actionEdit')
    }
    function actionRead (id: string) {
      router.push({
        path: `/posts-read/${id}`,
        query: { ...route.query }
      })
    }

    function onClcikRefresh () {
      requestApiHttpPosts()
    }
    function onClickCreate () {
      router.push({
        path: '/posts-create',
        query: { ...route.query }
      })
    }

    onMounted(() => {
      logger.debug('mounted postsList')
    })
    onUnmounted(() => {
      logger.debug('unmounted postsList')
    });
    (() => {
      logger.debug('initailize postsList')
      requestApiHttpPosts()
    })()

    return {
      postStore,
      state,
      actionMore,
      actionEdit,
      actionRead,
      onClcikRefresh,
      onClickCreate
    }
  }
})
</script>
