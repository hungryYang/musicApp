<template>
  <div>
    <header>
      <span>
         更多
        </span>
      <span>
         我的音乐
      </span>
      <span>
          <Playing></Playing>
      </span>
    </header>
    <main>
      <ul>
        <li v-for="oldMusic in oldMusicList" @click="getSong(oldMusic)">
          <span>{{oldMusic.musicName}}</span>
          <span>{{oldMusic.singer}}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
  import Playing from './Playing'
  export default {
    computed:{
      oldMusicList(){
        return this.$store.state.oldMusicList
      }
    },
    methods:{
      getSong(oldMusic){
        let songId = oldMusic.songId;
        this.$store.dispatch('get',songId);
      }
    },
    components:{Playing}
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  header
    span
      &:nth-child(2)
        text-align center
        font-size 2.5rem
  main
    height : 80vh
    overflow-y scroll
</style>

