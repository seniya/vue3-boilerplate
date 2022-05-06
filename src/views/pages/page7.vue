<template>
  <div class="tab_chart_container">
    <div class="pie_container">
      <Chart :options="chartOptions" ref="chart" class="chart"/>
      <Chart :options="chartOptions2" ref="chart2" class="chart"/>
    </div>
    <div class="chart_title">
      <div class="text">고객님</div>
      <div class="text">종목집중 나무꾼형</div>
    </div>
    <div class="btn-tab">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ tab: true, active: i === activeTab }"
        @click="onChangeTab(i)"
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

export default defineComponent({
  name: 'tabChart',
  components: {
    Chart
  },
  setup () {
    const chart = ref()
    const chart2 = ref()
    // 탭 index
    const activeTab = ref(0)

    const chartOptions = reactive({
      chart: {
        type: 'pie'
      },
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: 'CENTERED<br>TEXT',
        style: {
          fontSize: '16px'
        }
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false
          }
        },
        series: {
          point: {
            events: {
              select: (e) => {
                e.target.graphic.toFront()
              },
              click: (e) => {
                onChangeTab(e.point.index)
              }
            }
          },
          innerSize: '60%',
          slicedOffset: 0,
          states: {
            allowPointSelect: false,
            inactive: {
              enabled: false
            },
            select: {
              borderWidth: 5,
              borderColor: 'blue',
              zIndex: 10
            }
          }
        }
      },
      series: [
        {
          name: 'Portfolio',
          data: [62.74, 10.57, 7.23, 4.02, 1.92, 7.62]

        }
      ]
    })
    const chartOptions2 = reactive({
      chart: {
        type: 'pie'
      },
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: 'CENTERED<br>TEXT',
        style: {
          fontSize: '16px'
        }
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false
          }
        },
        series: {
          point: {
            events: {
              select: (e) => {
                e.target.graphic.toFront()
              },
              click: (e) => {
                onChangeTab(e.point.index)
              }
            }
          },
          innerSize: '60%',
          slicedOffset: 0,
          states: {
            allowPointSelect: false,
            inactive: {
              enabled: false
            },
            select: {
              borderWidth: 5,
              borderColor: 'blue',
              zIndex: 10
            }
          }
        }
      },
      series: [
        {
          name: 'Portfolio',
          data: [32.74, 25.57, 17.23, 9.02, 1.92, 7.62]
        }
      ]
    })

    onMounted(() => {
      // 처음 index 0 포커스
      chart.value.chart.series[0].data[0].select(true, true)
      chart2.value.chart.series[0].data[0].select(true, true)
      // data label init
      chart.value.chart.setTitle({ text: chartOptions.series[0].data[0] + '%' })
      chart2.value.chart.setTitle({ text: chartOptions2.series[0].data[0] + '%' })
    })
    // 탭 change이벤트
    function onChangeTab (index) {
      activeTab.value = index
      // dataLabel
      chart.value.chart.setTitle({ text: chartOptions.series[0].data[index] + '%' })
      chart2.value.chart.setTitle({ text: chartOptions2.series[0].data[index] + '%' })
      // chartBorder
      chart.value.chart.series[0].data.forEach((item, i) => {
        chart.value.chart.series[0].data[i].select(false, true)
        chart2.value.chart.series[0].data[i].select(false, true)
      })
      chart.value.chart.series[0].data[index].select(true, true)
      chart2.value.chart.series[0].data[index].select(true, true)
    }

    return {
      chartOptions,
      chartOptions2,
      chart,
      chart2,
      tabs,
      activeTab,
      onChangeTab
    }
  }
})
</script>
<style lang="scss">
.chart_title {
  width: 100%;
  display: flex;
  .text {
    text-align: center;
    width: 50%;
  }
}
.chart {
   height: 300px;
}
.pie_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}
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
