<template>
  <div class="common-content factory-wrap">
    <div class="common-box">
      <el-tabs v-model="activeName" type="card">
        <!--基本信息设置-->
        <el-tab-pane name="first">
          <span slot="label">基本信息设置</span>
          <baseMassage></baseMassage>
        </el-tab-pane>

        <!--数据存储设置-->
        <el-tab-pane name="second">
          <span slot="label">数据存储设置</span>
          <dataSave></dataSave>
        </el-tab-pane>

        <!--系统安全设置-->
        <el-tab-pane name="third">
          <span slot="label">系统安全设置</span>
          <systemSecurity></systemSecurity>
        </el-tab-pane>

        <!--服务器IP设置-->
        <el-tab-pane name="four">
          <span slot="label">服务器IP设置</span>
          <serverIP></serverIP>
        </el-tab-pane>

        <!--SNMP设置-->
        <el-tab-pane name="five">
          <span slot="label">SNMP设置</span>
          <SNMP></SNMP>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import baseMassage from './children/base-massage'
  import dataSave from './children/data-save'
  import systemSecurity from './children/system-security'
  import serverIP from './children/server-ip'
  import SNMP from './children/SNMP'
  export default {
    name: "factory-config",
    components: {
      baseMassage,
      dataSave,
      systemSecurity,
      serverIP,
      SNMP
    },
    data () {
      return{
        activeName: 'first'
      }
    },
    created () {

    }
  }
</script>

<style lang="scss" scoped>

</style>