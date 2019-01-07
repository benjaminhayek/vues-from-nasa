<template>
  <div id="app">
    <NasaVues />
  </div>
</template>

<script>
import NasaVues from './components/NasaVues.vue'

export default {
  name: 'app',
  components: {
    NasaVues
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
  margin-top: 60px;
}
</style>
