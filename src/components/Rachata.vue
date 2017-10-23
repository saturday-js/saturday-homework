<template>
  <div class="container">
      <img src="https://www.inboxsdk.com/images/logos/giphy.png" width="200px">
      <p class="title is-4">Giphy Search gif</p>
      <center>
         <input type="text" v-model="query" class="input primary outline" style="width : 50%">
         <button @click="Search()" class="button is-danger is-outlined">Search</button>
      </center>
      <div class="hero-body">
        <p v-if="loading" class="title is-4">กำลังโหลดอยู่ ใจเย็นๆนะจ๊ะ......</p>
        <div v-for="a in gifs">
            <img :src="a.images.fixed_height.url" alt="" class="box list"> 
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      query: 'Hello',
      gifs: []
    }
  },
  created () {
    fetch('http://api.giphy.com/v1/gifs/search?q=hello&api_key=259P1wkSOIVS3bOLvH4Ve8t38Pt4uTN5')
    .then((res) => { return res.json() })
    .then((res) => {
      this.gifs = res.data
      this.loading = false
    })
  },
  methods: {
    Search () {
      this.gifs = []
      this.loading = true
      fetch('http://api.giphy.com/v1/gifs/search?q=' + this.query + '&api_key=259P1wkSOIVS3bOLvH4Ve8t38Pt4uTN5')
    .then((res) => { return res.json() })
    .then((res) => {
      this.gifs = res.data
      this.loading = false
    })
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