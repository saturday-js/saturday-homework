<template>
<div class="container">
  <div class="column is-multiline ">
        <h1 class="title is-1">World Time</h1>
        <h2 class="subtitle is-3">TimeZone</h2>
      </div>
      <input v-model="q" class="input-search " placeholder="Search CountryName">
  <div v-for = "i in filtertime" class="column is-multiline box">
    <div class= "Country"><b>Countrycode : </b> {{i.countryCode}}</div>
    <div class= "Country"><b>Country : </b> {{i.countryName}}</div>
    <div class= "Country"><b>Timezone : </b> {{i.timestamp}}</div>
  </div>
  <div v-for ="c in convert">
    {{c}}
  </div>
</div>
</template>

<script>
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  data () {
    return {
      q: '',
      isLoading: true,
      time: [],
      convert: [],
      id: 0
    }
  },
  created () {
    this.getData()
  },
  components: {
    PulseLoader
  },
  computed: {
    iscardNotFound () {
      return this.q !== '' && this.filtertime.length === 0
    },
    filtertime () {
      let regexp = new RegExp(this.q.toLowerCase(), 'g')
      return this.time.filter(i => {
        return regexp.test(i.countryName.toLowerCase())
      })
    }
  },
  methods: {
    getData () {
      axios.get('https://api.timezonedb.com/v2/list-time-zone?key=8F5PQB57SSLP&format=json'
      )
      .then((response) => {
        this.isLoading = false
        this.time = response.data.zones
        this.time.map(t => {
          t.timestamp = this.timeConverter(t.timestamp, t.gmtOffset)
        })
      })
    },
    timeConverter (timestamp, offset) {
      var a = new Date((timestamp - (-offset)) * 1000)
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      var year = a.getFullYear()
      var month = months[a.getMonth()]
      var date = a.getDate()
      var hour = a.getUTCHours() - 7
      var min = a.getMinutes()
      var sec = a.getSeconds()
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
      return time
    }
  }
}
</script>

<style scoped>
.input-search {
  font-size: 60px;
  border: 0px;
  padding: 10px;
  margin-bottom: 40px;
  color: #999;
}
.input-search:focus {
  outline:0;
  }
.input-search::-webkit-input-placeholder {
  color: #EEE;
}
.Country {
  padding-top: 10px;
  font-size: 20px;
}
.Country1 {
  font-size: 80px;
}
</style>