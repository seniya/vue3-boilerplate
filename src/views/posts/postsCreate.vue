<template>
  <div>
    <h4>
      POSTS 작성 페이지
      <button @click="onClickBackBtn">목록으로</button>
    </h4>

    <!-- antd 반영-->
    <viewCreate
      :isLoadingPostAdd="false"
      :actionSave="actionCreate" />

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import viewCreate from '@/views/posts/components/viewCreate.vue'
import { logger } from '@/utils/instance.logger'

export default defineComponent({
  name: 'postsCreate',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    viewCreate
  },
  setup () {
    /* request, prepare, on, cb, action */
    const router = useRouter()
    const route = useRoute()

    function actionCreate () {
      logger.debug('postsCreate actionCreate')
      alert('저장!')
    }

    function onClickBackBtn () {
      router.push({
        path: '/posts-list',
        query: { ...route.query }
      })
    }

    onMounted(() => {
      logger.debug('mounted postsCreate')
    })
    onUnmounted(() => {
      logger.debug('unmounted postsCreate')
    });
    (() => {
      logger.debug('initailize postsCreate')
    })()

    return {
      actionCreate,
      onClickBackBtn
    }
  }
})

/*
import shortId from 'shortid'
import { faker } from '@faker-js/faker'
import viewCreate from '@/views/posts/components/viewCreate'

export default {
  name: 'postsCreate',

  components: {
    viewCreate
  },

  data () {
    return {
      formErrors: [],
      title: null,
      content: null,
      author: null
    }
  },

  created () {
    console.log('viewCreate : ', viewCreate)
    this.initialize()
  },

  methods: {
    initialize () {
      // console.log('initialize 아무것도 안함')
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
      this.requestSaveAPI(fdata)
    },
    async requestSaveAPI (fdata) {
      const returnCondition = await this.$store.dispatch('post/POST_ADD', { fdata })
      console.log('requestAPI returnCondition: ', returnCondition)
    }
  }

}
*/
</script>
