<template>
    <div>
        <div class="common-box">
            <el-tabs v-model="activeName" type="card">
                <!--资产黑客数排行-->
                <el-tab-pane name="first">
                    <span slot="label">资产黑客数排行</span>
                    <Hacker></Hacker>

                </el-tab-pane>

                <!--资产被攻击次数排行-->
                <el-tab-pane name="second">
                    <span slot="label">资产被攻击次数排行</span>
                    <Attacked></Attacked>
                </el-tab-pane>

                <!--失陷主机排行-->
                <el-tab-pane name="third">
                    <span slot="label">失陷主机排行</span>
                    <LoseHost></LoseHost>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import Hacker from './children/assets-hacker'
    import Attacked from './children/assets-attacked'
    import LoseHost from './children/lose-host'

    export default {
        components: {
            Hacker,
            Attacked,
            LoseHost
        },
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

</style>