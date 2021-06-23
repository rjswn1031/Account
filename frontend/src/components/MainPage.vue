<template>
  <div id="MainPage">
    <MenuBar/>
    <router-view/>
    <div class="memoIconContainer">
      <div class="memoIconBtn" v-if="isMemoBtnOn" @click="openMomoPopup" >
        <b-icon class="memoIcon" icon="journal-text"></b-icon>
      </div>
    </div>
    <MemoPopup v-if="!isMemoBtnOn" :closeMemoPopup="closeMemoPopup" />
  </div>
</template>

<script>
import MenuBar from './MenuBar/MenuBar.vue'
import MemoPopup from './Memo/MemoPopup.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    MemoPopup
  },
  data() {
    return {
      isMemoBtnOn: true
    }
  },
  methods: {
    openMomoPopup() {
      this.isMemoBtnOn = false;
    },
    closeMemoPopup(){
      this.isMemoBtnOn = true;
    }
  }
}
</script>

<style>
section { border: 0em !important; }
#MainPage { display: flex; flex-direction: column; align-content: center; width: 100%; height: 100%; }
#MainPage > .memoIconContainer { display: flex; justify-content: center; position: absolute; bottom: 0em; width: 100%; }
#MainPage > .memoIconContainer > .memoIconBtn { display: flex; justify-content: center; align-items: center; width: 5em; height: 1.7em; font-size: 1.5em; transition: all 0.3s; border: 1px solid gray; background-color: white; z-index: 100; border-top-left-radius: .7em; border-top-right-radius: .7em; }
</style>
