<template>
    <div class="container">
      <h1 class="title">
        {{project}}
      </h1>
      <h2 class="subtitle">
        {{sub}}
      </h2>
      <div class="columns is-multiline is-narrow">
        <button class="button" style="margin:7px;" v-on:click="All"> All </button>
        <button class="button" v-for="gen in genres0" style="margin:7px;" v-on:click="getGenres(gen.id)"> {{gen.name}} </button> 
      </div>
      <div class="columns is-multiline is-narrow">
        <div class="column is-one-third" v-for="movie in movies">
          <div class="card">
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
                <b>Vote Average</b> : {{movie.vote_average}} <br>
                <i v-for="det in detail">
                  <i v-if="det.id === movie.id"> 
                    <b>Genres</b> : <i v-for="gen in det.genres"> {{gen.name}} </i>
                    <b>Production</b> : <i v-for="pro in det.production_countries"> {{pro.name}} </i>
                  </i>
                </i> <br>
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
      genres0: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id: 12,
          name: 'Adventure'
        },
        {
          id: 16,
          name: 'Animation'
        },
        {
          id: 35,
          name: 'Comedy'
        },
        {
          id: 80,
          name: 'Crime'
        },
        {
          id: 99,
          name: 'Documentary'
        },
        {
          id: 18,
          name: 'Drama'
        },
        {
          id: 10751,
          name: 'Family'
        },
        {
          id: 14,
          name: 'Fantasy'
        },
        {
          id: 36,
          name: 'History'
        },
        {
          id: 27,
          name: 'Horror'
        },
        {
          id: 10402,
          name: 'Music'
        },
        {
          id: 9648,
          name: 'Mystery'
        },
        {
          id: 10749,
          name: 'Romance'
        },
        {
          id: 878,
          name: 'Science Fiction'
        },
        {
          id: 10770,
          name: 'TV Movie'
        },
        {
          id: 53,
          name: 'Thriller'
        },
        {
          id: 10752,
          name: 'War'
        },
        {
          id: 37,
          name: 'Western'
        }
      ],
      movieID: 0
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
      axios.get('//api.themoviedb.org/3/movie/upcoming?page=1-1000&language=en-US&api_key=' + apiKey)
      .then((response) => {
        this.movies = response.data.results
        this.movies.map(x => {
          this.getDetail(x.id)
        })
      })
    },
    getDetail (id) {
      axios.get('//api.themoviedb.org/3/movie/' + id + '?language=en-US&api_key=' + apiKey)
      .then((response) => {
        this.detail[this.movieID++] = response.data
      })
    },
    getGenres (id) {
      var movie = []
      for (var i = 0; i < this.movies.length; i++) {
        for (var j = 0; j < this.movies[i].genre_ids.length; j++) {
          if (this.movies[i].genre_ids[j] === id) {
            movie.push(this.movies[i])
          }
        }
      }
      if (movie != null) this.movies = movie
    },
    All () {
      this.movieID = 0
      this.getData()
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
