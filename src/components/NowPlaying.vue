<template>
  <div id="test">
    <button @click="close">x</button>
    <audio id="play" controls="controls">
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
        document.querySelector('audio').play()
      },500)
    },
    methods:{
      close(){
        this.$store.state.playingFlag = ''
      }
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  div#test
    position absolute
    width 100%
    height 100%
    right 0
    background-color black
    z-index 1
    #play
      width 100%
      position absolute
      bottom 0
      left 0
</style>

