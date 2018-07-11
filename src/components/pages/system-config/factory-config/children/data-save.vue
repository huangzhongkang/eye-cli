<template>
  <div class="wrap">
    <div class="box">
      <h1 class="purple-title">系统信息</h1>
      <div class="common-table-layout">
        <div class="left">设置威胁数据库存储：</div>
        <div class="right">
          <el-input-number size="small" v-model="num_threat" :min="1" :max="12"></el-input-number>
          <span>保存最新多少月的数据 【1】个月~【12】个月</span>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">设置总数据库存储：</div>
        <div class="right">
          <el-input-number size="small" v-model="num_all" :min="1" :max="14"></el-input-number>
          <span>保存最新多少天的数据 【1】天~【14】天</span>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">设置硬盘容量：</div>
        <div class="right">
          <el-input-number size="small" v-model="num_disk" :min="50" :max="90"></el-input-number>
          <span>硬盘最大存储量 【50】%~【90】%
</span>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          操作：
        </div>
        <div class="right">
          <div @click="submitSystemMsg" class="btn btn-primary btn-sm">提交设置</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "data-save",
    data() {
      return {
        num_threat: 12,
        num_all: 14,
        num_disk: 90,
      }
    },
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 0 20px 20px 20px;
    .box {
      margin-bottom: 50px;
      .common-table-layout {
        width: 100%;
        height: 60px;
        .left {
          width: 160px;
          text-align: right;
          padding: 0 10px 0 0;
        }
        .right {
          padding: 0 0 0 10px;
          span {
            margin: 0 0 0 10px;
          }
        }
      }
    }
  }
</style>