<template>
    <div class="email-notice">
        <div class="col-md-4" style="padding-left: 0;">
            <p class="alert alert-danger" style="padding:5px;margin-bottom:5px;">
                <i class="fa fa-info-circle"></i> 配置完邮件服务器才可以开启邮件通知
            </p>
            <div class="switch load-switch" data-on="info" data-off="success">
                <input type="checkbox" checked/>
            </div>
        </div>
        <div class="col-md-8">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">参数配置</h3>
                </div>
                <div class="panel-body">
                    <div class="common-table-layout">
                        <div class="left">资产IP：</div>
                        <div class="right">
                            <el-input class="input-style-140px" placeholder="添加新资产！"></el-input>
                            <div @click="clickAddNewAssets" class="btn btn-primary btn-xs btn-height-24px"><i
                                    class="fa fa-plus"></i></div>
                            <div style="clear: both;"></div>
                            <div class="note">
                                默认所有资产IP
                            </div>
                        </div>
                    </div>
                    <div class="common-table-layout">
                        <div class="left">威胁程度：</div>
                        <div class="right">
                            <div class="inline-block" v-for="item in data_threatConditions">
                                <span>{{item.degree}}</span>
                                <div class="switch load-switch switch-small inline-block" data-on="info"
                                     data-off="success">
                                    <input type="checkbox" checked/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="common-table-layout attack-characteristics">
                        <div class="left">
                            攻击特征：
                        </div>
                        <div class="right">
                            <div style="width: 100%;margin: 0 auto;">
                                <div class="attack-type-select clearfix">
                                    <div style="float: left;margin-bottom: 8px;">
                                        <div class="btn btn-primary attack-select-btn"
                                             @click="attackTypeSelectBtn($event)">全选
                                        </div>
                                        <div class="btn btn-default attack-select-btn"
                                             @click="attackTypeSelectBtn($event)">反选
                                        </div>
                                    </div>
                                </div>

                                <div style="clear: both;"></div>

                                <div class="inline-block select-type" v-for="item in data_attackCharacteristics">
                                    <span class="desc">{{item.type}}</span>
                                    <div class="switch load-switch switch-small inline-block" data-on="info"
                                         data-off="success">
                                        <input type="checkbox" checked/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="common-table-layout">
                        <div class="left">
                            攻击状态：
                        </div>
                        <div class="right">
                            <div class="inline-block" v-for="item in data_attackStatus">
                                <span>{{item.status}}</span>
                                <div class="switch load-switch switch-small inline-block" data-on="info"
                                     data-off="success">
                                    <input type="checkbox" checked/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="common-table-layout">
                        <div class="left">
                            触发阀值：
                        </div>
                        <div class="right">
                            <div class="box">
                                <span class="box-left">成功</span>
                                <input type="text" class="form-control" value="5">
                                <span class="btn btn-primary btn-xs box-set">设置</span>
                                <div class="inline-block" style="margin: 5px 0;"><span
                                        class="label label-success">生效中</span></div>
                            </div>
                            <div class="box">
                                <span class="box-left">可疑</span>
                                <input type="text" class="form-control" value="0">
                                <span class="btn btn-primary btn-xs box-set">设置</span>
                                <div class="inline-block" style="margin: 5px 0;"><span
                                        class="label label-success">生效中</span></div>
                            </div>
                            <div class="box">
                                <span class="box-left">未知</span>
                                <input type="text" class="form-control" value="0">
                                <span class="btn btn-primary btn-xs box-set">设置</span>
                                <div class="inline-block" style="margin: 5px 0;"><span
                                        class="label label-success">生效中</span></div>
                            </div>
                            <div class="box">
                                <span class="box-left">未成功</span>
                                <input type="text" class="form-control" value="0" disabled>
                                <span class="btn btn-primary btn-xs box-set disabled">设置</span>
                                <!--<div class="inline-block" style="margin: 5px 0;"><span class="label label-success">生效中</span></div>-->
                                <div class="inline-block" style="margin: 5px 0;"><span
                                        class="label label-danger">未生效</span></div>
                            </div>
                            <div class="note">
                                * 示例输入：10 代表一段时间内攻击次数达到该数值触发报警
                            </div>
                        </div>
                    </div>
                    <div class="common-table-layout">
                        <div class="left">时间段：</div>
                        <div class="right">
                            <el-select class="select-style-60px select-styleHeight-24px select-no-borderRight" v-model="select_time_start" placeholder="请选择">
                                <el-option
                                        v-for="item in time_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select class="select-style-60px select-styleHeight-24px" v-model="select_time_end" placeholder="请选择">
                                <el-option
                                        v-for="item in time_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <span class="btn btn-primary btn-xs box-set"><i class="fa fa-plus"></i></span>
                            <div style="clear: both;"></div>
                            <div class="note">
                                默认所有时间段发送
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "email-notice",
        data() {
            return {
                data_threatConditions: [
                    {
                        degree: "致命",
                        check: "true"
                    },
                    {
                        degree: "高危",
                        check: "true"
                    },
                    {
                        degree: "中危",
                        check: "true"
                    },
                    {
                        degree: "低危",
                        check: "true"
                    }
                ],
                data_attackStatus: [
                    {
                        status: "成功",
                        check: "true"
                    },
                    {
                        status: "可疑",
                        check: "true"
                    },
                    {
                        status: "未知",
                        check: "true"
                    },
                    {
                        status: "未成功",
                        check: "true"
                    }
                ],
                data_attackCharacteristics: [
                    {
                        type: "信息探测攻击",
                        check: "true"
                    },
                    {
                        type: "数据窃取攻击",
                        check: "true"
                    },
                    {
                        type: "木马病毒攻击",
                        check: "true"
                    },
                    {
                        type: "身份认证攻击",
                        check: "true"
                    },
                    {
                        type: "系统漏洞攻击",
                        check: "true"
                    },
                    {
                        type: "安全配置风险",
                        check: "true"
                    },
                    {
                        type: "配置信息泄露",
                        check: "true"
                    },
                    {
                        type: "文件检测",
                        check: "true"
                    },
                    {
                        type: "植入色情界面",
                        check: "true"
                    },
                    {
                        type: "木马后门",
                        check: "true"
                    },
                    {
                        type: "认证攻击",
                        check: "true"
                    },
                    {
                        type: "黑客指令",
                        check: "true"
                    },
                    {
                        type: "全包分析",
                        check: "true"
                    },
                    {
                        type: "网络设备",
                        check: "true"
                    },
                    {
                        type: "操作系统",
                        check: "true"
                    },
                    {
                        type: "业务系统",
                        check: "true"
                    },
                    {
                        type: "数据库系统",
                        check: "true"
                    },
                    {
                        type: "挖矿",
                        check: "true"
                    },
                    {
                        type: "蠕虫感染",
                        check: "true"
                    },
                    {
                        type: "应用漏洞攻击",
                        check: "true"
                    },
                    {
                        type: "通讯协议攻击",
                        check: "true"
                    },
                    {
                        type: "脚本攻击",
                        check: "true"
                    },
                    {
                        type: "本地溢出",
                        check: "true"
                    },
                    {
                        type: "边界漏洞攻击",
                        check: "true"
                    },
                    {
                        type: "路由交换",
                        check: "true"
                    },
                    {
                        type: "端口探测",
                        check: "true"
                    },
                    {
                        type: "攻击手法检测",
                        check: "true"
                    },
                    {
                        type: "隧道攻击",
                        check: "true"
                    },
                    {
                        type: "黑客工具",
                        check: "true"
                    },
                    {
                        type: "命令执行",
                        check: "true"
                    },
                    {
                        type: "系统破坏攻击",
                        check: "true"
                    },
                    {
                        type: "拒绝服务",
                        check: "true"
                    },
                    {
                        type: "文件窃取",
                        check: "true"
                    },
                    {
                        type: "暴力破解",
                        check: "true"
                    },
                    {
                        type: "信息探测",
                        check: "true"
                    },
                    {
                        type: "远程溢出",
                        check: "true"
                    },
                    {
                        type: "中间件",
                        check: "true"
                    },
                    {
                        type: "特种木马",
                        check: "true"
                    },
                    {
                        type: "异地登陆",
                        check: "true"
                    },
                    {
                        type: "流量劫持",
                        check: "true"
                    },
                    {
                        type: "应用攻击",
                        check: "true"
                    },
                    {
                        type: "权限配置风险",
                        check: "true"
                    },
                    {
                        type: "高危端口",
                        check: "true"
                    },
                    {
                        type: "高危应用",
                        check: "true"
                    }
                ],
                select_time_start: '0点',
                select_time_end: '0点',
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
        },
        mounted() {
            $('.load-switch input').bootstrapSwitch({
                "onColor": 'success', "size": "small", onSwitchChange: function (e, data) {
                    var $el = $(data.el), value = data.value;
                    console.log(e, $el, value);
                }
            });
        },
        methods: {
            /** submitLoading **/
            submitLoading() {
                const loading = this.$loading({
                    lock: true,
                    text: '处理中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    });
                }, 800);
            },

            /** submitLoading **/
            clickAddNewAssets() {
                this.submitLoading();
            },

            /** 全选反选按钮 **/
            attackTypeSelectBtn($event) {
                $('.attack-select-btn').removeClass('btn-primary').addClass('btn-default');
                $event.target.classList.add('btn-primary');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .email-notice {
        margin-top: 15px;
        .panel-title {
            font-size: 14px;
            font-weight: bold;
        }
        .common-table-layout {
            width: 100%;
            padding: 15px 0;
            &:nth-of-type(odd) {
                background: #f5f5f5;
            }
            .btn-height-24px {
                margin-left: -4px;
                padding: 2px 12px;
                border-radius: 0 2px 2px 0;
            }
            .inline-block {
                display: inline-block;
                margin-right: 10px;
            }
            .left {
                width: 100px;
                padding: 0 10px 0 0;
                font-weight: bold;
                text-align: right;
            }
            .right {
                padding: 0 0 0 10px;
                .note {
                    display: inline-block;
                    margin-top: 8px;
                    padding: 2px 8px;
                    border-radius: 4px;
                    color: #c7254e;
                    background-color: #f9f2f4;
                }
                .box {
                    margin: 0 0 10px 0;
                    &:nth-last-child(2) {
                        margin: 0;
                    }
                    .box-left {
                        display: inline-block;
                        width: 60px;
                        height: 24px;
                        padding: 1px 5px;
                        margin-right: -4px;
                        background: #fff;
                        text-align: center;
                        border-radius: 2px 0 0 2px;
                        border: 1px solid rgb(204, 204, 204);
                        border-right: none;
                    }
                    .form-control {
                        display: inline-block;
                        width: 62px;
                        height: 24px;
                        text-align: center;
                        border-radius: 0;
                        border-right: none;
                    }
                    .box-set {
                        display: inline-block;
                        height: 24px;
                        margin: -2px 0 0 -4px;
                        padding: 2px 10px;
                        border-radius: 0 2px 2px 0;
                    }
                }
                .select-style-60px{
                    width: 60px;
                }
                .select-style-60px + .box-set {
                    display: inline-block;
                    height: 24px;
                    margin: 0 0 0 -4px;
                    padding: 2px 10px;
                    border-radius: 0 2px 2px 0;
                }
            }

        }
        .attack-characteristics {
            padding: 30px 0;
            padding-right: 30px;
            .right {
                .attack-type-select {
                    width: 95%;
                    margin-bottom: 20px;
                    border-bottom: 1px dashed #ccc;
                    .attack-select-btn {
                        float: left;
                        cursor: pointer;
                    }
                    .attack-select-btn:nth-child(1) {
                        border-radius: 4px 0 0 4px;
                    }
                    .attack-select-btn:nth-child(2) {
                        border-radius: 0 4px 4px 0;
                    }
                }
                .select-type {
                    width: 176px;
                    height: 30px;
                    margin: 0 25px 15px 0;
                    border-bottom: 1px dashed #ccc;
                    .desc {
                        display: inline-block;
                        min-width: 100px;
                        margin: 0 0 15px 0;
                    }
                    .switch {
                        float: right;
                        margin-right: 0;
                    }
                }
            }
        }
    }


</style>