<template>
  <div class="clearfix">
    <div class="col-md-6 col-sm-6">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">敏感端口 TOP</h3>
        </div>
        <div class="panel-body" style="min-height: 400px;">
          <div id="statis_port">
            <statis_sport_chart :statiscalPort="true"></statis_sport_chart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-sm-6">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">敏感端口 TOP10</h3>
        </div>
        <div class="panel-body" style="min-height: 400px;">
          <div id="statis_dest">
            <statis_sport_chart :statiscalPortTop10="true"></statis_sport_chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import statis_sport_chart from '@/components/common/echarts/echarts'

  export default {
    name: "statiscal",
    components: {
      statis_sport_chart
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .panel-title {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }
</style>
