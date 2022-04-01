<template>
  <a-card hoverable style="width: 100%" :loading="isLoadingPostRead">
    <img
      data="cover"
      alt="example"
      style="max-width: 400px;"
      v-if="donePostRead"
      :src="item.image" />
    <template data="actions" class="ant-card-actions">
      <a-icon key="rollback" type="rollback" @click="onClickBackBtn"/>
      <a-icon key="edit" type="edit" @click="onClickEditBtn(item.id)"/>
      <a-button
        icon="delete"
        @click="onClickDeleteBtn(item.id)"
        :loading="isLoadingPostRemove"/>
    </template>
    <a-card-meta
      :title="item.title"
      :description="item.content">
      <a-avatar
        data="avatar"
        :size="64"
        :src="item.animals" />
    </a-card-meta>
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
    donePostRead: {
      type: Boolean,
      required: true
    },
    isLoadingPostRemove: {
      type: Boolean,
      required: true
    },
    onClickBackBtn_: {
      type: Function,
      required: true
    },
    onClickEditBtn_: {
      type: Function,
      required: true
    },
    onClickDeleteBtn_: {
      type: Function,
      required: true
    }
  },

  methods: {
    onClickBackBtn () {
      this.onClickBackBtn_()
    },
    onClickEditBtn (postId) {
      this.onClickEditBtn_(postId)
    },
    onClickDeleteBtn (postId) {
      this.onClickDeleteBtn_(postId)
    }
  }
}
</script>

<style>
</style>
