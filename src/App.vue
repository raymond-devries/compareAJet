<template>
  <v-app>
    <v-app-bar app color="red darken-4" dark><h1>CompareAJet</h1></v-app-bar>
    <v-main class="main ma-5">
      <div class="content mb-16">
        <div class="d-md-flex">
          <jet-search search-title="Jet 1" class="flex-grow-1 mx-3 my-2" @jet-selected="jet1=$event"/>
          <jet-search search-title="Jet 2" class="flex-grow-1 mx-3 my-2" @jet-selected="jet2=$event"/>
        </div>
        <div class="d-md-flex justify-space-around">
          <div v-for="jet in chartData['other_data']" :key="jet['name']" class="text-center">
            <h1 class="ma-7">
              {{ jet["name"] }}: {{ jet["year"] }}
            </h1>
            <h3>{{ jet["country"] }}</h3>
          </div>
        </div>
        <div class="charts">
          <radar :radar-data="chartData['radar_chart2']"/>
          <radar :radar-data="chartData['radar_chart1']"/>
          <bar-charts :bar-chart-data="chartData['bar_charts']"/>
        </div>
        <p v-show="Object.keys(chartData).length" class="text-center my-16">All Units Metric. Speed in km/h, weight in
          kg, distance measurements in m, and areas in m^2</p>
      </div>

    </v-main>
  </v-app>
</template>

<script>
import JetSearch from "@/components/JetSearch";
import Radar from "@/components/charts/Radar";
import BarCharts from "@/components/charts/BarCharts";

export default {
  name: 'App',
  components: {BarCharts, JetSearch, Radar},

  data: () => ({
    jet1: "",
    jet2: "",
    chartData: {}
  }),
  computed: {
    allJets: function () {
      return [this.jet2, this.jet1]
    },
  },
  watch: {
    allJets: function () {
      this.$axios.get("/jet/charts/", {
        params: {
          jet_slugs: this.allJets
        }
      })
          .then(response => this.chartData = response.data)
    }
  }
};
</script>

<style>
.content {
  margin: 0 auto;
  max-width: 1300px;
}

.charts {
  max-width: 600px;
  margin: 0 auto;
}
</style>
