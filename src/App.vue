<template>
  <div id="app">
    <top-body></top-body>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBody from './components/TopBody'

export default {
  components:{
    TopBody
  }
}
</script>

<style lang="stylus">
@import '../src/assets/style/style.styl'

</style>


