<template>
  <div class="container">

    <div class="columns">
      <div class="column is-narrow">
        <img src="//www.codebee.co.th/labs/wp-content/uploads/2017/02/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3-gif-animation.gif" alt="" width="100px">
      </div>
      <div class="column is-narrow">
        <h1 class="title is-1">Gif search</h1>
        <h2 class="subtitle is-3">result : {{key}}</h2>
      </div>
    </div>
    <input v-model="key" class="input-search" @keyup="getData" placeholder="Search Gif">
    <div v-if="isgifsNotFound" class="has-text-centered">
      <h1 class="title is-1">☹️</h1>
    </div>
      <a :href="gif.source_post_url" v-for="gif in searchdata" :key="gif.id"><img class="result" :src="gif.images.fixed_height.url" alt=""></a>



    <div v-if="isLoading" class="has-text-centered">
      <br><br><br><br>
      <pulse-loader :loading="true" :color="'#F00'"></pulse-loader>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  data () {
    return {
      key: '',
      isLoading: true,
      gifs: []
    }
  },
  components: {
    PulseLoader
  },
  created () {
    this.getData()
  },
  computed: {
    isgifsNotFound () {
      return this.key !== '' && this.searchdata.length === 0
    },
    searchdata () {
      return this.gifs
    }
  },
  methods: {
    getData () {
      console.log(this.key)
      var keysearch = this.key
      if (this.key === '') {
        keysearch = 'fuck'
      }
      axios.get('//api.giphy.com/v1/gifs/search', {
        params: {
          'api_key': 'NXb6w2HNGCqMaW2UFUIo8t2lLKfE6XBN',
          'q': keysearch
        }
      }).then((response) => {
        this.isLoading = false
        this.gifs = response.data.data
      }).catch((error) => {
        this.isLoading = false
        this.showErrorMsg(error.message)
      })
      return this.gifs
    },
    showErrorMsg (error) {
      this.$toast.open({
        duration: 1000 * 60 * 5,
        message: `${error}`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    }
  }
}
</script>

<style scoped>
.result {
  margin: 3px;

}
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
.gif {
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: #FFF;
  background: #F00;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.gif:hover {
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
.gif-name {
  padding-top: 10px;
  font-size: 20px;
}
.gif-jersey-number {
  font-size: 80px;
}
</style>
