<template>
  <div id="MoneyAnalysis">
      <div id="MoneyAnalysisTop">
          <span>{{nowDate}} 현황</span>
          <span class="totalContainer" v-bind:class="{'colorGreen': incomeTotal - expendTotal >= 0,'colorRed': incomeTotal - expendTotal < 0}">\&nbsp;&nbsp;{{ (incomeTotal - expendTotal).toLocaleString() }}</span>
      </div>
      <div id="MoneyAnalysisContent">
        <div class="analyCon">
          <div class="analyContent analyTitle">
              <div>수입</div>
              <div class="colorGreen">{{incomeTotal}}</div>
          </div>
          <div class="analyContent" v-for="(incomeCate, key) in incomeCategoryTotal" :key="key">
              <div>{{key}}</div>
              <div>{{incomeCate}}</div>
          </div>
        </div>

        <div class="analyCon">
          <div class="analyContent analyTitle">
              <div>지출</div>
              <div class="colorRed">{{expendTotal}}</div>
          </div>
          <div class="analyContent" v-for="(expendCate, key) in expendCategoryTotal" :key="key">
              <div>{{key}}</div>
              <div>{{expendCate}}</div>
          </div>
        </div>

      </div>
      <div id="MoneyAnalysisBottom">
          <div></div>
      </div>
      
  </div>
</template>

<script>
import Common from '../../../assets/common.js'
var common = new Common;

export default {
    props: {nowDate:String},
    components: {
    },
    data() {
        return {
            incomeTotal: 0,
            expendTotal: 0,
            incomeArr: [],
            expendArr: [],
            incomeCategoryTotal: {},
            expendCategoryTotal: {}
        }
    },
    created() {
        this.fset_categoryTotalArray();
        this.fget_accountData();
    },
    methods: {
        fset_categoryTotalArray() {
            let incomeCategory = common.incomeCategory;
            let expendCategory = common.expendCategory;

            for(let income in incomeCategory){
                this.incomeCategoryTotal[income] = 0;
            }
            for(let expend in expendCategory){
                this.expendCategoryTotal[expend] = 0;
            }
            console.log(this.incomeCategoryTotal)
            console.log(this.expendCategoryTotal)
        },
        fget_accountData(){
            var account = null;
            account = common.fget_AccountToStorage();

            this.incomeTotal = 0;
            this.expendTotal = 0;
            this.incomeArr = [];
            this.expendArr = [];

            var income = account.income;
            var expend = account.expend;

            if(income.length == 0 && expend.length == 0) return;

            for(var i = 0; i < income.length; i++) {
                if(income[i].date.indexOf(this.nowDate) != -1) {
                    this.incomeTotal = parseInt(this.incomeTotal) + parseInt(income[i].price);
                    this.incomeArr.push(income[i]);
                    console.log(income[i].category)
                    switch (income[i].category) {
                        case 'salary': this.incomeCategoryTotal.salary += parseInt(income[i].price); break;
                        case 'pinmoney': this.incomeCategoryTotal.pinmoney += parseInt(income[i].price); break;
                    }
                }
            }
            for(var j = 0; j < expend.length; j++) {
                if(expend[j].date.indexOf(this.nowDate) != -1) {
                    this.expendTotal = parseInt(this.expendTotal) + parseInt(expend[j].price);
                    this.expendArr.push(expend[j]);
                    switch (expend[j].category) {
                        case 'food': this.expendCategoryTotal.food += parseInt(expend[j].price); break;
                        case 'cloth': this.expendCategoryTotal.cloth += parseInt(expend[j].price); break;
                        case 'game': this.expendCategoryTotal.game += parseInt(expend[j].price); break;
                    }
                }
            }
        }
    }
}
</script>

<style>
    #MoneyAnalysis { flex: 1 0 0; display: flex; flex-direction: column; align-items: center; padding: 1.5em; width: 100%; }

    #MoneyAnalysis #MoneyAnalysisTop { flex: 2.2 2.5 0; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; color: gray; }
    #MoneyAnalysis #MoneyAnalysisTop > .totalContainer { font-size: 3em; font-weight: bold; }
    
    #MoneyAnalysis #MoneyAnalysisContent { flex: 5.2 5.5 0; display: flex; flex-direction: column; align-items: center; width: 100%; padding: 0em 5em; }
    #MoneyAnalysis #MoneyAnalysisContent .analyCon { margin: 1.2em 0em; width: 100%; color: gray; }
    #MoneyAnalysis #MoneyAnalysisContent .analyCon .analyContent { font-size: 0.9em; display: flex; width: 100%; justify-content: space-between; }
    #MoneyAnalysis #MoneyAnalysisContent .analyCon .analyTitle { font-size: 1.2em; color: black  }

    #MoneyAnalysis #MoneyAnalysisBottom { flex: 1.7 2 0; }
</style>