<template>
    <div id="calenderCon">
      <div class="yoil calenderDay" v-for="yoil in day" :key="yoil">{{yoil}}</div>
      <div class="calenderWeek" v-for="(date, week) in days" :key= "week">
        <div class="calenderDay" :class="{'on':date == on}" v-for="(date, day) in date" :key= "day" v-on:click='onClickDay(selectDay,date); on = date'>
          {{date}} <br>
          <b-icon v-if="incomeChk[date-1] == true" style="color:green; margin-left:5px;" icon="check-circle"></b-icon>
          <b-icon v-if="expendChk[date-1] == true" style="color:red; margin-left:5px;" icon="check-circle"></b-icon>
        </div>
      </div>
    </div>
</template>

<script>
import Common from "../../../assets/common.js"
var common = new Common;

export default {
   props: {selectDay:String, onClickDay:Function, incomeChk:Array, expendChk:Array, getMonthData:Function},
  data() {
    return{
      day: ['일','월','화','수','목','금','토'],
      days: [],
      on: undefined,
    }
  },
  watch: {
    selectDay: function(){ this.fset_changeDate() },
    //incomeChk: function() { this.fset_changeDate() },
    //expendChk: function() { this.fset_changeDate() }
  },
  created() {
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

      this.getMonthData()

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
  .yoil { background-color: #dadada; height: auto !important; font-size: 1em !important;}
  #calenderCon{width: 100%; margin-left: 2.5em;}
  .calenderDay {font-size: 1.1em;display: inline-block; border: 1px solid gray; padding: 2px 2px 2px 2px; width: 13%; height: 13vh; vertical-align: top;}  
  .on { background-color: #4fc08d; color: white;}
</style>