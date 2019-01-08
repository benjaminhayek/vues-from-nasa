<template>
  <div class="nasa-vues">
    <header class='header'>
      <h1 class='title'>Vues from Nasa</h1>
    </header>
    <body>
      <h1>Here is the NASA astronomy picture of the day</h1>
      <img class='placeholder' src='../utils/images/space.jpeg'/>
    </body>
  </div>
</template>

<script>

import { key } from '../utils/apiKey.js'
import { fetchAPOD } from '../utils/apiCalls.js'

export default {
  name: 'nasa-vues',
  data() {
    return {
      apod: ''
    }
  },
  async mounted() {
    const pic = fetchAPOD()
    this.apod = pic
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
