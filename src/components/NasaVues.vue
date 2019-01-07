<template>
  <div class="nasa-vues">
    <h1>Vues from Nasa</h1>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>

import { key } from '../utils/apiKey.js'

export default {
  name: 'nasa-vues',
  props: {
    msg: key,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
