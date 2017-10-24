<template>
  <div class="container">
    <h1 class="title is-1">👩‍💻 👨‍💻 Saturday Homeworks.</h1>
    <iframe src="https://ghbtns.com/github-btn.html?user=saturday-js&repo=saturday-homework&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
    <br><br>
    <table class="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>รหัสนักศึกษา</th>
          <th>ชื่อ-นามสกุล</th>
          <th>การบ้าน</th>
        </tr>
      </thead>
      <tbody>
         <tr>
          <td>5806021631033</td>
          <td>ณัฐกิตติ์ จะมะนุ</td>
          <td>
            <router-link to="/nuttakit">Guide for bodybuilders</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
