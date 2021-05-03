<template>
  <div id="app">
    <MenuBar/>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar/MenuBar.vue'

export default {
  name: 'App',
  components: {
    MenuBar
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
@font-face {
    font-family: 'nanumSquare';
    src: url(./assets/fonts/NanumFont/NanumSquareR.ttf) format('woff');
    font-weight: normal;
    font-style: normal;
}
#app {
  font-family: nanumSquare;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
}
</style>
