<script>
import { Bar } from 'vue-chartjs'
import Common from '../../../assets/common.js'
var common = new Common;

export default {
    extends: Bar,
    props: {nowDate:String},
    mounted () {
        this.renderChart(this.chartdata, this.options)
    },
    created() {
        this.fget_chartData();
    },
    data() {
        return {
            chartdata: {
                labels: [],
                datasets: [
                    {
                    label: '전 달',
                    backgroundColor: 'green',
                    borderColor: 'green',
                    //tension: 1,
                    data: []
                    },
                    {
                    label: '이번 달',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    data: []
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
            var account = null;
            account = common.fget_AccountToStorage();

            var incomeCaterory = Object.keys(common.incomeCategory);

            var incomeNowTotal = [];
            var incomePreTotal = [];

            for(var index1 = 0; index1 < incomeCaterory.length; index1++) {
                incomeNowTotal.push(0);
                incomePreTotal.push(0);
            }

            var income = account.income;

            var dateArr = this.nowDate.split('-')
            var preMonth = common.fget_DateFormat(new Date(dateArr[0], dateArr[1]-2),'month');

            for(var i = 0; i < income.length; i++) {
                for(var cate = 0; cate < incomeCaterory.length; cate++) {
                    if(income[i].date.substr(0,7) == this.nowDate && income[i].category == incomeCaterory[cate]){
                        incomeNowTotal[cate] = incomeNowTotal[cate] + parseInt(income[i].price);
                    }
                    if(income[i].date.substr(0,7) == preMonth && income[i].category == incomeCaterory[cate]){
                        incomePreTotal[cate] = incomePreTotal[cate] + parseInt(income[i].price);
                    }
                }
            }

            this.chartdata.labels = incomeCaterory;
            this.chartdata.datasets[0].data = incomePreTotal;
            this.chartdata.datasets[1].data = incomeNowTotal;
        }
    }
}
</script>

<style>

</style>
