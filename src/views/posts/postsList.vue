<template>
  <div>
    <div>
      <h3>
        POSTS 목록 페이지
        <button @click="onClcikRefreshBtn">새로고침</button>
        &nbsp;&nbsp;
        <button @click="onClcikCreateBtn">새글작성</button>
      </h3>
    </div>

    <!-- <viewList
      :items="$store.state.post.items"
      :isLoadingPostItems="$store.state.post.isLoadingPostItems"
      :donePostItems="$store.state.post.donePostItems"
      :onClickMoreBtn_="onClickMoreBtn"
      :onClickEditBtn_="onClickEditBtn"
      :onClickReadBtn_="onClickReadBtn" /> -->

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue'
import { cloneDeep } from 'lodash'

// import viewList from '@/views/posts/components/viewList'
import { userPostStore } from '@/service/posts/posts.module'
import { PostInterface, PostsResponseInterface } from '@/service/posts/model/post.interface'
import { AxiosResponse } from 'axios'

interface stateType {
  posts: PostInterface[];
}

export default defineComponent({
  name: 'postsList',
  components: {
    // viewList
  },
  setup () {
    /* request, prepare, on, cb, action */
    const postStore = userPostStore()

    const state: stateType = reactive({ posts: [] })

    async function requestApiHttpPosts () {
      const resResult = await postStore.actionHttpPosts()
      prepareData(resResult)
    }

    function prepareData (itmes: AxiosResponse<PostsResponseInterface>) {
      state.posts = []
      // if (itmes.length > 0) {
      //   const posts_ = cloneDeep(itmes)
      //   /*
      //     데이터 가공
      //   */
      //   state.posts = posts_
      // }
    }

    onMounted(() => {
      console.log('postsList mounted')
    })
    onUnmounted(() => {
      console.log('postsList unmounted')
    });
    (() => {
      console.log('postsList initailize')
      requestApiHttpPosts()
    })()

    return {
      state
    }
  }
})

/*

import viewList from '@/views/posts/components/viewList'

export default {
  name: 'postsList',
  components: {
    viewList
  },

  created () {
    console.log('viewList : ', viewList)
    this.initialize()
  },
  methods: {
    initialize () {
      if (this.$store.state.post.items.length === 0) {
        this.requestAPI()
      }
    },
    async requestAPI () {
      const returnCondition = await this.$store.dispatch('post/POST_ITEMS', { })
      console.log('requestAPI returnCondition: ', returnCondition)
    },
    async onClickMoreBtn () {
      this.requestAPI()
    },
    onClcikRefreshBtn () {
      this.$store.commit('post/reSetItems')
      this.requestAPI()
    },
    onClickEditBtn (postId) {
      this.$router.push(`/posts/update/${postId}`)
    },
    onClickReadBtn (postId) {
      this.$router.push(`/posts/read/${postId}`)
    },
    onClcikCreateBtn () {
      this.$router.push('/posts/create')
    }
  }

}
*/
</script>
