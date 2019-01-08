<template>
  <div class="nasa-vues">
    <header class='header'>
      <h1 class='title'>Vues from Nasa</h1>
    </header>
    <body class='main-page'>
      <aside>
        <h3 class="aside-title">Can't get enough space? Here's more</h3>
        <button class="curr-month"><i class="fas fa-angle-double-right"></i> Current months pictures!</button>
        <button class="curr-month"><i class="fas fa-angle-double-right"></i> Pictures from the Mars rover!</button>
        <button class="curr-month"><i class="fas fa-angle-double-right"></i> Pictures of earth!</button>
        <button class="curr-month"><i class="fas fa-angle-double-right"></i> Back to Pic of the day!</button>
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
  grid-template-columns: 25em 1fr;
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
.aside-title {
  margin-bottom: 2em;
  font-size: 1.75em;
  text-align: center;
}
.fa-angle-double-right {
  color: #9E5BC9;
}
.curr-month {
  border: none;
  cursor: pointer;
  color: white;
  background-color: transparent;
  font-size: 20px;
  transition:800ms ease all;
  border:none;
  position:relative;
  height:60px;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  margin-bottom: 1em;
  width: 100%;
  text-align: left;
}

.curr-month:hover{
  background:#fff;
  background: linear-gradient(to right,#9E5BC9);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.curr-month:before,button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: linear-gradient(to right, #9E5BC9);    
  transition:400ms ease all;
}

.curr-month:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}

.curr-month:hover:before,button:hover:after{
  width:100%;
  transition:800ms ease all;
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
