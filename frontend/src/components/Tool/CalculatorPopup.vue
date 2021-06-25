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
        calBtnArray: ['1','2','3','<','x²','4','5','6','+','-','7','8','9','×','÷','+/-','0','.','=','c'],
        equation: '',
        nowNum: '',
        preNum: 0,
        postNum: 0,
        calResult: 0,
        selectNum: 0,
        calMode: '',
        isSign: false
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
        if(val == '+') {
          if(this.isSign) return;
          this.equation += this.postNum.toLocaleString() + '+';
          this.calResult = this.calculateByMode(parseInt(this.preNum), parseInt(this.postNum));
          this.preNum = parseInt(this.calResult);
          this.nowNum = '';
          this.calMode = '+';
          this.isSign = true;
        } else if(val == '-'){
          if(this.isSign) return;
          this.equation += this.postNum.toLocaleString() + '-';
          this.calResult = parseInt(this.preNum) - parseInt(this.postNum);
          this.preNum = parseInt(this.calResult);
          console.log(this.preNum)
          this.nowNum = '';
          this.isSign = true;
        } else {
          this.nowNum += val;
          this.isSign = false;
        }
      },
      calculateByMode(a, b){
        let result;
        switch (this.calMode) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '×': result = a * b; break;
          case '÷': result = a / b; break;
          case 'x²': result = a * a; break;
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