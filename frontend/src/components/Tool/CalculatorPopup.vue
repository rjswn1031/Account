<template>
  <div id="CalculatorPopup">
    <span class="closePopup" @click="closePopup">×</span>
    <div class="calTitle">계산기</div>
    <div class="calContent">
        <div class="calResult"></div>
        <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['closePopup']
}
</script>

<style>
#CalculatorPopup { display: flex; flex-direction: column; position: absolute; bottom: 1.7em; right: 1.7em; padding: 1em; width: 25em; height: 27em; background-color: white; border: 1px solid black; border-radius: .7em; z-index: 51; }
#CalculatorPopup > .calTitle { flex: 0 0 2.2em; width: 100%; }

#CalculatorPopup .closePopup { position: absolute; right: .7em; top: .5em; font-size: 1.3em; cursor: pointer; }
</style>