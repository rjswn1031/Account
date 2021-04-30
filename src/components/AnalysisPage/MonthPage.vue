<template>
  <div>
      <section>
          <MoneyAnalysis :nowDate="nowMonth"/>
      </section>
      <section>
          <ChartAnalysis :nowDate="nowMonth"/>
      </section>
      <section>
        <div>
            <b-tabs content-class="mt-3">
                <b-tab title="수입" active><IncomeCategoryChart :nowDate="nowMonth"/></b-tab>
                <b-tab title="지출"><ExpendCategoryChart  :nowDate="nowMonth"/></b-tab>
            </b-tabs>
        </div>
      </section>
  </div>
</template>

<script>
import MoneyAnalysis from './MoneyAnalysis/MoneyAnalysis.vue'
import ChartAnalysis from './ChartAnalysis/ChartAnalysis.vue'
import IncomeCategoryChart from './ChartAnalysis/IncomeCategoryChart.vue'
import ExpendCategoryChart from './ChartAnalysis/ExpendCategoryChart.vue'

import Common from '../../assets/common.js'
var common = new Common;

export default {
    components: {
        MoneyAnalysis,
        ChartAnalysis,
        IncomeCategoryChart,
        ExpendCategoryChart
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

</style>