<template>
  <div>
    <div>{{today}} 수입 지출 내역</div>
    <section>
      수입 <span v-b-modal.income>+</span>
      <InsertModal :modalId="incomeModalId" :optionCategory="incomeCategory" :okFunction="fset_insertAccount"/>
      <InfoTable :modalId="incomeModalId" :dataArr="incomeArr"/>
    </section>
    <section>
      지출 <span v-b-modal.expend>+</span>
      <InsertModal :modalId="expendModalId" :optionCategory="expendCategory" :okFunction="fset_insertAccount"/>
      <InfoTable :modalId="incomeModalId" :dataArr="expendArr"/>
    </section>
    합계: 
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
      expendArr: []
    }
  },
  watch: {
    today: function() {
      var account = null;
      account = common.fget_AccountToStorage();

      var income = account.income;
      var expend = account.expend;

      this.incomeArr = [];
      this.expendArr = [];
      for (var i = 0; i < account.income.length; i++) {
        if(income[i].date == this.today) this.incomeArr.push(income[i]);
      }

      for (var j = 0; j < account.expend.length; j++) {
        if(expend[j].date == this.today) this.expendArr.push(expend[j]);
      }
    }
  },
  methods: {
    fset_insertAccount(type, content, price, category){
      if(content.length == 0 || price.length == 0 || category.length == 0) { alert('모든 항목을 입력해주세요'); return; }
      
      var account = null;
      account = common.fget_AccountToStorage();
      type = account[type];
      console.log(type)

      var json = {'index': type.length == 0 ? 0 : (type[type.length-1].index + 1), 'date':this.today,'id':'rjswn1031','price':price,'content':content,'category':category,'fixed':'N'};
      type.push(json);

      localStorage.setItem('account',JSON.stringify(account));
    }
  }

}
</script>

<style>

</style>