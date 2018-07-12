<template>
    <div>
        <reportChildren :routePath="routePath"></reportChildren>
    </div>
</template>

<script>
    import reportChildren from '../../common/select-date-report'

    export default {
        components: {
            reportChildren
        },
        props: [
            'routePath'
        ],
        data() {
            return {}
        },
        created() {
            // console.log(this.routePath)
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
</style>