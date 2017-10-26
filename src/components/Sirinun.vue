<template>
  <div class="container is-desktop">
<center>
<p class="title is-1">HOT SPORT NEWS</p><br><br>
</center>
<div class="columns">
  <div class="column is-4">
    <p class="title is-4">BBC SPORT</p>
      <div class="" v-for="x in bbc">
          <div class="box" style=" background: #E9B4E2">
              <img :src="x.urlToImage" alt=""><br><br>
              {{x.title}}
              <a :href="x.url">See more</a><br><br>
          </div>
      </div>
  </div>
  <div class="column is-4">
    <p class="title is-4">BIBLE SPORT</p>
      <div class="" v-for="c in bible">
          <div class="box" style=" background: #B4B8E9">
              <img :src="c.urlToImage" alt=""><br><br>
              {{c.title}}
              <a :href="c.url">See more</a>
              <br><br>
          </div>
      </div>
  </div>
  <div class="column is-4">
    <p class="title is-4">FOX SPORT</p>
      <div class="" v-for="z in fox">
          <div class="box" style=" background: #B4E9D8">
              <img :src="z.urlToImage" alt=""><br><br>
              {{z.title}}
              <a :href="z.url">See more</a><br><br>
          </div>
      </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      fox: [],
      bbc: [],
      bible: []
    }
  },
  created () {
    fetch('//newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=392accf1840b4b61aae95512db845676')
    .then((res) => { return res.json() })
    .then((res) => {
      this.bbc = res.articles
    })
    fetch('//newsapi.org/v1/articles?source=the-sport-bible&sortBy=top&apiKey=392accf1840b4b61aae95512db845676')
    .then((res) => { return res.json() })
    .then((res) => {
      this.bible = res.articles
    })
    fetch('//newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=392accf1840b4b61aae95512db845676')
    .then((res) => { return res.json() })
    .then((res) => {
      this.fox = res.articles
    })
  },
  methods: {
  }
}
</script>
<style scoped>
.box {
    margin: 5px;
    padding: 7px;
    font-size: 16px;
    float: left;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}
.box {
    position: relative;
    padding: 5px;
    width: 400px; height:auto;
    cursor:pointer;
}
</style>
