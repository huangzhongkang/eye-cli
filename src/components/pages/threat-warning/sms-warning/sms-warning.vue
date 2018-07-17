<template>
    <div>
        <div class="common-box">
            <el-tabs v-model="activeName" type="card">
                <!--短信通知-->
                <el-tab-pane name="first">
                    <span slot="label">短信通知</span>
                    <smsNotice></smsNotice>
                </el-tab-pane>

                <!--短信配置-->
                <el-tab-pane name="second">
                    <span slot="label">短信配置</span>
                    <smsConfig></smsConfig>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import smsNotice from '../common/notice'
    import smsConfig from './children/sms-config'
    export default {
        components: {
            smsNotice,
            smsConfig
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