<template>
  <div class="container" id="app">
    <section class="section">
      <router-view/>
    </section>

  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body {
  overflow-x: hidden;
}
#app {
    padding-top: 20px
  }
</style>
