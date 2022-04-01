<template>
  <a-card hoverable style="width: 100%" :loading="isLoadingPostRead">
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
          :loading="isLoadingPostUpdate">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    isLoadingPostRead: {
      type: Boolean,
      required: true
    },
    isLoadingPostUpdate: {
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

  watch: {
    item: function () {
      if (!this.isLoadingPostRead) this.cdSetFieldsValueWithAntd()
    }
  },

  /* request, prepare, on, cb, action */
  methods: {
    onSubmitForm (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.prepareData_(values)
        }
      })
    },
    cdSetFieldsValueWithAntd () {
      console.log('cdSetFieldsValueWithAntd .. item.title : ', this.item.title)
      this.form.getFieldDecorator('title', { initialValue: this.item.title, preserve: false })
      this.form.getFieldDecorator('content', { initialValue: this.item.content, preserve: false })
      this.form.getFieldDecorator('author', { initialValue: this.item.author, preserve: false })
    }
  }
}
</script>

<style>
</style>
