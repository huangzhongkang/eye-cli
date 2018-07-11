<template>
  <div>
    <h1 class="common-title">通用规则
      <span @click="operationStatusOpen" v-if="operation_status === false"
            class="btn btn-primary btn-xs pull-right">开启操作模式</span>
      <span @click="operationStatusClose" v-if="operation_status === true"
            class="btn btn-danger btn-xs pull-right">关闭操作模式</span>
    </h1>
    <div class="common-box">
      <div style="text-align:center;margin-bottom: 20px;">
        <span @click="openAddCombinationRule" class="button button-raised button-primary button-pill button-small">添加通用规则</span>
      </div>
      <Table></Table>
    </div>
    <!--授权码dialog-->
    <dialogAuthorizationCode @dialogVisibleClose="dialogVisibleClose" :operation_status="operation_status"
                             :dialogVisible="dialogVisible_authorizationCode"></dialogAuthorizationCode>

    <!--添加组合规则dialog-->
    <dialogRuleAddCombination @dialogVisibleClose="dialogVisibleClose"
                              :dialogVisible="dialogVisible_ruleAddCombination"
                              :Show_rule_request="true"></dialogRuleAddCombination>
  </div>
</template>

<script>
  import Table from './table/rule-common-table'
  import dialogAuthorizationCode from './layer/dialog-authorization-code.vue'
  import dialogRuleAddCombination from './layer/dialog-rule-operate'

  export default {
    components: {
      Table,
      dialogAuthorizationCode,
      dialogRuleAddCombination
    },
    data() {
      return {
        dialogVisible_authorizationCode: false, // 授权码弹出框开关
        dialogVisible_ruleAddCombination: false, // 添加规则btn弹出框开关
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
          console.log(el)
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
      },
      /**
       *
       * 组合规则弹出框
       *
       * **/
      openAddCombinationRule() {
        this.dialogVisible_ruleAddCombination = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
