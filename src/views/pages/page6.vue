<template>
  <Chart class="chart" :options="chartOptions" ></Chart>
</template>

<script>

import { Chart } from 'highcharts-vue'
import { defineComponent, reactive, toRefs, ref } from 'vue'

export default defineComponent({
  components: {
    Chart
  },
  setup () {
    const moonLanding = new Date()
    const tM = moonLanding.getMonth() + 1

    let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    month = month.concat(month.splice(0, tM)).splice(6, 6)

    const assetData = ref([
      100000,
      200000,
      1000000,
      2000000,
      3000000,
      4000000
    ])

    const totalAssetData = ref([
      1000000,
      2000000,
      -1000000,
      2000000,
      -3000000,
      4000000
    ])

    const state = reactive({
      chartOptions: {
        chart: {
          type: 'column',
          events: {
            load: function () {
              const xx = (-1) * (this.yAxis[0].translate(0, false, false))

              this.xAxis[0].axisGroup.translate(0, xx)
              this.xAxis[0].labelGroup.translate(0, xx)
            },
            redraw: function () {
              const xx = (-1) * (this.yAxis[0].translate(0, false, false))

              this.xAxis[0].axisGroup.translate(0, xx)
              this.xAxis[0].labelGroup.translate(0, xx)
            }
          }
        },
        title: {
          text: '최근 6개월간',
          align: 'left'
        },
        series: [
          {
            name: '순자산',
            type: 'column',
            data: assetData.value
          },
          {
            name: '총자산',
            type: 'column',
            data: totalAssetData.value
          }
        ],
        legend: {
          align: 'right',
          verticalAlign: 'top',
          floating: true
        },
        xAxis: {
          categories: month,
          lineColor: 'black'
        },
        tooltip: {
          enabled: false
        },
        credits: {
          enabled: false
        }
      }
    })

    return {
      ...toRefs(state),
      assetData,
      totalAssetData

    }
  }
})
</script>
