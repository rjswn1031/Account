<template>
  <div id="ToolMenuPopup">
      <div class="ToolMenuPopupContainer">
        <span class="toolIcon" @click="openMemoPopup"><b-icon icon="journal-text"></b-icon></span>
        <span class="toolIcon" @click="openCalculatorPopup"><b-icon icon="calculator-fill"></b-icon></span>
        <span class="toolIcon" @click="closeToolPopup"><b-icon icon="caret-down-fill"></b-icon></span>
        <!-- <span class="toolIcon"><b-icon icon="file-earmark-text-fill"></b-icon></span> -->
        <!-- <span class="popupCloseIcon"><b-icon icon="arrow-left" @click="closeMemoPopup"></b-icon></span> -->
      </div>
  </div>
</template>

<script>
export default {
  props: ['closeToolPopup','openMemoPopup','openCalculatorPopup'],
  methods: {
    
  }
}
</script>

<style>
  #ToolMenuPopup { display: flex; justify-content: center; position: absolute; bottom: 1em; width: 100%; height: 3.8em; z-index: 50; transition: all 1s; }
  #ToolMenuPopup > .ToolMenuPopupContainer { display: flex; position: relative; border: 1px solid black; width: auto; height: 100%; background-color: #33475b; border-radius: 5em; z-index: 102; }
  #ToolMenuPopup > .ToolMenuPopupContainer .toolIcon { display: flex; justify-content: center; align-items: center; margin: 0em 1em; font-size: 1.5em; color: white; cursor: pointer; } 
</style>