<template>
  <div class="">
    <div class="common-content">
      <div class="common-box">
        <el-tabs v-model="activeName" type="card">
          <!--用户列表-->
          <el-tab-pane name="first">
            <span slot="label">用户列表</span>
            <userList></userList>
          </el-tab-pane>

          <!--新增用户-->
          <el-tab-pane name="second">
            <span slot="label">新增用户</span>
            <addUser></addUser>
          </el-tab-pane>

          <!--权限管理-->
          <el-tab-pane name="third">
            <span slot="label">权限管理</span>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import userList from './children/table'
  import addUser from './children/add-user'
  export default {
    name: "user-manage",
    components: {
      userList,
      addUser
    },
    data () {
      return{
        activeName: 'first'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>