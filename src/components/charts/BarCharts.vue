<template>
  <div>
    <div v-for="chartData in barChartData" :key="chartData.name">
      <bar-chart-base v-if="chartData" :chartData="chartData" :options="options"/>
    </div>
  </div>
</template>

<script>
import BarChartBase from "@/components/charts/chart_bases/BarChartBase";

export default {
  name: "BarCharts",
  components: {BarChartBase},
  props: ["barChartData"],
  data: () => ({
    options: {
      legend: {
        labels: {
          fontColor: 'white'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            color: "rgba(255, 255, 255, 0.5)",
          },
        }],
        xAxes: [{
          gridLines: {
            color: "rgba(255, 255, 255, 0.5)",
          },
        }]
      }
    }
  })
}
</script>

<style scoped>

</style>