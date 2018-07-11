<template>
  <div class="wrap">
    <div class="box">
      <h5 class="purple-title">参数配置</h5>
      <div class="common-table-layout">
        <div class="left">是否请求远程服务器：</div>
        <div class="right">
          <div id="link_zx_fwq" class="switch has-switch" data-on="success" data-off="primary" data-on-label="是" data-off-label="否">
            <div class="switch-on switch-animate"><input type="checkbox"><span class="switch-left switch-success">是</span><label>&nbsp;</label><span class="switch-right switch-primary">否</span></div>
          </div>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">是否屏蔽内网：</div>
        <div class="right">
          <div id="shield_in_net" class="switch has-switch" data-on="success" data-off="primary" data-on-label="是" data-off-label="否">
            <div class="switch-animate switch-off"><input type="checkbox"><span class="switch-left switch-success">是</span><label>&nbsp;</label><span class="switch-right switch-primary">否</span></div>
          </div>
        </div>
      </div>
      <div class="common-table-layout">
        <div class="left">规则模式：</div>
        <div class="right">
          <div id="link_yun_rule" class="switch has-switch" data-on="success" data-off="primary" data-on-label="云规则" data-off-label="本地">
            <div class="switch-animate switch-off"><input type="checkbox"><span class="switch-left switch-success">云规则</span><label>&nbsp;</label><span class="switch-right switch-primary">本地</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "global-rest",
    data() {
      return {
        switch_server: true
      }
    },
    mounted () {
      $('#link_zx_fwq input').bootstrapSwitch();
      $('#shield_in_net input').bootstrapSwitch();
      $('#link_yun_rule input').bootstrapSwitch();
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    padding: 10px 0 0 0;
  }
</style>