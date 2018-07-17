<template>
    <div>
        <div class="common-box">
            <el-tabs v-model="activeName" type="card">
                <!--邮件通知-->
                <el-tab-pane name="first">
                    <span slot="label">邮件通知</span>
                    <emailNotice></emailNotice>
                </el-tab-pane>

                <!--邮件列表-->
                <el-tab-pane name="second">
                    <span slot="label">邮件列表</span>
                    <emailListTable></emailListTable>
                </el-tab-pane>
                <!--邮件服务器配置-->
                <el-tab-pane name="third">
                    <span slot="label">邮件服务器配置</span>
                    <emailServeConfig></emailServeConfig>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import emailNotice from '../common/notice'
    import emailListTable from './children/email-list-table'
    import emailServeConfig from './children/email-serve-config'

    export default {
        name: "email-warning",
        components: {
            emailNotice,
            emailListTable,
            emailServeConfig
        },
        data() {
            return {
                activeName: 'first'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>