<template>
  <a-card hoverable style="width: 100%">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="actionFinish"
      @finishFailed="actionFinishFailed"
    >
      <a-form-item
        label="title"
        name="title"
        :rules="[{ required: true, message: 'Please input title' }]"
      >
        <a-input v-model:value="formState.title" />
      </a-form-item>

      <a-form-item
        label="content"
        name="content"
        :rules="[{ required: true, message: 'Please input content' }]"
      >
        <a-input v-model:value="formState.content" />
      </a-form-item>

      <a-form-item
        label="author"
        name="author"
        :rules="[{ required: true, message: 'Please input author' }]"
      >
        <a-input v-model:value="formState.author" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>

  </a-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

interface FormState {
  title: string;
  content: string;
  author: string;
}
export default defineComponent({
  props: {
    isLoadingPostAdd: {
      type: Boolean,
      required: true
    },
    actionSave: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    const formState = reactive<FormState>({
      title: '',
      content: '',
      author: ''
    })
    const actionFinish = (values: any) => {
      console.log('Success:', values)
      props.actionSave()
    }

    const actionFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    return {
      formState,
      actionFinish,
      actionFinishFailed
    }
  }
})
</script>

<style>
</style>
