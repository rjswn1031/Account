<template>
  <div id="MemoPopup">
    <div class="MemoPopupContainer">
      <span class="popupCloseIcon"><b-icon icon="arrow-left" @click="closeMemoPopup"></b-icon></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['closeMemoPopup'],
  methods: {
    
  }
}
</script>

<style>
  #MemoPopup { display: flex; justify-content: center; position: absolute; bottom: 1em; width: 100%; height: 30em; z-index: 101; }
  #MemoPopup > .MemoPopupContainer { position: relative;; padding: 1em; border: 1px solid black; width: 32em; height: 100%; background-color: #f8f9fa; z-index: 102; }
  #MemoPopup > .MemoPopupContainer > .popupCloseIcon { position: absolute; right: 1em; top: 1em; }
</style>