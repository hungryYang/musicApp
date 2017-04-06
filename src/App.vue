<template>
  <div id="app">
    <transition name="bounce">
      <div v-show="playingFlag" id="nowPlaying">
        <NowPlaying></NowPlaying>
      </div>
    </transition>
    <router-view></router-view>
    <footer>
      <ul>
        <li>
          <router-link to="/discovery">
             <span>
              <i class="iconfont icon-wangyiyunyinlezizhi"></i>
            </span>
            <span>发现音乐</span>
          </router-link>
        </li>
        <li>
          <router-link to="/mymusic">
              <span>
                <i class="iconfont icon-iconupload"></i>
              </span>
              <span>最近播放</span>
          </router-link>
        </li>
        <!--<li>-->
          <!--<router-link to="/friends">-->
              <!--<span>-->
                <!--<i class="iconfont icon-19"></i>-->
              <!--</span>-->
            <!--<span>朋 友</span>-->
          <!--</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/account">-->
              <!--<span>-->
                <!--<i class="iconfont icon-zhanghao"></i>-->
              <!--</span>-->
            <!--<span>账 号</span>-->
          <!--</router-link>-->
        <!--</li>-->
      </ul>
    </footer>
  </div>
</template>

<script>
import 'normalize.css'
import store from './store/index'
import NowPlaying from './components/NowPlaying'
export default {
  name: 'app',
  created(){
    let oldMusicList = localStorage.getItem('oldMusicList')
    if(oldMusicList){
      oldMusicList = JSON.parse(oldMusicList)
      this.$store.commit('loadOldMusic',oldMusicList)
    }
  },
  computed:{
    playingFlag(){
      return this.$store.state.playingFlag
    }
  },
  store,
  components:{NowPlaying}
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
*
  box-sizing border-box
html,body
  font-size 10px
ul,li
  padding 0
  list-style none
#app
  height  100vh
  overflow hidden
  position relative
  font-size 1.6rem
  .iconfont
    font-size 2rem
  header
    background-color rgb(180,11,11)
    color white
    padding 2rem 2rem
    display flex
    align-items center
    height 10vh
    span
      border .1rem solid transparent
      display inline-block
      &:nth-child(2)
        flex-grow 1
        margin 0 2rem
  main
    height 80vh
  footer
    background-color rgb(42,42,42)
    width 100%
    position absolute
    bottom 0
    height 10vh
    ul
      padding-left 0
      text-align : center
      margin 0
      color white
      padding 1rem 0
      display flex
      justify-content space-around
      height inherit
      align-items center
      li
        display inline-block
        a
          color white
          text-decoration none
          span
            display block
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes bounce-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
