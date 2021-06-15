<template>
  <div id="insertModalContainer">
      <div class="modalTop">
          <span v-bind:class="{'on':selectMenu == 'income'}" @click="selectIncome">수입</span>
          <span v-bind:class="{'on':selectMenu == 'expend'}" @click="selectExpend">지출</span>
      </div>
      <div class="modalContent">
          <div class="modalInputContainer">
              <div class="modalInputTitle">카테고리</div>
              <div class="modalInputContent">
                <select v-model="category" name="" id="">
                    <option v-for="(value, key) in nowCategory" :key="key" v-bind:value='key'>{{value}}</option>
                </select>
              </div>
          </div>
          <div class="modalInputContainer">
              <div class="modalInputTitle">금액</div>
              <div class="modalInputContent">
                  <input v-model="price" type="number" placeholder="금액을 입력해 주세요">
              </div>
          </div>
          <div class="modalInputContainer">
              <div class="modalInputTitle">내용</div>
              <div class="modalInputContent">
                <input v-model="content" type="text" placeholder="내용을 입력해 주세요">
              </div>
          </div>
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
    #insertModalContainer { display: flex; flex-direction: column; background-color: rgb(248, 248, 248); border-radius: 1.5em; padding: 1.5em; width: 30em; height: 35em; z-index: 25; }
    /* #insertModalContainer div { border: 1px solid black; } */

    #insertModalContainer > .modalTop { flex: 1.5 0 0; }
    #insertModalContainer > .modalTop span { color: #777777; font-size: 1.7em; margin-right: .4em; }
    #insertModalContainer > .modalTop span:nth-child(1).on { color: #4fc08d; }
    #insertModalContainer > .modalTop span:nth-child(2).on { color: red; }

    #insertModalContainer > .modalContent { flex: 7 0 0; font-size: 1.1em; padding-top: 1.5em; }
    #insertModalContainer > .modalContent .modalInputContainer { display: flex; flex-direction: row; margin-bottom: 2em; }
    #insertModalContainer > .modalContent .modalInputContainer .modalInputTitle { flex: 3 3 0; display: flex; align-items: center; }
    #insertModalContainer > .modalContent .modalInputContainer .modalInputContent { flex: 7 7 0; padding-right: 1em; }
    #insertModalContainer > .modalContent .modalInputContainer .modalInputContent input { width: 100%; height: 2.5em; font-size: 1em; background-color: rgba(0,0,0,0); border: 1px solid rgba(0,0,0,0); border-bottom: 1px solid gray; }
    #insertModalContainer > .modalContent .modalInputContainer .modalInputContent select { width: 100%; height: 2.5em; font-size: 1em; background-color: rgba(0,0,0,0); border: 1px solid rgba(0,0,0,0); border-bottom: 1px solid gray; }

    #insertModalContainer > .modalBottom { flex: 1.5 0 0; display: flex; justify-content: flex-end; align-items: center }
    #insertModalContainer > .modalBottom button { height: 2.5em; width: 4.8em; margin-left: .5em; background-color: white; border-radius: .5em; font-weight: bold; }
    #insertModalContainer > .modalBottom button:nth-child(1) { color: #4fc08d; border: 2px solid #4fc08d; }
    #insertModalContainer > .modalBottom button:nth-child(1):hover { background-color: #4fc08d; border: 1px solid #4fc08d; color: white; }
    #insertModalContainer > .modalBottom button:nth-child(2) { color: red; border: 2px solid red; }
    #insertModalContainer > .modalBottom button:nth-child(2):hover { background-color: red; border: 1px solid red; color: white; }
</style>