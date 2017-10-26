<template>
  <div class="container">
    <div class="columns">
      <div class="header">
        <center><img src="//upload.wikimedia.org/wikipedia/en/4/44/Heroes_of_the_Storm_logo_2016.png" alt="" width="200px">    
        <h1 class="title is-1">Heroesofthestorm</h1></center>
      </div>
    </div>

      <center>
          <input type="text" v-model="query" class="input is-info outline"><br><br>
          <H2 class="title is-2">รายชื่อ Hero</H2></center>
      </center>
       <div v-if="isHeroesNotFound" class="has-text-centered">
      <h1 class="title is-1">หาไม่เจอจ้า...</h1>
    </div>
      <div class="columns is-multiline">
        <div v-for="Hero in filterHeroes" class="column is-2 ">
          <a :href="`https://heroesofthestorm.gamepedia.com/${Hero.PrimaryName}`">
          <div class="Hero" >
              <div class="picture-hero">
                  <center><img :src="`https://d1i1jxrdh2kvwy.cloudfront.net/Images/Heroes/Portraits/${Hero.ImageURL}.png`" 
                    alt="" width="100px" height=""></center>
                </div>
            <div class="Hero-name">
              <center>Hero : {{Hero.PrimaryName}}</center>
               <div class="m-name">
              <center>ตำแหน่ง : {{Hero.Group}}</center>
            </div>
            </div>
          </div>
          </a>
        </div>    
      </div>
      <div v-if="isLoading" class="has-test-centered">
        <br><br><br><br>
        <pulse-loader :loadding="true" :color="'blue'"></pulse-loader>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  data () {
    return {
      query: '',
      isLoading: true,
      Heroes: []
    }
  },
  components: {
    PulseLoader
  },
  created () {
    this.getData()
  },
  computed: {
    isHeroesNotFound () {
      return this.q !== '' && this.filterHeroes.length === 0
    },
    filterHeroes () {
      let regexp = new RegExp(this.query.toLowerCase(), 'g')
      return this.Heroes.filter(Heroe => {
        return regexp.test(Heroe.PrimaryName.toLowerCase())
      })
    }
  },
  methods: {
    getData () {
      axios.get('https://api.hotslogs.com/Public/Data/Heroes')
      .then((response) => {
        this.isLoading = false
        this.Heroes = response.data
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
.header{
  margin:auto;
}
.title{
  color:blue;
}
.is-warning{
  margin-top:50px;
}
.is-multiline{
  padding-top:50px;
}
.Hero {
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: #FFF;
  background: #6699FF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.Hero:hover {
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
.Hero:hover {
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
.input:hover {
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
.picture-hero{
  margin-top: 10px;
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  border-radius: 10px;
}
.picture-hero:hover {
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
</style>

