<template>
  <div class="container ">
  
   <div class="columns" style="margin:10px; padding:30px;">
     <div class="column is-12 box" v-if="heroId === ''">
       <center > <p>Dota 2 Heroes <br>
      เลือกฮีโร่</p>
      </center>
     </div>
     <div v-if="heroId !== ''" class="column is-12" v-for="hero in selectHero">
    
         <center v-if="heroId !== ''"> 
      <div class="column is-4 box">
        <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png?v=4195662?v=4195662`" > <br>
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
   <div class="columns" >
      
    <div class="column is-4 box " style="padding:30px;">
    <div class="column is-12">
      
  
     <center style="padding:8px;">
       
        <img src="//upic.me/i/p7/p2368.jpg" width='32px'>
        Hero STR
         
      </center>
       
       
    </div>
    <div class="columns is-multiline">
    <div  v-for="(hero,index) in heroStr" :key="index" :class="className(index, '0')">
    <div @click="clickImage(index,'0')" >
     <p >{{hero.localized_name}}</p>
    <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png?v=4195662?v=4195662`" >
    </div>
    </div>
    </div>
    </div>
    
      <div class="column is-4 box" style="margin-left:10px; margin-right:10px; padding:30px;">
        <div class="column is-12">
      <p>
     <center style="padding:8px;"> 
       <img src="//upic.me/i/yr/j2369.jpg" width='32px'>
       Hero Agi
        </center>
        </p>
    </div>
      <div class="columns is-multiline">
      <div  v-for="(hero,index) in heroAgi" :key="index" :class="className(index, '1')">
        <div @click="clickImage(index,'1')" >
     <p >{{hero.localized_name}}</p>
    <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png?v=4195662?v=4195662`" >
        </div>
    </div>
    </div>
    </div>

      <div class="column is-4 box" style="padding:30px;">
        <div class="column is-12"><p>
     <center style="padding:8px;"> 
       <img src="//upic.me/i/ca/dota_2___redrawn_intelligence_icon_by_tigerkirby215-d8agdx6.png" width='32px'> 
       Hero Int </center>
     </p>
    </div>
      <div class="columns is-multiline">
      <div  v-for="(hero,index) in heroInt" :key="index" :class="className(index, '2')">
        <div @click="clickImage(index,'2')" >
     <p >{{hero.localized_name}}</p>
    <img  :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_lg.png?v=4195662?v=4195662`" >
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
      return [ 'column is-4', 'box', 'mouseMove',
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

<style scoped>
 .input-text {
     font-size:20px;
     border-radius:3px;
     padding: 10px;
 }
 .chosen {
   background-color:blanchedalmond;
 }
 .mouseMove:hover {
   background-color:bisque;
   box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.12);
  transform: scale(1.12);
 }
 .background-dota2 {
   background-color:#272526;
 }
 p {
 }
</style>
