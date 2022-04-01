<template>
  <a-list
    class="demo-loadmore-list"
    :loading="isLoadingPostItems"
    item-layout="horizontal"
    :data-source="items" >
    <div
      v-if="donePostItems"
      data="loadMore"
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }" >
      <a-spin v-if="isLoadingPostItems" />
      <a-button v-else @click="onClickMoreBtn">
        loading more
      </a-button>
    </div>
    <a-list-item data="renderItem" data-scope="item">
      <a data="actions" @click="onClickEditBtn(item.id)">edit</a>
      <a data="actions" @click="onClickReadBtn(item.id)">more</a>
      <a-list-item-meta :description="item.content">
        <span data="title">
          <router-link :to="{ name: 'postsRead', params: { postId: item.id }}">
            {{ item.title }}
          </router-link>
        </span>
        <a-avatar data="avatar" :size="64" :src="item.image" />
      </a-list-item-meta>
      <div>{{item.author}}</div>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
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

  /* request, prepare, on, cb, action */
  methods: {
    async onClickMoreBtn () {
      this.onClickMoreBtn_()
    },
    onClcikRefreshBtn () {
      this.onClcikRefreshBtn_()
    },
    onClickEditBtn (postId) {
      this.onClickEditBtn_(postId)
    },
    onClickReadBtn (postId) {
      this.onClickReadBtn_(postId)
    }
  }

}
</script>

<style>

</style>
