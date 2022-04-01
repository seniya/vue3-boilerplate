<template>
  <div>
    <h3>
      POSTS 수정 페이지
      <button @click="onClickBackBtn">목록으로</button>
    </h3>

    <!-- 디자인 없이..
    <div>
      <div>
        $store.state.post.isLoadingPostRead : {{$store.state.post.isLoadingPostRead}}
      </div>
      <div>
        $store.state.post.isLoadingPostUpdate : {{$store.state.post.isLoadingPostUpdate}}
      </div>
      <div>
        $store.state.post.donePostUpdate : {{$store.state.post.donePostUpdate}}
      </div>
      <div>
        $store.state.post.errorPostUpdate : {{$store.state.post.errorPostUpdate}}
      </div>
      <form name="normal-form" @submit.prevent="onSubmitForm">
        <div v-if="formErrors.length > 0">
          <b>Please correct the following error(s):</b>
          <div v-for="(item, index) in formErrors" :key="index">
            <span style="color: red">{{ item.text }}</span>
          </div>
        </div>
        <p>
          <label for="title">Title</label>
          <input type="text" name="title" id="title" v-model="title">
        </p>
        <p>
          <label for="content">Content</label>
          <input type="text" name="content" id="content" v-model="content">
        </p>
        <p>
          <label for="author">Author</label>
          <input type="text" name="author" id="author" v-model="author">
        </p>
        <p>
          <input type="submit" value="Submit" :disabled="$store.state.post.isLoadingPostUpdate">
        </p>
      </form>
    </div>
    -->

    <!-- antd 반영 -->
    <viewUpdate
      :isLoadingPostRead="$store.state.post.isLoadingPostRead"
      :isLoadingPostUpdate="$store.state.post.isLoadingPostUpdate"
      :prepareData_="prepareData"
      :item="this.$store.state.post.item" />

  </div>
</template>

<script>
import shortId from 'shortid'
import { faker } from '@faker-js/faker'
import viewUpdate from '@/views/posts/components/viewUpdate'

export default {
  name: 'postsCreate',

  components: {
    viewUpdate
  },

  data () {
    return {
      postId: this.$route.params.postId,
      formErrors: [],
      title: null,
      content: null,
      author: null
    }
  },

  created () {
    this.initialize()
  },

  /* request, prepare, on, cb, action */
  methods: {
    initialize () {
      this.requestReadAPI()
    },
    onClickBackBtn () {
      this.$router.push('/posts/list')
    },
    onSubmitForm (e) {
      if (this.title && this.content && this.author) {
        const values = {
          title: this.title,
          content: this.content,
          author: this.author
        }
        this.prepareData(values)
      } else {
        this.formErrors = []
        if (this.title === null || this.title === '') this.formErrors.push({ id: 'title', text: 'title required.' })
        if (this.content === null || this.content === '') this.formErrors.push({ id: 'content', text: 'content required.' })
        if (this.author === null || this.author === '') this.formErrors.push({ id: 'author', text: 'author required.' })
        console.log('this.formErrors : ', this.formErrors)
      }
    },
    prepareData (values) {
      const fdata = {
        id: shortId.generate(),
        title: values.title,
        content: values.content,
        image: faker.image.image(),
        animals: faker.image.animals(),
        author: values.author,
        createAt: Date.now()
      }
      this.requestModifyAPI(fdata)
    },
    async requestReadAPI () {
      const returnCondition = await this.$store.dispatch('post/POST_READ', { id: this.postId })
      console.log('requestAPI returnCondition: ', returnCondition)
      this.cdSetFieldsValueWithoutAntd()
    },
    async requestModifyAPI (fdata) {
      const returnCondition = await this.$store.dispatch('post/POST_UPDATE', { id: this.postId, fdata })
      console.log('requestAPI returnCondition: ', returnCondition)
    },
    cdSetFieldsValueWithoutAntd () {
      this.title = this.$store.state.post.item.title
      this.content = this.$store.state.post.item.content
      this.author = this.$store.state.post.item.author
    }
  }

}
</script>

<style>

</style>
