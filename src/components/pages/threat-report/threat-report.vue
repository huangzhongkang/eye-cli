<template>
  <div class="common-box">
    <div class="flex export">
      <span class="button button-raised button-small button-primary button-pill dropdown-toggle">
        导出威胁报告
        <i class="fa fa-angle-down"></i>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .export{
    min-height: 50px;
  }
</style>
