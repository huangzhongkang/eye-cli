<template>
    <div class="border-table-wrap">
        <div class="common-table-layout">
            <div class="left">
                发送模式：
            </div>
            <div class="right">
                <el-radio>POST</el-radio>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left must">
                <i class="fa fa-asterisk"></i>&nbsp;短信URL：
            </div>
            <div class="right">
                <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                    <i class="fa fa-info-circle"></i> 发送短信URL，例如100.100.100.100.php
                </p>
                <el-input class="input-style-80px" value="http://" disabled></el-input>
                <el-input class="input-style-500px" placeholder="输入发送短信URL"></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left">
                短信参数：
            </div>
            <div class="right">
                <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                    <i class="fa fa-info-circle"></i> 短信URL参数，可留空，例如：user=XXX&phone=xxx
                </p>
                <el-input class="input-style-500px" placeholder="输入短信参数，没有可留空"></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left must">
                <i class="fa fa-asterisk"></i>&nbsp;POST参数：
            </div>
            <div class="right">
                <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                    <i class="fa fa-info-circle"></i> POST数据，其中发送内容可用'[msg]'替代，例如message=[msg]&user=XXX&pwd=XXX
                </p>
                <el-input class="input-style-500px" placeholder="输入POST参数"></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left">

            </div>
            <div class="right">
                <span @click="clickSubmit" class="btn btn-primary btn-sm">测试短信配置</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            /** loading **/
            loading() {
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
            clickSubmit() {
                this.loading();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .border-table-wrap{
        margin-top: 15px;
    }
</style>