<template>
    <div>
        <echarts :assets_attacked="true"></echarts>
    </div>
</template>

<script>
    import echarts from '@/components/common/echarts/echarts'
    export default {
        name: "assets-hacker",
        components: {
            echarts
        },
    }
</script>

<style lang="scss" scoped>

</style>