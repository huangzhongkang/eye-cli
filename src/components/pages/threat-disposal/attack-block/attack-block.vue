<template>
    <div>
        <div class="common-box">
            <el-tabs v-model="activeName" type="card">
                <!--攻击阻断-->
                <el-tab-pane name="first">
                    <span slot="label">攻击阻断</span>
                    <div class="tab-content">
                        <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                            <i class="fa fa-info-circle"></i> 支持添加&nbsp;&nbsp;固定IP【例：1.2.3.4】、IP段【例：1.2.3.*】、IP掩码【例：1.2.3.4/22】
                        </p>
                        <div class="padding10-20 border-table-wrap">
                            <h1 class="purple-title">阻断IP操作</h1>
                            <el-input class="input-style-300px" placeholder="请输入阻断IP"></el-input>
                            <div style="width: 50%;">
                                <div class="common-table-layout">
                                    <div class="left">
                                        <span class="btn btn-info btn-xs">备注</span>
                                    </div>
                                    <div class="right">
                                        <el-input class="textarea-style-300px" type="textarea" placeholder="最大支持20个英文字符/10个中文字符"></el-input>
                                    </div>
                                </div>
                            </div>
                            <div @click="clickAddBlockIP" class="btn btn-primary btn-sm">添加阻断IP</div>
                            <div class="dash-border">
                                <Table></Table>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import Table from './table/attack-block-table'

    export default {
        name: "attack-block",
        components: {
            Table
        },
        data() {
            return {
                activeName: 'first'
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
            clickAddBlockIP() {
                this.submitLoading();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .padding10-20 {
        padding: 10px 20px;
        .common-table-layout {
            width: 50%;
            height: 100px;
            margin: 20px 0 10px;
            .left {
                width: 10%;
                text-align: center;
            }
            .right {
                width: 100%;
            }
        }
        .dash-border {
            margin: 15px 0;
            padding: 0 10px 20px;
            border: 1px dashed #ddd;
        }
    }
</style>