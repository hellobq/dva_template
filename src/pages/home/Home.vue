<template>
  <div class="home">
    <!-- <home-header /> -->
    {{ msg }}
  </div>
</template>

<script>
export default {
  components: {
    // HomeHeader: () => import(/* webpackChunkName: "HomeHeader" */ './components/Header')
  },
  data () {
    return {
      msg: 'home page!'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: skyblue;
}
</style>
