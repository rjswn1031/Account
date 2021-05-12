<template>
  <div id="AnalysisCon">
      수입 : {{ incomeTotal }}
      <AnalysisInfoTable :dataArr="incomeArr"/>
      지출 : {{ expendTotal }}
      <AnalysisInfoTable :dataArr="expendArr"/>
      총금액 : {{ incomeTotal - expendTotal }}
  </div>
</template>

<script>
import AnalysisInfoTable from './AnalysisInfoTable.vue'
import Common from '../../../assets/common.js'
var common = new Common;

export default {
    props: {nowDate:String},
    components: {
        AnalysisInfoTable
    },
    data() {
        return {
            incomeTotal : 0,
            expendTotal : 0,
            incomeArr : [],
            expendArr : []
        }
    },
    created() {
        this.fget_accountData();
    },
    methods: {
        fget_accountData(){
            var account = null;
            account = common.fget_AccountToStorage();

            this.incomeTotal = 0,
            this.expendTotal = 0,
            this.incomeArr = [],
            this.expendArr = []

            var income = account.income;
            var expend = account.expend;

            if(income.length == 0 && expend.length == 0) return;

            for(var i = 0; i < income.length; i++) {
                if(income[i].date.indexOf(this.nowDate) != -1) {
                    this.incomeTotal = parseInt(this.incomeTotal) + parseInt(income[i].price);
                    this.incomeArr.push(income[i]);
                }
            }
            for(var j = 0; j < income.length; j++) {
                if(income[j].date.indexOf(this.nowDate) != -1) {
                    this.expendTotal = parseInt(this.expendTotal) + parseInt(expend[j].price);
                    this.expendArr.push(expend[j]);
                }
            }
        }
    }
}
</script>

<style>

</style>