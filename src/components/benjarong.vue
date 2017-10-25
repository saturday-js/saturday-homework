<template>
  <div class="container">

      <img src="https://dog.ceo/img/dog-api-logo.svg" height="10%" width="10%">
      <p class="title is-4">DOG</p>
  <center>
         <!-- <select class="input primary outline"> -->
            <button value="AFFENPINSCHER"  class="button is-small"@click="changeApi('https://dog.ceo/api/breed/affenpinscher/images')">AFFENPINSCHER</button>
            <button value="AFRICAN"  class="button is-small"@click="changeApi('https://dog.ceo/api/breed/african/images')">AFRICAN</button>
            <button value="AIREDALE"  class="button is-small"@click="changeApi('https://dog.ceo/api/breed/airedale/images')">AIREDALE</button>
            <button value="AKITA"  class="button is-small"@click="changeApi('https://dog.ceo/api/breed/akita/images')">AKITA</button>
            <button value="APPENZELLER"  class="button is-small"@click="changeApi('https://dog.ceo/api/breed/appenzeller/images')">APPENZELLER</button>
            <button value="BASENJI" class="button is-small" @click="changeApi('https://dog.ceo/api/breed/basenji/images')">BASENJI</button>
            <button value="BEAGLE"  class="button is-small"@click="changeApi('https://dog.ceo/api/breed/beagle/images')">BEAGLE</button>
            <button value="BORZOI" class="button is-small" @click="changeApi('https://dog.ceo/api/breed/borzoi/images')">BORZOI</button>
            <button value="BOUVIER"  class="button is-small"@click="changeApi('https://dog.ceo/api/breed/bouvier/images')">BOUVIER</button>
            <button value="BOXER"  class="button is-small"@click="changeApi('https://dog.ceo/api/breed/boxer/images')">BOXER</button>
         <!-- </select> -->

      <div class="hero-body">
        <img :src=dogs[showPic]  > </br></br>
      </div>

      <button type="button"@click="random()"class="button is-danger is-outlined">>More of this breed</button>

    </center>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      dogs: '',
      api: 'https://dog.ceo/api/breed/affenpinscher/images',
      showPic: 0
    }
  },
  // created () {
  //   changeApi('')
  // },
  methods: {
    changeApi: function (api) {
      this.api = api
      fetch(this.api)
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
