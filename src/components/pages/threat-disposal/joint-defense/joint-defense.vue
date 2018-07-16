<template>
    <div>
        <h1 class="common-title">联动联防</h1>
        <div class="common-box">
            <div class="ibox-content">
                <div class="well">
                    <div style="margin-bottom: 20px;">
                        <b>导出字段：</b>
                        <el-checkbox @change="changeExportCondition">攻击源IP</el-checkbox>
                        <el-checkbox @change="changeExportCondition">攻击起始时间</el-checkbox>
                        <el-checkbox @change="changeExportCondition">攻击结束时间</el-checkbox>
                        <el-checkbox @change="changeExportCondition">资产IP</el-checkbox>
                        <el-checkbox @change="changeExportCondition">攻击类型</el-checkbox>
                        <el-checkbox @change="changeExportCondition">攻击工具</el-checkbox>
                        <el-checkbox @change="changeExportCondition">浏览器语言</el-checkbox>
                    </div>
                    <b>导出格式：</b>
                    <el-select v-model="select_val" class="select-style-100px">
                        <el-option
                                v-for="(item,index) in options_export"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title">默认</h3>
                            </div>
                            <div class="panel-body">
                                <div style="min-height:300px;line-height:50px;">
                                    <div><b>等级说明</b>：系统可能造成误拦截</div>
                                    <div><b>操作人员</b>：普通运维人员</div>
                                    <div><b>安全建议</b>：推荐采用该方式来进行恶意导出</div>
                                </div>
                                <div style="text-align:center;">
                                    <span @click="exportFile"
                                          class="button button-raised button-primary button-pill button-small">导出恶意IP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <h3 class="panel-title">专业</h3>
                            </div>
                            <div class="panel-body">
                                <div style="min-height:300px;line-height:50px;">
                                    <div><b>等级说明</b>：对所有攻击类型进行导出</div>
                                    <div><b>操作人员</b>：高级安全运维人员</div>
                                    <div><b>安全建议</b>：建议高级运维人员进行操作</div>
                                </div>
                                <div style="text-align:center;">
                                    <span @click="exportFile"
                                          class="button button-raised button-primary button-pill button-small">导出恶意IP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h3 class="panel-title">自定义</h3>
                            </div>
                            <div class="panel-body">
                                <div style="min-height:300px;">
                                    <div style="line-height:50px;">
                                        <div><b>等级说明</b>：可自定义任意攻击类型导出</div>
                                        <div><b>操作人员</b>：专业安全运维人员</div>
                                        <div><b>安全建议</b>：专业运维人员操作，该类型拦截效果最佳</div>
                                        <div><b>拦截定义</b>：</div>
                                    </div>
                                    <div class="intercept-box clearfix">
                                        <span v-for="(item, index) in data_interceptDefinition"><el-checkbox
                                                @change="changeCustomCondition">{{item.name}}
                                        </el-checkbox></span>

                                    </div>
                                </div>
                                <div style="text-align:center;">
                                    <span @click="exportFile"
                                          class="button button-raised button-primary button-pill button-small">导出恶意IP</span>
                                </div>
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
        name: "joint-defense",
        data() {
            return {
                select_val: "TXT",
                options_export: [
                    {
                        value: "选项1",
                        label: "TXT"
                    },
                    {
                        value: "选项2",
                        label: "EXCEL"
                    }
                ],
                data_interceptDefinition: [
                    {
                        name: 'WPAD劫持攻击'
                    },
                    {
                        name: 'Tomcat攻击'
                    },
                    {
                        name: 'Struts2攻击'
                    },
                    {
                        name: 'JAVA RMI攻击'
                    },
                    {
                        name: 'JBoss攻击'
                    },
                    {
                        name: 'Weblogic攻击'
                    },
                    {
                        name: 'JAVA反序列攻击'
                    },
                    {
                        name: '挖矿木马植入'
                    },
                    {
                        name: '源代码泄露'
                    },
                    {
                        name: '配置信息泄露'
                    },
                    {
                        name: '目录遍历'
                    },
                    {
                        name: '高危端口'
                    },
                    {
                        name: '高危应用'
                    },
                    {
                        name: '边界设备攻击'
                    },
                    {
                        name: '全包分析'
                    },
                    {
                        name: '黑客工具'
                    },
                    {
                        name: '信息探测'
                    },
                    {
                        name: '拒绝服务攻击'
                    },
                    {
                        name: '植入色情页面'
                    },
                    {
                        name: '扫描器'
                    },
                    {
                        name: '端口探测'
                    },
                    {
                        name: '代理反弹攻击'
                    },
                    {
                        name: ' 端口转发攻击'
                    },
                    {
                        name: '手机木马植入'
                    },
                    {
                        name: ' MacOS木马植入'
                    },
                    {
                        name: 'Linux木马植入'
                    },
                    {
                        name: '文件探测'
                    }
                ]
            }
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

            /** 改变导出条件 **/
            changeExportCondition() {
                this.submitLoading();
            },
            /** 改变自定义条件 **/
            changeCustomCondition() {
                this.submitLoading();
            },

            /** 导出文件 **/
            exportFile() {
                this.submitLoading();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>