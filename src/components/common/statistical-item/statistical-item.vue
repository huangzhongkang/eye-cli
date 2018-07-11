<template>
  <div class="wrap clearfix">
    <!--威胁侦测=>运维视角=>资产-->
    <div v-if="assets_statistical">
      <div v-for="item in statisticalData" class="col-md-1 col-sm-1 statistical-item-wrap">
        <div ref="statisticalItemBox" class="statistical-item-box" data-toggle="tooltip" data-placement="bottom"
             title="查看详情">
          <i :class=[item.font]></i>
          <span>{{item.number}}</span>
          <span>{{item.description}}</span>
        </div>
      </div>
    </div>

    <!--威胁报告=>当前报告-->
    <div v-if="current_report">
      <div v-for="item in statisticalData" class="col-md-1 col-sm-1 statistical-item-wrap">
        <div ref="statisticalItemBox" class="statistical-item-box" data-toggle="tooltip" data-placement="bottom"
             title="查看详情">
          <i :class=[item.font]></i>
          <span>{{item.number}}</span>
          <span>{{item.description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "statistical-item",
    props: [
      'assets_statistical',
      'current_report'
    ],
    data() {
      return {
        statisticalData: ''
      }
    },
    created() {
      this.InitStatistical();
    },
    methods: {
      InitStatistical() {
        if (this.assets_statistical) {
          this.$http.get('../../../../static/json/statistical.json').then(res => {
            this.statisticalData = res.data;
          })
        } else if  (this.current_report) {
          this.$http.get('../../../../static/json/statistical-current-prot.json').then(res => {
            this.statisticalData = res.data;
          })
        }
      }
    },
    updated() {
      $('.statistical-item-wrap').addClass('statistical-animation');
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .statistical-item-wrap {
    width: 12.5%;
    margin: 20px 0;
    .statistical-item-box {
      position: relative;
      width: 120px;
      height: 120px;
      margin: auto;
      color: rgb(103, 106, 108);
      border-radius: 20px;
      border: 1px solid #ddd;
      background-color: white;
      text-align: center;
      line-height: 25px;
      cursor: pointer;
      transition: all .2s ease-in-out;
      span {
        display: block;
      }
      span:nth-child(2) {
        font-size: 18px;
      }
      span:nth-child(3) {
        font-size: 13px;
        color: rgb(136, 136, 136);
      }
      i {
        margin-top: 15px;
        font-size: 3em;
      }
    }
    .statistical-item-box:hover {
      transform: scale(1.2);
      background-color: #EEEEEE;
    }
  }

  /*.statistical-animation{
    animation: statisticalAnimation 2s ease-in-out;
  }
  @keyframes statisticalAnimation {
    0%{
      transform: rotateY(45deg)
    }
    25%{
      transform: rotateY(0)
    }
    50%{
      transform: rotateY(-45deg)
    }
    100%{
      transform: rotateY(0deg)
    }
  }*/
</style>
