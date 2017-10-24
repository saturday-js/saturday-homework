<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <ul class="box">
          <h1 class="title is-4">Now you</h1>
          <li>IP : {{location.ip}}</li>
          <li>Latitude : {{location.latitude}}</li>
          <li>Longitude : {{location.longitude}}</li>
          <li>{{location.org}}</li>
          <li>{{location.region}} {{location.country_name}}</li>
        </ul>
      </div>
      <div class="column is-6">
        <ul class="box">
          <input type="text" name="" v-model="ip" value="" class="input is-danger " placeholder="IPv4 Address" style="width : 60%">
          <button type="button" name="button" class="button is-danger is-outlined" @click="find()">Find location</button>
          <br>
          <br>
          <div v-if="foundLocation.error === true">
            <h1 class="title is-4">{{foundLocation.reason}}</h1>
          </div>
          <div v-else="">
            <h1 class="title is-4">Location for {{ip}}</h1>
            <li>IP : {{foundLocation.ip}}</li>
            <li>Latitude : {{foundLocation.latitude}}</li>
            <li>Longitude : {{foundLocation.longitude}}</li>
            <li>{{foundLocation.org}}</li>
            <li>{{foundLocation.region}} {{foundLocation.country_name}}</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      ip: '',
      location: [],
      foundLocation: []
    }
  },
  created () {
    fetch('//ipapi.co/json/')
    .then((res) => { return res.json() })
    .then((res) => {
      this.location = res
    })
  },
  methods: {
    find () {
      fetch('//ipapi.co/' + this.ip + '/json/')
      .then((res) => { return res.json() })
      .then((res) => {
        this.foundLocation = res
      })
    }
  },
  computed: {
  }
}
</script>

<style scoped>
    .list {
        float : left;
        margin : 20px;
    }
</style>
