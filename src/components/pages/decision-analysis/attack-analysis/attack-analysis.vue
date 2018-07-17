<template>
  <div class="common-content">
    <echarts :attack_analysis="true"></echarts>
  </div>
</template>

<script>
  import echarts from '@/components/common/echarts/echarts'

  export default {
    name: "attack-analysis",
    components: {
      echarts
    }
  }
</script>

<style lang="scss" scoped>

</style>
