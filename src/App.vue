<template>
  <div id="app">
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
              <span>我的音乐</span>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'app',

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
  font-size 2rem
  .iconfont
    font-size 4rem
  header
    background-color rgb(180,11,11)
    color white
    padding 3rem 2rem 1rem 2rem
    display flex
    align-items baseline
    span
      border .1rem solid transparent
      display inline-block
      &:nth-child(2)
        flex-grow 1
        margin 0 2rem
  footer
    background-color rgb(42,42,42)
    width 100%
    position absolute
    bottom 0
    ul
      padding-left 0
      text-align : center
      margin 0
      color white
      padding 2rem 0
      display flex
      justify-content space-around
      li
        display inline-block
        a
          color white
          text-decoration none
          span
            display block
</style>
