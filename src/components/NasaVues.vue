<template>
  <div class="nasa-vues">
    <header class='header'>
      <h1 class='title'>Vues from Nasa</h1>
    </header>
    <body>
      <h1>look at all these cool pics</h1>
    </body>
  </div>
</template>

<script>

import { key } from '../utils/apiKey.js'

export default {
  name: 'nasa-vues',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  background-image: url('../utils/images/earth.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 25vh;
}
.title {
  margin-left: 25px;
  font-size: 4em;
}
</style>
