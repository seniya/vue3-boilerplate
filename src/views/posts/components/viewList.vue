<template>
  <a-list
    class="demo-loadmore-list"
    :loading="isLoadingPostItems"
    item-layout="horizontal"
    :data-source="items"
  >
    <template #loadMore>
      <div
        v-if="!isLoadingPostItems && donePostItems"
        :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
      >
        <a-button @click="onClickMoreBtn">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a @click="onClickReadBtn(item.id)" key="list-loadmore-more">more</a>
        </template>
        <a-skeleton avatar :title="false" :loading="!!isLoadingPostItems" active>
          <a-list-item-meta :description="item.content">
            <template #title>
              <a @click="onClickReadBtn(item.id)">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.image" />
            </template>
          </a-list-item-meta>
        </a-skeleton>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'

import { logger } from '@/utils/instance.logger'

export default defineComponent({
  name: 'viewList',
  components: {},
  props: {
    items: {
      type: Array,
      required: true
    },
    isLoadingPostItems: {
      type: Boolean,
      required: true
    },
    donePostItems: {
      type: Boolean,
      required: true
    },
    onClickMoreBtn_: {
      type: Function,
      required: true
    },
    onClickEditBtn_: {
      type: Function,
      required: true
    },
    onClickReadBtn_: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    async function onClickMoreBtn () {
      props.onClickMoreBtn_()
    }
    function onClickEditBtn () {
      props.onClickEditBtn_()
    }
    function onClickReadBtn (id: string) {
      props.onClickReadBtn_(id)
    }

    onMounted(() => {
      logger.debug('mounted viewList')
    })
    onUnmounted(() => {
      logger.debug('unmounted viewList')
    })

    return {
      onClickMoreBtn,
      onClickEditBtn,
      onClickReadBtn
    }
  }
})
</script>
