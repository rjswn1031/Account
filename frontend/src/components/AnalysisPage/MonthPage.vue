<template>
  <div id="monthPageContainer">



      <!-- <section id="money" class="col-4">
          <MoneyAnalysis :nowDate="nowMonth"/>
      </section>
      <div class="col-8">
      <section id="monthChart">
        <span class="title">월/카테고리 별 수입 지출 내역</span>
        <span class="title">소비 패턴 분석</span>
        <ChartAnalysis :nowDate="nowMonth"/>
        <ExpendCategoryChart  :nowDate="nowMonth"/>
      </section>
      <section id="cateChart">
        <div style="height: 100%;">
            <b-tabs content-class="mt-3" style="height: 100%">
                <b-tab title="수입" active><IncomeCategoryChart :nowDate="nowMonth"/></b-tab>
                <b-tab title="지출"></b-tab>
            </b-tabs>
        </div>
      </section>
      </div> -->
  </div>
</template>

<script>
// import MoneyAnalysis from './MoneyAnalysis/MoneyAnalysis.vue'
// import ChartAnalysis from './ChartAnalysis/ChartAnalysis.vue'
//import IncomeCategoryChart from './ChartAnalysis/IncomeCategoryChart.vue'
// import ExpendCategoryChart from './ChartAnalysis/ExpendCategoryChart.vue'

import Common from '../../assets/common.js'
var common = new Common;

export default {
    components: {
    //    MoneyAnalysis,
    //    ChartAnalysis,
       //IncomeCategoryChart,
    //    ExpendCategoryChart
    },
    data() {
        return {
            nowMonth: common.fget_DateFormat(new Date(), 'month')
        }
    },
    created() {
        
    },
    methods: {
        
    }
}
</script>

<style>
    #monthPageContainer div { border: 1px solid black; }
    #monthPageContainer { display: grid; grid-template-columns: 0.35fr 0.65fr; }
/* section {border: 1px solid black}
.title { color: #4fc08d; font-size: 2.5vh; } */

/* #money { width: 34.5vw; height: 89vh; position: absolute; box-sizing: border-box;} */
/* #monthChart { width: 64vw; height: 44.5vh; left: 34.5vw; position: absolute; } */
/* #cateChart { width: 64vw; height: 44.5vh; left: 34.5vw; bottom: 0px; position: absolute; } */
</style>