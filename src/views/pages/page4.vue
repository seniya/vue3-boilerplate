<template>
  <div>
    <p>은퇴준비 차트</p>
    <p>월 2,000,000원 씩 쓰려면 (현재 나이 40세)</p>
  </div>
  <Chart :options="chartOptions" />
  <div>
    <p>
      <button @click="onClickChangeData">차트 변경 테스트</button>
    </p>
    <p>
      <button @click="onClickAgeBtn(50)">50세</button>
    </p>
    <p>
      <button @click="onClickAgeBtn(60)">60세</button>
    </p>
    <p>
      <button @click="onClickAgeBtn(70)">70세</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Chart } from 'highcharts-vue'
import { defineComponent, reactive } from 'vue'
import { logger } from '@/utils/instance.logger'

export default defineComponent({
  name: 'page4',
  components: {
    Chart
  },
  setup () {
    // const hcInstance = Highcharts,
    const tempData = [0, 2, 4, 6, 5, 4, 3, 2, 1, 0]

    const standardAge = 40 // 기준 나이
    const lastAge = 80 // 끝 나이
    const baseGold = 0 // 초기 자본
    const useGold = 2000000 // 매월 사용 나이

    // 현재 나이는 40살이라고 가정.
    // 은퇴 이후 80세 까지 필요한 월 금액은 200만원으로 가정
    function actionChangeChartData (selectedAge: number): number[] {
      const stepGold = (2000000 * (lastAge - selectedAge)) / (selectedAge - standardAge)
      logger.debug('stepGold : ', stepGold.toFixed())
      const resultArr: number[] = []
      for (let i = standardAge; i <= lastAge; i++) {
        if (i === standardAge) {
          resultArr.push(baseGold)
        } else if (i > standardAge && i <= selectedAge) {
          const gold = resultArr[i - standardAge - 1] + stepGold
          resultArr.push(gold)
        } else if (i > selectedAge && i <= lastAge) {
          const gold = resultArr[i - standardAge - 1] - useGold
          resultArr.push(gold)
        }
        // logger.debug('i : ', i, resultArr[i - standardAge])
      }
      // logger.debug('resultArr : ', resultArr)
      return resultArr
    }

    function onClickAgeBtn (selectedAge: number): void {
      const chartData = actionChangeChartData(selectedAge)
      logger.debug('chartData : ', chartData)
      logger.debug('chartOptions : ', chartOptions)
      chartOptions.series[0].data = chartData
    }

    function onClickChangeData () {
      logger.debug('onClickChangeData 0 tempData : ', tempData)

      logger.debug('onClickChangeData 1 chartOptions.series.data : ', chartOptions.series[0].data)
      chartOptions.series[0].data = tempData
      logger.debug('onClickChangeData 2 chartOptions.series.data : ', chartOptions.series[0].data)
    }

    const chartOptions = reactive<any>({
      xAxis: {
        crosshair: true
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [
        {
          data: [0, 1, 2, 3, 4, 5, 6, 4, 2, 0],
          dashStyle: 'Dash'
        }
      ]
    })

    return {
      chartOptions,
      onClickAgeBtn,
      onClickChangeData
    }
  }
})
</script>
