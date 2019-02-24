<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'sassdds'
    }
  },
  methods: {
    testFn () {

      const b = 100
      return b
    }
  }
}
</script>

<style scoped lang="scss">
.hello {
  color: #000;
  transform: translateX(100px);
}
</style>
