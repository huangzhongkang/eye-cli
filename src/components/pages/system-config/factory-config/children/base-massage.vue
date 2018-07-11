<template>
  <div class="wrap">
    <div class="box">
      <h1 class="purple-title">系统信息</h1>
      <div class="common-table-layout">
        <div class="left">
          网站名称：
        </div>
        <div class="right">
          <el-input class="input-style" value="睿眼攻击溯源系统-网络版" clearable placeholder="输入网站名称"></el-input>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          网站版权信息：
        </div>
        <div class="right">
          <el-input class="input-style" value="2017 © 中睿天下" clearable placeholder="输入网站版权信息"></el-input>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          操作：
        </div>
        <div class="right">
          <span @click="submitSystemMsg" class="btn btn-primary btn-sm">提交设置</span>
        </div>
      </div>
    </div>
    <div class="box">
      <h1 class="purple-title">系统信息</h1>
      <div class="common-table-layout">
        <div class="left">
          401身份验证设置：
        </div>
        <div class="right">
          <span>401账号</span>
          <el-input v-model="account" @change="changeAccount" class="input-style-200px" :class="[account_reg === true?'':'ipt_reg']" value="" clearable placeholder="6-16位英文数字下划线"></el-input>
          <span>401密码</span>
          <el-input v-model="password" type="password" @change="changePassword" class="input-style-200px" :class="[password_reg === true?'':'ipt_reg']" value="" clearable placeholder="8-16位英文数字下划线"></el-input>
          <span @click="submitSystemMsg" class="btn btn-primary btn-sm">提交设置</span>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">
          NTP服务器：
        </div>
        <div class="right">
          <el-input disabled v-model="currentTime"  class="input-style-266px"></el-input>
          <el-input class="input-style-200px" placeholder="同步服务器时间的IP" clearable></el-input>
          <span style="margin-left: 15px;" @click="submitSystemMsg" class="btn btn-primary btn-sm">提交设置</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "base-massage",
    data () {
      return{
        account: '',
        account_reg: true,
        password: '',
        password_reg: true,
        currentTime: ''
      }
    },
    created () {
      this.InitTime();
    },
    methods: {
      /** 初始化时间 **/
      InitTime () {
        let dates = new Date();
        let year = dates.getFullYear();
        let month = dates.getMonth() + 1;
        let day = dates.getDay();
        let hours = dates.getHours();
        let minutes = dates.getMinutes();
        let seconds = dates.getSeconds();
        this.currentTime = '当前服务器时间：' + year + '-' + month + '-' + day + '  ' + hours + ':' + minutes + ':' + seconds;
      },

      /** loading **/
      submitSystemMsg () {
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

      /** 正则验证 **/
      changeAccount () {
        let reg = /^[\w]{6,16}$/;
        if (reg.test(this.account)) {
          this.account_reg = true;
        } else {
          this.account_reg = false;
        }
      },
      changePassword () {
        let reg = /^[\w]{6,18}$/;
        if (reg.test(this.password)) {
          this.password_reg = true;
        } else {
          this.password_reg = false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  padding: 0 20px 20px 20px;
  .box{
    margin-bottom: 50px;
  }
  .common-table-layout{
    width: 100%;
    height: 60px;
    .left{
      width: 160px;
      text-align: right;
      padding: 0 10px 0 0;
    }
    .right{
      padding: 0 0 0 10px;
      .input-style{
        width: 520px;
      }
      .input-style-200px{
        width: 200px;
      }
      .input-style-266px{
        width: 266px;
        margin-right: 20px;
      }
      span{
        margin: 0 4px 0 15px;
      }
      span:nth-of-type(1){
        margin-left: 0;
      }
    }
  }
}
</style>