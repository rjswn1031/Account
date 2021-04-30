<script>
import { Line } from 'vue-chartjs'
// import Common from '../../../assets/common.js'
// var common = new Common;

export default {
    extends: Line,
    props: {nowDate:String},
    mounted () {
        this.renderChart(this.chartdata, this.options)
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
