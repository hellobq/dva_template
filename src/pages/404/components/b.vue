<template>
  <div id="app">
    {{ msg }}
    <p>这是vuex的demo: {{ name }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      msg: '404 - b'
    }
  },
  computed: {
    ...mapState({
      name: 'name'
    })
  }
}
</script>

<style lang="scss">
.hello {
  color: #000;
  transform: translateX(10px);
}
</style>
