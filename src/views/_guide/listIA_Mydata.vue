<template>
  <div class="guide-wrap guide-ia">
    <!-- header -->
    <header class="guide-header">
      <div class="brand">
        <h1 class="logo">
          MYDATA
          <!-- <small style="font-size: 1.2rem">2021.02.23 updated</small> -->
        </h1>
      </div>
      <div class="guide-header-nav">
        <button
          class="btn-guide"
          @click="$router.push('/')"
        >
          PLAY
        </button>
        <button
          class="btn-guide"
          style="background-color: purple"
          @click="$router.push('/convention/rule-intro')"
        >
          GUIDE
        </button>
      </div>
    </header>
    <!-- header //-->
    <!-- login -->
    <div v-if="loginFlag === 'N'">
      <div class="form-group">
        <input
          v-model="loginId"
          type="text"
          class="form-control"
          placeholder="ID"
        >
        <input
          v-model="loginPw"
          type="password"
          class="form-control"
          placeholder="PW"
        >
        <div class="btn-area">
          <button
            type="button"
            class="btn btn-primary"
            @click="loginB"
          >
            login
          </button>
        </div>
      </div>
    </div>
    <!-- login // -->
    <div
      v-if="loginFlag === 'Y'"
      class="guide-container"
    >
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
      <TabWrapper
        v-model="activeTab"
      >
        <TabList
          label="IA"
          :class="{'tab-scroll':scrollPosition > 100}"
        >
          <!-- Mydata -->
          <TabActivator tab="today">
            투데이
          </TabActivator>
          <TabActivator tab="status">
            자산현황
          </TabActivator>
          <TabActivator tab="management">
            지출관리
          </TabActivator>
          <TabActivator tab="card">
            카드
          </TabActivator>
          <TabActivator tab="loan">
            대출
          </TabActivator>
          <TabActivator tab="insurance">
            보험
          </TabActivator>
          <TabActivator tab="invest">
            투자
          </TabActivator>
          <TabActivator tab="etc">
            기타
          </TabActivator>
          <TabActivator tab="timeline">
            타임라인(자산)
          </TabActivator>
          <!-- <TabActivator tab="mydataCMS">
            자산 CMS
          </TabActivator> -->
        </TabList>
        <!-- Mydata -->
        <TabPanel tab="today">
          <ListTable :items="mydata[0].today" />
        </TabPanel>
        <TabPanel tab="status">
          <ListTable :items="mydata[0].status" />
        </TabPanel>
        <TabPanel tab="management">
          <ListTable :items="mydata[0].management" />
        </TabPanel>
        <TabPanel tab="card">
          <ListTable :items="mydata[0].card" />
        </TabPanel>
        <TabPanel tab="loan">
          <ListTable :items="mydata[0].loan" />
        </TabPanel>
        <TabPanel tab="insurance">
          <ListTable :items="mydata[0].insurance" />
        </TabPanel>
        <TabPanel tab="invest">
          <ListTable :items="mydata[0].invest" />
        </TabPanel>
        <TabPanel tab="etc">
          <ListTable :items="mydata[0].etc" />
        </TabPanel>
        <TabPanel tab="timeline">
          <ListTable :items="mydata[0].timeline" />
        </TabPanel>
        <!-- <TabPanel tab="mydataCMS">
          <ListTableCMS :items="mydataCMS[0].cms" />
        </TabPanel> -->
      </TabWrapper>
    </div>
  </div>
</template>

<script>
// import listItems from '@/views/_guide/listItems'
// Mydata
import listItemsMydata from '@/views/_guide/listItemsMydata' // 자산
// import listItemsAgreeMydata from '@/views/_guide/listItemsAgreeMydata' // 약관 현황판(자산)
import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'
import ListTable from '@/views/_guide/listTableMydata.vue'
// import ListTableAgree from '@/views/_guide/listTableAgree.vue'
// import ListTableCMS from '@/views/_guide/listTableCMS.vue'
export default {
  components: {
    TabActivator,
    TabList,
    TabPanel,
    TabWrapper,
    ListTable
    // ListTableAgree
    // ListTableCMS
  },
  data () {
    return {
      // items: listItems,
      // Mydata
      mydata: listItemsMydata,
      // mydataCMS: listItemsAgreeMydata,
      activeTab: 'today',
      scrollPosition: null,
      loginId: '',
      loginPw: '',
      loginFlag: 'N'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
    if (localStorage.loginFlag) {
      this.loginFlag = localStorage.loginFlag
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    },
    loginB () {
      if (this.loginId === 'shcard' && this.loginPw === 'payfan') {
        this.loginFlag = 'Y'
        localStorage.loginFlag = 'Y'
      }
      // console.log(window.scrollY)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
</style>
