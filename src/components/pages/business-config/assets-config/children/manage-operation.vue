<template>
  <div class="common-content assets-group-config">
    <h5 class="common-title">新增资产</h5>
    <div class="common-box clearfix">
      <div class="box" style="width: 100%;">
        <div class="common-table-layout">
          <div class="left must">
            <i class="fa fa-asterisk"></i>&nbsp;资产IP：
          </div>
          <div class="right">
            <p class="alert alert-info">
              <i class="fa fa-info-circle"></i> 支持添加&nbsp;&nbsp;固定IP【例：1.2.3.4】、IP段【例：1.2.3.*】、IP组【例：1.2.3.4-1.2.3.10
              中间用&nbsp;-&nbsp;相隔】、IP掩码【例：1.2.3.4/22】
              <br>
              <i class="fa fa-info-circle"></i> 支持添加&nbsp;&nbsp;域名【例：xxxx.com】
            </p>
            <el-input class="input-style-300px" placeholder="输入固定IP / IP段 / IP组 / IP掩码 "
                      clearable></el-input>
          </div>
        </div>
        <div class="common-table-layout">
          <div class="left must">
            <i class="fa fa-asterisk"></i>&nbsp;所属资产组：
          </div>
          <div class="right">
            <el-select @change="" class="select-wrap" v-model="select_val" placeholder="请选择">
              <el-option
                v-for="item in data_options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="common-table-layout">
          <div class="left must">
            <i class="fa fa-asterisk"></i>&nbsp;备注：
          </div>
          <div class="right">
            <el-input class="textarea-wrap" type="textarea" placeholder="输入资产规则备注"></el-input>
          </div>
        </div>
        <div class="common-table-layout">
          <div class="left">操作：</div>
          <div class="right">
            <div style="height: 0;overflow: hidden;">
              <div class="input-style-400px"></div>
            </div>
            <div @click="" class="btn btn-success btn-sm">添加资产备注</div>
          </div>
        </div>
      </div>
    </div>
    <h5 class="common-title">资产列表</h5>
    <div class="common-box">
      <manageOperationTable></manageOperationTable>
    </div>
  </div>
</template>

<script>
  import manageOperationTable from './table/manage-operation-table'
  export default {
    name: "manage-operation",
    components: {
      manageOperationTable
    },
    data() {
      return{
        select_val: '',
        data_options: [
          {
            value: '选项1',
            label: '5'
          }, {
            value: '选项2',
            label: '15'
          }, {
            value: '选项3',
            label: '50'
          }, {
            value: '选项4',
            label: '选择所有'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.select-wrap, .textarea-wrap{
  width: 300px;
}

</style>