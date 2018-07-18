<template>
    <div>
        <div class="col-sm-6">
            <echarts :global_country="true"></echarts>
        </div>
        <div class="col-sm-6">
            <Table></Table>
        </div>
    </div>
</template>

<script>
    import echarts from '@/components/common/echarts/echarts'
    import Table from '../table/global-country-table'

    export default {
        name: "global-country",
        components: {
            echarts,
            Table
        }
    }
</script>

<style lang="scss" scoped>

</style>