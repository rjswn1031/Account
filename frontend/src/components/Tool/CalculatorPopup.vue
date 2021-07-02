<template>
  <div id="CalculatorPopup">
    <span class="closePopup" @click="closePopup">×</span>
    <div class="calTitle">계산기</div>
    <div class="calContent">
        <div class="calResult">
          <div class="calEquation" v-if="fixNumError(nowNum) >= 0 || nowNum == ''">{{equation + nowNum}}</div>
          <div class="calEquation" v-else >{{equation + '('+nowNum+')'}}</div>
          <div class="calResult">{{calResult.toLocaleString()}}</div>
        </div>
        <div class="calBtnContainer">
            <div class="calBtn" :class="{'calcOn':val == clicked,'calcOff':val != clicked}" v-for="(val,idx) in calBtnArray" :key="idx" @click="calNum(val)" @mousedown="clicked = val" @mouseup="clicked = undefined">{{val}}</div>
        </div>
    </div>
    <div class="historyContainer" v-if="isHistoryMode">
      <div class="historyHeader">
        <span class="historyTitle">History</span>
        <span class="historyCloseBtn" @click="closeHistory">×</span>
      </div>
      <div class="historyContentContainer">
        <div class="historyContent" v-for="equa in history" :key="equa">
          <div class="historyEquation">{{equa.split('=')[0]}}</div>
          <div class="historyResult">{{'= ' + equa.split('=')[1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Common from '../../assets/common.js'
let common = new Common;

export default {
    props: ['closePopup'],
    data() {
      return {
        calBtnArray: ['1','2','3','<','his','4','5','6','+','-','7','8','9','×','÷','+/-','0','.','=','c'],
        clicked: undefined,
        history: [],
        equation: '',
        nowNum: '',
        preNum: 0,
        postNum: 0,
        calResult: 0,
        calMode: '',
        isSign: false,
        isReset: true,
        isTotal: false,
        isFirst: true,
        isHistoryMode: false
      }
    },
    mounted(){
        common.dragElement('#CalculatorPopup','.calTitle')
    },
    methods: {
      calNum(val){
        if(val == '+' || val =='-' || val == '×' || val == '÷') {
          this.calcualteFuc(val);
        } else if(val == '=') {
          this.equalFuc();
        } else if(val == 'c') {
          this.resetFuc();
        } else if(val == '.') {
          this.nowNum += '.'
        } else if(val == '+/-') {
          this.signFuc()
        } else if(val == '<') {
          this.nowNum = this.nowNum.substring(0,this.nowNum.length-1);
        } else if(val == 'his') {
          this.isHistoryMode = true;
        } else {
          if(this.isTotal) return;
          this.nowNum += val;
          this.isSign = false;
          this.isReset = false;
        }
      },
      calculateByMode(a, b){
        let result;
        switch (this.calMode) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '×': result = a * b; break;
          case '÷': result = a / b; break;
        }
        return result;
      },
      changeNowNumtoPostNum(){
        let nowNumber = this.fixNumError(this.nowNum)
        if(isNaN(nowNumber)) { this.postNum = ''; return; }
        this.postNum = nowNumber;
      },
      calcualteFuc(val){
        this.changeNowNumtoPostNum();
        if(this.isSign) return; //연속 기호 방지
        if(this.isReset) return;
        if(this.calMode == '') this.calMode = val; //최초 기호 오류 방지
        if(this.postNum == '') {
          if(val == '+' || val == '-') {
            this.postNum = 0;
          } else if(val == '×' || val == '÷') {
            this.postNum = 1;
          }
        }
        if(this.isReset) 
        { 
          this.equation = this.postNum.toLocaleString(); 
        } //postNum 초기화
        else 
        { 
          if(this.isTotal) { this.equation += ' ' + val + ' '; this.isTotal = false; }
          else { this.equation += this.postNum.toLocaleString() + ' ' + val + ' '; }
        }
        if(this.isFirst) { 
          this.preNum = this.fixNumError(this.postNum); this.nowNum = ''; 
          this.calMode = val; 
          this.isSign = true; 
          this.isReset = false;
          this.isFirst = false;
          return;
        }
        this.calResult = this.calculateByMode(this.fixNumError(this.preNum), this.fixNumError(this.postNum));
        this.preNum = this.fixNumError(this.calResult);
        this.nowNum = '';
        this.calMode = val;
        this.isSign = true;
        this.isReset = false;
      },
      equalFuc(){
        if(this.isTotal || this.isSign) return;
        if(this.calMode == '') return;
        this.changeNowNumtoPostNum();
        this.calResult = this.calculateByMode(this.fixNumError(this.preNum), this.fixNumError(this.postNum));
        this.history.push(this.equation + this.fixNumError(this.postNum) + ' = ' + this.calResult);

        this.equation = this.calResult;
        this.nowNum = '';
        this.calMode = '';
        this.preNum = this.fixNumError(this.calResult);
        this.postNum = 0;
        this.isSign = false;
        this.isReset = false;
        this.isTotal = true;
      },
      resetFuc(){
        this.equation = '';
        this.nowNum = '';
        this.preNum = 0;
        this.postNum = 0;
        this.calResult = 0;
        this.calMode = '';
        this.isSign = false;
        this.isReset = true;
        this.isTotal = false;
        this.isFirst = true;
      },
      signFuc(){
        if(this.nowNum.charAt(0) == '-'){
          console.log(this.nowNum.substring(1,this.nowNum.length))
          console.log(this.nowNum.substring(1,2))
          this.nowNum = this.nowNum.substring(1,this.nowNum.length)
        } else {
          this.nowNum = '-' + this.nowNum
        }
      },
      fixNumError(num){
        return Math.round(parseFloat(num)*1e12) / 1e12;
      },
      closeHistory(){
        this.isHistoryMode = false;
      }
    }
}
</script>

<style>
#CalculatorPopup { display: flex; flex-direction: column; position: absolute; bottom: 1.7em; right: 1.7em; padding: 1em; width: 23em; height: 27em; background-color: white; border: 1px solid black; border-radius: .7em; z-index: 51; }
#CalculatorPopup > .calTitle { flex: 0 0 2.2em; font-weight: 600; color: #33475b; width: 100%; }

#CalculatorPopup > .calContent { flex: 1 0 0; display: flex; flex-direction: column; color: #33475b; }
#CalculatorPopup > .calContent > .calResult { flex: 0 0 5.5em; display: flex; flex-direction: column; padding: .3em; background-color: rgb(243, 243, 243); }
#CalculatorPopup > .calContent > .calResult > .calEquation { flex: 0 0 1em; font-size: 1.2em; }
#CalculatorPopup > .calContent > .calResult > .calResult { flex: 1 0 0; display: flex; justify-content: flex-end; font-size: 2em; }

#CalculatorPopup > .calContent > .calBtnContainer { flex: 1 0 0; display: flex; flex-wrap: wrap; }
#CalculatorPopup > .calContent > .calBtnContainer .calcOn { background-color: #33475b; color: white; }
#CalculatorPopup > .calContent > .calBtnContainer .calcOff { background-color: white; color: #33475b; transition: background-color .4s; }
#CalculatorPopup > .calContent > .calBtnContainer .calBtn { flex: 1 0 20%; display: flex; justify-content: center; align-items: center; font-size: 1.3em; border-radius: 5em; font-weight: 500; }

#CalculatorPopup > .historyContainer { position: absolute; right: 0px; top: 0px; padding: 1em; width: 100%; height:100%; background-color: rgb(243, 243, 243); border-radius: .7em; z-index: 52; }
#CalculatorPopup > .historyContainer > .historyHeader { display: flex; }
#CalculatorPopup > .historyContainer > .historyHeader > .historyTitle { font-size: 1.3em; }
#CalculatorPopup > .historyContainer > .historyHeader > .historyCloseBtn { position: absolute; right: .7em; top: .5em; font-size: 1.3em; cursor: pointer; }

#CalculatorPopup > .historyContainer > .historyContentContainer { position: relative; overflow: scroll; width: 100%; height: calc(100% - 1.3em); }
#CalculatorPopup > .historyContainer > .historyContentContainer::-webkit-scrollbar { width: 0.3em; opacity: 1; }
#CalculatorPopup > .historyContainer > .historyContentContainer::-webkit-scrollbar-thumb { background-color: gray; border-radius: .5em; width: .1em; }

#CalculatorPopup > .historyContainer > .historyContentContainer > .historyContent { margin: .7em 0em; }
#CalculatorPopup > .historyContainer > .historyContentContainer > .historyContent > .historyEquation { font-size: 1.1em; }
#CalculatorPopup > .historyContainer > .historyContentContainer > .historyContent > .historyResult { font-size: 1.4em; }

#CalculatorPopup .closePopup { position: absolute; right: .7em; top: .5em; font-size: 1.3em; cursor: pointer; }
</style>