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
      console.log(date);
      console.log(this.selectDay);
    }
  }
}
</script>

<style>
#calenderSection, #infoSection {display: inline-block; vertical-align: top;}
#calenderSection {width: 75%; height: 100%; padding-left: 2em;}
#infoSection {width: 25%; padding: 3em 0 0 2em; height: 100vh; border-left: 1px solid rgb(196, 196, 196);}
</style>
