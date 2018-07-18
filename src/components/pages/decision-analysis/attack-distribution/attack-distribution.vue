<template>
    <div>
        <div class="common-box">
            <el-tabs v-model="activeName" type="card">
                <!--全国分布-->
                <el-tab-pane name="first">
                    <span slot="label">全国分布</span>
                    <globalCountry></globalCountry>
                </el-tab-pane>

                <!--全球分布-->
                <el-tab-pane name="second">
                    <span slot="label">全球分布</span>

                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import  globalCountry from './children/global-country'

    export default {
        components: {
            globalCountry
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