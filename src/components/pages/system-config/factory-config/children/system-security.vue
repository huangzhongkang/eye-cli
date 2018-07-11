<template>
  <div class="wrap">
    <div class="box">
      <h1 class="purple-title">系统安全</h1>
      <div class="common-table-layout">
        <div class="left">
          系统重启：
        </div>
        <div class="right">
          <div @click="submitSystemMsg" class="button button-glow button-rounded button-highlight button-small">系统重启</div>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          恢复出厂设置：
        </div>
        <div class="right">
          <div @click="submitSystemMsg" class="button button-glow button-rounded button-caution button-small">恢复出厂设置</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "system-security",
    methods: {
      /** loading **/
      submitSystemMsg() {
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
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>