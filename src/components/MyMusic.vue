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
  </div>
</template>

<script type="text/ecmascript-6">
  import Playing from './Playing'
  export default {
    components:{Playing}
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    span
      &:nth-child(2)
        text-align center
        font-size 2.5rem
</style>

