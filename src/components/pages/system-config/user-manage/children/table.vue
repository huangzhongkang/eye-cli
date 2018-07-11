<template>
  <div class="userList-wrap clearfix">
    <div class="clearfix">
      <div class="select">
        <span>每页显示：</span>
        <el-select @change="changeSelect" class="userList-select" v-model="select_val" placeholder="请选择">
          <el-option
            v-for="item in data_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>条</span>
      </div>
      <div class="table-search">
        <span>查找：</span>
        <el-input v-model="search_val"></el-input>
      </div>
    </div>
    <el-table
      class="element-table-style userList-element-table"
    :data="tableDataWatch">
      <el-table-column
      label="用户名"
      width=""
      prop="userName">
      </el-table-column>
      <el-table-column
      label="用户简称"
      prop="userReferred">
      </el-table-column>
      <el-table-column
      label="用户角色"
      prop="userType">
      </el-table-column>
      <el-table-column
      label="添加时间"
      prop="addTime">
      </el-table-column>
      <el-table-column
      label="用户权限"
      prop="userPermission">
        <template slot-scope="scope">
          <el-select class="userList-select" v-model="value_userListPermission" placeholder="请选择">
            <el-option
              v-for="item in options_userListPermission"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
      label="操作"
      prop="userOperation">
        <template slot-scope="scope">
          <div class="operation">
            <span class="btn btn-primary btn-xs"><i class="fa fa-edit"></i>&nbsp;修改密码</span>
            <span class="btn btn-danger btn-xs"><i class="fa fa-trash"></i>&nbsp;删除</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-wrap">
      <div class="left">
        <span>共{{Init_tableData.length}}条数据</span>
      </div>
      <div class="right">
        <el-pagination
          class="page"
          background
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total"
          prev-text="上一页"
          next-text="下一页"
          :current-page.sync="pageNum"
          @current-change="changeCurrentPageNum">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user-list",
    data () {
      return{
        /**
         * 通用模块
         * **/
        /** select模块 **/
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
        ], // select下拉数据
        select_val: '5',   // select初始显示条数

        /** 搜索框模块 **/
        search_val: '', // 搜索框input值

        /** table模块 **/
        tableData: [],  // table显示操作数据
        Init_tableData: [], // table原始对比数据

        /** 分页器控制 **/
        total: 1, // 数据总条数
        pageNum: 1, // 页码
        pageSize: 1, // 一页的显示条数

        /**
         * 非通用模块
         * select权限下拉数据 **/
        options_userListPermission: [
          {
            value: '选项1',
            label: '所有权限'
          }, {
            value: '选项2',
            label: '审计权限'
          }
        ],
        value_userListPermission: '所有权限'
      }
    },
    created () {
      this.InitUserList();
    },
    mounted () {
    },
    computed:{
      /**
       *模糊搜索 -->复用需修改的地方如下
       *
       * this.search_val --> 搜索框输入的值
       * this.tableData --> 用于筛选的数据源
       * this.Init_tableData --> 因为分页器对数据源做了修改，导致数据不全，故获得初始数据时保留一份this.Init_tableData用于全局搜索
       *
       * **/
      tableDataWatch () {
        let search_val = this.search_val;
        if(search_val){
          this.tableData = this.Init_tableData;
          this.tableData = this.tableData.filter(function(val){
            return Object.keys(val).some(function(key){
              return String(val[key]).toLowerCase().indexOf(search_val) > -1;
            })
          });
          this.InitPage(); /* 重置分页器 */
        } else {
          this.InitInputSearchValEmpty(); /* 输入为空时重置分页器 */
        }
        return this.tableData;
      }
    },
    methods:{
      /** 用户列表初始化数据 **/
      InitUserList () {
        this.$http.get('../../../../../../static/json/ajax.json').then(res => {
          this.tableData = res.data; // 用于操作的数
          this.Init_tableData = res.data; // 用于筛选的原始数据
          this.InitPage(); // 初始化分页器
        });
      },

      /** 模糊搜索input空值设置 **/
      InitInputSearchValEmpty () {
        this.tableData = this.Init_tableData; // 因筛选条件修改过的数据恢复到原始数据
        this.InitPage(); // 初始化分页器
      },

      /** 分页器初始化 **/
      InitPage () { // 根据所选select条数初始化页码
        if (this.select_val === '选择所有'){ // 判断是显示所有还是其他
          this.pageSize = 9999999;
        } else {
          this.pageSize = Number(this.select_val);
        }
        this.total = Object.keys(this.tableData).length; // 总条数
        this.tableData = this.tableData.slice((this.pageNum-1) * this.pageSize, this.pageNum * this.pageSize); // 在表格数据中通过slice操作筛选某一页显示数据
      },
      changeSelect (val) { // 显示条数筛选选中的label值
        this.pageNum = 1;
        let obj = {};
        obj = this.data_options.find((item) => { // 遍历的数据源
          return item.value === val; // 筛选出匹配数据
        });
        this.select_val = obj.label;
        this.InitUserList();
      },
      changeCurrentPageNum (val) { // 分页器页码筛选选中的值
        this.pageNum = val;
        this.InitUserList();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userList-wrap{
    margin: 20px 0 0 0;
    color: rgb(103, 106, 108);
    .select{
      float: left;
      .userList-select{
        width: 100px;
      }
    }
    .table-search{
      float: right;
      width: 220px;
      span,div{
        display: inline-block;
      }
      div{
        width: 168px;
      }
    }
    .operation{
      span:nth-child(1){
        margin-right: 15px;
      }
    }
    .page-wrap{
      margin-top: 10px;
      .left{
        float: left;
        color: rgb(103, 106, 108);
        font-size: 14px;
      }
      .right{
        float: right;
      }
    }
  }
</style>
