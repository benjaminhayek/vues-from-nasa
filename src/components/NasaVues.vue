<template>
  <div class="nasa-vues">
    <header class='header'>
      <h1 class='title'>Vues from Nasa</h1>
    </header>
    <body class='main-page'>
      <aside>
        <hr class="border-left">
        <h3 class="aside-title">Can't get enough space? Here's more</h3>
        <button v-on:click=fetchAllDaysOfMonth($event) class="curr-month CMP-btn"><i class="fas fa-angle-double-right"></i> Current months pictures!</button>
        <button v-on:click=fetchMarsRoverPics($event) class="curr-month mars-btn"><i class="fas fa-angle-double-right"></i> Pictures from the Mars rover!</button>
        <button v-on:click=fetchTodaysPic($event) :disabled="apods.length === 1" class="curr-month back"><i class="fas fa-angle-double-right"></i> Back to Pic of the day!</button>
      </aside>
      <section>
        <hr class="border-right">
        <h1 class="body-title">Here is the NASA astronomy picture of the day</h1>
        <div class="image-holder" v-if="apods">

          <div class="body-info" v-for="apod in apods" :key = "apod.id">
            <img v-bind:src="apod.url" class="nasa-image" alt="apod"/>
            <h3 class="image-title">{{apod.title}}</h3>
          </div>
        </div>
      </section>
    </body>
  </div>
</template>

<script>

import { fetchAPOD, fetchAPODS, fetchMarsPics } from '../utils/apiCalls.js';
import moment from 'moment';

export default {
  name: 'nasa-vues',
  data() {
    return {
      apods: []
    }
  },
  methods: {
    fetchAllDaysOfMonth: async function(event) {
      let today = moment().format()
      let correctFormat = today.slice(0, 10)
      let picOfMonth = await fetchAPODS(correctFormat)
      this.apods = picOfMonth
    },
    fetchTodaysPic: async function(event) {
    let today = moment().format()
    let correctFormat = today.slice(0, 10)
    let todaysPic = await fetchAPOD(correctFormat)
    this.apods = todaysPic
    },
    fetchMarsRoverPics: async function(event) {
      this.apods = await fetchMarsPics()
    }
  },
  async mounted() {
    await this.fetchTodaysPic()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page {
  display: grid;
  grid-template-columns: 25em 1fr;
  background-color: black;
  height: 100%;
}
.header {
  display: flex;
  background-image: url('../utils/images/earth.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 10em;
}
.border-left {
  width: 90%;
  border-bottom: 1px solid #9E5BC9;
  border-top: 1px solid #9E5BC9;
}
.border-right {
  width: 90%;
  border-bottom: 1px solid #2954B6;
  border-top: 1px solid #2954B6;
}
.image-holder {
  height: 500px;
  overflow: auto;
}
.body-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.body-title {
  font-size: 1.75em;
  text-align: center;
  color: #2954B6;
}
.aside-title {
  margin-bottom: 2em;
  font-size: 1.75em;
  text-align: center;
  color: #9E5BC9;
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
.back:disabled {
  color: grey;
  cursor: not-allowed;
}
.curr-month:hover:enabled{
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
.nasa-image {
  height: 400px;
  width: 450px;
}

@media screen and (max-width: 800px) {
.main-page {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
}
.title {
  font-size: 2em;
}
.body-title, .aside-title {
  font-size: 1.5em;
}
.curr-month {
  font-size: 1em;
}
.nasa-image {
  height: 300px;
  width: 300px;
}
}
</style>
