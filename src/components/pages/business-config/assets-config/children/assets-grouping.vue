<template>
  <div class="common-content">
    <h5 v-if="edit_assets_group === false" class="common-title">新增资产组</h5>
    <h5 v-if="edit_assets_group === true" class="common-title">修改资产组</h5>
    <div class="common-box">
      <div class="common-table-layout">
        <div class="left">
          资产组名称：
        </div>
        <div class="right">
          <el-input class="input-style-300px" placeholder="输入资产组名称" clearable></el-input>
          <span v-if="edit_assets_group === false" @click="submit" class="btn btn-success btn-sm">添加资产组</span>
          <div v-if="edit_assets_group === true" class="edit-assets-group">
            <span @click="submit" class="btn btn-success btn-sm">修改资产组</span>
            <span @click="cancelEditAssetsGroup" class="btn btn-danger btn-sm">取消修改</span>
          </div>
        </div>
      </div>
      <el-table
        :data="data_assetsGroup"
        class="element-table-style assets-group-table">
        <el-table-column
          type="index"
          label="序号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="资产组"
          width="">
        </el-table-column>
        <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <span @click="editAssetsGroup" class="btn btn-primary btn-xs"><i class="fa fa-edit"></i>&nbsp;修改</span>
            <span @click="deleteAssetsGroup" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i>&nbsp;删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "assets-config",
    data() {
      return {
        edit_assets_group: false,
        data_assetsGroup: [
          {
            name: '研发部'
          },
          {
            name: '市场部'
          },
          {
            name: '测试部'
          }
        ]
      }
    },
    methods: {
      /** loading **/
      submit() {
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

      /** 取消修改资产组名称  **/
      cancelEditAssetsGroup() {
        this.edit_assets_group = false;
      },

      /** 修改分组 **/
      editAssetsGroup() {
        this.edit_assets_group = true;
      },

      /** 删除分组 **/
      deleteAssetsGroup() {
        this.$confirm('此操作将永久删除该资产组及之下IP, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .common-table-layout {
    width: 100%;
    height: 60px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    .left {
      width: 120px;
      text-align: right;
      padding: 0 15px 0 0;
    }
    .right {
      padding: 0 0 0 15px;
      .edit-assets-group {
        display: inline-block;
        .btn-success {
          margin-right: 10px;
        }
      }
    }
  }
</style>