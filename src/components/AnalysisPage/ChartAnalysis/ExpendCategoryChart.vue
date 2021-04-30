<script>
import { Bar } from 'vue-chartjs'
//import Common from '../../../assets/common.js'
//var common = new Common;

export default {
    extends: Bar,
    props: {nowDate:String},
    mounted () {
        this.renderChart(this.chartdata, this.options)
    },
    data() {
        return {
            chartdata: {
                labels: [1,2,3],
                datasets: [
                    {
                    label: '수입',
                    backgroundColor: 'green', //배경 투명
                    borderColor: 'green',
                    //tension: 1,
                    data: [15,20,30]
                    },
                    {
                    label: '지출',
                    backgroundColor: 'red', //배경 투명
                    borderColor: 'red',
                    data: [20,30,40]
                    }
                ]
            },
            options: {
                responsive: true,
                //maintainAspectRatio: false
            },
        }
    },
    methods: {
        fget_chartData() {
            //var account = null;
            //account = common.fget_AccountToStorage();
            
        }
    }
}
</script>

<style>

</style>
