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
                    backgroundColor: 'green', //배경 투명
                    borderColor: 'green',
                    //tension: 1,
                    data: []
                    },
                    {
                    label: '이번 달',
                    backgroundColor: 'red', //배경 투명
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

            var expendCategory = Object.keys(common.expendCategory);

            var expendNowTotal = [];
            var expendPreTotal = [];

            for(var index2 = 0; index2 < expendCategory.length; index2++) {
                expendNowTotal.push(0);
                expendPreTotal.push(0);
            }

            var expend = account.expend;

            var dateArr = this.nowDate.split('-')
            var preMonth = common.fget_DateFormat(new Date(dateArr[0], dateArr[1]-2),'month');

            for(var j = 0; j < expend.length; j++) {
                for(var cate1 = 0; cate1 < expendCategory.length; cate1++) {
                    if(expend[j].date.substr(0,7) == this.nowDate && expend[j].category == expendCategory[cate1]){
                        expendNowTotal[cate1] = expendNowTotal[cate1] + parseInt(expend[j].price);
                    }
                    if(expend[j].date.substr(0,7) == preMonth && expend[j].category == expendCategory[cate1]){
                        expendPreTotal[cate1] = expendPreTotal[cate1] + parseInt(expend[j].price);
                    }
                }
            }

            this.chartdata.labels = expendCategory;
            this.chartdata.datasets[0].data = expendPreTotal;
            this.chartdata.datasets[1].data = expendNowTotal;
        }
    }
}
</script>

<style>

</style>
