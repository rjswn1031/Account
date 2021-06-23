<template>
  <div id="MainPage">
    <MenuBar/>
    <router-view/>
    <div class="memoIconContainer">
      <div class="memoIconBtn">
        <b-icon class="memoIcon" icon="journal-text"></b-icon>
      </div>
    </div>
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
#MainPage { display: flex; flex-direction: column; align-content: center; width: 100%; height: 100%; }
#MainPage > .memoIconContainer { display: flex; justify-content: center; position: absolute; bottom: 0em; width: 100%; }
#MainPage > .memoIconContainer > .memoIconBtn { display: flex; justify-content: center; align-items: center; width: 5em; height: 2em; font-size: 1.5em; border: 1px solid gray; background-color: white; z-index: 100; border-top-left-radius: .7em; border-top-right-radius: .7em; }
</style>
