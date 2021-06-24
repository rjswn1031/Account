<template>
  <div id="MainPage">
    <MenuBar/>
    <router-view/>

    <!-- ToolMenuSection -->
    <div class="toolIconContainer">
      <transition name="fade">
        <div class="toolIconBtn" v-if="isToolBtnOn" @click="openToolPopup" >
          <b-icon class="toolIcon" icon="caret-up-fill"></b-icon>
        </div>
      </transition>
    </div>
    <transition name="slide-fade">
     <ToolMenuPopup v-if="!isToolBtnOn" :closeToolPopup="closeToolPopup" :openMemoPopup="openMemoPopup" />
    </transition>
    <!-- ToolMenuSection -->

    <!-- popupSection -->
    <MemoPopup v-if="isMemoPopupOn" :closePopup="closeMemoPopup"/>
    <!-- popupSection -->
  </div>
</template>

<script>
import MenuBar from './MenuBar/MenuBar.vue'
import ToolMenuPopup from './Tool/ToolMenuPopup.vue'
import MemoPopup from './Tool/MemoPopup.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    ToolMenuPopup,
    MemoPopup
  },
  data() {
    return {
      isToolBtnOn: true,
      isMemoPopupOn: false,
    }
  },
  methods: {
    openToolPopup() {
      this.isToolBtnOn = false;
    },
    closeToolPopup(){
      this.isToolBtnOn = true;
    },
    openMemoPopup(){
      this.isMemoPopupOn = true;
    },
    closeMemoPopup(){
      this.isMemoPopupOn = false;
    }
  }
}
</script>

<style>
section { border: 0em !important; }
#MainPage { display: flex; flex-direction: column; align-content: center; width: 100%; height: 100%; }
#MainPage > .toolIconContainer { display: flex; justify-content: center; position: absolute; bottom: 0em; width: 100%; }
#MainPage > .toolIconContainer > .toolIconBtn { display: flex; justify-content: center; align-items: center; width: 3.5em; height: 1.2em; font-size: 1.3em; transition: all 0.3s; border: 1px solid gray; color: #33475b; background-color: white; z-index: 100; border-top-left-radius: .7em; border-top-right-radius: .7em; cursor: pointer; }

/* 애니메이션 */
.fade-enter-active, .fade-leave-active {
  transition: all 3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
