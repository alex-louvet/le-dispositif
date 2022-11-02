<template>
  <div class="container">
    <div class="banner">
      <router-link to="/"><img src="../static/banner.png" alt="Le Dispositif"></router-link>
    </div>
    <div class="timer-background">
      <span class="timer">{{ timer.days }}j {{ timer.hours }}h {{ timer.minutes }}min {{ timer.seconds }}s avant le prochain podcast</span>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'Banner',
  data() {
    return {
      time: null,
      
    }
  },
  computed: {
    timer() {
      let temp = new Date(this.newPodcast() - this.time)
      return {
        seconds: temp.getSeconds(),
        minutes: temp.getMinutes(),
        hours: temp.getHours(),
        days: temp.getDate() - 1
      }
    }
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => (this.time = new Date()), 1000);
    },
    newPodcast() {
      let start = new Date("2022-10-31T06:00:00.000+01:00");
      while (start < new Date()){
        start.setDate(start.getDate() + 14)
      }
      return start
    }
  },
  mounted() {
    this.startTimer();
  }
}
</script>

<style>
.container {
  height: 210px;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  margin-bottom:210px;
  z-index: 100;
}

.banner {
  background-color: #EB661B;
  height: 170px;
  text-align: center;
}

.banner img {
  display: inline-block;
  padding-top: 10px;
  width: min(98%, 500px);
  max-height: 160px;
}

.timer-background {
  position: absolute;
  top: 175px;
  height: 30px;
  width: 100%;
  text-align: center;
}

.timer {
  background-color: #07708f;
  color: white;
  padding: 5px;
}
</style>
