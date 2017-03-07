<template>
  <div>
    nowplaying
    <input type=button value=后退 onclick="window.history.go(-1)">
  </div>

</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  div
    color white
    background-color black
    height 100vh
    width 100%
    position absolute
    z-index:1
</style>

