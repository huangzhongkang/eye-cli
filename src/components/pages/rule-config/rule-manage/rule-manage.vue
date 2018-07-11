<template>
  <div class="common-content">
    <h5 class="common-title">规则管理 <span class="btn btn-primary btn-xs pull-right">开启操作模式</span></h5>
    <div class="common-box">
      <div class="flex save">
        <span class="button button-raised button-highlight button-pill button-small">保存本地规则</span>
      </div>
      <Table></Table>
    </div>
  </div>
</template>

<script>
  import Table from './table/rule-manage-table'
  export default {
    name: "rule-manage",
    components: {
      Table
    }
  }
</script>

<style lang="scss" scoped>
  .save {
    width: 100%;
    height: 30px;
  }
</style>
