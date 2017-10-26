<template>
<div class="container">
<div class="column is-multiline box">
  <center>
  <img src="http://img.fifa.com/images/fwc/2014/opengraph/generic.png" alt="" width="500px" height="100px"><br>
  <input v-if="players.length > 0" v-model="WC" class="input-search" placeholder="Search World Cup Players">
  </center>
  <div v-if="isPlayersNotFound" class="has-text-centered">
  <h1 class="title is-1">Player is not join</h1>
  </div>
  </div>
  <div class="columns is-multiline box">
    <div v-for="player in filterPlayers" :key="player.id" class="column is-2">
      <a :href="`//en.wikipedia.org/wiki/${player.name}`" target="_blank">
        <div class="player">
          <div class="player-name">
            {{player.name}}
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
</div>
</template>

<script>
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  data () {
    return {
      WC: '',
      players: [],
      isLoading: true
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
      return this.WC !== '' && this.filterPlayers.length === 0
    },
    filterPlayers () {
      let regexp = new RegExp(this.WC.toLowerCase(), 'g')
      return this.players.filter(player => {
        return regexp.test(player.name.toLowerCase())
      })
    }
  },
  methods: {
    getData () {
      axios.get('https://montanaflynn-fifa-world-cup.p.mashape.com/persons', {
        headers: {
          'X-Mashape-Key': 'Tvk0ZxbX1ZmshK0eaGEGQYvARB1Zp1sV9S4jsnVYgLe5TCYS50',
          'accepts': 'json',
          'Accept': 'application/json'
        }
      }).then((response) => {
        this.isLoading = false
        this.players = response.data
        console.log(response.data)
      })
    }
  }
}
</script>

<style scoped>
.input-search {
  font-size: 50px;
  border: 0px;
  padding: 20px;
  margin-bottom: 40px;
  color:#6CB8A0;
}
.input-search:focus {
  outline:0;
  }
.input-search::-webkit-input-placeholder {
  color: #EEE;
}
.player {
  border-radius: 10px;
  text-align: center;
  color: #E5F297;
  background: #0D4936;
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
  font-size: 25px;
}
</style>
