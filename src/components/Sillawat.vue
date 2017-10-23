<template>
    <div class="container">
      <h1 class="title">
        {{project}}
      </h1>
      <h2 class="subtitle">
        {{sub}}
      </h2>
      <div class="columns is-multiline is-narrow">
        <div class="column is-one-third" v-for="movie in movies">
          <div class="card" >
            <div class="card-image">
              <figure class="image">
                <img  :src="`//image.tmdb.org/t/p/w640${movie.poster_path}`">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{movie.title}}</p>
                  <p class="subtitle is-6"></p>
                </div>
              </div>
              <div class="content">
                <b>Original Language</b> : {{movie.original_language}} <br>
                <b>Overview</b> : {{movie.overview}} <br>
                <b>Release_Date</b> : {{movie.release_date}} <br>
                <b>Popularity</b> : {{movie.popularity}} <br>
                <b>Vote Count</b> : {{movie.vote_count}} <br>
                <b>Vote Average</b> : {{movie.vote_average}} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
var apiKey = 'fbe74331d7484b82b9aeff59d253a59f'
export default {
  data () {
    return {
      project: 'THE MOVIES',
      sub: 'Movies is Comming',
      movies: [],
      detail: [],
      isLoading: true
    }
  },
  created () {
    this.getData()
  },
  components: {
  },
  computed: {
  },
  methods: {
    getData () {
      axios.get('//api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=' + apiKey)
      .then((response) => {
        this.isLoading = false
        this.movies = response.data.results
      })
    }
  }
}
</script>

<style scoped>
  .card {
    width: 100%;
    height: auto;
  }
</style>