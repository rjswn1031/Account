<template>
  <div id="MemoPopup">
      <span class="closePopup" @click="closePopup">×</span>
      <div class="memoTitle">메모 작성</div>
      <div class="memoContent">
        <div class="memoInputTitle"><input type="text" v-model="memoTitle" placeholder="제목을 입력해주세요"></div>
        <div class="memoAreaContent"><textarea name="" id="" v-model="memoContent" cols="30" rows="10" placeholder="내용을 입력해주세요"></textarea></div>
      </div>
      <div class="memoFooter">
          <button class="memoInsertBtn" @click="addMemo">등록</button>
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
            memoTitle: '',
            memoContent: ''
        }
    },
    mounted(){
        common.dragElement('#MemoPopup','.memoTitle')
    },
    methods: {
        addMemo(){
            let account = common.fget_AccountToStorage();
            let memo = {'id':'rjswn1031','date':common.fget_DateFormat(new Date, 'day'),'title':this.memoTitle,'content':this.memoContent};
            account.memo.push(memo);
            localStorage.setItem('account',JSON.stringify(account));
            this.closePopup();
            alert('등록이 완료되었습니다.')
        }
    }
}
</script>

<style>
    #MemoPopup { display: flex; flex-direction: column; position: absolute; bottom: 1.7em; right: 1.7em; padding: 1em; width: 23em; height: 25em; background-color: white; border: 1px solid black; border-radius: .7em; z-index: 51; }
    #MemoPopup > .memoTitle { flex: 0 0 2.2em; width: 100%; }

    #MemoPopup > .memoContent { flex: 1 0 0; }
    #MemoPopup > .memoContent > .memoInputTitle { width: 100%; }
    #MemoPopup > .memoContent > .memoInputTitle input { width: 100%; }
    #MemoPopup > .memoContent > .memoAreaContent { width: 100%; margin-top: .5em; }
    #MemoPopup > .memoContent > .memoAreaContent textarea { width: 100%; }

    #MemoPopup > .memoFooter { flex: 0 0 2.8em; display: flex; justify-content: start; align-items: center; }
    #MemoPopup > .memoFooter > .memoInsertBtn { font-size: 0.9em; font-weight: 500; color: white; background-color: #33475b; width: 4em; height: 2em; border-radius: .4em; }

    #MemoPopup .closePopup { position: absolute; right: .7em; top: .5em; font-size: 1.3em; }
</style>