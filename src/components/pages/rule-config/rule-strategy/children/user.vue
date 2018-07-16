<template>
  <div>
    <div class="well">
      <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
        <i class="fa fa-info-circle"></i> 支持添加&nbsp;&nbsp;固定IP【例：1.2.3.4】、IP段【例：1.2.3.*】、IP组【例：1.2.3.4-1.2.3.10 中间用&nbsp;-&nbsp;相隔】、IP掩码【例：1.2.3.4/22】
      </p>
      <div class="common-table-layout">
        <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;用户名：
        </div>
        <div class="right">
          <el-input class="input-style-300px" placeholder="管理员IP"></el-input>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;资产IP：
        </div>
        <div class="right">
          <el-input class="input-style-300px" placeholder="资产IP"></el-input>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;协议：
        </div>
        <div class="right">
          <el-input class="input-style-400px" placeholder="选择协议，支持多选"></el-input>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">策略作用时间段：
        </div>
        <div class="right">
          <el-select class="select-style-60px" v-model="select_time_start" placeholder="请选择">
            <el-option
              v-for="item in time_options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select class="select-style-60px" v-model="select_time_end" placeholder="请选择">
            <el-option
              v-for="item in time_options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left must">操作：
        </div>
        <div class="right">
          <span class="btn btn-primary btn-sm">添加用户策略</span>
        </div>
      </div>
    </div>
    <Table></Table>
  </div>
</template>

<script>
  import Table from  './table/user-strategy-table'
  export default {
    components: {
      Table
    },
    data () {
      return{
        select_time_start: '',
        select_time_end: '',
          time_options: [
              {
                  value: "1",
                  label: "0点"
              },
              {
                  value: "2",
                  label: "1点"
              },
              {
                  value: "3",
                  label: "2点"
              },
              {
                  value: "4",
                  label: "3点"
              },
              {
                  value: "5",
                  label: "4点"
              },
              {
                  value: "6",
                  label: "5点"
              },
              {
                  value: "7",
                  label: "6点"
              },
              {
                  value: "8",
                  label: "7点"
              },
              {
                  value: "9",
                  label: "8点"
              },
              {
                  value: "10",
                  label: "9点"
              },
              {
                  value: "11",
                  label: "10点"
              },
              {
                  value: "12",
                  label: "11点"
              },
              {
                  value: "13",
                  label: "12点"
              },
              {
                  value: "14",
                  label: "13点"
              },
              {
                  value: "15",
                  label: "14点"
              },
              {
                  value: "16",
                  label: "15点"
              },
              {
                  value: "17",
                  label: "16点"
              },
              {
                  value: "18",
                  label: "17点"
              },
              {
                  value: "19",
                  label: "18点"
              },
              {
                  value: "20",
                  label: "19点"
              },
              {
                  value: "21",
                  label: "20点"
              },
              {
                  value: "22",
                  label: "21点"
              },
              {
                  value: "23",
                  label: "22点"
              },
              {
                  value: "24",
                  label: "23点"
              }
          ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .well {
    margin-bottom: 45px;
    .common-table-layout {
      height: 50px;
      .left {
        width: 130px;
        text-align: right;
        padding: 0 10px 0 0;
      }
      .right {
        padding: 0 0 0 10px;
        .select-style-60px{
          width: 100px;
        }
      }
    }
  }
</style>
