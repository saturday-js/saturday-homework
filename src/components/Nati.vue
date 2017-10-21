<template>
  <div class="container">
    
    <div class="columns">
      <div class="column is-narrow">
        <img src="http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg" alt="" width="100px">            
      </div>
      <div class="column is-narrow">
        <h1 class="title is-1">Manchester United</h1>
        <h2 class="subtitle is-3">2017/18 Squad Numbers</h2>
      </div>
    </div>

    <div class="columns is-multiline">
      <div v-for="player in players" :key="player.id" class="column is-2">
        <div class="player">
          <div class="player-name">
            {{player.name}}
          </div>
          <div class="player-jersey-number">
            {{player.jerseyNumber}}
          </div>
        </div>
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
  methods: {
    getData () {
      axios.get('http://api.football-data.org/v1/teams/66/playersx', {
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
.player {
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: #FFF;
  background: #F00;
}
.player-name {
  padding-top: 10px;
  font-size: 20px;
}
.player-jersey-number {
  font-size: 80px;
}
</style>