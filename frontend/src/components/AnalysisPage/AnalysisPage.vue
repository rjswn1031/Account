<template>
  <div>
      <div style="height: 3vh; margin: 1vh 0px 1vh 0px;">
        <span><router-link class="toggleMY" to="month">MONTH</router-link></span> <span><router-link class="toggleMY" to="year">YEAR</router-link></span>
      </div>
      <router-view/>
  </div>
</template>

<script>
export default {
    name: 'AnalysisPage'
}
</script>

<style>
.toggleMY {color: #4fc08d !important; margin: 0px 0px 0px 20px;}
</style>