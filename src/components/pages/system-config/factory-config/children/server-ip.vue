<template>
  <div class="wrap">
    <div class="box">
      <h1 class="purple-title">设置服务器IP信息</h1>
      <div class="common-table-layout">
        <div class="left">
          网口类型：
        </div>
        <div class="right">
          <el-radio v-model="radio" label="1">电口</el-radio>
          <el-radio v-model="radio" label="2">光口</el-radio>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          IP地址：
        </div>
        <div class="right">
          <el-input class="input-style-200px" placeholder="输入IP地址" clearable></el-input>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          子网掩码：
        </div>
        <div class="right">
          <el-input class="input-style-200px" placeholder="输入子网掩码" clearable></el-input>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          网关：
        </div>
        <div class="right">
          <el-input class="input-style-200px" placeholder="输入网关" clearable></el-input>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          DNS：
        </div>
        <div class="right">
          <el-input class="input-style-200px" placeholder="输入DNS，可不填" clearable></el-input>
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
    name: "server-ip",
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