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
            var account = null;
            account = common.fget_AccountToStorage();
            console.log(account);

            var incomeCaterory = Object.keys(common.incomeCategory);
            var expendCategory = Object.keys(common.expendCategory);

            var incomeTotal = []
            var expendTotal = []
            for(var index1 = 0; index1 < incomeCaterory.length; index1++) {
                incomeTotal.push(0);
            }
            for(var index2 = 0; index2 < expendCategory.length; index2++) {
                expendTotal.push(0);
            }
            console.log(incomeTotal)
            console.log(incomeCaterory.length)
            // var income = account.income;
            //var expend = account.expend;

            // var dateArr = this.nowDate.split('-')
            // var preMonth = common.fget_DateFormat(new Date(dateArr[0], dateArr[1]-2),'month');
            // console.log(preMonth)
            // for(var i = 0; i < income.length; i++) {
            //     if(income[i].date.substr(0,7) == this.nowDate){
            //         switch (income[i].category) {
            //             case value: incomeTotal[0] = incomeTotal[0] + parseInt(income[i].price); break;
            //         }
            //     }
            // }
            // for(var j = 0; j < expend.length; j++) {

            // }

        }
    }
}
</script>

<style>

</style>
