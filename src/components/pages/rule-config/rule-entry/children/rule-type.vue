<template>
  <div class="common-content">
    <div class="common-box">
      <div class="attack-select">
        <span @click="operationStatusOpen" v-if="operation_status === false"
              class="btn btn-primary btn-xs pull-right">开启操作模式</span>
        <span @click="operationStatusClose" v-if="operation_status === true"
              class="btn btn-danger btn-xs pull-right">关闭操作模式</span>
      </div>
      <el-tabs v-model="activeName" type="card">
        <!--攻击小类-->
        <el-tab-pane name="first">
          <span slot="label">攻击小类</span>
          <attackSmallClass></attackSmallClass>
        </el-tab-pane>

        <!--攻击二类-->
        <el-tab-pane name="second">
          <span slot="label">攻击二类</span>
          <attackSecondClass></attackSecondClass>
        </el-tab-pane>

        <!-- 攻击大类-->
        <el-tab-pane name="third">
          <span slot="label">攻击大类</span>
          <attackBigClass></attackBigClass>
        </el-tab-pane>

        <!-- 业务大类-->
        <el-tab-pane name="four">
          <span slot="label">业务大类</span>
          <businessBigClass></businessBigClass>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!--授权码dialog-->
    <dialogAuthorizationCode @dialogVisibleClose="dialogVisibleClose" :operation_status="operation_status"
                             :dialogVisible="dialogVisible_authorizationCode"></dialogAuthorizationCode>
  </div>
</template>

<script>
  import dialogAuthorizationCode from './layer/dialog-authorization-code.vue'
  import attackSmallClass from './rule-type-children/attack-small-class'
  import attackSecondClass from './rule-type-children/attack-second-class'
  import attackBigClass from './rule-type-children/attack-big-class'
  import businessBigClass from './rule-type-children/business-big-class'
  export default {
    components: {
      dialogAuthorizationCode,
      attackSmallClass,
      attackSecondClass,
      attackBigClass,
      businessBigClass
    },
    data() {
      return {
        activeName: 'first',
        dialogVisible_authorizationCode: false, // 授权码弹出框开关
        operation_status_control: false, // 操作模式触发的控制变量
        operation_status: false // 操作模式状态。操作模式触发的控制变量为true，再判断操作模式状态
      }
    },
    created() {
      /** 接收弹出框的关闭通知，并且授权码弹出框会触发接收操作模式状态值 **/
      Bus.$on('dialogVisibleCloseChild', (el) => {
        this.dialogVisibleClose();
        // console.log(el);
        if (el === true) {
          // console.log(el)
          this.operation_status = el;
          this.$message({
            message: '成功开启操作模式',
            type: 'success'
          });
        }
      });
    },
    methods: {
      /**
       *
       * 授权码弹出框
       *
       * **/
      /** 授权码弹出框的关闭值 **/
      dialogVisibleClose() {
        this.dialogVisible_authorizationCode = false;
        this.dialogVisible_ruleAddCombination = false;
      },
      /** 授权码弹出框的打开值 **/
      operationStatusOpen() {
        this.dialogVisible_authorizationCode = true;
      },
      /** 关闭操作模式 **/
      operationStatusClose() {
        this.operation_status = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .attack-select{
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 999;
  }
</style>
