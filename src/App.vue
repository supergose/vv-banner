<template>
  <div id="app">
    <VVBanner msg="Testo del Banner"/>
  </div>
</template>

<script>
import VVBanner from './components/VVBanner.vue'

export default {
  name: 'app',
  components: {
    VVBanner
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  margin-top: 60px;
}
</style>
