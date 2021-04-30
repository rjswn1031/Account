<template>
  <div>
      <span><router-link to="month">MONTH</router-link></span> <span><router-link to="year">YEAR</router-link></span>
      <router-view/>
  </div>
</template>

<script>
export default {
    name: 'AnalysisPage'
}
</script>

<style>

</style>