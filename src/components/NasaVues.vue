<template>
  <div class="nasa-vues">
    <header class='header'>
      <h1 class='title'>Vues from Nasa</h1>
    </header>
    <body class='main-page'>
      <aside>
        <hr class='border'>
        <h3 class="aside-title">Can't get enough space? Here's more</h3>
        <button class="curr-month">Current months pictures</button>
      </aside>
      <section>
        <h1>Here is the NASA astronomy picture of the day</h1>
        <img class='placeholder' src='../utils/images/space.jpeg'/>
      </section>
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
.main-page {
  display: grid;
  grid-template-columns: 15em 1fr;
  background-color: black;
  height: 100vh;
}
.header {
  display: flex;
  background-image: url('../utils/images/earth.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 25vh;
}
hr.border {
  width: 75%;
  border-top: 1px solid #9E5BC9;
  border-bottom: 1px solid #9E5BC9;
}
.curr-month {
  color: #9E5BC9;
}
.title {
  margin-left: 25px;
  font-size: 4em;
}
.placeholder {
  height: 500px;
  width: 600px;
}
</style>
