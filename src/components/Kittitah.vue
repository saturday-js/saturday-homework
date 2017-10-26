<template>
<div class="container">
  <div class="column is-multiline">
    <h3 class="title">Popular Star Search</h3>
      <div class="control">
        <input v-model="key" class="input-search " placeholder="Search Name"> <br>
        <div class="columns"  align="center">
          <div class="columns is-multiline is-narrow" >
            <div  v-for = "r in filterName" >
              <img :src="`//image.tmdb.org/t/p/w640${r.profile_path}`" alt="" width="400px">
              <br>
              <h1 class="title">{{r.name}}</h1>
              <h2 class="subtitle">Popularity : {{r.popularity}}</h2>
              <b>Movies :</b><p v-for="k in r.known_for">{{k.title}}</p>
              <hr>
              </div>
             </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  data () {
    return {
      key: '',
      isLoading: true,
      star: []
    }
  },
  components: {
    PulseLoader
  },
  created () {
    this.getData()
  },
  computed: {
    isPlayersNotFound () {
      return this.key !== '' && this.filterName.length === 0
    },
    filterName () {
      let regexp = new RegExp(this.key.toLowerCase(), 'g')
      return this.star.filter(i => {
        return regexp.test(i.name.toLowerCase())
      })
    }
  },
  methods: {
    getData () {
      axios.get('https://api.themoviedb.org/3/person/popular?api_key=fbe74331d7484b82b9aeff59d253a59f&language=en-US&page=1')
      .then((response) => {
        this.isLoading = false
        this.star = response.data.results
        console.log(response.data.results)
      })
    }
  }
}
</script>

<style scoped>
.input-search {
  font-size: 20px;
  border-radius: 20px;
  padding-left: 30px;
  margin-bottom: 50px;
  margin-left: 100px;
  margin-top: 10px;
}
</style>