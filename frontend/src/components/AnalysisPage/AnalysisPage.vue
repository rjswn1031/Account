<template>
  <div id="analysisPage">
    <div id="pageTitleContainer"><b-icon icon="clipboard-data"></b-icon>&nbsp;&nbsp;&nbsp;&nbsp;자산 분석</div>
    <div id="analysisPageContentContainer">
      <div id="MoneyAnalysisContainer">
        <div id="MoneyAnalysisCon">
          <div class="pageTitle">월간 사용 내역</div>
          <MoneyAnalysis :nowDate="nowMonth"/>
        </div>
      </div>
      <div class="ChartContainer">
        <div class="chartCon">
          <div class="pageTitle">월별 소비 패턴</div>
          <div class="chartController">
            <AnalysisLineChart :nowDate="nowMonth"/>
            <!-- <ChartAnalysis :nowDate="nowMonth" :height="300"/> -->
          </div>
        </div>
        <div class="chartCon">
          <div class="pageTitle">카테고리 별 소비 패턴</div>
          <div class="chartController">
            <div class="chartCategoryContainer">
              <AnalysisCategoryChart :nowDate="nowMonth"/>
            </div>
            <div class="chartCategoryContainer">
              <AnalysisPieChart :nowDate="nowMonth"/>
            </div>
            <!-- <ExpendCategoryChart :nowDate="nowMonth"/> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoneyAnalysis from './MoneyAnalysis/MoneyAnalysis.vue'
import AnalysisLineChart from './ChartAnalysis/AnalysisLineChart.vue'
import AnalysisCategoryChart from './ChartAnalysis/AnalysisCategoryChart.vue'
import AnalysisPieChart from './ChartAnalysis/AnalysisPieChart.vue'
import Common from '../../assets/common.js'
var common = new Common;

export default {
    name: 'AnalysisPage',
    components: {
      MoneyAnalysis,
      AnalysisLineChart,
      AnalysisCategoryChart,
      AnalysisPieChart
    },
    data(){
      return{
        nowMonth: common.fget_DateFormat(new Date(), 'month'),
      }
    },
}
</script>

<style>
  #analysisPage { display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #f8f9fa; }
  #analysisPage > #pageTitleContainer { width: 100%; padding: 1em 2em 0em 2em; font-size: 1.3em; font-weight: 600; }
  #analysisPage > #analysisPageContentContainer { flex: 1 0 0; display: flex; width: 100%; background-color: #f8f9fa; }
  #analysisPage > #analysisPageContentContainer  .pageTitle { padding: .8em 0em 0em .8em; font-size: 1.1em; font-weight: 600; }

  #analysisPage > #analysisPageContentContainer  > #MoneyAnalysisContainer { flex: 3.3 0 0; display: flex;  flex-direction: column; width: 100%; padding: 1em 2em 2em 2em; justify-content: center; align-items: center; }
  #analysisPage > #analysisPageContentContainer  > #MoneyAnalysisContainer > #MoneyAnalysisCon { display: flex; flex-direction: column; width: 100%; height: 100%; background-color: white; box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%); border-radius: 0.25em; }

  #analysisPage > #analysisPageContentContainer  > .ChartContainer { flex: 6.7 0 0; display: flex; flex-direction: column; justify-content: space-between; padding: 1em 2em 2em 0em; }
  #analysisPage > #analysisPageContentContainer  > .ChartContainer > .chartCon { flex: 0 0 48%; align-self: center; display: flex; flex-direction: column; width: 100%; background-color: white; box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%); border-radius: .25em; }
  #analysisPage > #analysisPageContentContainer  > .ChartContainer > .chartCon .chartController { flex: 9 0 0; width: 100%; padding: 1em; }
  #analysisPage > #analysisPageContentContainer  > .ChartContainer > .chartCon .chartController:nth-child(2) { display: flex; }
  #analysisPage > #analysisPageContentContainer  > .ChartContainer > .chartCon .chartController:nth-child(2) .chartCategoryContainer { flex: 0 0 50%; height: 90%; }
  
</style>