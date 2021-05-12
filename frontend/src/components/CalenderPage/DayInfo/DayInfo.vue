<template>
  <div style="height: 100%;">
    <div style="font-weight: bold; font-size: 1.3em; color: #6C757D">{{today}} 수입 지출 내역</div>
    <section id="sectionContainer">
      <div class="divContainer">
        <span class="nameText" style="color: #4fc08d; margin-left: 0.4em;">수입</span> <span v-b-modal.income><b-icon class="pencilIcon" icon="pencil"></b-icon></span>
        <InsertModal :modalId="incomeModalId" :optionCategory="incomeCategory" :okFunction="fset_insertAccount"/>
        <div class="infoTable">
          <InfoTable :modalId="incomeModalId" :dataArr="incomeArr" :deleteFunction="fset_deleteAccount" :total="incomeTotal"/>
        </div>
      </div>
      <div class="divContainer">
        <span class="nameText" style="color: red; margin-left: 0.4em;">지출</span> <span v-b-modal.expend><b-icon class="pencilIcon" icon="pencil"></b-icon></span>
        <InsertModal :modalId="expendModalId" :optionCategory="expendCategory" :okFunction="fset_insertAccount"/>
        <div class="infoTable">
          <InfoTable :modalId="expendModalId" :dataArr="expendArr" :deleteFunction="fset_deleteAccount" :total="expendTotal"/>
        </div>
      </div>
    </section>
    <div id="dayTotal">총합: <span v-bind:class="{'colorRed':!isTotalColor,'colorGreen':isTotalColor}">{{ dayTotal }}</span></div>
  </div>
</template>

<script>
import InsertModal from './InsertModal.vue'
import InfoTable from './InfoTable.vue'
import Common from '../../../assets/common.js'
var common = new Common;

export default {
  props: ['today','getMonthData'],
  components: {
    InsertModal,
    InfoTable
  },
  data(){
    return {
      incomeModalId: 'income',
      expendModalId: 'expend',
      incomeCategory: [
        {value:'salary', text:'월급'},
        {value:'pinmoney', text:'용돈'}
      ],
      expendCategory: [
        {value:'food', text:'음식'},
        {value:'cloth', text:'옷'},
        {value:'game', text:'게임'}
      ],
      incomeArr: [],
      expendArr: [],
      incomeTotal: 0,
      expendTotal: 0,
      dayTotal: 0,
      isTotalColor: true
    }
  },
  watch: {
    today: function() { this.fset_income_expendArr() },
  },
  methods: {
    fset_income_expendArr() {
      var account = null;
      account = common.fget_AccountToStorage();

      var income = account.income;
      var expend = account.expend;

      this.incomeArr = [];
      this.expendArr = [];
      this.incomeTotal = 0;
      this.expendTotal = 0;
      this.dayTotal = 0;
      for (var i = 0; i < income.length; i++) {
        if(income[i].date == this.today) { 
          this.incomeArr.push(income[i]); 
          this.incomeTotal = parseInt(this.incomeTotal) + parseInt(income[i].price);
        }
      }

      for (var j = 0; j < expend.length; j++) {
        if(expend[j].date == this.today) { 
          this.expendArr.push(expend[j]);
          this.expendTotal = parseInt(this.expendTotal) + parseInt(expend[j].price);
        }
      }

      this.dayTotal = this.incomeTotal - this.expendTotal;
      if(this.dayTotal >= 0) {this.isTotalColor = true}
      else {this.isTotalColor = false}
    },
    fset_insertAccount(type, content, price, category){
      if(content.length == 0 || price.length == 0 || category.length == 0) { alert('모든 항목을 입력해주세요'); return; }
      
      var account = null;
      account = common.fget_AccountToStorage();
      type = account[type];

      var json = {'index': (type.length == 0 ? 0 : (type[type.length-1].index + 1)), 'date':this.today,'id':'rjswn1031','price':price,'content':content,'category':category,'fixed':'N'};
      type.push(json);

      localStorage.setItem('account',JSON.stringify(account));
      this.fset_income_expendArr();
      this.getMonthData();
    },
    fset_deleteAccount(type, index){
      //var dataArr = null;
      var account = null;
      account = common.fget_AccountToStorage();

      var typeArr = account[type];
      for(var i = 0; i < typeArr.length; i++) {
        if(typeArr[i].index === index) {
          typeArr.splice(i,1);
        }
      }

      localStorage.setItem('account',JSON.stringify(account));
      this.fset_income_expendArr();
      this.getMonthData();
    }
  }

}
</script>

<style>
.divContainer { margin-top: 2em; }
.nameText { font-size: 1.4em; }
.infoTable {border: 1px solid rgb(187, 187, 187); width: 100%; height: 18em; min-height: 18em; padding: 1em 1em 1em 1em; border-radius: 10px; margin-top: 0.7em; background-color: rgb(250, 250, 250); box-sizing: border-box; }
#sectionContainer {height:90%; overflow: scroll;}
#sectionContainer::-webkit-scrollbar { display: none; }
.colorRed { color: red; margin-left: 1em; }
.colorGreen { color: #4fc08d; margin-left: 1em; }
#dayTotal { font-size: 1.2em;}
</style>