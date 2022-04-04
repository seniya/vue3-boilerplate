<template>
  <div>
    <div>
      <h4>
        POSTS 상세 페이지
        <button @click="onClickRefresh">새로고침</button>
      </h4>
    </div>

    <viewRead
      :item="state.postDetail"
      :isLoadingPostRead="postStore.getIsLodingPostInfo"
      :donePostRead="postStore.getIsDonePostInfo"
      :onClickBackBtn_="actionGoList"
      :onClickEditBtn_="actionEdit"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { cloneDeep } from 'lodash'

import viewRead from '@/views/posts/components/viewRead.vue'
import { postInfoInit, usePostStore } from '@/service/posts/posts.module'
import { PostInterface } from '@/service/posts/model/post.interface'
import { logger } from '@/utils/instance.logger'

interface stateType {
  postDetail: PostInterface;
}

export default defineComponent({
  name: 'postsRead',
  components: {
    viewRead
  },
  setup () {
    /* request, prepare, on, cb, action */
    const router = useRouter()
    const route = useRoute()
    const postStore = usePostStore()
    const state: stateType = reactive({
      postDetail: postInfoInit
    })

    async function requestApiHttpPostInfo () {
      const resResult = await postStore.actionHttpPostInfo()
      if (resResult.result) {
        prepareData()
      }
    }

    function prepareData () {
      const item = postStore.getPostInfo
      if (item) {
        const postDetail = cloneDeep(item)
        /*
          데이터 가공 영역
        */
        state.postDetail = postDetail
      }
    }

    function actionEdit () {
      logger.debug('postsRead actionEdit')
    }
    function actionGoList () {
      logger.debug('postsRead actionRead')
      router.push({
        path: '/posts-list',
        query: { ...route.query }
      })
    }

    function onClickRefresh () {
      requestApiHttpPostInfo()
    }

    onMounted(() => {
      logger.debug('mounted postsRead')
    })
    onUnmounted(() => {
      logger.debug('unmounted postsRead')
    });
    (() => {
      logger.debug('initailize postsRead')
      requestApiHttpPostInfo()
    })()

    return {
      postStore,
      state,
      actionEdit,
      actionGoList,
      onClickRefresh
    }
  }
})
</script>
