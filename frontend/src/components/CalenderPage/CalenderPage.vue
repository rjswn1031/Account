<template>
  <div id="CalenderPage">
    <section id="calenderSection">
      <CalenderContainer :incomeChk='incomeChk' :expendChk='expendChk' :select='select' :getMonthData='fget_monthData' :onPreMon='fget_preMonth' :onPostMon='fget_postMonth' :onClickDay='fget_SelectDay'/>
    </section>
    <DayInfo :today='selectDay' :getMonthData='fget_monthData' />
  </div>
</template>

<script>
import CalenderContainer from './Calender/CalenderContainer.vue'
import DayInfo from './DayInfo/DayInfo.vue'
import Common from '../../assets/common.js'
var common = new Common;

export default {
  name: 'CalenderPage',
  components: {
    CalenderContainer,
    DayInfo,
  },
  data() {
    return {
      selectDay: '',
      select: common.fget_DateFormat(new Date, 'day'),
      incomeChk: [],
      expendChk: []
    }
  },
  methods: {
    fget_SelectDay(yearMonth, date) {
      var day = yearMonth.substr(0,8);
      if(date < 10) date = '0' + date;
      day += date
      this.selectDay = day;
    },
    fget_preMonth(){
      var dateArr = this.select.split('-')
      var preDate = common.fget_DateFormat(new Date(dateArr[0], parseInt(dateArr[1])-2, 1), 'day');

      this.select = preDate;
    },
    fget_postMonth(){
      var dateArr = this.select.split('-')
      var preDate = common.fget_DateFormat(new Date(dateArr[0], parseInt(dateArr[1]), 1), 'day');

      this.select = preDate;
    },
    fget_monthData() {
      var arrSelect = this.select.split('-');
      var lastDate = new Date(arrSelect[0], arrSelect[1], 0);

      var day = lastDate.getDate();

      var account = null;
      account = common.fget_AccountToStorage();
      var selectMon = this.select.substr(0,7);
      var incomeCheck = [];
      var expendCheck = [];

      for(var i = 1; i <= parseInt(day); i++) {
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
#CalenderPage { display: flex; flex-direction: row; width: 100%; height: 100%; }
#CalenderPage > #calenderSection { flex: 7 0 0; }
#CalenderPage > #infoSection { flex: 3 0 0; }
/* #CalenderPage {height: 94%; box-sizing: border-box;}
#calenderSection, #infoSection {display: inline-block; vertical-align: top; box-sizing: border-box; height: 100%;}
#calenderSection {width: 75%; padding-left: 2em;}
#infoSection {width: 25%; padding: 3em 1em 0 1em; border-left: 1px solid rgb(196, 196, 196);} */
</style>
