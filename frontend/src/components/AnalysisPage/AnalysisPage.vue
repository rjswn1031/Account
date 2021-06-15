<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<template>
  <div id="analysisPage">
    <MoneyAnalysis :nowDate="nowMonth"/>
    <div class="ChartContainer">
      <div class="chartCon">
        <div class="pageTitle">● 월간 사용 내역</div>
        <div class="chartController">
          <canvas class="lineChart"></canvas>
          <!-- <ChartAnalysis :nowDate="nowMonth" :height="300"/> -->
        </div>
      </div>
      <div class="chartCon">
        <div class="pageTitle">● 월간 사용 내역</div>
        <div class="chartController">
          <ExpendCategoryChart :nowDate="nowMonth" :height="300"/>
        </div>
      </div>
    </div>
  </div>
  <!-- <div id="analysisPage">
    <MoneyAnalysis :nowDate="nowMonth"/>
    <div class="lineChartContainer">
      <div class="linechartCon">
        <div class="pageTitle">● 월간 사용 내역</div>
        <ChartAnalysis :nowDate="nowMonth"/>
      </div>
    </div>
    <div class="categoryChartContainer"></div>
  </div> -->
</template>

<script>
import MoneyAnalysis from './MoneyAnalysis/MoneyAnalysis.vue'
import ChartAnalysis from './ChartAnalysis/ChartAnalysis.vue'
import ExpendCategoryChart from './ChartAnalysis/ExpendCategoryChart.vue'
import Common from '../../assets/common.js'
var common = new Common;

export default {
    name: 'AnalysisPage',
    components: {
      MoneyAnalysis,
      // ChartAnalysis,
      ExpendCategoryChart
    },
    data(){
      return{
        nowMonth: common.fget_DateFormat(new Date(), 'month'),
      }
    }
}
</script>

<style>
  #analysisPage { display: flex; width: 100%; height: 100%; }
  #analysisPage > #MoneyAnalysis { flex: 3 0 0; }
  #analysisPage > .ChartContainer { flex: 7 0 0; display: flex; flex-direction: column; }
  #analysisPage > .ChartContainer div { border: 1px solid black; }
  #analysisPage > .ChartContainer > .chartCon { flex: 5 0 0; display: flex; flex-direction: column; width: 100%; }
  #analysisPage > .ChartContainer > .chartCon .pageTitle { flex: 1 0 0; }
  #analysisPage > .ChartContainer > .chartCon .chartController { flex: 9 0 0; width: 100%; }

  /* #analysisPage > div { border: 1px solid black; }
  #analysisPage { 
    display: grid; 
    grid-template-columns: 0.3fr 0.7fr; 
    grid-template-rows: 1fr 1fr; 
    grid-template-areas: 
      "a b"
      "a c";
    padding: .5em; 
    width: 100vw; 
    height: 100%; 
  }
  #analysisPage > #MoneyAnalysis { grid-area: a; }
  #analysisPage > .lineChartContainer { grid-area: b; width: 100%; height: 100%; }
  #analysisPage > .lineChartContainer > .linechartCon { grid-area: b; display: flex; flex-direction: column; width: 100%; height: 100%; }
  #analysisPage > .categoryChartContainer { grid-area: c; } */
</style>