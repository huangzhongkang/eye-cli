<template>
    <!--7.16-->
    <div class=" border-table-wrap">
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
    </div>
</template>

<script>
    export default {
        name: "email-serve-config"
    }
</script>

<style lang="scss" scoped>

</style>