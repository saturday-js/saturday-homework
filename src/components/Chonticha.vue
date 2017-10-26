<template>
  <div class="container">
    <img src="https://cdn.pixabay.com/photo/2015/06/25/15/50/champagne-glasses-821435_960_720.jpg" width="200px">
    <div class="im">
      <b>
        Review Dink
      </b>
    </div>
      <div class="imi">
      <h2>
        รีวิวเครื่องดื่มจาก >> Energy Crisis
      </h2>
     </div>
     <br>
     <br>
     <hr noshade>
 <div class="columns is-multiline">
    <ul v-for="food in dinks" class="column is-4">
      <div class="file is-large is-boxed is-dark">
      <span class="file-cta">
        <div class="dink">
        <div class="dink-name">
          <p Align=center>{{food.product}}</p>
        </div>
        <br>
        <center><a class="button is-warning"><a :href="`//www.youtube.com/watch?v=${food.videoCode}`" target="_blank">
          <div class="dink-font">Review</div></a่></a></center>
      </div>
      </span>
    </div>
   </ul>
</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dinks: []
    }
  },
  created () {
    fetch('//thereportoftheweek-api.herokuapp.com/reports')
    .then((res) => { return res.json() })
    .then((res) => {
      this.dinks = res
      console.log(this.dinks)
    })
  }
}
</script>
<style scoped>
.dink {
width:100px;
height:100px;
margin-left:40px;
margin-right: 80px;
}
.dink-name {
  font-size: 18px;
  font-family:supermarket;
  margin-left: -40px;
}
.dink-font {
  font-size: 20px;
  font-family:supermarket;
  color: #1c1c1c;
}
.im {
  font-size: 60px;
  font-family:supermarket;
  color: #FFCC33;
  margin-top: -160px;
  margin-left: 220px;
}
.imi {
  font-size: 22px;
  font-family:supermarket;
  color: #1c1c1c;
  margin-left: 220px;
}

</style>
