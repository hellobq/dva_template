<template>
  <div id="app">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '404 - a'
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
