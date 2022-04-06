<template>
  <div class="work-list">
    <div class="work-status">
      <span class="item"><em>총 페이지 : {{ realPageLength }}</em><em class="real-total-amount" />(<em
        class="total-amount"
      />{{
        totalPageLength
      }}),
      </span>
      <span class="item"><em>완료 : </em><em class="done-amount" />{{ donePageLength }},
      </span>
      <span class="item"><em>진척률 : </em><em class="ratio" />{{ ratioPageLength }}%</span>
    </div>
    <ul class="ia-list ia-list-fo">
      <li class="list-header">
        <span class="col-no">No.</span>
        <span class="col-sort">Sort</span>
        <span class="col-depth1">depth1</span>
        <span class="col-depth2">depth2</span>
        <span class="col-depth3">depth3</span>
        <span class="col-depth4">depth4</span>
        <span class="col-depth5">depth5</span>
        <span class="col-depth6">depth6</span>
        <span class="col-type">Type</span>
        <span class="col-url">URL</span>
        <span class="col-date">Start</span>
        <span class="col-date">End</span>
        <span class="col-status">Status</span>
        <span class="col-worker">PIC</span>
        <span class="col-memo">Note</span>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[item.status, { 'list-body': true, 'list-body-start': item.listStart }]"
      >
        <span class="col-no">{{ index + 1 }}</span>
        <span class="col-sort">{{ item.sort }}</span>
        <span class="col-depth1">{{ item.depth1 }}</span>
        <span class="col-depth2">{{ item.depth2 }}</span>
        <span class="col-depth3">{{ item.depth3 }}</span>
        <span class="col-depth4">{{ item.depth4 }}</span>
        <span class="col-depth5">{{ item.depth5 }}</span>
        <span class="col-depth6">{{ item.depth6 }}</span>
        <span class="col-type"><span
          v-if="item.type"
          class="icon-type"
        >{{ item.type }}</span></span>
        <span
          v-if="item.url"
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
        </span>
        <span
          v-else
          class="col-url"
        >{{ item.page }}</span>
        <span class="col-date">{{ item.startDate }}</span>
        <span class="col-date">{{ item.endDate }}</span>
        <span :class="['col-status', item.status]">{{
          displayStatus(item.status)
        }}</span>
        <span class="col-worker">{{ item.worker }}</span>
        <span class="col-memo">
          <span
            v-for="(memo, i) in item.memos"
            :key="i"
          >{{ memo }}</span>
        </span>
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
    donePageLength () {
      return this.items.filter((item) => {
        return item.status === 'done'
      }).length
    },
    ratioPageLength () {
      return parseInt((this.donePageLength / this.realPageLength) * 100, 10)
    },
    deletePageLength () {
      return this.items.filter((item) => {
        return item.status === 'delete'
      }).length
    },
    notDesignPageLength () {
      return this.items.filter((item) => {
        return item.status === 'not'
      }).length
    },
    realPageLength () {
      return this.totalPageLength - this.deletePageLength - this.notDesignPageLength
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
      } else if (status.includes('done')) {
        return '완료'
      } else if (status.includes('fine')) {
        return '배포'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
  //ia
  .work-status {
    position: sticky;
    top: 11.1rem;
    padding: .8rem 0 1rem;
    text-align: right;
    background-color: #fff;

    em {
      font-style: normal;
    }
  }

  .ia-list {
    margin-bottom: 3rem;
    border-left: 0;
    border-bottom: 1px solid #e8e8e8;
    li {
      display: inline-flex;
      flex-wrap: wrap;
      [class*=col] {

      }
      .col-no, .col-date, .col-worker {
        display: none;
      }

      .col-sort {
        order: -2;
        flex-basis: 100%;
      }
      [class*=col-depth] {
      }
      .col-depth1 {
      }

      .col-depth2 {
      }

      .col-depth3 {
      }

      .col-depth4 {
      }

      .col-depth5 {
      }

      .col-depth6 {
      }

      .col-label {
      }
      .col-type {
        order : -1;
        text-align: center;
      }
      .icon-type {
        display: inline-block;
        min-width: 2rem;
        height: 2rem;
        margin-right: .8rem;
        color: #fff;
        font-weight: bold;
        font-size: 1rem;
        line-height: 2rem;
        text-align: center;
        border-radius: .3rem;
        background-color: #001786;
      }

      .col-url {

        a {
          text-decoration: underline;
        }
      }

      .col-date {
      }

      .col-worker {
      }

      .col-status {
        margin-left: auto;
      }
      .col-memo {
        >span {display: block;}
      }
    }
    .list-header {
      position: sticky;
      top: 15rem;
      margin-bottom: 0;
      background-color: #000;

      [class*=col-] {
        color: #fff;
        text-align: center;
      }
      display: none;
    }

    .list-body {
      display: flex;
      border-top: 1px solid #e8e8e8;

      &.done {
        background-color: #f2f2f2;
        .col-sort {
          background-color: #fff;
        }
      }

      &.delete {
        border-color: #666;
        background-color: #777;

        [class*=col] {
          border-right: #777;
        }
      }
    }

    .list-body-start {
      border-top: 1px solid #000;
    }
    .row-delete {
      span {
        color: #ccc;
        text-decoration: line-through;
      }
    }
  }
  @media(min-width: 1200px) {
    .work-status {
      position: sticky;
      top: 11.1rem;
      padding: .8rem 0 1rem;
      text-align: right;
      background-color: #fff;

      em {
        font-style: normal;
      }
    }

    .ia-list {
      margin-bottom: 3rem;
      border-left: 0;
      border-bottom: 1px solid #e8e8e8;
      li {
        display: table;
        width: 100%;
        border-left: 1px solid #e8e8e8;

        [class*=col-] {
          display: table-cell;
          padding: .5rem .7rem;
          border-right: 1px solid #e8e8e8;
        }

        .col-no {
          width: 45px;
          text-align: center;
        }

        .col-sort {
          width: 8rem;
        }

        .col-depth1 {
          width: 7%;
        }

        .col-depth2 {
          width: 7%;
        }

        .col-depth3 {
          width: 7%;
        }

        .col-depth4 {
          width: 7%;
        }

        .col-depth5 {
          width: 7%;
        }

        .col-depth6 {
          width: 7%;
        }

        .col-label {
          width: 13%;
        }

        .col-type {
          width: 5rem;
          height: inherit;
          color: #333;
          background: none;
          .icon-type {
            margin: 0;
          }
        }

        .col-url {
          width: 120px;

          a {
            text-decoration: underline;
          }
        }

        .col-date {
          width: 75px;
          text-align: center;
        }

        .col-worker {
          width: 6rem;
          text-align: center;
        }

        .col-status {
          width: 80px;
          text-align: center;
        }
      }
      .list-header {
        position: sticky;
        top: 15rem;
        display: table;
        margin-bottom: 0;
        background-color: #000;

        [class*=col-] {
          color: #fff;
          text-align: center;
        }
      }

      .list-body {
        display: table;
        border-top: 1px solid #e8e8e8;

        &.done {
          .col-sort {background-color: #f2f2f2;}
        }

        &.delete {
          background-color: #777;
          [class*=col] {
            border-right: #777;
          }
          .col-sort {background-color: #777;}
        }
      }

      .list-body-start {
        border-top: 1px solid #000;
      }
      .row-delete {
        span {
          color: #ccc;
          text-decoration: line-through;
        }
      }
    }
  }
</style>
