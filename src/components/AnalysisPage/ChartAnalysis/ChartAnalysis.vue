<script>
import { Line } from 'vue-chartjs'
import Common from '../../../assets/common.js'
var common = new Common;

export default {
  extends: Line,
  props: ['nowDate'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  created() { this.fset_monthData() },
  data() {
      return {
          chartdata: {
                labels: [],
                datasets: [
                    {
                    label: '수입',
                    backgroundColor: 'transparent', //배경 투명
                    borderColor: 'green',
                    //tension: 1,
                    data: []
                    },
                    {
                    label: '지출',
                    backgroundColor: 'transparent', //배경 투명
                    borderColor: 'red',
                    data: []
                    }
                ]
            },
            options: {
                responsive: true,
                //maintainAspectRatio: false
            },
            monthArr: []
      }
  },
  methods: {
        fset_monthData() {
            var account = null;
            account = common.fget_AccountToStorage();

            this.monthArr = [];
            this.fget_month(this.nowDate)
            this.monthArr.reverse();
            
            var income = account.income;
            var expend = account.expend;

            var incomeMonthPrice = [0,0,0,0,0,0,0,0,0,0,0,0]
            var expendMonthPrice = [0,0,0,0,0,0,0,0,0,0,0,0]

            for(var i = 0; i < income.length; i++) {
                var incomeDate = income[i].date.substr(0,7);
                switch (incomeDate) {
                    case this.monthArr[0]: incomeMonthPrice[0] = incomeMonthPrice[0] + parseInt(income[i].price); break;
                    case this.monthArr[1]: incomeMonthPrice[1] = incomeMonthPrice[1] + parseInt(income[i].price); break;
                    case this.monthArr[2]: incomeMonthPrice[2] = incomeMonthPrice[2] + parseInt(income[i].price); break;
                    case this.monthArr[3]: incomeMonthPrice[3] = incomeMonthPrice[3] + parseInt(income[i].price); break;
                    case this.monthArr[4]: incomeMonthPrice[4] = incomeMonthPrice[4] + parseInt(income[i].price); break;
                    case this.monthArr[5]: incomeMonthPrice[5] = incomeMonthPrice[5] + parseInt(income[i].price); break;
                    case this.monthArr[6]: incomeMonthPrice[6] = incomeMonthPrice[6] + parseInt(income[i].price); break;
                    case this.monthArr[7]: incomeMonthPrice[7] = incomeMonthPrice[7] + parseInt(income[i].price); break;
                    case this.monthArr[8]: incomeMonthPrice[8] = incomeMonthPrice[8] + parseInt(income[i].price); break;
                    case this.monthArr[9]: incomeMonthPrice[9] = incomeMonthPrice[9] + parseInt(income[i].price); break;
                    case this.monthArr[10]: incomeMonthPrice[10] = incomeMonthPrice[10] + parseInt(income[i].price); break;
                    case this.monthArr[11]: incomeMonthPrice[11] = incomeMonthPrice[11] + parseInt(income[i].price); break;
                }
            }
            for(var j = 0; j < expend.length; j++) {
                var expendDate = expend[j].date.substr(0,7);
                switch (expendDate) {
                    case this.monthArr[0]: expendMonthPrice[0] = expendMonthPrice[0] + parseInt(expend[j].price); break;
                    case this.monthArr[1]: expendMonthPrice[1] = expendMonthPrice[1] + parseInt(expend[j].price); break;
                    case this.monthArr[2]: expendMonthPrice[2] = expendMonthPrice[2] + parseInt(expend[j].price); break;
                    case this.monthArr[3]: expendMonthPrice[3] = expendMonthPrice[3] + parseInt(expend[j].price); break;
                    case this.monthArr[4]: expendMonthPrice[4] = expendMonthPrice[4] + parseInt(expend[j].price); break;
                    case this.monthArr[5]: expendMonthPrice[5] = expendMonthPrice[5] + parseInt(expend[j].price); break;
                    case this.monthArr[6]: expendMonthPrice[6] = expendMonthPrice[6] + parseInt(expend[j].price); break;
                    case this.monthArr[7]: expendMonthPrice[7] = expendMonthPrice[7] + parseInt(expend[j].price); break;
                    case this.monthArr[8]: expendMonthPrice[8] = expendMonthPrice[8] + parseInt(expend[j].price); break;
                    case this.monthArr[9]: expendMonthPrice[9] = expendMonthPrice[9] + parseInt(expend[j].price); break;
                    case this.monthArr[10]: expendMonthPrice[10] = expendMonthPrice[10] + parseInt(expend[j].price); break;
                    case this.monthArr[11]: expendMonthPrice[11] = expendMonthPrice[11] + parseInt(expend[j].price); break;
                }
            }

            this.chartdata.labels = this.monthArr;
            this.chartdata.datasets[0].data = incomeMonthPrice;
            this.chartdata.datasets[1].data = expendMonthPrice;
        },
        fget_month(date) {
            if(this.monthArr.length >= 12) return;
            var dateYear = date.split('-')[0];
            var dateMonth = parseInt(date.split('-')[1]) - 2;
            
            if(this.monthArr.length == 0) {
                this.monthArr.push(common.fget_DateFormat(new Date(dateYear, dateMonth + 1, 1), 'month'));
            } 

            var newDate = common.fget_DateFormat(new Date(dateYear,dateMonth,1), 'month');
            this.monthArr.push(newDate);
            this.fget_month(newDate);
        }
  }
}
</script>

<style>

</style>