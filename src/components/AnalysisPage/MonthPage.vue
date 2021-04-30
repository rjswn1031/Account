<template>
  <div>
      <MoneyAnalysis :nowDate="nowMonth"/>
  </div>
</template>

<script>
import MoneyAnalysis from './MoneyAnalysis/MoneyAnalysis.vue'
import Common from '../../assets/common.js'
var common = new Common;

export default {
    components: {
        MoneyAnalysis
    },
    data() {
        return {
            nowMonth: common.fget_DateFormat(new Date(), 'month')
        }
    }
}
</script>

<style>

</style>