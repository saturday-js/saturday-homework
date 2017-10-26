<template>
<!-- สหพัฒ แก้วนิล 5806021612047 -->
  <div class="hello">
 
    <link href="https://fonts.googleapis.com/css?family=Lato|Slabo+27px" rel="stylesheet">
    <center><h1>{{ msg }}</h1>
    <img src="//www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" width="200px">
    <h2>Star,Sun,Earth,NASA technology</h2>
    </center>
    
    <form v-on:submit.prevent="getResult(query)">
       <center><input type="text" placeholder="Type in your search" v-model="query" /> </center>
      </form>
     <div class="results" v-if="results">

      <div v-for="result in results">
           <center><img v-bind:src="result.links[0].href" /> </center>
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'search',
  data () {
    return {
      msg: 'Search image about NASA',
      query: '',
      results: ''
    }
  },
  methods: {
    getResult (query) {
      axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then(response => {
        console.log(response.data.collection.items)
        this.results = response.data.collection.items
      })
    }
  }
}
</script>


<style scoped>
.results img {
    height: 300px;
    margin: 10px;
    background-color: rgb(240, 240, 240);
}
.hello {
    background-color: rgb(240, 240, 240);
    
}

h1 {
  font-weight: normal;
  font-family: 'Slabo 27px', serif;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
}

h2 {
  font-weight: normal;
  font-family: 'Slabo 27px', serif;
  font-family: 'Lato', sans-serif;
  font-size: 11px;
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

input[type=text], select {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 15px;
    box-sizing: border-box;
    font-family: 'Slabo 27px', serif;
    font-family: 'Lato', sans-serif;
}


</style>
