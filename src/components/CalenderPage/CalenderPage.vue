<template>
  <div id="CalenderPage">
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
#calenderSection {width: 70%; height: 100%;}
</style>
