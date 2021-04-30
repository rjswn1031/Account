<template>
  <div>
      <section>
          <MoneyAnalysis :nowDate="nowMonth"/>
      </section>
      <section>
          <ChartAnalysis :nowDate="nowMonth"/>
      </section>
      <section>
          <CategoryChart :nowDate="nowMonth"/>
      </section>
  </div>
</template>

<script>
import MoneyAnalysis from './MoneyAnalysis/MoneyAnalysis.vue'
import ChartAnalysis from './ChartAnalysis/ChartAnalysis.vue'
import CategoryChart from './ChartAnalysis/CategoryChart.vue'

import Common from '../../assets/common.js'
var common = new Common;

export default {
    components: {
        MoneyAnalysis,
        ChartAnalysis,
        CategoryChart
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