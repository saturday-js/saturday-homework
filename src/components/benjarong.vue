<template>
  <div class="container">
      <img src="https://dog.ceo/img/dog-api-logo.svg" height="10%" width="10%">
      <p class="title is-4">DOG</p>

  <center>
    Show me a...  <select  v-model="getName"  class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="changeApi()">
            <option v-for="name in nameDog " >  {{  name }}  </option>
      </select>
  <div class="hero-body" v-for = "dog in dogs" >
        <img :src= 'dog'  width="350px">
  </div>

    </center>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: true,
      dogs: '',
      apiImage: '',
      showPic: 0,
      nameDog: '',
      getName: ''
    }
  },
  created () {
    this.changeApi()
    this.api = 'https://dog.ceo/api/breeds/list/all'
    fetch(this.api)
    .then((res) => { return res.json() })
    .then((res) => {
      this.nameDog = Object.keys(res.message)
      this.loading = false
    })
  },
  methods: {
    changeApi: function () {
      this.apiImage = 'https://dog.ceo/api/breed/' + this.getName + '/images'
      fetch(this.apiImage)
      .then((res) => { return res.json() })
      .then((res) => {
        this.dogs = res.message
        this.loading = false
      })
    },
    random: function () {
      this.showPic = Math.floor(Math.random() * this.dogs.length)
    }
  }
}
</script>

<style scoped>
    .list {
        float : left;
        margin : 20px;
    }
</style>
