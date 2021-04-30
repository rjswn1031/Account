<template>
  <div id="CalenderPage">
    <router-link to="/analysis/month">임시 이동</router-link>
    <section id="calenderSection">
      <CalenderContainer :onClickDay='fget_SelectDay'/>
    </section>
    <section id="infoSection">
      <DayInfo :today='selectDay'/>
    </section>

  </div>
</template>

<script>
import CalenderContainer from './Calender/CalenderContainer.vue'
import DayInfo from './DayInfo/DayInfo.vue'

export default {
  name: 'CalenderPage',
  components: {
    CalenderContainer,
    DayInfo,
  },
  data() {
    return {
      selectDay: '',
      isMaskOpen: false
    }
  },
  methods: {
    fget_SelectDay(yearMonth, date) {
      var day = yearMonth.substr(0,8);
      if(date < 10) date = '0' + date;
      day += date
      this.selectDay = day;
    }
  }
}
</script>

<style>
#calenderSection, #infoSection {display: inline-block; vertical-align: top;}
</style>
