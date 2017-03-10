<template>
  <div>
    <header>
      <span>
         <i class="iconfont icon-tianjiaguanzhu"></i>
        </span>
      <span>
        <ul>
          <li>关注</li>
          <li>附近</li>
        </ul>
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
        text-align center
        ul
          font-size 0
          border .1rem solid white
          display inline-block
          border-radius .5rem
          padding 0
          li
            display inline-block
            padding 2rem 1rem
            font-size 2rem
</style>

