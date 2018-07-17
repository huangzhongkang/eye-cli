<template>
    <!--7.16-->
    <div class="border-table-wrap">
        <div class="common-table-layout">
            <div class="left must">
                <i class="fa fa-asterisk"></i>&nbsp;发送服务器/SMTP服务器：
            </div>
            <div class="right">
                <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                    <i class="fa fa-info-circle"></i> 电子邮件的发送服务器，可以填写内部搭建的邮件服务器地址或外网发送端地址
                </p>
                <el-input class="input-style-300px" placeholder="输入发送服务器"></el-input>
                <el-checkbox>SSL端口</el-checkbox>
                <el-input class="input-style-80px" disabled></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left must">
                <i class="fa fa-asterisk"></i>&nbsp;发送Email账号：
            </div>
            <div class="right">
                <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                    <i class="fa fa-info-circle"></i> 能够登录该电子邮件的服务器Email账号
                </p>
                <el-input class="input-style-500px" placeholder="输入发送Email地址"></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left must">
                <i class="fa fa-asterisk"></i>&nbsp;发送Email密码：
            </div>
            <div class="right">
                <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                    <i class="fa fa-info-circle"></i> 能够登录该电子邮件的服务器mailL密码
                </p>
                <el-input class="input-style-500px" type="password" placeholder="输入发送Email密码"></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left must">
                <i class="fa fa-asterisk"></i>&nbsp;发送邮件：
            </div>
            <div class="right">
                <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                    <i class="fa fa-info-circle"></i> 作为发送该威胁邮件的发送人邮件
                </p>
                <el-input class="input-style-500px" placeholder="输入发送人邮件"></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left must">
                <i class="fa fa-asterisk"></i>&nbsp;发件人名称：
            </div>
            <div class="right">
                <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                    <i class="fa fa-info-circle"></i> 该威胁邮件的显示的发送人名称
                </p>
                <el-input class="input-style-500px" placeholder="输入发送人名称"></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left must">
                <i class="fa fa-asterisk"></i>&nbsp;接收邮件：
            </div>
            <div class="right">
                <el-input class="textarea-style-500px" type="textarea" placeholder="接收人邮件，输入多个换行"></el-input>
            </div>
        </div>
        <div class="common-table-layout">
            <div class="left">

            </div>
            <div class="right">
                <span @click="clickSubmit" class="btn btn-primary btn-sm">测试邮件服务器</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "email-serve-config",
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