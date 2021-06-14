<template>
  <div id="insertModalContainer">
      <div class="modalTop">
          <span v-bind:class="{'on':selectMenu == 'income'}" @click="selectIncome">수입</span>
          <span v-bind:class="{'on':selectMenu == 'expend'}" @click="selectExpend">지출</span>
      </div>
      <div class="modalContent">
          <table>
              <tr>
                  <td>카테고리</td>
                  <td>
                      <select v-model="category" name="" id="">
                          <option value="null">선택해주세요</option>
                          <option v-for="(value, key) in nowCategory" :key="key" value="key">{{value}}</option>
                      </select>
                  </td>
              </tr>
              <tr>
                  <td>금액</td>
                  <td>
                      <input v-model="price" type="number">
                  </td>
              </tr>
              <tr>
                  <td>내용</td>
                  <td>
                      <input v-model="content" type="text">
                  </td>
              </tr>
          </table>
      </div>
      <div class="modalBottom">
          <button @click="insertAccount(selectMenu, content, price, category)">저장</button>
          <button @click="closeModal()">닫기</button>
      </div>
  </div>
</template>

<script>
export default {
    props: ['incomeCategory','expendCategory','insertAccount','closeModal'],
    data() {
        return{
            selectMenu: '',
            price: 0,
            category: '',
            content: '',
            nowCategory: []
        }
    },
    created(){
        this.selectIncome();
    },
    methods: {
        selectIncome(){
            this.selectMenu = 'income';
            this.nowCategory = this.incomeCategory;
        },
        selectExpend(){
            this.selectMenu = 'expend';
            this.nowCategory = this.expendCategory;
        },
    }
}
</script>

<style>
    #insertModalContainer { display: flex; flex-direction: column; background-color: rgb(248, 248, 248); border-radius: 2em; padding: 1.5em; width: 30em; height: 35em; z-index: 25; }
    #insertModalContainer div { border: 1px solid black; }

    #insertModalContainer > .modalTop { flex: 1.5 0 0; }
    #insertModalContainer > .modalTop span { color: #777777; }
    #insertModalContainer > .modalTop span:nth-child(1).on { color: #4fc08d; }
    #insertModalContainer > .modalTop span:nth-child(2).on { color: red; }

    #insertModalContainer > .modalContent { flex: 7 0 0; }
    #insertModalContainer > .modalContent > table { width: 100%; height: 100%; }

    #insertModalContainer > .modalBottom { flex: 1.5 0 0; }
    #insertModalContainer > .modalBottom button { background-color: white; }
</style>