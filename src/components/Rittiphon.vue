<template>
  <div class="container">
  
   <div class="columns">
     <div class="column is-12 box" v-if="heroId === ''">
       <center > Dota 2 Heroes <br>
      เลือกฮีโร่
      </center>
     </div>
     <div v-if="heroId !== ''" class="column is-12" v-for="hero in selectHero">
    
         <center v-if="heroId !== ''"> 
      <div class="column is-4 box">
        <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png`" > <br>
        <table class="table">
          <tr>
            <td>
              ชื่อ:
            </td>
            <td>
               {{hero.localized_name}}
            </td>
          </tr>
          <tr>
            <td>
              สาย:
            </td>
            <td>
               {{hero.primary_attr.toUpperCase()}}
            </td>
          </tr>
           <tr>
            <td>
              ตำแหน่ง:
            </td>
            <td>
               {{hero.roles[0].toUpperCase()}}
            </td>
          </tr>
           <tr>
            <td>
              โจมตี:
            </td>
            <td>
               {{hero.attack_type}}
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <a :href="`http://dota2.com/hero/${hero.name.substring(14)}`" target="_blank">ดูเพิ่มเติม </a>
            </td>
          </tr>
        
         
        </table>
      </div>
      
      </center>
       </div>
     </div>
   <div class="columns box">
      
    <div class="column is-4" style="border-right:1px solid black;">
    <div class="column is-12">
     <center> Hero STR </center>
    </div>
    <div class="columns is-multiline">
    <div class="column is-4 box" v-for="(hero,index) in heroStr" :key="index">
    <div @click="clickImage(index,'0')" :class="className(index, '0')">
     <p >{{hero.localized_name}}</p>
    <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png`" >
    </div>
    </div>
    </div>
    </div>
    
      <div class="column is-4" style="border-right:1px solid black;">
        <div class="column is-12">
     <center> Hero Agi </center>
    </div>
      <div class="columns is-multiline">
      <div class="column is-4 box" v-for="(hero,index) in heroAgi" :key="index">
        <div @click="clickImage(index,'1')" :class="className(index, '1')">
     <p >{{hero.localized_name}}</p>
    <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png`" >
        </div>
    </div>
    </div>
    </div>

      <div class="column is-4" style="border-right:1px solid black;">
        <div class="column is-12">
     <center> Hero Int </center>
    </div>
      <div class="columns is-multiline">
      <div class="column is-4 box" v-for="(hero,index) in heroInt" :key="index">
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
      heroId: '',
      selectHero: []
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
      this.selectHeroes(index, choose)
    },
    className (index, choose) {
      return [
                { 'chosen ': this.heroId === choose + index }
      ]
    },
    selectHeroes (index, choose) {
      this.selectHero = []
      if (choose === '0') {
        this.selectHero.push(this.heroStr[index])
      } else if (choose === '1') {
        this.selectHero.push(this.heroAgi[index])
      } else if (choose === '2') {
        this.selectHero.push(this.heroInt[index])
      }
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
