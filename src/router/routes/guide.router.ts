
const container = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/guideContainer.vue')

// 규칙가이드
const ruleIntro = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/convention/ruleIntro.vue')
const ruleStandard = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/convention/ruleStandard.vue')
const ruleCode = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/convention/ruleCode.vue')
const ruleName = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/convention/ruleName.vue')
// 설계가이드
const planLayout = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/plan/planLayout.vue')
const planGeneral = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/plan/planGeneral.vue')
// accessibility
const waIndex = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/accessibility/waIndex.vue')
const waWai = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */' @/views/_guide/accessibility/waWai.vue')
const waGuide = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/accessibility/waGuide.vue')
// basic-components
const basicLibsButton = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/basic-libs/libsButton.vue')
const basicLibsText = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/basic-libs/libsButtonText.vue')
const basicLibsCheckbox = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/basic-libs/libsCheckbox.vue')
const basicLibsRadio = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/basic-libs/libsRadio.vue')
const basicLibsInput = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/basic-libs/libsInput.vue')
const basicLibsLoader = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/basic-libs/libsLoader.vue')
const basicLibsCard = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/basic-libs/libsCard.vue')
// uu-components
const uuLibsAccordion = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsAccordion.vue')
const uuLibsBubble = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsBubble.vue')
const uuLibsDropdown = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsDropdown.vue')
const uuLibsIcon = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsIcon.vue')
const uuLibsModal = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsModal.vue')
const uuLibsStepper = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsStepper.vue')
const uuLibsSwiper = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsSwiper.vue')
const uuLibsTab = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsTab.vue')
const uuLibsToast = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsToast.vue')
const uuLibsToggle = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsToggle.vue')
const uuLibsToggleText = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsToggleText.vue')
const uuLibsTooltip = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/uu-libs/libsTooltip.vue')
// ui-components
const uiLibsTerms = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsTerms.vue')
const uiLibsTermsRating = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsTermsRating.vue')
const uiLibsBanner = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsBanner.vue')
const uiLibsList = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsList.vue')
const uiLibsLineList = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsLineList.vue')
const uiLibsTableList = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsTableList.vue')
const uiLibsBoxList = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsBoxList.vue')
const uiLibsDivArea = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsDivArea.vue')
const uiLibsDatePicker = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsDatePicker.vue')
const uiLibsGraph = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/ui-libs/libsGraph.vue')
// 라이브러리
const libsSwiper = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/libs/libsSwiper.vue')
const libsTab = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/libs/libsTab.vue')
const libsVueA11y = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/libs/libsVueA11y.vue')
const libsInfiniteScroll = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/libs/libsInfiniteScroll.vue')
const libsScrollPicker = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/libs/libsScrollPicker.vue')
const libsHighcharts = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "guide" */ '@/views/_guide/libs/libsHighcharts.vue')

export default {
  path: '/convention',
  redirect: '/convention/rule-intro',
  component: container,
  children: [
    { component: ruleIntro, path: 'rule-intro' },
    { component: ruleStandard, path: 'rule-standard' },
    { component: ruleCode, path: 'rule-code' },
    { component: ruleName, path: 'rule-name' },
    // 설계가이드
    { path: '/plan', redirect: '/plan/plan-layout' },
    { component: planLayout, path: '/plan/plan-layout' },
    { component: planGeneral, path: '/plan/plan-general' },
    // accessibility
    { path: '/accessibility', redirect: '/accessibility/wa-index' },
    { component: waIndex, path: '/accessibility/wa-index' },
    { component: waWai, path: '/accessibility/wa-wai' },
    { component: waGuide, path: '/accessibility/wa-guide' },
    // basic-components
    { path: '/basic-libs', redirect: '/basic-libs/libsButton' },
    { component: basicLibsButton, path: '/basic-libs/libsButton' },
    { component: basicLibsText, path: '/basic-libs/libsButtonText' },
    { component: basicLibsCheckbox, path: '/basic-libs/libsCheckbox' },
    { component: basicLibsRadio, path: '/basic-libs/libsRadio' },
    { component: basicLibsInput, path: '/basic-libs/libsInput' },
    { component: basicLibsLoader, path: '/basic-libs/libsLoader' },
    { component: basicLibsCard, path: '/basic-libs/libsCard' },
    // uu-components
    { path: '/uu-libs', redirect: '/uu-libs/uuLibsAccordion' },
    { component: uuLibsAccordion, path: '/uu-libs/uuLibsAccordion' },
    { component: uuLibsBubble, path: '/uu-libs/uuLibsBubble' },
    { component: uuLibsDropdown, path: '/uu-libs/uuLibsDropdown' },
    { component: uuLibsIcon, path: '/uu-libs/uuLibsIcon' },
    { component: uuLibsModal, path: '/uu-libs/uuLibsModal' },
    { component: uuLibsStepper, path: '/uu-libs/uuLibsStepper' },
    { component: uuLibsSwiper, path: '/uu-libs/uuLibsSwiper' },
    { component: uuLibsTab, path: '/uu-libs/uuLibsTab' },
    { component: uuLibsToast, path: '/uu-libs/uuLibsToast' },
    { component: uuLibsToggle, path: '/uu-libs/uuLibsToggle' },
    { component: uuLibsToggleText, path: '/uu-libs/uuLibsToggleText' },
    { component: uuLibsTooltip, path: '/uu-libs/uuLibsTooltip' },
    // ui-components
    { path: '/ui-libs', redirect: '/ui-libs/linelist' },
    { component: uiLibsBanner, path: '/ui-libs/banner' },
    { component: uiLibsDivArea, path: '/ui-libs/divarea' },
    { component: uiLibsList, path: '/ui-libs/list' },
    { component: uiLibsLineList, path: '/ui-libs/linelist' },
    { component: uiLibsTableList, path: '/ui-libs/tablelist' },
    { component: uiLibsBoxList, path: '/ui-libs/boxlist' },
    { component: uiLibsTerms, path: '/ui-libs/terms' },
    { component: uiLibsTermsRating, path: '/ui-libs/termsRating' },
    { component: uiLibsDatePicker, path: '/ui-libs/datepicker' },
    { component: uiLibsGraph, path: '/ui-libs/graph' },
    // 라이브러리
    { path: '/libs', redirect: '/libs/swiper' },
    { component: libsSwiper, path: '/libs/swiper' },
    { component: libsTab, path: '/libs/tab' },
    { component: libsVueA11y, path: '/libs/vuea11y' },
    { component: libsInfiniteScroll, path: '/libs/infinitescroll' },
    { component: libsScrollPicker, path: '/libs/scrollpicker' },
    { component: libsHighcharts, path: '/libs/highcharts' }
  ]
}
