<template>
  <div class="">
    <div class="col-md-4">
      <p class="alert alert-danger" style="padding:5px;margin-bottom:5px;">
        <i class="fa fa-info-circle"></i> 配置完敏感端口才可以开启威胁通知
      </p>
      <div class="switch switch-large has-switch" data-on="success" data-on-label="开启" data-off-label="关闭" style="margin-top:20px;height:40px;">
        <div class="switch-animate switch-off"><input type="checkbox"><span class="switch-left switch-large switch-success">开启</span><label class="switch-large">&nbsp;</label><span class="switch-right switch-large">关闭</span></div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">禁止使用端口</h3>
        </div>
        <div class="panel-body">
          <div class="tab-content" style="padding: 0;">
            <p class="alert alert-info" style="margin-top:5px;padding:5px;margin-bottom:5px;">
              <i class="fa fa-info-circle"></i> 可批量添加，请以空格，逗号分开或者换行。
            </p>
            <table class="table table-bordered table-striped table-condensed" style="margin-bottom:10px;text-align:center;">
              <tbody><tr>
                <td width="120px;" height="50px;" align="center" style="vertical-align: middle;">端口录入</td>
                <td width="600px" style="padding: 10px;">
                  <textarea id="sensitive_port_input" class="form-control" placeholder="输入禁止使用端口" style="resize:none;height:200px;"></textarea>
                </td>
                <td width="120px;" style="vertical-align: middle;">
                  <a class="btn btn-primary btn-xs" >
                    <i class="fa fa-plus"></i> 添加
                  </a>
                </td>
              </tr>
              </tbody></table>
          </div>
          <div class="tab-content" style="padding: 0;">
            <p class="alert alert-info" style="margin-top:5px;padding:5px;margin-bottom:5px;">
              <i class="fa fa-info-circle"></i> 禁止使用端口列表
            </p>
            <div id="sensitive_port_list">
              <input type="hidden" id="port_type" value="0">
              <table class="table table-bordered table-striped table-condensed" style="margin-bottom:10px;text-align:center;">
                <tbody><tr>
                  <td width="120px;"  align="center" style="vertical-align: middle;">端口列表</td>
                  <td width="600px" style="padding: 10px;">
                  </td>
                  <td width="120px;" style="vertical-align: middle;">
                    <a class="btn btn-danger btn-xs">
                      <i class="fa fa-trash-o" style="font-size: 16px;position:relative;top: 1px;"></i> 删除全部
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">受控使用端口</h3>
        </div>
        <div class="panel-body">
          <div class="tab-content" style="padding: 0;">
            <p class="alert alert-info" style="margin-top:5px;padding:5px;margin-bottom:5px;">
              <i class="fa fa-info-circle"></i> 可批量添加，请以空格，逗号分开或者换行。
            </p>
            <table class="table table-bordered table-striped table-condensed" style="margin-bottom:10px;text-align:center;">
              <tbody><tr>
                <td width="120px;" height="50px;" align="center" style="vertical-align: middle;">端口录入</td>
                <td width="600px" style="padding: 10px;">
                  <textarea id="controlled_port_input" class="form-control" placeholder="输入受控使用端口" style="resize:none;height:200px;"></textarea>
                </td>
                <td width="120px;" style="vertical-align: middle;">
                  <a class="btn btn-primary btn-xs">
                    <i class="fa fa-plus"></i> 添加
                  </a>
                </td>
              </tr>
              </tbody></table>
          </div>
          <div class="tab-content" style="padding: 0;">
            <p class="alert alert-info" style="margin-top:5px;padding:5px;margin-bottom:5px;">
              <i class="fa fa-info-circle"></i> 受控使用端口列表
            </p>
            <div id="controlled_port_list">
              <table width="100%">
                <tbody>
                <tr>
                  <td height="100px;" align="center" valign="middle" style="font-size:20px;line-height:20px;font-weight:bold;vertical-align: middle;">
                    <img src="@/assets/img/tan.png" width="28px;">&nbsp;&nbsp;暂无查询数据
                  </td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "manage",
    mounted () {
        $('.switch input').bootstrapSwitch('onText', '开启').bootstrapSwitch('offText', '关闭').bootstrapSwitch("onColor", 'success').bootstrapSwitch('state', true);
    }
  }
</script>

<style lang="scss" scoped>

</style>