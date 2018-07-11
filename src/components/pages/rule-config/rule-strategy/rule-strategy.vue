<template>
  <div class="common-content">
    <div class="common-box">
      <el-tabs v-model="activeName" type="card">
        <!--事件加白策略-->
        <el-tab-pane name="first">
          <span slot="label">事件加白策略</span>
          <eventsAddWhite></eventsAddWhite>
        </el-tab-pane>

        <!--用户策略-->
        <el-tab-pane name="second">
          <span slot="label">用户策略</span>
          <user></user>
        </el-tab-pane>

        <!-- 接口安全配置-->
        <el-tab-pane name="third">
          <span slot="label">接口安全配置</span>
          <interFace></interFace>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import eventsAddWhite from './children/events-ad-white'
  import user from './children/user'
  import interFace from './children/interface-safe'

  export default {
    components: {
      eventsAddWhite,
      user,
      interFace
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
