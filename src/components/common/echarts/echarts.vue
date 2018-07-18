<template>
    <div>
        <!--决策分析 => 攻击分析-->
        <div v-if="attack_analysis">
            <div class="col-sm-12">
                <h1 class="common-title">攻击源IP</h1>
                <div class="common-box">
                    <div id="attack-BackIP" style="height: 400px;"></div>
                </div>
            </div>

            <div class="col-sm-6">
                <h1 class="common-title">攻击类型Top10</h1>
                <div class="common-box">
                    <div id="attack-type" style="height: 400px;"></div>
                </div>
            </div>

            <div class=" col-sm-6">
                <h1 class="common-title">攻击类型Top10</h1>
                <div class="common-box">
                    <!--<div id="hacker-toolsTop10" style="height: 400px;"></div>-->
                    <div class="box" style="border: none;">
                        <div class="flex"
                             style="width: 100%; min-height: 200px;margin: 40px auto;padding: 0 15px;">
                            <div class="no-data">
                                <img src="@/assets/img/tan.png" alt="">&nbsp;&nbsp;暂无排行数据
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--资产分析-->
        <div v-if="assets_analysis_ranking" class="col-sm-12">
            <div id="attack-hacker-ranking" style="height: 400px;"></div>
        </div>
        <div v-if="assets_attacked" class="col-sm-12">
            <div id="assets-attacked-ranking" style="width: 1024px; height: 400px;"></div>
        </div>
        <div v-if="lose_host" class="col-sm-12">
            <div id="lose-host-ranking" style="width: 1024px; height: 400px;">
                <!--暂无数据-->
                <div class="pull-left  flex" style="width: 100%; min-height: 400px;padding: 0 15px;">
                    <div class="no-data">
                        <img src="@/assets/img/tan.png" alt="">&nbsp;&nbsp;暂无排行数据
                    </div>
                </div>
            </div>
        </div>
        <!--攻击分布-->
        <div v-if="global_country">
            <div id="global-country" style="width: 100%;height: 600px;"></div>
        </div>

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
            <div id="attack-assets-ranking"
                 style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
            <!--攻击源排行-->
            <div id="attack-source-ranking"
                 style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
            <!--攻击类型分布-->
            <div id="attack-type-distribution" class="pull-left"
                 style="width: 50%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
            <!--攻击风险分布-->
            <div id="attack-risk-distribution" class="pull-left flex"
                 style="width: 50%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
            <!--暂无数据-->
            <div class="pull-left  flex" style="width: 50%; min-height: 400px;margin: 40px auto;padding: 0 15px;">
                <div class="no-data">
                    <img src="@/assets/img/tan.png" alt="">&nbsp;&nbsp;暂无排行数据
                </div>
            </div>
            <!--攻击者国家分布-->
            <div id="attack-country-distribution" class="pull-left flex"
                 style="width: 50%; min-height: 400px;margin: 40px auto;padding: 0 15px;"></div>
        </div>
        <!--威胁报告=>安全周报-->
        <div v-if="securityWeekly_status">
            <!--本周黑客攻击趋势-->
            <div class="col-md-7" style="padding-left: 0;">
                <div class="box">
                    <div id="hacking-trends" class="flex"
                         style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;">
                    </div>
                </div>
            </div>
            <!--本周攻击类型分布-->
            <div class="col-md-5">
                <div class="box">
                    <div id="weekly-type-distribution" class="flex"
                         style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;">
                    </div>
                </div>
            </div>
            <!--本周被攻击资产统计-->
            <div class="col-md-7" style="padding-left: 0;">
                <div class="box">
                    <div id="beingAttacked-statistical" class="flex"
                         style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;">
                    </div>
                </div>
            </div>
            <!--无数据-->
            <div class="col-md-5">
                <div class="box">
                    <div class="flex"
                         style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;">
                        <div class="no-data">
                            <img src="@/assets/img/tan.png" alt="">&nbsp;&nbsp;暂无排行数据
                        </div>
                    </div>
                </div>
            </div>
            <!--加载中-->
            <div class="col-md-6" style="padding-left: 0;">
                <div class="box">
                    <div class="flex"
                         style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;">
                        <div class="">
                            <img src="@/assets/img/loading.gif" width="60" height="24" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <!--恶意IP全球分布-->
            <div class="col-md-6">
                <div class="box">
                    <div id="malicious-global" class="flex"
                         style="width: 100%; min-height: 400px;margin: 40px auto;padding: 0 15px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * 引入基本模板
     * 柱状图组件
     * 提示框和title组件
     * **/
    import echarts from 'echarts'
    require('echarts/map/js/world');
    require('echarts/map/js/china');

    export default {
        props: [
            /**
             * 决策分析=>
             *
             *攻击分析status
             * **/
            'attack_analysis',
            //资产分析
            'assets_analysis_ranking',
            'assets_attacked',
            'lose_host',
            'global_country',

            /**
             * 业务配置=>
             * 敏感端口status
             *
             * **/
            'statiscalPort',
            'statiscalPortTop10',
            /**
             * 威胁报告=>
             *
             * **/
            // 当前报告status
            'currentReport_status',
            // 安全周报
            'securityWeekly_status'
        ],
        data() {
            return {
                /**
                 * Option通用
                 * 项目分析=>攻击分析
                 * **/
                option_attackAnalysis: {},
                // 资产分析排行
                option_assetsAnalysis: {},
                // 攻击分布
                option_globalCountry: {},

                /**
                 * Option通用
                 * 威胁报告=>当前报告
                 * **/
                option_currentReport_ranking: {}, // 排行
                option_currentReport_distribution: {}, // 分布
                option_statistical_port: {}, // 敏感端口
                /** 威胁报告=>安全周报 **/
                option_securityWeekly_trends: {}, // 攻击趋势
                option_weekly_distribution: {}, // 本周分布
                option_weekly_statistical: {}, // 本周统计
                option_malicious_global: {} // 全球恶意IP
            }
        },
        mounted() {
            /**
             * 挂载图表
             *
             * **/
            if (this.attack_analysis) { // 攻击分析
                this.attackBackIPTop10();
                this.attackTypeTop10();
            } else if (this.assets_analysis_ranking) {
                this.assetsHackRanking();
            } else if (this.assets_attacked) {
                this.assetsAttackedRanking();
            }

            if (this.global_country) { // 全国分布
                this.globalCountry();
            }

            if (this.statiscalPort) {// 业务配置=>敏感端口
                this.statiscalPortEcharts();
                this.statiscalPortTop10Echarts();
            } else if (this.currentReport_status) { // 威胁报告=>当前报告
                this.attackAssetsRanking();
                this.attackSourceRanking();
                this.attackTypeDistribution();
                this.attackRiskDistribution();
                this.attackCountryDistribution();
            } else if (this.securityWeekly_status) { // 安全周报
                this.hackingTrends();
                this.weeklyTypeDistribution();
                this.weeklyWeeklyStatistical();
                this.weeklyMalicious_global();
            }
        },
        methods: {
            /**
             * Option
             *
             **/

            /** 决策分析 **/
            // 攻击分析直线图
            optionAttackAnalysis() {
                this.option_attackAnalysis = {
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
                            itemStyle: {
                                normal: {
                                    color: '#32AEDE',
                                    label: {show: true, position: 'right', textStyle: {color: '#1e90ff'}}
                                }
                            },
                            data: []
                        }
                    ]
                };
                this.option_attackAnalysis.yAxis[0].data = new Array();
                this.option_attackAnalysis.series[0].data = new Array();
            },
            // 资产分析竖线图
            optionAssetsAnalysis() {
                this.option_assetsAnalysis = {
                    title: {
                        text: '',
                        textStyle: {
                            color: '#32AEDE',
                            fontWeight: '400',
                            fontFamily: '微软雅黑,Arial, Verdana, sans-serif'
                        }
                    },
                    dataZoom: {
                        show: false,
                        realtime: true,
                        height: 20
                    },
                    tooltip: {
                        trigger: 'axis'
                    },

                    toolbox: {
                        show: false
                    },
                    calculable: true,
                    xAxis: [
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
                    yAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        }
                    ],
                    series: [
                        {
                            name: '攻击数',
                            type: 'bar',
                            barWidth: 50,
                            itemStyle: {
                                normal: {
                                    color: '#32AEDE',
                                    label: {show: true, position: 'top', textStyle: {color: '#1e90ff'}}
                                }
                            },
                            data: []
                        }
                    ]
                };
                this.option_assetsAnalysis.yAxis[0].data = new Array();
                this.option_assetsAnalysis.series[0].data = new Array();
            },
            // 攻击分布全国、全球地图
            optionGlobalCountry() {
                this.option_globalCountry = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a}<br>{b}：{c}',
                        textStyle: {
                            align: 'left'
                        }
                    },
                    dataRange: {
                        min: 0,
                        max: 0,
                        x: 'left',
                        y: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        color: ['#32AEDE', '#DFFEFE']
                    },
                    series: [
                        {
                            name: '恶意IP',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            zoom: 1.1,
                            itemStyle: {
                                normal: {label: {show: true}},
                                emphasis: {label: {show: true}}
                            },
                            data: []
                        }
                    ]
                };
            },

            /** 当前报告 **/
            // 当前报告直线图
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
                        data: []
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
            // 敏感端口直线图
            optionStatisticalPort() {
                this.option_statistical_port = {
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
            },

            /** 安全周报 **/
            // 黑客攻击趋势
            optionHackingTrends() {
                this.option_securityWeekly_trends = {
                    title: {
                        text: '',
                        x: 'left',
                        textStyle: {
                            color: '#32AEDE',
                            fontWeight: 'bold',
                            fontFamily: '微软雅黑,Arial, Verdana, sans-serif'
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    toolbox: {
                        show: false
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: [],
                            axisLine: {
                                lineStyle: {
                                    color: '#32AEDE'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#32AEDE'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '攻击数',
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default',
                                        color: '#32AEDE'
                                    },
                                    borderColor: '#32AEDE',
                                    color: '#32AEDE'
                                }
                            },
                            data: []
                        }
                    ]
                };
            },
            // 本周攻击分布
            optionWeeklyDistribution() {
                this.option_weekly_distribution = {
                    title: {
                        text: '',
                        x: 'left',
                        textStyle: {
                            color: '#32AEDE',
                            fontWeight: 'bold',
                            fontFamily: '微软雅黑,Arial, Verdana, sans-serif'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: ''
                    },
                    legend: {
                        // show: false,
                        type: 'scroll',
                        orient: 'vertical',
                        right: 10,
                        top: 20,
                        bottom: 20,
                        data: []
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
                            center: ['center', '75%'],
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
                this.option_weekly_distribution.tooltip.formatter = ChartFormatter;
                this.option_weekly_distribution.series[0].itemStyle.normal.label.formatter = ReportPieFormatter;
                this.option_weekly_distribution.series[0].data = new Array();
            },
            // 本周统计
            optionWeeklyStatistical() {
                this.option_weekly_statistical = {
                    title: {
                        text: '',
                        x: 'left',
                        textStyle: {
                            color: '#32AEDE',
                            fontWeight: 'bold',
                            fontFamily: '微软雅黑,Arial, Verdana, sans-serif'
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    toolbox: {
                        show: false
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {interval: 0},
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        }
                    ],
                    series: [
                        {
                            name: '攻击数',
                            type: 'bar',
                            itemStyle: {normal: {color: '#32AEDE', label: {show: true, position: 'inside'}}},
                            data: []
                        }
                    ]
                };
            },
            // 全球恶意IP
            optionMaliciousGlobal() {
                this.option_malicious_global = {
                    title: {
                        text: '',
                        x: 'left',
                        textStyle: {
                            color: '#32AEDE',
                            fontWeight: 'bold',
                            fontFamily: '微软雅黑,Arial, Verdana, sans-serif'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a}<br>{b}：{c}',
                        textStyle: {
                            align: 'left'
                        }
                    },
                    dataRange: {
                        min: 0,
                        max: 0,
                        x: 'left',
                        y: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        color: ['#f3565d', 'yellow', '#32AEDE']
                    },
                    series: [
                        {
                            name: '恶意IP',
                            type: 'map',
                            mapType: 'world',
                            roam: true,
                            selectedMode: 'single',
                            itemStyle: {
                                normal: {label: {show: false}},
                                emphasis: {label: {show: true}}
                            },
                            data: [],
                            nameMap: {}
                        }
                    ]
                };
            },

            /**
             * 决策分析
             *
             * **/
            /** 攻击分析=> **/
            // 攻击源IPTop10
            attackBackIPTop10() {
                let myChart = echarts.init(document.getElementById('attack-BackIP'), 'macarons');
                this.$http.get('../../../../static/json/attack-analysis/attackBackIPTop10.json').then(res => {
                    let cdata = res.data.attackBackIP[0];
                    this.optionAttackAnalysis();
                    for (let i = cdata.ip.length - 1; i >= 0; i--) {
                        this.option_attackAnalysis.yAxis[0].data.push(cdata.ip[i]);
                        this.option_attackAnalysis.series[0].data.push(cdata.count[i]);
                    }
                    myChart.setOption(this.option_attackAnalysis);
                });
            },
            // 攻击类型 Top10
            attackTypeTop10() {
                let myChart = echarts.init(document.getElementById('attack-type'), 'macarons');
                this.$http.get('../../../../static/json/attack-analysis/attackBackIPTop10.json').then(res => {
                    let cdata = res.data.attackType[0];
                    this.optionAttackAnalysis();
                    this.option_attackAnalysis.title.text = '被攻击资产排行';
                    for (let i = cdata.name.length - 1; i >= 0; i--) {
                        this.option_attackAnalysis.yAxis[0].data.push(cdata.name[i]);
                        this.option_attackAnalysis.series[0].data.push(cdata.nums[i]);
                    }
                    myChart.setOption(this.option_attackAnalysis);
                });
            },
            /** 资产分析 **/
            // 资产黑客数排行
            assetsHackRanking() {
                let myChart = echarts.init(document.getElementById('attack-hacker-ranking'), 'macarons');
                console.log('attack-hacker-ranking');
                this.$http.get('../../../../static/json/assets-hacker-ranking/assets-hacker-ranking.json').then(res => {
                    let cdata = res.data.assetsHackerRanking[0];
                    this.optionAssetsAnalysis();
                    this.option_assetsAnalysis.title.text = '资产黑客数排行【主机数：1台】';
                    if (cdata.name.length > 1000) cdata.name.length = 1000;
                    if (cdata.name.length > 10) {
                        let znums = parseInt((10 / cdata.name.length) * 100);
                        this.option_assetsAnalysis.dataZoom.show = true;
                        this.option_assetsAnalysis.dataZoom.start = 0;
                        this.option_assetsAnalysis.dataZoom.end = znums;
                    }
                    for (let i = 0; i < cdata.name.length; i++) {
                        this.option_assetsAnalysis.xAxis[0].data.push(cdata.name[i]);
                        this.option_assetsAnalysis.series[0].data.push(cdata.count[i]);
                    }

                    myChart.setOption(this.option_assetsAnalysis);
                });
            },
            // 资产被攻击排行
            assetsAttackedRanking() {
                let myChart = echarts.init(document.getElementById('assets-attacked-ranking'), 'macarons');
                this.$http.get('../../../../static/json/assets-hacker-ranking/assets-hacker-ranking.json').then(res => {
                    let cdata = res.data.assetsHackerRanking[0];
                    this.optionAssetsAnalysis();
                    this.option_assetsAnalysis.title.text = '资产被攻击次数【主机数：1817台】';
                    if (cdata.name.length > 1000) cdata.name.length = 1000;
                    if (cdata.name.length > 10) {
                        let znums = parseInt((10 / cdata.name.length) * 100);
                        this.option_assetsAnalysis.dataZoom.show = true;
                        this.option_assetsAnalysis.dataZoom.start = 0;
                        this.option_assetsAnalysis.dataZoom.end = znums;
                    }
                    for (let i = 0; i < cdata.name.length; i++) {
                        this.option_assetsAnalysis.xAxis[0].data.push(cdata.name[i]);
                        this.option_assetsAnalysis.series[0].data.push(cdata.count[i]);
                    }

                    myChart.setOption(this.option_assetsAnalysis);
                });
            },
            /** 攻击分布 **/
            // 全国分布
            globalCountry() {
                let myChart = echarts.init(document.getElementById('global-country'));
                this.$http.get('../../../../static/json/global-distribution/global.json').then(res => {
                    let cdata = res.data.country;
                    this.optionGlobalCountry();
                    this.option_globalCountry.dataRange.max = parseInt('53');
                    for (let i=0; i<cdata.length; i++) {
                        let obj = {
                            name: cdata[i].name,
                            value: cdata[i].value
                        };
                        this.option_globalCountry.series[0].data.push(obj);
                    }
                    myChart.setOption(this.option_globalCountry);
                });
            },

            /**
             * 威胁报告
             *
             * **/
            /**
             * 当前报告=>
             * 被攻击资产排行 **/
            attackAssetsRanking() {
                let myChart = echarts.init(document.getElementById('attack-assets-ranking'), 'macarons');
                this.$http.get('../../../../static/json/echarts/current-report.json').then(res => {
                    let cdata = res.data.assets[0];
                    this.optionCurrentReportRanking();
                    this.option_currentReport_ranking.title.text = '被攻击资产排行';
                    for (let i = cdata.ip.length - 1; i >= 0; i--) {
                        this.option_currentReport_ranking.yAxis[0].data.push(cdata.ip[i]);
                        this.option_currentReport_ranking.series[0].data.push(cdata.count[i]);
                    }
                    myChart.setOption(this.option_currentReport_ranking);
                });
            },
            // 攻击源排行
            attackSourceRanking() {
                let myChart = echarts.init(document.getElementById('attack-source-ranking'), 'macarons');
                this.$http.get('../../../../static/json/echarts/current-report.json').then(res => {
                    let cdata = res.data.source[0];
                    this.optionCurrentReportRanking();
                    this.option_currentReport_ranking.title.text = '攻击源排行';
                    for (let i = cdata.ip.length - 1; i >= 0; i--) {
                        this.option_currentReport_ranking.yAxis[0].data.push(cdata.ip[i]);
                        this.option_currentReport_ranking.series[0].data.push(cdata.count[i]);
                    }
                    myChart.setOption(this.option_currentReport_ranking);
                });
            },
            // 攻击类型分布
            attackTypeDistribution() {
                let myChart = echarts.init(document.getElementById('attack-type-distribution'));
                this.$http.get('../../../../static/json/echarts/current-report.json').then(res => {
                    let cdata = res.data.type[0];
                    this.optionCurrentReportDistribution();
                    this.option_currentReport_distribution.title.text = '攻击类型分布';
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
            // 攻击风险分布
            attackRiskDistribution() {
                let myChart = echarts.init(document.getElementById('attack-risk-distribution'));
                this.$http.get('../../../../static/json/echarts/current-report.json').then(res => {
                    let cdata = res.data.risk[0];
                    this.optionCurrentReportDistribution();
                    this.option_currentReport_distribution.title.text = '攻击风险分布';
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
            // 攻击者国家分布
            attackCountryDistribution() {
                let myChart = echarts.init(document.getElementById('attack-country-distribution'));
                this.$http.get('../../../../static/json/echarts/current-report.json').then(res => {
                    let cdata = res.data.country[0];
                    this.optionCurrentReportDistribution();
                    this.option_currentReport_distribution.title.text = '攻击者国家分布';
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

            /** 安全周报 **/
            // 黑客攻击趋势
            hackingTrends() {
                let myChart = echarts.init(document.getElementById('hacking-trends'));
                this.$http.get('../../../../static/json/security-weekly/echarts.json').then(res => {
                    let cdata = res.data.trends[0];
                    this.optionHackingTrends();
                    this.option_securityWeekly_trends.title.text = '本周黑客攻击趋势';
                    for (let i = 0; i < cdata.date.length; i++) {
                        this.option_securityWeekly_trends.xAxis[0].data.push(cdata.date[i]);
                        this.option_securityWeekly_trends.series[0].data.push(cdata.nums[i]);
                    }
                    myChart.setOption(this.option_securityWeekly_trends);
                });
            },
            // 本周攻击类型分布
            weeklyTypeDistribution() {
                let myChart = echarts.init(document.getElementById('weekly-type-distribution'));
                this.$http.get('../../../../static/json/security-weekly/echarts.json').then(res => {
                    let cdata = res.data.type[0];
                    this.optionWeeklyDistribution();
                    this.option_weekly_distribution.title.text = '本周攻击类型分布';
                    for (let i = 0; i < cdata.name.length; i++) {
                        let obj = {
                            name: cdata.name[i],
                            value: cdata.nums[i]
                        };
                        this.option_weekly_distribution.series[0].data.push(obj);
                        this.option_weekly_distribution.legend.data.push(obj.name);

                    }
                    myChart.setOption(this.option_weekly_distribution);
                });
            },
            // 本周被攻击资产统计
            weeklyWeeklyStatistical() {
                let myChart = echarts.init(document.getElementById('beingAttacked-statistical'));
                this.$http.get('../../../../static/json/security-weekly/echarts.json').then(res => {
                    let cdata = res.data.statistical[0];
                    this.optionWeeklyStatistical();
                    this.option_weekly_statistical.title.text = '本周被攻击资产统计';
                    for (let i = 0; i < cdata.dest.length; i++) {
                        this.option_weekly_statistical.xAxis[0].data.push(cdata.dest[i]);
                        this.option_weekly_statistical.series[0].data.push(cdata.nums[i]);
                    }
                    myChart.setOption(this.option_weekly_statistical);
                });
            },
            // 全球恶意IP分布
            weeklyMalicious_global() {
                let myChart = echarts.init(document.getElementById('malicious-global'));
                this.$http.get('../../../../static/json/security-weekly/echarts.json').then(res => {
                    let cdata = res.data.global;
                    this.optionMaliciousGlobal();
                    this.option_malicious_global.title.text = '本周恶意IP全球分布';
                    this.option_malicious_global.series[0].nameMap = {
                        'Afghanistan': '阿富汗',
                        'Angola': '安哥拉',
                        'Albania': '阿尔巴尼亚',
                        'United Arab Emirates': '阿联酋',
                        'Argentina': '阿根廷',
                        'Armenia': '亚美尼亚',
                        'French Southern and Antarctic Lands': '法属南半球和南极领地',
                        'Australia': '澳大利亚',
                        'Austria': '奥地利',
                        'Azerbaijan': '阿塞拜疆',
                        'Burundi': '布隆迪',
                        'Belgium': '比利时',
                        'Benin': '贝宁',
                        'Burkina Faso': '布基纳法索',
                        'Bangladesh': '孟加拉国',
                        'Bulgaria': '保加利亚',
                        'The Bahamas': '巴哈马',
                        'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
                        'Belarus': '白俄罗斯',
                        'Belize': '伯利兹',
                        'Bermuda': '百慕大',
                        'Bolivia': '玻利维亚',
                        'Brazil': '巴西',
                        'Brunei': '文莱',
                        'Bhutan': '不丹',
                        'Botswana': '博茨瓦纳',
                        'Central African Republic': '中非共和国',
                        'Canada': '加拿大',
                        'Switzerland': '瑞士',
                        'Chile': '智利',
                        'China': '中国',
                        'Ivory Coast': '象牙海岸',
                        'Cameroon': '喀麦隆',
                        'Democratic Republic of the Congo': '刚果民主共和国',
                        'Republic of the Congo': '刚果共和国',
                        'Colombia': '哥伦比亚',
                        'Costa Rica': '哥斯达黎加',
                        'Cuba': '古巴',
                        'Northern Cyprus': '北塞浦路斯',
                        'Cyprus': '塞浦路斯',
                        'Czech Republic': '捷克共和国',
                        'Germany': '德国',
                        'Djibouti': '吉布提',
                        'Denmark': '丹麦',
                        'Dominican Republic': '多明尼加共和国',
                        'Algeria': '阿尔及利亚',
                        'Ecuador': '厄瓜多尔',
                        'Egypt': '埃及',
                        'Eritrea': '厄立特里亚',
                        'Spain': '西班牙',
                        'Estonia': '爱沙尼亚',
                        'Ethiopia': '埃塞俄比亚',
                        'Finland': '芬兰',
                        'Fiji': '斐',
                        'Falkland Islands': '福克兰群岛',
                        'France': '法国',
                        'Gabon': '加蓬',
                        'United Kingdom': '英国',
                        'Georgia': '格鲁吉亚',
                        'Ghana': '加纳',
                        'Guinea': '几内亚',
                        'Gambia': '冈比亚',
                        'Guinea Bissau': '几内亚比绍',
                        'Equatorial Guinea': '赤道几内亚',
                        'Greece': '希腊',
                        'Greenland': '格陵兰',
                        'Guatemala': '危地马拉',
                        'French Guiana': '法属圭亚那',
                        'Guyana': '圭亚那',
                        'Honduras': '洪都拉斯',
                        'Croatia': '克罗地亚',
                        'Haiti': '海地',
                        'Hungary': '匈牙利',
                        'Indonesia': '印尼',
                        'India': '印度',
                        'Ireland': '爱尔兰',
                        'Iran': '伊朗',
                        'Iraq': '伊拉克',
                        'Iceland': '冰岛',
                        'Israel': '以色列',
                        'Italy': '意大利',
                        'Jamaica': '牙买加',
                        'Jordan': '约旦',
                        'Japan': '日本',
                        'Kazakhstan': '哈萨克斯坦',
                        'Kenya': '肯尼亚',
                        'Kyrgyzstan': '吉尔吉斯斯坦',
                        'Cambodia': '柬埔寨',
                        'South Korea': '韩国',
                        'Kosovo': '科索沃',
                        'Kuwait': '科威特',
                        'Laos': '老挝',
                        'Lebanon': '黎巴嫩',
                        'Liberia': '利比里亚',
                        'Libya': '利比亚',
                        'Sri Lanka': '斯里兰卡',
                        'Lesotho': '莱索托',
                        'Lithuania': '立陶宛',
                        'Luxembourg': '卢森堡',
                        'Latvia': '拉脱维亚',
                        'Morocco': '摩洛哥',
                        'Moldova': '摩尔多瓦',
                        'Madagascar': '马达加斯加',
                        'Mexico': '墨西哥',
                        'Macedonia': '马其顿',
                        'Mali': '马里',
                        'Myanmar': '缅甸',
                        'Montenegro': '黑山',
                        'Mongolia': '蒙古',
                        'Mozambique': '莫桑比克',
                        'Mauritania': '毛里塔尼亚',
                        'Malawi': '马拉维',
                        'Malaysia': '马来西亚',
                        'Namibia': '纳米比亚',
                        'New Caledonia': '新喀里多尼亚',
                        'Niger': '尼日尔',
                        'Nigeria': '尼日利亚',
                        'Nicaragua': '尼加拉瓜',
                        'Netherlands': '荷兰',
                        'Norway': '挪威',
                        'Nepal': '尼泊尔',
                        'New Zealand': '新西兰',
                        'Oman': '阿曼',
                        'Pakistan': '巴基斯坦',
                        'Panama': '巴拿马',
                        'Peru': '秘鲁',
                        'Philippines': '菲律宾',
                        'Papua New Guinea': '巴布亚新几内亚',
                        'Poland': '波兰',
                        'Puerto Rico': '波多黎各',
                        'North Korea': '北朝鲜',
                        'Portugal': '葡萄牙',
                        'Paraguay': '巴拉圭',
                        'Qatar': '卡塔尔',
                        'Romania': '罗马尼亚',
                        'Russia': '俄罗斯',
                        'Rwanda': '卢旺达',
                        'Western Sahara': '西撒哈拉',
                        'Saudi Arabia': '沙特阿拉伯',
                        'Sudan': '苏丹',
                        'South Sudan': '南苏丹',
                        'Senegal': '塞内加尔',
                        'Solomon Islands': '所罗门群岛',
                        'Sierra Leone': '塞拉利昂',
                        'El Salvador': '萨尔瓦多',
                        'Somaliland': '索马里兰',
                        'Somalia': '索马里',
                        'Republic of Serbia': '塞尔维亚共和国',
                        'Suriname': '苏里南',
                        'Slovakia': '斯洛伐克',
                        'Slovenia': '斯洛文尼亚',
                        'Sweden': '瑞典',
                        'Swaziland': '斯威士兰',
                        'Syria': '叙利亚',
                        'Chad': '乍得',
                        'Togo': '多哥',
                        'Thailand': '泰国',
                        'Tajikistan': '塔吉克斯坦',
                        'Turkmenistan': '土库曼斯坦',
                        'East Timor': '东帝汶',
                        'Trinidad and Tobago': '特里尼达和多巴哥',
                        'Tunisia': '突尼斯',
                        'Turkey': '土耳其',
                        'United Republic of Tanzania': '坦桑尼亚联合共和国',
                        'Uganda': '乌干达',
                        'Ukraine': '乌克兰',
                        'Uruguay': '乌拉圭',
                        'United States of America': '美国',
                        'Uzbekistan': '乌兹别克斯坦',
                        'Venezuela': '委内瑞拉',
                        'Vietnam': '越南',
                        'Vanuatu': '瓦努阿图',
                        'West Bank': '西岸',
                        'Yemen': '也门',
                        'South Africa': '南非',
                        'Zambia': '赞比亚',
                        'Zimbabwe': '津巴布韦'
                    };
                    this.option_malicious_global.dataRange.max = parseInt('414514');
                    for (let i = 0; i < cdata.length; i++) {
                        let obj = {
                            name: cdata[i].name,
                            value: cdata[i].value
                        };
                        this.option_malicious_global.series[0].data.push(obj);
                    }
                    myChart.setOption(this.option_malicious_global);
                });
            },

            /**
             * 业务配置
             * **/
            /** 敏感端口 **/
            statiscalPortEcharts() {
                console.log(this.statiscalPort)
                let myChart = echarts.init(document.getElementById('statis_port_chart'), 'macarons');
                this.$http.get('../../../../static/json/echarts/statistical-port.json').then(res => {
                    let cdata = res.data.statisticalPort[0];
                    this.optionStatisticalPort();
                    for (let i = cdata.ip.length - 1; i >= 0; i--) {
                        this.option_statistical_port.yAxis[0].data.push(cdata.ip[i]);
                        this.option_statistical_port.series[0].data.push(cdata.count[i]);
                    }
                    myChart.setOption(this.option_statistical_port);
                });
            },
            /** 敏感端口Top10 **/
            statiscalPortTop10Echarts() {
                let myChart = echarts.init(document.getElementById('statis_dest_chart'), 'macarons');
                this.$http.get('../../../../static/json/echarts/statistical-port.json').then(res => {
                    let cdata = res.data.statisticalPort10[0];
                    this.optionStatisticalPort();
                    for (let i = cdata.ip.length - 1; i >= 0; i--) {
                        this.option_statistical_port.yAxis[0].data.push(cdata.ip[i]);
                        this.option_statistical_port.series[0].data.push(cdata.count[i]);
                    }
                    myChart.setOption(this.option_statistical_port);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .no-data {
        font-size: 20px;
        font-weight: bold;
        img {
            width: 24px;
            height: 24px;
        }
    }

    .box {
        margin-bottom: 15px;
        padding-top: 20px;
        padding-bottom: 20px;
        border: 1px solid #e3e3e3;
        border-radius: 4px;
        ul {
            float: left;
        }
        .left {
            float: left;
            width: 20%;
            padding: 10px;
            border-right: 1px #ddd solid;
            ul {
                width: 100%;
                li {
                    text-align: center;
                }
                li:nth-of-type(2) {
                    font-size: 60px;
                    color: #74AD22;
                    line-height: 120px;
                    font-family: '微软雅黑', Arial, Verdana, sans-serif;
                }
            }
        }
        .right {
            width: 80%;
            border: none;
            ul {
                width: 30%;
                li:nth-of-type(2) {
                    font-size: 30px;
                    line-height: 90px;
                    color: rgb(103, 106, 108);
                }
                li:nth-of-type(3) {
                    color: rgb(128, 128, 128);
                }
            }
        }
    }

    .padding-15px {
        padding: 0 15px;
    }
</style>
