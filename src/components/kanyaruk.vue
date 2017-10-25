<template>
  <div class="b">
  <div class="container">

    <div class="columns">
      <div class="column is-narrow">
      <img src="https://i.pinimg.com/originals/ab/57/4b/ab574b22e6cb86f8b6cd67fc302a224b.png" alt="" width="250px">
      </div>


      <div class="column is-narrow">
          <div class="wn">
        <br>
        <h1 class="title is-1">WORLD NEWS</h1>
      </div>
</div>
</div>

        <center>
      <input v-model="q" class="input-search" placeholder="Search Here">

      <div v-if="isPlayersNotFound" class="has-text-centered">

        <!-- <h1 class="title is-1">☹️</h1>-->
      </div>
    </center>





      <div class="columns is-multiline">
        <div v-for="source in filterPlayers" :key="source.id" class="column is-2">
          <a :href="`${source.url}`" target="_blank">
            <div class="player">
              <div class="player-name">
                {{source.name}}
              </div>
              <div class="player-jersey-number">
                {{source.id}}
              </div>
            </div>
          </a>
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
      q: '',
      isLoading: true,
      sources: []
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
      return this.q !== ''
    },
    filterPlayers () {
      let regexp = new RegExp(this.q.toLowerCase(), 'g')
      return this.sources.filter(source => {
        return regexp.test(source.name.toLowerCase()) || regexp.test(source.id)
      }).sort((a, b) => a.id - b.id)
    }
  },
  methods: {
    getData () {
      axios.get('//newsapi.org/v1/sources').then((response) => {
        this.sources = response.data.sources
      })
    }
  }
}
</script>

<style>


.input-search {
  font-size: 60px;
  border: 10px;
  padding: 10px;
  margin-bottom: 40px;
  color: #589;
}
.input-search:focus {
  outline:50;

  }
.input-search::-webkit-input-placeholder {
  color: #ECE;
}
.player {
  border-radius: 0px;
  overflow: hidden;
  text-align: center;
  color: #20292c;
  background: #bde4f3;
  cursor: pointer;
  transition: all 5.0s ease-in-out;
}
.player:hover {
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
.player-name {
  padding-top: 10px;
  font-size: 30px;
  font-weight:bold;
  color:#40321a;
  font-family : Impact;
}
.player-jersey-number {
  font-size: 20px;
  color:#f44a07;
  font-family : Impact;


}
  .wn{

    font-size: 70px;

  }

.b{

  background: #359569;
}


</style>
