<template>
  <div>
    <audio id="play" autoplay controls="controls">
      <source :src="mp3">
    </audio>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed:{
      mp3(){
        return this.$store.state.mp3
      }
    },
    updated:function(){
      var _this=this;
      setTimeout(function(){
        var audio = document.getElementById('play');
        audio.setAttribute('src',_this.$store.state.mp3)
      },1000)
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  div
    position absolute
    width 100%
    height 100%
    background-color black
    right 0
    z-index 1
    #play
      width 100%
</style>

