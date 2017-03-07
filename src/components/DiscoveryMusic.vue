<template>
  <div>
    <header>
        <span>
          <i class="iconfont icon-tinggeshiqu"></i>
        </span>
        <span>
          <i class="iconfont icon-sousuo_sousuo"></i>
          <input type="search" placeholder="搜索音乐、歌词、电台">
        </span>
        <span>
          <Playing></Playing>
        </span>
    </header>
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
</style>

