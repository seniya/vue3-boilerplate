<template>
  <div class="tab_chart_container">
    <Chart :options="chartOptions" ref="chart" />
    <div class="btn-tab">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ tab: true, active: i === activeTab }"
        @click="onClickTab(i)"
      >
        {{ tab }}
      </div>
      <div class="contents">
        <div v-if="activeTab === 0">
          나무꾼타입 ~~~~ 위치<br />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div v-if="activeTab === 1">
          000000타입 ~~~~ 위치<br />
          <ul>
            <li>1</li>
          </ul>
        </div>
        <div v-if="activeTab === 2">
          AAA타입 ~~~~ 위치<br />
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
        <div v-if="activeTab === 3">
          AAA타입 ~~~~ 위치<br />
          <ul>
            <li>aaaaa</li>
            <li>aaaaa</li>
            <li>aaaaa</li>
            <li>aaaaa</li>
          </ul>
        </div>
        <div v-if="activeTab === 4">
          AAA타입 ~~~~ 위치<br />
          <ul>
            <li>CCCCCC</li>
            <li>CCCCCC</li>
            <li>CCCCCC</li>
            <li>CCCCCC</li>
          </ul>
        </div>
        <div v-if="activeTab === 5">
          BBBB타입 ~~~~ 위치<br />
          <ul>
            <li>bbbbbbb</li>
            <li>bbbbbbb</li>
            <li>bbbbbbb</li>
            <li>bbbbbbb</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Chart } from 'highcharts-vue'
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'

const tabs = ['국내주식', '해외주식', '채권', '연금', '펀드', '기타']
// 차트 데이터
const data1 = [54.4, 135.6, 148.5, 216.4, 194.1, 95.6]
const data2 = [92.3, 105.0, 104.3, 91.2, 83.5, 106.6]

export default defineComponent({
  name: 'tabChart',
  components: {
    Chart
  },
  setup () {
    const chart = ref()
    // 탭 index
    const activeTab = ref(0)

    const chartOptions = reactive({
      colors: ['#058DC7', '#50B432'],
      chart: {
        type: 'column',
        borderWidth: 0,
        plotBorderWidth: 0,
        margin: 0,
        padding: 0,
        spacing: [0, 0, 0, 0]
      },
      title: {
        text: 'Monthly Average Rainfall'
      },
      legend: {
        align: 'center',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 0
      },
      xAxis: {
        visible: false

      },
      yAxis: {
        visible: false
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0
        },
        series: {
          enableMouseTracking: false,
          states: {
            allowPointSelect: true,
            select: {
              borderWidth: 3,
              borderColor: 'hotpink'
            }
          }
        }
      },
      series: [
        {
          name: 'Tokyo',
          data: data1,
          enableMouseTracking: false,
          states: {
            select: {
              color: '#058DC7'
            }
          }
        },
        {
          name: 'New York',
          data: data2,
          states: {
            select: {
              color: '#50B432'
            }
          }
        }
      ]
    })

    onMounted(() => {
      // 처음 index 0 포커스
      chart.value.chart.series[0].data[0].select(true, true)
      chart.value.chart.series[1].data[0].select(true, true)
    })
    // 탭 change이벤트
    function onClickTab (index) {
      activeTab.value = index
      chart.value.chart.series[0].data.forEach((item, i) => {
        chart.value.chart.series[0].data[i].select(false, true)
        chart.value.chart.series[1].data[i].select(false, true)
      })
      chart.value.chart.series[0].data[index].select(true, true)
      chart.value.chart.series[1].data[index].select(true, true)
    }

    return {
      chartOptions,
      chart,
      tabs,
      activeTab,
      onClickTab
    }
  }
})
</script>
<style lang="scss">
.btn-tab {
  border: 2px solid #eee;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  .tab {
    text-align: center;
    background: inherit;
    border: 2px solid #eee;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  .active {
    border: 3px solid rgb(68, 68, 68);
  }
  .contents {
    min-height: 200px;
    padding: 20px;
    grid-column: 1 / 7;
    grid-row: 2 / 3;
  }
}
</style>
