<template>
    <div id="calenderCon">
      <div class="calenderWeek" v-for="(date, week) in days" :key= "week">
        <div class="calenderDay" v-for="(date, day) in date" :key= "day" v-on:click='onClickDay(selectDay,date)'>
          {{date}}
        </div>
      </div>
    </div>
</template>

<script>
import Common from "../../../assets/common.js"
var common = new Common;

export default {
   props: {selectDay:String, onClickDay:Function},
  data() {
    return{
      days: [],
    }
  },
  watch: {
    selectDay: function(){ this.fset_changeDate() }
  },
  created() {
    console.log(this.selectDay)
    this.fset_changeDate();
    this.onClickDay(this.selectDay, parseInt(this.selectDay.substr(8,2)));
  },
  methods: {
    fset_changeDate() {
      var arrSelect = this.selectDay.split('-');
      var firstDate = common.fget_DateFormat(new Date(arrSelect[0], arrSelect[1] - 1, 1),'day');//this.select.substr(0,7) + '-01';
      var lastDate = new Date(arrSelect[0], arrSelect[1], 0);

      var day = lastDate.getDate();
      var yoil = new Date(firstDate).getDay();

      var week = {};
      var dateArr = [];
      for(var i = 0; i < yoil; i++) {
        week[i] = ' ';
      }
      for(var j = 1; j <= day; j++) {
        week[yoil] = j;
        yoil++;

        if(yoil == 7 || j == day) {
          yoil = 0;
          dateArr.push(week);
          week = {};
        }
      }
      this.days = dateArr;
      //return dateArr;
    },
  }
}
</script>

<style>
  #calenderCon{width: 100%; margin-left: 2.5em;}
  .calenderDay {display: inline-block; border: 1px solid gray; padding: 2px 2px 2px 2px; width: 13%; height: 6.1em; vertical-align: top;}  
</style>