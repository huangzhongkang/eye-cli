<template>
    <div id="app">
        <div class="flex2 clearfix">
            <!--威胁侦测-->
            <div class="box-test clearfix">
                <div class="flex">
                    <div class="btn btn-warning">威胁侦测</div>
                </div>
                <div class="flex">
                    <router-link class="btn btn-default router" to="/">运维视角</router-link>
                </div>
            </div>

            <!--威胁预警-->
            <div class="box-test clearfix">
                <div class="flex">
                    <div class="btn btn-warning">威胁预警</div>
                </div>
                <div class="flex">
                    <router-link class="btn btn-default router" to="/threatWarning/emailWarning">邮件预警</router-link>
                    <router-link class="btn btn-default router" to="/threatWarning/smsWarning">短信预警</router-link>
                </div>
            </div>

            <!--威胁处置-->
            <div class="box-test clearfix">
                <div class="flex">
                    <div class="btn btn-warning">威胁处置</div>
                </div>
                <div class="flex">
                    <router-link class="btn btn-default router" to="/threatDisposal/attackBlock">攻击阻断</router-link>
                    <router-link class="btn btn-default router" to="/threatDisposal/jointDefense">联动联防</router-link>
                </div>
            </div>

            <!--威胁报告-->
            <div class="box-test clearfix">
                <div class="flex">
                    <div class="btn btn-warning">威胁报告</div>
                </div>
                <div class="flex">
                    <router-link class="btn btn-default router" to="/threatReport/currentReport" style="">当前报告
                    </router-link>
                    <router-link class="btn btn-default router" to="/threatReport/securityWeeklyReport" style="">安全周报
                    </router-link>
                    <router-link class="btn btn-default router" to="/threatReport/securityMonthReport" style="">安全月报
                    </router-link>
                    <router-link class="btn btn-default router" to="/threatReport/securitySeasonReport" style="">安全季报
                    </router-link>
                    <router-link class="btn btn-default router" to="/threatReport/securityYearReport" style="">安全年报
                    </router-link>
                </div>
            </div>

            <!--规则配置-->
            <div class="box-test clearfix">
                <div class="flex">
                    <div class="btn btn-warning">规则配置</div>
                </div>
                <div class="flex">
                    <router-link class="btn btn-default router" to="/ruleConfig/ruleManage" style="">规则管理</router-link>
                    <router-link class="btn btn-default router" to="/ruleConfig/ruleStrategy">规则策略</router-link>
                    <router-link class="btn btn-default router" to="/ruleConfig/ruleEntry/ruleCombination">组合规则
                    </router-link>
                    <router-link class="btn btn-default router" to="/ruleConfig/ruleEntry/ruleRequest">请求规则
                    </router-link>
                    <router-link class="btn btn-default router" to="/ruleConfig/ruleEntry/ruleReturn">返回规则</router-link>
                    <router-link class="btn btn-default router" to="/ruleConfig/ruleEntry/ruleCommon">通用规则</router-link>
                    <router-link class="btn btn-default router" to="/ruleConfig/ruleEntry/ruleType">规则类型</router-link>
                    <router-link class="btn btn-default router" to="/ruleConfig/ruleEntry/ruleTool">规则工具</router-link>
                </div>
            </div>

            <!--业务配置-->
            <div class="box-test clearfix">
                <div class="flex">
                    <div class="btn btn-warning">业务配置</div>
                </div>
                <div class="flex">
                    <router-link class="btn btn-default router" to="/assetsConfig/assetsGrouping">资产分组</router-link>
                    <router-link class="btn btn-default router" to="/assetsConfig/assetsNote">资产备注</router-link>
                    <router-link class="btn btn-default router" to="/assetsConfig/manageOperation">管理操作</router-link>
                    <router-link class="btn btn-default router" to="/assetsConfig/globalConfig">全局配置</router-link>
                    <router-link class="btn btn-default router" to="/assetsConfig/sensitivePortConfig">敏感端口配置
                    </router-link>
                </div>
            </div>

            <!--系统配置-->
            <div class="box-test clearfix">
                <div class="flex">
                    <div class="btn btn-warning">系统配置</div>
                </div>
                <div class="flex">
                    <router-link class="btn btn-default router" to="/systemConfig/userManage"
                                 style="margin-left: 50px;">用户管理
                    </router-link>
                    <router-link class="btn btn-default router" to="/systemConfig/factoryConfig">出厂配置</router-link>
                </div>
            </div>
        </div>

        <div style="clear: both;"></div>
        <div class="common-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        mounted() {
        },
    }
</script>

<style lang="scss">
    .box-test {
        float: left;
        width: 280px;
        height: 200px;
        margin: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 0 0 2px #eee;
        .btn {
            margin: 4px;
        }
        .btn-warning {
            margin: 4px 0 4px;
        }
        .flex {
            margin-bottom: 8px;
            flex-wrap: wrap;
        }
    }

    .flex2 {
        height: 80px;
        .router {
            a {
                float: left;
                margin-bottom: 4px;
                text-decoration: none;
            }
        }
    }


</style>
