<template>
  <div class="container">
    
    <div class="columns">
      <div class="column is-narrow">
        <img src="//upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg" alt="" width="100px">            
      </div>
      <div class="column is-narrow">
        <h1 class="title is-1">Manchester United</h1>
        <h2 class="subtitle is-3">2017/18 Squad Numbers</h2>
      </div>
    </div>

    <input v-if="players.length > 0" v-model="q" class="input-search" placeholder="Search players">
    
    <div v-if="isPlayersNotFound" class="has-text-centered">
      <h1 class="title is-1">☹️</h1>
    </div>
    
    <div class="columns is-multiline">
      <div v-for="player in filterPlayers" :key="player.id" class="column is-2">
        <a :href="`//en.wikipedia.org/wiki/${player.name}`" target="_blank">
          <div class="player">
            <div class="player-name">
              {{player.name}}
            </div>
            <div class="player-jersey-number">
              {{player.jerseyNumber}}
            </div>
          </div>
        </a>
      </div>
    </div>
    
    <div v-if="isLoading" class="has-text-centered">
      <br><br><br><br>
      <pulse-loader :loading="true" :color="'#F00'"></pulse-loader>
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
      players: []
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
      return this.q !== '' && this.filterPlayers.length === 0
    },
    filterPlayers () {
      let regexp = new RegExp(this.q.toLowerCase(), 'g')
      return this.players.filter(player => {
        return regexp.test(player.name.toLowerCase()) || regexp.test(player.jerseyNumber)
      }).sort((a, b) => a.jerseyNumber - b.jerseyNumber)
    }
  },
  methods: {
    getData () {
      axios.get('//api.football-data.org/v1/teams/66/players', {
        headers: {
          'X-Auth-Token': 'be99f135fe2d4c8b8dc2300d921becd6',
          'X-Response-Control': 'minified'
        }
      }).then((response) => {
        this.isLoading = false
        this.players = response.data.players
      }).catch((error) => {
        this.isLoading = false
        this.showErrorMsg(error.message)
      })
    },
    showErrorMsg (error) {
      this.$toast.open({
        duration: 1000 * 60 * 20,
        message: `${error}`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    }
  }
}
</script>

<style scoped>
.input-search {
  font-size: 60px;
  border: 0px;
  padding: 10px;
  margin-bottom: 40px;
  color: #999;
}
.input-search:focus {
  outline:0;
  }
.input-search::-webkit-input-placeholder {
  color: #EEE;
}
.player {
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: #FFF;
  background: #F00;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.player:hover {
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
.player-name {
  padding-top: 10px;
  font-size: 20px;
}
.player-jersey-number {
  font-size: 80px;
}
</style>