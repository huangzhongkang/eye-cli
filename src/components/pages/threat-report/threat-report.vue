<template>
    <div class="common-box">
        <dropdownMenu :routePath="watchRoutePath"></dropdownMenu>
        <router-view :routePath="watchRoutePath"></router-view>
    </div>
</template>

<script>
    import dropdownMenu from './common/export-dropdown-menu'

    export default {
        components: {
            dropdownMenu
        },
        data() {
            return {
                routePath: ''
            }
        },
        created() {

        },
        computed: {
            watchRoutePath() {
                this.routePath = this.$route.path;
                if (this.$route.path === '/threatReport/currentReport') {
                    this.routePath = '当前报告'
                } else if (this.$route.path === '/threatReport/securityWeeklyReport') {
                    this.routePath = '安全周报'
                } else if (this.$route.path === '/threatReport/securityMonthReport') {
                    this.routePath = '安全月报'
                } else if (this.$route.path === '/threatReport/securitySeasonReport') {
                    this.routePath = '安全季报'
                } else if (this.$route.path === '/threatReport/securityYearReport') {
                    this.routePath = '安全年报'
                }
                return this.routePath;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
