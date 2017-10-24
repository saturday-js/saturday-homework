<template>
  <div>
  <div class="container">
    <h1 class="title is-3">Find Location From ip Address</h1>
    <div class="columns">
      <div class="column is-6">
        <ul class="box">
          <h1 class="title is-4">Now you</h1>
          <li><b>IP : </b>{{location.ip}}</li>
          <li><b>Latitude : </b>{{location.latitude}}</li>
          <li><b>Longitude : </b>{{location.longitude}}</li>
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
            <li><b>IP : </b>{{foundLocation.ip}}</li>
            <li><b>Latitude : </b>{{foundLocation.latitude}}</li>
            <li><b>Longitude : </b>{{foundLocation.longitude}}</li>
            <li>{{foundLocation.org}}</li>
            <li>{{foundLocation.region}} {{foundLocation.country_name}}</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
  <br>
  <br>
    <center>
      <div class="box column is-6">
        <gmap-map :center="center" :zoom="7" style="width: 500px; height: 300px">
          <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
        </gmap-map>
      </div>
   </center>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAdTt1CEiELNaqxvQl7sgeHnpy9VskiosY',
    v: 'OPTIONAL VERSION NUMBER'
  }
})
export default {
  data () {
    return {
      ip: '',
      location: [],
      foundLocation: [],
      center: {lat: 13.754, lng: 100.5014},
      markers: [{
        position: {lat: 13.754, lng: 100.5014}
      }]
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
        this.center.lat = this.foundLocation.latitude
        this.center.lng = this.foundLocation.longitude
        this.markers[0].position.lat = this.foundLocation.latitude
        this.markers[0].position.lng = this.foundLocation.longitude
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
