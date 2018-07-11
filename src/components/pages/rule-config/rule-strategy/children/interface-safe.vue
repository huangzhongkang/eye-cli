<template>
  <div>
    <div class="info">
      <p style="font-size:14px;line-height:24px;">
        1、接口地址必须 &nbsp;<code>http://</code>&nbsp;或&nbsp;<code>https://</code>&nbsp;。<br>
        2、允许IP列表，多个IP用&nbsp;<code>换行</code>&nbsp;分隔&nbsp;。<br>
        3、禁止IP列表，多个IP用&nbsp;<code>换行</code>&nbsp;分隔&nbsp;。<br>
      </p>
    </div>
    <Table></Table>
  </div>
</template>

<script>
  import Table from './table/interface-save-table'
  export default {
    components: {
      Table
    }
  }
</script>

<style lang="scss" scoped>
  .info{
    font-size: 17.5px;
    padding: 10px 20px;
    margin: 20px 0 15px;
    background-color: #ebf7ff;
    border-left: 5px solid #ccebff;
  }
</style>
