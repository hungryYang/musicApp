<template>
  <div>
    <header>
        <span>
          <i class="iconfont icon-tinggeshiqu"></i>
        </span>
        <span>
          <i class="iconfont icon-sousuo_sousuo"></i>
          <input type="search" placeholder="搜索音乐、歌词、电台" name="search_text" @keyup.enter='searchSong'>
        </span>
        <span>
          <Playing></Playing>
        </span>
    </header>
    <main>
      <ul v-for="songs in musicList">
        <li @click="getSong(songs.id)">
          <span>{{songs.name}}</span>
          <span>{{songs.ar[0].name}}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
  import Playing from './Playing'

  export default {
    name:'DiscoverMusic',
    computed:{
      musicList(){
        return this.$store.state.musicList
      },
      mp3(){
        return this.$store.state.mp3
      }
    },
    methods:{
      searchSong(){
        var _song = "type=search" +"&s=" + document.getElementsByName("search_text")[0].value;
        this.$store.dispatch('search',_song)
      },
      getSong(songId){
        let song = this.$store.state.mp3
        this.$store.dispatch('get',songId);
        console.log(song)
      }
    },
    components:{Playing}
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  header
    span
      &:nth-child(2)
        border 1px solid transparent
        border-radius .5rem
        background-color white
        vertical-align middle
        color lightgray
        input
          display inline-block
          border none
          padding 0
          width : 80%
          line-height 2rem
          font-size 2rem
          outline:none
  main
    height 80vh
    overflow-y scroll
</style>

