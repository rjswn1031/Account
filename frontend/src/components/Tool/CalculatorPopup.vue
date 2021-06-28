<template>
  <div id="CalculatorPopup">
    <span class="closePopup" @click="closePopup">×</span>
    <div class="calTitle">계산기</div>
    <div class="calContent">
        <div class="calResult">
          <div class="calEquation">{{equation + postNum}}</div>
          <div class="calResult">{{calResult.toLocaleString()}}</div>
        </div>
        <div class="calBtnContainer">
          <div class="calBtn" v-for="(val,idx) in calBtnArray" :key="idx" @click="calNum(val)">{{val}}</div>
          <!-- <div class="calBtn">1</div><div class="calBtn">2</div><div class="calBtn">3</div><div class="calBtn">+</div>
          <div class="calBtn">4</div><div class="calBtn">5</div><div class="calBtn">6</div><div class="calBtn">-</div>
          <div class="calBtn">7</div><div class="calBtn">8</div><div class="calBtn">9</div><div class="calBtn">×</div>
          <div class="calBtn">0</div><div class="calBtn">c</div><div class="calBtn">=</div><div class="calBtn">÷</div> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['closePopup'],
    data() {
      return {
        // calBtnArray: {'1':'num','2':'num','3':'num','+':'plus','4':'num','5':'num','6':'num','-':'minus','7':'num','8':'num','9':'num','×':'multiply','0':'num','c':'reset','=':'result','÷':'devide'},
        calBtnArray: ['1','2','3','<','his','4','5','6','+','-','7','8','9','×','÷','+/-','0','.','=','c'],
        equation: '',
        nowNum: '',
        preNum: 0,
        postNum: 0,
        calResult: 0,
        selectNum: 0,
        calMode: '',
        isSign: false,
        isReset: true,
        isTotal: false
      }
    },
    watch: {
      nowNum: function(){
        let nowNumber = parseInt(this.nowNum)
        if(isNaN(nowNumber)) { this.postNum = ''; return; }
        this.postNum = nowNumber;
      }
    },
    methods: {
      calNum(val){
        if(val == '+' || val =='-' || val == '×' || val == '÷') {
          if(this.isSign) return; //연속 기호 방지
          if(this.isReset) return;
          if(this.calMode == '') this.calMode = val; //최초 기호 오류 방지
          if(this.postNum == '') this.postNum = 0;
          if(this.isReset) 
          { 
            this.equation = this.postNum.toLocaleString(); 
          } //postNum 초기화
          else 
          { 
            if(this.isTotal) { this.equation += ' ' + val + ' '; this.isTotal = false; }
            else { this.equation += this.postNum.toLocaleString() + ' ' + val + ' '; }
          }

          this.calResult = this.calculateByMode(parseInt(this.preNum), parseInt(this.postNum));
          this.preNum = parseInt(this.calResult);
          this.nowNum = '';
          this.calMode = val;
          this.isSign = true;
          this.isReset = false;

        } else if(val == '=') {
          this.calResult = this.calculateByMode(parseInt(this.preNum), parseInt(this.postNum));
          this.equation = this.calResult;
          this.nowNum = '';
          this.calMode = '';
          this.preNum = parseInt(this.calResult);
          this.postNum = 0;
          this.isSign = false;
          this.isReset = false;
          this.isTotal = true;

        } else if(val == 'c') {
          this.equation = '';
          this.nowNum = '';
          this.preNum = 0;
          this.postNum = 0;
          this.calResult = 0;
          this.selectNum = 0;
          this.calMode = '';
          this.isSign = false;
          this.isReset = true;
          this.isTotal = false

        } else if(val == '.') {
          this.nowNum += val + '0';
        } else {
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
#CalculatorPopup > .calContent > .calBtnContainer .calBtn { flex: 1 0 20%; display: flex; justify-content: center; align-items: center; font-size: 1.3em; font-weight: 500; }

#CalculatorPopup .closePopup { position: absolute; right: .7em; top: .5em; font-size: 1.3em; cursor: pointer; }
</style>