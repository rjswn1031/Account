<template>
  <div id="MainPage">
    <MenuBar/>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar/MenuBar.vue'

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
section { border: 0em !important; }
#MainPage { display: flex; flex-direction: column; width: 100%; height: 100%; }
</style>
