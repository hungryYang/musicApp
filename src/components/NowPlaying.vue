<template>
  <div id="NowPlaying" >
    <header >
      <button @click="close">x</button>
      <span>{{nowPlay.musicName}}</span>
      <span>{{nowPlay.singer}}</span>
    </header>
    <div id="test">aaaa</div>
    <audio id="play"  controls="controls">
      <source :src="mp3">
    </audio>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed:{
      mp3(){
        return this.$store.state.mp3
      },
      nowPlay(){
        return this.$store.state.nowPlay
      }
    },
    updated:function(){
      var _this=this;
      setTimeout(function(){
        var audio = document.getElementById('play');
        audio.setAttribute('src',_this.$store.state.mp3)
      },500)
      document.querySelector('#test').style.background = 'url('+this.$store.state.nowPlay.img+')'+' repeat-x'
      document.querySelector('#test').style.backgroundSize = 'contain'
      // document.querySelector('#test').style.backgroundPosition = '1%'
    },
    methods:{
      close(){
        this.$store.state.playingFlag = ''
      }
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  div#NowPlaying
    position absolute
    width 100%
    height 100%
    right 0
    z-index 1
    background-color white
    #play
      width 100%
      position absolute
      bottom 0
      left 0
    #test
      height 70vh
</style>

