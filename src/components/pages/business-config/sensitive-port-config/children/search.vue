<template>
  <div>
    <div class="well search-port">
      <span>时间选择：</span>
      <div class="block">
        <el-date-picker
            v-model="clock_val"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right">
        </el-date-picker>
      </div>
      <span>端口类型：</span>
      <el-select class="select-port-type" v-model="select_portType" placeholder="请选择">
        <el-option
            v-for="item in options_select_portType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <span>端口：</span>
      <el-input class="input-style-200px" clearable placeholder="请输入端口"></el-input>
      <span>资产：</span>
      <el-input class="input-style-200px" clearable placeholder="请输入资产 "></el-input>
      <div @click="searchCondition" class="btn btn-primary">查询</div>
      <div class="btn btn-warning">重置</div>
      <div class="btn btn-success">导出敏感端口</div>
    </div>
    <div class="table-wrap">
      <Table></Table>
    </div>
  </div>
</template>

<script>
  import Table from './table/search-port-table'

  export default {
    name: "search",
    components: {
      Table
    },
    data() {
      return {
        select_portType: '全部敏感端口',
        options_select_portType: [
          {
            value: '1',
            label: '全部敏感端口'
          },
          {
            value: '2',
            label: '禁用使用端口'
          },
          {
            value: '3',
            label: '受用使用端口'
          }
        ],
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        clock_val: ''
      }
    },
    methods: {
      /** 查询筛选条件 **/
      searchCondition() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-port {
    .block {
      display: inline-block;
    }
    .select-port-type {
      display: inline-block;
      width: 150px;
    }
    span {
      margin: 0 0px 0 14px;
    }
    span:nth-of-type(1) {
      margin: 0;
    }
    .btn {
      margin: 0 5px 0 2px;
    }
  }

  .table-wrap {
    min-height: 600px;
    padding: 20px 15px;
    overflow: hidden;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    box-shadow: 0 0 10px #eee inset;
  }
</style>