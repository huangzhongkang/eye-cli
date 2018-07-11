<template>
  <div>
    <!--业务配置=>敏感端口统计-->
    <div v-if="statiscalPort" class="col-md-12">
      <div id="statis_port_chart" style="width: 600px;height: 400px;"></div>
    </div>
    <div v-if="statiscalPortTop10">
      <div id="statis_dest_chart" style="width: 600px;height: 400px;"></div>
    </div>

    <!--威胁报告=>当前报告-->
    <div v-if="currentReport_status" class="clearfix">
      <!--被攻击资产排行-->
      <div id="attack-assets-ranking" style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
      <!--攻击源排行-->
      <div id="attack-source-ranking" style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
      <!--攻击类型分布-->
      <div id="attack-type-distribution" class="pull-left" style="width: 50%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
      <!--攻击风险分布-->
      <div id="attack-risk-distribution" class="pull-left flex" style="width: 50%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
      <!--暂无数据-->
      <div class="pull-left  flex" style="width: 50%; min-height: 400px;margin: 40px auto;padding: 0 15px;">
        <div class="no-data">
          <img src="@/assets/img/tan.png" alt="">&nbsp;&nbsp;暂无排行数据
        </div>
      </div>
      <!--攻击者国家分布-->
      <div id="attack-country-distribution" class="pull-left flex" style="width: 50%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
    </div>
  </div>
</template>

