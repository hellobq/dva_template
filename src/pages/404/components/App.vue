<template>
  <div id="app">
    <router-link to="/a">
      a页面
    </router-link>
    <router-link to="/b">
      b页面
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '404'
    }
  }
}
</script>

<style lang="scss">
.hello {
  color: #000;
  transform: translateX(10px);
}
</style>
