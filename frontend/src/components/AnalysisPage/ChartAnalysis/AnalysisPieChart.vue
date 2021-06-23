<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<template>
    <canvas class="AnalysisPieChart"></canvas>
</template>

<script>
import Common from '../../../assets/common.js'
var common = new Common;

export default {
    props: ['nowDate'],
    data(){
        return{
            labels: [],
            nowMonData: [0],
        }
    },
    mounted() {
        this.fget_chartData();
        this.makeChart();
    },
    methods: {
        makeChart(){
            console.log(this.nowMonData)
            let container = document.querySelector('.AnalysisPieChart');
            let chart = new Chart(container, {
                type: 'pie',
                data: {
                    labels: this.labels,
                    datasets: [
                        {
                        label: '카테고리 분석',
                         backgroundColor: ['#118ed7','#e31010','#e3df10','#9500FF','#10b486','#e09010'], //배경 투명
                        // borderColor: '#696bff',
                        data: this.nowMonData
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                            boxWidth: 10,
                            //boxHeight: 0.5
                        }
                        },
                    }
                },
            });
            return chart;
        },
        fget_chartData() {
            var account = null;
            account = common.fget_AccountToStorage();

            var expendCategory = Object.keys(common.expendCategory);
            var expendNowTotal = [];

            for(var index2 = 0; index2 < expendCategory.length; index2++) {
                expendNowTotal.push(0);
            }

            var expend = account.expend;

            for(var j = 0; j < expend.length; j++) {
                for(var cate1 = 0; cate1 < expendCategory.length; cate1++) {
                    if(expend[j].date.substr(0,7) == this.nowDate && expend[j].category == expendCategory[cate1]){
                        expendNowTotal[cate1] = expendNowTotal[cate1] + parseInt(expend[j].price);
                    }
                }
            }
            this.labels = expendCategory;
            this.nowMonData = expendNowTotal;
        }
    }
}
</script>

<style>

</style>