<template>
  <div class="home-header">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  font-size: 16px;
}
</style>
