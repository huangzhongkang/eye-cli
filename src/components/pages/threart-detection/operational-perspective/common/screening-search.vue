<template>
  <div class="screening-search-wrap well">
    <!--资产-->
    <div v-if="tabIndex === '0'" id="assets">
      <div @mouseleave="searchInputLeave()" id="search_group" class="input-group input-group-sm">
        <el-input id="search_input" class="show-input" type="text" placeholder="输入查询页面内容"></el-input>
        <span class="input-group-btn">
        <div @mouseenter="searchInputEnter()" class="btn btn-custom"></div>
    </span>
      </div>
      <div class="common-table-layout box B-box">
        <div class="left">B段：</div>
        <div class="right">
          <transition-group name="fade">
            <div v-show="assetsToggle" class="item-wrap" v-for="(item,index) in assetsData" :key="index">
              <span @click="BItemBtn($event)">10.63【92】</span>
            </div>
          </transition-group>
          <div v-show="assetsToggle === true" class="item-wrap">
            <button @click="BToggle" class="btn btn-primary btn-xs bip_status_switch" data-toggle="tooltip" data-placement="right" title="" data-original-title="收起资产段">
              B段【215】
              <b class="bip-status-icon">
                <i class="fa fa fa-minus"></i>
              </b>
            </button>
          </div>
          <div v-show="assetsToggle === false" class="item-wrap">
            <button @click="BToggle" class="btn btn-primary btn-xs bip_status_switch" data-toggle="tooltip" data-placement="right" title="" data-original-title="展开资产段">
              B段【215】
              <b class="bip-status-icon">
                <i class="fa fa fa-plus"></i>
              </b>
            </button>
          </div>
        </div>
      </div>
      <div class="common-table-layout box department">
        <div class="left">部门：</div>
        <div class="right">
          <div class="item-wrap">
            <span @click="BItemBtn_department($event)">研发部</span>
          </div>
        </div>
      </div>
      <div class="common-table-layout box equipment-type">
        <div class="left">设备类型：</div>
        <div class="right">
          <div class="item-wrap">
            <span @click="BItemBtn_equipment($event)">个人PC</span>
            <span @click="BItemBtn_equipment($event)">服务器</span>
            <span @click="BItemBtn_equipment($event)">其他设备</span>
          </div>
        </div>
      </div>
      <div class="common-table-layout box operation-system">
        <div class="left">操作系统：</div>
        <div class="right">
          <div class="item-wrap">
            <span @click="BItemBtn_operation($event)">MAC</span>
            <span @click="BItemBtn_operation($event)">LINUX</span>
            <span @click="BItemBtn_operation($event)">WINDOWS</span>
          </div>
        </div>
      </div>
    </div>

    <!--端口-->
    <div v-if="tabIndex === '1'" id="port">
      <div class="common-table-layout box warn-port">
        <div class="left">告警端口：</div>
        <div class="right">
          <transition-group name="fade">
            <div class="item-wrap" v-for="(item,index) in warnPortData" :key="index">
              <span :key="index" :class="[index === 0? 'warnPort-item-selected':'' || index === 4? 'warnPort-item-success':'']" class="warn-port-span" @click="BtnWarnPort($event)">41505</span>
            </div>
          </transition-group>
          <div class="item-wrap">
            <span @click="BtnWarnPortMore"><i class="fa fa fa-plus"></i> 查看更多</span>
          </div>
        </div>
      </div>
      <div class="common-table-layout box else-port">
        <div class="left">其它端口：</div>
        <div class="right">
          <transition-group name="fade">
            <div class="item-wrap" v-for="(item,index) in elsePortData" :key="index">
              <span :key="index" class="else-port-span" @click="BtnElsePort($event)">8000</span>
            </div>
          </transition-group>
          <div class="item-wrap">
            <span @click="BtnElsePortMore"><i class="fa fa fa-plus"></i> 查看更多</span>
          </div>
        </div>
      </div>
    </div>

    <!--协议-->
    <div v-if="tabIndex === '2'" id="agreement">
      <div class="common-table-layout box agreement">
        <div class="left">告警协议：</div>
        <div class="right">
            <div class="item-wrap">
              <span class="warn-agreement-span warnPort-item-selected" @click="BtnWarnAgreement($event)">HTTP</span>
            </div>
          <div class="item-wrap">
              <span class="warn-agreement-span warnPort-item-success" @click="BtnWarnAgreement($event)">TCP</span>
            </div>
        </div>
      </div>
      <div class="common-table-layout box else-port">
        <div class="left">其它协议：</div>
        <div class="right">
          <transition-group name="fade">
            <div class="item-wrap" v-for="(item,index) in 20" :key="index">
              <span :key="index" class="else-agreement-span" @click="BtnElseAgreement($event)">MQTT</span>
            </div>
          </transition-group>
          <div class="item-wrap">
            <!--<span @click="BtnElsePortMore"><i class="fa fa fa-plus"></i> 查看更多</span>-->
          </div>
        </div>
      </div>
    </div>

    <!--国家-->
    <div v-if="tabIndex === '3'" id="country">
      <div class="common-table-layout box warnCountry">
        <div class="left">告警国家：</div>
        <div class="right">
          <!--<transition-group name="fade">-->
            <div class="item-wrap" v-for="(item,index) in warnPortData" :key="index">
              <span :key="index" :class="[index === 3? 'warnPort-item-success':'']" class="warn-country-span" @click="BtnWarnCountry($event)">美国</span>
            </div>
          <!--</transition-group>-->
        </div>
      </div>
      <div class="common-table-layout box warnAgreement">
        <div class="left">告警协议：</div>
        <div class="right">
          <div class="item-wrap">
            <span class="warn-countryAgreement-span warnPort-item-selected" @click="BtnWarnCountryAgreement($event)">HTTP</span>
          </div>
          <div class="item-wrap">
            <span class="warn-countryAgreement-span warnPort-item-success" @click="BtnWarnCountryAgreement($event)">TCP</span>
          </div>
        </div>
      </div>
      <div class="common-table-layout box warnCountryPort">
        <div class="left">告警端口：</div>
        <div class="right">
          <!--<transition-group name="fade">-->
            <div class="item-wrap" v-for="(item,index) in elsePortData" :key="index">
              <span :key="index" :class="[index === 3? 'warnPort-item-success':'']" class="warn-countryPort-span" @click="BtnWarnCountryPort($event)">9000</span>
            </div>
          <!--</transition-group>-->
          <div class="item-wrap">
            <!--<span @click="BtnElsePortMore"><i class="fa fa fa-plus"></i> 查看更多</span>-->
          </div>
        </div>
      </div>
    </div>

    <!--失陷主机-->
    <div v-if="tabIndex === '4'" id="loseHost">
      <div class="common-table-layout box loseHost-B">
        <div class="left">B段：</div>
        <div class="right">
          <!--<transition-group name="fade">-->
            <div class="item-wrap" v-for="(item,index) in 1" :key="index">
              <span :key="index" class="loseHostB-span" @click="BtnLoseHostB($event)">27.151</span>
            </div>
          <!--</transition-group>-->
        </div>
      </div>
      <div class="common-table-layout box LoseHost-C">
        <div class="left">C段：</div>
        <div class="right">
          <!--<transition-group name="fade">-->
            <div class="item-wrap" v-for="(item,index) in 1" :key="index">
              <span :key="index"class="loseHostC-span" @click="BtnLoseHostC($event)">27.151.221</span>
            </div>
          <!--</transition-group>-->
        </div>
      </div>
      <div class="common-table-layout box LoseHost-type">
        <div class="left">威胁类型：</div>
        <div class="right">
          <div class="item-wrap">
            <span class="loseHostType-span" @click="BtnLoseHostType($event)">代理反弹攻击</span>
          </div>
          <div class="item-wrap">
            <span class="loseHostType-span" @click="BtnLoseHostType($event)">挖矿木马植入</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "screening-search",
    props: {
      tabIndex: String
    },
    data () {
      return{
        assetsData: 80,
        warnPortData: 40,
        elsePortData: 40,
        assetsToggle: true
      }
    },
    created () {

    },
    mounted () {
      /**
       * 功能
       * 参数
       * Tab-->资产
       */
      /** 搜索框悬浮伸缩 **/

      /**
       * Tab-->端口
       */
  },
    methods: {
      /**
       *
       * Tab-->资产
       */
      /** B段伸缩 **/
      BToggle () {
        this.assetsToggle = !this.assetsToggle;
      },
      /** 搜索input伸缩 **/
      searchInputEnter (e) {
        // console.log(e)
        $('.show-input').css({'transform': 'translateX(0)'});
      },
      searchInputLeave (e) {
        // console.log(e)
        $('.show-input').css({'transform': 'translateX(100%)'});
      },

      /** 筛选条件样式 **/
      BItemBtn (e) {
        $('.B-box span').removeClass('B-item-selected');
        e.target.classList.add('B-item-selected');
      },
      BItemBtn_department (e) {
        $('.department span').removeClass('B-item-selected');
        e.target.classList.add('B-item-selected');
      },
      BItemBtn_equipment (e) {
        $('.equipment-type span').removeClass('B-item-selected');
        e.target.classList.add('B-item-selected');
      },
      BItemBtn_operation (e) {
        $('.operation-system span').removeClass('B-item-selected');
        e.target.classList.add('B-item-selected');
      },
      /**
       * Tab-->端口
       * **/
      BtnWarnPort (e) {
        $('.warn-port-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      BtnElsePort (e) {
        $('.else-port-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      BtnWarnPortMore () {
        this.warnPortData += 20;
      },
      BtnElsePortMore () {
        this.elsePortData += 20;
      },
      /**
       * Tab-->协议
       * **/
      BtnWarnAgreement (e) {
        $('.warn-agreement-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      BtnElseAgreement (e) {
        $('.else-agreement-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      /**
       * Tab-->国家
       * **/
      BtnWarnCountry (e) {
        $('.warn-country-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      BtnWarnCountryAgreement (e) {
        $('.warn-countryAgreement-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      BtnWarnCountryPort (e) {
        $('.warn-countryPort-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      /**
       * Tab-->失陷主机
       * **/
      BtnLoseHostB (e) {
        $('.loseHostB-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      BtnLoseHostC (e) {
        $('.loseHostC-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      },
      BtnLoseHostType (e) {
        $('.loseHostType-span').removeClass('warnPort-item-selected');
        e.target.classList.add('warnPort-item-selected');
      }
    }
  }
</script>

<style lang="scss" scoped>
.screening-search-wrap{
  position: relative;
  overflow: hidden;
  #search_group{
    position: absolute;
    right: 15px;
    top: 32px;
    .input-group-btn{
      width: 32px;
      height: 32px;
    }
    .btn-custom{
      position: relative;
      width: 32px;
      height: 32px;
      margin: 0;
      border-radius: 0;
      background: #d1dade url("../../.././../../assets/img/search-dark.png")no-repeat center center;
      z-index: 1000;
   }
  }
  .box{
    position: relative;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px dashed #E3E3E3;
    &:nth-last-child(1){
      border-bottom: none;
    }
    .left{
      width: 100px;
      text-align: right;
      padding:  0 15px 0 0;
    }
    .right{
      width: calc(100% - 100px);
      line-height: 30px;
      .item-wrap{
        float: left;
        span{
          float: left;
          min-width: 120px;
          margin: 4px;
          height: 24px;
          line-height: 24px;
          padding: 0 6px;
          color: #5e5e5e;
          font-size: 12px;
          text-align: left;
          border-radius: 2px;
          background-color: #d1dade;
          transition: all .5s ease-in-out;
          cursor: pointer;
          &:hover{
            color: #FFF;
            background-color: rgba(248, 172, 89, .7);
          }
        }
        button{
          position: relative;
          float: none;
          width: 100px;
          height: 24px;
          border-radius: 0;
          margin: 0 4px;
          transition: all .5s ease-in-out;
          z-index: 999;
          b{
            position: absolute;
            width: 20px;
            line-height: 24px;
            top: -1px;
            background-color: #f0ad4e;
          }
        }
      }
    }
  }
  #port, #agreement, #country, #loseHost{
    .item-wrap{
      span{
        min-width: 80px;
      }
      span:hover{
        cursor: pointer;
        background-color: #019ce5;
        color: #ffffff;
      }
    }
  }
  #port, #agreement, #country{
    .item-wrap {
     span{
       min-width: 120px;
     }
    }
  }
  #loseHost{
    .item-wrap {
      span{
        min-width: 80px;
      }
    }
  }
}
// 过度动画
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}
// 选中的筛选条件
#assets .B-item-selected{
  color: #FFF!important;
  background-color: rgba(248, 172, 89, .7)!important;
}
#port, #agreement, #country, #loseHost{
  .item-wrap{
    span{
      text-align: center;
    }
  }
  .warnPort-item-selected{
    color: #ffffff;
    background-color: #019ce5!important;
  }
  .warnPort-item-success{
    color: #ffffff;
    background-color: #ff8080;

  }
}
</style>