<script>
  /**
   * 引入基本模板
   * 柱状图组件
   * 提示框和title组件
   * **/
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/bar');
  require('echarts/lib/chart/pie');
  require('echarts/lib/component/legend');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');

  export default {
    props: [
      /** 业务配置=>敏感端口status **/
      'statiscalPort',
      'statiscalPortTop10',
      /** 威胁报告=>当前报告status **/
      'currentReport_status'
    ],
    data() {
      return {
        /**
         * Option通用
         * 威胁报告=>当前报告
         * **/
        option_currentReport_ranking: {},// 排行
        option_currentReport_distribution: {}// 分布
      }
    },
    mounted() {
      /**
       * 挂载图表
       *
       * **/
      if (this.statiscalPort) {// 业务配置=>敏感端口
        this.statiscalPortEcharts();
        this.statiscalPortTop10Echarts();
      } else if (this.currentReport_status) {// 威胁报告=>当前报告
        this.attackAssetsRanking();
        this.attackSourceRanking();
        this.attackTypeDistribution();
        this.attackRiskDistribution();
        this.attackCountryDistribution();
      }
    },
    methods: {
      /**
       * Option
       *
       * **/
      /** 当前报告直线图 **/
      optionCurrentReportRanking() {
        this.option_currentReport_ranking = {
          title: {
            text: '',
            x: 'left',
            textStyle: {
              color: 'gray',
              fontFamily: '微软雅黑,Arial, Verdana, sans-serif',
              fontWeight: "normal"
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: false
          },
          calculable: false,
          grid: {
            x: 100,
            y: 50,
            x2: 10
          },
          xAxis: [
            {
              type: 'value',
              boundaryGap: [0, 0.01]
            }
          ],
          yAxis: [
            {
              type: 'category',
              data: []
            }
          ],
          series: [
            {
              name: '攻击数',
              type: 'bar',
              barWidth: 20,
              itemStyle: {normal: {color: '#32AEDE', label: {show: true, position: 'inside'}}},
              data: []
            }
          ]
        };
        this.option_currentReport_ranking.yAxis[0].data = new Array();
        this.option_currentReport_ranking.series[0].data = new Array();
      },
      optionCurrentReportDistribution() {
        this.option_currentReport_distribution = {
          title: {
            text: '',
            x: 'center',
            textStyle: {
              color: 'gray',
              fontWeight: 'normal',
              fontFamily: '微软雅黑,Arial, Verdana, sans-serif'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: ''
          },
          legend: {
            x: 'center',
            y: 'bottom',
            data:[]
          },
          toolbox: {
            show: false
          },
          calculable: true,
          series: [
            {
              name: '攻击类型',
              type: 'pie',
              radius: '50%',
              data: [],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    formatter: ''
                  },
                  labelLine: {show: true}
                }
              }
            }
          ]
        };
        let ChartFormatter = "{a} <br/>{b} : {c} ({d}%)";
        let ReportPieFormatter = "{b}({d}%)";
        this.option_currentReport_distribution.tooltip.formatter = ChartFormatter;
        this.option_currentReport_distribution.series[0].itemStyle.normal.label.formatter = ReportPieFormatter;
        this.option_currentReport_distribution.series[0].data = new Array();
      },

      /**
       * 威胁报告
       *
       * **/
      /**
       * 当前报告=>
       * 被攻击资产排行 **/
      attackAssetsRanking() {
        this.optionCurrentReportRanking();
        this.option_currentReport_ranking.title.text = '被攻击资产排行';
        let myChart = echarts.init(document.getElementById('attack-assets-ranking'), 'macarons');
        let cdata = eval('({"ip":["172.21.195.7","172.21.195.4","222.77.15.10","192.168.172.2","59.61.214.83","10.0.1.62","27.151.221.103","172.23.57.17","222.77.0.131","120.37.91.8"],"count":[20706,20120,18404,4996,2782,2720,2092,1711,1540,1250]})');
        for (let i = cdata.ip.length - 1; i >= 0; i--) {
          this.option_currentReport_ranking.yAxis[0].data.push(cdata.ip[i]);
          this.option_currentReport_ranking.series[0].data.push(cdata.count[i]);
        }
        myChart.setOption(this.option_currentReport_ranking);
      },
      /** 攻击源排行 **/
      attackSourceRanking() {
        this.optionCurrentReportRanking();
        this.option_currentReport_ranking.title.text = '攻击源排行';
        let myChart = echarts.init(document.getElementById('attack-source-ranking'), 'macarons');
        let cdata = eval('({"ip":["192.168.116.57","61.154.117.140","59.83.198.145","42.236.74.153","192.168.172.10","192.168.172.34","218.85.226.241","192.168.172.18","192.168.172.50","117.27.157.122"],"count":[16797,2722,2204,1825,1304,1279,1263,1262,1151,911]})');
        for (let i = cdata.ip.length - 1; i >= 0; i--) {
          this.option_currentReport_ranking.yAxis[0].data.push(cdata.ip[i]);
          this.option_currentReport_ranking.series[0].data.push(cdata.count[i]);
        }
        myChart.setOption(this.option_currentReport_ranking);
      },
      /** 攻击类型分布 **/
      attackTypeDistribution() {
        this.optionCurrentReportDistribution();
        this.option_currentReport_distribution.title.text = '攻击类型分布';
        let myChart = echarts.init(document.getElementById('attack-type-distribution'));
        let cdata = eval('({"name":["端口探测(150346)","暴力破解密码攻击(7024)","异地登录攻击(6985)","信息探测(1114)","命令执行(247)","边界设备攻击(174)","远程溢出攻击(92)","web攻击(66)","JAVA反序列攻击(32)","黑客指令执行(29)"],"nums":[150346,7024,6985,1114,247,174,92,66,32,29]})');
        for (let i = 0; i < cdata.name.length; i++) {
          let obj = {
            name: cdata.name[i],
            value: cdata.nums[i]
          };
          this.option_currentReport_distribution.series[0].data.push(obj);
          this.option_currentReport_distribution.legend.data.push(obj.name);
        }
        myChart.setOption(this.option_currentReport_distribution);
      },
      /** 攻击风险分布 **/
      attackRiskDistribution() {
        this.optionCurrentReportDistribution();
        this.option_currentReport_distribution.title.text = '攻击风险分布';
        let myChart = echarts.init(document.getElementById('attack-risk-distribution'));
        this.$http.get('../../../../static/json/echarts/current-report.json').then(res => {
          let cdata = res.data.risk[0];
          for (let i = 0; i < cdata.name.length; i++) {
            let obj = {
              name: cdata.name[i],
              value: cdata.nums[i]
            };
            this.option_currentReport_distribution.series[0].data.push(obj);
            this.option_currentReport_distribution.legend.data.push(obj.name);
          }
          myChart.setOption(this.option_currentReport_distribution);
        });
      },
      /** 攻击者国家分布 **/
      attackCountryDistribution() {
        this.optionCurrentReportDistribution();
        this.option_currentReport_distribution.title.text = '攻击风险分布';
        let myChart = echarts.init(document.getElementById('attack-country-distribution'));
        this.$http.get('../../../../static/json/echarts/current-report.json').then(res => {
          let cdata = res.data.country[0];
          for (let i = 0; i < cdata.name.length; i++) {
            let obj = {
              name: cdata.name[i],
              value: cdata.nums[i]
            };
            this.option_currentReport_distribution.series[0].data.push(obj);
            this.option_currentReport_distribution.legend.data.push(obj.name);
          }
          myChart.setOption(this.option_currentReport_distribution);
        });
      },

      /**
       * 业务配置
       * **/
      /** 敏感端口 **/
      statiscalPortEcharts() {
        let myChart = echarts.init(document.getElementById('statis_port_chart'), 'macarons');
        let option = {
          title: {
            show: false
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: false
          },
          calculable: false,
          grid: {
            x: 100,
            y: 10,
            x2: 10
          },
          xAxis: [
            {
              type: 'value',
              boundaryGap: [0, 0.01]
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisLabel: {
                interval: 0,
                clickable: true,
                textStyle: {
                  color: '#1e90ff',
                  fontSize: 12,
                  fontStyle: 'normal'
                }
              },
              data: []
            }
          ],
          series: [
            {
              name: '攻击数',
              type: 'bar',
              barWidth: 20,
              itemStyle: {normal: {color: '#32AEDE', label: {show: true, position: 'inside'}}},
              data: []
            }
          ]
        };
        let cdata = eval('({"ip":[80],"count":[64]})');
        option.yAxis[0].data = new Array();
        option.series[0].data = new Array();
        for (let i = cdata.ip.length - 1; i >= 0; i--) {
          option.yAxis[0].data.push(cdata.ip[i]);
          option.series[0].data.push(cdata.count[i]);
        }
        myChart.setOption(option);
      },
      /** 敏感端口Top10 **/
      statiscalPortTop10Echarts() {
        let myChart = echarts.init(document.getElementById('statis_dest_chart'), 'macarons');
        let option = {
          title: {
            show: false
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: false
          },
          calculable: false,
          grid: {
            x: 100,
            y: 10,
            x2: 10
          },
          xAxis: [
            {
              type: 'value',
              boundaryGap: [0, 0.01]
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisLabel: {
                interval: 0,
                clickable: true,
                textStyle: {
                  color: '#1e90ff',
                  fontSize: 12,
                  fontStyle: 'normal'
                }
              },
              data: []
            }
          ],
          series: [
            {
              name: '攻击数',
              type: 'bar',
              barWidth: 20,
              itemStyle: {normal: {color: '#32AEDE', label: {show: true, position: 'inside'}}},
              data: []
            }
          ]
        };
        let cdata = eval('({"ip":["59.56.194.181","120.43.238.30","120.37.140.106","121.205.6.240","59.61.214.228","121.205.6.241","27.152.185.139","27.152.185.205","27.152.185.174","27.152.180.153"],"count":[1,1,1,1,1,1,1,1,1,1]})');
        option.yAxis[0].data = new Array();
        option.series[0].data = new Array();
        for (let i = cdata.ip.length - 1; i >= 0; i--) {
          option.yAxis[0].data.push(cdata.ip[i]);
          option.series[0].data.push(cdata.count[i]);
        }

        myChart.setOption(option);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .no-data{
    font-size: 20px;
    font-weight: bold;
    img{
      width: 24px;
      height: 24px;
    }
  }
</style>
