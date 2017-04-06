<template>
  <div>
    <header>
        <span>

        </span>

        <span>

          <form @submit.prevent="searchSong">
              <i class="iconfont icon-sousuo_sousuo"></i>
            <input type="search" placeholder="搜索音乐" name="search_text" @keyup.enter='searchSong'>
          </form>

          <!--<button @click='searchSong'>搜索音乐</button>-->
        </span>

        <span>
          <Playing></Playing>
        </span>
    </header>
    <main>
      <ul v-if=musicList[0]>
        <li v-for="songs in musicList" @click="getSong(songs)">
          <span>{{songs.name}}</span>
          <span>{{songs.ar[0].name}}</span>
        </li>
      </ul>
      <div id="loading"v-else>
        请搜索您喜欢的音乐、歌手
      </div>
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
    updated(){
    },
    methods:{
      searchSong(){
        if(document.getElementsByName("search_text")[0].value ==''){
          document.querySelector("#loading").innerText='请输入想要搜索的内容。。。'
          return
        }
        if(document.querySelector("#loading")){
          document.querySelector("#loading").innerText='正在搜索...'
        }
        document.querySelector("button").innerText='正在搜索'
        var _song = "type=search"+"&limit=100" +"&s=" + document.getElementsByName("search_text")[0].value;
        this.$store.dispatch('search',_song).then(()=>{
          document.querySelector("button").innerText='搜索音乐'
        })

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
        button
          float:right
  main
    height 80vh
    overflow-y scroll
    ul
      >li
        padding: .5rem
        display flex
        justify-content space-between
        border-bottom 1px solid lightgrey
        &:last-child
          border none
</style>

