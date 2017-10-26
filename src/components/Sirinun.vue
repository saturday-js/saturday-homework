<template>
  <div class="container is-desktop">

<center><a class="link link--kukuri"  data-letters="HOT SPORT NEWS">HOT SPORT NEWS </a></center>
<div class="columns">
<div class="column is-4">
  <div class="card"  v-for="x in bbc">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="x.urlToImage" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="content">
            <h4>{{x.title}}<br></h4>
            <center><a :href="x.url" class="btn">Read More</a></center>
          </div>
      </div>
    </div>
  </div>
</div>
<div class="column is-4">
  <div class="card"  v-for="x in bible">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="x.urlToImage" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="content">
            <h4>{{x.title}}<br></h4>
            <center><a :href="x.url" class="btn">Read More</a></center>
          </div>
      </div>
    </div>
  </div>
</div>
<div class="column is-4">
  <div class="card"  v-for="x in fox">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="x.urlToImage" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="content">
            <h4>{{x.title}}<br></h4>
            <center><a :href="x.url" class="btn">Read More</a></center>
          </div>
      </div>
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
.btn {
  background: @teal;
  border-radius: 4px;
	box-shadow: 0 5px 5px 0 rgba(0,0,0,0.50);
  color: #B2BA6B;
  display: inline-block;
  padding: 6px 30px 8px;
  position: relative;
  text-decoration: none;
	transition: all 0.1s 0s ease-out;
}
.btn:hover {
  background: lighten(@teal,2.5);
  box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
  transform: translateY(-2px);
  transition: all 0.25s 0s ease-out;
}
.card{
  margin: 20px;
  box-shadow: 0 20px 31px rgba(0,0,0,0.30), 0 16px 16px rgba(0,0,0,0.30);
}
.card:hover {
  box-shadow: 0 30px 40px rgba(0,0,0,0.70), 0 30px 30px rgba(0,0,0,0.40);
}

.link {
	outline: none;
	text-decoration: none;
	position: relative;
	font-size: 8em;
	line-height: 1;
	color: #9e9ba4;
	display: inline-block;
}
.link--kukuri {
	text-transform: uppercase;
	font-weight: 900;
	overflow: hidden;
	line-height: 0.75;
	color: #b2b0a9;
}

.link--kukuri:hover {
	color: #b2b0a9;
}

.link--kukuri::after {
	content: '';
	position: absolute;gi
	height: 16px;
	width: 100%;
	top: 50%;
	margin-top: -8px;
	right: 0;
	background: #F9F9F9;
	transform: translate3d(-100%,0,0);
	transition: transform 0.4s;
	transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}

.link--kukuri:hover::after {
	transform: translate3d(100%,0,0);
}

.link--kukuri::before {
	content: attr(data-letters);
	position: absolute;
	z-index: 2;
	overflow: hidden;
	color: #424242;
	white-space: nowrap;
	width: 0%;
	transition: width 0.4s 0.3s;
}

.link--kukuri:hover::before {
	width: 100%;
}
</style>
