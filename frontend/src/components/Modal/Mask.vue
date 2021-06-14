<template>
  <div id="maskContainer" @click.self="closeModal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['closeModal'],
  data(){
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
  #maskContainer { 
    display: flex; 
    justify-content: center;
    align-items: center;
    position: fixed; 
    top: 0px; 
    left: 0px; 
    width: 100%; 
    height: 100%;
    background-color: rgb(0, 0, 0, .8);
    z-index: 20;
 }
</style>