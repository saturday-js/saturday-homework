<template>
  <div class="container">
  
   <div class="columns">
     Dota 2 Heroes
     </div>
   <div class="columns">
      
    <div class="column is-4" style="border:1px solid black;">
    <div class="column is-12">
     <center> Hero STR </center>
    </div>
    <div class="columns is-multiline">
    <div class="column is-4 box" v-for="(hero,index) in heroStr">
    <div @click="clickImage(index,'0')" :class="className(index, '0')">
     <p >{{hero.localized_name}}</p>
    <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png`" >
    </div>
    </div>
    </div>
    </div>
    
      <div class="column is-4" style="border:1px solid black;">
        <div class="column is-12">
     <center> Hero Agi </center>
    </div>
      <div class="columns is-multiline">
      <div class="column is-4 box" v-for="(hero,index) in heroAgi">
        <div @click="clickImage(index,'1')" :class="className(index, '1')">
     <p >{{hero.localized_name}}</p>
    <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png`" >
        </div>
    </div>
    </div>
    </div>

      <div class="column is-4" style="border:1px solid black;">
        <div class="column is-12">
     <center> Hero Int </center>
    </div>
      <div class="columns is-multiline">
      <div class="column is-4 box" v-for="(hero,index) in heroInt">
        <div @click="clickImage(index,'2')" :class="className(index, '2')">
     <p >{{hero.localized_name}}</p>
    <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png`" >
        </div>
    
    </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      query: '',
      heroes: [],
      heroAgi: [],
      heroStr: [],
      heroInt: [],
      heroId: ''
    }
  },
  created () {
    this.getDataGames()
  },
  methods: {
    getDataGames () {
      axios.get('https://api.opendota.com/api/heroes').then((response) => {
        this.heroes = response.data
        this.heroes.map(x => {
          if (x.primary_attr === 'agi') {
            this.heroAgi.push(x)
          } else if (x.primary_attr === 'str') {
            this.heroStr.push(x)
          } else if (x.primary_attr === 'int') {
            this.heroInt.push(x)
          }
        })
      })
    },
    clickImage (index, choose) {
      this.heroId = choose + index
    },
    className (index, choose) {
      return [
                { 'chosen ': this.heroId === choose + index }
      ]
    }
  }
}
</script>

<style>
 .input-text {
     font-size:20px;
     border-radius:3px;
     padding: 10px;
 }
 .chosen {
   border:2px solid black;
 }
</style>
