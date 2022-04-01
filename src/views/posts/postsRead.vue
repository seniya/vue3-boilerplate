<template>
  <div>
    <div>
      <h3>
        POSTS 상세 페이지
        <button @click="onClcikRefreshBtn">새로고침</button>
      </h3>
    </div>

    <!-- 디자인 없이..
    <p>$store.state.post.isLoadingPostRead: {{$store.state.post.isLoadingPostRead}}</p>
    <p>$store.state.post.donePostRead: {{$store.state.post.donePostRead}}</p>
    <p>$store.state.post.errorPostRead: {{$store.state.post.errorPostRead}}</p>

    <div style="width: 100%; padding: 10px; border: 1px #cccccc solid;">
      <p>id : {{$store.state.post.item.id}}</p>
      <p>title : {{$store.state.post.item.title}}</p>
      <p>content : {{$store.state.post.item.content}}</p>
      <p>image : {{$store.state.post.item.image}}</p>
      <p>animals : {{$store.state.post.item.animals}}</p>
      <div>
        <button @click="onClickBackBtn">back</button>
        <button @click="onClickEditBtn($store.state.post.item.id)">edit</button>
        <button @click="onClickDeleteBtn($store.state.post.item.id)">delete</button>
      </div>
    </div>
    -->

    <!-- antd 반영 -->
    <viewRead
      :item="$store.state.post.item"
      :isLoadingPostRead="$store.state.post.isLoadingPostRead"
      :donePostRead="$store.state.post.donePostRead"
      :isLoadingPostRemove="$store.state.post.isLoadingPostRemove"
      :onClickBackBtn_="onClickBackBtn"
      :onClickEditBtn_="onClickEditBtn"
      :onClickDeleteBtn_="onClickDeleteBtn" />

    <div>
      <displayTime
        :time="$store.state.post.item.createAt"
        type="full"/>
    </div>
  </div>
</template>

<script>
import displayTime from '@/components/displayTime'
import viewRead from '@/views/posts/components/viewRead'

export default {
  name: 'postsRead',

  components: {
    displayTime,
    viewRead
  },

  data () {
    return {
      postId: this.$route.params.postId
    }
  },

  created () {
    console.log('viewRead : ', viewRead)
    this.initialize()
  },

  /* request, prepare, on, cb, action */
  methods: {
    initialize () {
      if (this.$store.state.post.item.id !== this.postId) {
        this.requestAPI()
      }
    },
    async requestAPI () {
      const returnCondition = await this.$store.dispatch('post/POST_READ', { id: this.postId })
      console.log('requestAPI returnCondition: ', returnCondition)
    },
    onClcikRefreshBtn () {
      this.$store.commit('post/reSetItem')
      this.requestAPI()
    },
    onClickBackBtn () {
      this.$router.push('/posts/list')
    },
    onClickEditBtn (postId) {
      this.$router.push(`/posts/update/${postId}`)
    },
    async onClickDeleteBtn (postId) {
      const returnCondition = await this.$store.dispatch('post/POST_REMOVE', { id: this.postId })
      console.log('requestAPI returnCondition: ', returnCondition)
    }
  }

}
</script>

<style>

</style>
