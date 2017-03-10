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
        <li>
          <div>{{songs.name}}</div>
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
      count(){
        return this.$store.state.count
      }
    },
    methods:{
      searchSong(){
        var _song = "type=search" +"&s=" + document.getElementsByName("search_text")[0].value;
        this.$store.dispatch('search',_song)
      },
      add(){
        this.$store.commit('increment')
        console.log(this.$store.state.musicList)
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
          width : 90%
          line-height 4rem
          font-size 4rem
          outline:none
  main
    height 80vh
    overflow-y scroll
</style>

