<template>
  <div>
    하이차트 주석처리 되어있음. 페이지 확인바람.
    <!-- <highcharts
      :options="chartOptions"
    /> -->
  </div>
</template>

<script>
// import { Chart } from 'highcharts-vue'
// import Highcharts from 'highcharts'
// import hcMore from 'highcharts/highcharts-more'
// hcMore(Highcharts)
// export default {
//   components: {
//     highcharts: Chart
//   },
//   data () {
//     return {
//       chartOptions: {
//         chart: {
//           width: '242',
//           height: '130',
//           className: 'uu-chart'
//         },
//         title: {
//           text: '<div class="chart-title"><span class="sub">상위10%</span><span class="text">969점</span></div>',
//           useHTML: true,
//           align: 'center',
//           verticalAlign: 'middle',
//           y: 52
//         },
//         plotOptions: {
//           pie: {
//             dataLabels: {
//               enabled: true,
//               distance: -50
//             },
//             startAngle: -90,
//             endAngle: 90,
//             center: ['50%', '150%'],
//             size: '242',
//             enableMouseTracking: false
//           }
//         },
//         tooltip: {
//           enabled: false
//         },
//         legend: {
//           enabled: false
//         },
//         credits: {
//           enabled: false
//         },
//         series: [
//           {
//             type: 'pie',
//             name: 'Semi Circle Chart',
//             innerSize: '68%',
//             data: [{
//               y: 80,
//               name: '',
//               color: {
//                 linearGradient: { x1: 1, x2: 0, y1: 0, y2: 0 },
//                 stops: [
//                   [0, '#0062ed'], // start
//                   [1, '#0a52cb'] // end
//                 ]
//               }
//             }, {
//               y: 20,
//               name: '',
//               color: '#dbdde9'
//             }]
//           }
//         ]
//       }
//     }
//   }
// }
</script>

<style lang="scss" scope>
// .uu-chart {
//   margin: 0 auto;
//   .chart-title {
//     font-weight: $fontMedium;
//     text-align: center;
//     .sub {
//       display: block;
//       color: $gray080;
//       @include fontHeight(1.4);
//     }
//     .text {
//       display: block;
//       color: $gray100;
//       @include fontHeight(2.4);
//     }
//   }
// }
</style>
