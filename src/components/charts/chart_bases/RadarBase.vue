<script>
import {Radar, mixins} from "vue-chartjs"

const {reactiveProp} = mixins

export default {
  name: "RadarBase",
  extends: Radar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>