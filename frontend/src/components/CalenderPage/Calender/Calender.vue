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
   props: {selectDay:String, onClickDay:Function},
  data() {
    return{
      day: ['일','월','화','수','목','금','토'],
      days: [],
      on: undefined,
      incomeChk: [],
      expendChk: []
    }
  },
  watch: {
    selectDay: function(){ this.fset_changeDate() }
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

      this.fget_monthData(day)

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
    fget_monthData(lastDate) {
      var account = null;
      account = common.fget_AccountToStorage();
      var selectMon = this.selectDay.substr(0,7);
      var incomeCheck = [];
      var expendCheck = [];

      for(var i = 1; i <= parseInt(lastDate); i++) {
        console.log('a')
        incomeCheck.push(false);
        expendCheck.push(false);
      }

      var income = account.income;
      var expend = account.expend;
      //var incomeArr = [];
      //var expendArr = [];
      for(var cnt = 0; cnt < income.length; cnt++) {
        if(income[cnt].date.indexOf(selectMon) != -1) {
          var num = parseInt(income[cnt].date.substr(8,2));
          incomeCheck[num-1] = true;
        }
      }
      for(var cnt1 = 0; cnt1 < expend.length; cnt1++) {
        if(expend[cnt1].date.indexOf(selectMon) != -1) {
          var num1 = parseInt(expend[cnt1].date.substr(8,2));
          expendCheck[num1-1] = true;
        }
      }

      this.incomeChk = incomeCheck;
      this.expendChk = expendCheck;
    }
  }
}
</script>

<style>
  .yoil { background-color: #dadada; height: auto !important; font-size: 1em !important;}
  #calenderCon{width: 100%; margin-left: 2.5em;}
  .calenderDay {font-size: 1.1em;display: inline-block; border: 1px solid gray; padding: 2px 2px 2px 2px; width: 13%; height: 13vh; vertical-align: top;}  
  .on { background-color: #4fc08d; color: white;}
</style>