<template>
  <div class="hero-body">
    <p class="title is-1 is-spaced">WE LOVE CAR</p>
    <p class="subtitle is-5">Choose a car that you interested in</p><br><br>
    <div class="columns is-multiline">
    <ul v-for="song in songs" class="column is-3">
      <a :href="`//www.youtube.com/results?search_query=${song.nome}`" target="_blank"><div class="player"><div class="player-name">{{song.nome}}</div></div></a>
    </ul>
   </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      songs: []
    }
  },
  created () {
    fetch('//fipe.parallelum.com.br/api/v1/carros/marcas')
    .then((res) => { return res.json() })
    .then((res) => {
      this.songs = res
      console.log(this.songs)
    })
  }
}
</script>

<style scoped>
.player {
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: #FFF;
  background: #E9967A;
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
.hero-body {

  background-color: #F0E68C;  /*สีบาร์*/
}
</style>
