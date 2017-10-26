<template>
  <div class="container">
    <div class="columns">
      <div class="column is-narrow">
      <div class="top"><img src="//orig00.deviantart.net/0fe5/f/2015/147/2/f/watercolor_totoro_by_peterondo-d8uxv0y.png" alt="" width="160px"></div>
      </div>
      <div class="column is-narrow">
    <div class="link"><h1 class="title is-1">Ghibli Films Collection</font></h1></div><br><br>
  </div>
  </div>
    <div class="columns is-multiline">
    <ul v-for="film in films" class="column is-3">
    <div class="player"><div class="player-name">
  <div class="link2"><h1>Name of film </h1></div><a :href="`//en.wikipedia.org/wiki/${film.title}`" target="_blank">{{film.title}}</a่>
  <br><a :href="`//www.youtube.com/results?search_query=${film.title}`" target="_blank">ค้นหาใน YOUTUBE เลย</a่>
  </div></div>
  </ul>
  </div>
  </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      films: []
    }
  },
  created () {
    fetch('//ghibliapi.herokuapp.com/films')
    .then((res) => { return res.json() })
    .then((res) => {
      this.films = res
      console.log(this.films)
    })
  }
}
</script>

<style scoped>
.link {
 color:Black;}

 .link2 {
  color:#000000;}

  .top {
   margin-top:-70px;}


   .player {
     border-radius: 10px;
     overflow: hidden;
     text-align: center;
     color: #FFF;
     background: #EEE8AA;
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
     font-size: 15px;
   }
</style>
