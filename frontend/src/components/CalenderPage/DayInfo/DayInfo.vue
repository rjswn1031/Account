<template>
  <section id="infoSection">
    <div id="infoSectionTitie">{{nowDay}}</div>
    <div id="displayContainer">
      <div class="infoDisplay" id="displayIncome"><div>수입</div><span class="colorGreen">{{incomeTotal.toLocaleString()}}</span></div>
      <div class="infoDisplay" id="displayExpend"><div>지출</div><span class="colorRed">{{expendTotal.toLocaleString()}}</span></div>
      <div class="infoDisplay" id="displayTotal"><div>합계</div><span v-bind:class="{'colorRed':!isTotalColor,'colorGreen':isTotalColor}">{{dayTotal.toLocaleString()}}</span></div>
    </div>
    <div id="infoContentContainer">
      <div class="contentContainer" v-for="(arr, index) in totalArr" :key="index">
        <div class="infoContent">{{arr.type == 'income' ? incomeCategory[arr.category] : expendCategory[arr.category]}}</div>
        <div class="infoContent">{{arr.content}}</div>
        <div class="infoContent" v-bind:class="{'colorRed':arr.type == 'expend','colorGreen':arr.type == 'income'}">{{parseInt(arr.price).toLocaleString()}}</div>
        <div class="infoContent" v-on:click="fset_deleteAccount(arr.type, arr.index)">×</div>
      </div>
    </div>
    <div id="infoBtnContainer">
      <div class="infoBtn"><span class="btnAdd" @click="openModal">+</span></div>
      <div class="infoBtn"><span class="btnSort" @click="testFunc"><b-icon class="listIcon" icon="list"></b-icon></span></div>
    </div>
    <Modal v-if="isModalOpen" :closeModal='closeModal' >
      <InsertModal :incomeCategory="incomeCategory" :expendCategory="expendCategory" :insertAccount="fset_insertAccount" :closeModal="closeModal" />
    </Modal>
  </section>
</template>

<script>
import Modal from '../../Modal/Mask.vue'
import InsertModal from '../../Modal/InsertAccountModal.vue'
import Common from '../../../assets/common.js'
var common = new Common;

export default {
  props: ['today','getMonthData'],
  components: {
    Modal,
    InsertModal,
  },
  data(){
    return {
      incomeModalId: 'income',
      expendModalId: 'expend',
      nowDay: '',
      incomeArr: [],
      expendArr: [],
      totalArr: [],
      incomeTotal: 0,
      expendTotal: 0,
      dayTotal: 0,
      isTotalColor: true,
      isModalOpen: false,
      incomeCategory: common.incomeCategory,
      expendCategory: common.expendCategory,
    }
  },
  watch: {
    today: function() { 
      this.fset_income_expendArr();
      let arr = this.today.split('-');
      this.nowDay = arr[0]+'년 '+arr[1]+'월 '+arr[2]+'일';
    },
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
      this.fset_totalArray();
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

      this.closeModal();
    },
    fset_deleteAccount(type, index){
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
    },
    fset_totalArray() {
      let array = [];
      this.incomeArr.forEach(element => {
        element.type = 'income'
      });
      this.expendArr.forEach(element => {
        // console.log(element)
        element.type = 'expend'
      });
      array = this.incomeArr.concat(this.expendArr)
      this.totalArr = array;
    },
    openModal(){
      this.isModalOpen = true;
    },
    closeModal(){
      this.isModalOpen = false;
    },
    testFunc(){
      alert('준비중..');
    }
  }

}
</script>
<style>
  #infoSection { display: flex; flex-direction: column; flex-wrap: wrap; border-left: 1px solid #c7c7c7 !important; z-index: 51; }
  #infoSection > #infoSectionTitie { flex: 0 0 4.2em; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2em; color: #fff; background-color: #4fc08d; border-top: 1px solid #49a27a; text-align: center; width: 100%; }

  #infoSection > #displayContainer { flex: 0 0 4.2em; display: flex; flex-direction: row; align-items: center; width: 100%; color: #6C757D; background-color: #f5f5f5; font-weight: bold; font-size: 0.9em; }
  #infoSection > #displayContainer .infoDisplay { flex: 33.33 33.33 0%; text-align: center; }

  #infoSection > #infoContentContainer { flex: 1 0 0; display: flex; flex-direction: column; flex-wrap: nowrap; overflow-y: scroll; padding: 0.3em .5em 0.3em 1em; margin-right: .3em; }
  #infoSection > #infoContentContainer .contentContainer { display: flex; padding: 0em 0.3em; border: 1px solid #cacaca; }
  #infoSection > #infoContentContainer .contentContainer .infoContent { flex: 2 1 0; padding: 0em 0.4em; font-size: 0.8em; font-weight: bold; height: 3em; }
  #infoSection > #infoContentContainer .contentContainer .infoContent:nth-child(1) { flex: 1.3 1 0; display: flex; justify-content: center; align-items: center; }
  #infoSection > #infoContentContainer .contentContainer .infoContent:nth-child(2) { flex: 5.7 1 0; display: flex; justify-content: flex-start; align-items: center; }
  #infoSection > #infoContentContainer .contentContainer .infoContent:nth-child(3) { flex: 2 1 0; text-align: right; display: flex; justify-content: flex-end; align-items: center; }
  #infoSection > #infoContentContainer .contentContainer .infoContent:nth-child(4) { flex: 0.2 1 0; text-align: right; display: flex; justify-content: flex-end; align-items: center; color: red; }

  #infoSection > #infoBtnContainer { flex: 0 0 4.2em; width: 100%; display: flex; align-items: center;  }
  #infoSection > #infoBtnContainer .infoBtn { flex: 5 1 0%; text-align: center; height: 3.5em; background-color: #f5f5f5; }
  #infoSection > #infoBtnContainer .infoBtn span.btnAdd { font-size: 2.3em; color: #828282; cursor: pointer; }
  #infoSection > #infoBtnContainer .infoBtn span.btnSort { font-size: 2.1em;  color: #828282; cursor: pointer; }

  #infoSection > #infoContentContainer::-webkit-scrollbar { width: 0.3em; opacity: 1; }
  #infoSection > #infoContentContainer::-webkit-scrollbar-thumb { background-color: gray; border-radius: .5em; width: .1em; }
  .colorRed { color: red; }
  .colorGreen { color: #4fc08d; }
</style>