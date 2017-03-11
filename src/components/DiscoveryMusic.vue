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
      <ul>
        <li v-for="songs in musicList" @click="getSong(songs)">
          <span>{{songs.name}}</span>
          <span>{{songs.ar[0].name}}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
  import Playing from './Playing'
  import NowPlaying from './NowPlaying'
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
      getSong(song){
        let songId = song.id;
        this.$store.dispatch('get',songId);

        let img = song.al.picUrl;
        let musicName = song.name;
        let singer = song.ar[0].name;

        let oldMusic={
          songId,
          img,
          singer,
          musicName,
        }
        this.$store.commit('addOldMusic', oldMusic)
        this.$store.commit('updateOldMusicList')
        let nowMusic ={
          img,
          musicName,
          singer
        }
        this.$store.commit('setNowMusic', nowMusic)
      }
    },
    components:{Playing,NowPlaying}
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

