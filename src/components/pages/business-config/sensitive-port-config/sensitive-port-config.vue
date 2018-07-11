<template>
  <div class="common-content">
    <div class="common-box">
      <el-tabs v-model="activeName" type="card">
        <!--敏感端口管理-->
        <el-tab-pane name="first">
          <span slot="label">敏感端口管理</span>
          <manage></manage>
        </el-tab-pane>

        <!--敏感端口统计-->
        <el-tab-pane name="second">
          <span slot="label">敏感端口统计</span>
          <statiscal></statiscal>
        </el-tab-pane>

        <!--敏感端口查询-->
        <el-tab-pane name="third">
          <span slot="label">敏感端口统查询</span>
          <search></search>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import manage from './children/manage'
  import statiscal from './children/statiscal'
  import search from './children/search'

  export default {
    name: "sensitive-port-config",
    components: {
      manage,
      statiscal,
      search
    },
    data() {
      return {
        activeName: 'first'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
