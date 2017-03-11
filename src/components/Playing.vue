<template>
    <span @click='test'><i class="iconfont icon-yinle"></i></span>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      test(){
        this.$store.state.playingFlag = 'true'
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  a
    color white
</style>

