<template>
  <div class="guide-wrap guide-ia">
    <!-- header -->
    <header class="guide-header">
      <div class="brand">
        <h1 class="logo">
          PLAY
          <!-- <small style="font-size: 1.2rem">2021.02.23 updated</small> -->
        </h1>
      </div>
      <div class="guide-header-nav">
        <button
          class="btn-guide"
          style="background-color: purple"
          @click="$router.push('/mydata')"
        >
          MYDATA
        </button>
        <button
          class="btn-guide"
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
          <TabActivator tab="junior">
            주니어
          </TabActivator>
          <TabActivator tab="senior">
            시니어
          </TabActivator>
          <TabActivator tab="cardhome">
            카드홈
          </TabActivator>
          <TabActivator tab="integrate">
            가이드
          </TabActivator>
          <TabActivator tab="etc">
            기타
          </TabActivator>
          <TabActivator tab="prepay">
            통합페이
          </TabActivator>
          <!-- 약관 현황판
          <TabActivator tab="agree">
            약관 현황판
          </TabActivator>
          -->
          <!-- Mydata -->
          <!-- <TabActivator tab="mydata">
            자산
          </TabActivator> -->
          <!-- <TabActivator tab="mydataCMS">
            자산 CMS
          </TabActivator> -->
        </TabList>

        <!-- TabPanel -->
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
        <TabPanel tab="junior">
          <ListTable :items="junior[0].junior" />
        </TabPanel>
        <TabPanel tab="senior">
          <ListTable :items="senior[0].senior" />
        </TabPanel>
        <TabPanel tab="cardhome">
          <ListTable :items="cardhome[0].cardhome" />
        </TabPanel>
        <TabPanel tab="integrate">
          <ListTable :items="integrate[0].integrate" />
        </TabPanel>
        <TabPanel tab="etc">
          <ListTable :items="etc[0].etc" />
        </TabPanel>
        <TabPanel tab="prepay">
          <ListTable :items="prepay[0].prepay" />
        </TabPanel>
        <!-- 약관 현황판
        <TabPanel tab="agree">
          <ListTable :items="agree[0].agree" />
        </TabPanel>
        -->
        <!-- Mydata -->
        <!-- <TabPanel tab="mydata">
          <ListTable :items="mydata[0].mydata" />
        </TabPanel> -->
        <!-- <TabPanel tab="mydataCMS">
          <ListTableCMS :items="mydataCMS[0].cms" />
        </TabPanel> -->
      </TabWrapper>
    </div>
  </div>
</template>

<script>
// import listItems from '@/views/_guide/listItems'
// Payfan
import listItemsIntro from '@/views/_guide/listItemsIntro' // 앱 구동
import listItemsAllmenu from '@/views/_guide/listItemsAllmenu' // 전체메뉴
import listItemsMember from '@/views/_guide/listItemsMember' // 회원/인증
import listItemsMypage from '@/views/_guide/listItemsMypage' // 마이페이지
import listItemsTimeline from '@/views/_guide/listItemsTimeline' // 타임라인
import listItemsDiscover from '@/views/_guide/listItemsDiscover' // 디스커버
import listItemsWallet from '@/views/_guide/listItemsWallet' // 월렛
import listItemsJunior from '@/views/_guide/listItemsJunior' // 주니어
import listItemsSenior from '@/views/_guide/listItemsSenior' // 시니어
import listItemsCardhome from '@/views/_guide/listItemsCardhome' // 카드홈
import listItemsIntegrate from '@/views/_guide/listItemsIntegrate' // 통합가이드
import listItemsEtc from '@/views/_guide/listItemsEtc' // 기타
import listItemsPrepay from '@/views/_guide/listItemsPrepay' // 통합페이
// import listItemsAgree from '@/views/_guide/listItemsAgree' // 약관 현황판(페이판)
// Mydata
// import listItemsMydata from '@/views/_guide/listItemsMydata' // 자산
// import listItemsAgreeMydata from '@/views/_guide/listItemsAgreeMydata' // 약관 현황판(자산)
import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'
import ListTable from '@/views/_guide/listTable.vue'
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
      // payfan
      intro: listItemsIntro,
      all: listItemsAllmenu,
      mypage: listItemsMypage,
      member: listItemsMember,
      timeline: listItemsTimeline,
      discover: listItemsDiscover,
      wallet: listItemsWallet,
      junior: listItemsJunior,
      senior: listItemsSenior,
      cardhome: listItemsCardhome,
      integrate: listItemsIntegrate,
      etc: listItemsEtc,
      prepay: listItemsPrepay,
      // agree: listItemsAgree,
      // Mydata
      // mydata: listItemsMydata,
      // mydataCMS: listItemsAgreeMydata,
      activeTab: 'all',
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
