<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<template>
    <canvas class="analysisCategoryChart"></canvas>
</template>

<script>
import Common from '../../../assets/common.js'
var common = new Common;

export default {
    props: ['nowDate'],
    data(){
        return{
            labels: [],
            postMonData: [],
            nowMonData: [],
        }
    },
    mounted() {
        this.fget_chartData();
        this.makeChart();
    },
    methods: {
        makeChart(){
            let container = document.querySelector('.analysisCategoryChart');
            let chart = new Chart(container, {
                type: 'bar',
                data: {
                    labels: this.labels,
                    datasets: [{
                    label: '전 달',
                    backgroundColor: '#ff6969', //배경 투명
                    borderColor: '#ff6969',
                    //tension: 1,
                    data: this.postMonData
                    },
                    {
                    label: '이번 달',
                    backgroundColor: '#696bff', //배경 투명
                    borderColor: '#696bff',
                    data: this.nowMonData
                    }]
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

            this.labels = expendCategory;
            this.postMonData = expendPreTotal;
            this.nowMonData = expendNowTotal;
        }
    }
}
</script>

<style>

</style>