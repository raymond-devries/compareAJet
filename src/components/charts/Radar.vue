<template>
  <radar-base v-if="radarData" :chartData="radarData" :options="options"/>
</template>

<script>
import RadarBase from "@/components/charts/chart_bases/RadarBase";

export default {
  name: "Radar",
  components: {RadarBase},
  props: ["radarData"],
  data: () => ({
    options: {
      legend: {
        labels: {
          fontColor: 'white'
        }
      },
      scale: {
        ticks: {
          beginAtZero: true,
          backdropColor: "rgba(255, 255, 255, 0.9",
          fontColor: "black",
        },
        gridLines: {
          color: "rgba(255, 255, 255, 0.5)",
          circular: false
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0)"
        },
        pointLabels: {
          fontSize: 14,
          fontColor: "white"
        }
      },
    },
  }),
}
</script>

<style scoped>

</style>