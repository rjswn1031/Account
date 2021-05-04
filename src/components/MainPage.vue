<template>
  <div id="app">
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

</style>
