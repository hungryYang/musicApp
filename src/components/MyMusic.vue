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
        <li>
          <span>
            <i class="iconfont icon-download"></i>
          </span>
          <span>
            <span>下载音乐</span>
            <span>0<i class="iconfont icon-gengduo"></i></span>
          </span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-dingshiguanbi"></i>
          </span>
          <span>
            <span>最近播放</span>
            <span>0<i class="iconfont icon-gengduo"></i></span>
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
  import Playing from './Playing'
  export default {
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
    ul
      li
        display flex
        align-items center
        >span:nth-child(2)
          width : 80%
          display inline-flex
          align-items center
          justify-content space-around
</style>

