<template>
  <div id="NowPlaying" >
    <div id="header">
      <div @click="close"><</div>
      <div>
        <div>{{nowPlay.musicName}}</div>
        <div>{{nowPlay.singer}}</div>
      </div>
      <div></div>
    </div>
    <div id="backImg">
      
    </div>
    <audio id="play" loop autoplay controls="controls">
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
      document.querySelector('#backImg').style.background = 'url('+this.$store.state.nowPlay.img+')'+' repeat-x'
      document.querySelector('#backImg').style.backgroundSize = 'contain'
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
    background url("../assets/back.png")
    #header
      padding 3rem 2rem
      color white
      display flex
      justify-content space-between
      align-items center
      background-color rgba(56,54,53,1)
      border-bottom 1px solid black
      text-align center
    #play
      width 100%
      position absolute
      bottom 0
      left 0
    #backImg
      height 70vh
      margin-top 3rem
</style>

