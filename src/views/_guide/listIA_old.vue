<template>
  <div class="guide-wrap guide-ia">
    <!-- header -->
    <header class="guide-header">
      <div class="brand">
        <h1 class="logo">
          shpay <small style="font-size: 1.2rem">2021.02.23 updated</small>
        </h1>
      </div>
      <div class="guide-header-nav">
        <button
          class="btn-guide"
          @click="$router.push('/convention/rule-intro')"
        >
          GUIDE
        </button>
      </div>
    </header>
    <!-- header //-->
    <div class="guide-container">
      <div class="guide-note">
        <h2>작성 가이드</h2>
        <ul>
          <li>
            * 유형 표시방법 - [P] Page / [FP] Full Popup / [BP] Bottom Popup / [T] Tab / [S] Section / [AP] Alert Popup
          </li>
          <li>
            * 진척관리 - 최초 완료 표시 기준으로 날짜를 표시하고, 비고란에 전달사항이 있는 경우 표시해주세요.
          </li>
          <li>
            * 결함관리 - 신규/수정/삭제 이슈가 있는 경우 소스 코드와 비고란에 동일한 주석 문구를 표시해주세요. (ex. 주석 표기 YYMMDD Worker 작업내용 수정)
          </li>
          <!-- <li>
            * 최종완료 - 사이트 오픈후에 전체현황을 엑셀로 백업하여 기록을
            남기고 비고란은 삭제한다.
          </li> -->
        </ul>
      </div>
      <TabWrapper v-model="activeTab">
        <TabList
          label="IA"
          :class="{'tab-scroll':scrollPosition > 100}"
        >
          <TabActivator tab="previous">
            선행개발
          </TabActivator>
          <TabActivator tab="intro">
            앱 구동
          </TabActivator>
          <TabActivator tab="all">
            전체메뉴
          </TabActivator>
          <TabActivator tab="member">
            회원/인증
          </TabActivator>
          <TabActivator tab="mypage">
            마이페이지
          </TabActivator>
          <TabActivator tab="timeline">
            타임라인
          </TabActivator>
          <TabActivator tab="discover">
            디스커버
          </TabActivator>
          <TabActivator tab="wallet">
            월렛
          </TabActivator>
          <TabActivator tab="mydata">
            자산
          </TabActivator>
          <TabActivator tab="junior">
            주니어
          </TabActivator>
          <TabActivator tab="senior">
            시니어
          </TabActivator>
          <TabActivator tab="guide">
            가이드
          </TabActivator>
        </TabList>

        <!-- TabPanel -->
        <TabPanel tab="previous">
          <ListTable :items="previous[0].previous" />
        </TabPanel>
        <TabPanel tab="intro">
          <ListTable :items="intro[0].intro" />
        </TabPanel>
        <TabPanel tab="all">
          <ListTable :items="all[0].all" />
        </TabPanel>
        <TabPanel tab="member">
          <ListTable :items="member[0].member" />
        </TabPanel>
        <TabPanel tab="mypage">
          <ListTable :items="mypage[0].mypage" />
        </TabPanel>
        <TabPanel tab="timeline">
          <ListTable :items="timeline[0].timeline" />
        </TabPanel>
        <TabPanel tab="discover">
          <ListTable :items="discover[0].discover" />
        </TabPanel>
        <TabPanel tab="wallet">
          <ListTable :items="wallet[0].wallet" />
        </TabPanel>
        <TabPanel tab="mydata">
          <ListTable :items="mydata[0].mydata" />
        </TabPanel>
        <TabPanel tab="junior">
          <ListTable :items="junior[0].junior" />
        </TabPanel>
        <TabPanel tab="senior">
          <ListTable :items="senior[0].senior" />
        </TabPanel>
        <TabPanel tab="guide">
          <ListTable :items="guide[0].guide" />
        </TabPanel>
      </TabWrapper>
    </div>
  </div>
</template>

<script>
// import listItems from '@/views/_guide/listItems'
import listItemsPrevious from '@/views/_guide/listItemsPrevious' // 선행개발
import listItemsMydata from '@/views/_guide/listItemsMydata' // 자산
import listItemsIntro from '@/views/_guide/listItemsIntro' // 앱 구동
import listItemsAll from '@/views/_guide/listItemsAll' // 전체메뉴
import listItemsMember from '@/views/_guide/listItemsMember' // 회원/인증
import listItemsMypage from '@/views/_guide/listItemsMypage' // 마이페이지
import listItemsTimeline from '@/views/_guide/listItemsTimeline' // 타임라인
import listItemsDiscover from '@/views/_guide/listItemsDiscover' // 디스커버
import listItemsWallet from '@/views/_guide/listItemsWallet' // 월렛
import listItemsJunior from '@/views/_guide/listItemsJunior' // 주니어
import listItemsSenior from '@/views/_guide/listItemsSenior' // 시니어
import listItemsGuide from '@/views/_guide/listItemsGuide' // 가이드
import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'
import ListTable from '@/views/_guide/listTable_old.vue'
export default {
  components: {
    TabActivator,
    TabList,
    TabPanel,
    TabWrapper,
    ListTable
  },
  data () {
    return {
      // items: listItems,
      previous: listItemsPrevious,
      mydata: listItemsMydata,
      intro: listItemsIntro,
      all: listItemsAll,
      member: listItemsMember,
      mypage: listItemsMypage,
      timeline: listItemsTimeline,
      discover: listItemsDiscover,
      wallet: listItemsWallet,
      junior: listItemsJunior,
      senior: listItemsSenior,
      guide: listItemsGuide,
      // activeTab: 'previous',
      // activeTab: 'mypage',
      // activeTab: 'timeline',
      activeTab: 'mydata',
      scrollPosition: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
  //tab
  .ak-vt__list {
    position: sticky;
    top: 6rem;
    padding: 1rem 0;
    background-color: #fff;
    &.tab-scroll {
      white-space: nowrap;
      overflow-x: auto;
    }
    @media(min-width: 1200px) {
      display: flex;
      &.tab-scroll {
        white-space: inherit;
        overflow: auto;
      }
    }
  }

  .ak-vt__activator {
    flex: 1;
    margin: 0 .5rem .8rem 0;
    padding: .5rem 1.2rem;
    color: #fff;
    border-radius: .3rem;
    background-color: #a1a1a1;
    @media(min-width: 1200px) {
      +.ak-vt__activator {
        margin-left: 1rem;
      }
    }
    &[aria-selected='true'] {
      background-color: $blue100;
    }
  }

  .guide-ia {
    .guide-container {
      padding: 8rem 2.4rem 2.4rem;
    }
  }
  .guide-note {
    display: none;
  }
  @media(min-width: 1200px) {
    .guide-ia {
      .guide-container {
        padding: 8rem 3rem 3rem;
      }
    }
    .guide-note {
      display: block;
    }
  }
</style>
