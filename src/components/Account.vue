<template>
  <div>
    <header>
      <span>
      </span>
      <span>
         账号
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
</style>

