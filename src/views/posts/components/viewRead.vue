<template>
  <a-card :loading="isLoadingPostRead" :title="item.title">
    <div>
      <span>author : {{item.author}}</span>
    </div>
    <template #cover>
      <img
        alt="image loding.."
        style="max-width: 400px;"
        :src="item.image"
      />
    </template>
    <template #actions>
      <edit-outlined key="edit" @click="onClickEditBtn(item.id)" />
      <backward-outlined key="back" @click="onClickBackBtn"/>
    </template>
    <a-card-meta :description="item.content">
    </a-card-meta>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { EditOutlined, BackwardOutlined } from '@ant-design/icons-vue'
import { logger } from '@/utils/instance.logger'

export default defineComponent({
  name: 'viewRead',
  components: {
    EditOutlined, BackwardOutlined
  },
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
    onClickBackBtn_: {
      type: Function,
      required: true
    },
    onClickEditBtn_: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    function onClickBackBtn () {
      props.onClickBackBtn_()
    }
    function onClickEditBtn (id: string) {
      props.onClickEditBtn_(id)
    }
    onMounted(() => {
      logger.debug('mounted viewRead')
    })
    onUnmounted(() => {
      logger.debug('unmounted viewRead')
    })

    return {
      onClickBackBtn,
      onClickEditBtn
    }
  }
})
</script>
