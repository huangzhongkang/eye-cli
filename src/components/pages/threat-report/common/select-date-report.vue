<template>
    <div class="wrapper clearfix">
        <div class="box clearfix">
            <div class="left clearfix">
                <ul>
                    <li>本<span v-if="routePath === '安全周报'">周</span><span v-if="routePath === '安全月报'">月</span><span
                            v-if="routePath === '安全季报'">季</span><span v-if="routePath === '安全年报'">年</span>安全评级
                    </li>
                    <li>{{data_reportInfo.level}}</li>
                </ul>
            </div>
            <div class="left right clearfix">
                <ul>
                    <li>本<span v-if="routePath === '安全周报'">周</span><span v-if="routePath === '安全月报'">月</span><span
                            v-if="routePath === '安全季报'">季</span><span v-if="routePath === '安全年报'">年</span>检测黑客数
                    </li>
                    <li>{{data_reportInfo.hacker}}</li>
                    <li>检测出攻击的黑客</li>
                </ul>
                <ul>
                    <li>本<span v-if="routePath === '安全周报'">周</span><span v-if="routePath === '安全月报'">月</span><span
                            v-if="routePath === '安全季报'">季</span><span v-if="routePath === '安全年报'">年</span>检测攻击数
                    </li>
                    <li>{{data_reportInfo.events}}</li>
                    <li>检测出攻击的攻击次数</li>
                </ul>
                <ul>
                    <li>本<span v-if="routePath === '安全周报'">周</span><span v-if="routePath === '安全月报'">月</span><span
                            v-if="routePath === '安全季报'">季</span><span v-if="routePath === '安全年报'">年</span>成功攻击事件
                    </li>
                    <li>{{data_reportInfo.success}}</li>
                    <li>测出出成功攻击的黑客数</li>
                </ul>
            </div>
        </div>
        <echarts :securityWeekly_status="true"></echarts>
    </div>
</template>

<script>
    import echarts from '@/components/common/echarts/echarts'

    export default {
        name: "security-weekly",
        components: {
            echarts
        },
        props: [
            'routePath'
        ],
        data() {
            return {
                data_reportInfo: {}
            }
        },
        created() {
            this.InitReportInfo();
            // console.log(this.routePath)
        },
        methods: {
            InitReportInfo() {
                this.$http.get('../../../../../../static/json/security-weekly/data-reportInfo.json').then(res => {
                    this.data_reportInfo = res.data;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        padding: 30px 50px;
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
    }

</style>