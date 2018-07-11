<template>
  <div>
    <div class="well flex">
      <span @click="openAddRule" class="button button-raised button-primary button-pill button-small">添加攻击二类</span>
    </div>
    <Table></Table>

    <!--添加攻击二类dialog-->
    <dialogRuleAdd @dialogVisibleClose="dialogVisibleClose"
                   :dialogVisible="dialogVisible_ruleAdd"
                   :Show_attack_secondClass="true"></dialogRuleAdd>
  </div>
</template>

<script>
  import Table from '../table/attack-secondClass-table'
  import dialogRuleAdd from '../layer/dialog-rule-operate'
  import attackSmallClass from '../rule-type-children/attack-small-class'

  export default {
    components: {
      Table,
      dialogRuleAdd,
      attackSmallClass
    },
    data() {
      return {
        activeName: 'first',
        dialogVisible_ruleAdd: false, // 添加规则btn弹出框开关
      }
    },
    created() {
      /** 弹出框的关闭通知 **/
      Bus.$on('dialogVisibleCloseChild', (el) => {
        this.dialogVisibleClose();
      });
    },
    methods: {
      /**
       *
       * 操作规则弹出框
       *
       * **/
      dialogVisibleClose() {
        this.dialogVisible_ruleAdd = false;
      },
      openAddRule() {
        this.dialogVisible_ruleAdd = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
