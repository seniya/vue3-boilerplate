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
import Highcharts from 'highcharts'
import { Chart } from 'highcharts-vue'
import exportingInit from 'highcharts/modules/exporting'
import draggablePoints from 'highcharts/modules/draggable-points'
import { defineComponent, reactive, ref } from 'vue'
import { logger } from '@/utils/instance.logger'

exportingInit(Highcharts)
draggablePoints(Highcharts)

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
    const useGold = 2000000 // 매월 사용 금액

    // 현재 나이는 40살이라고 가정.
    // 은퇴 이후 80세 까지 필요한 월 금액은 200만원으로 가정
    function actionChangeChartData (selectedAge: number): number[] {
      chartOptions.xAxis.plotLines[0].value = ((lastAge - standardAge) - selectedAge) * -1
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
          // gold가 -시 0으로 함
          resultArr.push(gold < 0 ? 0 : gold)
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
      chartOptions.series[1].data = [{
        /**
         * 전체 범주 갯수: lastAge - standardAge
         * 선택된 범주: selectedAge - standardAge
         */
        x: selectedAge - standardAge,
        y: 0
      }]
    }

    function onClickChangeData () {
      logger.debug('onClickChangeData 0 tempData : ', tempData)

      logger.debug('onClickChangeData 1 chartOptions.series.data : ', chartOptions.series[0].data)
      chartOptions.series[0].data = tempData
      logger.debug('onClickChangeData 2 chartOptions.series.data : ', chartOptions.series[0].data)
    }
    const chartOptions = reactive<any>({
      xAxis: {
        // crosshair: true,
        plotLines: [{
          value: 0,
          // dashStyle: 'dash',
          width: 1,
          color: 'red',
          zIndex: 1
        }]
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        series: {
          categories: ['1'],
          marker: {
            enabled: false
          }
        }
      },
      series: [
        {
          enableMouseTracking: false,
          data: [0, 1, 2, 3, 4, 5, 6, 4, 2, 0],
          dashStyle: 'Dash'
        },
        {
          //
          zIndex: 5,
          // 시작 위치 설정
          data: [{
            x: 0,
            y: 0
          }],
          dragDrop: {
            /**
             * dragDrop 옵션 설정
             * draggableX: X축 드래그 활성화
             * draggableY: Y축 드래그 비활성화
             * dragMaxX: 드래그 될 범주 범위 지정 * 최대 범주에서 -1하여 최대 나이는 선택이 안되도록함
             * dragMinX: 1로 설정하여 기준 나이는 설정 안되도록
             * dragPrecisionX: 드래그 될떄 이동값 1씩 이동
             */
            draggableX: true,
            draggableY: false,
            dragMaxX: lastAge - standardAge - 1,
            dragMinX: 1,
            dragPrecisionX: 1
          },
          // cursor 변경
          cursor: 'move',
          // 포인트 사사이즈
          marker: {
            enabled: true,
            radius: 10
          },
          point: {
            events: {
              // drag event baseline 위치 이동
              drag: function (e: any) {
                e.target.series.xAxis.update({
                  plotLines: [{
                    color: 'red',
                    width: 2,
                    value: e.newPoint.x
                  }]
                })
              },
              // drop event시 차트 값 변경
              drop: function (e: any) {
                onClickAgeBtn(e.newPoint.x + standardAge)
              }
            }
          }
        }
      ]
    })
    //
    onClickAgeBtn(50)
    return {
      chartOptions,
      onClickAgeBtn,
      onClickChangeData
    }
  }
})
</script>
