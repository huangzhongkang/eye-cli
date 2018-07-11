<template>
<div class="operational-perspective">
  <div class="common-content">
    <h5 class="common-title">
      资产统计
    </h5>
    <div class="common-box">
      <statisticalItem :assets_statistical="true"></statisticalItem>
    </div>
    <div class="common-box">
      <div class="attack-select">
        <div class="btn btn-primary attack-select-btn" @click="attackSelectBtn($event)">全部攻击</div>
        <div class="btn btn-default attack-select-btn" @click="attackSelectBtn($event)">成功攻击</div>
      </div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick_tab">
        <!--资产-->
        <el-tab-pane name="first">
          <span slot="label">资产</span>
          <screeningSearch :tabIndex="tabIndex"></screeningSearch>
          <assets></assets>
        </el-tab-pane>

        <!--端口-->
        <el-tab-pane name="second">
          <span slot="label">端口</span>
          <screeningSearch :tabIndex="tabIndex"></screeningSearch>
        </el-tab-pane>

        <!--协议-->
        <el-tab-pane name="third">
          <span slot="label">协议</span>
          <screeningSearch :tabIndex="tabIndex"></screeningSearch>
        </el-tab-pane>

        <!--国家-->
        <el-tab-pane name="four">
          <span slot="label">国家</span>
          <screeningSearch :tabIndex="tabIndex"></screeningSearch>
        </el-tab-pane>

        <!--失陷主机-->
        <el-tab-pane name="five">
          <span slot="label">失陷主机</span>
          <screeningSearch :tabIndex="tabIndex"></screeningSearch>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</div>
</template>

<script>
  import statisticalItem from '@/components/common/statistical-item/statistical-item.vue'
  import screeningSearch from './common/screening-search.vue'
  import assets from './children/assets'
  export default {
    name: "operational-perspective",
    components: {
      statisticalItem,
      screeningSearch,
      assets
    },
    data () {
      return{
        activeName: 'first',
        tabIndex: '0'
      }
    },
    created () {
      this.$http.get('../../../../../static/json/assets-note.json').then(res => {
        // console.log(res);
        this.dataSet = res.data;
      })
    },
    mounted () {},
    methods: {
      handleClick_tab(tab, event) {
        this.tabIndex = tab.index;
      },
      attackSelectBtn($event) {
        $('.attack-select-btn').removeClass('btn-primary').addClass('btn-default');
        $event.target.classList.add('btn-primary');
      }
    }
  }
</script>

<style lang="scss" scoped>
.attack-select{
  position: absolute;
  right: 20px;
  z-index: 999;
  .attack-select-btn{
    float: left;
    cursor: pointer;
  }
  .attack-select-btn:nth-child(1){
    border-radius: 4px 0 0 4px;
  }
  .attack-select-btn:nth-child(2){
    border-radius: 0 4px 4px 0;
  }
}
</style>
