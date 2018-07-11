<template>
  <div class="wrapper">
    <section>
      <h1 class="title">威胁报告</h1>
      <div class="statistical-time">统计日期&nbsp;2018-07-11&nbsp;&nbsp;到&nbsp;&nbsp;2018-07-11</div>
      <h2 class="title-lv2">一、攻击统计</h2>
      <statisticalItem :current_report="true"></statisticalItem>
      <h2 class="title-lv2">二、攻击详情</h2>
      <div class="title-lv2 flex" style="margin: 0;">攻击成功事件</div>
      <div class="padding-15px">
        <Table></Table>
      </div>
      <h2 class="title-lv2">
        三、图表统计
        <span style="margin: 0 0 0 15px;font-size: 12px;font-weight: bold;">TOP个数选择：</span>
        <el-select class="select-style-70px" v-model="select_val" placeholder="请选择">
          <el-option
            v-for="item in data_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </h2>
      <div class="padding-15px">
        <echarts :currentReport_status="true"></echarts>
      </div>
    </section>
  </div>
</template>

<script>
  import statisticalItem from '@/components/common/statistical-item/statistical-item'
  import Table from '../table/current-report-table'
  import echarts from '@/components/common/echarts/echarts'

  export default {
    components: {
      statisticalItem,
      Table,
      echarts
    },
    data() {
      return {
        select_val: "10",
        data_options: [
          {
            value: '选项1',
            label: '5'
          }, {
            value: '选项2',
            label: '10'
          }, {
            value: '选项3',
            label: '20'
          }, {
            value: '选项4',
            label: '50'
          }, {
            value: '选项5',
            label: '100'
          },{
            value: '选项6',
            label: '选择全部'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 50px 30px;
    section {
      padding: 20px;
      background-color: #FFF;
      border: 1px solid #E3E3E3;
      .title {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
      }
      .statistical-time {
        margin: 10px 0;
        padding-right: 200px;
        text-align: right;
      }
      .title-lv2 {
        margin: 50px 0 0;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .padding-15px {
    padding: 0 15px;
  }
</style>
