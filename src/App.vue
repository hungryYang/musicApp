<template>
  <div id="app">
    <!--<header></header>-->
    <footer>
      <ul>
        <li>
          <router-link to="/discovery">
             <span>
              <i class="iconfont icon-wangyiyunyinlezizhi-copy"></i>
            </span>
            <span>发现音乐</span>
          </router-link>
        </li>
        <li>
          <router-link to="/mymusic">
              <span>
                <i class="iconfont icon-iconupload"></i>
              </span>
              <span>我的音乐</span>
          </router-link>
        </li>
        <li>
          <router-link to="/friends">
            <span>
              <i class="iconfont icon-19"></i>
            </span>
            <span>朋 友</span>
          </router-link>
        </li>
        <li>
          <router-link to="/account">
            <span>
             <i class="iconfont icon-account"></i>
            </span>
            <span>账 号</span>
          </router-link>
        </li>
      </ul>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'app'
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
*
  box-sizing border-box
html,body
  font-size 10px
#app
  height  100vh
  overflow hidden
  position relative
  header
    background-color rgb(42,42,42)
    width 100%
    height 8rem
    position fixed
  footer
    background-color rgb(180,11,11)
    width 100%
    height 8rem
    position fixed
    bottom 0
    ul
      padding-left 0
      padding-top 1rem
      text-align : center
      margin 0
      color white
      font-size 1.6rem
      li
        display inline-block
        width 24%
        a
          color white
          text-decoration none
          span
            display block
            .iconfont
              font-size 4rem
</style>
