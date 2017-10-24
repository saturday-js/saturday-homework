<template>
  <div class="container">
    <div class="columns">
      <div class="columns is-narrow">
        <img src="https://i.pinimg.com/originals/95/13/5e/95135e0281c333a034c004488c05c7e1.jpg" alt="" width="200px">
      </div>
      <div class="collumns is-narrow">
        <h1 class="title is-1" style=""> &nbsp&nbsp Guide for bodybuilders </h1>
      </div>
    </div>
    <input type="text" v-if="results.length >= 0" v-model="q" class="input-search" placeholder="Search Engine">
    <div v-if="isPlayersNotFound" class="has-text-centered">
      <h1 class="title is-1">☹️</h1>
      <h1 class="title is-1">Not Found!</h1>
      <br><br><br><br><br><br><br><br>
    </div>
    <div class="columns is-multiline">
      <div v-for="result in filterMuscles" :key="result.id" class="column is-3">

          <div class="player">

            <div class="player-name">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <p style="font-family: 'Times New Roman';font-size: 30px;color: blue;">
                  {{result.id}}.{{result.name}}
                </p>
              </a>
            </div>
            <div  v-if="result.name == 'Biceps brachii'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Biceps_brachii.png/250px-Biceps_brachii.png" alt="" width="200px">
              </a>
            </div>
             <div  v-if="result.name == 'Anterior deltoid'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Deltoideus.png" alt="" width="200px">
              </a>
            </div>
             <div  v-if="result.name == 'Serratus anterior'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Serratus_anterior.png/250px-Serratus_anterior.png" alt="" width="200px">
              </a>
            </div>
            <div  v-if="result.name == 'Pectoralis major'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pectoralis_major.png/120px-Pectoralis_major.png" alt="" width="200px">
              </a>
            </div>
            <div  v-if="result.name == 'Triceps brachii'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Triceps_brachii.png" alt="" width="200px">
              </a>
            </div>
            <div  v-if="result.name == 'Rectus abdominis'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Rectus_abdominis.png" alt="" width="200px">
              </a>
            </div>
            <div  v-if="result.name == 'Gastrocnemius'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://www.physiospot.com/wp-content/uploads/2014/05/Gastrocnemius-e1504116626905.png" alt="" width="200px">
              </a>
            </div>
            <div  v-if="result.name == 'Gluteus maximus'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Gluteus_maximus.png" alt="" width="200px">
              </a>
            </div>
            <div  v-if="result.name == 'Trapezius'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Trapezius.png/250px-Trapezius.png" alt="" width="200px">
              </a>
            </div>
            <div  v-if="result.name == 'Quadriceps femoris'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="http://bodybuilding-wizard.com/wp-content/uploads/2014/12/quadriceps-anatomy.jpg" alt="" width="200px">
              </a>
            </div>
             <div  v-if="result.name == 'Biceps femoris'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="http://www.cram.com/images/upload-flashcards/921975/679576_m.png" alt="" width="200px">
              </a>
            </div>
             <div  v-if="result.name == 'Latissimus dorsi'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Latissimus_dorsi.png" alt="" width="200px">
              </a>
            </div>
             <div  v-if="result.name == 'Brachialis'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://static1.squarespace.com/static/560aab3be4b02465d41010de/t/58c2c6e9414fb50164f9c352/1489159913478/biceps-brachii-brachialis-brachioradialis.jpeg?format=1500w" alt="" width="200px">
              </a>
            </div>
             <div  v-if="result.name == 'Obliquus externus abdominis'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Gray395.png/220px-Gray395.png" alt="" width="200px">
              </a>
            </div>
             <div  v-if="result.name == 'Soleus'">
              <a :href="`//en.wikipedia.org/wiki/${result.name}`" target="_blank">
                <img src="http://palpate.com.au/wp-content/uploads/2016/11/Soleus.jpg" alt="" width="200px">
              </a>
            </div>
            <div>
              <br>
                <a v-if="result.name == 'Biceps brachii'" :href="`http://www.muscle.in.th/exercise/biceps`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Anterior deltoid'" :href="`http://www.muscle.in.th/exercise/shoulders`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Serratus anterior'" :href="`http://www.muscle.in.th/exercise/abdominal/twisting-sit-up`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Pectoralis major'" :href="`http://www.muscle.in.th/exercise/chest`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Triceps brachii'" :href="`http://www.muscle.in.th/exercise/triceps`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Rectus abdominis'" :href="`http://www.muscle.in.th/exercise/abdominal`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Gastrocnemius'" :href="`http://www.muscle.in.th/exercise/calves`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Gluteus maximus'" :href="`http://www.muscle.in.th/exercise/legs`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Trapezius'" :href="`http://planforfit.com/5-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%9D%E0%B8%B6%E0%B8%81-%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87/`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Quadriceps femoris'" :href="`http://www.muscle.in.th/exercise/legs`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Biceps femoris'" :href="`http://www.muscle.in.th/exercise/biceps`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Latissimus dorsi'" :href="`http://www.muscle.in.th/exercise/back/dumbbell-row`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Brachialis'" :href="`http://www.muscle.in.th/exercise/biceps/hammer-curl`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Obliquus externus abdominis'" :href="`http://planforfit.com/4-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87/`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>
                <a v-if="result.name == 'Soleus'" :href="`http://www.muscle.in.th/exercise/calves/standing-calf-raise`" target="_blank">
                  <button class="buttonss">How to play?</button>
                </a>

              <br><br>
            </div>
          </div>

      </div>
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
      results: [],
      imm: 'biceps'
    }
  },
  components: {
    PulseLoader
  },
  created () {
    this.getData()
  },
  computed: {
    isPlayersNotFound () {
      return this.q !== '' && this.filterMuscles.length === 0
    },
    filterMuscles () {
      let regexp = new RegExp(this.q.toLowerCase(), 'g')
      return this.results.filter(re => {
        return regexp.test(re.name.toLowerCase()) || regexp.test(re.id)
      }).sort((a, b) => a.id - b.id)
    }
  },
  methods: {
    getData () {
      axios.get('//wger.de/api/v2/muscle/?format=json').then((response) => {
        this.results = response.data.results
      })
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
  border-bottom: 2px solid black;

}
.input-search:focus {
  outline:0;
  }
.input-search::-webkit-input-placeholder {
  color: #EEE;
}
.player {
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: #FFF;
  background-image: url(https://ak7.picdn.net/shutterstock/videos/13462517/thumb/1.jpg);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.player:hover {
  box-shadow: 0 10px 18px -9px rgba(0,21,56,.43);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
.player-name {
  padding-top: 10px;
  font-size: 20px;
}
.player-jersey-number {
  font-size: 80px;
}
.buttonss {
    background-color: #4CAF50; /* Green */
    border: none;
    color: blue;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
}
</style>
