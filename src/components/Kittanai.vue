<template>
  <div class="container">

    <div class="columns">
      <div class="column is-narrow">
        <img src="http://www.estoniantrader.com/wp-content/uploads/2016/03/Bitcoin1.png" alt="" width="250px">
      </div>
      <div class="column is-narrow">
        <h1 class="title is-1">Bitcoin Price</h1>
        <h2 class="subtitle is-3">Check Bitcoin Price</h2>
      </div>
    </div>
    <center>
<div class="columns">
  <div class="column is-half is-offset-one-quarter">
   <h1 class="title is-1">Name    </h1>
   <h2 class="subtitle is-3"> {{cryptoName}} </h2>
   <h1 class="title is-1"> Price   </h1>
   <h2 class="subtitle is-3">{{cryptoPrice}} </h2>
   </div>
</div>

<div class="columns box" >
  <div class="column is-four-fifths">
      <div v-for="(coin,index) in allData" class="btn">
            <input type="button" @click="showData(index)" name="" :value="`${coin.id}`">
        <!-- Last Price {{coin.price_usd}} USD -->
      </div>
    </div>
</div>
</center>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      api: 'https://api.coinmarketcap.com/v1/ticker/?limit=10',
      allData: '',
      cryptoName: '',
      cryptoPrice: ''
    }
  },
  components: {
  },
  created () {
    this.getName()
  },
  computed: {
  },
  methods: {
    getName: function () {
      fetch(this.api)
      .then((res) => { return res.json() })
      .then((res) => {
        this.allData = res
        this.loading = false
      })
    },
    showData: function (index) {
      this.cryptoName = this.allData[index].name
      this.cryptoPrice = this.allData[index].price_usd
    }
  }
}
</script>

<style scoped>
.btn {
  width: 8%;
  float:left;
  margin-left: 10%;
}
</style>
