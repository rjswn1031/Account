<template>
  <div id="app">
    <section id="calenderSection">
      <CalenderContainer :onClickDay='fget_SelectDay'/>
    </section>
    <section id="infoSection">
      <DayInfo :today='selectDay'/>
    </section>

  </div>
</template>

<script>
import CalenderContainer from './components/Calender/CalenderContainer.vue'
import DayInfo from './components/DayInfo/DayInfo.vue'

export default {
  name: 'App',
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#calenderSection, #infoSection {display: inline-block; vertical-align: top;}
</style>
