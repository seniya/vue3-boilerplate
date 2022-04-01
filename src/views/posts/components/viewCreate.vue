<template>
  <a-card hoverable style="width: 100%">
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="onSubmitForm">
      <a-form-item label="Title">
        <a-input
          v-decorator="['title', { rules: [{ required: true, message: 'Please input Title' }] }]" />
      </a-form-item>
      <a-form-item label="Content">
        <a-input
          v-decorator="['content', { rules: [{ required: true, message: 'Please input content' }] }]" />
      </a-form-item>
      <a-form-item label="Author">
        <a-input
          v-decorator="['author', { rules: [{ required: true, message: 'Please input Author' }] }]" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button
          type="primary"
          html-type="submit"
          :loading="isLoadingPostAdd">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  props: {
    isLoadingPostAdd: {
      type: Boolean,
      required: true
    },
    prepareData_: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      form: this.$form.createForm(this, { name: 'post' })
    }
  },

  methods: {
    onSubmitForm (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.prepareData_(values)
        }
      })
    }
  }
}
</script>

<style>
</style>
