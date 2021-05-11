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
#CalenderPage {height: 94%; box-sizing: border-box;}
#calenderSection, #infoSection {display: inline-block; vertical-align: top; box-sizing: border-box; height: 100%;}
#calenderSection {width: 75%; padding-left: 2em;}
#infoSection {width: 25%; padding: 3em 1em 0 1em; border-left: 1px solid rgb(196, 196, 196);}
</style>
