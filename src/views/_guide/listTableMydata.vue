<template>
  <div class="work-list">
    <div class="work-status">
      <span class="item"><em>전체 : </em>{{ realPageLength }}(<span class="sr-only">삭제 된 페이지 포함</span>{{ totalPageLength }}), </span>
      <span class="item"><em>완료 : </em>{{ donePageLength }}(<span class="sr-only">완료 후 삭제</span>{{ doneDeletePageLength }}), </span>
      <span class="item"><em>삭제 : </em>{{ deletePageLength }}, </span>
      <span class="item"><em>네이티브 : </em>{{ nativePageLength }}, </span>
      <span class="item"><em>배포 : </em>{{ finePageLength }}, </span>
      <span class="item"><em>진척률 : </em>{{ ratioPage }}%, </span>
    </div>
    <ul class="ia-list ia-list-fo">
      <li class="list-header">
        <div class="col-no">
          번호
        </div>
        <!-- <div class="col-sort">Sort</div> -->
        <div class="col-depth1">
          depth1
        </div>
        <div class="col-depth2">
          depth2
        </div>
        <div class="col-depth3">
          depth3
        </div>
        <div class="col-depth4">
          depth4
        </div>
        <div class="col-depth5">
          depth5
        </div>
        <div class="col-depth6">
          depth6
        </div>
        <div class="col-type">
          종류
        </div>
        <div class="col-url">
          화면ID
        </div>
        <div class="col-date">
          시작일
        </div>
        <div class="col-date">
          완료일
        </div>
        <div class="col-date">
          수정일
        </div>
        <div class="col-status">
          상태
        </div>
        <div class="col-worker">
          담당자
        </div>
        <div class="col-memo">
          비고
        </div>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[item.status, { 'list-body': true, 'list-body-start': item.listStart }]"
      >
        <div class="col-no">
          {{ index + 1 }}
        </div>
        <!-- <div class="col-sort">{{ item.sort }}</div> -->
        <div class="col-depth1">
          {{ item.depth1 }}
        </div>
        <div class="col-depth2">
          {{ item.depth2 }}
        </div>
        <div class="col-depth3">
          {{ item.depth3 }}
        </div>
        <div class="col-depth4">
          {{ item.depth4 }}
        </div>
        <div class="col-depth5">
          {{ item.depth5 }}
        </div>
        <div class="col-depth6">
          {{ item.depth6 }}
        </div>
        <div class="col-type">
          <span
            v-if="item.type"
            class="icon-type"
          >{{ item.type }}</span>
        </div>
        <div
          v-if="item.status.includes('done')"
          class="col-url"
        >
          <!-- <a
            href="javascript:void(0)"
            @click.prevent="$router.push(item.url)"
          >{{ item.page }}</a> -->
          <a
            :href="'#'+item.url"
            target="_blank"
          >{{ item.page }}</a>
        </div>
        <div
          v-else
          class="col-url"
        >
          {{ item.page }}
        </div>
        <div class="col-date">
          {{ item.startDate }}
        </div>
        <div class="col-date">
          {{ item.endDate }}
        </div>
        <div class="col-date">
          {{ item.finalDate }}
        </div>
        <div :class="['col-status', item.status]">
          {{
            displayStatus(item.status)
          }}
        </div>
        <div class="col-worker">
          {{ item.worker }}
        </div>
        <div class="col-memo">
          <ul>
            <li
              v-for="(memo, i) in item.memos"
              :key="i"
            >
              {{ memo }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import listItems from "@/views/_guide/listItems";
export default {
  props: {
    items: {
      type: Array,
      default: () => ({})
    }
  },
  data () {
    return {
      // items: listItems,
      // items: [listItems[0].all],
    }
  },
  computed: {
    totalPageLength () {
      return this.items.length
    },
    realPageLength () {
      return this.totalPageLength - (this.deletePageLength + this.nativePageLength)
    },
    donePageLength () {
      return this.items.filter((item) => {
        return item.status.includes('done')
      }).length - this.doneDeletePageLength
    },
    doneDeletePageLength () {
      return this.items.filter((item) => {
        return item.status.includes('done delete')
      }).length
    },
    deletePageLength () {
      return this.items.filter((item) => {
        return item.status.includes('delete')
      }).length
    },
    nativePageLength () {
      return this.items.filter((item) => {
        return item.status.includes('native')
      }).length
    },
    ratioPage () {
      return parseInt((this.donePageLength / this.realPageLength) * 100, 10)
    },
    finePageLength () {
      return this.items.filter((item) => {
        return item.status.includes('done fine')
      }).length
    }
  },
  mounted () {
    // console.log(this.items[0].all)
  },
  methods: {
    displayStatus (status) {
      if (status.includes('delete')) {
        return '삭제'
      } else if (status.includes('ing')) {
        return '작업중'
      } else if (status.includes('fine')) {
        return '배포'
      } else if (status.includes('native')) {
        return '네이티브'
      } else if (status.includes('done')) {
        return '완료'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
</style>
