<template>
  <div class="about">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'about page!'
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: purple;
}
</style>
