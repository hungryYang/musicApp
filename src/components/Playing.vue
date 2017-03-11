<template>
    <span @click='show'><i class="iconfont icon-yinle"></i></span>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      show(){
        this.$store.state.playingFlag = 'true'
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  a
    color white
</style>

