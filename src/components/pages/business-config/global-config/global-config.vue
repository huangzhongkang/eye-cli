<template>
  <div class="common-content">
    <div class="common-box">
      <el-tabs v-model="activeName" type="card">
        <!--全局资产配置-->
        <el-tab-pane name="first">
          <span slot="label">全局资产配置</span>
          <globalAssets></globalAssets>
        </el-tab-pane>

        <!--全局参数配置-->
        <el-tab-pane name="second">
          <span slot="label">全局参数配置</span>
          <globalParameter></globalParameter>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import globalAssets from './children/global-assets'
  import globalParameter from './children/global-parameter'
  export default {
    components: {
      globalAssets,
      globalParameter
    },
    data() {
      return{
        activeName: 'first'
      }
    }
  }
</script>