<template>
  <div class="app">
    {{ msg }}
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'about'
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
  transform: translateX(10px);
}
</style>
