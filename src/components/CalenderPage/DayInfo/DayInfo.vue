<template>
  <div>
    <div>{{today}} 수입 지출 내역</div>
    <section>
      수입 <span v-b-modal.income>+</span>
      <InsertModal :modalId="incomeModalId" :optionCategory="incomeCategory" :okFunction="fset_insertAccount"/>
      <InfoTable :modalId="incomeModalId" :dataArr="incomeArr" :deleteFunction="fset_deleteAccount" :total="incomeTotal"/>
    </section>
    <section>
      지출 <span v-b-modal.expend>+</span>
      <InsertModal :modalId="expendModalId" :optionCategory="expendCategory" :okFunction="fset_insertAccount"/>
      <InfoTable :modalId="expendModalId" :dataArr="expendArr" :deleteFunction="fset_deleteAccount" :total="expendTotal"/>
    </section>
    총합: {{ dayTotal }}
  </div>
</template>

<script>
import InsertModal from './InsertModal.vue'
import InfoTable from './InfoTable.vue'
import Common from '../../../assets/common.js'
var common = new Common;

export default {
  props: ['today'],
  components: {
    InsertModal,
    InfoTable
  },
  data(){
    return {
      incomeModalId: 'income',
      expendModalId: 'expend',
      incomeCategory: {'salary':'월급', 'pinmoney':'용돈'},
      expendCategory: {'food':'음식', 'cloth':'옷', 'game':'게임'},
      incomeArr: [],
      expendArr: [],
      incomeTotal: 0,
      expendTotal: 0,
      dayTotal: 0
    }
  },
  watch: {
    today: function() { this.fset_income_expendArr() }
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
    }
  }

}
</script>

<style>

</style>