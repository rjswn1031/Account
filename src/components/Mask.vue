<template>
  <div>
    <div id="mask" v-on:click='fucClose'></div>
  </div>
</template>

<script>
export default {
  props: {fucClose:Function}

}
</script>

<style>
    #mask { width: 100%; height: 100%; background-color: black; opacity: 80%; position: absolute; left: 0px; top: 0px; }
</style>