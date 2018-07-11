<template>
  <div class="wrap">
    <div class="box">
      <h1 class="purple-title">配置SNMP信息</h1>
      <div class="common-table-layout">
        <div class="left">
          SNMP：
        </div>
        <div class="right">
          <el-radio v-model="radio" label="1">关闭</el-radio>
          <el-radio v-model="radio" label="2">开启</el-radio>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          操作：
        </div>
        <div class="right">
          <span @click="submit" class="btn btn-primary btn-sm">提交设置</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SNMP",
    data() {
      return {
        radio: '1'
      }
    },
    methods: {
      /** loading **/
      submit() {
        const loading = this.$loading({
          lock: true,
          text: '处理中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.$message({
            message: '网站信息配置成功',
            type: 'success'
          });
        }, 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>